function normalizeDomain(raw) {
  return String(raw || '')
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\//, '')
    .replace(/^www\./, '')
    .split('/')[0]
    .split(':')[0];
}

function getSupabaseEnv() {
  const url = process.env.SUPABASE_URL || process.env.PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.VITE_SUPABASE_URL || '';
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || process.env.SUPABASE_PUBLISHABLE_KEY || process.env.PUBLIC_SUPABASE_ANON_KEY || process.env.PUBLIC_SUPABASE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY || '';
  return { url: url.replace(/\/$/, ''), key };
}

function getRangeDays(range) {
  if (range === '7d') return 7;
  if (range === '90d') return 90;
  if (range === '12m') return 365;
  return 30;
}

function getCountryName(code) {
  const map = {
    NO: 'Norway', SE: 'Sweden', DK: 'Denmark', FI: 'Finland',
    US: 'United States', GB: 'United Kingdom', DE: 'Germany',
    FR: 'France', NL: 'Netherlands', CA: 'Canada', AU: 'Australia'
  };
  return map[code] || (code && code !== 'Unknown' ? code : 'Unknown');
}

function aggregateTrafficRows(rows, range) {
  const pageviews = rows.filter(r => r.event_type !== 'duration');
  const durations = rows.filter(r => r.event_type === 'duration' && r.duration_sec > 0);

  const totalVisits = pageviews.length;
  const visitors = new Set(pageviews.map(r => r.visitor_id).filter(Boolean));
  const sessions = {};
  pageviews.forEach(r => {
    const sid = r.session_id || r.visitor_id || String(Math.random());
    if (!sessions[sid]) sessions[sid] = { count: 0, duration: 0 };
    sessions[sid].count += 1;
  });
  durations.forEach(r => {
    const sid = r.session_id;
    if (sid && sessions[sid]) {
      sessions[sid].duration = Math.max(sessions[sid].duration, Number(r.duration_sec) || 0);
    }
  });

  const sessionVals = Object.values(sessions);
  const sessionCount = sessionVals.length;
  const singlePageSessions = sessionVals.filter(s => s.count <= 1).length;
  const bounceRate = sessionCount > 0 ? Number(((singlePageSessions / sessionCount) * 100).toFixed(1)) : 0;
  const pagesPerSession = sessionCount > 0 ? Number((totalVisits / sessionCount).toFixed(1)) : 0;
  const durSessions = sessionVals.filter(s => s.duration > 0);
  const avgDurationSec = durSessions.length > 0
    ? Math.round(durSessions.reduce((a, s) => a + s.duration, 0) / durSessions.length)
    : 0;

  const channels = { direct: 0, ai: 0, referral: 0, paid: 0, social: 0, search: 0 };
  const pageMap = {};
  const deviceMap = { Desktop: 0, Mobile: 0, Tablet: 0 };
  const countryMap = {};
  const refMap = {};

  pageviews.forEach(r => {
    const ch = channels[r.channel] !== undefined ? r.channel : 'direct';
    channels[ch] += 1;

    const pKey = r.path || '/';
    if (!pageMap[pKey]) pageMap[pKey] = { path: pKey, title: r.title || pKey, visits: 0, sessions: new Set() };
    pageMap[pKey].visits += 1;
    if (r.title && !pageMap[pKey].title) pageMap[pKey].title = r.title;
    if (r.session_id) pageMap[pKey].sessions.add(r.session_id);

    const dev = deviceMap[r.device] !== undefined ? r.device : 'Desktop';
    deviceMap[dev] += 1;

    const cName = getCountryName(r.country);
    countryMap[cName] = (countryMap[cName] || 0) + 1;

    if (r.referrer_host) {
      const refKey = `${r.referrer_host}|${ch}`;
      if (!refMap[refKey]) refMap[refKey] = { source: r.referrer_host, type: ch, visits: 0 };
      refMap[refKey].visits += 1;
    }
  });

  const topPages = Object.values(pageMap)
    .sort((a, b) => b.visits - a.visits)
    .slice(0, 8)
    .map(p => {
      const pSessions = Array.from(p.sessions);
      const pDurs = pSessions.map(sid => sessions[sid]?.duration || 0).filter(d => d > 0);
      const pAvgSec = pDurs.length ? Math.round(pDurs.reduce((a, b) => a + b, 0) / pDurs.length) : avgDurationSec;
      const pBounces = pSessions.filter(sid => (sessions[sid]?.count || 1) <= 1).length;
      const pBounce = pSessions.length ? Number(((pBounces / pSessions.length) * 100).toFixed(1)) : bounceRate;
      return { path: p.path, title: p.title, visits: p.visits, avgSec: pAvgSec, bounce: pBounce };
    });

  const devices = [
    { label: 'Desktop', count: deviceMap.Desktop, color: '#0f172a' },
    { label: 'Mobile', count: deviceMap.Mobile, color: '#2563eb' },
    { label: 'Tablet', count: deviceMap.Tablet, color: '#94a3b8' }
  ].map(d => ({
    label: d.label,
    pct: totalVisits > 0 ? Math.round((d.count / totalVisits) * 100) : 0,
    color: d.color
  }));

  const countries = Object.entries(countryMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([name, cnt]) => ({ name, pct: totalVisits > 0 ? Math.round((cnt / totalVisits) * 100) : 0 }));

  const chLabelMap = { direct: 'Direct', ai: 'AI Traffic', referral: 'Referral', paid: 'Paid', social: 'Social', search: 'Search' };
  const referrers = Object.values(refMap)
    .sort((a, b) => b.visits - a.visits)
    .slice(0, 6)
    .map(r => ({ source: r.source, type: chLabelMap[r.type] || 'Referral', visits: r.visits }));

  // Build time buckets for trend chart
  const days = getRangeDays(range);
  const bucketCount = range === '7d' ? 7 : range === '12m' ? 12 : 8;
  const now = Date.now();
  const spanMs = days * 86400 * 1000;
  const startMs = now - spanMs;
  const stepMs = spanMs / bucketCount;

  const labels = [];
  const buckets = [];
  for (let i = 0; i < bucketCount; i++) {
    const t = new Date(startMs + (i + 0.5) * stepMs);
    labels.push(
      range === '12m'
        ? t.toLocaleDateString('en-US', { month: 'short' })
        : t.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    );
    buckets.push({ direct: 0, ai: 0, referral: 0, paid: 0, social: 0, search: 0 });
  }

  pageviews.forEach(r => {
    const ts = new Date(r.created_at).getTime();
    if (isNaN(ts)) return;
    let bIdx = Math.floor((ts - startMs) / stepMs);
    if (bIdx < 0) bIdx = 0;
    if (bIdx >= bucketCount) bIdx = bucketCount - 1;
    const ch = channels[r.channel] !== undefined ? r.channel : 'direct';
    buckets[bIdx][ch] += 1;
  });

  return {
    totalVisits,
    uniqueVisitors: visitors.size,
    avgDurationSec,
    pagesPerSession,
    bounceRate,
    channels,
    trend: { labels, buckets },
    topPages,
    devices,
    countries,
    referrers
  };
}

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ ok: false, error: 'Method not allowed' });

  const domain = normalizeDomain(req.query?.domain);
  const range = String(req.query?.range || '30d');
  if (!domain) return res.status(400).json({ ok: false, error: 'Missing domain' });

  const days = getRangeDays(range);
  const sinceIso = new Date(Date.now() - days * 86400 * 1000).toISOString();

  const { url, key } = getSupabaseEnv();
  let rows = [];
  let setupRequired = false;
  let storage = 'supabase';
  let errorDetail = '';

  if (url && key) {
    try {
      const q = `${url}/rest/v1/traffic_events?domain=eq.${encodeURIComponent(domain)}&created_at=gte.${encodeURIComponent(sinceIso)}&select=event_type,path,title,channel,referrer_host,device,country,visitor_id,session_id,duration_sec,created_at&order=created_at.asc&limit=5000`;
      const r = await fetch(q, {
        headers: { apikey: key, Authorization: `Bearer ${key}` }
      });
      if (r.ok) {
        rows = await r.json();
      } else {
        setupRequired = true;
        storage = 'memory';
        errorDetail = `Supabase HTTP ${r.status}: ${(await r.text()).slice(0, 140)}`;
      }
    } catch (err) {
      setupRequired = true;
      storage = 'memory';
      errorDetail = err?.message || 'Supabase fetch failed';
    }
  } else {
    setupRequired = true;
    storage = 'memory';
    errorDetail = 'Missing SUPABASE_URL / SUPABASE_ANON_KEY in Vercel env vars';
  }

  if (setupRequired) {
    const mem = globalThis.__moduTrafficMem || [];
    rows = mem.filter(r => r.domain === domain && r.created_at >= sinceIso);
  }

  const agg = aggregateTrafficRows(rows, range);
  return res.status(200).json({
    ok: true,
    domain,
    range,
    storage,
    setupRequired,
    errorDetail,
    hasEvents: agg.totalVisits > 0,
    ...agg
  });
}
