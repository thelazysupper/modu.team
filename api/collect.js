import crypto from 'node:crypto';

function setCors(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

function normalizeDomain(raw) {
  return String(raw || '')
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\//, '')
    .replace(/^www\./, '')
    .split('/')[0]
    .split(':')[0];
}

function classifyTrafficChannel(referrerRaw, searchRaw, currentDomain) {
  let refHost = '';
  if (referrerRaw) {
    try {
      const u = new URL(referrerRaw);
      refHost = u.hostname.toLowerCase().replace(/^www\./, '');
    } catch {
      refHost = '';
    }
  }
  const params = new URLSearchParams(String(searchRaw || '').replace(/^\?/, ''));
  const utmMed = (params.get('utm_medium') || '').toLowerCase();
  const hasAdClick = params.has('gclid') || params.has('fbclid') || params.has('msclkid') || params.has('ttclid');

  if (hasAdClick || ['cpc', 'ppc', 'paid', 'paid_social', 'display', 'sem'].includes(utmMed)) {
    return { channel: 'paid', refHost: refHost || params.get('utm_source') || 'paid' };
  }
  if (!refHost || refHost === currentDomain) {
    return { channel: 'direct', refHost: '' };
  }
  if (/(chatgpt\.com|chat\.openai\.com|perplexity\.ai|claude\.ai|gemini\.google\.com|copilot\.microsoft\.com|you\.com|phind\.com|poe\.com)/i.test(refHost)) {
    return { channel: 'ai', refHost };
  }
  if (/(^|\.)(google\.|bing\.com|duckduckgo\.com|yahoo\.|ecosia\.org|kagi\.com|search\.brave\.com|yandex\.|baidu\.com)/i.test(refHost)) {
    return { channel: 'search', refHost };
  }
  if (/(linkedin\.com|lnkd\.in|facebook\.com|fb\.com|instagram\.com|x\.com|twitter\.com|t\.co|tiktok\.com|reddit\.com|youtube\.com|youtu\.be|threads\.net)/i.test(refHost)) {
    return { channel: 'social', refHost };
  }
  return { channel: 'referral', refHost };
}

function getSupabaseEnv() {
  const url = process.env.SUPABASE_URL || process.env.PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.VITE_SUPABASE_URL || '';
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || process.env.PUBLIC_SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY || '';
  return { url: url.replace(/\/$/, ''), key };
}

export default async function handler(req, res) {
  setCors(res);
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'Method not allowed' });

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { body = {}; }
  }
  body = body || {};

  const domain = normalizeDomain(body.domain || req.headers.host);
  if (!domain) return res.status(400).json({ ok: false, error: 'Missing domain' });

  const eventType = body.type === 'duration' ? 'duration' : 'pageview';
  const path = String(body.path || '/').slice(0, 300);
  const title = String(body.title || '').slice(0, 200);
  const device = ['Desktop', 'Mobile', 'Tablet'].includes(body.device) ? body.device : 'Desktop';
  const sessionId = String(body.sid || '').slice(0, 80) || crypto.randomUUID();
  const country = String(req.headers['x-vercel-ip-country'] || req.headers['cf-ipcountry'] || 'Unknown').slice(0, 8);

  const ip = String(req.headers['x-forwarded-for'] || req.socket?.remoteAddress || '0.0.0.0').split(',')[0].trim();
  const ua = String(req.headers['user-agent'] || '');
  const dayKey = new Date().toISOString().slice(0, 10);
  const visitorId = crypto.createHash('sha256').update(`${ip}|${ua}|${domain}|${dayKey}`).digest('hex').slice(0, 24);

  const { channel, refHost } = classifyTrafficChannel(body.referrer, body.search, domain);
  const durationSec = eventType === 'duration' ? Math.max(1, Math.min(3600, Number(body.durationSec) || 0)) : 0;

  const row = {
    domain,
    event_type: eventType,
    path,
    title,
    channel,
    referrer_host: refHost,
    device,
    country,
    visitor_id: visitorId,
    session_id: sessionId,
    duration_sec: durationSec,
    created_at: new Date().toISOString()
  };

  if (!globalThis.__moduTrafficMem) globalThis.__moduTrafficMem = [];
  globalThis.__moduTrafficMem.push(row);
  if (globalThis.__moduTrafficMem.length > 2000) {
    globalThis.__moduTrafficMem.splice(0, globalThis.__moduTrafficMem.length - 2000);
  }

  const { url, key } = getSupabaseEnv();
  if (!url || !key) {
    return res.status(200).json({ ok: true, stored: 'memory', setupRequired: true });
  }

  try {
    const r = await fetch(`${url}/rest/v1/traffic_events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: key,
        Authorization: `Bearer ${key}`,
        Prefer: 'return=minimal'
      },
      body: JSON.stringify(row)
    });
    if (!r.ok) {
      const errTxt = await r.text();
      return res.status(200).json({ ok: true, stored: 'memory', setupRequired: true, detail: errTxt.slice(0, 200) });
    }
    return res.status(200).json({ ok: true, stored: 'supabase' });
  } catch (err) {
    return res.status(200).json({ ok: true, stored: 'memory', setupRequired: true, detail: err?.message });
  }
}
