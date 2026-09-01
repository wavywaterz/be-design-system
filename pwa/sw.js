const C='be-v3';
const A=['./','./index.html','./app.html','./privacy.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./apple-touch-icon.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(A)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==C).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('message',e=>{if(e.data==='SKIP_WAITING')self.skipWaiting()});
// Same-origin GET only. Cache first (offline is the default), refresh in the background so the next open is current. Navigations fall back to the shell.
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET')return;let u;try{u=new URL(r.url)}catch(err){return}if(u.origin!==self.location.origin)return;
e.respondWith(caches.open(C).then(async c=>{const hit=await c.match(r);
const net=fetch(r).then(n=>{if(n&&n.ok)c.put(r,n.clone());return n}).catch(()=>null);
if(hit){net.catch(()=>{});return hit}
const n=await net;if(n)return n;
return r.mode==='navigate'?(await c.match('./index.html'))||Response.error():Response.error();}));});
