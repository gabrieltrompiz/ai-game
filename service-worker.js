"use strict";var precacheConfig=[["/ai-game/index.html","baabc27dcf710cbc669d9367981b2e4c"],["/ai-game/static/css/main.d4547e3f.css","95d63147381b7e5225834115ea37445d"],["/ai-game/static/js/main.b7f09f58.js","d75a7f50e475c8c4e7e889269c5c5111"],["/ai-game/static/media/bowser.ff0b432a.png","ff0b432a0b63514d582d935736e13796"],["/ai-game/static/media/emerald.4e0e2133.png","4e0e213381ba8b03cade07fa48b7dcb3"],["/ai-game/static/media/mario.eb296804.png","eb296804d25229b9df89730781eadcf5"],["/ai-game/static/media/metroidLogo.f23abdb5.png","f23abdb545aefa690de09673eff3e286"],["/ai-game/static/media/metroidsuper.9d5f87d8.png","9d5f87d8aed399a1ecd4b3c10d32e4f8"],["/ai-game/static/media/misc.5ae47da3.png","5ae47da328dc1c6e3072cb3706d3507f"],["/ai-game/static/media/mushroom.2261d2a9.png","2261d2a900530d70be9b57cb51a1d6b5"],["/ai-game/static/media/ridley.a6ed5a8a.png","a6ed5a8af4da55f2614ec7aab663cf40"],["/ai-game/static/media/samus.cc83f13d.png","cc83f13d65f7b671f76dfbfd97e8bc8e"],["/ai-game/static/media/shadow.f5ae4e94.png","f5ae4e94e2cca20b496d0a90e7d52d25"],["/ai-game/static/media/sm.439835f8.png","439835f8156bacdae8a9c204b58a2515"],["/ai-game/static/media/sonicLogo.3f2fa4e1.png","3f2fa4e10e83dd1219c581cf9fad83d4"],["/ai-game/static/media/star.6c099165.gif","6c099165feb65415052244c59bee6614"],["/ai-game/static/media/sth.9fbca3c3.png","9fbca3c3f1ecc05e4dd0661ad5fb30c0"],["/ai-game/static/media/supermetroid.a75b2786.png","a75b278671eb4ab2d9dd0def5f7e27a5"],["/ai-game/static/media/tloz.a1a3b88e.png","a1a3b88e08b7739becd5e68c745198f0"],["/ai-game/static/media/triforce.58e31551.gif","58e31551b22827fd640c4156eb9d0abd"],["/ai-game/static/media/triforceBar.30b478ac.png","30b478ac2b3dc949cd0304814faf8ee1"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),r=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var r="/ai-game/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});