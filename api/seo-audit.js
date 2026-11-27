import * as cheerio from 'cheerio';

const AI_BOTS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'PerplexityBot',
  'ClaudeBot',
  'Anthropic-AI',
  'Google-Extended'
];

const STOPWORDS = new Set([
  // Norwegian
  'og', 'i', 'jeg', 'det', 'at', 'en', 'et', 'den', 'til', 'er', 'som', 'på', 'de', 'med', 'han', 'av',
  'ikke', 'der', 'så', 'var', 'meg', 'seg', 'men', 'ett', 'har', 'om', 'vi', 'min', 'mitt', 'ha', 'hadde',
  'hun', 'nå', 'over', 'da', 'ved', 'fra', 'du', 'ut', 'sin', 'dem', 'oss', 'opp', 'man', 'kan', 'hans',
  'hvor', 'eller', 'hva', 'skal', 'selv', 'sjøl', 'her', 'alle', 'vil', 'bli', 'ble', 'blitt', 'kunne',
  'inn', 'når', 'være', 'kom', 'noen', 'noe', 'ville', 'dere', 'som', 'deres', 'kun', 'ja', 'etter', 'ned',
  'skulle', 'denne', 'for', 'deg', 'si', 'sine', 'sitt', 'mot', 'å', 'meget', 'hvorfor', 'dette', 'disse',
  'uten', 'hvordan', 'ingen', 'din', 'ditt', 'blir', 'samme', 'hvilken', 'hvilke', 'sånn', 'inni', 'mellom',
  'vår', 'hver', 'hvem', 'vors', 'hvis', 'både', 'bare', 'enn', 'fordi', 'før', 'mange', 'også', 'slik',
  // English
  'the', 'and', 'for', 'that', 'with', 'you', 'this', 'are', 'from', 'your', 'have', 'was', 'not', 'but',
  'all', 'can', 'our', 'more', 'will', 'how', 'what', 'when', 'where', 'who', 'why', 'into', 'about',
  'than', 'then', 'its', 'they', 'their', 'them', 'been', 'has', 'had', 'out', 'one', 'two', 'use', 'get'
]);

function normalizeDomainInput(raw) {
  const s = String(raw || '').trim();
  if (!s) return null;
  try {
    const u = new URL(s.startsWith('http://') || s.startsWith('https://') ? s : `https://${s}`);
    if (!['http:', 'https:'].includes(u.protocol)) return null;
    return {
      url: u.toString(),
      origin: u.origin,
      host: u.hostname.replace(/^www\./i, '').toLowerCase()
    };
  } catch {
    return null;
  }
}

async function fetchWithTimeout(url, opts = {}, timeoutMs = 8000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { ...opts, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

function parseRobotsTxt(txt, bots) {
  const result = {};
  bots.forEach(b => {
    result[b] = 'allowed';
  });
  let sitemapFromRobots = '';
  if (!txt) return { bots: result, sitemapUrl: '' };

  const lines = txt.split(/\r?\n/);
  let currentAgents = [];
  const rulesByAgent = {};

  for (const rawLine of lines) {
    const line = rawLine.split('#')[0].trim();
    if (!line) continue;
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx).trim().toLowerCase();
    const val = line.slice(colonIdx + 1).trim();

    if (key === 'sitemap' && !sitemapFromRobots && val) {
      sitemapFromRobots = val;
    } else if (key === 'user-agent') {
      currentAgents = [val.toLowerCase()];
      if (!rulesByAgent[val.toLowerCase()]) rulesByAgent[val.toLowerCase()] = [];
    } else if ((key === 'disallow' || key === 'allow') && currentAgents.length > 0) {
      currentAgents.forEach(ag => {
        rulesByAgent[ag].push({ type: key, path: val });
      });
    }
  }

  const wildcardRules = rulesByAgent['*'] || [];
  bots.forEach(bot => {
    const specific = rulesByAgent[bot.toLowerCase()];
    const active = specific && specific.length > 0 ? specific : wildcardRules;
    const blockedRoot = active.some(r => r.type === 'disallow' && (r.path === '/' || r.path === '/*'));
    const explicitAllowRoot = active.some(r => r.type === 'allow' && r.path === '/');
    if (blockedRoot && !explicitAllowRoot) {
      result[bot] = 'disallowed';
    } else if (active.some(r => r.type === 'disallow' && r.path.length > 1)) {
      result[bot] = 'partial';
    } else {
      result[bot] = 'allowed';
    }
  });

  return { bots: result, sitemapUrl: sitemapFromRobots };
}

function extractJsonLdTypes($) {
  const types = new Set();
  $('script[type="application/ld+json"]').each((_, el) => {
    const raw = $(el).contents().text().trim();
    if (!raw) return;
    try {
      const parsed = JSON.parse(raw);
      const visit = node => {
        if (!node) return;
        if (Array.isArray(node)) {
          node.forEach(visit);
          return;
        }
        if (typeof node === 'object') {
          if (node['@type']) {
            if (Array.isArray(node['@type'])) node['@type'].forEach(t => types.add(String(t)));
            else types.add(String(node['@type']));
          }
          if (Array.isArray(node['@graph'])) node['@graph'].forEach(visit);
        }
      };
      visit(parsed);
    } catch {
      // Ignore malformed JSON-LD blocks
    }
  });
  return Array.from(types);
}

async function analyzeDomain(rawInput, { runPageSpeed = false } = {}) {
  const info = normalizeDomainInput(rawInput);
  if (!info) return { domain: String(rawInput || ''), error: 'Invalid domain/URL' };

  const headers = {
    'User-Agent': 'Mozilla/5.0 (compatible; SEOBot/1.0)',
    'Accept': 'text/html,application/xhtml+xml,text/plain,application/xml'
  };

  const [htmlRes, robotsRes, llmsRes, llmsFullRes, waybackRes, psiRes] = await Promise.allSettled([
    fetchWithTimeout(info.url, { redirect: 'follow', headers }, 9000),
    fetchWithTimeout(`${info.origin}/robots.txt`, { redirect: 'follow', headers }, 6000),
    fetchWithTimeout(`${info.origin}/llms.txt`, { redirect: 'follow', headers }, 5000),
    fetchWithTimeout(`${info.origin}/llms-full.txt`, { redirect: 'follow', headers }, 5000),
    fetchWithTimeout(`https://archive.org/wayback/available?url=${encodeURIComponent(info.host)}`, {}, 5000),
    runPageSpeed
      ? fetchWithTimeout(
          `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(info.url)}&strategy=mobile&category=seo&category=performance${process.env.GOOGLE_PAGESPEED_API_KEY ? `&key=${encodeURIComponent(process.env.GOOGLE_PAGESPEED_API_KEY)}` : ''}`,
          {},
          15000
        )
      : Promise.resolve(null)
  ]);

  let onPage = {
    status: 0,
    title: '',
    titleLength: 0,
    description: '',
    descriptionLength: 0,
    canonical: '',
    ogTitle: '',
    ogDescription: '',
    h1: [],
    h2: [],
    h3: [],
    totalImages: 0,
    missingAltImages: 0,
    ssrBodyChars: 0,
    ssrBodyWords: 0,
    isLikelyCSR: false,
    schemas: []
  };

  if (htmlRes.status === 'fulfilled' && htmlRes.value) {
    onPage.status = htmlRes.value.status;
    try {
      const html = await htmlRes.value.text();
      const $ = cheerio.load(html);

      const title = $('title').first().text().replace(/\s+/g, ' ').trim();
      const description = ($('meta[name="description"]').attr('content') || '').replace(/\s+/g, ' ').trim();
      const canonical = ($('link[rel="canonical"]').attr('href') || '').trim();
      const ogTitle = ($('meta[property="og:title"]').attr('content') || '').trim();
      const ogDescription = ($('meta[property="og:description"]').attr('content') || '').trim();

      const h1 = $('h1').map((_, el) => $(el).text().replace(/\s+/g, ' ').trim()).get().filter(Boolean);
      const h2 = $('h2').map((_, el) => $(el).text().replace(/\s+/g, ' ').trim()).get().filter(Boolean);
      const h3 = $('h3').map((_, el) => $(el).text().replace(/\s+/g, ' ').trim()).get().filter(Boolean);

      const totalImages = $('img').length;
      const missingAltImages = $('img:not([alt]), img[alt=""]').length;
      const schemas = extractJsonLdTypes($);

      // SSR vs CSR check: strip <script> and <style> from body and count characters/words
      const $bodyClone = $('body').clone();
      $bodyClone.find('script, style, noscript, svg').remove();
      const bodyText = $bodyClone.text().replace(/\s+/g, ' ').trim();
      const ssrBodyChars = bodyText.length;
      const ssrBodyWords = bodyText ? bodyText.split(/\s+/).length : 0;

      onPage = {
        status: htmlRes.value.status,
        title,
        titleLength: title.length,
        description,
        descriptionLength: description.length,
        canonical,
        ogTitle,
        ogDescription,
        h1: h1.slice(0, 10),
        h2: h2.slice(0, 30),
        h3: h3.slice(0, 30),
        totalImages,
        missingAltImages,
        ssrBodyChars,
        ssrBodyWords,
        isLikelyCSR: ssrBodyChars < 300,
        schemas
      };
    } catch {
      // ignore parse errors
    }
  }

  let robotsTxt = '';
  if (robotsRes.status === 'fulfilled' && robotsRes.value && robotsRes.value.ok) {
    try {
      robotsTxt = await robotsRes.value.text();
    } catch {}
  }
  const parsedRobots = parseRobotsTxt(robotsTxt, AI_BOTS);

  const checkTextFile = async settled => {
    if (settled.status !== 'fulfilled' || !settled.value) return { present: false, status: 0, contentType: '' };
    const r = settled.value;
    const ct = (r.headers.get('content-type') || '').toLowerCase();
    const okType = ct.includes('text/plain') || ct.includes('text/markdown') || ct.includes('text/');
    return { present: r.status === 200 && okType, status: r.status, contentType: ct };
  };

  const [llmsTxt, llmsFullTxt] = await Promise.all([
    checkTextFile(llmsRes),
    checkTextFile(llmsFullRes)
  ]);

  // Sitemap check
  const sitemapTarget = parsedRobots.sitemapUrl || `${info.origin}/sitemap.xml`;
  let sitemap = { url: sitemapTarget, present: false, locCount: 0 };
  try {
    const smRes = await fetchWithTimeout(sitemapTarget, { redirect: 'follow', headers }, 6000);
    if (smRes.ok) {
      const xml = await smRes.text();
      const locs = xml.match(/<loc>/gi);
      sitemap = { url: sitemapTarget, present: true, locCount: locs ? locs.length : 0 };
    }
  } catch {}

  let wayback = { available: false, timestamp: '' };
  if (waybackRes.status === 'fulfilled' && waybackRes.value && waybackRes.value.ok) {
    try {
      const wb = await waybackRes.value.json();
      const closest = wb?.archived_snapshots?.closest;
      if (closest?.available) {
        wayback = { available: true, timestamp: closest.timestamp || '', url: closest.url || '' };
      }
    } catch {}
  }

  let pageSpeed = null;
  if (psiRes.status === 'fulfilled' && psiRes.value && psiRes.value.ok) {
    try {
      const psi = await psiRes.value.json();
      const cats = psi?.lighthouseResult?.categories || {};
      const audits = psi?.lighthouseResult?.audits || {};
      pageSpeed = {
        seoScore: cats.seo?.score != null ? Math.round(cats.seo.score * 100) : null,
        perfScore: cats.performance?.score != null ? Math.round(cats.performance.score * 100) : null,
        lcp: audits['largest-contentful-paint']?.displayValue || '',
        cls: audits['cumulative-layout-shift']?.displayValue || ''
      };
    } catch {}
  }

  return {
    domain: info.host,
    url: info.url,
    onPage,
    aiBots: parsedRobots.bots,
    llmsTxt,
    llmsFullTxt,
    sitemap,
    wayback,
    pageSpeed
  };
}

function tokenizeText(arr) {
  const counts = new Map();
  arr.forEach(str => {
    String(str || '')
      .toLowerCase()
      .replace(/[^\p{L}\p{N}\s-]/gu, ' ')
      .split(/\s+/)
      .forEach(tok => {
        if (tok.length < 3 || STOPWORDS.has(tok) || /^\d+$/.test(tok)) return;
        counts.set(tok, (counts.get(tok) || 0) + 1);
      });
  });
  return counts;
}

function computeContentGaps(primary, competitors) {
  if (!primary || !competitors?.length) return [];
  const primaryTokens = tokenizeText([
    primary.onPage.title,
    primary.onPage.description,
    ...primary.onPage.h1,
    ...primary.onPage.h2,
    ...primary.onPage.h3
  ]);

  const gapScores = new Map();
  const gapExamples = new Map();
  competitors.forEach(comp => {
    const headings = [...(comp.onPage.h2 || []), ...(comp.onPage.h3 || [])];
    const compTokens = tokenizeText([comp.onPage.title, comp.onPage.description, ...headings]);
    compTokens.forEach((cnt, tok) => {
      if (!primaryTokens.has(tok)) {
        gapScores.set(tok, (gapScores.get(tok) || 0) + cnt);
        if (!gapExamples.has(tok)) {
          const sample = headings.find(h => h.toLowerCase().includes(tok));
          if (sample) gapExamples.set(tok, { domain: comp.domain, heading: sample });
        }
      }
    });
  });

  return Array.from(gapScores.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 15)
    .map(([keyword, frequency]) => ({
      keyword,
      frequency,
      exampleHeading: gapExamples.get(keyword)?.heading || '',
      competitor: gapExamples.get(keyword)?.domain || ''
    }));
}

async function fetchGoogleSuggestions(keyword, brandName = '') {
  const kw = String(keyword || '').trim();
  if (!kw) return [];
  const prefixes = [
    kw,
    `hvordan ${kw}`,
    `hva er ${kw}`,
    `beste ${kw}`,
    `pris ${kw}`,
    ...(brandName ? [`${brandName} vs ${kw}`] : [])
  ];
  const results = await Promise.allSettled(
    prefixes.map(async q => {
      const r = await fetchWithTimeout(
        `https://suggestqueries.google.com/complete/search?client=firefox&hl=no&gl=no&q=${encodeURIComponent(q)}`,
        {},
        4500
      );
      if (!r.ok) return [];
      const data = await r.json();
      return Array.isArray(data?.[1]) ? data[1] : [];
    })
  );
  const seen = new Set();
  const out = [];
  results.forEach(r => {
    if (r.status === 'fulfilled') {
      r.value.forEach(s => {
        const clean = String(s || '').trim();
        if (clean && !seen.has(clean.toLowerCase())) {
          seen.add(clean.toLowerCase());
          out.push(clean);
        }
      });
    }
  });
  return out.slice(0, 20);
}

async function fetchDuckDuckGoSerp(keyword) {
  const kw = String(keyword || '').trim();
  if (!kw) return [];
  try {
    const r = await fetchWithTimeout(
      `https://html.duckduckgo.com/html/?q=${encodeURIComponent(kw)}`,
      {
        headers: {
          'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
      },
      7000
    );
    if (!r.ok) return [];
    const html = await r.text();
    const $ = cheerio.load(html);
    const items = [];
    $('.result').each((idx, el) => {
      if (items.length >= 10) return false;
      const a = $(el).find('a.result__a').first();
      const title = a.text().replace(/\s+/g, ' ').trim();
      const href = a.attr('href') || '';
      const snippet = $(el).find('.result__snippet').first().text().replace(/\s+/g, ' ').trim();
      if (title && href) {
        let domain = '';
        try {
          domain = new URL(href.startsWith('//') ? `https:${href}` : href).hostname.replace(/^www\./i, '');
        } catch {}
        items.push({ rank: items.length + 1, title, url: href, domain, snippet });
      }
    });
    return items;
  } catch {
    return [];
  }
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const body = req.method === 'POST' ? (req.body || {}) : (req.query || {});
  const primaryDomain = String(body.primaryDomain || body.url || '').trim();
  const competitorDomains = Array.isArray(body.competitorDomains)
    ? body.competitorDomains
    : String(body.competitorDomains || '')
        .split(',')
        .map(s => s.trim())
        .filter(Boolean);
  const keyword = String(body.keyword || body.query || '').trim();
  const brandName = String(body.brandName || '').trim();
  const runPageSpeed = Boolean(body.runPageSpeed === true || body.runPageSpeed === 'true');

  if (!primaryDomain) {
    return res.status(400).json({ ok: false, error: 'Missing primaryDomain' });
  }

  const uniqueCompetitors = competitorDomains.slice(0, 5);
  const [domainResults, suggestions, serp] = await Promise.all([
    Promise.allSettled([
      analyzeDomain(primaryDomain, { runPageSpeed }),
      ...uniqueCompetitors.map(d => analyzeDomain(d, { runPageSpeed }))
    ]),
    keyword ? fetchGoogleSuggestions(keyword, brandName) : Promise.resolve([]),
    keyword ? fetchDuckDuckGoSerp(keyword) : Promise.resolve([])
  ]);

  const domains = domainResults
    .filter(r => r.status === 'fulfilled' && r.value)
    .map(r => r.value);

  const primary = domains[0] || null;
  const competitors = domains.slice(1);

  const primarySchemas = new Set((primary?.onPage?.schemas || []).map(s => s.toLowerCase()));
  const competitorSchemaMap = new Map();
  competitors.forEach(c => {
    (c.onPage?.schemas || []).forEach(s => {
      if (!primarySchemas.has(s.toLowerCase())) {
        if (!competitorSchemaMap.has(s)) competitorSchemaMap.set(s, []);
        competitorSchemaMap.get(s).push(c.domain);
      }
    });
  });

  const missingSchemas = Array.from(competitorSchemaMap.entries()).map(([schema, usedBy]) => ({
    schema,
    usedBy
  }));

  const contentGaps = computeContentGaps(primary, competitors);

  return res.status(200).json({
    ok: true,
    created_at: new Date().toISOString(),
    seo_comparison: domains,
    missing_schemas: missingSchemas,
    content_gaps: contentGaps,
    keyword_suggestions: suggestions,
    serp_results: serp
  });
}
