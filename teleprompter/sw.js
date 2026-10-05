/* Follow Teleprompter — offline cache (Apache-2.0).
   NETWORK-FIRST: when online you always get the latest version (and the cache
   is refreshed in the background); when offline it falls back to the cached
   copy so manual scroll + record still work with no connection. */
var CACHE='flp-v8';
var ASSETS=['./','./index.html','./manifest.json','./icon-192.png','./icon-512.png','./icon-maskable-512.png'];
self.addEventListener('install',function(e){
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(function(c){ return c.addAll(ASSETS); }).catch(function(){}));
});
self.addEventListener('activate',function(e){
  e.waitUntil(caches.keys().then(function(keys){
    return Promise.all(keys.map(function(k){ if(k!==CACHE) return caches.delete(k); }));
  }).then(function(){ return self.clients.claim(); }));
});
self.addEventListener('fetch',function(e){
  if(e.request.method!=='GET') return;
  var url=new URL(e.request.url);
  if(url.origin!==self.location.origin) return; // never touch cross-origin (speech service etc.)
  // Network-first: try the network, cache a fresh copy, fall back to cache when offline.
  e.respondWith(
    fetch(e.request).then(function(resp){
      if(resp && resp.status===200 && resp.type==='basic'){
        var copy=resp.clone(); caches.open(CACHE).then(function(c){ c.put(e.request,copy); });
      }
      return resp;
    }).catch(function(){
      return caches.match(e.request).then(function(hit){ return hit || caches.match('./index.html'); });
    })
  );
});
