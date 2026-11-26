export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const rawUrl = String(req.query?.url || '').trim();
  if (!rawUrl) {
    return res.status(400).json({ ok: false, error: 'Missing url parameter' });
  }

  let parsed;
  try {
    parsed = new URL(rawUrl.startsWith('http') ? rawUrl : `https://${rawUrl}`);
    if (!['http:', 'https:'].includes(parsed.protocol)) {
      throw new Error('Invalid protocol');
    }
  } catch {
    return res.status(400).json({ ok: false, error: 'Invalid URL' });
  }

  const host = parsed.hostname.toLowerCase();
  const pathParts = parsed.pathname.split('/').filter(Boolean);
  let platform = 'Other';
  if (host.includes('linkedin.com')) platform = 'LinkedIn';
  else if (host.includes('instagram.com')) platform = 'Instagram';
  else if (host.includes('facebook.com') || host.includes('fb.com')) platform = 'Meta / Facebook';
  else if (host.includes('tiktok.com')) platform = 'TikTok';
  else if (host.includes('youtube.com') || host.includes('youtu.be')) platform = 'YouTube';
  else if (host.includes('twitter.com') || host.includes('x.com')) platform = 'X / Twitter';

  const fallbackLogo = `https://www.google.com/s2/favicons?domain=${encodeURIComponent(parsed.hostname)}&sz=128`;
  const fallbackName = pathParts[pathParts.length - 1] || parsed.hostname.replace(/^www\./, '');

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 6000);

  try {
    const response = await fetch(parsed.toString(), {
      redirect: 'follow',
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; ModuBot/1.0; +https://modu.team)',
        'Accept': 'text/html,application/xhtml+xml',
        'Accept-Language': 'en-US,en;q=0.9'
      }
    });
    clearTimeout(timer);

    const html = await response.text();
    const pickMeta = (prop) => {
      const re1 = new RegExp(`<meta[^>]+(?:property|name)=["']${prop}["'][^>]+content=["']([^"']+)["']`, 'i');
      const re2 = new RegExp(`<meta[^>]+content=["']([^"']+)["'][^>]+(?:property|name)=["']${prop}["']`, 'i');
      return (html.match(re1)?.[1] || html.match(re2)?.[1] || '').trim();
    };

    const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i)?.[1]?.trim() || '';
    const ogTitle = pickMeta('og:title') || pickMeta('twitter:title') || titleMatch;
    const ogDesc = pickMeta('og:description') || pickMeta('description') || pickMeta('twitter:description') || '';
    const ogImage = pickMeta('og:image') || pickMeta('twitter:image') || '';

    const combinedText = `${ogTitle} ${ogDesc} ${html.slice(0, 60000)}`;
    const followersMatch =
      combinedText.match(/([\d.,]+\s*[KMBkmb]?)\s+followers?/i)?.[1] ||
      combinedText.match(/([\d.,]+\s*[KMBkmb]?)\s+subscribers?/i)?.[1] ||
      html.match(/"followerCount"\s*:\s*(\d+)/i)?.[1] ||
      html.match(/"edge_followed_by"\s*:\s*\{\s*"count"\s*:\s*(\d+)/i)?.[1] ||
      '';

    const postsMatch =
      combinedText.match(/([\d.,]+\s*[KMBkmb]?)\s+(?:posts?|tweets?|videos?|updates?)/i)?.[1] ||
      html.match(/"edge_owner_to_timeline_media"\s*:\s*\{\s*"count"\s*:\s*(\d+)/i)?.[1] ||
      '';

    const cleanName = ogTitle
      .replace(/\s*[|\-•·]\s*(LinkedIn|Instagram|Facebook|TikTok|YouTube|X|Twitter).*$/i, '')
      .trim() || fallbackName;

    return res.status(200).json({
      ok: true,
      url: parsed.toString(),
      platform,
      name: cleanName,
      logo: ogImage || fallbackLogo,
      followers: followersMatch ? String(followersMatch).trim() : '',
      posts: postsMatch ? String(postsMatch).trim() : '',
      bio: ogDesc.slice(0, 180),
      fetchedAt: new Date().toISOString()
    });
  } catch (err) {
    clearTimeout(timer);
    return res.status(200).json({
      ok: true,
      partial: true,
      url: parsed.toString(),
      platform,
      name: fallbackName,
      logo: fallbackLogo,
      followers: '',
      posts: '',
      bio: '',
      fetchedAt: new Date().toISOString()
    });
  }
}
