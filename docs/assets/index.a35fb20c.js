import{_ as ut,u as Re,s as D,g as B,C as dt,d as mt,o as pt,a as ht,c as ft,p as gt,b as Fe,e as vt,f as yt,h as wt,v as bt}from"./vendor.78f84693.js";const _t=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerpolicy&&(o.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?o.credentials="include":a.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}};_t();const Lt="modulepreload",Ne={},Et="/",m=function(t,n){return!n||n.length===0?t():Promise.all(n.map(r=>{if(r=`${Et}${r}`,r in Ne)return;Ne[r]=!0;const a=r.endsWith(".css"),o=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${o}`))return;const i=document.createElement("link");if(i.rel=a?"stylesheet":Lt,a||(i.as="script",i.crossOrigin=""),i.href=r,document.head.appendChild(i),a)return new Promise((s,c)=>{i.addEventListener("load",s),i.addEventListener("error",c)})})).then(()=>t())},I=document.querySelector("canvas"),yn=document.querySelector(".menu"),wn=document.querySelector("main"),ze=document.querySelector(".details"),S=document.querySelector(".posterize"),St=document.querySelector("[for=posterize]"),w=document.querySelector(".color"),Ot=document.querySelector("[for=color]"),k=document.querySelector(".monochrome"),kt=document.querySelector("[for=monochrome]"),T=document.querySelector(".consider-dpr"),xt=document.querySelector('[for="consider-dpr"]'),O=document.querySelector(".optimize-curves"),Ct=document.querySelector('[for="optimize-curves"]'),W=document.querySelector(".show-advanced"),Tt=document.querySelector('[for="show-advanced"]'),g=document.querySelector("img"),Pe=document.querySelector(".reset-all"),se=document.querySelector(".open"),ce=document.querySelector(".save"),le=document.querySelector(".copy"),ue=document.querySelector(".paste"),de=document.querySelector(".install"),v=document.querySelector(".svg-output"),Rt=document.querySelector(".debug"),me=document.querySelector("progress"),ae=document.querySelector(".toast"),ye=document.documentElement,xe=document.querySelector("details.main"),Le=document.querySelector("summary"),Be=document.querySelector(".close-options-button"),Pt=document.querySelector(".license"),It=document.querySelector(".about"),$e=document.querySelector("pinch-zoom"),he=document.querySelector(".language"),G=window.devicePixelRatio;$e.addEventListener("change",()=>{const{x:e,y:t,scale:n}=$e;v.setAttribute("transform",`translate(${e}, ${t}) scale(${n})`)});const Ke=()=>{v.setAttribute("transform","")},pe=(e,t)=>{let n;return function(...a){const o=()=>{clearTimeout(n),e(...a)};clearTimeout(n),n=setTimeout(o,t)}};/*!
 * canvas-size
 * v1.2.5
 * https://github.com/jhildenbiddle/canvas-size
 * (c) 2015-2021 John Hildenbiddle <http://hildenbiddle.com>
 * MIT license
 */function Ve(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ve(Object(n),!0).forEach(function(r){At(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ve(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function At(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function jt(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,o;for(o=0;o<r.length;o++)a=r[o],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Dt(e,t){if(e==null)return{};var n=jt(e,t),r,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function We(e,t){return Nt(e)||$t(e,t)||Je(e,t)||Wt()}function oe(e){return Mt(e)||zt(e)||Je(e)||Vt()}function Mt(e){if(Array.isArray(e))return Ce(e)}function Nt(e){if(Array.isArray(e))return e}function zt(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function $t(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,o=!1,i,s;try{for(n=n.call(e);!(a=(i=n.next()).done)&&(r.push(i.value),!(t&&r.length===t));a=!0);}catch(c){o=!0,s=c}finally{try{!a&&n.return!=null&&n.return()}finally{if(o)throw s}}return r}}function Je(e,t){if(!!e){if(typeof e=="string")return Ce(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ce(e,t)}}function Ce(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Vt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Wt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ee(e){var t=e.sizes.shift(),n=Math.max(Math.ceil(t[0]),1),r=Math.max(Math.ceil(t[1]),1),a=[n-1,r-1,1,1],o=Date.now(),i=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,s,c;i?(s=new OffscreenCanvas(1,1),c=new OffscreenCanvas(n,r)):(s=document.createElement("canvas"),s.width=1,s.height=1,c=document.createElement("canvas"),c.width=n,c.height=r);var l=s.getContext("2d"),p=c.getContext("2d");p&&(p.fillRect.apply(p,a),l.drawImage(c,n-1,r-1,1,1,0,0,1,1));var f=l&&l.getImageData(0,0,1,1).data[3]!==0,u=Date.now()-o;return i?(postMessage({width:n,height:r,benchmark:u,isTestPass:f}),!f&&e.sizes.length&&ee(e)):f?e.onSuccess(n,r,u):(e.onError(n,r,u),e.sizes.length&&ee(e)),f}var Ee={area:[16384,14188,11402,11180,10836,8192,4096,1],height:[8388607,65535,32767,16384,8192,4096,1],width:[4194303,65535,32767,16384,8192,4096,1]},qt=["onError","onSuccess"],F={max:null,min:1,sizes:[],step:1024,usePromise:!1,useWorker:!1,onError:Function.prototype,onSuccess:Function.prototype},Q={};function Se(e){var t=e.width===e.height,n=e.height===1,r=e.width===1,a=[];if(!e.width||!e.height)e.sizes.forEach(function(p){var f=t||n?p:1,u=t||r?p:1;a.push([f,u])});else for(var o=e.min||F.min,i=e.step||F.step,s=Math.max(e.width,e.height);s>=o;){var c=t||n?s:1,l=t||r?s:1;a.push([c,l]),s-=i}return a}function ie(e){var t=window&&"HTMLCanvasElement"in window,n=window&&"OffscreenCanvas"in window,r=Date.now(),a=e.onError,o=e.onSuccess,i=Dt(e,qt),s=null;if(!t)return!1;if(e.useWorker&&n){var c=`
            var canvasTest = `.concat(ee.toString(),`;
            onmessage = function(e) {
                canvasTest(e.data);
            };
        `),l=new Blob([c],{type:"application/javascript"}),p=URL.createObjectURL(l);s=new Worker(p),URL.revokeObjectURL(p),s.onmessage=function(f){var u=f.data,b=u.width,R=u.height,re=u.benchmark,be=u.isTestPass;be?(Q[r].onSuccess(b,R,re),delete Q[r]):Q[r].onError(b,R,re)}}if(e.usePromise)return new Promise(function(f,u){var b=L(L({},e),{},{onError:function(U,H,J){var _e;if(e.sizes.length===0)_e=!0;else{var it=e.sizes.slice(-1),st=We(it,1),Me=We(st[0],2),ct=Me[0],lt=Me[1];_e=U===ct&&H===lt}a(U,H,J),_e&&u({width:U,height:H,benchmark:J})},onSuccess:function(U,H,J){o(U,H,J),f({width:U,height:H,benchmark:J})}});if(s){var R=b.onError,re=b.onSuccess;Q[r]={onError:R,onSuccess:re},s.postMessage(i)}else ee(b)});if(s)Q[r]={onError:a,onSuccess:o},s.postMessage(i);else return ee(e)}var Ut={maxArea:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=Se({width:t.max,height:t.max,min:t.min,step:t.step,sizes:oe(Ee.area)}),r=L(L(L({},F),t),{},{sizes:n});return ie(r)},maxHeight:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=Se({width:1,height:t.max,min:t.min,step:t.step,sizes:oe(Ee.height)}),r=L(L(L({},F),t),{},{sizes:n});return ie(r)},maxWidth:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=Se({width:t.max,height:1,min:t.min,step:t.step,sizes:oe(Ee.width)}),r=L(L(L({},F),t),{},{sizes:n});return ie(r)},test:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=L(L({},F),t);return n.sizes=oe(n.sizes),n.width&&n.height&&(n.sizes=[[n.width,n.height]]),ie(n)}};let Qe,Ze;const Xe="OffscreenCanvas"in window&&"CanvasFilter"in window;if(Xe)m(()=>import("./preprocessworker.a4b60f0c.js"),[]).then(e=>{const t=e.default;let n=null;const r=I.getContext("2d");Qe=async()=>{n&&n.terminate(),n=new t;const a=I.cloneNode().transferControlToOffscreen();return n.postMessage({offscreen:a},[a]),new Promise(async o=>{const{width:i,height:s}=qe();let c;try{c=await createImageBitmap(g)}catch{try{c=await createImageBitmap(g,0,0,i,s)}catch(p){console.error(p.name,p.message),v.innerHTML="",E(p.message);return}}const l=new MessageChannel;l.port1.onmessage=({data:p})=>{l.port1.close(),n&&(n.terminate(),n=null),I.width=i,I.height=s,r.putImageData(p.result,0,0),o(p.result)},n.postMessage({inputImageBitmap:c,posterize:S.checked,rgba:{r:j(h[_.red]),g:j(h[_.green]),b:j(h[_.blue]),a:j(h[_.alpha])},cssFilters:Ye(),rotate:Number(h[ne.rotation].value),width:i,height:s,dpr:G},[l.port2])})}});else{const e=I.getContext("2d",{desynchronized:!0});e.scale(G,G),e.imageSmoothingEnabled=!0,Ze=()=>{let{width:t,height:n}=qe();const r=T.checked?G:1;let a=1;for(;!Ut.test({width:t,height:n});)t=Math.floor(t/2),n=Math.floor(n/2),a/=2;I.width=t,I.height=n,e.clearRect(0,0,t,n),e.filter=Gt(),e.setTransform(1,0,0,1,t/2,n/2);const o=Number(h[ne.rotation].value);return e.rotate(o*Math.PI/180),e.drawImage(g,-r*g.naturalWidth*a/2,-r*g.naturalHeight*a/2),e.getImageData(0,0,t,n)}}const qe=()=>{const e=Number(h[ne.scale].value)/100;return{width:Math.ceil(G*g.naturalWidth*e),height:Math.ceil(G*g.naturalHeight*e)}},j=e=>{const t=Number(e.value),n=[];for(let r=0;r<=t;r++)n[r]=Number((1/t*r).toFixed(1));return n},Ht=()=>`data:image/svg+xml;utf8,<svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <filter id="posterize">
        <feComponentTransfer>
          <feFuncR type="discrete" tableValues="${j(h[_.red]).join(",")}" />
          <feFuncG type="discrete" tableValues="${j(h[_.green]).join(",")}" />
          <feFuncB type="discrete" tableValues="${j(h[_.blue]).join(",")}" />
          <feFuncA type="discrete" tableValues="${j(h[_.alpha])}" />
        </feComponentTransfer>
      </filter>
    </svg>`.replace(/[\r\n]/g,"").replace(/\s+/g," ").trim(),Ye=()=>{let e="";for(const[t,n]of Object.entries(tt)){const r=h[t];n.initial!==Number(r.value)&&(e+=`${t}(${r.value}${r.dataset.unit}) `)}return e},Gt=()=>{let e=`${S.checked?`url('${Ht()}#posterize') `:""}`;return e+=Ye(),e.trim()||"none"};function Ft(){return new Worker("/assets/monochromeworker.ee1cfa6e.js",{type:"module"})}let M=null;const Bt=async e=>(M&&M.terminate(),M=new Ft,new Promise(async t=>{const n=new MessageChannel;n.port1.onmessage=({data:a})=>{n.port1.close(),M&&(M.terminate(),M=null),t(a.result)};const r={turdsize:Number(h[y.turdsize].value),alphamax:Number(h[y.alphamax].value),turnpolicy:Number(h[y.turnpolicy].value),opttolerance:Number(h[y.opttolerance].value),opticurve:O.checked?1:0,extractcolors:!1};M.postMessage({imageData:e,params:r},[n.port2])}));function Kt(){return new Worker("/assets/colorworker.893f8723.js",{type:"module"})}let N=null;const C={},Jt=async e=>(N&&N.terminate(),N=new Kt,new Promise(async t=>{const n=new MessageChannel;n.port1.onmessage=({data:l})=>{n.port1.close(),N&&(N.terminate(),N=null),t(l.result)},me.value=0;let r="",a="",o="",i=0;C.current&&(clearInterval(C.current),C.current=null),C.current=setInterval(()=>{const l=`${r}${o}${a}`;if(l.length!==i){const p=v.dataset.transform;p&&v.setAttribute("transform",p),v.innerHTML=l,i=l.length}},500);const s=new MessageChannel;s.port1.onmessage=({data:l})=>{const p=Math.floor(l.processed/l.total*100);me.value=p,l.svg&&(r||(r=l.svg.replace(/(.*?<svg[^>]+>)(.*?)(<\/svg>)/,"$1").replace(/\s+width="\d+(?:\.\d+)?"/,"").replace(/\s+height="\d+(?:\.\d+)"/,""),a=l.svg.replace(/(.*?<svg[^>]+>)(.*?)(<\/svg>)/,"$3")),o+=l.svg.replace(/(.*?<svg[^>]+>)(.*?)(<\/svg>)/,"$2")),l.processed===l.total&&(clearInterval(C.current),C.current=null,s.port1.close(),me.value=0)};const c={minPathSegments:Number(h[y.minPathLenght].value),strokeWidth:Number(h[y.strokeWidth].value),turdsize:Number(h[y.turdsize].value),alphamax:Number(h[y.alphamax].value),turnpolicy:Number(h[y.turnpolicy].value),opttolerance:Number(h[y.opttolerance].value),opticurve:O.checked?1:0,extractcolors:!1,posterizelevel:2,posterizationalgorithm:0};N.postMessage({imageData:e,params:c},[n.port2,s.port2])}));function Qt(e){switch(e){case"../i18n/ca-ES.js":return m(()=>import("./ca-ES.04ea59a9.js"),["assets/ca-ES.04ea59a9.js","assets/languages.3f433a67.js"]);case"../i18n/da-DK.js":return m(()=>import("./da-DK.405a7cd2.js"),["assets/da-DK.405a7cd2.js","assets/languages.3f433a67.js"]);case"../i18n/de-DE.js":return m(()=>import("./de-DE.0da95cfa.js"),["assets/de-DE.0da95cfa.js","assets/languages.3f433a67.js"]);case"../i18n/el-GR.js":return m(()=>import("./el-GR.c4ae3f14.js"),["assets/el-GR.c4ae3f14.js","assets/languages.3f433a67.js"]);case"../i18n/en-GB.js":return m(()=>import("./en-GB.640a7c3b.js"),["assets/en-GB.640a7c3b.js","assets/languages.3f433a67.js"]);case"../i18n/en-US.js":return m(()=>import("./en-US.d167058c.js"),["assets/en-US.d167058c.js","assets/languages.3f433a67.js"]);case"../i18n/es-ES.js":return m(()=>import("./es-ES.f94f974d.js"),["assets/es-ES.f94f974d.js","assets/languages.3f433a67.js"]);case"../i18n/fr-FR.js":return m(()=>import("./fr-FR.86eb7c51.js"),["assets/fr-FR.86eb7c51.js","assets/languages.3f433a67.js"]);case"../i18n/ja-JP.js":return m(()=>import("./ja-JP.da8c3531.js"),["assets/ja-JP.da8c3531.js","assets/languages.3f433a67.js"]);case"../i18n/ko-KR.js":return m(()=>import("./ko-KR.ac8c0d58.js"),["assets/ko-KR.ac8c0d58.js","assets/languages.3f433a67.js"]);case"../i18n/languages.js":return m(()=>import("./languages.3f433a67.js"),[]);case"../i18n/nl-NL.js":return m(()=>import("./nl-NL.74e28b4e.js"),["assets/nl-NL.74e28b4e.js","assets/languages.3f433a67.js"]);case"../i18n/zh-CN.js":return m(()=>import("./zh-CN.0b2deddf.js"),["assets/zh-CN.0b2deddf.js","assets/languages.3f433a67.js"]);default:return new Promise(function(t,n){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+e)))})}}function Zt(e){switch(e){case"../i18n/ca-ES.js":return m(()=>import("./ca-ES.04ea59a9.js"),["assets/ca-ES.04ea59a9.js","assets/languages.3f433a67.js"]);case"../i18n/da-DK.js":return m(()=>import("./da-DK.405a7cd2.js"),["assets/da-DK.405a7cd2.js","assets/languages.3f433a67.js"]);case"../i18n/de-DE.js":return m(()=>import("./de-DE.0da95cfa.js"),["assets/de-DE.0da95cfa.js","assets/languages.3f433a67.js"]);case"../i18n/el-GR.js":return m(()=>import("./el-GR.c4ae3f14.js"),["assets/el-GR.c4ae3f14.js","assets/languages.3f433a67.js"]);case"../i18n/en-GB.js":return m(()=>import("./en-GB.640a7c3b.js"),["assets/en-GB.640a7c3b.js","assets/languages.3f433a67.js"]);case"../i18n/en-US.js":return m(()=>import("./en-US.d167058c.js"),["assets/en-US.d167058c.js","assets/languages.3f433a67.js"]);case"../i18n/es-ES.js":return m(()=>import("./es-ES.f94f974d.js"),["assets/es-ES.f94f974d.js","assets/languages.3f433a67.js"]);case"../i18n/fr-FR.js":return m(()=>import("./fr-FR.86eb7c51.js"),["assets/fr-FR.86eb7c51.js","assets/languages.3f433a67.js"]);case"../i18n/ja-JP.js":return m(()=>import("./ja-JP.da8c3531.js"),["assets/ja-JP.da8c3531.js","assets/languages.3f433a67.js"]);case"../i18n/ko-KR.js":return m(()=>import("./ko-KR.ac8c0d58.js"),["assets/ko-KR.ac8c0d58.js","assets/languages.3f433a67.js"]);case"../i18n/languages.js":return m(()=>import("./languages.3f433a67.js"),[]);case"../i18n/nl-NL.js":return m(()=>import("./nl-NL.74e28b4e.js"),["assets/nl-NL.74e28b4e.js","assets/languages.3f433a67.js"]);case"../i18n/zh-CN.js":return m(()=>import("./zh-CN.0b2deddf.js"),["assets/zh-CN.0b2deddf.js","assets/languages.3f433a67.js"]);default:return new Promise(function(t,n){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+e)))})}}const Ue="language",Z=["ca","da","de","el","en","es","fr","ja","ko","nl","zh"],Oe=["ca-ES","da-DK","de-DE","el-GR","en-GB","en-US","es-ES","fr-FR","ja-JP","ko-KR","nl-NL","zh-CN"];class Xt{constructor(){this.currentLanguageAndLocale=this.detectOrRestoreLanguageAndLocale(),this.defaultLanguage=Z[0],this.defaultLocale=Oe[0],this.translations=null,this.supportedLanguages=Z,this.supportedLocales=Oe}detectOrRestoreLanguageAndLocale(){const t=localStorage.getItem(Ue);if(t){const{language:o,locale:i}=JSON.parse(t);return this.setLanguageAndLocale(o,i),{language:o,locale:i}}let[n,r=null]=navigator.language?.split("-");r&&(r=r.toUpperCase()),(!n||!Z.includes(n))&&(n=Z[0]);const a={language:n,locale:r};return this.setLanguageAndLocale(n,r),a}async setLanguageAndLocale(t,n){if(!Z.includes(t))throw new Error(`Language "${t}" is not supported.`);if(!Oe.includes(`${t}-${n}`))throw new Error(`Locale "${t}-${n}" is not supported.`);this.currentLanguageAndLocale={language:t,locale:n},localStorage.setItem(Ue,JSON.stringify(this.currentLanguageAndLocale)),document.documentElement.lang=`${t}${n?`-${n}`:""}`,await this.getTranslations()}async getTranslations(){const{language:t,locale:n}=this.currentLanguageAndLocale;this.translations=(await Zt(`../i18n/${t}${n?`-${n}`:""}.js`).catch(()=>Qt(`../i18n/${this.defaultLocale}.js`))).default}t(t){return this.translations[t]||"\u26D4\uFE0F Missing translation"}}const d=new Xt;var Yt='<svg viewBox="0 0 57 57" xmlns="http://www.w3.org/2000/svg" stroke="currentColor"><g transform="translate(1 1)" stroke-width="2" fill="none" fill-rule="evenodd"><circle cx="5" cy="50" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" values="50;5;50;50" calcMode="linear" repeatCount="indefinite"/><animate attributeName="cx" begin="0s" dur="2.2s" values="5;27;49;5" calcMode="linear" repeatCount="indefinite"/></circle><circle cx="27" cy="5" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" from="5" to="5" values="5;50;50;5" calcMode="linear" repeatCount="indefinite"/><animate attributeName="cx" begin="0s" dur="2.2s" from="27" to="27" values="27;49;5;27" calcMode="linear" repeatCount="indefinite"/></circle><circle cx="49" cy="50" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" values="50;50;5;50" calcMode="linear" repeatCount="indefinite"/><animate attributeName="cx" from="49" to="49" begin="0s" dur="2.2s" values="49;5;27;49" calcMode="linear" repeatCount="indefinite"/></circle></g></svg>';const He=(e,t)=>{!e||(e=e.replace(/\s+width="\d+(?:\.\d+)?"/,"").replace(/\s+height="\d+(?:\.\d+)"/,""),v.classList.remove(fe),v.classList.remove(ge),v.classList.add(t),v.innerHTML=e,E(`${d.t("svgSize")}: ${e.length} ${d.t("bytes")}`,3e3))},x=async()=>{v.innerHTML="",v.classList.remove(fe,ge),C.current&&(clearInterval(C.current),C.current=null);const e=v.getAttribute("transform");v.innerHTML=Yt,e&&(v.dataset.transform=e,v.setAttribute("transform",""));const t=Xe?await Qe():Ze();if(w.checked){const n=await Jt(t);e&&v.setAttribute("transform",e),He(n,fe)}else{const n=await Bt(t);e&&v.setAttribute("transform",e),He(n,ge)}};function en(){return new Worker("/assets/svgoworker.5f3d0bc7.js",{type:"module"})}let z=null;const X=async e=>(z&&z.terminate(),z=new en,new Promise(t=>{const n=new MessageChannel;n.port1.onmessage=({data:r})=>{n.port1.close(),z&&(z.terminate(),z=null),t(r.result)},z.postMessage({svg:e},[n.port2])})),te="fileHandle",tn=e=>e?e.name.replace(/\.[^\.]+$/,""):"";se.addEventListener("click",async()=>{try{const e=await ut({mimeTypes:["image/*"],description:"Image files"}),t=URL.createObjectURL(e);g.addEventListener("load",()=>{URL.revokeObjectURL(t)},{once:!0}),g.src=t,Re&&await D(te,e.handle)}catch(e){console.error(e.name,e.message),E(e.message)}});document.addEventListener("dragover",e=>{e.preventDefault()});document.addEventListener("dragenter",e=>{e.preventDefault(),ye.classList.add("dropenter")});document.addEventListener("dragleave",e=>{e.preventDefault(),e.target===document.documentElement&&ye.classList.remove("dropenter")});document.addEventListener("drop",async e=>{e.preventDefault(),e.stopPropagation(),ye.classList.remove("dropenter");const t=e.dataTransfer.items[0];if(t.kind==="file"){let n;if(g.addEventListener("load",()=>{URL.revokeObjectURL(n)},{once:!0}),Re){const a=await t.getAsFileSystemHandle();if(a.kind!=="file")return;const o=await a.getFile();n=URL.createObjectURL(o),g.src=n,await D(te,a);return}const r=t.getAsFile();n=URL.createObjectURL(r),g.src=n}});ce.addEventListener("click",async()=>{try{let e="",t=v.innerHTML,n=null;Re&&(e=tn(await B(te)),n=await showSaveFilePicker({suggestedName:e,types:[{description:"SVG file",accept:{"image/svg+xml":[".svg"]}}]})),E(d.t("optimizingSVG"),1/0),t=await X(t),E(d.t("savedSVG"));const r=new Blob([t],{type:"image/svg+xml"});await dt(r,{fileName:e,description:"SVG file"},n)}catch(e){console.error(e.name,e.message),E(e.message)}});ue.addEventListener("click",async()=>{try{const e=await navigator.clipboard.read();for(const t of e)for(const n of t.types)if(n.startsWith("image/")){const r=await t.getType(n);if(!r)return;const a=URL.createObjectURL(r);g.src=a;return}}catch(e){console.error(e.name,e.message),E(e.message)}});document.addEventListener("paste",e=>{try{if(!e.clipboardData.files.length)return;const t=e.clipboardData.files[0];if(t.type.startsWith("image/")){const n=URL.createObjectURL(t);g.src=n;return}}catch(t){console.error(t.name,t.message),E(t.message)}});le.addEventListener("click",async()=>{let e=v.innerHTML;E(d.t("optimizingSVG"),1/0);try{"ClipboardItem"in window?await navigator.clipboard.write([new ClipboardItem({"text/plain":new Promise(async t=>{e=await X(e),t(new Blob([e],{type:"text/plain"}))}),"image/svg+xml":new Promise(async t=>{e=await X(e),t(new Blob([e],{type:"image/svg+xml"}))})})]):await navigator.clipboard.writeText(await X(e))}catch(t){console.log(t.name,t.message),e=await X(e);const n=new Blob([e],{type:"text/plain"}),r=new Blob([e],{type:"image/svg+xml"});try{Number(navigator.userAgent.replace(/.*Chrome\/(\d+).*/,"$1"))<=88?await navigator.clipboard.write([new ClipboardItem({[n.type]:n})]):await navigator.clipboard.write([new ClipboardItem({[r.type]:r,[n.type]:n})])}catch(a){console.warn(a.name,a.message);try{await navigator.clipboard.write([new ClipboardItem({[n.type]:n})])}catch(o){console.error(o.name,o.message),E(o.message);return}}}E(d.t("copiedSVG"))});var nn='<svg enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m0 0h24v24h-24z" fill="none"/><path d="m20 17h-16v-12h8v-2h-8c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h4v2h8v-2h4c1.1 0 2-.9 2-2v-3h-2z"/><path d="m17 14 5-5-1.41-1.41-2.59 2.58v-7.17h-2v7.17l-2.59-2.58-1.41 1.41z"/></svg>';const Ie="monochromeSettings",Ae="colorSettings",fe="color",ge="monochrome",A="%",et="deg",Y="steps",Ge="pixels",Te="",rn="segments",P={brightness:"brightness",contrast:"contrast",grayscale:"grayscale",hueRotate:"hue-rotate",invert:"invert",opacity:"opacity",saturate:"saturate",sepia:"sepia"},_={red:"red",green:"green",blue:"blue",alpha:"alpha"},ne={scale:"scale",rotation:"rotation"},y={minPathLenght:"minPathSegments",strokeWidth:"strokeWidth",turdsize:"turdsize",alphamax:"alphamax",turnpolicy:"turnpolicy",opticurve:"opticurve",opttolerance:"opttolerance"},tt={[P.brightness]:{unit:A,initial:100,min:0,max:200},[P.contrast]:{unit:A,initial:100,min:0,max:200},[P.grayscale]:{unit:A,initial:0,min:0,max:100},[P.hueRotate]:{unit:et,initial:0,min:0,max:360},[P.invert]:{unit:A,initial:0,min:0,max:100},[P.opacity]:{unit:A,initial:100,min:0,max:100},[P.saturate]:{unit:A,initial:100,min:0,max:200},[P.sepia]:{unit:A,initial:0,min:0,max:100}},an={[_.red]:{unit:Y,initial:5,min:1,max:20},[_.green]:{unit:Y,initial:5,min:1,max:20},[_.blue]:{unit:Y,initial:5,min:1,max:20},[_.alpha]:{unit:Y,initial:1,min:1,max:10}},on={[ne.scale]:{unit:A,initial:100,min:1,max:200},[ne.rotation]:{unit:et,initial:0,min:0,max:360}},sn={[y.turdsize]:{unit:Ge,initial:2,min:0,max:50},[y.alphamax]:{unit:Te,initial:1,min:0,max:1.3334},[y.turnpolicy]:{unit:Y,initial:4,min:0,max:6},[y.opttolerance]:{unit:Te,initial:.2,min:0,max:1},[y.minPathLenght]:{unit:rn,initial:0,min:0,max:30},[y.strokeWidth]:{unit:Ge,initial:0,min:0,max:100}},cn=[{name:"svgOptions",icon:Fe},{name:"colorChannels",icon:vt},{name:"imageSizeAndRotation",icon:yt},{name:"imagePreprocessing",icon:wt}],je=[Object.entries(sn),Object.entries(an),Object.entries(on),Object.entries(tt)],h={},ve={},$={},K=(e,t)=>{const n=d.t(e);return` (${e?`${t}${n.length===1?n:` ${n}`}`:t})`},V=e=>{const t=document.createElement("span");return t.classList.add("icon"),t.innerHTML=e,t},ln=(e,t)=>{const n=document.createElement("details");$[e]=n;const r=document.createElement("summary"),a=V(t);r.append(a);const o=document.createElement("span");return o.textContent=d.t(e),o.dataset.i18nKey=e,r.append(o),n.append(r),n},un=["alphamax","turnpolicy","optimize-curves","opttolerance","minPathSegments"],dn=async(e,t,n)=>{const{unit:r,min:a,max:o,initial:i}=t,s=document.createElement("div");s.classList.add("preprocess-input"),un.includes(e)&&s.classList.add("advanced");const c=document.createElement("label"),l=document.createElement("span");l.textContent=d.t(e),l.dataset.i18nKey=e,c.append(l),c.htmlFor=e;const p=await we(),f=document.createElement("span");ve[e]=f,f.textContent=K(r,p[e]||i),f.dataset.dynamicI18nKey=r,f.dataset.dynamicValue=p[e]||i;const u=document.createElement("input");h[e]=u,u.id=e,u.type="range",u.class=e,r&&(u.dataset.unit=r),r===Te&&(u.step=.01),u.min=a,u.max=o,u.value=p[e]||i,u.addEventListener("input",()=>{f.textContent=K(r,u.value),f.dataset.dynamicValue=u.value}),Object.keys(_).includes(e)?u.addEventListener("change",pe(async()=>{await q(u),await x()},250)):Object.keys(y).includes(e)?u.addEventListener("change",pe(async()=>{await q(u),await x()},250)):u.addEventListener("change",pe(async()=>{await q(u),await x()},250));const b=document.createElement("button");b.type="button",b.textContent=d.t("reset"),b.dataset.i18nKey="reset",b.addEventListener("click",async()=>{u.value=i,f.textContent=K(r,i),f.dataset.dynamicValue=i,u.dispatchEvent(new Event("change"))}),c.append(f),s.append(c);const R=document.createElement("div");s.append(R),R.append(u),R.append(b),n.append(s)},nt=()=>{const e=!S.checked;Object.keys(_).forEach(t=>{h[t].disabled=e})};S.addEventListener("change",async()=>{nt(),await q(S),await x()});const De=async()=>{const e=await we();S.checked=e[S.id]??S.defaultChecked,nt(),T.checked=e[T.id]??T.defaultChecked,O.checked=e[O.id]??O.defaultChecked,rt(),W.checked=e[W.id]??W.defaultChecked,ot(),je.forEach(t=>{for(const[n,r]of t){const a=e[h[n].id]||r.initial;h[n].value=a,ve[n].textContent=K(r.unit,a)}})};w.addEventListener("change",async()=>{await D(w.id,w.checked),await D(k.id,k.checked),await De(),await x()});k.addEventListener("change",async()=>{await D(w.id,w.checked),await D(k.id,k.checked),await De(),await x()});T.addEventListener("change",async()=>{await q(T),await x()});const rt=()=>{h.opttolerance.disabled=!O.checked};O.addEventListener("change",async()=>{rt(),await q(O),await x()});const mn=async()=>{await d.getTranslations(),at();const e=getComputedStyle(document.documentElement).getPropertyValue("--mobile-breakpoint"),t=window.matchMedia(`(max-width: ${e})`),n=()=>{if(t.matches){xe.open=!1;return}xe.open=!0};n(),t.addEventListener("change",n),w.checked=await B(w.id)??w.defaultChecked,k.checked=await B(k.id)??k.defaultChecked,w.checked&&v.classList.add(fe),k.checked&&v.classList.add(ge);const r=[];je.forEach(async(a,o)=>{const{name:i,icon:s}=cn[o],c=ln(i,s);ze.append(c),o<2&&(c.open=!0),i==="colorChannels"?$.colorChannels.append(S.parentNode):i==="svgOptions"?($.svgOptions.append(w.parentNode),$.svgOptions.append(k.parentNode)):i==="imageSizeAndRotation"&&$.imageSizeAndRotation.append(T.parentNode);for(const[l,p]of a)r.push(dn(l,p,c));Promise.all(r).then(async()=>{for(const[l]of a)l==="opttolerance"&&$.svgOptions.append(O.parentNode),i==="svgOptions"&&$.svgOptions.append(W.parentNode);await De()})}),ze.append(Pe.parentNode),g.addEventListener("load",async()=>{g.width=g.naturalWidth,g.height=g.naturalHeight;const a=await we();if(g.src!==new URL("/favicon.png",location.href).toString()||Object.keys(a).length>1)setTimeout(async()=>{Ke(),await x()},100);else{const o=await fetch(`/potraced-${w.checked?"color":"monochrome"}.svg`).then(i=>i.text());v.innerHTML=o}}),g.complete&&g.dispatchEvent(new Event("load")),me.hidden=!1;try{const a=await B(te);if(a&&await pn(a)){const o=await a.getFile(),i=URL.createObjectURL(o);g.src=i}}catch(a){console.error(a.name,a.message),await mt(te)}},pn=async e=>{const t={mode:"read"};return await e.queryPermission(t)==="granted"||await e.requestPermission(t)==="granted"},at=()=>{Pt.textContent=d.t("license"),It.textContent=d.t("about"),Pe.textContent=d.t("resetAll"),St.textContent=d.t("posterizeInputImage"),Ot.textContent=d.t("colorSVG"),kt.textContent=d.t("monochromeSVG"),xt.textContent=d.t("considerDPR"),Ct.textContent=d.t("opticurve"),Tt.textContent=d.t("showAdvancedControls"),se.innerHTML="",se.append(V(pt)),se.append(document.createTextNode(d.t("openImage"))),ce.innerHTML="",ce.append(V(ht)),ce.append(document.createTextNode(d.t("saveSVG"))),le.innerHTML="",le.append(V(ft)),le.append(document.createTextNode(d.t("copySVG"))),ue.innerHTML="",ue.append(V(gt)),ue.append(document.createTextNode(d.t("pasteImage"))),de.innerHTML="",de.append(V(nn));const e=document.createElement("span");e.textContent=d.t("install"),de.append(e),ye.dataset.dropText=d.t("dropFileHere"),Le.innerHTML="",Le.append(V(Fe)),Le.append(document.createTextNode(d.t("tweak"))),Be.ariaLabel=d.t("closeOptions"),document.querySelectorAll("[data-i18n-key]").forEach(t=>{t.textContent=d.t(t.dataset.i18nKey)}),document.querySelectorAll("[data-dynamic-i18n-key]").forEach(t=>{t.textContent=K(t.dataset.dynamicI18nKey,t.dataset.dynamicValue)}),he.innerHTML="",d.supportedLocales.sort().forEach(t=>{const[n,r]=t.split("-"),a=document.createElement("option");a.value=t,a.textContent=d.t(`${n}${r}`),n===d.currentLanguageAndLocale.language&&r===d.currentLanguageAndLocale.locale&&(a.selected=!0),he.append(a)})};he.addEventListener("change",async()=>{const[e,t]=he.value.split("-");try{await d.setLanguageAndLocale(e,t),at()}catch(n){console.error(n.name,n.message)}});Pe.addEventListener("click",async()=>{const e=(t,n,r)=>{h[t].value=r,ve[t].textContent=K(n,r),ve[t].dataset.dynamicValue=r};je.forEach(t=>{for(const[n,r]of t)e(n,r.unit,r.initial)}),O.checked=O.defaultChecked,S.checked=S.defaultChecked,T.checked=T.defaultChecked,await hn(),Ke(),await x()});Rt.addEventListener("click",()=>{I.classList.toggle("debug")});let ke=null;const E=(e,t=5e3)=>{if(ae.innerHTML=e,ae.hidden=!1,ke&&clearTimeout(ke),t!==1/0){ke=setTimeout(()=>{ae.hidden=!0,ae.textContent=""},t);return}},ot=async()=>{await q(W),document.querySelectorAll(".advanced").forEach(e=>{W.checked?e.style.display="block":e.style.display="none"})};W.addEventListener("change",ot);document.documentElement.style.setProperty("--100vh",`${window.innerHeight}px`);window.addEventListener("resize",pe(()=>{document.documentElement.style.setProperty("--100vh",`${window.innerHeight}px`)},250));Be.addEventListener("click",()=>{xe.open=!1});const hn=async()=>{await D(w.checked?Ae:Ie,{})},we=async()=>{const e=w.checked?await B(Ae):await B(Ie);return e||{}},q=async e=>{const t=await we();t[e.id]=e.type==="range"?e.value:e.checked,await D(w.checked?Ae:Ie,t)};function fn(e={}){const{immediate:t=!1,onNeedRefresh:n,onOfflineReady:r,onRegistered:a,onRegisterError:o}=e;let i;const s=async(c=!0)=>{};return"serviceWorker"in navigator&&(i=new bt("/sw.js",{scope:"/",type:"classic"}),i.addEventListener("activated",c=>{c.isUpdate?window.location.reload():r==null||r()}),i.register({immediate:t}).then(c=>{a==null||a(c)}).catch(c=>{o==null||o(c)})),s}(async(e,t,n,r,a,o,i,s,c,l)=>{const p={z:`${e()}`.substr(2),cid:`${t.getItem(c)||(l=`${e()}`.substr(2),t.setItem(c,l),l)}`,ua:s.userAgent,dr:r.referrer||"",sr:`${n.width}x${n.height}`,vp:`${a.clientWidth}x${a.clientHeight}`,sd:`${n.pixelDepth}-bits`,ul:s.language,dl:o(i.href),dp:o(i.pathname),dt:r.title},f=new FormData;for(const[u,b]of Object.entries(p))f.append(u,b);try{await fetch("https://svgcode.glitch.me/",{method:"post",body:f})}catch{}})(Math.random,localStorage,screen,document,document.documentElement,encodeURIComponent,location,navigator,"cid",0);"launchQueue"in window&&m(()=>import("./filehandling.be706b82.js"),["assets/filehandling.be706b82.js","assets/vendor.78f84693.js"]);"windowControlsOverlay"in navigator&&m(()=>import("./windowcontrols.025c692d.js"),["assets/windowcontrols.025c692d.js","assets/vendor.78f84693.js"]);"onbeforeinstallprompt"in window&&"onappinstalled"in window?m(()=>import("./install.6c027e56.js"),["assets/install.6c027e56.js","assets/vendor.78f84693.js"]):de.style.display="none";const gn=()=>{let e=!1;const t={get type(){e=!0}};try{new Worker("blob://",t)}finally{return e}};(async()=>(mn(),gn()||await m(()=>import("./module-workers-polyfill.min.dc7647fd.js"),[]),fn({onOfflineReady(){E(d.t("readyToWorkOffline"))},onNeedRefresh(){location.reload()}})()))();export{te as F,wn as a,de as b,pe as d,g as i,yn as m};
