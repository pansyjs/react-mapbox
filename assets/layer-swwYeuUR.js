import{a as nt,j as X,F as rt}from"./jsx-runtime-5BUNAZ9W.js";import{M as ae}from"./mapbox-gl-oa9XOBpX.js";import{r as d,R as at}from"./index-4g5l5LRQ.js";import{r as le}from"./index-jmm5gWkb.js";const Ve=d.createContext({});function ot(e){var t=d.useRef(e);return t.current=e,t}var ut=!!(typeof window<"u"&&window.document&&window.document.createElement),W,G;ut&&(!((W=window)===null||W===void 0||(G=W.navigator)===null||G===void 0)&&G.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);var it=function(t){return typeof t=="function"};function Z(e){"@babel/helpers - typeof";return Z=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Z(e)}function lt(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,r=new Set;function o(a,u){var l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,s=r.has(a);if(s)return!1;if(a===u)return!0;if(n&&l>1)return!1;r.add(a);var i=l+1;if(Array.isArray(a)){if(!Array.isArray(u)||a.length!==u.length)return!1;for(var p=0;p<a.length;p++)if(!o(a[p],u[p],i))return!1;return!0}if(a&&u&&Z(a)==="object"&&Z(u)==="object"){var m=Object.keys(a);return m.length!==Object.keys(u).length?!1:m.every(function(v){return o(a[v],u[v],i)})}return!1}return o(e,t)}var st=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return lt(t,n)},ct=function(t){return function(n,r){var o=d.useRef(),a=d.useRef(0);(r===void 0||!st(r,o.current))&&(o.current=r,a.current+=1),t(n,[a.current])}};function J(e){"@babel/helpers - typeof";return J=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},J(e)}function Ie(e){typeof e!="function"&&console.error("useUnmount expected parameter is a function, got ".concat(J(e)));var t=ot(e);d.useEffect(function(){return function(){t.current()}},[])}var dt=ct(d.useEffect);function ft(e,t){return typeof e=="function"?e.length?e(t):e():e}function pt(e,t){return gt(e)||yt(e,t)||mt(e,t)||vt()}function vt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function mt(e,t){if(e){if(typeof e=="string")return se(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return se(e,t)}}function se(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function yt(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,o,a,u,l=[],s=!0,i=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(p){i=!0,o=p}finally{try{if(!s&&n.return!=null&&(u=n.return(),Object(u)!==u))return}finally{if(i)throw o}}return l}}function gt(e){if(Array.isArray(e))return e}function ht(e){var t=d.useState(e),n=pt(t,2),r=n[0],o=n[1],a=d.useRef(r);a.current=r;var u=d.useCallback(function(s){a.current=ft(s,a.current),o(a.current)},[]),l=d.useCallback(function(){return a.current},[]);return[r,u,l]}var bt=function(t,n){return t!==n};function Et(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:bt,n=d.useRef(),r=d.useRef();return t(r.current,e)&&(n.current=r.current,r.current=e),n.current}function ce(e,t){return Tt(e)||St(e,t)||_t(e,t)||Mt()}function Mt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _t(e,t){if(e){if(typeof e=="string")return de(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return de(e,t)}}function de(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function St(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],o=!0,a=!1,u,l;try{for(n=n.call(e);!(o=(u=n.next()).done)&&(r.push(u.value),!(t&&r.length===t));o=!0);}catch(s){a=!0,l=s}finally{try{!o&&n.return!=null&&n.return()}finally{if(a)throw l}}return r}}function Tt(e){if(Array.isArray(e))return e}var wt=function(){var t=d.useState(function(){return document.createElement("div")}),n=ce(t,1),r=n[0],o=d.useState({render:function(){return null},remove:function(){return null}}),a=ce(o,2),u=a[0],l=a[1],s=d.useCallback(function(i){var p=function(f){var c=f.children;return c?le.createPortal(c,i):null},m=function(f){f&&le.unmountComponentAtNode(f)};return{render:p,remove:m}},[]);return d.useEffect(function(){r&&u.remove();var i=s(r);return l(i),function(){i.remove(r)}},[r]),{Portal:u.render,container:r}};const At=(e,t)=>e?e.map((n,r)=>Object.is(e[r],t==null?void 0:t[r])?-1:r).filter(n=>n>=0):t?t.map((n,r)=>r):[],Ct=(e,t)=>{const n=d.useRef();d.useEffect(()=>{const r=At(n.current,t),o=n.current;return n.current=t,e(r,o,t)},t)},oe=(e,t,n)=>{const{eventMap:r={},eventList:o=[]}=n;Ct((a=[],u,l)=>{if(!e)return;let s=a.filter(i=>!!i).map(i=>i-1);a.includes(0)&&(s=o.map((i,p)=>p)),s.forEach(i=>{const p=r[o[i]],m=u==null?void 0:u[i+1],v=l==null?void 0:l[i+1];m&&e.off(p,m),v&&e.on(p,v)})},[e,...o.map(a=>t[a])]),Ie(()=>{e&&o.forEach(a=>{const u=r[a],l=t[a];u&&l&&e.off(u,l)})})};var Fe=typeof global=="object"&&global&&global.Object===Object&&global,xt=typeof self=="object"&&self&&self.Object===Object&&self,E=Fe||xt||Function("return this")(),x=E.Symbol,Ze=Object.prototype,Pt=Ze.hasOwnProperty,Ot=Ze.toString,O=x?x.toStringTag:void 0;function Lt(e){var t=Pt.call(e,O),n=e[O];try{e[O]=void 0;var r=!0}catch{}var o=Ot.call(e);return r&&(t?e[O]=n:delete e[O]),o}var Dt=Object.prototype,qt=Dt.toString;function Rt(e){return qt.call(e)}var $t="[object Null]",jt="[object Undefined]",fe=x?x.toStringTag:void 0;function j(e){return e==null?e===void 0?jt:$t:fe&&fe in Object(e)?Lt(e):Rt(e)}function q(e){return e!=null&&typeof e=="object"}var B=Array.isArray;function Be(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Vt="[object AsyncFunction]",It="[object Function]",Ft="[object GeneratorFunction]",Zt="[object Proxy]";function Ne(e){if(!Be(e))return!1;var t=j(e);return t==It||t==Ft||t==Vt||t==Zt}var k=E["__core-js_shared__"],pe=function(){var e=/[^.]+$/.exec(k&&k.keys&&k.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Bt(e){return!!pe&&pe in e}var Nt=Function.prototype,zt=Nt.toString;function A(e){if(e!=null){try{return zt.call(e)}catch{}try{return e+""}catch{}}return""}var Ut=/[\\^$.*+?()[\]{}|]/g,Wt=/^\[object .+?Constructor\]$/,Gt=Function.prototype,kt=Object.prototype,Ht=Gt.toString,Kt=kt.hasOwnProperty,Xt=RegExp("^"+Ht.call(Kt).replace(Ut,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Jt(e){if(!Be(e)||Bt(e))return!1;var t=Ne(e)?Xt:Wt;return t.test(A(e))}function Yt(e,t){return e==null?void 0:e[t]}function P(e,t){var n=Yt(e,t);return Jt(n)?n:void 0}var Y=P(E,"WeakMap"),Qt=9007199254740991,en=/^(?:0|[1-9]\d*)$/;function tn(e,t){var n=typeof e;return t=t??Qt,!!t&&(n=="number"||n!="symbol"&&en.test(e))&&e>-1&&e%1==0&&e<t}function ze(e,t){return e===t||e!==e&&t!==t}var nn=9007199254740991;function Ue(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=nn}function rn(e){return e!=null&&Ue(e.length)&&!Ne(e)}var an=Object.prototype;function on(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||an;return e===n}function un(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}var ln="[object Arguments]";function ve(e){return q(e)&&j(e)==ln}var We=Object.prototype,sn=We.hasOwnProperty,cn=We.propertyIsEnumerable,dn=ve(function(){return arguments}())?ve:function(e){return q(e)&&sn.call(e,"callee")&&!cn.call(e,"callee")};function fn(){return!1}var Ge=typeof exports=="object"&&exports&&!exports.nodeType&&exports,me=Ge&&typeof module=="object"&&module&&!module.nodeType&&module,pn=me&&me.exports===Ge,ye=pn?E.Buffer:void 0,vn=ye?ye.isBuffer:void 0,Q=vn||fn,mn="[object Arguments]",yn="[object Array]",gn="[object Boolean]",hn="[object Date]",bn="[object Error]",En="[object Function]",Mn="[object Map]",_n="[object Number]",Sn="[object Object]",Tn="[object RegExp]",wn="[object Set]",An="[object String]",Cn="[object WeakMap]",xn="[object ArrayBuffer]",Pn="[object DataView]",On="[object Float32Array]",Ln="[object Float64Array]",Dn="[object Int8Array]",qn="[object Int16Array]",Rn="[object Int32Array]",$n="[object Uint8Array]",jn="[object Uint8ClampedArray]",Vn="[object Uint16Array]",In="[object Uint32Array]",y={};y[On]=y[Ln]=y[Dn]=y[qn]=y[Rn]=y[$n]=y[jn]=y[Vn]=y[In]=!0;y[mn]=y[yn]=y[xn]=y[gn]=y[Pn]=y[hn]=y[bn]=y[En]=y[Mn]=y[_n]=y[Sn]=y[Tn]=y[wn]=y[An]=y[Cn]=!1;function Fn(e){return q(e)&&Ue(e.length)&&!!y[j(e)]}function Zn(e){return function(t){return e(t)}}var ke=typeof exports=="object"&&exports&&!exports.nodeType&&exports,D=ke&&typeof module=="object"&&module&&!module.nodeType&&module,Bn=D&&D.exports===ke,H=Bn&&Fe.process,ge=function(){try{var e=D&&D.require&&D.require("util").types;return e||H&&H.binding&&H.binding("util")}catch{}}(),he=ge&&ge.isTypedArray,He=he?Zn(he):Fn,Nn=Object.prototype,zn=Nn.hasOwnProperty;function Un(e,t){var n=B(e),r=!n&&dn(e),o=!n&&!r&&Q(e),a=!n&&!r&&!o&&He(e),u=n||r||o||a,l=u?un(e.length,String):[],s=l.length;for(var i in e)(t||zn.call(e,i))&&!(u&&(i=="length"||o&&(i=="offset"||i=="parent")||a&&(i=="buffer"||i=="byteLength"||i=="byteOffset")||tn(i,s)))&&l.push(i);return l}function Wn(e,t){return function(n){return e(t(n))}}var Gn=Wn(Object.keys,Object),kn=Object.prototype,Hn=kn.hasOwnProperty;function Kn(e){if(!on(e))return Gn(e);var t=[];for(var n in Object(e))Hn.call(e,n)&&n!="constructor"&&t.push(n);return t}function Xn(e){return rn(e)?Un(e):Kn(e)}var R=P(Object,"create");function Jn(){this.__data__=R?R(null):{},this.size=0}function Yn(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var Qn="__lodash_hash_undefined__",er=Object.prototype,tr=er.hasOwnProperty;function nr(e){var t=this.__data__;if(R){var n=t[e];return n===Qn?void 0:n}return tr.call(t,e)?t[e]:void 0}var rr=Object.prototype,ar=rr.hasOwnProperty;function or(e){var t=this.__data__;return R?t[e]!==void 0:ar.call(t,e)}var ur="__lodash_hash_undefined__";function ir(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=R&&t===void 0?ur:t,this}function w(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}w.prototype.clear=Jn;w.prototype.delete=Yn;w.prototype.get=nr;w.prototype.has=or;w.prototype.set=ir;function lr(){this.__data__=[],this.size=0}function z(e,t){for(var n=e.length;n--;)if(ze(e[n][0],t))return n;return-1}var sr=Array.prototype,cr=sr.splice;function dr(e){var t=this.__data__,n=z(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():cr.call(t,n,1),--this.size,!0}function fr(e){var t=this.__data__,n=z(t,e);return n<0?void 0:t[n][1]}function pr(e){return z(this.__data__,e)>-1}function vr(e,t){var n=this.__data__,r=z(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function M(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}M.prototype.clear=lr;M.prototype.delete=dr;M.prototype.get=fr;M.prototype.has=pr;M.prototype.set=vr;var $=P(E,"Map");function mr(){this.size=0,this.__data__={hash:new w,map:new($||M),string:new w}}function yr(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function U(e,t){var n=e.__data__;return yr(t)?n[typeof t=="string"?"string":"hash"]:n.map}function gr(e){var t=U(this,e).delete(e);return this.size-=t?1:0,t}function hr(e){return U(this,e).get(e)}function br(e){return U(this,e).has(e)}function Er(e,t){var n=U(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function C(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}C.prototype.clear=mr;C.prototype.delete=gr;C.prototype.get=hr;C.prototype.has=br;C.prototype.set=Er;function Mr(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e}function _r(){this.__data__=new M,this.size=0}function Sr(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function Tr(e){return this.__data__.get(e)}function wr(e){return this.__data__.has(e)}var Ar=200;function Cr(e,t){var n=this.__data__;if(n instanceof M){var r=n.__data__;if(!$||r.length<Ar-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new C(r)}return n.set(e,t),this.size=n.size,this}function _(e){var t=this.__data__=new M(e);this.size=t.size}_.prototype.clear=_r;_.prototype.delete=Sr;_.prototype.get=Tr;_.prototype.has=wr;_.prototype.set=Cr;function xr(e,t){for(var n=-1,r=e==null?0:e.length,o=0,a=[];++n<r;){var u=e[n];t(u,n,e)&&(a[o++]=u)}return a}function Pr(){return[]}var Or=Object.prototype,Lr=Or.propertyIsEnumerable,be=Object.getOwnPropertySymbols,Dr=be?function(e){return e==null?[]:(e=Object(e),xr(be(e),function(t){return Lr.call(e,t)}))}:Pr;const qr=Dr;function Rr(e,t,n){var r=t(e);return B(e)?r:Mr(r,n(e))}function Ee(e){return Rr(e,Xn,qr)}var ee=P(E,"DataView"),te=P(E,"Promise"),ne=P(E,"Set"),Me="[object Map]",$r="[object Object]",_e="[object Promise]",Se="[object Set]",Te="[object WeakMap]",we="[object DataView]",jr=A(ee),Vr=A($),Ir=A(te),Fr=A(ne),Zr=A(Y),T=j;(ee&&T(new ee(new ArrayBuffer(1)))!=we||$&&T(new $)!=Me||te&&T(te.resolve())!=_e||ne&&T(new ne)!=Se||Y&&T(new Y)!=Te)&&(T=function(e){var t=j(e),n=t==$r?e.constructor:void 0,r=n?A(n):"";if(r)switch(r){case jr:return we;case Vr:return Me;case Ir:return _e;case Fr:return Se;case Zr:return Te}return t});const Ae=T;var Br=E.Uint8Array;const Ce=Br;var Nr="__lodash_hash_undefined__";function zr(e){return this.__data__.set(e,Nr),this}function Ur(e){return this.__data__.has(e)}function N(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new C;++t<n;)this.add(e[t])}N.prototype.add=N.prototype.push=zr;N.prototype.has=Ur;function Wr(e,t){for(var n=-1,r=e==null?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}function Gr(e,t){return e.has(t)}var kr=1,Hr=2;function Ke(e,t,n,r,o,a){var u=n&kr,l=e.length,s=t.length;if(l!=s&&!(u&&s>l))return!1;var i=a.get(e),p=a.get(t);if(i&&p)return i==t&&p==e;var m=-1,v=!0,f=n&Hr?new N:void 0;for(a.set(e,t),a.set(t,e);++m<l;){var c=e[m],g=t[m];if(r)var h=u?r(g,c,m,t,e,a):r(c,g,m,e,t,a);if(h!==void 0){if(h)continue;v=!1;break}if(f){if(!Wr(t,function(b,S){if(!Gr(f,S)&&(c===b||o(c,b,n,r,a)))return f.push(S)})){v=!1;break}}else if(!(c===g||o(c,g,n,r,a))){v=!1;break}}return a.delete(e),a.delete(t),v}function Kr(e){var t=-1,n=Array(e.size);return e.forEach(function(r,o){n[++t]=[o,r]}),n}function Xr(e){var t=-1,n=Array(e.size);return e.forEach(function(r){n[++t]=r}),n}var Jr=1,Yr=2,Qr="[object Boolean]",ea="[object Date]",ta="[object Error]",na="[object Map]",ra="[object Number]",aa="[object RegExp]",oa="[object Set]",ua="[object String]",ia="[object Symbol]",la="[object ArrayBuffer]",sa="[object DataView]",xe=x?x.prototype:void 0,K=xe?xe.valueOf:void 0;function ca(e,t,n,r,o,a,u){switch(n){case sa:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case la:return!(e.byteLength!=t.byteLength||!a(new Ce(e),new Ce(t)));case Qr:case ea:case ra:return ze(+e,+t);case ta:return e.name==t.name&&e.message==t.message;case aa:case ua:return e==t+"";case na:var l=Kr;case oa:var s=r&Jr;if(l||(l=Xr),e.size!=t.size&&!s)return!1;var i=u.get(e);if(i)return i==t;r|=Yr,u.set(e,t);var p=Ke(l(e),l(t),r,o,a,u);return u.delete(e),p;case ia:if(K)return K.call(e)==K.call(t)}return!1}var da=1,fa=Object.prototype,pa=fa.hasOwnProperty;function va(e,t,n,r,o,a){var u=n&da,l=Ee(e),s=l.length,i=Ee(t),p=i.length;if(s!=p&&!u)return!1;for(var m=s;m--;){var v=l[m];if(!(u?v in t:pa.call(t,v)))return!1}var f=a.get(e),c=a.get(t);if(f&&c)return f==t&&c==e;var g=!0;a.set(e,t),a.set(t,e);for(var h=u;++m<s;){v=l[m];var b=e[v],S=t[v];if(r)var ie=u?r(S,b,v,t,e,a):r(b,S,v,e,t,a);if(!(ie===void 0?b===S||o(b,S,n,r,a):ie)){g=!1;break}h||(h=v=="constructor")}if(g&&!h){var V=e.constructor,I=t.constructor;V!=I&&"constructor"in e&&"constructor"in t&&!(typeof V=="function"&&V instanceof V&&typeof I=="function"&&I instanceof I)&&(g=!1)}return a.delete(e),a.delete(t),g}var ma=1,Pe="[object Arguments]",Oe="[object Array]",F="[object Object]",ya=Object.prototype,Le=ya.hasOwnProperty;function ga(e,t,n,r,o,a){var u=B(e),l=B(t),s=u?Oe:Ae(e),i=l?Oe:Ae(t);s=s==Pe?F:s,i=i==Pe?F:i;var p=s==F,m=i==F,v=s==i;if(v&&Q(e)){if(!Q(t))return!1;u=!0,p=!1}if(v&&!p)return a||(a=new _),u||He(e)?Ke(e,t,n,r,o,a):ca(e,t,s,n,r,o,a);if(!(n&ma)){var f=p&&Le.call(e,"__wrapped__"),c=m&&Le.call(t,"__wrapped__");if(f||c){var g=f?e.value():e,h=c?t.value():t;return a||(a=new _),o(g,h,n,r,a)}}return v?(a||(a=new _),va(e,t,n,r,o,a)):!1}function Xe(e,t,n,r,o){return e===t?!0:e==null||t==null||!q(e)&&!q(t)?e!==e&&t!==t:ga(e,t,n,r,Xe,o)}function ha(e,t){return Xe(e,t)}const ba=e=>e[0].toUpperCase()+e.slice(1,e.length);function Je(e,t,{setterMap:n={},converterMap:r={}}={}){const o=Et(e);dt(()=>{t&&u(e,!0)},[e]),Ie(()=>{t&&"remove"in t&&t.remove()});const a=()=>{u(e,!1)},u=(l,s=!0)=>{if(t)try{Object.keys(l).forEach(i=>{if(it(e[i])&&/^on[A-Z]/.test(i))return;let p=!0;if(s&&(p=!ha(l[i],o==null?void 0:o[i])),!p)return;let m=l[i];if(i in r&&(m=r[i](l[i])),i in n)n[i](m,t);else{const v=`set${ba(i)}`;v in t&&t[v](m)}})}catch(i){console.error(i)}};return{onInstanceCreated:a}}const Ea=["accessToken","antialias","attributionControl","bearingSnap","bounds","hash","interactive","clickTolerance","pitchWithRotate","customAttribution","cooperativeGestures","logoPosition","failIfMajorPerformanceCaveat","preserveDrawingBuffer","refreshExpiredTiles","trackResize","fitBoundsOptions","maxTileCacheSize","transformRequest","collectResourceTiming","fadeDuration","crossSourceCollisions","optimizeForTerrain","locale","localFontFamily","localIdeographFontFamily","testMode"],Ma=["center","zoom","minZoom","maxZoom","style","maxBounds","dragPan","renderWorldCopies","pitch","maxPitch","minPitch","bearing","projection","touchPitch","boxZoom","scrollZoom","dragRotate","dragPan","keyboard","touchZoomRotate","doubleClickZoom"],_a=Ma.concat(Ea),Sa={touchPitch(e,t){if(t){if(e){t.touchPitch.enable();return}t.touchPitch.disable()}},scrollZoom(e,t){if(t){if(e){t.scrollZoom.enable();return}t.scrollZoom.disable()}},boxZoom(e,t){if(t){if(e){t.boxZoom.enable();return}t.boxZoom.disable()}},dragRotate(e,t){if(t){if(e){t.dragRotate.enable();return}t.dragRotate.disable()}},dragPan(e,t){if(t){if(e){t.dragPan.enable();return}t.dragPan.disable()}},keyboard(e,t){if(t){if(e){t.keyboard.enable();return}t.keyboard.disable()}},touchZoomRotate(e,t){if(t){if(e){t.touchZoomRotate.enable();return}t.touchZoomRotate.disable()}},doubleClickZoom(e,t){if(t){if(e){t.doubleClickZoom.enable();return}t.doubleClickZoom.disable()}}},Ta={},Ye={onError:"error",onLoad:"load",onIdle:"idle",onRemove:"remove",onRender:"render",onResize:"resize",onWebglContextLost:"webglcontextlost",onWebglContextRestored:"webglcontextrestored",onDataloading:"dataloading",onData:"data",onTileDataLoading:"tiledataloading",onSourceDataLoading:"sourcedataloading",onStyleDataLoading:"styledataloading",onSourceData:"sourcedata",onStyleData:"styledata",onBoxZoomCancel:"boxzoomcancel",onBoxZoomStart:"boxzoomstart",onBoxZoomEnd:"boxzoomend",onTouchCancel:"touchcancel",onTouchMove:"touchmove",onTouchEnd:"touchend",onTouchStart:"touchstart",onClick:"click",onContextMenu:"contextmenu",onDoubleClick:"dblclick",onMouseMove:"mousemove",onMouseUp:"mouseup",onMouseDown:"mousedown",onMouseOut:"mouseout",onMouseOver:"mouseover",onMoveStart:"movestart",onMove:"move",onMoveEnd:"moveend",onZoomStart:"zoomstart",onZoom:"zoom",onZoomEnd:"zoomend",onRotateStart:"rotatestart",onRotate:"rotate",onRotateEnd:"rotateend",onDragStart:"dragstart",onDrag:"drag",onDragEnd:"dragend",onPitchStart:"pitchstart",onPitch:"pitch",onPitchEnd:"pitchend",onWheel:"wheel"},wa=Object.keys(Ye),De=d.forwardRef((e,t)=>{const{className:n,loading:r,containerStyle:o,children:a}=e,u=d.useRef(null),[l,s]=d.useState(),i=d.useMemo(()=>({position:"relative",width:"100%",height:"100%",...e.containerStyle}),[e.style]),{current:p}=d.useRef({}),{onInstanceCreated:m}=Je(e,l,{setterMap:Sa,converterMap:Ta});oe(l,e,{eventMap:Ye,eventList:wa}),d.useImperativeHandle(t,()=>l,[l]),d.useEffect(()=>{u.current&&v().then(c=>{m(),p.map=c,s(c)})},[u]);const v=()=>{const c=f(e);return Promise.resolve(new ae.Map(c))},f=c=>{const h={container:u.current};return _a.forEach(b=>{b in c&&b!=="container"&&(h[b]=c[b])}),h};return nt("div",{ref:u,style:i,className:n,children:[!l&&r,l&&X(Ve.Provider,{value:p,children:a})]})});try{De.displayName="Map",De.__docgenInfo={description:"",displayName:"Map",props:{loading:{defaultValue:null,description:"地图加载前的加载效果",name:"loading",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"额外的样式类",name:"className",required:!1,type:{name:"string"}},containerStyle:{defaultValue:null,description:"地图挂载节点样式",name:"containerStyle",required:!1,type:{name:"CSSProperties"}},onError:{defaultValue:null,description:"",name:"onError",required:!1,type:{name:"((e: ErrorEvent) => void)"}},onLoad:{defaultValue:null,description:`下载所有必要的资源并且第一次视觉上完整渲染发生后触发
@param e
@returns`,name:"onLoad",required:!1,type:{name:"((e: MapboxEvent<undefined>) => void)"}},onIdle:{defaultValue:null,description:"",name:"onIdle",required:!1,type:{name:"((e: MapboxEvent<undefined>) => void)"}},onRemove:{defaultValue:null,description:"",name:"onRemove",required:!1,type:{name:"((e: MapboxEvent<undefined>) => void)"}},onRender:{defaultValue:null,description:"",name:"onRender",required:!1,type:{name:"((e: MapboxEvent<undefined>) => void)"}},onResize:{defaultValue:null,description:"",name:"onResize",required:!1,type:{name:"((e: MapboxEvent<undefined>) => void)"}},onWebglContextLost:{defaultValue:null,description:"",name:"onWebglContextLost",required:!1,type:{name:"((e: MapContextEvent) => void)"}},onWebglContextRestored:{defaultValue:null,description:"",name:"onWebglContextRestored",required:!1,type:{name:"((e: MapContextEvent) => void)"}},onDataloading:{defaultValue:null,description:"",name:"onDataloading",required:!1,type:{name:"((e: MapDataEvent) => void)"}},onData:{defaultValue:null,description:"",name:"onData",required:!1,type:{name:"((e: MapDataEvent) => void)"}},onTileDataLoading:{defaultValue:null,description:"",name:"onTileDataLoading",required:!1,type:{name:"((e: MapDataEvent) => void)"}},onSourceDataLoading:{defaultValue:null,description:"",name:"onSourceDataLoading",required:!1,type:{name:"((e: MapSourceDataEvent) => void)"}},onStyleDataLoading:{defaultValue:null,description:"",name:"onStyleDataLoading",required:!1,type:{name:"((e: MapStyleDataEvent) => void)"}},onSourceData:{defaultValue:null,description:"",name:"onSourceData",required:!1,type:{name:"((e: MapSourceDataEvent) => void)"}},onStyleData:{defaultValue:null,description:"",name:"onStyleData",required:!1,type:{name:"((e: MapStyleDataEvent) => void)"}},onBoxZoomCancel:{defaultValue:null,description:"",name:"onBoxZoomCancel",required:!1,type:{name:"((e: MapBoxZoomEvent) => void)"}},onBoxZoomStart:{defaultValue:null,description:"",name:"onBoxZoomStart",required:!1,type:{name:"((e: MapBoxZoomEvent) => void)"}},onBoxZoomEnd:{defaultValue:null,description:"",name:"onBoxZoomEnd",required:!1,type:{name:"((e: MapBoxZoomEvent) => void)"}},onTouchCancel:{defaultValue:null,description:"",name:"onTouchCancel",required:!1,type:{name:"((e: MapTouchEvent) => void)"}},onTouchMove:{defaultValue:null,description:"",name:"onTouchMove",required:!1,type:{name:"((e: MapTouchEvent) => void)"}},onTouchEnd:{defaultValue:null,description:"",name:"onTouchEnd",required:!1,type:{name:"((e: MapTouchEvent) => void)"}},onTouchStart:{defaultValue:null,description:"",name:"onTouchStart",required:!1,type:{name:"((e: MapTouchEvent) => void)"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MapMouseEvent) => void)"}},onContextMenu:{defaultValue:null,description:"",name:"onContextMenu",required:!1,type:{name:"((e: MapMouseEvent) => void)"}},onDoubleClick:{defaultValue:null,description:"",name:"onDoubleClick",required:!1,type:{name:"((e: MapMouseEvent) => void)"}},onMouseMove:{defaultValue:null,description:"",name:"onMouseMove",required:!1,type:{name:"((e: MapMouseEvent) => void)"}},onMouseUp:{defaultValue:null,description:"",name:"onMouseUp",required:!1,type:{name:"((e: MapMouseEvent) => void)"}},onMouseDown:{defaultValue:null,description:"",name:"onMouseDown",required:!1,type:{name:"((e: MapMouseEvent) => void)"}},onMouseOut:{defaultValue:null,description:"",name:"onMouseOut",required:!1,type:{name:"((e: MapMouseEvent) => void)"}},onMouseOver:{defaultValue:null,description:"",name:"onMouseOver",required:!1,type:{name:"((e: MapMouseEvent) => void)"}},onMoveStart:{defaultValue:null,description:"",name:"onMoveStart",required:!1,type:{name:"((e: MapboxEvent<MouseEvent | TouchEvent | WheelEvent>) => void)"}},onMove:{defaultValue:null,description:"",name:"onMove",required:!1,type:{name:"((e: MapboxEvent<MouseEvent | TouchEvent | WheelEvent>) => void)"}},onMoveEnd:{defaultValue:null,description:"",name:"onMoveEnd",required:!1,type:{name:"((e: MapboxEvent<MouseEvent | TouchEvent | WheelEvent>) => void)"}},onZoomStart:{defaultValue:null,description:"",name:"onZoomStart",required:!1,type:{name:"((e: MapboxEvent<MouseEvent | TouchEvent | WheelEvent>) => void)"}},onZoom:{defaultValue:null,description:"",name:"onZoom",required:!1,type:{name:"((e: MapboxEvent<MouseEvent | TouchEvent | WheelEvent>) => void)"}},onZoomEnd:{defaultValue:null,description:"",name:"onZoomEnd",required:!1,type:{name:"((e: MapboxEvent<MouseEvent | TouchEvent | WheelEvent>) => void)"}},onRotateStart:{defaultValue:null,description:"",name:"onRotateStart",required:!1,type:{name:"((e: MapboxEvent<MouseEvent | TouchEvent>) => void)"}},onRotate:{defaultValue:null,description:"",name:"onRotate",required:!1,type:{name:"((e: MapboxEvent<MouseEvent | TouchEvent>) => void)"}},onRotateEnd:{defaultValue:null,description:"",name:"onRotateEnd",required:!1,type:{name:"((e: MapboxEvent<MouseEvent | TouchEvent>) => void)"}},onDragStart:{defaultValue:null,description:"",name:"onDragStart",required:!1,type:{name:"((e: MapboxEvent<MouseEvent | TouchEvent>) => void)"}},onDrag:{defaultValue:null,description:"",name:"onDrag",required:!1,type:{name:"((e: MapboxEvent<MouseEvent | TouchEvent>) => void)"}},onDragEnd:{defaultValue:null,description:"",name:"onDragEnd",required:!1,type:{name:"((e: MapboxEvent<MouseEvent | TouchEvent>) => void)"}},onPitchStart:{defaultValue:null,description:"",name:"onPitchStart",required:!1,type:{name:"((e: MapboxEvent<MouseEvent | TouchEvent>) => void)"}},onPitch:{defaultValue:null,description:"",name:"onPitch",required:!1,type:{name:"((e: MapboxEvent<MouseEvent | TouchEvent>) => void)"}},onPitchEnd:{defaultValue:null,description:"",name:"onPitchEnd",required:!1,type:{name:"((e: MapboxEvent<MouseEvent | TouchEvent>) => void)"}},onWheel:{defaultValue:null,description:"",name:"onWheel",required:!1,type:{name:"((e: MapWheelEvent) => void)"}}}}}catch{}const ue=()=>{const e=d.useContext(Ve);if(!e)throw new Error("The useMap must be used in the Map container");return e},Aa=e=>{if(!e)return null;if("toBounds"in e)return e;let t=0,n=0;return Array.isArray(e)?(t=e[0],n=e[1]):"lng"in e&&"lat"in e?(t=e.lng,n=e.lat):"lon"in e&&"lat"in e&&(t=e.lon,n=e.lat),t!==0&&n!==0?new ae.LngLat(t,n):null},Ca=["anchor","clickTolerance","color","scale"],xa=["offset","draggable","rotation","rotationAlignment","pitchAlignment","occludedOpacity","lngLat"],Pa=xa.concat(Ca),Oa={},L={lngLat:Aa},Qe={onDragStart:"dragstart",onDrag:"drag",onDragEnd:"dragend"},La=Object.keys(Qe),qe=d.forwardRef((e,t)=>{const{map:n}=ue(),{Portal:r,container:o}=wt(),[a,u,l]=ht(),{onInstanceCreated:s}=Je(e,a,{setterMap:Oa,converterMap:L});oe(a,e,{eventMap:Qe,eventList:La}),d.useImperativeHandle(t,()=>a,[a]);const i=f=>{var c;(c=e.onClick)==null||c.call(e,{type:"click",target:l(),originalEvent:f})};d.useEffect(()=>(n&&p().then(f=>{u(f),f.addTo(n),o.addEventListener("click",i),s()}),()=>{o&&o.removeEventListener("click",i)}),[n]);const p=()=>{const f=m(e);if(f.lngLat){const c=new ae.Marker(o,f);return c.setLngLat(f.lngLat),Promise.resolve(c)}else return Promise.reject()},m=f=>{const c={};return Pa.forEach(g=>{g in f&&(c[g]=v(g,f))}),c},v=(f,c)=>{var h;let g=c[f];if(f in L)try{g=(h=L[f])==null?void 0:h.call(L,c[f])}catch{}return g};return X(rt,{children:a&&X(r,{children:e.children})})});try{qe.displayName="Marker",qe.__docgenInfo={description:"",displayName:"Marker",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},lngLat:{defaultValue:null,description:"经纬度坐标",name:"lngLat",required:!1,type:{name:"LngLatLike"}},onDragStart:{defaultValue:null,description:"",name:"onDragStart",required:!1,type:{name:"((e: MarkerEvent<MouseEvent | TouchEvent>) => void)"}},onDrag:{defaultValue:null,description:"",name:"onDrag",required:!1,type:{name:"((e: MarkerEvent<MouseEvent | TouchEvent>) => void)"}},onDragEnd:{defaultValue:null,description:"",name:"onDragEnd",required:!1,type:{name:"((e: MarkerEvent<MouseEvent | TouchEvent>) => void)"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MarkerEvent<Event>) => void)"}}}}}catch{}const et=e=>e.style&&e.style._loaded;function Re(e,t){if(!e)throw new Error(t)}function re(e,t){if(e===t)return!0;if(!e||!t)return!1;if(Array.isArray(e)){if(!Array.isArray(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(!re(e[n],t[n]))return!1;return!0}else if(Array.isArray(t))return!1;if(typeof e=="object"&&typeof t=="object"){const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const o of n)if(!t.hasOwnProperty(o)||!re(e[o],t[o]))return!1;return!0}return!1}function Da(e,t,n){if(et(e)){const r={...n};return delete r.id,delete r.children,e.addSource(t,r),e.getSource(t)}}function qa(e,t,n){Re(t.id===n.id,"source id changed"),Re(t.type===n.type,"source type changed");let r="",o=0;for(const u in t)u!=="children"&&u!=="id"&&!re(n[u],t[u])&&(r=u,o++);if(!o)return;const a=t.type;if(a==="geojson")e.setData(t.data);else if(a==="image")e.updateImage({url:t.url,coordinates:t.coordinates});else if("setCoordinates"in e&&o===1&&r==="coordinates")e.setCoordinates(t.coordinates);else if("setUrl"in e)switch(r){case"url":e.setUrl(t.url);break;case"tiles":e.setTiles(t.tiles);break}else console.warn(`Unable to update <Source> prop: ${r}`)}let Ra=0;function $e(e){const{map:t}=ue(),n=d.useRef(e),[,r]=d.useState(0),o=d.useMemo(()=>e.id||`jsx-source-${Ra++}`,[]);d.useEffect(()=>{if(t){const u=()=>setTimeout(()=>r(l=>l+1),0);return t.on("styledata",u),u(),()=>{var l;if(t.off("styledata",u),t.getStyle()&&et(t)&&t.getSource(o)){const s=(l=t.getStyle())==null?void 0:l.layers;if(s)for(const i of s)i.source===o&&t.removeLayer(i.id);t.removeSource(o)}}}},[t]);let a=t&&t.getStyle()&&t.getSource(o);return a?qa(a,e,n.current):a=Da(t,o,e),n.current=e,a&&at.Children.map(e.children,u=>u&&d.cloneElement(u,{source:o}))||null}try{$e.displayName="Source",$e.__docgenInfo={description:"",displayName:"Source",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"custom"'},{value:'"geojson"'},{value:'"video"'},{value:'"image"'},{value:'"canvas"'},{value:'"vector"'},{value:'"raster"'},{value:'"raster-dem"'}]}},scheme:{defaultValue:null,description:"",name:"scheme",required:!1,type:{name:"string"}},minzoom:{defaultValue:null,description:"",name:"minzoom",required:!1,type:{name:"number"}},maxzoom:{defaultValue:null,description:"",name:"maxzoom",required:!1,type:{name:"number"}},tileSize:{defaultValue:null,description:"",name:"tileSize",required:!1,type:{name:"number"}},attribution:{defaultValue:null,description:"",name:"attribution",required:!1,type:{name:"string"}},_implementation:{defaultValue:null,description:"",name:"_implementation",required:!0,type:{name:"CustomSourceImplementation<unknown>"}}}}}catch{}const tt={onClick:"click",onDoubleClick:"dblclick",onContextMenu:"contextmenu",onMouseDown:"mousedown",onMouseUp:"mouseup",onMouseMove:"mousemove",onMouseEnter:"mouseenter",onMouseLeave:"mouseleave",onMouseOver:"mouseover",onMouseOut:"mouseout",onTouchStart:"touchstart",onTouchEnd:"touchend",onTouchCancel:"touchcancel"},$a=Object.keys(tt),je=e=>{const{before:t,...n}=e,{map:r}=ue();return oe(r,e,{eventMap:tt,eventList:$a}),d.useEffect(()=>{r&&r.addLayer(n,t)},[r]),null};try{je.displayName="Layer",je.__docgenInfo={description:"",displayName:"Layer",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"symbol"'},{value:'"raster"'},{value:'"background"'},{value:'"circle"'},{value:'"fill-extrusion"'},{value:'"fill"'},{value:'"heatmap"'},{value:'"hillshade"'},{value:'"line"'},{value:'"sky"'}]}},before:{defaultValue:null,description:"",name:"before",required:!1,type:{name:"string"}},layout:{defaultValue:null,description:"",name:"layout",required:!1,type:{name:"SymbolLayout | RasterLayout | BackgroundLayout | CircleLayout | FillExtrusionLayout | ... 5 more ..."}},paint:{defaultValue:null,description:"",name:"paint",required:!1,type:{name:"SymbolPaint | RasterPaint | BackgroundPaint | CirclePaint | FillExtrusionPaint | FillPaint | ... 4 more ..."}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MapLayerMouseEvent) => void)"}},onDoubleClick:{defaultValue:null,description:"",name:"onDoubleClick",required:!1,type:{name:"((e: MapLayerMouseEvent) => void)"}},onContextMenu:{defaultValue:null,description:"",name:"onContextMenu",required:!1,type:{name:"((e: MapLayerMouseEvent) => void)"}},onMouseDown:{defaultValue:null,description:"",name:"onMouseDown",required:!1,type:{name:"((e: MapLayerMouseEvent) => void)"}},onMouseUp:{defaultValue:null,description:"",name:"onMouseUp",required:!1,type:{name:"((e: MapLayerMouseEvent) => void)"}},onMouseMove:{defaultValue:null,description:"",name:"onMouseMove",required:!1,type:{name:"((e: MapLayerMouseEvent) => void)"}},onMouseEnter:{defaultValue:null,description:"",name:"onMouseEnter",required:!1,type:{name:"((e: MapLayerMouseEvent) => void)"}},onMouseLeave:{defaultValue:null,description:"",name:"onMouseLeave",required:!1,type:{name:"((e: MapLayerMouseEvent) => void)"}},onMouseOver:{defaultValue:null,description:"",name:"onMouseOver",required:!1,type:{name:"((e: MapLayerMouseEvent) => void)"}},onMouseOut:{defaultValue:null,description:"",name:"onMouseOut",required:!1,type:{name:"((e: MapLayerMouseEvent) => void)"}},onTouchStart:{defaultValue:null,description:"",name:"onTouchStart",required:!1,type:{name:"((e: MapLayerTouchEvent) => void)"}},onTouchEnd:{defaultValue:null,description:"",name:"onTouchEnd",required:!1,type:{name:"((e: MapLayerTouchEvent) => void)"}},onTouchCancel:{defaultValue:null,description:"",name:"onTouchCancel",required:!1,type:{name:"((e: MapLayerTouchEvent) => void)"}}}}}catch{}export{De as M,qe as a,ue as u};
