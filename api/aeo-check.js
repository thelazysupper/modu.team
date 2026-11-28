function normalizeHost(raw) {
  const s = String(raw || '').trim().toLowerCase();
  if (!s) return '';
  try {
    const u = new URL(s.startsWith('http') ? s : `https://${s}`);
    return u.hostname.replace(/^www\./, '');
  } catch {
    return s.replace(/^www\./, '').split('/')[0];
  }
}

function findFirstMentionIndex(textLower, terms) {
  let best = -1;
  for (const t of terms) {
    const clean = String(t || '').trim().toLowerCase();
    if (!clean) continue;
    const idx = textLower.indexOf(clean);
    if (idx !== -1 && (best === -1 || idx < best)) {
      best = idx;
    }
  }
  return best;
}

async function runGeminiPrompt(prompt, apiKey) {
  const models = ['gemini-3.8-flash', 'gemini-2.5-flash'];
  let lastErr = '';
  for (const model of models) {
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(apiKey)}`;
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 20000);
    try {
      const r = await fetch(endpoint, {
        method: 'POST',
        signal: controller.signal,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ role: 'user', parts: [{ text: prompt }] }],
          tools: [{ google_search: {} }]
        })
      });
      const data = await r.json();
      if (!r.ok) {
        lastErr = data?.error?.message || `Gemini HTTP ${r.status}`;
        clearTimeout(timer);
        if (/no longer available|not found|not supported/i.test(lastErr)) continue;
        return { error: lastErr, text: '', groundingChunks: [], webSearchQueries: [] };
      }
      const cand = data?.candidates?.[0] || {};
      const parts = cand?.content?.parts || [];
      const text = parts.map(p => p.text || '').join('\n').trim();
      const gm = cand?.groundingMetadata || {};
      const groundingChunks = Array.isArray(gm.groundingChunks) ? gm.groundingChunks : [];
      const webSearchQueries = Array.isArray(gm.webSearchQueries) ? gm.webSearchQueries : [];
      return { text, groundingChunks, webSearchQueries };
    } catch (err) {
      lastErr = err?.message || 'Request failed';
    } finally {
      clearTimeout(timer);
    }
  }
  return { error: lastErr || 'Gemini request failed', text: '', groundingChunks: [], webSearchQueries: [] };
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'Use POST' });

  const body = req.body || {};
  const apiKey = String(body.geminiApiKey || process.env.GEMINI_API_KEY || '').trim();
  if (!apiKey) {
    return res.status(400).json({
      ok: false,
      error: 'Missing GEMINI_API_KEY. Add it to Vercel env vars or paste a free Gemini API key in the scan panel.'
    });
  }

  const primaryDomain = normalizeHost(body.primaryDomain);
  const brandName = String(body.brandName || primaryDomain.split('.')[0] || '').trim();
  const competitorDomains = (Array.isArray(body.competitorDomains)
    ? body.competitorDomains
    : String(body.competitorDomains || '').split(',')
  )
    .map(normalizeHost)
    .filter(Boolean)
    .slice(0, 6);

  const prompts = (Array.isArray(body.prompts)
    ? body.prompts
    : String(body.prompts || '').split(/\r?\n/)
  )
    .map(s => s.trim())
    .filter(Boolean)
    .slice(0, 12);

  if (prompts.length === 0) {
    return res.status(400).json({ ok: false, error: 'Provide at least 1 prompt to run' });
  }

  const entities = [];
  if (primaryDomain || brandName) {
    entities.push({
      label: brandName || primaryDomain,
      domain: primaryDomain,
      isPrimary: true,
      terms: [primaryDomain, brandName].filter(Boolean)
    });
  }
  competitorDomains.forEach(cd => {
    const shortName = cd.split('.')[0];
    entities.push({
      label: cd,
      domain: cd,
      isPrimary: false,
      terms: [cd, shortName].filter(Boolean)
    });
  });

  // Batch 2 prompts at a time with a 1.1s pause to stay well inside Gemini free-tier RPM
  const aeoResults = [];
  for (let i = 0; i < prompts.length; i += 2) {
    const batch = prompts.slice(i, i + 2);
    const batchResponses = await Promise.all(batch.map(p => runGeminiPrompt(p, apiKey)));

    batchResponses.forEach((resp, bIdx) => {
      const prompt = batch[bIdx];
      const textLower = (resp.text || '').toLowerCase();

      // Mention & position calculation
      const hits = [];
      entities.forEach(ent => {
        const idx = findFirstMentionIndex(textLower, ent.terms);
        if (idx !== -1) {
          hits.push({ label: ent.label, domain: ent.domain, isPrimary: ent.isPrimary, index: idx });
        }
      });
      hits.sort((a, b) => a.index - b.index);
      const rankings = hits.map((h, rIdx) => ({
        rank: rIdx + 1,
        label: h.label,
        domain: h.domain,
        isPrimary: h.isPrimary
      }));

      const primaryRankObj = rankings.find(r => r.isPrimary);

      // Categorize citations from groundingChunks
      const citations = [];
      let ownCitations = 0;
      let compCitations = 0;
      let thirdPartyCitations = 0;

      (resp.groundingChunks || []).forEach(chunk => {
        const uri = chunk?.web?.uri || '';
        const title = chunk?.web?.title || '';
        if (!uri) return;
        const host = normalizeHost(uri);
        let category = 'third_party';
        if (primaryDomain && (host === primaryDomain || host.endsWith(`.${primaryDomain}`))) {
          category = 'own';
          ownCitations += 1;
        } else if (competitorDomains.some(cd => host === cd || host.endsWith(`.${cd}`))) {
          category = 'competitor';
          compCitations += 1;
        } else {
          thirdPartyCitations += 1;
        }
        citations.push({ uri, title, domain: host, category });
      });

      const primaryCited = ownCitations > 0;
      const primaryMentioned = Boolean(primaryRankObj);
      const visibilityScore = primaryCited ? 100 : primaryMentioned ? Math.max(40, 95 - (primaryRankObj.rank - 1) * 15) : 0;

      aeoResults.push({
        prompt,
        error: resp.error || '',
        answerPreview: (resp.text || '').slice(0, 600),
        webSearchQueries: resp.webSearchQueries || [],
        rankings,
        primaryRank: primaryRankObj ? primaryRankObj.rank : null,
        primaryMentioned,
        primaryCited,
        visibilityScore,
        citations,
        citationBreakdown: {
          own: ownCitations,
          competitor: compCitations,
          third_party: thirdPartyCitations
        }
      });
    });

    if (i + 2 < prompts.length) {
      await new Promise(r => setTimeout(r, 1100));
    }
  }

  // Share of Voice (%)
  const totalPrompts = aeoResults.length;
  const sovByEntity = entities.map(ent => {
    const mentionedCount = aeoResults.filter(r => r.rankings.some(rk => rk.label === ent.label)).length;
    return {
      label: ent.label,
      domain: ent.domain,
      isPrimary: ent.isPrimary,
      mentionedCount,
      shareOfVoicePct: totalPrompts > 0 ? Math.round((mentionedCount / totalPrompts) * 1000) / 10 : 0
    };
  }).sort((a, b) => b.shareOfVoicePct - a.shareOfVoicePct);

  const citationsSummary = aeoResults.reduce(
    (acc, r) => {
      acc.own += r.citationBreakdown.own;
      acc.competitor += r.citationBreakdown.competitor;
      acc.third_party += r.citationBreakdown.third_party;
      return acc;
    },
    { own: 0, competitor: 0, third_party: 0 }
  );

  return res.status(200).json({
    ok: true,
    created_at: new Date().toISOString(),
    aeo_results: aeoResults,
    share_of_voice: sovByEntity,
    citations_summary: citationsSummary
  });
}
