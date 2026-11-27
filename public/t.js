(function () {
  if (typeof window === 'undefined' || window.__moduTrackerLoaded) return;
  window.__moduTrackerLoaded = true;

  var scriptEl = document.currentScript;
  var customDomain = scriptEl && scriptEl.getAttribute('data-domain');
  var customEndpoint = scriptEl && scriptEl.getAttribute('data-endpoint');

  var origin = '';
  try {
    origin = scriptEl && scriptEl.src ? new URL(scriptEl.src).origin : window.location.origin;
  } catch (e) {
    origin = window.location.origin;
  }
  var endpoint = customEndpoint || (origin + '/api/collect');
  var domain = (customDomain || window.location.hostname || '').toLowerCase().replace(/^www\./, '');
  if (!domain) return;

  var sidKey = '_modu_sid';
  var sid = '';
  try {
    sid = sessionStorage.getItem(sidKey) || '';
    if (!sid) {
      sid = Math.random().toString(36).slice(2) + Date.now().toString(36);
      sessionStorage.setItem(sidKey, sid);
    }
  } catch (e) {
    sid = Math.random().toString(36).slice(2);
  }

  var startTs = Date.now();
  var sentDuration = false;

  function getDeviceType() {
    var w = window.innerWidth || 1024;
    if (w < 768) return 'Mobile';
    if (w < 1024) return 'Tablet';
    return 'Desktop';
  }

  function sendPayload(payload) {
    var body = JSON.stringify(payload);
    if (navigator.sendBeacon) {
      try {
        var blob = new Blob([body], { type: 'text/plain;charset=UTF-8' });
        if (navigator.sendBeacon(endpoint, blob)) return;
      } catch (e) {}
    }
    try {
      fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: body,
        keepalive: true,
        mode: 'cors'
      }).catch(function () {});
    } catch (e) {}
  }

  function trackPageview() {
    startTs = Date.now();
    sentDuration = false;
    sendPayload({
      type: 'pageview',
      domain: domain,
      path: window.location.pathname || '/',
      title: document.title || '',
      referrer: document.referrer || '',
      search: window.location.search || '',
      device: getDeviceType(),
      sid: sid
    });
  }

  function sendDuration() {
    if (sentDuration) return;
    sentDuration = true;
    var sec = Math.max(1, Math.min(3600, Math.round((Date.now() - startTs) / 1000)));
    sendPayload({
      type: 'duration',
      domain: domain,
      path: window.location.pathname || '/',
      durationSec: sec,
      sid: sid
    });
  }

  trackPageview();

  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') sendDuration();
  });
  window.addEventListener('pagehide', sendDuration);
})();
