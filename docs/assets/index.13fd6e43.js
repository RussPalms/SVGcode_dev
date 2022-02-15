import{_ as ut,u as Te,s as D,g as F,C as dt,d as mt,o as pt,a as ht,c as ft,p as gt,b as He,e as vt,f as yt,h as _t,v as wt}from"./vendor.78f84693.js";const Et=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerpolicy&&(o.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?o.credentials="include":a.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}};Et();const bt="modulepreload",Ne={},Lt="/",c=function(t,n){return!n||n.length===0?t():Promise.all(n.map(r=>{if(r=`${Lt}${r}`,r in Ne)return;Ne[r]=!0;const a=r.endsWith(".css"),o=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${o}`))return;const i=document.createElement("link");if(i.rel=a?"stylesheet":bt,a||(i.as="script",i.crossOrigin=""),i.href=r,document.head.appendChild(i),a)return new Promise((l,s)=>{i.addEventListener("load",l),i.addEventListener("error",s)})})).then(()=>t())},I=document.querySelector("canvas"),_n=document.querySelector(".menu"),wn=document.querySelector("main"),ze=document.querySelector(".details"),S=document.querySelector(".posterize"),St=document.querySelector("[for=posterize]"),_=document.querySelector(".color"),Ot=document.querySelector("[for=color]"),k=document.querySelector(".monochrome"),kt=document.querySelector("[for=monochrome]"),C=document.querySelector(".consider-dpr"),xt=document.querySelector('[for="consider-dpr"]'),O=document.querySelector(".optimize-curves"),Rt=document.querySelector('[for="optimize-curves"]'),W=document.querySelector(".show-advanced"),Ct=document.querySelector('[for="show-advanced"]'),f=document.querySelector("img"),Ie=document.querySelector(".reset-all"),se=document.querySelector(".open"),ce=document.querySelector(".save"),le=document.querySelector(".copy"),ue=document.querySelector(".paste"),de=document.querySelector(".install"),g=document.querySelector(".svg-output"),Pt=document.querySelector(".debug"),me=document.querySelector("progress"),ae=document.querySelector(".toast"),_e=document.documentElement,Re=document.querySelector("details.main"),Le=document.querySelector("summary"),Fe=document.querySelector(".close-options-button"),Tt=document.querySelector(".license"),It=document.querySelector(".about"),J=document.querySelector("pinch-zoom"),fe=document.querySelector(".language"),B=window.devicePixelRatio;J.addEventListener("change",()=>{const{x:e,y:t,scale:n}=J;g.setAttribute("transform",`translate(${e}, ${t}) scale(${n})`)});J.addEventListener("pointerdown",()=>{J.style.cursor="grabbing"});J.addEventListener("pointerup",()=>{J.style.cursor=""});const Ke=()=>{g.setAttribute("transform","")},pe=(e,t)=>{let n;return function(...a){const o=()=>{clearTimeout(n),e(...a)};clearTimeout(n),n=setTimeout(o,t)}};/*!
 * canvas-size
 * v1.2.5
 * https://github.com/jhildenbiddle/canvas-size
 * (c) 2015-2021 John Hildenbiddle <http://hildenbiddle.com>
 * MIT license
 */function $e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?$e(Object(n),!0).forEach(function(r){At(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$e(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function At(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function jt(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,o;for(o=0;o<r.length;o++)a=r[o],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Dt(e,t){if(e==null)return{};var n=jt(e,t),r,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function We(e,t){return Mt(e)||zt(e,t)||Je(e,t)||Wt()}function oe(e){return Vt(e)||Nt(e)||Je(e)||$t()}function Vt(e){if(Array.isArray(e))return Ce(e)}function Mt(e){if(Array.isArray(e))return e}function Nt(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function zt(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,o=!1,i,l;try{for(n=n.call(e);!(a=(i=n.next()).done)&&(r.push(i.value),!(t&&r.length===t));a=!0);}catch(s){o=!0,l=s}finally{try{!a&&n.return!=null&&n.return()}finally{if(o)throw l}}return r}}function Je(e,t){if(!!e){if(typeof e=="string")return Ce(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ce(e,t)}}function Ce(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function $t(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Wt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ee(e){var t=e.sizes.shift(),n=Math.max(Math.ceil(t[0]),1),r=Math.max(Math.ceil(t[1]),1),a=[n-1,r-1,1,1],o=Date.now(),i=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,l,s;i?(l=new OffscreenCanvas(1,1),s=new OffscreenCanvas(n,r)):(l=document.createElement("canvas"),l.width=1,l.height=1,s=document.createElement("canvas"),s.width=n,s.height=r);var u=l.getContext("2d"),h=s.getContext("2d");h&&(h.fillRect.apply(h,a),u.drawImage(s,n-1,r-1,1,1,0,0,1,1));var v=u&&u.getImageData(0,0,1,1).data[3]!==0,m=Date.now()-o;return i?(postMessage({width:n,height:r,benchmark:m,isTestPass:v}),!v&&e.sizes.length&&ee(e)):v?e.onSuccess(n,r,m):(e.onError(n,r,m),e.sizes.length&&ee(e)),v}var Se={area:[16384,14188,11402,11180,10836,8192,4096,1],height:[8388607,65535,32767,16384,8192,4096,1],width:[4194303,65535,32767,16384,8192,4096,1]},Ut=["onError","onSuccess"],H={max:null,min:1,sizes:[],step:1024,usePromise:!1,useWorker:!1,onError:Function.prototype,onSuccess:Function.prototype},Z={};function Oe(e){var t=e.width===e.height,n=e.height===1,r=e.width===1,a=[];if(!e.width||!e.height)e.sizes.forEach(function(h){var v=t||n?h:1,m=t||r?h:1;a.push([v,m])});else for(var o=e.min||H.min,i=e.step||H.step,l=Math.max(e.width,e.height);l>=o;){var s=t||n?l:1,u=t||r?l:1;a.push([s,u]),l-=i}return a}function ie(e){var t=window&&"HTMLCanvasElement"in window,n=window&&"OffscreenCanvas"in window,r=Date.now(),a=e.onError,o=e.onSuccess,i=Dt(e,Ut),l=null;if(!t)return!1;if(e.useWorker&&n){var s=`
            var canvasTest = `.concat(ee.toString(),`;
            onmessage = function(e) {
                canvasTest(e.data);
            };
        `),u=new Blob([s],{type:"application/javascript"}),h=URL.createObjectURL(u);l=new Worker(h),URL.revokeObjectURL(h),l.onmessage=function(v){var m=v.data,b=m.width,P=m.height,re=m.benchmark,Ee=m.isTestPass;Ee?(Z[r].onSuccess(b,P,re),delete Z[r]):Z[r].onError(b,P,re)}}if(e.usePromise)return new Promise(function(v,m){var b=E(E({},e),{},{onError:function(q,G,Q){var be;if(e.sizes.length===0)be=!0;else{var it=e.sizes.slice(-1),st=We(it,1),Me=We(st[0],2),ct=Me[0],lt=Me[1];be=q===ct&&G===lt}a(q,G,Q),be&&m({width:q,height:G,benchmark:Q})},onSuccess:function(q,G,Q){o(q,G,Q),v({width:q,height:G,benchmark:Q})}});if(l){var P=b.onError,re=b.onSuccess;Z[r]={onError:P,onSuccess:re},l.postMessage(i)}else ee(b)});if(l)Z[r]={onError:a,onSuccess:o},l.postMessage(i);else return ee(e)}var qt={maxArea:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=Oe({width:t.max,height:t.max,min:t.min,step:t.step,sizes:oe(Se.area)}),r=E(E(E({},H),t),{},{sizes:n});return ie(r)},maxHeight:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=Oe({width:1,height:t.max,min:t.min,step:t.step,sizes:oe(Se.height)}),r=E(E(E({},H),t),{},{sizes:n});return ie(r)},maxWidth:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=Oe({width:t.max,height:1,min:t.min,step:t.step,sizes:oe(Se.width)}),r=E(E(E({},H),t),{},{sizes:n});return ie(r)},test:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=E(E({},H),t);return n.sizes=oe(n.sizes),n.width&&n.height&&(n.sizes=[[n.width,n.height]]),ie(n)}};let Qe,Ze;const Xe="OffscreenCanvas"in window&&"CanvasFilter"in window;if(Xe)c(()=>import("./preprocessworker.a4b60f0c.js"),[]).then(e=>{const t=e.default;let n=null;const r=I.getContext("2d");Qe=async()=>{n&&n.terminate(),n=new t;const a=I.cloneNode().transferControlToOffscreen();return n.postMessage({offscreen:a},[a]),new Promise(async o=>{const{width:i,height:l}=Ue();let s;try{s=await createImageBitmap(f)}catch{try{s=await createImageBitmap(f,0,0,i,l)}catch(h){console.error(h.name,h.message),g.innerHTML="",L(h.message);return}}const u=new MessageChannel;u.port1.onmessage=({data:h})=>{u.port1.close(),n&&(n.terminate(),n=null),I.width=i,I.height=l,r.putImageData(h.result,0,0),o(h.result)},n.postMessage({inputImageBitmap:s,posterize:S.checked,rgba:{r:j(p[w.red]),g:j(p[w.green]),b:j(p[w.blue]),a:j(p[w.alpha])},cssFilters:Ye(),rotate:Number(p[ne.rotation].value),width:i,height:l,dpr:B},[u.port2])})}});else{const e=I.getContext("2d",{desynchronized:!0});e.scale(B,B),e.imageSmoothingEnabled=!0,Ze=()=>{let{width:t,height:n}=Ue();const r=C.checked?B:1;let a=1;for(;!qt.test({width:t,height:n});)t=Math.floor(t/2),n=Math.floor(n/2),a/=2;I.width=t,I.height=n,e.clearRect(0,0,t,n),e.filter=Bt(),e.setTransform(1,0,0,1,t/2,n/2);const o=Number(p[ne.rotation].value);return e.rotate(o*Math.PI/180),e.drawImage(f,-r*f.naturalWidth*a/2,-r*f.naturalHeight*a/2),e.getImageData(0,0,t,n)}}const Ue=()=>{const e=Number(p[ne.scale].value)/100;return{width:Math.ceil(B*f.naturalWidth*e),height:Math.ceil(B*f.naturalHeight*e)}},j=e=>{const t=Number(e.value),n=[];for(let r=0;r<=t;r++)n[r]=Number((1/t*r).toFixed(1));return n},Gt=()=>`data:image/svg+xml;utf8,<svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <filter id="posterize">
        <feComponentTransfer>
          <feFuncR type="discrete" tableValues="${j(p[w.red]).join(",")}" />
          <feFuncG type="discrete" tableValues="${j(p[w.green]).join(",")}" />
          <feFuncB type="discrete" tableValues="${j(p[w.blue]).join(",")}" />
          <feFuncA type="discrete" tableValues="${j(p[w.alpha])}" />
        </feComponentTransfer>
      </filter>
    </svg>`.replace(/[\r\n]/g,"").replace(/\s+/g," ").trim(),Ye=()=>{let e="";for(const[t,n]of Object.entries(tt)){const r=p[t];n.initial!==Number(r.value)&&(e+=`${t}(${r.value}${r.dataset.unit}) `)}return e},Bt=()=>{let e=`${S.checked?`url('${Gt()}#posterize') `:""}`;return e+=Ye(),e.trim()||"none"};function Ht(){return new Worker("/assets/monochromeworker.ee1cfa6e.js",{type:"module"})}let V=null;const Ft=async e=>(V&&V.terminate(),V=new Ht,new Promise(async t=>{const n=new MessageChannel;n.port1.onmessage=({data:a})=>{n.port1.close(),V&&(V.terminate(),V=null),t(a.result)};const r={turdsize:Number(p[y.turdsize].value),alphamax:Number(p[y.alphamax].value),turnpolicy:Number(p[y.turnpolicy].value),opttolerance:Number(p[y.opttolerance].value),opticurve:O.checked?1:0,extractcolors:!1};V.postMessage({imageData:e,params:r},[n.port2])}));function Kt(){return new Worker("/assets/colorworker.893f8723.js",{type:"module"})}let M=null;const R={},Jt=async e=>(M&&M.terminate(),M=new Kt,new Promise(async t=>{const n=new MessageChannel;n.port1.onmessage=({data:u})=>{n.port1.close(),M&&(M.terminate(),M=null),t(u.result)},me.value=0;let r="",a="",o="",i=0;R.current&&(clearInterval(R.current),R.current=null),R.current=setInterval(()=>{const u=`${r}${o}${a}`;if(u.length!==i){const h=g.dataset.transform;h&&g.setAttribute("transform",h),g.innerHTML=u,i=u.length}},500);const l=new MessageChannel;l.port1.onmessage=({data:u})=>{const h=Math.floor(u.processed/u.total*100);me.value=h,u.svg&&(r||(r=u.svg.replace(/(.*?<svg[^>]+>)(.*?)(<\/svg>)/,"$1").replace(/\s+width="\d+(?:\.\d+)?"/,"").replace(/\s+height="\d+(?:\.\d+)"/,""),a=u.svg.replace(/(.*?<svg[^>]+>)(.*?)(<\/svg>)/,"$3")),o+=u.svg.replace(/(.*?<svg[^>]+>)(.*?)(<\/svg>)/,"$2")),u.processed===u.total&&(clearInterval(R.current),R.current=null,l.port1.close(),me.value=0)};const s={minPathSegments:Number(p[y.minPathLenght].value),strokeWidth:Number(p[y.strokeWidth].value),turdsize:Number(p[y.turdsize].value),alphamax:Number(p[y.alphamax].value),turnpolicy:Number(p[y.turnpolicy].value),opttolerance:Number(p[y.opttolerance].value),opticurve:O.checked?1:0,extractcolors:!1,posterizelevel:2,posterizationalgorithm:0};M.postMessage({imageData:e,params:s},[n.port2,l.port2])}));function Qt(e){switch(e){case"../i18n/ar-TN.js":return c(()=>import("./ar-TN.90039caa.js"),["assets/ar-TN.90039caa.js","assets/languages.c88bcbdb.js"]);case"../i18n/ca-ES.js":return c(()=>import("./ca-ES.35128f57.js"),["assets/ca-ES.35128f57.js","assets/languages.c88bcbdb.js"]);case"../i18n/da-DK.js":return c(()=>import("./da-DK.19f2f182.js"),["assets/da-DK.19f2f182.js","assets/languages.c88bcbdb.js"]);case"../i18n/de-DE.js":return c(()=>import("./de-DE.42309e3f.js"),["assets/de-DE.42309e3f.js","assets/languages.c88bcbdb.js"]);case"../i18n/el-GR.js":return c(()=>import("./el-GR.92289c30.js"),["assets/el-GR.92289c30.js","assets/languages.c88bcbdb.js"]);case"../i18n/en-GB.js":return c(()=>import("./en-GB.9a47b6bc.js"),["assets/en-GB.9a47b6bc.js","assets/languages.c88bcbdb.js"]);case"../i18n/en-US.js":return c(()=>import("./en-US.4e55a617.js"),["assets/en-US.4e55a617.js","assets/languages.c88bcbdb.js"]);case"../i18n/es-ES.js":return c(()=>import("./es-ES.86af4774.js"),["assets/es-ES.86af4774.js","assets/languages.c88bcbdb.js"]);case"../i18n/fr-FR.js":return c(()=>import("./fr-FR.f256497a.js"),["assets/fr-FR.f256497a.js","assets/languages.c88bcbdb.js"]);case"../i18n/he-IL.js":return c(()=>import("./he-IL.79a09e7a.js"),["assets/he-IL.79a09e7a.js","assets/languages.c88bcbdb.js"]);case"../i18n/id-ID.js":return c(()=>import("./id-ID.ed7ec410.js"),["assets/id-ID.ed7ec410.js","assets/languages.c88bcbdb.js"]);case"../i18n/ja-JP.js":return c(()=>import("./ja-JP.7fbb9705.js"),["assets/ja-JP.7fbb9705.js","assets/languages.c88bcbdb.js"]);case"../i18n/ko-KR.js":return c(()=>import("./ko-KR.ef698297.js"),["assets/ko-KR.ef698297.js","assets/languages.c88bcbdb.js"]);case"../i18n/languages.js":return c(()=>import("./languages.c88bcbdb.js"),[]);case"../i18n/nl-NL.js":return c(()=>import("./nl-NL.9799e2ef.js"),["assets/nl-NL.9799e2ef.js","assets/languages.c88bcbdb.js"]);case"../i18n/no-NO.js":return c(()=>import("./no-NO.8631ed9f.js"),["assets/no-NO.8631ed9f.js","assets/languages.c88bcbdb.js"]);case"../i18n/pt-BR.js":return c(()=>import("./pt-BR.ffb42e25.js"),["assets/pt-BR.ffb42e25.js","assets/languages.c88bcbdb.js"]);case"../i18n/ru-RU.js":return c(()=>import("./ru-RU.9cd4f25d.js"),["assets/ru-RU.9cd4f25d.js","assets/languages.c88bcbdb.js"]);case"../i18n/uk-UA.js":return c(()=>import("./uk-UA.d02d72b6.js"),["assets/uk-UA.d02d72b6.js","assets/languages.c88bcbdb.js"]);case"../i18n/zh-CN.js":return c(()=>import("./zh-CN.a4f8b093.js"),["assets/zh-CN.a4f8b093.js","assets/languages.c88bcbdb.js"]);default:return new Promise(function(t,n){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+e)))})}}function Zt(e){switch(e){case"../i18n/ar-TN.js":return c(()=>import("./ar-TN.90039caa.js"),["assets/ar-TN.90039caa.js","assets/languages.c88bcbdb.js"]);case"../i18n/ca-ES.js":return c(()=>import("./ca-ES.35128f57.js"),["assets/ca-ES.35128f57.js","assets/languages.c88bcbdb.js"]);case"../i18n/da-DK.js":return c(()=>import("./da-DK.19f2f182.js"),["assets/da-DK.19f2f182.js","assets/languages.c88bcbdb.js"]);case"../i18n/de-DE.js":return c(()=>import("./de-DE.42309e3f.js"),["assets/de-DE.42309e3f.js","assets/languages.c88bcbdb.js"]);case"../i18n/el-GR.js":return c(()=>import("./el-GR.92289c30.js"),["assets/el-GR.92289c30.js","assets/languages.c88bcbdb.js"]);case"../i18n/en-GB.js":return c(()=>import("./en-GB.9a47b6bc.js"),["assets/en-GB.9a47b6bc.js","assets/languages.c88bcbdb.js"]);case"../i18n/en-US.js":return c(()=>import("./en-US.4e55a617.js"),["assets/en-US.4e55a617.js","assets/languages.c88bcbdb.js"]);case"../i18n/es-ES.js":return c(()=>import("./es-ES.86af4774.js"),["assets/es-ES.86af4774.js","assets/languages.c88bcbdb.js"]);case"../i18n/fr-FR.js":return c(()=>import("./fr-FR.f256497a.js"),["assets/fr-FR.f256497a.js","assets/languages.c88bcbdb.js"]);case"../i18n/he-IL.js":return c(()=>import("./he-IL.79a09e7a.js"),["assets/he-IL.79a09e7a.js","assets/languages.c88bcbdb.js"]);case"../i18n/id-ID.js":return c(()=>import("./id-ID.ed7ec410.js"),["assets/id-ID.ed7ec410.js","assets/languages.c88bcbdb.js"]);case"../i18n/ja-JP.js":return c(()=>import("./ja-JP.7fbb9705.js"),["assets/ja-JP.7fbb9705.js","assets/languages.c88bcbdb.js"]);case"../i18n/ko-KR.js":return c(()=>import("./ko-KR.ef698297.js"),["assets/ko-KR.ef698297.js","assets/languages.c88bcbdb.js"]);case"../i18n/languages.js":return c(()=>import("./languages.c88bcbdb.js"),[]);case"../i18n/nl-NL.js":return c(()=>import("./nl-NL.9799e2ef.js"),["assets/nl-NL.9799e2ef.js","assets/languages.c88bcbdb.js"]);case"../i18n/no-NO.js":return c(()=>import("./no-NO.8631ed9f.js"),["assets/no-NO.8631ed9f.js","assets/languages.c88bcbdb.js"]);case"../i18n/pt-BR.js":return c(()=>import("./pt-BR.ffb42e25.js"),["assets/pt-BR.ffb42e25.js","assets/languages.c88bcbdb.js"]);case"../i18n/ru-RU.js":return c(()=>import("./ru-RU.9cd4f25d.js"),["assets/ru-RU.9cd4f25d.js","assets/languages.c88bcbdb.js"]);case"../i18n/uk-UA.js":return c(()=>import("./uk-UA.d02d72b6.js"),["assets/uk-UA.d02d72b6.js","assets/languages.c88bcbdb.js"]);case"../i18n/zh-CN.js":return c(()=>import("./zh-CN.a4f8b093.js"),["assets/zh-CN.a4f8b093.js","assets/languages.c88bcbdb.js"]);default:return new Promise(function(t,n){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+e)))})}}const qe="language",X=["ar","ca","da","de","el","en","es","fr","he","id","ja","ko","nl","pt","ru","uk","zh","no"],ke=["ar-TN","ca-ES","da-DK","de-DE","el-GR","en-GB","en-US","es-ES","fr-FR","he-IL","id-ID","ja-JP","ko-KR","nl-NL","pt-BR","ru-RU","uk-UA","zh-CN","no-NO"],Xt=["ar","fa","he","ur"];class Yt{constructor(){this.currentLanguageAndLocale=this.detectOrRestoreLanguageAndLocale(),this.defaultLanguage=X[0],this.defaultLocale=ke[0],this.translations=null,this.supportedLanguages=X,this.supportedLocales=ke}detectOrRestoreLanguageAndLocale(){const t=new URL(location),n=t.searchParams,r=n.get("lang");if(r){const[s,u=""]=r.split("-");this.setLanguageAndLocale(s,u),n.delete("lang"),history.pushState({},"",t)}const a=localStorage.getItem(qe);if(a){const{language:s,locale:u}=JSON.parse(a);return this.setLanguageAndLocale(s,u),{language:s,locale:u}}let[o,i=""]=navigator.language?.split("-");i&&(i=i.toUpperCase()),(!o||!X.includes(o))&&(o=X[0]);const l={language:o,locale:i};return this.setLanguageAndLocale(o,i),l}async setLanguageAndLocale(t,n){if(!X.includes(t))throw new Error(`Language "${t}" is not supported.`);if(n&&!ke.includes(`${t}-${n}`))throw new Error(`Locale "${t}-${n}" is not supported.`);this.currentLanguageAndLocale={language:t,locale:n},localStorage.setItem(qe,JSON.stringify(this.currentLanguageAndLocale)),document.documentElement.lang=`${t}${n?`-${n}`:""}`,Xt.includes(t)?document.documentElement.dir="rtl":document.documentElement.dir="ltr",await this.getTranslations()}async getTranslations(){const{language:t,locale:n}=this.currentLanguageAndLocale;this.translations=(await Zt(`../i18n/${t}${n?`-${n}`:""}.js`).catch(()=>Qt(`../i18n/${this.defaultLocale}.js`))).default}t(t){return this.translations[t]||"\u26D4\uFE0F Missing translation"}}const d=new Yt;var en='<svg viewBox="0 0 57 57" xmlns="http://www.w3.org/2000/svg" stroke="currentColor"><g transform="translate(1 1)" stroke-width="2" fill="none" fill-rule="evenodd"><circle cx="5" cy="50" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" values="50;5;50;50" calcMode="linear" repeatCount="indefinite"/><animate attributeName="cx" begin="0s" dur="2.2s" values="5;27;49;5" calcMode="linear" repeatCount="indefinite"/></circle><circle cx="27" cy="5" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" from="5" to="5" values="5;50;50;5" calcMode="linear" repeatCount="indefinite"/><animate attributeName="cx" begin="0s" dur="2.2s" from="27" to="27" values="27;49;5;27" calcMode="linear" repeatCount="indefinite"/></circle><circle cx="49" cy="50" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" values="50;50;5;50" calcMode="linear" repeatCount="indefinite"/><animate attributeName="cx" from="49" to="49" begin="0s" dur="2.2s" values="49;5;27;49" calcMode="linear" repeatCount="indefinite"/></circle></g></svg>';const Ge=(e,t)=>{!e||(e=e.replace(/\s+width="\d+(?:\.\d+)?"/,"").replace(/\s+height="\d+(?:\.\d+)"/,""),g.classList.remove(ge),g.classList.remove(ve),g.classList.add(t),g.innerHTML=e,L(`${d.t("svgSize")}: ${e.length} ${d.t("bytes")}`,3e3))},x=async()=>{g.innerHTML="",g.classList.remove(ge,ve),R.current&&(clearInterval(R.current),R.current=null);const e=g.getAttribute("transform");g.innerHTML=en,e&&(g.dataset.transform=e,g.setAttribute("transform",""));const t=Xe?await Qe():Ze();if(_.checked){const n=await Jt(t);e&&g.setAttribute("transform",e),Ge(n,ge)}else{const n=await Ft(t);e&&g.setAttribute("transform",e),Ge(n,ve)}};function tn(){return new Worker("/assets/svgoworker.5f3d0bc7.js",{type:"module"})}let N=null;const he=async e=>(N&&N.terminate(),N=new tn,new Promise(t=>{const n=new MessageChannel;n.port1.onmessage=({data:r})=>{n.port1.close(),N&&(N.terminate(),N=null),t(r.result)},N.postMessage({svg:e},[n.port2])})),te="fileHandle",nn=e=>e?e.name.replace(/\.[^\.]+$/,""):"";se.addEventListener("click",async()=>{try{const e=await ut({mimeTypes:["image/*"],description:"Image files"}),t=URL.createObjectURL(e);f.addEventListener("load",()=>{URL.revokeObjectURL(t)},{once:!0}),f.src=t,Te&&await D(te,e.handle)}catch(e){console.error(e.name,e.message),L(e.message)}});document.addEventListener("dragover",e=>{e.preventDefault()});document.addEventListener("dragenter",e=>{e.preventDefault(),_e.classList.add("dropenter")});document.addEventListener("dragleave",e=>{e.preventDefault(),e.target===document.documentElement&&_e.classList.remove("dropenter")});document.addEventListener("drop",async e=>{e.preventDefault(),e.stopPropagation(),_e.classList.remove("dropenter");const t=e.dataTransfer.items[0];if(t.kind==="file"){let n;if(f.addEventListener("load",()=>{URL.revokeObjectURL(n)},{once:!0}),Te){const a=await t.getAsFileSystemHandle();if(a.kind!=="file")return;const o=await a.getFile();n=URL.createObjectURL(o),f.src=n,await D(te,a);return}const r=t.getAsFile();n=URL.createObjectURL(r),f.src=n}});ce.addEventListener("click",async()=>{try{let e="",t=g.innerHTML,n=null;Te&&(e=nn(await F(te)),n=await showSaveFilePicker({suggestedName:e,types:[{description:"SVG file",accept:{"image/svg+xml":[".svg"]}}]})),L(d.t("optimizingSVG"),1/0),t=await he(t),L(d.t("savedSVG"));const r=new Blob([t],{type:"image/svg+xml"});await dt(r,{fileName:e,description:"SVG file"},n)}catch(e){console.error(e.name,e.message),L(e.message)}});ue.addEventListener("click",async()=>{try{const e=await navigator.clipboard.read();for(const t of e)for(const n of t.types)if(n.startsWith("image/")){const r=await t.getType(n);if(!r)return;const a=URL.createObjectURL(r);f.src=a;return}}catch(e){console.error(e.name,e.message),L(e.message)}});document.addEventListener("paste",e=>{try{if(!e.clipboardData.files.length)return;const t=e.clipboardData.files[0];if(t.type.startsWith("image/")){const n=URL.createObjectURL(t);f.src=n;return}}catch(t){console.error(t.name,t.message),L(t.message)}});le.addEventListener("click",async()=>{let e=g.innerHTML;L(d.t("optimizingSVG"),1/0);try{"ClipboardItem"in window?/Apple/.test(navigator.vendor)?await navigator.clipboard.write([new ClipboardItem({"text/plain":new Promise(async t=>{t(new Blob([e],{type:"text/plain"}))})})]):(e=await he(e),await navigator.clipboard.write([new ClipboardItem({"text/plain":new Promise(async t=>{t(new Blob([e],{type:"text/plain"}))}),"image/svg+xml":new Promise(async t=>{t(new Blob([e],{type:"image/svg+xml"}))})})])):await navigator.clipboard.writeText(await he(e))}catch{e=await he(e);const n=new Blob([e],{type:"text/plain"}),r=new Blob([e],{type:"image/svg+xml"});try{Number(navigator.userAgent.replace(/.*Chrome\/(\d+).*/,"$1"))<=88?await navigator.clipboard.write([new ClipboardItem({[n.type]:n})]):await navigator.clipboard.write([new ClipboardItem({[r.type]:r,[n.type]:n})])}catch{try{await navigator.clipboard.write([new ClipboardItem({[n.type]:n})])}catch(o){L(o.message);return}}}L(d.t("copiedSVG"))});var rn='<svg enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m0 0h24v24h-24z" fill="none"/><path d="m20 17h-16v-12h8v-2h-8c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h4v2h8v-2h4c1.1 0 2-.9 2-2v-3h-2z"/><path d="m17 14 5-5-1.41-1.41-2.59 2.58v-7.17h-2v7.17l-2.59-2.58-1.41 1.41z"/></svg>';const Ae="monochromeSettings",je="colorSettings",ge="color",ve="monochrome",A="%",et="deg",Y="steps",Be="pixels",Pe="",an="segments",T={brightness:"brightness",contrast:"contrast",grayscale:"grayscale",hueRotate:"hue-rotate",invert:"invert",opacity:"opacity",saturate:"saturate",sepia:"sepia"},w={red:"red",green:"green",blue:"blue",alpha:"alpha"},ne={scale:"scale",rotation:"rotation"},y={minPathLenght:"minPathSegments",strokeWidth:"strokeWidth",turdsize:"turdsize",alphamax:"alphamax",turnpolicy:"turnpolicy",opticurve:"opticurve",opttolerance:"opttolerance"},tt={[T.brightness]:{unit:A,initial:100,min:0,max:200},[T.contrast]:{unit:A,initial:100,min:0,max:200},[T.grayscale]:{unit:A,initial:0,min:0,max:100},[T.hueRotate]:{unit:et,initial:0,min:0,max:360},[T.invert]:{unit:A,initial:0,min:0,max:100},[T.opacity]:{unit:A,initial:100,min:0,max:100},[T.saturate]:{unit:A,initial:100,min:0,max:200},[T.sepia]:{unit:A,initial:0,min:0,max:100}},on={[w.red]:{unit:Y,initial:5,min:1,max:20},[w.green]:{unit:Y,initial:5,min:1,max:20},[w.blue]:{unit:Y,initial:5,min:1,max:20},[w.alpha]:{unit:Y,initial:1,min:1,max:10}},sn={[ne.scale]:{unit:A,initial:100,min:1,max:200},[ne.rotation]:{unit:et,initial:0,min:0,max:360}},cn={[y.turdsize]:{unit:Be,initial:2,min:0,max:50},[y.alphamax]:{unit:Pe,initial:1,min:0,max:1.3334},[y.turnpolicy]:{unit:Y,initial:4,min:0,max:6},[y.opttolerance]:{unit:Pe,initial:.2,min:0,max:1},[y.minPathLenght]:{unit:an,initial:0,min:0,max:30},[y.strokeWidth]:{unit:Be,initial:0,min:0,max:100}},ln=[{name:"svgOptions",icon:He},{name:"colorChannels",icon:vt},{name:"imageSizeAndRotation",icon:yt},{name:"imagePreprocessing",icon:_t}],De=[Object.entries(cn),Object.entries(on),Object.entries(sn),Object.entries(tt)],p={},ye={},z={},K=(e,t)=>{const n=d.t(e);return` (${e?`${t}${n.length===1?n:` ${n}`}`:t})`},$=e=>{const t=document.createElement("span");return t.classList.add("icon"),t.innerHTML=e,t},un=(e,t)=>{const n=document.createElement("details");z[e]=n;const r=document.createElement("summary"),a=$(t);r.append(a);const o=document.createElement("span");return o.textContent=d.t(e),o.dataset.i18nKey=e,r.append(o),n.append(r),n},dn=["alphamax","turnpolicy","optimize-curves","opttolerance","minPathSegments"],mn=async(e,t,n)=>{const{unit:r,min:a,max:o,initial:i}=t,l=document.createElement("div");l.classList.add("preprocess-input"),dn.includes(e)&&l.classList.add("advanced");const s=document.createElement("label"),u=document.createElement("span");u.textContent=d.t(e),u.dataset.i18nKey=e,s.append(u),s.htmlFor=e;const h=await we(),v=document.createElement("span");ye[e]=v,v.textContent=K(r,h[e]||i),v.dataset.dynamicI18nKey=r,v.dataset.dynamicValue=h[e]||i;const m=document.createElement("input");p[e]=m,m.id=e,m.type="range",m.class=e,r&&(m.dataset.unit=r),r===Pe&&(m.step=.01),m.min=a,m.max=o,m.value=h[e]||i,m.addEventListener("input",()=>{v.textContent=K(r,m.value),v.dataset.dynamicValue=m.value}),Object.keys(w).includes(e)?m.addEventListener("change",pe(async()=>{await U(m),await x()},250)):Object.keys(y).includes(e)?m.addEventListener("change",pe(async()=>{await U(m),await x()},250)):m.addEventListener("change",pe(async()=>{await U(m),await x()},250));const b=document.createElement("button");b.type="button",b.textContent=d.t("reset"),b.dataset.i18nKey="reset",b.addEventListener("click",async()=>{m.value=i,v.textContent=K(r,i),v.dataset.dynamicValue=i,m.dispatchEvent(new Event("change"))}),s.append(v),l.append(s);const P=document.createElement("div");l.append(P),P.append(m),P.append(b),n.append(l)},nt=()=>{const e=!S.checked;Object.keys(w).forEach(t=>{p[t].disabled=e})};S.addEventListener("change",async()=>{nt(),await U(S),await x()});const Ve=async()=>{const e=await we();S.checked=e[S.id]??S.defaultChecked,nt(),C.checked=e[C.id]??C.defaultChecked,O.checked=e[O.id]??O.defaultChecked,rt(),W.checked=e[W.id]??W.defaultChecked,ot(),De.forEach(t=>{for(const[n,r]of t){const a=e[p[n].id]||r.initial;p[n].value=a,ye[n].textContent=K(r.unit,a)}})};_.addEventListener("change",async()=>{await D(_.id,_.checked),await D(k.id,k.checked),await Ve(),await x()});k.addEventListener("change",async()=>{await D(_.id,_.checked),await D(k.id,k.checked),await Ve(),await x()});C.addEventListener("change",async()=>{await U(C),await x()});const rt=()=>{p.opttolerance.disabled=!O.checked};O.addEventListener("change",async()=>{rt(),await U(O),await x()});const pn=async()=>{await d.getTranslations(),at();const e=getComputedStyle(document.documentElement).getPropertyValue("--mobile-breakpoint"),t=window.matchMedia(`(max-width: ${e})`),n=()=>{if(t.matches){Re.open=!1;return}Re.open=!0};n(),t.addEventListener("change",n),_.checked=await F(_.id)??_.defaultChecked,k.checked=await F(k.id)??k.defaultChecked,_.checked&&g.classList.add(ge),k.checked&&g.classList.add(ve);const r=[];De.forEach(async(a,o)=>{const{name:i,icon:l}=ln[o],s=un(i,l);ze.append(s),o<2&&(s.open=!0),i==="colorChannels"?z.colorChannels.append(S.parentNode):i==="svgOptions"?(z.svgOptions.append(_.parentNode),z.svgOptions.append(k.parentNode)):i==="imageSizeAndRotation"&&z.imageSizeAndRotation.append(C.parentNode);for(const[u,h]of a)r.push(mn(u,h,s));Promise.all(r).then(async()=>{for(const[u]of a)u==="opttolerance"&&z.svgOptions.append(O.parentNode),i==="svgOptions"&&z.svgOptions.append(W.parentNode);await Ve()})}),ze.append(Ie.parentNode),f.addEventListener("load",async()=>{f.width=f.naturalWidth,f.height=f.naturalHeight;const a=await we();if(f.src!==new URL("/favicon.png",location.href).toString()||Object.keys(a).length>1)setTimeout(async()=>{Ke(),await x()},100);else{const o=await fetch(`/potraced-${_.checked?"color":"monochrome"}.svg`).then(i=>i.text());g.innerHTML=o}}),f.complete&&f.dispatchEvent(new Event("load")),me.hidden=!1;try{const a=await F(te);if(a&&await hn(a)){const o=await a.getFile(),i=URL.createObjectURL(o);f.src=i}}catch(a){console.error(a.name,a.message),await mt(te)}},hn=async e=>{const t={mode:"read"};return await e.queryPermission(t)==="granted"||await e.requestPermission(t)==="granted"},at=()=>{Tt.textContent=d.t("license"),It.textContent=d.t("about"),Ie.textContent=d.t("resetAll"),St.textContent=d.t("posterizeInputImage"),Ot.textContent=d.t("colorSVG"),kt.textContent=d.t("monochromeSVG"),xt.textContent=d.t("considerDPR"),Rt.textContent=d.t("opticurve"),Ct.textContent=d.t("showAdvancedControls"),se.innerHTML="",se.append($(pt));const e=document.createElement("span");e.textContent=d.t("openImage"),se.append(e),ce.innerHTML="",ce.append($(ht));const t=document.createElement("span");t.textContent=d.t("saveSVG"),ce.append(t),le.innerHTML="",le.append($(ft));const n=document.createElement("span");n.textContent=d.t("copySVG"),le.append(n),ue.innerHTML="",ue.append($(gt));const r=document.createElement("span");r.textContent=d.t("pasteImage"),ue.append(r),de.innerHTML="",de.append($(rn));const a=document.createElement("span");a.textContent=d.t("install"),de.append(a),_e.dataset.dropText=d.t("dropFileHere"),Le.innerHTML="",Le.append($(He)),Le.append(document.createTextNode(d.t("tweak"))),Fe.ariaLabel=d.t("closeOptions"),document.querySelectorAll("[data-i18n-key]").forEach(o=>{o.textContent=d.t(o.dataset.i18nKey)}),document.querySelectorAll("[data-dynamic-i18n-key]").forEach(o=>{o.textContent=K(o.dataset.dynamicI18nKey,o.dataset.dynamicValue)}),fe.innerHTML="",d.supportedLocales.sort().forEach(o=>{const[i,l]=o.split("-"),s=document.createElement("option");s.value=o,s.textContent=d.t(`${i}${l}`),i===d.currentLanguageAndLocale.language&&l===d.currentLanguageAndLocale.locale&&(s.selected=!0),fe.append(s)})};fe.addEventListener("change",async()=>{const[e,t]=fe.value.split("-");try{await d.setLanguageAndLocale(e,t),at()}catch(n){console.error(n.name,n.message)}});Ie.addEventListener("click",async()=>{const e=(t,n,r)=>{p[t].value=r,ye[t].textContent=K(n,r),ye[t].dataset.dynamicValue=r};De.forEach(t=>{for(const[n,r]of t)e(n,r.unit,r.initial)}),O.checked=O.defaultChecked,S.checked=S.defaultChecked,C.checked=C.defaultChecked,await fn(),Ke(),await x()});Pt.addEventListener("click",()=>{I.classList.toggle("debug")});let xe=null;const L=(e,t=5e3)=>{if(ae.innerHTML=e,ae.hidden=!1,xe&&clearTimeout(xe),t!==1/0){xe=setTimeout(()=>{ae.hidden=!0,ae.textContent=""},t);return}},ot=async()=>{await U(W),document.querySelectorAll(".advanced").forEach(e=>{W.checked?e.style.display="block":e.style.display="none"})};W.addEventListener("change",ot);document.documentElement.style.setProperty("--100vh",`${window.innerHeight}px`);window.addEventListener("resize",pe(()=>{document.documentElement.style.setProperty("--100vh",`${window.innerHeight}px`)},250));Fe.addEventListener("click",()=>{Re.open=!1});const fn=async()=>{await D(_.checked?je:Ae,{})},we=async()=>{const e=_.checked?await F(je):await F(Ae);return e||{}},U=async e=>{const t=await we();t[e.id]=e.type==="range"?e.value:e.checked,await D(_.checked?je:Ae,t)};function gn(e={}){const{immediate:t=!1,onNeedRefresh:n,onOfflineReady:r,onRegistered:a,onRegisterError:o}=e;let i;const l=async(s=!0)=>{};return"serviceWorker"in navigator&&(i=new wt("/sw.js",{scope:"/",type:"classic"}),i.addEventListener("activated",s=>{s.isUpdate?window.location.reload():r==null||r()}),i.register({immediate:t}).then(s=>{a==null||a(s)}).catch(s=>{o==null||o(s)})),l}"launchQueue"in window&&c(()=>import("./filehandling.73be606c.js"),["assets/filehandling.73be606c.js","assets/vendor.78f84693.js"]);"windowControlsOverlay"in navigator&&c(()=>import("./windowcontrols.547df33c.js"),["assets/windowcontrols.547df33c.js","assets/vendor.78f84693.js"]);"onbeforeinstallprompt"in window&&"onappinstalled"in window?c(()=>import("./install.362738ab.js"),["assets/install.362738ab.js","assets/vendor.78f84693.js"]):de.style.display="none";const vn=()=>{let e=!1;const t={get type(){e=!0}};try{new Worker("blob://",t)}finally{return e}};(async()=>(pn(),vn()||await c(()=>import("./module-workers-polyfill.min.dc7647fd.js"),[]),gn({onOfflineReady(){L(d.t("readyToWorkOffline"))},onNeedRefresh(){location.reload()}})()))();location.href=="https://svgco.de/"&&c(()=>import("./collect.6b4b7dfe.js"),[]);export{te as F,wn as a,de as b,pe as d,f as i,_n as m};
