function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/HomeView-DRaDtUVH.js","assets/HomeView-DUlItlRa.css","assets/PublicationsView-D6woDd0e.js","assets/PublicationsView-t6lJj11d.css","assets/ProjectsView-CuRnVJFp.js","assets/ProjectsView-CE3C5xVp.css","assets/TarotView-DMuVc6sD.js","assets/axios-Cm0UX6qg.js","assets/TarotView-BY-1NuOU.css","assets/ChatView-BhXUOmSM.js","assets/ChatView-yymH4_fl.css","assets/LanguageView-Cy4aLsOq.js","assets/LanguageView-DCVwL79r.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Xa(e,t){const n=new Set(e.split(","));return t?r=>n.has(r.toLowerCase()):r=>n.has(r)}const mt={},or=[],me=()=>{},qg=()=>!1,xi=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Za=e=>e.startsWith("onUpdate:"),jt=Object.assign,tc=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},zg=Object.prototype.hasOwnProperty,nt=(e,t)=>zg.call(e,t),z=Array.isArray,ar=e=>Oi(e)==="[object Map]",zh=e=>Oi(e)==="[object Set]",Q=e=>typeof e=="function",Pt=e=>typeof e=="string",Rr=e=>typeof e=="symbol",wt=e=>e!==null&&typeof e=="object",Hh=e=>(wt(e)||Q(e))&&Q(e.then)&&Q(e.catch),Kh=Object.prototype.toString,Oi=e=>Kh.call(e),Hg=e=>Oi(e).slice(8,-1),Gh=e=>Oi(e)==="[object Object]",ec=e=>Pt(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,qr=Xa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ni=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Kg=/-(\w)/g,Me=Ni(e=>e.replace(Kg,(t,n)=>n?n.toUpperCase():"")),Gg=/\B([A-Z])/g,Sr=Ni(e=>e.replace(Gg,"-$1").toLowerCase()),ki=Ni(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ro=Ni(e=>e?`on${ki(e)}`:""),fn=(e,t)=>!Object.is(e,t),ti=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},li=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},ra=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Pl;const Wh=()=>Pl||(Pl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function nc(e){if(z(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=Pt(r)?Jg(r):nc(r);if(s)for(const i in s)t[i]=s[i]}return t}else if(Pt(e)||wt(e))return e}const Wg=/;(?![^(]*\))/g,Qg=/:([^]+)/,Yg=/\/\*[^]*?\*\//g;function Jg(e){const t={};return e.replace(Yg,"").split(Wg).forEach(n=>{if(n){const r=n.split(Qg);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Re(e){let t="";if(Pt(e))t=e;else if(z(e))for(let n=0;n<e.length;n++){const r=Re(e[n]);r&&(t+=r+" ")}else if(wt(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Xg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Zg=Xa(Xg);function Qh(e){return!!e||e===""}const YR=e=>Pt(e)?e:e==null?"":z(e)||wt(e)&&(e.toString===Kh||!Q(e.toString))?JSON.stringify(e,Yh,2):String(e),Yh=(e,t)=>t&&t.__v_isRef?Yh(e,t.value):ar(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],i)=>(n[So(r,i)+" =>"]=s,n),{})}:zh(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>So(n))}:Rr(t)?So(t):wt(t)&&!z(t)&&!Gh(t)?String(t):t,So=(e,t="")=>{var n;return Rr(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ue;class Jh{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ue,!t&&ue&&(this.index=(ue.scopes||(ue.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=ue;try{return ue=this,t()}finally{ue=n}}}on(){ue=this}off(){ue=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Xh(e){return new Jh(e)}function tm(e,t=ue){t&&t.active&&t.effects.push(e)}function Zh(){return ue}function em(e){ue&&ue.cleanups.push(e)}let Nn;class rc{constructor(t,n,r,s){this.fn=t,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,tm(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Hn();for(let t=0;t<this._depsLength;t++){const n=this.deps[t];if(n.computed&&(nm(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Kn()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=sn,n=Nn;try{return sn=!0,Nn=this,this._runnings++,Vl(this),this.fn()}finally{Dl(this),this._runnings--,Nn=n,sn=t}}stop(){var t;this.active&&(Vl(this),Dl(this),(t=this.onStop)==null||t.call(this),this.active=!1)}}function nm(e){return e.value}function Vl(e){e._trackId++,e._depsLength=0}function Dl(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)tf(e.deps[t],e);e.deps.length=e._depsLength}}function tf(e,t){const n=e.get(t);n!==void 0&&t._trackId!==n&&(e.delete(t),e.size===0&&e.cleanup())}let sn=!0,sa=0;const ef=[];function Hn(){ef.push(sn),sn=!1}function Kn(){const e=ef.pop();sn=e===void 0?!0:e}function sc(){sa++}function ic(){for(sa--;!sa&&ia.length;)ia.shift()()}function nf(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const r=e.deps[e._depsLength];r!==t?(r&&tf(r,e),e.deps[e._depsLength++]=t):e._depsLength++}}const ia=[];function rf(e,t,n){sc();for(const r of e.keys()){let s;r._dirtyLevel<t&&(s??(s=e.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=t),r._shouldSchedule&&(s??(s=e.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&ia.push(r.scheduler)))}ic()}const sf=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},ui=new WeakMap,kn=Symbol(""),oa=Symbol("");function ae(e,t,n){if(sn&&Nn){let r=ui.get(e);r||ui.set(e,r=new Map);let s=r.get(n);s||r.set(n,s=sf(()=>r.delete(n))),nf(Nn,s)}}function qe(e,t,n,r,s,i){const o=ui.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&z(e)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||!Rr(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),t){case"add":z(e)?ec(n)&&a.push(o.get("length")):(a.push(o.get(kn)),ar(e)&&a.push(o.get(oa)));break;case"delete":z(e)||(a.push(o.get(kn)),ar(e)&&a.push(o.get(oa)));break;case"set":ar(e)&&a.push(o.get(kn));break}sc();for(const c of a)c&&rf(c,4);ic()}function rm(e,t){var n;return(n=ui.get(e))==null?void 0:n.get(t)}const sm=Xa("__proto__,__v_isRef,__isVue"),of=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Rr)),xl=im();function im(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=it(this);for(let i=0,o=this.length;i<o;i++)ae(r,"get",i+"");const s=r[t](...n);return s===-1||s===!1?r[t](...n.map(it)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Hn(),sc();const r=it(this)[t].apply(this,n);return ic(),Kn(),r}}),e}function om(e){const t=it(this);return ae(t,"has",e),t.hasOwnProperty(e)}class af{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?vm:hf:i?uf:lf).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=z(t);if(!s){if(o&&nt(xl,n))return Reflect.get(xl,n,r);if(n==="hasOwnProperty")return om}const a=Reflect.get(t,n,r);return(Rr(n)?of.has(n):sm(n))||(s||ae(t,"get",n),i)?a:xt(a)?o&&ec(n)?a:a.value:wt(a)?s?df(a):Is(a):a}}class cf extends af{constructor(t=!1){super(!1,t)}set(t,n,r,s){let i=t[n];if(!this._isShallow){const c=pr(i);if(!hi(r)&&!pr(r)&&(i=it(i),r=it(r)),!z(t)&&xt(i)&&!xt(r))return c?!1:(i.value=r,!0)}const o=z(t)&&ec(n)?Number(n)<t.length:nt(t,n),a=Reflect.set(t,n,r,s);return t===it(s)&&(o?fn(r,i)&&qe(t,"set",n,r):qe(t,"add",n,r)),a}deleteProperty(t,n){const r=nt(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&qe(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!Rr(n)||!of.has(n))&&ae(t,"has",n),r}ownKeys(t){return ae(t,"iterate",z(t)?"length":kn),Reflect.ownKeys(t)}}class am extends af{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const cm=new cf,lm=new am,um=new cf(!0),oc=e=>e,Mi=e=>Reflect.getPrototypeOf(e);function Us(e,t,n=!1,r=!1){e=e.__v_raw;const s=it(e),i=it(t);n||(fn(t,i)&&ae(s,"get",t),ae(s,"get",i));const{has:o}=Mi(s),a=r?oc:n?lc:rs;if(o.call(s,t))return a(e.get(t));if(o.call(s,i))return a(e.get(i));e!==s&&e.get(t)}function $s(e,t=!1){const n=this.__v_raw,r=it(n),s=it(e);return t||(fn(e,s)&&ae(r,"has",e),ae(r,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function js(e,t=!1){return e=e.__v_raw,!t&&ae(it(e),"iterate",kn),Reflect.get(e,"size",e)}function Ol(e){e=it(e);const t=it(this);return Mi(t).has.call(t,e)||(t.add(e),qe(t,"add",e,e)),this}function Nl(e,t){t=it(t);const n=it(this),{has:r,get:s}=Mi(n);let i=r.call(n,e);i||(e=it(e),i=r.call(n,e));const o=s.call(n,e);return n.set(e,t),i?fn(t,o)&&qe(n,"set",e,t):qe(n,"add",e,t),this}function kl(e){const t=it(this),{has:n,get:r}=Mi(t);let s=n.call(t,e);s||(e=it(e),s=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return s&&qe(t,"delete",e,void 0),i}function Ml(){const e=it(this),t=e.size!==0,n=e.clear();return t&&qe(e,"clear",void 0,void 0),n}function qs(e,t){return function(r,s){const i=this,o=i.__v_raw,a=it(o),c=t?oc:e?lc:rs;return!e&&ae(a,"iterate",kn),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function zs(e,t,n){return function(...r){const s=this.__v_raw,i=it(s),o=ar(i),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,l=s[e](...r),u=n?oc:t?lc:rs;return!t&&ae(i,"iterate",c?oa:kn),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Qe(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function hm(){const e={get(i){return Us(this,i)},get size(){return js(this)},has:$s,add:Ol,set:Nl,delete:kl,clear:Ml,forEach:qs(!1,!1)},t={get(i){return Us(this,i,!1,!0)},get size(){return js(this)},has:$s,add:Ol,set:Nl,delete:kl,clear:Ml,forEach:qs(!1,!0)},n={get(i){return Us(this,i,!0)},get size(){return js(this,!0)},has(i){return $s.call(this,i,!0)},add:Qe("add"),set:Qe("set"),delete:Qe("delete"),clear:Qe("clear"),forEach:qs(!0,!1)},r={get(i){return Us(this,i,!0,!0)},get size(){return js(this,!0)},has(i){return $s.call(this,i,!0)},add:Qe("add"),set:Qe("set"),delete:Qe("delete"),clear:Qe("clear"),forEach:qs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=zs(i,!1,!1),n[i]=zs(i,!0,!1),t[i]=zs(i,!1,!0),r[i]=zs(i,!0,!0)}),[e,n,t,r]}const[fm,dm,pm,gm]=hm();function ac(e,t){const n=t?e?gm:pm:e?dm:fm;return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(nt(n,s)&&s in r?n:r,s,i)}const mm={get:ac(!1,!1)},_m={get:ac(!1,!0)},ym={get:ac(!0,!1)},lf=new WeakMap,uf=new WeakMap,hf=new WeakMap,vm=new WeakMap;function Em(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function wm(e){return e.__v_skip||!Object.isExtensible(e)?0:Em(Hg(e))}function Is(e){return pr(e)?e:cc(e,!1,cm,mm,lf)}function ff(e){return cc(e,!1,um,_m,uf)}function df(e){return cc(e,!0,lm,ym,hf)}function cc(e,t,n,r,s){if(!wt(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const o=wm(e);if(o===0)return e;const a=new Proxy(e,o===2?r:n);return s.set(e,a),a}function on(e){return pr(e)?on(e.__v_raw):!!(e&&e.__v_isReactive)}function pr(e){return!!(e&&e.__v_isReadonly)}function hi(e){return!!(e&&e.__v_isShallow)}function pf(e){return on(e)||pr(e)}function it(e){const t=e&&e.__v_raw;return t?it(t):e}function Li(e){return Object.isExtensible(e)&&li(e,"__v_skip",!0),e}const rs=e=>wt(e)?Is(e):e,lc=e=>wt(e)?df(e):e;class gf{constructor(t,n,r,s){this.getter=t,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new rc(()=>t(this._value),()=>ei(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const t=it(this);return(!t._cacheable||t.effect.dirty)&&fn(t._value,t._value=t.effect.run())&&ei(t,4),mf(t),t.effect._dirtyLevel>=2&&ei(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function Tm(e,t,n=!1){let r,s;const i=Q(e);return i?(r=e,s=me):(r=e.get,s=e.set),new gf(r,s,i||!s,n)}function mf(e){var t;sn&&Nn&&(e=it(e),nf(Nn,(t=e.dep)!=null?t:e.dep=sf(()=>e.dep=void 0,e instanceof gf?e:void 0)))}function ei(e,t=4,n){e=it(e);const r=e.dep;r&&rf(r,t)}function xt(e){return!!(e&&e.__v_isRef===!0)}function uc(e){return _f(e,!1)}function Im(e){return _f(e,!0)}function _f(e,t){return xt(e)?e:new Am(e,t)}class Am{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:it(t),this._value=n?t:rs(t)}get value(){return mf(this),this._value}set value(t){const n=this.__v_isShallow||hi(t)||pr(t);t=n?t:it(t),fn(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:rs(t),ei(this,4))}}function an(e){return xt(e)?e.value:e}const Rm={get:(e,t,n)=>an(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return xt(s)&&!xt(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function yf(e){return on(e)?e:new Proxy(e,Rm)}function Sm(e){const t=z(e)?new Array(e.length):{};for(const n in e)t[n]=Cm(e,n);return t}class bm{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return rm(it(this._object),this._key)}}function Cm(e,t,n){const r=e[t];return xt(r)?r:new bm(e,t,n)}/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function cn(e,t,n,r){try{return r?e(...r):e()}catch(s){Fi(s,t,n)}}function ve(e,t,n,r){if(Q(e)){const i=cn(e,t,n,r);return i&&Hh(i)&&i.catch(o=>{Fi(o,t,n)}),i}const s=[];for(let i=0;i<e.length;i++)s.push(ve(e[i],t,n,r));return s}function Fi(e,t,n,r=!0){const s=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](e,o,a)===!1)return}i=i.parent}const c=t.appContext.config.errorHandler;if(c){cn(c,null,10,[e,o,a]);return}}Pm(e,n,s,r)}function Pm(e,t,n,r=!0){console.error(e)}let ss=!1,aa=!1;const Wt=[];let Ce=0;const cr=[];let Xe=null,Rn=0;const vf=Promise.resolve();let hc=null;function fc(e){const t=hc||vf;return e?t.then(this?e.bind(this):e):t}function Vm(e){let t=Ce+1,n=Wt.length;for(;t<n;){const r=t+n>>>1,s=Wt[r],i=is(s);i<e||i===e&&s.pre?t=r+1:n=r}return t}function dc(e){(!Wt.length||!Wt.includes(e,ss&&e.allowRecurse?Ce+1:Ce))&&(e.id==null?Wt.push(e):Wt.splice(Vm(e.id),0,e),Ef())}function Ef(){!ss&&!aa&&(aa=!0,hc=vf.then(Tf))}function Dm(e){const t=Wt.indexOf(e);t>Ce&&Wt.splice(t,1)}function xm(e){z(e)?cr.push(...e):(!Xe||!Xe.includes(e,e.allowRecurse?Rn+1:Rn))&&cr.push(e),Ef()}function Ll(e,t,n=ss?Ce+1:0){for(;n<Wt.length;n++){const r=Wt[n];if(r&&r.pre){if(e&&r.id!==e.uid)continue;Wt.splice(n,1),n--,r()}}}function wf(e){if(cr.length){const t=[...new Set(cr)].sort((n,r)=>is(n)-is(r));if(cr.length=0,Xe){Xe.push(...t);return}for(Xe=t,Rn=0;Rn<Xe.length;Rn++)Xe[Rn]();Xe=null,Rn=0}}const is=e=>e.id==null?1/0:e.id,Om=(e,t)=>{const n=is(e)-is(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Tf(e){aa=!1,ss=!0,Wt.sort(Om);try{for(Ce=0;Ce<Wt.length;Ce++){const t=Wt[Ce];t&&t.active!==!1&&cn(t,null,14)}}finally{Ce=0,Wt.length=0,wf(),ss=!1,hc=null,(Wt.length||cr.length)&&Tf()}}function Nm(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||mt;let s=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[u]||mt;f&&(s=n.map(g=>Pt(g)?g.trim():g)),h&&(s=n.map(ra))}let a,c=r[a=Ro(t)]||r[a=Ro(Me(t))];!c&&i&&(c=r[a=Ro(Sr(t))]),c&&ve(c,e,6,s);const l=r[a+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,ve(l,e,6,s)}}function If(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let o={},a=!1;if(!Q(e)){const c=l=>{const u=If(l,t,!0);u&&(a=!0,jt(o,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!a?(wt(e)&&r.set(e,null),null):(z(i)?i.forEach(c=>o[c]=null):jt(o,i),wt(e)&&r.set(e,o),o)}function Bi(e,t){return!e||!xi(t)?!1:(t=t.slice(2).replace(/Once$/,""),nt(e,t[0].toLowerCase()+t.slice(1))||nt(e,Sr(t))||nt(e,t))}let ee=null,Ui=null;function fi(e){const t=ee;return ee=e,Ui=e&&e.type.__scopeId||null,t}function km(e){Ui=e}function Mm(){Ui=null}function Zn(e,t=ee,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&Wl(-1);const i=fi(t);let o;try{o=e(...s)}finally{fi(i),r._d&&Wl(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function bo(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:g,ctx:w,inheritAttrs:R}=e;let S,O;const M=fi(e);try{if(n.shapeFlag&4){const W=s||r,J=W;S=be(u.call(J,W,h,i,g,f,w)),O=c}else{const W=t;S=be(W.length>1?W(i,{attrs:c,slots:a,emit:l}):W(i,null)),O=t.props?c:Lm(c)}}catch(W){Kr.length=0,Fi(W,e,1),S=At(Fn)}let B=S;if(O&&R!==!1){const W=Object.keys(O),{shapeFlag:J}=B;W.length&&J&7&&(o&&W.some(Za)&&(O=Fm(O,o)),B=gr(B,O))}return n.dirs&&(B=gr(B),B.dirs=B.dirs?B.dirs.concat(n.dirs):n.dirs),n.transition&&(B.transition=n.transition),S=B,fi(M),S}const Lm=e=>{let t;for(const n in e)(n==="class"||n==="style"||xi(n))&&((t||(t={}))[n]=e[n]);return t},Fm=(e,t)=>{const n={};for(const r in e)(!Za(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Bm(e,t,n){const{props:r,children:s,component:i}=e,{props:o,children:a,patchFlag:c}=t,l=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Fl(r,o,l):!!o;if(c&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==r[f]&&!Bi(l,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Fl(r,o,l):!0:!!o;return!1}function Fl(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!Bi(n,i))return!0}return!1}function Um({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const pc="components";function ni(e,t){return Rf(pc,e,!0,t)||e}const Af=Symbol.for("v-ndc");function JR(e){return Pt(e)?Rf(pc,e,!1)||e:e||Af}function Rf(e,t,n=!0,r=!1){const s=ee||Bt;if(s){const i=s.type;if(e===pc){const a=M_(i,!1);if(a&&(a===t||a===Me(t)||a===ki(Me(t))))return i}const o=Bl(s[e]||i[e],t)||Bl(s.appContext[e],t);return!o&&r?i:o}}function Bl(e,t){return e&&(e[t]||e[Me(t)]||e[ki(Me(t))])}const $m=e=>e.__isSuspense;function jm(e,t){t&&t.pendingBranch?z(e)?t.effects.push(...e):t.effects.push(e):xm(e)}const qm=Symbol.for("v-scx"),zm=()=>Oe(qm),Hs={};function zr(e,t,n){return Sf(e,t,n)}function Sf(e,t,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:a}=mt){if(t&&i){const q=t;t=(...gt)=>{q(...gt),J()}}const c=Bt,l=q=>r===!0?q:Cn(q,r===!1?1:void 0);let u,h=!1,f=!1;if(xt(e)?(u=()=>e.value,h=hi(e)):on(e)?(u=()=>l(e),h=!0):z(e)?(f=!0,h=e.some(q=>on(q)||hi(q)),u=()=>e.map(q=>{if(xt(q))return q.value;if(on(q))return l(q);if(Q(q))return cn(q,c,2)})):Q(e)?t?u=()=>cn(e,c,2):u=()=>(g&&g(),ve(e,c,3,[w])):u=me,t&&r){const q=u;u=()=>Cn(q())}let g,w=q=>{g=B.onStop=()=>{cn(q,c,4),g=B.onStop=void 0}},R;if(Hi)if(w=me,t?n&&ve(t,c,3,[u(),f?[]:void 0,w]):u(),s==="sync"){const q=zm();R=q.__watcherHandles||(q.__watcherHandles=[])}else return me;let S=f?new Array(e.length).fill(Hs):Hs;const O=()=>{if(!(!B.active||!B.dirty))if(t){const q=B.run();(r||h||(f?q.some((gt,X)=>fn(gt,S[X])):fn(q,S)))&&(g&&g(),ve(t,c,3,[q,S===Hs?void 0:f&&S[0]===Hs?[]:S,w]),S=q)}else B.run()};O.allowRecurse=!!t;let M;s==="sync"?M=O:s==="post"?M=()=>se(O,c&&c.suspense):(O.pre=!0,c&&(O.id=c.uid),M=()=>dc(O));const B=new rc(u,me,M),W=Zh(),J=()=>{B.stop(),W&&tc(W.effects,B)};return t?n?O():S=B.run():s==="post"?se(B.run.bind(B),c&&c.suspense):B.run(),R&&R.push(J),J}function Hm(e,t,n){const r=this.proxy,s=Pt(e)?e.includes(".")?bf(r,e):()=>r[e]:e.bind(r,r);let i;Q(t)?i=t:(i=t.handler,n=t);const o=As(this),a=Sf(s,i.bind(r),n);return o(),a}function bf(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Cn(e,t,n=0,r){if(!wt(e)||e.__v_skip)return e;if(t&&t>0){if(n>=t)return e;n++}if(r=r||new Set,r.has(e))return e;if(r.add(e),xt(e))Cn(e.value,t,n,r);else if(z(e))for(let s=0;s<e.length;s++)Cn(e[s],t,n,r);else if(zh(e)||ar(e))e.forEach(s=>{Cn(s,t,n,r)});else if(Gh(e))for(const s in e)Cn(e[s],t,n,r);return e}function XR(e,t){if(ee===null)return e;const n=Ki(ee)||ee.proxy,r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[i,o,a,c=mt]=t[s];i&&(Q(i)&&(i={mounted:i,updated:i}),i.deep&&Cn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return e}function wn(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Hn(),ve(c,n,8,[e.el,a,e,t]),Kn())}}/*! #__NO_SIDE_EFFECTS__ */function Cf(e,t){return Q(e)?jt({name:e.name},t,{setup:e}):e}const ri=e=>!!e.type.__asyncLoader,Pf=e=>e.type.__isKeepAlive;function Km(e,t){Vf(e,"a",t)}function Gm(e,t){Vf(e,"da",t)}function Vf(e,t,n=Bt){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if($i(t,r,n),n){let s=n.parent;for(;s&&s.parent;)Pf(s.parent.vnode)&&Wm(r,t,n,s),s=s.parent}}function Wm(e,t,n,r){const s=$i(t,e,r,!0);Df(()=>{tc(r[t],s)},n)}function $i(e,t,n=Bt,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Hn();const a=As(n),c=ve(t,n,e,o);return a(),Kn(),c});return r?s.unshift(i):s.push(i),i}}const Ge=e=>(t,n=Bt)=>(!Hi||e==="sp")&&$i(e,(...r)=>t(...r),n),Qm=Ge("bm"),Ym=Ge("m"),Jm=Ge("bu"),Xm=Ge("u"),Zm=Ge("bum"),Df=Ge("um"),t_=Ge("sp"),e_=Ge("rtg"),n_=Ge("rtc");function r_(e,t=Bt){$i("ec",e,t)}function ZR(e,t,n,r){let s;const i=n&&n[r];if(z(e)||Pt(e)){s=new Array(e.length);for(let o=0,a=e.length;o<a;o++)s[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){s=new Array(e);for(let o=0;o<e;o++)s[o]=t(o+1,o,void 0,i&&i[o])}else if(wt(e))if(e[Symbol.iterator])s=Array.from(e,(o,a)=>t(o,a,void 0,i&&i[a]));else{const o=Object.keys(e);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=t(e[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const ca=e=>e?qf(e)?Ki(e)||e.proxy:ca(e.parent):null,Hr=jt(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ca(e.parent),$root:e=>ca(e.root),$emit:e=>e.emit,$options:e=>gc(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,dc(e.update)}),$nextTick:e=>e.n||(e.n=fc.bind(e.proxy)),$watch:e=>Hm.bind(e)}),Co=(e,t)=>e!==mt&&!e.__isScriptSetup&&nt(e,t),s_={get({_:e},t){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=e;let l;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(Co(r,t))return o[t]=1,r[t];if(s!==mt&&nt(s,t))return o[t]=2,s[t];if((l=e.propsOptions[0])&&nt(l,t))return o[t]=3,i[t];if(n!==mt&&nt(n,t))return o[t]=4,n[t];la&&(o[t]=0)}}const u=Hr[t];let h,f;if(u)return t==="$attrs"&&ae(e,"get",t),u(e);if((h=a.__cssModules)&&(h=h[t]))return h;if(n!==mt&&nt(n,t))return o[t]=4,n[t];if(f=c.config.globalProperties,nt(f,t))return f[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return Co(s,t)?(s[t]=n,!0):r!==mt&&nt(r,t)?(r[t]=n,!0):nt(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||e!==mt&&nt(e,o)||Co(t,o)||(a=i[0])&&nt(a,o)||nt(r,o)||nt(Hr,o)||nt(s.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:nt(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ul(e){return z(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let la=!0;function i_(e){const t=gc(e),n=e.proxy,r=e.ctx;la=!1,t.beforeCreate&&$l(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:g,updated:w,activated:R,deactivated:S,beforeDestroy:O,beforeUnmount:M,destroyed:B,unmounted:W,render:J,renderTracked:q,renderTriggered:gt,errorCaptured:X,serverPrefetch:Z,expose:yt,inheritAttrs:qt,components:ce,directives:de,filters:En}=t;if(l&&o_(l,r,null),o)for(const dt in o){const ct=o[dt];Q(ct)&&(r[dt]=ct.bind(n))}if(s){const dt=s.call(n,n);wt(dt)&&(e.data=Is(dt))}if(la=!0,i)for(const dt in i){const ct=i[dt],Ue=Q(ct)?ct.bind(n,n):Q(ct.get)?ct.get.bind(n,n):me,We=!Q(ct)&&Q(ct.set)?ct.set.bind(n):me,Te=Zt({get:Ue,set:We});Object.defineProperty(r,dt,{enumerable:!0,configurable:!0,get:()=>Te.value,set:re=>Te.value=re})}if(a)for(const dt in a)xf(a[dt],r,n,dt);if(c){const dt=Q(c)?c.call(n):c;Reflect.ownKeys(dt).forEach(ct=>{si(ct,dt[ct])})}u&&$l(u,e,"c");function at(dt,ct){z(ct)?ct.forEach(Ue=>dt(Ue.bind(n))):ct&&dt(ct.bind(n))}if(at(Qm,h),at(Ym,f),at(Jm,g),at(Xm,w),at(Km,R),at(Gm,S),at(r_,X),at(n_,q),at(e_,gt),at(Zm,M),at(Df,W),at(t_,Z),z(yt))if(yt.length){const dt=e.exposed||(e.exposed={});yt.forEach(ct=>{Object.defineProperty(dt,ct,{get:()=>n[ct],set:Ue=>n[ct]=Ue})})}else e.exposed||(e.exposed={});J&&e.render===me&&(e.render=J),qt!=null&&(e.inheritAttrs=qt),ce&&(e.components=ce),de&&(e.directives=de)}function o_(e,t,n=me){z(e)&&(e=ua(e));for(const r in e){const s=e[r];let i;wt(s)?"default"in s?i=Oe(s.from||r,s.default,!0):i=Oe(s.from||r):i=Oe(s),xt(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function $l(e,t,n){ve(z(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function xf(e,t,n,r){const s=r.includes(".")?bf(n,r):()=>n[r];if(Pt(e)){const i=t[e];Q(i)&&zr(s,i)}else if(Q(e))zr(s,e.bind(n));else if(wt(e))if(z(e))e.forEach(i=>xf(i,t,n,r));else{const i=Q(e.handler)?e.handler.bind(n):t[e.handler];Q(i)&&zr(s,i,e)}}function gc(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let c;return a?c=a:!s.length&&!n&&!r?c=t:(c={},s.length&&s.forEach(l=>di(c,l,o,!0)),di(c,t,o)),wt(t)&&i.set(t,c),c}function di(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&di(e,i,n,!0),s&&s.forEach(o=>di(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const a=a_[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const a_={data:jl,props:ql,emits:ql,methods:Fr,computed:Fr,beforeCreate:Xt,created:Xt,beforeMount:Xt,mounted:Xt,beforeUpdate:Xt,updated:Xt,beforeDestroy:Xt,beforeUnmount:Xt,destroyed:Xt,unmounted:Xt,activated:Xt,deactivated:Xt,errorCaptured:Xt,serverPrefetch:Xt,components:Fr,directives:Fr,watch:l_,provide:jl,inject:c_};function jl(e,t){return t?e?function(){return jt(Q(e)?e.call(this,this):e,Q(t)?t.call(this,this):t)}:t:e}function c_(e,t){return Fr(ua(e),ua(t))}function ua(e){if(z(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Xt(e,t){return e?[...new Set([].concat(e,t))]:t}function Fr(e,t){return e?jt(Object.create(null),e,t):t}function ql(e,t){return e?z(e)&&z(t)?[...new Set([...e,...t])]:jt(Object.create(null),Ul(e),Ul(t??{})):t}function l_(e,t){if(!e)return t;if(!t)return e;const n=jt(Object.create(null),e);for(const r in t)n[r]=Xt(e[r],t[r]);return n}function Of(){return{app:null,config:{isNativeTag:qg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let u_=0;function h_(e,t){return function(r,s=null){Q(r)||(r=jt({},r)),s!=null&&!wt(s)&&(s=null);const i=Of(),o=new WeakSet;let a=!1;const c=i.app={_uid:u_++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:F_,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&Q(l.install)?(o.add(l),l.install(c,...u)):Q(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const f=At(r,s);return f.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),u&&t?t(f,l):e(f,l,h),a=!0,c._container=l,l.__vue_app__=c,Ki(f.component)||f.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){const u=lr;lr=c;try{return l()}finally{lr=u}}};return c}}let lr=null;function si(e,t){if(Bt){let n=Bt.provides;const r=Bt.parent&&Bt.parent.provides;r===n&&(n=Bt.provides=Object.create(r)),n[e]=t}}function Oe(e,t,n=!1){const r=Bt||ee;if(r||lr){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:lr._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&Q(t)?t.call(r&&r.proxy):t}}function f_(){return!!(Bt||ee||lr)}function d_(e,t,n,r=!1){const s={},i={};li(i,zi,1),e.propsDefaults=Object.create(null),Nf(e,t,s,i);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=r?s:ff(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function p_(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=e,a=it(s),[c]=e.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Bi(e.emitsOptions,f))continue;const g=t[f];if(c)if(nt(i,f))g!==i[f]&&(i[f]=g,l=!0);else{const w=Me(f);s[w]=ha(c,a,w,g,e,!1)}else g!==i[f]&&(i[f]=g,l=!0)}}}else{Nf(e,t,s,i)&&(l=!0);let u;for(const h in a)(!t||!nt(t,h)&&((u=Sr(h))===h||!nt(t,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=ha(c,a,h,void 0,e,!0)):delete s[h]);if(i!==a)for(const h in i)(!t||!nt(t,h))&&(delete i[h],l=!0)}l&&qe(e,"set","$attrs")}function Nf(e,t,n,r){const[s,i]=e.propsOptions;let o=!1,a;if(t)for(let c in t){if(qr(c))continue;const l=t[c];let u;s&&nt(s,u=Me(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Bi(e.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=it(n),l=a||mt;for(let u=0;u<i.length;u++){const h=i[u];n[h]=ha(s,c,h,l[h],e,!nt(l,h))}}return o}function ha(e,t,n,r,s,i){const o=e[n];if(o!=null){const a=nt(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Q(c)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const u=As(s);r=l[n]=c.call(null,t),u()}}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Sr(n))&&(r=!0))}return r}function kf(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const i=e.props,o={},a=[];let c=!1;if(!Q(e)){const u=h=>{c=!0;const[f,g]=kf(h,t,!0);jt(o,f),g&&a.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!c)return wt(e)&&r.set(e,or),or;if(z(i))for(let u=0;u<i.length;u++){const h=Me(i[u]);zl(h)&&(o[h]=mt)}else if(i)for(const u in i){const h=Me(u);if(zl(h)){const f=i[u],g=o[h]=z(f)||Q(f)?{type:f}:jt({},f);if(g){const w=Gl(Boolean,g.type),R=Gl(String,g.type);g[0]=w>-1,g[1]=R<0||w<R,(w>-1||nt(g,"default"))&&a.push(h)}}}const l=[o,a];return wt(e)&&r.set(e,l),l}function zl(e){return e[0]!=="$"&&!qr(e)}function Hl(e){return e===null?"null":typeof e=="function"?e.name||"":typeof e=="object"&&e.constructor&&e.constructor.name||""}function Kl(e,t){return Hl(e)===Hl(t)}function Gl(e,t){return z(t)?t.findIndex(n=>Kl(n,e)):Q(t)&&Kl(t,e)?0:-1}const Mf=e=>e[0]==="_"||e==="$stable",mc=e=>z(e)?e.map(be):[be(e)],g_=(e,t,n)=>{if(t._n)return t;const r=Zn((...s)=>mc(t(...s)),n);return r._c=!1,r},Lf=(e,t,n)=>{const r=e._ctx;for(const s in e){if(Mf(s))continue;const i=e[s];if(Q(i))t[s]=g_(s,i,r);else if(i!=null){const o=mc(i);t[s]=()=>o}}},Ff=(e,t)=>{const n=mc(t);e.slots.default=()=>n},m_=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=it(t),li(t,"_",n)):Lf(t,e.slots={})}else e.slots={},t&&Ff(e,t);li(e.slots,zi,1)},__=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,o=mt;if(r.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:(jt(s,t),!n&&a===1&&delete s._):(i=!t.$stable,Lf(t,s)),o=t}else t&&(Ff(e,t),o={default:1});if(i)for(const a in s)!Mf(a)&&o[a]==null&&delete s[a]};function fa(e,t,n,r,s=!1){if(z(e)){e.forEach((f,g)=>fa(f,t&&(z(t)?t[g]:t),n,r,s));return}if(ri(r)&&!s)return;const i=r.shapeFlag&4?Ki(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=e,l=t&&t.r,u=a.refs===mt?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Pt(l)?(u[l]=null,nt(h,l)&&(h[l]=null)):xt(l)&&(l.value=null)),Q(c))cn(c,a,12,[o,u]);else{const f=Pt(c),g=xt(c);if(f||g){const w=()=>{if(e.f){const R=f?nt(h,c)?h[c]:u[c]:c.value;s?z(R)&&tc(R,i):z(R)?R.includes(i)||R.push(i):f?(u[c]=[i],nt(h,c)&&(h[c]=u[c])):(c.value=[i],e.k&&(u[e.k]=c.value))}else f?(u[c]=o,nt(h,c)&&(h[c]=o)):g&&(c.value=o,e.k&&(u[e.k]=o))};o?(w.id=-1,se(w,n)):w()}}}const se=jm;function y_(e){return v_(e)}function v_(e,t){const n=Wh();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:g=me,insertStaticContent:w}=e,R=(d,p,m,v=null,_=null,A=null,x=void 0,I=null,b=!!p.dynamicChildren)=>{if(d===p)return;d&&!Or(d,p)&&(v=y(d),re(d,_,A,!0),d=null),p.patchFlag===-2&&(b=!1,p.dynamicChildren=null);const{type:T,ref:k,shapeFlag:$}=p;switch(T){case ji:S(d,p,m,v);break;case Fn:O(d,p,m,v);break;case Vo:d==null&&M(p,m,v,x);break;case Se:ce(d,p,m,v,_,A,x,I,b);break;default:$&1?J(d,p,m,v,_,A,x,I,b):$&6?de(d,p,m,v,_,A,x,I,b):($&64||$&128)&&T.process(d,p,m,v,_,A,x,I,b,L)}k!=null&&_&&fa(k,d&&d.ref,A,p||d,!p)},S=(d,p,m,v)=>{if(d==null)r(p.el=a(p.children),m,v);else{const _=p.el=d.el;p.children!==d.children&&l(_,p.children)}},O=(d,p,m,v)=>{d==null?r(p.el=c(p.children||""),m,v):p.el=d.el},M=(d,p,m,v)=>{[d.el,d.anchor]=w(d.children,p,m,v,d.el,d.anchor)},B=({el:d,anchor:p},m,v)=>{let _;for(;d&&d!==p;)_=f(d),r(d,m,v),d=_;r(p,m,v)},W=({el:d,anchor:p})=>{let m;for(;d&&d!==p;)m=f(d),s(d),d=m;s(p)},J=(d,p,m,v,_,A,x,I,b)=>{p.type==="svg"?x="svg":p.type==="math"&&(x="mathml"),d==null?q(p,m,v,_,A,x,I,b):Z(d,p,_,A,x,I,b)},q=(d,p,m,v,_,A,x,I)=>{let b,T;const{props:k,shapeFlag:$,transition:F,dirs:K}=d;if(b=d.el=o(d.type,A,k&&k.is,k),$&8?u(b,d.children):$&16&&X(d.children,b,null,v,_,Po(d,A),x,I),K&&wn(d,null,v,"created"),gt(b,d,d.scopeId,x,v),k){for(const pt in k)pt!=="value"&&!qr(pt)&&i(b,pt,null,k[pt],A,d.children,v,_,zt);"value"in k&&i(b,"value",null,k.value,A),(T=k.onVnodeBeforeMount)&&Ae(T,v,d)}K&&wn(d,null,v,"beforeMount");const tt=E_(_,F);tt&&F.beforeEnter(b),r(b,p,m),((T=k&&k.onVnodeMounted)||tt||K)&&se(()=>{T&&Ae(T,v,d),tt&&F.enter(b),K&&wn(d,null,v,"mounted")},_)},gt=(d,p,m,v,_)=>{if(m&&g(d,m),v)for(let A=0;A<v.length;A++)g(d,v[A]);if(_){let A=_.subTree;if(p===A){const x=_.vnode;gt(d,x,x.scopeId,x.slotScopeIds,_.parent)}}},X=(d,p,m,v,_,A,x,I,b=0)=>{for(let T=b;T<d.length;T++){const k=d[T]=I?Ze(d[T]):be(d[T]);R(null,k,p,m,v,_,A,x,I)}},Z=(d,p,m,v,_,A,x)=>{const I=p.el=d.el;let{patchFlag:b,dynamicChildren:T,dirs:k}=p;b|=d.patchFlag&16;const $=d.props||mt,F=p.props||mt;let K;if(m&&Tn(m,!1),(K=F.onVnodeBeforeUpdate)&&Ae(K,m,p,d),k&&wn(p,d,m,"beforeUpdate"),m&&Tn(m,!0),T?yt(d.dynamicChildren,T,I,m,v,Po(p,_),A):x||ct(d,p,I,null,m,v,Po(p,_),A,!1),b>0){if(b&16)qt(I,p,$,F,m,v,_);else if(b&2&&$.class!==F.class&&i(I,"class",null,F.class,_),b&4&&i(I,"style",$.style,F.style,_),b&8){const tt=p.dynamicProps;for(let pt=0;pt<tt.length;pt++){const Et=tt[pt],Ot=$[Et],_e=F[Et];(_e!==Ot||Et==="value")&&i(I,Et,Ot,_e,_,d.children,m,v,zt)}}b&1&&d.children!==p.children&&u(I,p.children)}else!x&&T==null&&qt(I,p,$,F,m,v,_);((K=F.onVnodeUpdated)||k)&&se(()=>{K&&Ae(K,m,p,d),k&&wn(p,d,m,"updated")},v)},yt=(d,p,m,v,_,A,x)=>{for(let I=0;I<p.length;I++){const b=d[I],T=p[I],k=b.el&&(b.type===Se||!Or(b,T)||b.shapeFlag&70)?h(b.el):m;R(b,T,k,null,v,_,A,x,!0)}},qt=(d,p,m,v,_,A,x)=>{if(m!==v){if(m!==mt)for(const I in m)!qr(I)&&!(I in v)&&i(d,I,m[I],null,x,p.children,_,A,zt);for(const I in v){if(qr(I))continue;const b=v[I],T=m[I];b!==T&&I!=="value"&&i(d,I,T,b,x,p.children,_,A,zt)}"value"in v&&i(d,"value",m.value,v.value,x)}},ce=(d,p,m,v,_,A,x,I,b)=>{const T=p.el=d?d.el:a(""),k=p.anchor=d?d.anchor:a("");let{patchFlag:$,dynamicChildren:F,slotScopeIds:K}=p;K&&(I=I?I.concat(K):K),d==null?(r(T,m,v),r(k,m,v),X(p.children||[],m,k,_,A,x,I,b)):$>0&&$&64&&F&&d.dynamicChildren?(yt(d.dynamicChildren,F,m,_,A,x,I),(p.key!=null||_&&p===_.subTree)&&Bf(d,p,!0)):ct(d,p,m,k,_,A,x,I,b)},de=(d,p,m,v,_,A,x,I,b)=>{p.slotScopeIds=I,d==null?p.shapeFlag&512?_.ctx.activate(p,m,v,x,b):En(p,m,v,_,A,x,b):pe(d,p,b)},En=(d,p,m,v,_,A,x)=>{const I=d.component=D_(d,v,_);if(Pf(d)&&(I.ctx.renderer=L),x_(I),I.asyncDep){if(_&&_.registerDep(I,at),!d.el){const b=I.subTree=At(Fn);O(null,b,p,m)}}else at(I,d,p,m,_,A,x)},pe=(d,p,m)=>{const v=p.component=d.component;if(Bm(d,p,m))if(v.asyncDep&&!v.asyncResolved){dt(v,p,m);return}else v.next=p,Dm(v.update),v.effect.dirty=!0,v.update();else p.el=d.el,v.vnode=p},at=(d,p,m,v,_,A,x)=>{const I=()=>{if(d.isMounted){let{next:k,bu:$,u:F,parent:K,vnode:tt}=d;{const Yn=Uf(d);if(Yn){k&&(k.el=tt.el,dt(d,k,x)),Yn.asyncDep.then(()=>{d.isUnmounted||I()});return}}let pt=k,Et;Tn(d,!1),k?(k.el=tt.el,dt(d,k,x)):k=tt,$&&ti($),(Et=k.props&&k.props.onVnodeBeforeUpdate)&&Ae(Et,K,k,tt),Tn(d,!0);const Ot=bo(d),_e=d.subTree;d.subTree=Ot,R(_e,Ot,h(_e.el),y(_e),d,_,A),k.el=Ot.el,pt===null&&Um(d,Ot.el),F&&se(F,_),(Et=k.props&&k.props.onVnodeUpdated)&&se(()=>Ae(Et,K,k,tt),_)}else{let k;const{el:$,props:F}=p,{bm:K,m:tt,parent:pt}=d,Et=ri(p);if(Tn(d,!1),K&&ti(K),!Et&&(k=F&&F.onVnodeBeforeMount)&&Ae(k,pt,p),Tn(d,!0),$&&vt){const Ot=()=>{d.subTree=bo(d),vt($,d.subTree,d,_,null)};Et?p.type.__asyncLoader().then(()=>!d.isUnmounted&&Ot()):Ot()}else{const Ot=d.subTree=bo(d);R(null,Ot,m,v,d,_,A),p.el=Ot.el}if(tt&&se(tt,_),!Et&&(k=F&&F.onVnodeMounted)){const Ot=p;se(()=>Ae(k,pt,Ot),_)}(p.shapeFlag&256||pt&&ri(pt.vnode)&&pt.vnode.shapeFlag&256)&&d.a&&se(d.a,_),d.isMounted=!0,p=m=v=null}},b=d.effect=new rc(I,me,()=>dc(T),d.scope),T=d.update=()=>{b.dirty&&b.run()};T.id=d.uid,Tn(d,!0),T()},dt=(d,p,m)=>{p.component=d;const v=d.vnode.props;d.vnode=p,d.next=null,p_(d,p.props,v,m),__(d,p.children,m),Hn(),Ll(d),Kn()},ct=(d,p,m,v,_,A,x,I,b=!1)=>{const T=d&&d.children,k=d?d.shapeFlag:0,$=p.children,{patchFlag:F,shapeFlag:K}=p;if(F>0){if(F&128){We(T,$,m,v,_,A,x,I,b);return}else if(F&256){Ue(T,$,m,v,_,A,x,I,b);return}}K&8?(k&16&&zt(T,_,A),$!==T&&u(m,$)):k&16?K&16?We(T,$,m,v,_,A,x,I,b):zt(T,_,A,!0):(k&8&&u(m,""),K&16&&X($,m,v,_,A,x,I,b))},Ue=(d,p,m,v,_,A,x,I,b)=>{d=d||or,p=p||or;const T=d.length,k=p.length,$=Math.min(T,k);let F;for(F=0;F<$;F++){const K=p[F]=b?Ze(p[F]):be(p[F]);R(d[F],K,m,null,_,A,x,I,b)}T>k?zt(d,_,A,!0,!1,$):X(p,m,v,_,A,x,I,b,$)},We=(d,p,m,v,_,A,x,I,b)=>{let T=0;const k=p.length;let $=d.length-1,F=k-1;for(;T<=$&&T<=F;){const K=d[T],tt=p[T]=b?Ze(p[T]):be(p[T]);if(Or(K,tt))R(K,tt,m,null,_,A,x,I,b);else break;T++}for(;T<=$&&T<=F;){const K=d[$],tt=p[F]=b?Ze(p[F]):be(p[F]);if(Or(K,tt))R(K,tt,m,null,_,A,x,I,b);else break;$--,F--}if(T>$){if(T<=F){const K=F+1,tt=K<k?p[K].el:v;for(;T<=F;)R(null,p[T]=b?Ze(p[T]):be(p[T]),m,tt,_,A,x,I,b),T++}}else if(T>F)for(;T<=$;)re(d[T],_,A,!0),T++;else{const K=T,tt=T,pt=new Map;for(T=tt;T<=F;T++){const le=p[T]=b?Ze(p[T]):be(p[T]);le.key!=null&&pt.set(le.key,T)}let Et,Ot=0;const _e=F-tt+1;let Yn=!1,Sl=0;const xr=new Array(_e);for(T=0;T<_e;T++)xr[T]=0;for(T=K;T<=$;T++){const le=d[T];if(Ot>=_e){re(le,_,A,!0);continue}let Ie;if(le.key!=null)Ie=pt.get(le.key);else for(Et=tt;Et<=F;Et++)if(xr[Et-tt]===0&&Or(le,p[Et])){Ie=Et;break}Ie===void 0?re(le,_,A,!0):(xr[Ie-tt]=T+1,Ie>=Sl?Sl=Ie:Yn=!0,R(le,p[Ie],m,null,_,A,x,I,b),Ot++)}const bl=Yn?w_(xr):or;for(Et=bl.length-1,T=_e-1;T>=0;T--){const le=tt+T,Ie=p[le],Cl=le+1<k?p[le+1].el:v;xr[T]===0?R(null,Ie,m,Cl,_,A,x,I,b):Yn&&(Et<0||T!==bl[Et]?Te(Ie,m,Cl,2):Et--)}}},Te=(d,p,m,v,_=null)=>{const{el:A,type:x,transition:I,children:b,shapeFlag:T}=d;if(T&6){Te(d.component.subTree,p,m,v);return}if(T&128){d.suspense.move(p,m,v);return}if(T&64){x.move(d,p,m,L);return}if(x===Se){r(A,p,m);for(let $=0;$<b.length;$++)Te(b[$],p,m,v);r(d.anchor,p,m);return}if(x===Vo){B(d,p,m);return}if(v!==2&&T&1&&I)if(v===0)I.beforeEnter(A),r(A,p,m),se(()=>I.enter(A),_);else{const{leave:$,delayLeave:F,afterLeave:K}=I,tt=()=>r(A,p,m),pt=()=>{$(A,()=>{tt(),K&&K()})};F?F(A,tt,pt):pt()}else r(A,p,m)},re=(d,p,m,v=!1,_=!1)=>{const{type:A,props:x,ref:I,children:b,dynamicChildren:T,shapeFlag:k,patchFlag:$,dirs:F}=d;if(I!=null&&fa(I,null,m,d,!0),k&256){p.ctx.deactivate(d);return}const K=k&1&&F,tt=!ri(d);let pt;if(tt&&(pt=x&&x.onVnodeBeforeUnmount)&&Ae(pt,p,d),k&6)Bs(d.component,m,v);else{if(k&128){d.suspense.unmount(m,v);return}K&&wn(d,null,p,"beforeUnmount"),k&64?d.type.remove(d,p,m,_,L,v):T&&(A!==Se||$>0&&$&64)?zt(T,p,m,!1,!0):(A===Se&&$&384||!_&&k&16)&&zt(b,p,m),v&&Wn(d)}(tt&&(pt=x&&x.onVnodeUnmounted)||K)&&se(()=>{pt&&Ae(pt,p,d),K&&wn(d,null,p,"unmounted")},m)},Wn=d=>{const{type:p,el:m,anchor:v,transition:_}=d;if(p===Se){Qn(m,v);return}if(p===Vo){W(d);return}const A=()=>{s(m),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(d.shapeFlag&1&&_&&!_.persisted){const{leave:x,delayLeave:I}=_,b=()=>x(m,A);I?I(d.el,A,b):b()}else A()},Qn=(d,p)=>{let m;for(;d!==p;)m=f(d),s(d),d=m;s(p)},Bs=(d,p,m)=>{const{bum:v,scope:_,update:A,subTree:x,um:I}=d;v&&ti(v),_.stop(),A&&(A.active=!1,re(x,d,p,m)),I&&se(I,p),se(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},zt=(d,p,m,v=!1,_=!1,A=0)=>{for(let x=A;x<d.length;x++)re(d[x],p,m,v,_)},y=d=>d.shapeFlag&6?y(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el);let N=!1;const D=(d,p,m)=>{d==null?p._vnode&&re(p._vnode,null,null,!0):R(p._vnode||null,d,p,null,null,null,m),N||(N=!0,Ll(),wf(),N=!1),p._vnode=d},L={p:R,um:re,m:Te,r:Wn,mt:En,mc:X,pc:ct,pbc:yt,n:y,o:e};let lt,vt;return t&&([lt,vt]=t(L)),{render:D,hydrate:lt,createApp:h_(D,lt)}}function Po({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Tn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function E_(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Bf(e,t,n=!1){const r=e.children,s=t.children;if(z(r)&&z(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Ze(s[i]),a.el=o.el),n||Bf(o,a)),a.type===ji&&(a.el=o.el)}}function w_(e){const t=e.slice(),n=[0];let r,s,i,o,a;const c=e.length;for(r=0;r<c;r++){const l=e[r];if(l!==0){if(s=n[n.length-1],e[s]<l){t[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<l?i=a+1:o=a;l<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function Uf(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Uf(t)}const T_=e=>e.__isTeleport,Se=Symbol.for("v-fgt"),ji=Symbol.for("v-txt"),Fn=Symbol.for("v-cmt"),Vo=Symbol.for("v-stc"),Kr=[];let ye=null;function qi(e=!1){Kr.push(ye=e?null:[])}function I_(){Kr.pop(),ye=Kr[Kr.length-1]||null}let os=1;function Wl(e){os+=e}function $f(e){return e.dynamicChildren=os>0?ye||or:null,I_(),os>0&&ye&&ye.push(e),e}function _c(e,t,n,r,s,i){return $f(Vt(e,t,n,r,s,i,!0))}function A_(e,t,n,r,s){return $f(At(e,t,n,r,s,!0))}function da(e){return e?e.__v_isVNode===!0:!1}function Or(e,t){return e.type===t.type&&e.key===t.key}const zi="__vInternal",jf=({key:e})=>e??null,ii=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Pt(e)||xt(e)||Q(e)?{i:ee,r:e,k:t,f:!!n}:e:null);function Vt(e,t=null,n=null,r=0,s=null,i=e===Se?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&jf(t),ref:t&&ii(t),scopeId:Ui,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ee};return a?(yc(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=Pt(n)?8:16),os>0&&!o&&ye&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&ye.push(c),c}const At=R_;function R_(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===Af)&&(e=Fn),da(e)){const a=gr(e,t,!0);return n&&yc(a,n),os>0&&!i&&ye&&(a.shapeFlag&6?ye[ye.indexOf(e)]=a:ye.push(a)),a.patchFlag|=-2,a}if(L_(e)&&(e=e.__vccOpts),t){t=S_(t);let{class:a,style:c}=t;a&&!Pt(a)&&(t.class=Re(a)),wt(c)&&(pf(c)&&!z(c)&&(c=jt({},c)),t.style=nc(c))}const o=Pt(e)?1:$m(e)?128:T_(e)?64:wt(e)?4:Q(e)?2:0;return Vt(e,t,n,r,s,o,i,!0)}function S_(e){return e?pf(e)||zi in e?jt({},e):e:null}function gr(e,t,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=e,a=t?C_(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&jf(a),ref:t&&t.ref?n&&s?z(s)?s.concat(ii(t)):[s,ii(t)]:ii(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Se?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&gr(e.ssContent),ssFallback:e.ssFallback&&gr(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Sn(e=" ",t=0){return At(ji,null,e,t)}function b_(e="",t=!1){return t?(qi(),A_(Fn,null,e)):At(Fn,null,e)}function be(e){return e==null||typeof e=="boolean"?At(Fn):z(e)?At(Se,null,e.slice()):typeof e=="object"?Ze(e):At(ji,null,String(e))}function Ze(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:gr(e)}function yc(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(z(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),yc(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!(zi in t)?t._ctx=ee:s===3&&ee&&(ee.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else Q(t)?(t={default:t,_ctx:ee},n=32):(t=String(t),r&64?(n=16,t=[Sn(t)]):n=8);e.children=t,e.shapeFlag|=n}function C_(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=Re([t.class,r.class]));else if(s==="style")t.style=nc([t.style,r.style]);else if(xi(s)){const i=t[s],o=r[s];o&&i!==o&&!(z(i)&&i.includes(o))&&(t[s]=i?[].concat(i,o):o)}else s!==""&&(t[s]=r[s])}return t}function Ae(e,t,n,r=null){ve(e,t,7,[n,r])}const P_=Of();let V_=0;function D_(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||P_,i={uid:V_++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Jh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:kf(r,s),emitsOptions:If(r,s),emit:null,emitted:null,propsDefaults:mt,inheritAttrs:r.inheritAttrs,ctx:mt,data:mt,props:mt,attrs:mt,slots:mt,refs:mt,setupState:mt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Nm.bind(null,i),e.ce&&e.ce(i),i}let Bt=null,pi,pa;{const e=Wh(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};pi=t("__VUE_INSTANCE_SETTERS__",n=>Bt=n),pa=t("__VUE_SSR_SETTERS__",n=>Hi=n)}const As=e=>{const t=Bt;return pi(e),e.scope.on(),()=>{e.scope.off(),pi(t)}},Ql=()=>{Bt&&Bt.scope.off(),pi(null)};function qf(e){return e.vnode.shapeFlag&4}let Hi=!1;function x_(e,t=!1){t&&pa(t);const{props:n,children:r}=e.vnode,s=qf(e);d_(e,n,s,t),m_(e,r);const i=s?O_(e,t):void 0;return t&&pa(!1),i}function O_(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Li(new Proxy(e.ctx,s_));const{setup:r}=n;if(r){const s=e.setupContext=r.length>1?k_(e):null,i=As(e);Hn();const o=cn(r,e,0,[e.props,s]);if(Kn(),i(),Hh(o)){if(o.then(Ql,Ql),t)return o.then(a=>{Yl(e,a,t)}).catch(a=>{Fi(a,e,0)});e.asyncDep=o}else Yl(e,o,t)}else zf(e,t)}function Yl(e,t,n){Q(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:wt(t)&&(e.setupState=yf(t)),zf(e,n)}let Jl;function zf(e,t,n){const r=e.type;if(!e.render){if(!t&&Jl&&!r.render){const s=r.template||gc(e).template;if(s){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:c}=r,l=jt(jt({isCustomElement:i,delimiters:a},o),c);r.render=Jl(s,l)}}e.render=r.render||me}{const s=As(e);Hn();try{i_(e)}finally{Kn(),s()}}}function N_(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return ae(e,"get","$attrs"),t[n]}}))}function k_(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return N_(e)},slots:e.slots,emit:e.emit,expose:t}}function Ki(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(yf(Li(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Hr)return Hr[n](e)},has(t,n){return n in t||n in Hr}}))}function M_(e,t=!0){return Q(e)?e.displayName||e.name:e.name||t&&e.__name}function L_(e){return Q(e)&&"__vccOpts"in e}const Zt=(e,t)=>Tm(e,t,Hi);function Hf(e,t,n){const r=arguments.length;return r===2?wt(t)&&!z(t)?da(t)?At(e,null,[t]):At(e,t):At(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&da(n)&&(n=[n]),At(e,t,n))}const F_="3.4.21";/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const B_="http://www.w3.org/2000/svg",U_="http://www.w3.org/1998/Math/MathML",tn=typeof document<"u"?document:null,Xl=tn&&tn.createElement("template"),$_={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?tn.createElementNS(B_,e):t==="mathml"?tn.createElementNS(U_,e):tn.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>tn.createTextNode(e),createComment:e=>tn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>tn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const o=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Xl.innerHTML=r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e;const a=Xl.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},j_=Symbol("_vtc");function q_(e,t,n){const r=e[j_];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Zl=Symbol("_vod"),z_=Symbol("_vsh"),H_=Symbol(""),K_=/(^|;)\s*display\s*:/;function G_(e,t,n){const r=e.style,s=Pt(n);let i=!1;if(n&&!s){if(t)if(Pt(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&oi(r,a,"")}else for(const o in t)n[o]==null&&oi(r,o,"");for(const o in n)o==="display"&&(i=!0),oi(r,o,n[o])}else if(s){if(t!==n){const o=r[H_];o&&(n+=";"+o),r.cssText=n,i=K_.test(n)}}else t&&e.removeAttribute("style");Zl in e&&(e[Zl]=i?r.display:"",e[z_]&&(r.display="none"))}const tu=/\s*!important$/;function oi(e,t,n){if(z(n))n.forEach(r=>oi(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=W_(e,t);tu.test(n)?e.setProperty(Sr(r),n.replace(tu,""),"important"):e[r]=n}}const eu=["Webkit","Moz","ms"],Do={};function W_(e,t){const n=Do[t];if(n)return n;let r=Me(t);if(r!=="filter"&&r in e)return Do[t]=r;r=ki(r);for(let s=0;s<eu.length;s++){const i=eu[s]+r;if(i in e)return Do[t]=i}return t}const nu="http://www.w3.org/1999/xlink";function Q_(e,t,n,r,s){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(nu,t.slice(6,t.length)):e.setAttributeNS(nu,t,n);else{const i=Zg(t);n==null||i&&!Qh(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Y_(e,t,n,r,s,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,s,i),e[t]=n??"";return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){const l=a==="OPTION"?e.getAttribute("value")||"":e.value,u=n??"";(l!==u||!("_value"in e))&&(e.value=u),n==null&&e.removeAttribute(t),e._value=n;return}let c=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Qh(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{e[t]=n}catch{}c&&e.removeAttribute(t)}function tr(e,t,n,r){e.addEventListener(t,n,r)}function J_(e,t,n,r){e.removeEventListener(t,n,r)}const ru=Symbol("_vei");function X_(e,t,n,r,s=null){const i=e[ru]||(e[ru]={}),o=i[t];if(r&&o)o.value=r;else{const[a,c]=Z_(t);if(r){const l=i[t]=ny(r,s);tr(e,a,l,c)}else o&&(J_(e,a,o,c),i[t]=void 0)}}const su=/(?:Once|Passive|Capture)$/;function Z_(e){let t;if(su.test(e)){t={};let r;for(;r=e.match(su);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Sr(e.slice(2)),t]}let xo=0;const ty=Promise.resolve(),ey=()=>xo||(ty.then(()=>xo=0),xo=Date.now());function ny(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;ve(ry(r,n.value),t,5,[r])};return n.value=e,n.attached=ey(),n}function ry(e,t){if(z(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const iu=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,sy=(e,t,n,r,s,i,o,a,c)=>{const l=s==="svg";t==="class"?q_(e,r,l):t==="style"?G_(e,n,r):xi(t)?Za(t)||X_(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):iy(e,t,r,l))?Y_(e,t,r,i,o,a,c):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Q_(e,t,r,l))};function iy(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&iu(t)&&Q(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return iu(t)&&Pt(n)?!1:t in e}const ou=e=>{const t=e.props["onUpdate:modelValue"]||!1;return z(t)?n=>ti(t,n):t};function oy(e){e.target.composing=!0}function au(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Oo=Symbol("_assign"),tS={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e[Oo]=ou(s);const i=r||s.props&&s.props.type==="number";tr(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n&&(a=a.trim()),i&&(a=ra(a)),e[Oo](a)}),n&&tr(e,"change",()=>{e.value=e.value.trim()}),t||(tr(e,"compositionstart",oy),tr(e,"compositionend",au),tr(e,"change",au))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:s}},i){if(e[Oo]=ou(i),e.composing)return;const o=s||e.type==="number"?ra(e.value):e.value,a=t??"";o!==a&&(document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===a)||(e.value=a))}},ay=jt({patchProp:sy},$_);let cu;function cy(){return cu||(cu=y_(ay))}const ly=(...e)=>{const t=cy().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=hy(r);if(!s)return;const i=t._component;!Q(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,uy(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function uy(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function hy(e){return Pt(e)?document.querySelector(e):e}const Kf=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},fy={};function dy(e,t){const n=ni("NavigationBar"),r=ni("router-view"),s=ni("FooterView");return qi(),_c(Se,null,[At(n),At(r),At(s)],64)}const py=Kf(fy,[["render",dy]]);var gy=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Gf;const Gi=e=>Gf=e,Wf=Symbol();function ga(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var Gr;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Gr||(Gr={}));function my(){const e=Xh(!0),t=e.run(()=>uc({}));let n=[],r=[];const s=Li({install(i){Gi(s),s._a=i,i.provide(Wf,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!gy?r.push(i):n.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return s}const Qf=()=>{};function lu(e,t,n,r=Qf){e.push(t);const s=()=>{const i=e.indexOf(t);i>-1&&(e.splice(i,1),r())};return!n&&Zh()&&em(s),s}function Jn(e,...t){e.slice().forEach(n=>{n(...t)})}const _y=e=>e();function ma(e,t){e instanceof Map&&t instanceof Map&&t.forEach((n,r)=>e.set(r,n)),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],s=e[n];ga(s)&&ga(r)&&e.hasOwnProperty(n)&&!xt(r)&&!on(r)?e[n]=ma(s,r):e[n]=r}return e}const yy=Symbol();function vy(e){return!ga(e)||!e.hasOwnProperty(yy)}const{assign:Je}=Object;function Ey(e){return!!(xt(e)&&e.effect)}function wy(e,t,n,r){const{state:s,actions:i,getters:o}=t,a=n.state.value[e];let c;function l(){a||(n.state.value[e]=s?s():{});const u=Sm(n.state.value[e]);return Je(u,i,Object.keys(o||{}).reduce((h,f)=>(h[f]=Li(Zt(()=>{Gi(n);const g=n._s.get(e);return o[f].call(g,g)})),h),{}))}return c=Yf(e,l,t,n,r,!0),c}function Yf(e,t,n={},r,s,i){let o;const a=Je({actions:{}},n),c={deep:!0};let l,u,h=[],f=[],g;const w=r.state.value[e];!i&&!w&&(r.state.value[e]={}),uc({});let R;function S(X){let Z;l=u=!1,typeof X=="function"?(X(r.state.value[e]),Z={type:Gr.patchFunction,storeId:e,events:g}):(ma(r.state.value[e],X),Z={type:Gr.patchObject,payload:X,storeId:e,events:g});const yt=R=Symbol();fc().then(()=>{R===yt&&(l=!0)}),u=!0,Jn(h,Z,r.state.value[e])}const O=i?function(){const{state:Z}=n,yt=Z?Z():{};this.$patch(qt=>{Je(qt,yt)})}:Qf;function M(){o.stop(),h=[],f=[],r._s.delete(e)}function B(X,Z){return function(){Gi(r);const yt=Array.from(arguments),qt=[],ce=[];function de(at){qt.push(at)}function En(at){ce.push(at)}Jn(f,{args:yt,name:X,store:J,after:de,onError:En});let pe;try{pe=Z.apply(this&&this.$id===e?this:J,yt)}catch(at){throw Jn(ce,at),at}return pe instanceof Promise?pe.then(at=>(Jn(qt,at),at)).catch(at=>(Jn(ce,at),Promise.reject(at))):(Jn(qt,pe),pe)}}const W={_p:r,$id:e,$onAction:lu.bind(null,f),$patch:S,$reset:O,$subscribe(X,Z={}){const yt=lu(h,X,Z.detached,()=>qt()),qt=o.run(()=>zr(()=>r.state.value[e],ce=>{(Z.flush==="sync"?u:l)&&X({storeId:e,type:Gr.direct,events:g},ce)},Je({},c,Z)));return yt},$dispose:M},J=Is(W);r._s.set(e,J);const gt=(r._a&&r._a.runWithContext||_y)(()=>r._e.run(()=>(o=Xh()).run(t)));for(const X in gt){const Z=gt[X];if(xt(Z)&&!Ey(Z)||on(Z))i||(w&&vy(Z)&&(xt(Z)?Z.value=w[X]:ma(Z,w[X])),r.state.value[e][X]=Z);else if(typeof Z=="function"){const yt=B(X,Z);gt[X]=yt,a.actions[X]=Z}}return Je(J,gt),Je(it(J),gt),Object.defineProperty(J,"$state",{get:()=>r.state.value[e],set:X=>{S(Z=>{Je(Z,X)})}}),r._p.forEach(X=>{Je(J,o.run(()=>X({store:J,app:r._a,pinia:r,options:a})))}),w&&i&&n.hydrate&&n.hydrate(J.$state,w),l=!0,u=!0,J}function Ty(e,t,n){let r,s;const i=typeof t=="function";typeof e=="string"?(r=e,s=i?n:t):(s=e,r=e.id);function o(a,c){const l=f_();return a=a||(l?Oe(Wf,null):null),a&&Gi(a),a=Gf,a._s.has(r)||(i?Yf(r,t,s,a):wy(r,s,a)),a._s.get(r)}return o.$id=r,o}function Iy(e){return typeof e=="object"&&e!==null}function uu(e,t){return e=Iy(e)?e:Object.create(null),new Proxy(e,{get(n,r,s){return r==="key"?Reflect.get(n,r,s):Reflect.get(n,r,s)||Reflect.get(t,r,s)}})}function Ay(e,t){return t.reduce((n,r)=>n==null?void 0:n[r],e)}function Ry(e,t,n){return t.slice(0,-1).reduce((r,s)=>/^(__proto__)$/.test(s)?{}:r[s]=r[s]||{},e)[t[t.length-1]]=n,e}function Sy(e,t){return t.reduce((n,r)=>{const s=r.split(".");return Ry(n,s,Ay(e,s))},{})}function by(e,t){return n=>{var r;try{const{storage:s=localStorage,beforeRestore:i=void 0,afterRestore:o=void 0,serializer:a={serialize:JSON.stringify,deserialize:JSON.parse},key:c=t.$id,paths:l=null,debug:u=!1}=n;return{storage:s,beforeRestore:i,afterRestore:o,serializer:a,key:((r=e.key)!=null?r:h=>h)(typeof c=="string"?c:c(t.$id)),paths:l,debug:u}}catch(s){return n.debug&&console.error("[pinia-plugin-persistedstate]",s),null}}}function hu(e,{storage:t,serializer:n,key:r,debug:s}){try{const i=t==null?void 0:t.getItem(r);i&&e.$patch(n==null?void 0:n.deserialize(i))}catch(i){s&&console.error("[pinia-plugin-persistedstate]",i)}}function fu(e,{storage:t,serializer:n,key:r,paths:s,debug:i}){try{const o=Array.isArray(s)?Sy(e,s):e;t.setItem(r,n.serialize(o))}catch(o){i&&console.error("[pinia-plugin-persistedstate]",o)}}function Cy(e={}){return t=>{const{auto:n=!1}=e,{options:{persist:r=n},store:s,pinia:i}=t;if(!r)return;if(!(s.$id in i.state.value)){const a=i._s.get(s.$id.replace("__hot:",""));a&&Promise.resolve().then(()=>a.$persist());return}const o=(Array.isArray(r)?r.map(a=>uu(a,e)):[uu(r,e)]).map(by(e,s)).filter(Boolean);s.$persist=()=>{o.forEach(a=>{fu(s.$state,a)})},s.$hydrate=({runHooks:a=!0}={})=>{o.forEach(c=>{const{beforeRestore:l,afterRestore:u}=c;a&&(l==null||l(t)),hu(s,c),a&&(u==null||u(t))})},o.forEach(a=>{const{beforeRestore:c,afterRestore:l}=a;c==null||c(t),hu(s,a),l==null||l(t),s.$subscribe((u,h)=>{fu(h,a)},{detached:!0})})}}var Py=Cy();const Vy="modulepreload",Dy=function(e){return"/"+e},du={},In=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.all(n.map(c=>{if(c=Dy(c),c in du)return;du[c]=!0;const l=c.endsWith(".css"),u=l?'[rel="stylesheet"]':"";if(!!r)for(let g=i.length-1;g>=0;g--){const w=i[g];if(w.href===c&&(!l||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${u}`))return;const f=document.createElement("link");if(f.rel=l?"stylesheet":Vy,l||(f.as="script",f.crossOrigin=""),f.href=c,a&&f.setAttribute("nonce",a),document.head.appendChild(f),l)return new Promise((g,w)=>{f.addEventListener("load",g),f.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${c}`)))})}))}return s.then(()=>t()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const er=typeof document<"u";function xy(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const ht=Object.assign;function No(e,t){const n={};for(const r in t){const s=t[r];n[r]=Ee(s)?s.map(e):e(s)}return n}const Wr=()=>{},Ee=Array.isArray,Jf=/#/g,Oy=/&/g,Ny=/\//g,ky=/=/g,My=/\?/g,Xf=/\+/g,Ly=/%5B/g,Fy=/%5D/g,Zf=/%5E/g,By=/%60/g,td=/%7B/g,Uy=/%7C/g,ed=/%7D/g,$y=/%20/g;function vc(e){return encodeURI(""+e).replace(Uy,"|").replace(Ly,"[").replace(Fy,"]")}function jy(e){return vc(e).replace(td,"{").replace(ed,"}").replace(Zf,"^")}function _a(e){return vc(e).replace(Xf,"%2B").replace($y,"+").replace(Jf,"%23").replace(Oy,"%26").replace(By,"`").replace(td,"{").replace(ed,"}").replace(Zf,"^")}function qy(e){return _a(e).replace(ky,"%3D")}function zy(e){return vc(e).replace(Jf,"%23").replace(My,"%3F")}function Hy(e){return e==null?"":zy(e).replace(Ny,"%2F")}function as(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const Ky=/\/$/,Gy=e=>e.replace(Ky,"");function ko(e,t,n="/"){let r,s={},i="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),i=t.slice(c+1,a>-1?a:t.length),s=e(i)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=Jy(r??t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:as(o)}}function Wy(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function pu(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Qy(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&mr(t.matched[r],n.matched[s])&&nd(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function mr(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function nd(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Yy(e[n],t[n]))return!1;return!0}function Yy(e,t){return Ee(e)?gu(e,t):Ee(t)?gu(t,e):e===t}function gu(e,t){return Ee(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Jy(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}var cs;(function(e){e.pop="pop",e.push="push"})(cs||(cs={}));var Qr;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Qr||(Qr={}));function Xy(e){if(!e)if(er){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Gy(e)}const Zy=/^[^#]+#/;function tv(e,t){return e.replace(Zy,"#")+t}function ev(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Wi=()=>({left:window.scrollX,top:window.scrollY});function nv(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=ev(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function mu(e,t){return(history.state?history.state.position-t:-1)+e}const ya=new Map;function rv(e,t){ya.set(e,t)}function sv(e){const t=ya.get(e);return ya.delete(e),t}let iv=()=>location.protocol+"//"+location.host;function rd(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let a=s.includes(e.slice(i))?e.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),pu(c,"")}return pu(n,e)+r+s}function ov(e,t,n,r){let s=[],i=[],o=null;const a=({state:f})=>{const g=rd(e,location),w=n.value,R=t.value;let S=0;if(f){if(n.value=g,t.value=f,o&&o===w){o=null;return}S=R?f.position-R.position:0}else r(g);s.forEach(O=>{O(n.value,w,{delta:S,type:cs.pop,direction:S?S>0?Qr.forward:Qr.back:Qr.unknown})})};function c(){o=n.value}function l(f){s.push(f);const g=()=>{const w=s.indexOf(f);w>-1&&s.splice(w,1)};return i.push(g),g}function u(){const{history:f}=window;f.state&&f.replaceState(ht({},f.state,{scroll:Wi()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function _u(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?Wi():null}}function av(e){const{history:t,location:n}=window,r={value:rd(e,n)},s={value:t.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=e.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?e:e.slice(h))+c:iv()+e+c;try{t[u?"replaceState":"pushState"](l,"",f),s.value=l}catch(g){console.error(g),n[u?"replace":"assign"](f)}}function o(c,l){const u=ht({},t.state,_u(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=ht({},s.value,t.state,{forward:c,scroll:Wi()});i(u.current,u,!0);const h=ht({},_u(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function cv(e){e=Xy(e);const t=av(e),n=ov(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ht({location:"",base:e,go:r,createHref:tv.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function lv(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),cv(e)}function uv(e){return typeof e=="string"||e&&typeof e=="object"}function sd(e){return typeof e=="string"||typeof e=="symbol"}const Ye={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},id=Symbol("");var yu;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(yu||(yu={}));function _r(e,t){return ht(new Error,{type:e,[id]:!0},t)}function $e(e,t){return e instanceof Error&&id in e&&(t==null||!!(e.type&t))}const vu="[^/]+?",hv={sensitive:!1,strict:!1,start:!0,end:!0},fv=/[.+*?^${}()[\]/\\]/g;function dv(e,t){const n=ht({},hv,t),r=[];let s=n.start?"^":"";const i=[];for(const l of e){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const f=l[h];let g=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(fv,"\\$&"),g+=40;else if(f.type===1){const{value:w,repeatable:R,optional:S,regexp:O}=f;i.push({name:w,repeatable:R,optional:S});const M=O||vu;if(M!==vu){g+=10;try{new RegExp(`(${M})`)}catch(W){throw new Error(`Invalid custom RegExp for param "${w}" (${M}): `+W.message)}}let B=R?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;h||(B=S&&l.length<2?`(?:/${B})`:"/"+B),S&&(B+="?"),s+=B,g+=20,S&&(g+=-8),R&&(g+=-20),M===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const g=u[f]||"",w=i[f-1];h[w.name]=g&&w.repeatable?g.split("/"):g}return h}function c(l){let u="",h=!1;for(const f of e){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of f)if(g.type===0)u+=g.value;else if(g.type===1){const{value:w,repeatable:R,optional:S}=g,O=w in l?l[w]:"";if(Ee(O)&&!R)throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);const M=Ee(O)?O.join("/"):O;if(!M)if(S)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${w}"`);u+=M}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function pv(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function gv(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const i=pv(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Eu(r))return 1;if(Eu(s))return-1}return s.length-r.length}function Eu(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const mv={type:0,value:""},_v=/[a-zA-Z0-9_]/;function yv(e){if(!e)return[[]];if(e==="/")return[[mv]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:c==="("?n=2:_v.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function vv(e,t,n){const r=dv(yv(e.path),n),s=ht(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Ev(e,t){const n=[],r=new Map;t=Iu({strict:!1,end:!0,sensitive:!1},t);function s(u){return r.get(u)}function i(u,h,f){const g=!f,w=wv(u);w.aliasOf=f&&f.record;const R=Iu(t,u),S=[w];if("alias"in u){const B=typeof u.alias=="string"?[u.alias]:u.alias;for(const W of B)S.push(ht({},w,{components:f?f.record.components:w.components,path:W,aliasOf:f?f.record:w}))}let O,M;for(const B of S){const{path:W}=B;if(h&&W[0]!=="/"){const J=h.record.path,q=J[J.length-1]==="/"?"":"/";B.path=h.record.path+(W&&q+W)}if(O=vv(B,h,R),f?f.alias.push(O):(M=M||O,M!==O&&M.alias.push(O),g&&u.name&&!Tu(O)&&o(u.name)),w.children){const J=w.children;for(let q=0;q<J.length;q++)i(J[q],O,f&&f.children[q])}f=f||O,(O.record.components&&Object.keys(O.record.components).length||O.record.name||O.record.redirect)&&c(O)}return M?()=>{o(M)}:Wr}function o(u){if(sd(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&gv(u,n[h])>=0&&(u.record.path!==n[h].record.path||!od(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Tu(u)&&r.set(u.record.name,u)}function l(u,h){let f,g={},w,R;if("name"in u&&u.name){if(f=r.get(u.name),!f)throw _r(1,{location:u});R=f.record.name,g=ht(wu(h.params,f.keys.filter(M=>!M.optional).concat(f.parent?f.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),u.params&&wu(u.params,f.keys.map(M=>M.name))),w=f.stringify(g)}else if(u.path!=null)w=u.path,f=n.find(M=>M.re.test(w)),f&&(g=f.parse(w),R=f.record.name);else{if(f=h.name?r.get(h.name):n.find(M=>M.re.test(h.path)),!f)throw _r(1,{location:u,currentLocation:h});R=f.record.name,g=ht({},h.params,u.params),w=f.stringify(g)}const S=[];let O=f;for(;O;)S.unshift(O.record),O=O.parent;return{name:R,path:w,params:g,matched:S,meta:Iv(S)}}return e.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function wu(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function wv(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Tv(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Tv(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Tu(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Iv(e){return e.reduce((t,n)=>ht(t,n.meta),{})}function Iu(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function od(e,t){return t.children.some(n=>n===e||od(e,n))}function Av(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Xf," "),o=i.indexOf("="),a=as(o<0?i:i.slice(0,o)),c=o<0?null:as(i.slice(o+1));if(a in t){let l=t[a];Ee(l)||(l=t[a]=[l]),l.push(c)}else t[a]=c}return t}function Au(e){let t="";for(let n in e){const r=e[n];if(n=qy(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Ee(r)?r.map(i=>i&&_a(i)):[r&&_a(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Rv(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Ee(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const Sv=Symbol(""),Ru=Symbol(""),Ec=Symbol(""),ad=Symbol(""),va=Symbol("");function Nr(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function en(e,t,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const l=f=>{f===!1?c(_r(4,{from:n,to:t})):f instanceof Error?c(f):uv(f)?c(_r(2,{from:t,to:f})):(o&&r.enterCallbacks[s]===o&&typeof f=="function"&&o.push(f),a())},u=i(()=>e.call(r&&r.instances[s],t,n,l));let h=Promise.resolve(u);e.length<3&&(h=h.then(l)),h.catch(f=>c(f))})}function Mo(e,t,n,r,s=i=>i()){const i=[];for(const o of e)for(const a in o.components){let c=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(bv(c)){const u=(c.__vccOpts||c)[t];u&&i.push(en(u,n,r,o,a,s))}else{let l=c();i.push(()=>l.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const h=xy(u)?u.default:u;o.components[a]=h;const g=(h.__vccOpts||h)[t];return g&&en(g,n,r,o,a,s)()}))}}return i}function bv(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Su(e){const t=Oe(Ec),n=Oe(ad),r=Zt(()=>t.resolve(an(e.to))),s=Zt(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(mr.bind(null,u));if(f>-1)return f;const g=bu(c[l-2]);return l>1&&bu(u)===g&&h[h.length-1].path!==g?h.findIndex(mr.bind(null,c[l-2])):f}),i=Zt(()=>s.value>-1&&Dv(n.params,r.value.params)),o=Zt(()=>s.value>-1&&s.value===n.matched.length-1&&nd(n.params,r.value.params));function a(c={}){return Vv(c)?t[an(e.replace)?"replace":"push"](an(e.to)).catch(Wr):Promise.resolve()}return{route:r,href:Zt(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const Cv=Cf({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Su,setup(e,{slots:t}){const n=Is(Su(e)),{options:r}=Oe(Ec),s=Zt(()=>({[Cu(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Cu(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Hf("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Pv=Cv;function Vv(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Dv(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Ee(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function bu(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Cu=(e,t,n)=>e??t??n,xv=Cf({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Oe(va),s=Zt(()=>e.route||r.value),i=Oe(Ru,0),o=Zt(()=>{let l=an(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=Zt(()=>s.value.matched[o.value]);si(Ru,Zt(()=>o.value+1)),si(Sv,a),si(va,s);const c=uc();return zr(()=>[c.value,a.value,e.name],([l,u,h],[f,g,w])=>{u&&(u.instances[h]=l,g&&g!==u&&l&&l===f&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!mr(u,g)||!f)&&(u.enterCallbacks[h]||[]).forEach(R=>R(l))},{flush:"post"}),()=>{const l=s.value,u=e.name,h=a.value,f=h&&h.components[u];if(!f)return Pu(n.default,{Component:f,route:l});const g=h.props[u],w=g?g===!0?l.params:typeof g=="function"?g(l):g:null,S=Hf(f,ht({},w,t,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Pu(n.default,{Component:S,route:l})||S}}});function Pu(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Ov=xv;function Nv(e){const t=Ev(e.routes,e),n=e.parseQuery||Av,r=e.stringifyQuery||Au,s=e.history,i=Nr(),o=Nr(),a=Nr(),c=Im(Ye);let l=Ye;er&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=No.bind(null,y=>""+y),h=No.bind(null,Hy),f=No.bind(null,as);function g(y,N){let D,L;return sd(y)?(D=t.getRecordMatcher(y),L=N):L=y,t.addRoute(L,D)}function w(y){const N=t.getRecordMatcher(y);N&&t.removeRoute(N)}function R(){return t.getRoutes().map(y=>y.record)}function S(y){return!!t.getRecordMatcher(y)}function O(y,N){if(N=ht({},N||c.value),typeof y=="string"){const p=ko(n,y,N.path),m=t.resolve({path:p.path},N),v=s.createHref(p.fullPath);return ht(p,m,{params:f(m.params),hash:as(p.hash),redirectedFrom:void 0,href:v})}let D;if(y.path!=null)D=ht({},y,{path:ko(n,y.path,N.path).path});else{const p=ht({},y.params);for(const m in p)p[m]==null&&delete p[m];D=ht({},y,{params:h(p)}),N.params=h(N.params)}const L=t.resolve(D,N),lt=y.hash||"";L.params=u(f(L.params));const vt=Wy(r,ht({},y,{hash:jy(lt),path:L.path})),d=s.createHref(vt);return ht({fullPath:vt,hash:lt,query:r===Au?Rv(y.query):y.query||{}},L,{redirectedFrom:void 0,href:d})}function M(y){return typeof y=="string"?ko(n,y,c.value.path):ht({},y)}function B(y,N){if(l!==y)return _r(8,{from:N,to:y})}function W(y){return gt(y)}function J(y){return W(ht(M(y),{replace:!0}))}function q(y){const N=y.matched[y.matched.length-1];if(N&&N.redirect){const{redirect:D}=N;let L=typeof D=="function"?D(y):D;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=M(L):{path:L},L.params={}),ht({query:y.query,hash:y.hash,params:L.path!=null?{}:y.params},L)}}function gt(y,N){const D=l=O(y),L=c.value,lt=y.state,vt=y.force,d=y.replace===!0,p=q(D);if(p)return gt(ht(M(p),{state:typeof p=="object"?ht({},lt,p.state):lt,force:vt,replace:d}),N||D);const m=D;m.redirectedFrom=N;let v;return!vt&&Qy(r,L,D)&&(v=_r(16,{to:m,from:L}),Te(L,L,!0,!1)),(v?Promise.resolve(v):yt(m,L)).catch(_=>$e(_)?$e(_,2)?_:We(_):ct(_,m,L)).then(_=>{if(_){if($e(_,2))return gt(ht({replace:d},M(_.to),{state:typeof _.to=="object"?ht({},lt,_.to.state):lt,force:vt}),N||m)}else _=ce(m,L,!0,d,lt);return qt(m,L,_),_})}function X(y,N){const D=B(y,N);return D?Promise.reject(D):Promise.resolve()}function Z(y){const N=Qn.values().next().value;return N&&typeof N.runWithContext=="function"?N.runWithContext(y):y()}function yt(y,N){let D;const[L,lt,vt]=kv(y,N);D=Mo(L.reverse(),"beforeRouteLeave",y,N);for(const p of L)p.leaveGuards.forEach(m=>{D.push(en(m,y,N))});const d=X.bind(null,y,N);return D.push(d),zt(D).then(()=>{D=[];for(const p of i.list())D.push(en(p,y,N));return D.push(d),zt(D)}).then(()=>{D=Mo(lt,"beforeRouteUpdate",y,N);for(const p of lt)p.updateGuards.forEach(m=>{D.push(en(m,y,N))});return D.push(d),zt(D)}).then(()=>{D=[];for(const p of vt)if(p.beforeEnter)if(Ee(p.beforeEnter))for(const m of p.beforeEnter)D.push(en(m,y,N));else D.push(en(p.beforeEnter,y,N));return D.push(d),zt(D)}).then(()=>(y.matched.forEach(p=>p.enterCallbacks={}),D=Mo(vt,"beforeRouteEnter",y,N,Z),D.push(d),zt(D))).then(()=>{D=[];for(const p of o.list())D.push(en(p,y,N));return D.push(d),zt(D)}).catch(p=>$e(p,8)?p:Promise.reject(p))}function qt(y,N,D){a.list().forEach(L=>Z(()=>L(y,N,D)))}function ce(y,N,D,L,lt){const vt=B(y,N);if(vt)return vt;const d=N===Ye,p=er?history.state:{};D&&(L||d?s.replace(y.fullPath,ht({scroll:d&&p&&p.scroll},lt)):s.push(y.fullPath,lt)),c.value=y,Te(y,N,D,d),We()}let de;function En(){de||(de=s.listen((y,N,D)=>{if(!Bs.listening)return;const L=O(y),lt=q(L);if(lt){gt(ht(lt,{replace:!0}),L).catch(Wr);return}l=L;const vt=c.value;er&&rv(mu(vt.fullPath,D.delta),Wi()),yt(L,vt).catch(d=>$e(d,12)?d:$e(d,2)?(gt(d.to,L).then(p=>{$e(p,20)&&!D.delta&&D.type===cs.pop&&s.go(-1,!1)}).catch(Wr),Promise.reject()):(D.delta&&s.go(-D.delta,!1),ct(d,L,vt))).then(d=>{d=d||ce(L,vt,!1),d&&(D.delta&&!$e(d,8)?s.go(-D.delta,!1):D.type===cs.pop&&$e(d,20)&&s.go(-1,!1)),qt(L,vt,d)}).catch(Wr)}))}let pe=Nr(),at=Nr(),dt;function ct(y,N,D){We(y);const L=at.list();return L.length?L.forEach(lt=>lt(y,N,D)):console.error(y),Promise.reject(y)}function Ue(){return dt&&c.value!==Ye?Promise.resolve():new Promise((y,N)=>{pe.add([y,N])})}function We(y){return dt||(dt=!y,En(),pe.list().forEach(([N,D])=>y?D(y):N()),pe.reset()),y}function Te(y,N,D,L){const{scrollBehavior:lt}=e;if(!er||!lt)return Promise.resolve();const vt=!D&&sv(mu(y.fullPath,0))||(L||!D)&&history.state&&history.state.scroll||null;return fc().then(()=>lt(y,N,vt)).then(d=>d&&nv(d)).catch(d=>ct(d,y,N))}const re=y=>s.go(y);let Wn;const Qn=new Set,Bs={currentRoute:c,listening:!0,addRoute:g,removeRoute:w,hasRoute:S,getRoutes:R,resolve:O,options:e,push:W,replace:J,go:re,back:()=>re(-1),forward:()=>re(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:at.add,isReady:Ue,install(y){const N=this;y.component("RouterLink",Pv),y.component("RouterView",Ov),y.config.globalProperties.$router=N,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>an(c)}),er&&!Wn&&c.value===Ye&&(Wn=!0,W(s.location).catch(lt=>{}));const D={};for(const lt in Ye)Object.defineProperty(D,lt,{get:()=>c.value[lt],enumerable:!0});y.provide(Ec,N),y.provide(ad,ff(D)),y.provide(va,c);const L=y.unmount;Qn.add(y),y.unmount=function(){Qn.delete(y),Qn.size<1&&(l=Ye,de&&de(),de=null,c.value=Ye,Wn=!1,dt=!1),L()}}};function zt(y){return y.reduce((N,D)=>N.then(()=>Z(D)),Promise.resolve())}return Bs}function kv(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const a=t.matched[o];a&&(e.matched.find(l=>mr(l,a))?r.push(a):n.push(a));const c=e.matched[o];c&&(t.matched.find(l=>mr(l,c))||s.push(c))}return[n,r,s]}var Vu={};/**
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
 */const cd=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},Mv=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},ld={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,a=o?e[s+1]:0,c=s+2<e.length,l=c?e[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(f=64)),r.push(n[u],n[h],n[f],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(cd(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Mv(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const l=s<e.length?n[e.charAt(s)]:64;++s;const h=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new Lv;const f=i<<2|a>>4;if(r.push(f),l!==64){const g=a<<4&240|l>>2;if(r.push(g),h!==64){const w=l<<6&192|h;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Lv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Fv=function(e){const t=cd(e);return ld.encodeByteArray(t,!0)},gi=function(e){return Fv(e).replace(/\./g,"")},Bv=function(e){try{return ld.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Uv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const $v=()=>Uv().__FIREBASE_DEFAULTS__,jv=()=>{if(typeof process>"u"||typeof Vu>"u")return;const e=Vu.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},qv=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Bv(e[1]);return t&&JSON.parse(t)},wc=()=>{try{return $v()||jv()||qv()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},zv=e=>{var t,n;return(n=(t=wc())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Hv=e=>{const t=zv(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},ud=()=>{var e;return(e=wc())===null||e===void 0?void 0:e.config};/**
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
 */class Kv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function Gv(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[gi(JSON.stringify(n)),gi(JSON.stringify(o)),""].join(".")}/**
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
 */function mi(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Wv(){var e;const t=(e=wc())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Qv(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Yv(){return!Wv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Tc(){try{return typeof indexedDB=="object"}catch{return!1}}function hd(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}function Jv(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Xv="FirebaseError";class _n extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Xv,Object.setPrototypeOf(this,_n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qi.prototype.create)}}class Qi{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?Zv(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new _n(s,a,r)}}function Zv(e,t){return e.replace(tE,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const tE=/\{\$([^}]+)}/g;function _i(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(Du(i)&&Du(o)){if(!_i(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Du(e){return e!==null&&typeof e=="object"}/**
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
 */const eE=1e3,nE=2,rE=4*60*60*1e3,sE=.5;function xu(e,t=eE,n=nE){const r=t*Math.pow(n,e),s=Math.round(sE*r*(Math.random()-.5)*2);return Math.min(rE,r+s)}/**
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
 */function Ic(e){return e&&e._delegate?e._delegate:e}class He{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const An="[DEFAULT]";/**
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
 */class iE{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Kv;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(aE(t))try{this.getOrInitializeService({instanceIdentifier:An})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=An){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=An){return this.instances.has(t)}getOptions(t=An){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:oE(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=An){return this.component?this.component.multipleInstances?t:An:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function oE(e){return e===An?void 0:e}function aE(e){return e.instantiationMode==="EAGER"}/**
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
 */class cE{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new iE(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var rt;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(rt||(rt={}));const lE={debug:rt.DEBUG,verbose:rt.VERBOSE,info:rt.INFO,warn:rt.WARN,error:rt.ERROR,silent:rt.SILENT},uE=rt.INFO,hE={[rt.DEBUG]:"log",[rt.VERBOSE]:"log",[rt.INFO]:"info",[rt.WARN]:"warn",[rt.ERROR]:"error"},fE=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=hE[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ac{constructor(t){this.name=t,this._logLevel=uE,this._logHandler=fE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in rt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?lE[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,rt.DEBUG,...t),this._logHandler(this,rt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,rt.VERBOSE,...t),this._logHandler(this,rt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,rt.INFO,...t),this._logHandler(this,rt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,rt.WARN,...t),this._logHandler(this,rt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,rt.ERROR,...t),this._logHandler(this,rt.ERROR,...t)}}const dE=(e,t)=>t.some(n=>e instanceof n);let Ou,Nu;function pE(){return Ou||(Ou=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gE(){return Nu||(Nu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fd=new WeakMap,Ea=new WeakMap,dd=new WeakMap,Lo=new WeakMap,Rc=new WeakMap;function mE(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(ln(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&fd.set(n,e)}).catch(()=>{}),Rc.set(t,e),t}function _E(e){if(Ea.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});Ea.set(e,t)}let wa={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Ea.get(e);if(t==="objectStoreNames")return e.objectStoreNames||dd.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ln(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function yE(e){wa=e(wa)}function vE(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Fo(this),t,...n);return dd.set(r,t.sort?t.sort():[t]),ln(r)}:gE().includes(e)?function(...t){return e.apply(Fo(this),t),ln(fd.get(this))}:function(...t){return ln(e.apply(Fo(this),t))}}function EE(e){return typeof e=="function"?vE(e):(e instanceof IDBTransaction&&_E(e),dE(e,pE())?new Proxy(e,wa):e)}function ln(e){if(e instanceof IDBRequest)return mE(e);if(Lo.has(e))return Lo.get(e);const t=EE(e);return t!==e&&(Lo.set(e,t),Rc.set(t,e)),t}const Fo=e=>Rc.get(e);function pd(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=ln(o);return r&&o.addEventListener("upgradeneeded",c=>{r(ln(o.result),c.oldVersion,c.newVersion,ln(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const wE=["get","getKey","getAll","getAllKeys","count"],TE=["put","add","delete","clear"],Bo=new Map;function ku(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Bo.get(t))return Bo.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=TE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||wE.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Bo.set(t,i),i}yE(e=>({...e,get:(t,n,r)=>ku(t,n)||e.get(t,n,r),has:(t,n)=>!!ku(t,n)||e.has(t,n)}));/**
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
 */class IE{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(AE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function AE(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ta="@firebase/app",Mu="0.9.29";/**
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
 */const Bn=new Ac("@firebase/app"),RE="@firebase/app-compat",SE="@firebase/analytics-compat",bE="@firebase/analytics",CE="@firebase/app-check-compat",PE="@firebase/app-check",VE="@firebase/auth",DE="@firebase/auth-compat",xE="@firebase/database",OE="@firebase/database-compat",NE="@firebase/functions",kE="@firebase/functions-compat",ME="@firebase/installations",LE="@firebase/installations-compat",FE="@firebase/messaging",BE="@firebase/messaging-compat",UE="@firebase/performance",$E="@firebase/performance-compat",jE="@firebase/remote-config",qE="@firebase/remote-config-compat",zE="@firebase/storage",HE="@firebase/storage-compat",KE="@firebase/firestore",GE="@firebase/firestore-compat",WE="firebase",QE="10.9.0";/**
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
 */const Ia="[DEFAULT]",YE={[Ta]:"fire-core",[RE]:"fire-core-compat",[bE]:"fire-analytics",[SE]:"fire-analytics-compat",[PE]:"fire-app-check",[CE]:"fire-app-check-compat",[VE]:"fire-auth",[DE]:"fire-auth-compat",[xE]:"fire-rtdb",[OE]:"fire-rtdb-compat",[NE]:"fire-fn",[kE]:"fire-fn-compat",[ME]:"fire-iid",[LE]:"fire-iid-compat",[FE]:"fire-fcm",[BE]:"fire-fcm-compat",[UE]:"fire-perf",[$E]:"fire-perf-compat",[jE]:"fire-rc",[qE]:"fire-rc-compat",[zE]:"fire-gcs",[HE]:"fire-gcs-compat",[KE]:"fire-fst",[GE]:"fire-fst-compat","fire-js":"fire-js",[WE]:"fire-js-all"};/**
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
 */const yi=new Map,Aa=new Map;function JE(e,t){try{e.container.addComponent(t)}catch(n){Bn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function dn(e){const t=e.name;if(Aa.has(t))return Bn.debug(`There were multiple attempts to register component ${t}.`),!1;Aa.set(t,e);for(const n of yi.values())JE(n,e);return!0}function Rs(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const XE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},un=new Qi("app","Firebase",XE);/**
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
 */class ZE{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new He("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw un.create("app-deleted",{appName:this._name})}}/**
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
 */const tw=QE;function gd(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Ia,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw un.create("bad-app-name",{appName:String(s)});if(n||(n=ud()),!n)throw un.create("no-options");const i=yi.get(s);if(i){if(_i(n,i.options)&&_i(r,i.config))return i;throw un.create("duplicate-app",{appName:s})}const o=new cE(s);for(const c of Aa.values())o.addComponent(c);const a=new ZE(n,r,o);return yi.set(s,a),a}function md(e=Ia){const t=yi.get(e);if(!t&&e===Ia&&ud())return gd();if(!t)throw un.create("no-app",{appName:e});return t}function Ne(e,t,n){var r;let s=(r=YE[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${t}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Bn.warn(a.join(" "));return}dn(new He(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const ew="firebase-heartbeat-database",nw=1,ls="firebase-heartbeat-store";let Uo=null;function _d(){return Uo||(Uo=pd(ew,nw,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(ls)}catch(n){console.warn(n)}}}}).catch(e=>{throw un.create("idb-open",{originalErrorMessage:e.message})})),Uo}async function rw(e){try{const n=(await _d()).transaction(ls),r=await n.objectStore(ls).get(yd(e));return await n.done,r}catch(t){if(t instanceof _n)Bn.warn(t.message);else{const n=un.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Bn.warn(n.message)}}}async function Lu(e,t){try{const r=(await _d()).transaction(ls,"readwrite");await r.objectStore(ls).put(t,yd(e)),await r.done}catch(n){if(n instanceof _n)Bn.warn(n.message);else{const r=un.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Bn.warn(r.message)}}}function yd(e){return`${e.name}!${e.options.appId}`}/**
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
 */const sw=1024,iw=30*24*60*60*1e3;class ow{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new cw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Fu();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=iw}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Fu(),{heartbeatsToSend:r,unsentEntries:s}=aw(this._heartbeatsCache.heartbeats),i=gi(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Fu(){return new Date().toISOString().substring(0,10)}function aw(e,t=sw){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Bu(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Bu(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class cw{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Tc()?hd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await rw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Lu(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Lu(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Bu(e){return gi(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function lw(e){dn(new He("platform-logger",t=>new IE(t),"PRIVATE")),dn(new He("heartbeat",t=>new ow(t),"PRIVATE")),Ne(Ta,Mu,e),Ne(Ta,Mu,"esm2017"),Ne("fire-js","")}lw("");var uw="firebase",hw="10.9.0";/**
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
 */Ne(uw,hw,"app");const vd="@firebase/installations",Sc="0.6.5";/**
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
 */const Ed=1e4,wd=`w:${Sc}`,Td="FIS_v2",fw="https://firebaseinstallations.googleapis.com/v1",dw=60*60*1e3,pw="installations",gw="Installations";/**
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
 */const mw={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Un=new Qi(pw,gw,mw);function Id(e){return e instanceof _n&&e.code.includes("request-failed")}/**
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
 */function Ad({projectId:e}){return`${fw}/projects/${e}/installations`}function Rd(e){return{token:e.token,requestStatus:2,expiresIn:yw(e.expiresIn),creationTime:Date.now()}}async function Sd(e,t){const r=(await t.json()).error;return Un.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function bd({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function _w(e,{refreshToken:t}){const n=bd(e);return n.append("Authorization",vw(t)),n}async function Cd(e){const t=await e();return t.status>=500&&t.status<600?e():t}function yw(e){return Number(e.replace("s","000"))}function vw(e){return`${Td} ${e}`}/**
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
 */async function Ew({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Ad(e),s=bd(e),i=t.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:n,authVersion:Td,appId:e.appId,sdkVersion:wd},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await Cd(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Rd(l.authToken)}}else throw await Sd("Create Installation",c)}/**
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
 */function Pd(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function ww(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Tw=/^[cdef][\w-]{21}$/,Ra="";function Iw(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Aw(e);return Tw.test(n)?n:Ra}catch{return Ra}}function Aw(e){return ww(e).substr(0,22)}/**
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
 */function Yi(e){return`${e.appName}!${e.appId}`}/**
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
 */const Vd=new Map;function Dd(e,t){const n=Yi(e);xd(n,t),Rw(n,t)}function xd(e,t){const n=Vd.get(e);if(n)for(const r of n)r(t)}function Rw(e,t){const n=Sw();n&&n.postMessage({key:e,fid:t}),bw()}let Pn=null;function Sw(){return!Pn&&"BroadcastChannel"in self&&(Pn=new BroadcastChannel("[Firebase] FID Change"),Pn.onmessage=e=>{xd(e.data.key,e.data.fid)}),Pn}function bw(){Vd.size===0&&Pn&&(Pn.close(),Pn=null)}/**
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
 */const Cw="firebase-installations-database",Pw=1,$n="firebase-installations-store";let $o=null;function bc(){return $o||($o=pd(Cw,Pw,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore($n)}}})),$o}async function vi(e,t){const n=Yi(e),s=(await bc()).transaction($n,"readwrite"),i=s.objectStore($n),o=await i.get(n);return await i.put(t,n),await s.done,(!o||o.fid!==t.fid)&&Dd(e,t.fid),t}async function Od(e){const t=Yi(e),r=(await bc()).transaction($n,"readwrite");await r.objectStore($n).delete(t),await r.done}async function Ji(e,t){const n=Yi(e),s=(await bc()).transaction($n,"readwrite"),i=s.objectStore($n),o=await i.get(n),a=t(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&Dd(e,a.fid),a}/**
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
 */async function Cc(e){let t;const n=await Ji(e.appConfig,r=>{const s=Vw(r),i=Dw(e,s);return t=i.registrationPromise,i.installationEntry});return n.fid===Ra?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Vw(e){const t=e||{fid:Iw(),registrationStatus:0};return Nd(t)}function Dw(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Un.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=xw(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Ow(e)}:{installationEntry:t}}async function xw(e,t){try{const n=await Ew(e,t);return vi(e.appConfig,n)}catch(n){throw Id(n)&&n.customData.serverCode===409?await Od(e.appConfig):await vi(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Ow(e){let t=await Uu(e.appConfig);for(;t.registrationStatus===1;)await Pd(100),t=await Uu(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Cc(e);return r||n}return t}function Uu(e){return Ji(e,t=>{if(!t)throw Un.create("installation-not-found");return Nd(t)})}function Nd(e){return Nw(e)?{fid:e.fid,registrationStatus:0}:e}function Nw(e){return e.registrationStatus===1&&e.registrationTime+Ed<Date.now()}/**
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
 */async function kw({appConfig:e,heartbeatServiceProvider:t},n){const r=Mw(e,n),s=_w(e,n),i=t.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:wd,appId:e.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await Cd(()=>fetch(r,a));if(c.ok){const l=await c.json();return Rd(l)}else throw await Sd("Generate Auth Token",c)}function Mw(e,{fid:t}){return`${Ad(e)}/${t}/authTokens:generate`}/**
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
 */async function Pc(e,t=!1){let n;const r=await Ji(e.appConfig,i=>{if(!kd(i))throw Un.create("not-registered");const o=i.authToken;if(!t&&Bw(o))return i;if(o.requestStatus===1)return n=Lw(e,t),i;{if(!navigator.onLine)throw Un.create("app-offline");const a=$w(i);return n=Fw(e,a),a}});return n?await n:r.authToken}async function Lw(e,t){let n=await $u(e.appConfig);for(;n.authToken.requestStatus===1;)await Pd(100),n=await $u(e.appConfig);const r=n.authToken;return r.requestStatus===0?Pc(e,t):r}function $u(e){return Ji(e,t=>{if(!kd(t))throw Un.create("not-registered");const n=t.authToken;return jw(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Fw(e,t){try{const n=await kw(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await vi(e.appConfig,r),n}catch(n){if(Id(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Od(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await vi(e.appConfig,r)}throw n}}function kd(e){return e!==void 0&&e.registrationStatus===2}function Bw(e){return e.requestStatus===2&&!Uw(e)}function Uw(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+dw}function $w(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function jw(e){return e.requestStatus===1&&e.requestTime+Ed<Date.now()}/**
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
 */async function qw(e){const t=e,{installationEntry:n,registrationPromise:r}=await Cc(t);return r?r.catch(console.error):Pc(t).catch(console.error),n.fid}/**
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
 */async function zw(e,t=!1){const n=e;return await Hw(n),(await Pc(n,t)).token}async function Hw(e){const{registrationPromise:t}=await Cc(e);t&&await t}/**
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
 */function Kw(e){if(!e||!e.options)throw jo("App Configuration");if(!e.name)throw jo("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw jo(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function jo(e){return Un.create("missing-app-config-values",{valueName:e})}/**
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
 */const Md="installations",Gw="installations-internal",Ww=e=>{const t=e.getProvider("app").getImmediate(),n=Kw(t),r=Rs(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Qw=e=>{const t=e.getProvider("app").getImmediate(),n=Rs(t,Md).getImmediate();return{getId:()=>qw(n),getToken:s=>zw(n,s)}};function Yw(){dn(new He(Md,Ww,"PUBLIC")),dn(new He(Gw,Qw,"PRIVATE"))}Yw();Ne(vd,Sc);Ne(vd,Sc,"esm2017");/**
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
 */const Ei="analytics",Jw="firebase_id",Xw="origin",Zw=60*1e3,tT="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Vc="https://www.googletagmanager.com/gtag/js";/**
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
 */const ie=new Ac("@firebase/analytics");/**
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
 */const eT={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},he=new Qi("analytics","Analytics",eT);/**
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
 */function nT(e){if(!e.startsWith(Vc)){const t=he.create("invalid-gtag-resource",{gtagURL:e});return ie.warn(t.message),""}return e}function Ld(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function rT(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function sT(e,t){const n=rT("firebase-js-sdk-policy",{createScriptURL:nT}),r=document.createElement("script"),s=`${Vc}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function iT(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function oT(e,t,n,r,s,i){const o=r[s];try{if(o)await t[o];else{const c=(await Ld(n)).find(l=>l.measurementId===s);c&&await t[c.appId]}}catch(a){ie.error(a)}e("config",s,i)}async function aT(e,t,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await Ld(n);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&t[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(t)),await Promise.all(i),e("event",r,s||{})}catch(i){ie.error(i)}}function cT(e,t,n,r){async function s(i,...o){try{if(i==="event"){const[a,c]=o;await aT(e,t,n,a,c)}else if(i==="config"){const[a,c]=o;await oT(e,t,n,r,a,c)}else if(i==="consent"){const[a]=o;e("consent","update",a)}else if(i==="get"){const[a,c,l]=o;e("get",a,c,l)}else if(i==="set"){const[a]=o;e("set",a)}else e(i,...o)}catch(a){ie.error(a)}}return s}function lT(e,t,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=cT(i,e,t,n),{gtagCore:i,wrappedGtag:window[s]}}function uT(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Vc)&&n.src.includes(e))return n;return null}/**
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
 */const hT=30,fT=1e3;class dT{constructor(t={},n=fT){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Fd=new dT;function pT(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function gT(e){var t;const{appId:n,apiKey:r}=e,s={method:"GET",headers:pT(r)},i=tT.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((t=c.error)===null||t===void 0)&&t.message&&(a=c.error.message)}catch{}throw he.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function mT(e,t=Fd,n){const{appId:r,apiKey:s,measurementId:i}=e.options;if(!r)throw he.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw he.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new vT;return setTimeout(async()=>{a.abort()},n!==void 0?n:Zw),Bd({appId:r,apiKey:s,measurementId:i},o,a,t)}async function Bd(e,{throttleEndTimeMillis:t,backoffCount:n},r,s=Fd){var i;const{appId:o,measurementId:a}=e;try{await _T(r,t)}catch(c){if(a)return ie.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await gT(e);return s.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!yT(l)){if(s.deleteThrottleMetadata(o),a)return ie.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((i=l==null?void 0:l.customData)===null||i===void 0?void 0:i.httpStatus)===503?xu(n,s.intervalMillis,hT):xu(n,s.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(o,h),ie.debug(`Calling attemptFetch again in ${u} millis`),Bd(e,h,r,s)}}function _T(e,t){return new Promise((n,r)=>{const s=Math.max(t-Date.now(),0),i=setTimeout(n,s);e.addEventListener(()=>{clearTimeout(i),r(he.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function yT(e){if(!(e instanceof _n)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class vT{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function ET(e,t,n,r,s){if(s&&s.global){e("event",n,r);return}else{const i=await t,o=Object.assign(Object.assign({},r),{send_to:i});e("event",n,o)}}/**
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
 */async function wT(){if(Tc())try{await hd()}catch(e){return ie.warn(he.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return ie.warn(he.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function TT(e,t,n,r,s,i,o){var a;const c=mT(e);c.then(g=>{n[g.measurementId]=g.appId,e.options.measurementId&&g.measurementId!==e.options.measurementId&&ie.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>ie.error(g)),t.push(c);const l=wT().then(g=>{if(g)return r.getId()}),[u,h]=await Promise.all([c,l]);uT(i)||sT(i,u.measurementId),s("js",new Date);const f=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return f[Xw]="firebase",f.update=!0,h!=null&&(f[Jw]=h),s("config",u.measurementId,f),u.measurementId}/**
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
 */class IT{constructor(t){this.app=t}_delete(){return delete Yr[this.app.options.appId],Promise.resolve()}}let Yr={},ju=[];const qu={};let qo="dataLayer",AT="gtag",zu,Ud,Hu=!1;function RT(){const e=[];if(Qv()&&e.push("This is a browser extension environment."),Jv()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=he.create("invalid-analytics-context",{errorInfo:t});ie.warn(n.message)}}function ST(e,t,n){RT();const r=e.options.appId;if(!r)throw he.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)ie.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw he.create("no-api-key");if(Yr[r]!=null)throw he.create("already-exists",{id:r});if(!Hu){iT(qo);const{wrappedGtag:i,gtagCore:o}=lT(Yr,ju,qu,qo,AT);Ud=i,zu=o,Hu=!0}return Yr[r]=TT(e,ju,qu,t,zu,qo,n),new IT(e)}function bT(e=md()){e=Ic(e);const t=Rs(e,Ei);return t.isInitialized()?t.getImmediate():CT(e)}function CT(e,t={}){const n=Rs(e,Ei);if(n.isInitialized()){const s=n.getImmediate();if(_i(t,n.getOptions()))return s;throw he.create("already-initialized")}return n.initialize({options:t})}function PT(e,t,n,r){e=Ic(e),ET(Ud,Yr[e.app.options.appId],t,n,r).catch(s=>ie.error(s))}const Ku="@firebase/analytics",Gu="0.10.1";function VT(){dn(new He(Ei,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return ST(r,s,n)},"PUBLIC")),dn(new He("analytics-internal",e,"PRIVATE")),Ne(Ku,Gu),Ne(Ku,Gu,"esm2017");function e(t){try{const n=t.getProvider(Ei).getImmediate();return{logEvent:(r,s,i)=>PT(n,r,s,i)}}catch(n){throw he.create("interop-component-reg-failed",{reason:n})}}}VT();var DT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},P,Dc=Dc||{},H=DT||self;function Xi(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Ss(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function xT(e){return Object.prototype.hasOwnProperty.call(e,zo)&&e[zo]||(e[zo]=++OT)}var zo="closure_uid_"+(1e9*Math.random()>>>0),OT=0;function NT(e,t,n){return e.call.apply(e.bind,arguments)}function kT(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),e.apply(t,s)}}return function(){return e.apply(t,arguments)}}function Qt(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Qt=NT:Qt=kT,Qt.apply(null,arguments)}function Ks(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function Mt(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[s].apply(r,o)}}function yn(){this.s=this.s,this.o=this.o}var MT=0;yn.prototype.s=!1;yn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),MT!=0)&&xT(this)};yn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const $d=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function xc(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Wu(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Xi(r)){const s=e.length||0,i=r.length||0;e.length=s+i;for(let o=0;o<i;o++)e[s+o]=r[o]}else e.push(r)}}function Yt(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Yt.prototype.h=function(){this.defaultPrevented=!0};var LT=function(){if(!H.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const n=()=>{};H.addEventListener("test",n,t),H.removeEventListener("test",n,t)}catch{}return e}();function us(e){return/^[\s\xa0]*$/.test(e)}function Zi(){var e=H.navigator;return e&&(e=e.userAgent)?e:""}function Pe(e){return Zi().indexOf(e)!=-1}function Oc(e){return Oc[" "](e),e}Oc[" "]=function(){};function FT(e,t){var n=VI;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var BT=Pe("Opera"),yr=Pe("Trident")||Pe("MSIE"),jd=Pe("Edge"),Sa=jd||yr,qd=Pe("Gecko")&&!(Zi().toLowerCase().indexOf("webkit")!=-1&&!Pe("Edge"))&&!(Pe("Trident")||Pe("MSIE"))&&!Pe("Edge"),UT=Zi().toLowerCase().indexOf("webkit")!=-1&&!Pe("Edge");function zd(){var e=H.document;return e?e.documentMode:void 0}var ba;t:{var Ho="",Ko=function(){var e=Zi();if(qd)return/rv:([^\);]+)(\)|;)/.exec(e);if(jd)return/Edge\/([\d\.]+)/.exec(e);if(yr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(UT)return/WebKit\/(\S+)/.exec(e);if(BT)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Ko&&(Ho=Ko?Ko[1]:""),yr){var Go=zd();if(Go!=null&&Go>parseFloat(Ho)){ba=String(Go);break t}}ba=Ho}var Ca;if(H.document&&yr){var Qu=zd();Ca=Qu||parseInt(ba,10)||void 0}else Ca=void 0;var $T=Ca;function hs(e,t){if(Yt.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(qd){t:{try{Oc(t.nodeName);var s=!0;break t}catch{}s=!1}s||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:jT[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&hs.$.h.call(this)}}Mt(hs,Yt);var jT={2:"touch",3:"pen",4:"mouse"};hs.prototype.h=function(){hs.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var bs="closure_listenable_"+(1e6*Math.random()|0),qT=0;function zT(e,t,n,r,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=s,this.key=++qT,this.fa=this.ia=!1}function to(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Nc(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function HT(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function Hd(e){const t={};for(const n in e)t[n]=e[n];return t}const Yu="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Kd(e,t){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)e[n]=r[n];for(let i=0;i<Yu.length;i++)n=Yu[i],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function eo(e){this.src=e,this.g={},this.h=0}eo.prototype.add=function(e,t,n,r,s){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=Va(e,t,r,s);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new zT(t,this.src,i,!!r,s),t.ia=n,e.push(t)),t};function Pa(e,t){var n=t.type;if(n in e.g){var r=e.g[n],s=$d(r,t),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(to(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Va(e,t,n,r){for(var s=0;s<e.length;++s){var i=e[s];if(!i.fa&&i.listener==t&&i.capture==!!n&&i.la==r)return s}return-1}var kc="closure_lm_"+(1e6*Math.random()|0),Wo={};function Gd(e,t,n,r,s){if(r&&r.once)return Qd(e,t,n,r,s);if(Array.isArray(t)){for(var i=0;i<t.length;i++)Gd(e,t[i],n,r,s);return null}return n=Fc(n),e&&e[bs]?e.O(t,n,Ss(r)?!!r.capture:!!r,s):Wd(e,t,n,!1,r,s)}function Wd(e,t,n,r,s,i){if(!t)throw Error("Invalid event type");var o=Ss(s)?!!s.capture:!!s,a=Lc(e);if(a||(e[kc]=a=new eo(e)),n=a.add(t,n,r,o,i),n.proxy)return n;if(r=KT(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)LT||(s=o),s===void 0&&(s=!1),e.addEventListener(t.toString(),r,s);else if(e.attachEvent)e.attachEvent(Jd(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function KT(){function e(n){return t.call(e.src,e.listener,n)}const t=GT;return e}function Qd(e,t,n,r,s){if(Array.isArray(t)){for(var i=0;i<t.length;i++)Qd(e,t[i],n,r,s);return null}return n=Fc(n),e&&e[bs]?e.P(t,n,Ss(r)?!!r.capture:!!r,s):Wd(e,t,n,!0,r,s)}function Yd(e,t,n,r,s){if(Array.isArray(t))for(var i=0;i<t.length;i++)Yd(e,t[i],n,r,s);else r=Ss(r)?!!r.capture:!!r,n=Fc(n),e&&e[bs]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=Va(i,n,r,s),-1<n&&(to(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=Lc(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Va(t,n,r,s)),(n=-1<e?t[e]:null)&&Mc(n))}function Mc(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[bs])Pa(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Jd(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Lc(t))?(Pa(n,e),n.h==0&&(n.src=null,t[kc]=null)):to(e)}}}function Jd(e){return e in Wo?Wo[e]:Wo[e]="on"+e}function GT(e,t){if(e.fa)e=!0;else{t=new hs(t,this);var n=e.listener,r=e.la||e.src;e.ia&&Mc(e),e=n.call(r,t)}return e}function Lc(e){return e=e[kc],e instanceof eo?e:null}var Qo="__closure_events_fn_"+(1e9*Math.random()>>>0);function Fc(e){return typeof e=="function"?e:(e[Qo]||(e[Qo]=function(t){return e.handleEvent(t)}),e[Qo])}function kt(){yn.call(this),this.i=new eo(this),this.S=this,this.J=null}Mt(kt,yn);kt.prototype[bs]=!0;kt.prototype.removeEventListener=function(e,t,n,r){Yd(this,e,t,n,r)};function Ut(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new Yt(t,e);else if(t instanceof Yt)t.target=t.target||e;else{var s=t;t=new Yt(r,e),Kd(t,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];s=Gs(o,r,!0,t)&&s}if(o=t.g=e,s=Gs(o,r,!0,t)&&s,s=Gs(o,r,!1,t)&&s,n)for(i=0;i<n.length;i++)o=t.g=n[i],s=Gs(o,r,!1,t)&&s}kt.prototype.N=function(){if(kt.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)to(n[r]);delete e.g[t],e.h--}}this.J=null};kt.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};kt.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function Gs(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Pa(e.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var Bc=H.JSON.stringify;class WT{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function QT(){var e=Uc;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class YT{constructor(){this.h=this.g=null}add(t,n){const r=Xd.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Xd=new WT(()=>new JT,e=>e.reset());class JT{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function XT(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function ZT(e){H.setTimeout(()=>{throw e},0)}let fs,ds=!1,Uc=new YT,Zd=()=>{const e=H.Promise.resolve(void 0);fs=()=>{e.then(tI)}};var tI=()=>{for(var e;e=QT();){try{e.h.call(e.g)}catch(n){ZT(n)}var t=Xd;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}ds=!1};function no(e,t){kt.call(this),this.h=e||1,this.g=t||H,this.j=Qt(this.qb,this),this.l=Date.now()}Mt(no,kt);P=no.prototype;P.ga=!1;P.T=null;P.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ut(this,"tick"),this.ga&&($c(this),this.start()))}};P.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function $c(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}P.N=function(){no.$.N.call(this),$c(this),delete this.g};function jc(e,t,n){if(typeof e=="function")n&&(e=Qt(e,n));else if(e&&typeof e.handleEvent=="function")e=Qt(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:H.setTimeout(e,t||0)}function tp(e){e.g=jc(()=>{e.g=null,e.i&&(e.i=!1,tp(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class eI extends yn{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:tp(this)}N(){super.N(),this.g&&(H.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ps(e){yn.call(this),this.h=e,this.g={}}Mt(ps,yn);var Ju=[];function ep(e,t,n,r){Array.isArray(n)||(n&&(Ju[0]=n.toString()),n=Ju);for(var s=0;s<n.length;s++){var i=Gd(t,n[s],r||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function np(e){Nc(e.g,function(t,n){this.g.hasOwnProperty(n)&&Mc(t)},e),e.g={}}ps.prototype.N=function(){ps.$.N.call(this),np(this)};ps.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ro(){this.g=!0}ro.prototype.Ea=function(){this.g=!1};function nI(e,t,n,r,s,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+t+`
`+n+`
`+o})}function rI(e,t,n,r,s,i,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+t+`
`+n+`
`+i+" "+o})}function ir(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+iI(e,n)+(r?" "+r:"")})}function sI(e,t){e.info(function(){return"TIMEOUT: "+t})}ro.prototype.info=function(){};function iI(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Bc(n)}catch{return t}}var Gn={},Xu=null;function so(){return Xu=Xu||new kt}Gn.Ta="serverreachability";function rp(e){Yt.call(this,Gn.Ta,e)}Mt(rp,Yt);function gs(e){const t=so();Ut(t,new rp(t))}Gn.STAT_EVENT="statevent";function sp(e,t){Yt.call(this,Gn.STAT_EVENT,e),this.stat=t}Mt(sp,Yt);function ne(e){const t=so();Ut(t,new sp(t,e))}Gn.Ua="timingevent";function ip(e,t){Yt.call(this,Gn.Ua,e),this.size=t}Mt(ip,Yt);function Cs(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return H.setTimeout(function(){e()},t)}var io={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},op={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function qc(){}qc.prototype.h=null;function Zu(e){return e.h||(e.h=e.i())}function ap(){}var Ps={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function zc(){Yt.call(this,"d")}Mt(zc,Yt);function Hc(){Yt.call(this,"c")}Mt(Hc,Yt);var Da;function oo(){}Mt(oo,qc);oo.prototype.g=function(){return new XMLHttpRequest};oo.prototype.i=function(){return{}};Da=new oo;function Vs(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new ps(this),this.P=oI,e=Sa?125:void 0,this.V=new no(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new cp}function cp(){this.i=null,this.g="",this.h=!1}var oI=45e3,lp={},xa={};P=Vs.prototype;P.setTimeout=function(e){this.P=e};function Oa(e,t,n){e.L=1,e.A=co(Ke(t)),e.u=n,e.S=!0,up(e,null)}function up(e,t){e.G=Date.now(),Ds(e),e.B=Ke(e.A);var n=e.B,r=e.W;Array.isArray(r)||(r=[String(r)]),yp(n.i,"t",r),e.o=0,n=e.l.J,e.h=new cp,e.g=Bp(e.l,n?t:null,!e.u),0<e.O&&(e.M=new eI(Qt(e.Pa,e,e.g),e.O)),ep(e.U,e.g,"readystatechange",e.nb),t=e.I?Hd(e.I):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,t)):(e.v="GET",e.g.ha(e.B,e.v,null,t)),gs(),nI(e.j,e.v,e.B,e.m,e.W,e.u)}P.nb=function(e){e=e.target;const t=this.M;t&&De(e)==3?t.l():this.Pa(e)};P.Pa=function(e){try{if(e==this.g)t:{const u=De(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Sa||this.g&&(this.h.h||this.g.ja()||rh(this.g)))){this.J||u!=4||t==7||(t==8||0>=h?gs(3):gs(2)),ao(this);var n=this.g.da();this.ca=n;e:if(hp(this)){var r=rh(this.g);e="";var s=r.length,i=De(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Vn(this),Jr(this);var o="";break e}this.h.i=new H.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:i&&t==s-1});r.length=0,this.h.g+=e,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,rI(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!us(a)){var l=a;break e}}l=null}if(n=l)ir(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Na(this,n);else{this.i=!1,this.s=3,ne(12),Vn(this),Jr(this);break t}}this.S?(fp(this,u,o),Sa&&this.i&&u==3&&(ep(this.U,this.V,"tick",this.mb),this.V.start())):(ir(this.j,this.m,o,null),Na(this,o)),u==4&&Vn(this),this.i&&!this.J&&(u==4?kp(this.l,this):(this.i=!1,Ds(this)))}else bI(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,ne(12)):(this.s=0,ne(13)),Vn(this),Jr(this)}}}catch{}finally{}};function hp(e){return e.g?e.v=="GET"&&e.L!=2&&e.l.Ha:!1}function fp(e,t,n){let r=!0,s;for(;!e.J&&e.o<n.length;)if(s=aI(e,n),s==xa){t==4&&(e.s=4,ne(14),r=!1),ir(e.j,e.m,null,"[Incomplete Response]");break}else if(s==lp){e.s=4,ne(15),ir(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else ir(e.j,e.m,s,null),Na(e,s);hp(e)&&e.o!=0&&(e.h.g=e.h.g.slice(e.o),e.o=0),t!=4||n.length!=0||e.h.h||(e.s=1,ne(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Jc(t),t.M=!0,ne(11))):(ir(e.j,e.m,n,"[Invalid Chunked Response]"),Vn(e),Jr(e))}P.mb=function(){if(this.g){var e=De(this.g),t=this.g.ja();this.o<t.length&&(ao(this),fp(this,e,t),this.i&&e!=4&&Ds(this))}};function aI(e,t){var n=e.o,r=t.indexOf(`
`,n);return r==-1?xa:(n=Number(t.substring(n,r)),isNaN(n)?lp:(r+=1,r+n>t.length?xa:(t=t.slice(r,r+n),e.o=r+n,t)))}P.cancel=function(){this.J=!0,Vn(this)};function Ds(e){e.Y=Date.now()+e.P,dp(e,e.P)}function dp(e,t){if(e.C!=null)throw Error("WatchDog timer not null");e.C=Cs(Qt(e.lb,e),t)}function ao(e){e.C&&(H.clearTimeout(e.C),e.C=null)}P.lb=function(){this.C=null;const e=Date.now();0<=e-this.Y?(sI(this.j,this.B),this.L!=2&&(gs(),ne(17)),Vn(this),this.s=2,Jr(this)):dp(this,this.Y-e)};function Jr(e){e.l.H==0||e.J||kp(e.l,e)}function Vn(e){ao(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,$c(e.V),np(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Na(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||ka(n.i,e))){if(!e.K&&ka(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Ii(n),fo(n);else break t;Yc(n),ne(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Cs(Qt(n.ib,n),6e3));if(1>=wp(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Dn(n,11)}else if((e.K||n.g==e)&&Ii(n),!us(t))for(s=n.Ja.g.parse(t),t=0;t<s.length;t++){let l=s[t];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=e.g;if(g){const w=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(w){var i=r.i;i.g||w.indexOf("spdy")==-1&&w.indexOf("quic")==-1&&w.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Kc(i,i.h),i.h=null))}if(r.F){const R=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;R&&(r.Da=R,_t(r.I,r.F,R))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=Fp(r,r.J?r.pa:null,r.Y),o.K){Tp(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.C&&(ao(a),Ds(a)),r.g=o}else Op(r);0<n.j.length&&po(n)}else l[0]!="stop"&&l[0]!="close"||Dn(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Dn(n,7):Qc(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}gs(4)}catch{}}function cI(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Xi(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function lI(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Xi(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function pp(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Xi(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=lI(e),r=cI(e),s=r.length,i=0;i<s;i++)t.call(void 0,r[i],n&&n[i],e)}var gp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function uI(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),s=null;if(0<=r){var i=e[n].substring(0,r);s=e[n].substring(r+1)}else i=e[n];t(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Mn(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Mn){this.h=e.h,wi(this,e.j),this.s=e.s,this.g=e.g,Ti(this,e.m),this.l=e.l;var t=e.i,n=new ms;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),th(this,n),this.o=e.o}else e&&(t=String(e).match(gp))?(this.h=!1,wi(this,t[1]||"",!0),this.s=Br(t[2]||""),this.g=Br(t[3]||"",!0),Ti(this,t[4]),this.l=Br(t[5]||"",!0),th(this,t[6]||"",!0),this.o=Br(t[7]||"")):(this.h=!1,this.i=new ms(null,this.h))}Mn.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Ur(t,eh,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Ur(t,eh,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Ur(n,n.charAt(0)=="/"?dI:fI,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Ur(n,gI)),e.join("")};function Ke(e){return new Mn(e)}function wi(e,t,n){e.j=n?Br(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Ti(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function th(e,t,n){t instanceof ms?(e.i=t,mI(e.i,e.h)):(n||(t=Ur(t,pI)),e.i=new ms(t,e.h))}function _t(e,t,n){e.i.set(t,n)}function co(e){return _t(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Br(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Ur(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,hI),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function hI(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var eh=/[#\/\?@]/g,fI=/[#\?:]/g,dI=/[#\?]/g,pI=/[#\?@]/g,gI=/#/g;function ms(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function vn(e){e.g||(e.g=new Map,e.h=0,e.i&&uI(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}P=ms.prototype;P.add=function(e,t){vn(this),this.i=null,e=br(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function mp(e,t){vn(e),t=br(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function _p(e,t){return vn(e),t=br(e,t),e.g.has(t)}P.forEach=function(e,t){vn(this),this.g.forEach(function(n,r){n.forEach(function(s){e.call(t,s,r,this)},this)},this)};P.ta=function(){vn(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const s=e[r];for(let i=0;i<s.length;i++)n.push(t[r])}return n};P.Z=function(e){vn(this);let t=[];if(typeof e=="string")_p(this,e)&&(t=t.concat(this.g.get(br(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};P.set=function(e,t){return vn(this),this.i=null,e=br(this,e),_p(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};P.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function yp(e,t,n){mp(e,t),0<n.length&&(e.i=null,e.g.set(br(e,t),xc(n)),e.h+=n.length)}P.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),e.push(s)}}return this.i=e.join("&")};function br(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function mI(e,t){t&&!e.j&&(vn(e),e.i=null,e.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(mp(this,r),yp(this,s,n))},e)),e.j=t}var _I=class{constructor(e,t){this.g=e,this.map=t}};function vp(e){this.l=e||yI,H.PerformanceNavigationTiming?(e=H.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(H.g&&H.g.Ka&&H.g.Ka()&&H.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var yI=10;function Ep(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function wp(e){return e.h?1:e.g?e.g.size:0}function ka(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Kc(e,t){e.g?e.g.add(t):e.h=t}function Tp(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}vp.prototype.cancel=function(){if(this.i=Ip(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Ip(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return xc(e.i)}var vI=class{stringify(e){return H.JSON.stringify(e,void 0)}parse(e){return H.JSON.parse(e,void 0)}};function EI(){this.g=new vI}function wI(e,t,n){const r=n||"";try{pp(e,function(s,i){let o=s;Ss(s)&&(o=Bc(s)),t.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw t.push(r+"type="+encodeURIComponent("_badmap")),s}}function TI(e,t){const n=new ro;if(H.Image){const r=new Image;r.onload=Ks(Ws,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Ks(Ws,n,r,"TestLoadImage: error",!1,t),r.onabort=Ks(Ws,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Ks(Ws,n,r,"TestLoadImage: timeout",!1,t),H.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function Ws(e,t,n,r,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(r)}catch{}}function lo(e){this.l=e.ec||null,this.j=e.ob||!1}Mt(lo,qc);lo.prototype.g=function(){return new uo(this.l,this.j)};lo.prototype.i=function(e){return function(){return e}}({});function uo(e,t){kt.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Gc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Mt(uo,kt);var Gc=0;P=uo.prototype;P.open=function(e,t){if(this.readyState!=Gc)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,_s(this)};P.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||H).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};P.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,xs(this)),this.readyState=Gc};P.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,_s(this)),this.g&&(this.readyState=3,_s(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof H.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ap(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function Ap(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}P.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?xs(this):_s(this),this.readyState==3&&Ap(this)}};P.Za=function(e){this.g&&(this.response=this.responseText=e,xs(this))};P.Ya=function(e){this.g&&(this.response=e,xs(this))};P.ka=function(){this.g&&xs(this)};function xs(e){e.readyState=4,e.l=null,e.j=null,e.A=null,_s(e)}P.setRequestHeader=function(e,t){this.v.append(e,t)};P.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};P.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function _s(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(uo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var II=H.JSON.parse;function It(e){kt.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Rp,this.L=this.M=!1}Mt(It,kt);var Rp="",AI=/^https?$/i,RI=["POST","PUT"];P=It.prototype;P.Oa=function(e){this.M=e};P.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Da.g(),this.C=this.u?Zu(this.u):Zu(Da),this.g.onreadystatechange=Qt(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(i){nh(this,i);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=H.FormData&&e instanceof H.FormData,!(0<=$d(RI,t))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Cp(this),0<this.B&&((this.L=SI(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Qt(this.ua,this)):this.A=jc(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){nh(this,i)}};function SI(e){return yr&&typeof e.timeout=="number"&&e.ontimeout!==void 0}P.ua=function(){typeof Dc<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ut(this,"timeout"),this.abort(8))};function nh(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Sp(e),ho(e)}function Sp(e){e.F||(e.F=!0,Ut(e,"complete"),Ut(e,"error"))}P.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Ut(this,"complete"),Ut(this,"abort"),ho(this))};P.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ho(this,!0)),It.$.N.call(this)};P.La=function(){this.s||(this.G||this.v||this.l?bp(this):this.kb())};P.kb=function(){bp(this)};function bp(e){if(e.h&&typeof Dc<"u"&&(!e.C[1]||De(e)!=4||e.da()!=2)){if(e.v&&De(e)==4)jc(e.La,0,e);else if(Ut(e,"readystatechange"),De(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var s=String(e.I).match(gp)[1]||null;!s&&H.self&&H.self.location&&(s=H.self.location.protocol.slice(0,-1)),r=!AI.test(s?s.toLowerCase():"")}n=r}if(n)Ut(e,"complete"),Ut(e,"success");else{e.m=6;try{var i=2<De(e)?e.g.statusText:""}catch{i=""}e.j=i+" ["+e.da()+"]",Sp(e)}}finally{ho(e)}}}}function ho(e,t){if(e.g){Cp(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||Ut(e,"ready");try{n.onreadystatechange=r}catch{}}}function Cp(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(H.clearTimeout(e.A),e.A=null)}P.isActive=function(){return!!this.g};function De(e){return e.g?e.g.readyState:0}P.da=function(){try{return 2<De(this)?this.g.status:-1}catch{return-1}};P.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};P.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),II(t)}};function rh(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Rp:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function bI(e){const t={};e=(e.g&&2<=De(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(us(e[r]))continue;var n=XT(e[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=t[s]||[];t[s]=i,i.push(n)}HT(t,function(r){return r.join(", ")})}P.Ia=function(){return this.m};P.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Pp(e){let t="";return Nc(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function Wc(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Pp(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):_t(e,t,n))}function kr(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Vp(e){this.Ga=0,this.j=[],this.l=new ro,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=kr("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=kr("baseRetryDelayMs",5e3,e),this.hb=kr("retryDelaySeedMs",1e4,e),this.eb=kr("forwardChannelMaxRetries",2,e),this.xa=kr("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new vp(e&&e.concurrentRequestLimit),this.Ja=new EI,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}P=Vp.prototype;P.ra=8;P.H=1;function Qc(e){if(Dp(e),e.H==3){var t=e.W++,n=Ke(e.I);if(_t(n,"SID",e.K),_t(n,"RID",t),_t(n,"TYPE","terminate"),Os(e,n),t=new Vs(e,e.l,t),t.L=2,t.A=co(Ke(n)),n=!1,H.navigator&&H.navigator.sendBeacon)try{n=H.navigator.sendBeacon(t.A.toString(),"")}catch{}!n&&H.Image&&(new Image().src=t.A,n=!0),n||(t.g=Bp(t.l,null),t.g.ha(t.A)),t.G=Date.now(),Ds(t)}Lp(e)}function fo(e){e.g&&(Jc(e),e.g.cancel(),e.g=null)}function Dp(e){fo(e),e.u&&(H.clearTimeout(e.u),e.u=null),Ii(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&H.clearTimeout(e.m),e.m=null)}function po(e){if(!Ep(e.i)&&!e.m){e.m=!0;var t=e.Na;fs||Zd(),ds||(fs(),ds=!0),Uc.add(t,e),e.C=0}}function CI(e,t){return wp(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=Cs(Qt(e.Na,e,t),Mp(e,e.C)),e.C++,!0)}P.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const s=new Vs(this,this.l,e);let i=this.s;if(this.U&&(i?(i=Hd(i),Kd(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=xp(this,s,t),n=Ke(this.I),_t(n,"RID",e),_t(n,"CVER",22),this.F&&_t(n,"X-HTTP-Session-Id",this.F),Os(this,n),i&&(this.O?t="headers="+encodeURIComponent(String(Pp(i)))+"&"+t:this.o&&Wc(n,this.o,i)),Kc(this.i,s),this.bb&&_t(n,"TYPE","init"),this.P?(_t(n,"$req",t),_t(n,"SID","null"),s.aa=!0,Oa(s,n,null)):Oa(s,n,t),this.H=2}}else this.H==3&&(e?sh(this,e):this.j.length==0||Ep(this.i)||sh(this))};function sh(e,t){var n;t?n=t.m:n=e.W++;const r=Ke(e.I);_t(r,"SID",e.K),_t(r,"RID",n),_t(r,"AID",e.V),Os(e,r),e.o&&e.s&&Wc(r,e.o,e.s),n=new Vs(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=xp(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Kc(e.i,n),Oa(n,r,t)}function Os(e,t){e.na&&Nc(e.na,function(n,r){_t(t,r,n)}),e.h&&pp({},function(n,r){_t(t,r,n)})}function xp(e,t,n){n=Math.min(e.j.length,n);var r=e.h?Qt(e.h.Va,e.h,e):null;t:{var s=e.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{wI(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,r}function Op(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;fs||Zd(),ds||(fs(),ds=!0),Uc.add(t,e),e.A=0}}function Yc(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=Cs(Qt(e.Ma,e),Mp(e,e.A)),e.A++,!0)}P.Ma=function(){if(this.u=null,Np(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=Cs(Qt(this.jb,this),e)}};P.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ne(10),fo(this),Np(this))};function Jc(e){e.B!=null&&(H.clearTimeout(e.B),e.B=null)}function Np(e){e.g=new Vs(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=Ke(e.wa);_t(t,"RID","rpc"),_t(t,"SID",e.K),_t(t,"AID",e.V),_t(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&_t(t,"TO",e.qa),_t(t,"TYPE","xmlhttp"),Os(e,t),e.o&&e.s&&Wc(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.A=co(Ke(t)),n.u=null,n.S=!0,up(n,e)}P.ib=function(){this.v!=null&&(this.v=null,fo(this),Yc(this),ne(19))};function Ii(e){e.v!=null&&(H.clearTimeout(e.v),e.v=null)}function kp(e,t){var n=null;if(e.g==t){Ii(e),Jc(e),e.g=null;var r=2}else if(ka(e.i,t))n=t.F,Tp(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.u?t.u.length:0,t=Date.now()-t.G;var s=e.C;r=so(),Ut(r,new ip(r,n)),po(e)}else Op(e);else if(s=t.s,s==3||s==0&&0<t.ca||!(r==1&&CI(e,t)||r==2&&Yc(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),s){case 1:Dn(e,5);break;case 4:Dn(e,10);break;case 3:Dn(e,6);break;default:Dn(e,2)}}}function Mp(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Dn(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=Qt(e.pb,e);n||(n=new Mn("//www.google.com/images/cleardot.gif"),H.location&&H.location.protocol=="http"||wi(n,"https"),co(n)),TI(n.toString(),r)}else ne(2);e.H=0,e.h&&e.h.za(t),Lp(e),Dp(e)}P.pb=function(e){e?(this.l.info("Successfully pinged google.com"),ne(2)):(this.l.info("Failed to ping google.com"),ne(1))};function Lp(e){if(e.H=0,e.ma=[],e.h){const t=Ip(e.i);(t.length!=0||e.j.length!=0)&&(Wu(e.ma,t),Wu(e.ma,e.j),e.i.i.length=0,xc(e.j),e.j.length=0),e.h.ya()}}function Fp(e,t,n){var r=n instanceof Mn?Ke(n):new Mn(n);if(r.g!="")t&&(r.g=t+"."+r.g),Ti(r,r.m);else{var s=H.location;r=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var i=new Mn(null);r&&wi(i,r),t&&(i.g=t),s&&Ti(i,s),n&&(i.l=n),r=i}return n=e.F,t=e.Da,n&&t&&_t(r,n,t),_t(r,"VER",e.ra),Os(e,r),r}function Bp(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e.Ha&&!e.va?new It(new lo({ob:n})):new It(e.va),t.Oa(e.J),t}P.isActive=function(){return!!this.h&&this.h.isActive(this)};function Up(){}P=Up.prototype;P.Ba=function(){};P.Aa=function(){};P.za=function(){};P.ya=function(){};P.isActive=function(){return!0};P.Va=function(){};function Ai(){if(yr&&!(10<=Number($T)))throw Error("Environmental error: no available transport.")}Ai.prototype.g=function(e,t){return new fe(e,t)};function fe(e,t){kt.call(this),this.g=new Vp(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!us(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!us(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Cr(this)}Mt(fe,kt);fe.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;ne(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=Fp(e,null,e.Y),po(e)};fe.prototype.close=function(){Qc(this.g)};fe.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Bc(e),e=n);t.j.push(new _I(t.fb++,e)),t.H==3&&po(t)};fe.prototype.N=function(){this.g.h=null,delete this.j,Qc(this.g),delete this.g,fe.$.N.call(this)};function $p(e){zc.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}Mt($p,zc);function jp(){Hc.call(this),this.status=1}Mt(jp,Hc);function Cr(e){this.g=e}Mt(Cr,Up);Cr.prototype.Ba=function(){Ut(this.g,"a")};Cr.prototype.Aa=function(e){Ut(this.g,new $p(e))};Cr.prototype.za=function(e){Ut(this.g,new jp)};Cr.prototype.ya=function(){Ut(this.g,"b")};function PI(){this.blockSize=-1}function we(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Mt(we,PI);we.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Yo(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var s=0;16>s;++s)r[s]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],s=e.g[2];var i=e.g[3],o=t+(i^n&(s^i))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[1]+3905402710&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[5]+1200080426&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[9]+2336552879&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[13]+4254626195&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(s^i&(n^s))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[6]+3225465664&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[10]+38016083&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[14]+3275163606&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[2]+4243563512&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(n^s^i)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[8]+2272392833&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[4]+1272893353&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[0]+3936430074&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[12]+3873151461&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(s^(n|~i))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[7]+1126891415&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[3]+2399980690&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[15]+4264355552&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[11]+3174756917&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+s&4294967295,e.g[3]=e.g[3]+i&4294967295}we.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,s=this.h,i=0;i<t;){if(s==0)for(;i<=n;)Yo(this,e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[s++]=e.charCodeAt(i++),s==this.blockSize){Yo(this,r),s=0;break}}else for(;i<t;)if(r[s++]=e[i++],s==this.blockSize){Yo(this,r),s=0;break}}this.h=s,this.i+=t};we.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function ft(e,t){this.h=t;for(var n=[],r=!0,s=e.length-1;0<=s;s--){var i=e[s]|0;r&&i==t||(n[s]=i,r=!1)}this.g=n}var VI={};function Xc(e){return-128<=e&&128>e?FT(e,function(t){return new ft([t|0],0>t?-1:0)}):new ft([e|0],0>e?-1:0)}function xe(e){if(isNaN(e)||!isFinite(e))return ur;if(0>e)return Ft(xe(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=Ma;return new ft(t,0)}function qp(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return Ft(qp(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=xe(Math.pow(t,8)),r=ur,s=0;s<e.length;s+=8){var i=Math.min(8,e.length-s),o=parseInt(e.substring(s,s+i),t);8>i?(i=xe(Math.pow(t,i)),r=r.R(i).add(xe(o))):(r=r.R(n),r=r.add(xe(o)))}return r}var Ma=4294967296,ur=Xc(0),La=Xc(1),ih=Xc(16777216);P=ft.prototype;P.ea=function(){if(ge(this))return-Ft(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:Ma+r)*t,t*=Ma}return e};P.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(je(this))return"0";if(ge(this))return"-"+Ft(this).toString(e);for(var t=xe(Math.pow(e,6)),n=this,r="";;){var s=Si(n,t).g;n=Ri(n,s.R(t));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=s,je(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};P.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function je(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function ge(e){return e.h==-1}P.X=function(e){return e=Ri(this,e),ge(e)?-1:je(e)?0:1};function Ft(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new ft(n,~e.h).add(La)}P.abs=function(){return ge(this)?Ft(this):this};P.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,s=0;s<=t;s++){var i=r+(this.D(s)&65535)+(e.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(e.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new ft(n,n[n.length-1]&-2147483648?-1:0)};function Ri(e,t){return e.add(Ft(t))}P.R=function(e){if(je(this)||je(e))return ur;if(ge(this))return ge(e)?Ft(this).R(Ft(e)):Ft(Ft(this).R(e));if(ge(e))return Ft(this.R(Ft(e)));if(0>this.X(ih)&&0>e.X(ih))return xe(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<e.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(s)>>>16,c=e.D(s)&65535;n[2*r+2*s]+=o*c,Qs(n,2*r+2*s),n[2*r+2*s+1]+=i*c,Qs(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,Qs(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,Qs(n,2*r+2*s+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new ft(n,0)};function Qs(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Mr(e,t){this.g=e,this.h=t}function Si(e,t){if(je(t))throw Error("division by zero");if(je(e))return new Mr(ur,ur);if(ge(e))return t=Si(Ft(e),t),new Mr(Ft(t.g),Ft(t.h));if(ge(t))return t=Si(e,Ft(t)),new Mr(Ft(t.g),t.h);if(30<e.g.length){if(ge(e)||ge(t))throw Error("slowDivide_ only works with positive integers.");for(var n=La,r=t;0>=r.X(e);)n=oh(n),r=oh(r);var s=Xn(n,1),i=Xn(r,1);for(r=Xn(r,2),n=Xn(n,2);!je(r);){var o=i.add(r);0>=o.X(e)&&(s=s.add(n),i=o),r=Xn(r,1),n=Xn(n,1)}return t=Ri(e,s.R(t)),new Mr(s,t)}for(s=ur;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=xe(n),o=i.R(t);ge(o)||0<o.X(e);)n-=r,i=xe(n),o=i.R(t);je(i)&&(i=La),s=s.add(i),e=Ri(e,o)}return new Mr(s,e)}P.gb=function(e){return Si(this,e).h};P.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new ft(n,this.h&e.h)};P.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new ft(n,this.h|e.h)};P.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new ft(n,this.h^e.h)};function oh(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new ft(n,e.h)}function Xn(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,s=[],i=0;i<r;i++)s[i]=0<t?e.D(i+n)>>>t|e.D(i+n+1)<<32-t:e.D(i+n);return new ft(s,e.h)}Ai.prototype.createWebChannel=Ai.prototype.g;fe.prototype.send=fe.prototype.u;fe.prototype.open=fe.prototype.m;fe.prototype.close=fe.prototype.close;io.NO_ERROR=0;io.TIMEOUT=8;io.HTTP_ERROR=6;op.COMPLETE="complete";ap.EventType=Ps;Ps.OPEN="a";Ps.CLOSE="b";Ps.ERROR="c";Ps.MESSAGE="d";kt.prototype.listen=kt.prototype.O;It.prototype.listenOnce=It.prototype.P;It.prototype.getLastError=It.prototype.Sa;It.prototype.getLastErrorCode=It.prototype.Ia;It.prototype.getStatus=It.prototype.da;It.prototype.getResponseJson=It.prototype.Wa;It.prototype.getResponseText=It.prototype.ja;It.prototype.send=It.prototype.ha;It.prototype.setWithCredentials=It.prototype.Oa;we.prototype.digest=we.prototype.l;we.prototype.reset=we.prototype.reset;we.prototype.update=we.prototype.j;ft.prototype.add=ft.prototype.add;ft.prototype.multiply=ft.prototype.R;ft.prototype.modulo=ft.prototype.gb;ft.prototype.compare=ft.prototype.X;ft.prototype.toNumber=ft.prototype.ea;ft.prototype.toString=ft.prototype.toString;ft.prototype.getBits=ft.prototype.D;ft.fromNumber=xe;ft.fromString=qp;var DI=function(){return new Ai},xI=function(){return so()},Jo=io,OI=op,NI=Gn,ah={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Ys=ap,kI=It,MI=we,hr=ft;const ch="@firebase/firestore";/**
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
 */let Pr="10.9.0";/**
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
 */const jn=new Ac("@firebase/firestore");function Lr(){return jn.logLevel}function V(e,...t){if(jn.logLevel<=rt.DEBUG){const n=t.map(Zc);jn.debug(`Firestore (${Pr}): ${e}`,...n)}}function Le(e,...t){if(jn.logLevel<=rt.ERROR){const n=t.map(Zc);jn.error(`Firestore (${Pr}): ${e}`,...n)}}function vr(e,...t){if(jn.logLevel<=rt.WARN){const n=t.map(Zc);jn.warn(`Firestore (${Pr}): ${e}`,...n)}}function Zc(e){if(typeof e=="string")return e;try{/**
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
 */function Y(e="Unexpected state"){const t=`FIRESTORE (${Pr}) INTERNAL ASSERTION FAILED: `+e;throw Le(t),new Error(t)}function Ct(e,t){e||Y()}function ot(e,t){return e}/**
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
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends _n{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class zp{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class LI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Kt.UNAUTHENTICATED))}shutdown(){}}class FI{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class BI{constructor(t){this.t=t,this.currentUser=Kt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new hn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new hn,t.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;t.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new hn)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ct(typeof r.accessToken=="string"),new zp(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Ct(t===null||typeof t=="string"),new Kt(t)}}class UI{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=Kt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class $I{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new UI(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(Kt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class jI{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class qI{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=i=>{i.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>r(i))};const s=i=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Ct(typeof n.token=="string"),this.R=n.token,new jI(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function zI(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Hp{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=zI(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=t.charAt(s[i]%t.length))}return r}}function ut(e,t){return e<t?-1:e>t?1:0}function Er(e,t,n){return e.length===t.length&&e.every((r,s)=>n(r,t[s]))}/**
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
 */class oe{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new U(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new U(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new U(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new U(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return oe.fromMillis(Date.now())}static fromDate(t){return oe.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new oe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?ut(this.nanoseconds,t.nanoseconds):ut(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ys{constructor(t,n,r){n===void 0?n=0:n>t.length&&Y(),r===void 0?r=t.length-n:r>t.length-n&&Y(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return ys.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof ys?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let s=0;s<r;s++){const i=t.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class Tt extends ys{construct(t,n,r){return new Tt(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new U(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Tt(n)}static emptyPath(){return new Tt([])}}const HI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class te extends ys{construct(t,n,r){return new te(t,n,r)}static isValidIdentifier(t){return HI.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),te.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new te(["__name__"])}static fromServerFormat(t){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new U(C.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<t.length;){const a=t[s];if(a==="\\"){if(s+1===t.length)throw new U(C.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new U(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new U(C.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new te(n)}static emptyPath(){return new te([])}}/**
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
 */class j{constructor(t){this.path=t}static fromPath(t){return new j(Tt.fromString(t))}static fromName(t){return new j(Tt.fromString(t).popFirst(5))}static empty(){return new j(Tt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Tt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return Tt.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new j(new Tt(t.slice()))}}function KI(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=G.fromTimestamp(r===1e9?new oe(n+1,0):new oe(n,r));return new pn(s,j.empty(),t)}function GI(e){return new pn(e.readTime,e.key,-1)}class pn{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new pn(G.min(),j.empty(),-1)}static max(){return new pn(G.max(),j.empty(),-1)}}function WI(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=j.comparator(e.documentKey,t.documentKey),n!==0?n:ut(e.largestBatchId,t.largestBatchId))}/**
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
 */const QI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class YI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function tl(e){if(e.code!==C.FAILED_PRECONDITION||e.message!==QI)throw e;V("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class el{constructor(t,n){this.action=t,this.transaction=n,this.aborted=!1,this.V=new hn,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new Xr(t,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const s=nl(r.target.error);this.V.reject(new Xr(t,s))}}static open(t,n,r,s){try{return new el(n,t.transaction(s,r))}catch(i){throw new Xr(n,i)}}get m(){return this.V.promise}abort(t){t&&this.V.reject(t),this.aborted||(V("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const n=this.transaction.objectStore(t);return new XI(n)}}class xn{constructor(t,n,r){this.name=t,this.version=n,this.p=r,xn.S(mi())===12.2&&Le("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return V("SimpleDb","Removing database:",t),bn(window.indexedDB.deleteDatabase(t)).toPromise()}static D(){if(!Tc())return!1;if(xn.C())return!0;const t=mi(),n=xn.S(t),r=0<n&&n<10,s=xn.v(t),i=0<s&&s<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||r||i)}static C(){var t;return typeof process<"u"&&((t=process.__PRIVATE_env)===null||t===void 0?void 0:t.F)==="YES"}static M(t,n){return t.store(n)}static S(t){const n=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(t){const n=t.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(t){return this.db||(V("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;n(o)},s.onblocked=()=>{r(new Xr(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new U(C.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new U(C.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Xr(t,o))},s.onupgradeneeded=i=>{V("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.p.N(o,s.transaction,i.oldVersion,this.version).next(()=>{V("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=n=>this.L(n)),this.db}B(t){this.L=t,this.db&&(this.db.onversionchange=n=>t(n))}async runTransaction(t,n,r,s){const i=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(t);const a=el.open(this.db,t,i?"readonly":"readwrite",r),c=s(a).next(l=>(a.g(),l)).catch(l=>(a.abort(l),E.reject(l))).toPromise();return c.catch(()=>{}),await a.m,c}catch(a){const c=a,l=c.name!=="FirebaseError"&&o<3;if(V("SimpleDb","Transaction failed with error:",c.message,"Retrying:",l),this.close(),!l)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class JI{constructor(t){this.k=t,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(t){this.k=t}done(){this.q=!0}U(t){this.K=t}delete(){return bn(this.k.delete())}}class Xr extends U{constructor(t,n){super(C.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Ns(e){return e.name==="IndexedDbTransactionError"}class XI{constructor(t){this.store=t}put(t,n){let r;return n!==void 0?(V("SimpleDb","PUT",this.store.name,t,n),r=this.store.put(n,t)):(V("SimpleDb","PUT",this.store.name,"<auto-key>",t),r=this.store.put(t)),bn(r)}add(t){return V("SimpleDb","ADD",this.store.name,t,t),bn(this.store.add(t))}get(t){return bn(this.store.get(t)).next(n=>(n===void 0&&(n=null),V("SimpleDb","GET",this.store.name,t,n),n))}delete(t){return V("SimpleDb","DELETE",this.store.name,t),bn(this.store.delete(t))}count(){return V("SimpleDb","COUNT",this.store.name),bn(this.store.count())}W(t,n){const r=this.options(t,n),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new E((o,a)=>{i.onerror=c=>{a(c.target.error)},i.onsuccess=c=>{o(c.target.result)}})}{const i=this.cursor(r),o=[];return this.G(i,(a,c)=>{o.push(c)}).next(()=>o)}}j(t,n){const r=this.store.getAll(t,n===null?void 0:n);return new E((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}H(t,n){V("SimpleDb","DELETE ALL",this.store.name);const r=this.options(t,n);r.J=!1;const s=this.cursor(r);return this.G(s,(i,o,a)=>a.delete())}Y(t,n){let r;n?r=t:(r={},n=t);const s=this.cursor(r);return this.G(s,n)}Z(t){const n=this.cursor({});return new E((r,s)=>{n.onerror=i=>{const o=nl(i.target.error);s(o)},n.onsuccess=i=>{const o=i.target.result;o?t(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(t,n){const r=[];return new E((s,i)=>{t.onerror=o=>{i(o.target.error)},t.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const c=new JI(a),l=n(a.primaryKey,a.value,c);if(l instanceof E){const u=l.catch(h=>(c.done(),E.reject(h)));r.push(u)}c.isDone?s():c.$===null?a.continue():a.continue(c.$)}}).next(()=>E.waitFor(r))}options(t,n){let r;return t!==void 0&&(typeof t=="string"?r=t:n=t),{index:r,range:n}}cursor(t){let n="next";if(t.reverse&&(n="prev"),t.index){const r=this.store.index(t.index);return t.J?r.openKeyCursor(t.range,n):r.openCursor(t.range,n)}return this.store.openCursor(t.range,n)}}function bn(e){return new E((t,n)=>{e.onsuccess=r=>{const s=r.target.result;t(s)},e.onerror=r=>{const s=nl(r.target.error);n(s)}})}let lh=!1;function nl(e){const t=xn.S(mi());if(t>=12.2&&t<13){const n="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(n)>=0){const r=new U("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return lh||(lh=!0,setTimeout(()=>{throw r},0)),r}}return e}/**
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
 */class rl{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}rl._e=-1;function go(e){return e==null}function Fa(e){return e===0&&1/e==-1/0}/**
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
 */function uh(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function mo(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function ZI(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class Rt{constructor(t,n){this.comparator=t,this.root=n||Lt.EMPTY}insert(t,n){return new Rt(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Lt.BLACK,null,null))}remove(t){return new Rt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Lt.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Js(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Js(this.root,t,this.comparator,!1)}getReverseIterator(){return new Js(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Js(this.root,t,this.comparator,!0)}}class Js{constructor(t,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?r(t.key,n):1,n&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Lt{constructor(t,n,r,s,i){this.key=t,this.value=n,this.color=r??Lt.RED,this.left=s??Lt.EMPTY,this.right=i??Lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,s,i){return new Lt(t??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Lt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return Lt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const t=this.left.check();if(t!==this.right.check())throw Y();return t+(this.isRed()?0:1)}}Lt.EMPTY=null,Lt.RED=!0,Lt.BLACK=!1;Lt.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(t,n,r,s,i){return this}insert(t,n,r){return new Lt(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class $t{constructor(t){this.comparator=t,this.data=new Rt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new hh(this.data.getIterator())}getIteratorFrom(t){return new hh(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof $t)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new $t(this.comparator);return n.data=t,n}}class hh{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class nn{constructor(t){this.fields=t,t.sort(te.comparator)}static empty(){return new nn([])}unionWith(t){let n=new $t(te.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new nn(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Er(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Kp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Jt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Kp("Invalid base64 string: "+i):i}}(t);return new Jt(n)}static fromUint8Array(t){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(t);return new Jt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ut(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Jt.EMPTY_BYTE_STRING=new Jt("");const t0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function gn(e){if(Ct(!!e),typeof e=="string"){let t=0;const n=t0.exec(e);if(Ct(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:bt(e.seconds),nanos:bt(e.nanos)}}function bt(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function qn(e){return typeof e=="string"?Jt.fromBase64String(e):Jt.fromUint8Array(e)}/**
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
 */function sl(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function il(e){const t=e.mapValue.fields.__previous_value__;return sl(t)?il(t):t}function vs(e){const t=gn(e.mapValue.fields.__local_write_time__.timestampValue);return new oe(t.seconds,t.nanos)}/**
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
 */class e0{constructor(t,n,r,s,i,o,a,c,l){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class Es{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Es("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Es&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Xs={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function zn(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?sl(e)?4:n0(e)?9007199254740991:10:Y()}function Fe(e,t){if(e===t)return!0;const n=zn(e);if(n!==zn(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return vs(e).isEqual(vs(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=gn(s.timestampValue),a=gn(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return qn(s.bytesValue).isEqual(qn(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return bt(s.geoPointValue.latitude)===bt(i.geoPointValue.latitude)&&bt(s.geoPointValue.longitude)===bt(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return bt(s.integerValue)===bt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=bt(s.doubleValue),a=bt(i.doubleValue);return o===a?Fa(o)===Fa(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return Er(e.arrayValue.values||[],t.arrayValue.values||[],Fe);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(uh(o)!==uh(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Fe(o[c],a[c])))return!1;return!0}(e,t);default:return Y()}}function ws(e,t){return(e.values||[]).find(n=>Fe(n,t))!==void 0}function wr(e,t){if(e===t)return 0;const n=zn(e),r=zn(t);if(n!==r)return ut(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ut(e.booleanValue,t.booleanValue);case 2:return function(i,o){const a=bt(i.integerValue||i.doubleValue),c=bt(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(e,t);case 3:return fh(e.timestampValue,t.timestampValue);case 4:return fh(vs(e),vs(t));case 5:return ut(e.stringValue,t.stringValue);case 6:return function(i,o){const a=qn(i),c=qn(o);return a.compareTo(c)}(e.bytesValue,t.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=ut(a[l],c[l]);if(u!==0)return u}return ut(a.length,c.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,o){const a=ut(bt(i.latitude),bt(o.latitude));return a!==0?a:ut(bt(i.longitude),bt(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=wr(a[l],c[l]);if(u)return u}return ut(a.length,c.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,o){if(i===Xs.mapValue&&o===Xs.mapValue)return 0;if(i===Xs.mapValue)return 1;if(o===Xs.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const f=ut(c[h],u[h]);if(f!==0)return f;const g=wr(a[c[h]],l[u[h]]);if(g!==0)return g}return ut(c.length,u.length)}(e.mapValue,t.mapValue);default:throw Y()}}function fh(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return ut(e,t);const n=gn(e),r=gn(t),s=ut(n.seconds,r.seconds);return s!==0?s:ut(n.nanos,r.nanos)}function Tr(e){return Ba(e)}function Ba(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=gn(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return qn(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return j.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Ba(i);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Ba(n.fields[o])}`;return s+"}"}(e.mapValue):Y()}function Ua(e){return!!e&&"integerValue"in e}function ol(e){return!!e&&"arrayValue"in e}function dh(e){return!!e&&"nullValue"in e}function ph(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Xo(e){return!!e&&"mapValue"in e}function Zr(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return mo(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=Zr(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Zr(e.arrayValue.values[n]);return t}return Object.assign({},e)}function n0(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ve{constructor(t){this.value=t}static empty(){return new Ve({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!Xo(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Zr(n)}setAll(t){let n=te.emptyPath(),r={},s=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Zr(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(t){const n=this.field(t.popLast());Xo(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Fe(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=n.mapValue.fields[t.get(r)];Xo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,r){mo(n,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new Ve(Zr(this.value))}}/**
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
 */class bi{constructor(t,n){this.position=t,this.inclusive=n}}function gh(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],o=e.position[s];if(i.field.isKeyField()?r=j.comparator(j.fromName(o.referenceValue),n.key):r=wr(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function mh(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Fe(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class Ci{constructor(t,n="asc"){this.field=t,this.dir=n}}function r0(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class Gp{}class Dt extends Gp{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new i0(t,n,r):n==="array-contains"?new c0(t,r):n==="in"?new l0(t,r):n==="not-in"?new u0(t,r):n==="array-contains-any"?new h0(t,r):new Dt(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new o0(t,r):new a0(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(wr(n,this.value)):n!==null&&zn(this.value)===zn(n)&&this.matchesComparison(wr(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Be extends Gp{constructor(t,n){super(),this.filters=t,this.op=n,this.ue=null}static create(t,n){return new Be(t,n)}matches(t){return Wp(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function Wp(e){return e.op==="and"}function Qp(e){return s0(e)&&Wp(e)}function s0(e){for(const t of e.filters)if(t instanceof Be)return!1;return!0}function $a(e){if(e instanceof Dt)return e.field.canonicalString()+e.op.toString()+Tr(e.value);if(Qp(e))return e.filters.map(t=>$a(t)).join(",");{const t=e.filters.map(n=>$a(n)).join(",");return`${e.op}(${t})`}}function Yp(e,t){return e instanceof Dt?function(r,s){return s instanceof Dt&&r.op===s.op&&r.field.isEqual(s.field)&&Fe(r.value,s.value)}(e,t):e instanceof Be?function(r,s){return s instanceof Be&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&Yp(o,s.filters[a]),!0):!1}(e,t):void Y()}function Jp(e){return e instanceof Dt?function(n){return`${n.field.canonicalString()} ${n.op} ${Tr(n.value)}`}(e):e instanceof Be?function(n){return n.op.toString()+" {"+n.getFilters().map(Jp).join(" ,")+"}"}(e):"Filter"}class i0 extends Dt{constructor(t,n,r){super(t,n,r),this.key=j.fromName(r.referenceValue)}matches(t){const n=j.comparator(t.key,this.key);return this.matchesComparison(n)}}class o0 extends Dt{constructor(t,n){super(t,"in",n),this.keys=Xp("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class a0 extends Dt{constructor(t,n){super(t,"not-in",n),this.keys=Xp("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Xp(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>j.fromName(r.referenceValue))}class c0 extends Dt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return ol(n)&&ws(n.arrayValue,this.value)}}class l0 extends Dt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&ws(this.value.arrayValue,n)}}class u0 extends Dt{constructor(t,n){super(t,"not-in",n)}matches(t){if(ws(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!ws(this.value.arrayValue,n)}}class h0 extends Dt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!ol(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ws(this.value.arrayValue,r))}}/**
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
 */class f0{constructor(t,n=null,r=[],s=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function _h(e,t=null,n=[],r=[],s=null,i=null,o=null){return new f0(e,t,n,r,s,i,o)}function al(e){const t=ot(e);if(t.ce===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>$a(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),go(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>Tr(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>Tr(r)).join(",")),t.ce=n}return t.ce}function cl(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!r0(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Yp(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!mh(e.startAt,t.startAt)&&mh(e.endAt,t.endAt)}function ja(e){return j.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
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
 */class _o{constructor(t,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function d0(e,t,n,r,s,i,o,a){return new _o(e,t,n,r,s,i,o,a)}function ll(e){return new _o(e)}function yh(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function p0(e){return e.collectionGroup!==null}function ts(e){const t=ot(e);if(t.le===null){t.le=[];const n=new Set;for(const i of t.explicitOrderBy)t.le.push(i),n.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new $t(te.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(t).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||t.le.push(new Ci(i,r))}),n.has(te.keyField().canonicalString())||t.le.push(new Ci(te.keyField(),r))}return t.le}function ke(e){const t=ot(e);return t.he||(t.he=g0(t,ts(e))),t.he}function g0(e,t){if(e.limitType==="F")return _h(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ci(s.field,i)});const n=e.endAt?new bi(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new bi(e.startAt.position,e.startAt.inclusive):null;return _h(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function qa(e,t,n){return new _o(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function yo(e,t){return cl(ke(e),ke(t))&&e.limitType===t.limitType}function Zp(e){return`${al(ke(e))}|lt:${e.limitType}`}function nr(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Jp(s)).join(", ")}]`),go(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Tr(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Tr(s)).join(",")),`Target(${r})`}(ke(e))}; limitType=${e.limitType})`}function vo(e,t){return t.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):j.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(e,t)&&function(r,s){for(const i of ts(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(r,s){return!(r.startAt&&!function(o,a,c){const l=gh(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,ts(r),s)||r.endAt&&!function(o,a,c){const l=gh(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,ts(r),s))}(e,t)}function m0(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function tg(e){return(t,n)=>{let r=!1;for(const s of ts(e)){const i=_0(s,t,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function _0(e,t,n){const r=e.field.isKeyField()?j.comparator(t.key,n.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?wr(c,l):Y()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Y()}}/**
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
 */class Vr{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){mo(this.inner,(n,r)=>{for(const[s,i]of r)t(s,i)})}isEmpty(){return ZI(this.inner)}size(){return this.innerSize}}/**
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
 */const y0=new Rt(j.comparator);function mn(){return y0}const eg=new Rt(j.comparator);function $r(...e){let t=eg;for(const n of e)t=t.insert(n.key,n);return t}function v0(e){let t=eg;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function On(){return es()}function ng(){return es()}function es(){return new Vr(e=>e.toString(),(e,t)=>e.isEqual(t))}const E0=new $t(j.comparator);function st(...e){let t=E0;for(const n of e)t=t.add(n);return t}const w0=new $t(ut);function T0(){return w0}/**
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
 */function I0(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Fa(t)?"-0":t}}function A0(e){return{integerValue:""+e}}/**
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
 */class Eo{constructor(){this._=void 0}}function R0(e,t,n){return e instanceof za?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&sl(i)&&(i=il(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,t):e instanceof Pi?rg(e,t):e instanceof Vi?sg(e,t):function(s,i){const o=b0(s,i),a=vh(o)+vh(s.Ie);return Ua(o)&&Ua(s.Ie)?A0(a):I0(s.serializer,a)}(e,t)}function S0(e,t,n){return e instanceof Pi?rg(e,t):e instanceof Vi?sg(e,t):n}function b0(e,t){return e instanceof Ha?function(r){return Ua(r)||function(i){return!!i&&"doubleValue"in i}(r)}(t)?t:{integerValue:0}:null}class za extends Eo{}class Pi extends Eo{constructor(t){super(),this.elements=t}}function rg(e,t){const n=ig(t);for(const r of e.elements)n.some(s=>Fe(s,r))||n.push(r);return{arrayValue:{values:n}}}class Vi extends Eo{constructor(t){super(),this.elements=t}}function sg(e,t){let n=ig(t);for(const r of e.elements)n=n.filter(s=>!Fe(s,r));return{arrayValue:{values:n}}}class Ha extends Eo{constructor(t,n){super(),this.serializer=t,this.Ie=n}}function vh(e){return bt(e.integerValue||e.doubleValue)}function ig(e){return ol(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function C0(e,t){return e.field.isEqual(t.field)&&function(r,s){return r instanceof Pi&&s instanceof Pi||r instanceof Vi&&s instanceof Vi?Er(r.elements,s.elements,Fe):r instanceof Ha&&s instanceof Ha?Fe(r.Ie,s.Ie):r instanceof za&&s instanceof za}(e.transform,t.transform)}class Ln{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Ln}static exists(t){return new Ln(void 0,t)}static updateTime(t){return new Ln(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ai(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class ul{}function og(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new V0(e.key,Ln.none()):new hl(e.key,e.data,Ln.none());{const n=e.data,r=Ve.empty();let s=new $t(te.comparator);for(let i of t.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new wo(e.key,r,new nn(s.toArray()),Ln.none())}}function P0(e,t,n){e instanceof hl?function(s,i,o){const a=s.value.clone(),c=wh(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof wo?function(s,i,o){if(!ai(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=wh(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(ag(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(e,t,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function ns(e,t,n,r){return e instanceof hl?function(i,o,a,c){if(!ai(i.precondition,o))return a;const l=i.value.clone(),u=Th(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(e,t,n,r):e instanceof wo?function(i,o,a,c){if(!ai(i.precondition,o))return a;const l=Th(i.fieldTransforms,c,o),u=o.data;return u.setAll(ag(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(e,t,n,r):function(i,o,a){return ai(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function Eh(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Er(r,s,(i,o)=>C0(i,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class hl extends ul{constructor(t,n,r,s=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class wo extends ul{constructor(t,n,r,s,i=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ag(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function wh(e,t,n){const r=new Map;Ct(e.length===n.length);for(let s=0;s<n.length;s++){const i=e[s],o=i.transform,a=t.data.field(i.field);r.set(i.field,S0(o,a,n[s]))}return r}function Th(e,t,n){const r=new Map;for(const s of e){const i=s.transform,o=n.data.field(s.field);r.set(s.field,R0(i,o,t))}return r}class V0 extends ul{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class D0{constructor(t,n,r,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&P0(i,t,r[s])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=ns(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=ns(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=ng();return this.mutations.forEach(s=>{const i=t.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=og(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(G.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),st())}isEqual(t){return this.batchId===t.batchId&&Er(this.mutations,t.mutations,(n,r)=>Eh(n,r))&&Er(this.baseMutations,t.baseMutations,(n,r)=>Eh(n,r))}}/**
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
 */class x0{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class O0{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var St,et;function cg(e){if(e===void 0)return Le("GRPC error has no .code"),C.UNKNOWN;switch(e){case St.OK:return C.OK;case St.CANCELLED:return C.CANCELLED;case St.UNKNOWN:return C.UNKNOWN;case St.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case St.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case St.INTERNAL:return C.INTERNAL;case St.UNAVAILABLE:return C.UNAVAILABLE;case St.UNAUTHENTICATED:return C.UNAUTHENTICATED;case St.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case St.NOT_FOUND:return C.NOT_FOUND;case St.ALREADY_EXISTS:return C.ALREADY_EXISTS;case St.PERMISSION_DENIED:return C.PERMISSION_DENIED;case St.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case St.ABORTED:return C.ABORTED;case St.OUT_OF_RANGE:return C.OUT_OF_RANGE;case St.UNIMPLEMENTED:return C.UNIMPLEMENTED;case St.DATA_LOSS:return C.DATA_LOSS;default:return Y()}}(et=St||(St={}))[et.OK=0]="OK",et[et.CANCELLED=1]="CANCELLED",et[et.UNKNOWN=2]="UNKNOWN",et[et.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",et[et.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",et[et.NOT_FOUND=5]="NOT_FOUND",et[et.ALREADY_EXISTS=6]="ALREADY_EXISTS",et[et.PERMISSION_DENIED=7]="PERMISSION_DENIED",et[et.UNAUTHENTICATED=16]="UNAUTHENTICATED",et[et.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",et[et.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",et[et.ABORTED=10]="ABORTED",et[et.OUT_OF_RANGE=11]="OUT_OF_RANGE",et[et.UNIMPLEMENTED=12]="UNIMPLEMENTED",et[et.INTERNAL=13]="INTERNAL",et[et.UNAVAILABLE=14]="UNAVAILABLE",et[et.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function N0(){return new TextEncoder}/**
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
 */const k0=new hr([4294967295,4294967295],0);function Ih(e){const t=N0().encode(e),n=new MI;return n.update(t),new Uint8Array(n.digest())}function Ah(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new hr([n,r],0),new hr([s,i],0)]}class fl{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new jr(`Invalid padding: ${n}`);if(r<0)throw new jr(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new jr(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new jr(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*t.length-n,this.Ee=hr.fromNumber(this.Te)}de(t,n,r){let s=t.add(n.multiply(hr.fromNumber(r)));return s.compare(k0)===1&&(s=new hr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const n=Ih(t),[r,s]=Ah(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(t,n,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),o=new fl(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Te===0)return;const n=Ih(t),[r,s]=Ah(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class jr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class To{constructor(t,n,r,s,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const s=new Map;return s.set(t,ks.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new To(G.min(),s,new Rt(ut),mn(),st())}}class ks{constructor(t,n,r,s,i){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new ks(r,n,st(),st(),st())}}/**
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
 */class ci{constructor(t,n,r,s){this.Ve=t,this.removedTargetIds=n,this.key=r,this.me=s}}class lg{constructor(t,n){this.targetId=t,this.fe=n}}class ug{constructor(t,n,r=Jt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Rh{constructor(){this.ge=0,this.pe=bh(),this.ye=Jt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=st(),n=st(),r=st();return this.pe.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Y()}}),new ks(this.ye,this.we,t,n,r)}Fe(){this.Se=!1,this.pe=bh()}Me(t,n){this.Se=!0,this.pe=this.pe.insert(t,n)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1,Ct(this.ge>=0)}Le(){this.Se=!0,this.we=!0}}class M0{constructor(t){this.Be=t,this.ke=new Map,this.qe=mn(),this.Qe=Sh(),this.Ke=new Rt(ut)}$e(t){for(const n of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(n,t.me):this.We(n,t.key,t.me);for(const n of t.removedTargetIds)this.We(n,t.key,t.me)}Ge(t){this.forEachTarget(t,n=>{const r=this.ze(n);switch(t.state){case 0:this.je(n)&&r.Ce(t.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(t.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Le(),r.Ce(t.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(t.resumeToken));break;default:Y()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ke.forEach((r,s)=>{this.je(s)&&n(s)})}Je(t){const n=t.targetId,r=t.fe.count,s=this.Ye(n);if(s){const i=s.target;if(ja(i))if(r===0){const o=new j(i.path);this.We(n,o,Gt.newNoDocument(o,G.min()))}else Ct(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(t),c=a?this.et(a,t,o):1;if(c!==0){this.He(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,l)}}}}}Xe(t){const n=t.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=qn(r).toUint8Array()}catch(c){if(c instanceof Kp)return vr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new fl(o,s,i)}catch(c){return vr(c instanceof jr?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(t,n,r){return n.fe.count===r-this.rt(t,n.targetId)?0:2}rt(t,n){const r=this.Be.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Be.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;t.mightContain(a)||(this.We(n,i,null),s++)}),s}it(t){const n=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&ja(a.target)){const c=new j(a.target.path);this.qe.get(c)!==null||this.st(o,c)||this.We(o,c,Gt.newNoDocument(c,t))}i.De&&(n.set(o,i.ve()),i.Fe())}});let r=st();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Ye(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(t));const s=new To(t,n,this.Ke,this.qe,r);return this.qe=mn(),this.Qe=Sh(),this.Ke=new Rt(ut),s}Ue(t,n){if(!this.je(t))return;const r=this.st(t,n.key)?2:0;this.ze(t).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(t))}We(t,n,r){if(!this.je(t))return;const s=this.ze(t);this.st(t,n)?s.Me(n,1):s.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(t)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(t){this.ke.delete(t)}Ze(t){const n=this.ze(t).ve();return this.Be.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let n=this.ke.get(t);return n||(n=new Rh,this.ke.set(t,n)),n}ot(t){let n=this.Qe.get(t);return n||(n=new $t(ut),this.Qe=this.Qe.insert(t,n)),n}je(t){const n=this.Ye(t)!==null;return n||V("WatchChangeAggregator","Detected inactive target",t),n}Ye(t){const n=this.ke.get(t);return n&&n.be?null:this.Be._t(t)}He(t){this.ke.set(t,new Rh),this.Be.getRemoteKeysForTarget(t).forEach(n=>{this.We(t,n,null)})}st(t,n){return this.Be.getRemoteKeysForTarget(t).has(n)}}function Sh(){return new Rt(j.comparator)}function bh(){return new Rt(j.comparator)}const L0={asc:"ASCENDING",desc:"DESCENDING"},F0={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},B0={and:"AND",or:"OR"};class U0{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Ka(e,t){return e.useProto3Json||go(t)?t:{value:t}}function $0(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function j0(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function fr(e){return Ct(!!e),G.fromTimestamp(function(n){const r=gn(n);return new oe(r.seconds,r.nanos)}(e))}function q0(e,t){return Ga(e,t).canonicalString()}function Ga(e,t){const n=function(s){return new Tt(["projects",s.projectId,"databases",s.database])}(e).child("documents");return t===void 0?n:n.child(t)}function hg(e){const t=Tt.fromString(e);return Ct(mg(t)),t}function Zo(e,t){const n=hg(t);if(n.get(1)!==e.databaseId.projectId)throw new U(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new U(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new j(dg(n))}function fg(e,t){return q0(e.databaseId,t)}function z0(e){const t=hg(e);return t.length===4?Tt.emptyPath():dg(t)}function Ch(e){return new Tt(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function dg(e){return Ct(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function H0(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Y()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(Ct(u===void 0||typeof u=="string"),Jt.fromBase64String(u||"")):(Ct(u===void 0||u instanceof Uint8Array),Jt.fromUint8Array(u||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(l){const u=l.code===void 0?C.UNKNOWN:cg(l.code);return new U(u,l.message||"")}(o);n=new ug(r,s,i,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Zo(e,r.document.name),i=fr(r.document.updateTime),o=r.document.createTime?fr(r.document.createTime):G.min(),a=new Ve({mapValue:{fields:r.document.fields}}),c=Gt.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new ci(l,u,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Zo(e,r.document),i=r.readTime?fr(r.readTime):G.min(),o=Gt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new ci([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Zo(e,r.document),i=r.removedTargetIds||[];n=new ci([],i,s,null)}else{if(!("filter"in t))return Y();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new O0(s,i),a=r.targetId;n=new lg(a,o)}}return n}function K0(e,t){return{documents:[fg(e,t.path)]}}function G0(e,t){const n={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=fg(e,s);const i=function(l){if(l.length!==0)return gg(Be.create(l,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const o=function(l){if(l.length!==0)return l.map(u=>function(f){return{field:rr(f.field),direction:Y0(f.dir)}}(u))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Ka(e,t.limit);return a!==null&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(t.endAt)),{ut:n,parent:s}}function W0(e){let t=z0(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ct(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:t=t.child(u.collectionId)}let i=[];n.where&&(i=function(h){const f=pg(h);return f instanceof Be&&Qp(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(f=>function(w){return new Ci(sr(w.field),function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(w.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,go(f)?null:f}(n.limit));let c=null;n.startAt&&(c=function(h){const f=!!h.before,g=h.values||[];return new bi(g,f)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const f=!h.before,g=h.values||[];return new bi(g,f)}(n.endAt)),d0(t,s,o,i,a,"F",c,l)}function Q0(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function pg(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=sr(n.unaryFilter.field);return Dt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=sr(n.unaryFilter.field);return Dt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=sr(n.unaryFilter.field);return Dt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=sr(n.unaryFilter.field);return Dt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(e):e.fieldFilter!==void 0?function(n){return Dt.create(sr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return Be.create(n.compositeFilter.filters.map(r=>pg(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Y()}}(n.compositeFilter.op))}(e):Y()}function Y0(e){return L0[e]}function J0(e){return F0[e]}function X0(e){return B0[e]}function rr(e){return{fieldPath:e.canonicalString()}}function sr(e){return te.fromServerFormat(e.fieldPath)}function gg(e){return e instanceof Dt?function(n){if(n.op==="=="){if(ph(n.value))return{unaryFilter:{field:rr(n.field),op:"IS_NAN"}};if(dh(n.value))return{unaryFilter:{field:rr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(ph(n.value))return{unaryFilter:{field:rr(n.field),op:"IS_NOT_NAN"}};if(dh(n.value))return{unaryFilter:{field:rr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:rr(n.field),op:J0(n.op),value:n.value}}}(e):e instanceof Be?function(n){const r=n.getFilters().map(s=>gg(s));return r.length===1?r[0]:{compositeFilter:{op:X0(n.op),filters:r}}}(e):Y()}function mg(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class Z0{constructor(t){this.ct=t}}function tA(e){const t=W0({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?qa(t,t.limit,"L"):t}/**
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
 */class eA{constructor(){this._n=new nA}addToCollectionParentIndex(t,n){return this._n.add(n),E.resolve()}getCollectionParents(t,n){return E.resolve(this._n.getEntries(n))}addFieldIndex(t,n){return E.resolve()}deleteFieldIndex(t,n){return E.resolve()}deleteAllFieldIndexes(t){return E.resolve()}createTargetIndexes(t,n){return E.resolve()}getDocumentsMatchingTarget(t,n){return E.resolve(null)}getIndexType(t,n){return E.resolve(0)}getFieldIndexes(t,n){return E.resolve([])}getNextCollectionGroupToUpdate(t){return E.resolve(null)}getMinOffset(t,n){return E.resolve(pn.min())}getMinOffsetFromCollectionGroup(t,n){return E.resolve(pn.min())}updateCollectionGroup(t,n,r){return E.resolve()}updateIndexEntries(t,n){return E.resolve()}}class nA{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n]||new $t(Tt.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(t){return(this.index[t]||new $t(Tt.comparator)).toArray()}}/**
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
 */class Ir{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new Ir(0)}static Ln(){return new Ir(-1)}}/**
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
 */class rA{constructor(){this.changes=new Vr(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Gt.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?E.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class sA{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class iA{constructor(t,n,r,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,n))).next(s=>(r!==null&&ns(r.mutation,s,nn.empty(),oe.now()),s))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,st()).next(()=>r))}getLocalViewOfDocuments(t,n,r=st()){const s=On();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,r).next(i=>{let o=$r();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=On();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,st()))}populateOverlays(t,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,s){let i=mn();const o=es(),a=function(){return es()}();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof wo)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),ns(u.mutation,l,u.mutation.getFieldMask(),oe.now())):o.set(l.key,nn.empty())}),this.recalculateAndSaveOverlays(t,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new sA(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const r=es();let s=new Rt((o,a)=>o-a),i=st();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||nn.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||st()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=ng();u.forEach(f=>{if(!i.has(f)){const g=og(n.get(f),r.get(f));g!==null&&h.set(f,g),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,l,h))}return E.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,s){return function(o){return j.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):p0(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,s):this.getDocumentsMatchingCollectionQuery(t,n,r,s)}getNextDocuments(t,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,s-i.size):E.resolve(On());let a=-1,c=i;return o.next(l=>E.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?E.resolve():this.remoteDocumentCache.getEntry(t,u).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(t,l,i)).next(()=>this.computeViews(t,c,l,st())).next(u=>({batchId:a,changes:v0(u)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new j(n)).next(r=>{let s=$r();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,n,r,s){const i=n.collectionGroup;let o=$r();return this.indexManager.getCollectionParents(t,i).next(a=>E.forEach(a,c=>{const l=function(h,f){return new _o(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(t,l,r,s).next(u=>{u.forEach((h,f)=>{o=o.insert(h,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i,s))).next(o=>{i.forEach((c,l)=>{const u=l.getKey();o.get(u)===null&&(o=o.insert(u,Gt.newInvalidDocument(u)))});let a=$r();return o.forEach((c,l)=>{const u=i.get(c);u!==void 0&&ns(u.mutation,l,nn.empty(),oe.now()),vo(n,l)&&(a=a.insert(c,l))}),a})}}/**
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
 */class oA{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,n){return E.resolve(this.cr.get(n))}saveBundleMetadata(t,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:fr(s.createTime)}}(n)),E.resolve()}getNamedQuery(t,n){return E.resolve(this.lr.get(n))}saveNamedQuery(t,n){return this.lr.set(n.name,function(s){return{name:s.name,query:tA(s.bundledQuery),readTime:fr(s.readTime)}}(n)),E.resolve()}}/**
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
 */class aA{constructor(){this.overlays=new Rt(j.comparator),this.hr=new Map}getOverlay(t,n){return E.resolve(this.overlays.get(n))}getOverlays(t,n){const r=On();return E.forEach(n,s=>this.getOverlay(t,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((s,i)=>{this.ht(t,n,i)}),E.resolve()}removeOverlaysForBatchId(t,n,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),E.resolve()}getOverlaysForCollection(t,n,r){const s=On(),i=n.length+1,o=new j(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return E.resolve(s)}getOverlaysForCollectionGroup(t,n,r,s){let i=new Rt((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=On(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=On(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return E.resolve(a)}ht(t,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new x0(n,r));let i=this.hr.get(n);i===void 0&&(i=st(),this.hr.set(n,i)),this.hr.set(n,i.add(r.key))}}/**
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
 */class dl{constructor(){this.Pr=new $t(Nt.Ir),this.Tr=new $t(Nt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,n){const r=new Nt(t,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.Ar(new Nt(t,n))}Rr(t,n){t.forEach(r=>this.removeReference(r,n))}Vr(t){const n=new j(new Tt([])),r=new Nt(n,t),s=new Nt(n,t+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const n=new j(new Tt([])),r=new Nt(n,t),s=new Nt(n,t+1);let i=st();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new Nt(t,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class Nt{constructor(t,n){this.key=t,this.pr=n}static Ir(t,n){return j.comparator(t.key,n.key)||ut(t.pr,n.pr)}static Er(t,n){return ut(t.pr,n.pr)||j.comparator(t.key,n.key)}}/**
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
 */class cA{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new $t(Nt.Ir)}checkEmpty(t){return E.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new D0(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.wr=this.wr.add(new Nt(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return E.resolve(o)}lookupMutationBatch(t,n){return E.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,s=this.br(r),i=s<0?0:s;return E.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return E.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return E.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new Nt(n,0),s=new Nt(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{const a=this.Sr(o.pr);i.push(a)}),E.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new $t(ut);return n.forEach(s=>{const i=new Nt(s,0),o=new Nt(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],a=>{r=r.add(a.pr)})}),E.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,s=r.length+1;let i=r;j.isDocumentKey(i)||(i=i.child(""));const o=new Nt(new j(i),0);let a=new $t(ut);return this.wr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.pr)),!0)},o),E.resolve(this.Dr(a))}Dr(t){const n=[];return t.forEach(r=>{const s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(t,n){Ct(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return E.forEach(n.mutations,s=>{const i=new Nt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,n){const r=new Nt(n,0),s=this.wr.firstAfterOrEqual(r);return E.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,E.resolve()}Cr(t,n){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const n=this.br(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class lA{constructor(t){this.vr=t,this.docs=function(){return new Rt(j.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return E.resolve(r?r.document.mutableCopy():Gt.newInvalidDocument(n))}getEntries(t,n){let r=mn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Gt.newInvalidDocument(s))}),E.resolve(r)}getDocumentsMatchingQuery(t,n,r,s){let i=mn();const o=n.path,a=new j(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||WI(GI(u),r)<=0||(s.has(u.key)||vo(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return E.resolve(i)}getAllFromCollectionGroup(t,n,r,s){Y()}Fr(t,n){return E.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new uA(this)}getSize(t){return E.resolve(this.size)}}class uA extends rA{constructor(t){super(),this.ar=t}applyChanges(t){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(t,s)):this.ar.removeEntry(r)}),E.waitFor(n)}getFromCache(t,n){return this.ar.getEntry(t,n)}getAllFromCache(t,n){return this.ar.getEntries(t,n)}}/**
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
 */class hA{constructor(t){this.persistence=t,this.Mr=new Vr(n=>al(n),cl),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.Or=0,this.Nr=new dl,this.targetCount=0,this.Lr=Ir.Nn()}forEachTarget(t,n){return this.Mr.forEach((r,s)=>n(s)),E.resolve()}getLastRemoteSnapshotVersion(t){return E.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return E.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),E.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),E.resolve()}qn(t){this.Mr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Lr=new Ir(n),this.highestTargetId=n),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,n){return this.qn(n),this.targetCount+=1,E.resolve()}updateTargetData(t,n){return this.qn(n),E.resolve()}removeTargetData(t,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,E.resolve()}removeTargets(t,n,r){let s=0;const i=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),s++)}),E.waitFor(i).next(()=>s)}getTargetCount(t){return E.resolve(this.targetCount)}getTargetData(t,n){const r=this.Mr.get(n)||null;return E.resolve(r)}addMatchingKeys(t,n,r){return this.Nr.dr(n,r),E.resolve()}removeMatchingKeys(t,n,r){this.Nr.Rr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(t,o))}),E.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.Nr.Vr(n),E.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Nr.gr(n);return E.resolve(r)}containsKey(t,n){return E.resolve(this.Nr.containsKey(n))}}/**
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
 */class fA{constructor(t,n){this.Br={},this.overlays={},this.kr=new rl(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new hA(this),this.indexManager=new eA,this.remoteDocumentCache=function(s){return new lA(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new Z0(n),this.$r=new oA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new aA,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Br[t.toKey()];return r||(r=new cA(n,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,n,r){V("MemoryPersistence","Starting transaction:",t);const s=new dA(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(t,n){return E.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,n)))}}class dA extends YI{constructor(t){super(),this.currentSequenceNumber=t}}class pl{constructor(t){this.persistence=t,this.zr=new dl,this.jr=null}static Hr(t){return new pl(t)}get Jr(){if(this.jr)return this.jr;throw Y()}addReference(t,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),E.resolve()}removeReference(t,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),E.resolve()}markPotentiallyOrphaned(t,n){return this.Jr.add(n.toString()),E.resolve()}removeTarget(t,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(t,n))}Ur(){this.jr=new Set}Wr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return E.forEach(this.Jr,r=>{const s=j.fromPath(r);return this.Yr(t,s).next(i=>{i||n.removeEntry(s,G.min())})}).next(()=>(this.jr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Yr(t,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(t){return 0}Yr(t,n){return E.or([()=>E.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Gr(t,n)])}}/**
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
 */class gl{constructor(t,n,r,s){this.targetId=t,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(t,n){let r=st(),s=st();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new gl(t,n.fromCache,r,s)}}/**
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
 */class pA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class gA{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Yv()?8:xn.v(mi())>0?6:4}()}initialize(t,n){this.zi=t,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(t,n,r,s){const i={result:null};return this.ji(t,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Hi(t,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new pA;return this.Ji(t,n,o).next(a=>{if(i.result=a,this.Ui)return this.Yi(t,n,o,a.size)})}).next(()=>i.result)}Yi(t,n,r,s){return r.documentReadCount<this.Wi?(Lr()<=rt.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",nr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),E.resolve()):(Lr()<=rt.DEBUG&&V("QueryEngine","Query:",nr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(Lr()<=rt.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",nr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,ke(n))):E.resolve())}ji(t,n){if(yh(n))return E.resolve(null);let r=ke(n);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=qa(n,null,"F"),r=ke(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(i=>{const o=st(...i);return this.zi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(c=>{const l=this.Zi(n,a);return this.Xi(n,l,o,c.readTime)?this.ji(t,qa(n,null,"F")):this.es(t,l,n,c)}))})))}Hi(t,n,r,s){return yh(n)||s.isEqual(G.min())?E.resolve(null):this.zi.getDocuments(t,r).next(i=>{const o=this.Zi(n,i);return this.Xi(n,o,r,s)?E.resolve(null):(Lr()<=rt.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),nr(n)),this.es(t,o,n,KI(s,-1)).next(a=>a))})}Zi(t,n){let r=new $t(tg(t));return n.forEach((s,i)=>{vo(t,i)&&(r=r.add(i))}),r}Xi(t,n,r,s){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(t,n,r){return Lr()<=rt.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",nr(n)),this.zi.getDocumentsMatchingQuery(t,n,pn.min(),r)}es(t,n,r,s){return this.zi.getDocumentsMatchingQuery(t,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class mA{constructor(t,n,r,s){this.persistence=t,this.ts=n,this.serializer=s,this.ns=new Rt(ut),this.rs=new Vr(i=>al(i),cl),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new iA(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.ns))}}function _A(e,t,n,r){return new mA(e,t,n,r)}async function _g(e,t){const n=ot(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n._s(t),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=st();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({us:l,removedBatchIds:o,addedBatchIds:a}))})})}function yg(e){const t=ot(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Qr.getLastRemoteSnapshotVersion(n))}function yA(e,t){const n=ot(e),r=t.snapshotVersion;let s=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.os.newChangeBuffer({trackRemovals:!0});s=n.ns;const a=[];t.targetChanges.forEach((u,h)=>{const f=s.get(h);if(!f)return;a.push(n.Qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(i,u.addedDocuments,h)));let g=f.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(h)!==null?g=g.withResumeToken(Jt.EMPTY_BYTE_STRING,G.min()).withLastLimboFreeSnapshotVersion(G.min()):u.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(u.resumeToken,r)),s=s.insert(h,g),function(R,S,O){return R.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=3e8?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(f,g,u)&&a.push(n.Qr.updateTargetData(i,g))});let c=mn(),l=st();if(t.documentUpdates.forEach(u=>{t.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(vA(i,o,t.documentUpdates).next(u=>{c=u.cs,l=u.ls})),!r.isEqual(G.min())){const u=n.Qr.getLastRemoteSnapshotVersion(i).next(h=>n.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return E.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.ns=s,i))}function vA(e,t,n){let r=st(),s=st();return n.forEach(i=>r=r.add(i)),t.getEntries(e,r).next(i=>{let o=mn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(G.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):V("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{cs:o,ls:s}})}function EA(e,t){const n=ot(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Qr.getTargetData(r,t).next(i=>i?(s=i,E.resolve(s)):n.Qr.allocateTargetId(r).next(o=>(s=new rn(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(t,r.targetId)),r})}async function Wa(e,t,n){const r=ot(e),s=r.ns.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ns(o))throw o;V("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.ns=r.ns.remove(t),r.rs.delete(s.target)}function Ph(e,t,n){const r=ot(e);let s=G.min(),i=st();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,u){const h=ot(c),f=h.rs.get(u);return f!==void 0?E.resolve(h.ns.get(f)):h.Qr.getTargetData(l,u)}(r,o,ke(t)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.ts.getDocumentsMatchingQuery(o,t,n?s:G.min(),n?i:st())).next(a=>(wA(r,m0(t),a),{documents:a,hs:i})))}function wA(e,t,n){let r=e.ss.get(t)||G.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),e.ss.set(t,r)}class Vh{constructor(){this.activeTargetIds=T0()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class TA{constructor(){this.no=new Vh,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,n,r){this.ro[t]=n}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new Vh,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class IA{io(t){}shutdown(){}}/**
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
 */class Dh{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Zs=null;function ta(){return Zs===null?Zs=function(){return 268435456+Math.round(2147483648*Math.random())}():Zs++,"0x"+Zs.toString(16)}/**
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
 */const AA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class RA{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}onMessage(t){this.Ao=t}close(){this.ho()}send(t){this.lo(t)}Ro(){this.Io()}Vo(t){this.Eo(t)}mo(t){this.Ao(t)}}/**
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
 */const Ht="WebChannelConnection";class SA extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${s}/databases/${i}`,this.yo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get wo(){return!1}So(n,r,s,i,o){const a=ta(),c=this.bo(n,r.toUriEncodedString());V("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(l,i,o),this.Co(n,c,l,s).then(u=>(V("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw vr("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}vo(n,r,s,i,o,a){return this.So(n,r,s,i,o)}Do(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Pr}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}bo(n,r){const s=AA[n];return`${this.fo}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Co(t,n,r,s){const i=ta();return new Promise((o,a)=>{const c=new kI;c.setWithCredentials(!0),c.listenOnce(OI.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Jo.NO_ERROR:const u=c.getResponseJson();V(Ht,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(u)),o(u);break;case Jo.TIMEOUT:V(Ht,`RPC '${t}' ${i} timed out`),a(new U(C.DEADLINE_EXCEEDED,"Request time out"));break;case Jo.HTTP_ERROR:const h=c.getStatus();if(V(Ht,`RPC '${t}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const g=f==null?void 0:f.error;if(g&&g.status&&g.message){const w=function(S){const O=S.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(O)>=0?O:C.UNKNOWN}(g.status);a(new U(w,g.message))}else a(new U(C.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new U(C.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{V(Ht,`RPC '${t}' ${i} completed.`)}});const l=JSON.stringify(s);V(Ht,`RPC '${t}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}Fo(t,n,r){const s=ta(),i=[this.fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=DI(),a=xI(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");V(Ht,`Creating RPC '${t}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let f=!1,g=!1;const w=new RA({lo:S=>{g?V(Ht,`Not sending because RPC '${t}' stream ${s} is closed:`,S):(f||(V(Ht,`Opening RPC '${t}' stream ${s} transport.`),h.open(),f=!0),V(Ht,`RPC '${t}' stream ${s} sending:`,S),h.send(S))},ho:()=>h.close()}),R=(S,O,M)=>{S.listen(O,B=>{try{M(B)}catch(W){setTimeout(()=>{throw W},0)}})};return R(h,Ys.EventType.OPEN,()=>{g||V(Ht,`RPC '${t}' stream ${s} transport opened.`)}),R(h,Ys.EventType.CLOSE,()=>{g||(g=!0,V(Ht,`RPC '${t}' stream ${s} transport closed`),w.Vo())}),R(h,Ys.EventType.ERROR,S=>{g||(g=!0,vr(Ht,`RPC '${t}' stream ${s} transport errored:`,S),w.Vo(new U(C.UNAVAILABLE,"The operation could not be completed")))}),R(h,Ys.EventType.MESSAGE,S=>{var O;if(!g){const M=S.data[0];Ct(!!M);const B=M,W=B.error||((O=B[0])===null||O===void 0?void 0:O.error);if(W){V(Ht,`RPC '${t}' stream ${s} received error:`,W);const J=W.status;let q=function(Z){const yt=St[Z];if(yt!==void 0)return cg(yt)}(J),gt=W.message;q===void 0&&(q=C.INTERNAL,gt="Unknown error status: "+J+" with message "+W.message),g=!0,w.Vo(new U(q,gt)),h.close()}else V(Ht,`RPC '${t}' stream ${s} received:`,M),w.mo(M)}}),R(a,NI.STAT_EVENT,S=>{S.stat===ah.PROXY?V(Ht,`RPC '${t}' stream ${s} detected buffering proxy`):S.stat===ah.NOPROXY&&V(Ht,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{w.Ro()},0),w}}function ea(){return typeof document<"u"?document:null}/**
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
 */function vg(e){return new U0(e,!0)}/**
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
 */class Eg{constructor(t,n,r=1e3,s=1.5,i=6e4){this.oi=t,this.timerId=n,this.Mo=r,this.xo=s,this.Oo=i,this.No=0,this.Lo=null,this.Bo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(t){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Bo),s=Math.max(0,n-r);s>0&&V("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Bo=Date.now(),t())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
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
 */class bA{constructor(t,n,r,s,i,o,a,c){this.oi=t,this.$o=r,this.Uo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new Eg(t,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(t){this.n_(),this.stream.send(t)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(t,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,t!==4?this.jo.reset():n&&n.code===C.RESOURCE_EXHAUSTED?(Le(n.toString()),Le("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.To(n)}i_(){}auth(){this.state=1;const t=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Wo===n&&this.o_(r,s)},r=>{t(()=>{const s=new U(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(s)})})}o_(t,n){const r=this.s_(this.Wo);this.stream=this.a_(t,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(s=>{r(()=>this.__(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(t){return V("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}s_(t){return n=>{this.oi.enqueueAndForget(()=>this.Wo===t?n():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class CA extends bA{constructor(t,n,r,s,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}a_(t,n){return this.connection.Fo("Listen",t,n)}onMessage(t){this.jo.reset();const n=H0(this.serializer,t),r=function(i){if(!("targetChange"in i))return G.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?G.min():o.readTime?fr(o.readTime):G.min()}(t);return this.listener.u_(n,r)}c_(t){const n={};n.database=Ch(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=ja(c)?{documents:K0(i,c)}:{query:G0(i,c).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=j0(i,o.resumeToken);const l=Ka(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(G.min())>0){a.readTime=$0(i,o.snapshotVersion.toTimestamp());const l=Ka(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,t);const r=Q0(this.serializer,t);r&&(n.labels=r),this.t_(n)}l_(t){const n={};n.database=Ch(this.serializer),n.removeTarget=t,this.t_(n)}}/**
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
 */class PA extends class{}{constructor(t,n,r,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.A_=!1}R_(){if(this.A_)throw new U(C.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,n,r,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.So(t,Ga(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new U(C.UNKNOWN,i.toString())})}vo(t,n,r,s,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(t,Ga(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new U(C.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class VA{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(t){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.y_("Offline")))}set(t){this.b_(),this.m_=0,t==="Online"&&(this.g_=!1),this.y_(t)}y_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}w_(t){const n=`Could not reach Cloud Firestore backend. ${t}
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
 */class DA{constructor(t,n,r,s,i){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=i,this.M_.io(o=>{r.enqueueAndForget(async()=>{Ls(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=ot(c);l.v_.add(4),await Ms(l),l.x_.set("Unknown"),l.v_.delete(4),await Io(l)}(this))})}),this.x_=new VA(r,s)}}async function Io(e){if(Ls(e))for(const t of e.F_)await t(!0)}async function Ms(e){for(const t of e.F_)await t(!1)}function wg(e,t){const n=ot(e);n.C_.has(t.targetId)||(n.C_.set(t.targetId,t),vl(n)?yl(n):Dr(n).Jo()&&_l(n,t))}function ml(e,t){const n=ot(e),r=Dr(n);n.C_.delete(t),r.Jo()&&Tg(n,t),n.C_.size===0&&(r.Jo()?r.Xo():Ls(n)&&n.x_.set("Unknown"))}function _l(e,t){if(e.O_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(G.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Dr(e).c_(t)}function Tg(e,t){e.O_.Oe(t),Dr(e).l_(t)}function yl(e){e.O_=new M0({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>e.C_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),Dr(e).start(),e.x_.p_()}function vl(e){return Ls(e)&&!Dr(e).Ho()&&e.C_.size>0}function Ls(e){return ot(e).v_.size===0}function Ig(e){e.O_=void 0}async function xA(e){e.C_.forEach((t,n)=>{_l(e,t)})}async function OA(e,t){Ig(e),vl(e)?(e.x_.S_(t),yl(e)):e.x_.set("Unknown")}async function NA(e,t,n){if(e.x_.set("Online"),t instanceof ug&&t.state===2&&t.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.C_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.C_.delete(a),s.O_.removeTarget(a))}(e,t)}catch(r){V("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await xh(e,r)}else if(t instanceof ci?e.O_.$e(t):t instanceof lg?e.O_.Je(t):e.O_.Ge(t),!n.isEqual(G.min()))try{const r=await yg(e.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.O_.it(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.C_.get(l);u&&i.C_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.C_.get(c);if(!u)return;i.C_.set(c,u.withResumeToken(Jt.EMPTY_BYTE_STRING,u.snapshotVersion)),Tg(i,c);const h=new rn(u.target,c,l,u.sequenceNumber);_l(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(r){V("RemoteStore","Failed to raise snapshot:",r),await xh(e,r)}}async function xh(e,t,n){if(!Ns(t))throw t;e.v_.add(1),await Ms(e),e.x_.set("Offline"),n||(n=()=>yg(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await n(),e.v_.delete(1),await Io(e)})}async function Oh(e,t){const n=ot(e);n.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const r=Ls(n);n.v_.add(3),await Ms(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.v_.delete(3),await Io(n)}async function kA(e,t){const n=ot(e);t?(n.v_.delete(2),await Io(n)):t||(n.v_.add(2),await Ms(n),n.x_.set("Unknown"))}function Dr(e){return e.N_||(e.N_=function(n,r,s){const i=ot(n);return i.R_(),new CA(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{Po:xA.bind(null,e),To:OA.bind(null,e),u_:NA.bind(null,e)}),e.F_.push(async t=>{t?(e.N_.Zo(),vl(e)?yl(e):e.x_.set("Unknown")):(await e.N_.stop(),Ig(e))})),e.N_}/**
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
 */class El{constructor(t,n,r,s,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new hn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,s,i){const o=Date.now()+r,a=new El(t,n,o,s,i);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(C.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ag(e,t){if(Le("AsyncQueue",`${t}: ${e}`),Ns(e))return new U(C.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class dr{constructor(t){this.comparator=t?(n,r)=>t(n,r)||j.comparator(n.key,r.key):(n,r)=>j.comparator(n.key,r.key),this.keyedMap=$r(),this.sortedSet=new Rt(this.comparator)}static emptySet(t){return new dr(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof dr)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new dr;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
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
 */class Nh{constructor(){this.B_=new Rt(j.comparator)}track(t){const n=t.doc.key,r=this.B_.get(n);r?t.type!==0&&r.type===3?this.B_=this.B_.insert(n,t):t.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.B_=this.B_.remove(n):t.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:t.doc}):Y():this.B_=this.B_.insert(n,t)}k_(){const t=[];return this.B_.inorderTraversal((n,r)=>{t.push(r)}),t}}class Ar{constructor(t,n,r,s,i,o,a,c,l){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(t,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ar(t,n,dr.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&yo(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class MA{constructor(){this.q_=void 0,this.Q_=[]}K_(){return this.Q_.some(t=>t.U_())}}class LA{constructor(){this.queries=new Vr(t=>Zp(t),yo),this.onlineState="Unknown",this.W_=new Set}}async function FA(e,t){const n=ot(e);let r=3;const s=t.query;let i=n.queries.get(s);i?!i.K_()&&t.U_()&&(r=2):(i=new MA,r=t.U_()?0:1);try{switch(r){case 0:i.q_=await n.onListen(s,!0);break;case 1:i.q_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=Ag(o,`Initialization of query '${nr(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,i),i.Q_.push(t),t.G_(n.onlineState),i.q_&&t.z_(i.q_)&&wl(n)}async function BA(e,t){const n=ot(e),r=t.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Q_.indexOf(t);o>=0&&(i.Q_.splice(o,1),i.Q_.length===0?s=t.U_()?0:1:!i.K_()&&t.U_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function UA(e,t){const n=ot(e);let r=!1;for(const s of t){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.Q_)a.z_(s)&&(r=!0);o.q_=s}}r&&wl(n)}function $A(e,t,n){const r=ot(e),s=r.queries.get(t);if(s)for(const i of s.Q_)i.onError(n);r.queries.delete(t)}function wl(e){e.W_.forEach(t=>{t.next()})}var Qa,kh;(kh=Qa||(Qa={})).j_="default",kh.Cache="cache";class jA{constructor(t,n,r){this.query=t,this.H_=n,this.J_=!1,this.Y_=null,this.onlineState="Unknown",this.options=r||{}}z_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Ar(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.J_?this.Z_(t)&&(this.H_.next(t),n=!0):this.X_(t,this.onlineState)&&(this.ea(t),n=!0),this.Y_=t,n}onError(t){this.H_.error(t)}G_(t){this.onlineState=t;let n=!1;return this.Y_&&!this.J_&&this.X_(this.Y_,t)&&(this.ea(this.Y_),n=!0),n}X_(t,n){if(!t.fromCache||!this.U_())return!0;const r=n!=="Offline";return(!this.options.ta||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Z_(t){if(t.docChanges.length>0)return!0;const n=this.Y_&&this.Y_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ea(t){t=Ar.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.J_=!0,this.H_.next(t)}U_(){return this.options.source!==Qa.Cache}}/**
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
 */class Rg{constructor(t){this.key=t}}class Sg{constructor(t){this.key=t}}class qA{constructor(t,n){this.query=t,this.ua=n,this.ca=null,this.hasCachedResults=!1,this.current=!1,this.la=st(),this.mutatedKeys=st(),this.ha=tg(t),this.Pa=new dr(this.ha)}get Ia(){return this.ua}Ta(t,n){const r=n?n.Ea:new Nh,s=n?n.Pa:this.Pa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((u,h)=>{const f=s.get(u),g=vo(this.query,h)?h:null,w=!!f&&this.mutatedKeys.has(f.key),R=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let S=!1;f&&g?f.data.isEqual(g.data)?w!==R&&(r.track({type:3,doc:g}),S=!0):this.da(f,g)||(r.track({type:2,doc:g}),S=!0,(c&&this.ha(g,c)>0||l&&this.ha(g,l)<0)&&(a=!0)):!f&&g?(r.track({type:0,doc:g}),S=!0):f&&!g&&(r.track({type:1,doc:f}),S=!0,(c||l)&&(a=!0)),S&&(g?(o=o.add(g),i=R?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{Pa:o,Ea:r,Xi:a,mutatedKeys:i}}da(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r,s){const i=this.Pa;this.Pa=t.Pa,this.mutatedKeys=t.mutatedKeys;const o=t.Ea.k_();o.sort((u,h)=>function(g,w){const R=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return R(g)-R(w)}(u.type,h.type)||this.ha(u.doc,h.doc)),this.Aa(r),s=s!=null&&s;const a=n&&!s?this.Ra():[],c=this.la.size===0&&this.current&&!s?1:0,l=c!==this.ca;return this.ca=c,o.length!==0||l?{snapshot:new Ar(this.query,t.Pa,i,o,t.mutatedKeys,c===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Va:a}:{Va:a}}G_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Pa:this.Pa,Ea:new Nh,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{Va:[]}}ma(t){return!this.ua.has(t)&&!!this.Pa.has(t)&&!this.Pa.get(t).hasLocalMutations}Aa(t){t&&(t.addedDocuments.forEach(n=>this.ua=this.ua.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.ua=this.ua.delete(n)),this.current=t.current)}Ra(){if(!this.current)return[];const t=this.la;this.la=st(),this.Pa.forEach(r=>{this.ma(r.key)&&(this.la=this.la.add(r.key))});const n=[];return t.forEach(r=>{this.la.has(r)||n.push(new Sg(r))}),this.la.forEach(r=>{t.has(r)||n.push(new Rg(r))}),n}fa(t){this.ua=t.hs,this.la=st();const n=this.Ta(t.documents);return this.applyChanges(n,!0)}ga(){return Ar.fromInitialDocuments(this.query,this.Pa,this.mutatedKeys,this.ca===0,this.hasCachedResults)}}class zA{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class HA{constructor(t){this.key=t,this.pa=!1}}class KA{constructor(t,n,r,s,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.ya={},this.wa=new Vr(a=>Zp(a),yo),this.Sa=new Map,this.ba=new Set,this.Da=new Rt(j.comparator),this.Ca=new Map,this.va=new dl,this.Fa={},this.Ma=new Map,this.xa=Ir.Ln(),this.onlineState="Unknown",this.Oa=void 0}get isPrimaryClient(){return this.Oa===!0}}async function GA(e,t,n=!0){const r=Dg(e);let s;const i=r.wa.get(t);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ga()):s=await bg(r,t,n,!0),s}async function WA(e,t){const n=Dg(e);await bg(n,t,!0,!1)}async function bg(e,t,n,r){const s=await EA(e.localStore,ke(t)),i=s.targetId,o=n?e.sharedClientState.addLocalQueryTarget(i):"not-current";let a;return r&&(a=await QA(e,t,i,o==="current",s.resumeToken)),e.isPrimaryClient&&n&&wg(e.remoteStore,s),a}async function QA(e,t,n,r,s){e.Na=(h,f,g)=>async function(R,S,O,M){let B=S.view.Ta(O);B.Xi&&(B=await Ph(R.localStore,S.query,!1).then(({documents:gt})=>S.view.Ta(gt,B)));const W=M&&M.targetChanges.get(S.targetId),J=M&&M.targetMismatches.get(S.targetId)!=null,q=S.view.applyChanges(B,R.isPrimaryClient,W,J);return Lh(R,S.targetId,q.Va),q.snapshot}(e,h,f,g);const i=await Ph(e.localStore,t,!0),o=new qA(t,i.hs),a=o.Ta(i.documents),c=ks.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",s),l=o.applyChanges(a,e.isPrimaryClient,c);Lh(e,n,l.Va);const u=new zA(t,n,o);return e.wa.set(t,u),e.Sa.has(n)?e.Sa.get(n).push(t):e.Sa.set(n,[t]),l.snapshot}async function YA(e,t,n){const r=ot(e),s=r.wa.get(t),i=r.Sa.get(s.targetId);if(i.length>1)return r.Sa.set(s.targetId,i.filter(o=>!yo(o,t))),void r.wa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Wa(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&ml(r.remoteStore,s.targetId),Ya(r,s.targetId)}).catch(tl)):(Ya(r,s.targetId),await Wa(r.localStore,s.targetId,!0))}async function JA(e,t){const n=ot(e),r=n.wa.get(t),s=n.Sa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),ml(n.remoteStore,r.targetId))}async function Cg(e,t){const n=ot(e);try{const r=await yA(n.localStore,t);t.targetChanges.forEach((s,i)=>{const o=n.Ca.get(i);o&&(Ct(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.pa=!0:s.modifiedDocuments.size>0?Ct(o.pa):s.removedDocuments.size>0&&(Ct(o.pa),o.pa=!1))}),await Vg(n,r,t)}catch(r){await tl(r)}}function Mh(e,t,n){const r=ot(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.wa.forEach((i,o)=>{const a=o.view.G_(t);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=ot(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const f of h.Q_)f.G_(a)&&(l=!0)}),l&&wl(c)}(r.eventManager,t),s.length&&r.ya.u_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function XA(e,t,n){const r=ot(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.Ca.get(t),i=s&&s.key;if(i){let o=new Rt(j.comparator);o=o.insert(i,Gt.newNoDocument(i,G.min()));const a=st().add(i),c=new To(G.min(),new Map,new Rt(ut),o,a);await Cg(r,c),r.Da=r.Da.remove(i),r.Ca.delete(t),Tl(r)}else await Wa(r.localStore,t,!1).then(()=>Ya(r,t,n)).catch(tl)}function Ya(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Sa.get(t))e.wa.delete(r),n&&e.ya.La(r,n);e.Sa.delete(t),e.isPrimaryClient&&e.va.Vr(t).forEach(r=>{e.va.containsKey(r)||Pg(e,r)})}function Pg(e,t){e.ba.delete(t.path.canonicalString());const n=e.Da.get(t);n!==null&&(ml(e.remoteStore,n),e.Da=e.Da.remove(t),e.Ca.delete(n),Tl(e))}function Lh(e,t,n){for(const r of n)r instanceof Rg?(e.va.addReference(r.key,t),ZA(e,r)):r instanceof Sg?(V("SyncEngine","Document no longer in limbo: "+r.key),e.va.removeReference(r.key,t),e.va.containsKey(r.key)||Pg(e,r.key)):Y()}function ZA(e,t){const n=t.key,r=n.path.canonicalString();e.Da.get(n)||e.ba.has(r)||(V("SyncEngine","New document in limbo: "+n),e.ba.add(r),Tl(e))}function Tl(e){for(;e.ba.size>0&&e.Da.size<e.maxConcurrentLimboResolutions;){const t=e.ba.values().next().value;e.ba.delete(t);const n=new j(Tt.fromString(t)),r=e.xa.next();e.Ca.set(r,new HA(n)),e.Da=e.Da.insert(n,r),wg(e.remoteStore,new rn(ke(ll(n.path)),r,"TargetPurposeLimboResolution",rl._e))}}async function Vg(e,t,n){const r=ot(e),s=[],i=[],o=[];r.wa.isEmpty()||(r.wa.forEach((a,c)=>{o.push(r.Na(c,t,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=gl.Ki(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.ya.u_(s),await async function(c,l){const u=ot(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>E.forEach(l,f=>E.forEach(f.qi,g=>u.persistence.referenceDelegate.addReference(h,f.targetId,g)).next(()=>E.forEach(f.Qi,g=>u.persistence.referenceDelegate.removeReference(h,f.targetId,g)))))}catch(h){if(!Ns(h))throw h;V("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const f=h.targetId;if(!h.fromCache){const g=u.ns.get(f),w=g.snapshotVersion,R=g.withLastLimboFreeSnapshotVersion(w);u.ns=u.ns.insert(f,R)}}}(r.localStore,i))}async function tR(e,t){const n=ot(e);if(!n.currentUser.isEqual(t)){V("SyncEngine","User change. New user:",t.toKey());const r=await _g(n.localStore,t);n.currentUser=t,function(i,o){i.Ma.forEach(a=>{a.forEach(c=>{c.reject(new U(C.CANCELLED,o))})}),i.Ma.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Vg(n,r.us)}}function eR(e,t){const n=ot(e),r=n.Ca.get(t);if(r&&r.pa)return st().add(r.key);{let s=st();const i=n.Sa.get(t);if(!i)return s;for(const o of i){const a=n.wa.get(o);s=s.unionWith(a.view.Ia)}return s}}function Dg(e){const t=ot(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Cg.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=eR.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=XA.bind(null,t),t.ya.u_=UA.bind(null,t.eventManager),t.ya.La=$A.bind(null,t.eventManager),t}class Fh{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=vg(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return _A(this.persistence,new gA,t.initialUser,this.serializer)}createPersistence(t){return new fA(pl.Hr,this.serializer)}createSharedClientState(t){return new TA}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class nR{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Mh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=tR.bind(null,this.syncEngine),await kA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new LA}()}createDatastore(t){const n=vg(t.databaseInfo.databaseId),r=function(i){return new SA(i)}(t.databaseInfo);return function(i,o,a,c){return new PA(i,o,a,c)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,s,i,o,a){return new DA(r,s,i,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>Mh(this.syncEngine,n,0),function(){return Dh.D()?new Dh:new IA}())}createSyncEngine(t,n){return function(s,i,o,a,c,l,u){const h=new KA(s,i,o,a,c,l);return u&&(h.Oa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t;await async function(r){const s=ot(r);V("RemoteStore","RemoteStore shutting down."),s.v_.add(5),await Ms(s),s.M_.shutdown(),s.x_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
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
 */class rR{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.qa(this.observer.next,t)}error(t){this.observer.error?this.qa(this.observer.error,t):Le("Uncaught Error in snapshot listener:",t.toString())}Qa(){this.muted=!0}qa(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */class sR{constructor(t,n,r,s){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Kt.UNAUTHENTICATED,this.clientId=Hp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{V("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(V("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new U(C.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new hn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=Ag(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function na(e,t){e.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async s=>{r.isEqual(s)||(await _g(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function Bh(e,t){e.asyncQueue.verifyOperationInProgress();const n=await oR(e);V("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(r=>Oh(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,s)=>Oh(t.remoteStore,s)),e._onlineComponents=t}function iR(e){return e.name==="FirebaseError"?e.code===C.FAILED_PRECONDITION||e.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function oR(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){V("FirestoreClient","Using user provided OfflineComponentProvider");try{await na(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!iR(n))throw n;vr("Error using user provided cache. Falling back to memory cache: "+n),await na(e,new Fh)}}else V("FirestoreClient","Using default OfflineComponentProvider"),await na(e,new Fh);return e._offlineComponents}async function aR(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(V("FirestoreClient","Using user provided OnlineComponentProvider"),await Bh(e,e._uninitializedComponentsProvider._online)):(V("FirestoreClient","Using default OnlineComponentProvider"),await Bh(e,new nR))),e._onlineComponents}async function cR(e){const t=await aR(e),n=t.eventManager;return n.onListen=GA.bind(null,t.syncEngine),n.onUnlisten=YA.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=WA.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=JA.bind(null,t.syncEngine),n}function lR(e,t,n={}){const r=new hn;return e.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new rR({next:f=>{o.enqueueAndForget(()=>BA(i,h));const g=f.docs.has(a);!g&&f.fromCache?l.reject(new U(C.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&f.fromCache&&c&&c.source==="server"?l.reject(new U(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new jA(ll(a.path),u,{includeMetadataChanges:!0,ta:!0});return FA(i,h)}(await cR(e),e.asyncQueue,t,n,r)),r.promise}/**
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
 */function xg(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const Uh=new Map;/**
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
 */function uR(e,t,n){if(!n)throw new U(C.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function hR(e,t,n,r){if(t===!0&&r===!0)throw new U(C.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function $h(e){if(!j.isDocumentKey(e))throw new U(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function fR(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":Y()}function Ja(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new U(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=fR(e);throw new U(C.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class jh{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new U(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new U(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}hR("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=xg((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new U(C.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new U(C.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new U(C.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Il{constructor(t,n,r,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new jh({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new U(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new U(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new jh(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new LI;switch(r.type){case"firstParty":return new $I(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new U(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Uh.get(n);r&&(V("ComponentProvider","Removing Datastore"),Uh.delete(n),r.terminate())}(this),Promise.resolve()}}function dR(e,t,n,r={}){var s;const i=(e=Ja(e,Il))._getSettings(),o=`${t}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&vr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=Kt.MOCK_USER;else{a=Gv(r.mockUserToken,(s=e._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new U(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Kt(l)}e._authCredentials=new FI(new zp(a,c))}}/**
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
 */class Al{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Al(this.firestore,t,this._query)}}class ze{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ts(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ze(this.firestore,t,this._key)}}class Ts extends Al{constructor(t,n,r){super(t,n,ll(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ze(this.firestore,null,new j(t))}withConverter(t){return new Ts(this.firestore,t,this._path)}}function pR(e,t,...n){if(e=Ic(e),arguments.length===1&&(t=Hp.newId()),uR("doc","path",t),e instanceof Il){const r=Tt.fromString(t,...n);return $h(r),new ze(e,null,new j(r))}{if(!(e instanceof ze||e instanceof Ts))throw new U(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Tt.fromString(t,...n));return $h(r),new ze(e.firestore,e instanceof Ts?e.converter:null,new j(r))}}/**
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
 */class gR{constructor(){this.nu=Promise.resolve(),this.ru=[],this.iu=!1,this.su=[],this.ou=null,this._u=!1,this.au=!1,this.uu=[],this.jo=new Eg(this,"async_queue_retry"),this.cu=()=>{const n=ea();n&&V("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const t=ea();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.cu)}get isShuttingDown(){return this.iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.lu(),this.hu(t)}enterRestrictedMode(t){if(!this.iu){this.iu=!0,this.au=t||!1;const n=ea();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.cu)}}enqueue(t){if(this.lu(),this.iu)return new Promise(()=>{});const n=new hn;return this.hu(()=>this.iu&&this.au?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.ru.push(t),this.Pu()))}async Pu(){if(this.ru.length!==0){try{await this.ru[0](),this.ru.shift(),this.jo.reset()}catch(t){if(!Ns(t))throw t;V("AsyncQueue","Operation failed with retryable error: "+t)}this.ru.length>0&&this.jo.qo(()=>this.Pu())}}hu(t){const n=this.nu.then(()=>(this._u=!0,t().catch(r=>{this.ou=r,this._u=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Le("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this._u=!1,r))));return this.nu=n,n}enqueueAfterDelay(t,n,r){this.lu(),this.uu.indexOf(t)>-1&&(n=0);const s=El.createAndSchedule(this,t,n,r,i=>this.Iu(i));return this.su.push(s),s}lu(){this.ou&&Y()}verifyOperationInProgress(){}async Tu(){let t;do t=this.nu,await t;while(t!==this.nu)}Eu(t){for(const n of this.su)if(n.timerId===t)return!0;return!1}du(t){return this.Tu().then(()=>{this.su.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.su)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Tu()})}Au(t){this.uu.push(t)}Iu(t){const n=this.su.indexOf(t);this.su.splice(n,1)}}class Og extends Il{constructor(t,n,r,s){super(t,n,r,s),this.type="firestore",this._queue=function(){return new gR}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ng(this),this._firestoreClient.terminate()}}function mR(e,t){const n=typeof e=="object"?e:md(),r=typeof e=="string"?e:t||"(default)",s=Rs(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Hv("firestore");i&&dR(s,...i)}return s}function _R(e){return e._firestoreClient||Ng(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Ng(e){var t,n,r;const s=e._freezeSettings(),i=function(a,c,l,u){return new e0(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,xg(u.experimentalLongPollingOptions),u.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,s);e._firestoreClient=new sR(e._authCredentials,e._appCheckCredentials,e._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class Di{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Di(Jt.fromBase64String(t))}catch(n){throw new U(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Di(Jt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class kg{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new U(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new te(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class yR{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new U(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new U(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return ut(this._lat,t._lat)||ut(this._long,t._long)}}const vR=new RegExp("[~\\*/\\[\\]]");function ER(e,t,n){if(t.search(vR)>=0)throw qh(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new kg(...t.split("."))._internalPath}catch{throw qh(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function qh(e,t,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new U(C.INVALID_ARGUMENT,a+e+c)}/**
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
 */class Mg{constructor(t,n,r,s,i){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ze(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new wR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Lg("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class wR extends Mg{data(){return super.data()}}function Lg(e,t){return typeof t=="string"?ER(e,t):t instanceof kg?t._internalPath:t._delegate._internalPath}class TR{convertValue(t,n="none"){switch(zn(t)){case 0:return null;case 1:return t.booleanValue;case 2:return bt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(qn(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw Y()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return mo(t,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(t){return new yR(bt(t.latitude),bt(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=il(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(vs(t));default:return null}}convertTimestamp(t){const n=gn(t);return new oe(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=Tt.fromString(t);Ct(mg(r));const s=new Es(r.get(1),r.get(3)),i=new j(r.popFirst(5));return s.isEqual(n)||Le(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */class IR{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Fg extends Mg{constructor(t,n,r,s,i,o){super(t,n,r,s,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new AR(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(Lg("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class AR extends Fg{data(t={}){return super.data(t)}}/**
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
 */function RR(e){e=Ja(e,ze);const t=Ja(e.firestore,Og);return lR(_R(t),e._key).then(n=>bR(t,e,n))}class SR extends TR{constructor(t){super(),this.firestore=t}convertBytes(t){return new Di(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new ze(this.firestore,null,n)}}function bR(e,t,n){const r=n.docs.get(t._key),s=new SR(e);return new Fg(e,s,t._key,r,new IR(n.hasPendingWrites,n.fromCache),t.converter)}(function(t,n=!0){(function(s){Pr=s})(tw),dn(new He("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Og(new BI(r.getProvider("auth-internal")),new qI(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new U(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Es(l.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Ne(ch,"4.5.0",t),Ne(ch,"4.5.0","esm2017")})();const CR={apiKey:"AIzaSyAZnAECbdwXY6SOvDa5kyM-AE-8X3EYPpI",authDomain:"elecoxy-com.firebaseapp.com",projectId:"elecoxy-com",storageBucket:"elecoxy-com.appspot.com",messagingSenderId:"926870137110",appId:"1:926870137110:web:04d9d9d386600606c24837",measurementId:"G-B73FH0QJ3L"},Bg=gd(CR);bT(Bg);const PR=mR(Bg),Rl=Ty("config",{persist:!0,state:()=>({tag:"home",isExpended:!1,azureSpeech:"",modelUrl:"ai-poets-dalle3.openai.azure.com",modelVersion:"gpt-35-turbo",apiVersion:"2024-02-15-preview"}),getters:{gptURL:e=>"https://ai.yizheyun.cn?model_url="+e.modelUrl+"&model_name="+e.modelVersion+"&api_version="+e.apiVersion,languageVersion:()=>({grammar:"2.2.0",translate:"1.7.0",c2m:"1.4.0"}),db:()=>PR},actions:{async setGptKey(e=!1){if(this.elecoxyKey!==""||e)try{const t=pR(this.db,"basic",this.elecoxyKey),n=await RR(t);n.exists()?this.azureSpeech=n.data().azureSpeech:this.azureSpeech=""}catch{this.azureSpeech=""}}}}),VR=[{path:"/",name:"home",component:()=>In(()=>import("./HomeView-DRaDtUVH.js"),__vite__mapDeps([0,1]))},{path:"/publications",name:"publications",component:()=>In(()=>import("./PublicationsView-D6woDd0e.js"),__vite__mapDeps([2,3]))},{path:"/projects",children:[{path:"",name:"projects",component:()=>In(()=>import("./ProjectsView-CuRnVJFp.js"),__vite__mapDeps([4,5]))},{path:"tarot",name:"projects-tarot",component:()=>In(()=>import("./TarotView-DMuVc6sD.js"),__vite__mapDeps([6,7,8]))}]},{path:"/chat",name:"chat",component:()=>In(()=>import("./ChatView-BhXUOmSM.js"),__vite__mapDeps([9,7,10]))},{path:"/language",name:"language",component:()=>In(()=>import("./LanguageView-Cy4aLsOq.js"),__vite__mapDeps([11,7,12]))},{path:"/privacy-policy",name:"privacy-policy",component:()=>In(()=>import("./PrivacyPolicyView-TSg7qNs8.js"),__vite__mapDeps([]))}],Ug=Nv({history:lv(),scrollBehavior(e,t,n){return n||{top:0}},routes:VR});Ug.beforeEach(async(e,t)=>{const n=Rl();n.isExpended=!1});function DR(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var $g={exports:{}};(function(e,t){(function(){var n={expires:"1d",path:"; path=/",domain:"",secure:"",sameSite:"; SameSite=Lax"},r={install:function(s,i){i&&this.config(i.expires,i.path,i.domain,i.secure,i.sameSite),s.prototype&&(s.prototype.$cookies=this),s.config&&s.config.globalProperties&&(s.config.globalProperties.$cookies=this,s.provide("$cookies",this)),s.$cookies=this},config:function(s,i,o,a,c){n.expires=s||"1d",n.path=i?"; path="+i:"; path=/",n.domain=o?"; domain="+o:"",n.secure=a?"; Secure":"",n.sameSite=c?"; SameSite="+c:"; SameSite=Lax"},get:function(s){var i=decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(s).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null;if(i&&(i.substring(0,1)==="{"&&i.substring(i.length-1,i.length)==="}"||i.substring(0,1)==="["&&i.substring(i.length-1,i.length)==="]"))try{i=JSON.parse(i)}catch{return i}return i},set:function(s,i,o,a,c,l,u){if(s){if(/^(?:expires|max\-age|path|domain|secure|SameSite)$/i.test(s))throw new Error('Cookie name illegality. Cannot be set to ["expires","max-age","path","domain","secure","SameSite"]	 current key name: '+s)}else throw new Error("Cookie name is not found in the first argument.");i&&typeof i=="object"&&(i=JSON.stringify(i));var h="";if(o=o??n.expires,o&&o!=0)switch(o.constructor){case Number:o===1/0||o===-1?h="; expires=Fri, 31 Dec 9999 23:59:59 GMT":h="; max-age="+o;break;case String:if(/^(?:\d+(y|m|d|h|min|s))$/i.test(o)){var f=o.replace(/^(\d+)(?:y|m|d|h|min|s)$/i,"$1");switch(o.replace(/^(?:\d+)(y|m|d|h|min|s)$/i,"$1").toLowerCase()){case"m":h="; max-age="+ +f*2592e3;break;case"d":h="; max-age="+ +f*86400;break;case"h":h="; max-age="+ +f*3600;break;case"min":h="; max-age="+ +f*60;break;case"s":h="; max-age="+f;break;case"y":h="; max-age="+ +f*31104e3;break}}else h="; expires="+o;break;case Date:h="; expires="+o.toUTCString();break}return document.cookie=encodeURIComponent(s)+"="+encodeURIComponent(i)+h+(c?"; domain="+c:n.domain)+(a?"; path="+a:n.path)+(l==null?n.secure:l?"; Secure":"")+(u==null?n.sameSite:u?"; SameSite="+u:""),this},remove:function(s,i,o){return!s||!this.isKey(s)?!1:(document.cookie=encodeURIComponent(s)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(o?"; domain="+o:n.domain)+(i?"; path="+i:n.path)+"; SameSite=Lax",!0)},isKey:function(s){return new RegExp("(?:^|;\\s*)"+encodeURIComponent(s).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(document.cookie)},keys:function(){if(!document.cookie)return[];for(var s=document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/),i=0;i<s.length;i++)s[i]=decodeURIComponent(s[i]);return s}};e.exports=r,typeof window<"u"&&(window.$cookies=r)})()})($g);var xR=$g.exports;const OR=DR(xR),Ao=e=>(km("data-v-d175ab54"),e=e(),Mm(),e),NR={class:"navigationBar"},kR={class:"container"},MR={class:"navbar",role:"navigation","aria-label":"main navigation"},LR={class:"navbar-brand"},FR=Ao(()=>Vt("a",{class:"navbar-item",href:"#"},[Vt("h1",{class:"title is-4"},"Yizhe ZHANG")],-1)),BR=Ao(()=>Vt("span",{"aria-hidden":"true"},null,-1)),UR=Ao(()=>Vt("span",{"aria-hidden":"true"},null,-1)),$R=Ao(()=>Vt("span",{"aria-hidden":"true"},null,-1)),jR=[BR,UR,$R],qR={class:"navbar-start"},zR={__name:"NavigationBar",setup(e){const t=Rl(),n=Zt(()=>t.tag),r=Zt(()=>t.isExpended);return(s,i)=>{const o=ni("router-link");return qi(),_c("div",NR,[Vt("div",kR,[Vt("nav",MR,[Vt("div",LR,[FR,Vt("a",{role:"button",class:Re(["navbar-burger",r.value?"is-active":""]),"aria-label":"menu","aria-expanded":"false",onClick:i[0]||(i[0]=a=>an(t).isExpended=!an(t).isExpended)},jR,2)]),Vt("div",{class:Re(["navbar-menu",r.value?"is-active":""])},[Vt("div",qR,[At(o,{to:"/",class:Re(["navbar-item",n.value==="home"?"is-active":""])},{default:Zn(()=>[Sn(" Home ")]),_:1},8,["class"]),At(o,{to:"/publications",class:Re(["navbar-item",n.value==="publications"?"is-active":""])},{default:Zn(()=>[Sn(" Publications ")]),_:1},8,["class"]),At(o,{to:"/projects",class:Re(["navbar-item",n.value==="projects"?"is-active":""])},{default:Zn(()=>[Sn(" Projects ")]),_:1},8,["class"]),At(o,{to:"/language",class:Re(["navbar-item",n.value==="language"?"is-active":""])},{default:Zn(()=>[Sn(" Language ")]),_:1},8,["class"]),At(o,{to:"/chat",class:Re(["navbar-item",n.value==="chat"?"is-active":""])},{default:Zn(()=>[Sn(" Chat ")]),_:1},8,["class"])])],2)])])])}}},HR=Kf(zR,[["__scopeId","data-v-d175ab54"]]),KR={key:0,class:"footer py-6"},GR=Vt("div",{class:"content has-text-centered"},[Vt("p",null,[Vt("strong",null,"Elecoxy.com"),Sn(" Developed by "),Vt("a",{href:"https://elecoxy.com"},"YIZHE ZHANG")]),Vt("p",null,[Vt("a",{href:"/#/privacy-policy"},"Privacy Policy")])],-1),WR=[GR],QR={__name:"FooterView",setup(e){const t=Rl(),n=Zt(()=>t.tag!=="chat");return(r,s)=>n.value?(qi(),_c("footer",KR,WR)):b_("",!0)}},Fs=ly(py),jg=my();jg.use(Py);Fs.use(jg);Fs.use(Ug);Fs.use(OR,{expires:"30d"});Fs.component("NavigationBar",HR).component("FooterView",QR);Fs.mount("#app");export{Se as F,Kf as _,qi as a,Vt as b,_c as c,Ty as d,an as e,Sn as f,A_ as g,JR as h,Mm as i,Zt as j,fc as k,uc as l,nc as m,Re as n,Ym as o,km as p,b_ as q,ZR as r,zr as s,YR as t,Rl as u,tS as v,XR as w,Is as x};
