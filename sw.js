// PIPPS Point of Sale has been retired.
//
// The old version of this file saved copies of the site's pages in visitors'
// browsers. This replacement does the opposite: when a returning visitor's
// browser picks it up, it deletes those saved copies and then removes itself,
// so nobody keeps seeing the old pages.

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.map((key) => caches.delete(key))))
      .then(() => self.registration.unregister())
  );
});
