import{Y,Z as N,_ as O,G as H,$ as M,K as I,a0 as b,a1 as $,a2 as C,V as P,a3 as T,l as g,k as A,i as j,m as v,U as q,a4 as B,a5 as G,R as K,I as U,a6 as W,a7 as Z,e as z,p as F,h as E,a as J,o as Q}from"./runtime.uIRyz8vf.js";import{b as X}from"./disclose-version.DOQFijQJ.js";const x=new Set,D=new Set;function m(a){var S;var e=this,s=e.ownerDocument,_=a.type,o=((S=a.composedPath)==null?void 0:S.call(a))||[],r=o[0]||a.target,d=0,h=a.__root;if(h){var u=o.indexOf(h);if(u!==-1&&(e===document||e===window)){a.__root=e;return}var l=o.indexOf(e);if(l===-1)return;u<=l&&(d=u)}if(r=o[d]||a.target,r!==e){Y(a,"currentTarget",{configurable:!0,get(){return r||s}});var w=M,i=I;N(null),O(null);try{for(var t,n=[];r!==null;){var f=r.assignedSlot||r.parentNode||r.host||null;try{var c=r["__"+_];if(c!==void 0&&!r.disabled)if(H(c)){var[k,...L]=c;k.apply(r,[a,...L])}else c.call(r,a)}catch(y){t?n.push(y):t=y}if(a.cancelBubble||f===e||f===null)break;r=f}if(t){for(let y of n)queueMicrotask(()=>{throw y});throw t}}finally{a.__root=e,delete a.currentTarget,N(w),O(i)}}}const aa=["touchstart","touchmove"];function ea(a){return aa.includes(a)}function sa(a,e){var s=e==null?"":typeof e=="object"?e+"":e;s!==(a.__t??(a.__t=a.nodeValue))&&(a.__t=s,a.nodeValue=s==null?"":s+"")}function ra(a,e){return V(a,e)}function ia(a,e){b(),e.intro=e.intro??!1;const s=e.target,_=E,o=v;try{for(var r=$(s);r&&(r.nodeType!==8||r.data!==C);)r=P(r);if(!r)throw T;g(!0),A(r),j();const d=V(a,{...e,anchor:r});if(v===null||v.nodeType!==8||v.data!==q)throw B(),T;return g(!1),d}catch(d){if(d===T)return e.recover===!1&&G(),b(),K(s),g(!1),ra(a,e);throw d}finally{g(_),A(o)}}const p=new Map;function V(a,{target:e,anchor:s,props:_={},events:o,context:r,intro:d=!0}){b();var h=new Set,u=i=>{for(var t=0;t<i.length;t++){var n=i[t];if(!h.has(n)){h.add(n);var f=ea(n);e.addEventListener(n,m,{passive:f});var c=p.get(n);c===void 0?(document.addEventListener(n,m,{passive:f}),p.set(n,1)):p.set(n,c+1)}}};u(U(x)),D.add(u);var l=void 0,w=W(()=>{var i=s??e.appendChild(Z());return z(()=>{if(r){F({});var t=Q;t.c=r}o&&(_.$$events=o),E&&X(i,null),l=a(i,_)||{},E&&(I.nodes_end=v),r&&J()}),()=>{var f;for(var t of h){e.removeEventListener(t,m);var n=p.get(t);--n===0?(document.removeEventListener(t,m),p.delete(t)):p.set(t,n)}D.delete(u),R.delete(l),i!==s&&((f=i.parentNode)==null||f.removeChild(i))}});return R.set(l,w),l}let R=new WeakMap;function oa(a){const e=R.get(a);e&&e()}export{ia as h,ra as m,sa as s,oa as u};
