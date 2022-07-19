import{S as D1,i as S1,s as z1,l as b,m as p,p as d,h,q as c,L as ce,b as l1,H as i,M as ue,N as M1,O as fe,P as he,n as s1,Q as oe,u as Q,a as H,v as J,c as I,G as B1,w as H1,R as W1,T as X1,r as h1,U as R1,V as G1,x as v1,y as _1,z as w1,W as K1,f as L1,t as y1,C as E1}from"../chunks/index-b32ab915.js";function de(r,e,t,l){var a,n=(a=l)==null||typeof a=="number"||typeof a=="boolean"?l:t(l),o=e.get(n);return o===void 0&&(o=r.call(this,l),e.set(n,o)),o}function ge(r,e,t){var l=Array.prototype.slice.call(arguments,3),a=t(l),n=e.get(a);return n===void 0&&(n=r.apply(this,l),e.set(a,n)),n}function me(r,e){return function(t,l,a,n,o){return a.bind(l,t,n,o)}(r,this,r.length===1?de:ge,e.cache.create(),e.serializer)}const be=JSON.stringify;function I1(){this.cache=Object.create(null)}I1.prototype.has=function(r){return r in this.cache},I1.prototype.get=function(r){return this.cache[r]},I1.prototype.set=function(r,e){this.cache[r]=e};var pe={create:function(){return new I1}};const Ce=(r,e={})=>{var n1,a1;let{bounds:t,axis:l="both",gpuAcceleration:a=!0,applyUserSelectHack:n=!0,disabled:o=!1,ignoreMultitouch:C=!1,grid:E,position:u,cancel:_,handle:P,defaultClass:B="neodrag",defaultClassDragging:z="neodrag-dragging",defaultClassDragged:X="neodrag-dragged",defaultPosition:q={x:0,y:0},onDragStart:M,onDrag:j,onDragEnd:w}=e;const k=new Promise(requestAnimationFrame);let g,L,G=!1,x=0,S=0,K=0,A=0,O=0,d1=0,{x:c1,y:F}=u?{x:(n1=u==null?void 0:u.x)!=null?n1:0,y:(a1=u==null?void 0:u.y)!=null?a1:0}:q;P1(c1,F,r,a);let N,$,o1,e1,g1="",k1=!!u;const t1=document.body.style,U=r.classList,m1=(f,V)=>{const y={offsetX:x,offsetY:S,domRect:r.getBoundingClientRect()};r.dispatchEvent(new CustomEvent(f,{detail:y})),V==null||V(y)},W=addEventListener;W("touchstart",u1,!1),W("touchend",Y,!1),W("touchmove",f1,!1),W("mousedown",u1,!1),W("mouseup",Y,!1),W("mousemove",f1,!1),r.style.touchAction="none";const r1=()=>{let f=r.offsetWidth/$.width;return isNaN(f)&&(f=1),f};function u1(f){if(o||C&&f.type==="touchstart"&&f.touches.length>1)return;if(U.add(B),o1=function(m,T){if(!m)return T;if(m instanceof HTMLElement||Array.isArray(m))return m;const s=T.querySelectorAll(m);if(s===null)throw new Error("Selector passed for `handle` option should be child of the element on which the action is applied");return Array.from(s.values())}(P,r),e1=function(m,T){if(!m)return;if(m instanceof HTMLElement||Array.isArray(m))return m;const s=T.querySelectorAll(m);if(s===null)throw new Error("Selector passed for `cancel` option should be child of the element on which the action is applied");return Array.from(s.values())}(_,r),g=/(both|x)/.test(l),L=/(both|y)/.test(l),t!==void 0&&(N=function(m,T){if(m instanceof HTMLElement)return m.getBoundingClientRect();if(typeof m=="object"){const{top:D=0,left:Z=0,right:v=0,bottom:b1=0}=m;return{top:D,right:window.innerWidth-v,bottom:window.innerHeight-b1,left:Z}}if(m==="parent")return T.parentNode.getBoundingClientRect();const s=document.querySelector(m);if(s===null)throw new Error("The selector provided for bound doesn't exists in the document.");return s.getBoundingClientRect()}(t,r)),$=r.getBoundingClientRect(),Y1(P)&&Y1(_)&&P===_)throw new Error("`handle` selector can't be same as `cancel` selector");if(ee(e1,o1))throw new Error("Element being dragged can't be a child of the element on which `cancel` is applied");if((o1 instanceof HTMLElement?o1.contains(f.target):o1.some(m=>m.contains(f.target)))&&!ee(e1,f.target)&&(G=!0),!G)return;n&&(g1=t1.userSelect,t1.userSelect="none"),m1("neodrag:start",M);const{clientX:V,clientY:y}=O1(f)?f.touches[0]:f,R=r1();g&&(K=V-c1/R),L&&(A=y-F/R),N&&(O=V-$.left,d1=y-$.top)}function Y(){G&&(U.remove(z),U.add(X),n&&(t1.userSelect=g1),m1("neodrag:end",w),g&&(K=x),g&&(A=S),G=!1)}function f1(f){if(!G)return;U.add(z),f.preventDefault(),$=r.getBoundingClientRect();const{clientX:V,clientY:y}=O1(f)?f.touches[0]:f;let R=V,m=y;const T=r1();if(N){const s={left:N.left+O,top:N.top+d1,right:N.right+O-$.width,bottom:N.bottom+d1-$.height};R=U1(R,s.left,s.right),m=U1(m,s.top,s.bottom)}if(Array.isArray(E)){let[s,D]=E;if(isNaN(+s)||s<0)throw new Error("1st argument of `grid` must be a valid positive number");if(isNaN(+D)||D<0)throw new Error("2nd argument of `grid` must be a valid positive number");let Z=R-K,v=m-A;[Z,v]=ve([Math.floor(s/T),Math.floor(D/T)],Z,v),R=K+Z,m=A+v}g&&(x=(R-K)*T),L&&(S=(m-A)*T),c1=x,F=S,m1("neodrag",j),k.then(()=>P1(x,S,r,a))}return{destroy:()=>{const f=removeEventListener;f("touchstart",u1,!1),f("touchend",Y,!1),f("touchmove",f1,!1),f("mousedown",u1,!1),f("mouseup",Y,!1),f("mousemove",f1,!1)},update:f=>{var y,R,m,T,s,D,Z,v,b1,p1,x1;l=f.axis||"both",o=(y=f.disabled)!=null?y:!1,C=(R=f.ignoreMultitouch)!=null?R:!1,P=f.handle,t=f.bounds,_=f.cancel,n=(m=f.applyUserSelectHack)!=null?m:!0,E=f.grid,a=(T=f.gpuAcceleration)!=null?T:!0;const V=U.contains(X);U.remove(B,X),B=(s=f.defaultClass)!=null?s:"neodrag",z=(D=f.defaultClassDragging)!=null?D:"neodrag-dragging",X=(Z=f.defaultClassDragged)!=null?Z:"neodrag-dragged",U.add(B),V&&U.add(X),k1&&(c1=x=(b1=(v=f.position)==null?void 0:v.x)!=null?b1:x,F=S=(x1=(p1=f.position)==null?void 0:p1.y)!=null?x1:S,k.then(()=>P1(x,S,r,a)))}}},O1=r=>{var e;return!!((e=r.touches)!=null&&e.length)},U1=(r,e,t)=>Math.min(Math.max(r,e),t),Y1=r=>typeof r=="string";var ae,le,se;const ve=(Q1=([r,e],t,l)=>{const a=(n,o)=>Math.round(n/o)*o;return[a(t,r),a(l,e)]},J1=(ae=i1==null?void 0:i1.cache)!=null?ae:pe,$1=(le=i1==null?void 0:i1.serializer)!=null?le:be,((se=i1==null?void 0:i1.strategy)!=null?se:me)(Q1,{cache:J1,serializer:$1}));var Q1,i1,J1,$1;function ee(r,e){const t=e instanceof HTMLElement?[e]:e;return r instanceof HTMLElement?t.some(l=>r.contains(l)):!!Array.isArray(r)&&r.some(l=>t.some(a=>l.contains(a)))}function P1(r,e,t,l){t.style.transform=l?`translate3d(${+r}px, ${+e}px, 0)`:`translate(${+r}px, ${+e}px)`}function _e(r){let e,t,l,a,n,o;return{c(){e=b("div"),t=b("div"),this.h()},l(C){e=p(C,"DIV",{class:!0});var E=d(e);t=p(E,"DIV",{class:!0});var u=d(t);u.forEach(h),E.forEach(h),this.h()},h(){c(t,"class","w-16 h-6 mb-0.5 md:w-20 md:h-8 md:mb-0 bg-[url(/car.png)] bg-cover bg-no-repeat"),c(e,"class","flex items-end w-full h-2 md:h-3 bg-gray-500 mx-auto rounded-t-lg select-none"),ce(()=>r[5].call(e))},m(C,E){l1(C,e,E),i(e,t),a=ue(e,r[5].bind(e)),n||(o=[M1(window,"resize",r[3]),fe(l=Ce.call(null,t,{axis:"x",bounds:"parent",position:r[2],onDrag:r[4]}))],n=!0)},p(C,[E]){l&&he(l.update)&&E&5&&l.update.call(null,{axis:"x",bounds:"parent",position:C[2],onDrag:C[4]})},i:s1,o:s1,d(C){C&&h(e),a(),n=!1,oe(o)}}}function we(r,e,t){let l,{offsetX:a=0}=e,{trackWidth:n}=e;const o=()=>{t(0,a=0)},C=u=>{t(0,a=u.offsetX)};function E(){n=this.clientWidth,t(1,n)}return r.$$set=u=>{"offsetX"in u&&t(0,a=u.offsetX),"trackWidth"in u&&t(1,n=u.trackWidth)},r.$$.update=()=>{r.$$.dirty&1&&t(2,l={x:a,y:0})},[a,n,l,o,C,E]}class Le extends D1{constructor(e){super(),S1(this,e,we,_e,z1,{offsetX:0,trackWidth:1})}}function te(r){let e,t,l;return{c(){e=b("button"),t=b("a"),l=Q("Link"),this.h()},l(a){e=p(a,"BUTTON",{class:!0});var n=d(e);t=p(n,"A",{href:!0,target:!0,alt:!0});var o=d(t);l=J(o,"Link"),o.forEach(h),n.forEach(h),this.h()},h(){c(t,"href",r[4]),c(t,"target","_blank"),c(t,"alt",r[0]),c(e,"class","w-16 text-lg bg-rose-800 text-rose-50 hover:bg-rose-600 rounded")},m(a,n){l1(a,e,n),i(e,t),i(t,l)},p(a,n){n&16&&c(t,"href",a[4]),n&1&&c(t,"alt",a[0])},d(a){a&&h(e)}}}function re(r){let e,t,l,a;return{c(){e=b("button"),t=b("a"),l=Q("Code"),this.h()},l(n){e=p(n,"BUTTON",{class:!0});var o=d(e);t=p(o,"A",{href:!0,target:!0,alt:!0});var C=d(t);l=J(C,"Code"),C.forEach(h),o.forEach(h),this.h()},h(){c(t,"href",r[5]),c(t,"target","_blank"),c(t,"alt",a=r[0]+" on GitHub"),c(e,"class","w-16 text-lg bg-rose-800 text-rose-50 hover:bg-rose-600 rounded")},m(n,o){l1(n,e,o),i(e,t),i(t,l)},p(n,o){o&32&&c(t,"href",n[5]),o&1&&a!==(a=n[0]+" on GitHub")&&c(t,"alt",a)},d(n){n&&h(e)}}}function ye(r){let e,t,l,a,n,o,C,E,u,_,P,B,z,X,q,M,j,w=r[4]&&te(r),k=r[5]&&re(r);return{c(){e=b("div"),t=b("p"),l=Q(r[0]),a=H(),n=b("div"),o=b("img"),E=H(),u=b("div"),_=b("p"),P=Q(r[1]),B=H(),z=b("p"),X=Q(r[2]),q=H(),M=b("p"),w&&w.c(),j=H(),k&&k.c(),this.h()},l(g){e=p(g,"DIV",{class:!0});var L=d(e);t=p(L,"P",{class:!0});var G=d(t);l=J(G,r[0]),G.forEach(h),a=I(L),n=p(L,"DIV",{class:!0});var x=d(n);o=p(x,"IMG",{src:!0,alt:!0,class:!0}),E=I(x),u=p(x,"DIV",{class:!0});var S=d(u);_=p(S,"P",{class:!0});var K=d(_);P=J(K,r[1]),K.forEach(h),B=I(S),z=p(S,"P",{class:!0});var A=d(z);X=J(A,r[2]),A.forEach(h),q=I(S),M=p(S,"P",{class:!0});var O=d(M);w&&w.l(O),j=I(O),k&&k.l(O),O.forEach(h),S.forEach(h),x.forEach(h),L.forEach(h),this.h()},h(){c(t,"class","h-8 leading-8 text-lg text-center bg-rose-800 text-rose-50 rounded-t-lg"),B1(o.src,C=r[3])||c(o,"src",C),c(o,"alt",r[0]),c(o,"class","h-full aspect-square sm:h-[22rem] rounded-bl-none sm:rounded-bl-lg"),c(_,"class","text-lg text-center"),c(z,"class","text-center mb-2"),c(M,"class","flex flex-row mx-auto mb-2 sm:mb-0 space-x-2"),c(u,"class","flex flex-col justify-center w-full p-2 sm:w-1/2 bg-rose-50 text-zinc-800 border-rose-800 border-t sm:border-l sm:border-t-0 rounded-b-lg sm:rounded-bl-none"),c(n,"class","flex flex-col sm:flex-row"),c(e,"class","rounded-lg")},m(g,L){l1(g,e,L),i(e,t),i(t,l),i(e,a),i(e,n),i(n,o),i(n,E),i(n,u),i(u,_),i(_,P),i(u,B),i(u,z),i(z,X),i(u,q),i(u,M),w&&w.m(M,null),i(M,j),k&&k.m(M,null)},p(g,[L]){L&1&&H1(l,g[0]),L&8&&!B1(o.src,C=g[3])&&c(o,"src",C),L&1&&c(o,"alt",g[0]),L&2&&H1(P,g[1]),L&4&&H1(X,g[2]),g[4]?w?w.p(g,L):(w=te(g),w.c(),w.m(M,j)):w&&(w.d(1),w=null),g[5]?k?k.p(g,L):(k=re(g),k.c(),k.m(M,null)):k&&(k.d(1),k=null)},i:s1,o:s1,d(g){g&&h(e),w&&w.d(),k&&k.d()}}}function Ee(r,e,t){let{title:l}=e,{subtitle:a}=e,{summary:n}=e,{image:o}=e,{link:C=""}=e,{github:E=""}=e;return r.$$set=u=>{"title"in u&&t(0,l=u.title),"subtitle"in u&&t(1,a=u.subtitle),"summary"in u&&t(2,n=u.summary),"image"in u&&t(3,o=u.image),"link"in u&&t(4,C=u.link),"github"in u&&t(5,E=u.github)},[l,a,n,o,C,E]}class Z1 extends D1{constructor(e){super(),S1(this,e,Ee,ye,z1,{title:0,subtitle:1,summary:2,image:3,link:4,github:5})}}function ke(r){let e,t;return{c(){e=W1("svg"),t=W1("path"),this.h()},l(l){e=X1(l,"svg",{viewBox:!0,class:!0});var a=d(e);t=X1(a,"path",{style:!0,d:!0}),d(t).forEach(h),a.forEach(h),this.h()},h(){h1(t,"stroke","none"),h1(t,"fill-rule","nonzero"),h1(t,"fill-opacity","1"),c(t,"d","M 9 4 C 6.25 4 4 6.25 4 9 L 4 41 C 4 43.75 6.25 46 9 46 L 41 46 C 43.75 46 46 43.75 46 41 L 46 9 C 46 6.25 43.75 4 41 4 Z M 9 6 L 41 6 C 42.667969 6 44 7.332031 44 9 L 44 41 C 44 42.667969 42.667969 44 41 44 L 9 44 C 7.332031 44 6 42.667969 6 41 L 6 9 C 6 7.332031 7.332031 6 9 6 Z M 14 11.011719 C 12.90625 11.011719 11.917969 11.339844 11.191406 11.953125 C 10.460938 12.566406 10.011719 13.484375 10.011719 14.464844 C 10.011719 16.332031 11.632812 17.789062 13.691406 17.933594 C 13.691406 17.933594 13.695312 17.933594 13.695312 17.933594 C 13.792969 17.96875 13.894531 17.988281 14 17.988281 C 16.273438 17.988281 17.988281 16.394531 17.988281 14.464844 C 17.988281 14.449219 17.988281 14.429688 17.988281 14.414062 C 17.882812 12.515625 16.191406 11.011719 14 11.011719 Z M 14 12.988281 C 15.390625 12.988281 15.941406 13.609375 16.003906 14.492188 C 15.988281 15.347656 15.460938 16.011719 14 16.011719 C 12.613281 16.011719 11.988281 15.300781 11.988281 14.46875 C 11.988281 14.050781 12.140625 13.734375 12.460938 13.464844 C 12.78125 13.195312 13.296875 12.988281 14 12.988281 Z M 11 19 C 10.449219 19 10 19.449219 10 20 L 10 39 C 10 39.550781 10.449219 40 11 40 L 17 40 C 17.550781 40 18 39.550781 18 39 L 18 20 C 18 19.449219 17.550781 19 17 19 Z M 20 19 C 19.449219 19 19 19.449219 19 20 L 19 39 C 19 39.550781 19.449219 40 20 40 L 26 40 C 26.550781 40 27 39.550781 27 39 L 27 29 C 27 28.171875 27.226562 27.34375 27.625 26.804688 C 28.023438 26.265625 28.527344 25.941406 29.480469 25.957031 C 30.46875 25.972656 30.988281 26.3125 31.382812 26.84375 C 31.78125 27.371094 32 28.167969 32 29 L 32 39 C 32 39.550781 32.449219 40 33 40 L 39 40 C 39.550781 40 40 39.550781 40 39 L 40 28.261719 C 40 25.300781 39.121094 22.953125 37.617188 21.367188 C 36.117188 19.78125 34.023438 19 31.8125 19 C 29.710938 19 28.109375 19.703125 27 20.425781 L 27 20 C 27 19.449219 26.550781 19 26 19 Z M 12 21 L 16 21 L 16 38 L 12 38 Z M 21 21 L 25 21 L 25 22.558594 C 25 22.992188 25.273438 23.371094 25.683594 23.507812 C 26.089844 23.644531 26.539062 23.503906 26.796875 23.160156 C 26.796875 23.160156 28.371094 21 31.8125 21 C 33.566406 21 35.070312 21.582031 36.167969 22.742188 C 37.265625 23.902344 38 25.6875 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.832031 33.71875 26.628906 32.988281 25.648438 C 32.261719 24.664062 31.03125 23.984375 29.515625 23.957031 C 27.996094 23.929688 26.746094 24.628906 26.015625 25.621094 C 25.285156 26.609375 25 27.828125 25 29 L 25 38 L 21 38 Z M 21 21 "),c(e,"viewBox","5 5 40 40"),c(e,"class","w-7 h-7 fill-zinc-200 hover:fill-rose-700 hover:bg-rose-100 rounded-sm")},m(l,a){l1(l,e,a),i(e,t)},p:s1,i:s1,o:s1,d(l){l&&h(e)}}}class xe extends D1{constructor(e){super(),S1(this,e,null,ke,z1,{})}}function Me(r){let e,t;return{c(){e=W1("svg"),t=W1("path"),this.h()},l(l){e=X1(l,"svg",{viewBox:!0,class:!0});var a=d(e);t=X1(a,"path",{style:!0,d:!0}),d(t).forEach(h),a.forEach(h),this.h()},h(){h1(t,"stroke","none"),h1(t,"fill-rule","nonzero"),h1(t,"fill-opacity","1"),c(t,"d","M 25 2 C 12.3125 2 2 12.3125 2 25 C 2 37.6875 12.3125 48 25 48 C 37.6875 48 48 37.6875 48 25 C 48 12.3125 37.6875 2 25 2 Z M 25 4 C 36.605469 4 46 13.394531 46 25 C 46 25.070312 45.996094 25.140625 45.996094 25.214844 C 45.355469 25.152344 44.617188 25.097656 43.675781 25.066406 C 42.347656 25.015625 40.671875 25.03125 38.773438 25.125 C 38.84375 24.632812 38.894531 24.136719 38.894531 23.628906 C 38.992188 21.753906 38.363281 20.003906 37.339844 18.457031 C 37.585938 17.601562 37.875 16.515625 37.949219 15.285156 C 38.03125 13.878906 37.910156 12.320312 36.785156 11.269531 L 36.496094 11 L 36.101562 11 C 33.417969 11 31.578125 12.125 30.457031 13.011719 C 28.835938 12.386719 27.011719 12 25 12 C 22.976562 12 21.136719 12.390625 19.449219 13.019531 C 18.324219 12.125 16.488281 11 13.800781 11 L 13.410156 11 L 13.121094 11.269531 C 12.019531 12.289062 11.917969 13.800781 11.988281 15.199219 C 12.046875 16.429688 12.320312 17.550781 12.566406 18.449219 C 11.523438 20.023438 10.902344 21.820312 10.902344 23.601562 C 10.902344 24.109375 10.949219 24.609375 11.019531 25.101562 C 9.210938 25.019531 7.601562 25 6.324219 25.046875 C 5.382812 25.082031 4.644531 25.136719 4.003906 25.195312 C 4.003906 25.128906 4 25.066406 4 25 C 4 13.394531 13.394531 4 25 4 Z M 14.394531 13.128906 C 16.414062 13.320312 17.933594 14.222656 18.632812 14.847656 L 19.101562 15.261719 L 19.679688 15.023438 C 21.261719 14.375 23.027344 14 25 14 C 26.972656 14 28.738281 14.375 30.199219 15.015625 L 30.785156 15.273438 L 31.261719 14.847656 C 31.964844 14.222656 33.488281 13.320312 35.503906 13.128906 C 35.773438 13.574219 36.007812 14.207031 35.949219 15.164062 C 35.882812 16.3125 35.578125 17.558594 35.34375 18.300781 L 35.195312 18.78125 L 35.492188 19.191406 C 36.484375 20.539062 36.988281 22 36.902344 23.542969 L 36.898438 23.570312 L 36.898438 23.597656 C 36.898438 26.09375 36 28.09375 34.085938 29.570312 C 32.175781 31.050781 29.152344 32 24.898438 32 C 20.648438 32 17.625 31.050781 15.710938 29.570312 C 13.796875 28.09375 12.898438 26.09375 12.898438 23.597656 C 12.898438 22.136719 13.429688 20.523438 14.40625 19.191406 L 14.699219 18.792969 L 14.558594 18.316406 C 14.328125 17.53125 14.042969 16.253906 13.984375 15.101562 C 13.9375 14.144531 14.167969 13.535156 14.394531 13.128906 Z M 8.882812 26.019531 C 9.589844 26.03125 10.402344 26.070312 11.210938 26.109375 C 11.289062 26.421875 11.378906 26.726562 11.484375 27.027344 C 8.179688 27.097656 5.703125 27.429688 4.179688 27.714844 C 4.113281 27.214844 4.0625 26.710938 4.035156 26.199219 C 5.164062 26.09375 6.75 25.996094 8.882812 26.019531 Z M 41.113281 26.035156 C 43.246094 26.011719 44.835938 26.109375 45.960938 26.214844 C 45.933594 26.71875 45.882812 27.214844 45.820312 27.707031 C 44.242188 27.417969 41.699219 27.085938 38.304688 27.03125 C 38.410156 26.738281 38.5 26.4375 38.574219 26.132812 C 39.472656 26.085938 40.34375 26.046875 41.113281 26.035156 Z M 11.910156 28.019531 C 12.507812 29.214844 13.363281 30.28125 14.488281 31.15625 C 16.027344 32.34375 18.03125 33.179688 20.476562 33.625 C 20.15625 33.953125 19.867188 34.3125 19.605469 34.695312 L 19.546875 34.640625 C 19.550781 34.632812 19.050781 34.886719 18.300781 34.953125 C 17.546875 35.019531 16.621094 35 15.800781 35 C 14.574219 35 14.035156 34.421875 13.175781 33.367188 C 12.695312 32.722656 12.113281 32.203125 11.550781 31.808594 C 10.96875 31.402344 10.476562 31.117188 9.867188 31.015625 L 9.785156 31 L 9.699219 31 C 9.234375 31 8.78125 31.035156 8.359375 31.515625 C 8.148438 31.757812 8.003906 32.203125 8.097656 32.582031 C 8.191406 32.957031 8.429688 33.191406 8.644531 33.332031 C 10.011719 34.242188 10.253906 36.046875 11.109375 37.652344 C 11.910156 39.246094 13.636719 40 15.402344 40 L 18 40 L 18 44.804688 C 10.96875 42.320312 5.664062 36.203125 4.332031 28.703125 C 5.863281 28.414062 8.425781 28.066406 11.914062 28.019531 Z M 37.882812 28.027344 C 41.445312 28.058594 44.082031 28.402344 45.667969 28.695312 C 44.339844 36.203125 39.035156 42.320312 32 44.800781 L 32 39.597656 C 32 38.015625 31.480469 36.269531 30.574219 34.808594 C 30.300781 34.367188 29.976562 33.949219 29.613281 33.574219 C 31.929688 33.117188 33.832031 32.296875 35.3125 31.152344 C 36.4375 30.285156 37.289062 29.21875 37.882812 28.027344 Z M 23.699219 34.097656 L 26.5 34.097656 C 27.3125 34.097656 28.179688 34.746094 28.875 35.863281 C 29.570312 36.984375 30 38.484375 30 39.597656 L 30 45.398438 C 28.398438 45.789062 26.722656 46 25 46 C 23.277344 46 21.601562 45.789062 20 45.398438 L 20 39.597656 C 20 38.507812 20.46875 37.011719 21.207031 35.886719 C 21.949219 34.765625 22.886719 34.097656 23.699219 34.097656 Z M 12.308594 35.28125 C 13.175781 36.179688 14.222656 37 15.800781 37 C 16.578125 37 17.550781 37.027344 18.476562 36.945312 C 18.480469 36.945312 18.484375 36.945312 18.488281 36.941406 C 18.363281 37.292969 18.273438 37.644531 18.199219 38 L 15.402344 38 C 14.167969 38 13.296875 37.554688 12.894531 36.753906 L 12.886719 36.738281 L 12.882812 36.726562 C 12.714844 36.421875 12.5 35.8125 12.308594 35.28125 Z M 12.308594 35.28125 "),c(e,"viewBox","2 2 46 46"),c(e,"class","w-7 h-7 fill-zinc-200 hover:fill-rose-700 hover:bg-rose-100 rounded-full")},m(l,a){l1(l,e,a),i(e,t)},p:s1,i:s1,o:s1,d(l){l&&h(e)}}}class De extends D1{constructor(e){super(),S1(this,e,null,Me,z1,{})}}function ne(r){let e,t;return{c(){e=b("span"),t=Q("\xA0\u{1F44B}"),this.h()},l(l){e=p(l,"SPAN",{class:!0});var a=d(e);t=J(a,"\xA0\u{1F44B}"),a.forEach(h),this.h()},h(){c(e,"class","wave text-3xl absolute svelte-1fe3l3i")},m(l,a){l1(l,e,a),i(e,t)},d(l){l&&h(e)}}}function Se(r){let e,t,l,a,n,o,C,E,u,_,P,B,z,X,q,M,j,w,k,g,L,G,x,S,K,A,O,d1,c1,F,N,$,o1,e1,g1=r[4][r[3]-2015]+"",k1,t1,U,m1,W,r1,u1,Y,f1,n1,a1,f,V,y=r[2]&&ne();w=new xe({}),L=new De({});function R(s){r[9](s)}function m(s){r[10](s)}let T={};return r[0]!==void 0&&(T.offsetX=r[0]),r[1]!==void 0&&(T.trackWidth=r[1]),A=new Le({props:T}),R1.push(()=>G1(A,"offsetX",R)),R1.push(()=>G1(A,"trackWidth",m)),r1=new Z1({props:{title:"Pasta Quiz",subtitle:"Put your pasta knowledge to the test!",summary:"Built with TypeScript, Next.js and TailwindCSS.",image:"/portfolio/pasta-quiz.png",link:"https://pasta-quiz.vercel.app",github:"https://github.com/kp2c/pasta-quiz"}}),Y=new Z1({props:{title:"WHILE Compiler",subtitle:"Online interpreter and compiler for a programming language called WHILE.",summary:"Built with SvelteKit, TypeScript and TailwindCSS.",image:"/portfolio/while-compiler.png",link:"https://while-compiler.vercel.app",github:"https://github.com/kp2c/while-compiler"}}),n1=new Z1({props:{title:"Arous Elbahar Style",subtitle:"Second-hand store website for Arous Elbahar, a non-profit organization.",summary:"Built with Shopify. Not yet available.",image:"/portfolio/arous-style.png"}}),{c(){e=b("head"),t=b("title"),l=Q("Kfir Fitousi | Front End Developer"),a=H(),n=b("div"),o=b("img"),E=H(),u=b("div"),_=b("h1"),P=Q(`Kfir Fitousi
            `),y&&y.c(),B=H(),z=b("h2"),X=Q("Front End Developer"),q=H(),M=b("div"),j=b("a"),v1(w.$$.fragment),k=H(),g=b("a"),v1(L.$$.fragment),G=H(),x=b("p"),S=Q(r[3]),K=H(),v1(A.$$.fragment),c1=H(),F=b("div"),N=b("p"),$=Q("Drag the racecar across the track to progress through the timeline"),o1=H(),e1=b("p"),k1=H(),t1=b("h1"),U=Q("Projects"),m1=H(),W=b("div"),v1(r1.$$.fragment),u1=H(),v1(Y.$$.fragment),f1=H(),v1(n1.$$.fragment),this.h()},l(s){e=p(s,"HEAD",{});var D=d(e);t=p(D,"TITLE",{});var Z=d(t);l=J(Z,"Kfir Fitousi | Front End Developer"),Z.forEach(h),D.forEach(h),a=I(s),n=p(s,"DIV",{class:!0});var v=d(n);o=p(v,"IMG",{src:!0,alt:!0,class:!0}),E=I(v),u=p(v,"DIV",{class:!0});var b1=d(u);_=p(b1,"H1",{class:!0});var p1=d(_);P=J(p1,`Kfir Fitousi
            `),y&&y.l(p1),p1.forEach(h),b1.forEach(h),B=I(v),z=p(v,"H2",{class:!0});var x1=d(z);X=J(x1,"Front End Developer"),x1.forEach(h),q=I(v),M=p(v,"DIV",{class:!0});var A1=d(M);j=p(A1,"A",{href:!0,target:!0});var j1=d(j);_1(w.$$.fragment,j1),j1.forEach(h),k=I(A1),g=p(A1,"A",{href:!0,target:!0});var N1=d(g);_1(L.$$.fragment,N1),N1.forEach(h),A1.forEach(h),G=I(v),x=p(v,"P",{class:!0,style:!0});var q1=d(x);S=J(q1,r[3]),q1.forEach(h),K=I(v),_1(A.$$.fragment,v),c1=I(v),F=p(v,"DIV",{class:!0});var T1=d(F);N=p(T1,"P",{class:!0});var F1=d(N);$=J(F1,"Drag the racecar across the track to progress through the timeline"),F1.forEach(h),o1=I(T1),e1=p(T1,"P",{class:!0});var ie=d(e1);ie.forEach(h),T1.forEach(h),k1=I(v),t1=p(v,"H1",{class:!0});var V1=d(t1);U=J(V1,"Projects"),V1.forEach(h),m1=I(v),W=p(v,"DIV",{class:!0});var C1=d(W);_1(r1.$$.fragment,C1),u1=I(C1),_1(Y.$$.fragment,C1),f1=I(C1),_1(n1.$$.fragment,C1),C1.forEach(h),v.forEach(h),this.h()},h(){B1(o.src,C="/portfolio/kfir.jpg")||c(o,"src",C),c(o,"alt","Kfir Fitousi"),c(o,"class","pic p-0.5 w-40 h-40 mx-auto mt-6 border-2 border-t-[#d27884] border-x-zinc-800 border-b-[#3271aa] rounded-full mb-2"),c(_,"class","text-3xl text-zinc-200 text-center"),c(u,"class","flex flex-row justify-center"),c(z,"class","text-lg text-zinc-200 text-center mb-2"),c(j,"href","https://www.linkedin.com/in/kfirp/"),c(j,"target","_blank"),c(g,"href","https://github.com/kp2c"),c(g,"target","_blank"),c(M,"class","flex flex-row justify-center space-x-3 mb-8"),c(x,"class","w-10 md:w-14 h-5 mx-3 mb-3.5 text-xs md:text-base leading-5 md:leading-5 bg-rose-800 text-zinc-200 text-center rounded-lg select-none"),h1(x,"transform","translateX("+r[0]+"px)"),c(N,"class","text-sm text-center text-gray-600"),c(e1,"class","p-3"),c(F,"class","w-full bg-rose-50 text-zinc-800 pt-1 rounded-b-lg"),c(t1,"class","text-3xl text-zinc-200 text-center mt-10"),c(W,"class","flex flex-wrap justify-center space-y-3 mt-4"),c(n,"class","conatiner max-w-2xl m-auto px-4")},m(s,D){l1(s,e,D),i(e,t),i(t,l),l1(s,a,D),l1(s,n,D),i(n,o),i(n,E),i(n,u),i(u,_),i(_,P),y&&y.m(_,null),i(n,B),i(n,z),i(z,X),i(n,q),i(n,M),i(M,j),w1(w,j,null),i(M,k),i(M,g),w1(L,g,null),i(n,G),i(n,x),i(x,S),i(n,K),w1(A,n,null),i(n,c1),i(n,F),i(F,N),i(N,$),i(F,o1),i(F,e1),e1.innerHTML=g1,i(n,k1),i(n,t1),i(t1,U),i(n,m1),i(n,W),w1(r1,W,null),i(W,u1),w1(Y,W,null),i(W,f1),w1(n1,W,null),a1=!0,f||(V=[M1(_,"mouseover",r[5]),M1(_,"focus",r[6]),M1(_,"mouseout",r[7]),M1(_,"blur",r[8])],f=!0)},p(s,[D]){s[2]?y||(y=ne(),y.c(),y.m(_,null)):y&&(y.d(1),y=null),(!a1||D&8)&&H1(S,s[3]),(!a1||D&1)&&h1(x,"transform","translateX("+s[0]+"px)");const Z={};!O&&D&1&&(O=!0,Z.offsetX=s[0],K1(()=>O=!1)),!d1&&D&2&&(d1=!0,Z.trackWidth=s[1],K1(()=>d1=!1)),A.$set(Z),(!a1||D&8)&&g1!==(g1=s[4][s[3]-2015]+"")&&(e1.innerHTML=g1)},i(s){a1||(L1(w.$$.fragment,s),L1(L.$$.fragment,s),L1(A.$$.fragment,s),L1(r1.$$.fragment,s),L1(Y.$$.fragment,s),L1(n1.$$.fragment,s),a1=!0)},o(s){y1(w.$$.fragment,s),y1(L.$$.fragment,s),y1(A.$$.fragment,s),y1(r1.$$.fragment,s),y1(Y.$$.fragment,s),y1(n1.$$.fragment,s),a1=!1},d(s){s&&h(e),s&&h(a),s&&h(n),y&&y.d(),E1(w),E1(L),E1(A),E1(r1),E1(Y),E1(n1),f=!1,oe(V)}}}function ze(r,e,t){let l,a=!1,n=0,o=640;const C=[2015,2016,2017,2018,2019,2020,2021,2022],E=["In 2015 I blah blah blah blah blah blah blah, blah blah blah blah blah blah blah blah..<br/>        blah blah blah blah blah blah blah.<br/>        blah blah blah blah blah blah blah.<br/>        blah blah blah blah blah blah blah.<br/>        blah blah blah blah blah blah blah.<br/>","In 2016 I..."],u=()=>t(2,a=!0),_=()=>t(2,a=!0),P=()=>t(2,a=!1),B=()=>t(2,a=!1);function z(q){n=q,t(0,n)}function X(q){o=q,t(1,o)}return r.$$.update=()=>{r.$$.dirty&3&&t(3,l=C[Math.floor((n+80)/o*8)-1])},[n,o,a,l,E,u,_,P,B,z,X]}class Te extends D1{constructor(e){super(),S1(this,e,ze,Se,z1,{})}}export{Te as default};
