!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(t){return e[t]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/data-visualization-project-2021-itv/",t(t.s="9/Ks")}({"2Gk3":function(){"use strict";try{self["workbox:cacheable-response:5.1.4"]&&_()}catch(e){}},"9/Ks":function(e,t,r){"use strict";function n(e){var t="function"==typeof Map?new Map:void 0;return(n=function(e){function r(){return o(e,arguments,c(this).constructor)}if(null===e||-1===Function.toString.call(e).indexOf("[native code]"))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),u(r,e)})(e)}function o(){return(o=i()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var o=new(Function.bind.apply(e,n));return r&&u(o,r.prototype),o}).apply(null,arguments)}function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(r)return(r=r.call(e)).next.bind(r);if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function h(){return(h=f()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var o=new(Function.bind.apply(e,n));return r&&d(o,r.prototype),o}).apply(null,arguments)}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(r)return(r=r.call(e)).next.bind(r);if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function m(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(r)return(r=r.call(e)).next.bind(r);if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return g(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function b(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(r)return(r=r.call(e)).next.bind(r);if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return w(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return w(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function _(e,t){return new Promise((function(r,n){var o,i,u;return o=e.clone(),i={headers:new Headers(o.headers),status:o.status,statusText:o.statusText},u=t?t(i):i,Promise.resolve(new Promise((function(e,t){return function(){if(void 0===K){var e=new Response("");if("body"in e)try{new Response(e.body),K=!0}catch(e){K=!1}K=!1}return K}()?e(o.body):Promise.resolve(o.blob()).then(e,t)}))).then((function(e){try{return r(new Response(e,u))}catch(e){return n(e)}}),n)}))}function P(e){if(!e)throw new N("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){var t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}var r=e.revision,n=e.url;if(!n)throw new N("add-to-cache-list-unexpected-type",{entry:e});if(!r){var o=new URL(n,location.href);return{cacheKey:o.href,url:o.href}}var i=new URL(n,location.href),u=new URL(n,location.href);return i.searchParams.set("__WB_REVISION__",r),{cacheKey:i.href,url:u.href}}function R(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(r)return(r=r.call(e)).next.bind(r);if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return O(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return O(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function A(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(r)return(r=r.call(e)).next.bind(r);if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return S(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return S(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function q(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(r)return(r=r.call(e)).next.bind(r);if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return U(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return U(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function U(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function T(e){var t,r,n,o,i,u,c,a,s,l;se||(o=void 0===(n=(r=void 0===(t=e)?{}:t).ignoreURLParametersMatching)?[/^utm_/]:n,u=void 0===(i=r.directoryIndex)?"index.html":i,a=void 0===(c=r.cleanURLs)||c,s=r.urlManipulation,l=Q(),self.addEventListener("fetch",(function(e){var t=function(e,t){for(var r,n=ae().getURLsToCacheKeys(),o=q(function*(e,t){var r=void 0===t?{}:t,n=r.ignoreURLParametersMatching,o=r.directoryIndex,i=r.cleanURLs,u=r.urlManipulation,c=new URL(e,location.href);c.hash="",yield c.href;var a=function(e,t){void 0===t&&(t=[]);for(var r=function(){var r=o[n];t.some((function(e){return e.test(r)}))&&e.searchParams.delete(r)},n=0,o=[].concat(e.searchParams.keys());n<o.length;n++)r();return e}(c,n);if(yield a.href,o&&a.pathname.endsWith("/")){var s=new URL(a.href);s.pathname+=o,yield s.href}if(i){var l=new URL(a.href);l.pathname+=".html",yield l.href}if(u)for(var h,f=A(u({url:c}));!(h=f()).done;){var d=h.value;yield d.href}}(e,t));!(r=o()).done;){var i=n.get(r.value);if(i)return i}}(e.request.url,{cleanURLs:a,directoryIndex:u,ignoreURLParametersMatching:o,urlManipulation:s});if(t){var r=self.caches.open(l).then((function(e){return e.match(t)})).then((function(e){return e||fetch(t)}));e.respondWith(r)}})),se=!0)}function j(e,t){!function(e){ae().addToCacheList(e),e.length>0&&(self.addEventListener("install",le),self.addEventListener("activate",he))}(e),T(t)}function x(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(r)return(r=r.call(e)).next.bind(r);if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return C(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return C(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function L(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}r.r(t);r("xgXd");var I,K,M,E=function(e){for(var t=e,r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return n.length>0&&(t+=" :: "+JSON.stringify(n)),t},N=function(e){function t(t,r){var n,o=E(t,r);return(n=e.call(this,o)||this).name=t,n.details=r,n}var r,n;return n=e,(r=t).prototype=Object.create(n.prototype),r.prototype.constructor=r,u(r,n),t}(n(Error)),k=(r("I3Xu"),function(e){return e&&"object"==typeof e?e:{handle:e}}),W=function(e,t,r){void 0===r&&(r="GET"),this.handler=k(t),this.match=e,this.method=r},F=function(e){function t(t,r,n){return e.call(this,(function(e){var r=e.url,n=t.exec(r.href);if(n&&(r.origin===location.origin||0===n.index))return n.slice(1)}),r,n)||this}var r,n;return n=e,(r=t).prototype=Object.create(n.prototype),r.prototype.constructor=r,a(r,n),t}(W),H=function(e){return new URL(String(e),location.href).href.replace(new RegExp("^"+location.origin),"")},B=function(){function e(){this._routes=new Map}var t,r,n,o=e.prototype;return o.addFetchListener=function(){var e=this;self.addEventListener("fetch",(function(t){var r=e.handleRequest({request:t.request,event:t});r&&t.respondWith(r)}))},o.addCacheListener=function(){var e=this;self.addEventListener("message",(function(t){if(t.data&&"CACHE_URLS"===t.data.type){0;var r=Promise.all(t.data.payload.urlsToCache.map((function(t){"string"==typeof t&&(t=[t]);var r=h(Request,t);return e.handleRequest({request:r})})));t.waitUntil(r),t.ports&&t.ports[0]&&r.then((function(){return t.ports[0].postMessage(!0)}))}}))},o.handleRequest=function(e){var t=this,r=e.request,n=e.event;var o=new URL(r.url,location.href);if(o.protocol.startsWith("http")){var i=this.findMatchingRoute({url:o,request:r,event:n}),u=i.params,c=i.route,a=c&&c.handler;if(!a&&this._defaultHandler&&(a=this._defaultHandler),a){var s;0;try{s=a.handle({url:o,request:r,event:n,params:u})}catch(e){s=Promise.reject(e)}return s instanceof Promise&&this._catchHandler&&(s=s.catch((function(){return t._catchHandler.handle({url:o,request:r,event:n})}))),s}}},o.findMatchingRoute=function(e){var t=e.url,r=e.request,n=e.event;for(var o,i=s(this._routes.get(r.method)||[]);!(o=i()).done;){var u=o.value,c=void 0,a=u.match({url:t,request:r,event:n});if(a)return c=a,(Array.isArray(a)&&0===a.length||a.constructor===Object&&0===Object.keys(a).length||"boolean"==typeof a)&&(c=void 0),{route:u,params:c}}return{}},o.setDefaultHandler=function(e){this._defaultHandler=k(e)},o.setCatchHandler=function(e){this._catchHandler=k(e)},o.registerRoute=function(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)},o.unregisterRoute=function(e){if(!this._routes.has(e.method))throw new N("unregister-route-but-not-found-with-method",{method:e.method});var t=this._routes.get(e.method).indexOf(e);if(!(t>-1))throw new N("unregister-route-route-not-registered");this._routes.get(e.method).splice(t,1)},t=e,(r=[{key:"routes",get:function(){return this._routes}}])&&p(t.prototype,r),n&&p(t,n),e}(),D=function(){return I||((I=new B).addFetchListener(),I.addCacheListener()),I},$=(r("Gpc1"),[]),G=function(){return $},X={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},z=function(e){return[X.prefix,e,X.suffix].filter((function(e){return e&&e.length>0})).join("-")},J=function(e){return e||z(X.googleAnalytics)},Q=function(e){return e||z(X.precache)},V=function(){return X.prefix},Y=function(e){return e||z(X.runtime)},Z=function(){return X.suffix},ee=new Set,te=function(e,t){return e.filter((function(e){return t in e}))},re=function(e){return new Promise((function(t,r){function n(){return(h=l()).done?[1]:(f=h.value,Promise.resolve(f.cacheKeyWillBeUsed.call(f,{mode:u,request:s})).then((function(e){try{return"string"==typeof(s=e)&&(s=new Request(s)),n}catch(e){return r(e)}}),r))}function o(){return t(s)}var i,u,c,a,s,l,h,f,d;return i=e.request,u=e.mode,a=te(void 0===(c=e.plugins)?[]:c,"cacheKeyWillBeUsed"),s=i,l=m(a),(d=function(e){for(;e;){if(e.then)return void e.then(d,r);try{if(e.pop){if(e.length)return e.pop()?o.call(this):e;e=n}else e=e.call(this)}catch(e){return r(e)}}}.bind(this))(n)}))},ne=function(e){return new Promise((function(t,r){var n,o,i,u,c,a,s,l,h,f,d,p;return n=e.cacheName,o=e.request,i=e.event,u=e.matchOptions,a=void 0===(c=e.plugins)?[]:c,Promise.resolve(self.caches.open(n)).then(function(e){try{return s=e,Promise.resolve(re({plugins:a,request:o,mode:"read"})).then(function(e){try{return l=e,Promise.resolve(s.match(l,u)).then(function(e){try{{var o;function c(){if((d=f()).done)return[1];{if("cachedResponseWillBeUsed"in(p=d.value))return Promise.resolve(p.cachedResponseWillBeUsed.call(p,{cacheName:n,event:i,matchOptions:u,cachedResponse:h,request:l})).then(function(t){try{return h=t,e.call(this)}catch(e){return r(e)}}.bind(this),r);function e(){return c}return e.call(this)}}return h=e,f=m(a),(o=function(e){for(;e;){if(e.then)return void e.then(o,r);try{if(e.pop){if(e.length)return e.pop()?s.call(this):e;e=c}else e=e.call(this)}catch(e){return r(e)}}}.bind(this))(c);function s(){return t(h)}}}catch(e){return r(e)}}.bind(this),r)}catch(e){return r(e)}}.bind(this),r)}catch(e){return r(e)}}.bind(this),r)}))},oe=function(e){return new Promise((function(t,r){var n,o,i,u,c,a,s,l,h,f,d,p,y,g;return n=e.cacheName,o=e.response,i=e.event,c=void 0===(u=e.plugins)?[]:u,a=e.matchOptions,Promise.resolve(re({plugins:c,request:e.request,mode:"write"})).then(function(e){try{return s=e,o?Promise.resolve((u={event:i,plugins:c,response:o,request:s},new Promise((function(e,t){function r(){if((h=l()).done)return[1];{if("cacheWillUpdate"in(f=h.value))return s=!0,Promise.resolve(f.cacheWillUpdate.call(f,{request:o,response:a,event:i})).then(function(r){try{return(a=r)?e.call(this):[1]}catch(e){return t(e)}}.bind(this),t);function e(){return r}return e.call(this)}}function n(){return s||(a=a&&200===a.status?a:void 0),e(a||null)}var o,i,c,a,s,l,h,f,d;return o=u.request,i=u.event,a=u.response,s=!1,l=m(void 0===(c=u.plugins)?[]:c),(d=function(e){for(;e;){if(e.then)return void e.then(d,t);try{if(e.pop){if(e.length)return e.pop()?n.call(this):e;e=r}else e=e.call(this)}catch(e){return t(e)}}}.bind(this))(r)})))).then(function(e){try{return(l=e)?Promise.resolve(self.caches.open(n)).then(function(e){try{return h=e,f=te(c,"cacheDidUpdate"),Promise.resolve(new Promise((function(e,t){return f.length>0?Promise.resolve(ne({cacheName:n,matchOptions:a,request:s})).then(e,t):e(null)}))).then(function(e){try{d=e;var o=function(e){try{if("QuotaExceededError"===e.name)return Promise.resolve(new Promise((function(e,t){function r(){return(i=o()).done?[1]:Promise.resolve((0,i.value)()).then((function(){try{return r}catch(e){return t(e)}}),t)}function n(){return e()}var o,i,u;return o=v(ee),(u=function(e){for(;e;){if(e.then)return void e.then(u,t);try{if(e.pop){if(e.length)return e.pop()?n.call(this):e;e=r}else e=e.call(this)}catch(e){return t(e)}}}.bind(this))(r)}))).then(function(){try{return t.call(this)}catch(e){return r(e)}}.bind(this),r);function t(){throw e}return t.call(this)}catch(e){return r(e)}}.bind(this);try{return Promise.resolve(h.put(s,l)).then((function(){try{return function(){try{var e;function o(){return(y=p()).done?[1]:(g=y.value,Promise.resolve(g.cacheDidUpdate.call(g,{cacheName:n,event:i,oldResponse:d,newResponse:l,request:s})).then((function(){try{return o}catch(e){return r(e)}}),r))}return p=m(f),(e=function(t){for(;t;){if(t.then)return void t.then(e,r);try{if(t.pop){if(t.length)return t.pop()?u.call(this):t;t=o}else t=t.call(this)}catch(e){return r(e)}}}.bind(this))(o);function u(){return t()}}catch(e){return r(e)}}()}catch(e){return o(e)}}),o)}catch(e){o(e)}}catch(e){return r(e)}}.bind(this),r)}catch(e){return r(e)}}.bind(this),r):t()}catch(e){return r(e)}}.bind(this),r):r(new N("cache-put-with-no-response",{url:H(s.url)}))}catch(e){return r(e)}var u}.bind(this),r)}))},ie=ne,ue=function(e){return new Promise((function(t,r){function n(){l=te(a,"fetchDidFail"),h=l.length>0?o.clone():null;var e=function(e){try{throw new N("plugin-error-request-will-fetch",{thrownError:e})}catch(e){return r(e)}};try{var n;function c(){if((d=f()).done)return[1];{if("requestWillFetch"in(p=d.value))return v=p.requestWillFetch,y=o.clone(),Promise.resolve(v.call(p,{request:y,event:u})).then(function(r){try{return o=r,t.call(this)}catch(t){return e(t)}}.bind(this),e);function t(){return c}return t.call(this)}}return f=b(a),(n=function(t){for(;t;){if(t.then)return void t.then(n,e);try{if(t.pop){if(t.length)return t.pop()?s.call(this):t;t=c}else t=t.call(this)}catch(t){return e(t)}}}.bind(this))(c);function s(){return function(){try{m=o.clone();var e=function(e){try{{var t;function n(){return(O=R()).done?[1]:(A=O.value,Promise.resolve(A.fetchDidFail.call(A,{error:e,event:u,originalRequest:h.clone(),request:m.clone()})).then((function(){try{return n}catch(e){return r(e)}}),r))}return R=b(l),(t=function(e){for(;e;){if(e.then)return void e.then(t,r);try{if(e.pop){if(e.length)return e.pop()?o.call(this):e;e=n}else e=e.call(this)}catch(e){return r(e)}}}.bind(this))(n);function o(){throw e}}}catch(e){return r(e)}}.bind(this);try{return"navigate"===o.mode?Promise.resolve(fetch(o)).then(function(t){try{return g=t,n.call(this)}catch(t){return e(t)}}.bind(this),e):Promise.resolve(fetch(o,i)).then(function(t){try{return g=t,n.call(this)}catch(t){return e(t)}}.bind(this),e);function n(){function r(){if((_=w()).done)return[1];{if("fetchDidSucceed"in(P=_.value))return Promise.resolve(P.fetchDidSucceed.call(P,{event:u,request:m,response:g})).then(function(r){try{return g=r,t.call(this)}catch(t){return e(t)}}.bind(this),e);function t(){return r}return t.call(this)}}function n(){return t(g)}var o;return w=b(a),(o=function(t){for(;t;){if(t.then)return void t.then(o,e);try{if(t.pop){if(t.length)return t.pop()?n.call(this):t;t=r}else t=t.call(this)}catch(t){return e(t)}}}.bind(this))(r)}}catch(t){e(t)}}catch(e){return r(e)}}()}}catch(t){e(t)}}var o,i,u,c,a,s,l,h,f,d,p,v,y,m,g,w,_,P,R,O,A;return i=e.fetchOptions,u=e.event,a=void 0===(c=e.plugins)?[]:c,"string"==typeof(o=e.request)&&(o=new Request(o)),u instanceof FetchEvent&&u.preloadResponse?Promise.resolve(u.preloadResponse).then(function(e){try{return(s=e)?t(s):n.call(this)}catch(e){return r(e)}}.bind(this),r):n.call(this)}))},ce=function(){function e(e){this._cacheName=Q(e),this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map}var t=e.prototype;return t.addToCacheList=function(e){for(var t,r=[],n=R(e);!(t=n()).done;){var o=t.value;"string"==typeof o?r.push(o):o&&void 0===o.revision&&r.push(o.url);var i=P(o),u=i.cacheKey,c=i.url,a="string"!=typeof o&&o.revision?"reload":"default";if(this._urlsToCacheKeys.has(c)&&this._urlsToCacheKeys.get(c)!==u)throw new N("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(c),secondEntry:u});if("string"!=typeof o&&o.integrity){if(this._cacheKeysToIntegrities.has(u)&&this._cacheKeysToIntegrities.get(u)!==o.integrity)throw new N("add-to-cache-list-conflicting-integrities",{url:c});this._cacheKeysToIntegrities.set(u,o.integrity)}if(this._urlsToCacheKeys.set(c,u),this._urlsToCacheModes.set(c,a),r.length>0){var s="Workbox is precaching URLs without revision info: "+r.join(", ")+"\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache";console.warn(s)}}},t.install=function(e){return new Promise(function(t,r){var n,o,i,u,c,a,s,l,h,f,d,p,v,y;return n=this,i=(o=void 0===e?{}:e).event,u=o.plugins,c=[],a=[],Promise.resolve(self.caches.open(this._cacheName)).then(function(e){try{return Promise.resolve(e.keys()).then(function(e){try{for(s=new Set(e.map((function(e){return e.url}))),l=R(this._urlsToCacheKeys);!(h=l()).done;)d=(f=h.value)[0],s.has(p=f[1])?a.push(d):c.push({cacheKey:p,url:d});return v=c.map((function(e){var t=e.cacheKey,r=e.url,o=n._cacheKeysToIntegrities.get(t),c=n._urlsToCacheModes.get(r);return n._addURLToCache({cacheKey:t,cacheMode:c,event:i,integrity:o,plugins:u,url:r})})),Promise.resolve(Promise.all(v)).then((function(){try{return y=c.map((function(e){return e.url})),t({updatedURLs:y,notUpdatedURLs:a})}catch(e){return r(e)}}),r)}catch(e){return r(e)}}.bind(this),r)}catch(e){return r(e)}}.bind(this),r)}.bind(this))},t.activate=function(){return new Promise(function(e,t){var r,n,o,i,u,c,a;return Promise.resolve(self.caches.open(this._cacheName)).then(function(s){try{return r=s,Promise.resolve(r.keys()).then(function(s){try{{var l;function h(){if((c=u()).done)return[1];{if(!o.has((a=c.value).url))return Promise.resolve(r.delete(a)).then(function(){try{return i.push(a.url),e.call(this)}catch(e){return t(e)}}.bind(this),t);function e(){return h}return e.call(this)}}return n=s,o=new Set(this._urlsToCacheKeys.values()),i=[],u=R(n),(l=function(e){for(;e;){if(e.then)return void e.then(l,t);try{if(e.pop){if(e.length)return e.pop()?f.call(this):e;e=h}else e=e.call(this)}catch(e){return t(e)}}}.bind(this))(h);function f(){return e({deletedURLs:i})}}}catch(e){return t(e)}}.bind(this),t)}catch(e){return t(e)}}.bind(this),t)}.bind(this))},t._addURLToCache=function(e){return new Promise(function(t,r){var n,o,i,u,c,a,s,l,h,f;return n=e.cacheKey,o=e.url,i=e.event,u=e.plugins,c=new Request(o,{integrity:e.integrity,cache:e.cacheMode,credentials:"same-origin"}),Promise.resolve(ue({event:i,plugins:u,request:c})).then(function(e){try{for(a=e,l=R(u||[]);!(h=l()).done;)"cacheWillUpdate"in(f=h.value)&&(s=f);return Promise.resolve(new Promise((function(e,t){return s?Promise.resolve(s.cacheWillUpdate({event:i,request:c,response:a})).then(e,t):e(a.status<400)}))).then(function(e){try{if(!e)return r(new N("bad-precaching-response",{url:o,status:a.status}));if(a.redirected)return Promise.resolve(_(a)).then(function(e){try{return a=e,s.call(this)}catch(e){return r(e)}}.bind(this),r);function s(){return Promise.resolve(oe({event:i,plugins:u,response:a,request:n===o?c:new Request(n),cacheName:this._cacheName,matchOptions:{ignoreSearch:!0}})).then((function(){try{return t()}catch(e){return r(e)}}),r)}return s.call(this)}catch(e){return r(e)}}.bind(this),r)}catch(e){return r(e)}}.bind(this),r)}.bind(this))},t.getURLsToCacheKeys=function(){return this._urlsToCacheKeys},t.getCachedURLs=function(){return[].concat(this._urlsToCacheKeys.keys())},t.getCacheKeyForURL=function(e){var t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)},t.matchPrecache=function(e){return new Promise(function(t,r){var n,o;return n=e instanceof Request?e.url:e,(o=this.getCacheKeyForURL(n))?Promise.resolve(self.caches.open(this._cacheName)).then((function(e){try{return t(e.match(o))}catch(e){return r(e)}}),r):t(void 0)}.bind(this))},t.createHandler=function(e){var t=this;return void 0===e&&(e=!0),function(r){return new Promise((function(n,o){var i,u;i=r.request;var c=function(t){try{if(e)return n(fetch(i));throw t}catch(e){return o(e)}};try{return Promise.resolve(t.matchPrecache(i)).then((function(e){try{if(u=e)return n(u);throw new N("missing-precache-entry",{cacheName:t._cacheName,url:i instanceof Request?i.url:i})}catch(e){return c(e)}}),c)}catch(e){c(e)}}))}},t.createHandlerBoundToURL=function(e,t){if(void 0===t&&(t=!0),!this.getCacheKeyForURL(e))throw new N("non-precached-url",{url:e});var r=this.createHandler(t),n=new Request(e);return function(){return r({request:n})}},e}(),ae=function(){return M||(M=new ce),M},se=!1,le=function(e){var t=ae(),r=G();e.waitUntil(t.install({event:e,plugins:r}).catch((function(e){throw e})))},he=function(e){var t=ae();e.waitUntil(t.activate())},fe=function(e){return"navigate"===e.request.mode},de=(r("myed"),{cacheWillUpdate:function(e){return new Promise((function(t){var r=e.response;return t(200===r.status||0===r.status?r:null)}))}}),pe=function(){function e(e){if(void 0===e&&(e={}),this._cacheName=Y(e.cacheName),e.plugins){var t=e.plugins.some((function(e){return!!e.cacheWillUpdate}));this._plugins=t?e.plugins:[de].concat(e.plugins)}else this._plugins=[de];this._networkTimeoutSeconds=e.networkTimeoutSeconds||0,this._fetchOptions=e.fetchOptions,this._matchOptions=e.matchOptions}var t=e.prototype;return t.handle=function(e){return new Promise(function(t,r){var n,o,i,u,c,a,s,l;return n=e.event,i=[],"string"==typeof(o=e.request)&&(o=new Request(o)),u=[],this._networkTimeoutSeconds&&(c=(a=this._getTimeoutPromise({request:o,event:n,logs:i})).id,u.push(a.promise)),s=this._getNetworkPromise({timeoutId:c,request:o,event:n,logs:i}),u.push(s),Promise.resolve(Promise.race(u)).then(function(e){try{if(!(l=e))return Promise.resolve(s).then(function(e){try{return l=e,n.call(this)}catch(e){return r(e)}}.bind(this),r);function n(){return l?t(l):r(new N("no-response",{url:o.url}))}return n.call(this)}catch(e){return r(e)}}.bind(this),r)}.bind(this))},t._getTimeoutPromise=function(e){var t,r=this,n=e.request,o=e.event;return{promise:new Promise((function(e){t=setTimeout((function(){return new Promise((function(t,i){return Promise.resolve(r._respondFromCache({request:n,event:o})).then((function(r){try{return e(r),t()}catch(e){return i(e)}}),i)}))}),1e3*r._networkTimeoutSeconds)})),id:t}},t._getNetworkPromise=function(e){return new Promise(function(t,r){var n,o,i,u,c,a,s;n=e.timeoutId,o=e.request,i=e.event;var l=function(){try{if(n&&clearTimeout(n),u||!c)return Promise.resolve(this._respondFromCache({request:o,event:i})).then(function(t){try{return c=t,e.call(this)}catch(e){return r(e)}}.bind(this),r);if(a=c.clone(),s=oe({cacheName:this._cacheName,request:o,response:a,event:i,plugins:this._plugins}),i)try{i.waitUntil(s)}catch(e){0}return e.call(this);function e(){return t(c)}}catch(e){return r(e)}}.bind(this),h=function(e){try{return u=e,l()}catch(e){return r(e)}};try{return Promise.resolve(ue({request:o,event:i,fetchOptions:this._fetchOptions,plugins:this._plugins})).then((function(e){try{return c=e,l()}catch(e){return h(e)}}),h)}catch(e){h(e)}}.bind(this))},t._respondFromCache=function(e){return ie({cacheName:this._cacheName,request:e.request,event:e.event,matchOptions:this._matchOptions,plugins:this._plugins})},e}(),ve=function(){function e(e,t,r){var n=this,o=void 0===r?{}:r,i=o.onupgradeneeded,u=o.onversionchange;this._db=null,this._name=e,this._version=t,this._onupgradeneeded=i,this._onversionchange=u||function(){return n.close()}}var t,r,n,o=e.prototype;return o.open=function(){return new Promise(function(e,t){var r;return r=this,this._db?e():Promise.resolve(new Promise((function(e,t){var n=!1;setTimeout((function(){n=!0,t(new Error("The open request was blocked and timed out"))}),r.OPEN_TIMEOUT);var o=indexedDB.open(r._name,r._version);o.onerror=function(){return t(o.error)},o.onupgradeneeded=function(e){n?(o.transaction.abort(),o.result.close()):"function"==typeof r._onupgradeneeded&&r._onupgradeneeded(e)},o.onsuccess=function(){var t=o.result;n?t.close():(t.onversionchange=r._onversionchange.bind(r),e(t))}}))).then(function(r){try{return this._db=r,e(this)}catch(e){return t(e)}}.bind(this),t)}.bind(this))},o.getKey=function(e,t){return new Promise(function(r,n){return Promise.resolve(this.getAllKeys(e,t,1)).then((function(e){try{return r(e[0])}catch(e){return n(e)}}),n)}.bind(this))},o.getAll=function(e,t,r){return new Promise(function(n,o){return Promise.resolve(this.getAllMatching(e,{query:t,count:r})).then(n,o)}.bind(this))},o.getAllKeys=function(e,t,r){return new Promise(function(n,o){return Promise.resolve(this.getAllMatching(e,{query:t,count:r,includeKeys:!0})).then((function(e){try{return n(e.map((function(e){return e.key})))}catch(e){return o(e)}}),o)}.bind(this))},o.getAllMatching=function(e,t){return new Promise(function(r,n){var o,i,u,c,a,s,l,h,f;return i=(o=void 0===t?{}:t).index,c=void 0===(u=o.query)?null:u,s=void 0===(a=o.direction)?"next":a,l=o.count,f=void 0!==(h=o.includeKeys)&&h,Promise.resolve(this.transaction([e],"readonly",(function(t,r){var n=t.objectStore(e),o=i?n.index(i):n,u=[],a=o.openCursor(c,s);a.onsuccess=function(){var e=a.result;e?(u.push(f?e:e.value),l&&u.length>=l?r(u):e.continue()):r(u)}}))).then(r,n)}.bind(this))},o.transaction=function(e,t,r){return new Promise(function(n,o){var i;return i=this,Promise.resolve(this.open()).then((function(){try{return Promise.resolve(new Promise((function(n,o){var u=i._db.transaction(e,t);u.onabort=function(){return o(u.error)},u.oncomplete=function(){return n()},r(u,(function(e){return n(e)}))}))).then(n,o)}catch(e){return o(e)}}),o)}.bind(this))},o._call=function(e,t,r){var n=arguments;return new Promise(function(o,i){var u,c,a;for(u=n.length,c=new Array(u>3?u-3:0),a=3;a<u;a++)c[a-3]=n[a];return Promise.resolve(this.transaction([t],r,(function(r,n){var o=r.objectStore(t),i=o[e].apply(o,c);i.onsuccess=function(){return n(i.result)}}))).then(o,i)}.bind(this))},o.close=function(){this._db&&(this._db.close(),this._db=null)},t=e,(r=[{key:"db",get:function(){return this._db}}])&&L(t.prototype,r),n&&L(t,n),e}();ve.prototype.OPEN_TIMEOUT=2e3;for(var ye=function(){for(var e,t=ge[me],r=t[0],n=function(){var t=e.value;t in IDBObjectStore.prototype&&(ve.prototype[t]=function(e){var n=arguments;return new Promise(function(o,i){var u,c,a;for(u=n.length,c=new Array(u>1?u-1:0),a=1;a<u;a++)c[a-1]=n[a];return Promise.resolve(this._call.apply(this,[t,e,r].concat(c))).then(o,i)}.bind(this))})},o=x(t[1]);!(e=o()).done;)n()},me=0,ge=Object.entries({readonly:["get","count","getKey","getAll","getAllKeys"],readwrite:["add","put","clear","delete"]});me<ge.length;me++)ye();var be,we,_e={get googleAnalytics(){return J()},get precache(){return Q()},get prefix(){return V()},get runtime(){return Y()},get suffix(){return Z()}},Pe=(r("2Gk3"),function(){function e(e){void 0===e&&(e={}),this._statuses=e.statuses,this._headers=e.headers}return e.prototype.isResponseCacheable=function(e){var t=this;var r=!0;return this._statuses&&(r=this._statuses.includes(e.status)),this._headers&&r&&(r=Object.keys(this._headers).some((function(r){return e.headers.get(r)===t._headers[r]}))),r},e}()),Re={};!function(e,t,r){var n;if("string"==typeof e){var o=new URL(e,location.href);n=new W((function(e){return e.url.href===o.href}),t,r)}else if(e instanceof RegExp)n=new F(e,t,r);else if("function"==typeof e)n=new W(e,t,r);else{if(!(e instanceof W))throw new N("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});n=e}D().registerRoute(n)}((function(e){return fe(e.event)}),new pe({cacheName:_e.precache,networkTimeoutSeconds:5,plugins:[new function(e){var t=this;this.cacheWillUpdate=function(e){return new Promise((function(r){var n=e.response;return t._cacheableResponse.isResponseCacheable(n)?r(n):r(null)}))},this._cacheableResponse=new Pe(e)}({statuses:[200]})]})),be=function(e){var t;return fe(e.event)?caches.match((t="/200.html",ae().getCacheKeyForURL(t))):Response.error()},D().setCatchHandler(be),j([{'revision':'ff55ce3b22a719888dbe9a6ea1f5ced4','url':'/data-visualization-project-2021-itv/200.html'},{'revision':'9800a1abf8de20b7ca4b5fbc96f7117f','url':'/data-visualization-project-2021-itv/910f0dae9fc01b6cef0822b12a35c016.png'},{'revision':'3080d71b18e0f1dde6fb15cd49dc1494','url':'/data-visualization-project-2021-itv/94ae426bd14e267774e10cecebde4403.png'},{'revision':'59e221032ab061cad83b6ce2bcddbde8','url':'/data-visualization-project-2021-itv/assets/icons/android-chrome-192x192.png'},{'revision':'cf3fdf7af60a294d6d3f48cb7ad82488','url':'/data-visualization-project-2021-itv/assets/icons/android-chrome-512x512.png'},{'revision':'a0e46feb3cc577478b127936e739dd08','url':'/data-visualization-project-2021-itv/assets/icons/apple-touch-icon.png'},{'revision':'d712b605ed58419c7e6d4ab885d147b7','url':'/data-visualization-project-2021-itv/assets/icons/favicon-16x16.png'},{'revision':'2f7ce797cf8f198dedb9a9f38b7ef13b','url':'/data-visualization-project-2021-itv/assets/icons/favicon-32x32.png'},{'revision':'ba817517b2c4e1ba1ce802c4d4fafdb4','url':'/data-visualization-project-2021-itv/assets/icons/mstile-150x150.png'},{'revision':'3080d71b18e0f1dde6fb15cd49dc1494','url':'/data-visualization-project-2021-itv/assets/images/bubble-plot.png'},{'revision':'e5dba3d1c05a9d170981bf12119c3a23','url':'/data-visualization-project-2021-itv/assets/images/map.png'},{'revision':'9800a1abf8de20b7ca4b5fbc96f7117f','url':'/data-visualization-project-2021-itv/assets/images/tourism-by-year.png'},{'revision':'a855fb2cd458b804517b7c029dfceb2a','url':'/data-visualization-project-2021-itv/bundle.40b0a.esm.js'},{'revision':'2c7df9f1b84d66b8d692c5d914b759f6','url':'/data-visualization-project-2021-itv/bundle.48cc8.css'},{'revision':'e5dba3d1c05a9d170981bf12119c3a23','url':'/data-visualization-project-2021-itv/e962a58169b1156531e73579e3c082cb.png'},{'revision':'51e005dce851a9a4422e299b78af2c8c','url':'/data-visualization-project-2021-itv/polyfills.de29b.esm.js'},{'revision':'7b28795a5762ef076d8beaf7386c9744','url':'/data-visualization-project-2021-itv/route-about.chunk.62975.esm.js'},{'revision':'d41d8cd98f00b204e9800998ecf8427e','url':'/data-visualization-project-2021-itv/route-about.chunk.9efcd.css'},{'revision':'ee923669877838124e603a5bd7937c79','url':'/data-visualization-project-2021-itv/route-home.chunk.5951e.css'},{'revision':'241b8126f41eca2a9c460ffb0b2f8c13','url':'/data-visualization-project-2021-itv/route-home.chunk.b1aec.esm.js'}],we||Re)},Gpc1:function(){"use strict";try{self["workbox:precaching:5.1.4"]&&_()}catch(e){}},I3Xu:function(){"use strict";try{self["workbox:routing:5.1.4"]&&_()}catch(e){}},myed:function(){"use strict";try{self["workbox:strategies:5.1.4"]&&_()}catch(e){}},xgXd:function(){"use strict";try{self["workbox:core:5.1.4"]&&_()}catch(e){}}});
//# sourceMappingURL=sw-esm.js.map