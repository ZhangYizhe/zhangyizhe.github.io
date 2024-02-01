(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function rc(e,t){const n=new Set(e.split(","));return t?r=>n.has(r.toLowerCase()):r=>n.has(r)}const mt={},ar=[],me=()=>{},Yg=()=>!1,xi=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),sc=e=>e.startsWith("onUpdate:"),jt=Object.assign,ic=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Jg=Object.prototype.hasOwnProperty,nt=(e,t)=>Jg.call(e,t),z=Array.isArray,cr=e=>Oi(e)==="[object Map]",Yh=e=>Oi(e)==="[object Set]",Q=e=>typeof e=="function",Pt=e=>typeof e=="string",Rr=e=>typeof e=="symbol",wt=e=>e!==null&&typeof e=="object",Jh=e=>(wt(e)||Q(e))&&Q(e.then)&&Q(e.catch),Xh=Object.prototype.toString,Oi=e=>Xh.call(e),Xg=e=>Oi(e).slice(8,-1),Zh=e=>Oi(e)==="[object Object]",oc=e=>Pt(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Zs=rc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ni=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Zg=/-(\w)/g,Me=Ni(e=>e.replace(Zg,(t,n)=>n?n.toUpperCase():"")),tm=/\B([A-Z])/g,Sr=Ni(e=>e.replace(tm,"-$1").toLowerCase()),ki=Ni(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ro=Ni(e=>e?`on${ki(e)}`:""),dn=(e,t)=>!Object.is(e,t),ti=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ci=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},oa=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Nl;const tf=()=>Nl||(Nl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ac(e){if(z(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=Pt(r)?sm(r):ac(r);if(s)for(const i in s)t[i]=s[i]}return t}else if(Pt(e)||wt(e))return e}const em=/;(?![^(]*\))/g,nm=/:([^]+)/,rm=/\/\*[^]*?\*\//g;function sm(e){const t={};return e.replace(rm,"").split(em).forEach(n=>{if(n){const r=n.split(nm);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Re(e){let t="";if(Pt(e))t=e;else if(z(e))for(let n=0;n<e.length;n++){const r=Re(e[n]);r&&(t+=r+" ")}else if(wt(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const im="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",om=rc(im);function ef(e){return!!e||e===""}const dS=e=>Pt(e)?e:e==null?"":z(e)||wt(e)&&(e.toString===Xh||!Q(e.toString))?JSON.stringify(e,nf,2):String(e),nf=(e,t)=>t&&t.__v_isRef?nf(e,t.value):cr(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],i)=>(n[So(r,i)+" =>"]=s,n),{})}:Yh(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>So(n))}:Rr(t)?So(t):wt(t)&&!z(t)&&!Zh(t)?String(t):t,So=(e,t="")=>{var n;return Rr(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ue;class rf{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ue,!t&&ue&&(this.index=(ue.scopes||(ue.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=ue;try{return ue=this,t()}finally{ue=n}}}on(){ue=this}off(){ue=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function sf(e){return new rf(e)}function am(e,t=ue){t&&t.active&&t.effects.push(e)}function of(){return ue}function cm(e){ue&&ue.cleanups.push(e)}let kn;class cc{constructor(t,n,r,s){this.fn=t,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=2,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,am(this,s)}get dirty(){if(this._dirtyLevel===1){Kn();for(let t=0;t<this._depsLength;t++){const n=this.deps[t];if(n.computed&&(lm(n.computed),this._dirtyLevel>=2))break}this._dirtyLevel<2&&(this._dirtyLevel=0),Gn()}return this._dirtyLevel>=2}set dirty(t){this._dirtyLevel=t?2:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=sn,n=kn;try{return sn=!0,kn=this,this._runnings++,kl(this),this.fn()}finally{Ml(this),this._runnings--,kn=n,sn=t}}stop(){var t;this.active&&(kl(this),Ml(this),(t=this.onStop)==null||t.call(this),this.active=!1)}}function lm(e){return e.value}function kl(e){e._trackId++,e._depsLength=0}function Ml(e){if(e.deps&&e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)af(e.deps[t],e);e.deps.length=e._depsLength}}function af(e,t){const n=e.get(t);n!==void 0&&t._trackId!==n&&(e.delete(t),e.size===0&&e.cleanup())}let sn=!0,aa=0;const cf=[];function Kn(){cf.push(sn),sn=!1}function Gn(){const e=cf.pop();sn=e===void 0?!0:e}function lc(){aa++}function uc(){for(aa--;!aa&&ca.length;)ca.shift()()}function lf(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const r=e.deps[e._depsLength];r!==t?(r&&af(r,e),e.deps[e._depsLength++]=t):e._depsLength++}}const ca=[];function uf(e,t,n){lc();for(const r of e.keys())if(r._dirtyLevel<t&&e.get(r)===r._trackId){const s=r._dirtyLevel;r._dirtyLevel=t,s===0&&(r._shouldSchedule=!0,r.trigger())}hf(e),uc()}function hf(e){for(const t of e.keys())t.scheduler&&t._shouldSchedule&&(!t._runnings||t.allowRecurse)&&e.get(t)===t._trackId&&(t._shouldSchedule=!1,ca.push(t.scheduler))}const ff=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},li=new WeakMap,Mn=Symbol(""),la=Symbol("");function ae(e,t,n){if(sn&&kn){let r=li.get(e);r||li.set(e,r=new Map);let s=r.get(n);s||r.set(n,s=ff(()=>r.delete(n))),lf(kn,s)}}function qe(e,t,n,r,s,i){const o=li.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&z(e)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||!Rr(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),t){case"add":z(e)?oc(n)&&a.push(o.get("length")):(a.push(o.get(Mn)),cr(e)&&a.push(o.get(la)));break;case"delete":z(e)||(a.push(o.get(Mn)),cr(e)&&a.push(o.get(la)));break;case"set":cr(e)&&a.push(o.get(Mn));break}lc();for(const c of a)c&&uf(c,2);uc()}function um(e,t){var n;return(n=li.get(e))==null?void 0:n.get(t)}const hm=rc("__proto__,__v_isRef,__isVue"),df=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Rr)),Ll=fm();function fm(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=it(this);for(let i=0,o=this.length;i<o;i++)ae(r,"get",i+"");const s=r[t](...n);return s===-1||s===!1?r[t](...n.map(it)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Kn(),lc();const r=it(this)[t].apply(this,n);return uc(),Gn(),r}}),e}function dm(e){const t=it(this);return ae(t,"has",e),t.hasOwnProperty(e)}class pf{constructor(t=!1,n=!1){this._isReadonly=t,this._shallow=n}get(t,n,r){const s=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Sm:yf:i?_f:mf).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=z(t);if(!s){if(o&&nt(Ll,n))return Reflect.get(Ll,n,r);if(n==="hasOwnProperty")return dm}const a=Reflect.get(t,n,r);return(Rr(n)?df.has(n):hm(n))||(s||ae(t,"get",n),i)?a:xt(a)?o&&oc(n)?a:a.value:wt(a)?s?Ef(a):Ts(a):a}}class gf extends pf{constructor(t=!1){super(!1,t)}set(t,n,r,s){let i=t[n];if(!this._shallow){const c=pr(i);if(!ui(r)&&!pr(r)&&(i=it(i),r=it(r)),!z(t)&&xt(i)&&!xt(r))return c?!1:(i.value=r,!0)}const o=z(t)&&oc(n)?Number(n)<t.length:nt(t,n),a=Reflect.set(t,n,r,s);return t===it(s)&&(o?dn(r,i)&&qe(t,"set",n,r):qe(t,"add",n,r)),a}deleteProperty(t,n){const r=nt(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&qe(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!Rr(n)||!df.has(n))&&ae(t,"has",n),r}ownKeys(t){return ae(t,"iterate",z(t)?"length":Mn),Reflect.ownKeys(t)}}class pm extends pf{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const gm=new gf,mm=new pm,_m=new gf(!0),hc=e=>e,Mi=e=>Reflect.getPrototypeOf(e);function $s(e,t,n=!1,r=!1){e=e.__v_raw;const s=it(e),i=it(t);n||(dn(t,i)&&ae(s,"get",t),ae(s,"get",i));const{has:o}=Mi(s),a=r?hc:n?pc:ns;if(o.call(s,t))return a(e.get(t));if(o.call(s,i))return a(e.get(i));e!==s&&e.get(t)}function Bs(e,t=!1){const n=this.__v_raw,r=it(n),s=it(e);return t||(dn(e,s)&&ae(r,"has",e),ae(r,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function Us(e,t=!1){return e=e.__v_raw,!t&&ae(it(e),"iterate",Mn),Reflect.get(e,"size",e)}function Fl(e){e=it(e);const t=it(this);return Mi(t).has.call(t,e)||(t.add(e),qe(t,"add",e,e)),this}function $l(e,t){t=it(t);const n=it(this),{has:r,get:s}=Mi(n);let i=r.call(n,e);i||(e=it(e),i=r.call(n,e));const o=s.call(n,e);return n.set(e,t),i?dn(t,o)&&qe(n,"set",e,t):qe(n,"add",e,t),this}function Bl(e){const t=it(this),{has:n,get:r}=Mi(t);let s=n.call(t,e);s||(e=it(e),s=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return s&&qe(t,"delete",e,void 0),i}function Ul(){const e=it(this),t=e.size!==0,n=e.clear();return t&&qe(e,"clear",void 0,void 0),n}function js(e,t){return function(r,s){const i=this,o=i.__v_raw,a=it(o),c=t?hc:e?pc:ns;return!e&&ae(a,"iterate",Mn),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function qs(e,t,n){return function(...r){const s=this.__v_raw,i=it(s),o=cr(i),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,l=s[e](...r),u=n?hc:t?pc:ns;return!t&&ae(i,"iterate",c?la:Mn),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Qe(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function ym(){const e={get(i){return $s(this,i)},get size(){return Us(this)},has:Bs,add:Fl,set:$l,delete:Bl,clear:Ul,forEach:js(!1,!1)},t={get(i){return $s(this,i,!1,!0)},get size(){return Us(this)},has:Bs,add:Fl,set:$l,delete:Bl,clear:Ul,forEach:js(!1,!0)},n={get(i){return $s(this,i,!0)},get size(){return Us(this,!0)},has(i){return Bs.call(this,i,!0)},add:Qe("add"),set:Qe("set"),delete:Qe("delete"),clear:Qe("clear"),forEach:js(!0,!1)},r={get(i){return $s(this,i,!0,!0)},get size(){return Us(this,!0)},has(i){return Bs.call(this,i,!0)},add:Qe("add"),set:Qe("set"),delete:Qe("delete"),clear:Qe("clear"),forEach:js(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=qs(i,!1,!1),n[i]=qs(i,!0,!1),t[i]=qs(i,!1,!0),r[i]=qs(i,!0,!0)}),[e,n,t,r]}const[vm,Em,wm,Tm]=ym();function fc(e,t){const n=t?e?Tm:wm:e?Em:vm;return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(nt(n,s)&&s in r?n:r,s,i)}const Im={get:fc(!1,!1)},Am={get:fc(!1,!0)},Rm={get:fc(!0,!1)},mf=new WeakMap,_f=new WeakMap,yf=new WeakMap,Sm=new WeakMap;function bm(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Cm(e){return e.__v_skip||!Object.isExtensible(e)?0:bm(Xg(e))}function Ts(e){return pr(e)?e:dc(e,!1,gm,Im,mf)}function vf(e){return dc(e,!1,_m,Am,_f)}function Ef(e){return dc(e,!0,mm,Rm,yf)}function dc(e,t,n,r,s){if(!wt(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const o=Cm(e);if(o===0)return e;const a=new Proxy(e,o===2?r:n);return s.set(e,a),a}function on(e){return pr(e)?on(e.__v_raw):!!(e&&e.__v_isReactive)}function pr(e){return!!(e&&e.__v_isReadonly)}function ui(e){return!!(e&&e.__v_isShallow)}function wf(e){return on(e)||pr(e)}function it(e){const t=e&&e.__v_raw;return t?it(t):e}function Li(e){return ci(e,"__v_skip",!0),e}const ns=e=>wt(e)?Ts(e):e,pc=e=>wt(e)?Ef(e):e;class Tf{constructor(t,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new cc(()=>t(this._value),()=>ei(this,1),()=>this.dep&&hf(this.dep)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const t=it(this);return(!t._cacheable||t.effect.dirty)&&dn(t._value,t._value=t.effect.run())&&ei(t,2),If(t),t.effect._dirtyLevel>=1&&ei(t,1),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function Pm(e,t,n=!1){let r,s;const i=Q(e);return i?(r=e,s=me):(r=e.get,s=e.set),new Tf(r,s,i||!s,n)}function If(e){sn&&kn&&(e=it(e),lf(kn,e.dep||(e.dep=ff(()=>e.dep=void 0,e instanceof Tf?e:void 0))))}function ei(e,t=2,n){e=it(e);const r=e.dep;r&&uf(r,t)}function xt(e){return!!(e&&e.__v_isRef===!0)}function gc(e){return Af(e,!1)}function Dm(e){return Af(e,!0)}function Af(e,t){return xt(e)?e:new Vm(e,t)}class Vm{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:it(t),this._value=n?t:ns(t)}get value(){return If(this),this._value}set value(t){const n=this.__v_isShallow||ui(t)||pr(t);t=n?t:it(t),dn(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:ns(t),ei(this,2))}}function an(e){return xt(e)?e.value:e}const xm={get:(e,t,n)=>an(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return xt(s)&&!xt(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function Rf(e){return on(e)?e:new Proxy(e,xm)}function Om(e){const t=z(e)?new Array(e.length):{};for(const n in e)t[n]=km(e,n);return t}class Nm{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return um(it(this._object),this._key)}}function km(e,t,n){const r=e[t];return xt(r)?r:new Nm(e,t,n)}/**
* @vue/runtime-core v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function cn(e,t,n,r){let s;try{s=r?e(...r):e()}catch(i){Fi(i,t,n)}return s}function ve(e,t,n,r){if(Q(e)){const i=cn(e,t,n,r);return i&&Jh(i)&&i.catch(o=>{Fi(o,t,n)}),i}const s=[];for(let i=0;i<e.length;i++)s.push(ve(e[i],t,n,r));return s}function Fi(e,t,n,r=!0){const s=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](e,o,a)===!1)return}i=i.parent}const c=t.appContext.config.errorHandler;if(c){cn(c,null,10,[e,o,a]);return}}Mm(e,n,s,r)}function Mm(e,t,n,r=!0){console.error(e)}let rs=!1,ua=!1;const Wt=[];let Ce=0;const lr=[];let Xe=null,Sn=0;const Sf=Promise.resolve();let mc=null;function _c(e){const t=mc||Sf;return e?t.then(this?e.bind(this):e):t}function Lm(e){let t=Ce+1,n=Wt.length;for(;t<n;){const r=t+n>>>1,s=Wt[r],i=ss(s);i<e||i===e&&s.pre?t=r+1:n=r}return t}function yc(e){(!Wt.length||!Wt.includes(e,rs&&e.allowRecurse?Ce+1:Ce))&&(e.id==null?Wt.push(e):Wt.splice(Lm(e.id),0,e),bf())}function bf(){!rs&&!ua&&(ua=!0,mc=Sf.then(Pf))}function Fm(e){const t=Wt.indexOf(e);t>Ce&&Wt.splice(t,1)}function $m(e){z(e)?lr.push(...e):(!Xe||!Xe.includes(e,e.allowRecurse?Sn+1:Sn))&&lr.push(e),bf()}function jl(e,t,n=rs?Ce+1:0){for(;n<Wt.length;n++){const r=Wt[n];if(r&&r.pre){if(e&&r.id!==e.uid)continue;Wt.splice(n,1),n--,r()}}}function Cf(e){if(lr.length){const t=[...new Set(lr)].sort((n,r)=>ss(n)-ss(r));if(lr.length=0,Xe){Xe.push(...t);return}for(Xe=t,Sn=0;Sn<Xe.length;Sn++)Xe[Sn]();Xe=null,Sn=0}}const ss=e=>e.id==null?1/0:e.id,Bm=(e,t)=>{const n=ss(e)-ss(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Pf(e){ua=!1,rs=!0,Wt.sort(Bm);try{for(Ce=0;Ce<Wt.length;Ce++){const t=Wt[Ce];t&&t.active!==!1&&cn(t,null,14)}}finally{Ce=0,Wt.length=0,Cf(),rs=!1,mc=null,(Wt.length||lr.length)&&Pf()}}function Um(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||mt;let s=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||mt;d&&(s=n.map(g=>Pt(g)?g.trim():g)),h&&(s=n.map(oa))}let a,c=r[a=Ro(t)]||r[a=Ro(Me(t))];!c&&i&&(c=r[a=Ro(Sr(t))]),c&&ve(c,e,6,s);const l=r[a+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,ve(l,e,6,s)}}function Df(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let o={},a=!1;if(!Q(e)){const c=l=>{const u=Df(l,t,!0);u&&(a=!0,jt(o,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!a?(wt(e)&&r.set(e,null),null):(z(i)?i.forEach(c=>o[c]=null):jt(o,i),wt(e)&&r.set(e,o),o)}function $i(e,t){return!e||!xi(t)?!1:(t=t.slice(2).replace(/Once$/,""),nt(e,t[0].toLowerCase()+t.slice(1))||nt(e,Sr(t))||nt(e,t))}let ee=null,Bi=null;function hi(e){const t=ee;return ee=e,Bi=e&&e.type.__scopeId||null,t}function jm(e){Bi=e}function qm(){Bi=null}function tr(e,t=ee,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&Zl(-1);const i=hi(t);let o;try{o=e(...s)}finally{hi(i),r._d&&Zl(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function bo(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:g,ctx:T,inheritAttrs:S}=e;let I,O;const L=hi(e);try{if(n.shapeFlag&4){const W=s||r,J=W;I=be(u.call(J,W,h,i,g,d,T)),O=c}else{const W=t;I=be(W.length>1?W(i,{attrs:c,slots:a,emit:l}):W(i,null)),O=t.props?c:zm(c)}}catch(W){Hr.length=0,Fi(W,e,1),I=At($n)}let $=I;if(O&&S!==!1){const W=Object.keys(O),{shapeFlag:J}=$;W.length&&J&7&&(o&&W.some(sc)&&(O=Hm(O,o)),$=gr($,O))}return n.dirs&&($=gr($),$.dirs=$.dirs?$.dirs.concat(n.dirs):n.dirs),n.transition&&($.transition=n.transition),I=$,hi(L),I}const zm=e=>{let t;for(const n in e)(n==="class"||n==="style"||xi(n))&&((t||(t={}))[n]=e[n]);return t},Hm=(e,t)=>{const n={};for(const r in e)(!sc(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Km(e,t,n){const{props:r,children:s,component:i}=e,{props:o,children:a,patchFlag:c}=t,l=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?ql(r,o,l):!!o;if(c&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!$i(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?ql(r,o,l):!0:!!o;return!1}function ql(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!$i(n,i))return!0}return!1}function Gm({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const vc="components";function ni(e,t){return xf(vc,e,!0,t)||e}const Vf=Symbol.for("v-ndc");function pS(e){return Pt(e)?xf(vc,e,!1)||e:e||Vf}function xf(e,t,n=!0,r=!1){const s=ee||$t;if(s){const i=s.type;if(e===vc){const a=q_(i,!1);if(a&&(a===t||a===Me(t)||a===ki(Me(t))))return i}const o=zl(s[e]||i[e],t)||zl(s.appContext[e],t);return!o&&r?i:o}}function zl(e,t){return e&&(e[t]||e[Me(t)]||e[ki(Me(t))])}const Wm=e=>e.__isSuspense;function Qm(e,t){t&&t.pendingBranch?z(e)?t.effects.push(...e):t.effects.push(e):$m(e)}const Ym=Symbol.for("v-scx"),Jm=()=>Oe(Ym),zs={};function qr(e,t,n){return Of(e,t,n)}function Of(e,t,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:a}=mt){if(t&&i){const q=t;t=(...gt)=>{q(...gt),J()}}const c=$t,l=q=>r===!0?q:Pn(q,r===!1?1:void 0);let u,h=!1,d=!1;if(xt(e)?(u=()=>e.value,h=ui(e)):on(e)?(u=()=>l(e),h=!0):z(e)?(d=!0,h=e.some(q=>on(q)||ui(q)),u=()=>e.map(q=>{if(xt(q))return q.value;if(on(q))return l(q);if(Q(q))return cn(q,c,2)})):Q(e)?t?u=()=>cn(e,c,2):u=()=>(g&&g(),ve(e,c,3,[T])):u=me,t&&r){const q=u;u=()=>Pn(q())}let g,T=q=>{g=$.onStop=()=>{cn(q,c,4),g=$.onStop=void 0}},S;if(Hi)if(T=me,t?n&&ve(t,c,3,[u(),d?[]:void 0,T]):u(),s==="sync"){const q=Jm();S=q.__watcherHandles||(q.__watcherHandles=[])}else return me;let I=d?new Array(e.length).fill(zs):zs;const O=()=>{if(!(!$.active||!$.dirty))if(t){const q=$.run();(r||h||(d?q.some((gt,X)=>dn(gt,I[X])):dn(q,I)))&&(g&&g(),ve(t,c,3,[q,I===zs?void 0:d&&I[0]===zs?[]:I,T]),I=q)}else $.run()};O.allowRecurse=!!t;let L;s==="sync"?L=O:s==="post"?L=()=>se(O,c&&c.suspense):(O.pre=!0,c&&(O.id=c.uid),L=()=>yc(O));const $=new cc(u,me,L),W=of(),J=()=>{$.stop(),W&&ic(W.effects,$)};return t?n?O():I=$.run():s==="post"?se($.run.bind($),c&&c.suspense):$.run(),S&&S.push(J),J}function Xm(e,t,n){const r=this.proxy,s=Pt(e)?e.includes(".")?Nf(r,e):()=>r[e]:e.bind(r,r);let i;Q(t)?i=t:(i=t.handler,n=t);const o=Is(this),a=Of(s,i.bind(r),n);return o(),a}function Nf(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Pn(e,t,n=0,r){if(!wt(e)||e.__v_skip)return e;if(t&&t>0){if(n>=t)return e;n++}if(r=r||new Set,r.has(e))return e;if(r.add(e),xt(e))Pn(e.value,t,n,r);else if(z(e))for(let s=0;s<e.length;s++)Pn(e[s],t,n,r);else if(Yh(e)||cr(e))e.forEach(s=>{Pn(s,t,n,r)});else if(Zh(e))for(const s in e)Pn(e[s],t,n,r);return e}function gS(e,t){if(ee===null)return e;const n=Ki(ee)||ee.proxy,r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[i,o,a,c=mt]=t[s];i&&(Q(i)&&(i={mounted:i,updated:i}),i.deep&&Pn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return e}function Tn(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Kn(),ve(c,n,8,[e.el,a,e,t]),Gn())}}/*! #__NO_SIDE_EFFECTS__ */function kf(e,t){return Q(e)?jt({name:e.name},t,{setup:e}):e}const ri=e=>!!e.type.__asyncLoader,Mf=e=>e.type.__isKeepAlive;function Zm(e,t){Lf(e,"a",t)}function t_(e,t){Lf(e,"da",t)}function Lf(e,t,n=$t){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(Ui(t,r,n),n){let s=n.parent;for(;s&&s.parent;)Mf(s.parent.vnode)&&e_(r,t,n,s),s=s.parent}}function e_(e,t,n,r){const s=Ui(t,e,r,!0);Ff(()=>{ic(r[t],s)},n)}function Ui(e,t,n=$t,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Kn();const a=Is(n),c=ve(t,n,e,o);return a(),Gn(),c});return r?s.unshift(i):s.push(i),i}}const Ge=e=>(t,n=$t)=>(!Hi||e==="sp")&&Ui(e,(...r)=>t(...r),n),n_=Ge("bm"),r_=Ge("m"),s_=Ge("bu"),i_=Ge("u"),o_=Ge("bum"),Ff=Ge("um"),a_=Ge("sp"),c_=Ge("rtg"),l_=Ge("rtc");function u_(e,t=$t){Ui("ec",e,t)}function mS(e,t,n,r){let s;const i=n&&n[r];if(z(e)||Pt(e)){s=new Array(e.length);for(let o=0,a=e.length;o<a;o++)s[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){s=new Array(e);for(let o=0;o<e;o++)s[o]=t(o+1,o,void 0,i&&i[o])}else if(wt(e))if(e[Symbol.iterator])s=Array.from(e,(o,a)=>t(o,a,void 0,i&&i[a]));else{const o=Object.keys(e);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=t(e[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const ha=e=>e?Yf(e)?Ki(e)||e.proxy:ha(e.parent):null,zr=jt(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ha(e.parent),$root:e=>ha(e.root),$emit:e=>e.emit,$options:e=>Ec(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,yc(e.update)}),$nextTick:e=>e.n||(e.n=_c.bind(e.proxy)),$watch:e=>Xm.bind(e)}),Co=(e,t)=>e!==mt&&!e.__isScriptSetup&&nt(e,t),h_={get({_:e},t){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=e;let l;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(Co(r,t))return o[t]=1,r[t];if(s!==mt&&nt(s,t))return o[t]=2,s[t];if((l=e.propsOptions[0])&&nt(l,t))return o[t]=3,i[t];if(n!==mt&&nt(n,t))return o[t]=4,n[t];fa&&(o[t]=0)}}const u=zr[t];let h,d;if(u)return t==="$attrs"&&ae(e,"get",t),u(e);if((h=a.__cssModules)&&(h=h[t]))return h;if(n!==mt&&nt(n,t))return o[t]=4,n[t];if(d=c.config.globalProperties,nt(d,t))return d[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return Co(s,t)?(s[t]=n,!0):r!==mt&&nt(r,t)?(r[t]=n,!0):nt(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||e!==mt&&nt(e,o)||Co(t,o)||(a=i[0])&&nt(a,o)||nt(r,o)||nt(zr,o)||nt(s.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:nt(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Hl(e){return z(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let fa=!0;function f_(e){const t=Ec(e),n=e.proxy,r=e.ctx;fa=!1,t.beforeCreate&&Kl(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:g,updated:T,activated:S,deactivated:I,beforeDestroy:O,beforeUnmount:L,destroyed:$,unmounted:W,render:J,renderTracked:q,renderTriggered:gt,errorCaptured:X,serverPrefetch:tt,expose:yt,inheritAttrs:qt,components:ce,directives:de,filters:wn}=t;if(l&&d_(l,r,null),o)for(const dt in o){const ct=o[dt];Q(ct)&&(r[dt]=ct.bind(n))}if(s){const dt=s.call(n,n);wt(dt)&&(e.data=Ts(dt))}if(fa=!0,i)for(const dt in i){const ct=i[dt],Be=Q(ct)?ct.bind(n,n):Q(ct.get)?ct.get.bind(n,n):me,We=!Q(ct)&&Q(ct.set)?ct.set.bind(n):me,Te=Zt({get:Be,set:We});Object.defineProperty(r,dt,{enumerable:!0,configurable:!0,get:()=>Te.value,set:re=>Te.value=re})}if(a)for(const dt in a)$f(a[dt],r,n,dt);if(c){const dt=Q(c)?c.call(n):c;Reflect.ownKeys(dt).forEach(ct=>{si(ct,dt[ct])})}u&&Kl(u,e,"c");function at(dt,ct){z(ct)?ct.forEach(Be=>dt(Be.bind(n))):ct&&dt(ct.bind(n))}if(at(n_,h),at(r_,d),at(s_,g),at(i_,T),at(Zm,S),at(t_,I),at(u_,X),at(l_,q),at(c_,gt),at(o_,L),at(Ff,W),at(a_,tt),z(yt))if(yt.length){const dt=e.exposed||(e.exposed={});yt.forEach(ct=>{Object.defineProperty(dt,ct,{get:()=>n[ct],set:Be=>n[ct]=Be})})}else e.exposed||(e.exposed={});J&&e.render===me&&(e.render=J),qt!=null&&(e.inheritAttrs=qt),ce&&(e.components=ce),de&&(e.directives=de)}function d_(e,t,n=me){z(e)&&(e=da(e));for(const r in e){const s=e[r];let i;wt(s)?"default"in s?i=Oe(s.from||r,s.default,!0):i=Oe(s.from||r):i=Oe(s),xt(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function Kl(e,t,n){ve(z(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function $f(e,t,n,r){const s=r.includes(".")?Nf(n,r):()=>n[r];if(Pt(e)){const i=t[e];Q(i)&&qr(s,i)}else if(Q(e))qr(s,e.bind(n));else if(wt(e))if(z(e))e.forEach(i=>$f(i,t,n,r));else{const i=Q(e.handler)?e.handler.bind(n):t[e.handler];Q(i)&&qr(s,i,e)}}function Ec(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let c;return a?c=a:!s.length&&!n&&!r?c=t:(c={},s.length&&s.forEach(l=>fi(c,l,o,!0)),fi(c,t,o)),wt(t)&&i.set(t,c),c}function fi(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&fi(e,i,n,!0),s&&s.forEach(o=>fi(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const a=p_[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const p_={data:Gl,props:Wl,emits:Wl,methods:Fr,computed:Fr,beforeCreate:Xt,created:Xt,beforeMount:Xt,mounted:Xt,beforeUpdate:Xt,updated:Xt,beforeDestroy:Xt,beforeUnmount:Xt,destroyed:Xt,unmounted:Xt,activated:Xt,deactivated:Xt,errorCaptured:Xt,serverPrefetch:Xt,components:Fr,directives:Fr,watch:m_,provide:Gl,inject:g_};function Gl(e,t){return t?e?function(){return jt(Q(e)?e.call(this,this):e,Q(t)?t.call(this,this):t)}:t:e}function g_(e,t){return Fr(da(e),da(t))}function da(e){if(z(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Xt(e,t){return e?[...new Set([].concat(e,t))]:t}function Fr(e,t){return e?jt(Object.create(null),e,t):t}function Wl(e,t){return e?z(e)&&z(t)?[...new Set([...e,...t])]:jt(Object.create(null),Hl(e),Hl(t??{})):t}function m_(e,t){if(!e)return t;if(!t)return e;const n=jt(Object.create(null),e);for(const r in t)n[r]=Xt(e[r],t[r]);return n}function Bf(){return{app:null,config:{isNativeTag:Yg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let __=0;function y_(e,t){return function(r,s=null){Q(r)||(r=jt({},r)),s!=null&&!wt(s)&&(s=null);const i=Bf(),o=new WeakSet;let a=!1;const c=i.app={_uid:__++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:H_,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&Q(l.install)?(o.add(l),l.install(c,...u)):Q(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=At(r,s);return d.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),u&&t?t(d,l):e(d,l,h),a=!0,c._container=l,l.__vue_app__=c,Ki(d.component)||d.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){is=c;try{return l()}finally{is=null}}};return c}}let is=null;function si(e,t){if($t){let n=$t.provides;const r=$t.parent&&$t.parent.provides;r===n&&(n=$t.provides=Object.create(r)),n[e]=t}}function Oe(e,t,n=!1){const r=$t||ee;if(r||is){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:is._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&Q(t)?t.call(r&&r.proxy):t}}function v_(){return!!($t||ee||is)}function E_(e,t,n,r=!1){const s={},i={};ci(i,zi,1),e.propsDefaults=Object.create(null),Uf(e,t,s,i);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=r?s:vf(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function w_(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=e,a=it(s),[c]=e.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if($i(e.emitsOptions,d))continue;const g=t[d];if(c)if(nt(i,d))g!==i[d]&&(i[d]=g,l=!0);else{const T=Me(d);s[T]=pa(c,a,T,g,e,!1)}else g!==i[d]&&(i[d]=g,l=!0)}}}else{Uf(e,t,s,i)&&(l=!0);let u;for(const h in a)(!t||!nt(t,h)&&((u=Sr(h))===h||!nt(t,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=pa(c,a,h,void 0,e,!0)):delete s[h]);if(i!==a)for(const h in i)(!t||!nt(t,h))&&(delete i[h],l=!0)}l&&qe(e,"set","$attrs")}function Uf(e,t,n,r){const[s,i]=e.propsOptions;let o=!1,a;if(t)for(let c in t){if(Zs(c))continue;const l=t[c];let u;s&&nt(s,u=Me(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:$i(e.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=it(n),l=a||mt;for(let u=0;u<i.length;u++){const h=i[u];n[h]=pa(s,c,h,l[h],e,!nt(l,h))}}return o}function pa(e,t,n,r,s,i){const o=e[n];if(o!=null){const a=nt(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Q(c)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const u=Is(s);r=l[n]=c.call(null,t),u()}}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Sr(n))&&(r=!0))}return r}function jf(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const i=e.props,o={},a=[];let c=!1;if(!Q(e)){const u=h=>{c=!0;const[d,g]=jf(h,t,!0);jt(o,d),g&&a.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!c)return wt(e)&&r.set(e,ar),ar;if(z(i))for(let u=0;u<i.length;u++){const h=Me(i[u]);Ql(h)&&(o[h]=mt)}else if(i)for(const u in i){const h=Me(u);if(Ql(h)){const d=i[u],g=o[h]=z(d)||Q(d)?{type:d}:jt({},d);if(g){const T=Xl(Boolean,g.type),S=Xl(String,g.type);g[0]=T>-1,g[1]=S<0||T<S,(T>-1||nt(g,"default"))&&a.push(h)}}}const l=[o,a];return wt(e)&&r.set(e,l),l}function Ql(e){return e[0]!=="$"}function Yl(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Jl(e,t){return Yl(e)===Yl(t)}function Xl(e,t){return z(t)?t.findIndex(n=>Jl(n,e)):Q(t)&&Jl(t,e)?0:-1}const qf=e=>e[0]==="_"||e==="$stable",wc=e=>z(e)?e.map(be):[be(e)],T_=(e,t,n)=>{if(t._n)return t;const r=tr((...s)=>wc(t(...s)),n);return r._c=!1,r},zf=(e,t,n)=>{const r=e._ctx;for(const s in e){if(qf(s))continue;const i=e[s];if(Q(i))t[s]=T_(s,i,r);else if(i!=null){const o=wc(i);t[s]=()=>o}}},Hf=(e,t)=>{const n=wc(t);e.slots.default=()=>n},I_=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=it(t),ci(t,"_",n)):zf(t,e.slots={})}else e.slots={},t&&Hf(e,t);ci(e.slots,zi,1)},A_=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,o=mt;if(r.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:(jt(s,t),!n&&a===1&&delete s._):(i=!t.$stable,zf(t,s)),o=t}else t&&(Hf(e,t),o={default:1});if(i)for(const a in s)!qf(a)&&o[a]==null&&delete s[a]};function ga(e,t,n,r,s=!1){if(z(e)){e.forEach((d,g)=>ga(d,t&&(z(t)?t[g]:t),n,r,s));return}if(ri(r)&&!s)return;const i=r.shapeFlag&4?Ki(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=e,l=t&&t.r,u=a.refs===mt?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Pt(l)?(u[l]=null,nt(h,l)&&(h[l]=null)):xt(l)&&(l.value=null)),Q(c))cn(c,a,12,[o,u]);else{const d=Pt(c),g=xt(c),T=e.f;if(d||g){const S=()=>{if(T){const I=d?nt(h,c)?h[c]:u[c]:c.value;s?z(I)&&ic(I,i):z(I)?I.includes(i)||I.push(i):d?(u[c]=[i],nt(h,c)&&(h[c]=u[c])):(c.value=[i],e.k&&(u[e.k]=c.value))}else d?(u[c]=o,nt(h,c)&&(h[c]=o)):g&&(c.value=o,e.k&&(u[e.k]=o))};s||T?S():(S.id=-1,se(S,n))}}}const se=Qm;function R_(e){return S_(e)}function S_(e,t){const n=tf();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:g=me,insertStaticContent:T}=e,S=(f,p,m,v=null,_=null,R=null,x=void 0,A=null,b=!!p.dynamicChildren)=>{if(f===p)return;f&&!Or(f,p)&&(v=y(f),re(f,_,R,!0),f=null),p.patchFlag===-2&&(b=!1,p.dynamicChildren=null);const{type:w,ref:k,shapeFlag:U}=p;switch(w){case ji:I(f,p,m,v);break;case $n:O(f,p,m,v);break;case Do:f==null&&L(p,m,v,x);break;case Se:ce(f,p,m,v,_,R,x,A,b);break;default:U&1?J(f,p,m,v,_,R,x,A,b):U&6?de(f,p,m,v,_,R,x,A,b):(U&64||U&128)&&w.process(f,p,m,v,_,R,x,A,b,M)}k!=null&&_&&ga(k,f&&f.ref,R,p||f,!p)},I=(f,p,m,v)=>{if(f==null)r(p.el=a(p.children),m,v);else{const _=p.el=f.el;p.children!==f.children&&l(_,p.children)}},O=(f,p,m,v)=>{f==null?r(p.el=c(p.children||""),m,v):p.el=f.el},L=(f,p,m,v)=>{[f.el,f.anchor]=T(f.children,p,m,v,f.el,f.anchor)},$=({el:f,anchor:p},m,v)=>{let _;for(;f&&f!==p;)_=d(f),r(f,m,v),f=_;r(p,m,v)},W=({el:f,anchor:p})=>{let m;for(;f&&f!==p;)m=d(f),s(f),f=m;s(p)},J=(f,p,m,v,_,R,x,A,b)=>{p.type==="svg"?x="svg":p.type==="math"&&(x="mathml"),f==null?q(p,m,v,_,R,x,A,b):tt(f,p,_,R,x,A,b)},q=(f,p,m,v,_,R,x,A)=>{let b,w;const{props:k,shapeFlag:U,transition:F,dirs:K}=f;if(b=f.el=o(f.type,R,k&&k.is,k),U&8?u(b,f.children):U&16&&X(f.children,b,null,v,_,Po(f,R),x,A),K&&Tn(f,null,v,"created"),gt(b,f,f.scopeId,x,v),k){for(const pt in k)pt!=="value"&&!Zs(pt)&&i(b,pt,null,k[pt],R,f.children,v,_,zt);"value"in k&&i(b,"value",null,k.value,R),(w=k.onVnodeBeforeMount)&&Ae(w,v,f)}K&&Tn(f,null,v,"beforeMount");const Z=b_(_,F);Z&&F.beforeEnter(b),r(b,p,m),((w=k&&k.onVnodeMounted)||Z||K)&&se(()=>{w&&Ae(w,v,f),Z&&F.enter(b),K&&Tn(f,null,v,"mounted")},_)},gt=(f,p,m,v,_)=>{if(m&&g(f,m),v)for(let R=0;R<v.length;R++)g(f,v[R]);if(_){let R=_.subTree;if(p===R){const x=_.vnode;gt(f,x,x.scopeId,x.slotScopeIds,_.parent)}}},X=(f,p,m,v,_,R,x,A,b=0)=>{for(let w=b;w<f.length;w++){const k=f[w]=A?Ze(f[w]):be(f[w]);S(null,k,p,m,v,_,R,x,A)}},tt=(f,p,m,v,_,R,x)=>{const A=p.el=f.el;let{patchFlag:b,dynamicChildren:w,dirs:k}=p;b|=f.patchFlag&16;const U=f.props||mt,F=p.props||mt;let K;if(m&&In(m,!1),(K=F.onVnodeBeforeUpdate)&&Ae(K,m,p,f),k&&Tn(p,f,m,"beforeUpdate"),m&&In(m,!0),w?yt(f.dynamicChildren,w,A,m,v,Po(p,_),R):x||ct(f,p,A,null,m,v,Po(p,_),R,!1),b>0){if(b&16)qt(A,p,U,F,m,v,_);else if(b&2&&U.class!==F.class&&i(A,"class",null,F.class,_),b&4&&i(A,"style",U.style,F.style,_),b&8){const Z=p.dynamicProps;for(let pt=0;pt<Z.length;pt++){const Et=Z[pt],Ot=U[Et],_e=F[Et];(_e!==Ot||Et==="value")&&i(A,Et,Ot,_e,_,f.children,m,v,zt)}}b&1&&f.children!==p.children&&u(A,p.children)}else!x&&w==null&&qt(A,p,U,F,m,v,_);((K=F.onVnodeUpdated)||k)&&se(()=>{K&&Ae(K,m,p,f),k&&Tn(p,f,m,"updated")},v)},yt=(f,p,m,v,_,R,x)=>{for(let A=0;A<p.length;A++){const b=f[A],w=p[A],k=b.el&&(b.type===Se||!Or(b,w)||b.shapeFlag&70)?h(b.el):m;S(b,w,k,null,v,_,R,x,!0)}},qt=(f,p,m,v,_,R,x)=>{if(m!==v){if(m!==mt)for(const A in m)!Zs(A)&&!(A in v)&&i(f,A,m[A],null,x,p.children,_,R,zt);for(const A in v){if(Zs(A))continue;const b=v[A],w=m[A];b!==w&&A!=="value"&&i(f,A,w,b,x,p.children,_,R,zt)}"value"in v&&i(f,"value",m.value,v.value,x)}},ce=(f,p,m,v,_,R,x,A,b)=>{const w=p.el=f?f.el:a(""),k=p.anchor=f?f.anchor:a("");let{patchFlag:U,dynamicChildren:F,slotScopeIds:K}=p;K&&(A=A?A.concat(K):K),f==null?(r(w,m,v),r(k,m,v),X(p.children||[],m,k,_,R,x,A,b)):U>0&&U&64&&F&&f.dynamicChildren?(yt(f.dynamicChildren,F,m,_,R,x,A),(p.key!=null||_&&p===_.subTree)&&Kf(f,p,!0)):ct(f,p,m,k,_,R,x,A,b)},de=(f,p,m,v,_,R,x,A,b)=>{p.slotScopeIds=A,f==null?p.shapeFlag&512?_.ctx.activate(p,m,v,x,b):wn(p,m,v,_,R,x,b):pe(f,p,b)},wn=(f,p,m,v,_,R,x)=>{const A=f.component=F_(f,v,_);if(Mf(f)&&(A.ctx.renderer=M),$_(A),A.asyncDep){if(_&&_.registerDep(A,at),!f.el){const b=A.subTree=At($n);O(null,b,p,m)}}else at(A,f,p,m,_,R,x)},pe=(f,p,m)=>{const v=p.component=f.component;if(Km(f,p,m))if(v.asyncDep&&!v.asyncResolved){dt(v,p,m);return}else v.next=p,Fm(v.update),v.effect.dirty=!0,v.update();else p.el=f.el,v.vnode=p},at=(f,p,m,v,_,R,x)=>{const A=()=>{if(f.isMounted){let{next:k,bu:U,u:F,parent:K,vnode:Z}=f;{const Jn=Gf(f);if(Jn){k&&(k.el=Z.el,dt(f,k,x)),Jn.asyncDep.then(()=>{f.isUnmounted||A()});return}}let pt=k,Et;In(f,!1),k?(k.el=Z.el,dt(f,k,x)):k=Z,U&&ti(U),(Et=k.props&&k.props.onVnodeBeforeUpdate)&&Ae(Et,K,k,Z),In(f,!0);const Ot=bo(f),_e=f.subTree;f.subTree=Ot,S(_e,Ot,h(_e.el),y(_e),f,_,R),k.el=Ot.el,pt===null&&Gm(f,Ot.el),F&&se(F,_),(Et=k.props&&k.props.onVnodeUpdated)&&se(()=>Ae(Et,K,k,Z),_)}else{let k;const{el:U,props:F}=p,{bm:K,m:Z,parent:pt}=f,Et=ri(p);if(In(f,!1),K&&ti(K),!Et&&(k=F&&F.onVnodeBeforeMount)&&Ae(k,pt,p),In(f,!0),U&&vt){const Ot=()=>{f.subTree=bo(f),vt(U,f.subTree,f,_,null)};Et?p.type.__asyncLoader().then(()=>!f.isUnmounted&&Ot()):Ot()}else{const Ot=f.subTree=bo(f);S(null,Ot,m,v,f,_,R),p.el=Ot.el}if(Z&&se(Z,_),!Et&&(k=F&&F.onVnodeMounted)){const Ot=p;se(()=>Ae(k,pt,Ot),_)}(p.shapeFlag&256||pt&&ri(pt.vnode)&&pt.vnode.shapeFlag&256)&&f.a&&se(f.a,_),f.isMounted=!0,p=m=v=null}},b=f.effect=new cc(A,me,()=>yc(w),f.scope),w=f.update=()=>{b.dirty&&b.run()};w.id=f.uid,In(f,!0),w()},dt=(f,p,m)=>{p.component=f;const v=f.vnode.props;f.vnode=p,f.next=null,w_(f,p.props,v,m),A_(f,p.children,m),Kn(),jl(f),Gn()},ct=(f,p,m,v,_,R,x,A,b=!1)=>{const w=f&&f.children,k=f?f.shapeFlag:0,U=p.children,{patchFlag:F,shapeFlag:K}=p;if(F>0){if(F&128){We(w,U,m,v,_,R,x,A,b);return}else if(F&256){Be(w,U,m,v,_,R,x,A,b);return}}K&8?(k&16&&zt(w,_,R),U!==w&&u(m,U)):k&16?K&16?We(w,U,m,v,_,R,x,A,b):zt(w,_,R,!0):(k&8&&u(m,""),K&16&&X(U,m,v,_,R,x,A,b))},Be=(f,p,m,v,_,R,x,A,b)=>{f=f||ar,p=p||ar;const w=f.length,k=p.length,U=Math.min(w,k);let F;for(F=0;F<U;F++){const K=p[F]=b?Ze(p[F]):be(p[F]);S(f[F],K,m,null,_,R,x,A,b)}w>k?zt(f,_,R,!0,!1,U):X(p,m,v,_,R,x,A,b,U)},We=(f,p,m,v,_,R,x,A,b)=>{let w=0;const k=p.length;let U=f.length-1,F=k-1;for(;w<=U&&w<=F;){const K=f[w],Z=p[w]=b?Ze(p[w]):be(p[w]);if(Or(K,Z))S(K,Z,m,null,_,R,x,A,b);else break;w++}for(;w<=U&&w<=F;){const K=f[U],Z=p[F]=b?Ze(p[F]):be(p[F]);if(Or(K,Z))S(K,Z,m,null,_,R,x,A,b);else break;U--,F--}if(w>U){if(w<=F){const K=F+1,Z=K<k?p[K].el:v;for(;w<=F;)S(null,p[w]=b?Ze(p[w]):be(p[w]),m,Z,_,R,x,A,b),w++}}else if(w>F)for(;w<=U;)re(f[w],_,R,!0),w++;else{const K=w,Z=w,pt=new Map;for(w=Z;w<=F;w++){const le=p[w]=b?Ze(p[w]):be(p[w]);le.key!=null&&pt.set(le.key,w)}let Et,Ot=0;const _e=F-Z+1;let Jn=!1,Vl=0;const xr=new Array(_e);for(w=0;w<_e;w++)xr[w]=0;for(w=K;w<=U;w++){const le=f[w];if(Ot>=_e){re(le,_,R,!0);continue}let Ie;if(le.key!=null)Ie=pt.get(le.key);else for(Et=Z;Et<=F;Et++)if(xr[Et-Z]===0&&Or(le,p[Et])){Ie=Et;break}Ie===void 0?re(le,_,R,!0):(xr[Ie-Z]=w+1,Ie>=Vl?Vl=Ie:Jn=!0,S(le,p[Ie],m,null,_,R,x,A,b),Ot++)}const xl=Jn?C_(xr):ar;for(Et=xl.length-1,w=_e-1;w>=0;w--){const le=Z+w,Ie=p[le],Ol=le+1<k?p[le+1].el:v;xr[w]===0?S(null,Ie,m,Ol,_,R,x,A,b):Jn&&(Et<0||w!==xl[Et]?Te(Ie,m,Ol,2):Et--)}}},Te=(f,p,m,v,_=null)=>{const{el:R,type:x,transition:A,children:b,shapeFlag:w}=f;if(w&6){Te(f.component.subTree,p,m,v);return}if(w&128){f.suspense.move(p,m,v);return}if(w&64){x.move(f,p,m,M);return}if(x===Se){r(R,p,m);for(let U=0;U<b.length;U++)Te(b[U],p,m,v);r(f.anchor,p,m);return}if(x===Do){$(f,p,m);return}if(v!==2&&w&1&&A)if(v===0)A.beforeEnter(R),r(R,p,m),se(()=>A.enter(R),_);else{const{leave:U,delayLeave:F,afterLeave:K}=A,Z=()=>r(R,p,m),pt=()=>{U(R,()=>{Z(),K&&K()})};F?F(R,Z,pt):pt()}else r(R,p,m)},re=(f,p,m,v=!1,_=!1)=>{const{type:R,props:x,ref:A,children:b,dynamicChildren:w,shapeFlag:k,patchFlag:U,dirs:F}=f;if(A!=null&&ga(A,null,m,f,!0),k&256){p.ctx.deactivate(f);return}const K=k&1&&F,Z=!ri(f);let pt;if(Z&&(pt=x&&x.onVnodeBeforeUnmount)&&Ae(pt,p,f),k&6)Fs(f.component,m,v);else{if(k&128){f.suspense.unmount(m,v);return}K&&Tn(f,null,p,"beforeUnmount"),k&64?f.type.remove(f,p,m,_,M,v):w&&(R!==Se||U>0&&U&64)?zt(w,p,m,!1,!0):(R===Se&&U&384||!_&&k&16)&&zt(b,p,m),v&&Qn(f)}(Z&&(pt=x&&x.onVnodeUnmounted)||K)&&se(()=>{pt&&Ae(pt,p,f),K&&Tn(f,null,p,"unmounted")},m)},Qn=f=>{const{type:p,el:m,anchor:v,transition:_}=f;if(p===Se){Yn(m,v);return}if(p===Do){W(f);return}const R=()=>{s(m),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(f.shapeFlag&1&&_&&!_.persisted){const{leave:x,delayLeave:A}=_,b=()=>x(m,R);A?A(f.el,R,b):b()}else R()},Yn=(f,p)=>{let m;for(;f!==p;)m=d(f),s(f),f=m;s(p)},Fs=(f,p,m)=>{const{bum:v,scope:_,update:R,subTree:x,um:A}=f;v&&ti(v),_.stop(),R&&(R.active=!1,re(x,f,p,m)),A&&se(A,p),se(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},zt=(f,p,m,v=!1,_=!1,R=0)=>{for(let x=R;x<f.length;x++)re(f[x],p,m,v,_)},y=f=>f.shapeFlag&6?y(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el);let N=!1;const V=(f,p,m)=>{f==null?p._vnode&&re(p._vnode,null,null,!0):S(p._vnode||null,f,p,null,null,null,m),N||(N=!0,jl(),Cf(),N=!1),p._vnode=f},M={p:S,um:re,m:Te,r:Qn,mt:wn,mc:X,pc:ct,pbc:yt,n:y,o:e};let lt,vt;return t&&([lt,vt]=t(M)),{render:V,hydrate:lt,createApp:y_(V,lt)}}function Po({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function In({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function b_(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Kf(e,t,n=!1){const r=e.children,s=t.children;if(z(r)&&z(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Ze(s[i]),a.el=o.el),n||Kf(o,a)),a.type===ji&&(a.el=o.el)}}function C_(e){const t=e.slice(),n=[0];let r,s,i,o,a;const c=e.length;for(r=0;r<c;r++){const l=e[r];if(l!==0){if(s=n[n.length-1],e[s]<l){t[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<l?i=a+1:o=a;l<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function Gf(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Gf(t)}const P_=e=>e.__isTeleport,Se=Symbol.for("v-fgt"),ji=Symbol.for("v-txt"),$n=Symbol.for("v-cmt"),Do=Symbol.for("v-stc"),Hr=[];let ye=null;function qi(e=!1){Hr.push(ye=e?null:[])}function D_(){Hr.pop(),ye=Hr[Hr.length-1]||null}let os=1;function Zl(e){os+=e}function Wf(e){return e.dynamicChildren=os>0?ye||ar:null,D_(),os>0&&ye&&ye.push(e),e}function Tc(e,t,n,r,s,i){return Wf(Dt(e,t,n,r,s,i,!0))}function V_(e,t,n,r,s){return Wf(At(e,t,n,r,s,!0))}function ma(e){return e?e.__v_isVNode===!0:!1}function Or(e,t){return e.type===t.type&&e.key===t.key}const zi="__vInternal",Qf=({key:e})=>e??null,ii=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Pt(e)||xt(e)||Q(e)?{i:ee,r:e,k:t,f:!!n}:e:null);function Dt(e,t=null,n=null,r=0,s=null,i=e===Se?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Qf(t),ref:t&&ii(t),scopeId:Bi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ee};return a?(Ic(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=Pt(n)?8:16),os>0&&!o&&ye&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&ye.push(c),c}const At=x_;function x_(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===Vf)&&(e=$n),ma(e)){const a=gr(e,t,!0);return n&&Ic(a,n),os>0&&!i&&ye&&(a.shapeFlag&6?ye[ye.indexOf(e)]=a:ye.push(a)),a.patchFlag|=-2,a}if(z_(e)&&(e=e.__vccOpts),t){t=O_(t);let{class:a,style:c}=t;a&&!Pt(a)&&(t.class=Re(a)),wt(c)&&(wf(c)&&!z(c)&&(c=jt({},c)),t.style=ac(c))}const o=Pt(e)?1:Wm(e)?128:P_(e)?64:wt(e)?4:Q(e)?2:0;return Dt(e,t,n,r,s,o,i,!0)}function O_(e){return e?wf(e)||zi in e?jt({},e):e:null}function gr(e,t,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=e,a=t?k_(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&Qf(a),ref:t&&t.ref?n&&s?z(s)?s.concat(ii(t)):[s,ii(t)]:ii(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Se?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&gr(e.ssContent),ssFallback:e.ssFallback&&gr(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function bn(e=" ",t=0){return At(ji,null,e,t)}function N_(e="",t=!1){return t?(qi(),V_($n,null,e)):At($n,null,e)}function be(e){return e==null||typeof e=="boolean"?At($n):z(e)?At(Se,null,e.slice()):typeof e=="object"?Ze(e):At(ji,null,String(e))}function Ze(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:gr(e)}function Ic(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(z(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),Ic(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!(zi in t)?t._ctx=ee:s===3&&ee&&(ee.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else Q(t)?(t={default:t,_ctx:ee},n=32):(t=String(t),r&64?(n=16,t=[bn(t)]):n=8);e.children=t,e.shapeFlag|=n}function k_(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=Re([t.class,r.class]));else if(s==="style")t.style=ac([t.style,r.style]);else if(xi(s)){const i=t[s],o=r[s];o&&i!==o&&!(z(i)&&i.includes(o))&&(t[s]=i?[].concat(i,o):o)}else s!==""&&(t[s]=r[s])}return t}function Ae(e,t,n,r=null){ve(e,t,7,[n,r])}const M_=Bf();let L_=0;function F_(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||M_,i={uid:L_++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new rf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:jf(r,s),emitsOptions:Df(r,s),emit:null,emitted:null,propsDefaults:mt,inheritAttrs:r.inheritAttrs,ctx:mt,data:mt,props:mt,attrs:mt,slots:mt,refs:mt,setupState:mt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Um.bind(null,i),e.ce&&e.ce(i),i}let $t=null,di,_a;{const e=tf(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};di=t("__VUE_INSTANCE_SETTERS__",n=>$t=n),_a=t("__VUE_SSR_SETTERS__",n=>Hi=n)}const Is=e=>{const t=$t;return di(e),e.scope.on(),()=>{e.scope.off(),di(t)}},tu=()=>{$t&&$t.scope.off(),di(null)};function Yf(e){return e.vnode.shapeFlag&4}let Hi=!1;function $_(e,t=!1){t&&_a(t);const{props:n,children:r}=e.vnode,s=Yf(e);E_(e,n,s,t),I_(e,r);const i=s?B_(e,t):void 0;return t&&_a(!1),i}function B_(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Li(new Proxy(e.ctx,h_));const{setup:r}=n;if(r){const s=e.setupContext=r.length>1?j_(e):null,i=Is(e);Kn();const o=cn(r,e,0,[e.props,s]);if(Gn(),i(),Jh(o)){if(o.then(tu,tu),t)return o.then(a=>{eu(e,a,t)}).catch(a=>{Fi(a,e,0)});e.asyncDep=o}else eu(e,o,t)}else Jf(e,t)}function eu(e,t,n){Q(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:wt(t)&&(e.setupState=Rf(t)),Jf(e,n)}let nu;function Jf(e,t,n){const r=e.type;if(!e.render){if(!t&&nu&&!r.render){const s=r.template||Ec(e).template;if(s){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:c}=r,l=jt(jt({isCustomElement:i,delimiters:a},o),c);r.render=nu(s,l)}}e.render=r.render||me}{const s=Is(e);Kn();try{f_(e)}finally{Gn(),s()}}}function U_(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return ae(e,"get","$attrs"),t[n]}}))}function j_(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return U_(e)},slots:e.slots,emit:e.emit,expose:t}}function Ki(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Rf(Li(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in zr)return zr[n](e)},has(t,n){return n in t||n in zr}}))}function q_(e,t=!0){return Q(e)?e.displayName||e.name:e.name||t&&e.__name}function z_(e){return Q(e)&&"__vccOpts"in e}const Zt=(e,t)=>Pm(e,t,Hi);function Xf(e,t,n){const r=arguments.length;return r===2?wt(t)&&!z(t)?ma(t)?At(e,null,[t]):At(e,t):At(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ma(n)&&(n=[n]),At(e,t,n))}const H_="3.4.15";/**
* @vue/runtime-dom v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const K_="http://www.w3.org/2000/svg",G_="http://www.w3.org/1998/Math/MathML",tn=typeof document<"u"?document:null,ru=tn&&tn.createElement("template"),W_={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?tn.createElementNS(K_,e):t==="mathml"?tn.createElementNS(G_,e):tn.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>tn.createTextNode(e),createComment:e=>tn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>tn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const o=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{ru.innerHTML=r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e;const a=ru.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Q_=Symbol("_vtc");function Y_(e,t,n){const r=e[Q_];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const J_=Symbol("_vod"),X_=Symbol("");function Z_(e,t,n){const r=e.style,s=r.display,i=Pt(n);if(n&&!i){if(t&&!Pt(t))for(const o in t)n[o]==null&&ya(r,o,"");for(const o in n)ya(r,o,n[o])}else if(i){if(t!==n){const o=r[X_];o&&(n+=";"+o),r.cssText=n}}else t&&e.removeAttribute("style");J_ in e&&(r.display=s)}const su=/\s*!important$/;function ya(e,t,n){if(z(n))n.forEach(r=>ya(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=ty(e,t);su.test(n)?e.setProperty(Sr(r),n.replace(su,""),"important"):e[r]=n}}const iu=["Webkit","Moz","ms"],Vo={};function ty(e,t){const n=Vo[t];if(n)return n;let r=Me(t);if(r!=="filter"&&r in e)return Vo[t]=r;r=ki(r);for(let s=0;s<iu.length;s++){const i=iu[s]+r;if(i in e)return Vo[t]=i}return t}const ou="http://www.w3.org/1999/xlink";function ey(e,t,n,r,s){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ou,t.slice(6,t.length)):e.setAttributeNS(ou,t,n);else{const i=om(t);n==null||i&&!ef(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function ny(e,t,n,r,s,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,s,i),e[t]=n??"";return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){e._value=n;const l=a==="OPTION"?e.getAttribute("value"):e.value,u=n??"";l!==u&&(e.value=u),n==null&&e.removeAttribute(t);return}let c=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=ef(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{e[t]=n}catch{}c&&e.removeAttribute(t)}function er(e,t,n,r){e.addEventListener(t,n,r)}function ry(e,t,n,r){e.removeEventListener(t,n,r)}const au=Symbol("_vei");function sy(e,t,n,r,s=null){const i=e[au]||(e[au]={}),o=i[t];if(r&&o)o.value=r;else{const[a,c]=iy(t);if(r){const l=i[t]=cy(r,s);er(e,a,l,c)}else o&&(ry(e,a,o,c),i[t]=void 0)}}const cu=/(?:Once|Passive|Capture)$/;function iy(e){let t;if(cu.test(e)){t={};let r;for(;r=e.match(cu);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Sr(e.slice(2)),t]}let xo=0;const oy=Promise.resolve(),ay=()=>xo||(oy.then(()=>xo=0),xo=Date.now());function cy(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;ve(ly(r,n.value),t,5,[r])};return n.value=e,n.attached=ay(),n}function ly(e,t){if(z(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const lu=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,uy=(e,t,n,r,s,i,o,a,c)=>{const l=s==="svg";t==="class"?Y_(e,r,l):t==="style"?Z_(e,n,r):xi(t)?sc(t)||sy(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):hy(e,t,r,l))?ny(e,t,r,i,o,a,c):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),ey(e,t,r,l))};function hy(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&lu(t)&&Q(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return lu(t)&&Pt(n)?!1:t in e}const uu=e=>{const t=e.props["onUpdate:modelValue"]||!1;return z(t)?n=>ti(t,n):t};function fy(e){e.target.composing=!0}function hu(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Oo=Symbol("_assign"),_S={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e[Oo]=uu(s);const i=r||s.props&&s.props.type==="number";er(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n&&(a=a.trim()),i&&(a=oa(a)),e[Oo](a)}),n&&er(e,"change",()=>{e.value=e.value.trim()}),t||(er(e,"compositionstart",fy),er(e,"compositionend",hu),er(e,"change",hu))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:s}},i){if(e[Oo]=uu(i),e.composing)return;const o=s||e.type==="number"?oa(e.value):e.value,a=t??"";o!==a&&(document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===a)||(e.value=a))}},dy=jt({patchProp:uy},W_);let fu;function py(){return fu||(fu=R_(dy))}const gy=(...e)=>{const t=py().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=_y(r);if(!s)return;const i=t._component;!Q(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,my(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function my(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function _y(e){return Pt(e)?document.querySelector(e):e}const Zf=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},yy={};function vy(e,t){const n=ni("NavigationBar"),r=ni("router-view"),s=ni("FooterView");return qi(),Tc(Se,null,[At(n),At(r),At(s)],64)}const Ey=Zf(yy,[["render",vy]]);var wy=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let td;const Gi=e=>td=e,ed=Symbol();function va(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var Kr;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Kr||(Kr={}));function Ty(){const e=sf(!0),t=e.run(()=>gc({}));let n=[],r=[];const s=Li({install(i){Gi(s),s._a=i,i.provide(ed,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!wy?r.push(i):n.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return s}const nd=()=>{};function du(e,t,n,r=nd){e.push(t);const s=()=>{const i=e.indexOf(t);i>-1&&(e.splice(i,1),r())};return!n&&of()&&cm(s),s}function Xn(e,...t){e.slice().forEach(n=>{n(...t)})}const Iy=e=>e();function Ea(e,t){e instanceof Map&&t instanceof Map&&t.forEach((n,r)=>e.set(r,n)),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],s=e[n];va(s)&&va(r)&&e.hasOwnProperty(n)&&!xt(r)&&!on(r)?e[n]=Ea(s,r):e[n]=r}return e}const Ay=Symbol();function Ry(e){return!va(e)||!e.hasOwnProperty(Ay)}const{assign:Je}=Object;function Sy(e){return!!(xt(e)&&e.effect)}function by(e,t,n,r){const{state:s,actions:i,getters:o}=t,a=n.state.value[e];let c;function l(){a||(n.state.value[e]=s?s():{});const u=Om(n.state.value[e]);return Je(u,i,Object.keys(o||{}).reduce((h,d)=>(h[d]=Li(Zt(()=>{Gi(n);const g=n._s.get(e);return o[d].call(g,g)})),h),{}))}return c=rd(e,l,t,n,r,!0),c}function rd(e,t,n={},r,s,i){let o;const a=Je({actions:{}},n),c={deep:!0};let l,u,h=[],d=[],g;const T=r.state.value[e];!i&&!T&&(r.state.value[e]={}),gc({});let S;function I(X){let tt;l=u=!1,typeof X=="function"?(X(r.state.value[e]),tt={type:Kr.patchFunction,storeId:e,events:g}):(Ea(r.state.value[e],X),tt={type:Kr.patchObject,payload:X,storeId:e,events:g});const yt=S=Symbol();_c().then(()=>{S===yt&&(l=!0)}),u=!0,Xn(h,tt,r.state.value[e])}const O=i?function(){const{state:tt}=n,yt=tt?tt():{};this.$patch(qt=>{Je(qt,yt)})}:nd;function L(){o.stop(),h=[],d=[],r._s.delete(e)}function $(X,tt){return function(){Gi(r);const yt=Array.from(arguments),qt=[],ce=[];function de(at){qt.push(at)}function wn(at){ce.push(at)}Xn(d,{args:yt,name:X,store:J,after:de,onError:wn});let pe;try{pe=tt.apply(this&&this.$id===e?this:J,yt)}catch(at){throw Xn(ce,at),at}return pe instanceof Promise?pe.then(at=>(Xn(qt,at),at)).catch(at=>(Xn(ce,at),Promise.reject(at))):(Xn(qt,pe),pe)}}const W={_p:r,$id:e,$onAction:du.bind(null,d),$patch:I,$reset:O,$subscribe(X,tt={}){const yt=du(h,X,tt.detached,()=>qt()),qt=o.run(()=>qr(()=>r.state.value[e],ce=>{(tt.flush==="sync"?u:l)&&X({storeId:e,type:Kr.direct,events:g},ce)},Je({},c,tt)));return yt},$dispose:L},J=Ts(W);r._s.set(e,J);const gt=(r._a&&r._a.runWithContext||Iy)(()=>r._e.run(()=>(o=sf()).run(t)));for(const X in gt){const tt=gt[X];if(xt(tt)&&!Sy(tt)||on(tt))i||(T&&Ry(tt)&&(xt(tt)?tt.value=T[X]:Ea(tt,T[X])),r.state.value[e][X]=tt);else if(typeof tt=="function"){const yt=$(X,tt);gt[X]=yt,a.actions[X]=tt}}return Je(J,gt),Je(it(J),gt),Object.defineProperty(J,"$state",{get:()=>r.state.value[e],set:X=>{I(tt=>{Je(tt,X)})}}),r._p.forEach(X=>{Je(J,o.run(()=>X({store:J,app:r._a,pinia:r,options:a})))}),T&&i&&n.hydrate&&n.hydrate(J.$state,T),l=!0,u=!0,J}function Cy(e,t,n){let r,s;const i=typeof t=="function";typeof e=="string"?(r=e,s=i?n:t):(s=e,r=e.id);function o(a,c){const l=v_();return a=a||(l?Oe(ed,null):null),a&&Gi(a),a=td,a._s.has(r)||(i?rd(r,t,s,a):by(r,s,a)),a._s.get(r)}return o.$id=r,o}function Py(e){return typeof e=="object"&&e!==null}function pu(e,t){return e=Py(e)?e:Object.create(null),new Proxy(e,{get(n,r,s){return r==="key"?Reflect.get(n,r,s):Reflect.get(n,r,s)||Reflect.get(t,r,s)}})}function Dy(e,t){return t.reduce((n,r)=>n==null?void 0:n[r],e)}function Vy(e,t,n){return t.slice(0,-1).reduce((r,s)=>/^(__proto__)$/.test(s)?{}:r[s]=r[s]||{},e)[t[t.length-1]]=n,e}function xy(e,t){return t.reduce((n,r)=>{const s=r.split(".");return Vy(n,s,Dy(e,s))},{})}function Oy(e,t){return n=>{var r;try{const{storage:s=localStorage,beforeRestore:i=void 0,afterRestore:o=void 0,serializer:a={serialize:JSON.stringify,deserialize:JSON.parse},key:c=t.$id,paths:l=null,debug:u=!1}=n;return{storage:s,beforeRestore:i,afterRestore:o,serializer:a,key:((r=e.key)!=null?r:h=>h)(typeof c=="string"?c:c(t.$id)),paths:l,debug:u}}catch(s){return n.debug&&console.error("[pinia-plugin-persistedstate]",s),null}}}function gu(e,{storage:t,serializer:n,key:r,debug:s}){try{const i=t==null?void 0:t.getItem(r);i&&e.$patch(n==null?void 0:n.deserialize(i))}catch(i){s&&console.error("[pinia-plugin-persistedstate]",i)}}function mu(e,{storage:t,serializer:n,key:r,paths:s,debug:i}){try{const o=Array.isArray(s)?xy(e,s):e;t.setItem(r,n.serialize(o))}catch(o){i&&console.error("[pinia-plugin-persistedstate]",o)}}function Ny(e={}){return t=>{const{auto:n=!1}=e,{options:{persist:r=n},store:s,pinia:i}=t;if(!r)return;if(!(s.$id in i.state.value)){const a=i._s.get(s.$id.replace("__hot:",""));a&&Promise.resolve().then(()=>a.$persist());return}const o=(Array.isArray(r)?r.map(a=>pu(a,e)):[pu(r,e)]).map(Oy(e,s)).filter(Boolean);s.$persist=()=>{o.forEach(a=>{mu(s.$state,a)})},s.$hydrate=({runHooks:a=!0}={})=>{o.forEach(c=>{const{beforeRestore:l,afterRestore:u}=c;a&&(l==null||l(t)),gu(s,c),a&&(u==null||u(t))})},o.forEach(a=>{const{beforeRestore:c,afterRestore:l}=a;c==null||c(t),gu(s,a),l==null||l(t),s.$subscribe((u,h)=>{mu(h,a)},{detached:!0})})}}var ky=Ny();const My="modulepreload",Ly=function(e){return"/"+e},_u={},An=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link");s=Promise.all(n.map(o=>{if(o=Ly(o),o in _u)return;_u[o]=!0;const a=o.endsWith(".css"),c=a?'[rel="stylesheet"]':"";if(!!r)for(let h=i.length-1;h>=0;h--){const d=i[h];if(d.href===o&&(!a||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${c}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":My,a||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),a)return new Promise((h,d)=>{u.addEventListener("load",h),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${o}`)))})}))}return s.then(()=>t()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const nr=typeof window<"u";function Fy(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const ht=Object.assign;function No(e,t){const n={};for(const r in t){const s=t[r];n[r]=Ee(s)?s.map(e):e(s)}return n}const Gr=()=>{},Ee=Array.isArray,$y=/\/$/,By=e=>e.replace($y,"");function ko(e,t,n="/"){let r,s={},i="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),i=t.slice(c+1,a>-1?a:t.length),s=e(i)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=zy(r??t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function Uy(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function yu(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function jy(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&mr(t.matched[r],n.matched[s])&&sd(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function mr(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function sd(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!qy(e[n],t[n]))return!1;return!0}function qy(e,t){return Ee(e)?vu(e,t):Ee(t)?vu(t,e):e===t}function vu(e,t){return Ee(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function zy(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var as;(function(e){e.pop="pop",e.push="push"})(as||(as={}));var Wr;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Wr||(Wr={}));function Hy(e){if(!e)if(nr){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),By(e)}const Ky=/^[^#]+#/;function Gy(e,t){return e.replace(Ky,"#")+t}function Wy(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Wi=()=>({left:window.pageXOffset,top:window.pageYOffset});function Qy(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=Wy(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Eu(e,t){return(history.state?history.state.position-t:-1)+e}const wa=new Map;function Yy(e,t){wa.set(e,t)}function Jy(e){const t=wa.get(e);return wa.delete(e),t}let Xy=()=>location.protocol+"//"+location.host;function id(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let a=s.includes(e.slice(i))?e.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),yu(c,"")}return yu(n,e)+r+s}function Zy(e,t,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const g=id(e,location),T=n.value,S=t.value;let I=0;if(d){if(n.value=g,t.value=d,o&&o===T){o=null;return}I=S?d.position-S.position:0}else r(g);s.forEach(O=>{O(n.value,T,{delta:I,type:as.pop,direction:I?I>0?Wr.forward:Wr.back:Wr.unknown})})};function c(){o=n.value}function l(d){s.push(d);const g=()=>{const T=s.indexOf(d);T>-1&&s.splice(T,1)};return i.push(g),g}function u(){const{history:d}=window;d.state&&d.replaceState(ht({},d.state,{scroll:Wi()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function wu(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?Wi():null}}function tv(e){const{history:t,location:n}=window,r={value:id(e,n)},s={value:t.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=e.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?e:e.slice(h))+c:Xy()+e+c;try{t[u?"replaceState":"pushState"](l,"",d),s.value=l}catch(g){console.error(g),n[u?"replace":"assign"](d)}}function o(c,l){const u=ht({},t.state,wu(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=ht({},s.value,t.state,{forward:c,scroll:Wi()});i(u.current,u,!0);const h=ht({},wu(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function ev(e){e=Hy(e);const t=tv(e),n=Zy(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ht({location:"",base:e,go:r,createHref:Gy.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function nv(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),ev(e)}function rv(e){return typeof e=="string"||e&&typeof e=="object"}function od(e){return typeof e=="string"||typeof e=="symbol"}const Ye={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ad=Symbol("");var Tu;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Tu||(Tu={}));function _r(e,t){return ht(new Error,{type:e,[ad]:!0},t)}function Ue(e,t){return e instanceof Error&&ad in e&&(t==null||!!(e.type&t))}const Iu="[^/]+?",sv={sensitive:!1,strict:!1,start:!0,end:!0},iv=/[.+*?^${}()[\]/\\]/g;function ov(e,t){const n=ht({},sv,t),r=[];let s=n.start?"^":"";const i=[];for(const l of e){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const d=l[h];let g=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(iv,"\\$&"),g+=40;else if(d.type===1){const{value:T,repeatable:S,optional:I,regexp:O}=d;i.push({name:T,repeatable:S,optional:I});const L=O||Iu;if(L!==Iu){g+=10;try{new RegExp(`(${L})`)}catch(W){throw new Error(`Invalid custom RegExp for param "${T}" (${L}): `+W.message)}}let $=S?`((?:${L})(?:/(?:${L}))*)`:`(${L})`;h||($=I&&l.length<2?`(?:/${$})`:"/"+$),I&&($+="?"),s+=$,g+=20,I&&(g+=-8),S&&(g+=-20),L===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const g=u[d]||"",T=i[d-1];h[T.name]=g&&T.repeatable?g.split("/"):g}return h}function c(l){let u="",h=!1;for(const d of e){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of d)if(g.type===0)u+=g.value;else if(g.type===1){const{value:T,repeatable:S,optional:I}=g,O=T in l?l[T]:"";if(Ee(O)&&!S)throw new Error(`Provided param "${T}" is an array but it is not repeatable (* or + modifiers)`);const L=Ee(O)?O.join("/"):O;if(!L)if(I)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${T}"`);u+=L}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function av(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function cv(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const i=av(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Au(r))return 1;if(Au(s))return-1}return s.length-r.length}function Au(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const lv={type:0,value:""},uv=/[a-zA-Z0-9_]/;function hv(e){if(!e)return[[]];if(e==="/")return[[lv]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:uv.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function fv(e,t,n){const r=ov(hv(e.path),n),s=ht(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function dv(e,t){const n=[],r=new Map;t=bu({strict:!1,end:!0,sensitive:!1},t);function s(u){return r.get(u)}function i(u,h,d){const g=!d,T=pv(u);T.aliasOf=d&&d.record;const S=bu(t,u),I=[T];if("alias"in u){const $=typeof u.alias=="string"?[u.alias]:u.alias;for(const W of $)I.push(ht({},T,{components:d?d.record.components:T.components,path:W,aliasOf:d?d.record:T}))}let O,L;for(const $ of I){const{path:W}=$;if(h&&W[0]!=="/"){const J=h.record.path,q=J[J.length-1]==="/"?"":"/";$.path=h.record.path+(W&&q+W)}if(O=fv($,h,S),d?d.alias.push(O):(L=L||O,L!==O&&L.alias.push(O),g&&u.name&&!Su(O)&&o(u.name)),T.children){const J=T.children;for(let q=0;q<J.length;q++)i(J[q],O,d&&d.children[q])}d=d||O,(O.record.components&&Object.keys(O.record.components).length||O.record.name||O.record.redirect)&&c(O)}return L?()=>{o(L)}:Gr}function o(u){if(od(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&cv(u,n[h])>=0&&(u.record.path!==n[h].record.path||!cd(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Su(u)&&r.set(u.record.name,u)}function l(u,h){let d,g={},T,S;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw _r(1,{location:u});S=d.record.name,g=ht(Ru(h.params,d.keys.filter(L=>!L.optional).map(L=>L.name)),u.params&&Ru(u.params,d.keys.map(L=>L.name))),T=d.stringify(g)}else if("path"in u)T=u.path,d=n.find(L=>L.re.test(T)),d&&(g=d.parse(T),S=d.record.name);else{if(d=h.name?r.get(h.name):n.find(L=>L.re.test(h.path)),!d)throw _r(1,{location:u,currentLocation:h});S=d.record.name,g=ht({},h.params,u.params),T=d.stringify(g)}const I=[];let O=d;for(;O;)I.unshift(O.record),O=O.parent;return{name:S,path:T,params:g,matched:I,meta:mv(I)}}return e.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Ru(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function pv(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:gv(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function gv(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Su(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function mv(e){return e.reduce((t,n)=>ht(t,n.meta),{})}function bu(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function cd(e,t){return t.children.some(n=>n===e||cd(e,n))}const ld=/#/g,_v=/&/g,yv=/\//g,vv=/=/g,Ev=/\?/g,ud=/\+/g,wv=/%5B/g,Tv=/%5D/g,hd=/%5E/g,Iv=/%60/g,fd=/%7B/g,Av=/%7C/g,dd=/%7D/g,Rv=/%20/g;function Ac(e){return encodeURI(""+e).replace(Av,"|").replace(wv,"[").replace(Tv,"]")}function Sv(e){return Ac(e).replace(fd,"{").replace(dd,"}").replace(hd,"^")}function Ta(e){return Ac(e).replace(ud,"%2B").replace(Rv,"+").replace(ld,"%23").replace(_v,"%26").replace(Iv,"`").replace(fd,"{").replace(dd,"}").replace(hd,"^")}function bv(e){return Ta(e).replace(vv,"%3D")}function Cv(e){return Ac(e).replace(ld,"%23").replace(Ev,"%3F")}function Pv(e){return e==null?"":Cv(e).replace(yv,"%2F")}function pi(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Dv(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(ud," "),o=i.indexOf("="),a=pi(o<0?i:i.slice(0,o)),c=o<0?null:pi(i.slice(o+1));if(a in t){let l=t[a];Ee(l)||(l=t[a]=[l]),l.push(c)}else t[a]=c}return t}function Cu(e){let t="";for(let n in e){const r=e[n];if(n=bv(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Ee(r)?r.map(i=>i&&Ta(i)):[r&&Ta(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Vv(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Ee(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const xv=Symbol(""),Pu=Symbol(""),Rc=Symbol(""),pd=Symbol(""),Ia=Symbol("");function Nr(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function en(e,t,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(_r(4,{from:n,to:t})):h instanceof Error?a(h):rv(h)?a(_r(2,{from:t,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=e.call(r&&r.instances[s],t,n,c);let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Mo(e,t,n,r){const s=[];for(const i of e)for(const o in i.components){let a=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(Ov(a)){const l=(a.__vccOpts||a)[t];l&&s.push(en(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=Fy(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[t];return d&&en(d,n,r,i,o)()}))}}return s}function Ov(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Du(e){const t=Oe(Rc),n=Oe(pd),r=Zt(()=>t.resolve(an(e.to))),s=Zt(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(mr.bind(null,u));if(d>-1)return d;const g=Vu(c[l-2]);return l>1&&Vu(u)===g&&h[h.length-1].path!==g?h.findIndex(mr.bind(null,c[l-2])):d}),i=Zt(()=>s.value>-1&&Lv(n.params,r.value.params)),o=Zt(()=>s.value>-1&&s.value===n.matched.length-1&&sd(n.params,r.value.params));function a(c={}){return Mv(c)?t[an(e.replace)?"replace":"push"](an(e.to)).catch(Gr):Promise.resolve()}return{route:r,href:Zt(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const Nv=kf({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Du,setup(e,{slots:t}){const n=Ts(Du(e)),{options:r}=Oe(Rc),s=Zt(()=>({[xu(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[xu(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Xf("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),kv=Nv;function Mv(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Lv(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Ee(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Vu(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const xu=(e,t,n)=>e??t??n,Fv=kf({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Oe(Ia),s=Zt(()=>e.route||r.value),i=Oe(Pu,0),o=Zt(()=>{let l=an(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=Zt(()=>s.value.matched[o.value]);si(Pu,Zt(()=>o.value+1)),si(xv,a),si(Ia,s);const c=gc();return qr(()=>[c.value,a.value,e.name],([l,u,h],[d,g,T])=>{u&&(u.instances[h]=l,g&&g!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!mr(u,g)||!d)&&(u.enterCallbacks[h]||[]).forEach(S=>S(l))},{flush:"post"}),()=>{const l=s.value,u=e.name,h=a.value,d=h&&h.components[u];if(!d)return Ou(n.default,{Component:d,route:l});const g=h.props[u],T=g?g===!0?l.params:typeof g=="function"?g(l):g:null,I=Xf(d,ht({},T,t,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Ou(n.default,{Component:I,route:l})||I}}});function Ou(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const $v=Fv;function Bv(e){const t=dv(e.routes,e),n=e.parseQuery||Dv,r=e.stringifyQuery||Cu,s=e.history,i=Nr(),o=Nr(),a=Nr(),c=Dm(Ye);let l=Ye;nr&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=No.bind(null,y=>""+y),h=No.bind(null,Pv),d=No.bind(null,pi);function g(y,N){let V,M;return od(y)?(V=t.getRecordMatcher(y),M=N):M=y,t.addRoute(M,V)}function T(y){const N=t.getRecordMatcher(y);N&&t.removeRoute(N)}function S(){return t.getRoutes().map(y=>y.record)}function I(y){return!!t.getRecordMatcher(y)}function O(y,N){if(N=ht({},N||c.value),typeof y=="string"){const p=ko(n,y,N.path),m=t.resolve({path:p.path},N),v=s.createHref(p.fullPath);return ht(p,m,{params:d(m.params),hash:pi(p.hash),redirectedFrom:void 0,href:v})}let V;if("path"in y)V=ht({},y,{path:ko(n,y.path,N.path).path});else{const p=ht({},y.params);for(const m in p)p[m]==null&&delete p[m];V=ht({},y,{params:h(p)}),N.params=h(N.params)}const M=t.resolve(V,N),lt=y.hash||"";M.params=u(d(M.params));const vt=Uy(r,ht({},y,{hash:Sv(lt),path:M.path})),f=s.createHref(vt);return ht({fullPath:vt,hash:lt,query:r===Cu?Vv(y.query):y.query||{}},M,{redirectedFrom:void 0,href:f})}function L(y){return typeof y=="string"?ko(n,y,c.value.path):ht({},y)}function $(y,N){if(l!==y)return _r(8,{from:N,to:y})}function W(y){return gt(y)}function J(y){return W(ht(L(y),{replace:!0}))}function q(y){const N=y.matched[y.matched.length-1];if(N&&N.redirect){const{redirect:V}=N;let M=typeof V=="function"?V(y):V;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=L(M):{path:M},M.params={}),ht({query:y.query,hash:y.hash,params:"path"in M?{}:y.params},M)}}function gt(y,N){const V=l=O(y),M=c.value,lt=y.state,vt=y.force,f=y.replace===!0,p=q(V);if(p)return gt(ht(L(p),{state:typeof p=="object"?ht({},lt,p.state):lt,force:vt,replace:f}),N||V);const m=V;m.redirectedFrom=N;let v;return!vt&&jy(r,M,V)&&(v=_r(16,{to:m,from:M}),Te(M,M,!0,!1)),(v?Promise.resolve(v):yt(m,M)).catch(_=>Ue(_)?Ue(_,2)?_:We(_):ct(_,m,M)).then(_=>{if(_){if(Ue(_,2))return gt(ht({replace:f},L(_.to),{state:typeof _.to=="object"?ht({},lt,_.to.state):lt,force:vt}),N||m)}else _=ce(m,M,!0,f,lt);return qt(m,M,_),_})}function X(y,N){const V=$(y,N);return V?Promise.reject(V):Promise.resolve()}function tt(y){const N=Yn.values().next().value;return N&&typeof N.runWithContext=="function"?N.runWithContext(y):y()}function yt(y,N){let V;const[M,lt,vt]=Uv(y,N);V=Mo(M.reverse(),"beforeRouteLeave",y,N);for(const p of M)p.leaveGuards.forEach(m=>{V.push(en(m,y,N))});const f=X.bind(null,y,N);return V.push(f),zt(V).then(()=>{V=[];for(const p of i.list())V.push(en(p,y,N));return V.push(f),zt(V)}).then(()=>{V=Mo(lt,"beforeRouteUpdate",y,N);for(const p of lt)p.updateGuards.forEach(m=>{V.push(en(m,y,N))});return V.push(f),zt(V)}).then(()=>{V=[];for(const p of vt)if(p.beforeEnter)if(Ee(p.beforeEnter))for(const m of p.beforeEnter)V.push(en(m,y,N));else V.push(en(p.beforeEnter,y,N));return V.push(f),zt(V)}).then(()=>(y.matched.forEach(p=>p.enterCallbacks={}),V=Mo(vt,"beforeRouteEnter",y,N),V.push(f),zt(V))).then(()=>{V=[];for(const p of o.list())V.push(en(p,y,N));return V.push(f),zt(V)}).catch(p=>Ue(p,8)?p:Promise.reject(p))}function qt(y,N,V){a.list().forEach(M=>tt(()=>M(y,N,V)))}function ce(y,N,V,M,lt){const vt=$(y,N);if(vt)return vt;const f=N===Ye,p=nr?history.state:{};V&&(M||f?s.replace(y.fullPath,ht({scroll:f&&p&&p.scroll},lt)):s.push(y.fullPath,lt)),c.value=y,Te(y,N,V,f),We()}let de;function wn(){de||(de=s.listen((y,N,V)=>{if(!Fs.listening)return;const M=O(y),lt=q(M);if(lt){gt(ht(lt,{replace:!0}),M).catch(Gr);return}l=M;const vt=c.value;nr&&Yy(Eu(vt.fullPath,V.delta),Wi()),yt(M,vt).catch(f=>Ue(f,12)?f:Ue(f,2)?(gt(f.to,M).then(p=>{Ue(p,20)&&!V.delta&&V.type===as.pop&&s.go(-1,!1)}).catch(Gr),Promise.reject()):(V.delta&&s.go(-V.delta,!1),ct(f,M,vt))).then(f=>{f=f||ce(M,vt,!1),f&&(V.delta&&!Ue(f,8)?s.go(-V.delta,!1):V.type===as.pop&&Ue(f,20)&&s.go(-1,!1)),qt(M,vt,f)}).catch(Gr)}))}let pe=Nr(),at=Nr(),dt;function ct(y,N,V){We(y);const M=at.list();return M.length?M.forEach(lt=>lt(y,N,V)):console.error(y),Promise.reject(y)}function Be(){return dt&&c.value!==Ye?Promise.resolve():new Promise((y,N)=>{pe.add([y,N])})}function We(y){return dt||(dt=!y,wn(),pe.list().forEach(([N,V])=>y?V(y):N()),pe.reset()),y}function Te(y,N,V,M){const{scrollBehavior:lt}=e;if(!nr||!lt)return Promise.resolve();const vt=!V&&Jy(Eu(y.fullPath,0))||(M||!V)&&history.state&&history.state.scroll||null;return _c().then(()=>lt(y,N,vt)).then(f=>f&&Qy(f)).catch(f=>ct(f,y,N))}const re=y=>s.go(y);let Qn;const Yn=new Set,Fs={currentRoute:c,listening:!0,addRoute:g,removeRoute:T,hasRoute:I,getRoutes:S,resolve:O,options:e,push:W,replace:J,go:re,back:()=>re(-1),forward:()=>re(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:at.add,isReady:Be,install(y){const N=this;y.component("RouterLink",kv),y.component("RouterView",$v),y.config.globalProperties.$router=N,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>an(c)}),nr&&!Qn&&c.value===Ye&&(Qn=!0,W(s.location).catch(lt=>{}));const V={};for(const lt in Ye)Object.defineProperty(V,lt,{get:()=>c.value[lt],enumerable:!0});y.provide(Rc,N),y.provide(pd,vf(V)),y.provide(Ia,c);const M=y.unmount;Yn.add(y),y.unmount=function(){Yn.delete(y),Yn.size<1&&(l=Ye,de&&de(),de=null,c.value=Ye,Qn=!1,dt=!1),M()}}};function zt(y){return y.reduce((N,V)=>N.then(()=>tt(V)),Promise.resolve())}return Fs}function Uv(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const a=t.matched[o];a&&(e.matched.find(l=>mr(l,a))?r.push(a):n.push(a));const c=e.matched[o];c&&(t.matched.find(l=>mr(l,c))||s.push(c))}return[n,r,s]}var Nu={};/**
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
 */const gd=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},jv=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},md={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,a=o?e[s+1]:0,c=s+2<e.length,l=c?e[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(d=64)),r.push(n[u],n[h],n[d],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(gd(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):jv(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const l=s<e.length?n[e.charAt(s)]:64;++s;const h=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new qv;const d=i<<2|a>>4;if(r.push(d),l!==64){const g=a<<4&240|l>>2;if(r.push(g),h!==64){const T=l<<6&192|h;r.push(T)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class qv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const zv=function(e){const t=gd(e);return md.encodeByteArray(t,!0)},gi=function(e){return zv(e).replace(/\./g,"")},Hv=function(e){try{return md.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Kv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Gv=()=>Kv().__FIREBASE_DEFAULTS__,Wv=()=>{if(typeof process>"u"||typeof Nu>"u")return;const e=Nu.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Qv=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Hv(e[1]);return t&&JSON.parse(t)},Sc=()=>{try{return Gv()||Wv()||Qv()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Yv=e=>{var t,n;return(n=(t=Sc())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Jv=e=>{const t=Yv(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},_d=()=>{var e;return(e=Sc())===null||e===void 0?void 0:e.config};/**
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
 */class Xv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function Zv(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[gi(JSON.stringify(n)),gi(JSON.stringify(o)),""].join(".")}/**
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
 */function mi(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function tE(){var e;const t=(e=Sc())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function eE(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function nE(){return!tE()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function bc(){try{return typeof indexedDB=="object"}catch{return!1}}function yd(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}function rE(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const sE="FirebaseError";class yn extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=sE,Object.setPrototypeOf(this,yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qi.prototype.create)}}class Qi{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?iE(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new yn(s,a,r)}}function iE(e,t){return e.replace(oE,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const oE=/\{\$([^}]+)}/g;function _i(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(ku(i)&&ku(o)){if(!_i(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ku(e){return e!==null&&typeof e=="object"}/**
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
 */const aE=1e3,cE=2,lE=4*60*60*1e3,uE=.5;function Mu(e,t=aE,n=cE){const r=t*Math.pow(n,e),s=Math.round(uE*r*(Math.random()-.5)*2);return Math.min(lE,r+s)}/**
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
 */function Cc(e){return e&&e._delegate?e._delegate:e}class He{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */class hE{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Xv;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(dE(t))try{this.getOrInitializeService({instanceIdentifier:Rn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=Rn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Rn){return this.instances.has(t)}getOptions(t=Rn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:fE(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Rn){return this.component?this.component.multipleInstances?t:Rn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function fE(e){return e===Rn?void 0:e}function dE(e){return e.instantiationMode==="EAGER"}/**
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
 */class pE{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new hE(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var rt;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(rt||(rt={}));const gE={debug:rt.DEBUG,verbose:rt.VERBOSE,info:rt.INFO,warn:rt.WARN,error:rt.ERROR,silent:rt.SILENT},mE=rt.INFO,_E={[rt.DEBUG]:"log",[rt.VERBOSE]:"log",[rt.INFO]:"info",[rt.WARN]:"warn",[rt.ERROR]:"error"},yE=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=_E[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Pc{constructor(t){this.name=t,this._logLevel=mE,this._logHandler=yE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in rt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?gE[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,rt.DEBUG,...t),this._logHandler(this,rt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,rt.VERBOSE,...t),this._logHandler(this,rt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,rt.INFO,...t),this._logHandler(this,rt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,rt.WARN,...t),this._logHandler(this,rt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,rt.ERROR,...t),this._logHandler(this,rt.ERROR,...t)}}const vE=(e,t)=>t.some(n=>e instanceof n);let Lu,Fu;function EE(){return Lu||(Lu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wE(){return Fu||(Fu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vd=new WeakMap,Aa=new WeakMap,Ed=new WeakMap,Lo=new WeakMap,Dc=new WeakMap;function TE(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(ln(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&vd.set(n,e)}).catch(()=>{}),Dc.set(t,e),t}function IE(e){if(Aa.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});Aa.set(e,t)}let Ra={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Aa.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Ed.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ln(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function AE(e){Ra=e(Ra)}function RE(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Fo(this),t,...n);return Ed.set(r,t.sort?t.sort():[t]),ln(r)}:wE().includes(e)?function(...t){return e.apply(Fo(this),t),ln(vd.get(this))}:function(...t){return ln(e.apply(Fo(this),t))}}function SE(e){return typeof e=="function"?RE(e):(e instanceof IDBTransaction&&IE(e),vE(e,EE())?new Proxy(e,Ra):e)}function ln(e){if(e instanceof IDBRequest)return TE(e);if(Lo.has(e))return Lo.get(e);const t=SE(e);return t!==e&&(Lo.set(e,t),Dc.set(t,e)),t}const Fo=e=>Dc.get(e);function bE(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=ln(o);return r&&o.addEventListener("upgradeneeded",c=>{r(ln(o.result),c.oldVersion,c.newVersion,ln(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const CE=["get","getKey","getAll","getAllKeys","count"],PE=["put","add","delete","clear"],$o=new Map;function $u(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if($o.get(t))return $o.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=PE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||CE.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return $o.set(t,i),i}AE(e=>({...e,get:(t,n,r)=>$u(t,n)||e.get(t,n,r),has:(t,n)=>!!$u(t,n)||e.has(t,n)}));/**
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
 */class DE{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(VE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function VE(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Sa="@firebase/app",Bu="0.9.26";/**
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
 */const Bn=new Pc("@firebase/app"),xE="@firebase/app-compat",OE="@firebase/analytics-compat",NE="@firebase/analytics",kE="@firebase/app-check-compat",ME="@firebase/app-check",LE="@firebase/auth",FE="@firebase/auth-compat",$E="@firebase/database",BE="@firebase/database-compat",UE="@firebase/functions",jE="@firebase/functions-compat",qE="@firebase/installations",zE="@firebase/installations-compat",HE="@firebase/messaging",KE="@firebase/messaging-compat",GE="@firebase/performance",WE="@firebase/performance-compat",QE="@firebase/remote-config",YE="@firebase/remote-config-compat",JE="@firebase/storage",XE="@firebase/storage-compat",ZE="@firebase/firestore",tw="@firebase/firestore-compat",ew="firebase",nw="10.7.2";/**
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
 */const ba="[DEFAULT]",rw={[Sa]:"fire-core",[xE]:"fire-core-compat",[NE]:"fire-analytics",[OE]:"fire-analytics-compat",[ME]:"fire-app-check",[kE]:"fire-app-check-compat",[LE]:"fire-auth",[FE]:"fire-auth-compat",[$E]:"fire-rtdb",[BE]:"fire-rtdb-compat",[UE]:"fire-fn",[jE]:"fire-fn-compat",[qE]:"fire-iid",[zE]:"fire-iid-compat",[HE]:"fire-fcm",[KE]:"fire-fcm-compat",[GE]:"fire-perf",[WE]:"fire-perf-compat",[QE]:"fire-rc",[YE]:"fire-rc-compat",[JE]:"fire-gcs",[XE]:"fire-gcs-compat",[ZE]:"fire-fst",[tw]:"fire-fst-compat","fire-js":"fire-js",[ew]:"fire-js-all"};/**
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
 */const yi=new Map,Ca=new Map;function sw(e,t){try{e.container.addComponent(t)}catch(n){Bn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function pn(e){const t=e.name;if(Ca.has(t))return Bn.debug(`There were multiple attempts to register component ${t}.`),!1;Ca.set(t,e);for(const n of yi.values())sw(n,e);return!0}function As(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const iw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},un=new Qi("app","Firebase",iw);/**
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
 */class ow{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new He("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw un.create("app-deleted",{appName:this._name})}}/**
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
 */const aw=nw;function wd(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ba,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw un.create("bad-app-name",{appName:String(s)});if(n||(n=_d()),!n)throw un.create("no-options");const i=yi.get(s);if(i){if(_i(n,i.options)&&_i(r,i.config))return i;throw un.create("duplicate-app",{appName:s})}const o=new pE(s);for(const c of Ca.values())o.addComponent(c);const a=new ow(n,r,o);return yi.set(s,a),a}function Td(e=ba){const t=yi.get(e);if(!t&&e===ba&&_d())return wd();if(!t)throw un.create("no-app",{appName:e});return t}function Ne(e,t,n){var r;let s=(r=rw[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${t}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Bn.warn(a.join(" "));return}pn(new He(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const cw="firebase-heartbeat-database",lw=1,cs="firebase-heartbeat-store";let Bo=null;function Id(){return Bo||(Bo=bE(cw,lw,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(cs)}catch(n){console.warn(n)}}}}).catch(e=>{throw un.create("idb-open",{originalErrorMessage:e.message})})),Bo}async function uw(e){try{return await(await Id()).transaction(cs).objectStore(cs).get(Ad(e))}catch(t){if(t instanceof yn)Bn.warn(t.message);else{const n=un.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Bn.warn(n.message)}}}async function Uu(e,t){try{const r=(await Id()).transaction(cs,"readwrite");await r.objectStore(cs).put(t,Ad(e)),await r.done}catch(n){if(n instanceof yn)Bn.warn(n.message);else{const r=un.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Bn.warn(r.message)}}}function Ad(e){return`${e.name}!${e.options.appId}`}/**
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
 */const hw=1024,fw=30*24*60*60*1e3;class dw{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new gw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ju();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=fw}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ju(),{heartbeatsToSend:r,unsentEntries:s}=pw(this._heartbeatsCache.heartbeats),i=gi(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ju(){return new Date().toISOString().substring(0,10)}function pw(e,t=hw){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),qu(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),qu(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class gw{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bc()?yd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await uw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Uu(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Uu(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function qu(e){return gi(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function mw(e){pn(new He("platform-logger",t=>new DE(t),"PRIVATE")),pn(new He("heartbeat",t=>new dw(t),"PRIVATE")),Ne(Sa,Bu,e),Ne(Sa,Bu,"esm2017"),Ne("fire-js","")}mw("");var _w="firebase",yw="10.7.2";/**
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
 */Ne(_w,yw,"app");const vw=(e,t)=>t.some(n=>e instanceof n);let zu,Hu;function Ew(){return zu||(zu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ww(){return Hu||(Hu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Rd=new WeakMap,Pa=new WeakMap,Sd=new WeakMap,Uo=new WeakMap,Vc=new WeakMap;function Tw(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(hn(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Rd.set(n,e)}).catch(()=>{}),Vc.set(t,e),t}function Iw(e){if(Pa.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});Pa.set(e,t)}let Da={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Pa.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Sd.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return hn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Aw(e){Da=e(Da)}function Rw(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(jo(this),t,...n);return Sd.set(r,t.sort?t.sort():[t]),hn(r)}:ww().includes(e)?function(...t){return e.apply(jo(this),t),hn(Rd.get(this))}:function(...t){return hn(e.apply(jo(this),t))}}function Sw(e){return typeof e=="function"?Rw(e):(e instanceof IDBTransaction&&Iw(e),vw(e,Ew())?new Proxy(e,Da):e)}function hn(e){if(e instanceof IDBRequest)return Tw(e);if(Uo.has(e))return Uo.get(e);const t=Sw(e);return t!==e&&(Uo.set(e,t),Vc.set(t,e)),t}const jo=e=>Vc.get(e);function bw(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=hn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(hn(o.result),c.oldVersion,c.newVersion,hn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const Cw=["get","getKey","getAll","getAllKeys","count"],Pw=["put","add","delete","clear"],qo=new Map;function Ku(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(qo.get(t))return qo.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=Pw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Cw.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return qo.set(t,i),i}Aw(e=>({...e,get:(t,n,r)=>Ku(t,n)||e.get(t,n,r),has:(t,n)=>!!Ku(t,n)||e.has(t,n)}));const bd="@firebase/installations",xc="0.6.4";/**
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
 */const Cd=1e4,Pd=`w:${xc}`,Dd="FIS_v2",Dw="https://firebaseinstallations.googleapis.com/v1",Vw=60*60*1e3,xw="installations",Ow="Installations";/**
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
 */const Nw={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Un=new Qi(xw,Ow,Nw);function Vd(e){return e instanceof yn&&e.code.includes("request-failed")}/**
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
 */function xd({projectId:e}){return`${Dw}/projects/${e}/installations`}function Od(e){return{token:e.token,requestStatus:2,expiresIn:Mw(e.expiresIn),creationTime:Date.now()}}async function Nd(e,t){const r=(await t.json()).error;return Un.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function kd({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function kw(e,{refreshToken:t}){const n=kd(e);return n.append("Authorization",Lw(t)),n}async function Md(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Mw(e){return Number(e.replace("s","000"))}function Lw(e){return`${Dd} ${e}`}/**
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
 */async function Fw({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=xd(e),s=kd(e),i=t.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:n,authVersion:Dd,appId:e.appId,sdkVersion:Pd},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await Md(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Od(l.authToken)}}else throw await Nd("Create Installation",c)}/**
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
 */function Ld(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function $w(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Bw=/^[cdef][\w-]{21}$/,Va="";function Uw(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=jw(e);return Bw.test(n)?n:Va}catch{return Va}}function jw(e){return $w(e).substr(0,22)}/**
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
 */const Fd=new Map;function $d(e,t){const n=Yi(e);Bd(n,t),qw(n,t)}function Bd(e,t){const n=Fd.get(e);if(n)for(const r of n)r(t)}function qw(e,t){const n=zw();n&&n.postMessage({key:e,fid:t}),Hw()}let Dn=null;function zw(){return!Dn&&"BroadcastChannel"in self&&(Dn=new BroadcastChannel("[Firebase] FID Change"),Dn.onmessage=e=>{Bd(e.data.key,e.data.fid)}),Dn}function Hw(){Fd.size===0&&Dn&&(Dn.close(),Dn=null)}/**
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
 */const Kw="firebase-installations-database",Gw=1,jn="firebase-installations-store";let zo=null;function Oc(){return zo||(zo=bw(Kw,Gw,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(jn)}}})),zo}async function vi(e,t){const n=Yi(e),s=(await Oc()).transaction(jn,"readwrite"),i=s.objectStore(jn),o=await i.get(n);return await i.put(t,n),await s.done,(!o||o.fid!==t.fid)&&$d(e,t.fid),t}async function Ud(e){const t=Yi(e),r=(await Oc()).transaction(jn,"readwrite");await r.objectStore(jn).delete(t),await r.done}async function Ji(e,t){const n=Yi(e),s=(await Oc()).transaction(jn,"readwrite"),i=s.objectStore(jn),o=await i.get(n),a=t(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&$d(e,a.fid),a}/**
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
 */async function Nc(e){let t;const n=await Ji(e.appConfig,r=>{const s=Ww(r),i=Qw(e,s);return t=i.registrationPromise,i.installationEntry});return n.fid===Va?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Ww(e){const t=e||{fid:Uw(),registrationStatus:0};return jd(t)}function Qw(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Un.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=Yw(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Jw(e)}:{installationEntry:t}}async function Yw(e,t){try{const n=await Fw(e,t);return vi(e.appConfig,n)}catch(n){throw Vd(n)&&n.customData.serverCode===409?await Ud(e.appConfig):await vi(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Jw(e){let t=await Gu(e.appConfig);for(;t.registrationStatus===1;)await Ld(100),t=await Gu(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Nc(e);return r||n}return t}function Gu(e){return Ji(e,t=>{if(!t)throw Un.create("installation-not-found");return jd(t)})}function jd(e){return Xw(e)?{fid:e.fid,registrationStatus:0}:e}function Xw(e){return e.registrationStatus===1&&e.registrationTime+Cd<Date.now()}/**
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
 */async function Zw({appConfig:e,heartbeatServiceProvider:t},n){const r=tT(e,n),s=kw(e,n),i=t.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:Pd,appId:e.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await Md(()=>fetch(r,a));if(c.ok){const l=await c.json();return Od(l)}else throw await Nd("Generate Auth Token",c)}function tT(e,{fid:t}){return`${xd(e)}/${t}/authTokens:generate`}/**
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
 */async function kc(e,t=!1){let n;const r=await Ji(e.appConfig,i=>{if(!qd(i))throw Un.create("not-registered");const o=i.authToken;if(!t&&rT(o))return i;if(o.requestStatus===1)return n=eT(e,t),i;{if(!navigator.onLine)throw Un.create("app-offline");const a=iT(i);return n=nT(e,a),a}});return n?await n:r.authToken}async function eT(e,t){let n=await Wu(e.appConfig);for(;n.authToken.requestStatus===1;)await Ld(100),n=await Wu(e.appConfig);const r=n.authToken;return r.requestStatus===0?kc(e,t):r}function Wu(e){return Ji(e,t=>{if(!qd(t))throw Un.create("not-registered");const n=t.authToken;return oT(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function nT(e,t){try{const n=await Zw(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await vi(e.appConfig,r),n}catch(n){if(Vd(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Ud(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await vi(e.appConfig,r)}throw n}}function qd(e){return e!==void 0&&e.registrationStatus===2}function rT(e){return e.requestStatus===2&&!sT(e)}function sT(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Vw}function iT(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function oT(e){return e.requestStatus===1&&e.requestTime+Cd<Date.now()}/**
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
 */async function aT(e){const t=e,{installationEntry:n,registrationPromise:r}=await Nc(t);return r?r.catch(console.error):kc(t).catch(console.error),n.fid}/**
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
 */async function cT(e,t=!1){const n=e;return await lT(n),(await kc(n,t)).token}async function lT(e){const{registrationPromise:t}=await Nc(e);t&&await t}/**
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
 */function uT(e){if(!e||!e.options)throw Ho("App Configuration");if(!e.name)throw Ho("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Ho(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Ho(e){return Un.create("missing-app-config-values",{valueName:e})}/**
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
 */const zd="installations",hT="installations-internal",fT=e=>{const t=e.getProvider("app").getImmediate(),n=uT(t),r=As(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},dT=e=>{const t=e.getProvider("app").getImmediate(),n=As(t,zd).getImmediate();return{getId:()=>aT(n),getToken:s=>cT(n,s)}};function pT(){pn(new He(zd,fT,"PUBLIC")),pn(new He(hT,dT,"PRIVATE"))}pT();Ne(bd,xc);Ne(bd,xc,"esm2017");/**
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
 */const Ei="analytics",gT="firebase_id",mT="origin",_T=60*1e3,yT="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Mc="https://www.googletagmanager.com/gtag/js";/**
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
 */const ie=new Pc("@firebase/analytics");/**
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
 */const vT={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},he=new Qi("analytics","Analytics",vT);/**
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
 */function ET(e){if(!e.startsWith(Mc)){const t=he.create("invalid-gtag-resource",{gtagURL:e});return ie.warn(t.message),""}return e}function Hd(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function wT(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function TT(e,t){const n=wT("firebase-js-sdk-policy",{createScriptURL:ET}),r=document.createElement("script"),s=`${Mc}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function IT(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function AT(e,t,n,r,s,i){const o=r[s];try{if(o)await t[o];else{const c=(await Hd(n)).find(l=>l.measurementId===s);c&&await t[c.appId]}}catch(a){ie.error(a)}e("config",s,i)}async function RT(e,t,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await Hd(n);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&t[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(t)),await Promise.all(i),e("event",r,s||{})}catch(i){ie.error(i)}}function ST(e,t,n,r){async function s(i,...o){try{if(i==="event"){const[a,c]=o;await RT(e,t,n,a,c)}else if(i==="config"){const[a,c]=o;await AT(e,t,n,r,a,c)}else if(i==="consent"){const[a]=o;e("consent","update",a)}else if(i==="get"){const[a,c,l]=o;e("get",a,c,l)}else if(i==="set"){const[a]=o;e("set",a)}else e(i,...o)}catch(a){ie.error(a)}}return s}function bT(e,t,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=ST(i,e,t,n),{gtagCore:i,wrappedGtag:window[s]}}function CT(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Mc)&&n.src.includes(e))return n;return null}/**
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
 */const PT=30,DT=1e3;class VT{constructor(t={},n=DT){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Kd=new VT;function xT(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function OT(e){var t;const{appId:n,apiKey:r}=e,s={method:"GET",headers:xT(r)},i=yT.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((t=c.error)===null||t===void 0)&&t.message&&(a=c.error.message)}catch{}throw he.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function NT(e,t=Kd,n){const{appId:r,apiKey:s,measurementId:i}=e.options;if(!r)throw he.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw he.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new LT;return setTimeout(async()=>{a.abort()},n!==void 0?n:_T),Gd({appId:r,apiKey:s,measurementId:i},o,a,t)}async function Gd(e,{throttleEndTimeMillis:t,backoffCount:n},r,s=Kd){var i;const{appId:o,measurementId:a}=e;try{await kT(r,t)}catch(c){if(a)return ie.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await OT(e);return s.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!MT(l)){if(s.deleteThrottleMetadata(o),a)return ie.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((i=l==null?void 0:l.customData)===null||i===void 0?void 0:i.httpStatus)===503?Mu(n,s.intervalMillis,PT):Mu(n,s.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(o,h),ie.debug(`Calling attemptFetch again in ${u} millis`),Gd(e,h,r,s)}}function kT(e,t){return new Promise((n,r)=>{const s=Math.max(t-Date.now(),0),i=setTimeout(n,s);e.addEventListener(()=>{clearTimeout(i),r(he.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function MT(e){if(!(e instanceof yn)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class LT{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function FT(e,t,n,r,s){if(s&&s.global){e("event",n,r);return}else{const i=await t,o=Object.assign(Object.assign({},r),{send_to:i});e("event",n,o)}}/**
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
 */async function $T(){if(bc())try{await yd()}catch(e){return ie.warn(he.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return ie.warn(he.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function BT(e,t,n,r,s,i,o){var a;const c=NT(e);c.then(g=>{n[g.measurementId]=g.appId,e.options.measurementId&&g.measurementId!==e.options.measurementId&&ie.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>ie.error(g)),t.push(c);const l=$T().then(g=>{if(g)return r.getId()}),[u,h]=await Promise.all([c,l]);CT(i)||TT(i,u.measurementId),s("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[mT]="firebase",d.update=!0,h!=null&&(d[gT]=h),s("config",u.measurementId,d),u.measurementId}/**
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
 */class UT{constructor(t){this.app=t}_delete(){return delete Qr[this.app.options.appId],Promise.resolve()}}let Qr={},Qu=[];const Yu={};let Ko="dataLayer",jT="gtag",Ju,Wd,Xu=!1;function qT(){const e=[];if(eE()&&e.push("This is a browser extension environment."),rE()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=he.create("invalid-analytics-context",{errorInfo:t});ie.warn(n.message)}}function zT(e,t,n){qT();const r=e.options.appId;if(!r)throw he.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)ie.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw he.create("no-api-key");if(Qr[r]!=null)throw he.create("already-exists",{id:r});if(!Xu){IT(Ko);const{wrappedGtag:i,gtagCore:o}=bT(Qr,Qu,Yu,Ko,jT);Wd=i,Ju=o,Xu=!0}return Qr[r]=BT(e,Qu,Yu,t,Ju,Ko,n),new UT(e)}function HT(e=Td()){e=Cc(e);const t=As(e,Ei);return t.isInitialized()?t.getImmediate():KT(e)}function KT(e,t={}){const n=As(e,Ei);if(n.isInitialized()){const s=n.getImmediate();if(_i(t,n.getOptions()))return s;throw he.create("already-initialized")}return n.initialize({options:t})}function GT(e,t,n,r){e=Cc(e),FT(Wd,Qr[e.app.options.appId],t,n,r).catch(s=>ie.error(s))}const Zu="@firebase/analytics",th="0.10.0";function WT(){pn(new He(Ei,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return zT(r,s,n)},"PUBLIC")),pn(new He("analytics-internal",e,"PRIVATE")),Ne(Zu,th),Ne(Zu,th,"esm2017");function e(t){try{const n=t.getProvider(Ei).getImmediate();return{logEvent:(r,s,i)=>GT(n,r,s,i)}}catch(n){throw he.create("interop-component-reg-failed",{reason:n})}}}WT();var QT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},P,Lc=Lc||{},H=QT||self;function Xi(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Rs(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function YT(e){return Object.prototype.hasOwnProperty.call(e,Go)&&e[Go]||(e[Go]=++JT)}var Go="closure_uid_"+(1e9*Math.random()>>>0),JT=0;function XT(e,t,n){return e.call.apply(e.bind,arguments)}function ZT(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),e.apply(t,s)}}return function(){return e.apply(t,arguments)}}function Qt(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Qt=XT:Qt=ZT,Qt.apply(null,arguments)}function Hs(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function Mt(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[s].apply(r,o)}}function vn(){this.s=this.s,this.o=this.o}var tI=0;vn.prototype.s=!1;vn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),tI!=0)&&YT(this)};vn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Qd=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Fc(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function eh(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Xi(r)){const s=e.length||0,i=r.length||0;e.length=s+i;for(let o=0;o<i;o++)e[s+o]=r[o]}else e.push(r)}}function Yt(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Yt.prototype.h=function(){this.defaultPrevented=!0};var eI=function(){if(!H.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const n=()=>{};H.addEventListener("test",n,t),H.removeEventListener("test",n,t)}catch{}return e}();function ls(e){return/^[\s\xa0]*$/.test(e)}function Zi(){var e=H.navigator;return e&&(e=e.userAgent)?e:""}function Pe(e){return Zi().indexOf(e)!=-1}function $c(e){return $c[" "](e),e}$c[" "]=function(){};function nI(e,t){var n=WI;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var rI=Pe("Opera"),yr=Pe("Trident")||Pe("MSIE"),Yd=Pe("Edge"),xa=Yd||yr,Jd=Pe("Gecko")&&!(Zi().toLowerCase().indexOf("webkit")!=-1&&!Pe("Edge"))&&!(Pe("Trident")||Pe("MSIE"))&&!Pe("Edge"),sI=Zi().toLowerCase().indexOf("webkit")!=-1&&!Pe("Edge");function Xd(){var e=H.document;return e?e.documentMode:void 0}var Oa;t:{var Wo="",Qo=function(){var e=Zi();if(Jd)return/rv:([^\);]+)(\)|;)/.exec(e);if(Yd)return/Edge\/([\d\.]+)/.exec(e);if(yr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(sI)return/WebKit\/(\S+)/.exec(e);if(rI)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Qo&&(Wo=Qo?Qo[1]:""),yr){var Yo=Xd();if(Yo!=null&&Yo>parseFloat(Wo)){Oa=String(Yo);break t}}Oa=Wo}var Na;if(H.document&&yr){var nh=Xd();Na=nh||parseInt(Oa,10)||void 0}else Na=void 0;var iI=Na;function us(e,t){if(Yt.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Jd){t:{try{$c(t.nodeName);var s=!0;break t}catch{}s=!1}s||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:oI[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&us.$.h.call(this)}}Mt(us,Yt);var oI={2:"touch",3:"pen",4:"mouse"};us.prototype.h=function(){us.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Ss="closure_listenable_"+(1e6*Math.random()|0),aI=0;function cI(e,t,n,r,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=s,this.key=++aI,this.fa=this.ia=!1}function to(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Bc(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function lI(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function Zd(e){const t={};for(const n in e)t[n]=e[n];return t}const rh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function tp(e,t){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)e[n]=r[n];for(let i=0;i<rh.length;i++)n=rh[i],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function eo(e){this.src=e,this.g={},this.h=0}eo.prototype.add=function(e,t,n,r,s){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=Ma(e,t,r,s);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new cI(t,this.src,i,!!r,s),t.ia=n,e.push(t)),t};function ka(e,t){var n=t.type;if(n in e.g){var r=e.g[n],s=Qd(r,t),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(to(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Ma(e,t,n,r){for(var s=0;s<e.length;++s){var i=e[s];if(!i.fa&&i.listener==t&&i.capture==!!n&&i.la==r)return s}return-1}var Uc="closure_lm_"+(1e6*Math.random()|0),Jo={};function ep(e,t,n,r,s){if(r&&r.once)return rp(e,t,n,r,s);if(Array.isArray(t)){for(var i=0;i<t.length;i++)ep(e,t[i],n,r,s);return null}return n=zc(n),e&&e[Ss]?e.O(t,n,Rs(r)?!!r.capture:!!r,s):np(e,t,n,!1,r,s)}function np(e,t,n,r,s,i){if(!t)throw Error("Invalid event type");var o=Rs(s)?!!s.capture:!!s,a=qc(e);if(a||(e[Uc]=a=new eo(e)),n=a.add(t,n,r,o,i),n.proxy)return n;if(r=uI(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)eI||(s=o),s===void 0&&(s=!1),e.addEventListener(t.toString(),r,s);else if(e.attachEvent)e.attachEvent(ip(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function uI(){function e(n){return t.call(e.src,e.listener,n)}const t=hI;return e}function rp(e,t,n,r,s){if(Array.isArray(t)){for(var i=0;i<t.length;i++)rp(e,t[i],n,r,s);return null}return n=zc(n),e&&e[Ss]?e.P(t,n,Rs(r)?!!r.capture:!!r,s):np(e,t,n,!0,r,s)}function sp(e,t,n,r,s){if(Array.isArray(t))for(var i=0;i<t.length;i++)sp(e,t[i],n,r,s);else r=Rs(r)?!!r.capture:!!r,n=zc(n),e&&e[Ss]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=Ma(i,n,r,s),-1<n&&(to(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=qc(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Ma(t,n,r,s)),(n=-1<e?t[e]:null)&&jc(n))}function jc(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[Ss])ka(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(ip(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=qc(t))?(ka(n,e),n.h==0&&(n.src=null,t[Uc]=null)):to(e)}}}function ip(e){return e in Jo?Jo[e]:Jo[e]="on"+e}function hI(e,t){if(e.fa)e=!0;else{t=new us(t,this);var n=e.listener,r=e.la||e.src;e.ia&&jc(e),e=n.call(r,t)}return e}function qc(e){return e=e[Uc],e instanceof eo?e:null}var Xo="__closure_events_fn_"+(1e9*Math.random()>>>0);function zc(e){return typeof e=="function"?e:(e[Xo]||(e[Xo]=function(t){return e.handleEvent(t)}),e[Xo])}function kt(){vn.call(this),this.i=new eo(this),this.S=this,this.J=null}Mt(kt,vn);kt.prototype[Ss]=!0;kt.prototype.removeEventListener=function(e,t,n,r){sp(this,e,t,n,r)};function Bt(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new Yt(t,e);else if(t instanceof Yt)t.target=t.target||e;else{var s=t;t=new Yt(r,e),tp(t,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];s=Ks(o,r,!0,t)&&s}if(o=t.g=e,s=Ks(o,r,!0,t)&&s,s=Ks(o,r,!1,t)&&s,n)for(i=0;i<n.length;i++)o=t.g=n[i],s=Ks(o,r,!1,t)&&s}kt.prototype.N=function(){if(kt.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)to(n[r]);delete e.g[t],e.h--}}this.J=null};kt.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};kt.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function Ks(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&ka(e.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var Hc=H.JSON.stringify;class fI{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function dI(){var e=Kc;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class pI{constructor(){this.h=this.g=null}add(t,n){const r=op.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var op=new fI(()=>new gI,e=>e.reset());class gI{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function mI(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function _I(e){H.setTimeout(()=>{throw e},0)}let hs,fs=!1,Kc=new pI,ap=()=>{const e=H.Promise.resolve(void 0);hs=()=>{e.then(yI)}};var yI=()=>{for(var e;e=dI();){try{e.h.call(e.g)}catch(n){_I(n)}var t=op;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}fs=!1};function no(e,t){kt.call(this),this.h=e||1,this.g=t||H,this.j=Qt(this.qb,this),this.l=Date.now()}Mt(no,kt);P=no.prototype;P.ga=!1;P.T=null;P.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Bt(this,"tick"),this.ga&&(Gc(this),this.start()))}};P.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Gc(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}P.N=function(){no.$.N.call(this),Gc(this),delete this.g};function Wc(e,t,n){if(typeof e=="function")n&&(e=Qt(e,n));else if(e&&typeof e.handleEvent=="function")e=Qt(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:H.setTimeout(e,t||0)}function cp(e){e.g=Wc(()=>{e.g=null,e.i&&(e.i=!1,cp(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class vI extends vn{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:cp(this)}N(){super.N(),this.g&&(H.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ds(e){vn.call(this),this.h=e,this.g={}}Mt(ds,vn);var sh=[];function lp(e,t,n,r){Array.isArray(n)||(n&&(sh[0]=n.toString()),n=sh);for(var s=0;s<n.length;s++){var i=ep(t,n[s],r||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function up(e){Bc(e.g,function(t,n){this.g.hasOwnProperty(n)&&jc(t)},e),e.g={}}ds.prototype.N=function(){ds.$.N.call(this),up(this)};ds.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ro(){this.g=!0}ro.prototype.Ea=function(){this.g=!1};function EI(e,t,n,r,s,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+t+`
`+n+`
`+o})}function wI(e,t,n,r,s,i,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+t+`
`+n+`
`+i+" "+o})}function or(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+II(e,n)+(r?" "+r:"")})}function TI(e,t){e.info(function(){return"TIMEOUT: "+t})}ro.prototype.info=function(){};function II(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Hc(n)}catch{return t}}var Wn={},ih=null;function so(){return ih=ih||new kt}Wn.Ta="serverreachability";function hp(e){Yt.call(this,Wn.Ta,e)}Mt(hp,Yt);function ps(e){const t=so();Bt(t,new hp(t))}Wn.STAT_EVENT="statevent";function fp(e,t){Yt.call(this,Wn.STAT_EVENT,e),this.stat=t}Mt(fp,Yt);function ne(e){const t=so();Bt(t,new fp(t,e))}Wn.Ua="timingevent";function dp(e,t){Yt.call(this,Wn.Ua,e),this.size=t}Mt(dp,Yt);function bs(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return H.setTimeout(function(){e()},t)}var io={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},pp={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Qc(){}Qc.prototype.h=null;function oh(e){return e.h||(e.h=e.i())}function gp(){}var Cs={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Yc(){Yt.call(this,"d")}Mt(Yc,Yt);function Jc(){Yt.call(this,"c")}Mt(Jc,Yt);var La;function oo(){}Mt(oo,Qc);oo.prototype.g=function(){return new XMLHttpRequest};oo.prototype.i=function(){return{}};La=new oo;function Ps(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new ds(this),this.P=AI,e=xa?125:void 0,this.V=new no(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new mp}function mp(){this.i=null,this.g="",this.h=!1}var AI=45e3,_p={},Fa={};P=Ps.prototype;P.setTimeout=function(e){this.P=e};function $a(e,t,n){e.L=1,e.A=co(Ke(t)),e.u=n,e.S=!0,yp(e,null)}function yp(e,t){e.G=Date.now(),Ds(e),e.B=Ke(e.A);var n=e.B,r=e.W;Array.isArray(r)||(r=[String(r)]),Sp(n.i,"t",r),e.o=0,n=e.l.J,e.h=new mp,e.g=Gp(e.l,n?t:null,!e.u),0<e.O&&(e.M=new vI(Qt(e.Pa,e,e.g),e.O)),lp(e.U,e.g,"readystatechange",e.nb),t=e.I?Zd(e.I):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,t)):(e.v="GET",e.g.ha(e.B,e.v,null,t)),ps(),EI(e.j,e.v,e.B,e.m,e.W,e.u)}P.nb=function(e){e=e.target;const t=this.M;t&&Ve(e)==3?t.l():this.Pa(e)};P.Pa=function(e){try{if(e==this.g)t:{const u=Ve(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||xa||this.g&&(this.h.h||this.g.ja()||uh(this.g)))){this.J||u!=4||t==7||(t==8||0>=h?ps(3):ps(2)),ao(this);var n=this.g.da();this.ca=n;e:if(vp(this)){var r=uh(this.g);e="";var s=r.length,i=Ve(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Vn(this),Yr(this);var o="";break e}this.h.i=new H.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:i&&t==s-1});r.length=0,this.h.g+=e,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,wI(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ls(a)){var l=a;break e}}l=null}if(n=l)or(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ba(this,n);else{this.i=!1,this.s=3,ne(12),Vn(this),Yr(this);break t}}this.S?(Ep(this,u,o),xa&&this.i&&u==3&&(lp(this.U,this.V,"tick",this.mb),this.V.start())):(or(this.j,this.m,o,null),Ba(this,o)),u==4&&Vn(this),this.i&&!this.J&&(u==4?qp(this.l,this):(this.i=!1,Ds(this)))}else HI(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,ne(12)):(this.s=0,ne(13)),Vn(this),Yr(this)}}}catch{}finally{}};function vp(e){return e.g?e.v=="GET"&&e.L!=2&&e.l.Ha:!1}function Ep(e,t,n){let r=!0,s;for(;!e.J&&e.o<n.length;)if(s=RI(e,n),s==Fa){t==4&&(e.s=4,ne(14),r=!1),or(e.j,e.m,null,"[Incomplete Response]");break}else if(s==_p){e.s=4,ne(15),or(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else or(e.j,e.m,s,null),Ba(e,s);vp(e)&&e.o!=0&&(e.h.g=e.h.g.slice(e.o),e.o=0),t!=4||n.length!=0||e.h.h||(e.s=1,ne(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),rl(t),t.M=!0,ne(11))):(or(e.j,e.m,n,"[Invalid Chunked Response]"),Vn(e),Yr(e))}P.mb=function(){if(this.g){var e=Ve(this.g),t=this.g.ja();this.o<t.length&&(ao(this),Ep(this,e,t),this.i&&e!=4&&Ds(this))}};function RI(e,t){var n=e.o,r=t.indexOf(`
`,n);return r==-1?Fa:(n=Number(t.substring(n,r)),isNaN(n)?_p:(r+=1,r+n>t.length?Fa:(t=t.slice(r,r+n),e.o=r+n,t)))}P.cancel=function(){this.J=!0,Vn(this)};function Ds(e){e.Y=Date.now()+e.P,wp(e,e.P)}function wp(e,t){if(e.C!=null)throw Error("WatchDog timer not null");e.C=bs(Qt(e.lb,e),t)}function ao(e){e.C&&(H.clearTimeout(e.C),e.C=null)}P.lb=function(){this.C=null;const e=Date.now();0<=e-this.Y?(TI(this.j,this.B),this.L!=2&&(ps(),ne(17)),Vn(this),this.s=2,Yr(this)):wp(this,this.Y-e)};function Yr(e){e.l.H==0||e.J||qp(e.l,e)}function Vn(e){ao(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,Gc(e.V),up(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Ba(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||Ua(n.i,e))){if(!e.K&&Ua(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Ii(n),fo(n);else break t;nl(n),ne(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=bs(Qt(n.ib,n),6e3));if(1>=Pp(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else xn(n,11)}else if((e.K||n.g==e)&&Ii(n),!ls(t))for(s=n.Ja.g.parse(t),t=0;t<s.length;t++){let l=s[t];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=e.g;if(g){const T=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(T){var i=r.i;i.g||T.indexOf("spdy")==-1&&T.indexOf("quic")==-1&&T.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Xc(i,i.h),i.h=null))}if(r.F){const S=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;S&&(r.Da=S,_t(r.I,r.F,S))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=Kp(r,r.J?r.pa:null,r.Y),o.K){Dp(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.C&&(ao(a),Ds(a)),r.g=o}else Up(r);0<n.j.length&&po(n)}else l[0]!="stop"&&l[0]!="close"||xn(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?xn(n,7):el(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}ps(4)}catch{}}function SI(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Xi(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function bI(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Xi(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Tp(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Xi(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=bI(e),r=SI(e),s=r.length,i=0;i<s;i++)t.call(void 0,r[i],n&&n[i],e)}var Ip=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function CI(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),s=null;if(0<=r){var i=e[n].substring(0,r);s=e[n].substring(r+1)}else i=e[n];t(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Ln(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Ln){this.h=e.h,wi(this,e.j),this.s=e.s,this.g=e.g,Ti(this,e.m),this.l=e.l;var t=e.i,n=new gs;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),ah(this,n),this.o=e.o}else e&&(t=String(e).match(Ip))?(this.h=!1,wi(this,t[1]||"",!0),this.s=$r(t[2]||""),this.g=$r(t[3]||"",!0),Ti(this,t[4]),this.l=$r(t[5]||"",!0),ah(this,t[6]||"",!0),this.o=$r(t[7]||"")):(this.h=!1,this.i=new gs(null,this.h))}Ln.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Br(t,ch,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Br(t,ch,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Br(n,n.charAt(0)=="/"?VI:DI,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Br(n,OI)),e.join("")};function Ke(e){return new Ln(e)}function wi(e,t,n){e.j=n?$r(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Ti(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function ah(e,t,n){t instanceof gs?(e.i=t,NI(e.i,e.h)):(n||(t=Br(t,xI)),e.i=new gs(t,e.h))}function _t(e,t,n){e.i.set(t,n)}function co(e){return _t(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function $r(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Br(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,PI),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function PI(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var ch=/[#\/\?@]/g,DI=/[#\?:]/g,VI=/[#\?]/g,xI=/[#\?@]/g,OI=/#/g;function gs(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function En(e){e.g||(e.g=new Map,e.h=0,e.i&&CI(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}P=gs.prototype;P.add=function(e,t){En(this),this.i=null,e=br(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Ap(e,t){En(e),t=br(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Rp(e,t){return En(e),t=br(e,t),e.g.has(t)}P.forEach=function(e,t){En(this),this.g.forEach(function(n,r){n.forEach(function(s){e.call(t,s,r,this)},this)},this)};P.ta=function(){En(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const s=e[r];for(let i=0;i<s.length;i++)n.push(t[r])}return n};P.Z=function(e){En(this);let t=[];if(typeof e=="string")Rp(this,e)&&(t=t.concat(this.g.get(br(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};P.set=function(e,t){return En(this),this.i=null,e=br(this,e),Rp(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};P.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function Sp(e,t,n){Ap(e,t),0<n.length&&(e.i=null,e.g.set(br(e,t),Fc(n)),e.h+=n.length)}P.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),e.push(s)}}return this.i=e.join("&")};function br(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function NI(e,t){t&&!e.j&&(En(e),e.i=null,e.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Ap(this,r),Sp(this,s,n))},e)),e.j=t}var kI=class{constructor(e,t){this.g=e,this.map=t}};function bp(e){this.l=e||MI,H.PerformanceNavigationTiming?(e=H.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(H.g&&H.g.Ka&&H.g.Ka()&&H.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var MI=10;function Cp(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Pp(e){return e.h?1:e.g?e.g.size:0}function Ua(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Xc(e,t){e.g?e.g.add(t):e.h=t}function Dp(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}bp.prototype.cancel=function(){if(this.i=Vp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Vp(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Fc(e.i)}var LI=class{stringify(e){return H.JSON.stringify(e,void 0)}parse(e){return H.JSON.parse(e,void 0)}};function FI(){this.g=new LI}function $I(e,t,n){const r=n||"";try{Tp(e,function(s,i){let o=s;Rs(s)&&(o=Hc(s)),t.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw t.push(r+"type="+encodeURIComponent("_badmap")),s}}function BI(e,t){const n=new ro;if(H.Image){const r=new Image;r.onload=Hs(Gs,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Hs(Gs,n,r,"TestLoadImage: error",!1,t),r.onabort=Hs(Gs,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Hs(Gs,n,r,"TestLoadImage: timeout",!1,t),H.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function Gs(e,t,n,r,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(r)}catch{}}function lo(e){this.l=e.ec||null,this.j=e.ob||!1}Mt(lo,Qc);lo.prototype.g=function(){return new uo(this.l,this.j)};lo.prototype.i=function(e){return function(){return e}}({});function uo(e,t){kt.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Zc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Mt(uo,kt);var Zc=0;P=uo.prototype;P.open=function(e,t){if(this.readyState!=Zc)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,ms(this)};P.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||H).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};P.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Vs(this)),this.readyState=Zc};P.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,ms(this)),this.g&&(this.readyState=3,ms(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof H.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;xp(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function xp(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}P.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Vs(this):ms(this),this.readyState==3&&xp(this)}};P.Za=function(e){this.g&&(this.response=this.responseText=e,Vs(this))};P.Ya=function(e){this.g&&(this.response=e,Vs(this))};P.ka=function(){this.g&&Vs(this)};function Vs(e){e.readyState=4,e.l=null,e.j=null,e.A=null,ms(e)}P.setRequestHeader=function(e,t){this.v.append(e,t)};P.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};P.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function ms(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(uo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var UI=H.JSON.parse;function It(e){kt.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Op,this.L=this.M=!1}Mt(It,kt);var Op="",jI=/^https?$/i,qI=["POST","PUT"];P=It.prototype;P.Oa=function(e){this.M=e};P.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():La.g(),this.C=this.u?oh(this.u):oh(La),this.g.onreadystatechange=Qt(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(i){lh(this,i);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=H.FormData&&e instanceof H.FormData,!(0<=Qd(qI,t))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Mp(this),0<this.B&&((this.L=zI(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Qt(this.ua,this)):this.A=Wc(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){lh(this,i)}};function zI(e){return yr&&typeof e.timeout=="number"&&e.ontimeout!==void 0}P.ua=function(){typeof Lc<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Bt(this,"timeout"),this.abort(8))};function lh(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Np(e),ho(e)}function Np(e){e.F||(e.F=!0,Bt(e,"complete"),Bt(e,"error"))}P.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Bt(this,"complete"),Bt(this,"abort"),ho(this))};P.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ho(this,!0)),It.$.N.call(this)};P.La=function(){this.s||(this.G||this.v||this.l?kp(this):this.kb())};P.kb=function(){kp(this)};function kp(e){if(e.h&&typeof Lc<"u"&&(!e.C[1]||Ve(e)!=4||e.da()!=2)){if(e.v&&Ve(e)==4)Wc(e.La,0,e);else if(Bt(e,"readystatechange"),Ve(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var s=String(e.I).match(Ip)[1]||null;!s&&H.self&&H.self.location&&(s=H.self.location.protocol.slice(0,-1)),r=!jI.test(s?s.toLowerCase():"")}n=r}if(n)Bt(e,"complete"),Bt(e,"success");else{e.m=6;try{var i=2<Ve(e)?e.g.statusText:""}catch{i=""}e.j=i+" ["+e.da()+"]",Np(e)}}finally{ho(e)}}}}function ho(e,t){if(e.g){Mp(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||Bt(e,"ready");try{n.onreadystatechange=r}catch{}}}function Mp(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(H.clearTimeout(e.A),e.A=null)}P.isActive=function(){return!!this.g};function Ve(e){return e.g?e.g.readyState:0}P.da=function(){try{return 2<Ve(this)?this.g.status:-1}catch{return-1}};P.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};P.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),UI(t)}};function uh(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Op:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function HI(e){const t={};e=(e.g&&2<=Ve(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(ls(e[r]))continue;var n=mI(e[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=t[s]||[];t[s]=i,i.push(n)}lI(t,function(r){return r.join(", ")})}P.Ia=function(){return this.m};P.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Lp(e){let t="";return Bc(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function tl(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Lp(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):_t(e,t,n))}function kr(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Fp(e){this.Ga=0,this.j=[],this.l=new ro,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=kr("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=kr("baseRetryDelayMs",5e3,e),this.hb=kr("retryDelaySeedMs",1e4,e),this.eb=kr("forwardChannelMaxRetries",2,e),this.xa=kr("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new bp(e&&e.concurrentRequestLimit),this.Ja=new FI,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}P=Fp.prototype;P.ra=8;P.H=1;function el(e){if($p(e),e.H==3){var t=e.W++,n=Ke(e.I);if(_t(n,"SID",e.K),_t(n,"RID",t),_t(n,"TYPE","terminate"),xs(e,n),t=new Ps(e,e.l,t),t.L=2,t.A=co(Ke(n)),n=!1,H.navigator&&H.navigator.sendBeacon)try{n=H.navigator.sendBeacon(t.A.toString(),"")}catch{}!n&&H.Image&&(new Image().src=t.A,n=!0),n||(t.g=Gp(t.l,null),t.g.ha(t.A)),t.G=Date.now(),Ds(t)}Hp(e)}function fo(e){e.g&&(rl(e),e.g.cancel(),e.g=null)}function $p(e){fo(e),e.u&&(H.clearTimeout(e.u),e.u=null),Ii(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&H.clearTimeout(e.m),e.m=null)}function po(e){if(!Cp(e.i)&&!e.m){e.m=!0;var t=e.Na;hs||ap(),fs||(hs(),fs=!0),Kc.add(t,e),e.C=0}}function KI(e,t){return Pp(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=bs(Qt(e.Na,e,t),zp(e,e.C)),e.C++,!0)}P.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const s=new Ps(this,this.l,e);let i=this.s;if(this.U&&(i?(i=Zd(i),tp(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Bp(this,s,t),n=Ke(this.I),_t(n,"RID",e),_t(n,"CVER",22),this.F&&_t(n,"X-HTTP-Session-Id",this.F),xs(this,n),i&&(this.O?t="headers="+encodeURIComponent(String(Lp(i)))+"&"+t:this.o&&tl(n,this.o,i)),Xc(this.i,s),this.bb&&_t(n,"TYPE","init"),this.P?(_t(n,"$req",t),_t(n,"SID","null"),s.aa=!0,$a(s,n,null)):$a(s,n,t),this.H=2}}else this.H==3&&(e?hh(this,e):this.j.length==0||Cp(this.i)||hh(this))};function hh(e,t){var n;t?n=t.m:n=e.W++;const r=Ke(e.I);_t(r,"SID",e.K),_t(r,"RID",n),_t(r,"AID",e.V),xs(e,r),e.o&&e.s&&tl(r,e.o,e.s),n=new Ps(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Bp(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Xc(e.i,n),$a(n,r,t)}function xs(e,t){e.na&&Bc(e.na,function(n,r){_t(t,r,n)}),e.h&&Tp({},function(n,r){_t(t,r,n)})}function Bp(e,t,n){n=Math.min(e.j.length,n);var r=e.h?Qt(e.h.Va,e.h,e):null;t:{var s=e.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{$I(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,r}function Up(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;hs||ap(),fs||(hs(),fs=!0),Kc.add(t,e),e.A=0}}function nl(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=bs(Qt(e.Ma,e),zp(e,e.A)),e.A++,!0)}P.Ma=function(){if(this.u=null,jp(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=bs(Qt(this.jb,this),e)}};P.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ne(10),fo(this),jp(this))};function rl(e){e.B!=null&&(H.clearTimeout(e.B),e.B=null)}function jp(e){e.g=new Ps(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=Ke(e.wa);_t(t,"RID","rpc"),_t(t,"SID",e.K),_t(t,"AID",e.V),_t(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&_t(t,"TO",e.qa),_t(t,"TYPE","xmlhttp"),xs(e,t),e.o&&e.s&&tl(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.A=co(Ke(t)),n.u=null,n.S=!0,yp(n,e)}P.ib=function(){this.v!=null&&(this.v=null,fo(this),nl(this),ne(19))};function Ii(e){e.v!=null&&(H.clearTimeout(e.v),e.v=null)}function qp(e,t){var n=null;if(e.g==t){Ii(e),rl(e),e.g=null;var r=2}else if(Ua(e.i,t))n=t.F,Dp(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.u?t.u.length:0,t=Date.now()-t.G;var s=e.C;r=so(),Bt(r,new dp(r,n)),po(e)}else Up(e);else if(s=t.s,s==3||s==0&&0<t.ca||!(r==1&&KI(e,t)||r==2&&nl(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),s){case 1:xn(e,5);break;case 4:xn(e,10);break;case 3:xn(e,6);break;default:xn(e,2)}}}function zp(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function xn(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=Qt(e.pb,e);n||(n=new Ln("//www.google.com/images/cleardot.gif"),H.location&&H.location.protocol=="http"||wi(n,"https"),co(n)),BI(n.toString(),r)}else ne(2);e.H=0,e.h&&e.h.za(t),Hp(e),$p(e)}P.pb=function(e){e?(this.l.info("Successfully pinged google.com"),ne(2)):(this.l.info("Failed to ping google.com"),ne(1))};function Hp(e){if(e.H=0,e.ma=[],e.h){const t=Vp(e.i);(t.length!=0||e.j.length!=0)&&(eh(e.ma,t),eh(e.ma,e.j),e.i.i.length=0,Fc(e.j),e.j.length=0),e.h.ya()}}function Kp(e,t,n){var r=n instanceof Ln?Ke(n):new Ln(n);if(r.g!="")t&&(r.g=t+"."+r.g),Ti(r,r.m);else{var s=H.location;r=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var i=new Ln(null);r&&wi(i,r),t&&(i.g=t),s&&Ti(i,s),n&&(i.l=n),r=i}return n=e.F,t=e.Da,n&&t&&_t(r,n,t),_t(r,"VER",e.ra),xs(e,r),r}function Gp(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e.Ha&&!e.va?new It(new lo({ob:n})):new It(e.va),t.Oa(e.J),t}P.isActive=function(){return!!this.h&&this.h.isActive(this)};function Wp(){}P=Wp.prototype;P.Ba=function(){};P.Aa=function(){};P.za=function(){};P.ya=function(){};P.isActive=function(){return!0};P.Va=function(){};function Ai(){if(yr&&!(10<=Number(iI)))throw Error("Environmental error: no available transport.")}Ai.prototype.g=function(e,t){return new fe(e,t)};function fe(e,t){kt.call(this),this.g=new Fp(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!ls(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!ls(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Cr(this)}Mt(fe,kt);fe.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;ne(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=Kp(e,null,e.Y),po(e)};fe.prototype.close=function(){el(this.g)};fe.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Hc(e),e=n);t.j.push(new kI(t.fb++,e)),t.H==3&&po(t)};fe.prototype.N=function(){this.g.h=null,delete this.j,el(this.g),delete this.g,fe.$.N.call(this)};function Qp(e){Yc.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}Mt(Qp,Yc);function Yp(){Jc.call(this),this.status=1}Mt(Yp,Jc);function Cr(e){this.g=e}Mt(Cr,Wp);Cr.prototype.Ba=function(){Bt(this.g,"a")};Cr.prototype.Aa=function(e){Bt(this.g,new Qp(e))};Cr.prototype.za=function(e){Bt(this.g,new Yp)};Cr.prototype.ya=function(){Bt(this.g,"b")};function GI(){this.blockSize=-1}function we(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Mt(we,GI);we.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Zo(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var s=0;16>s;++s)r[s]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],s=e.g[2];var i=e.g[3],o=t+(i^n&(s^i))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[1]+3905402710&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[5]+1200080426&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[9]+2336552879&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[13]+4254626195&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(s^i&(n^s))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[6]+3225465664&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[10]+38016083&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[14]+3275163606&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[2]+4243563512&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(n^s^i)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[8]+2272392833&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[4]+1272893353&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[0]+3936430074&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[12]+3873151461&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(s^(n|~i))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[7]+1126891415&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[3]+2399980690&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[15]+4264355552&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[11]+3174756917&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+s&4294967295,e.g[3]=e.g[3]+i&4294967295}we.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,s=this.h,i=0;i<t;){if(s==0)for(;i<=n;)Zo(this,e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[s++]=e.charCodeAt(i++),s==this.blockSize){Zo(this,r),s=0;break}}else for(;i<t;)if(r[s++]=e[i++],s==this.blockSize){Zo(this,r),s=0;break}}this.h=s,this.i+=t};we.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function ft(e,t){this.h=t;for(var n=[],r=!0,s=e.length-1;0<=s;s--){var i=e[s]|0;r&&i==t||(n[s]=i,r=!1)}this.g=n}var WI={};function sl(e){return-128<=e&&128>e?nI(e,function(t){return new ft([t|0],0>t?-1:0)}):new ft([e|0],0>e?-1:0)}function xe(e){if(isNaN(e)||!isFinite(e))return ur;if(0>e)return Ft(xe(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=ja;return new ft(t,0)}function Jp(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return Ft(Jp(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=xe(Math.pow(t,8)),r=ur,s=0;s<e.length;s+=8){var i=Math.min(8,e.length-s),o=parseInt(e.substring(s,s+i),t);8>i?(i=xe(Math.pow(t,i)),r=r.R(i).add(xe(o))):(r=r.R(n),r=r.add(xe(o)))}return r}var ja=4294967296,ur=sl(0),qa=sl(1),fh=sl(16777216);P=ft.prototype;P.ea=function(){if(ge(this))return-Ft(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:ja+r)*t,t*=ja}return e};P.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(je(this))return"0";if(ge(this))return"-"+Ft(this).toString(e);for(var t=xe(Math.pow(e,6)),n=this,r="";;){var s=Si(n,t).g;n=Ri(n,s.R(t));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=s,je(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};P.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function je(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function ge(e){return e.h==-1}P.X=function(e){return e=Ri(this,e),ge(e)?-1:je(e)?0:1};function Ft(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new ft(n,~e.h).add(qa)}P.abs=function(){return ge(this)?Ft(this):this};P.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,s=0;s<=t;s++){var i=r+(this.D(s)&65535)+(e.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(e.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new ft(n,n[n.length-1]&-2147483648?-1:0)};function Ri(e,t){return e.add(Ft(t))}P.R=function(e){if(je(this)||je(e))return ur;if(ge(this))return ge(e)?Ft(this).R(Ft(e)):Ft(Ft(this).R(e));if(ge(e))return Ft(this.R(Ft(e)));if(0>this.X(fh)&&0>e.X(fh))return xe(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<e.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(s)>>>16,c=e.D(s)&65535;n[2*r+2*s]+=o*c,Ws(n,2*r+2*s),n[2*r+2*s+1]+=i*c,Ws(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,Ws(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,Ws(n,2*r+2*s+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new ft(n,0)};function Ws(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Mr(e,t){this.g=e,this.h=t}function Si(e,t){if(je(t))throw Error("division by zero");if(je(e))return new Mr(ur,ur);if(ge(e))return t=Si(Ft(e),t),new Mr(Ft(t.g),Ft(t.h));if(ge(t))return t=Si(e,Ft(t)),new Mr(Ft(t.g),t.h);if(30<e.g.length){if(ge(e)||ge(t))throw Error("slowDivide_ only works with positive integers.");for(var n=qa,r=t;0>=r.X(e);)n=dh(n),r=dh(r);var s=Zn(n,1),i=Zn(r,1);for(r=Zn(r,2),n=Zn(n,2);!je(r);){var o=i.add(r);0>=o.X(e)&&(s=s.add(n),i=o),r=Zn(r,1),n=Zn(n,1)}return t=Ri(e,s.R(t)),new Mr(s,t)}for(s=ur;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=xe(n),o=i.R(t);ge(o)||0<o.X(e);)n-=r,i=xe(n),o=i.R(t);je(i)&&(i=qa),s=s.add(i),e=Ri(e,o)}return new Mr(s,e)}P.gb=function(e){return Si(this,e).h};P.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new ft(n,this.h&e.h)};P.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new ft(n,this.h|e.h)};P.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new ft(n,this.h^e.h)};function dh(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new ft(n,e.h)}function Zn(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,s=[],i=0;i<r;i++)s[i]=0<t?e.D(i+n)>>>t|e.D(i+n+1)<<32-t:e.D(i+n);return new ft(s,e.h)}Ai.prototype.createWebChannel=Ai.prototype.g;fe.prototype.send=fe.prototype.u;fe.prototype.open=fe.prototype.m;fe.prototype.close=fe.prototype.close;io.NO_ERROR=0;io.TIMEOUT=8;io.HTTP_ERROR=6;pp.COMPLETE="complete";gp.EventType=Cs;Cs.OPEN="a";Cs.CLOSE="b";Cs.ERROR="c";Cs.MESSAGE="d";kt.prototype.listen=kt.prototype.O;It.prototype.listenOnce=It.prototype.P;It.prototype.getLastError=It.prototype.Sa;It.prototype.getLastErrorCode=It.prototype.Ia;It.prototype.getStatus=It.prototype.da;It.prototype.getResponseJson=It.prototype.Wa;It.prototype.getResponseText=It.prototype.ja;It.prototype.send=It.prototype.ha;It.prototype.setWithCredentials=It.prototype.Oa;we.prototype.digest=we.prototype.l;we.prototype.reset=we.prototype.reset;we.prototype.update=we.prototype.j;ft.prototype.add=ft.prototype.add;ft.prototype.multiply=ft.prototype.R;ft.prototype.modulo=ft.prototype.gb;ft.prototype.compare=ft.prototype.X;ft.prototype.toNumber=ft.prototype.ea;ft.prototype.toString=ft.prototype.toString;ft.prototype.getBits=ft.prototype.D;ft.fromNumber=xe;ft.fromString=Jp;var QI=function(){return new Ai},YI=function(){return so()},ta=io,JI=pp,XI=Wn,ph={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Qs=gp,ZI=It,t0=we,hr=ft;const gh="@firebase/firestore";/**
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
 */let Pr="10.7.2";/**
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
 */const qn=new Pc("@firebase/firestore");function Lr(){return qn.logLevel}function D(e,...t){if(qn.logLevel<=rt.DEBUG){const n=t.map(il);qn.debug(`Firestore (${Pr}): ${e}`,...n)}}function Le(e,...t){if(qn.logLevel<=rt.ERROR){const n=t.map(il);qn.error(`Firestore (${Pr}): ${e}`,...n)}}function vr(e,...t){if(qn.logLevel<=rt.WARN){const n=t.map(il);qn.warn(`Firestore (${Pr}): ${e}`,...n)}}function il(e){if(typeof e=="string")return e;try{/**
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
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends yn{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class fn{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class Xp{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class e0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Kt.UNAUTHENTICATED))}shutdown(){}}class n0{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class r0{constructor(t){this.t=t,this.currentUser=Kt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new fn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new fn,t.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;t.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new fn)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ct(typeof r.accessToken=="string"),new Xp(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Ct(t===null||typeof t=="string"),new Kt(t)}}class s0{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=Kt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class i0{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new s0(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(Kt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class o0{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class a0{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=i=>{i.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,D("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>r(i))};const s=i=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Ct(typeof n.token=="string"),this.R=n.token,new o0(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function c0(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Zp{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=c0(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=t.charAt(s[i]%t.length))}return r}}function ut(e,t){return e<t?-1:e>t?1:0}function Er(e,t,n){return e.length===t.length&&e.every((r,s)=>n(r,t[s]))}/**
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
 */class oe{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new B(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new B(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new B(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new B(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return oe.fromMillis(Date.now())}static fromDate(t){return oe.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new oe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?ut(this.nanoseconds,t.nanoseconds):ut(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class _s{constructor(t,n,r){n===void 0?n=0:n>t.length&&Y(),r===void 0?r=t.length-n:r>t.length-n&&Y(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return _s.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof _s?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let s=0;s<r;s++){const i=t.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class Tt extends _s{construct(t,n,r){return new Tt(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new B(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Tt(n)}static emptyPath(){return new Tt([])}}const l0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class te extends _s{construct(t,n,r){return new te(t,n,r)}static isValidIdentifier(t){return l0.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),te.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new te(["__name__"])}static fromServerFormat(t){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new B(C.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<t.length;){const a=t[s];if(a==="\\"){if(s+1===t.length)throw new B(C.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new B(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new B(C.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new te(n)}static emptyPath(){return new te([])}}/**
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
 */class j{constructor(t){this.path=t}static fromPath(t){return new j(Tt.fromString(t))}static fromName(t){return new j(Tt.fromString(t).popFirst(5))}static empty(){return new j(Tt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Tt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return Tt.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new j(new Tt(t.slice()))}}function u0(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=G.fromTimestamp(r===1e9?new oe(n+1,0):new oe(n,r));return new gn(s,j.empty(),t)}function h0(e){return new gn(e.readTime,e.key,-1)}class gn{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new gn(G.min(),j.empty(),-1)}static max(){return new gn(G.max(),j.empty(),-1)}}function f0(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=j.comparator(e.documentKey,t.documentKey),n!==0?n:ut(e.largestBatchId,t.largestBatchId))}/**
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
 */const d0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class p0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function ol(e){if(e.code!==C.FAILED_PRECONDITION||e.message!==d0)throw e;D("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class al{constructor(t,n){this.action=t,this.transaction=n,this.aborted=!1,this.V=new fn,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new Jr(t,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const s=cl(r.target.error);this.V.reject(new Jr(t,s))}}static open(t,n,r,s){try{return new al(n,t.transaction(s,r))}catch(i){throw new Jr(n,i)}}get m(){return this.V.promise}abort(t){t&&this.V.reject(t),this.aborted||(D("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const n=this.transaction.objectStore(t);return new m0(n)}}class On{constructor(t,n,r){this.name=t,this.version=n,this.p=r,On.S(mi())===12.2&&Le("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return D("SimpleDb","Removing database:",t),Cn(window.indexedDB.deleteDatabase(t)).toPromise()}static D(){if(!bc())return!1;if(On.C())return!0;const t=mi(),n=On.S(t),r=0<n&&n<10,s=On.v(t),i=0<s&&s<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||r||i)}static C(){var t;return typeof process<"u"&&((t=process.__PRIVATE_env)===null||t===void 0?void 0:t.F)==="YES"}static M(t,n){return t.store(n)}static S(t){const n=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(t){const n=t.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(t){return this.db||(D("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;n(o)},s.onblocked=()=>{r(new Jr(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new B(C.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new B(C.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Jr(t,o))},s.onupgradeneeded=i=>{D("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.p.N(o,s.transaction,i.oldVersion,this.version).next(()=>{D("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(t){this.B=t,this.db&&(this.db.onversionchange=n=>t(n))}async runTransaction(t,n,r,s){const i=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(t);const a=al.open(this.db,t,i?"readonly":"readwrite",r),c=s(a).next(l=>(a.g(),l)).catch(l=>(a.abort(l),E.reject(l))).toPromise();return c.catch(()=>{}),await a.m,c}catch(a){const c=a,l=c.name!=="FirebaseError"&&o<3;if(D("SimpleDb","Transaction failed with error:",c.message,"Retrying:",l),this.close(),!l)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class g0{constructor(t){this.k=t,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(t){this.k=t}done(){this.q=!0}U(t){this.K=t}delete(){return Cn(this.k.delete())}}class Jr extends B{constructor(t,n){super(C.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Os(e){return e.name==="IndexedDbTransactionError"}class m0{constructor(t){this.store=t}put(t,n){let r;return n!==void 0?(D("SimpleDb","PUT",this.store.name,t,n),r=this.store.put(n,t)):(D("SimpleDb","PUT",this.store.name,"<auto-key>",t),r=this.store.put(t)),Cn(r)}add(t){return D("SimpleDb","ADD",this.store.name,t,t),Cn(this.store.add(t))}get(t){return Cn(this.store.get(t)).next(n=>(n===void 0&&(n=null),D("SimpleDb","GET",this.store.name,t,n),n))}delete(t){return D("SimpleDb","DELETE",this.store.name,t),Cn(this.store.delete(t))}count(){return D("SimpleDb","COUNT",this.store.name),Cn(this.store.count())}W(t,n){const r=this.options(t,n),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new E((o,a)=>{i.onerror=c=>{a(c.target.error)},i.onsuccess=c=>{o(c.target.result)}})}{const i=this.cursor(r),o=[];return this.G(i,(a,c)=>{o.push(c)}).next(()=>o)}}j(t,n){const r=this.store.getAll(t,n===null?void 0:n);return new E((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}H(t,n){D("SimpleDb","DELETE ALL",this.store.name);const r=this.options(t,n);r.J=!1;const s=this.cursor(r);return this.G(s,(i,o,a)=>a.delete())}Y(t,n){let r;n?r=t:(r={},n=t);const s=this.cursor(r);return this.G(s,n)}Z(t){const n=this.cursor({});return new E((r,s)=>{n.onerror=i=>{const o=cl(i.target.error);s(o)},n.onsuccess=i=>{const o=i.target.result;o?t(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(t,n){const r=[];return new E((s,i)=>{t.onerror=o=>{i(o.target.error)},t.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const c=new g0(a),l=n(a.primaryKey,a.value,c);if(l instanceof E){const u=l.catch(h=>(c.done(),E.reject(h)));r.push(u)}c.isDone?s():c.$===null?a.continue():a.continue(c.$)}}).next(()=>E.waitFor(r))}options(t,n){let r;return t!==void 0&&(typeof t=="string"?r=t:n=t),{index:r,range:n}}cursor(t){let n="next";if(t.reverse&&(n="prev"),t.index){const r=this.store.index(t.index);return t.J?r.openKeyCursor(t.range,n):r.openCursor(t.range,n)}return this.store.openCursor(t.range,n)}}function Cn(e){return new E((t,n)=>{e.onsuccess=r=>{const s=r.target.result;t(s)},e.onerror=r=>{const s=cl(r.target.error);n(s)}})}let mh=!1;function cl(e){const t=On.S(mi());if(t>=12.2&&t<13){const n="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(n)>=0){const r=new B("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return mh||(mh=!0,setTimeout(()=>{throw r},0)),r}}return e}/**
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
 */class ll{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}ll._e=-1;function go(e){return e==null}function za(e){return e===0&&1/e==-1/0}/**
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
 */function _h(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function mo(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function _0(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class Rt{constructor(t,n){this.comparator=t,this.root=n||Lt.EMPTY}insert(t,n){return new Rt(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Lt.BLACK,null,null))}remove(t){return new Rt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Lt.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ys(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ys(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ys(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ys(this.root,t,this.comparator,!0)}}class Ys{constructor(t,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?r(t.key,n):1,n&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Lt{constructor(t,n,r,s,i){this.key=t,this.value=n,this.color=r??Lt.RED,this.left=s??Lt.EMPTY,this.right=i??Lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,s,i){return new Lt(t??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Lt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return Lt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const t=this.left.check();if(t!==this.right.check())throw Y();return t+(this.isRed()?0:1)}}Lt.EMPTY=null,Lt.RED=!0,Lt.BLACK=!1;Lt.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(t,n,r,s,i){return this}insert(t,n,r){return new Lt(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ut{constructor(t){this.comparator=t,this.data=new Rt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new yh(this.data.getIterator())}getIteratorFrom(t){return new yh(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof Ut)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Ut(this.comparator);return n.data=t,n}}class yh{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class nn{constructor(t){this.fields=t,t.sort(te.comparator)}static empty(){return new nn([])}unionWith(t){let n=new Ut(te.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new nn(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Er(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class tg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Jt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new tg("Invalid base64 string: "+i):i}}(t);return new Jt(n)}static fromUint8Array(t){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(t);return new Jt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ut(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Jt.EMPTY_BYTE_STRING=new Jt("");const y0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function mn(e){if(Ct(!!e),typeof e=="string"){let t=0;const n=y0.exec(e);if(Ct(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:bt(e.seconds),nanos:bt(e.nanos)}}function bt(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function zn(e){return typeof e=="string"?Jt.fromBase64String(e):Jt.fromUint8Array(e)}/**
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
 */function ul(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function hl(e){const t=e.mapValue.fields.__previous_value__;return ul(t)?hl(t):t}function ys(e){const t=mn(e.mapValue.fields.__local_write_time__.timestampValue);return new oe(t.seconds,t.nanos)}/**
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
 */class v0{constructor(t,n,r,s,i,o,a,c,l){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class vs{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new vs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof vs&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Js={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Hn(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?ul(e)?4:E0(e)?9007199254740991:10:Y()}function Fe(e,t){if(e===t)return!0;const n=Hn(e);if(n!==Hn(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return ys(e).isEqual(ys(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=mn(s.timestampValue),a=mn(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return zn(s.bytesValue).isEqual(zn(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return bt(s.geoPointValue.latitude)===bt(i.geoPointValue.latitude)&&bt(s.geoPointValue.longitude)===bt(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return bt(s.integerValue)===bt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=bt(s.doubleValue),a=bt(i.doubleValue);return o===a?za(o)===za(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return Er(e.arrayValue.values||[],t.arrayValue.values||[],Fe);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(_h(o)!==_h(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Fe(o[c],a[c])))return!1;return!0}(e,t);default:return Y()}}function Es(e,t){return(e.values||[]).find(n=>Fe(n,t))!==void 0}function wr(e,t){if(e===t)return 0;const n=Hn(e),r=Hn(t);if(n!==r)return ut(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ut(e.booleanValue,t.booleanValue);case 2:return function(i,o){const a=bt(i.integerValue||i.doubleValue),c=bt(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(e,t);case 3:return vh(e.timestampValue,t.timestampValue);case 4:return vh(ys(e),ys(t));case 5:return ut(e.stringValue,t.stringValue);case 6:return function(i,o){const a=zn(i),c=zn(o);return a.compareTo(c)}(e.bytesValue,t.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=ut(a[l],c[l]);if(u!==0)return u}return ut(a.length,c.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,o){const a=ut(bt(i.latitude),bt(o.latitude));return a!==0?a:ut(bt(i.longitude),bt(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=wr(a[l],c[l]);if(u)return u}return ut(a.length,c.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,o){if(i===Js.mapValue&&o===Js.mapValue)return 0;if(i===Js.mapValue)return 1;if(o===Js.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const d=ut(c[h],u[h]);if(d!==0)return d;const g=wr(a[c[h]],l[u[h]]);if(g!==0)return g}return ut(c.length,u.length)}(e.mapValue,t.mapValue);default:throw Y()}}function vh(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return ut(e,t);const n=mn(e),r=mn(t),s=ut(n.seconds,r.seconds);return s!==0?s:ut(n.nanos,r.nanos)}function Tr(e){return Ha(e)}function Ha(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=mn(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return zn(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return j.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Ha(i);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Ha(n.fields[o])}`;return s+"}"}(e.mapValue):Y()}function Ka(e){return!!e&&"integerValue"in e}function fl(e){return!!e&&"arrayValue"in e}function Eh(e){return!!e&&"nullValue"in e}function wh(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function ea(e){return!!e&&"mapValue"in e}function Xr(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return mo(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=Xr(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Xr(e.arrayValue.values[n]);return t}return Object.assign({},e)}function E0(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class De{constructor(t){this.value=t}static empty(){return new De({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!ea(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Xr(n)}setAll(t){let n=te.emptyPath(),r={},s=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Xr(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(t){const n=this.field(t.popLast());ea(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Fe(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=n.mapValue.fields[t.get(r)];ea(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,r){mo(n,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new De(Xr(this.value))}}/**
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
 */class Gt{constructor(t,n,r,s,i,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new Gt(t,0,G.min(),G.min(),G.min(),De.empty(),0)}static newFoundDocument(t,n,r,s){return new Gt(t,1,n,G.min(),r,s,0)}static newNoDocument(t,n){return new Gt(t,2,n,G.min(),G.min(),De.empty(),0)}static newUnknownDocument(t,n){return new Gt(t,3,n,G.min(),G.min(),De.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(G.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=De.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=De.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=G.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Gt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class bi{constructor(t,n){this.position=t,this.inclusive=n}}function Th(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],o=e.position[s];if(i.field.isKeyField()?r=j.comparator(j.fromName(o.referenceValue),n.key):r=wr(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ih(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Fe(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class Ci{constructor(t,n="asc"){this.field=t,this.dir=n}}function w0(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class eg{}class Vt extends eg{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new I0(t,n,r):n==="array-contains"?new S0(t,r):n==="in"?new b0(t,r):n==="not-in"?new C0(t,r):n==="array-contains-any"?new P0(t,r):new Vt(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new A0(t,r):new R0(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(wr(n,this.value)):n!==null&&Hn(this.value)===Hn(n)&&this.matchesComparison(wr(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class $e extends eg{constructor(t,n){super(),this.filters=t,this.op=n,this.ue=null}static create(t,n){return new $e(t,n)}matches(t){return ng(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function ng(e){return e.op==="and"}function rg(e){return T0(e)&&ng(e)}function T0(e){for(const t of e.filters)if(t instanceof $e)return!1;return!0}function Ga(e){if(e instanceof Vt)return e.field.canonicalString()+e.op.toString()+Tr(e.value);if(rg(e))return e.filters.map(t=>Ga(t)).join(",");{const t=e.filters.map(n=>Ga(n)).join(",");return`${e.op}(${t})`}}function sg(e,t){return e instanceof Vt?function(r,s){return s instanceof Vt&&r.op===s.op&&r.field.isEqual(s.field)&&Fe(r.value,s.value)}(e,t):e instanceof $e?function(r,s){return s instanceof $e&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&sg(o,s.filters[a]),!0):!1}(e,t):void Y()}function ig(e){return e instanceof Vt?function(n){return`${n.field.canonicalString()} ${n.op} ${Tr(n.value)}`}(e):e instanceof $e?function(n){return n.op.toString()+" {"+n.getFilters().map(ig).join(" ,")+"}"}(e):"Filter"}class I0 extends Vt{constructor(t,n,r){super(t,n,r),this.key=j.fromName(r.referenceValue)}matches(t){const n=j.comparator(t.key,this.key);return this.matchesComparison(n)}}class A0 extends Vt{constructor(t,n){super(t,"in",n),this.keys=og("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class R0 extends Vt{constructor(t,n){super(t,"not-in",n),this.keys=og("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function og(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>j.fromName(r.referenceValue))}class S0 extends Vt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return fl(n)&&Es(n.arrayValue,this.value)}}class b0 extends Vt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Es(this.value.arrayValue,n)}}class C0 extends Vt{constructor(t,n){super(t,"not-in",n)}matches(t){if(Es(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Es(this.value.arrayValue,n)}}class P0 extends Vt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!fl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Es(this.value.arrayValue,r))}}/**
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
 */class D0{constructor(t,n=null,r=[],s=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function Ah(e,t=null,n=[],r=[],s=null,i=null,o=null){return new D0(e,t,n,r,s,i,o)}function dl(e){const t=ot(e);if(t.ce===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>Ga(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),go(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>Tr(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>Tr(r)).join(",")),t.ce=n}return t.ce}function pl(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!w0(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!sg(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Ih(e.startAt,t.startAt)&&Ih(e.endAt,t.endAt)}function Wa(e){return j.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
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
 */class _o{constructor(t,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function V0(e,t,n,r,s,i,o,a){return new _o(e,t,n,r,s,i,o,a)}function gl(e){return new _o(e)}function Rh(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function x0(e){return e.collectionGroup!==null}function Zr(e){const t=ot(e);if(t.le===null){t.le=[];const n=new Set;for(const i of t.explicitOrderBy)t.le.push(i),n.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Ut(te.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(t).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||t.le.push(new Ci(i,r))}),n.has(te.keyField().canonicalString())||t.le.push(new Ci(te.keyField(),r))}return t.le}function ke(e){const t=ot(e);return t.he||(t.he=O0(t,Zr(e))),t.he}function O0(e,t){if(e.limitType==="F")return Ah(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ci(s.field,i)});const n=e.endAt?new bi(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new bi(e.startAt.position,e.startAt.inclusive):null;return Ah(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function Qa(e,t,n){return new _o(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function yo(e,t){return pl(ke(e),ke(t))&&e.limitType===t.limitType}function ag(e){return`${dl(ke(e))}|lt:${e.limitType}`}function rr(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>ig(s)).join(", ")}]`),go(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Tr(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Tr(s)).join(",")),`Target(${r})`}(ke(e))}; limitType=${e.limitType})`}function vo(e,t){return t.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):j.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(e,t)&&function(r,s){for(const i of Zr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(r,s){return!(r.startAt&&!function(o,a,c){const l=Th(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,Zr(r),s)||r.endAt&&!function(o,a,c){const l=Th(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,Zr(r),s))}(e,t)}function N0(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function cg(e){return(t,n)=>{let r=!1;for(const s of Zr(e)){const i=k0(s,t,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function k0(e,t,n){const r=e.field.isKeyField()?j.comparator(t.key,n.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?wr(c,l):Y()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Y()}}/**
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
 */class Dr{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){mo(this.inner,(n,r)=>{for(const[s,i]of r)t(s,i)})}isEmpty(){return _0(this.inner)}size(){return this.innerSize}}/**
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
 */const M0=new Rt(j.comparator);function _n(){return M0}const lg=new Rt(j.comparator);function Ur(...e){let t=lg;for(const n of e)t=t.insert(n.key,n);return t}function L0(e){let t=lg;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function Nn(){return ts()}function ug(){return ts()}function ts(){return new Dr(e=>e.toString(),(e,t)=>e.isEqual(t))}const F0=new Ut(j.comparator);function st(...e){let t=F0;for(const n of e)t=t.add(n);return t}const $0=new Ut(ut);function B0(){return $0}/**
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
 */function U0(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:za(t)?"-0":t}}function j0(e){return{integerValue:""+e}}/**
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
 */class Eo{constructor(){this._=void 0}}function q0(e,t,n){return e instanceof Ya?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ul(i)&&(i=hl(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,t):e instanceof Pi?hg(e,t):e instanceof Di?fg(e,t):function(s,i){const o=H0(s,i),a=Sh(o)+Sh(s.Ie);return Ka(o)&&Ka(s.Ie)?j0(a):U0(s.serializer,a)}(e,t)}function z0(e,t,n){return e instanceof Pi?hg(e,t):e instanceof Di?fg(e,t):n}function H0(e,t){return e instanceof Ja?function(r){return Ka(r)||function(i){return!!i&&"doubleValue"in i}(r)}(t)?t:{integerValue:0}:null}class Ya extends Eo{}class Pi extends Eo{constructor(t){super(),this.elements=t}}function hg(e,t){const n=dg(t);for(const r of e.elements)n.some(s=>Fe(s,r))||n.push(r);return{arrayValue:{values:n}}}class Di extends Eo{constructor(t){super(),this.elements=t}}function fg(e,t){let n=dg(t);for(const r of e.elements)n=n.filter(s=>!Fe(s,r));return{arrayValue:{values:n}}}class Ja extends Eo{constructor(t,n){super(),this.serializer=t,this.Ie=n}}function Sh(e){return bt(e.integerValue||e.doubleValue)}function dg(e){return fl(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function K0(e,t){return e.field.isEqual(t.field)&&function(r,s){return r instanceof Pi&&s instanceof Pi||r instanceof Di&&s instanceof Di?Er(r.elements,s.elements,Fe):r instanceof Ja&&s instanceof Ja?Fe(r.Ie,s.Ie):r instanceof Ya&&s instanceof Ya}(e.transform,t.transform)}class Fn{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Fn}static exists(t){return new Fn(void 0,t)}static updateTime(t){return new Fn(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function oi(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class ml{}function pg(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new W0(e.key,Fn.none()):new _l(e.key,e.data,Fn.none());{const n=e.data,r=De.empty();let s=new Ut(te.comparator);for(let i of t.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new wo(e.key,r,new nn(s.toArray()),Fn.none())}}function G0(e,t,n){e instanceof _l?function(s,i,o){const a=s.value.clone(),c=Ch(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof wo?function(s,i,o){if(!oi(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Ch(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(gg(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(e,t,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function es(e,t,n,r){return e instanceof _l?function(i,o,a,c){if(!oi(i.precondition,o))return a;const l=i.value.clone(),u=Ph(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(e,t,n,r):e instanceof wo?function(i,o,a,c){if(!oi(i.precondition,o))return a;const l=Ph(i.fieldTransforms,c,o),u=o.data;return u.setAll(gg(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(e,t,n,r):function(i,o,a){return oi(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function bh(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Er(r,s,(i,o)=>K0(i,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class _l extends ml{constructor(t,n,r,s=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class wo extends ml{constructor(t,n,r,s,i=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function gg(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Ch(e,t,n){const r=new Map;Ct(e.length===n.length);for(let s=0;s<n.length;s++){const i=e[s],o=i.transform,a=t.data.field(i.field);r.set(i.field,z0(o,a,n[s]))}return r}function Ph(e,t,n){const r=new Map;for(const s of e){const i=s.transform,o=n.data.field(s.field);r.set(s.field,q0(i,o,t))}return r}class W0 extends ml{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Q0{constructor(t,n,r,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&G0(i,t,r[s])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=es(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=es(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=ug();return this.mutations.forEach(s=>{const i=t.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=pg(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(G.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),st())}isEqual(t){return this.batchId===t.batchId&&Er(this.mutations,t.mutations,(n,r)=>bh(n,r))&&Er(this.baseMutations,t.baseMutations,(n,r)=>bh(n,r))}}/**
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
 */class Y0{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class J0{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var St,et;function mg(e){if(e===void 0)return Le("GRPC error has no .code"),C.UNKNOWN;switch(e){case St.OK:return C.OK;case St.CANCELLED:return C.CANCELLED;case St.UNKNOWN:return C.UNKNOWN;case St.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case St.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case St.INTERNAL:return C.INTERNAL;case St.UNAVAILABLE:return C.UNAVAILABLE;case St.UNAUTHENTICATED:return C.UNAUTHENTICATED;case St.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case St.NOT_FOUND:return C.NOT_FOUND;case St.ALREADY_EXISTS:return C.ALREADY_EXISTS;case St.PERMISSION_DENIED:return C.PERMISSION_DENIED;case St.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case St.ABORTED:return C.ABORTED;case St.OUT_OF_RANGE:return C.OUT_OF_RANGE;case St.UNIMPLEMENTED:return C.UNIMPLEMENTED;case St.DATA_LOSS:return C.DATA_LOSS;default:return Y()}}(et=St||(St={}))[et.OK=0]="OK",et[et.CANCELLED=1]="CANCELLED",et[et.UNKNOWN=2]="UNKNOWN",et[et.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",et[et.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",et[et.NOT_FOUND=5]="NOT_FOUND",et[et.ALREADY_EXISTS=6]="ALREADY_EXISTS",et[et.PERMISSION_DENIED=7]="PERMISSION_DENIED",et[et.UNAUTHENTICATED=16]="UNAUTHENTICATED",et[et.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",et[et.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",et[et.ABORTED=10]="ABORTED",et[et.OUT_OF_RANGE=11]="OUT_OF_RANGE",et[et.UNIMPLEMENTED=12]="UNIMPLEMENTED",et[et.INTERNAL=13]="INTERNAL",et[et.UNAVAILABLE=14]="UNAVAILABLE",et[et.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function X0(){return new TextEncoder}/**
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
 */const Z0=new hr([4294967295,4294967295],0);function Dh(e){const t=X0().encode(e),n=new t0;return n.update(t),new Uint8Array(n.digest())}function Vh(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new hr([n,r],0),new hr([s,i],0)]}class yl{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new jr(`Invalid padding: ${n}`);if(r<0)throw new jr(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new jr(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new jr(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*t.length-n,this.Ee=hr.fromNumber(this.Te)}de(t,n,r){let s=t.add(n.multiply(hr.fromNumber(r)));return s.compare(Z0)===1&&(s=new hr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const n=Dh(t),[r,s]=Vh(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(t,n,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),o=new yl(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Te===0)return;const n=Dh(t),[r,s]=Vh(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class jr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class To{constructor(t,n,r,s,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const s=new Map;return s.set(t,Ns.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new To(G.min(),s,new Rt(ut),_n(),st())}}class Ns{constructor(t,n,r,s,i){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new Ns(r,n,st(),st(),st())}}/**
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
 */class ai{constructor(t,n,r,s){this.Ve=t,this.removedTargetIds=n,this.key=r,this.me=s}}class _g{constructor(t,n){this.targetId=t,this.fe=n}}class yg{constructor(t,n,r=Jt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=s}}class xh{constructor(){this.ge=0,this.pe=Nh(),this.ye=Jt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=st(),n=st(),r=st();return this.pe.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Y()}}),new Ns(this.ye,this.we,t,n,r)}Fe(){this.Se=!1,this.pe=Nh()}Me(t,n){this.Se=!0,this.pe=this.pe.insert(t,n)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1,Ct(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class tA{constructor(t){this.Le=t,this.ke=new Map,this.qe=_n(),this.Qe=Oh(),this.Ke=new Rt(ut)}$e(t){for(const n of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(n,t.me):this.We(n,t.key,t.me);for(const n of t.removedTargetIds)this.We(n,t.key,t.me)}Ge(t){this.forEachTarget(t,n=>{const r=this.ze(n);switch(t.state){case 0:this.je(n)&&r.Ce(t.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(t.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(t.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(t.resumeToken));break;default:Y()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ke.forEach((r,s)=>{this.je(s)&&n(s)})}Je(t){const n=t.targetId,r=t.fe.count,s=this.Ye(n);if(s){const i=s.target;if(Wa(i))if(r===0){const o=new j(i.path);this.We(n,o,Gt.newNoDocument(o,G.min()))}else Ct(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(t),c=a?this.et(a,t,o):1;if(c!==0){this.He(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,l)}}}}}Xe(t){const n=t.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=zn(r).toUint8Array()}catch(c){if(c instanceof tg)return vr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new yl(o,s,i)}catch(c){return vr(c instanceof jr?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(t,n,r){return n.fe.count===r-this.rt(t,n.targetId)?0:2}rt(t,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;t.mightContain(a)||(this.We(n,i,null),s++)}),s}it(t){const n=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&Wa(a.target)){const c=new j(a.target.path);this.qe.get(c)!==null||this.st(o,c)||this.We(o,c,Gt.newNoDocument(c,t))}i.De&&(n.set(o,i.ve()),i.Fe())}});let r=st();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Ye(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(t));const s=new To(t,n,this.Ke,this.qe,r);return this.qe=_n(),this.Qe=Oh(),this.Ke=new Rt(ut),s}Ue(t,n){if(!this.je(t))return;const r=this.st(t,n.key)?2:0;this.ze(t).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(t))}We(t,n,r){if(!this.je(t))return;const s=this.ze(t);this.st(t,n)?s.Me(n,1):s.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(t)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(t){this.ke.delete(t)}Ze(t){const n=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let n=this.ke.get(t);return n||(n=new xh,this.ke.set(t,n)),n}ot(t){let n=this.Qe.get(t);return n||(n=new Ut(ut),this.Qe=this.Qe.insert(t,n)),n}je(t){const n=this.Ye(t)!==null;return n||D("WatchChangeAggregator","Detected inactive target",t),n}Ye(t){const n=this.ke.get(t);return n&&n.be?null:this.Le._t(t)}He(t){this.ke.set(t,new xh),this.Le.getRemoteKeysForTarget(t).forEach(n=>{this.We(t,n,null)})}st(t,n){return this.Le.getRemoteKeysForTarget(t).has(n)}}function Oh(){return new Rt(j.comparator)}function Nh(){return new Rt(j.comparator)}const eA={asc:"ASCENDING",desc:"DESCENDING"},nA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},rA={and:"AND",or:"OR"};class sA{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Xa(e,t){return e.useProto3Json||go(t)?t:{value:t}}function iA(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function oA(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function fr(e){return Ct(!!e),G.fromTimestamp(function(n){const r=mn(n);return new oe(r.seconds,r.nanos)}(e))}function aA(e,t){return Za(e,t).canonicalString()}function Za(e,t){const n=function(s){return new Tt(["projects",s.projectId,"databases",s.database])}(e).child("documents");return t===void 0?n:n.child(t)}function vg(e){const t=Tt.fromString(e);return Ct(Ag(t)),t}function na(e,t){const n=vg(t);if(n.get(1)!==e.databaseId.projectId)throw new B(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new B(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new j(wg(n))}function Eg(e,t){return aA(e.databaseId,t)}function cA(e){const t=vg(e);return t.length===4?Tt.emptyPath():wg(t)}function kh(e){return new Tt(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function wg(e){return Ct(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function lA(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Y()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(Ct(u===void 0||typeof u=="string"),Jt.fromBase64String(u||"")):(Ct(u===void 0||u instanceof Uint8Array),Jt.fromUint8Array(u||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(l){const u=l.code===void 0?C.UNKNOWN:mg(l.code);return new B(u,l.message||"")}(o);n=new yg(r,s,i,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=na(e,r.document.name),i=fr(r.document.updateTime),o=r.document.createTime?fr(r.document.createTime):G.min(),a=new De({mapValue:{fields:r.document.fields}}),c=Gt.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new ai(l,u,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=na(e,r.document),i=r.readTime?fr(r.readTime):G.min(),o=Gt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new ai([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=na(e,r.document),i=r.removedTargetIds||[];n=new ai([],i,s,null)}else{if(!("filter"in t))return Y();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new J0(s,i),a=r.targetId;n=new _g(a,o)}}return n}function uA(e,t){return{documents:[Eg(e,t.path)]}}function hA(e,t){const n={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Eg(e,s);const i=function(l){if(l.length!==0)return Ig($e.create(l,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const o=function(l){if(l.length!==0)return l.map(u=>function(d){return{field:sr(d.field),direction:pA(d.dir)}}(u))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Xa(e,t.limit);return a!==null&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(t.endAt)),{ut:n,parent:s}}function fA(e){let t=cA(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ct(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:t=t.child(u.collectionId)}let i=[];n.where&&(i=function(h){const d=Tg(h);return d instanceof $e&&rg(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(T){return new Ci(ir(T.field),function(I){switch(I){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(T.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,go(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(h){const d=!!h.before,g=h.values||[];return new bi(g,d)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const d=!h.before,g=h.values||[];return new bi(g,d)}(n.endAt)),V0(t,s,o,i,a,"F",c,l)}function dA(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function Tg(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ir(n.unaryFilter.field);return Vt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ir(n.unaryFilter.field);return Vt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ir(n.unaryFilter.field);return Vt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ir(n.unaryFilter.field);return Vt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(e):e.fieldFilter!==void 0?function(n){return Vt.create(ir(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return $e.create(n.compositeFilter.filters.map(r=>Tg(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Y()}}(n.compositeFilter.op))}(e):Y()}function pA(e){return eA[e]}function gA(e){return nA[e]}function mA(e){return rA[e]}function sr(e){return{fieldPath:e.canonicalString()}}function ir(e){return te.fromServerFormat(e.fieldPath)}function Ig(e){return e instanceof Vt?function(n){if(n.op==="=="){if(wh(n.value))return{unaryFilter:{field:sr(n.field),op:"IS_NAN"}};if(Eh(n.value))return{unaryFilter:{field:sr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(wh(n.value))return{unaryFilter:{field:sr(n.field),op:"IS_NOT_NAN"}};if(Eh(n.value))return{unaryFilter:{field:sr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:sr(n.field),op:gA(n.op),value:n.value}}}(e):e instanceof $e?function(n){const r=n.getFilters().map(s=>Ig(s));return r.length===1?r[0]:{compositeFilter:{op:mA(n.op),filters:r}}}(e):Y()}function Ag(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class _A{constructor(t){this.ct=t}}function yA(e){const t=fA({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Qa(t,t.limit,"L"):t}/**
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
 */class vA{constructor(){this._n=new EA}addToCollectionParentIndex(t,n){return this._n.add(n),E.resolve()}getCollectionParents(t,n){return E.resolve(this._n.getEntries(n))}addFieldIndex(t,n){return E.resolve()}deleteFieldIndex(t,n){return E.resolve()}deleteAllFieldIndexes(t){return E.resolve()}createTargetIndexes(t,n){return E.resolve()}getDocumentsMatchingTarget(t,n){return E.resolve(null)}getIndexType(t,n){return E.resolve(0)}getFieldIndexes(t,n){return E.resolve([])}getNextCollectionGroupToUpdate(t){return E.resolve(null)}getMinOffset(t,n){return E.resolve(gn.min())}getMinOffsetFromCollectionGroup(t,n){return E.resolve(gn.min())}updateCollectionGroup(t,n,r){return E.resolve()}updateIndexEntries(t,n){return E.resolve()}}class EA{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n]||new Ut(Tt.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(t){return(this.index[t]||new Ut(Tt.comparator)).toArray()}}/**
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
 */class Ir{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new Ir(0)}static Bn(){return new Ir(-1)}}/**
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
 */class wA{constructor(){this.changes=new Dr(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Gt.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?E.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class TA{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class IA{constructor(t,n,r,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,n))).next(s=>(r!==null&&es(r.mutation,s,nn.empty(),oe.now()),s))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,st()).next(()=>r))}getLocalViewOfDocuments(t,n,r=st()){const s=Nn();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,r).next(i=>{let o=Ur();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=Nn();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,st()))}populateOverlays(t,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,s){let i=_n();const o=ts(),a=function(){return ts()}();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof wo)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),es(u.mutation,l,u.mutation.getFieldMask(),oe.now())):o.set(l.key,nn.empty())}),this.recalculateAndSaveOverlays(t,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new TA(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const r=ts();let s=new Rt((o,a)=>o-a),i=st();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||nn.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||st()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=ug();u.forEach(d=>{if(!i.has(d)){const g=pg(n.get(d),r.get(d));g!==null&&h.set(d,g),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(t,l,h))}return E.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,s){return function(o){return j.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):x0(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,s):this.getDocumentsMatchingCollectionQuery(t,n,r,s)}getNextDocuments(t,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,s-i.size):E.resolve(Nn());let a=-1,c=i;return o.next(l=>E.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?E.resolve():this.remoteDocumentCache.getEntry(t,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(t,l,i)).next(()=>this.computeViews(t,c,l,st())).next(u=>({batchId:a,changes:L0(u)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new j(n)).next(r=>{let s=Ur();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,n,r,s){const i=n.collectionGroup;let o=Ur();return this.indexManager.getCollectionParents(t,i).next(a=>E.forEach(a,c=>{const l=function(h,d){return new _o(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(t,l,r,s).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i,s))).next(o=>{i.forEach((c,l)=>{const u=l.getKey();o.get(u)===null&&(o=o.insert(u,Gt.newInvalidDocument(u)))});let a=Ur();return o.forEach((c,l)=>{const u=i.get(c);u!==void 0&&es(u.mutation,l,nn.empty(),oe.now()),vo(n,l)&&(a=a.insert(c,l))}),a})}}/**
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
 */class AA{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,n){return E.resolve(this.cr.get(n))}saveBundleMetadata(t,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:fr(s.createTime)}}(n)),E.resolve()}getNamedQuery(t,n){return E.resolve(this.lr.get(n))}saveNamedQuery(t,n){return this.lr.set(n.name,function(s){return{name:s.name,query:yA(s.bundledQuery),readTime:fr(s.readTime)}}(n)),E.resolve()}}/**
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
 */class RA{constructor(){this.overlays=new Rt(j.comparator),this.hr=new Map}getOverlay(t,n){return E.resolve(this.overlays.get(n))}getOverlays(t,n){const r=Nn();return E.forEach(n,s=>this.getOverlay(t,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((s,i)=>{this.ht(t,n,i)}),E.resolve()}removeOverlaysForBatchId(t,n,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),E.resolve()}getOverlaysForCollection(t,n,r){const s=Nn(),i=n.length+1,o=new j(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return E.resolve(s)}getOverlaysForCollectionGroup(t,n,r,s){let i=new Rt((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=Nn(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Nn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return E.resolve(a)}ht(t,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Y0(n,r));let i=this.hr.get(n);i===void 0&&(i=st(),this.hr.set(n,i)),this.hr.set(n,i.add(r.key))}}/**
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
 */class vl{constructor(){this.Pr=new Ut(Nt.Ir),this.Tr=new Ut(Nt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,n){const r=new Nt(t,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.Ar(new Nt(t,n))}Rr(t,n){t.forEach(r=>this.removeReference(r,n))}Vr(t){const n=new j(new Tt([])),r=new Nt(n,t),s=new Nt(n,t+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const n=new j(new Tt([])),r=new Nt(n,t),s=new Nt(n,t+1);let i=st();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new Nt(t,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class Nt{constructor(t,n){this.key=t,this.pr=n}static Ir(t,n){return j.comparator(t.key,n.key)||ut(t.pr,n.pr)}static Er(t,n){return ut(t.pr,n.pr)||j.comparator(t.key,n.key)}}/**
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
 */class SA{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new Ut(Nt.Ir)}checkEmpty(t){return E.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Q0(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.wr=this.wr.add(new Nt(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return E.resolve(o)}lookupMutationBatch(t,n){return E.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,s=this.br(r),i=s<0?0:s;return E.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return E.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return E.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new Nt(n,0),s=new Nt(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{const a=this.Sr(o.pr);i.push(a)}),E.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new Ut(ut);return n.forEach(s=>{const i=new Nt(s,0),o=new Nt(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],a=>{r=r.add(a.pr)})}),E.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,s=r.length+1;let i=r;j.isDocumentKey(i)||(i=i.child(""));const o=new Nt(new j(i),0);let a=new Ut(ut);return this.wr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.pr)),!0)},o),E.resolve(this.Dr(a))}Dr(t){const n=[];return t.forEach(r=>{const s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(t,n){Ct(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return E.forEach(n.mutations,s=>{const i=new Nt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,n){const r=new Nt(n,0),s=this.wr.firstAfterOrEqual(r);return E.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,E.resolve()}Cr(t,n){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const n=this.br(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class bA{constructor(t){this.vr=t,this.docs=function(){return new Rt(j.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return E.resolve(r?r.document.mutableCopy():Gt.newInvalidDocument(n))}getEntries(t,n){let r=_n();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Gt.newInvalidDocument(s))}),E.resolve(r)}getDocumentsMatchingQuery(t,n,r,s){let i=_n();const o=n.path,a=new j(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||f0(h0(u),r)<=0||(s.has(u.key)||vo(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return E.resolve(i)}getAllFromCollectionGroup(t,n,r,s){Y()}Fr(t,n){return E.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new CA(this)}getSize(t){return E.resolve(this.size)}}class CA extends wA{constructor(t){super(),this.ar=t}applyChanges(t){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(t,s)):this.ar.removeEntry(r)}),E.waitFor(n)}getFromCache(t,n){return this.ar.getEntry(t,n)}getAllFromCache(t,n){return this.ar.getEntries(t,n)}}/**
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
 */class PA{constructor(t){this.persistence=t,this.Mr=new Dr(n=>dl(n),pl),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.Or=0,this.Nr=new vl,this.targetCount=0,this.Br=Ir.Nn()}forEachTarget(t,n){return this.Mr.forEach((r,s)=>n(s)),E.resolve()}getLastRemoteSnapshotVersion(t){return E.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return E.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Br.next(),E.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),E.resolve()}qn(t){this.Mr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Br=new Ir(n),this.highestTargetId=n),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,n){return this.qn(n),this.targetCount+=1,E.resolve()}updateTargetData(t,n){return this.qn(n),E.resolve()}removeTargetData(t,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,E.resolve()}removeTargets(t,n,r){let s=0;const i=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),s++)}),E.waitFor(i).next(()=>s)}getTargetCount(t){return E.resolve(this.targetCount)}getTargetData(t,n){const r=this.Mr.get(n)||null;return E.resolve(r)}addMatchingKeys(t,n,r){return this.Nr.dr(n,r),E.resolve()}removeMatchingKeys(t,n,r){this.Nr.Rr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(t,o))}),E.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.Nr.Vr(n),E.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Nr.gr(n);return E.resolve(r)}containsKey(t,n){return E.resolve(this.Nr.containsKey(n))}}/**
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
 */class DA{constructor(t,n){this.Lr={},this.overlays={},this.kr=new ll(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new PA(this),this.indexManager=new vA,this.remoteDocumentCache=function(s){return new bA(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new _A(n),this.$r=new AA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new RA,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Lr[t.toKey()];return r||(r=new SA(n,this.referenceDelegate),this.Lr[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,n,r){D("MemoryPersistence","Starting transaction:",t);const s=new VA(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(t,n){return E.or(Object.values(this.Lr).map(r=>()=>r.containsKey(t,n)))}}class VA extends p0{constructor(t){super(),this.currentSequenceNumber=t}}class El{constructor(t){this.persistence=t,this.zr=new vl,this.jr=null}static Hr(t){return new El(t)}get Jr(){if(this.jr)return this.jr;throw Y()}addReference(t,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),E.resolve()}removeReference(t,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),E.resolve()}markPotentiallyOrphaned(t,n){return this.Jr.add(n.toString()),E.resolve()}removeTarget(t,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(t,n))}Ur(){this.jr=new Set}Wr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return E.forEach(this.Jr,r=>{const s=j.fromPath(r);return this.Yr(t,s).next(i=>{i||n.removeEntry(s,G.min())})}).next(()=>(this.jr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Yr(t,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(t){return 0}Yr(t,n){return E.or([()=>E.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Gr(t,n)])}}/**
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
 */class wl{constructor(t,n,r,s){this.targetId=t,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(t,n){let r=st(),s=st();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new wl(t,n.fromCache,r,s)}}/**
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
 */class xA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class OA{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return nE()?8:On.v(mi())>0?6:4}()}initialize(t,n){this.zi=t,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(t,n,r,s){const i={result:null};return this.ji(t,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Hi(t,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new xA;return this.Ji(t,n,o).next(a=>{if(i.result=a,this.Ui)return this.Yi(t,n,o,a.size)})}).next(()=>i.result)}Yi(t,n,r,s){return r.documentReadCount<this.Wi?(Lr()<=rt.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",rr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),E.resolve()):(Lr()<=rt.DEBUG&&D("QueryEngine","Query:",rr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(Lr()<=rt.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",rr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,ke(n))):E.resolve())}ji(t,n){if(Rh(n))return E.resolve(null);let r=ke(n);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Qa(n,null,"F"),r=ke(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(i=>{const o=st(...i);return this.zi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(c=>{const l=this.Zi(n,a);return this.Xi(n,l,o,c.readTime)?this.ji(t,Qa(n,null,"F")):this.es(t,l,n,c)}))})))}Hi(t,n,r,s){return Rh(n)||s.isEqual(G.min())?E.resolve(null):this.zi.getDocuments(t,r).next(i=>{const o=this.Zi(n,i);return this.Xi(n,o,r,s)?E.resolve(null):(Lr()<=rt.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),rr(n)),this.es(t,o,n,u0(s,-1)).next(a=>a))})}Zi(t,n){let r=new Ut(cg(t));return n.forEach((s,i)=>{vo(t,i)&&(r=r.add(i))}),r}Xi(t,n,r,s){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(t,n,r){return Lr()<=rt.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",rr(n)),this.zi.getDocumentsMatchingQuery(t,n,gn.min(),r)}es(t,n,r,s){return this.zi.getDocumentsMatchingQuery(t,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class NA{constructor(t,n,r,s){this.persistence=t,this.ts=n,this.serializer=s,this.ns=new Rt(ut),this.rs=new Dr(i=>dl(i),pl),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new IA(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.ns))}}function kA(e,t,n,r){return new NA(e,t,n,r)}async function Rg(e,t){const n=ot(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n._s(t),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=st();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({us:l,removedBatchIds:o,addedBatchIds:a}))})})}function Sg(e){const t=ot(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Qr.getLastRemoteSnapshotVersion(n))}function MA(e,t){const n=ot(e),r=t.snapshotVersion;let s=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.os.newChangeBuffer({trackRemovals:!0});s=n.ns;const a=[];t.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.Qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(i,u.addedDocuments,h)));let g=d.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(h)!==null?g=g.withResumeToken(Jt.EMPTY_BYTE_STRING,G.min()).withLastLimboFreeSnapshotVersion(G.min()):u.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(u.resumeToken,r)),s=s.insert(h,g),function(S,I,O){return S.resumeToken.approximateByteSize()===0||I.snapshotVersion.toMicroseconds()-S.snapshotVersion.toMicroseconds()>=3e8?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(d,g,u)&&a.push(n.Qr.updateTargetData(i,g))});let c=_n(),l=st();if(t.documentUpdates.forEach(u=>{t.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(LA(i,o,t.documentUpdates).next(u=>{c=u.cs,l=u.ls})),!r.isEqual(G.min())){const u=n.Qr.getLastRemoteSnapshotVersion(i).next(h=>n.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return E.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.ns=s,i))}function LA(e,t,n){let r=st(),s=st();return n.forEach(i=>r=r.add(i)),t.getEntries(e,r).next(i=>{let o=_n();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(G.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):D("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{cs:o,ls:s}})}function FA(e,t){const n=ot(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Qr.getTargetData(r,t).next(i=>i?(s=i,E.resolve(s)):n.Qr.allocateTargetId(r).next(o=>(s=new rn(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(t,r.targetId)),r})}async function tc(e,t,n){const r=ot(e),s=r.ns.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Os(o))throw o;D("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.ns=r.ns.remove(t),r.rs.delete(s.target)}function Mh(e,t,n){const r=ot(e);let s=G.min(),i=st();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,u){const h=ot(c),d=h.rs.get(u);return d!==void 0?E.resolve(h.ns.get(d)):h.Qr.getTargetData(l,u)}(r,o,ke(t)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.ts.getDocumentsMatchingQuery(o,t,n?s:G.min(),n?i:st())).next(a=>($A(r,N0(t),a),{documents:a,hs:i})))}function $A(e,t,n){let r=e.ss.get(t)||G.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),e.ss.set(t,r)}class Lh{constructor(){this.activeTargetIds=B0()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class BA{constructor(){this.no=new Lh,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,n,r){this.ro[t]=n}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new Lh,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class UA{io(t){}shutdown(){}}/**
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
 */class Fh{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){D("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){D("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Xs=null;function ra(){return Xs===null?Xs=function(){return 268435456+Math.round(2147483648*Math.random())}():Xs++,"0x"+Xs.toString(16)}/**
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
 */const jA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class qA{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}onMessage(t){this.Ao=t}close(){this.ho()}send(t){this.lo(t)}Ro(){this.Io()}Vo(t){this.Eo(t)}mo(t){this.Ao(t)}}/**
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
 */const Ht="WebChannelConnection";class zA extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${s}/databases/${i}`,this.yo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get wo(){return!1}So(n,r,s,i,o){const a=ra(),c=this.bo(n,r.toUriEncodedString());D("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(l,i,o),this.Co(n,c,l,s).then(u=>(D("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw vr("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}vo(n,r,s,i,o,a){return this.So(n,r,s,i,o)}Do(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Pr}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}bo(n,r){const s=jA[n];return`${this.fo}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Co(t,n,r,s){const i=ra();return new Promise((o,a)=>{const c=new ZI;c.setWithCredentials(!0),c.listenOnce(JI.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case ta.NO_ERROR:const u=c.getResponseJson();D(Ht,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(u)),o(u);break;case ta.TIMEOUT:D(Ht,`RPC '${t}' ${i} timed out`),a(new B(C.DEADLINE_EXCEEDED,"Request time out"));break;case ta.HTTP_ERROR:const h=c.getStatus();if(D(Ht,`RPC '${t}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const g=d==null?void 0:d.error;if(g&&g.status&&g.message){const T=function(I){const O=I.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(O)>=0?O:C.UNKNOWN}(g.status);a(new B(T,g.message))}else a(new B(C.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new B(C.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{D(Ht,`RPC '${t}' ${i} completed.`)}});const l=JSON.stringify(s);D(Ht,`RPC '${t}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}Fo(t,n,r){const s=ra(),i=[this.fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=QI(),a=YI(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");D(Ht,`Creating RPC '${t}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,g=!1;const T=new qA({lo:I=>{g?D(Ht,`Not sending because RPC '${t}' stream ${s} is closed:`,I):(d||(D(Ht,`Opening RPC '${t}' stream ${s} transport.`),h.open(),d=!0),D(Ht,`RPC '${t}' stream ${s} sending:`,I),h.send(I))},ho:()=>h.close()}),S=(I,O,L)=>{I.listen(O,$=>{try{L($)}catch(W){setTimeout(()=>{throw W},0)}})};return S(h,Qs.EventType.OPEN,()=>{g||D(Ht,`RPC '${t}' stream ${s} transport opened.`)}),S(h,Qs.EventType.CLOSE,()=>{g||(g=!0,D(Ht,`RPC '${t}' stream ${s} transport closed`),T.Vo())}),S(h,Qs.EventType.ERROR,I=>{g||(g=!0,vr(Ht,`RPC '${t}' stream ${s} transport errored:`,I),T.Vo(new B(C.UNAVAILABLE,"The operation could not be completed")))}),S(h,Qs.EventType.MESSAGE,I=>{var O;if(!g){const L=I.data[0];Ct(!!L);const $=L,W=$.error||((O=$[0])===null||O===void 0?void 0:O.error);if(W){D(Ht,`RPC '${t}' stream ${s} received error:`,W);const J=W.status;let q=function(tt){const yt=St[tt];if(yt!==void 0)return mg(yt)}(J),gt=W.message;q===void 0&&(q=C.INTERNAL,gt="Unknown error status: "+J+" with message "+W.message),g=!0,T.Vo(new B(q,gt)),h.close()}else D(Ht,`RPC '${t}' stream ${s} received:`,L),T.mo(L)}}),S(a,XI.STAT_EVENT,I=>{I.stat===ph.PROXY?D(Ht,`RPC '${t}' stream ${s} detected buffering proxy`):I.stat===ph.NOPROXY&&D(Ht,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{T.Ro()},0),T}}function sa(){return typeof document<"u"?document:null}/**
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
 */function bg(e){return new sA(e,!0)}/**
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
 */class Cg{constructor(t,n,r=1e3,s=1.5,i=6e4){this.oi=t,this.timerId=n,this.Mo=r,this.xo=s,this.Oo=i,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(t){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Lo),s=Math.max(0,n-r);s>0&&D("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Lo=Date.now(),t())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Bo!==null&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){this.Bo!==null&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
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
 */class HA{constructor(t,n,r,s,i,o,a,c){this.oi=t,this.$o=r,this.Uo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new Cg(t,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(t){this.n_(),this.stream.send(t)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(t,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,t!==4?this.jo.reset():n&&n.code===C.RESOURCE_EXHAUSTED?(Le(n.toString()),Le("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.To(n)}i_(){}auth(){this.state=1;const t=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Wo===n&&this.o_(r,s)},r=>{t(()=>{const s=new B(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(s)})})}o_(t,n){const r=this.s_(this.Wo);this.stream=this.a_(t,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(s=>{r(()=>this.__(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(t){return D("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}s_(t){return n=>{this.oi.enqueueAndForget(()=>this.Wo===t?n():(D("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class KA extends HA{constructor(t,n,r,s,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}a_(t,n){return this.connection.Fo("Listen",t,n)}onMessage(t){this.jo.reset();const n=lA(this.serializer,t),r=function(i){if(!("targetChange"in i))return G.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?G.min():o.readTime?fr(o.readTime):G.min()}(t);return this.listener.u_(n,r)}c_(t){const n={};n.database=kh(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=Wa(c)?{documents:uA(i,c)}:{query:hA(i,c).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=oA(i,o.resumeToken);const l=Xa(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(G.min())>0){a.readTime=iA(i,o.snapshotVersion.toTimestamp());const l=Xa(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,t);const r=dA(this.serializer,t);r&&(n.labels=r),this.t_(n)}l_(t){const n={};n.database=kh(this.serializer),n.removeTarget=t,this.t_(n)}}/**
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
 */class GA extends class{}{constructor(t,n,r,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.A_=!1}R_(){if(this.A_)throw new B(C.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,n,r,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.So(t,Za(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new B(C.UNKNOWN,i.toString())})}vo(t,n,r,s,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(t,Za(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new B(C.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class WA{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(t){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.y_("Offline")))}set(t){this.b_(),this.m_=0,t==="Online"&&(this.g_=!1),this.y_(t)}y_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}w_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(Le(n),this.g_=!1):D("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
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
 */class QA{constructor(t,n,r,s,i){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=i,this.M_.io(o=>{r.enqueueAndForget(async()=>{Ms(this)&&(D("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=ot(c);l.v_.add(4),await ks(l),l.x_.set("Unknown"),l.v_.delete(4),await Io(l)}(this))})}),this.x_=new WA(r,s)}}async function Io(e){if(Ms(e))for(const t of e.F_)await t(!0)}async function ks(e){for(const t of e.F_)await t(!1)}function Pg(e,t){const n=ot(e);n.C_.has(t.targetId)||(n.C_.set(t.targetId,t),Al(n)?Il(n):Vr(n).Jo()&&Tl(n,t))}function Dg(e,t){const n=ot(e),r=Vr(n);n.C_.delete(t),r.Jo()&&Vg(n,t),n.C_.size===0&&(r.Jo()?r.Xo():Ms(n)&&n.x_.set("Unknown"))}function Tl(e,t){if(e.O_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(G.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Vr(e).c_(t)}function Vg(e,t){e.O_.Oe(t),Vr(e).l_(t)}function Il(e){e.O_=new tA({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>e.C_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),Vr(e).start(),e.x_.p_()}function Al(e){return Ms(e)&&!Vr(e).Ho()&&e.C_.size>0}function Ms(e){return ot(e).v_.size===0}function xg(e){e.O_=void 0}async function YA(e){e.C_.forEach((t,n)=>{Tl(e,t)})}async function JA(e,t){xg(e),Al(e)?(e.x_.S_(t),Il(e)):e.x_.set("Unknown")}async function XA(e,t,n){if(e.x_.set("Online"),t instanceof yg&&t.state===2&&t.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.C_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.C_.delete(a),s.O_.removeTarget(a))}(e,t)}catch(r){D("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await $h(e,r)}else if(t instanceof ai?e.O_.$e(t):t instanceof _g?e.O_.Je(t):e.O_.Ge(t),!n.isEqual(G.min()))try{const r=await Sg(e.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.O_.it(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.C_.get(l);u&&i.C_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.C_.get(c);if(!u)return;i.C_.set(c,u.withResumeToken(Jt.EMPTY_BYTE_STRING,u.snapshotVersion)),Vg(i,c);const h=new rn(u.target,c,l,u.sequenceNumber);Tl(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(r){D("RemoteStore","Failed to raise snapshot:",r),await $h(e,r)}}async function $h(e,t,n){if(!Os(t))throw t;e.v_.add(1),await ks(e),e.x_.set("Offline"),n||(n=()=>Sg(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{D("RemoteStore","Retrying IndexedDB access"),await n(),e.v_.delete(1),await Io(e)})}async function Bh(e,t){const n=ot(e);n.asyncQueue.verifyOperationInProgress(),D("RemoteStore","RemoteStore received new credentials");const r=Ms(n);n.v_.add(3),await ks(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.v_.delete(3),await Io(n)}async function ZA(e,t){const n=ot(e);t?(n.v_.delete(2),await Io(n)):t||(n.v_.add(2),await ks(n),n.x_.set("Unknown"))}function Vr(e){return e.N_||(e.N_=function(n,r,s){const i=ot(n);return i.R_(),new KA(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{Po:YA.bind(null,e),To:JA.bind(null,e),u_:XA.bind(null,e)}),e.F_.push(async t=>{t?(e.N_.Zo(),Al(e)?Il(e):e.x_.set("Unknown")):(await e.N_.stop(),xg(e))})),e.N_}/**
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
 */class Rl{constructor(t,n,r,s,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new fn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,s,i){const o=Date.now()+r,a=new Rl(t,n,o,s,i);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(C.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Og(e,t){if(Le("AsyncQueue",`${t}: ${e}`),Os(e))return new B(C.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class dr{constructor(t){this.comparator=t?(n,r)=>t(n,r)||j.comparator(n.key,r.key):(n,r)=>j.comparator(n.key,r.key),this.keyedMap=Ur(),this.sortedSet=new Rt(this.comparator)}static emptySet(t){return new dr(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof dr)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
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
 */class Uh{constructor(){this.L_=new Rt(j.comparator)}track(t){const n=t.doc.key,r=this.L_.get(n);r?t.type!==0&&r.type===3?this.L_=this.L_.insert(n,t):t.type===3&&r.type!==1?this.L_=this.L_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.L_=this.L_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.L_=this.L_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.L_=this.L_.remove(n):t.type===1&&r.type===2?this.L_=this.L_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.L_=this.L_.insert(n,{type:2,doc:t.doc}):Y():this.L_=this.L_.insert(n,t)}k_(){const t=[];return this.L_.inorderTraversal((n,r)=>{t.push(r)}),t}}class Ar{constructor(t,n,r,s,i,o,a,c,l){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(t,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ar(t,n,dr.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&yo(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class tR{constructor(){this.q_=void 0,this.Q_=[]}}class eR{constructor(){this.queries=new Dr(t=>ag(t),yo),this.onlineState="Unknown",this.K_=new Set}}async function nR(e,t){const n=ot(e),r=t.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new tR),s)try{i.q_=await n.onListen(r)}catch(o){const a=Og(o,`Initialization of query '${rr(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,i),i.Q_.push(t),t.U_(n.onlineState),i.q_&&t.W_(i.q_)&&Sl(n)}async function rR(e,t){const n=ot(e),r=t.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.Q_.indexOf(t);o>=0&&(i.Q_.splice(o,1),s=i.Q_.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function sR(e,t){const n=ot(e);let r=!1;for(const s of t){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.Q_)a.W_(s)&&(r=!0);o.q_=s}}r&&Sl(n)}function iR(e,t,n){const r=ot(e),s=r.queries.get(t);if(s)for(const i of s.Q_)i.onError(n);r.queries.delete(t)}function Sl(e){e.K_.forEach(t=>{t.next()})}class oR{constructor(t,n,r){this.query=t,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Ar(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.z_?this.H_(t)&&(this.G_.next(t),n=!0):this.J_(t,this.onlineState)&&(this.Y_(t),n=!0),this.j_=t,n}onError(t){this.G_.error(t)}U_(t){this.onlineState=t;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,t)&&(this.Y_(this.j_),n=!0),n}J_(t,n){if(!t.fromCache)return!0;const r=n!=="Offline";return(!this.options.Z_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}H_(t){if(t.docChanges.length>0)return!0;const n=this.j_&&this.j_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(t){t=Ar.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.z_=!0,this.G_.next(t)}}/**
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
 */class Ng{constructor(t){this.key=t}}class kg{constructor(t){this.key=t}}class aR{constructor(t,n){this.query=t,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=st(),this.mutatedKeys=st(),this.ua=cg(t),this.ca=new dr(this.ua)}get la(){return this.oa}ha(t,n){const r=n?n.Pa:new Uh,s=n?n.ca:this.ca;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((u,h)=>{const d=s.get(u),g=vo(this.query,h)?h:null,T=!!d&&this.mutatedKeys.has(d.key),S=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let I=!1;d&&g?d.data.isEqual(g.data)?T!==S&&(r.track({type:3,doc:g}),I=!0):this.Ia(d,g)||(r.track({type:2,doc:g}),I=!0,(c&&this.ua(g,c)>0||l&&this.ua(g,l)<0)&&(a=!0)):!d&&g?(r.track({type:0,doc:g}),I=!0):d&&!g&&(r.track({type:1,doc:d}),I=!0,(c||l)&&(a=!0)),I&&(g?(o=o.add(g),i=S?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{ca:o,Pa:r,Xi:a,mutatedKeys:i}}Ia(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r,s){const i=this.ca;this.ca=t.ca,this.mutatedKeys=t.mutatedKeys;const o=t.Pa.k_();o.sort((u,h)=>function(g,T){const S=I=>{switch(I){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return S(g)-S(T)}(u.type,h.type)||this.ua(u.doc,h.doc)),this.Ta(r),s=s!=null&&s;const a=n&&!s?this.Ea():[],c=this.aa.size===0&&this.current&&!s?1:0,l=c!==this._a;return this._a=c,o.length!==0||l?{snapshot:new Ar(this.query,t.ca,i,o,t.mutatedKeys,c===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),da:a}:{da:a}}U_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new Uh,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{da:[]}}Aa(t){return!this.oa.has(t)&&!!this.ca.has(t)&&!this.ca.get(t).hasLocalMutations}Ta(t){t&&(t.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=t.current)}Ea(){if(!this.current)return[];const t=this.aa;this.aa=st(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const n=[];return t.forEach(r=>{this.aa.has(r)||n.push(new kg(r))}),this.aa.forEach(r=>{t.has(r)||n.push(new Ng(r))}),n}Ra(t){this.oa=t.hs,this.aa=st();const n=this.ha(t.documents);return this.applyChanges(n,!0)}Va(){return Ar.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class cR{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class lR{constructor(t){this.key=t,this.ma=!1}}class uR{constructor(t,n,r,s,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new Dr(a=>ag(a),yo),this.pa=new Map,this.ya=new Set,this.wa=new Rt(j.comparator),this.Sa=new Map,this.ba=new vl,this.Da={},this.Ca=new Map,this.va=Ir.Bn(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function hR(e,t){const n=yR(e);let r,s;const i=n.ga.get(t);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Va();else{const o=await FA(n.localStore,ke(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await fR(n,t,r,a==="current",o.resumeToken),n.isPrimaryClient&&Pg(n.remoteStore,o)}return s}async function fR(e,t,n,r,s){e.Ma=(h,d,g)=>async function(S,I,O,L){let $=I.view.ha(O);$.Xi&&($=await Mh(S.localStore,I.query,!1).then(({documents:gt})=>I.view.ha(gt,$)));const W=L&&L.targetChanges.get(I.targetId),J=L&&L.targetMismatches.get(I.targetId)!=null,q=I.view.applyChanges($,S.isPrimaryClient,W,J);return qh(S,I.targetId,q.da),q.snapshot}(e,h,d,g);const i=await Mh(e.localStore,t,!0),o=new aR(t,i.hs),a=o.ha(i.documents),c=Ns.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",s),l=o.applyChanges(a,e.isPrimaryClient,c);qh(e,n,l.da);const u=new cR(t,n,o);return e.ga.set(t,u),e.pa.has(n)?e.pa.get(n).push(t):e.pa.set(n,[t]),l.snapshot}async function dR(e,t){const n=ot(e),r=n.ga.get(t),s=n.pa.get(r.targetId);if(s.length>1)return n.pa.set(r.targetId,s.filter(i=>!yo(i,t))),void n.ga.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await tc(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Dg(n.remoteStore,r.targetId),ec(n,r.targetId)}).catch(ol)):(ec(n,r.targetId),await tc(n.localStore,r.targetId,!0))}async function Mg(e,t){const n=ot(e);try{const r=await MA(n.localStore,t);t.targetChanges.forEach((s,i)=>{const o=n.Sa.get(i);o&&(Ct(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.ma=!0:s.modifiedDocuments.size>0?Ct(o.ma):s.removedDocuments.size>0&&(Ct(o.ma),o.ma=!1))}),await Fg(n,r,t)}catch(r){await ol(r)}}function jh(e,t,n){const r=ot(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ga.forEach((i,o)=>{const a=o.view.U_(t);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=ot(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const d of h.Q_)d.U_(a)&&(l=!0)}),l&&Sl(c)}(r.eventManager,t),s.length&&r.fa.u_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function pR(e,t,n){const r=ot(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.Sa.get(t),i=s&&s.key;if(i){let o=new Rt(j.comparator);o=o.insert(i,Gt.newNoDocument(i,G.min()));const a=st().add(i),c=new To(G.min(),new Map,new Rt(ut),o,a);await Mg(r,c),r.wa=r.wa.remove(i),r.Sa.delete(t),bl(r)}else await tc(r.localStore,t,!1).then(()=>ec(r,t,n)).catch(ol)}function ec(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.pa.get(t))e.ga.delete(r),n&&e.fa.xa(r,n);e.pa.delete(t),e.isPrimaryClient&&e.ba.Vr(t).forEach(r=>{e.ba.containsKey(r)||Lg(e,r)})}function Lg(e,t){e.ya.delete(t.path.canonicalString());const n=e.wa.get(t);n!==null&&(Dg(e.remoteStore,n),e.wa=e.wa.remove(t),e.Sa.delete(n),bl(e))}function qh(e,t,n){for(const r of n)r instanceof Ng?(e.ba.addReference(r.key,t),gR(e,r)):r instanceof kg?(D("SyncEngine","Document no longer in limbo: "+r.key),e.ba.removeReference(r.key,t),e.ba.containsKey(r.key)||Lg(e,r.key)):Y()}function gR(e,t){const n=t.key,r=n.path.canonicalString();e.wa.get(n)||e.ya.has(r)||(D("SyncEngine","New document in limbo: "+n),e.ya.add(r),bl(e))}function bl(e){for(;e.ya.size>0&&e.wa.size<e.maxConcurrentLimboResolutions;){const t=e.ya.values().next().value;e.ya.delete(t);const n=new j(Tt.fromString(t)),r=e.va.next();e.Sa.set(r,new lR(n)),e.wa=e.wa.insert(n,r),Pg(e.remoteStore,new rn(ke(gl(n.path)),r,"TargetPurposeLimboResolution",ll._e))}}async function Fg(e,t,n){const r=ot(e),s=[],i=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,c)=>{o.push(r.Ma(c,t,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=wl.Ki(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.fa.u_(s),await async function(c,l){const u=ot(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>E.forEach(l,d=>E.forEach(d.qi,g=>u.persistence.referenceDelegate.addReference(h,d.targetId,g)).next(()=>E.forEach(d.Qi,g=>u.persistence.referenceDelegate.removeReference(h,d.targetId,g)))))}catch(h){if(!Os(h))throw h;D("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const d=h.targetId;if(!h.fromCache){const g=u.ns.get(d),T=g.snapshotVersion,S=g.withLastLimboFreeSnapshotVersion(T);u.ns=u.ns.insert(d,S)}}}(r.localStore,i))}async function mR(e,t){const n=ot(e);if(!n.currentUser.isEqual(t)){D("SyncEngine","User change. New user:",t.toKey());const r=await Rg(n.localStore,t);n.currentUser=t,function(i,o){i.Ca.forEach(a=>{a.forEach(c=>{c.reject(new B(C.CANCELLED,o))})}),i.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Fg(n,r.us)}}function _R(e,t){const n=ot(e),r=n.Sa.get(t);if(r&&r.ma)return st().add(r.key);{let s=st();const i=n.pa.get(t);if(!i)return s;for(const o of i){const a=n.ga.get(o);s=s.unionWith(a.view.la)}return s}}function yR(e){const t=ot(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Mg.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=_R.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=pR.bind(null,t),t.fa.u_=sR.bind(null,t.eventManager),t.fa.xa=iR.bind(null,t.eventManager),t}class zh{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=bg(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return kA(this.persistence,new OA,t.initialUser,this.serializer)}createPersistence(t){return new DA(El.Hr,this.serializer)}createSharedClientState(t){return new BA}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class vR{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>jh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=mR.bind(null,this.syncEngine),await ZA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new eR}()}createDatastore(t){const n=bg(t.databaseInfo.databaseId),r=function(i){return new zA(i)}(t.databaseInfo);return function(i,o,a,c){return new GA(i,o,a,c)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,s,i,o,a){return new QA(r,s,i,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>jh(this.syncEngine,n,0),function(){return Fh.D()?new Fh:new UA}())}createSyncEngine(t,n){return function(s,i,o,a,c,l,u){const h=new uR(s,i,o,a,c,l);return u&&(h.Fa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t;await async function(r){const s=ot(r);D("RemoteStore","RemoteStore shutting down."),s.v_.add(5),await ks(s),s.M_.shutdown(),s.x_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
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
 */class ER{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ba(this.observer.next,t)}error(t){this.observer.error?this.Ba(this.observer.error,t):Le("Uncaught Error in snapshot listener:",t.toString())}La(){this.muted=!0}Ba(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */class wR{constructor(t,n,r,s){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Kt.UNAUTHENTICATED,this.clientId=Zp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{D("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(D("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new B(C.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new fn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=Og(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function ia(e,t){e.asyncQueue.verifyOperationInProgress(),D("FirestoreClient","Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Rg(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function Hh(e,t){e.asyncQueue.verifyOperationInProgress();const n=await IR(e);D("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(r=>Bh(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,s)=>Bh(t.remoteStore,s)),e._onlineComponents=t}function TR(e){return e.name==="FirebaseError"?e.code===C.FAILED_PRECONDITION||e.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function IR(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){D("FirestoreClient","Using user provided OfflineComponentProvider");try{await ia(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!TR(n))throw n;vr("Error using user provided cache. Falling back to memory cache: "+n),await ia(e,new zh)}}else D("FirestoreClient","Using default OfflineComponentProvider"),await ia(e,new zh);return e._offlineComponents}async function AR(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(D("FirestoreClient","Using user provided OnlineComponentProvider"),await Hh(e,e._uninitializedComponentsProvider._online)):(D("FirestoreClient","Using default OnlineComponentProvider"),await Hh(e,new vR))),e._onlineComponents}async function RR(e){const t=await AR(e),n=t.eventManager;return n.onListen=hR.bind(null,t.syncEngine),n.onUnlisten=dR.bind(null,t.syncEngine),n}function SR(e,t,n={}){const r=new fn;return e.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new ER({next:d=>{o.enqueueAndForget(()=>rR(i,h));const g=d.docs.has(a);!g&&d.fromCache?l.reject(new B(C.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&d.fromCache&&c&&c.source==="server"?l.reject(new B(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new oR(gl(a.path),u,{includeMetadataChanges:!0,Z_:!0});return nR(i,h)}(await RR(e),e.asyncQueue,t,n,r)),r.promise}/**
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
 */function $g(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const Kh=new Map;/**
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
 */function bR(e,t,n){if(!n)throw new B(C.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function CR(e,t,n,r){if(t===!0&&r===!0)throw new B(C.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Gh(e){if(!j.isDocumentKey(e))throw new B(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function PR(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":Y()}function nc(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new B(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=PR(e);throw new B(C.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class Wh{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new B(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new B(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}CR("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=$g((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new B(C.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new B(C.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new B(C.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Cl{constructor(t,n,r,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wh({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new B(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new B(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wh(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new e0;switch(r.type){case"firstParty":return new i0(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Kh.get(n);r&&(D("ComponentProvider","Removing Datastore"),Kh.delete(n),r.terminate())}(this),Promise.resolve()}}function DR(e,t,n,r={}){var s;const i=(e=nc(e,Cl))._getSettings(),o=`${t}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&vr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=Kt.MOCK_USER;else{a=Zv(r.mockUserToken,(s=e._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new B(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Kt(l)}e._authCredentials=new n0(new Xp(a,c))}}/**
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
 */class Pl{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Pl(this.firestore,t,this._query)}}class ze{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ws(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ze(this.firestore,t,this._key)}}class ws extends Pl{constructor(t,n,r){super(t,n,gl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ze(this.firestore,null,new j(t))}withConverter(t){return new ws(this.firestore,t,this._path)}}function VR(e,t,...n){if(e=Cc(e),arguments.length===1&&(t=Zp.newId()),bR("doc","path",t),e instanceof Cl){const r=Tt.fromString(t,...n);return Gh(r),new ze(e,null,new j(r))}{if(!(e instanceof ze||e instanceof ws))throw new B(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Tt.fromString(t,...n));return Gh(r),new ze(e.firestore,e instanceof ws?e.converter:null,new j(r))}}/**
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
 */class xR{constructor(){this.Xa=Promise.resolve(),this.eu=[],this.tu=!1,this.nu=[],this.ru=null,this.iu=!1,this.su=!1,this.ou=[],this.jo=new Cg(this,"async_queue_retry"),this._u=()=>{const n=sa();n&&D("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const t=sa();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._u)}get isShuttingDown(){return this.tu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.au(),this.uu(t)}enterRestrictedMode(t){if(!this.tu){this.tu=!0,this.su=t||!1;const n=sa();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._u)}}enqueue(t){if(this.au(),this.tu)return new Promise(()=>{});const n=new fn;return this.uu(()=>this.tu&&this.su?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.eu.push(t),this.cu()))}async cu(){if(this.eu.length!==0){try{await this.eu[0](),this.eu.shift(),this.jo.reset()}catch(t){if(!Os(t))throw t;D("AsyncQueue","Operation failed with retryable error: "+t)}this.eu.length>0&&this.jo.qo(()=>this.cu())}}uu(t){const n=this.Xa.then(()=>(this.iu=!0,t().catch(r=>{this.ru=r,this.iu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Le("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.iu=!1,r))));return this.Xa=n,n}enqueueAfterDelay(t,n,r){this.au(),this.ou.indexOf(t)>-1&&(n=0);const s=Rl.createAndSchedule(this,t,n,r,i=>this.lu(i));return this.nu.push(s),s}au(){this.ru&&Y()}verifyOperationInProgress(){}async hu(){let t;do t=this.Xa,await t;while(t!==this.Xa)}Pu(t){for(const n of this.nu)if(n.timerId===t)return!0;return!1}Iu(t){return this.hu().then(()=>{this.nu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.nu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.hu()})}Tu(t){this.ou.push(t)}lu(t){const n=this.nu.indexOf(t);this.nu.splice(n,1)}}class Bg extends Cl{constructor(t,n,r,s){super(t,n,r,s),this.type="firestore",this._queue=function(){return new xR}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ug(this),this._firestoreClient.terminate()}}function OR(e,t){const n=typeof e=="object"?e:Td(),r=typeof e=="string"?e:t||"(default)",s=As(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Jv("firestore");i&&DR(s,...i)}return s}function NR(e){return e._firestoreClient||Ug(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Ug(e){var t,n,r;const s=e._freezeSettings(),i=function(a,c,l,u){return new v0(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,$g(u.experimentalLongPollingOptions),u.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,s);e._firestoreClient=new wR(e._authCredentials,e._appCheckCredentials,e._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class Vi{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Vi(Jt.fromBase64String(t))}catch(n){throw new B(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Vi(Jt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class jg{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new B(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new te(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class kR{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new B(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new B(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return ut(this._lat,t._lat)||ut(this._long,t._long)}}const MR=new RegExp("[~\\*/\\[\\]]");function LR(e,t,n){if(t.search(MR)>=0)throw Qh(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new jg(...t.split("."))._internalPath}catch{throw Qh(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Qh(e,t,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new B(C.INVALID_ARGUMENT,a+e+c)}/**
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
 */class qg{constructor(t,n,r,s,i){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ze(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new FR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(zg("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class FR extends qg{data(){return super.data()}}function zg(e,t){return typeof t=="string"?LR(e,t):t instanceof jg?t._internalPath:t._delegate._internalPath}class $R{convertValue(t,n="none"){switch(Hn(t)){case 0:return null;case 1:return t.booleanValue;case 2:return bt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(zn(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw Y()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return mo(t,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(t){return new kR(bt(t.latitude),bt(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=hl(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ys(t));default:return null}}convertTimestamp(t){const n=mn(t);return new oe(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=Tt.fromString(t);Ct(Ag(r));const s=new vs(r.get(1),r.get(3)),i=new j(r.popFirst(5));return s.isEqual(n)||Le(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */class BR{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Hg extends qg{constructor(t,n,r,s,i,o){super(t,n,r,s,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new UR(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(zg("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class UR extends Hg{data(t={}){return super.data(t)}}/**
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
 */function jR(e){e=nc(e,ze);const t=nc(e.firestore,Bg);return SR(NR(t),e._key).then(n=>zR(t,e,n))}class qR extends $R{constructor(t){super(),this.firestore=t}convertBytes(t){return new Vi(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new ze(this.firestore,null,n)}}function zR(e,t,n){const r=n.docs.get(t._key),s=new qR(e);return new Hg(e,s,t._key,r,new BR(n.hasPendingWrites,n.fromCache),t.converter)}(function(t,n=!0){(function(s){Pr=s})(aw),pn(new He("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Bg(new r0(r.getProvider("auth-internal")),new a0(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new B(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new vs(l.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Ne(gh,"4.4.1",t),Ne(gh,"4.4.1","esm2017")})();const HR={apiKey:"AIzaSyAZnAECbdwXY6SOvDa5kyM-AE-8X3EYPpI",authDomain:"elecoxy-com.firebaseapp.com",projectId:"elecoxy-com",storageBucket:"elecoxy-com.appspot.com",messagingSenderId:"926870137110",appId:"1:926870137110:web:04d9d9d386600606c24837",measurementId:"G-B73FH0QJ3L"},Kg=wd(HR);HT(Kg);const KR=OR(Kg),Dl=Cy("config",{persist:!0,state:()=>({tag:"home",isExpended:!1,bugptURL:"https://ai.yizheyun.cn",azureSpeech:""}),getters:{modelVersion:()=>"gpt-4-turbo",apiVersion:()=>"2023-12-01-preview",languageVersion:()=>({grammar:"2.0.0",translate:"1.5.0",c2m:"1.2.0"}),db:()=>KR},actions:{async setGptKey(e=!1){if(this.elecoxyKey!==""||e)try{const t=VR(this.db,"basic",this.elecoxyKey),n=await jR(t);n.exists()?this.azureSpeech=n.data().azureSpeech:this.azureSpeech=""}catch{this.azureSpeech=""}}}}),GR=[{path:"/",name:"home",component:()=>An(()=>import("./HomeView-47gcffO0.js"),__vite__mapDeps([0,1]))},{path:"/publications",name:"publications",component:()=>An(()=>import("./PublicationsView-3GgJ7pxt.js"),__vite__mapDeps([2,3]))},{path:"/projects",children:[{path:"",name:"projects",component:()=>An(()=>import("./ProjectsView--KR7lf1b.js"),__vite__mapDeps([4,5]))},{path:"tarot",name:"projects-tarot",component:()=>An(()=>import("./TarotView-pb6WOe7Z.js"),__vite__mapDeps([6,7,8]))}]},{path:"/chat",name:"chat",component:()=>An(()=>import("./ChatView-IjI73yv-.js"),__vite__mapDeps([9,7,10]))},{path:"/language",name:"language",component:()=>An(()=>import("./LanguageView-ecwN0k1q.js"),__vite__mapDeps([11,7,12]))},{path:"/privacy-policy",name:"privacy-policy",component:()=>An(()=>import("./PrivacyPolicyView-bVh3ktL_.js"),__vite__mapDeps([]))}],Gg=Bv({history:nv(),scrollBehavior(e,t,n){return n||{top:0}},routes:GR});Gg.beforeEach(async(e,t)=>{const n=Dl();n.isExpended=!1});function WR(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Wg={exports:{}};(function(e,t){(function(){var n={expires:"1d",path:"; path=/",domain:"",secure:"",sameSite:"; SameSite=Lax"},r={install:function(s,i){i&&this.config(i.expires,i.path,i.domain,i.secure,i.sameSite),s.prototype&&(s.prototype.$cookies=this),s.config&&s.config.globalProperties&&(s.config.globalProperties.$cookies=this,s.provide("$cookies",this)),s.$cookies=this},config:function(s,i,o,a,c){n.expires=s||"1d",n.path=i?"; path="+i:"; path=/",n.domain=o?"; domain="+o:"",n.secure=a?"; Secure":"",n.sameSite=c?"; SameSite="+c:"; SameSite=Lax"},get:function(s){var i=decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(s).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null;if(i&&(i.substring(0,1)==="{"&&i.substring(i.length-1,i.length)==="}"||i.substring(0,1)==="["&&i.substring(i.length-1,i.length)==="]"))try{i=JSON.parse(i)}catch{return i}return i},set:function(s,i,o,a,c,l,u){if(s){if(/^(?:expires|max\-age|path|domain|secure|SameSite)$/i.test(s))throw new Error('Cookie name illegality. Cannot be set to ["expires","max-age","path","domain","secure","SameSite"]	 current key name: '+s)}else throw new Error("Cookie name is not found in the first argument.");i&&typeof i=="object"&&(i=JSON.stringify(i));var h="";if(o=o??n.expires,o&&o!=0)switch(o.constructor){case Number:o===1/0||o===-1?h="; expires=Fri, 31 Dec 9999 23:59:59 GMT":h="; max-age="+o;break;case String:if(/^(?:\d+(y|m|d|h|min|s))$/i.test(o)){var d=o.replace(/^(\d+)(?:y|m|d|h|min|s)$/i,"$1");switch(o.replace(/^(?:\d+)(y|m|d|h|min|s)$/i,"$1").toLowerCase()){case"m":h="; max-age="+ +d*2592e3;break;case"d":h="; max-age="+ +d*86400;break;case"h":h="; max-age="+ +d*3600;break;case"min":h="; max-age="+ +d*60;break;case"s":h="; max-age="+d;break;case"y":h="; max-age="+ +d*31104e3;break}}else h="; expires="+o;break;case Date:h="; expires="+o.toUTCString();break}return document.cookie=encodeURIComponent(s)+"="+encodeURIComponent(i)+h+(c?"; domain="+c:n.domain)+(a?"; path="+a:n.path)+(l==null?n.secure:l?"; Secure":"")+(u==null?n.sameSite:u?"; SameSite="+u:""),this},remove:function(s,i,o){return!s||!this.isKey(s)?!1:(document.cookie=encodeURIComponent(s)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(o?"; domain="+o:n.domain)+(i?"; path="+i:n.path)+"; SameSite=Lax",!0)},isKey:function(s){return new RegExp("(?:^|;\\s*)"+encodeURIComponent(s).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(document.cookie)},keys:function(){if(!document.cookie)return[];for(var s=document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/),i=0;i<s.length;i++)s[i]=decodeURIComponent(s[i]);return s}};e.exports=r,typeof window<"u"&&(window.$cookies=r)})()})(Wg);var QR=Wg.exports;const YR=WR(QR),Ao=e=>(jm("data-v-d175ab54"),e=e(),qm(),e),JR={class:"navigationBar"},XR={class:"container"},ZR={class:"navbar",role:"navigation","aria-label":"main navigation"},tS={class:"navbar-brand"},eS=Ao(()=>Dt("a",{class:"navbar-item",href:"#"},[Dt("h1",{class:"title is-4"},"Yizhe ZHANG")],-1)),nS=Ao(()=>Dt("span",{"aria-hidden":"true"},null,-1)),rS=Ao(()=>Dt("span",{"aria-hidden":"true"},null,-1)),sS=Ao(()=>Dt("span",{"aria-hidden":"true"},null,-1)),iS=[nS,rS,sS],oS={class:"navbar-start"},aS={__name:"NavigationBar",setup(e){const t=Dl(),n=Zt(()=>t.tag),r=Zt(()=>t.isExpended);return(s,i)=>{const o=ni("router-link");return qi(),Tc("div",JR,[Dt("div",XR,[Dt("nav",ZR,[Dt("div",tS,[eS,Dt("a",{role:"button",class:Re(["navbar-burger",r.value?"is-active":""]),"aria-label":"menu","aria-expanded":"false",onClick:i[0]||(i[0]=a=>an(t).isExpended=!an(t).isExpended)},iS,2)]),Dt("div",{class:Re(["navbar-menu",r.value?"is-active":""])},[Dt("div",oS,[At(o,{to:"/",class:Re(["navbar-item",n.value==="home"?"is-active":""])},{default:tr(()=>[bn(" Home ")]),_:1},8,["class"]),At(o,{to:"/publications",class:Re(["navbar-item",n.value==="publications"?"is-active":""])},{default:tr(()=>[bn(" Publications ")]),_:1},8,["class"]),At(o,{to:"/projects",class:Re(["navbar-item",n.value==="projects"?"is-active":""])},{default:tr(()=>[bn(" Projects ")]),_:1},8,["class"]),At(o,{to:"/language",class:Re(["navbar-item",n.value==="language"?"is-active":""])},{default:tr(()=>[bn(" Language ")]),_:1},8,["class"]),At(o,{to:"/chat",class:Re(["navbar-item",n.value==="chat"?"is-active":""])},{default:tr(()=>[bn(" Chat ")]),_:1},8,["class"])])],2)])])])}}},cS=Zf(aS,[["__scopeId","data-v-d175ab54"]]),lS={key:0,class:"footer py-6"},uS=Dt("div",{class:"content has-text-centered"},[Dt("p",null,[Dt("strong",null,"Elecoxy.com"),bn(" Developed by "),Dt("a",{href:"https://elecoxy.com"},"YIZHE ZHANG")]),Dt("p",null,[Dt("a",{href:"/#/privacy-policy"},"Privacy Policy")])],-1),hS=[uS],fS={__name:"FooterView",setup(e){const t=Dl(),n=Zt(()=>t.tag!=="chat");return(r,s)=>n.value?(qi(),Tc("footer",lS,hS)):N_("",!0)}},Ls=gy(Ey),Qg=Ty();Qg.use(ky);Ls.use(Qg);Ls.use(Gg);Ls.use(YR,{expires:"30d"});Ls.component("NavigationBar",cS).component("FooterView",fS);Ls.mount("#app");export{Se as F,Zf as _,qi as a,Dt as b,Tc as c,Cy as d,an as e,bn as f,V_ as g,pS as h,qm as i,Zt as j,_c as k,gc as l,ac as m,Re as n,r_ as o,jm as p,N_ as q,mS as r,qr as s,dS as t,Dl as u,_S as v,gS as w,Ts as x};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/HomeView-47gcffO0.js","assets/HomeView-d9wrpX_u.css","assets/PublicationsView-3GgJ7pxt.js","assets/PublicationsView-sadJYgjH.css","assets/ProjectsView--KR7lf1b.js","assets/ProjectsView-hNwucVab.css","assets/TarotView-pb6WOe7Z.js","assets/axios-L6U4YIEh.js","assets/TarotView-DlHu7Rhg.css","assets/ChatView-IjI73yv-.js","assets/ChatView-xk5vEHFz.css","assets/LanguageView-ecwN0k1q.js","assets/LanguageView-kc1cGWIM.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
