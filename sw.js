/* Bei jeder Änderung an Rezepten, Bildern oder App-Dateien VERSION erhöhen.
   Neue Rezeptbilder außerdem in FILES aufnehmen, damit sie sofort offline sind. */
'use strict';
const VERSION = 'v8';
// Der Scope schützt andere GitHub-Pages-Projekte auf demselben Host.
const PREFIX = `kochbuch:${self.registration.scope}:`;
const CACHE = `${PREFIX}${VERSION}`;
const FILES = [
  './', './index.html', './styles.css', './app.js', './pwa.js', './recipes.js',
  './manifest.webmanifest', './assets/kitchen.svg', './assets/kokosmakronen.svg', './assets/aperol-plaetzchen.svg', './assets/zitronenkekse.svg', './assets/icon-192.png',
  './assets/icon-512.png', './assets/icon-maskable-512.png', './assets/apple-touch-icon.png'
];
self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    // Keine teilweise installierte Version aktivieren.
    await cache.addAll(FILES.map(path => new Request(new URL(path, self.registration.scope), { cache: 'reload' })));
  })());
});
// Updates warten, bis alle alten Kochbuchfenster geschlossen wurden.
// So bleiben HTML, JavaScript und Rezeptdaten auf demselben Versionsstand.
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.filter(name => name.startsWith(PREFIX) && name !== CACHE).map(name => caches.delete(name)));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET' || !url.href.startsWith(self.registration.scope)) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    // Suchparameter an der Startadresse dürfen Offline-Starts nicht verhindern.
    if (event.request.mode === 'navigate' && (url.pathname === new URL(self.registration.scope).pathname || url.pathname === new URL('index.html', self.registration.scope).pathname)) {
      return await cache.match(new URL('index.html', self.registration.scope)) || fetch(event.request);
    }
    const cached = await cache.match(event.request);
    if (cached) return cached;
    try {
      const response = await fetch(event.request);
      // Zusätzliche lokale Rezeptfotos nach dem ersten Aufruf offline bereithalten.
      if (response.ok && event.request.destination === 'image') await cache.put(event.request, response.clone());
      return response;
    } catch {
      return Response.error();
    }
  })());
});
