function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/HomeView-D3PAJwpG.js","assets/HomeView-DUlItlRa.css","assets/PublicationsView-_TofdwNt.js","assets/PublicationsView-t6lJj11d.css","assets/ProjectsView-BbuOb_qW.js","assets/ProjectsView-CE3C5xVp.css","assets/TarotView-Ckh1Ryip.js","assets/axios-Cm0UX6qg.js","assets/TarotView-BY-1NuOU.css","assets/ChatView-p96yqZ-K.js","assets/ChatView-C_KEhT_x.css","assets/LanguageView-BHcQBDOG.js","assets/LanguageView-BlQM03W_.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function tc(e,t){const n=new Set(e.split(","));return t?r=>n.has(r.toLowerCase()):r=>n.has(r)}const _t={},cr=[],me=()=>{},Hg=()=>!1,Li=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),ec=e=>e.startsWith("onUpdate:"),jt=Object.assign,nc=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Kg=Object.prototype.hasOwnProperty,nt=(e,t)=>Kg.call(e,t),z=Array.isArray,lr=e=>As(e)==="[object Map]",Kh=e=>As(e)==="[object Set]",Dl=e=>As(e)==="[object Date]",Q=e=>typeof e=="function",Pt=e=>typeof e=="string",fn=e=>typeof e=="symbol",mt=e=>e!==null&&typeof e=="object",Gh=e=>(mt(e)||Q(e))&&Q(e.then)&&Q(e.catch),Wh=Object.prototype.toString,As=e=>Wh.call(e),Gg=e=>As(e).slice(8,-1),Qh=e=>As(e)==="[object Object]",rc=e=>Pt(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,zr=tc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Fi=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Wg=/-(\w)/g,Me=Fi(e=>e.replace(Wg,(t,n)=>n?n.toUpperCase():"")),Qg=/\B([A-Z])/g,Gn=Fi(e=>e.replace(Qg,"-$1").toLowerCase()),Bi=Fi(e=>e.charAt(0).toUpperCase()+e.slice(1)),Po=Fi(e=>e?`on${Bi(e)}`:""),dn=(e,t)=>!Object.is(e,t),ni=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},fi=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},ia=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let xl;const Yh=()=>xl||(xl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function sc(e){if(z(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=Pt(r)?Zg(r):sc(r);if(s)for(const i in s)t[i]=s[i]}return t}else if(Pt(e)||mt(e))return e}const Yg=/;(?![^(]*\))/g,Jg=/:([^]+)/,Xg=/\/\*[^]*?\*\//g;function Zg(e){const t={};return e.replace(Xg,"").split(Yg).forEach(n=>{if(n){const r=n.split(Jg);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Re(e){let t="";if(Pt(e))t=e;else if(z(e))for(let n=0;n<e.length;n++){const r=Re(e[n]);r&&(t+=r+" ")}else if(mt(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const tm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",em=tc(tm);function Jh(e){return!!e||e===""}function nm(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=di(e[r],t[r]);return n}function di(e,t){if(e===t)return!0;let n=Dl(e),r=Dl(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=fn(e),r=fn(t),n||r)return e===t;if(n=z(e),r=z(t),n||r)return n&&r?nm(e,t):!1;if(n=mt(e),r=mt(t),n||r){if(!n||!r)return!1;const s=Object.keys(e).length,i=Object.keys(t).length;if(s!==i)return!1;for(const o in e){const a=e.hasOwnProperty(o),c=t.hasOwnProperty(o);if(a&&!c||!a&&c||!di(e[o],t[o]))return!1}}return String(e)===String(t)}const eS=e=>Pt(e)?e:e==null?"":z(e)||mt(e)&&(e.toString===Wh||!Q(e.toString))?JSON.stringify(e,Xh,2):String(e),Xh=(e,t)=>t&&t.__v_isRef?Xh(e,t.value):lr(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],i)=>(n[Vo(r,i)+" =>"]=s,n),{})}:Kh(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Vo(n))}:fn(t)?Vo(t):mt(t)&&!z(t)&&!Qh(t)?String(t):t,Vo=(e,t="")=>{var n;return fn(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ue;class Zh{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ue,!t&&ue&&(this.index=(ue.scopes||(ue.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=ue;try{return ue=this,t()}finally{ue=n}}}on(){ue=this}off(){ue=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function tf(e){return new Zh(e)}function rm(e,t=ue){t&&t.active&&t.effects.push(e)}function ef(){return ue}function sm(e){ue&&ue.cleanups.push(e)}let Mn;class ic{constructor(t,n,r,s){this.fn=t,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,rm(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Wn();for(let t=0;t<this._depsLength;t++){const n=this.deps[t];if(n.computed&&(im(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Qn()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=sn,n=Mn;try{return sn=!0,Mn=this,this._runnings++,Ol(this),this.fn()}finally{Nl(this),this._runnings--,Mn=n,sn=t}}stop(){var t;this.active&&(Ol(this),Nl(this),(t=this.onStop)==null||t.call(this),this.active=!1)}}function im(e){return e.value}function Ol(e){e._trackId++,e._depsLength=0}function Nl(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)nf(e.deps[t],e);e.deps.length=e._depsLength}}function nf(e,t){const n=e.get(t);n!==void 0&&t._trackId!==n&&(e.delete(t),e.size===0&&e.cleanup())}let sn=!0,oa=0;const rf=[];function Wn(){rf.push(sn),sn=!1}function Qn(){const e=rf.pop();sn=e===void 0?!0:e}function oc(){oa++}function ac(){for(oa--;!oa&&aa.length;)aa.shift()()}function sf(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const r=e.deps[e._depsLength];r!==t?(r&&nf(r,e),e.deps[e._depsLength++]=t):e._depsLength++}}const aa=[];function of(e,t,n){oc();for(const r of e.keys()){let s;r._dirtyLevel<t&&(s??(s=e.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=t),r._shouldSchedule&&(s??(s=e.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&aa.push(r.scheduler)))}ac()}const af=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},pi=new WeakMap,Ln=Symbol(""),ca=Symbol("");function ae(e,t,n){if(sn&&Mn){let r=pi.get(e);r||pi.set(e,r=new Map);let s=r.get(n);s||r.set(n,s=af(()=>r.delete(n))),sf(Mn,s)}}function qe(e,t,n,r,s,i){const o=pi.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&z(e)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||!fn(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),t){case"add":z(e)?rc(n)&&a.push(o.get("length")):(a.push(o.get(Ln)),lr(e)&&a.push(o.get(ca)));break;case"delete":z(e)||(a.push(o.get(Ln)),lr(e)&&a.push(o.get(ca)));break;case"set":lr(e)&&a.push(o.get(Ln));break}oc();for(const c of a)c&&of(c,4);ac()}function om(e,t){var n;return(n=pi.get(e))==null?void 0:n.get(t)}const am=tc("__proto__,__v_isRef,__isVue"),cf=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(fn)),kl=cm();function cm(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=it(this);for(let i=0,o=this.length;i<o;i++)ae(r,"get",i+"");const s=r[t](...n);return s===-1||s===!1?r[t](...n.map(it)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Wn(),oc();const r=it(this)[t].apply(this,n);return ac(),Qn(),r}}),e}function lm(e){const t=it(this);return ae(t,"has",e),t.hasOwnProperty(e)}class lf{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Tm:df:i?ff:hf).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=z(t);if(!s){if(o&&nt(kl,n))return Reflect.get(kl,n,r);if(n==="hasOwnProperty")return lm}const a=Reflect.get(t,n,r);return(fn(n)?cf.has(n):am(n))||(s||ae(t,"get",n),i)?a:xt(a)?o&&rc(n)?a:a.value:mt(a)?s?gf(a):Rs(a):a}}class uf extends lf{constructor(t=!1){super(!1,t)}set(t,n,r,s){let i=t[n];if(!this._isShallow){const c=_r(i);if(!gi(r)&&!_r(r)&&(i=it(i),r=it(r)),!z(t)&&xt(i)&&!xt(r))return c?!1:(i.value=r,!0)}const o=z(t)&&rc(n)?Number(n)<t.length:nt(t,n),a=Reflect.set(t,n,r,s);return t===it(s)&&(o?dn(r,i)&&qe(t,"set",n,r):qe(t,"add",n,r)),a}deleteProperty(t,n){const r=nt(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&qe(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!fn(n)||!cf.has(n))&&ae(t,"has",n),r}ownKeys(t){return ae(t,"iterate",z(t)?"length":Ln),Reflect.ownKeys(t)}}class um extends lf{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const hm=new uf,fm=new um,dm=new uf(!0),cc=e=>e,Ui=e=>Reflect.getPrototypeOf(e);function js(e,t,n=!1,r=!1){e=e.__v_raw;const s=it(e),i=it(t);n||(dn(t,i)&&ae(s,"get",t),ae(s,"get",i));const{has:o}=Ui(s),a=r?cc:n?hc:ss;if(o.call(s,t))return a(e.get(t));if(o.call(s,i))return a(e.get(i));e!==s&&e.get(t)}function qs(e,t=!1){const n=this.__v_raw,r=it(n),s=it(e);return t||(dn(e,s)&&ae(r,"has",e),ae(r,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function zs(e,t=!1){return e=e.__v_raw,!t&&ae(it(e),"iterate",Ln),Reflect.get(e,"size",e)}function Ml(e){e=it(e);const t=it(this);return Ui(t).has.call(t,e)||(t.add(e),qe(t,"add",e,e)),this}function Ll(e,t){t=it(t);const n=it(this),{has:r,get:s}=Ui(n);let i=r.call(n,e);i||(e=it(e),i=r.call(n,e));const o=s.call(n,e);return n.set(e,t),i?dn(t,o)&&qe(n,"set",e,t):qe(n,"add",e,t),this}function Fl(e){const t=it(this),{has:n,get:r}=Ui(t);let s=n.call(t,e);s||(e=it(e),s=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return s&&qe(t,"delete",e,void 0),i}function Bl(){const e=it(this),t=e.size!==0,n=e.clear();return t&&qe(e,"clear",void 0,void 0),n}function Hs(e,t){return function(r,s){const i=this,o=i.__v_raw,a=it(o),c=t?cc:e?hc:ss;return!e&&ae(a,"iterate",Ln),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function Ks(e,t,n){return function(...r){const s=this.__v_raw,i=it(s),o=lr(i),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,l=s[e](...r),u=n?cc:t?hc:ss;return!t&&ae(i,"iterate",c?ca:Ln),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Qe(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function pm(){const e={get(i){return js(this,i)},get size(){return zs(this)},has:qs,add:Ml,set:Ll,delete:Fl,clear:Bl,forEach:Hs(!1,!1)},t={get(i){return js(this,i,!1,!0)},get size(){return zs(this)},has:qs,add:Ml,set:Ll,delete:Fl,clear:Bl,forEach:Hs(!1,!0)},n={get(i){return js(this,i,!0)},get size(){return zs(this,!0)},has(i){return qs.call(this,i,!0)},add:Qe("add"),set:Qe("set"),delete:Qe("delete"),clear:Qe("clear"),forEach:Hs(!0,!1)},r={get(i){return js(this,i,!0,!0)},get size(){return zs(this,!0)},has(i){return qs.call(this,i,!0)},add:Qe("add"),set:Qe("set"),delete:Qe("delete"),clear:Qe("clear"),forEach:Hs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Ks(i,!1,!1),n[i]=Ks(i,!0,!1),t[i]=Ks(i,!1,!0),r[i]=Ks(i,!0,!0)}),[e,n,t,r]}const[gm,mm,_m,ym]=pm();function lc(e,t){const n=t?e?ym:_m:e?mm:gm;return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(nt(n,s)&&s in r?n:r,s,i)}const vm={get:lc(!1,!1)},Em={get:lc(!1,!0)},wm={get:lc(!0,!1)},hf=new WeakMap,ff=new WeakMap,df=new WeakMap,Tm=new WeakMap;function Im(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Am(e){return e.__v_skip||!Object.isExtensible(e)?0:Im(Gg(e))}function Rs(e){return _r(e)?e:uc(e,!1,hm,vm,hf)}function pf(e){return uc(e,!1,dm,Em,ff)}function gf(e){return uc(e,!0,fm,wm,df)}function uc(e,t,n,r,s){if(!mt(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const o=Am(e);if(o===0)return e;const a=new Proxy(e,o===2?r:n);return s.set(e,a),a}function on(e){return _r(e)?on(e.__v_raw):!!(e&&e.__v_isReactive)}function _r(e){return!!(e&&e.__v_isReadonly)}function gi(e){return!!(e&&e.__v_isShallow)}function mf(e){return on(e)||_r(e)}function it(e){const t=e&&e.__v_raw;return t?it(t):e}function $i(e){return Object.isExtensible(e)&&fi(e,"__v_skip",!0),e}const ss=e=>mt(e)?Rs(e):e,hc=e=>mt(e)?gf(e):e;class _f{constructor(t,n,r,s){this.getter=t,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new ic(()=>t(this._value),()=>ri(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const t=it(this);return(!t._cacheable||t.effect.dirty)&&dn(t._value,t._value=t.effect.run())&&ri(t,4),yf(t),t.effect._dirtyLevel>=2&&ri(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function Rm(e,t,n=!1){let r,s;const i=Q(e);return i?(r=e,s=me):(r=e.get,s=e.set),new _f(r,s,i||!s,n)}function yf(e){var t;sn&&Mn&&(e=it(e),sf(Mn,(t=e.dep)!=null?t:e.dep=af(()=>e.dep=void 0,e instanceof _f?e:void 0)))}function ri(e,t=4,n){e=it(e);const r=e.dep;r&&of(r,t)}function xt(e){return!!(e&&e.__v_isRef===!0)}function fc(e){return vf(e,!1)}function Sm(e){return vf(e,!0)}function vf(e,t){return xt(e)?e:new Cm(e,t)}class Cm{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:it(t),this._value=n?t:ss(t)}get value(){return yf(this),this._value}set value(t){const n=this.__v_isShallow||gi(t)||_r(t);t=n?t:it(t),dn(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:ss(t),ri(this,4))}}function an(e){return xt(e)?e.value:e}const bm={get:(e,t,n)=>an(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return xt(s)&&!xt(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function Ef(e){return on(e)?e:new Proxy(e,bm)}function Pm(e){const t=z(e)?new Array(e.length):{};for(const n in e)t[n]=Dm(e,n);return t}class Vm{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return om(it(this._object),this._key)}}function Dm(e,t,n){const r=e[t];return xt(r)?r:new Vm(e,t,n)}/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function cn(e,t,n,r){try{return r?e(...r):e()}catch(s){ji(s,t,n)}}function ve(e,t,n,r){if(Q(e)){const i=cn(e,t,n,r);return i&&Gh(i)&&i.catch(o=>{ji(o,t,n)}),i}const s=[];for(let i=0;i<e.length;i++)s.push(ve(e[i],t,n,r));return s}function ji(e,t,n,r=!0){const s=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](e,o,a)===!1)return}i=i.parent}const c=t.appContext.config.errorHandler;if(c){cn(c,null,10,[e,o,a]);return}}xm(e,n,s,r)}function xm(e,t,n,r=!0){console.error(e)}let is=!1,la=!1;const Wt=[];let be=0;const ur=[];let Xe=null,Sn=0;const wf=Promise.resolve();let dc=null;function pc(e){const t=dc||wf;return e?t.then(this?e.bind(this):e):t}function Om(e){let t=be+1,n=Wt.length;for(;t<n;){const r=t+n>>>1,s=Wt[r],i=os(s);i<e||i===e&&s.pre?t=r+1:n=r}return t}function gc(e){(!Wt.length||!Wt.includes(e,is&&e.allowRecurse?be+1:be))&&(e.id==null?Wt.push(e):Wt.splice(Om(e.id),0,e),Tf())}function Tf(){!is&&!la&&(la=!0,dc=wf.then(Af))}function Nm(e){const t=Wt.indexOf(e);t>be&&Wt.splice(t,1)}function km(e){z(e)?ur.push(...e):(!Xe||!Xe.includes(e,e.allowRecurse?Sn+1:Sn))&&ur.push(e),Tf()}function Ul(e,t,n=is?be+1:0){for(;n<Wt.length;n++){const r=Wt[n];if(r&&r.pre){if(e&&r.id!==e.uid)continue;Wt.splice(n,1),n--,r()}}}function If(e){if(ur.length){const t=[...new Set(ur)].sort((n,r)=>os(n)-os(r));if(ur.length=0,Xe){Xe.push(...t);return}for(Xe=t,Sn=0;Sn<Xe.length;Sn++)Xe[Sn]();Xe=null,Sn=0}}const os=e=>e.id==null?1/0:e.id,Mm=(e,t)=>{const n=os(e)-os(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Af(e){la=!1,is=!0,Wt.sort(Mm);try{for(be=0;be<Wt.length;be++){const t=Wt[be];t&&t.active!==!1&&cn(t,null,14)}}finally{be=0,Wt.length=0,If(),is=!1,dc=null,(Wt.length||ur.length)&&Af()}}function Lm(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||_t;let s=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[u]||_t;f&&(s=n.map(g=>Pt(g)?g.trim():g)),h&&(s=n.map(ia))}let a,c=r[a=Po(t)]||r[a=Po(Me(t))];!c&&i&&(c=r[a=Po(Gn(t))]),c&&ve(c,e,6,s);const l=r[a+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,ve(l,e,6,s)}}function Rf(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let o={},a=!1;if(!Q(e)){const c=l=>{const u=Rf(l,t,!0);u&&(a=!0,jt(o,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!a?(mt(e)&&r.set(e,null),null):(z(i)?i.forEach(c=>o[c]=null):jt(o,i),mt(e)&&r.set(e,o),o)}function qi(e,t){return!e||!Li(t)?!1:(t=t.slice(2).replace(/Once$/,""),nt(e,t[0].toLowerCase()+t.slice(1))||nt(e,Gn(t))||nt(e,t))}let ee=null,zi=null;function mi(e){const t=ee;return ee=e,zi=e&&e.type.__scopeId||null,t}function Fm(e){zi=e}function Bm(){zi=null}function nr(e,t=ee,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&Jl(-1);const i=mi(t);let o;try{o=e(...s)}finally{mi(i),r._d&&Jl(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Do(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:g,ctx:w,inheritAttrs:R}=e;let S,O;const M=mi(e);try{if(n.shapeFlag&4){const W=s||r,J=W;S=Ce(u.call(J,W,h,i,g,f,w)),O=c}else{const W=t;S=Ce(W.length>1?W(i,{attrs:c,slots:a,emit:l}):W(i,null)),O=t.props?c:Um(c)}}catch(W){Gr.length=0,ji(W,e,1),S=It(Un)}let B=S;if(O&&R!==!1){const W=Object.keys(O),{shapeFlag:J}=B;W.length&&J&7&&(o&&W.some(ec)&&(O=$m(O,o)),B=yr(B,O))}return n.dirs&&(B=yr(B),B.dirs=B.dirs?B.dirs.concat(n.dirs):n.dirs),n.transition&&(B.transition=n.transition),S=B,mi(M),S}const Um=e=>{let t;for(const n in e)(n==="class"||n==="style"||Li(n))&&((t||(t={}))[n]=e[n]);return t},$m=(e,t)=>{const n={};for(const r in e)(!ec(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function jm(e,t,n){const{props:r,children:s,component:i}=e,{props:o,children:a,patchFlag:c}=t,l=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?$l(r,o,l):!!o;if(c&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==r[f]&&!qi(l,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?$l(r,o,l):!0:!!o;return!1}function $l(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!qi(n,i))return!0}return!1}function qm({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const mc="components";function si(e,t){return Cf(mc,e,!0,t)||e}const Sf=Symbol.for("v-ndc");function nS(e){return Pt(e)?Cf(mc,e,!1)||e:e||Sf}function Cf(e,t,n=!0,r=!1){const s=ee||Bt;if(s){const i=s.type;if(e===mc){const a=B_(i,!1);if(a&&(a===t||a===Me(t)||a===Bi(Me(t))))return i}const o=jl(s[e]||i[e],t)||jl(s.appContext[e],t);return!o&&r?i:o}}function jl(e,t){return e&&(e[t]||e[Me(t)]||e[Bi(Me(t))])}const zm=e=>e.__isSuspense;function Hm(e,t){t&&t.pendingBranch?z(e)?t.effects.push(...e):t.effects.push(e):km(e)}const Km=Symbol.for("v-scx"),Gm=()=>Oe(Km),Gs={};function Hr(e,t,n){return bf(e,t,n)}function bf(e,t,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:a}=_t){if(t&&i){const q=t;t=(...gt)=>{q(...gt),J()}}const c=Bt,l=q=>r===!0?q:Vn(q,r===!1?1:void 0);let u,h=!1,f=!1;if(xt(e)?(u=()=>e.value,h=gi(e)):on(e)?(u=()=>l(e),h=!0):z(e)?(f=!0,h=e.some(q=>on(q)||gi(q)),u=()=>e.map(q=>{if(xt(q))return q.value;if(on(q))return l(q);if(Q(q))return cn(q,c,2)})):Q(e)?t?u=()=>cn(e,c,2):u=()=>(g&&g(),ve(e,c,3,[w])):u=me,t&&r){const q=u;u=()=>Vn(q())}let g,w=q=>{g=B.onStop=()=>{cn(q,c,4),g=B.onStop=void 0}},R;if(Qi)if(w=me,t?n&&ve(t,c,3,[u(),f?[]:void 0,w]):u(),s==="sync"){const q=Gm();R=q.__watcherHandles||(q.__watcherHandles=[])}else return me;let S=f?new Array(e.length).fill(Gs):Gs;const O=()=>{if(!(!B.active||!B.dirty))if(t){const q=B.run();(r||h||(f?q.some((gt,X)=>dn(gt,S[X])):dn(q,S)))&&(g&&g(),ve(t,c,3,[q,S===Gs?void 0:f&&S[0]===Gs?[]:S,w]),S=q)}else B.run()};O.allowRecurse=!!t;let M;s==="sync"?M=O:s==="post"?M=()=>se(O,c&&c.suspense):(O.pre=!0,c&&(O.id=c.uid),M=()=>gc(O));const B=new ic(u,me,M),W=ef(),J=()=>{B.stop(),W&&nc(W.effects,B)};return t?n?O():S=B.run():s==="post"?se(B.run.bind(B),c&&c.suspense):B.run(),R&&R.push(J),J}function Wm(e,t,n){const r=this.proxy,s=Pt(e)?e.includes(".")?Pf(r,e):()=>r[e]:e.bind(r,r);let i;Q(t)?i=t:(i=t.handler,n=t);const o=Ss(this),a=bf(s,i.bind(r),n);return o(),a}function Pf(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Vn(e,t,n=0,r){if(!mt(e)||e.__v_skip)return e;if(t&&t>0){if(n>=t)return e;n++}if(r=r||new Set,r.has(e))return e;if(r.add(e),xt(e))Vn(e.value,t,n,r);else if(z(e))for(let s=0;s<e.length;s++)Vn(e[s],t,n,r);else if(Kh(e)||lr(e))e.forEach(s=>{Vn(s,t,n,r)});else if(Qh(e))for(const s in e)Vn(e[s],t,n,r);return e}function rS(e,t){if(ee===null)return e;const n=Yi(ee)||ee.proxy,r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[i,o,a,c=_t]=t[s];i&&(Q(i)&&(i={mounted:i,updated:i}),i.deep&&Vn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return e}function Tn(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Wn(),ve(c,n,8,[e.el,a,e,t]),Qn())}}/*! #__NO_SIDE_EFFECTS__ */function Vf(e,t){return Q(e)?jt({name:e.name},t,{setup:e}):e}const ii=e=>!!e.type.__asyncLoader,Df=e=>e.type.__isKeepAlive;function Qm(e,t){xf(e,"a",t)}function Ym(e,t){xf(e,"da",t)}function xf(e,t,n=Bt){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(Hi(t,r,n),n){let s=n.parent;for(;s&&s.parent;)Df(s.parent.vnode)&&Jm(r,t,n,s),s=s.parent}}function Jm(e,t,n,r){const s=Hi(t,e,r,!0);Of(()=>{nc(r[t],s)},n)}function Hi(e,t,n=Bt,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Wn();const a=Ss(n),c=ve(t,n,e,o);return a(),Qn(),c});return r?s.unshift(i):s.push(i),i}}const Ge=e=>(t,n=Bt)=>(!Qi||e==="sp")&&Hi(e,(...r)=>t(...r),n),Xm=Ge("bm"),Zm=Ge("m"),t_=Ge("bu"),e_=Ge("u"),n_=Ge("bum"),Of=Ge("um"),r_=Ge("sp"),s_=Ge("rtg"),i_=Ge("rtc");function o_(e,t=Bt){Hi("ec",e,t)}function sS(e,t,n,r){let s;const i=n&&n[r];if(z(e)||Pt(e)){s=new Array(e.length);for(let o=0,a=e.length;o<a;o++)s[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){s=new Array(e);for(let o=0;o<e;o++)s[o]=t(o+1,o,void 0,i&&i[o])}else if(mt(e))if(e[Symbol.iterator])s=Array.from(e,(o,a)=>t(o,a,void 0,i&&i[a]));else{const o=Object.keys(e);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=t(e[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const ua=e=>e?Hf(e)?Yi(e)||e.proxy:ua(e.parent):null,Kr=jt(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ua(e.parent),$root:e=>ua(e.root),$emit:e=>e.emit,$options:e=>_c(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,gc(e.update)}),$nextTick:e=>e.n||(e.n=pc.bind(e.proxy)),$watch:e=>Wm.bind(e)}),xo=(e,t)=>e!==_t&&!e.__isScriptSetup&&nt(e,t),a_={get({_:e},t){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=e;let l;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(xo(r,t))return o[t]=1,r[t];if(s!==_t&&nt(s,t))return o[t]=2,s[t];if((l=e.propsOptions[0])&&nt(l,t))return o[t]=3,i[t];if(n!==_t&&nt(n,t))return o[t]=4,n[t];ha&&(o[t]=0)}}const u=Kr[t];let h,f;if(u)return t==="$attrs"&&ae(e,"get",t),u(e);if((h=a.__cssModules)&&(h=h[t]))return h;if(n!==_t&&nt(n,t))return o[t]=4,n[t];if(f=c.config.globalProperties,nt(f,t))return f[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return xo(s,t)?(s[t]=n,!0):r!==_t&&nt(r,t)?(r[t]=n,!0):nt(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||e!==_t&&nt(e,o)||xo(t,o)||(a=i[0])&&nt(a,o)||nt(r,o)||nt(Kr,o)||nt(s.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:nt(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function ql(e){return z(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let ha=!0;function c_(e){const t=_c(e),n=e.proxy,r=e.ctx;ha=!1,t.beforeCreate&&zl(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:g,updated:w,activated:R,deactivated:S,beforeDestroy:O,beforeUnmount:M,destroyed:B,unmounted:W,render:J,renderTracked:q,renderTriggered:gt,errorCaptured:X,serverPrefetch:Z,expose:vt,inheritAttrs:qt,components:ce,directives:de,filters:wn}=t;if(l&&l_(l,r,null),o)for(const dt in o){const ct=o[dt];Q(ct)&&(r[dt]=ct.bind(n))}if(s){const dt=s.call(n,n);mt(dt)&&(e.data=Rs(dt))}if(ha=!0,i)for(const dt in i){const ct=i[dt],Ue=Q(ct)?ct.bind(n,n):Q(ct.get)?ct.get.bind(n,n):me,We=!Q(ct)&&Q(ct.set)?ct.set.bind(n):me,Te=Zt({get:Ue,set:We});Object.defineProperty(r,dt,{enumerable:!0,configurable:!0,get:()=>Te.value,set:re=>Te.value=re})}if(a)for(const dt in a)Nf(a[dt],r,n,dt);if(c){const dt=Q(c)?c.call(n):c;Reflect.ownKeys(dt).forEach(ct=>{oi(ct,dt[ct])})}u&&zl(u,e,"c");function at(dt,ct){z(ct)?ct.forEach(Ue=>dt(Ue.bind(n))):ct&&dt(ct.bind(n))}if(at(Xm,h),at(Zm,f),at(t_,g),at(e_,w),at(Qm,R),at(Ym,S),at(o_,X),at(i_,q),at(s_,gt),at(n_,M),at(Of,W),at(r_,Z),z(vt))if(vt.length){const dt=e.exposed||(e.exposed={});vt.forEach(ct=>{Object.defineProperty(dt,ct,{get:()=>n[ct],set:Ue=>n[ct]=Ue})})}else e.exposed||(e.exposed={});J&&e.render===me&&(e.render=J),qt!=null&&(e.inheritAttrs=qt),ce&&(e.components=ce),de&&(e.directives=de)}function l_(e,t,n=me){z(e)&&(e=fa(e));for(const r in e){const s=e[r];let i;mt(s)?"default"in s?i=Oe(s.from||r,s.default,!0):i=Oe(s.from||r):i=Oe(s),xt(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function zl(e,t,n){ve(z(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Nf(e,t,n,r){const s=r.includes(".")?Pf(n,r):()=>n[r];if(Pt(e)){const i=t[e];Q(i)&&Hr(s,i)}else if(Q(e))Hr(s,e.bind(n));else if(mt(e))if(z(e))e.forEach(i=>Nf(i,t,n,r));else{const i=Q(e.handler)?e.handler.bind(n):t[e.handler];Q(i)&&Hr(s,i,e)}}function _c(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let c;return a?c=a:!s.length&&!n&&!r?c=t:(c={},s.length&&s.forEach(l=>_i(c,l,o,!0)),_i(c,t,o)),mt(t)&&i.set(t,c),c}function _i(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&_i(e,i,n,!0),s&&s.forEach(o=>_i(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const a=u_[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const u_={data:Hl,props:Kl,emits:Kl,methods:Br,computed:Br,beforeCreate:Xt,created:Xt,beforeMount:Xt,mounted:Xt,beforeUpdate:Xt,updated:Xt,beforeDestroy:Xt,beforeUnmount:Xt,destroyed:Xt,unmounted:Xt,activated:Xt,deactivated:Xt,errorCaptured:Xt,serverPrefetch:Xt,components:Br,directives:Br,watch:f_,provide:Hl,inject:h_};function Hl(e,t){return t?e?function(){return jt(Q(e)?e.call(this,this):e,Q(t)?t.call(this,this):t)}:t:e}function h_(e,t){return Br(fa(e),fa(t))}function fa(e){if(z(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Xt(e,t){return e?[...new Set([].concat(e,t))]:t}function Br(e,t){return e?jt(Object.create(null),e,t):t}function Kl(e,t){return e?z(e)&&z(t)?[...new Set([...e,...t])]:jt(Object.create(null),ql(e),ql(t??{})):t}function f_(e,t){if(!e)return t;if(!t)return e;const n=jt(Object.create(null),e);for(const r in t)n[r]=Xt(e[r],t[r]);return n}function kf(){return{app:null,config:{isNativeTag:Hg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let d_=0;function p_(e,t){return function(r,s=null){Q(r)||(r=jt({},r)),s!=null&&!mt(s)&&(s=null);const i=kf(),o=new WeakSet;let a=!1;const c=i.app={_uid:d_++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:$_,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&Q(l.install)?(o.add(l),l.install(c,...u)):Q(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const f=It(r,s);return f.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),u&&t?t(f,l):e(f,l,h),a=!0,c._container=l,l.__vue_app__=c,Yi(f.component)||f.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){const u=hr;hr=c;try{return l()}finally{hr=u}}};return c}}let hr=null;function oi(e,t){if(Bt){let n=Bt.provides;const r=Bt.parent&&Bt.parent.provides;r===n&&(n=Bt.provides=Object.create(r)),n[e]=t}}function Oe(e,t,n=!1){const r=Bt||ee;if(r||hr){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:hr._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&Q(t)?t.call(r&&r.proxy):t}}function g_(){return!!(Bt||ee||hr)}function m_(e,t,n,r=!1){const s={},i={};fi(i,Wi,1),e.propsDefaults=Object.create(null),Mf(e,t,s,i);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=r?s:pf(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function __(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=e,a=it(s),[c]=e.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(qi(e.emitsOptions,f))continue;const g=t[f];if(c)if(nt(i,f))g!==i[f]&&(i[f]=g,l=!0);else{const w=Me(f);s[w]=da(c,a,w,g,e,!1)}else g!==i[f]&&(i[f]=g,l=!0)}}}else{Mf(e,t,s,i)&&(l=!0);let u;for(const h in a)(!t||!nt(t,h)&&((u=Gn(h))===h||!nt(t,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=da(c,a,h,void 0,e,!0)):delete s[h]);if(i!==a)for(const h in i)(!t||!nt(t,h))&&(delete i[h],l=!0)}l&&qe(e,"set","$attrs")}function Mf(e,t,n,r){const[s,i]=e.propsOptions;let o=!1,a;if(t)for(let c in t){if(zr(c))continue;const l=t[c];let u;s&&nt(s,u=Me(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:qi(e.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=it(n),l=a||_t;for(let u=0;u<i.length;u++){const h=i[u];n[h]=da(s,c,h,l[h],e,!nt(l,h))}}return o}function da(e,t,n,r,s,i){const o=e[n];if(o!=null){const a=nt(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Q(c)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const u=Ss(s);r=l[n]=c.call(null,t),u()}}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Gn(n))&&(r=!0))}return r}function Lf(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const i=e.props,o={},a=[];let c=!1;if(!Q(e)){const u=h=>{c=!0;const[f,g]=Lf(h,t,!0);jt(o,f),g&&a.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!c)return mt(e)&&r.set(e,cr),cr;if(z(i))for(let u=0;u<i.length;u++){const h=Me(i[u]);Gl(h)&&(o[h]=_t)}else if(i)for(const u in i){const h=Me(u);if(Gl(h)){const f=i[u],g=o[h]=z(f)||Q(f)?{type:f}:jt({},f);if(g){const w=Yl(Boolean,g.type),R=Yl(String,g.type);g[0]=w>-1,g[1]=R<0||w<R,(w>-1||nt(g,"default"))&&a.push(h)}}}const l=[o,a];return mt(e)&&r.set(e,l),l}function Gl(e){return e[0]!=="$"&&!zr(e)}function Wl(e){return e===null?"null":typeof e=="function"?e.name||"":typeof e=="object"&&e.constructor&&e.constructor.name||""}function Ql(e,t){return Wl(e)===Wl(t)}function Yl(e,t){return z(t)?t.findIndex(n=>Ql(n,e)):Q(t)&&Ql(t,e)?0:-1}const Ff=e=>e[0]==="_"||e==="$stable",yc=e=>z(e)?e.map(Ce):[Ce(e)],y_=(e,t,n)=>{if(t._n)return t;const r=nr((...s)=>yc(t(...s)),n);return r._c=!1,r},Bf=(e,t,n)=>{const r=e._ctx;for(const s in e){if(Ff(s))continue;const i=e[s];if(Q(i))t[s]=y_(s,i,r);else if(i!=null){const o=yc(i);t[s]=()=>o}}},Uf=(e,t)=>{const n=yc(t);e.slots.default=()=>n},v_=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=it(t),fi(t,"_",n)):Bf(t,e.slots={})}else e.slots={},t&&Uf(e,t);fi(e.slots,Wi,1)},E_=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,o=_t;if(r.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:(jt(s,t),!n&&a===1&&delete s._):(i=!t.$stable,Bf(t,s)),o=t}else t&&(Uf(e,t),o={default:1});if(i)for(const a in s)!Ff(a)&&o[a]==null&&delete s[a]};function pa(e,t,n,r,s=!1){if(z(e)){e.forEach((f,g)=>pa(f,t&&(z(t)?t[g]:t),n,r,s));return}if(ii(r)&&!s)return;const i=r.shapeFlag&4?Yi(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=e,l=t&&t.r,u=a.refs===_t?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Pt(l)?(u[l]=null,nt(h,l)&&(h[l]=null)):xt(l)&&(l.value=null)),Q(c))cn(c,a,12,[o,u]);else{const f=Pt(c),g=xt(c);if(f||g){const w=()=>{if(e.f){const R=f?nt(h,c)?h[c]:u[c]:c.value;s?z(R)&&nc(R,i):z(R)?R.includes(i)||R.push(i):f?(u[c]=[i],nt(h,c)&&(h[c]=u[c])):(c.value=[i],e.k&&(u[e.k]=c.value))}else f?(u[c]=o,nt(h,c)&&(h[c]=o)):g&&(c.value=o,e.k&&(u[e.k]=o))};o?(w.id=-1,se(w,n)):w()}}}const se=Hm;function w_(e){return T_(e)}function T_(e,t){const n=Yh();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:g=me,insertStaticContent:w}=e,R=(d,p,m,v=null,_=null,A=null,x=void 0,I=null,C=!!p.dynamicChildren)=>{if(d===p)return;d&&!Nr(d,p)&&(v=y(d),re(d,_,A,!0),d=null),p.patchFlag===-2&&(C=!1,p.dynamicChildren=null);const{type:T,ref:k,shapeFlag:$}=p;switch(T){case Ki:S(d,p,m,v);break;case Un:O(d,p,m,v);break;case ai:d==null&&M(p,m,v,x);break;case Se:ce(d,p,m,v,_,A,x,I,C);break;default:$&1?J(d,p,m,v,_,A,x,I,C):$&6?de(d,p,m,v,_,A,x,I,C):($&64||$&128)&&T.process(d,p,m,v,_,A,x,I,C,L)}k!=null&&_&&pa(k,d&&d.ref,A,p||d,!p)},S=(d,p,m,v)=>{if(d==null)r(p.el=a(p.children),m,v);else{const _=p.el=d.el;p.children!==d.children&&l(_,p.children)}},O=(d,p,m,v)=>{d==null?r(p.el=c(p.children||""),m,v):p.el=d.el},M=(d,p,m,v)=>{[d.el,d.anchor]=w(d.children,p,m,v,d.el,d.anchor)},B=({el:d,anchor:p},m,v)=>{let _;for(;d&&d!==p;)_=f(d),r(d,m,v),d=_;r(p,m,v)},W=({el:d,anchor:p})=>{let m;for(;d&&d!==p;)m=f(d),s(d),d=m;s(p)},J=(d,p,m,v,_,A,x,I,C)=>{p.type==="svg"?x="svg":p.type==="math"&&(x="mathml"),d==null?q(p,m,v,_,A,x,I,C):Z(d,p,_,A,x,I,C)},q=(d,p,m,v,_,A,x,I)=>{let C,T;const{props:k,shapeFlag:$,transition:F,dirs:K}=d;if(C=d.el=o(d.type,A,k&&k.is,k),$&8?u(C,d.children):$&16&&X(d.children,C,null,v,_,Oo(d,A),x,I),K&&Tn(d,null,v,"created"),gt(C,d,d.scopeId,x,v),k){for(const pt in k)pt!=="value"&&!zr(pt)&&i(C,pt,null,k[pt],A,d.children,v,_,zt);"value"in k&&i(C,"value",null,k.value,A),(T=k.onVnodeBeforeMount)&&Ae(T,v,d)}K&&Tn(d,null,v,"beforeMount");const tt=I_(_,F);tt&&F.beforeEnter(C),r(C,p,m),((T=k&&k.onVnodeMounted)||tt||K)&&se(()=>{T&&Ae(T,v,d),tt&&F.enter(C),K&&Tn(d,null,v,"mounted")},_)},gt=(d,p,m,v,_)=>{if(m&&g(d,m),v)for(let A=0;A<v.length;A++)g(d,v[A]);if(_){let A=_.subTree;if(p===A){const x=_.vnode;gt(d,x,x.scopeId,x.slotScopeIds,_.parent)}}},X=(d,p,m,v,_,A,x,I,C=0)=>{for(let T=C;T<d.length;T++){const k=d[T]=I?Ze(d[T]):Ce(d[T]);R(null,k,p,m,v,_,A,x,I)}},Z=(d,p,m,v,_,A,x)=>{const I=p.el=d.el;let{patchFlag:C,dynamicChildren:T,dirs:k}=p;C|=d.patchFlag&16;const $=d.props||_t,F=p.props||_t;let K;if(m&&In(m,!1),(K=F.onVnodeBeforeUpdate)&&Ae(K,m,p,d),k&&Tn(p,d,m,"beforeUpdate"),m&&In(m,!0),T?vt(d.dynamicChildren,T,I,m,v,Oo(p,_),A):x||ct(d,p,I,null,m,v,Oo(p,_),A,!1),C>0){if(C&16)qt(I,p,$,F,m,v,_);else if(C&2&&$.class!==F.class&&i(I,"class",null,F.class,_),C&4&&i(I,"style",$.style,F.style,_),C&8){const tt=p.dynamicProps;for(let pt=0;pt<tt.length;pt++){const wt=tt[pt],Ot=$[wt],_e=F[wt];(_e!==Ot||wt==="value")&&i(I,wt,Ot,_e,_,d.children,m,v,zt)}}C&1&&d.children!==p.children&&u(I,p.children)}else!x&&T==null&&qt(I,p,$,F,m,v,_);((K=F.onVnodeUpdated)||k)&&se(()=>{K&&Ae(K,m,p,d),k&&Tn(p,d,m,"updated")},v)},vt=(d,p,m,v,_,A,x)=>{for(let I=0;I<p.length;I++){const C=d[I],T=p[I],k=C.el&&(C.type===Se||!Nr(C,T)||C.shapeFlag&70)?h(C.el):m;R(C,T,k,null,v,_,A,x,!0)}},qt=(d,p,m,v,_,A,x)=>{if(m!==v){if(m!==_t)for(const I in m)!zr(I)&&!(I in v)&&i(d,I,m[I],null,x,p.children,_,A,zt);for(const I in v){if(zr(I))continue;const C=v[I],T=m[I];C!==T&&I!=="value"&&i(d,I,T,C,x,p.children,_,A,zt)}"value"in v&&i(d,"value",m.value,v.value,x)}},ce=(d,p,m,v,_,A,x,I,C)=>{const T=p.el=d?d.el:a(""),k=p.anchor=d?d.anchor:a("");let{patchFlag:$,dynamicChildren:F,slotScopeIds:K}=p;K&&(I=I?I.concat(K):K),d==null?(r(T,m,v),r(k,m,v),X(p.children||[],m,k,_,A,x,I,C)):$>0&&$&64&&F&&d.dynamicChildren?(vt(d.dynamicChildren,F,m,_,A,x,I),(p.key!=null||_&&p===_.subTree)&&$f(d,p,!0)):ct(d,p,m,k,_,A,x,I,C)},de=(d,p,m,v,_,A,x,I,C)=>{p.slotScopeIds=I,d==null?p.shapeFlag&512?_.ctx.activate(p,m,v,x,C):wn(p,m,v,_,A,x,C):pe(d,p,C)},wn=(d,p,m,v,_,A,x)=>{const I=d.component=N_(d,v,_);if(Df(d)&&(I.ctx.renderer=L),k_(I),I.asyncDep){if(_&&_.registerDep(I,at),!d.el){const C=I.subTree=It(Un);O(null,C,p,m)}}else at(I,d,p,m,_,A,x)},pe=(d,p,m)=>{const v=p.component=d.component;if(jm(d,p,m))if(v.asyncDep&&!v.asyncResolved){dt(v,p,m);return}else v.next=p,Nm(v.update),v.effect.dirty=!0,v.update();else p.el=d.el,v.vnode=p},at=(d,p,m,v,_,A,x)=>{const I=()=>{if(d.isMounted){let{next:k,bu:$,u:F,parent:K,vnode:tt}=d;{const Zn=jf(d);if(Zn){k&&(k.el=tt.el,dt(d,k,x)),Zn.asyncDep.then(()=>{d.isUnmounted||I()});return}}let pt=k,wt;In(d,!1),k?(k.el=tt.el,dt(d,k,x)):k=tt,$&&ni($),(wt=k.props&&k.props.onVnodeBeforeUpdate)&&Ae(wt,K,k,tt),In(d,!0);const Ot=Do(d),_e=d.subTree;d.subTree=Ot,R(_e,Ot,h(_e.el),y(_e),d,_,A),k.el=Ot.el,pt===null&&qm(d,Ot.el),F&&se(F,_),(wt=k.props&&k.props.onVnodeUpdated)&&se(()=>Ae(wt,K,k,tt),_)}else{let k;const{el:$,props:F}=p,{bm:K,m:tt,parent:pt}=d,wt=ii(p);if(In(d,!1),K&&ni(K),!wt&&(k=F&&F.onVnodeBeforeMount)&&Ae(k,pt,p),In(d,!0),$&&Et){const Ot=()=>{d.subTree=Do(d),Et($,d.subTree,d,_,null)};wt?p.type.__asyncLoader().then(()=>!d.isUnmounted&&Ot()):Ot()}else{const Ot=d.subTree=Do(d);R(null,Ot,m,v,d,_,A),p.el=Ot.el}if(tt&&se(tt,_),!wt&&(k=F&&F.onVnodeMounted)){const Ot=p;se(()=>Ae(k,pt,Ot),_)}(p.shapeFlag&256||pt&&ii(pt.vnode)&&pt.vnode.shapeFlag&256)&&d.a&&se(d.a,_),d.isMounted=!0,p=m=v=null}},C=d.effect=new ic(I,me,()=>gc(T),d.scope),T=d.update=()=>{C.dirty&&C.run()};T.id=d.uid,In(d,!0),T()},dt=(d,p,m)=>{p.component=d;const v=d.vnode.props;d.vnode=p,d.next=null,__(d,p.props,v,m),E_(d,p.children,m),Wn(),Ul(d),Qn()},ct=(d,p,m,v,_,A,x,I,C=!1)=>{const T=d&&d.children,k=d?d.shapeFlag:0,$=p.children,{patchFlag:F,shapeFlag:K}=p;if(F>0){if(F&128){We(T,$,m,v,_,A,x,I,C);return}else if(F&256){Ue(T,$,m,v,_,A,x,I,C);return}}K&8?(k&16&&zt(T,_,A),$!==T&&u(m,$)):k&16?K&16?We(T,$,m,v,_,A,x,I,C):zt(T,_,A,!0):(k&8&&u(m,""),K&16&&X($,m,v,_,A,x,I,C))},Ue=(d,p,m,v,_,A,x,I,C)=>{d=d||cr,p=p||cr;const T=d.length,k=p.length,$=Math.min(T,k);let F;for(F=0;F<$;F++){const K=p[F]=C?Ze(p[F]):Ce(p[F]);R(d[F],K,m,null,_,A,x,I,C)}T>k?zt(d,_,A,!0,!1,$):X(p,m,v,_,A,x,I,C,$)},We=(d,p,m,v,_,A,x,I,C)=>{let T=0;const k=p.length;let $=d.length-1,F=k-1;for(;T<=$&&T<=F;){const K=d[T],tt=p[T]=C?Ze(p[T]):Ce(p[T]);if(Nr(K,tt))R(K,tt,m,null,_,A,x,I,C);else break;T++}for(;T<=$&&T<=F;){const K=d[$],tt=p[F]=C?Ze(p[F]):Ce(p[F]);if(Nr(K,tt))R(K,tt,m,null,_,A,x,I,C);else break;$--,F--}if(T>$){if(T<=F){const K=F+1,tt=K<k?p[K].el:v;for(;T<=F;)R(null,p[T]=C?Ze(p[T]):Ce(p[T]),m,tt,_,A,x,I,C),T++}}else if(T>F)for(;T<=$;)re(d[T],_,A,!0),T++;else{const K=T,tt=T,pt=new Map;for(T=tt;T<=F;T++){const le=p[T]=C?Ze(p[T]):Ce(p[T]);le.key!=null&&pt.set(le.key,T)}let wt,Ot=0;const _e=F-tt+1;let Zn=!1,bl=0;const Or=new Array(_e);for(T=0;T<_e;T++)Or[T]=0;for(T=K;T<=$;T++){const le=d[T];if(Ot>=_e){re(le,_,A,!0);continue}let Ie;if(le.key!=null)Ie=pt.get(le.key);else for(wt=tt;wt<=F;wt++)if(Or[wt-tt]===0&&Nr(le,p[wt])){Ie=wt;break}Ie===void 0?re(le,_,A,!0):(Or[Ie-tt]=T+1,Ie>=bl?bl=Ie:Zn=!0,R(le,p[Ie],m,null,_,A,x,I,C),Ot++)}const Pl=Zn?A_(Or):cr;for(wt=Pl.length-1,T=_e-1;T>=0;T--){const le=tt+T,Ie=p[le],Vl=le+1<k?p[le+1].el:v;Or[T]===0?R(null,Ie,m,Vl,_,A,x,I,C):Zn&&(wt<0||T!==Pl[wt]?Te(Ie,m,Vl,2):wt--)}}},Te=(d,p,m,v,_=null)=>{const{el:A,type:x,transition:I,children:C,shapeFlag:T}=d;if(T&6){Te(d.component.subTree,p,m,v);return}if(T&128){d.suspense.move(p,m,v);return}if(T&64){x.move(d,p,m,L);return}if(x===Se){r(A,p,m);for(let $=0;$<C.length;$++)Te(C[$],p,m,v);r(d.anchor,p,m);return}if(x===ai){B(d,p,m);return}if(v!==2&&T&1&&I)if(v===0)I.beforeEnter(A),r(A,p,m),se(()=>I.enter(A),_);else{const{leave:$,delayLeave:F,afterLeave:K}=I,tt=()=>r(A,p,m),pt=()=>{$(A,()=>{tt(),K&&K()})};F?F(A,tt,pt):pt()}else r(A,p,m)},re=(d,p,m,v=!1,_=!1)=>{const{type:A,props:x,ref:I,children:C,dynamicChildren:T,shapeFlag:k,patchFlag:$,dirs:F}=d;if(I!=null&&pa(I,null,m,d,!0),k&256){p.ctx.deactivate(d);return}const K=k&1&&F,tt=!ii(d);let pt;if(tt&&(pt=x&&x.onVnodeBeforeUnmount)&&Ae(pt,p,d),k&6)$s(d.component,m,v);else{if(k&128){d.suspense.unmount(m,v);return}K&&Tn(d,null,p,"beforeUnmount"),k&64?d.type.remove(d,p,m,_,L,v):T&&(A!==Se||$>0&&$&64)?zt(T,p,m,!1,!0):(A===Se&&$&384||!_&&k&16)&&zt(C,p,m),v&&Jn(d)}(tt&&(pt=x&&x.onVnodeUnmounted)||K)&&se(()=>{pt&&Ae(pt,p,d),K&&Tn(d,null,p,"unmounted")},m)},Jn=d=>{const{type:p,el:m,anchor:v,transition:_}=d;if(p===Se){Xn(m,v);return}if(p===ai){W(d);return}const A=()=>{s(m),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(d.shapeFlag&1&&_&&!_.persisted){const{leave:x,delayLeave:I}=_,C=()=>x(m,A);I?I(d.el,A,C):C()}else A()},Xn=(d,p)=>{let m;for(;d!==p;)m=f(d),s(d),d=m;s(p)},$s=(d,p,m)=>{const{bum:v,scope:_,update:A,subTree:x,um:I}=d;v&&ni(v),_.stop(),A&&(A.active=!1,re(x,d,p,m)),I&&se(I,p),se(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},zt=(d,p,m,v=!1,_=!1,A=0)=>{for(let x=A;x<d.length;x++)re(d[x],p,m,v,_)},y=d=>d.shapeFlag&6?y(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el);let N=!1;const D=(d,p,m)=>{d==null?p._vnode&&re(p._vnode,null,null,!0):R(p._vnode||null,d,p,null,null,null,m),N||(N=!0,Ul(),If(),N=!1),p._vnode=d},L={p:R,um:re,m:Te,r:Jn,mt:wn,mc:X,pc:ct,pbc:vt,n:y,o:e};let lt,Et;return t&&([lt,Et]=t(L)),{render:D,hydrate:lt,createApp:p_(D,lt)}}function Oo({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function In({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function I_(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function $f(e,t,n=!1){const r=e.children,s=t.children;if(z(r)&&z(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Ze(s[i]),a.el=o.el),n||$f(o,a)),a.type===Ki&&(a.el=o.el)}}function A_(e){const t=e.slice(),n=[0];let r,s,i,o,a;const c=e.length;for(r=0;r<c;r++){const l=e[r];if(l!==0){if(s=n[n.length-1],e[s]<l){t[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<l?i=a+1:o=a;l<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function jf(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:jf(t)}const R_=e=>e.__isTeleport,Se=Symbol.for("v-fgt"),Ki=Symbol.for("v-txt"),Un=Symbol.for("v-cmt"),ai=Symbol.for("v-stc"),Gr=[];let ye=null;function Gi(e=!1){Gr.push(ye=e?null:[])}function S_(){Gr.pop(),ye=Gr[Gr.length-1]||null}let as=1;function Jl(e){as+=e}function qf(e){return e.dynamicChildren=as>0?ye||cr:null,S_(),as>0&&ye&&ye.push(e),e}function vc(e,t,n,r,s,i){return qf(Vt(e,t,n,r,s,i,!0))}function C_(e,t,n,r,s){return qf(It(e,t,n,r,s,!0))}function ga(e){return e?e.__v_isVNode===!0:!1}function Nr(e,t){return e.type===t.type&&e.key===t.key}const Wi="__vInternal",zf=({key:e})=>e??null,ci=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Pt(e)||xt(e)||Q(e)?{i:ee,r:e,k:t,f:!!n}:e:null);function Vt(e,t=null,n=null,r=0,s=null,i=e===Se?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&zf(t),ref:t&&ci(t),scopeId:zi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ee};return a?(Ec(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=Pt(n)?8:16),as>0&&!o&&ye&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&ye.push(c),c}const It=b_;function b_(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===Sf)&&(e=Un),ga(e)){const a=yr(e,t,!0);return n&&Ec(a,n),as>0&&!i&&ye&&(a.shapeFlag&6?ye[ye.indexOf(e)]=a:ye.push(a)),a.patchFlag|=-2,a}if(U_(e)&&(e=e.__vccOpts),t){t=P_(t);let{class:a,style:c}=t;a&&!Pt(a)&&(t.class=Re(a)),mt(c)&&(mf(c)&&!z(c)&&(c=jt({},c)),t.style=sc(c))}const o=Pt(e)?1:zm(e)?128:R_(e)?64:mt(e)?4:Q(e)?2:0;return Vt(e,t,n,r,s,o,i,!0)}function P_(e){return e?mf(e)||Wi in e?jt({},e):e:null}function yr(e,t,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=e,a=t?D_(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&zf(a),ref:t&&t.ref?n&&s?z(s)?s.concat(ci(t)):[s,ci(t)]:ci(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Se?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&yr(e.ssContent),ssFallback:e.ssFallback&&yr(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Cn(e=" ",t=0){return It(Ki,null,e,t)}function iS(e,t){const n=It(ai,null,e);return n.staticCount=t,n}function V_(e="",t=!1){return t?(Gi(),C_(Un,null,e)):It(Un,null,e)}function Ce(e){return e==null||typeof e=="boolean"?It(Un):z(e)?It(Se,null,e.slice()):typeof e=="object"?Ze(e):It(Ki,null,String(e))}function Ze(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:yr(e)}function Ec(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(z(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),Ec(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!(Wi in t)?t._ctx=ee:s===3&&ee&&(ee.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else Q(t)?(t={default:t,_ctx:ee},n=32):(t=String(t),r&64?(n=16,t=[Cn(t)]):n=8);e.children=t,e.shapeFlag|=n}function D_(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=Re([t.class,r.class]));else if(s==="style")t.style=sc([t.style,r.style]);else if(Li(s)){const i=t[s],o=r[s];o&&i!==o&&!(z(i)&&i.includes(o))&&(t[s]=i?[].concat(i,o):o)}else s!==""&&(t[s]=r[s])}return t}function Ae(e,t,n,r=null){ve(e,t,7,[n,r])}const x_=kf();let O_=0;function N_(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||x_,i={uid:O_++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Zh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Lf(r,s),emitsOptions:Rf(r,s),emit:null,emitted:null,propsDefaults:_t,inheritAttrs:r.inheritAttrs,ctx:_t,data:_t,props:_t,attrs:_t,slots:_t,refs:_t,setupState:_t,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Lm.bind(null,i),e.ce&&e.ce(i),i}let Bt=null,yi,ma;{const e=Yh(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};yi=t("__VUE_INSTANCE_SETTERS__",n=>Bt=n),ma=t("__VUE_SSR_SETTERS__",n=>Qi=n)}const Ss=e=>{const t=Bt;return yi(e),e.scope.on(),()=>{e.scope.off(),yi(t)}},Xl=()=>{Bt&&Bt.scope.off(),yi(null)};function Hf(e){return e.vnode.shapeFlag&4}let Qi=!1;function k_(e,t=!1){t&&ma(t);const{props:n,children:r}=e.vnode,s=Hf(e);m_(e,n,s,t),v_(e,r);const i=s?M_(e,t):void 0;return t&&ma(!1),i}function M_(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=$i(new Proxy(e.ctx,a_));const{setup:r}=n;if(r){const s=e.setupContext=r.length>1?F_(e):null,i=Ss(e);Wn();const o=cn(r,e,0,[e.props,s]);if(Qn(),i(),Gh(o)){if(o.then(Xl,Xl),t)return o.then(a=>{Zl(e,a,t)}).catch(a=>{ji(a,e,0)});e.asyncDep=o}else Zl(e,o,t)}else Kf(e,t)}function Zl(e,t,n){Q(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:mt(t)&&(e.setupState=Ef(t)),Kf(e,n)}let tu;function Kf(e,t,n){const r=e.type;if(!e.render){if(!t&&tu&&!r.render){const s=r.template||_c(e).template;if(s){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:c}=r,l=jt(jt({isCustomElement:i,delimiters:a},o),c);r.render=tu(s,l)}}e.render=r.render||me}{const s=Ss(e);Wn();try{c_(e)}finally{Qn(),s()}}}function L_(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return ae(e,"get","$attrs"),t[n]}}))}function F_(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return L_(e)},slots:e.slots,emit:e.emit,expose:t}}function Yi(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Ef($i(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Kr)return Kr[n](e)},has(t,n){return n in t||n in Kr}}))}function B_(e,t=!0){return Q(e)?e.displayName||e.name:e.name||t&&e.__name}function U_(e){return Q(e)&&"__vccOpts"in e}const Zt=(e,t)=>Rm(e,t,Qi);function Gf(e,t,n){const r=arguments.length;return r===2?mt(t)&&!z(t)?ga(t)?It(e,null,[t]):It(e,t):It(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ga(n)&&(n=[n]),It(e,t,n))}const $_="3.4.21";/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const j_="http://www.w3.org/2000/svg",q_="http://www.w3.org/1998/Math/MathML",tn=typeof document<"u"?document:null,eu=tn&&tn.createElement("template"),z_={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?tn.createElementNS(j_,e):t==="mathml"?tn.createElementNS(q_,e):tn.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>tn.createTextNode(e),createComment:e=>tn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>tn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const o=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{eu.innerHTML=r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e;const a=eu.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},H_=Symbol("_vtc");function K_(e,t,n){const r=e[H_];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const nu=Symbol("_vod"),G_=Symbol("_vsh"),W_=Symbol(""),Q_=/(^|;)\s*display\s*:/;function Y_(e,t,n){const r=e.style,s=Pt(n);let i=!1;if(n&&!s){if(t)if(Pt(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&li(r,a,"")}else for(const o in t)n[o]==null&&li(r,o,"");for(const o in n)o==="display"&&(i=!0),li(r,o,n[o])}else if(s){if(t!==n){const o=r[W_];o&&(n+=";"+o),r.cssText=n,i=Q_.test(n)}}else t&&e.removeAttribute("style");nu in e&&(e[nu]=i?r.display:"",e[G_]&&(r.display="none"))}const ru=/\s*!important$/;function li(e,t,n){if(z(n))n.forEach(r=>li(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=J_(e,t);ru.test(n)?e.setProperty(Gn(r),n.replace(ru,""),"important"):e[r]=n}}const su=["Webkit","Moz","ms"],No={};function J_(e,t){const n=No[t];if(n)return n;let r=Me(t);if(r!=="filter"&&r in e)return No[t]=r;r=Bi(r);for(let s=0;s<su.length;s++){const i=su[s]+r;if(i in e)return No[t]=i}return t}const iu="http://www.w3.org/1999/xlink";function X_(e,t,n,r,s){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(iu,t.slice(6,t.length)):e.setAttributeNS(iu,t,n);else{const i=em(t);n==null||i&&!Jh(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Z_(e,t,n,r,s,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,s,i),e[t]=n??"";return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){const l=a==="OPTION"?e.getAttribute("value")||"":e.value,u=n??"";(l!==u||!("_value"in e))&&(e.value=u),n==null&&e.removeAttribute(t),e._value=n;return}let c=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Jh(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{e[t]=n}catch{}c&&e.removeAttribute(t)}function bn(e,t,n,r){e.addEventListener(t,n,r)}function ty(e,t,n,r){e.removeEventListener(t,n,r)}const ou=Symbol("_vei");function ey(e,t,n,r,s=null){const i=e[ou]||(e[ou]={}),o=i[t];if(r&&o)o.value=r;else{const[a,c]=ny(t);if(r){const l=i[t]=iy(r,s);bn(e,a,l,c)}else o&&(ty(e,a,o,c),i[t]=void 0)}}const au=/(?:Once|Passive|Capture)$/;function ny(e){let t;if(au.test(e)){t={};let r;for(;r=e.match(au);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Gn(e.slice(2)),t]}let ko=0;const ry=Promise.resolve(),sy=()=>ko||(ry.then(()=>ko=0),ko=Date.now());function iy(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;ve(oy(r,n.value),t,5,[r])};return n.value=e,n.attached=sy(),n}function oy(e,t){if(z(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const cu=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,ay=(e,t,n,r,s,i,o,a,c)=>{const l=s==="svg";t==="class"?K_(e,r,l):t==="style"?Y_(e,n,r):Li(t)?ec(t)||ey(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):cy(e,t,r,l))?Z_(e,t,r,i,o,a,c):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),X_(e,t,r,l))};function cy(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&cu(t)&&Q(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return cu(t)&&Pt(n)?!1:t in e}const vi=e=>{const t=e.props["onUpdate:modelValue"]||!1;return z(t)?n=>ni(t,n):t};function ly(e){e.target.composing=!0}function lu(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const fr=Symbol("_assign"),oS={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e[fr]=vi(s);const i=r||s.props&&s.props.type==="number";bn(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n&&(a=a.trim()),i&&(a=ia(a)),e[fr](a)}),n&&bn(e,"change",()=>{e.value=e.value.trim()}),t||(bn(e,"compositionstart",ly),bn(e,"compositionend",lu),bn(e,"change",lu))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:s}},i){if(e[fr]=vi(i),e.composing)return;const o=s||e.type==="number"?ia(e.value):e.value,a=t??"";o!==a&&(document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===a)||(e.value=a))}},aS={created(e,{value:t},n){e.checked=di(t,n.props.value),e[fr]=vi(n),bn(e,"change",()=>{e[fr](uy(e))})},beforeUpdate(e,{value:t,oldValue:n},r){e[fr]=vi(r),t!==n&&(e.checked=di(t,r.props.value))}};function uy(e){return"_value"in e?e._value:e.value}const hy={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},cS=(e,t)=>{const n=e._withKeys||(e._withKeys={}),r=t.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=Gn(s.key);if(t.some(o=>o===i||hy[o]===i))return e(s)})},fy=jt({patchProp:ay},z_);let uu;function dy(){return uu||(uu=w_(fy))}const py=(...e)=>{const t=dy().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=my(r);if(!s)return;const i=t._component;!Q(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,gy(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function gy(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function my(e){return Pt(e)?document.querySelector(e):e}const Wf=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},_y={};function yy(e,t){const n=si("NavigationBar"),r=si("router-view"),s=si("FooterView");return Gi(),vc(Se,null,[It(n),It(r),It(s)],64)}const vy=Wf(_y,[["render",yy]]);var Ey=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Qf;const Ji=e=>Qf=e,Yf=Symbol();function _a(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var Wr;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Wr||(Wr={}));function wy(){const e=tf(!0),t=e.run(()=>fc({}));let n=[],r=[];const s=$i({install(i){Ji(s),s._a=i,i.provide(Yf,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!Ey?r.push(i):n.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return s}const Jf=()=>{};function hu(e,t,n,r=Jf){e.push(t);const s=()=>{const i=e.indexOf(t);i>-1&&(e.splice(i,1),r())};return!n&&ef()&&sm(s),s}function tr(e,...t){e.slice().forEach(n=>{n(...t)})}const Ty=e=>e();function ya(e,t){e instanceof Map&&t instanceof Map&&t.forEach((n,r)=>e.set(r,n)),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],s=e[n];_a(s)&&_a(r)&&e.hasOwnProperty(n)&&!xt(r)&&!on(r)?e[n]=ya(s,r):e[n]=r}return e}const Iy=Symbol();function Ay(e){return!_a(e)||!e.hasOwnProperty(Iy)}const{assign:Je}=Object;function Ry(e){return!!(xt(e)&&e.effect)}function Sy(e,t,n,r){const{state:s,actions:i,getters:o}=t,a=n.state.value[e];let c;function l(){a||(n.state.value[e]=s?s():{});const u=Pm(n.state.value[e]);return Je(u,i,Object.keys(o||{}).reduce((h,f)=>(h[f]=$i(Zt(()=>{Ji(n);const g=n._s.get(e);return o[f].call(g,g)})),h),{}))}return c=Xf(e,l,t,n,r,!0),c}function Xf(e,t,n={},r,s,i){let o;const a=Je({actions:{}},n),c={deep:!0};let l,u,h=[],f=[],g;const w=r.state.value[e];!i&&!w&&(r.state.value[e]={}),fc({});let R;function S(X){let Z;l=u=!1,typeof X=="function"?(X(r.state.value[e]),Z={type:Wr.patchFunction,storeId:e,events:g}):(ya(r.state.value[e],X),Z={type:Wr.patchObject,payload:X,storeId:e,events:g});const vt=R=Symbol();pc().then(()=>{R===vt&&(l=!0)}),u=!0,tr(h,Z,r.state.value[e])}const O=i?function(){const{state:Z}=n,vt=Z?Z():{};this.$patch(qt=>{Je(qt,vt)})}:Jf;function M(){o.stop(),h=[],f=[],r._s.delete(e)}function B(X,Z){return function(){Ji(r);const vt=Array.from(arguments),qt=[],ce=[];function de(at){qt.push(at)}function wn(at){ce.push(at)}tr(f,{args:vt,name:X,store:J,after:de,onError:wn});let pe;try{pe=Z.apply(this&&this.$id===e?this:J,vt)}catch(at){throw tr(ce,at),at}return pe instanceof Promise?pe.then(at=>(tr(qt,at),at)).catch(at=>(tr(ce,at),Promise.reject(at))):(tr(qt,pe),pe)}}const W={_p:r,$id:e,$onAction:hu.bind(null,f),$patch:S,$reset:O,$subscribe(X,Z={}){const vt=hu(h,X,Z.detached,()=>qt()),qt=o.run(()=>Hr(()=>r.state.value[e],ce=>{(Z.flush==="sync"?u:l)&&X({storeId:e,type:Wr.direct,events:g},ce)},Je({},c,Z)));return vt},$dispose:M},J=Rs(W);r._s.set(e,J);const gt=(r._a&&r._a.runWithContext||Ty)(()=>r._e.run(()=>(o=tf()).run(t)));for(const X in gt){const Z=gt[X];if(xt(Z)&&!Ry(Z)||on(Z))i||(w&&Ay(Z)&&(xt(Z)?Z.value=w[X]:ya(Z,w[X])),r.state.value[e][X]=Z);else if(typeof Z=="function"){const vt=B(X,Z);gt[X]=vt,a.actions[X]=Z}}return Je(J,gt),Je(it(J),gt),Object.defineProperty(J,"$state",{get:()=>r.state.value[e],set:X=>{S(Z=>{Je(Z,X)})}}),r._p.forEach(X=>{Je(J,o.run(()=>X({store:J,app:r._a,pinia:r,options:a})))}),w&&i&&n.hydrate&&n.hydrate(J.$state,w),l=!0,u=!0,J}function Cy(e,t,n){let r,s;const i=typeof t=="function";typeof e=="string"?(r=e,s=i?n:t):(s=e,r=e.id);function o(a,c){const l=g_();return a=a||(l?Oe(Yf,null):null),a&&Ji(a),a=Qf,a._s.has(r)||(i?Xf(r,t,s,a):Sy(r,s,a)),a._s.get(r)}return o.$id=r,o}function by(e){return typeof e=="object"&&e!==null}function fu(e,t){return e=by(e)?e:Object.create(null),new Proxy(e,{get(n,r,s){return r==="key"?Reflect.get(n,r,s):Reflect.get(n,r,s)||Reflect.get(t,r,s)}})}function Py(e,t){return t.reduce((n,r)=>n==null?void 0:n[r],e)}function Vy(e,t,n){return t.slice(0,-1).reduce((r,s)=>/^(__proto__)$/.test(s)?{}:r[s]=r[s]||{},e)[t[t.length-1]]=n,e}function Dy(e,t){return t.reduce((n,r)=>{const s=r.split(".");return Vy(n,s,Py(e,s))},{})}function xy(e,t){return n=>{var r;try{const{storage:s=localStorage,beforeRestore:i=void 0,afterRestore:o=void 0,serializer:a={serialize:JSON.stringify,deserialize:JSON.parse},key:c=t.$id,paths:l=null,debug:u=!1}=n;return{storage:s,beforeRestore:i,afterRestore:o,serializer:a,key:((r=e.key)!=null?r:h=>h)(typeof c=="string"?c:c(t.$id)),paths:l,debug:u}}catch(s){return n.debug&&console.error("[pinia-plugin-persistedstate]",s),null}}}function du(e,{storage:t,serializer:n,key:r,debug:s}){try{const i=t==null?void 0:t.getItem(r);i&&e.$patch(n==null?void 0:n.deserialize(i))}catch(i){s&&console.error("[pinia-plugin-persistedstate]",i)}}function pu(e,{storage:t,serializer:n,key:r,paths:s,debug:i}){try{const o=Array.isArray(s)?Dy(e,s):e;t.setItem(r,n.serialize(o))}catch(o){i&&console.error("[pinia-plugin-persistedstate]",o)}}function Oy(e={}){return t=>{const{auto:n=!1}=e,{options:{persist:r=n},store:s,pinia:i}=t;if(!r)return;if(!(s.$id in i.state.value)){const a=i._s.get(s.$id.replace("__hot:",""));a&&Promise.resolve().then(()=>a.$persist());return}const o=(Array.isArray(r)?r.map(a=>fu(a,e)):[fu(r,e)]).map(xy(e,s)).filter(Boolean);s.$persist=()=>{o.forEach(a=>{pu(s.$state,a)})},s.$hydrate=({runHooks:a=!0}={})=>{o.forEach(c=>{const{beforeRestore:l,afterRestore:u}=c;a&&(l==null||l(t)),du(s,c),a&&(u==null||u(t))})},o.forEach(a=>{const{beforeRestore:c,afterRestore:l}=a;c==null||c(t),du(s,a),l==null||l(t),s.$subscribe((u,h)=>{pu(h,a)},{detached:!0})})}}var Ny=Oy();const ky="modulepreload",My=function(e){return"/"+e},gu={},An=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.all(n.map(c=>{if(c=My(c),c in gu)return;gu[c]=!0;const l=c.endsWith(".css"),u=l?'[rel="stylesheet"]':"";if(!!r)for(let g=i.length-1;g>=0;g--){const w=i[g];if(w.href===c&&(!l||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${u}`))return;const f=document.createElement("link");if(f.rel=l?"stylesheet":ky,l||(f.as="script",f.crossOrigin=""),f.href=c,a&&f.setAttribute("nonce",a),document.head.appendChild(f),l)return new Promise((g,w)=>{f.addEventListener("load",g),f.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${c}`)))})}))}return s.then(()=>t()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const rr=typeof document<"u";function Ly(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const ht=Object.assign;function Mo(e,t){const n={};for(const r in t){const s=t[r];n[r]=Ee(s)?s.map(e):e(s)}return n}const Qr=()=>{},Ee=Array.isArray,Zf=/#/g,Fy=/&/g,By=/\//g,Uy=/=/g,$y=/\?/g,td=/\+/g,jy=/%5B/g,qy=/%5D/g,ed=/%5E/g,zy=/%60/g,nd=/%7B/g,Hy=/%7C/g,rd=/%7D/g,Ky=/%20/g;function wc(e){return encodeURI(""+e).replace(Hy,"|").replace(jy,"[").replace(qy,"]")}function Gy(e){return wc(e).replace(nd,"{").replace(rd,"}").replace(ed,"^")}function va(e){return wc(e).replace(td,"%2B").replace(Ky,"+").replace(Zf,"%23").replace(Fy,"%26").replace(zy,"`").replace(nd,"{").replace(rd,"}").replace(ed,"^")}function Wy(e){return va(e).replace(Uy,"%3D")}function Qy(e){return wc(e).replace(Zf,"%23").replace($y,"%3F")}function Yy(e){return e==null?"":Qy(e).replace(By,"%2F")}function cs(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const Jy=/\/$/,Xy=e=>e.replace(Jy,"");function Lo(e,t,n="/"){let r,s={},i="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),i=t.slice(c+1,a>-1?a:t.length),s=e(i)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=nv(r??t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:cs(o)}}function Zy(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function mu(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function tv(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&vr(t.matched[r],n.matched[s])&&sd(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function vr(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function sd(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!ev(e[n],t[n]))return!1;return!0}function ev(e,t){return Ee(e)?_u(e,t):Ee(t)?_u(t,e):e===t}function _u(e,t){return Ee(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function nv(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}var ls;(function(e){e.pop="pop",e.push="push"})(ls||(ls={}));var Yr;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Yr||(Yr={}));function rv(e){if(!e)if(rr){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Xy(e)}const sv=/^[^#]+#/;function iv(e,t){return e.replace(sv,"#")+t}function ov(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Xi=()=>({left:window.scrollX,top:window.scrollY});function av(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=ov(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function yu(e,t){return(history.state?history.state.position-t:-1)+e}const Ea=new Map;function cv(e,t){Ea.set(e,t)}function lv(e){const t=Ea.get(e);return Ea.delete(e),t}let uv=()=>location.protocol+"//"+location.host;function id(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let a=s.includes(e.slice(i))?e.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),mu(c,"")}return mu(n,e)+r+s}function hv(e,t,n,r){let s=[],i=[],o=null;const a=({state:f})=>{const g=id(e,location),w=n.value,R=t.value;let S=0;if(f){if(n.value=g,t.value=f,o&&o===w){o=null;return}S=R?f.position-R.position:0}else r(g);s.forEach(O=>{O(n.value,w,{delta:S,type:ls.pop,direction:S?S>0?Yr.forward:Yr.back:Yr.unknown})})};function c(){o=n.value}function l(f){s.push(f);const g=()=>{const w=s.indexOf(f);w>-1&&s.splice(w,1)};return i.push(g),g}function u(){const{history:f}=window;f.state&&f.replaceState(ht({},f.state,{scroll:Xi()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function vu(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?Xi():null}}function fv(e){const{history:t,location:n}=window,r={value:id(e,n)},s={value:t.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=e.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?e:e.slice(h))+c:uv()+e+c;try{t[u?"replaceState":"pushState"](l,"",f),s.value=l}catch(g){console.error(g),n[u?"replace":"assign"](f)}}function o(c,l){const u=ht({},t.state,vu(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=ht({},s.value,t.state,{forward:c,scroll:Xi()});i(u.current,u,!0);const h=ht({},vu(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function dv(e){e=rv(e);const t=fv(e),n=hv(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ht({location:"",base:e,go:r,createHref:iv.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function pv(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),dv(e)}function gv(e){return typeof e=="string"||e&&typeof e=="object"}function od(e){return typeof e=="string"||typeof e=="symbol"}const Ye={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ad=Symbol("");var Eu;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Eu||(Eu={}));function Er(e,t){return ht(new Error,{type:e,[ad]:!0},t)}function $e(e,t){return e instanceof Error&&ad in e&&(t==null||!!(e.type&t))}const wu="[^/]+?",mv={sensitive:!1,strict:!1,start:!0,end:!0},_v=/[.+*?^${}()[\]/\\]/g;function yv(e,t){const n=ht({},mv,t),r=[];let s=n.start?"^":"";const i=[];for(const l of e){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const f=l[h];let g=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(_v,"\\$&"),g+=40;else if(f.type===1){const{value:w,repeatable:R,optional:S,regexp:O}=f;i.push({name:w,repeatable:R,optional:S});const M=O||wu;if(M!==wu){g+=10;try{new RegExp(`(${M})`)}catch(W){throw new Error(`Invalid custom RegExp for param "${w}" (${M}): `+W.message)}}let B=R?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;h||(B=S&&l.length<2?`(?:/${B})`:"/"+B),S&&(B+="?"),s+=B,g+=20,S&&(g+=-8),R&&(g+=-20),M===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const g=u[f]||"",w=i[f-1];h[w.name]=g&&w.repeatable?g.split("/"):g}return h}function c(l){let u="",h=!1;for(const f of e){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of f)if(g.type===0)u+=g.value;else if(g.type===1){const{value:w,repeatable:R,optional:S}=g,O=w in l?l[w]:"";if(Ee(O)&&!R)throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);const M=Ee(O)?O.join("/"):O;if(!M)if(S)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${w}"`);u+=M}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function vv(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Ev(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const i=vv(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Tu(r))return 1;if(Tu(s))return-1}return s.length-r.length}function Tu(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const wv={type:0,value:""},Tv=/[a-zA-Z0-9_]/;function Iv(e){if(!e)return[[]];if(e==="/")return[[wv]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:c==="("?n=2:Tv.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function Av(e,t,n){const r=yv(Iv(e.path),n),s=ht(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Rv(e,t){const n=[],r=new Map;t=Ru({strict:!1,end:!0,sensitive:!1},t);function s(u){return r.get(u)}function i(u,h,f){const g=!f,w=Sv(u);w.aliasOf=f&&f.record;const R=Ru(t,u),S=[w];if("alias"in u){const B=typeof u.alias=="string"?[u.alias]:u.alias;for(const W of B)S.push(ht({},w,{components:f?f.record.components:w.components,path:W,aliasOf:f?f.record:w}))}let O,M;for(const B of S){const{path:W}=B;if(h&&W[0]!=="/"){const J=h.record.path,q=J[J.length-1]==="/"?"":"/";B.path=h.record.path+(W&&q+W)}if(O=Av(B,h,R),f?f.alias.push(O):(M=M||O,M!==O&&M.alias.push(O),g&&u.name&&!Au(O)&&o(u.name)),w.children){const J=w.children;for(let q=0;q<J.length;q++)i(J[q],O,f&&f.children[q])}f=f||O,(O.record.components&&Object.keys(O.record.components).length||O.record.name||O.record.redirect)&&c(O)}return M?()=>{o(M)}:Qr}function o(u){if(od(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&Ev(u,n[h])>=0&&(u.record.path!==n[h].record.path||!cd(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Au(u)&&r.set(u.record.name,u)}function l(u,h){let f,g={},w,R;if("name"in u&&u.name){if(f=r.get(u.name),!f)throw Er(1,{location:u});R=f.record.name,g=ht(Iu(h.params,f.keys.filter(M=>!M.optional).concat(f.parent?f.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),u.params&&Iu(u.params,f.keys.map(M=>M.name))),w=f.stringify(g)}else if(u.path!=null)w=u.path,f=n.find(M=>M.re.test(w)),f&&(g=f.parse(w),R=f.record.name);else{if(f=h.name?r.get(h.name):n.find(M=>M.re.test(h.path)),!f)throw Er(1,{location:u,currentLocation:h});R=f.record.name,g=ht({},h.params,u.params),w=f.stringify(g)}const S=[];let O=f;for(;O;)S.unshift(O.record),O=O.parent;return{name:R,path:w,params:g,matched:S,meta:bv(S)}}return e.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Iu(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Sv(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Cv(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Cv(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Au(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function bv(e){return e.reduce((t,n)=>ht(t,n.meta),{})}function Ru(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function cd(e,t){return t.children.some(n=>n===e||cd(e,n))}function Pv(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(td," "),o=i.indexOf("="),a=cs(o<0?i:i.slice(0,o)),c=o<0?null:cs(i.slice(o+1));if(a in t){let l=t[a];Ee(l)||(l=t[a]=[l]),l.push(c)}else t[a]=c}return t}function Su(e){let t="";for(let n in e){const r=e[n];if(n=Wy(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Ee(r)?r.map(i=>i&&va(i)):[r&&va(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Vv(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Ee(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const Dv=Symbol(""),Cu=Symbol(""),Tc=Symbol(""),ld=Symbol(""),wa=Symbol("");function kr(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function en(e,t,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const l=f=>{f===!1?c(Er(4,{from:n,to:t})):f instanceof Error?c(f):gv(f)?c(Er(2,{from:t,to:f})):(o&&r.enterCallbacks[s]===o&&typeof f=="function"&&o.push(f),a())},u=i(()=>e.call(r&&r.instances[s],t,n,l));let h=Promise.resolve(u);e.length<3&&(h=h.then(l)),h.catch(f=>c(f))})}function Fo(e,t,n,r,s=i=>i()){const i=[];for(const o of e)for(const a in o.components){let c=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(xv(c)){const u=(c.__vccOpts||c)[t];u&&i.push(en(u,n,r,o,a,s))}else{let l=c();i.push(()=>l.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const h=Ly(u)?u.default:u;o.components[a]=h;const g=(h.__vccOpts||h)[t];return g&&en(g,n,r,o,a,s)()}))}}return i}function xv(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function bu(e){const t=Oe(Tc),n=Oe(ld),r=Zt(()=>t.resolve(an(e.to))),s=Zt(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(vr.bind(null,u));if(f>-1)return f;const g=Pu(c[l-2]);return l>1&&Pu(u)===g&&h[h.length-1].path!==g?h.findIndex(vr.bind(null,c[l-2])):f}),i=Zt(()=>s.value>-1&&Mv(n.params,r.value.params)),o=Zt(()=>s.value>-1&&s.value===n.matched.length-1&&sd(n.params,r.value.params));function a(c={}){return kv(c)?t[an(e.replace)?"replace":"push"](an(e.to)).catch(Qr):Promise.resolve()}return{route:r,href:Zt(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const Ov=Vf({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:bu,setup(e,{slots:t}){const n=Rs(bu(e)),{options:r}=Oe(Tc),s=Zt(()=>({[Vu(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Vu(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Gf("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Nv=Ov;function kv(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Mv(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Ee(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Pu(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Vu=(e,t,n)=>e??t??n,Lv=Vf({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Oe(wa),s=Zt(()=>e.route||r.value),i=Oe(Cu,0),o=Zt(()=>{let l=an(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=Zt(()=>s.value.matched[o.value]);oi(Cu,Zt(()=>o.value+1)),oi(Dv,a),oi(wa,s);const c=fc();return Hr(()=>[c.value,a.value,e.name],([l,u,h],[f,g,w])=>{u&&(u.instances[h]=l,g&&g!==u&&l&&l===f&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!vr(u,g)||!f)&&(u.enterCallbacks[h]||[]).forEach(R=>R(l))},{flush:"post"}),()=>{const l=s.value,u=e.name,h=a.value,f=h&&h.components[u];if(!f)return Du(n.default,{Component:f,route:l});const g=h.props[u],w=g?g===!0?l.params:typeof g=="function"?g(l):g:null,S=Gf(f,ht({},w,t,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Du(n.default,{Component:S,route:l})||S}}});function Du(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Fv=Lv;function Bv(e){const t=Rv(e.routes,e),n=e.parseQuery||Pv,r=e.stringifyQuery||Su,s=e.history,i=kr(),o=kr(),a=kr(),c=Sm(Ye);let l=Ye;rr&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Mo.bind(null,y=>""+y),h=Mo.bind(null,Yy),f=Mo.bind(null,cs);function g(y,N){let D,L;return od(y)?(D=t.getRecordMatcher(y),L=N):L=y,t.addRoute(L,D)}function w(y){const N=t.getRecordMatcher(y);N&&t.removeRoute(N)}function R(){return t.getRoutes().map(y=>y.record)}function S(y){return!!t.getRecordMatcher(y)}function O(y,N){if(N=ht({},N||c.value),typeof y=="string"){const p=Lo(n,y,N.path),m=t.resolve({path:p.path},N),v=s.createHref(p.fullPath);return ht(p,m,{params:f(m.params),hash:cs(p.hash),redirectedFrom:void 0,href:v})}let D;if(y.path!=null)D=ht({},y,{path:Lo(n,y.path,N.path).path});else{const p=ht({},y.params);for(const m in p)p[m]==null&&delete p[m];D=ht({},y,{params:h(p)}),N.params=h(N.params)}const L=t.resolve(D,N),lt=y.hash||"";L.params=u(f(L.params));const Et=Zy(r,ht({},y,{hash:Gy(lt),path:L.path})),d=s.createHref(Et);return ht({fullPath:Et,hash:lt,query:r===Su?Vv(y.query):y.query||{}},L,{redirectedFrom:void 0,href:d})}function M(y){return typeof y=="string"?Lo(n,y,c.value.path):ht({},y)}function B(y,N){if(l!==y)return Er(8,{from:N,to:y})}function W(y){return gt(y)}function J(y){return W(ht(M(y),{replace:!0}))}function q(y){const N=y.matched[y.matched.length-1];if(N&&N.redirect){const{redirect:D}=N;let L=typeof D=="function"?D(y):D;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=M(L):{path:L},L.params={}),ht({query:y.query,hash:y.hash,params:L.path!=null?{}:y.params},L)}}function gt(y,N){const D=l=O(y),L=c.value,lt=y.state,Et=y.force,d=y.replace===!0,p=q(D);if(p)return gt(ht(M(p),{state:typeof p=="object"?ht({},lt,p.state):lt,force:Et,replace:d}),N||D);const m=D;m.redirectedFrom=N;let v;return!Et&&tv(r,L,D)&&(v=Er(16,{to:m,from:L}),Te(L,L,!0,!1)),(v?Promise.resolve(v):vt(m,L)).catch(_=>$e(_)?$e(_,2)?_:We(_):ct(_,m,L)).then(_=>{if(_){if($e(_,2))return gt(ht({replace:d},M(_.to),{state:typeof _.to=="object"?ht({},lt,_.to.state):lt,force:Et}),N||m)}else _=ce(m,L,!0,d,lt);return qt(m,L,_),_})}function X(y,N){const D=B(y,N);return D?Promise.reject(D):Promise.resolve()}function Z(y){const N=Xn.values().next().value;return N&&typeof N.runWithContext=="function"?N.runWithContext(y):y()}function vt(y,N){let D;const[L,lt,Et]=Uv(y,N);D=Fo(L.reverse(),"beforeRouteLeave",y,N);for(const p of L)p.leaveGuards.forEach(m=>{D.push(en(m,y,N))});const d=X.bind(null,y,N);return D.push(d),zt(D).then(()=>{D=[];for(const p of i.list())D.push(en(p,y,N));return D.push(d),zt(D)}).then(()=>{D=Fo(lt,"beforeRouteUpdate",y,N);for(const p of lt)p.updateGuards.forEach(m=>{D.push(en(m,y,N))});return D.push(d),zt(D)}).then(()=>{D=[];for(const p of Et)if(p.beforeEnter)if(Ee(p.beforeEnter))for(const m of p.beforeEnter)D.push(en(m,y,N));else D.push(en(p.beforeEnter,y,N));return D.push(d),zt(D)}).then(()=>(y.matched.forEach(p=>p.enterCallbacks={}),D=Fo(Et,"beforeRouteEnter",y,N,Z),D.push(d),zt(D))).then(()=>{D=[];for(const p of o.list())D.push(en(p,y,N));return D.push(d),zt(D)}).catch(p=>$e(p,8)?p:Promise.reject(p))}function qt(y,N,D){a.list().forEach(L=>Z(()=>L(y,N,D)))}function ce(y,N,D,L,lt){const Et=B(y,N);if(Et)return Et;const d=N===Ye,p=rr?history.state:{};D&&(L||d?s.replace(y.fullPath,ht({scroll:d&&p&&p.scroll},lt)):s.push(y.fullPath,lt)),c.value=y,Te(y,N,D,d),We()}let de;function wn(){de||(de=s.listen((y,N,D)=>{if(!$s.listening)return;const L=O(y),lt=q(L);if(lt){gt(ht(lt,{replace:!0}),L).catch(Qr);return}l=L;const Et=c.value;rr&&cv(yu(Et.fullPath,D.delta),Xi()),vt(L,Et).catch(d=>$e(d,12)?d:$e(d,2)?(gt(d.to,L).then(p=>{$e(p,20)&&!D.delta&&D.type===ls.pop&&s.go(-1,!1)}).catch(Qr),Promise.reject()):(D.delta&&s.go(-D.delta,!1),ct(d,L,Et))).then(d=>{d=d||ce(L,Et,!1),d&&(D.delta&&!$e(d,8)?s.go(-D.delta,!1):D.type===ls.pop&&$e(d,20)&&s.go(-1,!1)),qt(L,Et,d)}).catch(Qr)}))}let pe=kr(),at=kr(),dt;function ct(y,N,D){We(y);const L=at.list();return L.length?L.forEach(lt=>lt(y,N,D)):console.error(y),Promise.reject(y)}function Ue(){return dt&&c.value!==Ye?Promise.resolve():new Promise((y,N)=>{pe.add([y,N])})}function We(y){return dt||(dt=!y,wn(),pe.list().forEach(([N,D])=>y?D(y):N()),pe.reset()),y}function Te(y,N,D,L){const{scrollBehavior:lt}=e;if(!rr||!lt)return Promise.resolve();const Et=!D&&lv(yu(y.fullPath,0))||(L||!D)&&history.state&&history.state.scroll||null;return pc().then(()=>lt(y,N,Et)).then(d=>d&&av(d)).catch(d=>ct(d,y,N))}const re=y=>s.go(y);let Jn;const Xn=new Set,$s={currentRoute:c,listening:!0,addRoute:g,removeRoute:w,hasRoute:S,getRoutes:R,resolve:O,options:e,push:W,replace:J,go:re,back:()=>re(-1),forward:()=>re(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:at.add,isReady:Ue,install(y){const N=this;y.component("RouterLink",Nv),y.component("RouterView",Fv),y.config.globalProperties.$router=N,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>an(c)}),rr&&!Jn&&c.value===Ye&&(Jn=!0,W(s.location).catch(lt=>{}));const D={};for(const lt in Ye)Object.defineProperty(D,lt,{get:()=>c.value[lt],enumerable:!0});y.provide(Tc,N),y.provide(ld,pf(D)),y.provide(wa,c);const L=y.unmount;Xn.add(y),y.unmount=function(){Xn.delete(y),Xn.size<1&&(l=Ye,de&&de(),de=null,c.value=Ye,Jn=!1,dt=!1),L()}}};function zt(y){return y.reduce((N,D)=>N.then(()=>Z(D)),Promise.resolve())}return $s}function Uv(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const a=t.matched[o];a&&(e.matched.find(l=>vr(l,a))?r.push(a):n.push(a));const c=e.matched[o];c&&(t.matched.find(l=>vr(l,c))||s.push(c))}return[n,r,s]}var xu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ud=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},$v=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},hd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,a=o?e[s+1]:0,c=s+2<e.length,l=c?e[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(f=64)),r.push(n[u],n[h],n[f],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ud(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):$v(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const l=s<e.length?n[e.charAt(s)]:64;++s;const h=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new jv;const f=i<<2|a>>4;if(r.push(f),l!==64){const g=a<<4&240|l>>2;if(r.push(g),h!==64){const w=l<<6&192|h;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class jv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const qv=function(e){const t=ud(e);return hd.encodeByteArray(t,!0)},Ei=function(e){return qv(e).replace(/\./g,"")},zv=function(e){try{return hd.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kv=()=>Hv().__FIREBASE_DEFAULTS__,Gv=()=>{if(typeof process>"u"||typeof xu>"u")return;const e=xu.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Wv=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&zv(e[1]);return t&&JSON.parse(t)},Ic=()=>{try{return Kv()||Gv()||Wv()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Qv=e=>{var t,n;return(n=(t=Ic())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Yv=e=>{const t=Qv(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},fd=()=>{var e;return(e=Ic())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xv(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Ei(JSON.stringify(n)),Ei(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wi(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Zv(){var e;const t=(e=Ic())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function tE(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function eE(){return!Zv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ac(){try{return typeof indexedDB=="object"}catch{return!1}}function dd(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}function nE(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rE="FirebaseError";class yn extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=rE,Object.setPrototypeOf(this,yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zi.prototype.create)}}class Zi{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?sE(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new yn(s,a,r)}}function sE(e,t){return e.replace(iE,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const iE=/\{\$([^}]+)}/g;function Ti(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(Ou(i)&&Ou(o)){if(!Ti(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ou(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oE=1e3,aE=2,cE=4*60*60*1e3,lE=.5;function Nu(e,t=oE,n=aE){const r=t*Math.pow(n,e),s=Math.round(lE*r*(Math.random()-.5)*2);return Math.min(cE,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rc(e){return e&&e._delegate?e._delegate:e}class He{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Jv;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(fE(t))try{this.getOrInitializeService({instanceIdentifier:Rn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=Rn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Rn){return this.instances.has(t)}getOptions(t=Rn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:hE(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Rn){return this.component?this.component.multipleInstances?t:Rn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hE(e){return e===Rn?void 0:e}function fE(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new uE(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var rt;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(rt||(rt={}));const pE={debug:rt.DEBUG,verbose:rt.VERBOSE,info:rt.INFO,warn:rt.WARN,error:rt.ERROR,silent:rt.SILENT},gE=rt.INFO,mE={[rt.DEBUG]:"log",[rt.VERBOSE]:"log",[rt.INFO]:"info",[rt.WARN]:"warn",[rt.ERROR]:"error"},_E=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=mE[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Sc{constructor(t){this.name=t,this._logLevel=gE,this._logHandler=_E,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in rt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?pE[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,rt.DEBUG,...t),this._logHandler(this,rt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,rt.VERBOSE,...t),this._logHandler(this,rt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,rt.INFO,...t),this._logHandler(this,rt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,rt.WARN,...t),this._logHandler(this,rt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,rt.ERROR,...t),this._logHandler(this,rt.ERROR,...t)}}const yE=(e,t)=>t.some(n=>e instanceof n);let ku,Mu;function vE(){return ku||(ku=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function EE(){return Mu||(Mu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pd=new WeakMap,Ta=new WeakMap,gd=new WeakMap,Bo=new WeakMap,Cc=new WeakMap;function wE(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(ln(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&pd.set(n,e)}).catch(()=>{}),Cc.set(t,e),t}function TE(e){if(Ta.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});Ta.set(e,t)}let Ia={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Ta.get(e);if(t==="objectStoreNames")return e.objectStoreNames||gd.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ln(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function IE(e){Ia=e(Ia)}function AE(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Uo(this),t,...n);return gd.set(r,t.sort?t.sort():[t]),ln(r)}:EE().includes(e)?function(...t){return e.apply(Uo(this),t),ln(pd.get(this))}:function(...t){return ln(e.apply(Uo(this),t))}}function RE(e){return typeof e=="function"?AE(e):(e instanceof IDBTransaction&&TE(e),yE(e,vE())?new Proxy(e,Ia):e)}function ln(e){if(e instanceof IDBRequest)return wE(e);if(Bo.has(e))return Bo.get(e);const t=RE(e);return t!==e&&(Bo.set(e,t),Cc.set(t,e)),t}const Uo=e=>Cc.get(e);function md(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=ln(o);return r&&o.addEventListener("upgradeneeded",c=>{r(ln(o.result),c.oldVersion,c.newVersion,ln(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const SE=["get","getKey","getAll","getAllKeys","count"],CE=["put","add","delete","clear"],$o=new Map;function Lu(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if($o.get(t))return $o.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=CE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||SE.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return $o.set(t,i),i}IE(e=>({...e,get:(t,n,r)=>Lu(t,n)||e.get(t,n,r),has:(t,n)=>!!Lu(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(PE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function PE(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Aa="@firebase/app",Fu="0.9.29";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n=new Sc("@firebase/app"),VE="@firebase/app-compat",DE="@firebase/analytics-compat",xE="@firebase/analytics",OE="@firebase/app-check-compat",NE="@firebase/app-check",kE="@firebase/auth",ME="@firebase/auth-compat",LE="@firebase/database",FE="@firebase/database-compat",BE="@firebase/functions",UE="@firebase/functions-compat",$E="@firebase/installations",jE="@firebase/installations-compat",qE="@firebase/messaging",zE="@firebase/messaging-compat",HE="@firebase/performance",KE="@firebase/performance-compat",GE="@firebase/remote-config",WE="@firebase/remote-config-compat",QE="@firebase/storage",YE="@firebase/storage-compat",JE="@firebase/firestore",XE="@firebase/firestore-compat",ZE="firebase",tw="10.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra="[DEFAULT]",ew={[Aa]:"fire-core",[VE]:"fire-core-compat",[xE]:"fire-analytics",[DE]:"fire-analytics-compat",[NE]:"fire-app-check",[OE]:"fire-app-check-compat",[kE]:"fire-auth",[ME]:"fire-auth-compat",[LE]:"fire-rtdb",[FE]:"fire-rtdb-compat",[BE]:"fire-fn",[UE]:"fire-fn-compat",[$E]:"fire-iid",[jE]:"fire-iid-compat",[qE]:"fire-fcm",[zE]:"fire-fcm-compat",[HE]:"fire-perf",[KE]:"fire-perf-compat",[GE]:"fire-rc",[WE]:"fire-rc-compat",[QE]:"fire-gcs",[YE]:"fire-gcs-compat",[JE]:"fire-fst",[XE]:"fire-fst-compat","fire-js":"fire-js",[ZE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii=new Map,Sa=new Map;function nw(e,t){try{e.container.addComponent(t)}catch(n){$n.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function pn(e){const t=e.name;if(Sa.has(t))return $n.debug(`There were multiple attempts to register component ${t}.`),!1;Sa.set(t,e);for(const n of Ii.values())nw(n,e);return!0}function Cs(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},un=new Zi("app","Firebase",rw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new He("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw un.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iw=tw;function _d(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Ra,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw un.create("bad-app-name",{appName:String(s)});if(n||(n=fd()),!n)throw un.create("no-options");const i=Ii.get(s);if(i){if(Ti(n,i.options)&&Ti(r,i.config))return i;throw un.create("duplicate-app",{appName:s})}const o=new dE(s);for(const c of Sa.values())o.addComponent(c);const a=new sw(n,r,o);return Ii.set(s,a),a}function yd(e=Ra){const t=Ii.get(e);if(!t&&e===Ra&&fd())return _d();if(!t)throw un.create("no-app",{appName:e});return t}function Ne(e,t,n){var r;let s=(r=ew[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${t}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),$n.warn(a.join(" "));return}pn(new He(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ow="firebase-heartbeat-database",aw=1,us="firebase-heartbeat-store";let jo=null;function vd(){return jo||(jo=md(ow,aw,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(us)}catch(n){console.warn(n)}}}}).catch(e=>{throw un.create("idb-open",{originalErrorMessage:e.message})})),jo}async function cw(e){try{const n=(await vd()).transaction(us),r=await n.objectStore(us).get(Ed(e));return await n.done,r}catch(t){if(t instanceof yn)$n.warn(t.message);else{const n=un.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});$n.warn(n.message)}}}async function Bu(e,t){try{const r=(await vd()).transaction(us,"readwrite");await r.objectStore(us).put(t,Ed(e)),await r.done}catch(n){if(n instanceof yn)$n.warn(n.message);else{const r=un.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});$n.warn(r.message)}}}function Ed(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lw=1024,uw=30*24*60*60*1e3;class hw{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new dw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Uu();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=uw}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Uu(),{heartbeatsToSend:r,unsentEntries:s}=fw(this._heartbeatsCache.heartbeats),i=Ei(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Uu(){return new Date().toISOString().substring(0,10)}function fw(e,t=lw){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),$u(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),$u(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class dw{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ac()?dd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await cw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Bu(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Bu(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function $u(e){return Ei(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pw(e){pn(new He("platform-logger",t=>new bE(t),"PRIVATE")),pn(new He("heartbeat",t=>new hw(t),"PRIVATE")),Ne(Aa,Fu,e),Ne(Aa,Fu,"esm2017"),Ne("fire-js","")}pw("");var gw="firebase",mw="10.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ne(gw,mw,"app");const wd="@firebase/installations",bc="0.6.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Td=1e4,Id=`w:${bc}`,Ad="FIS_v2",_w="https://firebaseinstallations.googleapis.com/v1",yw=60*60*1e3,vw="installations",Ew="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ww={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},jn=new Zi(vw,Ew,ww);function Rd(e){return e instanceof yn&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sd({projectId:e}){return`${_w}/projects/${e}/installations`}function Cd(e){return{token:e.token,requestStatus:2,expiresIn:Iw(e.expiresIn),creationTime:Date.now()}}async function bd(e,t){const r=(await t.json()).error;return jn.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Pd({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Tw(e,{refreshToken:t}){const n=Pd(e);return n.append("Authorization",Aw(t)),n}async function Vd(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Iw(e){return Number(e.replace("s","000"))}function Aw(e){return`${Ad} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rw({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Sd(e),s=Pd(e),i=t.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:n,authVersion:Ad,appId:e.appId,sdkVersion:Id},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await Vd(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Cd(l.authToken)}}else throw await bd("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dd(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sw(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cw=/^[cdef][\w-]{21}$/,Ca="";function bw(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Pw(e);return Cw.test(n)?n:Ca}catch{return Ca}}function Pw(e){return Sw(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xd=new Map;function Od(e,t){const n=to(e);Nd(n,t),Vw(n,t)}function Nd(e,t){const n=xd.get(e);if(n)for(const r of n)r(t)}function Vw(e,t){const n=Dw();n&&n.postMessage({key:e,fid:t}),xw()}let Dn=null;function Dw(){return!Dn&&"BroadcastChannel"in self&&(Dn=new BroadcastChannel("[Firebase] FID Change"),Dn.onmessage=e=>{Nd(e.data.key,e.data.fid)}),Dn}function xw(){xd.size===0&&Dn&&(Dn.close(),Dn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ow="firebase-installations-database",Nw=1,qn="firebase-installations-store";let qo=null;function Pc(){return qo||(qo=md(Ow,Nw,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(qn)}}})),qo}async function Ai(e,t){const n=to(e),s=(await Pc()).transaction(qn,"readwrite"),i=s.objectStore(qn),o=await i.get(n);return await i.put(t,n),await s.done,(!o||o.fid!==t.fid)&&Od(e,t.fid),t}async function kd(e){const t=to(e),r=(await Pc()).transaction(qn,"readwrite");await r.objectStore(qn).delete(t),await r.done}async function eo(e,t){const n=to(e),s=(await Pc()).transaction(qn,"readwrite"),i=s.objectStore(qn),o=await i.get(n),a=t(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&Od(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vc(e){let t;const n=await eo(e.appConfig,r=>{const s=kw(r),i=Mw(e,s);return t=i.registrationPromise,i.installationEntry});return n.fid===Ca?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function kw(e){const t=e||{fid:bw(),registrationStatus:0};return Md(t)}function Mw(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(jn.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=Lw(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Fw(e)}:{installationEntry:t}}async function Lw(e,t){try{const n=await Rw(e,t);return Ai(e.appConfig,n)}catch(n){throw Rd(n)&&n.customData.serverCode===409?await kd(e.appConfig):await Ai(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Fw(e){let t=await ju(e.appConfig);for(;t.registrationStatus===1;)await Dd(100),t=await ju(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Vc(e);return r||n}return t}function ju(e){return eo(e,t=>{if(!t)throw jn.create("installation-not-found");return Md(t)})}function Md(e){return Bw(e)?{fid:e.fid,registrationStatus:0}:e}function Bw(e){return e.registrationStatus===1&&e.registrationTime+Td<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uw({appConfig:e,heartbeatServiceProvider:t},n){const r=$w(e,n),s=Tw(e,n),i=t.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:Id,appId:e.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await Vd(()=>fetch(r,a));if(c.ok){const l=await c.json();return Cd(l)}else throw await bd("Generate Auth Token",c)}function $w(e,{fid:t}){return`${Sd(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dc(e,t=!1){let n;const r=await eo(e.appConfig,i=>{if(!Ld(i))throw jn.create("not-registered");const o=i.authToken;if(!t&&zw(o))return i;if(o.requestStatus===1)return n=jw(e,t),i;{if(!navigator.onLine)throw jn.create("app-offline");const a=Kw(i);return n=qw(e,a),a}});return n?await n:r.authToken}async function jw(e,t){let n=await qu(e.appConfig);for(;n.authToken.requestStatus===1;)await Dd(100),n=await qu(e.appConfig);const r=n.authToken;return r.requestStatus===0?Dc(e,t):r}function qu(e){return eo(e,t=>{if(!Ld(t))throw jn.create("not-registered");const n=t.authToken;return Gw(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function qw(e,t){try{const n=await Uw(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Ai(e.appConfig,r),n}catch(n){if(Rd(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await kd(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Ai(e.appConfig,r)}throw n}}function Ld(e){return e!==void 0&&e.registrationStatus===2}function zw(e){return e.requestStatus===2&&!Hw(e)}function Hw(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+yw}function Kw(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Gw(e){return e.requestStatus===1&&e.requestTime+Td<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ww(e){const t=e,{installationEntry:n,registrationPromise:r}=await Vc(t);return r?r.catch(console.error):Dc(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qw(e,t=!1){const n=e;return await Yw(n),(await Dc(n,t)).token}async function Yw(e){const{registrationPromise:t}=await Vc(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jw(e){if(!e||!e.options)throw zo("App Configuration");if(!e.name)throw zo("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw zo(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function zo(e){return jn.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fd="installations",Xw="installations-internal",Zw=e=>{const t=e.getProvider("app").getImmediate(),n=Jw(t),r=Cs(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},tT=e=>{const t=e.getProvider("app").getImmediate(),n=Cs(t,Fd).getImmediate();return{getId:()=>Ww(n),getToken:s=>Qw(n,s)}};function eT(){pn(new He(Fd,Zw,"PUBLIC")),pn(new He(Xw,tT,"PRIVATE"))}eT();Ne(wd,bc);Ne(wd,bc,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri="analytics",nT="firebase_id",rT="origin",sT=60*1e3,iT="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",xc="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ie=new Sc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oT={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},he=new Zi("analytics","Analytics",oT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aT(e){if(!e.startsWith(xc)){const t=he.create("invalid-gtag-resource",{gtagURL:e});return ie.warn(t.message),""}return e}function Bd(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function cT(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function lT(e,t){const n=cT("firebase-js-sdk-policy",{createScriptURL:aT}),r=document.createElement("script"),s=`${xc}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function uT(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function hT(e,t,n,r,s,i){const o=r[s];try{if(o)await t[o];else{const c=(await Bd(n)).find(l=>l.measurementId===s);c&&await t[c.appId]}}catch(a){ie.error(a)}e("config",s,i)}async function fT(e,t,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await Bd(n);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&t[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(t)),await Promise.all(i),e("event",r,s||{})}catch(i){ie.error(i)}}function dT(e,t,n,r){async function s(i,...o){try{if(i==="event"){const[a,c]=o;await fT(e,t,n,a,c)}else if(i==="config"){const[a,c]=o;await hT(e,t,n,r,a,c)}else if(i==="consent"){const[a]=o;e("consent","update",a)}else if(i==="get"){const[a,c,l]=o;e("get",a,c,l)}else if(i==="set"){const[a]=o;e("set",a)}else e(i,...o)}catch(a){ie.error(a)}}return s}function pT(e,t,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=dT(i,e,t,n),{gtagCore:i,wrappedGtag:window[s]}}function gT(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(xc)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT=30,_T=1e3;class yT{constructor(t={},n=_T){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Ud=new yT;function vT(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function ET(e){var t;const{appId:n,apiKey:r}=e,s={method:"GET",headers:vT(r)},i=iT.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((t=c.error)===null||t===void 0)&&t.message&&(a=c.error.message)}catch{}throw he.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function wT(e,t=Ud,n){const{appId:r,apiKey:s,measurementId:i}=e.options;if(!r)throw he.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw he.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new AT;return setTimeout(async()=>{a.abort()},n!==void 0?n:sT),$d({appId:r,apiKey:s,measurementId:i},o,a,t)}async function $d(e,{throttleEndTimeMillis:t,backoffCount:n},r,s=Ud){var i;const{appId:o,measurementId:a}=e;try{await TT(r,t)}catch(c){if(a)return ie.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await ET(e);return s.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!IT(l)){if(s.deleteThrottleMetadata(o),a)return ie.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((i=l==null?void 0:l.customData)===null||i===void 0?void 0:i.httpStatus)===503?Nu(n,s.intervalMillis,mT):Nu(n,s.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(o,h),ie.debug(`Calling attemptFetch again in ${u} millis`),$d(e,h,r,s)}}function TT(e,t){return new Promise((n,r)=>{const s=Math.max(t-Date.now(),0),i=setTimeout(n,s);e.addEventListener(()=>{clearTimeout(i),r(he.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function IT(e){if(!(e instanceof yn)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class AT{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function RT(e,t,n,r,s){if(s&&s.global){e("event",n,r);return}else{const i=await t,o=Object.assign(Object.assign({},r),{send_to:i});e("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ST(){if(Ac())try{await dd()}catch(e){return ie.warn(he.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return ie.warn(he.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function CT(e,t,n,r,s,i,o){var a;const c=wT(e);c.then(g=>{n[g.measurementId]=g.appId,e.options.measurementId&&g.measurementId!==e.options.measurementId&&ie.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>ie.error(g)),t.push(c);const l=ST().then(g=>{if(g)return r.getId()}),[u,h]=await Promise.all([c,l]);gT(i)||lT(i,u.measurementId),s("js",new Date);const f=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return f[rT]="firebase",f.update=!0,h!=null&&(f[nT]=h),s("config",u.measurementId,f),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bT{constructor(t){this.app=t}_delete(){return delete Jr[this.app.options.appId],Promise.resolve()}}let Jr={},zu=[];const Hu={};let Ho="dataLayer",PT="gtag",Ku,jd,Gu=!1;function VT(){const e=[];if(tE()&&e.push("This is a browser extension environment."),nE()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=he.create("invalid-analytics-context",{errorInfo:t});ie.warn(n.message)}}function DT(e,t,n){VT();const r=e.options.appId;if(!r)throw he.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)ie.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw he.create("no-api-key");if(Jr[r]!=null)throw he.create("already-exists",{id:r});if(!Gu){uT(Ho);const{wrappedGtag:i,gtagCore:o}=pT(Jr,zu,Hu,Ho,PT);jd=i,Ku=o,Gu=!0}return Jr[r]=CT(e,zu,Hu,t,Ku,Ho,n),new bT(e)}function xT(e=yd()){e=Rc(e);const t=Cs(e,Ri);return t.isInitialized()?t.getImmediate():OT(e)}function OT(e,t={}){const n=Cs(e,Ri);if(n.isInitialized()){const s=n.getImmediate();if(Ti(t,n.getOptions()))return s;throw he.create("already-initialized")}return n.initialize({options:t})}function NT(e,t,n,r){e=Rc(e),RT(jd,Jr[e.app.options.appId],t,n,r).catch(s=>ie.error(s))}const Wu="@firebase/analytics",Qu="0.10.1";function kT(){pn(new He(Ri,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return DT(r,s,n)},"PUBLIC")),pn(new He("analytics-internal",e,"PRIVATE")),Ne(Wu,Qu),Ne(Wu,Qu,"esm2017");function e(t){try{const n=t.getProvider(Ri).getImmediate();return{logEvent:(r,s,i)=>NT(n,r,s,i)}}catch(n){throw he.create("interop-component-reg-failed",{reason:n})}}}kT();var MT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},P,Oc=Oc||{},H=MT||self;function no(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function bs(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function LT(e){return Object.prototype.hasOwnProperty.call(e,Ko)&&e[Ko]||(e[Ko]=++FT)}var Ko="closure_uid_"+(1e9*Math.random()>>>0),FT=0;function BT(e,t,n){return e.call.apply(e.bind,arguments)}function UT(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),e.apply(t,s)}}return function(){return e.apply(t,arguments)}}function Qt(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Qt=BT:Qt=UT,Qt.apply(null,arguments)}function Ws(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function Mt(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[s].apply(r,o)}}function vn(){this.s=this.s,this.o=this.o}var $T=0;vn.prototype.s=!1;vn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),$T!=0)&&LT(this)};vn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const qd=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Nc(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Yu(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(no(r)){const s=e.length||0,i=r.length||0;e.length=s+i;for(let o=0;o<i;o++)e[s+o]=r[o]}else e.push(r)}}function Yt(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Yt.prototype.h=function(){this.defaultPrevented=!0};var jT=function(){if(!H.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const n=()=>{};H.addEventListener("test",n,t),H.removeEventListener("test",n,t)}catch{}return e}();function hs(e){return/^[\s\xa0]*$/.test(e)}function ro(){var e=H.navigator;return e&&(e=e.userAgent)?e:""}function Pe(e){return ro().indexOf(e)!=-1}function kc(e){return kc[" "](e),e}kc[" "]=function(){};function qT(e,t){var n=kI;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var zT=Pe("Opera"),wr=Pe("Trident")||Pe("MSIE"),zd=Pe("Edge"),ba=zd||wr,Hd=Pe("Gecko")&&!(ro().toLowerCase().indexOf("webkit")!=-1&&!Pe("Edge"))&&!(Pe("Trident")||Pe("MSIE"))&&!Pe("Edge"),HT=ro().toLowerCase().indexOf("webkit")!=-1&&!Pe("Edge");function Kd(){var e=H.document;return e?e.documentMode:void 0}var Pa;t:{var Go="",Wo=function(){var e=ro();if(Hd)return/rv:([^\);]+)(\)|;)/.exec(e);if(zd)return/Edge\/([\d\.]+)/.exec(e);if(wr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(HT)return/WebKit\/(\S+)/.exec(e);if(zT)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Wo&&(Go=Wo?Wo[1]:""),wr){var Qo=Kd();if(Qo!=null&&Qo>parseFloat(Go)){Pa=String(Qo);break t}}Pa=Go}var Va;if(H.document&&wr){var Ju=Kd();Va=Ju||parseInt(Pa,10)||void 0}else Va=void 0;var KT=Va;function fs(e,t){if(Yt.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Hd){t:{try{kc(t.nodeName);var s=!0;break t}catch{}s=!1}s||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:GT[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&fs.$.h.call(this)}}Mt(fs,Yt);var GT={2:"touch",3:"pen",4:"mouse"};fs.prototype.h=function(){fs.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Ps="closure_listenable_"+(1e6*Math.random()|0),WT=0;function QT(e,t,n,r,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=s,this.key=++WT,this.fa=this.ia=!1}function so(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Mc(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function YT(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function Gd(e){const t={};for(const n in e)t[n]=e[n];return t}const Xu="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Wd(e,t){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)e[n]=r[n];for(let i=0;i<Xu.length;i++)n=Xu[i],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function io(e){this.src=e,this.g={},this.h=0}io.prototype.add=function(e,t,n,r,s){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=xa(e,t,r,s);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new QT(t,this.src,i,!!r,s),t.ia=n,e.push(t)),t};function Da(e,t){var n=t.type;if(n in e.g){var r=e.g[n],s=qd(r,t),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(so(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function xa(e,t,n,r){for(var s=0;s<e.length;++s){var i=e[s];if(!i.fa&&i.listener==t&&i.capture==!!n&&i.la==r)return s}return-1}var Lc="closure_lm_"+(1e6*Math.random()|0),Yo={};function Qd(e,t,n,r,s){if(r&&r.once)return Jd(e,t,n,r,s);if(Array.isArray(t)){for(var i=0;i<t.length;i++)Qd(e,t[i],n,r,s);return null}return n=Uc(n),e&&e[Ps]?e.O(t,n,bs(r)?!!r.capture:!!r,s):Yd(e,t,n,!1,r,s)}function Yd(e,t,n,r,s,i){if(!t)throw Error("Invalid event type");var o=bs(s)?!!s.capture:!!s,a=Bc(e);if(a||(e[Lc]=a=new io(e)),n=a.add(t,n,r,o,i),n.proxy)return n;if(r=JT(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)jT||(s=o),s===void 0&&(s=!1),e.addEventListener(t.toString(),r,s);else if(e.attachEvent)e.attachEvent(Zd(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function JT(){function e(n){return t.call(e.src,e.listener,n)}const t=XT;return e}function Jd(e,t,n,r,s){if(Array.isArray(t)){for(var i=0;i<t.length;i++)Jd(e,t[i],n,r,s);return null}return n=Uc(n),e&&e[Ps]?e.P(t,n,bs(r)?!!r.capture:!!r,s):Yd(e,t,n,!0,r,s)}function Xd(e,t,n,r,s){if(Array.isArray(t))for(var i=0;i<t.length;i++)Xd(e,t[i],n,r,s);else r=bs(r)?!!r.capture:!!r,n=Uc(n),e&&e[Ps]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=xa(i,n,r,s),-1<n&&(so(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=Bc(e))&&(t=e.g[t.toString()],e=-1,t&&(e=xa(t,n,r,s)),(n=-1<e?t[e]:null)&&Fc(n))}function Fc(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[Ps])Da(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Zd(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Bc(t))?(Da(n,e),n.h==0&&(n.src=null,t[Lc]=null)):so(e)}}}function Zd(e){return e in Yo?Yo[e]:Yo[e]="on"+e}function XT(e,t){if(e.fa)e=!0;else{t=new fs(t,this);var n=e.listener,r=e.la||e.src;e.ia&&Fc(e),e=n.call(r,t)}return e}function Bc(e){return e=e[Lc],e instanceof io?e:null}var Jo="__closure_events_fn_"+(1e9*Math.random()>>>0);function Uc(e){return typeof e=="function"?e:(e[Jo]||(e[Jo]=function(t){return e.handleEvent(t)}),e[Jo])}function kt(){vn.call(this),this.i=new io(this),this.S=this,this.J=null}Mt(kt,vn);kt.prototype[Ps]=!0;kt.prototype.removeEventListener=function(e,t,n,r){Xd(this,e,t,n,r)};function Ut(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new Yt(t,e);else if(t instanceof Yt)t.target=t.target||e;else{var s=t;t=new Yt(r,e),Wd(t,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];s=Qs(o,r,!0,t)&&s}if(o=t.g=e,s=Qs(o,r,!0,t)&&s,s=Qs(o,r,!1,t)&&s,n)for(i=0;i<n.length;i++)o=t.g=n[i],s=Qs(o,r,!1,t)&&s}kt.prototype.N=function(){if(kt.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)so(n[r]);delete e.g[t],e.h--}}this.J=null};kt.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};kt.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function Qs(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Da(e.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var $c=H.JSON.stringify;class ZT{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function tI(){var e=jc;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class eI{constructor(){this.h=this.g=null}add(t,n){const r=tp.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var tp=new ZT(()=>new nI,e=>e.reset());class nI{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function rI(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function sI(e){H.setTimeout(()=>{throw e},0)}let ds,ps=!1,jc=new eI,ep=()=>{const e=H.Promise.resolve(void 0);ds=()=>{e.then(iI)}};var iI=()=>{for(var e;e=tI();){try{e.h.call(e.g)}catch(n){sI(n)}var t=tp;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}ps=!1};function oo(e,t){kt.call(this),this.h=e||1,this.g=t||H,this.j=Qt(this.qb,this),this.l=Date.now()}Mt(oo,kt);P=oo.prototype;P.ga=!1;P.T=null;P.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ut(this,"tick"),this.ga&&(qc(this),this.start()))}};P.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function qc(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}P.N=function(){oo.$.N.call(this),qc(this),delete this.g};function zc(e,t,n){if(typeof e=="function")n&&(e=Qt(e,n));else if(e&&typeof e.handleEvent=="function")e=Qt(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:H.setTimeout(e,t||0)}function np(e){e.g=zc(()=>{e.g=null,e.i&&(e.i=!1,np(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class oI extends vn{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:np(this)}N(){super.N(),this.g&&(H.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gs(e){vn.call(this),this.h=e,this.g={}}Mt(gs,vn);var Zu=[];function rp(e,t,n,r){Array.isArray(n)||(n&&(Zu[0]=n.toString()),n=Zu);for(var s=0;s<n.length;s++){var i=Qd(t,n[s],r||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function sp(e){Mc(e.g,function(t,n){this.g.hasOwnProperty(n)&&Fc(t)},e),e.g={}}gs.prototype.N=function(){gs.$.N.call(this),sp(this)};gs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ao(){this.g=!0}ao.prototype.Ea=function(){this.g=!1};function aI(e,t,n,r,s,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+t+`
`+n+`
`+o})}function cI(e,t,n,r,s,i,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+t+`
`+n+`
`+i+" "+o})}function ar(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+uI(e,n)+(r?" "+r:"")})}function lI(e,t){e.info(function(){return"TIMEOUT: "+t})}ao.prototype.info=function(){};function uI(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return $c(n)}catch{return t}}var Yn={},th=null;function co(){return th=th||new kt}Yn.Ta="serverreachability";function ip(e){Yt.call(this,Yn.Ta,e)}Mt(ip,Yt);function ms(e){const t=co();Ut(t,new ip(t))}Yn.STAT_EVENT="statevent";function op(e,t){Yt.call(this,Yn.STAT_EVENT,e),this.stat=t}Mt(op,Yt);function ne(e){const t=co();Ut(t,new op(t,e))}Yn.Ua="timingevent";function ap(e,t){Yt.call(this,Yn.Ua,e),this.size=t}Mt(ap,Yt);function Vs(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return H.setTimeout(function(){e()},t)}var lo={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},cp={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Hc(){}Hc.prototype.h=null;function eh(e){return e.h||(e.h=e.i())}function lp(){}var Ds={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Kc(){Yt.call(this,"d")}Mt(Kc,Yt);function Gc(){Yt.call(this,"c")}Mt(Gc,Yt);var Oa;function uo(){}Mt(uo,Hc);uo.prototype.g=function(){return new XMLHttpRequest};uo.prototype.i=function(){return{}};Oa=new uo;function xs(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new gs(this),this.P=hI,e=ba?125:void 0,this.V=new oo(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new up}function up(){this.i=null,this.g="",this.h=!1}var hI=45e3,hp={},Na={};P=xs.prototype;P.setTimeout=function(e){this.P=e};function ka(e,t,n){e.L=1,e.A=fo(Ke(t)),e.u=n,e.S=!0,fp(e,null)}function fp(e,t){e.G=Date.now(),Os(e),e.B=Ke(e.A);var n=e.B,r=e.W;Array.isArray(r)||(r=[String(r)]),Ep(n.i,"t",r),e.o=0,n=e.l.J,e.h=new up,e.g=$p(e.l,n?t:null,!e.u),0<e.O&&(e.M=new oI(Qt(e.Pa,e,e.g),e.O)),rp(e.U,e.g,"readystatechange",e.nb),t=e.I?Gd(e.I):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,t)):(e.v="GET",e.g.ha(e.B,e.v,null,t)),ms(),aI(e.j,e.v,e.B,e.m,e.W,e.u)}P.nb=function(e){e=e.target;const t=this.M;t&&De(e)==3?t.l():this.Pa(e)};P.Pa=function(e){try{if(e==this.g)t:{const u=De(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||ba||this.g&&(this.h.h||this.g.ja()||ih(this.g)))){this.J||u!=4||t==7||(t==8||0>=h?ms(3):ms(2)),ho(this);var n=this.g.da();this.ca=n;e:if(dp(this)){var r=ih(this.g);e="";var s=r.length,i=De(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){xn(this),Xr(this);var o="";break e}this.h.i=new H.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:i&&t==s-1});r.length=0,this.h.g+=e,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,cI(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!hs(a)){var l=a;break e}}l=null}if(n=l)ar(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ma(this,n);else{this.i=!1,this.s=3,ne(12),xn(this),Xr(this);break t}}this.S?(pp(this,u,o),ba&&this.i&&u==3&&(rp(this.U,this.V,"tick",this.mb),this.V.start())):(ar(this.j,this.m,o,null),Ma(this,o)),u==4&&xn(this),this.i&&!this.J&&(u==4?Lp(this.l,this):(this.i=!1,Os(this)))}else xI(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,ne(12)):(this.s=0,ne(13)),xn(this),Xr(this)}}}catch{}finally{}};function dp(e){return e.g?e.v=="GET"&&e.L!=2&&e.l.Ha:!1}function pp(e,t,n){let r=!0,s;for(;!e.J&&e.o<n.length;)if(s=fI(e,n),s==Na){t==4&&(e.s=4,ne(14),r=!1),ar(e.j,e.m,null,"[Incomplete Response]");break}else if(s==hp){e.s=4,ne(15),ar(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else ar(e.j,e.m,s,null),Ma(e,s);dp(e)&&e.o!=0&&(e.h.g=e.h.g.slice(e.o),e.o=0),t!=4||n.length!=0||e.h.h||(e.s=1,ne(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Zc(t),t.M=!0,ne(11))):(ar(e.j,e.m,n,"[Invalid Chunked Response]"),xn(e),Xr(e))}P.mb=function(){if(this.g){var e=De(this.g),t=this.g.ja();this.o<t.length&&(ho(this),pp(this,e,t),this.i&&e!=4&&Os(this))}};function fI(e,t){var n=e.o,r=t.indexOf(`
`,n);return r==-1?Na:(n=Number(t.substring(n,r)),isNaN(n)?hp:(r+=1,r+n>t.length?Na:(t=t.slice(r,r+n),e.o=r+n,t)))}P.cancel=function(){this.J=!0,xn(this)};function Os(e){e.Y=Date.now()+e.P,gp(e,e.P)}function gp(e,t){if(e.C!=null)throw Error("WatchDog timer not null");e.C=Vs(Qt(e.lb,e),t)}function ho(e){e.C&&(H.clearTimeout(e.C),e.C=null)}P.lb=function(){this.C=null;const e=Date.now();0<=e-this.Y?(lI(this.j,this.B),this.L!=2&&(ms(),ne(17)),xn(this),this.s=2,Xr(this)):gp(this,this.Y-e)};function Xr(e){e.l.H==0||e.J||Lp(e.l,e)}function xn(e){ho(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,qc(e.V),sp(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Ma(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||La(n.i,e))){if(!e.K&&La(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)bi(n),_o(n);else break t;Xc(n),ne(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Vs(Qt(n.ib,n),6e3));if(1>=Ip(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else On(n,11)}else if((e.K||n.g==e)&&bi(n),!hs(t))for(s=n.Ja.g.parse(t),t=0;t<s.length;t++){let l=s[t];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=e.g;if(g){const w=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(w){var i=r.i;i.g||w.indexOf("spdy")==-1&&w.indexOf("quic")==-1&&w.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Wc(i,i.h),i.h=null))}if(r.F){const R=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;R&&(r.Da=R,yt(r.I,r.F,R))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=Up(r,r.J?r.pa:null,r.Y),o.K){Ap(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.C&&(ho(a),Os(a)),r.g=o}else kp(r);0<n.j.length&&yo(n)}else l[0]!="stop"&&l[0]!="close"||On(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?On(n,7):Jc(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}ms(4)}catch{}}function dI(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(no(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function pI(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(no(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function mp(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(no(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=pI(e),r=dI(e),s=r.length,i=0;i<s;i++)t.call(void 0,r[i],n&&n[i],e)}var _p=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function gI(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),s=null;if(0<=r){var i=e[n].substring(0,r);s=e[n].substring(r+1)}else i=e[n];t(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Fn(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Fn){this.h=e.h,Si(this,e.j),this.s=e.s,this.g=e.g,Ci(this,e.m),this.l=e.l;var t=e.i,n=new _s;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),nh(this,n),this.o=e.o}else e&&(t=String(e).match(_p))?(this.h=!1,Si(this,t[1]||"",!0),this.s=Ur(t[2]||""),this.g=Ur(t[3]||"",!0),Ci(this,t[4]),this.l=Ur(t[5]||"",!0),nh(this,t[6]||"",!0),this.o=Ur(t[7]||"")):(this.h=!1,this.i=new _s(null,this.h))}Fn.prototype.toString=function(){var e=[],t=this.j;t&&e.push($r(t,rh,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push($r(t,rh,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push($r(n,n.charAt(0)=="/"?yI:_I,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",$r(n,EI)),e.join("")};function Ke(e){return new Fn(e)}function Si(e,t,n){e.j=n?Ur(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Ci(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function nh(e,t,n){t instanceof _s?(e.i=t,wI(e.i,e.h)):(n||(t=$r(t,vI)),e.i=new _s(t,e.h))}function yt(e,t,n){e.i.set(t,n)}function fo(e){return yt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Ur(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function $r(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,mI),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function mI(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var rh=/[#\/\?@]/g,_I=/[#\?:]/g,yI=/[#\?]/g,vI=/[#\?@]/g,EI=/#/g;function _s(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function En(e){e.g||(e.g=new Map,e.h=0,e.i&&gI(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}P=_s.prototype;P.add=function(e,t){En(this),this.i=null,e=br(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function yp(e,t){En(e),t=br(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function vp(e,t){return En(e),t=br(e,t),e.g.has(t)}P.forEach=function(e,t){En(this),this.g.forEach(function(n,r){n.forEach(function(s){e.call(t,s,r,this)},this)},this)};P.ta=function(){En(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const s=e[r];for(let i=0;i<s.length;i++)n.push(t[r])}return n};P.Z=function(e){En(this);let t=[];if(typeof e=="string")vp(this,e)&&(t=t.concat(this.g.get(br(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};P.set=function(e,t){return En(this),this.i=null,e=br(this,e),vp(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};P.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function Ep(e,t,n){yp(e,t),0<n.length&&(e.i=null,e.g.set(br(e,t),Nc(n)),e.h+=n.length)}P.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),e.push(s)}}return this.i=e.join("&")};function br(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function wI(e,t){t&&!e.j&&(En(e),e.i=null,e.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(yp(this,r),Ep(this,s,n))},e)),e.j=t}var TI=class{constructor(e,t){this.g=e,this.map=t}};function wp(e){this.l=e||II,H.PerformanceNavigationTiming?(e=H.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(H.g&&H.g.Ka&&H.g.Ka()&&H.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var II=10;function Tp(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Ip(e){return e.h?1:e.g?e.g.size:0}function La(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Wc(e,t){e.g?e.g.add(t):e.h=t}function Ap(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}wp.prototype.cancel=function(){if(this.i=Rp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Rp(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Nc(e.i)}var AI=class{stringify(e){return H.JSON.stringify(e,void 0)}parse(e){return H.JSON.parse(e,void 0)}};function RI(){this.g=new AI}function SI(e,t,n){const r=n||"";try{mp(e,function(s,i){let o=s;bs(s)&&(o=$c(s)),t.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw t.push(r+"type="+encodeURIComponent("_badmap")),s}}function CI(e,t){const n=new ao;if(H.Image){const r=new Image;r.onload=Ws(Ys,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Ws(Ys,n,r,"TestLoadImage: error",!1,t),r.onabort=Ws(Ys,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Ws(Ys,n,r,"TestLoadImage: timeout",!1,t),H.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function Ys(e,t,n,r,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(r)}catch{}}function po(e){this.l=e.ec||null,this.j=e.ob||!1}Mt(po,Hc);po.prototype.g=function(){return new go(this.l,this.j)};po.prototype.i=function(e){return function(){return e}}({});function go(e,t){kt.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Qc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Mt(go,kt);var Qc=0;P=go.prototype;P.open=function(e,t){if(this.readyState!=Qc)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,ys(this)};P.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||H).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};P.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ns(this)),this.readyState=Qc};P.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,ys(this)),this.g&&(this.readyState=3,ys(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof H.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Sp(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function Sp(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}P.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Ns(this):ys(this),this.readyState==3&&Sp(this)}};P.Za=function(e){this.g&&(this.response=this.responseText=e,Ns(this))};P.Ya=function(e){this.g&&(this.response=e,Ns(this))};P.ka=function(){this.g&&Ns(this)};function Ns(e){e.readyState=4,e.l=null,e.j=null,e.A=null,ys(e)}P.setRequestHeader=function(e,t){this.v.append(e,t)};P.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};P.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function ys(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(go.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var bI=H.JSON.parse;function At(e){kt.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Cp,this.L=this.M=!1}Mt(At,kt);var Cp="",PI=/^https?$/i,VI=["POST","PUT"];P=At.prototype;P.Oa=function(e){this.M=e};P.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Oa.g(),this.C=this.u?eh(this.u):eh(Oa),this.g.onreadystatechange=Qt(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(i){sh(this,i);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=H.FormData&&e instanceof H.FormData,!(0<=qd(VI,t))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Vp(this),0<this.B&&((this.L=DI(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Qt(this.ua,this)):this.A=zc(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){sh(this,i)}};function DI(e){return wr&&typeof e.timeout=="number"&&e.ontimeout!==void 0}P.ua=function(){typeof Oc<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ut(this,"timeout"),this.abort(8))};function sh(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,bp(e),mo(e)}function bp(e){e.F||(e.F=!0,Ut(e,"complete"),Ut(e,"error"))}P.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Ut(this,"complete"),Ut(this,"abort"),mo(this))};P.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),mo(this,!0)),At.$.N.call(this)};P.La=function(){this.s||(this.G||this.v||this.l?Pp(this):this.kb())};P.kb=function(){Pp(this)};function Pp(e){if(e.h&&typeof Oc<"u"&&(!e.C[1]||De(e)!=4||e.da()!=2)){if(e.v&&De(e)==4)zc(e.La,0,e);else if(Ut(e,"readystatechange"),De(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var s=String(e.I).match(_p)[1]||null;!s&&H.self&&H.self.location&&(s=H.self.location.protocol.slice(0,-1)),r=!PI.test(s?s.toLowerCase():"")}n=r}if(n)Ut(e,"complete"),Ut(e,"success");else{e.m=6;try{var i=2<De(e)?e.g.statusText:""}catch{i=""}e.j=i+" ["+e.da()+"]",bp(e)}}finally{mo(e)}}}}function mo(e,t){if(e.g){Vp(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||Ut(e,"ready");try{n.onreadystatechange=r}catch{}}}function Vp(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(H.clearTimeout(e.A),e.A=null)}P.isActive=function(){return!!this.g};function De(e){return e.g?e.g.readyState:0}P.da=function(){try{return 2<De(this)?this.g.status:-1}catch{return-1}};P.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};P.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),bI(t)}};function ih(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Cp:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function xI(e){const t={};e=(e.g&&2<=De(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(hs(e[r]))continue;var n=rI(e[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=t[s]||[];t[s]=i,i.push(n)}YT(t,function(r){return r.join(", ")})}P.Ia=function(){return this.m};P.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Dp(e){let t="";return Mc(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function Yc(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Dp(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):yt(e,t,n))}function Mr(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function xp(e){this.Ga=0,this.j=[],this.l=new ao,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Mr("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Mr("baseRetryDelayMs",5e3,e),this.hb=Mr("retryDelaySeedMs",1e4,e),this.eb=Mr("forwardChannelMaxRetries",2,e),this.xa=Mr("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new wp(e&&e.concurrentRequestLimit),this.Ja=new RI,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}P=xp.prototype;P.ra=8;P.H=1;function Jc(e){if(Op(e),e.H==3){var t=e.W++,n=Ke(e.I);if(yt(n,"SID",e.K),yt(n,"RID",t),yt(n,"TYPE","terminate"),ks(e,n),t=new xs(e,e.l,t),t.L=2,t.A=fo(Ke(n)),n=!1,H.navigator&&H.navigator.sendBeacon)try{n=H.navigator.sendBeacon(t.A.toString(),"")}catch{}!n&&H.Image&&(new Image().src=t.A,n=!0),n||(t.g=$p(t.l,null),t.g.ha(t.A)),t.G=Date.now(),Os(t)}Bp(e)}function _o(e){e.g&&(Zc(e),e.g.cancel(),e.g=null)}function Op(e){_o(e),e.u&&(H.clearTimeout(e.u),e.u=null),bi(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&H.clearTimeout(e.m),e.m=null)}function yo(e){if(!Tp(e.i)&&!e.m){e.m=!0;var t=e.Na;ds||ep(),ps||(ds(),ps=!0),jc.add(t,e),e.C=0}}function OI(e,t){return Ip(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=Vs(Qt(e.Na,e,t),Fp(e,e.C)),e.C++,!0)}P.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const s=new xs(this,this.l,e);let i=this.s;if(this.U&&(i?(i=Gd(i),Wd(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Np(this,s,t),n=Ke(this.I),yt(n,"RID",e),yt(n,"CVER",22),this.F&&yt(n,"X-HTTP-Session-Id",this.F),ks(this,n),i&&(this.O?t="headers="+encodeURIComponent(String(Dp(i)))+"&"+t:this.o&&Yc(n,this.o,i)),Wc(this.i,s),this.bb&&yt(n,"TYPE","init"),this.P?(yt(n,"$req",t),yt(n,"SID","null"),s.aa=!0,ka(s,n,null)):ka(s,n,t),this.H=2}}else this.H==3&&(e?oh(this,e):this.j.length==0||Tp(this.i)||oh(this))};function oh(e,t){var n;t?n=t.m:n=e.W++;const r=Ke(e.I);yt(r,"SID",e.K),yt(r,"RID",n),yt(r,"AID",e.V),ks(e,r),e.o&&e.s&&Yc(r,e.o,e.s),n=new xs(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Np(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Wc(e.i,n),ka(n,r,t)}function ks(e,t){e.na&&Mc(e.na,function(n,r){yt(t,r,n)}),e.h&&mp({},function(n,r){yt(t,r,n)})}function Np(e,t,n){n=Math.min(e.j.length,n);var r=e.h?Qt(e.h.Va,e.h,e):null;t:{var s=e.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{SI(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,r}function kp(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;ds||ep(),ps||(ds(),ps=!0),jc.add(t,e),e.A=0}}function Xc(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=Vs(Qt(e.Ma,e),Fp(e,e.A)),e.A++,!0)}P.Ma=function(){if(this.u=null,Mp(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=Vs(Qt(this.jb,this),e)}};P.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ne(10),_o(this),Mp(this))};function Zc(e){e.B!=null&&(H.clearTimeout(e.B),e.B=null)}function Mp(e){e.g=new xs(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=Ke(e.wa);yt(t,"RID","rpc"),yt(t,"SID",e.K),yt(t,"AID",e.V),yt(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&yt(t,"TO",e.qa),yt(t,"TYPE","xmlhttp"),ks(e,t),e.o&&e.s&&Yc(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.A=fo(Ke(t)),n.u=null,n.S=!0,fp(n,e)}P.ib=function(){this.v!=null&&(this.v=null,_o(this),Xc(this),ne(19))};function bi(e){e.v!=null&&(H.clearTimeout(e.v),e.v=null)}function Lp(e,t){var n=null;if(e.g==t){bi(e),Zc(e),e.g=null;var r=2}else if(La(e.i,t))n=t.F,Ap(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.u?t.u.length:0,t=Date.now()-t.G;var s=e.C;r=co(),Ut(r,new ap(r,n)),yo(e)}else kp(e);else if(s=t.s,s==3||s==0&&0<t.ca||!(r==1&&OI(e,t)||r==2&&Xc(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),s){case 1:On(e,5);break;case 4:On(e,10);break;case 3:On(e,6);break;default:On(e,2)}}}function Fp(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function On(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=Qt(e.pb,e);n||(n=new Fn("//www.google.com/images/cleardot.gif"),H.location&&H.location.protocol=="http"||Si(n,"https"),fo(n)),CI(n.toString(),r)}else ne(2);e.H=0,e.h&&e.h.za(t),Bp(e),Op(e)}P.pb=function(e){e?(this.l.info("Successfully pinged google.com"),ne(2)):(this.l.info("Failed to ping google.com"),ne(1))};function Bp(e){if(e.H=0,e.ma=[],e.h){const t=Rp(e.i);(t.length!=0||e.j.length!=0)&&(Yu(e.ma,t),Yu(e.ma,e.j),e.i.i.length=0,Nc(e.j),e.j.length=0),e.h.ya()}}function Up(e,t,n){var r=n instanceof Fn?Ke(n):new Fn(n);if(r.g!="")t&&(r.g=t+"."+r.g),Ci(r,r.m);else{var s=H.location;r=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var i=new Fn(null);r&&Si(i,r),t&&(i.g=t),s&&Ci(i,s),n&&(i.l=n),r=i}return n=e.F,t=e.Da,n&&t&&yt(r,n,t),yt(r,"VER",e.ra),ks(e,r),r}function $p(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e.Ha&&!e.va?new At(new po({ob:n})):new At(e.va),t.Oa(e.J),t}P.isActive=function(){return!!this.h&&this.h.isActive(this)};function jp(){}P=jp.prototype;P.Ba=function(){};P.Aa=function(){};P.za=function(){};P.ya=function(){};P.isActive=function(){return!0};P.Va=function(){};function Pi(){if(wr&&!(10<=Number(KT)))throw Error("Environmental error: no available transport.")}Pi.prototype.g=function(e,t){return new fe(e,t)};function fe(e,t){kt.call(this),this.g=new xp(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!hs(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!hs(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Pr(this)}Mt(fe,kt);fe.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;ne(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=Up(e,null,e.Y),yo(e)};fe.prototype.close=function(){Jc(this.g)};fe.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=$c(e),e=n);t.j.push(new TI(t.fb++,e)),t.H==3&&yo(t)};fe.prototype.N=function(){this.g.h=null,delete this.j,Jc(this.g),delete this.g,fe.$.N.call(this)};function qp(e){Kc.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}Mt(qp,Kc);function zp(){Gc.call(this),this.status=1}Mt(zp,Gc);function Pr(e){this.g=e}Mt(Pr,jp);Pr.prototype.Ba=function(){Ut(this.g,"a")};Pr.prototype.Aa=function(e){Ut(this.g,new qp(e))};Pr.prototype.za=function(e){Ut(this.g,new zp)};Pr.prototype.ya=function(){Ut(this.g,"b")};function NI(){this.blockSize=-1}function we(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Mt(we,NI);we.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Xo(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var s=0;16>s;++s)r[s]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],s=e.g[2];var i=e.g[3],o=t+(i^n&(s^i))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[1]+3905402710&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[5]+1200080426&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[9]+2336552879&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[13]+4254626195&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(s^i&(n^s))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[6]+3225465664&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[10]+38016083&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[14]+3275163606&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[2]+4243563512&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(n^s^i)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[8]+2272392833&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[4]+1272893353&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[0]+3936430074&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[12]+3873151461&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(s^(n|~i))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[7]+1126891415&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[3]+2399980690&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[15]+4264355552&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[11]+3174756917&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+s&4294967295,e.g[3]=e.g[3]+i&4294967295}we.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,s=this.h,i=0;i<t;){if(s==0)for(;i<=n;)Xo(this,e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[s++]=e.charCodeAt(i++),s==this.blockSize){Xo(this,r),s=0;break}}else for(;i<t;)if(r[s++]=e[i++],s==this.blockSize){Xo(this,r),s=0;break}}this.h=s,this.i+=t};we.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function ft(e,t){this.h=t;for(var n=[],r=!0,s=e.length-1;0<=s;s--){var i=e[s]|0;r&&i==t||(n[s]=i,r=!1)}this.g=n}var kI={};function tl(e){return-128<=e&&128>e?qT(e,function(t){return new ft([t|0],0>t?-1:0)}):new ft([e|0],0>e?-1:0)}function xe(e){if(isNaN(e)||!isFinite(e))return dr;if(0>e)return Ft(xe(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=Fa;return new ft(t,0)}function Hp(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return Ft(Hp(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=xe(Math.pow(t,8)),r=dr,s=0;s<e.length;s+=8){var i=Math.min(8,e.length-s),o=parseInt(e.substring(s,s+i),t);8>i?(i=xe(Math.pow(t,i)),r=r.R(i).add(xe(o))):(r=r.R(n),r=r.add(xe(o)))}return r}var Fa=4294967296,dr=tl(0),Ba=tl(1),ah=tl(16777216);P=ft.prototype;P.ea=function(){if(ge(this))return-Ft(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:Fa+r)*t,t*=Fa}return e};P.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(je(this))return"0";if(ge(this))return"-"+Ft(this).toString(e);for(var t=xe(Math.pow(e,6)),n=this,r="";;){var s=Di(n,t).g;n=Vi(n,s.R(t));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=s,je(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};P.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function je(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function ge(e){return e.h==-1}P.X=function(e){return e=Vi(this,e),ge(e)?-1:je(e)?0:1};function Ft(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new ft(n,~e.h).add(Ba)}P.abs=function(){return ge(this)?Ft(this):this};P.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,s=0;s<=t;s++){var i=r+(this.D(s)&65535)+(e.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(e.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new ft(n,n[n.length-1]&-2147483648?-1:0)};function Vi(e,t){return e.add(Ft(t))}P.R=function(e){if(je(this)||je(e))return dr;if(ge(this))return ge(e)?Ft(this).R(Ft(e)):Ft(Ft(this).R(e));if(ge(e))return Ft(this.R(Ft(e)));if(0>this.X(ah)&&0>e.X(ah))return xe(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<e.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(s)>>>16,c=e.D(s)&65535;n[2*r+2*s]+=o*c,Js(n,2*r+2*s),n[2*r+2*s+1]+=i*c,Js(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,Js(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,Js(n,2*r+2*s+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new ft(n,0)};function Js(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Lr(e,t){this.g=e,this.h=t}function Di(e,t){if(je(t))throw Error("division by zero");if(je(e))return new Lr(dr,dr);if(ge(e))return t=Di(Ft(e),t),new Lr(Ft(t.g),Ft(t.h));if(ge(t))return t=Di(e,Ft(t)),new Lr(Ft(t.g),t.h);if(30<e.g.length){if(ge(e)||ge(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Ba,r=t;0>=r.X(e);)n=ch(n),r=ch(r);var s=er(n,1),i=er(r,1);for(r=er(r,2),n=er(n,2);!je(r);){var o=i.add(r);0>=o.X(e)&&(s=s.add(n),i=o),r=er(r,1),n=er(n,1)}return t=Vi(e,s.R(t)),new Lr(s,t)}for(s=dr;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=xe(n),o=i.R(t);ge(o)||0<o.X(e);)n-=r,i=xe(n),o=i.R(t);je(i)&&(i=Ba),s=s.add(i),e=Vi(e,o)}return new Lr(s,e)}P.gb=function(e){return Di(this,e).h};P.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new ft(n,this.h&e.h)};P.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new ft(n,this.h|e.h)};P.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new ft(n,this.h^e.h)};function ch(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new ft(n,e.h)}function er(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,s=[],i=0;i<r;i++)s[i]=0<t?e.D(i+n)>>>t|e.D(i+n+1)<<32-t:e.D(i+n);return new ft(s,e.h)}Pi.prototype.createWebChannel=Pi.prototype.g;fe.prototype.send=fe.prototype.u;fe.prototype.open=fe.prototype.m;fe.prototype.close=fe.prototype.close;lo.NO_ERROR=0;lo.TIMEOUT=8;lo.HTTP_ERROR=6;cp.COMPLETE="complete";lp.EventType=Ds;Ds.OPEN="a";Ds.CLOSE="b";Ds.ERROR="c";Ds.MESSAGE="d";kt.prototype.listen=kt.prototype.O;At.prototype.listenOnce=At.prototype.P;At.prototype.getLastError=At.prototype.Sa;At.prototype.getLastErrorCode=At.prototype.Ia;At.prototype.getStatus=At.prototype.da;At.prototype.getResponseJson=At.prototype.Wa;At.prototype.getResponseText=At.prototype.ja;At.prototype.send=At.prototype.ha;At.prototype.setWithCredentials=At.prototype.Oa;we.prototype.digest=we.prototype.l;we.prototype.reset=we.prototype.reset;we.prototype.update=we.prototype.j;ft.prototype.add=ft.prototype.add;ft.prototype.multiply=ft.prototype.R;ft.prototype.modulo=ft.prototype.gb;ft.prototype.compare=ft.prototype.X;ft.prototype.toNumber=ft.prototype.ea;ft.prototype.toString=ft.prototype.toString;ft.prototype.getBits=ft.prototype.D;ft.fromNumber=xe;ft.fromString=Hp;var MI=function(){return new Pi},LI=function(){return co()},Zo=lo,FI=cp,BI=Yn,lh={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Xs=lp,UI=At,$I=we,pr=ft;const uh="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Kt.UNAUTHENTICATED=new Kt(null),Kt.GOOGLE_CREDENTIALS=new Kt("google-credentials-uid"),Kt.FIRST_PARTY=new Kt("first-party-uid"),Kt.MOCK_USER=new Kt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vr="10.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn=new Sc("@firebase/firestore");function Fr(){return zn.logLevel}function V(e,...t){if(zn.logLevel<=rt.DEBUG){const n=t.map(el);zn.debug(`Firestore (${Vr}): ${e}`,...n)}}function Le(e,...t){if(zn.logLevel<=rt.ERROR){const n=t.map(el);zn.error(`Firestore (${Vr}): ${e}`,...n)}}function Tr(e,...t){if(zn.logLevel<=rt.WARN){const n=t.map(el);zn.warn(`Firestore (${Vr}): ${e}`,...n)}}function el(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(e="Unexpected state"){const t=`FIRESTORE (${Vr}) INTERNAL ASSERTION FAILED: `+e;throw Le(t),new Error(t)}function bt(e,t){e||Y()}function ot(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends yn{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class jI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Kt.UNAUTHENTICATED))}shutdown(){}}class qI{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class zI{constructor(t){this.t=t,this.currentUser=Kt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new hn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new hn,t.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;t.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new hn)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(bt(typeof r.accessToken=="string"),new Kp(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return bt(t===null||typeof t=="string"),new Kt(t)}}class HI{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=Kt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class KI{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new HI(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(Kt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class GI{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class WI{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=i=>{i.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>r(i))};const s=i=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(bt(typeof n.token=="string"),this.R=n.token,new GI(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QI(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=QI(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=t.charAt(s[i]%t.length))}return r}}function ut(e,t){return e<t?-1:e>t?1:0}function Ir(e,t,n){return e.length===t.length&&e.every((r,s)=>n(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new U(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new U(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new U(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new U(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return oe.fromMillis(Date.now())}static fromDate(t){return oe.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new oe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?ut(this.nanoseconds,t.nanoseconds):ut(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(t){this.timestamp=t}static fromTimestamp(t){return new G(t)}static min(){return new G(new oe(0,0))}static max(){return new G(new oe(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(t,n,r){n===void 0?n=0:n>t.length&&Y(),r===void 0?r=t.length-n:r>t.length-n&&Y(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return vs.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof vs?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let s=0;s<r;s++){const i=t.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class Tt extends vs{construct(t,n,r){return new Tt(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new U(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Tt(n)}static emptyPath(){return new Tt([])}}const YI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class te extends vs{construct(t,n,r){return new te(t,n,r)}static isValidIdentifier(t){return YI.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),te.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new te(["__name__"])}static fromServerFormat(t){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new U(b.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<t.length;){const a=t[s];if(a==="\\"){if(s+1===t.length)throw new U(b.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new U(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new U(b.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new te(n)}static emptyPath(){return new te([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(t){this.path=t}static fromPath(t){return new j(Tt.fromString(t))}static fromName(t){return new j(Tt.fromString(t).popFirst(5))}static empty(){return new j(Tt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Tt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return Tt.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new j(new Tt(t.slice()))}}function JI(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=G.fromTimestamp(r===1e9?new oe(n+1,0):new oe(n,r));return new gn(s,j.empty(),t)}function XI(e){return new gn(e.readTime,e.key,-1)}class gn{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new gn(G.min(),j.empty(),-1)}static max(){return new gn(G.max(),j.empty(),-1)}}function ZI(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=j.comparator(e.documentKey,t.documentKey),n!==0?n:ut(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class e0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nl(e){if(e.code!==b.FAILED_PRECONDITION||e.message!==t0)throw e;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new E((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof E?n:E.resolve(n)}catch(n){return E.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):E.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):E.reject(n)}static resolve(t){return new E((n,r)=>{n(t)})}static reject(t){return new E((n,r)=>{r(t)})}static waitFor(t){return new E((n,r)=>{let s=0,i=0,o=!1;t.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(t){let n=E.resolve(!1);for(const r of t)n=n.next(s=>s?E.resolve(s):r());return n}static forEach(t,n){const r=[];return t.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(t,n){return new E((r,s)=>{const i=t.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(t[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(t,n){return new E((r,s)=>{const i=()=>{t()===!0?n().next(()=>{i()},s):r()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(t,n){this.action=t,this.transaction=n,this.aborted=!1,this.V=new hn,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new Zr(t,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const s=sl(r.target.error);this.V.reject(new Zr(t,s))}}static open(t,n,r,s){try{return new rl(n,t.transaction(s,r))}catch(i){throw new Zr(n,i)}}get m(){return this.V.promise}abort(t){t&&this.V.reject(t),this.aborted||(V("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const n=this.transaction.objectStore(t);return new r0(n)}}class Nn{constructor(t,n,r){this.name=t,this.version=n,this.p=r,Nn.S(wi())===12.2&&Le("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return V("SimpleDb","Removing database:",t),Pn(window.indexedDB.deleteDatabase(t)).toPromise()}static D(){if(!Ac())return!1;if(Nn.C())return!0;const t=wi(),n=Nn.S(t),r=0<n&&n<10,s=Nn.v(t),i=0<s&&s<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||r||i)}static C(){var t;return typeof process<"u"&&((t=process.__PRIVATE_env)===null||t===void 0?void 0:t.F)==="YES"}static M(t,n){return t.store(n)}static S(t){const n=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(t){const n=t.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(t){return this.db||(V("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;n(o)},s.onblocked=()=>{r(new Zr(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new U(b.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new U(b.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Zr(t,o))},s.onupgradeneeded=i=>{V("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.p.N(o,s.transaction,i.oldVersion,this.version).next(()=>{V("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=n=>this.L(n)),this.db}B(t){this.L=t,this.db&&(this.db.onversionchange=n=>t(n))}async runTransaction(t,n,r,s){const i=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(t);const a=rl.open(this.db,t,i?"readonly":"readwrite",r),c=s(a).next(l=>(a.g(),l)).catch(l=>(a.abort(l),E.reject(l))).toPromise();return c.catch(()=>{}),await a.m,c}catch(a){const c=a,l=c.name!=="FirebaseError"&&o<3;if(V("SimpleDb","Transaction failed with error:",c.message,"Retrying:",l),this.close(),!l)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class n0{constructor(t){this.k=t,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(t){this.k=t}done(){this.q=!0}U(t){this.K=t}delete(){return Pn(this.k.delete())}}class Zr extends U{constructor(t,n){super(b.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Ms(e){return e.name==="IndexedDbTransactionError"}class r0{constructor(t){this.store=t}put(t,n){let r;return n!==void 0?(V("SimpleDb","PUT",this.store.name,t,n),r=this.store.put(n,t)):(V("SimpleDb","PUT",this.store.name,"<auto-key>",t),r=this.store.put(t)),Pn(r)}add(t){return V("SimpleDb","ADD",this.store.name,t,t),Pn(this.store.add(t))}get(t){return Pn(this.store.get(t)).next(n=>(n===void 0&&(n=null),V("SimpleDb","GET",this.store.name,t,n),n))}delete(t){return V("SimpleDb","DELETE",this.store.name,t),Pn(this.store.delete(t))}count(){return V("SimpleDb","COUNT",this.store.name),Pn(this.store.count())}W(t,n){const r=this.options(t,n),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new E((o,a)=>{i.onerror=c=>{a(c.target.error)},i.onsuccess=c=>{o(c.target.result)}})}{const i=this.cursor(r),o=[];return this.G(i,(a,c)=>{o.push(c)}).next(()=>o)}}j(t,n){const r=this.store.getAll(t,n===null?void 0:n);return new E((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}H(t,n){V("SimpleDb","DELETE ALL",this.store.name);const r=this.options(t,n);r.J=!1;const s=this.cursor(r);return this.G(s,(i,o,a)=>a.delete())}Y(t,n){let r;n?r=t:(r={},n=t);const s=this.cursor(r);return this.G(s,n)}Z(t){const n=this.cursor({});return new E((r,s)=>{n.onerror=i=>{const o=sl(i.target.error);s(o)},n.onsuccess=i=>{const o=i.target.result;o?t(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(t,n){const r=[];return new E((s,i)=>{t.onerror=o=>{i(o.target.error)},t.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const c=new n0(a),l=n(a.primaryKey,a.value,c);if(l instanceof E){const u=l.catch(h=>(c.done(),E.reject(h)));r.push(u)}c.isDone?s():c.$===null?a.continue():a.continue(c.$)}}).next(()=>E.waitFor(r))}options(t,n){let r;return t!==void 0&&(typeof t=="string"?r=t:n=t),{index:r,range:n}}cursor(t){let n="next";if(t.reverse&&(n="prev"),t.index){const r=this.store.index(t.index);return t.J?r.openKeyCursor(t.range,n):r.openCursor(t.range,n)}return this.store.openCursor(t.range,n)}}function Pn(e){return new E((t,n)=>{e.onsuccess=r=>{const s=r.target.result;t(s)},e.onerror=r=>{const s=sl(r.target.error);n(s)}})}let hh=!1;function sl(e){const t=Nn.S(wi());if(t>=12.2&&t<13){const n="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(n)>=0){const r=new U("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return hh||(hh=!0,setTimeout(()=>{throw r},0)),r}}return e}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}il._e=-1;function vo(e){return e==null}function Ua(e){return e===0&&1/e==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fh(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Eo(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function s0(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(t,n){this.comparator=t,this.root=n||Lt.EMPTY}insert(t,n){return new Rt(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Lt.BLACK,null,null))}remove(t){return new Rt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Lt.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Zs(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Zs(this.root,t,this.comparator,!1)}getReverseIterator(){return new Zs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Zs(this.root,t,this.comparator,!0)}}class Zs{constructor(t,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?r(t.key,n):1,n&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Lt{constructor(t,n,r,s,i){this.key=t,this.value=n,this.color=r??Lt.RED,this.left=s??Lt.EMPTY,this.right=i??Lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,s,i){return new Lt(t??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Lt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return Lt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const t=this.left.check();if(t!==this.right.check())throw Y();return t+(this.isRed()?0:1)}}Lt.EMPTY=null,Lt.RED=!0,Lt.BLACK=!1;Lt.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(t,n,r,s,i){return this}insert(t,n,r){return new Lt(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(t){this.comparator=t,this.data=new Rt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new dh(this.data.getIterator())}getIteratorFrom(t){return new dh(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof $t)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new $t(this.comparator);return n.data=t,n}}class dh{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(t){this.fields=t,t.sort(te.comparator)}static empty(){return new nn([])}unionWith(t){let n=new $t(te.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new nn(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Ir(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Wp("Invalid base64 string: "+i):i}}(t);return new Jt(n)}static fromUint8Array(t){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(t);return new Jt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ut(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Jt.EMPTY_BYTE_STRING=new Jt("");const i0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function mn(e){if(bt(!!e),typeof e=="string"){let t=0;const n=i0.exec(e);if(bt(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Ct(e.seconds),nanos:Ct(e.nanos)}}function Ct(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Hn(e){return typeof e=="string"?Jt.fromBase64String(e):Jt.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ol(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function al(e){const t=e.mapValue.fields.__previous_value__;return ol(t)?al(t):t}function Es(e){const t=mn(e.mapValue.fields.__local_write_time__.timestampValue);return new oe(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0{constructor(t,n,r,s,i,o,a,c,l){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class ws{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new ws("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof ws&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Kn(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?ol(e)?4:a0(e)?9007199254740991:10:Y()}function Fe(e,t){if(e===t)return!0;const n=Kn(e);if(n!==Kn(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Es(e).isEqual(Es(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=mn(s.timestampValue),a=mn(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return Hn(s.bytesValue).isEqual(Hn(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return Ct(s.geoPointValue.latitude)===Ct(i.geoPointValue.latitude)&&Ct(s.geoPointValue.longitude)===Ct(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ct(s.integerValue)===Ct(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ct(s.doubleValue),a=Ct(i.doubleValue);return o===a?Ua(o)===Ua(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return Ir(e.arrayValue.values||[],t.arrayValue.values||[],Fe);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(fh(o)!==fh(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Fe(o[c],a[c])))return!1;return!0}(e,t);default:return Y()}}function Ts(e,t){return(e.values||[]).find(n=>Fe(n,t))!==void 0}function Ar(e,t){if(e===t)return 0;const n=Kn(e),r=Kn(t);if(n!==r)return ut(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ut(e.booleanValue,t.booleanValue);case 2:return function(i,o){const a=Ct(i.integerValue||i.doubleValue),c=Ct(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(e,t);case 3:return ph(e.timestampValue,t.timestampValue);case 4:return ph(Es(e),Es(t));case 5:return ut(e.stringValue,t.stringValue);case 6:return function(i,o){const a=Hn(i),c=Hn(o);return a.compareTo(c)}(e.bytesValue,t.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=ut(a[l],c[l]);if(u!==0)return u}return ut(a.length,c.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,o){const a=ut(Ct(i.latitude),Ct(o.latitude));return a!==0?a:ut(Ct(i.longitude),Ct(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=Ar(a[l],c[l]);if(u)return u}return ut(a.length,c.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,o){if(i===ti.mapValue&&o===ti.mapValue)return 0;if(i===ti.mapValue)return 1;if(o===ti.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const f=ut(c[h],u[h]);if(f!==0)return f;const g=Ar(a[c[h]],l[u[h]]);if(g!==0)return g}return ut(c.length,u.length)}(e.mapValue,t.mapValue);default:throw Y()}}function ph(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return ut(e,t);const n=mn(e),r=mn(t),s=ut(n.seconds,r.seconds);return s!==0?s:ut(n.nanos,r.nanos)}function Rr(e){return $a(e)}function $a(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=mn(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return Hn(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return j.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=$a(i);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${$a(n.fields[o])}`;return s+"}"}(e.mapValue):Y()}function ja(e){return!!e&&"integerValue"in e}function cl(e){return!!e&&"arrayValue"in e}function gh(e){return!!e&&"nullValue"in e}function mh(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function ta(e){return!!e&&"mapValue"in e}function ts(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Eo(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=ts(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=ts(e.arrayValue.values[n]);return t}return Object.assign({},e)}function a0(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(t){this.value=t}static empty(){return new Ve({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!ta(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=ts(n)}setAll(t){let n=te.emptyPath(),r={},s=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=ts(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(t){const n=this.field(t.popLast());ta(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Fe(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=n.mapValue.fields[t.get(r)];ta(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,r){Eo(n,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new Ve(ts(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(t,n,r,s,i,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new Gt(t,0,G.min(),G.min(),G.min(),Ve.empty(),0)}static newFoundDocument(t,n,r,s){return new Gt(t,1,n,G.min(),r,s,0)}static newNoDocument(t,n){return new Gt(t,2,n,G.min(),G.min(),Ve.empty(),0)}static newUnknownDocument(t,n){return new Gt(t,3,n,G.min(),G.min(),Ve.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(G.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ve.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ve.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=G.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Gt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(t,n){this.position=t,this.inclusive=n}}function _h(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],o=e.position[s];if(i.field.isKeyField()?r=j.comparator(j.fromName(o.referenceValue),n.key):r=Ar(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function yh(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Fe(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(t,n="asc"){this.field=t,this.dir=n}}function c0(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{}class Dt extends Qp{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new u0(t,n,r):n==="array-contains"?new d0(t,r):n==="in"?new p0(t,r):n==="not-in"?new g0(t,r):n==="array-contains-any"?new m0(t,r):new Dt(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new h0(t,r):new f0(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ar(n,this.value)):n!==null&&Kn(this.value)===Kn(n)&&this.matchesComparison(Ar(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Be extends Qp{constructor(t,n){super(),this.filters=t,this.op=n,this.ue=null}static create(t,n){return new Be(t,n)}matches(t){return Yp(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function Yp(e){return e.op==="and"}function Jp(e){return l0(e)&&Yp(e)}function l0(e){for(const t of e.filters)if(t instanceof Be)return!1;return!0}function qa(e){if(e instanceof Dt)return e.field.canonicalString()+e.op.toString()+Rr(e.value);if(Jp(e))return e.filters.map(t=>qa(t)).join(",");{const t=e.filters.map(n=>qa(n)).join(",");return`${e.op}(${t})`}}function Xp(e,t){return e instanceof Dt?function(r,s){return s instanceof Dt&&r.op===s.op&&r.field.isEqual(s.field)&&Fe(r.value,s.value)}(e,t):e instanceof Be?function(r,s){return s instanceof Be&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&Xp(o,s.filters[a]),!0):!1}(e,t):void Y()}function Zp(e){return e instanceof Dt?function(n){return`${n.field.canonicalString()} ${n.op} ${Rr(n.value)}`}(e):e instanceof Be?function(n){return n.op.toString()+" {"+n.getFilters().map(Zp).join(" ,")+"}"}(e):"Filter"}class u0 extends Dt{constructor(t,n,r){super(t,n,r),this.key=j.fromName(r.referenceValue)}matches(t){const n=j.comparator(t.key,this.key);return this.matchesComparison(n)}}class h0 extends Dt{constructor(t,n){super(t,"in",n),this.keys=tg("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class f0 extends Dt{constructor(t,n){super(t,"not-in",n),this.keys=tg("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function tg(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>j.fromName(r.referenceValue))}class d0 extends Dt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return cl(n)&&Ts(n.arrayValue,this.value)}}class p0 extends Dt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Ts(this.value.arrayValue,n)}}class g0 extends Dt{constructor(t,n){super(t,"not-in",n)}matches(t){if(Ts(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Ts(this.value.arrayValue,n)}}class m0 extends Dt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!cl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ts(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{constructor(t,n=null,r=[],s=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function vh(e,t=null,n=[],r=[],s=null,i=null,o=null){return new _0(e,t,n,r,s,i,o)}function ll(e){const t=ot(e);if(t.ce===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>qa(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),vo(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>Rr(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>Rr(r)).join(",")),t.ce=n}return t.ce}function ul(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!c0(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Xp(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!yh(e.startAt,t.startAt)&&yh(e.endAt,t.endAt)}function za(e){return j.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(t,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function y0(e,t,n,r,s,i,o,a){return new wo(e,t,n,r,s,i,o,a)}function hl(e){return new wo(e)}function Eh(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function v0(e){return e.collectionGroup!==null}function es(e){const t=ot(e);if(t.le===null){t.le=[];const n=new Set;for(const i of t.explicitOrderBy)t.le.push(i),n.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new $t(te.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(t).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||t.le.push(new Oi(i,r))}),n.has(te.keyField().canonicalString())||t.le.push(new Oi(te.keyField(),r))}return t.le}function ke(e){const t=ot(e);return t.he||(t.he=E0(t,es(e))),t.he}function E0(e,t){if(e.limitType==="F")return vh(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Oi(s.field,i)});const n=e.endAt?new xi(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new xi(e.startAt.position,e.startAt.inclusive):null;return vh(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function Ha(e,t,n){return new wo(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function To(e,t){return ul(ke(e),ke(t))&&e.limitType===t.limitType}function eg(e){return`${ll(ke(e))}|lt:${e.limitType}`}function sr(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Zp(s)).join(", ")}]`),vo(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Rr(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Rr(s)).join(",")),`Target(${r})`}(ke(e))}; limitType=${e.limitType})`}function Io(e,t){return t.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):j.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(e,t)&&function(r,s){for(const i of es(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(r,s){return!(r.startAt&&!function(o,a,c){const l=_h(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,es(r),s)||r.endAt&&!function(o,a,c){const l=_h(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,es(r),s))}(e,t)}function w0(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function ng(e){return(t,n)=>{let r=!1;for(const s of es(e)){const i=T0(s,t,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function T0(e,t,n){const r=e.field.isKeyField()?j.comparator(t.key,n.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?Ar(c,l):Y()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Y()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Eo(this.inner,(n,r)=>{for(const[s,i]of r)t(s,i)})}isEmpty(){return s0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I0=new Rt(j.comparator);function _n(){return I0}const rg=new Rt(j.comparator);function jr(...e){let t=rg;for(const n of e)t=t.insert(n.key,n);return t}function A0(e){let t=rg;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function kn(){return ns()}function sg(){return ns()}function ns(){return new Dr(e=>e.toString(),(e,t)=>e.isEqual(t))}const R0=new $t(j.comparator);function st(...e){let t=R0;for(const n of e)t=t.add(n);return t}const S0=new $t(ut);function C0(){return S0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b0(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ua(t)?"-0":t}}function P0(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(){this._=void 0}}function V0(e,t,n){return e instanceof Ka?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ol(i)&&(i=al(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,t):e instanceof Ni?ig(e,t):e instanceof ki?og(e,t):function(s,i){const o=x0(s,i),a=wh(o)+wh(s.Ie);return ja(o)&&ja(s.Ie)?P0(a):b0(s.serializer,a)}(e,t)}function D0(e,t,n){return e instanceof Ni?ig(e,t):e instanceof ki?og(e,t):n}function x0(e,t){return e instanceof Ga?function(r){return ja(r)||function(i){return!!i&&"doubleValue"in i}(r)}(t)?t:{integerValue:0}:null}class Ka extends Ao{}class Ni extends Ao{constructor(t){super(),this.elements=t}}function ig(e,t){const n=ag(t);for(const r of e.elements)n.some(s=>Fe(s,r))||n.push(r);return{arrayValue:{values:n}}}class ki extends Ao{constructor(t){super(),this.elements=t}}function og(e,t){let n=ag(t);for(const r of e.elements)n=n.filter(s=>!Fe(s,r));return{arrayValue:{values:n}}}class Ga extends Ao{constructor(t,n){super(),this.serializer=t,this.Ie=n}}function wh(e){return Ct(e.integerValue||e.doubleValue)}function ag(e){return cl(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function O0(e,t){return e.field.isEqual(t.field)&&function(r,s){return r instanceof Ni&&s instanceof Ni||r instanceof ki&&s instanceof ki?Ir(r.elements,s.elements,Fe):r instanceof Ga&&s instanceof Ga?Fe(r.Ie,s.Ie):r instanceof Ka&&s instanceof Ka}(e.transform,t.transform)}class Bn{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Bn}static exists(t){return new Bn(void 0,t)}static updateTime(t){return new Bn(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ui(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class fl{}function cg(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new k0(e.key,Bn.none()):new dl(e.key,e.data,Bn.none());{const n=e.data,r=Ve.empty();let s=new $t(te.comparator);for(let i of t.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Ro(e.key,r,new nn(s.toArray()),Bn.none())}}function N0(e,t,n){e instanceof dl?function(s,i,o){const a=s.value.clone(),c=Ih(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof Ro?function(s,i,o){if(!ui(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Ih(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(lg(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(e,t,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function rs(e,t,n,r){return e instanceof dl?function(i,o,a,c){if(!ui(i.precondition,o))return a;const l=i.value.clone(),u=Ah(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(e,t,n,r):e instanceof Ro?function(i,o,a,c){if(!ui(i.precondition,o))return a;const l=Ah(i.fieldTransforms,c,o),u=o.data;return u.setAll(lg(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(e,t,n,r):function(i,o,a){return ui(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function Th(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ir(r,s,(i,o)=>O0(i,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class dl extends fl{constructor(t,n,r,s=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ro extends fl{constructor(t,n,r,s,i=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function lg(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Ih(e,t,n){const r=new Map;bt(e.length===n.length);for(let s=0;s<n.length;s++){const i=e[s],o=i.transform,a=t.data.field(i.field);r.set(i.field,D0(o,a,n[s]))}return r}function Ah(e,t,n){const r=new Map;for(const s of e){const i=s.transform,o=n.data.field(s.field);r.set(s.field,V0(i,o,t))}return r}class k0 extends fl{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0{constructor(t,n,r,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&N0(i,t,r[s])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=rs(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=rs(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=sg();return this.mutations.forEach(s=>{const i=t.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=cg(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(G.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),st())}isEqual(t){return this.batchId===t.batchId&&Ir(this.mutations,t.mutations,(n,r)=>Th(n,r))&&Ir(this.baseMutations,t.baseMutations,(n,r)=>Th(n,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var St,et;function ug(e){if(e===void 0)return Le("GRPC error has no .code"),b.UNKNOWN;switch(e){case St.OK:return b.OK;case St.CANCELLED:return b.CANCELLED;case St.UNKNOWN:return b.UNKNOWN;case St.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case St.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case St.INTERNAL:return b.INTERNAL;case St.UNAVAILABLE:return b.UNAVAILABLE;case St.UNAUTHENTICATED:return b.UNAUTHENTICATED;case St.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case St.NOT_FOUND:return b.NOT_FOUND;case St.ALREADY_EXISTS:return b.ALREADY_EXISTS;case St.PERMISSION_DENIED:return b.PERMISSION_DENIED;case St.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case St.ABORTED:return b.ABORTED;case St.OUT_OF_RANGE:return b.OUT_OF_RANGE;case St.UNIMPLEMENTED:return b.UNIMPLEMENTED;case St.DATA_LOSS:return b.DATA_LOSS;default:return Y()}}(et=St||(St={}))[et.OK=0]="OK",et[et.CANCELLED=1]="CANCELLED",et[et.UNKNOWN=2]="UNKNOWN",et[et.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",et[et.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",et[et.NOT_FOUND=5]="NOT_FOUND",et[et.ALREADY_EXISTS=6]="ALREADY_EXISTS",et[et.PERMISSION_DENIED=7]="PERMISSION_DENIED",et[et.UNAUTHENTICATED=16]="UNAUTHENTICATED",et[et.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",et[et.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",et[et.ABORTED=10]="ABORTED",et[et.OUT_OF_RANGE=11]="OUT_OF_RANGE",et[et.UNIMPLEMENTED=12]="UNIMPLEMENTED",et[et.INTERNAL=13]="INTERNAL",et[et.UNAVAILABLE=14]="UNAVAILABLE",et[et.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B0(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U0=new pr([4294967295,4294967295],0);function Rh(e){const t=B0().encode(e),n=new $I;return n.update(t),new Uint8Array(n.digest())}function Sh(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new pr([n,r],0),new pr([s,i],0)]}class pl{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new qr(`Invalid padding: ${n}`);if(r<0)throw new qr(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new qr(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new qr(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*t.length-n,this.Ee=pr.fromNumber(this.Te)}de(t,n,r){let s=t.add(n.multiply(pr.fromNumber(r)));return s.compare(U0)===1&&(s=new pr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const n=Rh(t),[r,s]=Sh(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(t,n,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),o=new pl(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Te===0)return;const n=Rh(t),[r,s]=Sh(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class qr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(t,n,r,s,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const s=new Map;return s.set(t,Ls.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new So(G.min(),s,new Rt(ut),_n(),st())}}class Ls{constructor(t,n,r,s,i){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new Ls(r,n,st(),st(),st())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(t,n,r,s){this.Ve=t,this.removedTargetIds=n,this.key=r,this.me=s}}class hg{constructor(t,n){this.targetId=t,this.fe=n}}class fg{constructor(t,n,r=Jt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Ch{constructor(){this.ge=0,this.pe=Ph(),this.ye=Jt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=st(),n=st(),r=st();return this.pe.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Y()}}),new Ls(this.ye,this.we,t,n,r)}Fe(){this.Se=!1,this.pe=Ph()}Me(t,n){this.Se=!0,this.pe=this.pe.insert(t,n)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1,bt(this.ge>=0)}Le(){this.Se=!0,this.we=!0}}class $0{constructor(t){this.Be=t,this.ke=new Map,this.qe=_n(),this.Qe=bh(),this.Ke=new Rt(ut)}$e(t){for(const n of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(n,t.me):this.We(n,t.key,t.me);for(const n of t.removedTargetIds)this.We(n,t.key,t.me)}Ge(t){this.forEachTarget(t,n=>{const r=this.ze(n);switch(t.state){case 0:this.je(n)&&r.Ce(t.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(t.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Le(),r.Ce(t.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(t.resumeToken));break;default:Y()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ke.forEach((r,s)=>{this.je(s)&&n(s)})}Je(t){const n=t.targetId,r=t.fe.count,s=this.Ye(n);if(s){const i=s.target;if(za(i))if(r===0){const o=new j(i.path);this.We(n,o,Gt.newNoDocument(o,G.min()))}else bt(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(t),c=a?this.et(a,t,o):1;if(c!==0){this.He(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,l)}}}}}Xe(t){const n=t.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Hn(r).toUint8Array()}catch(c){if(c instanceof Wp)return Tr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new pl(o,s,i)}catch(c){return Tr(c instanceof qr?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(t,n,r){return n.fe.count===r-this.rt(t,n.targetId)?0:2}rt(t,n){const r=this.Be.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Be.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;t.mightContain(a)||(this.We(n,i,null),s++)}),s}it(t){const n=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&za(a.target)){const c=new j(a.target.path);this.qe.get(c)!==null||this.st(o,c)||this.We(o,c,Gt.newNoDocument(c,t))}i.De&&(n.set(o,i.ve()),i.Fe())}});let r=st();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Ye(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(t));const s=new So(t,n,this.Ke,this.qe,r);return this.qe=_n(),this.Qe=bh(),this.Ke=new Rt(ut),s}Ue(t,n){if(!this.je(t))return;const r=this.st(t,n.key)?2:0;this.ze(t).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(t))}We(t,n,r){if(!this.je(t))return;const s=this.ze(t);this.st(t,n)?s.Me(n,1):s.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(t)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(t){this.ke.delete(t)}Ze(t){const n=this.ze(t).ve();return this.Be.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let n=this.ke.get(t);return n||(n=new Ch,this.ke.set(t,n)),n}ot(t){let n=this.Qe.get(t);return n||(n=new $t(ut),this.Qe=this.Qe.insert(t,n)),n}je(t){const n=this.Ye(t)!==null;return n||V("WatchChangeAggregator","Detected inactive target",t),n}Ye(t){const n=this.ke.get(t);return n&&n.be?null:this.Be._t(t)}He(t){this.ke.set(t,new Ch),this.Be.getRemoteKeysForTarget(t).forEach(n=>{this.We(t,n,null)})}st(t,n){return this.Be.getRemoteKeysForTarget(t).has(n)}}function bh(){return new Rt(j.comparator)}function Ph(){return new Rt(j.comparator)}const j0={asc:"ASCENDING",desc:"DESCENDING"},q0={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},z0={and:"AND",or:"OR"};class H0{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Wa(e,t){return e.useProto3Json||vo(t)?t:{value:t}}function K0(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function G0(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function gr(e){return bt(!!e),G.fromTimestamp(function(n){const r=mn(n);return new oe(r.seconds,r.nanos)}(e))}function W0(e,t){return Qa(e,t).canonicalString()}function Qa(e,t){const n=function(s){return new Tt(["projects",s.projectId,"databases",s.database])}(e).child("documents");return t===void 0?n:n.child(t)}function dg(e){const t=Tt.fromString(e);return bt(yg(t)),t}function ea(e,t){const n=dg(t);if(n.get(1)!==e.databaseId.projectId)throw new U(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new U(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new j(gg(n))}function pg(e,t){return W0(e.databaseId,t)}function Q0(e){const t=dg(e);return t.length===4?Tt.emptyPath():gg(t)}function Vh(e){return new Tt(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function gg(e){return bt(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Y0(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Y()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(bt(u===void 0||typeof u=="string"),Jt.fromBase64String(u||"")):(bt(u===void 0||u instanceof Uint8Array),Jt.fromUint8Array(u||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(l){const u=l.code===void 0?b.UNKNOWN:ug(l.code);return new U(u,l.message||"")}(o);n=new fg(r,s,i,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=ea(e,r.document.name),i=gr(r.document.updateTime),o=r.document.createTime?gr(r.document.createTime):G.min(),a=new Ve({mapValue:{fields:r.document.fields}}),c=Gt.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new hi(l,u,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=ea(e,r.document),i=r.readTime?gr(r.readTime):G.min(),o=Gt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new hi([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=ea(e,r.document),i=r.removedTargetIds||[];n=new hi([],i,s,null)}else{if(!("filter"in t))return Y();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new F0(s,i),a=r.targetId;n=new hg(a,o)}}return n}function J0(e,t){return{documents:[pg(e,t.path)]}}function X0(e,t){const n={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=pg(e,s);const i=function(l){if(l.length!==0)return _g(Be.create(l,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const o=function(l){if(l.length!==0)return l.map(u=>function(f){return{field:ir(f.field),direction:eA(f.dir)}}(u))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Wa(e,t.limit);return a!==null&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(t.endAt)),{ut:n,parent:s}}function Z0(e){let t=Q0(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){bt(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:t=t.child(u.collectionId)}let i=[];n.where&&(i=function(h){const f=mg(h);return f instanceof Be&&Jp(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(f=>function(w){return new Oi(or(w.field),function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(w.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,vo(f)?null:f}(n.limit));let c=null;n.startAt&&(c=function(h){const f=!!h.before,g=h.values||[];return new xi(g,f)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const f=!h.before,g=h.values||[];return new xi(g,f)}(n.endAt)),y0(t,s,o,i,a,"F",c,l)}function tA(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function mg(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=or(n.unaryFilter.field);return Dt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=or(n.unaryFilter.field);return Dt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=or(n.unaryFilter.field);return Dt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=or(n.unaryFilter.field);return Dt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(e):e.fieldFilter!==void 0?function(n){return Dt.create(or(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return Be.create(n.compositeFilter.filters.map(r=>mg(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Y()}}(n.compositeFilter.op))}(e):Y()}function eA(e){return j0[e]}function nA(e){return q0[e]}function rA(e){return z0[e]}function ir(e){return{fieldPath:e.canonicalString()}}function or(e){return te.fromServerFormat(e.fieldPath)}function _g(e){return e instanceof Dt?function(n){if(n.op==="=="){if(mh(n.value))return{unaryFilter:{field:ir(n.field),op:"IS_NAN"}};if(gh(n.value))return{unaryFilter:{field:ir(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(mh(n.value))return{unaryFilter:{field:ir(n.field),op:"IS_NOT_NAN"}};if(gh(n.value))return{unaryFilter:{field:ir(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ir(n.field),op:nA(n.op),value:n.value}}}(e):e instanceof Be?function(n){const r=n.getFilters().map(s=>_g(s));return r.length===1?r[0]:{compositeFilter:{op:rA(n.op),filters:r}}}(e):Y()}function yg(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(t,n,r,s,i=G.min(),o=G.min(),a=Jt.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(t){return new rn(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new rn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new rn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new rn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{constructor(t){this.ct=t}}function iA(e){const t=Z0({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Ha(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(){this._n=new aA}addToCollectionParentIndex(t,n){return this._n.add(n),E.resolve()}getCollectionParents(t,n){return E.resolve(this._n.getEntries(n))}addFieldIndex(t,n){return E.resolve()}deleteFieldIndex(t,n){return E.resolve()}deleteAllFieldIndexes(t){return E.resolve()}createTargetIndexes(t,n){return E.resolve()}getDocumentsMatchingTarget(t,n){return E.resolve(null)}getIndexType(t,n){return E.resolve(0)}getFieldIndexes(t,n){return E.resolve([])}getNextCollectionGroupToUpdate(t){return E.resolve(null)}getMinOffset(t,n){return E.resolve(gn.min())}getMinOffsetFromCollectionGroup(t,n){return E.resolve(gn.min())}updateCollectionGroup(t,n,r){return E.resolve()}updateIndexEntries(t,n){return E.resolve()}}class aA{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n]||new $t(Tt.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(t){return(this.index[t]||new $t(Tt.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new Sr(0)}static Ln(){return new Sr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(){this.changes=new Dr(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Gt.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?E.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{constructor(t,n,r,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,n))).next(s=>(r!==null&&rs(r.mutation,s,nn.empty(),oe.now()),s))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,st()).next(()=>r))}getLocalViewOfDocuments(t,n,r=st()){const s=kn();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,r).next(i=>{let o=jr();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=kn();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,st()))}populateOverlays(t,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,s){let i=_n();const o=ns(),a=function(){return ns()}();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof Ro)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),rs(u.mutation,l,u.mutation.getFieldMask(),oe.now())):o.set(l.key,nn.empty())}),this.recalculateAndSaveOverlays(t,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new lA(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const r=ns();let s=new Rt((o,a)=>o-a),i=st();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||nn.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||st()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=sg();u.forEach(f=>{if(!i.has(f)){const g=cg(n.get(f),r.get(f));g!==null&&h.set(f,g),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,l,h))}return E.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,s){return function(o){return j.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):v0(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,s):this.getDocumentsMatchingCollectionQuery(t,n,r,s)}getNextDocuments(t,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,s-i.size):E.resolve(kn());let a=-1,c=i;return o.next(l=>E.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?E.resolve():this.remoteDocumentCache.getEntry(t,u).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(t,l,i)).next(()=>this.computeViews(t,c,l,st())).next(u=>({batchId:a,changes:A0(u)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new j(n)).next(r=>{let s=jr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,n,r,s){const i=n.collectionGroup;let o=jr();return this.indexManager.getCollectionParents(t,i).next(a=>E.forEach(a,c=>{const l=function(h,f){return new wo(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(t,l,r,s).next(u=>{u.forEach((h,f)=>{o=o.insert(h,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i,s))).next(o=>{i.forEach((c,l)=>{const u=l.getKey();o.get(u)===null&&(o=o.insert(u,Gt.newInvalidDocument(u)))});let a=jr();return o.forEach((c,l)=>{const u=i.get(c);u!==void 0&&rs(u.mutation,l,nn.empty(),oe.now()),Io(n,l)&&(a=a.insert(c,l))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,n){return E.resolve(this.cr.get(n))}saveBundleMetadata(t,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:gr(s.createTime)}}(n)),E.resolve()}getNamedQuery(t,n){return E.resolve(this.lr.get(n))}saveNamedQuery(t,n){return this.lr.set(n.name,function(s){return{name:s.name,query:iA(s.bundledQuery),readTime:gr(s.readTime)}}(n)),E.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fA{constructor(){this.overlays=new Rt(j.comparator),this.hr=new Map}getOverlay(t,n){return E.resolve(this.overlays.get(n))}getOverlays(t,n){const r=kn();return E.forEach(n,s=>this.getOverlay(t,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((s,i)=>{this.ht(t,n,i)}),E.resolve()}removeOverlaysForBatchId(t,n,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),E.resolve()}getOverlaysForCollection(t,n,r){const s=kn(),i=n.length+1,o=new j(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return E.resolve(s)}getOverlaysForCollectionGroup(t,n,r,s){let i=new Rt((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=kn(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=kn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return E.resolve(a)}ht(t,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new L0(n,r));let i=this.hr.get(n);i===void 0&&(i=st(),this.hr.set(n,i)),this.hr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(){this.Pr=new $t(Nt.Ir),this.Tr=new $t(Nt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,n){const r=new Nt(t,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.Ar(new Nt(t,n))}Rr(t,n){t.forEach(r=>this.removeReference(r,n))}Vr(t){const n=new j(new Tt([])),r=new Nt(n,t),s=new Nt(n,t+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const n=new j(new Tt([])),r=new Nt(n,t),s=new Nt(n,t+1);let i=st();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new Nt(t,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class Nt{constructor(t,n){this.key=t,this.pr=n}static Ir(t,n){return j.comparator(t.key,n.key)||ut(t.pr,n.pr)}static Er(t,n){return ut(t.pr,n.pr)||j.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new $t(Nt.Ir)}checkEmpty(t){return E.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new M0(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.wr=this.wr.add(new Nt(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return E.resolve(o)}lookupMutationBatch(t,n){return E.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,s=this.br(r),i=s<0?0:s;return E.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return E.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return E.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new Nt(n,0),s=new Nt(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{const a=this.Sr(o.pr);i.push(a)}),E.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new $t(ut);return n.forEach(s=>{const i=new Nt(s,0),o=new Nt(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],a=>{r=r.add(a.pr)})}),E.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,s=r.length+1;let i=r;j.isDocumentKey(i)||(i=i.child(""));const o=new Nt(new j(i),0);let a=new $t(ut);return this.wr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.pr)),!0)},o),E.resolve(this.Dr(a))}Dr(t){const n=[];return t.forEach(r=>{const s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(t,n){bt(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return E.forEach(n.mutations,s=>{const i=new Nt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,n){const r=new Nt(n,0),s=this.wr.firstAfterOrEqual(r);return E.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,E.resolve()}Cr(t,n){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const n=this.br(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{constructor(t){this.vr=t,this.docs=function(){return new Rt(j.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return E.resolve(r?r.document.mutableCopy():Gt.newInvalidDocument(n))}getEntries(t,n){let r=_n();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Gt.newInvalidDocument(s))}),E.resolve(r)}getDocumentsMatchingQuery(t,n,r,s){let i=_n();const o=n.path,a=new j(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||ZI(XI(u),r)<=0||(s.has(u.key)||Io(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return E.resolve(i)}getAllFromCollectionGroup(t,n,r,s){Y()}Fr(t,n){return E.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new gA(this)}getSize(t){return E.resolve(this.size)}}class gA extends cA{constructor(t){super(),this.ar=t}applyChanges(t){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(t,s)):this.ar.removeEntry(r)}),E.waitFor(n)}getFromCache(t,n){return this.ar.getEntry(t,n)}getAllFromCache(t,n){return this.ar.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mA{constructor(t){this.persistence=t,this.Mr=new Dr(n=>ll(n),ul),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.Or=0,this.Nr=new gl,this.targetCount=0,this.Lr=Sr.Nn()}forEachTarget(t,n){return this.Mr.forEach((r,s)=>n(s)),E.resolve()}getLastRemoteSnapshotVersion(t){return E.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return E.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),E.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),E.resolve()}qn(t){this.Mr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Lr=new Sr(n),this.highestTargetId=n),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,n){return this.qn(n),this.targetCount+=1,E.resolve()}updateTargetData(t,n){return this.qn(n),E.resolve()}removeTargetData(t,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,E.resolve()}removeTargets(t,n,r){let s=0;const i=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),s++)}),E.waitFor(i).next(()=>s)}getTargetCount(t){return E.resolve(this.targetCount)}getTargetData(t,n){const r=this.Mr.get(n)||null;return E.resolve(r)}addMatchingKeys(t,n,r){return this.Nr.dr(n,r),E.resolve()}removeMatchingKeys(t,n,r){this.Nr.Rr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(t,o))}),E.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.Nr.Vr(n),E.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Nr.gr(n);return E.resolve(r)}containsKey(t,n){return E.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _A{constructor(t,n){this.Br={},this.overlays={},this.kr=new il(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new mA(this),this.indexManager=new oA,this.remoteDocumentCache=function(s){return new pA(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new sA(n),this.$r=new hA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new fA,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Br[t.toKey()];return r||(r=new dA(n,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,n,r){V("MemoryPersistence","Starting transaction:",t);const s=new yA(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(t,n){return E.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,n)))}}class yA extends e0{constructor(t){super(),this.currentSequenceNumber=t}}class ml{constructor(t){this.persistence=t,this.zr=new gl,this.jr=null}static Hr(t){return new ml(t)}get Jr(){if(this.jr)return this.jr;throw Y()}addReference(t,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),E.resolve()}removeReference(t,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),E.resolve()}markPotentiallyOrphaned(t,n){return this.Jr.add(n.toString()),E.resolve()}removeTarget(t,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(t,n))}Ur(){this.jr=new Set}Wr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return E.forEach(this.Jr,r=>{const s=j.fromPath(r);return this.Yr(t,s).next(i=>{i||n.removeEntry(s,G.min())})}).next(()=>(this.jr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Yr(t,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(t){return 0}Yr(t,n){return E.or([()=>E.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Gr(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(t,n,r,s){this.targetId=t,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(t,n){let r=st(),s=st();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new _l(t,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return eE()?8:Nn.v(wi())>0?6:4}()}initialize(t,n){this.zi=t,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(t,n,r,s){const i={result:null};return this.ji(t,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Hi(t,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new vA;return this.Ji(t,n,o).next(a=>{if(i.result=a,this.Ui)return this.Yi(t,n,o,a.size)})}).next(()=>i.result)}Yi(t,n,r,s){return r.documentReadCount<this.Wi?(Fr()<=rt.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",sr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),E.resolve()):(Fr()<=rt.DEBUG&&V("QueryEngine","Query:",sr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(Fr()<=rt.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",sr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,ke(n))):E.resolve())}ji(t,n){if(Eh(n))return E.resolve(null);let r=ke(n);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Ha(n,null,"F"),r=ke(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(i=>{const o=st(...i);return this.zi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(c=>{const l=this.Zi(n,a);return this.Xi(n,l,o,c.readTime)?this.ji(t,Ha(n,null,"F")):this.es(t,l,n,c)}))})))}Hi(t,n,r,s){return Eh(n)||s.isEqual(G.min())?E.resolve(null):this.zi.getDocuments(t,r).next(i=>{const o=this.Zi(n,i);return this.Xi(n,o,r,s)?E.resolve(null):(Fr()<=rt.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),sr(n)),this.es(t,o,n,JI(s,-1)).next(a=>a))})}Zi(t,n){let r=new $t(ng(t));return n.forEach((s,i)=>{Io(t,i)&&(r=r.add(i))}),r}Xi(t,n,r,s){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(t,n,r){return Fr()<=rt.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",sr(n)),this.zi.getDocumentsMatchingQuery(t,n,gn.min(),r)}es(t,n,r,s){return this.zi.getDocumentsMatchingQuery(t,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(t,n,r,s){this.persistence=t,this.ts=n,this.serializer=s,this.ns=new Rt(ut),this.rs=new Dr(i=>ll(i),ul),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new uA(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.ns))}}function TA(e,t,n,r){return new wA(e,t,n,r)}async function vg(e,t){const n=ot(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n._s(t),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=st();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({us:l,removedBatchIds:o,addedBatchIds:a}))})})}function Eg(e){const t=ot(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Qr.getLastRemoteSnapshotVersion(n))}function IA(e,t){const n=ot(e),r=t.snapshotVersion;let s=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.os.newChangeBuffer({trackRemovals:!0});s=n.ns;const a=[];t.targetChanges.forEach((u,h)=>{const f=s.get(h);if(!f)return;a.push(n.Qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(i,u.addedDocuments,h)));let g=f.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(h)!==null?g=g.withResumeToken(Jt.EMPTY_BYTE_STRING,G.min()).withLastLimboFreeSnapshotVersion(G.min()):u.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(u.resumeToken,r)),s=s.insert(h,g),function(R,S,O){return R.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=3e8?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(f,g,u)&&a.push(n.Qr.updateTargetData(i,g))});let c=_n(),l=st();if(t.documentUpdates.forEach(u=>{t.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(AA(i,o,t.documentUpdates).next(u=>{c=u.cs,l=u.ls})),!r.isEqual(G.min())){const u=n.Qr.getLastRemoteSnapshotVersion(i).next(h=>n.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return E.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.ns=s,i))}function AA(e,t,n){let r=st(),s=st();return n.forEach(i=>r=r.add(i)),t.getEntries(e,r).next(i=>{let o=_n();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(G.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):V("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{cs:o,ls:s}})}function RA(e,t){const n=ot(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Qr.getTargetData(r,t).next(i=>i?(s=i,E.resolve(s)):n.Qr.allocateTargetId(r).next(o=>(s=new rn(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(t,r.targetId)),r})}async function Ya(e,t,n){const r=ot(e),s=r.ns.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ms(o))throw o;V("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.ns=r.ns.remove(t),r.rs.delete(s.target)}function Dh(e,t,n){const r=ot(e);let s=G.min(),i=st();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,u){const h=ot(c),f=h.rs.get(u);return f!==void 0?E.resolve(h.ns.get(f)):h.Qr.getTargetData(l,u)}(r,o,ke(t)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.ts.getDocumentsMatchingQuery(o,t,n?s:G.min(),n?i:st())).next(a=>(SA(r,w0(t),a),{documents:a,hs:i})))}function SA(e,t,n){let r=e.ss.get(t)||G.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),e.ss.set(t,r)}class xh{constructor(){this.activeTargetIds=C0()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class CA{constructor(){this.no=new xh,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,n,r){this.ro[t]=n}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new xh,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bA{io(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ei=null;function na(){return ei===null?ei=function(){return 268435456+Math.round(2147483648*Math.random())}():ei++,"0x"+ei.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}onMessage(t){this.Ao=t}close(){this.ho()}send(t){this.lo(t)}Ro(){this.Io()}Vo(t){this.Eo(t)}mo(t){this.Ao(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ht="WebChannelConnection";class DA extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${s}/databases/${i}`,this.yo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get wo(){return!1}So(n,r,s,i,o){const a=na(),c=this.bo(n,r.toUriEncodedString());V("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(l,i,o),this.Co(n,c,l,s).then(u=>(V("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Tr("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}vo(n,r,s,i,o,a){return this.So(n,r,s,i,o)}Do(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Vr}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}bo(n,r){const s=PA[n];return`${this.fo}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Co(t,n,r,s){const i=na();return new Promise((o,a)=>{const c=new UI;c.setWithCredentials(!0),c.listenOnce(FI.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Zo.NO_ERROR:const u=c.getResponseJson();V(Ht,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(u)),o(u);break;case Zo.TIMEOUT:V(Ht,`RPC '${t}' ${i} timed out`),a(new U(b.DEADLINE_EXCEEDED,"Request time out"));break;case Zo.HTTP_ERROR:const h=c.getStatus();if(V(Ht,`RPC '${t}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const g=f==null?void 0:f.error;if(g&&g.status&&g.message){const w=function(S){const O=S.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(O)>=0?O:b.UNKNOWN}(g.status);a(new U(w,g.message))}else a(new U(b.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new U(b.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{V(Ht,`RPC '${t}' ${i} completed.`)}});const l=JSON.stringify(s);V(Ht,`RPC '${t}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}Fo(t,n,r){const s=na(),i=[this.fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=MI(),a=LI(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");V(Ht,`Creating RPC '${t}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let f=!1,g=!1;const w=new VA({lo:S=>{g?V(Ht,`Not sending because RPC '${t}' stream ${s} is closed:`,S):(f||(V(Ht,`Opening RPC '${t}' stream ${s} transport.`),h.open(),f=!0),V(Ht,`RPC '${t}' stream ${s} sending:`,S),h.send(S))},ho:()=>h.close()}),R=(S,O,M)=>{S.listen(O,B=>{try{M(B)}catch(W){setTimeout(()=>{throw W},0)}})};return R(h,Xs.EventType.OPEN,()=>{g||V(Ht,`RPC '${t}' stream ${s} transport opened.`)}),R(h,Xs.EventType.CLOSE,()=>{g||(g=!0,V(Ht,`RPC '${t}' stream ${s} transport closed`),w.Vo())}),R(h,Xs.EventType.ERROR,S=>{g||(g=!0,Tr(Ht,`RPC '${t}' stream ${s} transport errored:`,S),w.Vo(new U(b.UNAVAILABLE,"The operation could not be completed")))}),R(h,Xs.EventType.MESSAGE,S=>{var O;if(!g){const M=S.data[0];bt(!!M);const B=M,W=B.error||((O=B[0])===null||O===void 0?void 0:O.error);if(W){V(Ht,`RPC '${t}' stream ${s} received error:`,W);const J=W.status;let q=function(Z){const vt=St[Z];if(vt!==void 0)return ug(vt)}(J),gt=W.message;q===void 0&&(q=b.INTERNAL,gt="Unknown error status: "+J+" with message "+W.message),g=!0,w.Vo(new U(q,gt)),h.close()}else V(Ht,`RPC '${t}' stream ${s} received:`,M),w.mo(M)}}),R(a,BI.STAT_EVENT,S=>{S.stat===lh.PROXY?V(Ht,`RPC '${t}' stream ${s} detected buffering proxy`):S.stat===lh.NOPROXY&&V(Ht,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{w.Ro()},0),w}}function ra(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wg(e){return new H0(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(t,n,r=1e3,s=1.5,i=6e4){this.oi=t,this.timerId=n,this.Mo=r,this.xo=s,this.Oo=i,this.No=0,this.Lo=null,this.Bo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(t){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Bo),s=Math.max(0,n-r);s>0&&V("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Bo=Date.now(),t())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xA{constructor(t,n,r,s,i,o,a,c){this.oi=t,this.$o=r,this.Uo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new Tg(t,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(t){this.n_(),this.stream.send(t)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(t,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,t!==4?this.jo.reset():n&&n.code===b.RESOURCE_EXHAUSTED?(Le(n.toString()),Le("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.To(n)}i_(){}auth(){this.state=1;const t=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Wo===n&&this.o_(r,s)},r=>{t(()=>{const s=new U(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(s)})})}o_(t,n){const r=this.s_(this.Wo);this.stream=this.a_(t,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(s=>{r(()=>this.__(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(t){return V("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}s_(t){return n=>{this.oi.enqueueAndForget(()=>this.Wo===t?n():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class OA extends xA{constructor(t,n,r,s,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}a_(t,n){return this.connection.Fo("Listen",t,n)}onMessage(t){this.jo.reset();const n=Y0(this.serializer,t),r=function(i){if(!("targetChange"in i))return G.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?G.min():o.readTime?gr(o.readTime):G.min()}(t);return this.listener.u_(n,r)}c_(t){const n={};n.database=Vh(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=za(c)?{documents:J0(i,c)}:{query:X0(i,c).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=G0(i,o.resumeToken);const l=Wa(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(G.min())>0){a.readTime=K0(i,o.snapshotVersion.toTimestamp());const l=Wa(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,t);const r=tA(this.serializer,t);r&&(n.labels=r),this.t_(n)}l_(t){const n={};n.database=Vh(this.serializer),n.removeTarget=t,this.t_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA extends class{}{constructor(t,n,r,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.A_=!1}R_(){if(this.A_)throw new U(b.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,n,r,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.So(t,Qa(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new U(b.UNKNOWN,i.toString())})}vo(t,n,r,s,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(t,Qa(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new U(b.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class kA{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(t){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.y_("Offline")))}set(t){this.b_(),this.m_=0,t==="Online"&&(this.g_=!1),this.y_(t)}y_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}w_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(Le(n),this.g_=!1):V("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{constructor(t,n,r,s,i){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=i,this.M_.io(o=>{r.enqueueAndForget(async()=>{Bs(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=ot(c);l.v_.add(4),await Fs(l),l.x_.set("Unknown"),l.v_.delete(4),await Co(l)}(this))})}),this.x_=new kA(r,s)}}async function Co(e){if(Bs(e))for(const t of e.F_)await t(!0)}async function Fs(e){for(const t of e.F_)await t(!1)}function Ig(e,t){const n=ot(e);n.C_.has(t.targetId)||(n.C_.set(t.targetId,t),wl(n)?El(n):xr(n).Jo()&&vl(n,t))}function yl(e,t){const n=ot(e),r=xr(n);n.C_.delete(t),r.Jo()&&Ag(n,t),n.C_.size===0&&(r.Jo()?r.Xo():Bs(n)&&n.x_.set("Unknown"))}function vl(e,t){if(e.O_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(G.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}xr(e).c_(t)}function Ag(e,t){e.O_.Oe(t),xr(e).l_(t)}function El(e){e.O_=new $0({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>e.C_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),xr(e).start(),e.x_.p_()}function wl(e){return Bs(e)&&!xr(e).Ho()&&e.C_.size>0}function Bs(e){return ot(e).v_.size===0}function Rg(e){e.O_=void 0}async function LA(e){e.C_.forEach((t,n)=>{vl(e,t)})}async function FA(e,t){Rg(e),wl(e)?(e.x_.S_(t),El(e)):e.x_.set("Unknown")}async function BA(e,t,n){if(e.x_.set("Online"),t instanceof fg&&t.state===2&&t.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.C_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.C_.delete(a),s.O_.removeTarget(a))}(e,t)}catch(r){V("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Nh(e,r)}else if(t instanceof hi?e.O_.$e(t):t instanceof hg?e.O_.Je(t):e.O_.Ge(t),!n.isEqual(G.min()))try{const r=await Eg(e.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.O_.it(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.C_.get(l);u&&i.C_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.C_.get(c);if(!u)return;i.C_.set(c,u.withResumeToken(Jt.EMPTY_BYTE_STRING,u.snapshotVersion)),Ag(i,c);const h=new rn(u.target,c,l,u.sequenceNumber);vl(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(r){V("RemoteStore","Failed to raise snapshot:",r),await Nh(e,r)}}async function Nh(e,t,n){if(!Ms(t))throw t;e.v_.add(1),await Fs(e),e.x_.set("Offline"),n||(n=()=>Eg(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await n(),e.v_.delete(1),await Co(e)})}async function kh(e,t){const n=ot(e);n.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const r=Bs(n);n.v_.add(3),await Fs(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.v_.delete(3),await Co(n)}async function UA(e,t){const n=ot(e);t?(n.v_.delete(2),await Co(n)):t||(n.v_.add(2),await Fs(n),n.x_.set("Unknown"))}function xr(e){return e.N_||(e.N_=function(n,r,s){const i=ot(n);return i.R_(),new OA(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{Po:LA.bind(null,e),To:FA.bind(null,e),u_:BA.bind(null,e)}),e.F_.push(async t=>{t?(e.N_.Zo(),wl(e)?El(e):e.x_.set("Unknown")):(await e.N_.stop(),Rg(e))})),e.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(t,n,r,s,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new hn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,s,i){const o=Date.now()+r,a=new Tl(t,n,o,s,i);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(b.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Sg(e,t){if(Le("AsyncQueue",`${t}: ${e}`),Ms(e))return new U(b.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(t){this.comparator=t?(n,r)=>t(n,r)||j.comparator(n.key,r.key):(n,r)=>j.comparator(n.key,r.key),this.keyedMap=jr(),this.sortedSet=new Rt(this.comparator)}static emptySet(t){return new mr(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof mr)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new mr;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(){this.B_=new Rt(j.comparator)}track(t){const n=t.doc.key,r=this.B_.get(n);r?t.type!==0&&r.type===3?this.B_=this.B_.insert(n,t):t.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.B_=this.B_.remove(n):t.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:t.doc}):Y():this.B_=this.B_.insert(n,t)}k_(){const t=[];return this.B_.inorderTraversal((n,r)=>{t.push(r)}),t}}class Cr{constructor(t,n,r,s,i,o,a,c,l){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(t,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Cr(t,n,mr.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&To(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{constructor(){this.q_=void 0,this.Q_=[]}K_(){return this.Q_.some(t=>t.U_())}}class jA{constructor(){this.queries=new Dr(t=>eg(t),To),this.onlineState="Unknown",this.W_=new Set}}async function qA(e,t){const n=ot(e);let r=3;const s=t.query;let i=n.queries.get(s);i?!i.K_()&&t.U_()&&(r=2):(i=new $A,r=t.U_()?0:1);try{switch(r){case 0:i.q_=await n.onListen(s,!0);break;case 1:i.q_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=Sg(o,`Initialization of query '${sr(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,i),i.Q_.push(t),t.G_(n.onlineState),i.q_&&t.z_(i.q_)&&Il(n)}async function zA(e,t){const n=ot(e),r=t.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Q_.indexOf(t);o>=0&&(i.Q_.splice(o,1),i.Q_.length===0?s=t.U_()?0:1:!i.K_()&&t.U_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function HA(e,t){const n=ot(e);let r=!1;for(const s of t){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.Q_)a.z_(s)&&(r=!0);o.q_=s}}r&&Il(n)}function KA(e,t,n){const r=ot(e),s=r.queries.get(t);if(s)for(const i of s.Q_)i.onError(n);r.queries.delete(t)}function Il(e){e.W_.forEach(t=>{t.next()})}var Ja,Lh;(Lh=Ja||(Ja={})).j_="default",Lh.Cache="cache";class GA{constructor(t,n,r){this.query=t,this.H_=n,this.J_=!1,this.Y_=null,this.onlineState="Unknown",this.options=r||{}}z_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Cr(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.J_?this.Z_(t)&&(this.H_.next(t),n=!0):this.X_(t,this.onlineState)&&(this.ea(t),n=!0),this.Y_=t,n}onError(t){this.H_.error(t)}G_(t){this.onlineState=t;let n=!1;return this.Y_&&!this.J_&&this.X_(this.Y_,t)&&(this.ea(this.Y_),n=!0),n}X_(t,n){if(!t.fromCache||!this.U_())return!0;const r=n!=="Offline";return(!this.options.ta||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Z_(t){if(t.docChanges.length>0)return!0;const n=this.Y_&&this.Y_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ea(t){t=Cr.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.J_=!0,this.H_.next(t)}U_(){return this.options.source!==Ja.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(t){this.key=t}}class bg{constructor(t){this.key=t}}class WA{constructor(t,n){this.query=t,this.ua=n,this.ca=null,this.hasCachedResults=!1,this.current=!1,this.la=st(),this.mutatedKeys=st(),this.ha=ng(t),this.Pa=new mr(this.ha)}get Ia(){return this.ua}Ta(t,n){const r=n?n.Ea:new Mh,s=n?n.Pa:this.Pa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((u,h)=>{const f=s.get(u),g=Io(this.query,h)?h:null,w=!!f&&this.mutatedKeys.has(f.key),R=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let S=!1;f&&g?f.data.isEqual(g.data)?w!==R&&(r.track({type:3,doc:g}),S=!0):this.da(f,g)||(r.track({type:2,doc:g}),S=!0,(c&&this.ha(g,c)>0||l&&this.ha(g,l)<0)&&(a=!0)):!f&&g?(r.track({type:0,doc:g}),S=!0):f&&!g&&(r.track({type:1,doc:f}),S=!0,(c||l)&&(a=!0)),S&&(g?(o=o.add(g),i=R?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{Pa:o,Ea:r,Xi:a,mutatedKeys:i}}da(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r,s){const i=this.Pa;this.Pa=t.Pa,this.mutatedKeys=t.mutatedKeys;const o=t.Ea.k_();o.sort((u,h)=>function(g,w){const R=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return R(g)-R(w)}(u.type,h.type)||this.ha(u.doc,h.doc)),this.Aa(r),s=s!=null&&s;const a=n&&!s?this.Ra():[],c=this.la.size===0&&this.current&&!s?1:0,l=c!==this.ca;return this.ca=c,o.length!==0||l?{snapshot:new Cr(this.query,t.Pa,i,o,t.mutatedKeys,c===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Va:a}:{Va:a}}G_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Pa:this.Pa,Ea:new Mh,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{Va:[]}}ma(t){return!this.ua.has(t)&&!!this.Pa.has(t)&&!this.Pa.get(t).hasLocalMutations}Aa(t){t&&(t.addedDocuments.forEach(n=>this.ua=this.ua.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.ua=this.ua.delete(n)),this.current=t.current)}Ra(){if(!this.current)return[];const t=this.la;this.la=st(),this.Pa.forEach(r=>{this.ma(r.key)&&(this.la=this.la.add(r.key))});const n=[];return t.forEach(r=>{this.la.has(r)||n.push(new bg(r))}),this.la.forEach(r=>{t.has(r)||n.push(new Cg(r))}),n}fa(t){this.ua=t.hs,this.la=st();const n=this.Ta(t.documents);return this.applyChanges(n,!0)}ga(){return Cr.fromInitialDocuments(this.query,this.Pa,this.mutatedKeys,this.ca===0,this.hasCachedResults)}}class QA{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class YA{constructor(t){this.key=t,this.pa=!1}}class JA{constructor(t,n,r,s,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.ya={},this.wa=new Dr(a=>eg(a),To),this.Sa=new Map,this.ba=new Set,this.Da=new Rt(j.comparator),this.Ca=new Map,this.va=new gl,this.Fa={},this.Ma=new Map,this.xa=Sr.Ln(),this.onlineState="Unknown",this.Oa=void 0}get isPrimaryClient(){return this.Oa===!0}}async function XA(e,t,n=!0){const r=Og(e);let s;const i=r.wa.get(t);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ga()):s=await Pg(r,t,n,!0),s}async function ZA(e,t){const n=Og(e);await Pg(n,t,!0,!1)}async function Pg(e,t,n,r){const s=await RA(e.localStore,ke(t)),i=s.targetId,o=n?e.sharedClientState.addLocalQueryTarget(i):"not-current";let a;return r&&(a=await tR(e,t,i,o==="current",s.resumeToken)),e.isPrimaryClient&&n&&Ig(e.remoteStore,s),a}async function tR(e,t,n,r,s){e.Na=(h,f,g)=>async function(R,S,O,M){let B=S.view.Ta(O);B.Xi&&(B=await Dh(R.localStore,S.query,!1).then(({documents:gt})=>S.view.Ta(gt,B)));const W=M&&M.targetChanges.get(S.targetId),J=M&&M.targetMismatches.get(S.targetId)!=null,q=S.view.applyChanges(B,R.isPrimaryClient,W,J);return Bh(R,S.targetId,q.Va),q.snapshot}(e,h,f,g);const i=await Dh(e.localStore,t,!0),o=new WA(t,i.hs),a=o.Ta(i.documents),c=Ls.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",s),l=o.applyChanges(a,e.isPrimaryClient,c);Bh(e,n,l.Va);const u=new QA(t,n,o);return e.wa.set(t,u),e.Sa.has(n)?e.Sa.get(n).push(t):e.Sa.set(n,[t]),l.snapshot}async function eR(e,t,n){const r=ot(e),s=r.wa.get(t),i=r.Sa.get(s.targetId);if(i.length>1)return r.Sa.set(s.targetId,i.filter(o=>!To(o,t))),void r.wa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ya(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&yl(r.remoteStore,s.targetId),Xa(r,s.targetId)}).catch(nl)):(Xa(r,s.targetId),await Ya(r.localStore,s.targetId,!0))}async function nR(e,t){const n=ot(e),r=n.wa.get(t),s=n.Sa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),yl(n.remoteStore,r.targetId))}async function Vg(e,t){const n=ot(e);try{const r=await IA(n.localStore,t);t.targetChanges.forEach((s,i)=>{const o=n.Ca.get(i);o&&(bt(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.pa=!0:s.modifiedDocuments.size>0?bt(o.pa):s.removedDocuments.size>0&&(bt(o.pa),o.pa=!1))}),await xg(n,r,t)}catch(r){await nl(r)}}function Fh(e,t,n){const r=ot(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.wa.forEach((i,o)=>{const a=o.view.G_(t);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=ot(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const f of h.Q_)f.G_(a)&&(l=!0)}),l&&Il(c)}(r.eventManager,t),s.length&&r.ya.u_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function rR(e,t,n){const r=ot(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.Ca.get(t),i=s&&s.key;if(i){let o=new Rt(j.comparator);o=o.insert(i,Gt.newNoDocument(i,G.min()));const a=st().add(i),c=new So(G.min(),new Map,new Rt(ut),o,a);await Vg(r,c),r.Da=r.Da.remove(i),r.Ca.delete(t),Al(r)}else await Ya(r.localStore,t,!1).then(()=>Xa(r,t,n)).catch(nl)}function Xa(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Sa.get(t))e.wa.delete(r),n&&e.ya.La(r,n);e.Sa.delete(t),e.isPrimaryClient&&e.va.Vr(t).forEach(r=>{e.va.containsKey(r)||Dg(e,r)})}function Dg(e,t){e.ba.delete(t.path.canonicalString());const n=e.Da.get(t);n!==null&&(yl(e.remoteStore,n),e.Da=e.Da.remove(t),e.Ca.delete(n),Al(e))}function Bh(e,t,n){for(const r of n)r instanceof Cg?(e.va.addReference(r.key,t),sR(e,r)):r instanceof bg?(V("SyncEngine","Document no longer in limbo: "+r.key),e.va.removeReference(r.key,t),e.va.containsKey(r.key)||Dg(e,r.key)):Y()}function sR(e,t){const n=t.key,r=n.path.canonicalString();e.Da.get(n)||e.ba.has(r)||(V("SyncEngine","New document in limbo: "+n),e.ba.add(r),Al(e))}function Al(e){for(;e.ba.size>0&&e.Da.size<e.maxConcurrentLimboResolutions;){const t=e.ba.values().next().value;e.ba.delete(t);const n=new j(Tt.fromString(t)),r=e.xa.next();e.Ca.set(r,new YA(n)),e.Da=e.Da.insert(n,r),Ig(e.remoteStore,new rn(ke(hl(n.path)),r,"TargetPurposeLimboResolution",il._e))}}async function xg(e,t,n){const r=ot(e),s=[],i=[],o=[];r.wa.isEmpty()||(r.wa.forEach((a,c)=>{o.push(r.Na(c,t,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=_l.Ki(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.ya.u_(s),await async function(c,l){const u=ot(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>E.forEach(l,f=>E.forEach(f.qi,g=>u.persistence.referenceDelegate.addReference(h,f.targetId,g)).next(()=>E.forEach(f.Qi,g=>u.persistence.referenceDelegate.removeReference(h,f.targetId,g)))))}catch(h){if(!Ms(h))throw h;V("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const f=h.targetId;if(!h.fromCache){const g=u.ns.get(f),w=g.snapshotVersion,R=g.withLastLimboFreeSnapshotVersion(w);u.ns=u.ns.insert(f,R)}}}(r.localStore,i))}async function iR(e,t){const n=ot(e);if(!n.currentUser.isEqual(t)){V("SyncEngine","User change. New user:",t.toKey());const r=await vg(n.localStore,t);n.currentUser=t,function(i,o){i.Ma.forEach(a=>{a.forEach(c=>{c.reject(new U(b.CANCELLED,o))})}),i.Ma.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await xg(n,r.us)}}function oR(e,t){const n=ot(e),r=n.Ca.get(t);if(r&&r.pa)return st().add(r.key);{let s=st();const i=n.Sa.get(t);if(!i)return s;for(const o of i){const a=n.wa.get(o);s=s.unionWith(a.view.Ia)}return s}}function Og(e){const t=ot(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Vg.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=oR.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=rR.bind(null,t),t.ya.u_=HA.bind(null,t.eventManager),t.ya.La=KA.bind(null,t.eventManager),t}class Uh{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=wg(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return TA(this.persistence,new EA,t.initialUser,this.serializer)}createPersistence(t){return new _A(ml.Hr,this.serializer)}createSharedClientState(t){return new CA}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class aR{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Fh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=iR.bind(null,this.syncEngine),await UA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new jA}()}createDatastore(t){const n=wg(t.databaseInfo.databaseId),r=function(i){return new DA(i)}(t.databaseInfo);return function(i,o,a,c){return new NA(i,o,a,c)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,s,i,o,a){return new MA(r,s,i,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>Fh(this.syncEngine,n,0),function(){return Oh.D()?new Oh:new bA}())}createSyncEngine(t,n){return function(s,i,o,a,c,l,u){const h=new JA(s,i,o,a,c,l);return u&&(h.Oa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t;await async function(r){const s=ot(r);V("RemoteStore","RemoteStore shutting down."),s.v_.add(5),await Fs(s),s.M_.shutdown(),s.x_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.qa(this.observer.next,t)}error(t){this.observer.error?this.qa(this.observer.error,t):Le("Uncaught Error in snapshot listener:",t.toString())}Qa(){this.muted=!0}qa(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lR{constructor(t,n,r,s){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Kt.UNAUTHENTICATED,this.clientId=Gp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{V("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(V("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new U(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new hn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=Sg(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function sa(e,t){e.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async s=>{r.isEqual(s)||(await vg(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function $h(e,t){e.asyncQueue.verifyOperationInProgress();const n=await hR(e);V("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(r=>kh(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,s)=>kh(t.remoteStore,s)),e._onlineComponents=t}function uR(e){return e.name==="FirebaseError"?e.code===b.FAILED_PRECONDITION||e.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function hR(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){V("FirestoreClient","Using user provided OfflineComponentProvider");try{await sa(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!uR(n))throw n;Tr("Error using user provided cache. Falling back to memory cache: "+n),await sa(e,new Uh)}}else V("FirestoreClient","Using default OfflineComponentProvider"),await sa(e,new Uh);return e._offlineComponents}async function fR(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(V("FirestoreClient","Using user provided OnlineComponentProvider"),await $h(e,e._uninitializedComponentsProvider._online)):(V("FirestoreClient","Using default OnlineComponentProvider"),await $h(e,new aR))),e._onlineComponents}async function dR(e){const t=await fR(e),n=t.eventManager;return n.onListen=XA.bind(null,t.syncEngine),n.onUnlisten=eR.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=ZA.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=nR.bind(null,t.syncEngine),n}function pR(e,t,n={}){const r=new hn;return e.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new cR({next:f=>{o.enqueueAndForget(()=>zA(i,h));const g=f.docs.has(a);!g&&f.fromCache?l.reject(new U(b.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&f.fromCache&&c&&c.source==="server"?l.reject(new U(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new GA(hl(a.path),u,{includeMetadataChanges:!0,ta:!0});return qA(i,h)}(await dR(e),e.asyncQueue,t,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ng(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jh=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gR(e,t,n){if(!n)throw new U(b.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function mR(e,t,n,r){if(t===!0&&r===!0)throw new U(b.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function qh(e){if(!j.isDocumentKey(e))throw new U(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function _R(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":Y()}function Za(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new U(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=_R(e);throw new U(b.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new U(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new U(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}mR("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ng((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new U(b.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new U(b.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new U(b.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Rl{constructor(t,n,r,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new zh({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new U(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new U(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new zh(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new jI;switch(r.type){case"firstParty":return new KI(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new U(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=jh.get(n);r&&(V("ComponentProvider","Removing Datastore"),jh.delete(n),r.terminate())}(this),Promise.resolve()}}function yR(e,t,n,r={}){var s;const i=(e=Za(e,Rl))._getSettings(),o=`${t}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Tr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=Kt.MOCK_USER;else{a=Xv(r.mockUserToken,(s=e._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new U(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Kt(l)}e._authCredentials=new qI(new Kp(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Sl(this.firestore,t,this._query)}}class ze{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Is(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ze(this.firestore,t,this._key)}}class Is extends Sl{constructor(t,n,r){super(t,n,hl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ze(this.firestore,null,new j(t))}withConverter(t){return new Is(this.firestore,t,this._path)}}function vR(e,t,...n){if(e=Rc(e),arguments.length===1&&(t=Gp.newId()),gR("doc","path",t),e instanceof Rl){const r=Tt.fromString(t,...n);return qh(r),new ze(e,null,new j(r))}{if(!(e instanceof ze||e instanceof Is))throw new U(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Tt.fromString(t,...n));return qh(r),new ze(e.firestore,e instanceof Is?e.converter:null,new j(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(){this.nu=Promise.resolve(),this.ru=[],this.iu=!1,this.su=[],this.ou=null,this._u=!1,this.au=!1,this.uu=[],this.jo=new Tg(this,"async_queue_retry"),this.cu=()=>{const n=ra();n&&V("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const t=ra();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.cu)}get isShuttingDown(){return this.iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.lu(),this.hu(t)}enterRestrictedMode(t){if(!this.iu){this.iu=!0,this.au=t||!1;const n=ra();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.cu)}}enqueue(t){if(this.lu(),this.iu)return new Promise(()=>{});const n=new hn;return this.hu(()=>this.iu&&this.au?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.ru.push(t),this.Pu()))}async Pu(){if(this.ru.length!==0){try{await this.ru[0](),this.ru.shift(),this.jo.reset()}catch(t){if(!Ms(t))throw t;V("AsyncQueue","Operation failed with retryable error: "+t)}this.ru.length>0&&this.jo.qo(()=>this.Pu())}}hu(t){const n=this.nu.then(()=>(this._u=!0,t().catch(r=>{this.ou=r,this._u=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Le("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this._u=!1,r))));return this.nu=n,n}enqueueAfterDelay(t,n,r){this.lu(),this.uu.indexOf(t)>-1&&(n=0);const s=Tl.createAndSchedule(this,t,n,r,i=>this.Iu(i));return this.su.push(s),s}lu(){this.ou&&Y()}verifyOperationInProgress(){}async Tu(){let t;do t=this.nu,await t;while(t!==this.nu)}Eu(t){for(const n of this.su)if(n.timerId===t)return!0;return!1}du(t){return this.Tu().then(()=>{this.su.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.su)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Tu()})}Au(t){this.uu.push(t)}Iu(t){const n=this.su.indexOf(t);this.su.splice(n,1)}}class kg extends Rl{constructor(t,n,r,s){super(t,n,r,s),this.type="firestore",this._queue=function(){return new ER}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Mg(this),this._firestoreClient.terminate()}}function wR(e,t){const n=typeof e=="object"?e:yd(),r=typeof e=="string"?e:t||"(default)",s=Cs(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Yv("firestore");i&&yR(s,...i)}return s}function TR(e){return e._firestoreClient||Mg(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Mg(e){var t,n,r;const s=e._freezeSettings(),i=function(a,c,l,u){return new o0(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Ng(u.experimentalLongPollingOptions),u.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,s);e._firestoreClient=new lR(e._authCredentials,e._appCheckCredentials,e._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Mi(Jt.fromBase64String(t))}catch(n){throw new U(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Mi(Jt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new U(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new te(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new U(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new U(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return ut(this._lat,t._lat)||ut(this._long,t._long)}}const AR=new RegExp("[~\\*/\\[\\]]");function RR(e,t,n){if(t.search(AR)>=0)throw Hh(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Lg(...t.split("."))._internalPath}catch{throw Hh(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Hh(e,t,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new U(b.INVALID_ARGUMENT,a+e+c)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(t,n,r,s,i){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ze(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new SR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Bg("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class SR extends Fg{data(){return super.data()}}function Bg(e,t){return typeof t=="string"?RR(e,t):t instanceof Lg?t._internalPath:t._delegate._internalPath}class CR{convertValue(t,n="none"){switch(Kn(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Ct(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Hn(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw Y()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return Eo(t,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(t){return new IR(Ct(t.latitude),Ct(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=al(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Es(t));default:return null}}convertTimestamp(t){const n=mn(t);return new oe(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=Tt.fromString(t);bt(yg(r));const s=new ws(r.get(1),r.get(3)),i=new j(r.popFirst(5));return s.isEqual(n)||Le(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ug extends Fg{constructor(t,n,r,s,i,o){super(t,n,r,s,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new PR(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(Bg("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class PR extends Ug{data(t={}){return super.data(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VR(e){e=Za(e,ze);const t=Za(e.firestore,kg);return pR(TR(t),e._key).then(n=>xR(t,e,n))}class DR extends CR{constructor(t){super(),this.firestore=t}convertBytes(t){return new Mi(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new ze(this.firestore,null,n)}}function xR(e,t,n){const r=n.docs.get(t._key),s=new DR(e);return new Ug(e,s,t._key,r,new bR(n.hasPendingWrites,n.fromCache),t.converter)}(function(t,n=!0){(function(s){Vr=s})(iw),pn(new He("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new kg(new zI(r.getProvider("auth-internal")),new WI(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new U(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ws(l.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Ne(uh,"4.5.0",t),Ne(uh,"4.5.0","esm2017")})();const OR={apiKey:"AIzaSyAZnAECbdwXY6SOvDa5kyM-AE-8X3EYPpI",authDomain:"elecoxy-com.firebaseapp.com",projectId:"elecoxy-com",storageBucket:"elecoxy-com.appspot.com",messagingSenderId:"926870137110",appId:"1:926870137110:web:04d9d9d386600606c24837",measurementId:"G-B73FH0QJ3L"},$g=_d(OR);xT($g);const NR=wR($g),Cl=Cy("config",{persist:!0,state:()=>({tag:"home",isExpended:!1,azureSpeech:"",modelUrl:"ai-poets-dalle3.openai.azure.com",modelVersion:"gpt-35-turbo",apiVersion:"2024-02-15-preview"}),getters:{gptURL:e=>"https://ai.yizheyun.cn?model_url="+e.modelUrl+"&model_name="+e.modelVersion+"&api_version="+e.apiVersion,languageVersion:()=>({grammar:"2.2.0",translate:"1.7.0",c2m:"1.4.0"}),db:()=>NR},actions:{async setGptKey(e=!1){if(this.elecoxyKey!==""||e)try{const t=vR(this.db,"basic",this.elecoxyKey),n=await VR(t);n.exists()?this.azureSpeech=n.data().azureSpeech:this.azureSpeech=""}catch{this.azureSpeech=""}}}}),kR=[{path:"/",name:"home",component:()=>An(()=>import("./HomeView-D3PAJwpG.js"),__vite__mapDeps([0,1]))},{path:"/publications",name:"publications",component:()=>An(()=>import("./PublicationsView-_TofdwNt.js"),__vite__mapDeps([2,3]))},{path:"/projects",children:[{path:"",name:"projects",component:()=>An(()=>import("./ProjectsView-BbuOb_qW.js"),__vite__mapDeps([4,5]))},{path:"tarot",name:"projects-tarot",component:()=>An(()=>import("./TarotView-Ckh1Ryip.js"),__vite__mapDeps([6,7,8]))}]},{path:"/chat",name:"chat",component:()=>An(()=>import("./ChatView-p96yqZ-K.js"),__vite__mapDeps([9,7,10]))},{path:"/language",name:"language",component:()=>An(()=>import("./LanguageView-BHcQBDOG.js"),__vite__mapDeps([11,7,12]))},{path:"/privacy-policy",name:"privacy-policy",component:()=>An(()=>import("./PrivacyPolicyView-C48cr4x4.js"),__vite__mapDeps([]))}],jg=Bv({history:pv(),scrollBehavior(e,t,n){return n||{top:0}},routes:kR});jg.beforeEach(async(e,t)=>{const n=Cl();n.isExpended=!1});function MR(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var qg={exports:{}};(function(e,t){(function(){var n={expires:"1d",path:"; path=/",domain:"",secure:"",sameSite:"; SameSite=Lax"},r={install:function(s,i){i&&this.config(i.expires,i.path,i.domain,i.secure,i.sameSite),s.prototype&&(s.prototype.$cookies=this),s.config&&s.config.globalProperties&&(s.config.globalProperties.$cookies=this,s.provide("$cookies",this)),s.$cookies=this},config:function(s,i,o,a,c){n.expires=s||"1d",n.path=i?"; path="+i:"; path=/",n.domain=o?"; domain="+o:"",n.secure=a?"; Secure":"",n.sameSite=c?"; SameSite="+c:"; SameSite=Lax"},get:function(s){var i=decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(s).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null;if(i&&(i.substring(0,1)==="{"&&i.substring(i.length-1,i.length)==="}"||i.substring(0,1)==="["&&i.substring(i.length-1,i.length)==="]"))try{i=JSON.parse(i)}catch{return i}return i},set:function(s,i,o,a,c,l,u){if(s){if(/^(?:expires|max\-age|path|domain|secure|SameSite)$/i.test(s))throw new Error('Cookie name illegality. Cannot be set to ["expires","max-age","path","domain","secure","SameSite"]	 current key name: '+s)}else throw new Error("Cookie name is not found in the first argument.");i&&typeof i=="object"&&(i=JSON.stringify(i));var h="";if(o=o??n.expires,o&&o!=0)switch(o.constructor){case Number:o===1/0||o===-1?h="; expires=Fri, 31 Dec 9999 23:59:59 GMT":h="; max-age="+o;break;case String:if(/^(?:\d+(y|m|d|h|min|s))$/i.test(o)){var f=o.replace(/^(\d+)(?:y|m|d|h|min|s)$/i,"$1");switch(o.replace(/^(?:\d+)(y|m|d|h|min|s)$/i,"$1").toLowerCase()){case"m":h="; max-age="+ +f*2592e3;break;case"d":h="; max-age="+ +f*86400;break;case"h":h="; max-age="+ +f*3600;break;case"min":h="; max-age="+ +f*60;break;case"s":h="; max-age="+f;break;case"y":h="; max-age="+ +f*31104e3;break}}else h="; expires="+o;break;case Date:h="; expires="+o.toUTCString();break}return document.cookie=encodeURIComponent(s)+"="+encodeURIComponent(i)+h+(c?"; domain="+c:n.domain)+(a?"; path="+a:n.path)+(l==null?n.secure:l?"; Secure":"")+(u==null?n.sameSite:u?"; SameSite="+u:""),this},remove:function(s,i,o){return!s||!this.isKey(s)?!1:(document.cookie=encodeURIComponent(s)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(o?"; domain="+o:n.domain)+(i?"; path="+i:n.path)+"; SameSite=Lax",!0)},isKey:function(s){return new RegExp("(?:^|;\\s*)"+encodeURIComponent(s).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(document.cookie)},keys:function(){if(!document.cookie)return[];for(var s=document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/),i=0;i<s.length;i++)s[i]=decodeURIComponent(s[i]);return s}};e.exports=r,typeof window<"u"&&(window.$cookies=r)})()})(qg);var LR=qg.exports;const FR=MR(LR),bo=e=>(Fm("data-v-d175ab54"),e=e(),Bm(),e),BR={class:"navigationBar"},UR={class:"container"},$R={class:"navbar",role:"navigation","aria-label":"main navigation"},jR={class:"navbar-brand"},qR=bo(()=>Vt("a",{class:"navbar-item",href:"#"},[Vt("h1",{class:"title is-4"},"Yizhe ZHANG")],-1)),zR=bo(()=>Vt("span",{"aria-hidden":"true"},null,-1)),HR=bo(()=>Vt("span",{"aria-hidden":"true"},null,-1)),KR=bo(()=>Vt("span",{"aria-hidden":"true"},null,-1)),GR=[zR,HR,KR],WR={class:"navbar-start"},QR={__name:"NavigationBar",setup(e){const t=Cl(),n=Zt(()=>t.tag),r=Zt(()=>t.isExpended);return(s,i)=>{const o=si("router-link");return Gi(),vc("div",BR,[Vt("div",UR,[Vt("nav",$R,[Vt("div",jR,[qR,Vt("a",{role:"button",class:Re(["navbar-burger",r.value?"is-active":""]),"aria-label":"menu","aria-expanded":"false",onClick:i[0]||(i[0]=a=>an(t).isExpended=!an(t).isExpended)},GR,2)]),Vt("div",{class:Re(["navbar-menu",r.value?"is-active":""])},[Vt("div",WR,[It(o,{to:"/",class:Re(["navbar-item",n.value==="home"?"is-active":""])},{default:nr(()=>[Cn(" Home ")]),_:1},8,["class"]),It(o,{to:"/publications",class:Re(["navbar-item",n.value==="publications"?"is-active":""])},{default:nr(()=>[Cn(" Publications ")]),_:1},8,["class"]),It(o,{to:"/projects",class:Re(["navbar-item",n.value==="projects"?"is-active":""])},{default:nr(()=>[Cn(" Projects ")]),_:1},8,["class"]),It(o,{to:"/language",class:Re(["navbar-item",n.value==="language"?"is-active":""])},{default:nr(()=>[Cn(" Language ")]),_:1},8,["class"]),It(o,{to:"/chat",class:Re(["navbar-item",n.value==="chat"?"is-active":""])},{default:nr(()=>[Cn(" Chat ")]),_:1},8,["class"])])],2)])])])}}},YR=Wf(QR,[["__scopeId","data-v-d175ab54"]]),JR={key:0,class:"footer py-6"},XR=Vt("div",{class:"content has-text-centered"},[Vt("p",null,[Vt("strong",null,"Elecoxy.com"),Cn(" Developed by "),Vt("a",{href:"https://elecoxy.com"},"YIZHE ZHANG")]),Vt("p",null,[Vt("a",{href:"/#/privacy-policy"},"Privacy Policy")])],-1),ZR=[XR],tS={__name:"FooterView",setup(e){const t=Cl(),n=Zt(()=>t.tag!=="chat");return(r,s)=>n.value?(Gi(),vc("footer",JR,ZR)):V_("",!0)}},Us=py(vy),zg=wy();zg.use(Ny);Us.use(zg);Us.use(jg);Us.use(FR,{expires:"30d"});Us.component("NavigationBar",YR).component("FooterView",tS);Us.mount("#app");export{Rs as A,Se as F,Wf as _,Gi as a,Vt as b,vc as c,Cy as d,an as e,Cn as f,C_ as g,nS as h,Bm as i,Zt as j,pc as k,fc as l,sc as m,Re as n,Zm as o,Fm as p,V_ as q,sS as r,Hr as s,eS as t,Cl as u,oS as v,rS as w,cS as x,aS as y,iS as z};
