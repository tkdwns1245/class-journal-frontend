(()=>{"use strict";var e={n:r=>{var t=r&&r.__esModule?()=>r.default:()=>r;return e.d(t,{a:t}),t},d:(r,t)=>{for(var n in t)e.o(t,n)&&!e.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:t[n]})},o:(e,r)=>Object.prototype.hasOwnProperty.call(e,r)};const r=require("react");var t=e.n(r);const n=require("react-dom/server");var o=e.n(n)().renderToString(t().createElement("div",null,"Hello Server Side Rendering"));console.log(o)})();