// let cacheData = "gaurang";

// this.addEventListener("install", (event) => {
//   event.waitUntil(
//     caches.open(cacheData).then((cache) => {
//       cache.addAll([
//         "/static/js/custom.js",
//         "/static/js/jquery-3.2.1.min.js",
//         "/index.html",
//         "/",
//       ]);
//     })
//   );
// });

// this.addEventListener("fetch", (event) => {
//   event.respondWith(
//     caches.match(event.request).then((result) => {
//       if (result) {
//         return result;
//       }
//     })
//   );
// });
