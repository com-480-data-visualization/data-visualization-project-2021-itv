module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/data-visualization-project-2021-itv/",n(n.s="QfWi")}({FA6U:function(t,e,n){t.exports={home:"home__MseGd"}},GFNa:function(t,e,n){},HteQ:function(t,e){t.exports=require("preact")},KTE6:function(t,e,n){t.exports={country_details:"country_details__3Eypl"}},OKuZ:function(t,e,n){},QfWi:function(t,e,n){"use strict";n.r(e);n("GFNa");var r=n("HteQ"),o=n("Y3FI"),i=n("ox/y"),u=n("ySiU"),c=n.n(u),a="/data-visualization-project-2021-itv";function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var l=function(t){var e,n;function o(){return t.apply(this,arguments)||this}return n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,p(e,n),o.prototype.render=function(){return Object(r.h)("header",{class:c.a.header},Object(r.h)("div",{class:"container"},Object(r.h)(i.Link,{href:a+"/"},Object(r.h)("h1",null,"International Tourism Visualizations")),Object(r.h)("nav",null,Object(r.h)(i.Link,{activeClassName:c.a.active,href:a+"/"},"Home"),Object(r.h)(i.Link,{activeClassName:c.a.active,href:a+"/about"},"About"))))},o}(r.Component),s=n("rS5q"),f=n.n(s),h=function(){return Object(r.h)("footer",{id:f.a.footer},Object(r.h)("div",{class:"container"},Object(r.h)("div",null,Object(r.h)("p",null,"This website was made for the Data Visualisation course at ",Object(r.h)(i.Link,{href:"https://www.epfl.ch",class:f.a.link},"EPFL"),".")),Object(r.h)("div",null,Object(r.h)("p",null,Object(r.h)(i.Link,{href:"https://github.com/com-480-data-visualization/data-visualization-project-2021-itv",title:"Github repo",class:f.a.link},"Check the code!")))))};n("OKuZ");function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var b=function(t){var e,n;function o(){return t.apply(this,arguments)||this}return n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,d(e,n),o.prototype.render=function(){return Object(r.h)("div",{class:"container",id:"world_map"},"Here will be displayed the choropleth world map")},o}(r.Component),y=n("KTE6"),v=n.n(y);function O(t,e){return(O=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var j=function(t){var e,n;function o(){return t.apply(this,arguments)||this}return n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,O(e,n),o.prototype.render=function(){return null==this.props.countryCode?Object(r.h)("div",{id:v.a.country_details},Object(r.h)("div",{class:"container"},Object(r.h)("h2",null,"Detail for a country"),Object(r.h)("p",null,"Click on a country on the above map to get mode details about it!"))):Object(r.h)("div",{id:v.a.country_details},Object(r.h)("div",{class:"container"},Object(r.h)("h2",null,"Detail for ",this.props.countryCode),Object(r.h)("p",null,"Here will be displayed the details for ",this.props.countryCode)))},o}(r.Component),m=n("lc+G"),_=n.n(m);function g(t,e){return(g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var x=function(t){var e,n;function o(){return t.apply(this,arguments)||this}return n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,g(e,n),o.prototype.render=function(){return Object(r.h)("div",{id:_.a.outbound_expense_section},Object(r.h)("div",{class:"container"},Object(r.h)("h2",null,"Outbound/Expense graph"),Object(r.h)("div",{id:"outbound_expense_graph"},"Here will be displayed the outbound vs expense graph.")))},o}(r.Component),C=n("FA6U"),k=n.n(C);function w(t,e){return(w=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var U=function(t){var e,n;function o(){return t.apply(this,arguments)||this}return n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,w(e,n),o.prototype.render=function(){return Object(r.h)("section",{class:k.a.home},Object(r.h)("div",{class:"container"},Object(r.h)("h2",null,"Welcome")),Object(r.h)(b,null),Object(r.h)(j,null),Object(r.h)(x,null),Object(r.h)("div",{class:"container"},Object(r.h)("h2",{id:"data"},"Add data"),Object(r.h)("p",null,"And ",Object(r.h)("em",null,"Voilà"),"!")))},o}(r.Component),P=n("VDfu"),L=n.n(P),A=function(){return Object(r.h)("section",{class:"about "+L.a.about},Object(r.h)("h1",null,"About"),Object(r.h)("p",null,"Here we will describe the project, the context (Data Visualization class @ EPFL) as well as the dataset we used and its origin."))},E=function(){return Object(r.h)(r.Fragment,null,Object(r.h)(l,null),Object(r.h)("div",{id:"app"},Object(r.h)(o.Router,null,Object(r.h)(U,{path:a+"/"}),Object(r.h)(A,{path:a+"/about"}))),Object(r.h)(h,null))};e.default=E},VDfu:function(t,e,n){t.exports={about:"about__3Ycn6"}},Y3FI:function(t,e,n){"use strict";n.r(e),n.d(e,"subscribers",(function(){return h})),n.d(e,"getCurrentUrl",(function(){return b})),n.d(e,"route",(function(){return y})),n.d(e,"Router",(function(){return x})),n.d(e,"Route",(function(){return k})),n.d(e,"Link",(function(){return C})),n.d(e,"exec",(function(){return u}));var r=n("HteQ"),o={};function i(t,e){for(var n in e)t[n]=e[n];return t}function u(t,e,n){var r,i=/(?:\?([^#]*))?(#.*)?$/,u=t.match(i),c={};if(u&&u[1])for(var a=u[1].split("&"),l=0;l<a.length;l++){var s=a[l].split("=");c[decodeURIComponent(s[0])]=decodeURIComponent(s.slice(1).join("="))}t=p(t.replace(i,"")),e=p(e||"");for(var f=Math.max(t.length,e.length),h=0;h<f;h++)if(e[h]&&":"===e[h].charAt(0)){var d=e[h].replace(/(^:|[+*?]+$)/g,""),b=(e[h].match(/[+*?]+$/)||o)[0]||"",y=~b.indexOf("+"),v=~b.indexOf("*"),O=t[h]||"";if(!O&&!v&&(b.indexOf("?")<0||y)){r=!1;break}if(c[d]=decodeURIComponent(O),y||v){c[d]=t.slice(h).map(decodeURIComponent).join("/");break}}else if(e[h]!==t[h]){r=!1;break}return(!0===n.default||!1!==r)&&c}function c(t,e){return t.rank<e.rank?1:t.rank>e.rank?-1:t.index-e.index}function a(t,e){return t.index=e,t.rank=function(t){return t.props.default?0:(e=t.props.path,p(e).map(l).join(""));var e}(t),t.props}function p(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function l(t){return":"==t.charAt(0)?1+"*+?".indexOf(t.charAt(t.length-1))||4:5}var s=null,f=[],h=[],d={};function b(){var t;return""+((t=s&&s.location?s.location:s&&s.getCurrentLocation?s.getCurrentLocation():"undefined"!=typeof location?location:d).pathname||"")+(t.search||"")}function y(t,e){return void 0===e&&(e=!1),"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),function(t){for(var e=f.length;e--;)if(f[e].canRoute(t))return!0;return!1}(t)&&function(t,e){void 0===e&&(e="push"),s&&s[e]?s[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}(t,e?"replace":"push"),v(t)}function v(t){for(var e=!1,n=0;n<f.length;n++)!0===f[n].routeTo(t)&&(e=!0);for(var r=h.length;r--;)h[r](t);return e}function O(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),n=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return y(e)}}function j(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button))return O(t.currentTarget||t.target||this),m(t)}function m(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function _(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)){var e=t.target;do{if("A"===String(e.nodeName).toUpperCase()&&e.getAttribute("href")){if(e.hasAttribute("native"))return;if(O(e))return m(t)}}while(e=e.parentNode)}}var g=!1;var x=function(t){function e(e){t.call(this,e),e.history&&(s=e.history),this.state={url:e.url||b()},g||("function"==typeof addEventListener&&(s||addEventListener("popstate",(function(){v(b())})),addEventListener("click",_)),g=!0)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.shouldComponentUpdate=function(t){return!0!==t.static||(t.url!==this.props.url||t.onChange!==this.props.onChange)},e.prototype.canRoute=function(t){var e=Object(r.toChildArray)(this.props.children);return this.getMatchingChildren(e,t,!1).length>0},e.prototype.routeTo=function(t){this.setState({url:t});var e=this.canRoute(t);return this.updating||this.forceUpdate(),e},e.prototype.componentWillMount=function(){f.push(this),this.updating=!0},e.prototype.componentDidMount=function(){var t=this;s&&(this.unlisten=s.listen((function(e){t.routeTo(""+(e.pathname||"")+(e.search||""))}))),this.updating=!1},e.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),f.splice(f.indexOf(this),1)},e.prototype.componentWillUpdate=function(){this.updating=!0},e.prototype.componentDidUpdate=function(){this.updating=!1},e.prototype.getMatchingChildren=function(t,e,n){return t.filter(a).sort(c).map((function(t){var o=u(e,t.props.path,t.props);if(o){if(!1!==n){var c={url:e,matches:o};return i(c,o),delete c.ref,delete c.key,Object(r.cloneElement)(t,c)}return t}})).filter(Boolean)},e.prototype.render=function(t,e){var n=t.children,o=t.onChange,i=e.url,u=this.getMatchingChildren(Object(r.toChildArray)(n),i,!0),c=u[0]||null,a=this.previousUrl;return i!==a&&(this.previousUrl=i,"function"==typeof o&&o({router:this,url:i,previous:a,active:u,current:c})),c},e}(r.Component),C=function(t){return Object(r.createElement)("a",i({onClick:j},t))},k=function(t){return Object(r.createElement)(t.component,t)};x.subscribers=h,x.getCurrentUrl=b,x.route=y,x.Router=x,x.Route=k,x.Link=C,x.exec=u,e.default=x},"lc+G":function(t,e,n){t.exports={outbound_expense_section:"outbound_expense_section__pXH4Y"}},"ox/y":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Link=e.Match=void 0;var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=n("HteQ"),i=n("Y3FI");function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var a=e.Match=function(t){function e(){var n,r;u(this,e);for(var o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return n=r=c(this,t.call.apply(t,[this].concat(i))),r.update=function(t){r.nextUrl=t,r.setState({})},c(r,n)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.componentDidMount=function(){i.subscribers.push(this.update)},e.prototype.componentWillUnmount=function(){i.subscribers.splice(i.subscribers.indexOf(this.update)>>>0,1)},e.prototype.render=function(t){var e=this.nextUrl||(0,i.getCurrentUrl)(),n=e.replace(/\?.+$/,"");return this.nextUrl=null,t.children({url:e,path:n,matches:!1!==(0,i.exec)(n,t.path,{})})},e}(o.Component),p=function(t){var e=t.activeClassName,n=t.path,u=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}(t,["activeClassName","path"]);return(0,o.h)(a,{path:n||u.href},(function(t){var n=t.matches;return(0,o.h)(i.Link,r({},u,{class:[u.class||u.className,n&&e].filter(Boolean).join(" ")}))}))};e.Link=p,e.default=a,a.Link=p},rS5q:function(t,e,n){t.exports={footer:"footer__14P9B",link:"link__y-LUv"}},ySiU:function(t,e,n){t.exports={header:"header__3QGkI",active:"active__3gItZ"}}});
//# sourceMappingURL=ssr-bundle.js.map