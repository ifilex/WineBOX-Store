(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var _h={exports:{}},ml={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cv;function mM(){if(Cv)return ml;Cv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:d,ref:l!==void 0?l:null,props:u}}return ml.Fragment=t,ml.jsx=i,ml.jsxs=i,ml}var Nv;function gM(){return Nv||(Nv=1,_h.exports=mM()),_h.exports}var b=gM(),Sh={exports:{}},dt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dv;function xM(){if(Dv)return dt;Dv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),v=Symbol.for("react.view_transition"),M=Symbol.iterator;function w(I){return I===null||typeof I!="object"?null:(I=M&&I[M]||I["@@iterator"],typeof I=="function"?I:null)}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,S={};function z(I,$,_e){this.props=I,this.context=$,this.refs=S,this.updater=_e||D}z.prototype.isReactComponent={},z.prototype.setState=function(I,$){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,$,"setState")},z.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function k(){}k.prototype=z.prototype;function C(I,$,_e){this.props=I,this.context=$,this.refs=S,this.updater=_e||D}var P=C.prototype=new k;P.constructor=C,y(P,z.prototype),P.isPureReactComponent=!0;var U=Array.isArray;function F(){}var T={H:null,A:null,T:null,S:null},N=Object.prototype.hasOwnProperty;function V(I,$,_e){var G=_e.ref;return{$$typeof:o,type:I,key:$,ref:G!==void 0?G:null,props:_e}}function X(I,$){return V(I.type,$,I.props)}function Z(I){return typeof I=="object"&&I!==null&&I.$$typeof===o}function se(I){var $={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(_e){return $[_e]})}var K=/\/+/g;function ne(I,$){return typeof I=="object"&&I!==null&&I.key!=null?se(""+I.key):$.toString(36)}function W(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(F,F):(I.status="pending",I.then(function($){I.status==="pending"&&(I.status="fulfilled",I.value=$)},function($){I.status==="pending"&&(I.status="rejected",I.reason=$)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function j(I,$,_e,G,te){var be=typeof I;(be==="undefined"||be==="boolean")&&(I=null);var Te=!1;if(I===null)Te=!0;else switch(be){case"bigint":case"string":case"number":Te=!0;break;case"object":switch(I.$$typeof){case o:case t:Te=!0;break;case g:return Te=I._init,j(Te(I._payload),$,_e,G,te)}}if(Te)return te=te(I),Te=G===""?"."+ne(I,0):G,U(te)?(_e="",Te!=null&&(_e=Te.replace(K,"$&/")+"/"),j(te,$,_e,"",function(De){return De})):te!=null&&(Z(te)&&(te=X(te,_e+(te.key==null||I&&I.key===te.key?"":(""+te.key).replace(K,"$&/")+"/")+Te)),$.push(te)),1;Te=0;var le=G===""?".":G+":";if(U(I))for(var Ae=0;Ae<I.length;Ae++)G=I[Ae],be=le+ne(G,Ae),Te+=j(G,$,_e,be,te);else if(Ae=w(I),typeof Ae=="function")for(I=Ae.call(I),Ae=0;!(G=I.next()).done;)G=G.value,be=le+ne(G,Ae++),Te+=j(G,$,_e,be,te);else if(be==="object"){if(typeof I.then=="function")return j(W(I),$,_e,G,te);throw $=String(I),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return Te}function ce(I,$,_e){if(I==null)return I;var G=[],te=0;return j(I,G,"","",function(be){return $.call(_e,be,te++)}),G}function oe(I){if(I._status===-1){var $=I._result,_e=$();_e.then(function(G){(I._status===0||I._status===-1)&&(I._status=1,I._result=G,_e.status===void 0&&(_e.status="fulfilled",_e.value=G))},function(G){(I._status===0||I._status===-1)&&(I._status=2,I._result=G,_e.status===void 0&&(_e.status="rejected",_e.reason=G))}),I._status===-1&&(I._status=0,I._result=_e)}if(I._status===1)return I._result.default;throw I._result}var O=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)};function L(I){var $=T.T,_e={};_e.types=$!==null?$.types:null,T.T=_e;try{var G=I(),te=T.S;te!==null&&te(_e,G),typeof G=="object"&&G!==null&&typeof G.then=="function"&&G.then(F,O)}catch(be){O(be)}finally{$!==null&&_e.types!==null&&($.types=_e.types),T.T=$}}function Ce(I){var $=T.T;if($!==null){var _e=$.types;_e===null?$.types=[I]:_e.indexOf(I)===-1&&_e.push(I)}else L(Ce.bind(null,I))}var ve={map:ce,forEach:function(I,$,_e){ce(I,function(){$.apply(this,arguments)},_e)},count:function(I){var $=0;return ce(I,function(){$++}),$},toArray:function(I){return ce(I,function($){return $})||[]},only:function(I){if(!Z(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return dt.Activity=x,dt.Children=ve,dt.Component=z,dt.Fragment=i,dt.Profiler=l,dt.PureComponent=C,dt.StrictMode=s,dt.Suspense=p,dt.ViewTransition=v,dt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=T,dt.__COMPILER_RUNTIME={__proto__:null,c:function(I){return T.H.useMemoCache(I)}},dt.addTransitionType=Ce,dt.cache=function(I){return function(){return I.apply(null,arguments)}},dt.cacheSignal=function(){return null},dt.cloneElement=function(I,$,_e){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var G=y({},I.props),te=I.key;if($!=null)for(be in $.key!==void 0&&(te=""+$.key),$)!N.call($,be)||be==="key"||be==="__self"||be==="__source"||be==="ref"&&$.ref===void 0||(G[be]=$[be]);var be=arguments.length-2;if(be===1)G.children=_e;else if(1<be){for(var Te=Array(be),le=0;le<be;le++)Te[le]=arguments[le+2];G.children=Te}return V(I.type,te,G)},dt.createContext=function(I){return I={$$typeof:d,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:u,_context:I},I},dt.createElement=function(I,$,_e){var G,te={},be=null;if($!=null)for(G in $.key!==void 0&&(be=""+$.key),$)N.call($,G)&&G!=="key"&&G!=="__self"&&G!=="__source"&&(te[G]=$[G]);var Te=arguments.length-2;if(Te===1)te.children=_e;else if(1<Te){for(var le=Array(Te),Ae=0;Ae<Te;Ae++)le[Ae]=arguments[Ae+2];te.children=le}if(I&&I.defaultProps)for(G in Te=I.defaultProps,Te)te[G]===void 0&&(te[G]=Te[G]);return V(I,be,te)},dt.createRef=function(){return{current:null}},dt.forwardRef=function(I){return{$$typeof:h,render:I}},dt.isValidElement=Z,dt.lazy=function(I){return{$$typeof:g,_payload:{_status:-1,_result:I},_init:oe}},dt.memo=function(I,$){return{$$typeof:m,type:I,compare:$===void 0?null:$}},dt.startTransition=L,dt.unstable_useCacheRefresh=function(){return T.H.useCacheRefresh()},dt.use=function(I){return T.H.use(I)},dt.useActionState=function(I,$,_e){return T.H.useActionState(I,$,_e)},dt.useCallback=function(I,$){return T.H.useCallback(I,$)},dt.useContext=function(I){return T.H.useContext(I)},dt.useDebugValue=function(){},dt.useDeferredValue=function(I,$){return T.H.useDeferredValue(I,$)},dt.useEffect=function(I,$){return T.H.useEffect(I,$)},dt.useEffectEvent=function(I){return T.H.useEffectEvent(I)},dt.useId=function(){return T.H.useId()},dt.useImperativeHandle=function(I,$,_e){return T.H.useImperativeHandle(I,$,_e)},dt.useInsertionEffect=function(I,$){return T.H.useInsertionEffect(I,$)},dt.useLayoutEffect=function(I,$){return T.H.useLayoutEffect(I,$)},dt.useMemo=function(I,$){return T.H.useMemo(I,$)},dt.useOptimistic=function(I,$){return T.H.useOptimistic(I,$)},dt.useReducer=function(I,$,_e){return T.H.useReducer(I,$,_e)},dt.useRef=function(I){return T.H.useRef(I)},dt.useState=function(I){return T.H.useState(I)},dt.useSyncExternalStore=function(I,$,_e){return T.H.useSyncExternalStore(I,$,_e)},dt.useTransition=function(){return T.H.useTransition()},dt.version="19.3.0",dt}var Lv;function Qp(){return Lv||(Lv=1,Sh.exports=xM()),Sh.exports}var lt=Qp(),yh={exports:{}},gl={},bh={exports:{}},Mh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uv;function vM(){return Uv||(Uv=1,(function(o){function t(W,j){var ce=W.length;W.push(j);e:for(;0<ce;){var oe=ce-1>>>1,O=W[oe];if(0<l(O,j))W[oe]=j,W[ce]=O,ce=oe;else break e}}function i(W){return W.length===0?null:W[0]}function s(W){if(W.length===0)return null;var j=W[0],ce=W.pop();if(ce!==j){W[0]=ce;e:for(var oe=0,O=W.length,L=O>>>1;oe<L;){var Ce=2*(oe+1)-1,ve=W[Ce],I=Ce+1,$=W[I];if(0>l(ve,ce))I<O&&0>l($,ve)?(W[oe]=$,W[I]=ce,oe=I):(W[oe]=ve,W[Ce]=ce,oe=Ce);else if(I<O&&0>l($,ce))W[oe]=$,W[I]=ce,oe=I;else break e}}return j}function l(W,j){var ce=W.sortIndex-j.sortIndex;return ce!==0?ce:W.id-j.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var p=[],m=[],g=1,x=null,v=3,M=!1,w=!1,D=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,k=typeof setImmediate<"u"?setImmediate:null;function C(W){for(var j=i(m);j!==null;){if(j.callback===null)s(m);else if(j.startTime<=W)s(m),j.sortIndex=j.expirationTime,t(p,j);else break;j=i(m)}}function P(W){if(D=!1,C(W),!w)if(i(p)!==null)w=!0,U||(U=!0,Z());else{var j=i(m);j!==null&&ne(P,j.startTime-W)}}var U=!1,F=-1,T=5,N=-1;function V(){return y?!0:!(o.unstable_now()-N<T)}function X(){if(y=!1,U){var W=o.unstable_now();N=W;var j=!0;try{e:{w=!1,D&&(D=!1,z(F),F=-1),M=!0;var ce=v;try{t:{for(C(W),x=i(p);x!==null&&!(x.expirationTime>W&&V());){var oe=x.callback;if(typeof oe=="function"){x.callback=null,v=x.priorityLevel;var O=oe(x.expirationTime<=W);if(W=o.unstable_now(),typeof O=="function"){x.callback=O,C(W),j=!0;break t}x===i(p)&&s(p),C(W)}else s(p);x=i(p)}if(x!==null)j=!0;else{var L=i(m);L!==null&&ne(P,L.startTime-W),j=!1}}break e}finally{x=null,v=ce,M=!1}j=void 0}}finally{j?Z():U=!1}}}var Z;if(typeof k=="function")Z=function(){k(X)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,K=se.port2;se.port1.onmessage=X,Z=function(){K.postMessage(null)}}else Z=function(){S(X,0)};function ne(W,j){F=S(function(){W(o.unstable_now())},j)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(W){W.callback=null},o.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<W?Math.floor(1e3/W):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_next=function(W){switch(v){case 1:case 2:case 3:var j=3;break;default:j=v}var ce=v;v=j;try{return W()}finally{v=ce}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(W,j){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var ce=v;v=W;try{return j()}finally{v=ce}},o.unstable_scheduleCallback=function(W,j,ce){var oe=o.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?oe+ce:oe):ce=oe,W){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=ce+O,W={id:g++,callback:j,priorityLevel:W,startTime:ce,expirationTime:O,sortIndex:-1},ce>oe?(W.sortIndex=ce,t(m,W),i(p)===null&&W===i(m)&&(D?(z(F),F=-1):D=!0,ne(P,ce-oe))):(W.sortIndex=O,t(p,W),w||M||(w=!0,U||(U=!0,Z()))),W},o.unstable_shouldYield=V,o.unstable_wrapCallback=function(W){var j=v;return function(){var ce=v;v=j;try{return W.apply(this,arguments)}finally{v=ce}}}})(Mh)),Mh}var Ov;function _M(){return Ov||(Ov=1,bh.exports=vM()),bh.exports}var Eh={exports:{}},In={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pv;function SM(){if(Pv)return In;Pv=1;var o=Qp();function t(g){var x="https://react.dev/errors/"+g;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)x+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+g+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),u=Symbol.for("react.recoverable"),d=Symbol.for("react.optimistic_key");function h(g,x,v){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:M==null?null:M===d?d:""+M,children:g,containerInfo:x,implementation:v}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(g,x){if(g==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return In.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,In.browser=function(g){return{$$typeof:u,_reason:g}},In.createPortal=function(g,x){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(t(299));return h(g,x,null,v)},In.flushSync=function(g){var x=p.T,v=s.p;try{if(p.T=null,s.p=2,g)return g()}finally{p.T=x,s.p=v,s.d.f()}},In.preconnect=function(g,x){typeof g=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,s.d.C(g,x))},In.prefetchDNS=function(g){typeof g=="string"&&s.d.D(g)},In.preinit=function(g,x){if(typeof g=="string"&&x&&typeof x.as=="string"){var v=x.as,M=m(v,x.crossOrigin),w=typeof x.integrity=="string"?x.integrity:void 0,D=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;v==="style"?s.d.S(g,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:M,integrity:w,fetchPriority:D}):v==="script"&&s.d.X(g,{crossOrigin:M,integrity:w,fetchPriority:D,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},In.preinitModule=function(g,x){if(typeof g=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var v=m(x.as,x.crossOrigin);s.d.M(g,{crossOrigin:v,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0})}}else x==null&&s.d.M(g)},In.preload=function(g,x){if(typeof g=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var v=x.as,M=m(v,x.crossOrigin);s.d.L(g,v,{crossOrigin:M,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},In.preloadModule=function(g,x){if(typeof g=="string")if(x){var v=m(x.as,x.crossOrigin);s.d.m(g,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:v,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0})}else s.d.m(g)},In.requestFormReset=function(g){s.d.r(g)},In.unstable_batchedUpdates=function(g,x){return g(x)},In.useFormState=function(g,x,v){return p.H.useFormState(g,x,v)},In.useFormStatus=function(){return p.H.useHostTransitionStatus()},In.version="19.3.0",In}var zv;function yM(){if(zv)return Eh.exports;zv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Eh.exports=SM(),Eh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iv;function bM(){if(Iv)return gl;Iv=1;var o=_M(),t=Qp(),i=yM();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){for(var n=e,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(e=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?e:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(u(e)!==e)throw Error(s(188))}function m(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return p(c),e;if(f===r)return p(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var _=!1,R=c.child;R;){if(R===a){_=!0,a=c,r=f;break}if(R===r){_=!0,r=c,a=f;break}R=R.sibling}if(!_){for(R=f.child;R;){if(R===a){_=!0,a=f,r=c;break}if(R===r){_=!0,r=f,a=c;break}R=R.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}function x(e,n,a,r,c,f){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&a(e,r,c,f)||(e.tag!==22||e.memoizedState===null)&&(n||e.tag!==5&&e.tag!==27)&&x(e.child,n,a,r,c,f))return!0;e=e.sibling}return!1}function v(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function M(e){var n=!1;for(e=e.return;e!==null&&(e.tag===4&&(n=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return n}function w(e){var n=[null,null],a=v(e);return a===null||D(n,e,a.child,{foundSelf:!1}),n}function D(e,n,a,r){for(;a!==null;){if(a===n)r.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(r.foundSelf)return e[1]=a,!0;e[0]=a}else if((a.tag!==22||a.memoizedState===null)&&D(e,n,a.child,r))return!0;a=a.sibling}return!1}function y(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(s(559))}}var S=null,z=null;function k(e,n,a){return e===a?!0:e===n?(S=e,!0):!1}function C(e,n,a){return e===a?(z=e,!1):e===n?(z!==null&&(S=e),!0):!1}function P(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function U(e,n,a){for(var r=0,c=e;c;c=a(c))r++;c=0;for(var f=n;f;f=a(f))c++;for(;0<r-c;)e=a(e),r--;for(;0<c-r;)n=a(n),c--;for(;r--;){if(e===n||n!==null&&e===n.alternate)return e;e=a(e),n=a(n)}return null}var F=Object.assign,T=Symbol.for("react.element"),N=Symbol.for("react.transitional.element"),V=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),Z=Symbol.for("react.strict_mode"),se=Symbol.for("react.profiler"),K=Symbol.for("react.consumer"),ne=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),oe=Symbol.for("react.memo"),O=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),Ce=Symbol.for("react.legacy_hidden"),ve=Symbol.for("react.memo_cache_sentinel"),I=Symbol.for("react.view_transition"),$=Symbol.for("react.recoverable"),_e=Symbol.iterator;function G(e){return e===null||typeof e!="object"?null:(e=_e&&e[_e]||e["@@iterator"],typeof e=="function"?e:null)}var te=Symbol.for("react.client.reference");function be(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===te?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case X:return"Fragment";case se:return"Profiler";case Z:return"StrictMode";case j:return"Suspense";case ce:return"SuspenseList";case L:return"Activity";case I:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case V:return"Portal";case ne:return e.displayName||"Context";case K:return(e._context.displayName||"Context")+".Consumer";case W:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case oe:return n=e.displayName||null,n!==null?n:be(e.type)||"Memo";case O:n=e._payload,e=e._init;try{return be(e(n))}catch{}}return null}var Te=Array.isArray,le=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ae=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,De={pending:!1,data:null,method:null,action:null},Ue=[],nt=-1;function st(e){return{current:e}}function Ye(e){0>nt||(e.current=Ue[nt],Ue[nt]=null,nt--)}function $e(e,n){nt++,Ue[nt]=e.current,e.current=n}var Mt=st(null),Vt=st(null),yt=st(null),kt=st(null);function Q(e,n){switch($e(yt,n),$e(Vt,e),$e(Mt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Bx(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Bx(n),e=Fx(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Ye(Mt),$e(Mt,e)}function Qt(){Ye(Mt),Ye(Vt),Ye(yt)}function Et(e){var n=e.memoizedState;n!==null&&(kr._currentValue=n.memoizedState,$e(kt,e)),n=Mt.current;var a=Fx(n,e.type);n!==a&&($e(Vt,e),$e(Mt,a))}function B(e){Vt.current===e&&(Ye(Mt),Ye(Vt)),kt.current===e&&(Ye(kt),kr._currentValue=De)}var E,re;function fe(e){if(E===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);E=n&&n[1]||"",re=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+E+e+re}var Se=!1;function Le(e,n){if(!e||Se)return"";Se=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var Ee=function(){throw Error()};if(Object.defineProperty(Ee.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ee,[])}catch(Fe){var ee=Fe}Reflect.construct(e,[],Ee)}else{try{Ee.call()}catch(Fe){ee=Fe}Ee=!1;try{var me=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),Ee=!0,new e}finally{Ee&&(me!==void 0?Object.defineProperty(e.prototype,"props",me):delete e.prototype.props)}}}else{try{throw Error()}catch(Fe){ee=Fe}(Ee=e())&&typeof Ee.catch=="function"&&Ee.catch(function(){})}}catch(Fe){if(Fe&&ee&&typeof Fe.stack=="string")return[Fe.stack,ee.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),_=f[0],R=f[1];if(_&&R){var H=_.split(`
`),ae=R.split(`
`);for(c=r=0;r<H.length&&!H[r].includes("DetermineComponentFrameRoot");)r++;for(;c<ae.length&&!ae[c].includes("DetermineComponentFrameRoot");)c++;if(r===H.length||c===ae.length)for(r=H.length-1,c=ae.length-1;1<=r&&0<=c&&H[r]!==ae[c];)c--;for(;1<=r&&0<=c;r--,c--)if(H[r]!==ae[c]){if(r!==1||c!==1)do if(r--,c--,0>c||H[r]!==ae[c]){var ge=`
`+H[r].replace(" at new "," at ");return e.displayName&&ge.includes("<anonymous>")&&(ge=ge.replace("<anonymous>",e.displayName)),ge}while(1<=r&&0<=c);break}}}finally{Se=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?fe(a):""}function Oe(e,n){switch(e.tag){case 26:case 27:case 5:return fe(e.type);case 16:return fe("Lazy");case 13:return e.child!==n&&n!==null?fe("Suspense Fallback"):fe("Suspense");case 19:return fe("SuspenseList");case 0:case 15:return Le(e.type,!1);case 11:return Le(e.type.render,!1);case 1:return Le(e.type,!0);case 31:return fe("Activity");case 30:return fe("ViewTransition");default:return""}}function ye(e){try{var n="",a=null;do n+=Oe(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Re=Object.prototype.hasOwnProperty,ze=o.unstable_scheduleCallback,at=o.unstable_cancelCallback,Ge=o.unstable_shouldYield,He=o.unstable_requestPaint,We=o.unstable_now,ot=o.unstable_getCurrentPriorityLevel,ht=o.unstable_ImmediatePriority,J=o.unstable_UserBlockingPriority,Pe=o.unstable_NormalPriority,we=o.unstable_LowPriority,Ie=o.unstable_IdlePriority,qe=o.log,Ne=o.unstable_setDisableYieldValue,it=null,je=null;function It(e){if(typeof qe=="function"&&Ne(e),je&&typeof je.setStrictMode=="function")try{je.setStrictMode(it,e)}catch{}}var pt=Math.clz32?Math.clz32:Wu,si=Math.log,_i=Math.LN2;function Wu(e){return e>>>=0,e===0?32:31-(si(e)/_i|0)|0}var sr=256,Es=262144,ka=4194304;function va(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ts(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var c=0,f=e.suspendedLanes,_=e.pingedLanes;e=e.warmLanes;var R=r&134217727;return R!==0?(r=R&~f,r!==0?c=va(r):(_&=R,_!==0?c=va(_):a||(a=R&~e,a!==0&&(c=va(a))))):(R=r&~f,R!==0?c=va(R):_!==0?c=va(_):a||(a=r&~e,a!==0&&(c=va(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Xa(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function qi(e,n){(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var r=31-pt(a),c=1<<r;n|=e[r],a&=~c}return n}function yo(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bo(){var e=ka;return ka<<=1,(ka&62914560)===0&&(ka=4194304),e}function rr(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Wi(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Fl(e,n,a,r,c,f){var _=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,H=e.expirationTimes,ae=e.hiddenUpdates;for(a=_&~a;0<a;){var ge=31-pt(a),Ee=1<<ge;R[ge]=0,H[ge]=-1;var ee=ae[ge];if(ee!==null)for(ae[ge]=null,ge=0;ge<ee.length;ge++){var me=ee[ge];me!==null&&(me.lane&=-536870913)}a&=~Ee}r!==0&&As(e,r,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(_&~n))}function As(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-pt(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function Mo(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-pt(a),c=1<<r;c&n|e[r]&n&&(e[r]|=n),a&=~c}}function Eo(e,n){var a=n&-n;return a=(a&42)!==0?1:To(a),(a&(e.suspendedLanes|n))!==0?0:a}function To(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ao(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Hl(){var e=Ae.p;return e!==0?e:(e=window.event,e===void 0?32:bv(e.type))}function Gl(e,n){var a=Ae.p;try{return Ae.p=e,n()}finally{Ae.p=a}}var Si=Math.random().toString(36).slice(2),A="__reactFiber$"+Si,q="__reactProps$"+Si,xe="__reactContainer$"+Si,he="__reactEvents$"+Si,pe="__reactListeners$"+Si,Ve="__reactHandles$"+Si,Ze="__reactResources$"+Si,Be="__reactMarker$"+Si,Je="__reactLoad$"+Si;function et(e){delete e[A],delete e[q],delete e[pe],delete e[Ve]}function ut(e){var n;if(n=e[A])return n;for(var a=e.parentNode;a;){if(n=a[xe]||a[A]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=nv(e);e!==null;){if(a=e[A])return a;e=nv(e)}return n}e=a,a=e.parentNode}return null}function mt(e){if(e=e[A]||e[xe]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Ke(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Rt(e){var n=e[Ze];return n||(n=e[Ze]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Tt(e){e[Be]=!0}function nn(e){e[Je]=void 0}var Zt=new Set,Mn={};function ke(e,n){hn(e,n),hn(e+"Capture",n)}function hn(e,n){for(Mn[e]=n,e=0;e<n.length;e++)Zt.add(n[e])}var Bt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Xn={},ri={};function Yi(e){return Re.call(ri,e)?!0:Re.call(Xn,e)?!1:Bt.test(e)?ri[e]=!0:(Xn[e]=!0,!1)}var At=!1;function jt(){var e=At;return At=!1,e}function rn(e,n,a){if(Yi(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,a)}}function oi(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,a)}}function Ut(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,r)}}function pn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _a(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Vl(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Yu(e){if(!e._valueTracker){var n=_a(e)?"checked":"value";e._valueTracker=Vl(e,n,""+e[n])}}function Am(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=_a(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}var zS=/[\n"\\]/g;function yi(e){return e.replace(zS,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Zu(e,n,a,r,c,f,_,R){e.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.type=_:e.removeAttribute("type"),n!=null?_==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+pn(n)):e.value!==""+pn(n)&&(e.value=""+pn(n)):_!=="submit"&&_!=="reset"||e.removeAttribute("value"),n!=null?_==="number"&&e.value==n?Ku(e,pn(e.value)):Ku(e,pn(n)):a!=null?Ku(e,pn(a)):r!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+pn(R):e.removeAttribute("name")}function wm(e,n,a,r,c,f,_,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Yu(e);return}a=a!=null?""+pn(a):"",n=n!=null?""+pn(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=R?e.checked:!!r,e.defaultChecked=!!r,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(e.name=_),Yu(e)}function Ku(e,n){e.defaultValue!==""+n&&(e.defaultValue=""+n)}function or(e,n,a,r){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&r&&(e[a].defaultSelected=!0)}else{for(a=""+pn(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,r&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function Rm(e,n,a){if(n!=null&&(n=""+pn(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+pn(a):""}function Cm(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(Te(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=pn(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),Yu(e)}function lr(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var IS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Nm(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||IS.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Dm(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="",At=!0);for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&(Nm(e,c,r),At=!0)}else for(var f in n)n.hasOwnProperty(f)&&Nm(e,f,n[f])}function Qu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var BS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),FS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function kl(e){return FS.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Zi(){}var Ju=null;function $u(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var cr=null,ur=null;function Lm(e){var n=mt(e);if(n&&(e=n.stateNode)){var a=e[q]||null;e:switch(e=n.stateNode,n.type){case"input":if(Zu(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+yi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var c=r[q]||null;if(!c)throw Error(s(90));Zu(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&Am(r)}break e;case"textarea":Rm(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&or(e,!!a.multiple,n,!1)}}}var ef=!1;function Um(e,n,a){if(ef)return e(n,a);ef=!0;try{var r=e(n);return r}finally{if(ef=!1,(cr!==null||ur!==null)&&(kc(),cr&&(n=cr,e=ur,ur=cr=null,Lm(n),e)))for(n=0;n<e.length;n++)Lm(e[n])}}function wo(e,n){var a=e.stateNode;if(a===null)return null;var r=a[q]||null;if(r===null)return null;a=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Sa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tf=!1;if(Sa)try{var Ro={};Object.defineProperty(Ro,"passive",{get:function(){tf=!0}}),window.addEventListener("test",Ro,Ro),window.removeEventListener("test",Ro,Ro)}catch{tf=!1}var ja=null,nf=null,Xl=null;function Om(){if(Xl)return Xl;var e,n=nf,a=n.length,r,c="value"in ja?ja.value:ja.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var _=a-e;for(r=1;r<=_&&n[a-r]===c[f-r];r++);return Xl=c.slice(e,1<r?1-r:void 0)}function jl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ql(){return!0}function Pm(){return!1}function jn(e){function n(a,r,c,f,_){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ql:Pm,this.isPropagationStopped=Pm,this}return F(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ql)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ql)},persist:function(){},isPersistent:ql}),n}var qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wl=jn(qa),Co=F({},qa,{view:0,detail:0}),HS=jn(Co),af,sf,No,Yl=F({},Co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:of,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==No&&(No&&e.type==="mousemove"?(af=e.screenX-No.screenX,sf=e.screenY-No.screenY):sf=af=0,No=e),af)},movementY:function(e){return"movementY"in e?e.movementY:sf}}),zm=jn(Yl),GS=F({},Yl,{dataTransfer:0}),VS=jn(GS),kS=F({},Co,{relatedTarget:0}),rf=jn(kS),XS=F({},qa,{animationName:0,elapsedTime:0,pseudoElement:0}),jS=jn(XS),qS=F({},qa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),WS=jn(qS),YS=F({},qa,{data:0}),Im=jn(YS),ZS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},KS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},QS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function JS(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=QS[e])?!!n[e]:!1}function of(){return JS}var $S=F({},Co,{key:function(e){if(e.key){var n=ZS[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=jl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?KS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:of,charCode:function(e){return e.type==="keypress"?jl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?jl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ey=jn($S),ty=F({},Yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bm=jn(ty),ny=F({},qa,{submitter:0}),iy=jn(ny),ay=F({},Co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:of}),sy=jn(ay),ry=F({},qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),oy=jn(ry),ly=F({},Yl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),cy=jn(ly),uy=F({},qa,{newState:0,oldState:0,source:0}),fy=jn(uy),dy=[9,13,27,32],lf=Sa&&"CompositionEvent"in window,Do=null;Sa&&"documentMode"in document&&(Do=document.documentMode);var hy=Sa&&"TextEvent"in window&&!Do,Fm=Sa&&(!lf||Do&&8<Do&&11>=Do),Hm=" ",Gm=!1;function Vm(e,n){switch(e){case"keyup":return dy.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function km(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fr=!1;function py(e,n){switch(e){case"compositionend":return km(n);case"keypress":return n.which!==32?null:(Gm=!0,Hm);case"textInput":return e=n.data,e===Hm&&Gm?null:e;default:return null}}function my(e,n){if(fr)return e==="compositionend"||!lf&&Vm(e,n)?(e=Om(),Xl=nf=ja=null,fr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Fm&&n.locale!=="ko"?null:n.data;default:return null}}var gy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xm(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!gy[e.type]:n==="textarea"}function jm(e,n,a,r){cr?ur?ur.push(r):ur=[r]:cr=r,n=Zc(n,"onChange"),0<n.length&&(a=new Wl("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var Lo=null,Uo=null;function xy(e){Lx(e,0)}function Zl(e){var n=Ke(e);if(Am(n))return e}function qm(e,n){if(e==="change")return n}var Wm=!1;if(Sa){var cf;if(Sa){var uf="oninput"in document;if(!uf){var Ym=document.createElement("div");Ym.setAttribute("oninput","return;"),uf=typeof Ym.oninput=="function"}cf=uf}else cf=!1;Wm=cf&&(!document.documentMode||9<document.documentMode)}function Zm(){Lo&&(Lo.detachEvent("onpropertychange",Km),Uo=Lo=null)}function Km(e){if(e.propertyName==="value"&&Zl(Uo)){var n=[];jm(n,Uo,e,$u(e)),Um(xy,n)}}function vy(e,n,a){e==="focusin"?(Zm(),Lo=n,Uo=a,Lo.attachEvent("onpropertychange",Km)):e==="focusout"&&Zm()}function _y(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Zl(Uo)}function Sy(e,n){if(e==="click")return Zl(n)}function yy(e,n){if(e==="input"||e==="change")return Zl(n)}function by(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var li=typeof Object.is=="function"?Object.is:by;function Oo(e,n){if(li(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!Re.call(n,c)||!li(e[c],n[c]))return!1}return!0}function ff(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Qm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Jm(e,n){var a=Qm(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Qm(a)}}function $m(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?$m(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function e0(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=ff(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=ff(e.document)}return n}function df(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var My=Sa&&"documentMode"in document&&11>=document.documentMode,dr=null,hf=null,Po=null,pf=!1;function t0(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;pf||dr==null||dr!==ff(r)||(r=dr,"selectionStart"in r&&df(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Po&&Oo(Po,r)||(Po=r,r=Zc(hf,"onSelect"),0<r.length&&(n=new Wl("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=dr)))}function ws(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var hr={animationend:ws("Animation","AnimationEnd"),animationiteration:ws("Animation","AnimationIteration"),animationstart:ws("Animation","AnimationStart"),transitionrun:ws("Transition","TransitionRun"),transitionstart:ws("Transition","TransitionStart"),transitioncancel:ws("Transition","TransitionCancel"),transitionend:ws("Transition","TransitionEnd")},mf={},n0={};Sa&&(n0=document.createElement("div").style,"AnimationEvent"in window||(delete hr.animationend.animation,delete hr.animationiteration.animation,delete hr.animationstart.animation),"TransitionEvent"in window||delete hr.transitionend.transition);function Rs(e){if(mf[e])return mf[e];if(!hr[e])return e;var n=hr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in n0)return mf[e]=n[a];return e}var i0=Rs("animationend"),a0=Rs("animationiteration"),s0=Rs("animationstart"),Ey=Rs("transitionrun"),Ty=Rs("transitionstart"),Ay=Rs("transitioncancel"),r0=Rs("transitionend"),o0=new Map,gf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");gf.push("scrollEnd");function Ui(e,n){o0.set(e,n),ke(n,[e])}var wy=0;function ya(e,n){if(e.name!=null&&e.name!=="auto")return e.name;if(n.autoName!==null)return n.autoName;e=Ii.identifierPrefix;var a=wy++;return e="_"+e+"t_"+a.toString(32)+"_",n.autoName=e}function l0(e){if(e==null||typeof e=="string")return e;var n=null,a=Ur;if(a!==null)for(var r=0;r<a.length;r++){var c=e[a[r]];if(c!=null){if(c==="none")return"none";n=n==null?c:n+(" "+c)}}return n??e.default}function ba(e,n){return e=l0(e),n=l0(n),n==null?e==="auto"?null:e:n==="auto"?null:n}var Kl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},bi=[],pr=0,xf=0;function Ql(){for(var e=pr,n=xf=pr=0;n<e;){var a=bi[n];bi[n++]=null;var r=bi[n];bi[n++]=null;var c=bi[n];bi[n++]=null;var f=bi[n];if(bi[n++]=null,r!==null&&c!==null){var _=r.pending;_===null?c.next=c:(c.next=_.next,_.next=c),r.pending=c}f!==0&&c0(a,c,f)}}function Jl(e,n,a,r){bi[pr++]=e,bi[pr++]=n,bi[pr++]=a,bi[pr++]=r,xf|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function vf(e,n,a,r){return Jl(e,n,a,r),$l(e)}function Cs(e,n){return Jl(e,null,null,n),$l(e)}function c0(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-pt(a),e=f.hiddenUpdates,r=e[c],r===null?e[c]=[n]:r.push(n),n.lane=a|536870912),f):null}function $l(e){if(50<il)throw il=0,Vc=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var mr={};function Ry(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(e,n,a,r){return new Ry(e,n,a,r)}function _f(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ma(e,n){var a=e.alternate;return a===null?(a=Jn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&1206910976,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function u0(e,n){e.flags&=1206910978;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function ec(e,n,a,r,c,f){var _=0;if(r=e,typeof r=="function")_f(r)&&(_=1);else if(typeof r=="string")_=nM(e,a,Mt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(r){case L:return e=Jn(31,a,n,c),e.elementType=L,e.lanes=f,e;case X:return Ns(a.children,c,f,n);case Z:_=8,c|=24;break;case se:return e=Jn(12,a,n,c|2),e.elementType=se,e.lanes=f,e;case j:return e=Jn(13,a,n,c),e.elementType=j,e.lanes=f,e;case ce:return e=Jn(19,a,n,c),e.elementType=ce,e.lanes=f,e;case Ce:case I:return e=c|32,e=Jn(30,a,n,e),e.elementType=I,e.lanes=f,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case ne:_=10;break e;case K:_=9;break e;case W:_=11;break e;case oe:_=14;break e;case O:_=16,r=null;break e}_=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=Jn(_,a,n,c),n.elementType=e,n.type=r,n.lanes=f,n}function Ns(e,n,a,r){return e=Jn(7,e,r,n),e.lanes=a,e}function Sf(e,n,a){return e=Jn(6,e,null,n),e.lanes=a,e}function f0(e){var n=Jn(18,null,null,0);return n.stateNode=e,n}function yf(e,n,a){return n=Jn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var d0=new WeakMap;function Mi(e,n){if(typeof e=="object"&&e!==null){var a=d0.get(e);return a!==void 0?a:(n={value:e,source:n,stack:ye(n)},d0.set(e,n),n)}return{value:e,source:n,stack:ye(n)}}var gr=[],xr=0,tc=null,zo=0,Ei=[],Ti=0,Wa=null,Ki=1,Qi="";function Ea(e,n){gr[xr++]=zo,gr[xr++]=tc,tc=e,zo=n}function h0(e,n,a){Ei[Ti++]=Ki,Ei[Ti++]=Qi,Ei[Ti++]=Wa,Wa=e;var r=Ki;e=Qi;var c=32-pt(r)-1;r&=~(1<<c),a+=1;var f=32-pt(n)+c;if(30<f){var _=c-c%5;f=(r&(1<<_)-1).toString(32),r>>=_,c-=_,Ki=1<<32-pt(n)+c|a<<c|r,Qi=f+e}else Ki=1<<f|a<<c|r,Qi=e}function nc(e){e.return!==null&&(Ea(e,1),h0(e,1,0))}function bf(e){for(;e===tc;)tc=gr[--xr],gr[xr]=null,zo=gr[--xr],gr[xr]=null;for(;e===Wa;)Wa=Ei[--Ti],Ei[Ti]=null,Qi=Ei[--Ti],Ei[Ti]=null,Ki=Ei[--Ti],Ei[Ti]=null}function p0(e,n){Ei[Ti++]=Ki,Ei[Ti++]=Qi,Ei[Ti++]=Wa,Ki=n.id,Qi=n.overflow,Wa=e}var Rn=null,on=null,wt=!1,Ya=null,Ai=!1,Mf=Error(s(519));function Za(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Io(Mi(n,e)),Mf}function m0(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[A]=e,n[q]=r,a){case"dialog":Nt("cancel",n),Nt("close",n);break;case"iframe":case"object":case"embed":Nt("load",n);break;case"video":case"audio":for(a=0;a<sl.length;a++)Nt(sl[a],n);break;case"source":Nt("error",n);break;case"img":case"image":case"link":Nt("error",n),Nt("load",n);break;case"details":Nt("toggle",n);break;case"input":Nt("invalid",n),wm(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Nt("invalid",n);break;case"textarea":Nt("invalid",n),Cm(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||zx(n.textContent,a)?(r.popover!=null&&(Nt("beforetoggle",n),Nt("toggle",n)),r.onScroll!=null&&Nt("scroll",n),r.onScrollEnd!=null&&Nt("scrollend",n),r.onClick!=null&&(n.onclick=Zi),n=!0):n=!1,n||Za(e,!0)}function ic(e){for(Rn=e.return;Rn;)switch(Rn.tag){case 5:case 31:case 13:Ai=!1;return;case 27:case 3:Ai=!0;return;default:Rn=Rn.return}}function vr(e){if(e!==Rn)return!1;if(!wt)return ic(e),wt=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||$d(e.type,e.memoizedProps)),a=!a),a&&on&&Za(e),ic(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));on=tv(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));on=tv(e)}else n===27?(n=on,fs(e.type)?(e=lh,lh=null,on=e):on=n):on=Rn?Ri(e.stateNode.nextSibling):null;return!0}function Ds(){on=Rn=null,wt=!1}function Ef(){var e=Ya;return e!==null&&(ti===null?ti=e:ti.push.apply(ti,e),Ya=null),e}function Io(e){Ya===null?Ya=[e]:Ya.push(e)}var Tf=st(null),Ls=null,Ta=null;function Ka(e,n,a){$e(Tf,n._currentValue),n._currentValue=a}function Aa(e){e._currentValue=Tf.current,Ye(Tf)}function ac(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function Af(e,n,a,r){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var _=c.child;f=f.firstContext;e:for(;f!==null;){var R=f;f=c;for(var H=0;H<n.length;H++)if(R.context===n[H]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),ac(f.return,a,e),r||(_=null);break e}f=R.next}}else if(c.tag===18){if(_=c.return,_===null)throw Error(s(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),ac(_,a,e),_=null}else c.tag===13&&c.memoizedState!==null&&c.memoizedState.dehydrated===null?(c.lanes|=a,_=c.alternate,_!==null&&(_.lanes|=a),ac(c.return,a,e),_=c.child,_=_!==null?_.sibling:null):_=c.child;if(_!==null)_.return=c;else for(_=c;_!==null;){if(_===e){_=null;break}if(c=_.sibling,c!==null){c.return=_.return,_=c;break}_=_.return}c=_}}function Us(e,n,a,r){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var _=c.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var R=c.type;li(c.pendingProps.value,_.value)||(e!==null?e.push(R):e=[R])}}else if(c===kt.current){if(_=c.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(kr):e=[kr])}c=c.return}return e!==null&&Af(n,e,a,r),n.flags|=262144,e!==null}function sc(e){for(e=e.firstContext;e!==null;){if(!li(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Os(e){Ls=e,Ta=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ln(e){return g0(Ls,e)}function rc(e,n){return Ls===null&&Os(e),g0(e,n)}function g0(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ta===null){if(e===null)throw Error(s(308));Ta=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Ta=Ta.next=n;return a}var Cy=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Ny=o.unstable_scheduleCallback,Dy=o.unstable_NormalPriority,vn={$$typeof:ne,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function wf(){return{controller:new Cy,data:new Map,refCount:0}}function Bo(e){e.refCount--,e.refCount===0&&Ny(Dy,function(){e.controller.abort()})}function x0(e,n){if((e.pendingLanes&4194048)!==0){var a=e.transitionTypes;for(a===null&&(a=e.transitionTypes=[]),e=0;e<n.length;e++){var r=n[e];a.indexOf(r)===-1&&a.push(r)}}}var Fo=null;function Ly(e){var n=e.transitionTypes;return e.transitionTypes=null,n}var Ho=null,Rf=0,Ps=0,_r=null;function Uy(e,n){if(Ho===null){var a=Ho=[];Rf=0,Ps=Xd(),_r={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Rf++,n.then(v0,v0),n}function v0(){if(--Rf===0&&(Fo=null,Ho!==null)){_r!==null&&(_r.status="fulfilled");var e=Ho;Ho=null,Ps=0,_r=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Oy(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var _0=le.S;le.S=function(e,n){if(fx=We(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Uy(e,n),Fo!==null)for(var a=Ir;a!==null;)x0(a,Fo),a=a.next;if(a=e.types,a!==null){for(var r=Ir;r!==null;)x0(r,a),r=r.next;if(Ps!==0){r=Fo,r===null&&(r=Fo=[]);for(var c=0;c<a.length;c++){var f=a[c];r.indexOf(f)===-1&&r.push(f)}}}_0!==null&&_0(e,n)};var zs=st(null);function Cf(){var e=zs.current;return e!==null?e:sn.pooledCache}function oc(e,n){n===null?$e(zs,zs.current):$e(zs,n.pool)}function S0(){var e=Cf();return e===null?null:{parent:vn._currentValue,pool:e}}var Sr=Error(s(460)),Nf=Error(s(474)),lc=Error(s(542)),cc={then:function(){}};function y0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function b0(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Zi,Zi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,E0(e),e===void 0&&!("reason"in n)?Error(s(600)):e;default:if(typeof n.status=="string")n.then(Zi,Zi);else{if(e=sn,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,E0(e),e}throw Bs=n,Sr}}function Is(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Bs=a,Sr):a}}var Bs=null;function M0(){if(Bs===null)throw Error(s(459));var e=Bs;return Bs=null,e}function E0(e){if(e===Sr||e===lc)throw Error(s(483))}var yr=null,Go=0;function uc(e){var n=Go;return Go+=1,yr===null&&(yr=[]),b0(yr,e,n)}function Qa(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function fc(e,n){throw n.$$typeof===T?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function T0(e){function n(ie,Y){if(e){var ue=ie.deletions;ue===null?(ie.deletions=[Y],ie.flags|=16):ue.push(Y)}}function a(ie,Y){if(!e)return null;for(;Y!==null;)n(ie,Y),Y=Y.sibling;return null}function r(ie){for(var Y=new Map;ie!==null;)ie.key===null?Y.set(ie.index,ie):Y.set(ie.key,ie),ie=ie.sibling;return Y}function c(ie,Y){return ie=Ma(ie,Y),ie.index=0,ie.sibling=null,ie}function f(ie,Y,ue){return ie.index=ue,e?(ue=ie.alternate,ue!==null?(ue=ue.index,ue<Y?(ie.flags|=2,Y):ue):(ie.flags|=134217730,Y)):(ie.flags|=1048576,Y)}function _(ie){return e&&ie.alternate===null&&(ie.flags|=134217730),ie}function R(ie,Y,ue,Me){return Y===null||Y.tag!==6?(Y=Sf(ue,ie.mode,Me),Y.return=ie,Y):(Y=c(Y,ue),Y.return=ie,Y)}function H(ie,Y,ue,Me){var Qe=ue.type;return Qe===X?(ie=ge(ie,Y,ue.props.children,Me,ue.key),Qa(ie,ue),ie):Y!==null&&(Y.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===O&&Is(Qe)===Y.type)?(Y=c(Y,ue.props),Qa(Y,ue),Y.return=ie,Y):(Y=ec(ue.type,ue.key,ue.props,null,ie.mode,Me),Qa(Y,ue),Y.return=ie,Y)}function ae(ie,Y,ue,Me){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==ue.containerInfo||Y.stateNode.implementation!==ue.implementation?(Y=yf(ue,ie.mode,Me),Y.return=ie,Y):(Y=c(Y,ue.children||[]),Y.return=ie,Y)}function ge(ie,Y,ue,Me,Qe){return Y===null||Y.tag!==7?(Y=Ns(ue,ie.mode,Me,Qe),Y.return=ie,Y):(Y=c(Y,ue),Y.return=ie,Y)}function Ee(ie,Y,ue){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return Y=Sf(""+Y,ie.mode,ue),Y.return=ie,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case N:return ue=ec(Y.type,Y.key,Y.props,null,ie.mode,ue),Qa(ue,Y),ue.return=ie,ue;case V:return Y=yf(Y,ie.mode,ue),Y.return=ie,Y;case O:return Y=Is(Y),Ee(ie,Y,ue)}if(Te(Y)||G(Y))return Y=Ns(Y,ie.mode,ue,null),Y.return=ie,Y;if(typeof Y.then=="function")return Ee(ie,uc(Y),ue);if(Y.$$typeof===ne)return Ee(ie,rc(ie,Y),ue);fc(ie,Y)}return null}function ee(ie,Y,ue,Me){var Qe=Y!==null?Y.key:null;if(typeof ue=="string"&&ue!==""||typeof ue=="number"||typeof ue=="bigint")return Qe!==null?null:R(ie,Y,""+ue,Me);if(typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case N:return ue.key===Qe?H(ie,Y,ue,Me):null;case V:return ue.key===Qe?ae(ie,Y,ue,Me):null;case O:return ue=Is(ue),ee(ie,Y,ue,Me)}if(Te(ue)||G(ue))return Qe!==null?null:ge(ie,Y,ue,Me,null);if(typeof ue.then=="function")return ee(ie,Y,uc(ue),Me);if(ue.$$typeof===ne)return ee(ie,Y,rc(ie,ue),Me);fc(ie,ue)}return null}function me(ie,Y,ue,Me,Qe){if(typeof Me=="string"&&Me!==""||typeof Me=="number"||typeof Me=="bigint")return ie=ie.get(ue)||null,R(Y,ie,""+Me,Qe);if(typeof Me=="object"&&Me!==null){switch(Me.$$typeof){case N:return ie=ie.get(Me.key===null?ue:Me.key)||null,H(Y,ie,Me,Qe);case V:return ie=ie.get(Me.key===null?ue:Me.key)||null,ae(Y,ie,Me,Qe);case O:return Me=Is(Me),me(ie,Y,ue,Me,Qe)}if(Te(Me)||G(Me))return ie=ie.get(ue)||null,ge(Y,ie,Me,Qe,null);if(typeof Me.then=="function")return me(ie,Y,ue,uc(Me),Qe);if(Me.$$typeof===ne)return me(ie,Y,ue,rc(Y,Me),Qe);fc(Y,Me)}return null}function Fe(ie,Y,ue,Me){for(var Qe=null,Pt=null,rt=Y,ct=Y=0,yn=null;rt!==null&&ct<ue.length;ct++){rt.index>ct?(yn=rt,rt=null):yn=rt.sibling;var Gt=ee(ie,rt,ue[ct],Me);if(Gt===null){rt===null&&(rt=yn);break}e&&rt&&Gt.alternate===null&&n(ie,rt),Y=f(Gt,Y,ct),Pt===null?Qe=Gt:Pt.sibling=Gt,Pt=Gt,rt=yn}if(ct===ue.length)return a(ie,rt),wt&&Ea(ie,ct),Qe;if(rt===null){for(;ct<ue.length;ct++)rt=Ee(ie,ue[ct],Me),rt!==null&&(Y=f(rt,Y,ct),Pt===null?Qe=rt:Pt.sibling=rt,Pt=rt);return wt&&Ea(ie,ct),Qe}for(rt=r(rt);ct<ue.length;ct++)yn=me(rt,ie,ct,ue[ct],Me),yn!==null&&(e&&(Gt=yn.alternate,Gt!==null&&rt.delete(Gt.key===null?ct:Gt.key)),Y=f(yn,Y,ct),Pt===null?Qe=yn:Pt.sibling=yn,Pt=yn);return e&&rt.forEach(function(gs){return n(ie,gs)}),wt&&Ea(ie,ct),Qe}function tt(ie,Y,ue,Me){if(ue==null)throw Error(s(151));for(var Qe=null,Pt=null,rt=Y,ct=Y=0,yn=null,Gt=ue.next();rt!==null&&!Gt.done;ct++,Gt=ue.next()){rt.index>ct?(yn=rt,rt=null):yn=rt.sibling;var gs=ee(ie,rt,Gt.value,Me);if(gs===null){rt===null&&(rt=yn);break}e&&rt&&gs.alternate===null&&n(ie,rt),Y=f(gs,Y,ct),Pt===null?Qe=gs:Pt.sibling=gs,Pt=gs,rt=yn}if(Gt.done)return a(ie,rt),wt&&Ea(ie,ct),Qe;if(rt===null){for(;!Gt.done;ct++,Gt=ue.next())Gt=Ee(ie,Gt.value,Me),Gt!==null&&(Y=f(Gt,Y,ct),Pt===null?Qe=Gt:Pt.sibling=Gt,Pt=Gt);return wt&&Ea(ie,ct),Qe}for(rt=r(rt);!Gt.done;ct++,Gt=ue.next())Gt=me(rt,ie,ct,Gt.value,Me),Gt!==null&&(e&&(yn=Gt.alternate,yn!==null&&rt.delete(yn.key===null?ct:yn.key)),Y=f(Gt,Y,ct),Pt===null?Qe=Gt:Pt.sibling=Gt,Pt=Gt);return e&&rt.forEach(function(pM){return n(ie,pM)}),wt&&Ea(ie,ct),Qe}function _t(ie,Y,ue,Me){if(typeof ue=="object"&&ue!==null&&ue.type===X&&ue.key===null&&ue.props.ref===void 0&&(ue=ue.props.children),typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case N:e:{for(var Qe=ue.key;Y!==null;){if(Y.key===Qe){if(Qe=ue.type,Qe===X){if(Y.tag===7){a(ie,Y.sibling),Me=c(Y,ue.props.children),Qa(Me,ue),Me.return=ie,ie=Me;break e}}else if(Y.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===O&&Is(Qe)===Y.type){a(ie,Y.sibling),Me=c(Y,ue.props),Qa(Me,ue),Me.return=ie,ie=Me;break e}a(ie,Y);break}else n(ie,Y);Y=Y.sibling}ue.type===X?(Me=Ns(ue.props.children,ie.mode,Me,ue.key),Qa(Me,ue),Me.return=ie,ie=Me):(Me=ec(ue.type,ue.key,ue.props,null,ie.mode,Me),Qa(Me,ue),Me.return=ie,ie=Me)}return _(ie);case V:e:{for(Qe=ue.key;Y!==null;){if(Y.key===Qe)if(Y.tag===4&&Y.stateNode.containerInfo===ue.containerInfo&&Y.stateNode.implementation===ue.implementation){a(ie,Y.sibling),Me=c(Y,ue.children||[]),Me.return=ie,ie=Me;break e}else{a(ie,Y);break}else n(ie,Y);Y=Y.sibling}Me=yf(ue,ie.mode,Me),Me.return=ie,ie=Me}return _(ie);case O:return ue=Is(ue),_t(ie,Y,ue,Me)}if(Te(ue))return Fe(ie,Y,ue,Me);if(G(ue)){if(Qe=G(ue),typeof Qe!="function")throw Error(s(150));return ue=Qe.call(ue),tt(ie,Y,ue,Me)}if(typeof ue.then=="function")return _t(ie,Y,uc(ue),Me);if(ue.$$typeof===ne)return _t(ie,Y,rc(ie,ue),Me);fc(ie,ue)}return typeof ue=="string"&&ue!==""||typeof ue=="number"||typeof ue=="bigint"?(ue=""+ue,Y!==null&&Y.tag===6?(a(ie,Y.sibling),Me=c(Y,ue),Me.return=ie,ie=Me):(a(ie,Y),Me=Sf(ue,ie.mode,Me),Me.return=ie,ie=Me),_(ie)):a(ie,Y)}return function(ie,Y,ue,Me){try{Go=0;var Qe=_t(ie,Y,ue,Me);return yr=null,Qe}catch(rt){if(rt===Sr||rt===lc)throw rt;var Pt=Jn(29,rt,null,ie.mode);return Pt.lanes=Me,Pt.return=ie,Pt}finally{}}}var Fs=T0(!0),A0=T0(!1),Ja=!1;function Df(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Lf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function $a(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function es(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(qt&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=$l(e),c0(e,null,a),n}return Jl(e,r,n,a),$l(e)}function Vo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Mo(e,a)}}function Uf(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Of=!1;function ko(){if(Of){var e=_r;if(e!==null)throw e}}function Xo(e,n,a,r){Of=!1;var c=e.updateQueue;Ja=!1;var f=c.firstBaseUpdate,_=c.lastBaseUpdate,R=c.shared.pending;if(R!==null){c.shared.pending=null;var H=R,ae=H.next;H.next=null,_===null?f=ae:_.next=ae,_=H;var ge=e.alternate;ge!==null&&(ge=ge.updateQueue,R=ge.lastBaseUpdate,R!==_&&(R===null?ge.firstBaseUpdate=ae:R.next=ae,ge.lastBaseUpdate=H))}if(f!==null){var Ee=c.baseState;_=0,ge=ae=H=null,R=f;do{var ee=R.lane&-536870913,me=ee!==R.lane;if(me?(Ot&ee)===ee:(r&ee)===ee){ee!==0&&ee===Ps&&(Of=!0),ge!==null&&(ge=ge.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var Fe=e,tt=R;ee=n;var _t=a;switch(tt.tag){case 1:if(Fe=tt.payload,typeof Fe=="function"){Ee=Fe.call(_t,Ee,ee);break e}Ee=Fe;break e;case 3:Fe.flags=Fe.flags&-65537|128;case 0:if(Fe=tt.payload,ee=typeof Fe=="function"?Fe.call(_t,Ee,ee):Fe,ee==null)break e;Ee=F({},Ee,ee);break e;case 2:Ja=!0}}ee=R.callback,ee!==null&&(e.flags|=64,me&&(e.flags|=8192),me=c.callbacks,me===null?c.callbacks=[ee]:me.push(ee))}else me={lane:ee,tag:R.tag,payload:R.payload,callback:R.callback,next:null},ge===null?(ae=ge=me,H=Ee):ge=ge.next=me,_|=ee;if(R=R.next,R===null){if(R=c.shared.pending,R===null)break;me=R,R=me.next,me.next=null,c.lastBaseUpdate=me,c.shared.pending=null}}while(!0);ge===null&&(H=Ee),c.baseState=H,c.firstBaseUpdate=ae,c.lastBaseUpdate=ge,f===null&&(c.shared.lanes=0),os|=_,e.lanes=_,e.memoizedState=Ee}}function w0(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function R0(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)w0(a[e],n)}var ts=st(null),dc=st(0);function C0(e,n){e=Da,$e(dc,e),$e(ts,n),Da=e|n.baseLanes}function Pf(){$e(dc,Da),$e(ts,ts.current)}function zf(){Da=dc.current,Ye(ts),Ye(dc)}var Un=st(null),Fn=null;function ns(e){var n=e.alternate;$e(On,On.current&1),$e(Un,e),Fn===null&&(n===null||ts.current!==null||n.memoizedState!==null)&&(Fn=e)}function If(e){$e(On,On.current),$e(Un,e),Fn===null&&(Fn=e)}function N0(e){e.tag===22?($e(On,On.current),$e(Un,e),Fn===null&&(Fn=e)):is()}function is(){$e(On,On.current),$e(Un,Un.current)}function ci(e){Ye(Un),Fn===e&&(Fn=null),Ye(On)}var On=st(0);function jo(e,n){$e(Un,Un.current),$e(On,n)}function Bf(e){Ye(On),Ye(Un),Fn===e&&(Fn=null)}function hc(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||rh(a)||oh(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var wa=0,vt=null,an=null,_n=null,pc=!1,br=!1,Hs=!1,mc=0,qo=0,Mr=null,Py=0;function mn(){throw Error(s(321))}function Ff(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!li(e[a],n[a]))return!1;return!0}function Hf(e,n,a,r,c,f){return wa=f,vt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,le.H=e===null||e.memoizedState===null?hg:pg,Hs=!1,f=a(r,c),Hs=!1,br&&(f=L0(n,a,r,c)),D0(e),f}function D0(e){le.H=bc;var n=an!==null&&an.next!==null;if(wa=0,_n=an=vt=null,pc=!1,qo=0,Mr=null,n)throw Error(s(300));e===null||Sn||(e=e.dependencies,e!==null&&sc(e)&&(Sn=!0))}function L0(e,n,a,r){vt=e;var c=0;do{if(br&&(Mr=null),qo=0,br=!1,25<=c)throw Error(s(301));if(c+=1,_n=an=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}le.H=ky,f=n(a,r)}while(br);return f}function zy(){var e=le.H,n=e.useState()[0];return n=typeof n.then=="function"?Wo(n):n,e=e.useState()[0],(an!==null?an.memoizedState:null)!==e&&(vt.flags|=1024),n}function Gf(){var e=mc!==0;return mc=0,e}function Vf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function kf(e){if(pc){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}pc=!1}wa=0,_n=an=vt=null,br=!1,qo=mc=0,Mr=null}function qn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _n===null?vt.memoizedState=_n=e:_n=_n.next=e,_n}function xn(){if(an===null){var e=vt.alternate;e=e!==null?e.memoizedState:null}else e=an.next;var n=_n===null?vt.memoizedState:_n.next;if(n!==null)_n=n,an=e;else{if(e===null)throw vt.alternate===null?Error(s(467)):Error(s(310));an=e,e={memoizedState:an.memoizedState,baseState:an.baseState,baseQueue:an.baseQueue,queue:an.queue,next:null},_n===null?vt.memoizedState=_n=e:_n=_n.next=e}return _n}function gc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Wo(e){var n=qo;return qo+=1,Mr===null&&(Mr=[]),e=b0(Mr,e,n),n=vt,(_n===null?n.memoizedState:_n.next)===null&&(n=n.alternate,le.H=n===null||n.memoizedState===null?hg:pg),e}function xc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Wo(e);if(e.$$typeof===$)return;if(e.$$typeof===ne)return Ln(e)}throw Error(s(438,String(e)))}function Xf(e){var n=null,a=vt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=vt.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=gc(),vt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=ve;return n.index++,a}function Ra(e,n){return typeof n=="function"?n(e):n}function vc(e){var n=xn();return jf(n,an,e)}function jf(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=e.baseQueue,f=r.pending;if(f!==null){if(c!==null){var _=c.next;c.next=f.next,f.next=_}n.baseQueue=c=f,r.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var R=_=null,H=null,ae=n,ge=!1;do{var Ee=ae.lane&-536870913;if(Ee!==ae.lane?(Ot&Ee)===Ee:(wa&Ee)===Ee){var ee=ae.revertLane;if(ee===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null}),Ee===Ps&&(ge=!0);else if((wa&ee)===ee){ae=ae.next,ee===Ps&&(ge=!0);continue}else Ee={lane:0,revertLane:ae.revertLane,gesture:null,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null},H===null?(R=H=Ee,_=f):H=H.next=Ee,vt.lanes|=ee,os|=ee;Ee=ae.action,Hs&&a(f,Ee),f=ae.hasEagerState?ae.eagerState:a(f,Ee)}else ee={lane:Ee,revertLane:ae.revertLane,gesture:ae.gesture,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null},H===null?(R=H=ee,_=f):H=H.next=ee,vt.lanes|=Ee,os|=Ee;ae=ae.next}while(ae!==null&&ae!==n);if(H===null?_=f:H.next=R,!li(f,e.memoizedState)&&(Sn=!0,ge&&(a=_r,a!==null)))throw a;e.memoizedState=f,e.baseState=_,e.baseQueue=H,r.lastRenderedState=f}return c===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function qf(e){var n=xn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var _=c=c.next;do f=e(f,_.action),_=_.next;while(_!==c);li(f,n.memoizedState)||(Sn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function U0(e,n,a){var r=vt,c=xn(),f=wt;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!li((an||c).memoizedState,a);if(_&&(c.memoizedState=a,Sn=!0),c=c.queue,Zf(z0.bind(null,r,c,e),[e]),e=c.getSnapshot!==n||_||_n!==null&&(_n.memoizedState.tag&1)!==0,Er(e?9:8,{destroy:void 0},P0.bind(null,r,c,a,n),null),e){if(r.flags|=2048,sn===null)throw Error(s(349));f||(wa&127)!==0||O0(r,n,a)}return a}function O0(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=vt.updateQueue,n===null?(n=gc(),vt.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function P0(e,n,a,r){n.value=a,n.getSnapshot=r,I0(n)&&B0(e)}function z0(e,n,a){return a(function(){I0(n)&&B0(e)})}function I0(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!li(e,a)}catch{return!0}}function B0(e){var n=Cs(e,2);n!==null&&ni(n,e,2)}function Wf(e){var n=qn();if(typeof e=="function"){var a=e;if(e=a(),Hs){It(!0);try{a()}finally{It(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ra,lastRenderedState:e},n}function F0(e,n,a,r){return e.baseState=a,jf(e,an,typeof r=="function"?r:Ra)}function Iy(e,n,a,r,c){if(yc(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};le.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,H0(n,f)):(f.next=a.next,n.pending=a.next=f)}}function H0(e,n){var a=n.action,r=n.payload,c=e.state;if(n.isTransition){var f=le.T,_={};_.types=f!==null?f.types:null,le.T=_;try{var R=a(c,r),H=le.S;H!==null&&H(_,R),G0(e,n,R)}catch(ae){Yf(e,n,ae)}finally{f!==null&&_.types!==null&&(f.types=_.types),le.T=f}}else try{f=a(c,r),G0(e,n,f)}catch(ae){Yf(e,n,ae)}}function G0(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){V0(e,n,r)},function(r){return Yf(e,n,r)}):V0(e,n,a)}function V0(e,n,a){n.status="fulfilled",n.value=a,k0(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,H0(e,a)))}function Yf(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,k0(n),n=n.next;while(n!==r)}e.action=null}function k0(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function X0(e,n){return n}function j0(e,n){if(wt){var a=sn.formState;if(a!==null){e:{var r=vt;if(wt){if(on){t:{for(var c=on,f=Ai;c.nodeType!==8;){if(!f){c=null;break t}if(c=Ri(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){on=Ri(c.nextSibling),r=c.data==="F!";break e}}Za(r)}r=!1}r&&(n=a[0])}}return a=qn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:X0,lastRenderedState:n},a.queue=r,a=ug.bind(null,vt,r),r.dispatch=a,r=Wf(!1),f=ed.bind(null,vt,!1,r.queue),r=qn(),c={state:n,dispatch:null,action:e,pending:null},r.queue=c,a=Iy.bind(null,vt,c,f,a),c.dispatch=a,r.memoizedState=e,[n,a,!1]}function q0(e){var n=xn();return W0(n,an,e)}function W0(e,n,a){if(n=jf(e,n,X0)[0],e=vc(Ra)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Wo(n)}catch(_){throw _===Sr?lc:_}else r=n;n=xn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(vt.flags|=2048,Er(9,{destroy:void 0},By.bind(null,c,a),null)),[r,f,e]}function By(e,n){e.action=n}function Y0(e){var n=xn(),a=an;if(a!==null)return W0(n,a,e);xn(),n=n.memoizedState,a=xn();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function Er(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=vt.updateQueue,n===null&&(n=gc(),vt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function Z0(){return xn().memoizedState}function _c(e,n,a,r){var c=qn();vt.flags|=e,c.memoizedState=Er(1|n,{destroy:void 0},a,r===void 0?null:r)}function Sc(e,n,a,r){var c=xn();r=r===void 0?null:r;var f=c.memoizedState.inst;an!==null&&r!==null&&Ff(r,an.memoizedState.deps)?c.memoizedState=Er(n,f,a,r):(vt.flags|=e,c.memoizedState=Er(1|n,f,a,r))}function K0(e,n){_c(8390656,8,e,n)}function Zf(e,n){Sc(2048,8,e,n)}function Fy(e){vt.flags|=4;var n=vt.updateQueue;if(n===null)n=gc(),vt.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Q0(e){var n=xn().memoizedState;return Fy({ref:n,nextImpl:e}),function(){if((qt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function J0(e,n){return Sc(4,2,e,n)}function $0(e,n){return Sc(4,4,e,n)}function eg(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function tg(e,n,a){a=a!=null?a.concat([e]):null,Sc(4,4,eg.bind(null,n,e),a)}function Kf(){}function ng(e,n){var a=xn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Ff(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function ig(e,n){var a=xn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Ff(n,r[1]))return r[0];if(r=e(),Hs){It(!0);try{e()}finally{It(!1)}}return a.memoizedState=[r,n],r}function Qf(e,n,a){return a===void 0||(wa&1073741824)!==0&&(Ot&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=hx(),vt.lanes|=e,os|=e,a)}function ag(e,n,a,r){return li(a,n)?a:ts.current!==null?(e=Qf(e,a,r),li(e,n)||(Sn=!0),e):(wa&106)===0||(wa&1073741824)!==0&&(Ot&261930)===0?(Sn=!0,e.memoizedState=a):(e=hx(),vt.lanes|=e,os|=e,n)}function sg(e,n,a,r,c){var f=Ae.p;Ae.p=f!==0&&8>f?f:8;var _=le.T,R={};R.types=_!==null?_.types:null,le.T=R,ed(e,!1,n,a);try{var H=c(),ae=le.S;if(ae!==null&&ae(R,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var ge=Oy(H,r);Yo(e,n,ge,hi(e))}else Yo(e,n,r,hi(e))}catch(Ee){Yo(e,n,{then:function(){},status:"rejected",reason:Ee},hi())}finally{Ae.p=f,_!==null&&R.types!==null&&(_.types=R.types),le.T=_}}function Hy(){}function Jf(e,n,a,r){if(e.tag!==5)throw Error(s(476));var c=rg(e).queue;sg(e,c,n,De,a===null?Hy:function(){return og(e),a(r)})}function rg(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:De,baseState:De,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ra,lastRenderedState:De},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ra,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function og(e){var n=rg(e);n.next===null&&(n=e.alternate.memoizedState),Yo(e,n.next.queue,{},hi())}function $f(){return Ln(kr)}function lg(){return xn().memoizedState}function cg(){return xn().memoizedState}function Gy(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=hi();e=$a(a);var r=es(n,e,a);r!==null&&(ni(r,n,a),Vo(r,n,a)),n={cache:wf()},e.payload=n;return}n=n.return}}function Vy(e,n,a){var r=hi();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},yc(e)?fg(n,a):(a=vf(e,n,a,r),a!==null&&(ni(a,e,r),dg(a,n,r)))}function ug(e,n,a){var r=hi();Yo(e,n,a,r)}function Yo(e,n,a,r){var c={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(yc(e))fg(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,R=f(_,a);if(c.hasEagerState=!0,c.eagerState=R,li(R,_))return Jl(e,n,c,0),sn===null&&Ql(),!1}catch{}finally{}if(a=vf(e,n,c,r),a!==null)return ni(a,e,r),dg(a,n,r),!0}return!1}function ed(e,n,a,r){if(r={lane:2,revertLane:Xd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},yc(e)){if(n)throw Error(s(479))}else n=vf(e,a,r,2),n!==null&&ni(n,e,2)}function yc(e){var n=e.alternate;return e===vt||n!==null&&n===vt}function fg(e,n){br=pc=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function dg(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Mo(e,a)}}var bc={readContext:Ln,use:xc,useCallback:mn,useContext:mn,useEffect:mn,useImperativeHandle:mn,useLayoutEffect:mn,useInsertionEffect:mn,useMemo:mn,useReducer:mn,useRef:mn,useState:mn,useDebugValue:mn,useDeferredValue:mn,useTransition:mn,useSyncExternalStore:mn,useId:mn,useHostTransitionStatus:mn,useFormState:mn,useActionState:mn,useOptimistic:mn,useMemoCache:mn,useCacheRefresh:mn,useEffectEvent:mn},hg={readContext:Ln,use:xc,useCallback:function(e,n){return qn().memoizedState=[e,n===void 0?null:n],e},useContext:Ln,useEffect:K0,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,_c(4194308,4,eg.bind(null,n,e),a)},useLayoutEffect:function(e,n){return _c(4194308,4,e,n)},useInsertionEffect:function(e,n){_c(4,2,e,n)},useMemo:function(e,n){var a=qn();n=n===void 0?null:n;var r=e();if(Hs){It(!0);try{e()}finally{It(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=qn();if(a!==void 0){var c=a(n);if(Hs){It(!0);try{a(n)}finally{It(!1)}}}else c=n;return r.memoizedState=r.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},r.queue=e,e=e.dispatch=Vy.bind(null,vt,e),[r.memoizedState,e]},useRef:function(e){var n=qn();return e={current:e},n.memoizedState=e},useState:function(e){e=Wf(e);var n=e.queue,a=ug.bind(null,vt,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Kf,useDeferredValue:function(e,n){var a=qn();return Qf(a,e,n)},useTransition:function(){var e=Wf(!1);return e=sg.bind(null,vt,e.queue,!0,!1),qn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=vt,c=qn();if(wt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),sn===null)throw Error(s(349));(Ot&127)!==0||O0(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,K0(z0.bind(null,r,f,e),[e]),r.flags|=2048,Er(9,{destroy:void 0},P0.bind(null,r,f,a,n),null),a},useId:function(){var e=qn(),n=sn.identifierPrefix;if(wt){var a=Qi,r=Ki;a=(r&~(1<<32-pt(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=mc++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Py++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:$f,useFormState:j0,useActionState:j0,useOptimistic:function(e){var n=qn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ed.bind(null,vt,!0,a),a.dispatch=n,[e,n]},useMemoCache:Xf,useCacheRefresh:function(){return qn().memoizedState=Gy.bind(null,vt)},useEffectEvent:function(e){var n=qn(),a={impl:e};return n.memoizedState=a,function(){if((qt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},pg={readContext:Ln,use:xc,useCallback:ng,useContext:Ln,useEffect:Zf,useImperativeHandle:tg,useInsertionEffect:J0,useLayoutEffect:$0,useMemo:ig,useReducer:vc,useRef:Z0,useState:function(){return vc(Ra)},useDebugValue:Kf,useDeferredValue:function(e,n){var a=xn();return ag(a,an.memoizedState,e,n)},useTransition:function(){var e=vc(Ra)[0],n=xn().memoizedState;return[typeof e=="boolean"?e:Wo(e),n]},useSyncExternalStore:U0,useId:lg,useHostTransitionStatus:$f,useFormState:q0,useActionState:q0,useOptimistic:function(e,n){var a=xn();return F0(a,an,e,n)},useMemoCache:Xf,useCacheRefresh:cg,useEffectEvent:Q0},ky={readContext:Ln,use:xc,useCallback:ng,useContext:Ln,useEffect:Zf,useImperativeHandle:tg,useInsertionEffect:J0,useLayoutEffect:$0,useMemo:ig,useReducer:qf,useRef:Z0,useState:function(){return qf(Ra)},useDebugValue:Kf,useDeferredValue:function(e,n){var a=xn();return an===null?Qf(a,e,n):ag(a,an.memoizedState,e,n)},useTransition:function(){var e=qf(Ra)[0],n=xn().memoizedState;return[typeof e=="boolean"?e:Wo(e),n]},useSyncExternalStore:U0,useId:lg,useHostTransitionStatus:$f,useFormState:Y0,useActionState:Y0,useOptimistic:function(e,n){var a=xn();return an!==null?F0(a,an,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Xf,useCacheRefresh:cg,useEffectEvent:Q0};function td(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:F({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var nd={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=hi(),c=$a(r);c.payload=n,a!=null&&(c.callback=a),n=es(e,c,r),n!==null&&(ni(n,e,r),Vo(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=hi(),c=$a(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=es(e,c,r),n!==null&&(ni(n,e,r),Vo(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=hi(),r=$a(a);r.tag=2,n!=null&&(r.callback=n),n=es(e,r,a),n!==null&&(ni(n,e,a),Vo(n,e,a))}};function mg(e,n,a,r,c,f,_){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,_):n.prototype&&n.prototype.isPureReactComponent?!Oo(a,r)||!Oo(c,f):!0}function gg(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&nd.enqueueReplaceState(n,n.state,null)}function Gs(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=F({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function xg(e){Kl(e)}function vg(e){console.error(e)}function _g(e){Kl(e)}function Mc(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Sg(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function id(e,n,a){return a=$a(a),a.tag=3,a.payload={element:null},a.callback=function(){Mc(e,n)},a}function yg(e){return e=$a(e),e.tag=3,e}function bg(e,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;e.payload=function(){return c(f)},e.callback=function(){Sg(n,a,r)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(e.callback=function(){Sg(n,a,r),typeof c!="function"&&(ls===null?ls=new Set([this]):ls.add(this));var R=r.stack;this.componentDidCatch(r.value,{componentStack:R!==null?R:""})})}function Xy(e,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Us(n,a,c,!0),a=Un.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Fn===null?Xc():a.alternate===null&&gn===0&&(gn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===cc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Gd(e,r,c)),!1;case 22:return a.flags|=65536,r===cc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Gd(e,r,c)),!1}throw Error(s(435,a.tag))}return Gd(e,r,c),Xc(),!1}if(wt)return n=Un.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==Mf&&(e=Error(s(422),{cause:r}),Io(Mi(e,a)))):(r!==Mf&&(n=Error(s(423),{cause:r}),Io(Mi(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,r=Mi(r,a),c=id(e.stateNode,r,c),Uf(e,c),gn!==4&&(gn=2)),!1;var f=Error(s(520),{cause:r});if(f=Mi(f,a),nl===null?nl=[f]:nl.push(f),gn!==4&&(gn=2),n===null)return!0;r=Mi(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=id(a.stateNode,r,e),Uf(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ls===null||!ls.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=yg(c),bg(c,e,a,r),Uf(a,c),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var ad=Error(s(461)),Sn=!1;function En(e,n,a,r){n.child=e===null?A0(n,null,a,r):Fs(n,e.child,a,r)}function Mg(e,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var _={};for(var R in r)R!=="ref"&&(_[R]=r[R])}else _=r;return Os(n),r=Hf(e,n,a,_,f,c),R=Gf(),e!==null&&!Sn?(Vf(e,n,c),Ca(e,n,c)):(wt&&R&&nc(n),n.flags|=1,En(e,n,r,c),n.child)}function Eg(e,n,a,r,c){if(e===null){var f=a.type;return typeof f=="function"&&!_f(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Tg(e,n,f,r,c)):(e=ec(a.type,null,r,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!dd(e,c)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:Oo,a(_,r)&&e.ref===n.ref)return Ca(e,n,c)}return n.flags|=1,e=Ma(f,r),e.ref=n.ref,e.return=n,n.child=e}function Tg(e,n,a,r,c){if(e!==null){var f=e.memoizedProps;if(Oo(f,r)&&e.ref===n.ref)if(Sn=!1,n.pendingProps=r=f,dd(e,c))(e.flags&131072)!==0&&(Sn=!0);else return n.lanes=e.lanes,Ca(e,n,c)}return sd(e,n,a,r,c)}function Ag(e,n,a,r){var c=r.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(r=n.child=e.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~f}else r=0,n.child=null;return wg(e,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&oc(n,f!==null?f.cachePool:null),f!==null?C0(n,f):Pf(),N0(n);else return r=n.lanes=536870912,wg(e,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(oc(n,f.cachePool),C0(n,f),is(),n.memoizedState=null):(e!==null&&oc(n,null),Pf(),is());return En(e,n,c,a),n.child}function Zo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function wg(e,n,a,r,c){var f=Cf();return f=f===null?null:{parent:vn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&oc(n,null),Pf(),N0(n),e!==null&&Us(e,n,r,!0),n.childLanes=c,null}function Ec(e,n){return n=Tc({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Rg(e,n,a){return Fs(n,e.child,null,a),e=Ec(n,n.pendingProps),e.flags|=2,ci(n),n.memoizedState=null,e}function jy(e,n,a){var r=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(wt){if(r.mode==="hidden")return e=Ec(n,r),n.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Zo(null,e);if(If(n),(e=on)?(e=ev(e,Ai),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Wa!==null?{id:Ki,overflow:Qi}:null,retryLane:536870912,hydrationErrors:null},a=f0(e),a.return=n,n.child=a,Rn=n,on=null)):e=null,e===null)throw Za(n);return n.lanes=536870912,null}return Ec(n,r)}var f=e.memoizedState;if(f!==null){var _=f.dehydrated;if(If(n),c)if(n.flags&256)n.flags&=-257,n=Rg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(Sn||Us(e,n,a,!1),c=(a&e.childLanes)!==0,Sn||c){if(ts.current===null){if(r=sn,r!==null&&(_=Eo(r,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,Cs(e,_),ni(r,e,_),ad;Xc()}n=Rg(e,n,a)}else e=f.treeContext,on=Ri(_.nextSibling),Rn=n,wt=!0,Ya=null,Ai=!1,e!==null&&p0(n,e),n=Ec(n,r),n.flags|=134221824;return n}return e=Ma(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Tr(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function sd(e,n,a,r,c){return Os(n),a=Hf(e,n,a,r,void 0,c),r=Gf(),e!==null&&!Sn?(Vf(e,n,c),Ca(e,n,c)):(wt&&r&&nc(n),n.flags|=1,En(e,n,a,c),n.child)}function Cg(e,n,a,r,c,f){return Os(n),n.updateQueue=null,a=L0(n,r,a,c),D0(e),r=Gf(),e!==null&&!Sn?(Vf(e,n,f),Ca(e,n,f)):(wt&&r&&nc(n),n.flags|=1,En(e,n,a,f),n.child)}function Ng(e,n,a,r,c){if(Os(n),n.stateNode===null){var f=mr,_=a.contextType;typeof _=="object"&&_!==null&&(f=Ln(_)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=nd,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Df(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?Ln(_):mr,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(td(n,a,_,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&nd.enqueueReplaceState(f,f.state,null),Xo(n,r,f,c),ko(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var R=n.memoizedProps,H=Gs(a,R);f.props=H;var ae=f.context,ge=a.contextType;_=mr,typeof ge=="object"&&ge!==null&&(_=Ln(ge));var Ee=a.getDerivedStateFromProps;ge=typeof Ee=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,ge||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||ae!==_)&&gg(n,f,r,_),Ja=!1;var ee=n.memoizedState;f.state=ee,Xo(n,r,f,c),ko(),ae=n.memoizedState,R||ee!==ae||Ja?(typeof Ee=="function"&&(td(n,a,Ee,r),ae=n.memoizedState),(H=Ja||mg(n,a,H,r,ee,ae,_))?(ge||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=ae),f.props=r,f.state=ae,f.context=_,r=H):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Lf(e,n),_=n.memoizedProps,ge=Gs(a,_),f.props=ge,Ee=n.pendingProps,ee=f.context,ae=a.contextType,H=mr,typeof ae=="object"&&ae!==null&&(H=Ln(ae)),R=a.getDerivedStateFromProps,(ae=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==Ee||ee!==H)&&gg(n,f,r,H),Ja=!1,ee=n.memoizedState,f.state=ee,Xo(n,r,f,c),ko();var me=n.memoizedState;_!==Ee||ee!==me||Ja||e!==null&&e.dependencies!==null&&sc(e.dependencies)?(typeof R=="function"&&(td(n,a,R,r),me=n.memoizedState),(ge=Ja||mg(n,a,ge,r,ee,me,H)||e!==null&&e.dependencies!==null&&sc(e.dependencies))?(ae||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,me,H),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,me,H)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&ee===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&ee===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=me),f.props=r,f.state=me,f.context=H,r=ge):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&ee===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&ee===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,Tr(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=Fs(n,e.child,null,c),n.child=Fs(n,null,a,c)):En(e,n,a,c),n.memoizedState=f.state,e=n.child):e=Ca(e,n,c),e}function Dg(e,n,a,r){return Ds(),n.flags|=256,En(e,n,a,r),n.child}var rd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function od(e){return{baseLanes:e,cachePool:S0()}}function ld(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=di),e}function Lg(e,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=e!==null&&e.memoizedState===null?!1:(On.current&2)!==0),_&&(c=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,e===null){if(wt){if(c?ns(n):is(),(e=on)?(e=ev(e,Ai),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Wa!==null?{id:Ki,overflow:Qi}:null,retryLane:536870912,hydrationErrors:null},a=f0(e),a.return=n,n.child=a,Rn=n,on=null)):e=null,e===null)throw Za(n);return oh(e)?n.lanes=32:n.lanes=536870912,null}return f=r.children,r=r.fallback,c?(is(),c=n.mode,f=Tc({mode:"hidden",children:f},c),r=Ns(r,c,a,null),f.return=n,r.return=n,f.sibling=r,n.child=f,r=n.child,r.memoizedState=od(a),r.childLanes=ld(e,_,a),n.memoizedState=rd,Zo(null,r)):(ns(n),cd(n,f))}var R=e.memoizedState;if(R!==null){var H=R.dehydrated;if(H!==null)return qy(e,n,f,_,r,H,R,a)}return c?(is(),c=r.fallback,f=n.mode,R=e.child,H=R.sibling,r=Ma(R,{mode:"hidden",children:r.children}),r.subtreeFlags=R.subtreeFlags&1206910976,H!==null?c=Ma(H,c):(c=Ns(c,f,a,null),c.flags|=2),c.return=n,r.return=n,r.sibling=c,n.child=r,Zo(null,r),r=n.child,c=e.child.memoizedState,c===null?c=od(a):(f=c.cachePool,f!==null?(R=vn._currentValue,f=f.parent!==R?{parent:R,pool:R}:f):f=S0(),c={baseLanes:c.baseLanes|a,cachePool:f}),r.memoizedState=c,r.childLanes=ld(e,_,a),n.memoizedState=rd,Zo(e.child,r)):(ns(n),a=e.child,e=a.sibling,a=Ma(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(_=n.deletions,_===null?(n.deletions=[e],n.flags|=16):_.push(e)),n.child=a,n.memoizedState=null,a)}function cd(e,n){return n=Tc({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Tc(e,n){return e=Jn(22,e,null,n),e.lanes=0,e}function Ac(e,n,a){return Fs(n,e.child,null,a),e=cd(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function qy(e,n,a,r,c,f,_,R){if(a)return n.flags&256?(ns(n),n.flags&=-257,Ac(e,n,R)):n.memoizedState!==null?(is(),n.child=e.child,n.flags|=128,null):(is(),f=c.fallback,_=n.mode,c=Tc({mode:"visible",children:c.children},_),f=Ns(f,_,R,null),f.flags|=2,c.return=n,f.return=n,c.sibling=f,n.child=c,Fs(n,e.child,null,R),c=n.child,c.memoizedState=od(R),c.childLanes=ld(e,r,R),n.memoizedState=rd,Zo(null,c));if(ns(n),oh(f)){if(r=f.nextSibling&&f.nextSibling.dataset,r)var H=r.dgst;return r=H,r!==""&&(c=Error(s(419)),c.stack="",c.digest=r,Io({value:c,source:null,stack:null})),Ac(e,n,R)}if(Sn||Us(e,n,R,!1),r=(R&e.childLanes)!==0,Sn||r){if(ts.current!==null)return Ac(e,n,R);if(r=sn,r!==null&&(c=Eo(r,R),c!==0&&c!==_.retryLane))throw _.retryLane=c,Cs(e,c),ni(r,e,c),ad;return rh(f)||Xc(),Ac(e,n,R)}return rh(f)?(n.flags|=192,n.child=e.child,null):(e=_.treeContext,on=Ri(f.nextSibling),Rn=n,wt=!0,Ya=null,Ai=!1,e!==null&&p0(n,e),n=cd(n,c.children),n.flags|=134221824,n)}function Ug(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),ac(e.return,n,a)}function Og(e){for(var n=null;e!==null;){var a=e.alternate;a!==null&&hc(a)===null&&(n=e),e=e.sibling}return n}function wc(e,n,a,r,c,f){var _=e.memoizedState;_===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=r,_.tail=a,_.tailMode=c,_.treeForkCount=f)}function ud(e){var n=e.child;for(e.child=null;n!==null;){var a=n.sibling;n.sibling=e.child,e.child=n,n=a}}function fd(e,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;r=r.children;var _=On.current;if(n.flags&128)return jo(n,_),null;var R=(_&2)!==0;if(R?(_=_&1|2,n.flags|=128):_&=1,jo(n,_),c==="backwards"&&e!==null?(ud(e),En(e,n,r,a),ud(e)):En(e,n,r,a),r=wt?zo:0,!R&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ug(e,a,n);else if(e.tag===19)Ug(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"backwards":a=Og(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null,ud(n)),wc(n,!0,c,null,f,r);break;case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&hc(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}wc(n,!0,a,null,f,r);break;case"together":wc(n,!1,null,null,void 0,r);break;case"independent":n.memoizedState=null;break;default:a=Og(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),wc(n,!1,c,a,f,r)}return n.child}function Pg(e,n,a){var r=n.pendingProps;return Ka(n,n.type,r.value),En(e,n,r.children,a),n.child}function Ca(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),os|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Us(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Ma(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Ma(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function dd(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&sc(e)))}function Wy(e,n,a){switch(n.tag){case 3:Q(n,n.stateNode.containerInfo),Ka(n,vn,e.memoizedState.cache),Ds();break;case 27:case 5:Et(n);break;case 4:Q(n,n.stateNode.containerInfo);break;case 10:Ka(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,If(n),null;break;case 13:var r=n.memoizedState;if(r!==null){if(r.dehydrated!==null)return ns(n),n.flags|=128,null;r=Us(e,n,a,!1);var c=n.child.childLanes;return r||(a&c)!==0?Lg(e,n,a):(ns(n),e=Ca(e,n,a),e!==null?e.sibling:null)}ns(n);break;case 19:if(n.flags&128)return fd(e,n,a);if(c=(e.flags&128)!==0,r=(a&n.childLanes)!==0,r||(Us(e,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return fd(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),jo(n,On.current),r)break;return null;case 22:return n.lanes=0,Ag(e,n,a,n.pendingProps);case 24:Ka(n,vn,e.memoizedState.cache)}return Ca(e,n,a)}function zg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)Sn=!0;else{if(!dd(e,a)&&(n.flags&128)===0)return Sn=!1,Wy(e,n,a);Sn=(e.flags&131072)!==0}else Sn=!1,wt&&(n.flags&1048576)!==0&&h0(n,zo,n.index);switch(n.lanes=0,n.tag){case 16:e:{var r=n.pendingProps;if(e=Is(n.elementType),n.type=e,typeof e=="function")_f(e)?(r=Gs(e,r),n.tag=1,n=Ng(null,n,e,r,a)):(n.tag=0,n=sd(null,n,e,r,a));else{if(e!=null){var c=e.$$typeof;if(c===W){n.tag=11,n=Mg(null,n,e,r,a);break e}else if(c===oe){n.tag=14,n=Eg(null,n,e,r,a);break e}else if(c===ne){n.tag=10,n.type=e,n=Pg(null,n,a);break e}}throw n=be(e)||e,Error(s(306,n,""))}}return n;case 0:return sd(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=Gs(r,n.pendingProps),Ng(e,n,r,c,a);case 3:e:{if(Q(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;c=f.element,Lf(e,n),Xo(n,r,null,a);var _=n.memoizedState;if(r=_.cache,Ka(n,vn,r),r!==f.cache&&Af(n,[vn],a,!0),ko(),r=_.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Dg(e,n,r,a);break e}else if(r!==c){c=Mi(Error(s(424)),n),Io(c),n=Dg(e,n,r,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(on=Ri(e.firstChild),Rn=n,wt=!0,Ya=null,Ai=!0,a=A0(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(Ds(),r===c){n=Ca(e,n,a);break e}En(e,n,r,a)}n=n.child}return n;case 26:return Tr(e,n),e===null?(a=ov(n.type,null,n.pendingProps,null))?n.memoizedState=a:wt||(n.stateNode=Hx(n.type,n.pendingProps,yt.current,n)):n.memoizedState=ov(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Et(n),e===null&&wt&&(r=n.stateNode=iv(n.type,n.pendingProps,yt.current),Rn=n,Ai=!0,c=on,fs(n.type)?(lh=c,on=Ri(r.firstChild)):on=c),En(e,n,n.pendingProps.children,a),Tr(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&wt&&((c=r=on)&&(r=Gb(r,n.type,n.pendingProps,Ai),r!==null?(n.stateNode=r,Rn=n,on=Ri(r.firstChild),Ai=!1,c=!0):c=!1),c||Za(n)),Et(n),c=n.type,f=n.pendingProps,_=e!==null?e.memoizedProps:null,r=f.children,$d(c,f)?r=null:_!==null&&$d(c,_)&&(n.flags|=32),n.memoizedState!==null&&(c=Hf(e,n,zy,null,null,a),kr._currentValue=c),Tr(e,n),En(e,n,r,a),n.child;case 6:return e===null&&wt&&((e=a=on)&&(a=Vb(a,n.pendingProps,Ai),a!==null?(n.stateNode=a,Rn=n,on=null,e=!0):e=!1),e||Za(n)),null;case 13:return Lg(e,n,a);case 4:return Q(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Fs(n,null,r,a):En(e,n,r,a),n.child;case 11:return Mg(e,n,n.type,n.pendingProps,a);case 7:return r=n.pendingProps,Tr(e,n),En(e,n,r,a),n.child;case 8:return En(e,n,n.pendingProps.children,a),n.child;case 12:return En(e,n,n.pendingProps.children,a),n.child;case 10:return Pg(e,n,a);case 9:return c=n.type._context,r=n.pendingProps.children,Os(n),c=Ln(c),r=r(c),n.flags|=1,En(e,n,r,a),n.child;case 14:return Eg(e,n,n.type,n.pendingProps,a);case 15:return Tg(e,n,n.type,n.pendingProps,a);case 19:return fd(e,n,a);case 31:return jy(e,n,a);case 22:return Ag(e,n,a,n.pendingProps);case 24:return Os(n),r=Ln(vn),e===null?(c=Cf(),c===null&&(c=sn,f=wf(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},Df(n),Ka(n,vn,c)):((e.lanes&a)!==0&&(Lf(e,n),Xo(n,null,null,a),ko()),c=e.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Ka(n,vn,r)):(r=f.cache,Ka(n,vn,r),r!==c.cache&&Af(n,[vn],a,!0))),En(e,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=n.pendingProps,r.name!=null&&r.name!=="auto"?n.flags|=e===null?18882560:18874368:wt&&nc(n),e!==null&&e.memoizedProps.name!==r.name?n.flags|=4194816:Tr(e,n),En(e,n,r.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Na(e){e.flags|=4}function hd(e,n,a,r,c){var f;if((f=(e.mode&32)!==0)&&(f=a===null?fv(n,r):fv(n,r)&&(r.src!==a.src||r.srcSet!==a.srcSet)),f){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(xx())e.flags|=8192;else throw Bs=cc,Nf}else e.flags&=-16777217}function Ig(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!dv(n))if(xx())e.flags|=8192;else throw Bs=cc,Nf}function Rc(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?bo():536870912,e.lanes|=n,Nr|=n)}function Ko(e,n){if(!wt)switch(e.tailMode){case"visible":break;case"collapsed":for(var a=e.tail,r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(n=e.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null}}function ln(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&1206910976,r|=c.flags&1206910976,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function Yy(e,n,a){var r=n.pendingProps;switch(bf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ln(n),null;case 1:return ln(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Aa(vn),Qt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(vr(n)?Na(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ef())),ln(n),null;case 26:var c=n.type,f=n.memoizedState;return e===null?(Na(n),f!==null?(ln(n),Ig(n,f)):(ln(n),hd(n,c,null,r,a))):f?f!==e.memoizedState?(Na(n),ln(n),Ig(n,f)):(ln(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&Na(n),ln(n),hd(n,c,e,r,a)),null;case 27:if(B(n),a=yt.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Na(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return ln(n),n.subtreeFlags&=-33554433,null}e=Mt.current,vr(n)?m0(n):(e=iv(c,r,a),n.stateNode=e,Na(n))}return ln(n),n.subtreeFlags&=-33554433,null;case 5:if(B(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Na(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return ln(n),n.subtreeFlags&=-33554433,null}if(f=Mt.current,vr(n))m0(n);else{var _=ol(yt.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?_.createElement("select",{is:r.is}):_.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?_.createElement(c,{is:r.is}):_.createElement(c)}}f[A]=n,f[q]=r;e:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break e;for(;_.sibling===null;){if(_.return===null||_.return===n)break e;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;e:switch(zn(f,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Na(n)}}return ln(n),n.subtreeFlags&=-33554433,hd(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&Na(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=yt.current,vr(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,c=Rn,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}e[A]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||zx(e.nodeValue,a)),e||Za(n,!0)}else e=ol(e).createTextNode(r),e[A]=n,n.stateNode=e}return ln(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=vr(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[A]=n}else Ds(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ln(n),e=!1}else a=Ef(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ci(n),n):(ci(n),null);if((n.flags&128)!==0)throw Error(s(558))}return ln(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=vr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[A]=n}else Ds(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ln(n),c=!1}else c=Ef(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(ci(n),n):(ci(n),null)}return ci(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Rc(n,n.updateQueue),ln(n),null);case 4:return Qt(),e===null&&Yd(n.stateNode.containerInfo),n.flags|=67108864,ln(n),null;case 10:return Aa(n.type),ln(n),null;case 19:if(Bf(n),r=n.memoizedState,r===null)return ln(n),null;if(c=(n.flags&128)!==0,f=r.rendering,f===null)if(c)Ko(r,!1);else{if(gn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=hc(e),f!==null){for(n.flags|=128,Ko(r,!1),e=f.updateQueue,n.updateQueue=e,Rc(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)u0(a,e),a=a.sibling;return jo(n,On.current&1|2),wt&&Ea(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&We()>Hc&&(n.flags|=128,c=!0,Ko(r,!1),n.lanes=4194304)}else{if(!c)if(e=hc(f),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,Rc(n,e),Ko(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!f.alternate&&!wt)return ln(n),null}else 2*We()-r.renderingStartTime>Hc&&a!==536870912&&(n.flags|=128,c=!0,Ko(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(e=r.last,e!==null?e.sibling=f:n.child=f,r.last=f)}if(r.tail!==null){e=r.tail;e:{for(a=e;a!==null;){if(a.alternate!==null){a=!1;break e}a=a.sibling}a=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=We(),e.sibling=null,f=On.current,f=c?f&1|2:f&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!a||wt?jo(n,f):(a=f,$e(Un,n),$e(On,a),Fn===null&&(Fn=n)),wt&&Ea(n,r.treeForkCount),e}return ln(n),null;case 22:case 23:return ci(n),zf(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(ln(n),n.subtreeFlags&6&&(n.flags|=8192)):ln(n),a=n.updateQueue,a!==null&&Rc(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&Ye(zs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Aa(vn),ln(n),null;case 25:return null;case 30:return n.flags|=33554432,ln(n),null}throw Error(s(156,n.tag))}function Zy(e,n){switch(bf(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Aa(vn),Qt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return B(n),null;case 31:if(n.memoizedState!==null){if(ci(n),n.alternate===null)throw Error(s(340));Ds()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ci(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Ds()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Bf(n),e=n.flags,e&65536?(n.flags=e&-65537|128,e=n.memoizedState,e!==null&&(e.rendering=null,e.tail=null),n.flags|=4,n):null;case 4:return Qt(),null;case 10:return Aa(n.type),null;case 22:case 23:return ci(n),zf(),e!==null&&Ye(zs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Aa(vn),null;case 25:return null;default:return null}}function Bg(e,n){switch(bf(n),n.tag){case 3:Aa(vn),Qt();break;case 26:case 27:case 5:B(n);break;case 4:Qt();break;case 31:n.memoizedState!==null&&ci(n);break;case 13:ci(n);break;case 19:Bf(n);break;case 10:Aa(n.type);break;case 22:case 23:ci(n),zf(),e!==null&&Ye(zs);break;case 24:Aa(vn)}}function Qo(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&e)===e){r=void 0;var f=a.create,_=a.inst;r=f(),_.destroy=r}a=a.next}while(a!==c)}}catch(R){$t(n,n.return,R)}}function as(e,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&e)===e){var _=r.inst,R=_.destroy;if(R!==void 0){_.destroy=void 0,c=n;var H=a,ae=R;try{ae()}catch(ge){$t(c,H,ge)}}}r=r.next}while(r!==f)}}catch(ge){$t(n,n.return,ge)}}function Fg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{R0(n,a)}catch(r){$t(e,e.return,r)}}}function Hg(e,n,a){a.props=Gs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){$t(e,n,r)}}function Ji(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var c=e.stateNode,f=ya(e.memoizedProps,c);(c.ref===null||c.ref.name!==f)&&(c.ref=Wx(f)),r=c.ref;break;case 7:if(e.stateNode===null){var _=new pi(e);x(e.child,!1,Fb,_,void 0,void 0),e.stateNode=_}r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(R){$t(e,n,R)}}function Pn(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){$t(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){$t(e,n,c)}else a.current=null}function Cc(e,n){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&n!==null)for(var a=0;a<n.length;a++)$x(e.stateNode,n[a])}function Gg(e){for(var n=e.return;n!==null&&(md(n)&&$x(e.stateNode,n.stateNode),!pd(n));)n=n.return}function Jo(e){for(var n=e.return;n!==null&&(md(n)&&Hb(e.stateNode,n.stateNode),!pd(n));)n=n.return}function pd(e){return e.tag===5||e.tag===3||e.tag===27}function md(e){return e&&e.tag===7&&e.stateNode!==null}function gd(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break e;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){$t(e,e.return,c)}}function xd(e,n,a){try{var r=e.stateNode;yb(r,e.type,a,n),r[q]=n}catch(c){$t(e,e.return,c)}}function Vg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&fs(e.type)||e.tag===4}function vd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&fs(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function _d(e,n,a,r){var c=e.tag;if(c===5||c===6)c=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(c,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(c),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Zi)),Cc(e,r),At=!0;else if(c!==4&&(c===27&&(Cc(e,r),r=null,fs(e.type)&&(a=e.stateNode,n=null)),e=e.child,e!==null))for(_d(e,n,a,r),e=e.sibling;e!==null;)_d(e,n,a,r),e=e.sibling}function Nc(e,n,a,r){var c=e.tag;if(c===5||c===6)c=e.stateNode,n?a.insertBefore(c,n):a.appendChild(c),Cc(e,r),At=!0;else if(c!==4&&(c===27&&(Cc(e,r),r=null,fs(e.type)&&(a=e.stateNode)),e=e.child,e!==null))for(Nc(e,n,a,r),e=e.sibling;e!==null;)Nc(e,n,a,r),e=e.sibling}function kg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);zn(n,r,a),n[A]=e,n[q]=a}catch(f){$t(e,e.return,f)}}var Dc=!1,ui=null;function Xg(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(Dc=!0)}var $i=null;function jg(){var e=$i;return $i=null,e}var $n=0;function Ar(e,n,a,r,c){return $n=0,qg(e.child,n,a,r,c)}function qg(e,n,a,r,c){for(var f=!1;e!==null;){if(e.tag===5){var _=e.stateNode;if(r!==null){var R=nh(_);r.push(R),R.view&&(f=!0)}else f||nh(_).view&&(f=!0);Dc=!0,jx(_,$n===0?n:n+"_"+$n,a),$n++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&c||qg(e.child,n,a,r,c)&&(f=!0));e=e.sibling}return f}function ea(e,n){for(;e!==null;)e.tag===5?qx(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&n||ea(e.child,n)),e=e.sibling}function Lc(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Lc(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var n=e.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var a=n.name;n=ba(n.default,n.share),n!=="none"&&(Ar(e,a,n,null,!1)||ea(e.child,!1))}e=e.sibling}}function Sd(e,n){if(e.tag===30){var a=e.stateNode,r=e.memoizedProps,c=ya(r,a),f=ba(r.default,a.paired?r.share:r.enter);f!=="none"?Ar(e,c,f,null,!1)?(Lc(e),a.paired||n||Or(e,r.onEnter)):ea(e.child,!1):Lc(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Sd(e,n),e=e.sibling;else Lc(e)}function yd(e){if(ui!==null&&ui.size!==0){var n=ui;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var a=e.memoizedProps,r=a.name;if(r!=null&&r!=="auto"){var c=n.get(r);if(c!==void 0){var f=ba(a.default,a.share);if(f!=="none"&&(Ar(e,r,f,null,!1)?(f=e.stateNode,c.paired=f,f.paired=c,Or(e,a.onShare)):ea(e.child,!1)),n.delete(r),n.size===0)break}}}yd(e)}e=e.sibling}}}function bd(e){if(e.tag===30){var n=e.memoizedProps,a=ya(n,e.stateNode),r=ui!==null?ui.get(a):void 0,c=ba(n.default,r!==void 0?n.share:n.exit);c!=="none"&&(Ar(e,a,c,null,!1)?r!==void 0?(c=e.stateNode,r.paired=c,c.paired=r,ui.delete(a),Or(e,n.onShare)):Or(e,n.onExit):ea(e.child,!1)),ui!==null&&yd(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)bd(e),e=e.sibling;else ui!==null&&yd(e)}function Wg(e){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,a=ya(n,e.stateNode);n=ba(n.default,n.update),e.flags&=-5,n!=="none"&&Ar(e,a,n,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&Wg(e);e=e.sibling}}function Md(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.stateNode;n.paired!==null&&(n.paired=null,ea(e.child,!1))}Md(e)}e=e.sibling}}function Uc(e){if(e.tag===30)e.stateNode.paired=null,ea(e.child,!1),Md(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Uc(e),e=e.sibling;else Md(e)}function Yg(e){for(e=e.child;e!==null;)e.tag===30?ea(e.child,!1):(e.subtreeFlags&33554432)!==0&&Yg(e),e=e.sibling}function Ed(e,n,a,r,c,f,_){for(var R=!1;n!==null;){if(n.tag===5){var H=n.stateNode;if(f!==null&&$n<f.length){var ae=f[$n],ge=nh(H);(ae.view||ge.view)&&(R=!0);var Ee;if(Ee=(e.flags&4)===0)if(ge.clip)Ee=!0;else{Ee=ae.rect;var ee=ge.rect;Ee=Ee.y!==ee.y||Ee.x!==ee.x||Ee.height!==ee.height||Ee.width!==ee.width}Ee&&(e.flags|=4),ge.abs?ge=!ae.abs:(ae=ae.rect,ge=ge.rect,ge=ae.height!==ge.height||ae.width!==ge.width),ge&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&jx(H,$n===0?a:a+"_"+$n,c),R&&(e.flags&4)!==0||($i===null&&($i=[]),$i.push(H,$n===0?r:r+"_"+$n,n.memoizedProps)),$n++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&_?e.flags|=n.flags&32:Ed(e,n.child,a,r,c,f,_)&&(R=!0));n=n.sibling}return R}function Zg(e,n){for(e=e.child;e!==null;){if(e.tag===30){var a=e.memoizedProps,r=e.stateNode,c=ya(a,r),f=ba(a.default,a.update),_;_=e.memoizedState,e.memoizedState=null,r=e;var R=e.child;$n=0,c=Ed(r,R,c,c,f,_,!1),(e.flags&4)!==0&&c&&Or(e,a.onUpdate)}else(e.subtreeFlags&33554432)!==0&&Zg(e);e=e.sibling}}var Cn=!1,Kt=!1,ta=!1,Td=!1,Kg=typeof WeakSet=="function"?WeakSet:Set,Nn=null,na=!1,$o=!1,Oc=!1,Ad=!1;function Ky(e,n,a){if(e=e.containerInfo,Qd=Xr,e=e0(e),df(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var c=r.getSelection&&r.getSelection();if(c&&c.rangeCount!==0){r=c.anchorNode;var f=c.anchorOffset,_=c.focusNode;c=c.focusOffset;try{r.nodeType,_.nodeType}catch{r=null;break e}var R=0,H=-1,ae=-1,ge=0,Ee=0,ee=e,me=null;t:for(;;){for(var Fe;ee!==r||f!==0&&ee.nodeType!==3||(H=R+f),ee!==_||c!==0&&ee.nodeType!==3||(ae=R+c),ee.nodeType===3&&(R+=ee.nodeValue.length),(Fe=ee.firstChild)!==null;)me=ee,ee=Fe;for(;;){if(ee===e)break t;if(me===r&&++ge===f&&(H=R),me===_&&++Ee===c&&(ae=R),(Fe=ee.nextSibling)!==null)break;ee=me,me=ee.parentNode}ee=Fe}r=H===-1||ae===-1?null:{start:H,end:ae}}else r=null}r=r||{start:0,end:0}}else r=null;for(Jd={focusedElem:e,selectionRange:r},Xr=!1,a=(a&335544064)===a,Nn=n,n=a?9270:1024;Nn!==null;){if(e=Nn,a&&(r=e.deletions,r!==null))for(f=0;f<r.length;f++)a&&bd(r[f]);if(e.alternate===null&&(e.flags&2)!==0)a&&Xg(e),Pc(a);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&a&&bd(r),Pc(a);continue}else if(r!==null&&r.memoizedState!==null){a&&Xg(e),Pc(a);continue}}r=e.child,(e.subtreeFlags&n)!==0&&r!==null?(r.return=e,Nn=r):(a&&Wg(e),Pc(a))}}ui=null}function Pc(e){for(;Nn!==null;){var n=Nn,a=e,r=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((c&1024)!==0&&r!==null){a=void 0,c=r.memoizedProps,r=r.memoizedState;var f=n.stateNode;try{var _=Gs(n.type,c);a=f.getSnapshotBeforeUpdate(_,r),f.__reactInternalSnapshotBeforeUpdate=a}catch(R){$t(n,n.return,R)}}break;case 3:if((c&1024)!==0){if(r=n.stateNode.containerInfo,a=r.nodeType,a===9)sh(r);else if(a===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":sh(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&r!==null&&(a=ya(r.memoizedProps,r.stateNode),c=n.memoizedProps,c=ba(c.default,c.update),c!=="none"&&Ar(r,a,c,r.memoizedState=[],!0));break;default:if((c&1024)!==0)throw Error(s(163))}if(r=n.sibling,r!==null){r.return=n.return,Nn=r;break}Nn=n.return}}function Qg(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:ia(e,a),r&4&&Qo(5,a);break;case 1:if(ia(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(_){$t(a,a.return,_)}else{var c=Gs(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(_){$t(a,a.return,_)}}r&64&&Fg(a),r&512&&Ji(a,a.return);break;case 3:if(ia(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{R0(e,n)}catch(_){$t(a,a.return,_)}}break;case 27:n===null&&r&4&&kg(a);case 26:case 5:ia(e,a),n===null&&r&4&&gd(a),r&512&&Ji(a,a.return);break;case 12:ia(e,a);break;case 31:ia(e,a),r&4&&tx(e,a);break;case 13:ia(e,a),r&4&&nx(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=lb.bind(null,a),kb(e,a))));break;case 22:if(r=a.memoizedState!==null||Cn,!r){var f=n!==null&&n.memoizedState!==null||Kt;n=Cn,c=Kt,Cn=r,(Kt=f)&&!c?(r=2,(a.subtreeFlags&8772)!==0&&(r|=1),zi(e,a,r)):ia(e,a),Cn=n,Kt=c}break;case 30:ia(e,a),r&512&&Ji(a,a.return);break;case 7:r&512&&Ji(a,a.return);default:ia(e,a)}}function wd(e,n){for(e=e.child;e!==null;)Jg(e,n),e=e.sibling}function Jg(e,n){switch(e.tag){case 5:case 26:try{var a=e.stateNode;if(n){var r=a.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var c=e.stateNode,f=e.memoizedProps.style,_=f!=null&&f.hasOwnProperty("display")?f.display:null;c.style.display=_==null||typeof _=="boolean"?"":(""+_).trim()}}catch(H){$t(e,e.return,H)}Rd(e,n);break;case 6:try{e.stateNode.nodeValue=n?"":e.memoizedProps,At=!0}catch(H){$t(e,e.return,H)}break;case 18:try{var R=e.stateNode;n?Xx(R,!0):Xx(e.stateNode,!1)}catch(H){$t(e,e.return,H)}break;case 22:case 23:e.memoizedState===null&&wd(e,n);break;default:wd(e,n)}}function Rd(e,n){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){e:{var a=e,r=n;switch(a.tag){case 4:Jg(a,r);break e;case 22:a.memoizedState===null&&Rd(a,r);break e;default:Rd(a,r)}}e=e.sibling}}function $g(e){var n=e.alternate;n!==null&&(e.alternate=null,$g(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&et(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var un=null,ei=!1;function Oi(e,n,a){for(a=a.child;a!==null;)ex(e,n,a),a=a.sibling}function ex(e,n,a){if(je&&typeof je.onCommitFiberUnmount=="function")try{je.onCommitFiberUnmount(it,a)}catch{}switch(a.tag){case 26:Kt||Pn(a,n),Oi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Kt&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Kt||Pn(a,n),Jo(a);var r=un,c=ei;fs(a.type)&&(un=a.stateNode,ei=!1),Oi(e,n,a),av(a.stateNode,a.type,a.memoizedProps),un=r,ei=c;break;case 5:Kt||Pn(a,n),Jo(a);case 6:if(a.tag===6&&Jo(a),r=un,c=ei,un=null,Oi(e,n,a),un=r,ei=c,un!==null)if(ei)try{(un.nodeType===9?un.body:un.nodeName==="HTML"?un.ownerDocument.body:un).removeChild(a.stateNode),At=!0}catch(f){$t(a,n,f)}else try{un.removeChild(a.stateNode),At=!0}catch(f){$t(a,n,f)}break;case 18:un!==null&&(ei?(e=un,kx(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),jr(e)):kx(un,a.stateNode));break;case 4:r=un,c=ei,un=a.stateNode.containerInfo,ei=!0,Oi(e,n,a),un=r,ei=c;break;case 0:case 11:case 14:case 15:as(2,a,n),Kt||as(4,a,n),Oi(e,n,a);break;case 1:Kt||(Pn(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&Hg(a,n,r)),Oi(e,n,a);break;case 21:Oi(e,n,a);break;case 22:Kt=(r=Kt)||a.memoizedState!==null,Oi(e,n,a),Kt=r;break;case 30:Pn(a,n),Oi(e,n,a);break;case 7:Kt||Pn(a,n),Oi(e,n,a);break;default:Oi(e,n,a)}}function tx(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{jr(e)}catch(a){$t(n,n.return,a)}}}function nx(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{jr(e)}catch(a){$t(n,n.return,a)}}function Qy(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Kg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Kg),n;default:throw Error(s(435,e.tag))}}function zc(e,n){var a=Qy(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var c=cb.bind(null,e,r);r.then(c,c)}})}function Wn(e,n,a){var r=n.deletions;if(r!==null)for(var c=0;c<r.length;c++){var f=r[c],_=e,R=n,H=R;e:for(;H!==null;){switch(H.tag){case 27:if(fs(H.type)){un=H.stateNode,ei=!1;break e}break;case 5:un=H.stateNode,ei=!1;break e;case 3:case 4:un=H.stateNode.containerInfo,ei=!0;break e}H=H.return}if(un===null)throw Error(s(160));ex(_,R,f),un=null,ei=!1,_=f.alternate,_!==null&&(_.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)ix(n,e,a),n=n.sibling}var Pi=null;function ix(e,n,a){var r=e.alternate,c=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(c&4&&(r=e.updateQueue,r=r!==null?r.events:null,r!==null))for(var f=0;f<r.length;f++){var _=r[f];_.ref.impl=_.nextImpl}Wn(n,e,a),Yn(e),c&4&&(as(3,e,e.return),Qo(3,e),as(5,e,e.return));break;case 1:Wn(n,e,a),Yn(e),c&512&&(Kt||r===null||Pn(r,r.return)),c&64&&Cn&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(f=Pi,Wn(n,e,a),Yn(e),c&512&&(Kt||r===null||Pn(r,r.return)),c&4)if(c=r!==null?r.memoizedState:null,a=e.memoizedState,r===null)if(a===null)if(e.stateNode===null)if(Cn)e.stateNode=Hx(e.type,e.memoizedProps,n.containerInfo,e);else{e:{n=e.type,a=e.memoizedProps,c=f.ownerDocument||f;t:switch(n){case"title":r=c.getElementsByTagName("title")[0],(!r||r[Be]||r[A]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=c.createElement(n),c.head.insertBefore(r,c.querySelector("head > title"))),zn(r,n,a),r[A]=e,Tt(r),n=r;break e;case"link":if(f=uv("link","href",c).get(n+(a.href||""))){for(_=0;_<f.length;_++)if(r=f[_],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(_,1);break t}}r=c.createElement(n),zn(r,n,a),c.head.appendChild(r);break;case"meta":if(f=uv("meta","content",c).get(n+(a.content||""))){for(_=0;_<f.length;_++)if(r=f[_],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(_,1);break t}}r=c.createElement(n),zn(r,n,a),c.head.appendChild(r);break;default:throw Error(s(468,n))}r[A]=e,Tt(r),n=r}e.stateNode=n}else Cn||dh(f,e.type,e.stateNode);else e.stateNode=cv(f,a,e.memoizedProps);else c!==a?(c===null?(n=r.stateNode,n===null||Kt||n.parentNode.removeChild(n)):c.count--,a===null?Cn||dh(f,e.type,e.stateNode):cv(f,a,e.memoizedProps)):a===null&&e.stateNode!==null&&xd(e,e.memoizedProps,r.memoizedProps);break;case 27:Wn(n,e,a),Yn(e),c&512&&(Kt||r===null||Pn(r,r.return)),r!==null&&c&4&&xd(e,e.memoizedProps,r.memoizedProps);break;case 5:if(f=ta,ta=!1,Wn(n,e,a),ta=f,Yn(e),c&512&&(Kt||r===null||Pn(r,r.return)),e.flags&32){n=e.stateNode;try{lr(n,""),At=!0}catch(ge){$t(e,e.return,ge)}}c&4&&e.stateNode!=null&&(n=e.memoizedProps,xd(e,n,r!==null?r.memoizedProps:n)),c&1024&&(Td=!0);break;case 6:if(Wn(n,e,a),Yn(e),c&4){if(e.stateNode===null)throw Error(s(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n,At=!0}catch(ge){$t(e,e.return,ge)}}break;case 3:if(At=!1,Qc=null,f=Pi,Pi=ll(n.containerInfo),Wn(n,e,a),Pi=f,Yn(e),c&4&&r!==null&&r.memoizedState.isDehydrated)try{jr(n.containerInfo)}catch(ge){$t(e,e.return,ge)}Td&&(Td=!1,ax(e)),At=!1;break;case 4:c=ta,ta=Cn,r=jt(),f=Pi,Pi=ll(e.stateNode.containerInfo),Wn(n,e,a),Yn(e),Pi=f,At&&$o&&(Oc=!0),At=r,ta=c;break;case 12:Wn(n,e,a),Yn(e);break;case 31:Wn(n,e,a),Yn(e),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,zc(e,n)));break;case 13:Wn(n,e,a),Yn(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Fc=We()),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,zc(e,n)));break;case 22:f=e.memoizedState!==null,_=r!==null&&r.memoizedState!==null;var R=Cn,H=Kt,ae=ta;Cn=R||f,ta=ae||f,Kt=H||_,Wn(n,e,a),Kt=H,ta=ae,Cn=R,Yn(e),c&8192&&(n=e.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,!f||r===null||_||Cn||Kt||(n=_||Kt,a=Cn,r=Kt,Cn=f||Cn,Kt=n,ss(e,2),Cn=a,Kt=r),!f&&ta||wd(e,f)),c&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,zc(e,a))));break;case 19:Wn(n,e,a),Yn(e),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,zc(e,n)));break;case 30:c&512&&(Kt||r===null||Pn(r,r.return)),c=jt(),f=$o,_=(a&335544064)===a,R=e.memoizedProps,$o=_&&ba(R.default,R.update)!=="none",Wn(n,e,a),Yn(e),_&&r!==null&&At&&(e.flags|=4),$o=f,At=c;break;case 21:break;case 7:c&512&&(Kt||r===null||Pn(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:Wn(n,e,a),Yn(e)}}function Yn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(Vg(r)){a=r;break}r=r.return}r=null;for(var c=e.return;c!==null;){if(md(c)){var f=c.stateNode;r===null?r=[f]:r.push(f)}if(pd(c))break;c=c.return}var _=r;if(a==null)throw Error(s(160));switch(a.tag){case 27:var R=a.stateNode,H=vd(e);Nc(e,H,R,_);break;case 5:var ae=a.stateNode;a.flags&32&&(lr(ae,""),a.flags&=-33);var ge=vd(e);Nc(e,ge,ae,_);break;case 3:case 4:var Ee=a.stateNode.containerInfo,ee=vd(e);_d(e,ee,Ee,_);break;default:throw Error(s(161))}}catch(me){$t(e,e.return,me)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function ax(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;ax(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Xr=!0,n.reset(),Xr=!1),e=e.sibling}}function wr(e,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)sx(n,e),n=n.sibling;else Zg(n)}function sx(e,n){var a=e.alternate;if(a===null)Sd(e,!1);else switch(e.tag){case 3:if(Ad=na=!1,jg(),wr(n,e),!na&&!Oc){if(e=$i,e!==null)for(var r=0;r<e.length;r+=3){a=e[r];var c=e[r+1];qx(a,e[r+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+c+")"})}e=n.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Ad=!0}$i=null;break;case 5:wr(n,e);break;case 4:r=na,na=!1,wr(n,e),na&&(Oc=!0),na=r;break;case 22:e.memoizedState===null&&(a.memoizedState!==null?Sd(e,!1):wr(n,e));break;case 30:r=na,c=jg(),na=!1,wr(n,e),na&&(e.flags|=4);var f=e.memoizedProps,_=e.stateNode;n=ya(f,_),_=ya(a.memoizedProps,_);var R=ba(f.default,f.update);R==="none"?n=!1:(f=a.memoizedState,a.memoizedState=null,a=e.child,$n=0,n=Ed(e,a,n,_,R,f,!0),$n!==(f===null?0:f.length)&&(e.flags|=32)),(e.flags&4)!==0&&n?(Or(e,e.memoizedProps.onUpdate),$i=c):c!==null&&(c.push.apply(c,$i),$i=c),na=(e.flags&32)!==0?!0:r;break;default:wr(n,e)}}function ia(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Qg(e,n.alternate,n),n=n.sibling}function ss(e,n){for(e=e.child;e!==null;){var a=e,r=n;switch(a.tag){case 0:case 11:case 14:case 15:as(4,a,a.return),ss(a,r);break;case 1:Pn(a,a.return);var c=a.stateNode;typeof c.componentWillUnmount=="function"&&Hg(a,a.return,c),ss(a,r);break;case 27:(r&2)!==0&&av(a.stateNode,a.type,a.memoizedProps);case 5:Pn(a,a.return),a.tag!==5&&a.tag!==27||Jo(a),ss(a,r);break;case 6:Jo(a);break;case 26:Pn(a,a.return),c=a.stateNode,a.memoizedState!==null||c===null||Kt||c.parentNode.removeChild(c),ss(a,r);break;case 22:a.memoizedState===null&&ss(a,r);break;case 30:Pn(a,a.return),ss(a,r);break;case 7:Pn(a,a.return);default:ss(a,r)}e=e.sibling}}function zi(e,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var r=n.alternate,c=e,f=n,_=f.flags,R=(a&1)!==0;switch(f.tag){case 0:case 11:case 15:zi(c,f,a),Qo(4,f);break;case 1:if(zi(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(ge){$t(r,r.return,ge)}if(r=f,c=r.updateQueue,c!==null){var H=r.stateNode;try{var ae=c.shared.hiddenCallbacks;if(ae!==null)for(c.shared.hiddenCallbacks=null,c=0;c<ae.length;c++)w0(ae[c],H)}catch(ge){$t(r,r.return,ge)}}R&&_&64&&Fg(f),Ji(f,f.return);break;case 27:(a&2)!==0&&kg(f);case 5:f.tag!==5&&f.tag!==27||Gg(f),zi(c,f,a),R&&r===null&&_&4&&gd(f),Ji(f,f.return);break;case 6:Gg(f);break;case 26:H=f.stateNode,f.memoizedState!==null||H===null||Cn||dh(ll(H.ownerDocument),f.type,H),zi(c,f,a),R&&r===null&&_&4&&gd(f),Ji(f,f.return);break;case 12:zi(c,f,a);break;case 31:zi(c,f,a),R&&_&4&&tx(c,f);break;case 13:zi(c,f,a),R&&_&4&&nx(c,f);break;case 22:f.memoizedState===null&&zi(c,f,a),Ji(f,f.return);break;case 30:zi(c,f,a),Ji(f,f.return);break;case 7:Ji(f,f.return);default:zi(c,f,a)}n=n.sibling}}function Cd(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Bo(a))}function Nd(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Bo(e))}function wi(e,n,a,r){var c=(a&335544064)===a;if(n.subtreeFlags&(c?10262:10256))for(n=n.child;n!==null;)rx(e,n,a,r),n=n.sibling;else c&&Yg(n)}function rx(e,n,a,r){var c=(a&335544064)===a;c&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Uc(n);var f=n.flags;switch(n.tag){case 0:case 11:case 15:wi(e,n,a,r),f&2048&&Qo(9,n);break;case 1:wi(e,n,a,r);break;case 3:wi(e,n,a,r),c&&Ad&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),f&2048&&(f=null,n.alternate!==null&&(f=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==f&&(n.refCount++,f!=null&&Bo(f)));break;case 12:if(f&2048){wi(e,n,a,r),f=n.stateNode;try{var _=n.memoizedProps,R=_.id,H=_.onPostCommit;typeof H=="function"&&H(R,n.alternate===null?"mount":"update",f.passiveEffectDuration,-0)}catch(ae){$t(n,n.return,ae)}}else wi(e,n,a,r);break;case 31:wi(e,n,a,r);break;case 13:wi(e,n,a,r);break;case 23:break;case 22:_=n.stateNode,R=n.alternate,n.memoizedState!==null?(c&&R!==null&&R.memoizedState===null&&Uc(R),_._visibility&2?wi(e,n,a,r):el(e,n)):(c&&R!==null&&R.memoizedState!==null&&Uc(n),_._visibility&2?wi(e,n,a,r):(_._visibility|=2,Rr(e,n,a,r,(n.subtreeFlags&10256)!==0||!1))),f&2048&&Cd(R,n);break;case 24:wi(e,n,a,r),f&2048&&Nd(n.alternate,n);break;case 30:c&&(f=n.alternate,f!==null&&(ea(f.child,!0),ea(n.child,!0))),wi(e,n,a,r);break;default:wi(e,n,a,r)}}function Rr(e,n,a,r,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,_=n,R=a,H=r,ae=_.flags;switch(_.tag){case 0:case 11:case 15:Rr(f,_,R,H,c),Qo(8,_);break;case 23:break;case 22:var ge=_.stateNode;_.memoizedState!==null?ge._visibility&2?Rr(f,_,R,H,c):el(f,_):(ge._visibility|=2,Rr(f,_,R,H,c)),c&&ae&2048&&Cd(_.alternate,_);break;case 24:Rr(f,_,R,H,c),c&&ae&2048&&Nd(_.alternate,_);break;default:Rr(f,_,R,H,c)}n=n.sibling}}function el(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,c=r.flags;switch(r.tag){case 22:el(a,r),c&2048&&Cd(r.alternate,r);break;case 24:el(a,r),c&2048&&Nd(r.alternate,r);break;default:el(a,r)}n=n.sibling}}var Vs=8192;function ks(e,n,a){if(e.subtreeFlags&Vs)for(e=e.child;e!==null;)ox(e,n,a),e=e.sibling}function ox(e,n,a){switch(e.tag){case 26:ks(e,n,a),e.flags&Vs&&(e.memoizedState!==null?iM(a,Pi,e.memoizedState,e.memoizedProps):(e=e.stateNode,(n&335544128)===n&&pv(a,e)));break;case 5:ks(e,n,a),e.flags&Vs&&(e=e.stateNode,(n&335544128)===n&&pv(a,e));break;case 3:case 4:var r=Pi;Pi=ll(e.stateNode.containerInfo),ks(e,n,a),Pi=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Vs,Vs=16777216,ks(e,n,a),Vs=r):ks(e,n,a));break;case 30:if((e.flags&Vs)!==0&&(r=e.memoizedProps.name,r!=null&&r!=="auto")){var c=e.stateNode;c.paired=null,ui===null&&(ui=new Map),ui.set(r,c)}ks(e,n,a);break;default:ks(e,n,a)}}function lx(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function tl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Nn=r,ux(r,e)}lx(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)cx(e),e=e.sibling}function cx(e){switch(e.tag){case 0:case 11:case 15:tl(e),e.flags&2048&&as(9,e,e.return);break;case 3:tl(e);break;case 12:tl(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Ic(e)):tl(e);break;default:tl(e)}}function Ic(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Nn=r,ux(r,e)}lx(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:as(8,n,n.return),Ic(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ic(n));break;default:Ic(n)}e=e.sibling}}function ux(e,n){for(;Nn!==null;){var a=Nn;switch(a.tag){case 0:case 11:case 15:as(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Bo(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,Nn=r;else e:for(a=e;Nn!==null;){r=Nn;var c=r.sibling,f=r.return;if($g(r),r===a){Nn=null;break e}if(c!==null){c.return=f,Nn=c;break e}Nn=f}}}var Jy={getCacheForType:function(e){var n=Ln(vn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Ln(vn).controller.signal}},$y=typeof WeakMap=="function"?WeakMap:Map,qt=0,sn=null,Ct=null,Ot=0,Jt=0,fi=null,rs=!1,Cr=!1,Dd=!1,Da=0,gn=0,os=0,Xs=0,Bc=0,di=0,Nr=0,nl=null,ti=null,Ld=!1,Fc=0,fx=0,Hc=1/0,Gc=null,ls=null,fn=0,Ii=null,js=null,aa=0,Ud=0,Od=null,dx=null,Dr=null,Lr=null,Ur=null,il=0,Vc=null;function hi(){return(qt&2)!==0&&Ot!==0?Ot&-Ot:le.T!==null?Xd():Hl()}function hx(){if(di===0)if((Ot&536870912)===0||wt){var e=Es;Es<<=1,(Es&3932160)===0&&(Es=262144),di=e}else di=536870912;return e=Un.current,e!==null&&(e.flags|=32),di}function Or(e,n){if(n!=null){var a=e.stateNode,r=a.ref;r===null&&(r=a.ref=Wx(ya(e.memoizedProps,a))),Lr===null&&(Lr=[]),Lr.push(n.bind(null,r))}}function ni(e,n,a){(e===sn&&(Jt===2||Jt===9)||e.cancelPendingCommit!==null)&&(Pr(e,0),cs(e,Ot,di,!1)),Wi(e,a),((qt&2)===0||e!==sn)&&(e===sn&&((qt&2)===0&&(Xs|=a),gn===4&&cs(e,Ot,di,!1)),sa(e))}function px(e,n,a){if((qt&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Xa(e,n),c=r?nb(e,n):zd(e,n,!0),f=r;do{if(c===0){Cr&&!r&&cs(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!eb(a)){c=zd(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var _=0;else _=e.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;e:{var R=e;c=nl;var H=R.current.memoizedState.isDehydrated;if(H&&(Pr(R,_).flags|=256),_=zd(R,_,!1),_!==2&&_!==6){if(Dd&&!H){R.errorRecoveryDisabledLanes|=f,Xs|=f,c=4;break e}f=ti,ti=c,f!==null&&(ti===null?ti=f:ti.push.apply(ti,f))}c=_}if(f=!1,c!==2)continue}}if(c===1){Pr(e,0),cs(e,n,0,!0);break}e:{switch(r=e,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:cs(r,n,di,!rs);break e;case 2:ti=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=Fc+300-We(),10<c)){if(cs(r,n,di,!rs),Ts(r,0,!0)!==0)break e;aa=n,r.timeoutHandle=th(mx.bind(null,r,a,ti,Gc,Ld,n,di,Xs,Nr,rs,f,"Throttled",-0,0),c);break e}mx(r,a,ti,Gc,Ld,n,di,Xs,Nr,rs,f,null,-0,0)}}break}while(!0);sa(e)}function mx(e,n,a,r,c,f,_,R,H,ae,ge,Ee,ee,me){e.timeoutHandle=-1;var Fe=n.subtreeFlags,tt=(f&335544064)===f;if(Ee=null,(tt||Fe&8192||(Fe&16785408)===16785408)&&(Ee={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Zi},ui=null,ox(n,f,Ee),tt&&(Fe=Ee,tt=e.containerInfo,tt=(tt.nodeType===9?tt:tt.ownerDocument).__reactViewTransition,tt!=null&&(Fe.count++,Fe.waitingForViewTransition=!0,Fe=fl.bind(Fe),tt.finished.then(Fe,Fe))),Fe=(f&62914560)===f?Fc-We():(f&4194048)===f?fx-We():0,Fe=aM(Ee,Fe),Fe!==null)){aa=f,e.cancelPendingCommit=Fe(Mx.bind(null,e,n,f,a,r,c,_,R,H,ae,ge,Ee,null,ee,me)),cs(e,f,_,!ae);return}Mx(e,n,f,a,r,c,_,R,H,ae,ge,Ee)}function eb(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!li(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function cs(e,n,a,r){n=qi(e,n),n&=~Bc,n&=~Xs,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var c=n;0<c;){var f=31-pt(c),_=1<<f;r[f]=-1,c&=~_}a!==0&&As(e,a,n)}function kc(){return(qt&6)===0?(al(0),!1):!0}function Pd(){if(Ct!==null){if(Jt===0)var e=Ct.return;else e=Ct,Ta=Ls=null,kf(e),yr=null,Go=0,e=Ct;for(;e!==null;)Bg(e.alternate,e),e=e.return;Ct=null}}function Pr(e,n){var a=e.timeoutHandle;return a!==-1&&(e.timeoutHandle=-1,Eb(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),aa=0,Pd(),sn=e,Ct=a=Ma(e.current,null),Ot=n,Jt=0,fi=null,rs=!1,Cr=Xa(e,n),Dd=!1,Nr=di=Bc=Xs=os=gn=0,ti=nl=null,Ld=!1,Da=qi(e,n),Ql(),a}function gx(e,n){vt=null,le.H=bc,n===Sr||n===lc?(n=M0(),Jt=3):n===Nf?(n=M0(),Jt=4):Jt=n===ad?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,fi=n,Ct===null&&(gn=1,Mc(e,Mi(n,e.current)))}function xx(){var e=Un.current;return e===null?!0:(Ot&4194048)===Ot?Fn===null:(Ot&62914560)===Ot||(Ot&536870912)!==0?e===Fn:!1}function vx(){var e=le.H;return le.H=bc,e===null?bc:e}function _x(){var e=le.A;return le.A=Jy,e}function Xc(){gn=4,rs||(Ot&4194048)!==Ot&&Un.current!==null||(Cr=!0),(os&134217727)===0&&(Xs&134217727)===0||sn===null||cs(sn,Ot,di,!1)}function zd(e,n,a){var r=qt;qt|=2;var c=vx(),f=_x();(sn!==e||Ot!==n)&&(Gc=null,Pr(e,n)),n=!1;var _=gn;e:do try{if(Jt!==0&&Ct!==null){var R=Ct,H=fi;switch(Jt){case 8:Pd(),_=6;break e;case 3:case 2:case 9:case 6:Un.current===null&&(n=!0);var ae=Jt;if(Jt=0,fi=null,zr(e,R,H,ae),a&&Cr){_=0;break e}break;default:ae=Jt,Jt=0,fi=null,zr(e,R,H,ae)}}tb(),_=gn;break}catch(ge){gx(e,ge)}while(!0);return n&&e.shellSuspendCounter++,Ta=Ls=null,qt=r,le.H=c,le.A=f,Ct===null&&(sn=null,Ot=0,Ql()),_}function tb(){for(;Ct!==null;)Sx(Ct)}function nb(e,n){var a=qt;qt|=2;var r=vx(),c=_x();sn!==e||Ot!==n?(Gc=null,Hc=We()+500,Pr(e,n)):Cr=Xa(e,n);e:do try{if(Jt!==0&&Ct!==null){n=Ct;var f=fi;t:switch(Jt){case 1:Jt=0,fi=null,zr(e,n,f,1);break;case 2:case 9:if(y0(f)){Jt=0,fi=null,yx(n);break}n=function(){Jt!==2&&Jt!==9||sn!==e||(Jt=7),sa(e)},f.then(n,n);break e;case 3:Jt=7;break e;case 4:Jt=5;break e;case 7:y0(f)?(Jt=0,fi=null,yx(n)):(Jt=0,fi=null,zr(e,n,f,7));break;case 5:var _=null;switch(Ct.tag){case 26:_=Ct.memoizedState;case 5:case 27:var R=Ct;if(_?dv(_):R.stateNode.complete){Jt=0,fi=null;var H=R.sibling;if(H!==null)Ct=H;else{var ae=R.return;ae!==null?(Ct=ae,jc(ae)):Ct=null}break t}}Jt=0,fi=null,zr(e,n,f,5);break;case 6:Jt=0,fi=null,zr(e,n,f,6);break;case 8:Pd(),gn=6;break e;default:throw Error(s(462))}}ib();break}catch(ge){gx(e,ge)}while(!0);return Ta=Ls=null,le.H=r,le.A=c,qt=a,Ct!==null?0:(sn=null,Ot=0,Ql(),gn)}function ib(){for(;Ct!==null&&!Ge();)Sx(Ct)}function Sx(e){var n=zg(e.alternate,e,Da);e.memoizedProps=e.pendingProps,n===null?jc(e):Ct=n}function yx(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Cg(a,n,n.pendingProps,n.type,void 0,Ot);break;case 11:n=Cg(a,n,n.pendingProps,n.type.render,n.ref,Ot);break;case 5:kf(n);var r=n;r===Rn&&(wt?(ic(r),r.tag===5&&r.stateNode!=null&&(on=r.stateNode)):(ic(r),wt=!0));default:Bg(a,n),n=Ct=u0(n,Da),n=zg(a,n,Da)}e.memoizedProps=e.pendingProps,n===null?jc(e):Ct=n}function zr(e,n,a,r){Ta=Ls=null,kf(n),yr=null,Go=0;var c=n.return;try{if(Xy(e,c,n,a,Ot)){gn=1,Mc(e,Mi(a,e.current)),Ct=null;return}}catch(f){if(c!==null)throw Ct=c,f;gn=1,Mc(e,Mi(a,e.current)),Ct=null;return}n.flags&32768?(wt||r===1?e=!0:Cr||(Ot&536870912)!==0?e=!1:(rs=e=!0,(r===2||r===9||r===3||r===6)&&(r=Un.current,r!==null&&r.tag===13&&(r.flags|=16384))),bx(n,e)):jc(n)}function jc(e){var n=e;do{if((n.flags&32768)!==0){bx(n,rs);return}e=n.return;var a=Yy(n.alternate,n,Da);if(a!==null){Ct=a;return}if(n=n.sibling,n!==null){Ct=n;return}Ct=n=e}while(n!==null);gn===0&&(gn=5)}function bx(e,n){do{var a=Zy(e.alternate,e);if(a!==null){a.flags&=32767,Ct=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Ct=e;return}Ct=e=a}while(e!==null);gn=6,Ct=null}function Mx(e,n,a,r,c,f,_,R,H,ae,ge,Ee){e.cancelPendingCommit=null;do qc();while(fn!==0);if((qt&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));e===sn&&(Ct=sn=null,Ot=0),js=n,Ii=e,aa=a,Od=c,dx=r,ab(e,n,a,_,R,H,Ee)}}function ab(e,n,a,r,c,f,_){var R=n.lanes|n.childLanes;if(Ud=R,R|=xf,Fl(e,a,R,r,c,f),Lr=null,(a&335544064)===a?(Ur=Ly(e),r=10262):(Ur=null,r=10256),(n.subtreeFlags&r)!==0||(n.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,ub(Pe,function(){return Hd(),null})):(e.callbackNode=null,e.callbackPriority=0),Dc=!1,r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=le.T,le.T=null,c=Ae.p,Ae.p=2,f=qt,qt|=4;try{Ky(e,n,a)}finally{qt=f,Ae.p=c,le.T=r}}fn=1,Dc?Dr=Nb(_,e.containerInfo,Ur,Id,Bd,rb,Fd,Hd,sb):(Id(),Bd(),Fd())}function sb(e){if(fn!==0){var n=Ii.onRecoverableError;n(e,{componentStack:null})}}function rb(){fn===3&&(fn=0,sx(js,Ii),fn=4)}function Id(){if(fn===1){fn=0;var e=Ii,n=js,a=aa,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=le.T,le.T=null;var c=Ae.p;Ae.p=2;var f=qt;qt|=4;try{$o=Oc=!1,ix(n,e,a),a=Jd;var _=e0(e.containerInfo),R=a.focusedElem,H=a.selectionRange;if(_!==R&&R&&R.ownerDocument&&$m(R.ownerDocument.documentElement,R)){if(H!==null&&df(R)){var ae=H.start,ge=H.end;if(ge===void 0&&(ge=ae),"selectionStart"in R)R.selectionStart=ae,R.selectionEnd=Math.min(ge,R.value.length);else{var Ee=R.ownerDocument||document,ee=Ee&&Ee.defaultView||window;if(ee.getSelection){var me=ee.getSelection(),Fe=R.textContent.length,tt=Math.min(H.start,Fe),_t=H.end===void 0?tt:Math.min(H.end,Fe);!me.extend&&tt>_t&&(_=_t,_t=tt,tt=_);var ie=Jm(R,tt),Y=Jm(R,_t);if(ie&&Y&&(me.rangeCount!==1||me.anchorNode!==ie.node||me.anchorOffset!==ie.offset||me.focusNode!==Y.node||me.focusOffset!==Y.offset)){var ue=Ee.createRange();ue.setStart(ie.node,ie.offset),me.removeAllRanges(),tt>_t?(me.addRange(ue),me.extend(Y.node,Y.offset)):(ue.setEnd(Y.node,Y.offset),me.addRange(ue))}}}}for(Ee=[],me=R;me=me.parentNode;)me.nodeType===1&&Ee.push({element:me,left:me.scrollLeft,top:me.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<Ee.length;R++){var Me=Ee[R];Me.element.scrollLeft=Me.left,Me.element.scrollTop=Me.top}}Xr=!!Qd,Jd=Qd=null}finally{qt=f,Ae.p=c,le.T=r}}e.current=n,fn=2}}function Bd(){if(fn===2){fn=0;var e=Ii,n=js,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=le.T,le.T=null;var r=Ae.p;Ae.p=2;var c=qt;qt|=4;try{Qg(e,n.alternate,n)}finally{qt=c,Ae.p=r,le.T=a}}fn=3}}function Fd(){if(fn===4||fn===3){fn=0;var e=Dr;Dr=null,He();var n=Ii,a=js,r=aa,c=dx,f=(r&335544064)===r?10262:10256;if((a.subtreeFlags&f)!==0||(a.flags&f)!==0?fn=5:(fn=0,js=Ii=null,Ex(n,n.pendingLanes)),f=n.pendingLanes,f===0&&(ls=null),Ao(r),a=a.stateNode,je&&typeof je.onCommitFiberRoot=="function")try{je.onCommitFiberRoot(it,a,void 0,(a.current.flags&128)===128)}catch{}if(c!==null){a=le.T,f=Ae.p,Ae.p=2,le.T=null;try{for(var _=n.onRecoverableError,R=0;R<c.length;R++){var H=c[R];_(H.value,{componentStack:H.stack})}}finally{le.T=a,Ae.p=f}}if(c=Lr,_=Ur,Ur=null,c!==null&&(Lr=null,_===null&&(_=[]),e!==null))for(H=0;H<c.length;H++)a=(0,c[H])(_),a!==void 0&&e.finished.finally(a);(aa&3)!==0&&qc(),sa(n),f=n.pendingLanes,(r&261930)!==0&&(f&42)!==0?n===Vc?il++:(il=0,Vc=n):(il=0,Vc=null),al(0)}}function Ex(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Bo(n)))}function qc(){return Dr!==null&&(Dr.skipTransition(),Dr=null),Id(),Bd(),Fd(),Hd()}function Hd(){if(fn!==5)return!1;var e=Ii,n=Ud;Ud=0;var a=Ao(aa),r=le.T,c=Ae.p;try{Ae.p=32>a?32:a,le.T=null,a=Od,Od=null;var f=Ii,_=aa;if(fn=0,js=Ii=null,aa=0,(qt&6)!==0)throw Error(s(331));var R=qt;if(qt|=4,cx(f.current),rx(f,f.current,_,a),qt=R,al(0,!1),je&&typeof je.onPostCommitFiberRoot=="function")try{je.onPostCommitFiberRoot(it,f)}catch{}return!0}finally{Ae.p=c,le.T=r,Ex(e,n)}}function Tx(e,n,a){n=Mi(a,n),n=id(e.stateNode,n,2),e=es(e,n,2),e!==null&&(Wi(e,2),sa(e))}function $t(e,n,a){if(e.tag===3)Tx(e,e,a);else for(;n!==null;){if(n.tag===3){Tx(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ls===null||!ls.has(r))){e=Mi(a,e),a=yg(2),r=es(n,a,2),r!==null&&(bg(a,r,n,e),Wi(r,2),sa(r));break}}n=n.return}}function Gd(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new $y;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(Dd=!0,c.add(a),e=ob.bind(null,e,n,a),n.then(e,e))}function ob(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,sn===e&&(Ot&a)===a&&((gn===4||gn===3&&(Ot&62914560)===Ot&&300>We()-Fc)&&(qt&2)===0?Pr(e,0):Bc|=a,Nr===Ot&&(Nr=0)),sa(e)}function Ax(e,n){n===0&&(n=bo()),e=Cs(e,n),e!==null&&(Wi(e,n),sa(e))}function lb(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Ax(e,a)}function cb(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),Ax(e,a)}function ub(e,n){return ze(e,n)}var Ir=null,Br=null,Vd=!1,Wc=!1,kd=!1,us=0;function sa(e){e!==Br&&e.next===null&&(Br===null?Ir=Br=e:Br=Br.next=e),Wc=!0,Vd||(Vd=!0,db())}function al(e,n){if(!kd&&Wc){kd=!0;do for(var a=!1,r=Ir;r!==null;){if(e!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var _=r.suspendedLanes,R=r.pingedLanes;f=(1<<31-pt(42|e)+1)-1,f&=c&~(_&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Nx(r,f))}else f=Ot,f=Ts(r,r===sn?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Xa(r,f)||(a=!0,Nx(r,f));r=r.next}while(a);kd=!1}}function fb(){wx()}function wx(){Wc=Vd=!1;var e=0;us!==0&&Mb()&&(e=us);for(var n=We(),a=null,r=Ir;r!==null;){var c=r.next,f=Rx(r,n);f===0?(r.next=null,a===null?Ir=c:a.next=c,c===null&&(Br=a)):(a=r,(e!==0||(f&3)!==0)&&(Wc=!0)),r=c}fn!==0&&fn!==5||al(e),us!==0&&(us=0)}function Rx(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var _=31-pt(f),R=1<<_,H=c[_];H===-1?((R&a)===0||(R&r)!==0)&&(c[_]=yo(R,n)):H<=n&&(e.expiredLanes|=R),f&=~R}if(n=sn,a=Ot,a=Ts(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(Jt===2||Jt===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&at(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Xa(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&at(r),Ao(a)){case 2:case 8:a=J;break;case 32:a=Pe;break;case 268435456:a=Ie;break;default:a=Pe}return r=Cx.bind(null,e),a=ze(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&at(r),e.callbackPriority=2,e.callbackNode=null,2}function Cx(e,n){if(fn!==0&&fn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(qc()&&e.callbackNode!==a)return null;var r=Ot;return r=Ts(e,e===sn?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(px(e,r,n),Rx(e,We()),e.callbackNode!=null&&e.callbackNode===a?Cx.bind(null,e):null)}function Nx(e,n){if(qc())return null;px(e,n,!0)}function db(){Tb(function(){(qt&6)!==0?ze(ht,fb):wx()})}function Xd(){if(us===0){var e=Ps;e===0&&(e=sr,sr<<=1,(sr&261888)===0&&(sr=256)),us=e}return us}function Dx(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:kl(e)}function hb(e,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=Dx((c[q]||null).action),_=r.submitter;_&&(n=(n=_[q]||null)?Dx(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var R=new Wl("action","action",null,r,c);e.push({event:R,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(us!==0){var H=new FormData(c,_);Jf(a,{pending:!0,data:H,method:c.method,action:f},null,H)}}else typeof f=="function"&&(R.preventDefault(),H=new FormData(c,_),Jf(a,{pending:!0,data:H,method:c.method,action:f},f,H))},currentTarget:c}]})}}for(var jd=0;jd<gf.length;jd++){var qd=gf[jd],pb=qd.toLowerCase(),mb=qd[0].toUpperCase()+qd.slice(1);Ui(pb,"on"+mb)}Ui(i0,"onAnimationEnd"),Ui(a0,"onAnimationIteration"),Ui(s0,"onAnimationStart"),Ui("dblclick","onDoubleClick"),Ui("focusin","onFocus"),Ui("focusout","onBlur"),Ui(Ey,"onTransitionRun"),Ui(Ty,"onTransitionStart"),Ui(Ay,"onTransitionCancel"),Ui(r0,"onTransitionEnd"),hn("onMouseEnter",["mouseout","mouseover"]),hn("onMouseLeave",["mouseout","mouseover"]),hn("onPointerEnter",["pointerout","pointerover"]),hn("onPointerLeave",["pointerout","pointerover"]),ke("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ke("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ke("onBeforeInput",["compositionend","keypress","textInput","paste"]),ke("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ke("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ke("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(sl));function Lx(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],c=r.event;r=r.listeners;e:{var f=void 0;if(n)for(var _=r.length-1;0<=_;_--){var R=r[_],H=R.instance,ae=R.currentTarget;if(R=R.listener,H!==f&&c.isPropagationStopped())break e;f=R,c.currentTarget=ae;try{f(c)}catch(ge){Kl(ge)}c.currentTarget=null,f=H}else for(_=0;_<r.length;_++){if(R=r[_],H=R.instance,ae=R.currentTarget,R=R.listener,H!==f&&c.isPropagationStopped())break e;f=R,c.currentTarget=ae;try{f(c)}catch(ge){Kl(ge)}c.currentTarget=null,f=H}}}}function Nt(e,n){var a=n[he];a===void 0&&(a=n[he]=new Set);var r=e+"__bubble";a.has(r)||(Ux(n,e,2,!1),a.add(r))}function Wd(e,n,a){var r=0;n&&(r|=4),Ux(a,e,r,n)}var Yc="_reactListening"+Math.random().toString(36).slice(2);function Yd(e){if(!e[Yc]){e[Yc]=!0,Zt.forEach(function(a){a!=="selectionchange"&&(gb.has(a)||Wd(a,!1,e),Wd(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Yc]||(n[Yc]=!0,Wd("selectionchange",!1,n))}}function Ux(e,n,a,r){switch(bv(n)){case 2:var c=lM;break;case 8:c=cM;break;default:c=ph}a=c.bind(null,n,a,e),c=void 0,!tf||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function Zd(e,n,a,r,c){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var _=r.tag;if(_===3||_===4){var R=r.stateNode.containerInfo;if(R===c)break;if(_===4)for(_=r.return;_!==null;){var H=_.tag;if((H===3||H===4)&&_.stateNode.containerInfo===c)return;_=_.return}for(;R!==null;){if(_=ut(R),_===null)return;if(H=_.tag,H===5||H===6||H===26||H===27){r=f=_;continue e}R=R.parentNode}}r=r.return}Um(function(){var ae=f,ge=$u(a),Ee=[];e:{var ee=o0.get(e);if(ee!==void 0){var me=Wl,Fe=e;switch(e){case"keypress":if(jl(a)===0)break e;case"keydown":case"keyup":me=ey;break;case"focusin":Fe="focus",me=rf;break;case"focusout":Fe="blur",me=rf;break;case"beforeblur":case"afterblur":me=rf;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":me=zm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":me=VS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":me=sy;break;case i0:case a0:case s0:me=jS;break;case r0:me=oy;break;case"scroll":case"scrollend":me=HS;break;case"wheel":me=cy;break;case"copy":case"cut":case"paste":me=WS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":me=Bm;break;case"submit":me=iy;break;case"toggle":case"beforetoggle":me=fy}var tt=(n&4)!==0,_t=!tt&&(e==="scroll"||e==="scrollend"),ie=tt?ee!==null?ee+"Capture":null:ee;tt=[];for(var Y=ae,ue;Y!==null;){var Me=Y;if(ue=Me.stateNode,Me=Me.tag,Me!==5&&Me!==26&&Me!==27||ue===null||ie===null||(Me=wo(Y,ie),Me!=null&&tt.push(rl(Y,Me,ue))),_t)break;Y=Y.return}0<tt.length&&(ee=new me(ee,Fe,null,a,ge),Ee.push({event:ee,listeners:tt}))}}if((n&7)===0){e:{if(me=e==="mouseover"||e==="pointerover",ee=e==="mouseout"||e==="pointerout",me&&a!==Ju&&(Fe=a.relatedTarget||a.fromElement)&&(ut(Fe)||Fe[xe]))break e;(ee||me)&&(Fe=ge.window===ge?ge:(me=ge.ownerDocument)?me.defaultView||me.parentWindow:window,ee?(me=a.relatedTarget||a.toElement,ee=ae,me=me?ut(me):null,me!==null&&(_t=u(me),tt=me.tag,me!==_t||tt!==5&&tt!==27&&tt!==6)&&(me=null)):(ee=null,me=ae),ee!==me&&(tt=zm,Me="onMouseLeave",ie="onMouseEnter",Y="mouse",(e==="pointerout"||e==="pointerover")&&(tt=Bm,Me="onPointerLeave",ie="onPointerEnter",Y="pointer"),_t=ee==null?Fe:Ke(ee),ue=me==null?Fe:Ke(me),Fe=new tt(Me,Y+"leave",ee,a,ge),Fe.target=_t,Fe.relatedTarget=ue,Me=null,ut(ge)===ae&&(tt=new tt(ie,Y+"enter",me,a,ge),tt.target=ue,tt.relatedTarget=_t,Me=tt),_t=Me,tt=ee&&me?U(ee,me,xb):null,ee!==null&&Ox(Ee,Fe,ee,tt,!1),me!==null&&_t!==null&&Ox(Ee,_t,me,tt,!0)))}e:{if(ee=ae?Ke(ae):window,me=ee.nodeName&&ee.nodeName.toLowerCase(),me==="select"||me==="input"&&ee.type==="file")var Qe=qm;else if(Xm(ee))if(Wm)Qe=yy;else{Qe=_y;var Pt=vy}else me=ee.nodeName,!me||me.toLowerCase()!=="input"||ee.type!=="checkbox"&&ee.type!=="radio"?ae&&Qu(ae.elementType)&&(Qe=qm):Qe=Sy;if(Qe&&(Qe=Qe(e,ae))){jm(Ee,Qe,a,ge);break e}Pt&&Pt(e,ee,ae)}switch(Pt=ae?Ke(ae):window,e){case"focusin":(Xm(Pt)||Pt.contentEditable==="true")&&(dr=Pt,hf=ae,Po=null);break;case"focusout":Po=hf=dr=null;break;case"mousedown":pf=!0;break;case"contextmenu":case"mouseup":case"dragend":pf=!1,t0(Ee,a,ge);break;case"selectionchange":if(My)break;case"keydown":case"keyup":t0(Ee,a,ge)}var rt;if(lf)e:{switch(e){case"compositionstart":var ct="onCompositionStart";break e;case"compositionend":ct="onCompositionEnd";break e;case"compositionupdate":ct="onCompositionUpdate";break e}ct=void 0}else fr?Vm(e,a)&&(ct="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ct="onCompositionStart");ct&&(Fm&&a.locale!=="ko"&&(fr||ct!=="onCompositionStart"?ct==="onCompositionEnd"&&fr&&(rt=Om()):(ja=ge,nf="value"in ja?ja.value:ja.textContent,fr=!0)),Pt=Zc(ae,ct),0<Pt.length&&(ct=new Im(ct,e,null,a,ge),Ee.push({event:ct,listeners:Pt}),rt?ct.data=rt:(rt=km(a),rt!==null&&(ct.data=rt)))),(rt=hy?py(e,a):my(e,a))&&(ct=Zc(ae,"onBeforeInput"),0<ct.length&&(Pt=new Im("onBeforeInput","beforeinput",null,a,ge),Ee.push({event:Pt,listeners:ct}),Pt.data=rt)),hb(Ee,e,ae,a,ge)}Lx(Ee,n)})}function rl(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Zc(e,n){for(var a=n+"Capture",r=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=wo(e,a),c!=null&&r.unshift(rl(e,c,f)),c=wo(e,n),c!=null&&r.push(rl(e,c,f))),e.tag===3)return r;e=e.return}return[]}function xb(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ox(e,n,a,r,c){for(var f=n._reactName,_=[];a!==null&&a!==r;){var R=a,H=R.alternate,ae=R.stateNode;if(R=R.tag,H!==null&&H===r)break;R!==5&&R!==26&&R!==27||ae===null||(H=ae,c?(ae=wo(a,f),ae!=null&&_.unshift(rl(a,ae,H))):c||(ae=wo(a,f),ae!=null&&_.push(rl(a,ae,H)))),a=a.return}_.length!==0&&e.push({event:n,listeners:_})}var vb=/\r\n?/g,_b=/\u0000|\uFFFD/g;function Px(e){return(typeof e=="string"?e:""+e).replace(vb,`
`).replace(_b,"")}function zx(e,n){return n=Px(n),Px(e)===n}function en(e,n,a,r,c,f){switch(a){case"children":if(typeof r=="string")n==="body"||n==="textarea"&&r===""||lr(e,r);else if(typeof r=="number"||typeof r=="bigint")n!=="body"&&lr(e,""+r);else return;break;case"className":oi(e,"class",r);break;case"tabIndex":oi(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":oi(e,a,r);break;case"style":Dm(e,r,f);return;case"data":if(n!=="object"){oi(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=kl(r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&en(e,n,"name",c.name,c,null),en(e,n,"formEncType",c.formEncType,c,null),en(e,n,"formMethod",c.formMethod,c,null),en(e,n,"formTarget",c.formTarget,c,null)):(en(e,n,"encType",c.encType,c,null),en(e,n,"method",c.method,c,null),en(e,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=kl(r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=Zi);return;case"onScroll":r!=null&&Nt("scroll",e);return;case"onScrollEnd":r!=null&&Nt("scrollend",e);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));(f!=null?f.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=kl(r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":Nt("beforetoggle",e),Nt("toggle",e),rn(e,"popover",r);break;case"xlinkActuate":Ut(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Ut(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Ut(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Ut(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Ut(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Ut(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Ut(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Ut(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Ut(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":rn(e,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=BS.get(a)||a,rn(e,a,r);else return}At=!0}function Kd(e,n,a,r,c,f){switch(a){case"style":Dm(e,r,f);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));(f!=null?f.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"children":if(typeof r=="string")lr(e,r);else if(typeof r=="number"||typeof r=="bigint")lr(e,""+r);else return;break;case"onScroll":r!=null&&Nt("scroll",e);return;case"onScrollEnd":r!=null&&Nt("scrollend",e);return;case"onClick":r!=null&&(e.onclick=Zi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Mn.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),f=a.slice(2,c?a.length-7:void 0),n=e[q]||null,n=n!=null?n[a]:null,typeof n=="function"&&e.removeEventListener(f,n,c),typeof r=="function")){typeof n!="function"&&n!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(f,r,c);break e}At=!0,a in e?e[a]=r:r===!0?e.setAttribute(a,""):rn(e,a,r)}return}At=!0}function zn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Nt("error",e),Nt("load",e);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:en(e,n,f,_,a,null)}}c&&en(e,n,"srcSet",a.srcSet,a,null),r&&en(e,n,"src",a.src,a,null);return;case"input":Nt("invalid",e);var R=f=_=c=null,H=null,ae=null;for(r in a)if(a.hasOwnProperty(r)){var ge=a[r];if(ge!=null)switch(r){case"name":c=ge;break;case"type":_=ge;break;case"checked":H=ge;break;case"defaultChecked":ae=ge;break;case"value":f=ge;break;case"defaultValue":R=ge;break;case"children":case"dangerouslySetInnerHTML":if(ge!=null)throw Error(s(137,n));break;default:en(e,n,r,ge,a,null)}}wm(e,f,R,H,ae,_,c,!1);return;case"select":Nt("invalid",e),r=_=f=null;for(c in a)if(a.hasOwnProperty(c)&&(R=a[c],R!=null))switch(c){case"value":f=R;break;case"defaultValue":_=R;break;case"multiple":r=R;default:en(e,n,c,R,a,null)}n=f,a=_,e.multiple=!!r,n!=null?or(e,!!r,n,!1):a!=null&&or(e,!!r,a,!0);return;case"textarea":Nt("invalid",e),f=c=r=null;for(_ in a)if(a.hasOwnProperty(_)&&(R=a[_],R!=null))switch(_){case"value":r=R;break;case"defaultValue":c=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:en(e,n,_,R,a,null)}Cm(e,r,c,f);return;case"option":for(H in a)if(a.hasOwnProperty(H)&&(r=a[H],r!=null))switch(H){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:en(e,n,H,r,a,null)}return;case"dialog":Nt("beforetoggle",e),Nt("toggle",e),Nt("cancel",e),Nt("close",e);break;case"iframe":case"object":Nt("load",e);break;case"video":case"audio":for(r=0;r<sl.length;r++)Nt(sl[r],e);break;case"image":Nt("error",e),Nt("load",e);break;case"details":Nt("toggle",e);break;case"embed":case"source":case"link":Nt("error",e),Nt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ae in a)if(a.hasOwnProperty(ae)&&(r=a[ae],r!=null))switch(ae){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:en(e,n,ae,r,a,null)}return;default:if(Qu(n)){for(ge in a)a.hasOwnProperty(ge)&&(r=a[ge],r!==void 0&&Kd(e,n,ge,r,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(r=a[R],r!=null&&en(e,n,R,r,a,null))}var Sb={};function yb(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,_=null,R=null,H=null,ae=null,ge=null;for(me in a){var Ee=a[me];if(a.hasOwnProperty(me)&&Ee!=null)switch(me){case"checked":break;case"value":break;case"defaultValue":H=Ee;default:r.hasOwnProperty(me)||en(e,n,me,null,r,Ee)}}for(var ee in r){var me=r[ee];if(Ee=a[ee],r.hasOwnProperty(ee)&&(me!=null||Ee!=null))switch(ee){case"type":me!==Ee&&(At=!0),f=me;break;case"name":me!==Ee&&(At=!0),c=me;break;case"checked":me!==Ee&&(At=!0),ae=me;break;case"defaultChecked":me!==Ee&&(At=!0),ge=me;break;case"value":me!==Ee&&(At=!0),_=me;break;case"defaultValue":me!==Ee&&(At=!0),R=me;break;case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(s(137,n));break;default:me!==Ee&&en(e,n,ee,me,r,Ee)}}Zu(e,_,R,H,ae,ge,f,c);return;case"select":me=_=R=ee=null;for(f in a)if(H=a[f],a.hasOwnProperty(f)&&H!=null)switch(f){case"value":break;case"multiple":me=H;default:r.hasOwnProperty(f)||en(e,n,f,null,r,H)}for(c in r)if(f=r[c],H=a[c],r.hasOwnProperty(c)&&(f!=null||H!=null))switch(c){case"value":f!==H&&(At=!0),ee=f;break;case"defaultValue":f!==H&&(At=!0),R=f;break;case"multiple":f!==H&&(At=!0),_=f;default:f!==H&&en(e,n,c,f,r,H)}n=R,a=_,r=me,ee!=null?or(e,!!a,ee,!1):!!r!=!!a&&(n!=null?or(e,!!a,n,!0):or(e,!!a,a?[]:"",!1));return;case"textarea":me=ee=null;for(R in a)if(c=a[R],a.hasOwnProperty(R)&&c!=null&&!r.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:en(e,n,R,null,r,c)}for(_ in r)if(c=r[_],f=a[_],r.hasOwnProperty(_)&&(c!=null||f!=null))switch(_){case"value":c!==f&&(At=!0),ee=c;break;case"defaultValue":c!==f&&(At=!0),me=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&en(e,n,_,c,r,f)}Rm(e,ee,me);return;case"option":for(var Fe in a)if(ee=a[Fe],a.hasOwnProperty(Fe)&&ee!=null&&!r.hasOwnProperty(Fe))switch(Fe){case"selected":e.selected=!1;break;default:en(e,n,Fe,null,r,ee)}for(H in r)if(ee=r[H],me=a[H],r.hasOwnProperty(H)&&ee!==me&&(ee!=null||me!=null))switch(H){case"selected":ee!==me&&(At=!0),e.selected=ee&&typeof ee!="function"&&typeof ee!="symbol";break;default:en(e,n,H,ee,r,me)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tt in a)ee=a[tt],a.hasOwnProperty(tt)&&ee!=null&&!r.hasOwnProperty(tt)&&en(e,n,tt,null,r,ee);for(ae in r)if(ee=r[ae],me=a[ae],r.hasOwnProperty(ae)&&ee!==me&&(ee!=null||me!=null))switch(ae){case"children":case"dangerouslySetInnerHTML":if(ee!=null)throw Error(s(137,n));break;default:en(e,n,ae,ee,r,me)}return;default:if(Qu(n)){for(var _t in a)ee=a[_t],a.hasOwnProperty(_t)&&ee!==void 0&&!r.hasOwnProperty(_t)&&Kd(e,n,_t,void 0,r,ee);for(ge in r)ee=r[ge],me=a[ge],!r.hasOwnProperty(ge)||ee===me||ee===void 0&&me===void 0||Kd(e,n,ge,ee,r,me);return}}for(var ie in a)ee=a[ie],a.hasOwnProperty(ie)&&ee!=null&&!r.hasOwnProperty(ie)&&en(e,n,ie,null,r,ee);for(Ee in r)ee=r[Ee],me=a[Ee],!r.hasOwnProperty(Ee)||ee===me||ee==null&&me==null||en(e,n,Ee,ee,r,me)}function Ix(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function bb(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var c=a[r],f=c.transferSize,_=c.initiatorType,R=c.duration;if(f&&R&&Ix(_)){for(_=0,R=c.responseEnd,r+=1;r<a.length;r++){var H=a[r],ae=H.startTime;if(ae>R)break;var ge=H.transferSize,Ee=H.initiatorType;ge&&Ix(Ee)&&(H=H.responseEnd,_+=ge*(H<R?1:(R-ae)/(H-ae)))}if(--r,n+=8*(f+_)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Qd=null,Jd=null;function ol(e){return e.nodeType===9?e:e.ownerDocument}function Bx(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Fx(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Hx(e,n,a,r){return a=ol(a).createElement(e),a[A]=r,a[q]=n,zn(a,e,n),Tt(a),a}function $d(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var eh=null;function Mb(){var e=window.event;return e&&e.type==="popstate"?e===eh?!1:(eh=e,!0):(eh=null,!1)}var th=typeof setTimeout=="function"?setTimeout:void 0,Eb=typeof clearTimeout=="function"?clearTimeout:void 0,Gx=typeof Promise=="function"?Promise:void 0,Vx=typeof requestAnimationFrame=="function"?requestAnimationFrame:th,Tb=typeof queueMicrotask=="function"?queueMicrotask:typeof Gx<"u"?function(e){return Gx.resolve(null).then(e).catch(Ab)}:th;function Ab(e){setTimeout(function(){throw e})}function fs(e){return e==="head"}function kx(e,n){var a=n,r=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(c),jr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")ch(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,ch(a);for(var f=a.firstChild;f;){var _=f.nextSibling,R=f.nodeName;f[Be]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&ch(e.ownerDocument.body);a=c}while(a);jr(n)}function Xx(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function jx(e,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,e.style.viewTransitionName=n,a!=null&&(e.style.viewTransitionClass=a),a=getComputedStyle(e),a.display==="inline"){if(n=e.getClientRects(),n.length===1)var r=1;else for(var c=r=0;c<n.length;c++){var f=n[c];0<f.width&&0<f.height&&r++}r===1&&(e=e.style,e.display=n.length===1?"inline-block":"block",e.marginTop="-"+a.paddingTop,e.marginBottom="-"+a.paddingBottom)}}function qx(e,n){e=e.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;e.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,e.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),e.display==="inline-block"&&(n==null?e.display=e.margin="":(a=n.display,e.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?e.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],e.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],e.marginBottom=n==null||typeof n=="boolean"?"":n)))}function wb(e,n,a){return a=a.ownerDocument.defaultView,{rect:e,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=a.innerHeight&&e.left<=a.innerWidth}}function nh(e){var n=e.getBoundingClientRect(),a=getComputedStyle(e);return wb(n,a,e)}function Rb(e){return e.documentElement.clientHeight}function Cb(e){this.addEventListener("load",e),this.addEventListener("error",e)}function Nb(e,n,a,r,c,f,_,R,H){var ae=n.nodeType===9?n:n.ownerDocument;try{var ge=ae.startViewTransition({update:function(){var ee=ae.defaultView,me=ee.navigation&&ee.navigation.transition,Fe=ae.fonts.status;r();var tt=[];if(Fe==="loaded"&&(Rb(ae),ae.fonts.status==="loading"&&tt.push(ae.fonts.ready)),Fe=tt.length,e!==null)for(var _t=e.suspenseyImages,ie=0,Y=0;Y<_t.length;Y++){var ue=_t[Y];if(!ue.complete){var Me=ue.getBoundingClientRect();if(0<Me.bottom&&0<Me.right&&Me.top<ee.innerHeight&&Me.left<ee.innerWidth){if(ie+=hv(ue),ie>Jc){tt.length=Fe;break}ue=new Promise(Cb.bind(ue)),tt.push(ue)}}}if(0<tt.length)return ee=Promise.race([Promise.all(tt),new Promise(function(Qe){return setTimeout(Qe,500)})]).then(c,c),(me?Promise.allSettled([me.finished,ee]):ee).then(f,f);if(c(),me)return me.finished.then(f,f);f()},types:a});ae.__reactViewTransition=ge;var Ee=[];return ge.ready.then(function(){for(var ee=ae.documentElement.getAnimations({subtree:!0}),me=0;me<ee.length;me++){var Fe=ee[me],tt=Fe.effect,_t=tt.pseudoElement;if(_t!=null&&_t.startsWith("::view-transition")){Ee.push(Fe),Fe=tt.getKeyframes();for(var ie=_t=void 0,Y=!0,ue=0;ue<Fe.length;ue++){var Me=Fe[ue],Qe=Me.width;if(_t===void 0)_t=Qe;else if(_t!==Qe){Y=!1;break}if(Qe=Me.height,ie===void 0)ie=Qe;else if(ie!==Qe){Y=!1;break}delete Me.width,delete Me.height,Me.transform==="none"&&delete Me.transform}Y&&_t!==void 0&&ie!==void 0&&(tt.setKeyframes(Fe),Y=getComputedStyle(tt.target,tt.pseudoElement),Y.width!==_t||Y.height!==ie)&&(Y=Fe[0],Y.width=_t,Y.height=ie,Y=Fe[Fe.length-1],Y.width=_t,Y.height=ie,tt.setKeyframes(Fe))}}_()},function(ee){ae.__reactViewTransition===ge&&(ae.__reactViewTransition=null);try{if(typeof ee=="object"&&ee!==null)switch(ee.name){case"InvalidStateError":(ee.message==="View transition was skipped because document visibility state is hidden."||ee.message==="Skipping view transition because document visibility state has become hidden."||ee.message==="Skipping view transition because viewport size changed."||ee.message==="Transition was aborted because of invalid state")&&(ee=null)}ee!==null&&H(ee)}finally{r(),c(),_()}}),ge.finished.finally(function(){for(var ee=0;ee<Ee.length;ee++)Ee[ee].cancel();ae.__reactViewTransition===ge&&(ae.__reactViewTransition=null),R()}),ge}catch{return r(),c(),_(),null}}function qs(e,n){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+n+")"}qs.prototype.animate=function(e,n){return n=typeof n=="number"?{duration:n}:F({},n),n.pseudoElement=this._selector,this._scope.animate(e,n)},qs.prototype.getAnimations=function(){for(var e=this._scope,n=this._selector,a=e.getAnimations({subtree:!0}),r=[],c=0;c<a.length;c++){var f=a[c].effect;f!==null&&f.target===e&&f.pseudoElement===n&&r.push(a[c])}return r},qs.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Wx(e){return{name:e,group:new qs("group",e),imagePair:new qs("image-pair",e),old:new qs("old",e),new:new qs("new",e)}}function pi(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}pi.prototype.addEventListener=function(e,n,a){var r=null,c=null;if(!(a!=null&&typeof a!="boolean"&&(r=a.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var f=this._eventListeners;if(Zx(f,e,n,a)===-1){var _=this,R=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(R=function(H){_.removeEventListener(e,n,a),typeof n=="function"?n.call(this,H):n.handleEvent(H)}),r!==null&&(c=_.removeEventListener.bind(_,e,n,a),r.addEventListener("abort",c,{once:!0}),c=r.removeEventListener.bind(r,"abort",c)),r=Fr(a),f.push({type:e,listener:n,optionsOrUseCapture:a,attachedListener:R,cleanup:c}),x(this._fragmentFiber.child,!1,Db,e,R,r)}this._eventListeners=f}};function Db(e,n,a,r){return y(e).addEventListener(n,a,r),!1}pi.prototype.removeEventListener=function(e,n,a){var r=this._eventListeners;if(r!==null&&(n=Zx(r,e,n,a),n!==-1)){var c=r[n];a=c.attachedListener;var f=c.cleanup;c=Fr(c.optionsOrUseCapture),x(this._fragmentFiber.child,!1,Lb,e,a,c),r.splice(n,1),f!==null&&f()}};function Lb(e,n,a,r){return y(e).removeEventListener(n,a,r),!1}function Fr(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Yx(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function Zx(e,n,a,r){if(e.length===0)return-1;r=Yx(r);for(var c=0;c<e.length;c++){var f=e[c];if(f.type===n&&f.listener===a&&Yx(f.optionsOrUseCapture)===r)return c}return-1}pi.prototype.dispatchEvent=function(e){var n=v(this._fragmentFiber);if(n===null)return!0;n=y(n);var a=this._eventListeners;if(a!==null&&0<a.length||!e.bubbles){var r=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var c=0;c<a.length;c++){var f=a[c];r.addEventListener(f.type,f.attachedListener,Fr(f.optionsOrUseCapture))}if(n.appendChild(r),e=r.dispatchEvent(e),a)for(c=0;c<a.length;c++)f=a[c],r.removeEventListener(f.type,f.attachedListener,Fr(f.optionsOrUseCapture));return n.removeChild(r),e}return n.dispatchEvent(e)},pi.prototype.focus=function(e){x(this._fragmentFiber.child,!0,Kx,e,void 0,void 0)};function Kx(e,n){return e.tag===6?!1:(e=y(e),Xb(e,n))}pi.prototype.focusLast=function(e){var n=[];x(this._fragmentFiber.child,!0,ih,n,void 0,void 0);for(var a=n.length-1;0<=a&&!Kx(n[a],e);a--);};function ih(e,n){return n.push(e),!1}pi.prototype.blur=function(){var e=v(this._fragmentFiber);e!==null&&(e=y(e),e=ol(e).activeElement,e!==null&&x(this._fragmentFiber.child,!1,Ub,e,void 0,void 0))};function Ub(e,n){return e.tag===6?!1:(e=y(e),e===n||e.contains(n)?(n.blur(),!0):!1)}pi.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),x(this._fragmentFiber.child,!1,Ob,e,void 0,void 0)};function Ob(e,n){return e.tag===6||(e=y(e),n.observe(e)),!1}pi.prototype.unobserveUsing=function(e){var n=this._observers;if(n!==null&&n.has(e)){n.delete(e),x(this._fragmentFiber.child,!1,Pb,e,void 0,void 0);for(var a=n=0;a<Bi.length;a++){var r=Bi[a];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Bi[n++]=r}Bi.length=n}};function Pb(e,n){return e.tag===6||(e=y(e),n.unobserve(e)),!1}var Bi=[],ah=!1;function zb(e,n,a){Bi.push({fragmentInstance:e,observer:n,instance:a}),ah||(ah=!0,jb(function(){ah=!1;var r=Bi;Bi=[];for(var c=0;c<r.length;c++){var f=r[c];f.observer.unobserve(f.instance)}}))}pi.prototype.getClientRects=function(){var e=[];return x(this._fragmentFiber.child,!1,Ib,e,void 0,void 0),e};function Ib(e,n){if(e.tag===6){e=e.stateNode;var a=e.ownerDocument.createRange();a.selectNodeContents(e),n.push.apply(n,a.getClientRects())}else e=y(e),n.push.apply(n,e.getClientRects());return!1}pi.prototype.getRootNode=function(e){var n=v(this._fragmentFiber);return n===null?this:y(n).getRootNode(e)},pi.prototype.compareDocumentPosition=function(e){var n=v(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];x(this._fragmentFiber.child,!1,ih,a,void 0,void 0);var r=y(n);if(a.length===0){if(a=r,M(this._fragmentFiber)){e:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break e}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var c=r=a.compareDocumentPosition(e);return a===e?c=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=w(n)[1],a===null?c=Node.DOCUMENT_POSITION_PRECEDING:(e=y(a).compareDocumentPosition(e),c=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),c|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=y(a[0]),c=y(a[a.length-1]);var f=M(this._fragmentFiber)?n.parentElement:r;if(f==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=f.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,f=f.compareDocumentPosition(c)&Node.DOCUMENT_POSITION_CONTAINED_BY;var _=n.compareDocumentPosition(e),R=c.compareDocumentPosition(e),H=_&Node.DOCUMENT_POSITION_CONTAINED_BY||R&Node.DOCUMENT_POSITION_CONTAINED_BY;return R=r&&f&&_&Node.DOCUMENT_POSITION_FOLLOWING&&R&Node.DOCUMENT_POSITION_PRECEDING,n=r&&n===e||f&&c===e||H||R?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&n===e||!f&&c===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:_,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Bb(n,this._fragmentFiber,a[0],a[a.length-1],e)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Bb(e,n,a,r,c){var f=ut(c);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!f)e:{for(;f!==null;){if(f.tag===7&&(f===n||f.alternate===n)){a=!0;break e}f=f.return}a=!1}return a}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(f===null)return f=c.ownerDocument,c===f||c===f.documentElement||c===f.body;e:{for(f=n,n=v(n);f!==null;){if(!(f.tag!==5&&f.tag!==3&&f.tag!==27||f!==n&&f.alternate!==n)){f=!0;break e}f=f.return}f=!1}return f}return e&Node.DOCUMENT_POSITION_PRECEDING?((n=!!f)&&!(n=f===a)&&(n=U(a,f,P),n===null?n=!1:(x(n,!0,k,f,a),f=S,S=null,n=f!==null)),n):e&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!f)&&!(n=f===r)&&(n=U(r,f,P),n===null?n=!1:(x(n,!0,C,f,r),f=S,z=S=null,n=f!==null)),n):!1}function Qx(e,n){var a=e.ownerDocument.createRange();a.selectNodeContents(e),e=a.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,n?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}pi.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(s(566));var n=[];x(this._fragmentFiber.child,!1,ih,n,void 0,void 0);var a=e!==!1;if(n.length===0){var r=w(this._fragmentFiber);if(r=a?r[1]||r[0]||v(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=y(r),Qx(e,a);return}if(r=y(r),r.nodeType!==9){if(r.nodeType===11){a="host"in r?r.host:null,a!==null&&a.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=a?n.length-1:0;r!==(a?-1:n.length);){var c=n[r];c.tag===6?(c=y(c),Qx(c,a)):y(c).scrollIntoView(e),r+=a?-1:1}};function Fb(e,n){return e=y(e),Jx(e,n),!1}function Jx(e,n){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(n)}function $x(e,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r];e.addEventListener(c.type,c.attachedListener,Fr(c.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){for(var _=0,R=0;R<Bi.length;R++){var H=Bi[R];(H.fragmentInstance!==n||H.observer!==f||H.instance!==e)&&(Bi[_++]=H)}Bi.length=_,f.observe(e)}),Jx(e,n))}function Hb(e,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r];e.removeEventListener(c.type,c.attachedListener,Fr(c.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){typeof f.rootMargin=="string"?zb(n,f,e):f.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(n))}function sh(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":sh(a),et(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Gb(e,n,a,r){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Be])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Ri(e.nextSibling),e===null)break}return null}function Vb(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ri(e.nextSibling),e===null))return null;return e}function ev(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ri(e.nextSibling),e===null))return null;return e}function rh(e){return e.data==="$?"||e.data==="$~"}function oh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function kb(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function Ri(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var lh=null;function tv(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Ri(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function nv(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Xb(e,n){function a(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener("focus",a,!0),(e.focus||HTMLElement.prototype.focus).call(e,n)}finally{e.ownerDocument.removeEventListener("focus",a,!0)}return r}function jb(e){Vx(function(){Vx(function(n){return e(n)})})}function iv(e,n,a){switch(n=ol(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function av(e,n,a){for(var r in a){var c=a[r];a.hasOwnProperty(r)&&c!=null&&en(e,n,r,null,Sb,c)}a.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===Zi&&(e.onclick=null),et(e)}function ch(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);et(e)}var Ci=new Map,sv=new Set;function ll(e){if(typeof e.getRootNode=="function"){var n=e.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return e.nodeType===9?e:e.ownerDocument}var La=Ae.d;Ae.d={f:qb,r:Wb,D:Yb,C:Zb,L:Kb,m:Qb,X:$b,S:Jb,M:eM};function qb(){var e=La.f(),n=kc();return e||n}function Wb(e){var n=mt(e);n!==null&&n.tag===5&&n.type==="form"?og(n):La.r(e)}var Hr=typeof document>"u"?null:document;function rv(e,n,a){var r=Hr;if(r&&typeof n=="string"&&n){var c=yi(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),sv.has(c)||(sv.add(c),e={rel:e,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),zn(n,"link",e),Tt(n),r.head.appendChild(n)))}}function Yb(e){La.D(e),rv("dns-prefetch",e,null)}function Zb(e,n){La.C(e,n),rv("preconnect",e,n)}function Kb(e,n,a){La.L(e,n,a);var r=Hr;if(r&&e&&n){var c='link[rel="preload"][as="'+yi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+yi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+yi(a.imageSizes)+'"]')):c+='[href="'+yi(e)+'"]';var f=c;switch(n){case"style":f=Gr(e);break;case"script":f=Vr(e)}if(!(Ci.has(f)||(e=F({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Ci.set(f,e),r.querySelector(c)!==null||n==="style"&&r.querySelector(cl(f))||n==="script"&&r.querySelector(ul(f))))){var _=r.createElement("link");zn(_,"link",e),n==="style"&&(_[Je]=!0,_.onload=_.onerror=function(){nn(_)}),Tt(_),r.head.appendChild(_)}}}function Qb(e,n){La.m(e,n);var a=Hr;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+yi(r)+'"][href="'+yi(e)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Vr(e)}if(!Ci.has(f)&&(e=F({rel:"modulepreload",href:e},n),Ci.set(f,e),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ul(f)))return}r=a.createElement("link"),zn(r,"link",e),Tt(r),a.head.appendChild(r)}}}function Jb(e,n,a){La.S(e,n,a);var r=Hr;if(r&&e){var c=Rt(r).hoistableStyles,f=Gr(e);n=n||"default";var _=c.get(f);if(!_){var R={loading:0,preload:null};if(_=r.querySelector(cl(f)))R.loading=5;else{e=F({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Ci.get(f))&&uh(e,a);var H=_=r.createElement("link");Tt(H),zn(H,"link",e),H._p=new Promise(function(ae,ge){H.onload=ae,H.onerror=ge}),H.addEventListener("load",function(){R.loading|=1}),H.addEventListener("error",function(){R.loading|=2}),R.loading|=4,Kc(_,n,r)}_={type:"stylesheet",instance:_,count:1,state:R},c.set(f,_)}}}function $b(e,n){La.X(e,n);var a=Hr;if(a&&e){var r=Rt(a).hoistableScripts,c=Vr(e),f=r.get(c);f||(f=a.querySelector(ul(c)),f||(e=F({src:e,async:!0},n),(n=Ci.get(c))&&fh(e,n),f=a.createElement("script"),Tt(f),zn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function eM(e,n){La.M(e,n);var a=Hr;if(a&&e){var r=Rt(a).hoistableScripts,c=Vr(e),f=r.get(c);f||(f=a.querySelector(ul(c)),f||(e=F({src:e,async:!0,type:"module"},n),(n=Ci.get(c))&&fh(e,n),f=a.createElement("script"),Tt(f),zn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function ov(e,n,a,r){var c=(c=yt.current)?ll(c):null;if(!c)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Gr(a.href),n=Rt(c).hoistableStyles,r=n.get(a),r||(r={type:"style",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Gr(a.href);var f=Rt(c).hoistableStyles,_=f.get(e);if(_||(c=c.ownerDocument||c,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,_),(f=c.querySelector(cl(e)))?f._p||(_.instance=f,_.state.loading=5):(f=Ci.get(e),f||(f={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ci.set(e,f)),tM(c,e,f,_.state))),n&&r===null)throw Error(s(528,""));return _}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Vr(a),n=Rt(c).hoistableScripts,r=n.get(a),r||(r={type:"script",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Gr(e){return'href="'+yi(e)+'"'}function cl(e){return'link[rel="stylesheet"]['+e+"]"}function lv(e){return F({},e,{"data-precedence":e.precedence,precedence:null})}function tM(e,n,a,r){if(n=e.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Je]!==!0){r.loading=1;return}}else n=e.createElement("link"),n[Je]=!0,n.onload=n.onerror=nn.bind(null,n),zn(n,"link",a),Tt(n),e.head.appendChild(n);r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2})}function Vr(e){return'[src="'+yi(e)+'"]'}function ul(e){return"script[async]"+e}function cv(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+yi(a.href)+'"]');if(r)return n.instance=r,Tt(r),r;var c=F({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),Tt(r),zn(r,"style",c),Kc(r,a.precedence,e),n.instance=r;case"stylesheet":c=Gr(a.href);var f=e.querySelector(cl(c));if(f)return n.state.loading|=4,n.instance=f,Tt(f),f;r=lv(a),(c=Ci.get(c))&&uh(r,c),f=(e.ownerDocument||e).createElement("link"),Tt(f);var _=f;return _._p=new Promise(function(R,H){_.onload=R,_.onerror=H}),zn(f,"link",r),n.state.loading|=4,Kc(f,a.precedence,e),n.instance=f;case"script":return f=Vr(a.src),(c=e.querySelector(ul(f)))?(n.instance=c,Tt(c),c):(r=a,(c=Ci.get(f))&&(r=F({},a),fh(r,c)),e=e.ownerDocument||e,c=e.createElement("script"),Tt(c),zn(c,"link",r),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Kc(r,a.precedence,e));return n.instance}function Kc(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,_=0;_<r.length;_++){var R=r[_];if(R.dataset.precedence===n)f=R;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function uh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function fh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Qc=null;function uv(e,n,a){if(Qc===null){var r=new Map,c=Qc=new Map;c.set(a,r)}else c=Qc,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[Be]||f[A]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=e+_;var R=r.get(_);R?R.push(f):r.set(_,[f])}}return r}function dh(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function nM(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function fv(e,n){return e==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function dv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function hv(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function pv(e,n){typeof n.decode=="function"&&(e.imgCount++,n.complete||(e.imgBytes+=hv(n),e.suspenseyImages.push(n)),e=sM.bind(e),n.decode().then(e,e))}function iM(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=Gr(r.href),f=n.querySelector(cl(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=fl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,Tt(f);return}f=n.ownerDocument||n,r=lv(r),(c=Ci.get(c))&&uh(r,c),f=f.createElement("link"),Tt(f);var _=f;_._p=new Promise(function(R,H){_.onload=R,_.onerror=H}),zn(f,"link",r),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=fl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Jc=0;function aM(e,n){return e.stylesheets&&e.count===0&&eu(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&eu(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Jc===0&&(Jc=62500*bb());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&eu(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Jc?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function mv(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)eu(e,e.stylesheets);else if(e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}}}function fl(){this.count--,mv(this)}function sM(){this.imgCount--,mv(this)}var $c=null;function eu(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,$c=new Map,n.forEach(rM,e),$c=null,fl.call(e))}function rM(e,n){if(!(n.state.loading&4)){var a=$c.get(e);if(a)var r=a.get(null);else{a=new Map,$c.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var _=c[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),r=_)}r&&a.set(null,r)}c=n.instance,_=c.getAttribute("data-precedence"),f=a.get(_)||r,f===r&&a.set(null,c),a.set(_,c),this.count++,r=fl.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var kr={$$typeof:ne,Provider:null,Consumer:null,_currentValue:De,_currentValue2:De,_threadCount:0};function oM(e,n,a,r,c,f,_,R,H){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=rr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rr(0),this.hiddenUpdates=rr(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.transitionTypes=null,this.incompleteTransitions=new Map}function gv(e,n,a,r,c,f,_,R,H,ae,ge,Ee){return e=new oM(e,n,a,_,H,ae,ge,Ee,R),n=1,f===!0&&(n|=24),f=Jn(3,null,null,n),e.current=f,f.stateNode=e,n=wf(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Df(f),e}function xv(e){return e?(e=mr,e):mr}function vv(e,n,a,r,c,f){c=xv(c),r.context===null?r.context=c:r.pendingContext=c,r=$a(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=es(e,r,n),a!==null&&(ni(a,e,n),Vo(a,e,n))}function _v(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function hh(e,n){_v(e,n),(e=e.alternate)&&_v(e,n)}function Sv(e){if(e.tag===13||e.tag===31){var n=Cs(e,67108864);n!==null&&ni(n,e,67108864),hh(e,67108864)}}function yv(e){if(e.tag===13||e.tag===31){var n=hi();n=To(n);var a=Cs(e,n);a!==null&&ni(a,e,n),hh(e,n)}}var Xr=!0;function lM(e,n,a,r){var c=le.T;le.T=null;var f=Ae.p;try{Ae.p=2,ph(e,n,a,r)}finally{Ae.p=f,le.T=c}}function cM(e,n,a,r){var c=le.T;le.T=null;var f=Ae.p;try{Ae.p=8,ph(e,n,a,r)}finally{Ae.p=f,le.T=c}}function ph(e,n,a,r){if(Xr){var c=mh(r);if(c===null)Zd(e,n,r,tu,a),Mv(e,r);else if(fM(c,e,n,a,r))r.stopPropagation();else if(Mv(e,r),n&4&&-1<uM.indexOf(e)){for(;c!==null;){var f=mt(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=va(f.pendingLanes);if(_!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;_;){var H=1<<31-pt(_);R.entanglements[1]|=H,_&=~H}sa(f),(qt&6)===0&&(Hc=We()+500,al(0))}}break;case 31:case 13:R=Cs(f,2),R!==null&&ni(R,f,2),kc(),hh(f,2)}if(f=mh(r),f===null&&Zd(e,n,r,tu,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else Zd(e,n,r,null,a)}}function mh(e){return e=$u(e),gh(e)}var tu=null;function gh(e){if(tu=null,e=ut(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return tu=e,null}function bv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ot()){case ht:return 2;case J:return 8;case Pe:case we:return 32;case Ie:return 268435456;default:return 32}default:return 32}}var xh=!1,ds=null,hs=null,ps=null,dl=new Map,hl=new Map,ms=[],uM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Mv(e,n){switch(e){case"focusin":case"focusout":ds=null;break;case"dragenter":case"dragleave":hs=null;break;case"mouseover":case"mouseout":ps=null;break;case"pointerover":case"pointerout":dl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":hl.delete(n.pointerId)}}function pl(e,n,a,r,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=mt(n),n!==null&&Sv(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function fM(e,n,a,r,c){switch(n){case"focusin":return ds=pl(ds,e,n,a,r,c),!0;case"dragenter":return hs=pl(hs,e,n,a,r,c),!0;case"mouseover":return ps=pl(ps,e,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return dl.set(f,pl(dl.get(f)||null,e,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,hl.set(f,pl(hl.get(f)||null,e,n,a,r,c)),!0}return!1}function Ev(e){var n=ut(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,Gl(e.priority,function(){yv(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,Gl(e.priority,function(){yv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function nu(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=mh(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);Ju=r,a.target.dispatchEvent(r),Ju=null}else return n=mt(a),n!==null&&Sv(n),e.blockedOn=a,!1;n.shift()}return!0}function Tv(e,n,a){nu(e)&&a.delete(n)}function dM(){xh=!1,ds!==null&&nu(ds)&&(ds=null),hs!==null&&nu(hs)&&(hs=null),ps!==null&&nu(ps)&&(ps=null),dl.forEach(Tv),hl.forEach(Tv)}function iu(e,n){e.blockedOn===n&&(e.blockedOn=null,xh||(xh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,dM)))}var au=null;function Av(e){au!==e&&(au=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){au===e&&(au=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],c=e[n+2];if(typeof r!="function"){if(gh(r||a)===null)continue;break}var f=mt(a);f!==null&&(e.splice(n,3),n-=3,Jf(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function jr(e){function n(H){return iu(H,e)}ds!==null&&iu(ds,e),hs!==null&&iu(hs,e),ps!==null&&iu(ps,e),dl.forEach(n),hl.forEach(n);for(var a=0;a<ms.length;a++){var r=ms[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<ms.length&&(a=ms[0],a.blockedOn===null);)Ev(a),a.blockedOn===null&&ms.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],_=c[q]||null;if(typeof f=="function")_||Av(a);else if(_){var R=null;if(f&&f.hasAttribute("formAction")){if(c=f,_=f[q]||null)R=_.formAction;else if(gh(c)!==null)continue}else R=_.action;typeof R=="function"?a[r+1]=R:(a.splice(r,3),r-=3),Av(a)}}}function wv(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return c=_})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function vh(e){this._internalRoot=e}su.prototype.render=vh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=hi();vv(a,r,e,n,null,null)},su.prototype.unmount=vh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;vv(e.current,2,null,e,null,null),kc(),n[xe]=null}};function su(e){this._internalRoot=e}su.prototype.unstable_scheduleHydration=function(e){if(e){var n=Hl();e={blockedOn:null,target:e,priority:n};for(var a=0;a<ms.length&&n!==0&&n<ms[a].priority;a++);ms.splice(a,0,e),a===0&&Ev(e)}};var Rv=t.version;if(Rv!=="19.3.0")throw Error(s(527,Rv,"19.3.0"));Ae.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=m(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var hM={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:le,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ru=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ru.isDisabled&&ru.supportsFiber)try{it=ru.inject(hM),je=ru}catch{}}return gl.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",c=xg,f=vg,_=_g;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=gv(e,1,!1,null,null,a,r,null,c,f,_,wv),e[xe]=n.current,Yd(e),new vh(n)},gl.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,c="",f=xg,_=vg,R=_g,H=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=gv(e,1,!0,n,a??null,r,c,H,f,_,R,wv),n.context=xv(null),a=n.current,r=hi(),r=To(r),c=$a(r),c.callback=null,es(a,c,r),a=r,n.current.lanes=a,Wi(n,a),sa(n),e[xe]=n.current,Yd(e),new su(n)},gl.version="19.3.0",gl}var Bv;function MM(){if(Bv)return yh.exports;Bv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),yh.exports=bM(),yh.exports}var EM=MM();const co={forward:"ArrowUp",backward:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",jump:"Space",action:"ControlLeft"},TM={forward:"KeyW",backward:"KeyS",left:"KeyA",right:"KeyD",jump:"Space",action:"KeyF"},Fv=[{id:"facil",name:"Selva Serena",subtitle:"Fácil",description:"Barriles más lentos, 5 vidas y ritmo relajado para explorar.",barrelSpeed:.8,throwInterval:4.5,playerLives:5,scoreMultiplier:1,color:"#10b981"},{id:"normal",name:"Desafío Clásico",subtitle:"Normal",description:"La experiencia auténtica arcade. 3 vidas, velocidad estándar.",barrelSpeed:1.2,throwInterval:3.2,playerLives:3,scoreMultiplier:1.5,color:"#f59e0b"},{id:"dificil",name:"Furia del Simio",subtitle:"Difícil",description:"Barriles veloces, rebotes impredecibles y barriles de fuego.",barrelSpeed:1.7,throwInterval:2.2,playerLives:2,scoreMultiplier:2.5,color:"#ef4444"},{id:"caos",name:"Caos Salvaje",subtitle:"Extremo",description:"Sobrecarga de barriles ígneos, 1 sola vida y máxima velocidad.",barrelSpeed:2.2,throwInterval:1.5,playerLives:1,scoreMultiplier:4,color:"#a855f7"}],ap=[{id:"skin_classic",name:"Mono Clásico Azul/Rojo",category:"skin",price:0,description:"El clásico overol del carpintero intrépido.",previewColor:"#dc2626",unlockedByDefault:!0},{id:"skin_safari",name:"Explorador Selvático",category:"skin",price:150,description:"Traje caqui con cinturón de herramientas para expedición.",previewColor:"#84cc16"},{id:"skin_cyber",name:"Voxel Cyber Runner",category:"skin",price:350,description:"Armadura voxel con luces de neón cian y magenta.",previewColor:"#06b6d4"},{id:"skin_golden",name:"Rey de las Alturas",category:"skin",price:600,description:"Overol bañado en oro puro de 24 kilates.",previewColor:"#fbbf24"},{id:"hat_cap",name:"Gorra Roja Voxel",category:"hat",price:0,description:"Gorra retro con visera frontal.",previewColor:"#ef4444",unlockedByDefault:!0},{id:"hat_miner",name:"Casco de Minero con Linterna",category:"hat",price:120,description:"Protección para la cabeza con potente foco frontal.",previewColor:"#eab308"},{id:"hat_bandana",name:"Bandana de Supervivencia",category:"hat",price:200,description:"Cinta roja que da +100 a la determinación.",previewColor:"#f43f5e"},{id:"hat_crown",name:"Corona Imperial Voxel",category:"hat",price:500,description:"Corona enjoyada digna del que escala la cima.",previewColor:"#eab308"},{id:"hammer_classic",name:"Mazo de Madera Rústica",category:"hammer",price:0,description:"Mazo clásico de carpintero para pulverizar barriles.",previewColor:"#78350f",unlockedByDefault:!0},{id:"hammer_steel",name:"Mazo de Acero Voxel",category:"hammer",price:180,description:"Aleación reforzada que destruye barriles con un solo golpe.",previewColor:"#94a3b8"},{id:"hammer_banana",name:"Mazo de Banana Sagrada",category:"hammer",price:300,description:"Poder frutal concentrado que suelta destellos.",previewColor:"#facc15"},{id:"hammer_laser",name:"Mazo de Plasma Electrificado",category:"hammer",price:550,description:"Energía pura que desintegra los barriles con chispas 8-bit.",previewColor:"#38bdf8"}],AM=[{id:"ach_first_jump",title:"¡Por los Aires!",description:"Salta por encima de tu primer barril con éxito.",icon:"ArrowUpCircle",unlocked:!1,rewardCoins:50},{id:"ach_barrel_smasher",title:"Demoledor Voxel",description:"Destruye 5 barriles usando el mazo de poder.",icon:"Hammer",unlocked:!1,rewardCoins:100},{id:"ach_climb_master",title:"Rey de las Escaleras",description:"Sube 3 pisos completos en menos de 45 segundos.",icon:"TrendingUp",unlocked:!1,rewardCoins:120},{id:"ach_level1_clear",title:"Desafío a las Alturas",description:"Supera el nivel 1 de vigas y llega hasta la cima del Simio.",icon:"Award",unlocked:!1,rewardCoins:200},{id:"ach_banana_hoarder",title:"Banquete Primate",description:"Recolecta 30 bananas/monedas doradas durante tus ascensos.",icon:"Coins",unlocked:!1,rewardCoins:150},{id:"ach_coop_play",title:"Dúo Dinámico",description:"Juega una partida en modo cooperativo local de 2 jugadores.",icon:"Users",unlocked:!1,rewardCoins:100},{id:"ach_hardcore",title:"Espíritu Salvaje",description:"Alcanza el piso superior en dificultad Furia o Caos.",icon:"Flame",unlocked:!1,rewardCoins:300},{id:"ach_fashion",title:"Estilo en las Alturas",description:"Equipa una skin y un sombrero personalizados.",icon:"Sparkles",unlocked:!1,rewardCoins:80}],wM=[{id:"1",playerName:"KongoKing_99",score:12450,level:4,difficulty:"caos",date:"2026-09-12",avatar:"🦍"},{id:"2",playerName:"VoxelMario_Retro",score:9800,level:3,difficulty:"dificil",date:"2026-09-13",avatar:"🔨"},{id:"3",playerName:"SelvaRunner_AR",score:7650,level:3,difficulty:"normal",date:"2026-09-11",avatar:"🌴"},{id:"4",playerName:"JumpPro_Pixel",score:5400,level:2,difficulty:"normal",date:"2026-09-14",avatar:"⭐"},{id:"5",playerName:"ArcadeMaster_84",score:4200,level:2,difficulty:"facil",date:"2026-09-10",avatar:"🕹️"}],W_="simio_salvaje_save_v1";function Th(){return{stats:{highScore:0,totalCoins:100,currentLevel:1,maxLevelUnlocked:1,totalBarrelsJumped:0,totalBarrelsSmashed:0,gamesPlayed:0,coopWins:0},customizationP1:{skinId:"skin_classic",hatId:"hat_cap",hammerId:"hammer_classic",colorTheme:"#dc2626"},customizationP2:{skinId:"skin_safari",hatId:"hat_bandana",hammerId:"hammer_steel",colorTheme:"#2563eb"},unlockedItems:["skin_classic","hat_cap","hammer_classic"],achievements:AM,leaderboard:wM,settings:{musicVolume:.7,sfxVolume:.8,foliageParticles:!0,volumetricRays:!0,touchControlsForced:void 0,keyBindings:co,filter8Bit:"8bit",renderResolution:"8bit_retro"}}}function RM(){var o,t,i;try{const s=localStorage.getItem(W_);if(!s)return Th();const l=JSON.parse(s),u=Th();return{...u,...l,stats:{...u.stats,...l.stats||{}},customizationP1:{...u.customizationP1,...l.customizationP1||{}},customizationP2:{...u.customizationP2,...l.customizationP2||{}},settings:{...u.settings,...l.settings||{},filter8Bit:((o=l.settings)==null?void 0:o.filter8Bit)||"8bit",renderResolution:((t=l.settings)==null?void 0:t.renderResolution)||"8bit_retro",keyBindings:{...u.settings.keyBindings,...((i=l.settings)==null?void 0:i.keyBindings)||{}}},unlockedItems:Array.from(new Set([...u.unlockedItems,...l.unlockedItems||[]])),achievements:u.achievements.map(d=>{var p;const h=(p=l.achievements)==null?void 0:p.find(m=>m.id===d.id);return h?{...d,...h}:d}),leaderboard:l.leaderboard&&l.leaderboard.length>0?l.leaderboard:u.leaderboard}}catch{return Th()}}function CM(o){try{localStorage.setItem(W_,JSON.stringify(o))}catch(t){console.warn("Auto-save locally error:",t)}}function NM(o){if(typeof o=="boolean")return o;if(typeof window>"u")return!1;const t=typeof navigator<"u"&&(navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0),i="ontouchstart"in window,s=window.matchMedia&&window.matchMedia("(pointer: coarse)").matches,l=window.innerWidth<=1024;return(t||i||s)&&l}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jp="186",DM=0,Hv=1,LM=2,UM=0,Nu=1,OM=2,Tl=3,er=0,ai=1,ca=2,Fa=0,Rl=1,sp=2,Gv=3,Vv=4,PM=5,ro=100,zM=101,IM=102,BM=103,FM=104,HM=200,GM=201,VM=202,kM=203,Y_=204,Z_=205,XM=206,jM=207,qM=208,WM=209,YM=210,ZM=211,KM=212,QM=213,JM=214,rp=0,op=1,lp=2,Dl=3,cp=4,up=5,fp=6,dp=7,K_=0,$M=1,e1=2,da=0,Q_=1,J_=2,$_=3,eS=4,tS=5,nS=6,iS=7,aS=300,tr=301,po=302,Ah=303,wh=304,Vu=306,hp=1e3,Ba=1001,pp=1002,Bn=1003,t1=1004,ou=1005,Vn=1006,Rh=1007,Js=1008,vi=1009,sS=1010,rS=1011,Ll=1012,$p=1013,pa=1014,ki=1015,ma=1016,em=1017,tm=1018,Ul=1020,oS=35902,lS=35899,cS=1021,uS=1022,Xi=1023,Ga=1026,$s=1027,nm=1028,im=1029,nr=1030,am=1031,sm=1033,Du=33776,Lu=33777,Uu=33778,Ou=33779,mp=35840,gp=35841,xp=35842,vp=35843,_p=36196,Sp=37492,yp=37496,bp=37488,Mp=37489,zu=37490,Ep=37491,Tp=37808,Ap=37809,wp=37810,Rp=37811,Cp=37812,Np=37813,Dp=37814,Lp=37815,Up=37816,Op=37817,Pp=37818,zp=37819,Ip=37820,Bp=37821,Fp=36492,Hp=36494,Gp=36495,Vp=36283,kp=36284,Iu=36285,Xp=36286,n1=3200,jp=0,i1=1,Ms="",Di="srgb",Bu="srgb-linear",Fu="linear",tn="srgb",Ch=7680,a1=519,s1=512,r1=513,o1=514,rm=515,l1=516,c1=517,om=518,u1=519,f1=35044,kv="300 es",fa=2e3,Ol=2001;function d1(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Hu(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function h1(){const o=Hu("canvas");return o.style.display="block",o}const Xv={};function jv(...o){const t="THREE."+o.shift();console.log(t,...o)}function fS(o){const t=o[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function ft(...o){o=fS(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...o)}}function Xt(...o){o=fS(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...o)}}function uo(...o){const t=o.join(" ");t in Xv||(Xv[t]=!0,ft(...o))}function p1(o,t,i){return new Promise(function(s,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}const m1={[rp]:op,[lp]:fp,[cp]:dp,[Dl]:up,[op]:rp,[fp]:lp,[dp]:cp,[up]:Dl};class ir{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,t);t.target=null}}}const Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let qv=1234567;const Cl=Math.PI/180,mo=180/Math.PI;function vo(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Hn[o&255]+Hn[o>>8&255]+Hn[o>>16&255]+Hn[o>>24&255]+"-"+Hn[t&255]+Hn[t>>8&255]+"-"+Hn[t>>16&15|64]+Hn[t>>24&255]+"-"+Hn[i&63|128]+Hn[i>>8&255]+"-"+Hn[i>>16&255]+Hn[i>>24&255]+Hn[s&255]+Hn[s>>8&255]+Hn[s>>16&255]+Hn[s>>24&255]).toLowerCase()}function zt(o,t,i){return Math.max(t,Math.min(i,o))}function lm(o,t){return(o%t+t)%t}function g1(o,t,i,s,l){return s+(o-t)*(l-s)/(i-t)}function x1(o,t,i){return o!==t?(i-o)/(t-o):0}function Nl(o,t,i){return(1-i)*o+i*t}function v1(o,t,i,s){return Nl(o,t,1-Math.exp(-i*s))}function _1(o,t=1){return t-Math.abs(lm(o,t*2)-t)}function S1(o,t,i){return o<=t?0:o>=i?1:(o=(o-t)/(i-t),o*o*(3-2*o))}function y1(o,t,i){return o<=t?0:o>=i?1:(o=(o-t)/(i-t),o*o*o*(o*(o*6-15)+10))}function b1(o,t){return o+Math.floor(Math.random()*(t-o+1))}function M1(o,t){return o+Math.random()*(t-o)}function E1(o){return o*(.5-Math.random())}function T1(o){o!==void 0&&(qv=o);let t=qv+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function A1(o){return o*Cl}function w1(o){return o*mo}function R1(o){return o>0&&Number.isInteger(o)&&2**Math.round(Math.log2(o))===o}function C1(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function N1(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function D1(o,t,i,s,l){const u=Math.cos,d=Math.sin,h=u(i/2),p=d(i/2),m=u((t+s)/2),g=d((t+s)/2),x=u((t-s)/2),v=d((t-s)/2),M=u((s-t)/2),w=d((s-t)/2);switch(l){case"XYX":o.set(h*g,p*x,p*v,h*m);break;case"YZY":o.set(p*v,h*g,p*x,h*m);break;case"ZXZ":o.set(p*x,p*v,h*g,h*m);break;case"XZX":o.set(h*g,p*w,p*M,h*m);break;case"YXY":o.set(p*M,h*g,p*w,h*m);break;case"ZYZ":o.set(p*w,p*M,h*g,h*m);break;default:ft("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function oo(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:case Uint8ClampedArray:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Zn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Al={DEG2RAD:Cl,RAD2DEG:mo,generateUUID:vo,clamp:zt,euclideanModulo:lm,mapLinear:g1,inverseLerp:x1,lerp:Nl,damp:v1,pingpong:_1,smoothstep:S1,smootherstep:y1,randInt:b1,randFloat:M1,randFloatSpread:E1,seededRandom:T1,degToRad:A1,radToDeg:w1,isPowerOfTwo:R1,ceilPowerOfTwo:C1,floorPowerOfTwo:N1,setQuaternionFromProperEuler:D1,normalize:Zn,denormalize:oo},ym=class ym{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=zt(this.x,t.x,i.x),this.y=zt(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=zt(this.x,t,i),this.y=zt(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(zt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(zt(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-t.x,d=this.y-t.y;return this.x=u*s-d*l+t.x,this.y=u*l+d*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ym.prototype.isVector2=!0;let Ht=ym;class _o{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,u,d,h){let p=s[l+0],m=s[l+1],g=s[l+2],x=s[l+3],v=u[d+0],M=u[d+1],w=u[d+2],D=u[d+3];if(x!==D||p!==v||m!==M||g!==w){let y=p*v+m*M+g*w+x*D;y<0&&(v=-v,M=-M,w=-w,D=-D,y=-y);let S=1-h;if(y<.9995){const z=Math.acos(y),k=Math.sin(z);S=Math.sin(S*z)/k,h=Math.sin(h*z)/k,p=p*S+v*h,m=m*S+M*h,g=g*S+w*h,x=x*S+D*h}else{p=p*S+v*h,m=m*S+M*h,g=g*S+w*h,x=x*S+D*h;const z=1/Math.sqrt(p*p+m*m+g*g+x*x);p*=z,m*=z,g*=z,x*=z}}t[i]=p,t[i+1]=m,t[i+2]=g,t[i+3]=x}static multiplyQuaternionsFlat(t,i,s,l,u,d){const h=s[l],p=s[l+1],m=s[l+2],g=s[l+3],x=u[d],v=u[d+1],M=u[d+2],w=u[d+3];return t[i]=h*w+g*x+p*M-m*v,t[i+1]=p*w+g*v+m*x-h*M,t[i+2]=m*w+g*M+h*v-p*x,t[i+3]=g*w-h*x-p*v-m*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,u=t._z,d=t._order,h=Math.cos,p=Math.sin,m=h(s/2),g=h(l/2),x=h(u/2),v=p(s/2),M=p(l/2),w=p(u/2);switch(d){case"XYZ":this._x=v*g*x+m*M*w,this._y=m*M*x-v*g*w,this._z=m*g*w+v*M*x,this._w=m*g*x-v*M*w;break;case"YXZ":this._x=v*g*x+m*M*w,this._y=m*M*x-v*g*w,this._z=m*g*w-v*M*x,this._w=m*g*x+v*M*w;break;case"ZXY":this._x=v*g*x-m*M*w,this._y=m*M*x+v*g*w,this._z=m*g*w+v*M*x,this._w=m*g*x-v*M*w;break;case"ZYX":this._x=v*g*x-m*M*w,this._y=m*M*x+v*g*w,this._z=m*g*w-v*M*x,this._w=m*g*x+v*M*w;break;case"YZX":this._x=v*g*x+m*M*w,this._y=m*M*x+v*g*w,this._z=m*g*w-v*M*x,this._w=m*g*x-v*M*w;break;case"XZY":this._x=v*g*x-m*M*w,this._y=m*M*x-v*g*w,this._z=m*g*w+v*M*x,this._w=m*g*x+v*M*w;break;default:ft("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],u=i[8],d=i[1],h=i[5],p=i[9],m=i[2],g=i[6],x=i[10],v=s+h+x;if(v>0){const M=.5/Math.sqrt(v+1);this._w=.25/M,this._x=(g-p)*M,this._y=(u-m)*M,this._z=(d-l)*M}else if(s>h&&s>x){const M=2*Math.sqrt(1+s-h-x);this._w=(g-p)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(u+m)/M}else if(h>x){const M=2*Math.sqrt(1+h-s-x);this._w=(u-m)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(p+g)/M}else{const M=2*Math.sqrt(1+x-s-h);this._w=(d-l)/M,this._x=(u+m)/M,this._y=(p+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(zt(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,u=t._z,d=t._w,h=i._x,p=i._y,m=i._z,g=i._w;return this._x=s*g+d*h+l*m-u*p,this._y=l*g+d*p+u*h-s*m,this._z=u*g+d*m+s*p-l*h,this._w=d*g-s*h-l*p-u*m,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,u=t._z,d=t._w,h=this.dot(t);h<0&&(s=-s,l=-l,u=-u,d=-d,h=-h);let p=1-i;if(h<.9995){const m=Math.acos(h),g=Math.sin(m);p=Math.sin(p*m)/g,i=Math.sin(i*m)/g,this._x=this._x*p+s*i,this._y=this._y*p+l*i,this._z=this._z*p+u*i,this._w=this._w*p+d*i,this._onChangeCallback()}else this._x=this._x*p+s*i,this._y=this._y*p+l*i,this._z=this._z*p+u*i,this._w=this._w*p+d*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const bm=class bm{constructor(t=0,i=0,s=0){this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Wv.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Wv.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=t.elements,d=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*d,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,u=t.x,d=t.y,h=t.z,p=t.w,m=2*(d*l-h*s),g=2*(h*i-u*l),x=2*(u*s-d*i);return this.x=i+p*m+d*x-h*g,this.y=s+p*g+h*m-u*x,this.z=l+p*x+u*g-d*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=zt(this.x,t.x,i.x),this.y=zt(this.y,t.y,i.y),this.z=zt(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=zt(this.x,t,i),this.y=zt(this.y,t,i),this.z=zt(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(zt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,u=t.z,d=i.x,h=i.y,p=i.z;return this.x=l*p-u*h,this.y=u*d-s*p,this.z=s*h-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Nh.copy(this).projectOnVector(t),this.sub(Nh)}reflect(t){return this.sub(Nh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(zt(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};bm.prototype.isVector3=!0;let de=bm;const Nh=new de,Wv=new _o,Mm=class Mm{constructor(t,i,s,l,u,d,h,p,m){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,d,h,p,m)}set(t,i,s,l,u,d,h,p,m){const g=this.elements;return g[0]=t,g[1]=l,g[2]=h,g[3]=i,g[4]=u,g[5]=p,g[6]=s,g[7]=d,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,d=s[0],h=s[3],p=s[6],m=s[1],g=s[4],x=s[7],v=s[2],M=s[5],w=s[8],D=l[0],y=l[3],S=l[6],z=l[1],k=l[4],C=l[7],P=l[2],U=l[5],F=l[8];return u[0]=d*D+h*z+p*P,u[3]=d*y+h*k+p*U,u[6]=d*S+h*C+p*F,u[1]=m*D+g*z+x*P,u[4]=m*y+g*k+x*U,u[7]=m*S+g*C+x*F,u[2]=v*D+M*z+w*P,u[5]=v*y+M*k+w*U,u[8]=v*S+M*C+w*F,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],d=t[4],h=t[5],p=t[6],m=t[7],g=t[8];return i*d*g-i*h*m-s*u*g+s*h*p+l*u*m-l*d*p}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],d=t[4],h=t[5],p=t[6],m=t[7],g=t[8],x=g*d-h*m,v=h*p-g*u,M=m*u-d*p,w=i*x+s*v+l*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const D=1/w;return t[0]=x*D,t[1]=(l*m-g*s)*D,t[2]=(h*s-l*d)*D,t[3]=v*D,t[4]=(g*i-l*p)*D,t[5]=(l*u-h*i)*D,t[6]=M*D,t[7]=(s*p-m*i)*D,t[8]=(d*i-s*u)*D,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,u,d,h){const p=Math.cos(u),m=Math.sin(u);return this.set(s*p,s*m,-s*(p*d+m*h)+d+t,-l*m,l*p,-l*(-m*d+p*h)+h+i,0,0,1),this}scale(t,i){return uo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Dh.makeScale(t,i)),this}rotate(t){return uo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Dh.makeRotation(-t)),this}translate(t,i){return uo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Dh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Mm.prototype.isMatrix3=!0;let xt=Mm;const Dh=new xt,Yv=new xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zv=new xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function L1(){const o={enabled:!0,workingColorSpace:Bu,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===tn&&(l.r=Ha(l.r),l.g=Ha(l.g),l.b=Ha(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===tn&&(l.r=fo(l.r),l.g=fo(l.g),l.b=fo(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ms?Fu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return uo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return uo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Bu]:{primaries:t,whitePoint:s,transfer:Fu,toXYZ:Yv,fromXYZ:Zv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Di},outputColorSpaceConfig:{drawingBufferColorSpace:Di}},[Di]:{primaries:t,whitePoint:s,transfer:tn,toXYZ:Yv,fromXYZ:Zv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Di}}}),o}const Ft=L1();function Ha(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function fo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let qr;class U1{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{qr===void 0&&(qr=Hu("canvas")),qr.width=t.width,qr.height=t.height;const l=qr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=qr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Hu("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=Ha(u[d]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ha(i[s]/255)*255):i[s]=Ha(i[s]);return{data:i,width:t.width,height:t.height}}else return ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let O1=0;class cm{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:O1++}),this.uuid=vo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayWidth,i.displayHeight,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(Lh(l[d].image)):u.push(Lh(l[d]))}else u=Lh(l);s.url=u}return i||(t.images[this.uuid]=s),s}}function Lh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?U1.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(ft("Texture: Unable to serialize Texture."),{})}let P1=0;const Uh=new de;class Qn extends ir{constructor(t=Qn.DEFAULT_IMAGE,i=Qn.DEFAULT_MAPPING,s=Ba,l=Ba,u=Vn,d=Js,h=Xi,p=vi,m=Qn.DEFAULT_ANISOTROPY,g=Ms){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:P1++}),this.uuid=vo(),this.name="",this.source=new cm(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new Ht(0,0),this.repeat=new Ht(1,1),this.center=new Ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Uh).x}get height(){return this.source.getSize(Uh).y}get depth(){return this.source.getSize(Uh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){ft(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ft(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==aS)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case hp:t.x=t.x-Math.floor(t.x);break;case Ba:t.x=t.x<0?0:1;break;case pp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case hp:t.y=t.y-Math.floor(t.y);break;case Ba:t.y=t.y<0?0:1;break;case pp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Qn.DEFAULT_IMAGE=null;Qn.DEFAULT_MAPPING=aS;Qn.DEFAULT_ANISOTROPY=1;const Em=class Em{constructor(t=0,i=0,s=0,l=1){this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=this.w,d=t.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,u;const p=t.elements,m=p[0],g=p[4],x=p[8],v=p[1],M=p[5],w=p[9],D=p[2],y=p[6],S=p[10];if(Math.abs(g-v)<.01&&Math.abs(x-D)<.01&&Math.abs(w-y)<.01){if(Math.abs(g+v)<.1&&Math.abs(x+D)<.1&&Math.abs(w+y)<.1&&Math.abs(m+M+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const k=(m+1)/2,C=(M+1)/2,P=(S+1)/2,U=(g+v)/4,F=(x+D)/4,T=(w+y)/4;return k>C&&k>P?k<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(k),l=U/s,u=F/s):C>P?C<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(C),s=U/l,u=T/l):P<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(P),s=F/u,l=T/u),this.set(s,l,u,i),this}let z=Math.sqrt((y-w)*(y-w)+(x-D)*(x-D)+(v-g)*(v-g));return Math.abs(z)<.001&&(z=1),this.x=(y-w)/z,this.y=(x-D)/z,this.z=(v-g)/z,this.w=Math.acos((m+M+S-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=zt(this.x,t.x,i.x),this.y=zt(this.y,t.y,i.y),this.z=zt(this.z,t.z,i.z),this.w=zt(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=zt(this.x,t,i),this.y=zt(this.y,t,i),this.z=zt(this.z,t,i),this.w=zt(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(zt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Em.prototype.isVector4=!0;let dn=Em;class z1 extends ir{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new dn(0,0,t,i),this.scissorTest=!1,this.viewport=new dn(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},u=new Qn(l),d=s.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveColorBuffer=s.resolveColorBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.storeMultisampledColorBuffer=s.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=s.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=s.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(t={}){const i={minFilter:Vn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new cm(l)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const i=t.depthTexture.clone();i.renderTarget=null,this.depthTexture=i}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ji extends z1{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class dS extends Qn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=Ba,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class I1 extends Qn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=Ba,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Gu=class Gu{constructor(t,i,s,l,u,d,h,p,m,g,x,v,M,w,D,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,d,h,p,m,g,x,v,M,w,D,y)}set(t,i,s,l,u,d,h,p,m,g,x,v,M,w,D,y){const S=this.elements;return S[0]=t,S[4]=i,S[8]=s,S[12]=l,S[1]=u,S[5]=d,S[9]=h,S[13]=p,S[2]=m,S[6]=g,S[10]=x,S[14]=v,S[3]=M,S[7]=w,S[11]=D,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gu().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Wr.setFromMatrixColumn(t,0).length(),u=1/Wr.setFromMatrixColumn(t,1).length(),d=1/Wr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,u=t.z,d=Math.cos(s),h=Math.sin(s),p=Math.cos(l),m=Math.sin(l),g=Math.cos(u),x=Math.sin(u);if(t.order==="XYZ"){const v=d*g,M=d*x,w=h*g,D=h*x;i[0]=p*g,i[4]=-p*x,i[8]=m,i[1]=M+w*m,i[5]=v-D*m,i[9]=-h*p,i[2]=D-v*m,i[6]=w+M*m,i[10]=d*p}else if(t.order==="YXZ"){const v=p*g,M=p*x,w=m*g,D=m*x;i[0]=v+D*h,i[4]=w*h-M,i[8]=d*m,i[1]=d*x,i[5]=d*g,i[9]=-h,i[2]=M*h-w,i[6]=D+v*h,i[10]=d*p}else if(t.order==="ZXY"){const v=p*g,M=p*x,w=m*g,D=m*x;i[0]=v-D*h,i[4]=-d*x,i[8]=w+M*h,i[1]=M+w*h,i[5]=d*g,i[9]=D-v*h,i[2]=-d*m,i[6]=h,i[10]=d*p}else if(t.order==="ZYX"){const v=d*g,M=d*x,w=h*g,D=h*x;i[0]=p*g,i[4]=w*m-M,i[8]=v*m+D,i[1]=p*x,i[5]=D*m+v,i[9]=M*m-w,i[2]=-m,i[6]=h*p,i[10]=d*p}else if(t.order==="YZX"){const v=d*p,M=d*m,w=h*p,D=h*m;i[0]=p*g,i[4]=D-v*x,i[8]=w*x+M,i[1]=x,i[5]=d*g,i[9]=-h*g,i[2]=-m*g,i[6]=M*x+w,i[10]=v-D*x}else if(t.order==="XZY"){const v=d*p,M=d*m,w=h*p,D=h*m;i[0]=p*g,i[4]=-x,i[8]=m*g,i[1]=v*x+D,i[5]=d*g,i[9]=M*x-w,i[2]=w*x-M,i[6]=h*g,i[10]=D*x+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(B1,t,F1)}lookAt(t,i,s){const l=this.elements;return mi.subVectors(t,i),mi.lengthSq()===0&&(mi.z=1),mi.normalize(),xs.crossVectors(s,mi),xs.lengthSq()===0&&(Math.abs(s.z)===1?mi.x+=1e-4:mi.z+=1e-4,mi.normalize(),xs.crossVectors(s,mi)),xs.normalize(),lu.crossVectors(mi,xs),l[0]=xs.x,l[4]=lu.x,l[8]=mi.x,l[1]=xs.y,l[5]=lu.y,l[9]=mi.y,l[2]=xs.z,l[6]=lu.z,l[10]=mi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,d=s[0],h=s[4],p=s[8],m=s[12],g=s[1],x=s[5],v=s[9],M=s[13],w=s[2],D=s[6],y=s[10],S=s[14],z=s[3],k=s[7],C=s[11],P=s[15],U=l[0],F=l[4],T=l[8],N=l[12],V=l[1],X=l[5],Z=l[9],se=l[13],K=l[2],ne=l[6],W=l[10],j=l[14],ce=l[3],oe=l[7],O=l[11],L=l[15];return u[0]=d*U+h*V+p*K+m*ce,u[4]=d*F+h*X+p*ne+m*oe,u[8]=d*T+h*Z+p*W+m*O,u[12]=d*N+h*se+p*j+m*L,u[1]=g*U+x*V+v*K+M*ce,u[5]=g*F+x*X+v*ne+M*oe,u[9]=g*T+x*Z+v*W+M*O,u[13]=g*N+x*se+v*j+M*L,u[2]=w*U+D*V+y*K+S*ce,u[6]=w*F+D*X+y*ne+S*oe,u[10]=w*T+D*Z+y*W+S*O,u[14]=w*N+D*se+y*j+S*L,u[3]=z*U+k*V+C*K+P*ce,u[7]=z*F+k*X+C*ne+P*oe,u[11]=z*T+k*Z+C*W+P*O,u[15]=z*N+k*se+C*j+P*L,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],u=t[12],d=t[1],h=t[5],p=t[9],m=t[13],g=t[2],x=t[6],v=t[10],M=t[14],w=t[3],D=t[7],y=t[11],S=t[15],z=p*M-m*v,k=h*M-m*x,C=h*v-p*x,P=d*M-m*g,U=d*v-p*g,F=d*x-h*g;return i*(D*z-y*k+S*C)-s*(w*z-y*P+S*U)+l*(w*k-D*P+S*F)-u*(w*C-D*U+y*F)}determinantAffine(){const t=this.elements,i=t[0],s=t[4],l=t[8],u=t[1],d=t[5],h=t[9],p=t[2],m=t[6],g=t[10];return i*(d*g-h*m)-s*(u*g-h*p)+l*(u*m-d*p)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],d=t[4],h=t[5],p=t[6],m=t[7],g=t[8],x=t[9],v=t[10],M=t[11],w=t[12],D=t[13],y=t[14],S=t[15],z=i*h-s*d,k=i*p-l*d,C=i*m-u*d,P=s*p-l*h,U=s*m-u*h,F=l*m-u*p,T=g*D-x*w,N=g*y-v*w,V=g*S-M*w,X=x*y-v*D,Z=x*S-M*D,se=v*S-M*y,K=z*se-k*Z+C*X+P*V-U*N+F*T;if(K===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ne=1/K;return t[0]=(h*se-p*Z+m*X)*ne,t[1]=(l*Z-s*se-u*X)*ne,t[2]=(D*F-y*U+S*P)*ne,t[3]=(v*U-x*F-M*P)*ne,t[4]=(p*V-d*se-m*N)*ne,t[5]=(i*se-l*V+u*N)*ne,t[6]=(y*C-w*F-S*k)*ne,t[7]=(g*F-v*C+M*k)*ne,t[8]=(d*Z-h*V+m*T)*ne,t[9]=(s*V-i*Z-u*T)*ne,t[10]=(w*U-D*C+S*z)*ne,t[11]=(x*C-g*U-M*z)*ne,t[12]=(h*N-d*X-p*T)*ne,t[13]=(i*X-s*N+l*T)*ne,t[14]=(D*k-w*P-y*z)*ne,t[15]=(g*P-x*k+v*z)*ne,this}scale(t){const i=this.elements,s=t.x,l=t.y,u=t.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,d=t.x,h=t.y,p=t.z,m=u*d,g=u*h;return this.set(m*d+s,m*h-l*p,m*p+l*h,0,m*h+l*p,g*h+s,g*p-l*d,0,m*p-l*h,g*p+l*d,u*p*p+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,u,d){return this.set(1,s,u,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,u=i._x,d=i._y,h=i._z,p=i._w,m=u+u,g=d+d,x=h+h,v=u*m,M=u*g,w=u*x,D=d*g,y=d*x,S=h*x,z=p*m,k=p*g,C=p*x,P=s.x,U=s.y,F=s.z;return l[0]=(1-(D+S))*P,l[1]=(M+C)*P,l[2]=(w-k)*P,l[3]=0,l[4]=(M-C)*U,l[5]=(1-(v+S))*U,l[6]=(y+z)*U,l[7]=0,l[8]=(w+k)*F,l[9]=(y-z)*F,l[10]=(1-(v+D))*F,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const u=this.determinantAffine();if(u===0)return s.set(1,1,1),i.identity(),this;let d=Wr.set(l[0],l[1],l[2]).length();const h=Wr.set(l[4],l[5],l[6]).length(),p=Wr.set(l[8],l[9],l[10]).length();u<0&&(d=-d),Fi.copy(this);const m=1/d,g=1/h,x=1/p;return Fi.elements[0]*=m,Fi.elements[1]*=m,Fi.elements[2]*=m,Fi.elements[4]*=g,Fi.elements[5]*=g,Fi.elements[6]*=g,Fi.elements[8]*=x,Fi.elements[9]*=x,Fi.elements[10]*=x,i.setFromRotationMatrix(Fi),s.x=d,s.y=h,s.z=p,this}makePerspective(t,i,s,l,u,d,h=fa,p=!1){const m=this.elements,g=2*u/(i-t),x=2*u/(s-l),v=(i+t)/(i-t),M=(s+l)/(s-l);let w,D;if(p)w=u/(d-u),D=d*u/(d-u);else if(h===fa)w=-(d+u)/(d-u),D=-2*d*u/(d-u);else if(h===Ol)w=-d/(d-u),D=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=g,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=x,m[9]=M,m[13]=0,m[2]=0,m[6]=0,m[10]=w,m[14]=D,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,s,l,u,d,h=fa,p=!1){const m=this.elements,g=2/(i-t),x=2/(s-l),v=-(i+t)/(i-t),M=-(s+l)/(s-l);let w,D;if(p)w=1/(d-u),D=d/(d-u);else if(h===fa)w=-2/(d-u),D=-(d+u)/(d-u);else if(h===Ol)w=-1/(d-u),D=-u/(d-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=g,m[4]=0,m[8]=0,m[12]=v,m[1]=0,m[5]=x,m[9]=0,m[13]=M,m[2]=0,m[6]=0,m[10]=w,m[14]=D,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}};Gu.prototype.isMatrix4=!0;let cn=Gu;const Wr=new de,Fi=new cn,B1=new de(0,0,0),F1=new de(1,1,1),xs=new de,lu=new de,mi=new de,Kv=new cn,Qv=new _o;class Va{constructor(t=0,i=0,s=0,l=Va.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,u=l[0],d=l[4],h=l[8],p=l[1],m=l[5],g=l[9],x=l[2],v=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(zt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(zt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-zt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(v,M),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(zt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-zt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-g,M),this._y=0);break;default:ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return Kv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Kv,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Qv.setFromEuler(this),this.setFromQuaternion(Qv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Va.DEFAULT_ORDER="XYZ";let hS=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},H1=0;const Jv=new de,Yr=new _o,Ua=new cn,cu=new de,xl=new de,G1=new de,V1=new _o,$v=new de(1,0,0),e_=new de(0,1,0),t_=new de(0,0,1),n_={type:"added"},k1={type:"removed"},Zr={type:"childadded",child:null},Oh={type:"childremoved",child:null};class Tn extends ir{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:H1++}),this.uuid=vo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tn.DEFAULT_UP.clone();const t=new de,i=new Va,s=new _o,l=new de(1,1,1);function u(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new cn},normalMatrix:{value:new xt}}),this.matrix=new cn,this.matrixWorld=new cn,this.matrixAutoUpdate=Tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Yr.setFromAxisAngle(t,i),this.quaternion.multiply(Yr),this}rotateOnWorldAxis(t,i){return Yr.setFromAxisAngle(t,i),this.quaternion.premultiply(Yr),this}rotateX(t){return this.rotateOnAxis($v,t)}rotateY(t){return this.rotateOnAxis(e_,t)}rotateZ(t){return this.rotateOnAxis(t_,t)}translateOnAxis(t,i){return Jv.copy(t).applyQuaternion(this.quaternion),this.position.add(Jv.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis($v,t)}translateY(t){return this.translateOnAxis(e_,t)}translateZ(t){return this.translateOnAxis(t_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ua.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?cu.copy(t):cu.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),xl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ua.lookAt(xl,cu,this.up):Ua.lookAt(cu,xl,this.up),this.quaternion.setFromRotationMatrix(Ua),l&&(Ua.extractRotation(l.matrixWorld),Yr.setFromRotationMatrix(Ua),this.quaternion.premultiply(Yr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Xt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(n_),Zr.child=t,this.dispatchEvent(Zr),Zr.child=null):Xt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(k1),Oh.child=t,this.dispatchEvent(Oh),Oh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ua.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ua.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ua),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(n_),Zr.child=t,this.dispatchEvent(Zr),Zr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xl,t,G1),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xl,V1,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,u=this.matrix.elements;u[12]+=i-u[0]*i-u[4]*s-u[8]*l,u[13]+=s-u[1]*i-u[5]*s-u[9]*l,u[14]+=l-u[2]*i-u[6]*s-u[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i,s=!1){const l=this.parent;if(t===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const u=this.children;for(let d=0,h=u.length;d<h;d++)u[d].updateWorldMatrix(!1,!0,s)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,l.name=this.name,l.castShadow=this.castShadow,l.receiveShadow=this.receiveShadow,l.visible=this.visible,l.frustumCulled=this.frustumCulled,l.renderOrder=this.renderOrder,l.static=this.static,l.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const x=p[m];u(t.shapes,x)}else u(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(u(t.materials,this.material[p]));l.material=h}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];l.animations.push(u(t.animations,p))}}if(i){const h=d(t.geometries),p=d(t.materials),m=d(t.textures),g=d(t.images),x=d(t.shapes),v=d(t.skeletons),M=d(t.animations),w=d(t.nodes);h.length>0&&(s.geometries=h),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),g.length>0&&(s.images=g),x.length>0&&(s.shapes=x),v.length>0&&(s.skeletons=v),M.length>0&&(s.animations=M),w.length>0&&(s.nodes=w)}return s.object=l,s;function d(h){const p=[];for(const m in h){const g=h[m];delete g.metadata,p.push(g)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Tn.DEFAULT_UP=new de(0,1,0);Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class kn extends Tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const X1={type:"move"};class Ph{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new de,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new de),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new de,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new de,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,u=null,d=null;const h=this._targetRay,p=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){d=!0;for(const D of t.hand.values()){const y=i.getJointPose(D,s),S=this._getHandJoint(m,D);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const g=m.joints["index-finger-tip"],x=m.joints["thumb-tip"],v=g.position.distanceTo(x.position),M=.02,w=.005;m.inputState.pinching&&v>M+w?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&v<=M-w&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,s),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:t,target:this})));h!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(X1)))}return h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new kn;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const pS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vs={h:0,s:0,l:0},uu={h:0,s:0,l:0};function zh(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Lt{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Di){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ft.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Ft.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ft.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Ft.workingColorSpace){if(t=lm(t,1),i=zt(i,0,1),s=zt(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,d=2*s-u;this.r=zh(d,u,t+1/3),this.g=zh(d,u,t),this.b=zh(d,u,t-1/3)}return Ft.colorSpaceToWorking(this,l),this}setStyle(t,i=Di){function s(u){u!==void 0&&parseFloat(u)<1&&ft("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:ft("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);ft("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Di){const s=pS[t.toLowerCase()];return s!==void 0?this.setHex(s,i):ft("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ha(t.r),this.g=Ha(t.g),this.b=Ha(t.b),this}copyLinearToSRGB(t){return this.r=fo(t.r),this.g=fo(t.g),this.b=fo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Di){return Ft.workingToColorSpace(Gn.copy(this),t),Math.round(zt(Gn.r*255,0,255))*65536+Math.round(zt(Gn.g*255,0,255))*256+Math.round(zt(Gn.b*255,0,255))}getHexString(t=Di){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ft.workingColorSpace){Ft.workingToColorSpace(Gn.copy(this),i);const s=Gn.r,l=Gn.g,u=Gn.b,d=Math.max(s,l,u),h=Math.min(s,l,u);let p,m;const g=(h+d)/2;if(h===d)p=0,m=0;else{const x=d-h;switch(m=g<=.5?x/(d+h):x/(2-d-h),d){case s:p=(l-u)/x+(l<u?6:0);break;case l:p=(u-s)/x+2;break;case u:p=(s-l)/x+4;break}p/=6}return t.h=p,t.s=m,t.l=g,t}getRGB(t,i=Ft.workingColorSpace){return Ft.workingToColorSpace(Gn.copy(this),i),t.r=Gn.r,t.g=Gn.g,t.b=Gn.b,t}getStyle(t=Di){Ft.workingToColorSpace(Gn.copy(this),t);const i=Gn.r,s=Gn.g,l=Gn.b;return t!==Di?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(vs),this.setHSL(vs.h+t,vs.s+i,vs.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(vs),t.getHSL(uu);const s=Nl(vs.h,uu.h,i),l=Nl(vs.s,uu.s,i),u=Nl(vs.l,uu.l,i);return this.setHSL(s,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gn=new Lt;Lt.NAMES=pS;class um{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new Lt(t),this.density=i}clone(){return new um(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class j1 extends Tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Va,this.environmentIntensity=1,this.environmentRotation=new Va,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),i.object.backgroundBlurriness=this.backgroundBlurriness,i.object.backgroundIntensity=this.backgroundIntensity,i.object.backgroundRotation=this.backgroundRotation.toArray(),i.object.environmentIntensity=this.environmentIntensity,i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Hi=new de,Oa=new de,Ih=new de,Pa=new de,Kr=new de,Qr=new de,i_=new de,Bh=new de,Fh=new de,Hh=new de,Gh=new dn,Vh=new dn,kh=new dn;class Vi{constructor(t=new de,i=new de,s=new de){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Hi.subVectors(t,i),l.cross(Hi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,s,l,u){Hi.subVectors(l,i),Oa.subVectors(s,i),Ih.subVectors(t,i);const d=Hi.dot(Hi),h=Hi.dot(Oa),p=Hi.dot(Ih),m=Oa.dot(Oa),g=Oa.dot(Ih),x=d*m-h*h;if(x===0)return u.set(0,0,0),null;const v=1/x,M=(m*p-h*g)*v,w=(d*g-h*p)*v;return u.set(1-M-w,w,M)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Pa)===null?!1:Pa.x>=0&&Pa.y>=0&&Pa.x+Pa.y<=1}static getInterpolation(t,i,s,l,u,d,h,p){return this.getBarycoord(t,i,s,l,Pa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Pa.x),p.addScaledVector(d,Pa.y),p.addScaledVector(h,Pa.z),p)}static getInterpolatedAttribute(t,i,s,l,u,d){return Gh.setScalar(0),Vh.setScalar(0),kh.setScalar(0),Gh.fromBufferAttribute(t,i),Vh.fromBufferAttribute(t,s),kh.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(Gh,u.x),d.addScaledVector(Vh,u.y),d.addScaledVector(kh,u.z),d}static isFrontFacing(t,i,s,l){return Hi.subVectors(s,i),Oa.subVectors(t,i),Hi.cross(Oa).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Hi.subVectors(this.c,this.b),Oa.subVectors(this.a,this.b),Hi.cross(Oa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Vi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Vi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,u){return Vi.getInterpolation(t,this.a,this.b,this.c,i,s,l,u)}containsPoint(t){return Vi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Vi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,u=this.c;let d,h;Kr.subVectors(l,s),Qr.subVectors(u,s),Bh.subVectors(t,s);const p=Kr.dot(Bh),m=Qr.dot(Bh);if(p<=0&&m<=0)return i.copy(s);Fh.subVectors(t,l);const g=Kr.dot(Fh),x=Qr.dot(Fh);if(g>=0&&x<=g)return i.copy(l);const v=p*x-g*m;if(v<=0&&p>=0&&g<=0)return d=p/(p-g),i.copy(s).addScaledVector(Kr,d);Hh.subVectors(t,u);const M=Kr.dot(Hh),w=Qr.dot(Hh);if(w>=0&&M<=w)return i.copy(u);const D=M*m-p*w;if(D<=0&&m>=0&&w<=0)return h=m/(m-w),i.copy(s).addScaledVector(Qr,h);const y=g*w-M*x;if(y<=0&&x-g>=0&&M-w>=0)return i_.subVectors(u,l),h=(x-g)/(x-g+(M-w)),i.copy(l).addScaledVector(i_,h);const S=1/(y+D+v);return d=D*S,h=v*S,i.copy(s).addScaledVector(Kr,d).addScaledVector(Qr,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class ar{constructor(t=new de(1/0,1/0,1/0),i=new de(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Gi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Gi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Gi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,Gi):Gi.fromBufferAttribute(u,d),Gi.applyMatrix4(t.matrixWorld),this.expandByPoint(Gi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fu.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),fu.copy(s.boundingBox)),fu.applyMatrix4(t.matrixWorld),this.union(fu)}const l=t.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Gi),Gi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(vl),du.subVectors(this.max,vl),Jr.subVectors(t.a,vl),$r.subVectors(t.b,vl),eo.subVectors(t.c,vl),_s.subVectors($r,Jr),Ss.subVectors(eo,$r),Ws.subVectors(Jr,eo);let i=[0,-_s.z,_s.y,0,-Ss.z,Ss.y,0,-Ws.z,Ws.y,_s.z,0,-_s.x,Ss.z,0,-Ss.x,Ws.z,0,-Ws.x,-_s.y,_s.x,0,-Ss.y,Ss.x,0,-Ws.y,Ws.x,0];return!Xh(i,Jr,$r,eo,du)||(i=[1,0,0,0,1,0,0,0,1],!Xh(i,Jr,$r,eo,du))?!1:(hu.crossVectors(_s,Ss),i=[hu.x,hu.y,hu.z],Xh(i,Jr,$r,eo,du))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Gi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Gi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(za[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),za[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),za[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),za[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),za[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),za[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),za[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),za[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(za),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const za=[new de,new de,new de,new de,new de,new de,new de,new de],Gi=new de,fu=new ar,Jr=new de,$r=new de,eo=new de,_s=new de,Ss=new de,Ws=new de,vl=new de,du=new de,hu=new de,Ys=new de;function Xh(o,t,i,s,l){for(let u=0,d=o.length-3;u<=d;u+=3){Ys.fromArray(o,u);const h=l.x*Math.abs(Ys.x)+l.y*Math.abs(Ys.y)+l.z*Math.abs(Ys.z),p=t.dot(Ys),m=i.dot(Ys),g=s.dot(Ys);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>h)return!1}return!0}const bn=new de,pu=new Ht;let q1=0;class ha extends ir{constructor(t,i,s=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:q1++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=f1,this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)pu.fromBufferAttribute(this,i),pu.applyMatrix3(t),this.setXY(i,pu.x,pu.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)bn.fromBufferAttribute(this,i),bn.applyMatrix3(t),this.setXYZ(i,bn.x,bn.y,bn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)bn.fromBufferAttribute(this,i),bn.applyMatrix4(t),this.setXYZ(i,bn.x,bn.y,bn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)bn.fromBufferAttribute(this,i),bn.applyNormalMatrix(t),this.setXYZ(i,bn.x,bn.y,bn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)bn.fromBufferAttribute(this,i),bn.transformDirection(t),this.setXYZ(i,bn.x,bn.y,bn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=oo(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Zn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=oo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=oo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=oo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=oo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Zn(i,this.array),s=Zn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Zn(i,this.array),s=Zn(s,this.array),l=Zn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,u){return t*=this.itemSize,this.normalized&&(i=Zn(i,this.array),s=Zn(s,this.array),l=Zn(l,this.array),u=Zn(u,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class mS extends ha{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class gS extends ha{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Li extends ha{constructor(t,i,s){super(new Float32Array(t),i,s)}}const W1=new ar,_l=new de,jh=new de;class zl{constructor(t=new de,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):W1.setFromPoints(t).getCenter(s);let l=0;for(let u=0,d=t.length;u<d;u++)l=Math.max(l,s.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_l.subVectors(t,this.center);const i=_l.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(_l,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_l.copy(t.center).add(jh)),this.expandByPoint(_l.copy(t.center).sub(jh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Y1=0;const Ni=new cn,qh=new Tn,to=new de,gi=new ar,Sl=new ar,Dn=new de;class xa extends ir{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Y1++}),this.uuid=vo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(d1(t)?gS:mS)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new xt().getNormalMatrix(t);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ni.makeRotationFromQuaternion(t),this.applyMatrix4(Ni),this}rotateX(t){return Ni.makeRotationX(t),this.applyMatrix4(Ni),this}rotateY(t){return Ni.makeRotationY(t),this.applyMatrix4(Ni),this}rotateZ(t){return Ni.makeRotationZ(t),this.applyMatrix4(Ni),this}translate(t,i,s){return Ni.makeTranslation(t,i,s),this.applyMatrix4(Ni),this}scale(t,i,s){return Ni.makeScale(t,i,s),this.applyMatrix4(Ni),this}lookAt(t){return qh.lookAt(t),qh.updateMatrix(),this.applyMatrix4(qh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(to).negate(),this.translate(to.x,to.y,to.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=t.length;l<u;l++){const d=t[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Li(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ar);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new de(-1/0,-1/0,-1/0),new de(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];gi.setFromBufferAttribute(u),this.morphTargetsRelative?(Dn.addVectors(this.boundingBox.min,gi.min),this.boundingBox.expandByPoint(Dn),Dn.addVectors(this.boundingBox.max,gi.max),this.boundingBox.expandByPoint(Dn)):(this.boundingBox.expandByPoint(gi.min),this.boundingBox.expandByPoint(gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new de,1/0);return}if(t){const s=this.boundingSphere.center;if(gi.setFromBufferAttribute(t),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];Sl.setFromBufferAttribute(h),this.morphTargetsRelative?(Dn.addVectors(gi.min,Sl.min),gi.expandByPoint(Dn),Dn.addVectors(gi.max,Sl.max),gi.expandByPoint(Dn)):(gi.expandByPoint(Sl.min),gi.expandByPoint(Sl.max))}gi.getCenter(s);let l=0;for(let u=0,d=t.count;u<d;u++)Dn.fromBufferAttribute(t,u),l=Math.max(l,s.distanceToSquared(Dn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],p=this.morphTargetsRelative;for(let m=0,g=h.count;m<g;m++)Dn.fromBufferAttribute(h,m),p&&(to.fromBufferAttribute(t,m),Dn.add(to)),l=Math.max(l,s.distanceToSquared(Dn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Xt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Xt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==s.count)&&(d=new ha(new Float32Array(4*s.count),4),this.setAttribute("tangent",d));const h=[],p=[];for(let T=0;T<s.count;T++)h[T]=new de,p[T]=new de;const m=new de,g=new de,x=new de,v=new Ht,M=new Ht,w=new Ht,D=new de,y=new de;function S(T,N,V){m.fromBufferAttribute(s,T),g.fromBufferAttribute(s,N),x.fromBufferAttribute(s,V),v.fromBufferAttribute(u,T),M.fromBufferAttribute(u,N),w.fromBufferAttribute(u,V),g.sub(m),x.sub(m),M.sub(v),w.sub(v);const X=1/(M.x*w.y-w.x*M.y);isFinite(X)&&(D.copy(g).multiplyScalar(w.y).addScaledVector(x,-M.y).multiplyScalar(X),y.copy(x).multiplyScalar(M.x).addScaledVector(g,-w.x).multiplyScalar(X),h[T].add(D),h[N].add(D),h[V].add(D),p[T].add(y),p[N].add(y),p[V].add(y))}let z=this.groups;z.length===0&&(z=[{start:0,count:t.count}]);for(let T=0,N=z.length;T<N;++T){const V=z[T],X=V.start,Z=V.count;for(let se=X,K=X+Z;se<K;se+=3)S(t.getX(se+0),t.getX(se+1),t.getX(se+2))}const k=new de,C=new de,P=new de,U=new de;function F(T){P.fromBufferAttribute(l,T),U.copy(P);const N=h[T];k.copy(N),k.sub(P.multiplyScalar(P.dot(N))).normalize(),C.crossVectors(U,N);const X=C.dot(p[T])<0?-1:1;d.setXYZW(T,k.x,k.y,k.z,X)}for(let T=0,N=z.length;T<N;++T){const V=z[T],X=V.start,Z=V.count;for(let se=X,K=X+Z;se<K;se+=3)F(t.getX(se+0)),F(t.getX(se+1)),F(t.getX(se+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new ha(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let v=0,M=s.count;v<M;v++)s.setXYZ(v,0,0,0);const l=new de,u=new de,d=new de,h=new de,p=new de,m=new de,g=new de,x=new de;if(t)for(let v=0,M=t.count;v<M;v+=3){const w=t.getX(v+0),D=t.getX(v+1),y=t.getX(v+2);l.fromBufferAttribute(i,w),u.fromBufferAttribute(i,D),d.fromBufferAttribute(i,y),g.subVectors(d,u),x.subVectors(l,u),g.cross(x),h.fromBufferAttribute(s,w),p.fromBufferAttribute(s,D),m.fromBufferAttribute(s,y),h.add(g),p.add(g),m.add(g),s.setXYZ(w,h.x,h.y,h.z),s.setXYZ(D,p.x,p.y,p.z),s.setXYZ(y,m.x,m.y,m.z)}else for(let v=0,M=i.count;v<M;v+=3)l.fromBufferAttribute(i,v+0),u.fromBufferAttribute(i,v+1),d.fromBufferAttribute(i,v+2),g.subVectors(d,u),x.subVectors(l,u),g.cross(x),s.setXYZ(v+0,g.x,g.y,g.z),s.setXYZ(v+1,g.x,g.y,g.z),s.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Dn.fromBufferAttribute(t,i),Dn.normalize(),t.setXYZ(i,Dn.x,Dn.y,Dn.z)}toNonIndexed(){function t(h,p){const m=h.array,g=h.itemSize,x=h.normalized,v=new m.constructor(p.length*g);let M=0,w=0;for(let D=0,y=p.length;D<y;D++){h.isInterleavedBufferAttribute?M=p[D]*h.data.stride+h.offset:M=p[D]*g;for(let S=0;S<g;S++)v[w++]=m[M++]}return new ha(v,g,x)}if(this.index===null)return ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new xa,s=this.index.array,l=this.attributes;for(const h in l){const p=l[h],m=t(p,s);i.setAttribute(h,m)}const u=this.morphAttributes;for(const h in u){const p=[],m=u[h];for(let g=0,x=m.length;g<x;g++){const v=m[g],M=t(v,s);p.push(M)}i.morphAttributes[h]=p}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,p=d.length;h<p;h++){const m=d[h];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const m=s[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let x=0,v=m.length;x<v;x++){const M=m[x];g.push(M.toJSON(t.data))}g.length>0&&(l[p]=g,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const m in l){const g=l[m];this.setAttribute(m,g.clone(i))}const u=t.morphAttributes;for(const m in u){const g=[],x=u[m];for(let v=0,M=x.length;v<M;v++)g.push(x[v].clone(i));this.morphAttributes[m]=g}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let m=0,g=d.length;m<g;m++){const x=d[m];this.addGroup(x.start,x.count,x.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wh=new de,Z1=new de,K1=new xt;class bs{constructor(t=new de(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Wh.subVectors(s,i).cross(Z1.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i,s=!0){const l=t.delta(Wh),u=this.normal.dot(l);if(u===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const d=-(t.start.dot(this.normal)+this.constant)/u;return s===!0&&(d<0||d>1)?null:i.copy(t.start).addScaledVector(l,d)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||K1.getNormalMatrix(t),l=this.coplanarPoint(Wh).applyMatrix4(t),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Q1=0;class Il extends ir{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Q1++}),this.uuid=vo(),this.name="",this.type="Material",this.blending=Rl,this.side=er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Y_,this.blendDst=Z_,this.blendEquation=ro,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=Dl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=a1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ch,this.stencilZFail=Ch,this.stencilZPass=Ch,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){ft(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ft(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector2&&s&&s.isVector2||l&&l.isEuler&&s&&s.isEuler||l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,s.blending=this.blending,s.side=this.side,s.shadowSide=this.shadowSide,s.vertexColors=this.vertexColors,s.opacity=this.opacity,s.transparent=this.transparent,s.blendSrc=this.blendSrc,s.blendDst=this.blendDst,s.blendEquation=this.blendEquation,s.blendSrcAlpha=this.blendSrcAlpha,s.blendDstAlpha=this.blendDstAlpha,s.blendEquationAlpha=this.blendEquationAlpha,s.blendColor=this.blendColor.getHex(),s.blendAlpha=this.blendAlpha,s.depthFunc=this.depthFunc,s.depthTest=this.depthTest,s.depthWrite=this.depthWrite,s.colorWrite=this.colorWrite,s.clipIntersection=this.clipIntersection,s.clipShadows=this.clipShadows,s.stencilWriteMask=this.stencilWriteMask,s.stencilFunc=this.stencilFunc,s.stencilRef=this.stencilRef,s.stencilFuncMask=this.stencilFuncMask,s.stencilFail=this.stencilFail,s.stencilZFail=this.stencilZFail,s.stencilZPass=this.stencilZPass,s.stencilWrite=this.stencilWrite,s.polygonOffset=this.polygonOffset,s.polygonOffsetFactor=this.polygonOffsetFactor,s.polygonOffsetUnits=this.polygonOffsetUnits,s.dithering=this.dithering,s.alphaTest=this.alphaTest,s.alphaHash=this.alphaHash,s.alphaToCoverage=this.alphaToCoverage,s.premultipliedAlpha=this.premultipliedAlpha,s.forceSinglePass=this.forceSinglePass,s.allowOverride=this.allowOverride,s.visible=this.visible,s.toneMapped=this.toneMapped,s.name=this.name,this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(s.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(s.clippingPlanes=this.clippingPlanes.map(u=>u.toJSON())),this.rotation!==void 0&&(s.rotation=this.rotation),this.depthPacking!==void 0&&(s.depthPacking=this.depthPacking),this.linewidth!==void 0&&(s.linewidth=this.linewidth),this.linecap!==void 0&&(s.linecap=this.linecap),this.linejoin!==void 0&&(s.linejoin=this.linejoin),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.wireframe!==void 0&&(s.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(s.flatShading=this.flatShading),this.fog!==void 0&&(s.fog=this.fog),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const d=[];for(const h in u){const p=u[h];delete p.metadata,d.push(p)}return d}if(i){const u=l(t.textures),d=l(t.images);u.length>0&&(s.textures=u),d.length>0&&(s.images=d)}return s}fromJSON(t,i){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Lt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(s=>new bs().fromJSON(s))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=i[t.map]||null),t.matcap!==void 0&&(this.matcap=i[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=i[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=i[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=i[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let s=t.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new Ht().fromArray(s)}return t.displacementMap!==void 0&&(this.displacementMap=i[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=i[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=i[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=i[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=i[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=i[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=i[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=i[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=i[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=i[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=i[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ht().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=i[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=i[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=i[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=i[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=i[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Ia=new de,Yh=new de,mu=new de,gu=new de;class J1{constructor(t=new de,i=new de(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ia)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ia.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ia.copy(this.origin).addScaledVector(this.direction,i),Ia.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Yh.copy(t).add(i).multiplyScalar(.5),mu.copy(i).sub(t).normalize(),gu.copy(this.origin).sub(Yh);const u=t.distanceTo(i)*.5,d=-this.direction.dot(mu),h=gu.dot(this.direction),p=-gu.dot(mu),m=gu.lengthSq(),g=Math.abs(1-d*d);let x,v,M,w;if(g>0)if(x=d*p-h,v=d*h-p,w=u*g,x>=0)if(v>=-w)if(v<=w){const D=1/g;x*=D,v*=D,M=x*(x+d*v+2*h)+v*(d*x+v+2*p)+m}else v=u,x=Math.max(0,-(d*v+h)),M=-x*x+v*(v+2*p)+m;else v=-u,x=Math.max(0,-(d*v+h)),M=-x*x+v*(v+2*p)+m;else v<=-w?(x=Math.max(0,-(-d*u+h)),v=x>0?-u:Math.min(Math.max(-u,-p),u),M=-x*x+v*(v+2*p)+m):v<=w?(x=0,v=Math.min(Math.max(-u,-p),u),M=v*(v+2*p)+m):(x=Math.max(0,-(d*u+h)),v=x>0?u:Math.min(Math.max(-u,-p),u),M=-x*x+v*(v+2*p)+m);else v=d>0?-u:u,x=Math.max(0,-(d*v+h)),M=-x*x+v*(v+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(Yh).addScaledVector(mu,v),M}intersectSphere(t,i){if(t.radius<0)return null;Ia.subVectors(t.center,this.origin);const s=Ia.dot(this.direction),l=Ia.dot(Ia)-s*s,u=t.radius*t.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=s-d,p=s+d;return p<0?null:h<0?this.at(p,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,u,d,h,p;const m=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,v=this.origin;return m>=0?(s=(t.min.x-v.x)*m,l=(t.max.x-v.x)*m):(s=(t.max.x-v.x)*m,l=(t.min.x-v.x)*m),g>=0?(u=(t.min.y-v.y)*g,d=(t.max.y-v.y)*g):(u=(t.max.y-v.y)*g,d=(t.min.y-v.y)*g),s>d||u>l||((u>s||isNaN(s))&&(s=u),(d<l||isNaN(l))&&(l=d),x>=0?(h=(t.min.z-v.z)*x,p=(t.max.z-v.z)*x):(h=(t.max.z-v.z)*x,p=(t.min.z-v.z)*x),s>p||h>l)||((h>s||s!==s)&&(s=h),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Ia)!==null}intersectTriangle(t,i,s,l,u){const d=this.origin,h=this.direction,p=h.x,m=h.y,g=h.z,x=t.x-d.x,v=t.y-d.y,M=t.z-d.z,w=i.x-d.x,D=i.y-d.y,y=i.z-d.z,S=s.x-d.x,z=s.y-d.y,k=s.z-d.z,C=Math.abs(p),P=Math.abs(m),U=Math.abs(g);let F,T,N,V,X,Z,se,K,ne,W,j,ce;if(C>=P&&C>=U?(N=p,Z=x,ne=w,ce=S,p>=0?(F=m,T=g,V=v,X=M,se=D,K=y,W=z,j=k):(F=g,T=m,V=M,X=v,se=y,K=D,W=k,j=z)):P>=U?(N=m,Z=v,ne=D,ce=z,m>=0?(F=g,T=p,V=M,X=x,se=y,K=w,W=k,j=S):(F=p,T=g,V=x,X=M,se=w,K=y,W=S,j=k)):(N=g,Z=M,ne=y,ce=k,g>=0?(F=p,T=m,V=x,X=v,se=w,K=D,W=S,j=z):(F=m,T=p,V=v,X=x,se=D,K=w,W=z,j=S)),N===0)return null;const oe=F/N,O=T/N,L=1/N,Ce=V-oe*Z,ve=X-O*Z,I=se-oe*ne,$=K-O*ne,_e=W-oe*ce,G=j-O*ce,te=_e*$-G*I,be=Ce*G-ve*_e,Te=I*ve-$*Ce;if(l){if(te<0||be<0||Te<0)return null}else if((te<0||be<0||Te<0)&&(te>0||be>0||Te>0))return null;const le=te+be+Te;if(le===0)return null;const Ae=L*(te*Z+be*ne+Te*ce);return(le>0?Ae<0:Ae>0)?null:this.at(Ae/le,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fm extends Il{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Va,this.combine=K_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const a_=new cn,Zs=new J1,xu=new zl,s_=new de,vu=new de,_u=new de,Su=new de,Zh=new de,yu=new de,r_=new de,bu=new de;class Dt extends Tn{constructor(t=new xa,i=new fm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(u&&h){yu.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const g=h[p],x=u[p];g!==0&&(Zh.fromBufferAttribute(x,t),d?yu.addScaledVector(Zh,g):yu.addScaledVector(Zh.sub(i),g))}i.add(yu)}return i}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),xu.copy(s.boundingSphere),xu.applyMatrix4(u),Zs.copy(t.ray).recast(t.near),!(xu.containsPoint(Zs.origin)===!1&&(Zs.intersectSphere(xu,s_)===null||Zs.origin.distanceToSquared(s_)>(t.far-t.near)**2))&&(a_.copy(u).invert(),Zs.copy(t.ray).applyMatrix4(a_),!(s.boundingBox!==null&&Zs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Zs)))}_computeIntersections(t,i,s){let l;const u=this.geometry,d=this.material,h=u.index,p=u.attributes.position,m=u.attributes.uv,g=u.attributes.uv1,x=u.attributes.normal,v=u.groups,M=u.drawRange;if(h!==null)if(Array.isArray(d))for(let w=0,D=v.length;w<D;w++){const y=v[w],S=d[y.materialIndex],z=Math.max(y.start,M.start),k=Math.min(h.count,Math.min(y.start+y.count,M.start+M.count));for(let C=z,P=k;C<P;C+=3){const U=h.getX(C),F=h.getX(C+1),T=h.getX(C+2);l=Mu(this,S,t,s,m,g,x,U,F,T),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const w=Math.max(0,M.start),D=Math.min(h.count,M.start+M.count);for(let y=w,S=D;y<S;y+=3){const z=h.getX(y),k=h.getX(y+1),C=h.getX(y+2);l=Mu(this,d,t,s,m,g,x,z,k,C),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(d))for(let w=0,D=v.length;w<D;w++){const y=v[w],S=d[y.materialIndex],z=Math.max(y.start,M.start),k=Math.min(p.count,Math.min(y.start+y.count,M.start+M.count));for(let C=z,P=k;C<P;C+=3){const U=C,F=C+1,T=C+2;l=Mu(this,S,t,s,m,g,x,U,F,T),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const w=Math.max(0,M.start),D=Math.min(p.count,M.start+M.count);for(let y=w,S=D;y<S;y+=3){const z=y,k=y+1,C=y+2;l=Mu(this,d,t,s,m,g,x,z,k,C),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function $1(o,t,i,s,l,u,d,h){let p;if(t.side===ai?p=s.intersectTriangle(d,u,l,!0,h):p=s.intersectTriangle(l,u,d,t.side===er,h),p===null)return null;bu.copy(h),bu.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(bu);return m<i.near||m>i.far?null:{distance:m,point:bu.clone(),object:o}}function Mu(o,t,i,s,l,u,d,h,p,m){o.getVertexPosition(h,vu),o.getVertexPosition(p,_u),o.getVertexPosition(m,Su);const g=$1(o,t,i,s,vu,_u,Su,r_);if(g){const x=new de;Vi.getBarycoord(r_,vu,_u,Su,x),l&&(g.uv=Vi.getInterpolatedAttribute(l,h,p,m,x,new Ht)),u&&(g.uv1=Vi.getInterpolatedAttribute(u,h,p,m,x,new Ht)),d&&(g.normal=Vi.getInterpolatedAttribute(d,h,p,m,x,new de),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const v={a:h,b:p,c:m,normal:new de,materialIndex:0};Vi.getNormal(vu,_u,Su,v.normal),g.face=v,g.barycoord=x}return g}class xS extends Qn{constructor(t=null,i=1,s=1,l,u,d,h,p,m=Bn,g=Bn,x,v){super(null,d,h,p,m,g,l,u,x,v),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class o_ extends ha{constructor(t,i,s,l=1){super(t,i,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const no=new cn,l_=new cn,Eu=[],c_=new ar,eE=new cn,yl=new Dt,bl=new zl;class tE extends Dt{constructor(t,i,s){super(t,i),this.isInstancedMesh=!0,this.instanceMatrix=new o_(new Float32Array(s*16),16),this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<s;l++)this.setMatrixAt(l,eE)}computeBoundingBox(){const t=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new ar),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,no),c_.copy(t.boundingBox).applyMatrix4(no),this.boundingBox.union(c_)}computeBoundingSphere(){const t=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new zl),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,no),bl.copy(t.boundingSphere).applyMatrix4(no),this.boundingSphere.union(bl)}copy(t,i){return super.copy(t,i),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,i){return this.instanceColor===null?i.setRGB(1,1,1):i.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,i){return i.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,i){const s=i.morphTargetInfluences,l=this.morphTexture.source.data.data,u=s.length+1,d=t*u+1;for(let h=0;h<s.length;h++)s[h]=l[d+h]}raycast(t,i){const s=this.matrixWorld,l=this.count;if(yl.geometry=this.geometry,yl.material=this.material,yl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bl.copy(this.boundingSphere),bl.applyMatrix4(s),t.ray.intersectsSphere(bl)!==!1))for(let u=0;u<l;u++){this.getMatrixAt(u,no),l_.multiplyMatrices(s,no),yl.matrixWorld=l_,yl.raycast(t,Eu);for(let d=0,h=Eu.length;d<h;d++){const p=Eu[d];p.instanceId=u,p.object=this,i.push(p)}Eu.length=0}}setColorAt(t,i){return this.instanceColor===null&&(this.instanceColor=new o_(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,i){return i.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,i){const s=i.morphTargetInfluences,l=s.length+1;this.morphTexture===null&&(this.morphTexture=new xS(new Float32Array(l*this.count),l,this.count,nm,ki));const u=this.morphTexture.source.data.data;let d=0;for(let m=0;m<s.length;m++)d+=s[m];const h=this.geometry.morphTargetsRelative?1:1-d,p=l*t;return u[p]=h,u.set(s,p+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ks=new zl,nE=new Ht(.5,.5),Tu=new de;class dm{constructor(t=new bs,i=new bs,s=new bs,l=new bs,u=new bs,d=new bs){this.planes=[t,i,s,l,u,d]}set(t,i,s,l,u,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=fa,s=!1){const l=this.planes,u=t.elements,d=u[0],h=u[1],p=u[2],m=u[3],g=u[4],x=u[5],v=u[6],M=u[7],w=u[8],D=u[9],y=u[10],S=u[11],z=u[12],k=u[13],C=u[14],P=u[15];if(l[0].setComponents(m-d,M-g,S-w,P-z).normalize(),l[1].setComponents(m+d,M+g,S+w,P+z).normalize(),l[2].setComponents(m+h,M+x,S+D,P+k).normalize(),l[3].setComponents(m-h,M-x,S-D,P-k).normalize(),s)l[4].setComponents(p,v,y,C).normalize(),l[5].setComponents(m-p,M-v,S-y,P-C).normalize();else if(l[4].setComponents(m-p,M-v,S-y,P-C).normalize(),i===fa)l[5].setComponents(m+p,M+v,S+y,P+C).normalize();else if(i===Ol)l[5].setComponents(p,v,y,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ks.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ks.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ks)}intersectsSprite(t){Ks.center.set(0,0,0);const i=nE.distanceTo(t.center);return Ks.radius=.7071067811865476+i,Ks.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ks)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Tu.x=l.normal.x>0?t.max.x:t.min.x,Tu.y=l.normal.y>0?t.max.y:t.min.y,Tu.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Tu)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class vS extends Qn{constructor(t=[],i=tr,s,l,u,d,h,p,m,g){super(t,i,s,l,u,d,h,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Pl extends Qn{constructor(t,i,s=pa,l,u,d,h=Bn,p=Bn,m,g=Ga,x=1){if(g!==Ga&&g!==$s)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:i,depth:x};super(v,l,u,d,h,p,g,s,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new cm(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return i.compareFunction=this.compareFunction,i}}class iE extends Pl{constructor(t,i=pa,s=tr,l,u,d=Bn,h=Bn,p,m=Ga){const g={width:t,height:t,depth:1},x=[g,g,g,g,g,g];super(t,t,i,s,l,u,d,h,p,m),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class _S extends Qn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Wt extends xa{constructor(t=1,i=1,s=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const p=[],m=[],g=[],x=[];let v=0,M=0;w("z","y","x",-1,-1,s,i,t,d,u,0),w("z","y","x",1,-1,s,i,-t,d,u,1),w("x","z","y",1,1,t,s,i,l,d,2),w("x","z","y",1,-1,t,s,-i,l,d,3),w("x","y","z",1,-1,t,i,s,l,u,4),w("x","y","z",-1,-1,t,i,-s,l,u,5),this.setIndex(p),this.setAttribute("position",new Li(m,3)),this.setAttribute("normal",new Li(g,3)),this.setAttribute("uv",new Li(x,2));function w(D,y,S,z,k,C,P,U,F,T,N){const V=C/F,X=P/T,Z=C/2,se=P/2,K=U/2,ne=F+1,W=T+1;let j=0,ce=0;const oe=new de;for(let O=0;O<W;O++){const L=O*X-se;for(let Ce=0;Ce<ne;Ce++){const ve=Ce*V-Z;oe[D]=ve*z,oe[y]=L*k,oe[S]=K,m.push(oe.x,oe.y,oe.z),oe[D]=0,oe[y]=0,oe[S]=U>0?1:-1,g.push(oe.x,oe.y,oe.z),x.push(Ce/F),x.push(1-O/T),j+=1}}for(let O=0;O<T;O++)for(let L=0;L<F;L++){const Ce=v+L+ne*O,ve=v+L+ne*(O+1),I=v+(L+1)+ne*(O+1),$=v+(L+1)+ne*O;p.push(Ce,ve,$),p.push(ve,I,$),ce+=6}h.addGroup(M,ce,N),M+=ce,v+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class hm extends xa{constructor(t=1,i=1,s=1,l=32,u=1,d=!1,h=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:u,openEnded:d,thetaStart:h,thetaLength:p};const m=this;l=Math.floor(l),u=Math.floor(u);const g=[],x=[],v=[],M=[];let w=0;const D=[],y=s/2;let S=0;z(),d===!1&&(t>0&&k(!0),i>0&&k(!1)),this.setIndex(g),this.setAttribute("position",new Li(x,3)),this.setAttribute("normal",new Li(v,3)),this.setAttribute("uv",new Li(M,2));function z(){const C=new de,P=new de;let U=0;const F=(i-t)/s;for(let T=0;T<=u;T++){const N=[],V=T/u,X=V*(i-t)+t;for(let Z=0;Z<=l;Z++){const se=Z/l,K=se*p+h,ne=Math.sin(K),W=Math.cos(K);P.x=X*ne,P.y=-V*s+y,P.z=X*W,x.push(P.x,P.y,P.z),C.set(ne,F,W).normalize(),v.push(C.x,C.y,C.z),M.push(se,1-V),N.push(w++)}D.push(N)}for(let T=0;T<l;T++)for(let N=0;N<u;N++){const V=D[N][T],X=D[N+1][T],Z=D[N+1][T+1],se=D[N][T+1];(t>0||N!==0)&&(g.push(V,X,se),U+=3),(i>0||N!==u-1)&&(g.push(X,Z,se),U+=3)}m.addGroup(S,U,0),S+=U}function k(C){const P=w,U=new Ht,F=new de;let T=0;const N=C===!0?t:i,V=C===!0?1:-1;for(let Z=1;Z<=l;Z++)x.push(0,y*V,0),v.push(0,V,0),M.push(.5,.5),w++;const X=w;for(let Z=0;Z<=l;Z++){const K=Z/l*p+h,ne=Math.cos(K),W=Math.sin(K);F.x=N*W,F.y=y*V,F.z=N*ne,x.push(F.x,F.y,F.z),v.push(0,V,0),U.x=ne*.5+.5,U.y=W*.5*V+.5,M.push(U.x,U.y),w++}for(let Z=0;Z<l;Z++){const se=P+Z,K=X+Z;C===!0?g.push(K,K+1,se):g.push(K+1,K,se),T+=3}m.addGroup(S,T,C===!0?1:2),S+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hm(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ku extends xa{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const u=t/2,d=i/2,h=Math.floor(s),p=Math.floor(l),m=h+1,g=p+1,x=t/h,v=i/p,M=[],w=[],D=[],y=[];for(let S=0;S<g;S++){const z=S*v-d;for(let k=0;k<m;k++){const C=k*x-u;w.push(C,-z,0),D.push(0,0,1),y.push(k/h),y.push(1-S/p)}}for(let S=0;S<p;S++)for(let z=0;z<h;z++){const k=z+m*S,C=z+m*(S+1),P=z+1+m*(S+1),U=z+1+m*S;M.push(k,C,U),M.push(C,P,U)}this.setIndex(M),this.setAttribute("position",new Li(w,3)),this.setAttribute("normal",new Li(D,3)),this.setAttribute("uv",new Li(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ku(t.width,t.height,t.widthSegments,t.heightSegments)}}function go(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];if(u_(l))l.isRenderTargetTexture?(ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone();else if(Array.isArray(l))if(u_(l[0])){const u=[];for(let d=0,h=l.length;d<h;d++)u[d]=l[d].clone();t[i][s]=u}else t[i][s]=l.slice();else t[i][s]=l}}return t}function Kn(o){const t={};for(let i=0;i<o.length;i++){const s=go(o[i]);for(const l in s)t[l]=s[l]}return t}function u_(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function aE(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function SS(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ft.workingColorSpace}const sE={clone:go,merge:Kn};var rE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,oE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ga extends Il{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rE,this.fragmentShader=oE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=go(t.uniforms),this.uniformsGroups=aE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(t,i){if(super.fromJSON(t,i),t.uniforms!==void 0)for(const s in t.uniforms){const l=t.uniforms[s];switch(this.uniforms[s]={},l.type){case"t":this.uniforms[s].value=i[l.value]||null;break;case"c":this.uniforms[s].value=new Lt().setHex(l.value);break;case"v2":this.uniforms[s].value=new Ht().fromArray(l.value);break;case"v3":this.uniforms[s].value=new de().fromArray(l.value);break;case"v4":this.uniforms[s].value=new dn().fromArray(l.value);break;case"m3":this.uniforms[s].value=new xt().fromArray(l.value);break;case"m4":this.uniforms[s].value=new cn().fromArray(l.value);break;default:this.uniforms[s].value=l.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const s in t.extensions)this.extensions[s]=t.extensions[s];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class lE extends ga{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class xi extends Il{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jp,this.normalScale=new Ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Va,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class cE extends Il{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=n1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class uE extends Il{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Xu extends Tn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Lt(t),this.intensity=i}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const Kh=new cn,f_=new de,d_=new de;class pm{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ht(512,512),this.mapType=vi,this.map=null,this.mapPass=null,this.matrix=new cn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new dm,this._frameExtents=new Ht(1,1),this._viewportCount=1,this._viewports=[new dn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera;f_.setFromMatrixPosition(t.matrixWorld),i.position.copy(f_),d_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(d_),i.updateMatrixWorld(),this._updateMatrix(i,this.matrix,this._frustum)}_updateMatrix(t,i,s,l){Kh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),s.setFromProjectionMatrix(Kh,t.coordinateSystem,t.reversedDepth);const u=this._frameExtents,d=l?l.z/u.x:1,h=l?l.w/u.y:1,p=l?l.x/u.x:0,m=l?l.y/u.y:0;t.coordinateSystem===Ol||t.reversedDepth?i.set(.5*d,0,0,.5*d+p,0,.5*h,0,.5*h+m,0,0,1,0,0,0,0,1):i.set(.5*d,0,0,.5*d+p,0,.5*h,0,.5*h+m,0,0,.5,.5,0,0,0,1),i.multiply(Kh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Au=new de,wu=new _o,ra=new de;class yS extends Tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new cn,this.projectionMatrix=new cn,this.projectionMatrixInverse=new cn,this.coordinateSystem=fa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Au,wu,ra),ra.x===1&&ra.y===1&&ra.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Au,wu,ra.set(1,1,1)).invert()}updateWorldMatrix(t,i,s=!1){super.updateWorldMatrix(t,i,s),this.matrixWorld.decompose(Au,wu,ra),ra.x===1&&ra.y===1&&ra.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Au,wu,ra.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ys=new de,h_=new Ht,p_=new Ht;class ii extends yS{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=mo*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Cl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return mo*2*Math.atan(Math.tan(Cl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){ys.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ys.x,ys.y).multiplyScalar(-t/ys.z),ys.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ys.x,ys.y).multiplyScalar(-t/ys.z)}getViewSize(t,i){return this.getViewBounds(t,h_,p_),i.subVectors(p_,h_)}setViewOffset(t,i,s,l,u,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Cl*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;u+=d.offsetX*l/p,i-=d.offsetY*s/m,l*=d.width/p,s*=d.height/m}const h=this.filmOffset;h!==0&&(u+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class fE extends pm{constructor(){super(new ii(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const i=this.camera,s=mo*2*t.angle*this.focus,l=this.mapSize.width/this.mapSize.height*this.aspect,u=t.distance||i.far;(s!==i.fov||l!==i.aspect||u!==i.far)&&(i.fov=s,i.aspect=l,i.far=u,i.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){const t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}}class dE extends Xu{constructor(t,i,s=0,l=Math.PI/3,u=0,d=2){super(t,i),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Tn.DEFAULT_UP),this.updateMatrix(),this.target=new Tn,this.distance=s,this.angle=l,this.penumbra=u,this.decay=d,this.map=null,this.shadow=new fE}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.angle=this.angle,i.object.decay=this.decay,i.object.penumbra=this.penumbra,i.object.target=this.target.uuid,this.map&&this.map.isTexture&&(i.object.map=this.map.toJSON(t).uuid),i.object.shadow=this.shadow.toJSON(),i}}class hE extends pm{constructor(){super(new ii(90,1,.5,500)),this.isPointLightShadow=!0}}class Qh extends Xu{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new hE}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class mm extends yS{constructor(t=-1,i=1,s=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-t,d=s+t,h=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,d=u+m*this.view.width,h-=g*this.view.offsetY,p=h-g*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class pE extends pm{constructor(){super(new mm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class m_ extends Xu{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tn.DEFAULT_UP),this.updateMatrix(),this.target=new Tn,this.shadow=new pE}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class mE extends Xu{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const io=-90,ao=1;class gE extends Tn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ii(io,ao,t,i);l.layers=this.layers,this.add(l);const u=new ii(io,ao,t,i);u.layers=this.layers,this.add(u);const d=new ii(io,ao,t,i);d.layers=this.layers,this.add(d);const h=new ii(io,ao,t,i);h.layers=this.layers,this.add(h);const p=new ii(io,ao,t,i);p.layers=this.layers,this.add(p);const m=new ii(io,ao,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,u,d,h,p]=i;for(const m of i)this.remove(m);if(t===fa)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Ol)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,p,m,g]=this.children,x=t.getRenderTarget(),v=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),w=t.xr.enabled;t.xr.enabled=!1;const D=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let y=!1;t.isWebGLRenderer===!0?y=t.state.buffers.depth.getReversed():y=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,u),t.setRenderTarget(s,1,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(s,2,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),t.setRenderTarget(s,3,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),t.setRenderTarget(s,4,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),s.texture.generateMipmaps=D,t.setRenderTarget(s,5,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,g),t.setRenderTarget(x,v,M),t.xr.enabled=w,s.texture.needsPMREMUpdate=!0}}class xE extends ii{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Tm=class Tm{constructor(t,i,s,l){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let s=0;s<4;s++)this.elements[s]=t[s+i];return this}set(t,i,s,l){const u=this.elements;return u[0]=t,u[2]=i,u[1]=s,u[3]=l,this}};Tm.prototype.isMatrix2=!0;let g_=Tm;function x_(o,t,i,s){const l=vE(s);switch(i){case cS:return o*t;case nm:return o*t/l.components*l.byteLength;case im:return o*t/l.components*l.byteLength;case nr:return o*t*2/l.components*l.byteLength;case am:return o*t*2/l.components*l.byteLength;case uS:return o*t*3/l.components*l.byteLength;case Xi:return o*t*4/l.components*l.byteLength;case sm:return o*t*4/l.components*l.byteLength;case Du:case Lu:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Uu:case Ou:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case gp:case vp:return Math.max(o,16)*Math.max(t,8)/4;case mp:case xp:return Math.max(o,8)*Math.max(t,8)/2;case _p:case Sp:case bp:case Mp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case yp:case zu:case Ep:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Tp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Ap:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case wp:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Rp:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Cp:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Np:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Dp:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Lp:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Up:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Op:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Pp:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case zp:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Ip:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Bp:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Fp:case Hp:case Gp:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Vp:case kp:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Iu:case Xp:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function vE(o){switch(o){case vi:case sS:return{byteLength:1,components:1};case Ll:case rS:case ma:return{byteLength:2,components:1};case em:case tm:return{byteLength:2,components:4};case pa:case $p:case ki:return{byteLength:4,components:1};case oS:case lS:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jp}}));typeof window<"u"&&(window.__THREE__?ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function bS(){let o=null,t=!1,i=null,s=null;function l(u,d){s=o.requestAnimationFrame(l),i(u,d)}return{start:function(){t!==!0&&i!==null&&o!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function _E(o){const t=new WeakMap;function i(h,p){const m=h.array,g=h.usage,x=m.byteLength,v=o.createBuffer();o.bindBuffer(p,v),o.bufferData(p,m,g),h.onUploadCallback();let M;if(m instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)M=o.HALF_FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=o.SHORT;else if(m instanceof Uint32Array)M=o.UNSIGNED_INT;else if(m instanceof Int32Array)M=o.INT;else if(m instanceof Int8Array)M=o.BYTE;else if(m instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:x}}function s(h,p,m){const g=p.array,x=p.updateRanges;if(o.bindBuffer(m,h),x.length===0)o.bufferSubData(m,0,g);else{x.sort((M,w)=>M.start-w.start);let v=0;for(let M=1;M<x.length;M++){const w=x[v],D=x[M];D.start<=w.start+w.count+1?w.count=Math.max(w.count,D.start+D.count-w.start):(++v,x[v]=D)}x.length=v+1;for(let M=0,w=x.length;M<w;M++){const D=x[M];o.bufferSubData(m,D.start*g.BYTES_PER_ELEMENT,g,D.start,D.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=t.get(h);p&&(o.deleteBuffer(p.buffer),t.delete(h))}function d(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=t.get(h);if(m===void 0)t.set(h,i(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,h,p),m.version=h.version}}return{get:l,remove:u,update:d}}var SE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,bE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ME=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,EE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,TE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,AE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,RE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,CE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,NE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,DE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,LE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,UE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,OE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,PE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,zE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,IE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,BE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,FE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,HE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,GE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,VE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,kE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,XE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,jE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,qE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,WE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,YE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ZE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,KE="gl_FragColor = linearToOutputTexel( gl_FragColor );",QE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,JE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,$E=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,eT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,tT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,iT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,aT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,oT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,dT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,hT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,vT=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_T=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ST=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,yT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bT=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,MT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ET=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,RT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,CT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,NT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,DT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,LT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,UT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,OT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,PT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,IT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,BT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,FT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,HT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,kT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,XT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,WT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,YT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ZT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,KT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,QT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,JT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$T=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,iA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,aA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,sA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,oA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,lA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,uA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,pA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,mA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,gA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_A=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const SA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,wA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,RA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,CA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,NA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,DA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,UA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,OA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,PA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,FA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,GA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,VA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,jA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ZA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,KA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,QA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,JA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$A=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,bt={alphahash_fragment:SE,alphahash_pars_fragment:yE,alphamap_fragment:bE,alphamap_pars_fragment:ME,alphatest_fragment:EE,alphatest_pars_fragment:TE,aomap_fragment:AE,aomap_pars_fragment:wE,batching_pars_vertex:RE,batching_vertex:CE,begin_vertex:NE,beginnormal_vertex:DE,bsdfs:LE,iridescence_fragment:UE,bumpmap_pars_fragment:OE,clipping_planes_fragment:PE,clipping_planes_pars_fragment:zE,clipping_planes_pars_vertex:IE,clipping_planes_vertex:BE,color_fragment:FE,color_pars_fragment:HE,color_pars_vertex:GE,color_vertex:VE,common:kE,cube_uv_reflection_fragment:XE,defaultnormal_vertex:jE,displacementmap_pars_vertex:qE,displacementmap_vertex:WE,emissivemap_fragment:YE,emissivemap_pars_fragment:ZE,colorspace_fragment:KE,colorspace_pars_fragment:QE,envmap_fragment:JE,envmap_common_pars_fragment:$E,envmap_pars_fragment:eT,envmap_pars_vertex:tT,envmap_physical_pars_fragment:dT,envmap_vertex:nT,fog_vertex:iT,fog_pars_vertex:aT,fog_fragment:sT,fog_pars_fragment:rT,gradientmap_pars_fragment:oT,lightmap_pars_fragment:lT,lights_lambert_fragment:cT,lights_lambert_pars_fragment:uT,lights_pars_begin:fT,lights_toon_fragment:hT,lights_toon_pars_fragment:pT,lights_phong_fragment:mT,lights_phong_pars_fragment:gT,lights_physical_fragment:xT,lights_physical_pars_fragment:vT,lights_fragment_begin:_T,lights_fragment_maps:ST,lights_fragment_end:yT,lightprobes_pars_fragment:bT,logdepthbuf_fragment:MT,logdepthbuf_pars_fragment:ET,logdepthbuf_pars_vertex:TT,logdepthbuf_vertex:AT,map_fragment:wT,map_pars_fragment:RT,map_particle_fragment:CT,map_particle_pars_fragment:NT,metalnessmap_fragment:DT,metalnessmap_pars_fragment:LT,morphinstance_vertex:UT,morphcolor_vertex:OT,morphnormal_vertex:PT,morphtarget_pars_vertex:zT,morphtarget_vertex:IT,normal_fragment_begin:BT,normal_fragment_maps:FT,normal_pars_fragment:HT,normal_pars_vertex:GT,normal_vertex:VT,normalmap_pars_fragment:kT,clearcoat_normal_fragment_begin:XT,clearcoat_normal_fragment_maps:jT,clearcoat_pars_fragment:qT,iridescence_pars_fragment:WT,opaque_fragment:YT,packing:ZT,premultiplied_alpha_fragment:KT,project_vertex:QT,dithering_fragment:JT,dithering_pars_fragment:$T,roughnessmap_fragment:eA,roughnessmap_pars_fragment:tA,shadowmap_pars_fragment:nA,shadowmap_pars_vertex:iA,shadowmap_vertex:aA,shadowmask_pars_fragment:sA,skinbase_vertex:rA,skinning_pars_vertex:oA,skinning_vertex:lA,skinnormal_vertex:cA,specularmap_fragment:uA,specularmap_pars_fragment:fA,tonemapping_fragment:dA,tonemapping_pars_fragment:hA,transmission_fragment:pA,transmission_pars_fragment:mA,uv_pars_fragment:gA,uv_pars_vertex:xA,uv_vertex:vA,worldpos_vertex:_A,background_vert:SA,background_frag:yA,backgroundCube_vert:bA,backgroundCube_frag:MA,cube_vert:EA,cube_frag:TA,depth_vert:AA,depth_frag:wA,distance_vert:RA,distance_frag:CA,equirect_vert:NA,equirect_frag:DA,linedashed_vert:LA,linedashed_frag:UA,meshbasic_vert:OA,meshbasic_frag:PA,meshlambert_vert:zA,meshlambert_frag:IA,meshmatcap_vert:BA,meshmatcap_frag:FA,meshnormal_vert:HA,meshnormal_frag:GA,meshphong_vert:VA,meshphong_frag:kA,meshphysical_vert:XA,meshphysical_frag:jA,meshtoon_vert:qA,meshtoon_frag:WA,points_vert:YA,points_frag:ZA,shadow_vert:KA,shadow_frag:QA,sprite_vert:JA,sprite_frag:$A},Xe={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xt}},envmap:{envMap:{value:null},envMapRotation:{value:new xt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xt},normalScale:{value:new Ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new de},probesMax:{value:new de},probesResolution:{value:new de}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new Ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}}},la={basic:{uniforms:Kn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.fog]),vertexShader:bt.meshbasic_vert,fragmentShader:bt.meshbasic_frag},lambert:{uniforms:Kn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new Lt(0)},envMapIntensity:{value:1}}]),vertexShader:bt.meshlambert_vert,fragmentShader:bt.meshlambert_frag},phong:{uniforms:Kn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:bt.meshphong_vert,fragmentShader:bt.meshphong_frag},standard:{uniforms:Kn([Xe.common,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.roughnessmap,Xe.metalnessmap,Xe.fog,Xe.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:bt.meshphysical_vert,fragmentShader:bt.meshphysical_frag},toon:{uniforms:Kn([Xe.common,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.gradientmap,Xe.fog,Xe.lights,{emissive:{value:new Lt(0)}}]),vertexShader:bt.meshtoon_vert,fragmentShader:bt.meshtoon_frag},matcap:{uniforms:Kn([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,{matcap:{value:null}}]),vertexShader:bt.meshmatcap_vert,fragmentShader:bt.meshmatcap_frag},points:{uniforms:Kn([Xe.points,Xe.fog]),vertexShader:bt.points_vert,fragmentShader:bt.points_frag},dashed:{uniforms:Kn([Xe.common,Xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:bt.linedashed_vert,fragmentShader:bt.linedashed_frag},depth:{uniforms:Kn([Xe.common,Xe.displacementmap]),vertexShader:bt.depth_vert,fragmentShader:bt.depth_frag},normal:{uniforms:Kn([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,{opacity:{value:1}}]),vertexShader:bt.meshnormal_vert,fragmentShader:bt.meshnormal_frag},sprite:{uniforms:Kn([Xe.sprite,Xe.fog]),vertexShader:bt.sprite_vert,fragmentShader:bt.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:bt.background_vert,fragmentShader:bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xt}},vertexShader:bt.backgroundCube_vert,fragmentShader:bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:bt.cube_vert,fragmentShader:bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:bt.equirect_vert,fragmentShader:bt.equirect_frag},distance:{uniforms:Kn([Xe.common,Xe.displacementmap,{referencePosition:{value:new de},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:bt.distance_vert,fragmentShader:bt.distance_frag},shadow:{uniforms:Kn([Xe.lights,Xe.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:bt.shadow_vert,fragmentShader:bt.shadow_frag}};la.physical={uniforms:Kn([la.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xt},clearcoatNormalScale:{value:new Ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xt},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xt},transmissionSamplerSize:{value:new Ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xt},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xt},anisotropyVector:{value:new Ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xt}}]),vertexShader:bt.meshphysical_vert,fragmentShader:bt.meshphysical_frag};const Ru={r:0,b:0,g:0},e2=new cn,MS=new xt;MS.set(-1,0,0,0,1,0,0,0,1);function t2(o,t,i,s,l,u){const d=new Lt(0);let h=l===!0?0:1,p,m,g=null,x=0,v=null;function M(z){let k=z.isScene===!0?z.background:null;if(k&&k.isTexture){const C=z.backgroundBlurriness>0;k=t.get(k,C)}return k}function w(z){let k=!1;const C=M(z);C===null?y(d,h):C&&C.isColor&&(y(C,1),k=!0);const P=o.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,u):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(o.autoClear||k)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function D(z,k){const C=M(k);C&&(C.isCubeTexture||C.mapping===Vu)?(m===void 0&&(m=new Dt(new Wt(1,1,1),new ga({name:"BackgroundCubeMaterial",uniforms:go(la.backgroundCube.uniforms),vertexShader:la.backgroundCube.vertexShader,fragmentShader:la.backgroundCube.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(P,U,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),m.material.uniforms.envMap.value=C,m.material.uniforms.backgroundBlurriness.value=k.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(e2.makeRotationFromEuler(k.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(MS),m.material.toneMapped=Ft.getTransfer(C.colorSpace)!==tn,(g!==C||x!==C.version||v!==o.toneMapping)&&(m.material.needsUpdate=!0,g=C,x=C.version,v=o.toneMapping),m.layers.enableAll(),z.unshift(m,m.geometry,m.material,0,0,null)):C&&C.isTexture&&(p===void 0&&(p=new Dt(new ku(2,2),new ga({name:"BackgroundMaterial",uniforms:go(la.background.uniforms),vertexShader:la.background.vertexShader,fragmentShader:la.background.fragmentShader,side:er,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(p)),p.material.uniforms.t2D.value=C,p.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,p.material.toneMapped=Ft.getTransfer(C.colorSpace)!==tn,C.matrixAutoUpdate===!0&&C.updateMatrix(),p.material.uniforms.uvTransform.value.copy(C.matrix),(g!==C||x!==C.version||v!==o.toneMapping)&&(p.material.needsUpdate=!0,g=C,x=C.version,v=o.toneMapping),p.layers.enableAll(),z.unshift(p,p.geometry,p.material,0,0,null))}function y(z,k){z.getRGB(Ru,SS(o)),i.buffers.color.setClear(Ru.r,Ru.g,Ru.b,k,u)}function S(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(z,k=1){d.set(z),h=k,y(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(z){h=z,y(d,h)},render:w,addToRenderList:D,dispose:S}}function n2(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=v(null);let u=l,d=!1;function h(X,Z,se,K,ne){let W=!1;const j=x(X,K,se,Z);u!==j&&(u=j,m(u.object)),W=M(X,K,se,ne),W&&w(X,K,se,ne),ne!==null&&t.update(ne,o.ELEMENT_ARRAY_BUFFER),(W||d)&&(d=!1,C(X,Z,se,K),ne!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(ne).buffer))}function p(){return o.createVertexArray()}function m(X){return o.bindVertexArray(X)}function g(X){return o.deleteVertexArray(X)}function x(X,Z,se,K){const ne=K.wireframe===!0;let W=s[Z.id];W===void 0&&(W={},s[Z.id]=W);const j=X.isInstancedMesh===!0?X.id:0;let ce=W[j];ce===void 0&&(ce={},W[j]=ce);let oe=ce[se.id];oe===void 0&&(oe={},ce[se.id]=oe);let O=oe[ne];return O===void 0&&(O=v(p()),oe[ne]=O),O}function v(X){const Z=[],se=[],K=[];for(let ne=0;ne<i;ne++)Z[ne]=0,se[ne]=0,K[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:se,attributeDivisors:K,object:X,attributes:{},index:null}}function M(X,Z,se,K){const ne=u.attributes,W=Z.attributes;let j=0;const ce=se.getAttributes();for(const oe in ce)if(ce[oe].location>=0){const L=ne[oe];let Ce=W[oe];if(Ce===void 0&&(oe==="instanceMatrix"&&X.instanceMatrix&&(Ce=X.instanceMatrix),oe==="instanceColor"&&X.instanceColor&&(Ce=X.instanceColor)),L===void 0||L.attribute!==Ce||Ce&&L.data!==Ce.data)return!0;j++}return u.attributesNum!==j||u.index!==K}function w(X,Z,se,K){const ne={},W=Z.attributes;let j=0;const ce=se.getAttributes();for(const oe in ce)if(ce[oe].location>=0){let L=W[oe];L===void 0&&(oe==="instanceMatrix"&&X.instanceMatrix&&(L=X.instanceMatrix),oe==="instanceColor"&&X.instanceColor&&(L=X.instanceColor));const Ce={};Ce.attribute=L,L&&L.data&&(Ce.data=L.data),ne[oe]=Ce,j++}u.attributes=ne,u.attributesNum=j,u.index=K}function D(){const X=u.newAttributes;for(let Z=0,se=X.length;Z<se;Z++)X[Z]=0}function y(X){S(X,0)}function S(X,Z){const se=u.newAttributes,K=u.enabledAttributes,ne=u.attributeDivisors;se[X]=1,K[X]===0&&(o.enableVertexAttribArray(X),K[X]=1),ne[X]!==Z&&(o.vertexAttribDivisor(X,Z),ne[X]=Z)}function z(){const X=u.newAttributes,Z=u.enabledAttributes;for(let se=0,K=Z.length;se<K;se++)Z[se]!==X[se]&&(o.disableVertexAttribArray(se),Z[se]=0)}function k(X,Z,se,K,ne,W,j){j===!0?o.vertexAttribIPointer(X,Z,se,ne,W):o.vertexAttribPointer(X,Z,se,K,ne,W)}function C(X,Z,se,K){D();const ne=K.attributes,W=se.getAttributes(),j=Z.defaultAttributeValues;for(const ce in W){const oe=W[ce];if(oe.location>=0){let O=ne[ce];if(O===void 0&&(ce==="instanceMatrix"&&X.instanceMatrix&&(O=X.instanceMatrix),ce==="instanceColor"&&X.instanceColor&&(O=X.instanceColor)),O!==void 0){const L=O.normalized,Ce=O.itemSize,ve=t.get(O);if(ve===void 0)continue;const I=ve.buffer,$=ve.type,_e=ve.bytesPerElement,G=$===o.INT||$===o.UNSIGNED_INT||O.gpuType===$p;if(O.isInterleavedBufferAttribute){const te=O.data,be=te.stride,Te=O.offset;if(te.isInstancedInterleavedBuffer){for(let le=0;le<oe.locationSize;le++)S(oe.location+le,te.meshPerAttribute);X.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let le=0;le<oe.locationSize;le++)y(oe.location+le);o.bindBuffer(o.ARRAY_BUFFER,I);for(let le=0;le<oe.locationSize;le++)k(oe.location+le,Ce/oe.locationSize,$,L,be*_e,(Te+Ce/oe.locationSize*le)*_e,G)}else{if(O.isInstancedBufferAttribute){for(let te=0;te<oe.locationSize;te++)S(oe.location+te,O.meshPerAttribute);X.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let te=0;te<oe.locationSize;te++)y(oe.location+te);o.bindBuffer(o.ARRAY_BUFFER,I);for(let te=0;te<oe.locationSize;te++)k(oe.location+te,Ce/oe.locationSize,$,L,Ce*_e,Ce/oe.locationSize*te*_e,G)}}else if(j!==void 0){const L=j[ce];if(L!==void 0)switch(L.length){case 2:o.vertexAttrib2fv(oe.location,L);break;case 3:o.vertexAttrib3fv(oe.location,L);break;case 4:o.vertexAttrib4fv(oe.location,L);break;default:o.vertexAttrib1fv(oe.location,L)}}}}z()}function P(){N();for(const X in s){const Z=s[X];for(const se in Z){const K=Z[se];for(const ne in K){const W=K[ne];for(const j in W)g(W[j].object),delete W[j];delete K[ne]}}delete s[X]}}function U(X){if(s[X.id]===void 0)return;const Z=s[X.id];for(const se in Z){const K=Z[se];for(const ne in K){const W=K[ne];for(const j in W)g(W[j].object),delete W[j];delete K[ne]}}delete s[X.id]}function F(X){for(const Z in s){const se=s[Z];for(const K in se){const ne=se[K];if(ne[X.id]===void 0)continue;const W=ne[X.id];for(const j in W)g(W[j].object),delete W[j];delete ne[X.id]}}}function T(X){for(const Z in s){const se=s[Z],K=X.isInstancedMesh===!0?X.id:0,ne=se[K];if(ne!==void 0){for(const W in ne){const j=ne[W];for(const ce in j)g(j[ce].object),delete j[ce];delete ne[W]}delete se[K],Object.keys(se).length===0&&delete s[Z]}}}function N(){V(),d=!0,u!==l&&(u=l,m(u.object))}function V(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:N,resetDefaultState:V,dispose:P,releaseStatesOfGeometry:U,releaseStatesOfObject:T,releaseStatesOfProgram:F,initAttributes:D,enableAttribute:y,disableUnusedAttributes:z}}function i2(o,t,i){let s;function l(p){s=p}function u(p,m){o.drawArrays(s,p,m),i.update(m,s,1)}function d(p,m,g){g!==0&&(o.drawArraysInstanced(s,p,m,g),i.update(m,s,g))}function h(p,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,m,0,g);let v=0;for(let M=0;M<g;M++)v+=m[M];i.update(v,s,1)}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h}function a2(o,t,i,s){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(F){return!(F!==Xi&&s.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(F){const T=F===ma&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==vi&&F!==ki&&!T&&s.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE))}function p(F){if(F==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const g=p(m);g!==m&&(ft("WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const x=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&v===!1&&ft("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),S=o.getParameter(o.MAX_VERTEX_ATTRIBS),z=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),k=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),P=o.getParameter(o.MAX_SAMPLES),U=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:x,reversedDepthBuffer:v,maxTextures:M,maxVertexTextures:w,maxTextureSize:D,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:z,maxVaryings:k,maxFragmentUniforms:C,maxSamples:P,samples:U}}function s2(o){const t=this;let i=null,s=0,l=!1,u=!1;const d=new bs,h=new xt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(x,v){const M=x.length!==0||v||s!==0||l;return l=v,s=x.length,M},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,v){i=g(x,v,0)},this.setState=function(x,v,M){const w=x.clippingPlanes,D=x.clipIntersection,y=x.clipShadows,S=o.get(x);if(!l||w===null||w.length===0||u&&!y)u?g(null):m();else{const z=u?0:s,k=z*4;let C=S.clippingState||null;p.value=C,C=g(w,v,k,M);for(let P=0;P!==k;++P)C[P]=i[P];S.clippingState=C,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=z}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(x,v,M,w){const D=x!==null?x.length:0;let y=null;if(D!==0){if(y=p.value,w!==!0||y===null){const S=M+D*4,z=v.matrixWorldInverse;h.getNormalMatrix(z),(y===null||y.length<S)&&(y=new Float32Array(S));for(let k=0,C=M;k!==D;++k,C+=4)d.copy(x[k]).applyMatrix4(z,h),d.normal.toArray(y,C),y[C+3]=d.constant}p.value=y,p.needsUpdate=!0}return t.numPlanes=D,t.numIntersection=0,y}}const lo=4,r2=6,o2=20,l2=256,Ml=new mm,v_=new Lt;let Jh=null,$h=0,ep=0,tp=!1;const c2=new de,Qs=new de;class __{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,u={}){const{size:d=256,position:h=c2}=u;Jh=this._renderer.getRenderTarget(),$h=this._renderer.getActiveCubeFace(),ep=this._renderer.getActiveMipmapLevel(),tp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,s,l,p,h),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=b_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=y_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Jh,$h,ep),this._renderer.xr.enabled=tp,t.scissorTest=!1,so(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===tr||t.mapping===po?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Jh=this._renderer.getRenderTarget(),$h=this._renderer.getActiveCubeFace(),ep=this._renderer.getActiveMipmapLevel(),tp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:ma,format:Xi,colorSpace:Bu,depthBuffer:!1},l=S_(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=S_(t,i,s);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=u2(u)),this._blurMaterial=d2(u,t,i),this._ggxMaterial=f2(u,t,i)}return l}_compileMaterial(t){const i=new Dt(new xa,t);this._renderer.compile(i,Ml)}_sceneToCubeUV(t,i,s,l,u){const p=new ii(90,1,i,s),m=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],x=this._renderer,v=x.autoClear,M=x.toneMapping;x.getClearColor(v_),x.toneMapping=da,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Dt(new Wt,new fm({name:"PMREM.Background",side:ai,depthWrite:!1,depthTest:!1})));const D=this._backgroundBox,y=D.material;let S=!1;const z=t.background;z?z.isColor&&(y.color.copy(z),t.background=null,S=!0):(y.color.copy(v_),S=!0);for(let k=0;k<6;k++){const C=k%3;C===0?(p.up.set(0,m[k],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+g[k],u.y,u.z)):C===1?(p.up.set(0,0,m[k]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+g[k],u.z)):(p.up.set(0,m[k],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+g[k]));const P=this._cubeSize;so(l,C*P,k>2?P:0,P,P),x.setRenderTarget(l),S&&x.render(D,p),x.render(t,p)}x.toneMapping=M,x.autoClear=v,t.background=z}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===tr||t.mapping===po;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=b_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=y_());const u=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=u;const h=u.uniforms;h.envMap.value=t;const p=this._cubeSize;so(i,0,0,3*p,2*p),s.setRenderTarget(i),s.render(d,Ml)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(t,u-1,u);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,u=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[s];h.material=d;const p=d.uniforms,m=s/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),x=Math.sqrt(m*m-g*g),v=m*1.25,M=x*v,{_lodMax:w}=this,D=this._sizeLods[s],y=3*D*(s>w-lo?s-w+lo:0),S=4*(this._cubeSize-D);p.envMap.value=t.texture,p.roughness.value=M,p.mipInt.value=w-i,so(u,y,S,3*D,2*D),l.setRenderTarget(u),l.render(h,Ml),p.envMap.value=u.texture,p.roughness.value=0,p.mipInt.value=w-s,so(t,y,S,3*D,2*D),l.setRenderTarget(t),l.render(h,Ml)}_blur(t,i,s,l){const u=this._pingPongRenderTarget,d=Math.min(l,Math.PI)/Math.SQRT2;this._blurPass(t,u,i,s,d),this._blurPass(u,t,s,s,d)}_blurPass(t,i,s,l,u){const d=this._renderer,h=this._blurMaterial,p=this._lodMeshes[l];p.material=h;const m=h.uniforms;m.envMap.value=t.texture,m.sigma.value=u,m.mipInt.value=this._lodMax-s;const g=this._sizeLods[l],x=3*g*(l>this._lodMax-lo?l-this._lodMax+lo:0),v=4*(this._cubeSize-g);so(i,x,v,3*g,2*g),d.setRenderTarget(i),d.render(p,Ml)}}function u2(o){const t=[],i=[];let s=o;const l=o-lo+1+r2;for(let u=0;u<l;u++){const d=Math.pow(2,s);t.push(d);const h=1/(d-2),p=-h,m=1+h,g=[p,p,m,p,m,m,p,p,m,m,p,m],x=6,v=6,M=3,w=new Float32Array(M*v*x),D=new Float32Array(M*v*x);for(let S=0;S<x;S++){const z=S%3*2/3-1,k=S>2?0:-1,C=[z,k,0,z+2/3,k,0,z+2/3,k+1,0,z,k,0,z+2/3,k+1,0,z,k+1,0];w.set(C,M*v*S);for(let P=0;P<v;P++){const U=g[P*2]*2-1,F=g[P*2+1]*2-1;S===0?Qs.set(1,F,U):S===1?Qs.set(-U,1,-F):S===2?Qs.set(-U,F,1):S===3?Qs.set(-1,F,-U):S===4?Qs.set(-U,-1,F):Qs.set(U,F,-1),Qs.toArray(D,(S*v+P)*M)}}const y=new xa;y.setAttribute("position",new ha(w,M)),y.setAttribute("outputDirection",new ha(D,M)),i.push(new Dt(y,null)),s>lo&&s--}return{lodMeshes:i,sizeLods:t}}function S_(o,t,i){const s=new ji(o,t,i);return s.texture.mapping=Vu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function so(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function f2(o,t,i){return new ga({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:l2,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ju(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function d2(o,t,i){return new ga({name:"SphericalGaussianBlur",defines:{SAMPLES:o2,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ju(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function y_(){return new ga({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ju(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function b_(){return new ga({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ju(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function ju(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class ES extends ji{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new vS(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Wt(5,5,5),u=new ga({name:"CubemapFromEquirect",uniforms:go(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:ai,blending:Fa});u.uniforms.tEquirect.value=i;const d=new Dt(l,u),h=i.minFilter;return i.minFilter===Js&&(i.minFilter=Vn),new gE(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const u=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,s,l);t.setRenderTarget(u)}}function h2(o){let t=new WeakMap,i=new WeakMap,s=null;function l(v,M=!1){return v==null?null:M?d(v):u(v)}function u(v){if(v&&v.isTexture){const M=v.mapping;if(M===Ah||M===wh)if(t.has(v)){const w=t.get(v).texture;return h(w,v.mapping)}else{const w=v.image;if(w&&w.height>0){const D=new ES(w.height);return D.fromEquirectangularTexture(o,v),t.set(v,D),v.addEventListener("dispose",m),h(D.texture,v.mapping)}else return null}}return v}function d(v){if(v&&v.isTexture){const M=v.mapping,w=M===Ah||M===wh,D=M===tr||M===po;if(w||D){let y=i.get(v);const S=y!==void 0?y.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==S)return s===null&&(s=new __(o)),y=w?s.fromEquirectangular(v,y):s.fromCubemap(v,y),y.texture.pmremVersion=v.pmremVersion,i.set(v,y),y.texture;if(y!==void 0)return y.texture;{const z=v.image;return w&&z&&z.height>0||D&&z&&p(z)?(s===null&&(s=new __(o)),y=w?s.fromEquirectangular(v):s.fromCubemap(v),y.texture.pmremVersion=v.pmremVersion,i.set(v,y),v.addEventListener("dispose",g),y.texture):null}}}return v}function h(v,M){return M===Ah?v.mapping=tr:M===wh&&(v.mapping=po),v}function p(v){let M=0;const w=6;for(let D=0;D<w;D++)v[D]!==void 0&&M++;return M===w}function m(v){const M=v.target;M.removeEventListener("dispose",m);const w=t.get(M);w!==void 0&&(t.delete(M),w.dispose())}function g(v){const M=v.target;M.removeEventListener("dispose",g);const w=i.get(M);w!==void 0&&(i.delete(M),w.dispose())}function x(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:x}}function p2(o){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=o.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&uo("WebGLRenderer: "+s+" extension not supported."),l}}}function m2(o,t,i,s){const l={},u=new WeakMap;function d(x){const v=x.target;v.index!==null&&t.remove(v.index);for(const w in v.attributes)t.remove(v.attributes[w]);v.removeEventListener("dispose",d),delete l[v.id];const M=u.get(v);M&&(t.remove(M),u.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function h(x,v){return l[v.id]===!0||(v.addEventListener("dispose",d),l[v.id]=!0,i.memory.geometries++),v}function p(x){const v=x.attributes;for(const M in v)t.update(v[M],o.ARRAY_BUFFER)}function m(x){const v=[],M=x.index,w=x.attributes.position;let D=0;if(w===void 0)return;if(M!==null){const z=M.array;D=M.version;for(let k=0,C=z.length;k<C;k+=3){const P=z[k+0],U=z[k+1],F=z[k+2];v.push(P,U,U,F,F,P)}}else{const z=w.array;D=w.version;for(let k=0,C=z.length/3-1;k<C;k+=3){const P=k+0,U=k+1,F=k+2;v.push(P,U,U,F,F,P)}}const y=new(w.count>=65535?gS:mS)(v,1);y.version=D;const S=u.get(x);S&&t.remove(S),u.set(x,y)}function g(x){const v=u.get(x);if(v){const M=x.index;M!==null&&v.version<M.version&&m(x)}else m(x);return u.get(x)}return{get:h,update:p,getWireframeAttribute:g}}function g2(o,t,i){let s;function l(x){s=x}let u,d;function h(x){u=x.type,d=x.bytesPerElement}function p(x,v){o.drawElements(s,v,u,x*d),i.update(v,s,1)}function m(x,v,M){M!==0&&(o.drawElementsInstanced(s,v,u,x*d,M),i.update(v,s,M))}function g(x,v,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,v,0,u,x,0,M);let D=0;for(let y=0;y<M;y++)D+=v[y];i.update(D,s,1)}this.setMode=l,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=g}function x2(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:Xt("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function v2(o,t,i){const s=new WeakMap,l=new dn;function u(d,h,p){const m=d.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=g!==void 0?g.length:0;let v=s.get(h);if(v===void 0||v.count!==x){let V=function(){T.dispose(),s.delete(h),h.removeEventListener("dispose",V)};var M=V;v!==void 0&&v.texture.dispose();const w=h.morphAttributes.position!==void 0,D=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],z=h.morphAttributes.normal||[],k=h.morphAttributes.color||[];let C=0;w===!0&&(C=1),D===!0&&(C=2),y===!0&&(C=3);let P=h.attributes.position.count*C,U=1;P>t.maxTextureSize&&(U=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const F=new Float32Array(P*U*4*x),T=new dS(F,P,U,x);T.type=ki,T.needsUpdate=!0;const N=C*4;for(let X=0;X<x;X++){const Z=S[X],se=z[X],K=k[X],ne=P*U*4*X;for(let W=0;W<Z.count;W++){const j=W*N;w===!0&&(l.fromBufferAttribute(Z,W),F[ne+j+0]=l.x,F[ne+j+1]=l.y,F[ne+j+2]=l.z,F[ne+j+3]=0),D===!0&&(l.fromBufferAttribute(se,W),F[ne+j+4]=l.x,F[ne+j+5]=l.y,F[ne+j+6]=l.z,F[ne+j+7]=0),y===!0&&(l.fromBufferAttribute(K,W),F[ne+j+8]=l.x,F[ne+j+9]=l.y,F[ne+j+10]=l.z,F[ne+j+11]=K.itemSize===4?l.w:1)}}v={count:x,texture:T,size:new Ht(P,U)},s.set(h,v),h.addEventListener("dispose",V)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let w=0;for(let y=0;y<m.length;y++)w+=m[y];const D=h.morphTargetsRelative?1:1-w;p.getUniforms().setValue(o,"morphTargetBaseInfluence",D),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",v.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:u}}function _2(o,t,i,s,l){let u=new WeakMap;function d(m){const g=l.render.frame,x=m.geometry,v=t.get(m,x);if(u.get(v)!==g&&(t.update(v),u.set(v,g)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),u.get(m)!==g&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),u.set(m,g))),m.isSkinnedMesh){const M=m.skeleton;u.get(M)!==g&&(M.update(),u.set(M,g))}return v}function h(){u=new WeakMap}function p(m){const g=m.target;g.removeEventListener("dispose",p),s.releaseStatesOfObject(g),i.remove(g.instanceMatrix),g.instanceColor!==null&&i.remove(g.instanceColor)}return{update:d,dispose:h}}const S2={[Q_]:"LINEAR_TONE_MAPPING",[J_]:"REINHARD_TONE_MAPPING",[$_]:"CINEON_TONE_MAPPING",[eS]:"ACES_FILMIC_TONE_MAPPING",[nS]:"AGX_TONE_MAPPING",[iS]:"NEUTRAL_TONE_MAPPING",[tS]:"CUSTOM_TONE_MAPPING"};function y2(o,t,i,s,l,u){const d=new ji(t,i,{type:o,depthBuffer:l,stencilBuffer:u,samples:s?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let h=null,p=null;const m=new xa;m.setAttribute("position",new Li([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Li([0,2,0,0,2,0],2));const g=new lE({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),x=new Dt(m,g),v=new mm(-1,1,1,-1,0,1);let M=null,w=null,D=!1,y,S=null,z=[],k=!1;this.setSize=function(C,P){d.setSize(C,P),h!==null&&h.setSize(C,P),p!==null&&p.setSize(C,P);for(let U=0;U<z.length;U++){const F=z[U];F.setSize&&F.setSize(C,P)}},this.setEffects=function(C){z=C,k=z.length>0&&z[0].isRenderPass===!0;const P=d.width,U=d.height;z.length>0&&h===null&&(h=new ji(P,U,{type:ma,depthBuffer:!1,stencilBuffer:!1}),p=new ji(P,U,{type:ma,depthBuffer:!1,stencilBuffer:!1}));for(let F=0;F<z.length;F++){const T=z[F];T.setSize&&T.setSize(P,U)}},this.begin=function(C,P){if(D||C.toneMapping===da&&z.length===0)return!1;if(S=P,P!==null){const U=P.width,F=P.height;(d.width!==U||d.height!==F)&&this.setSize(U,F)}return k===!1&&C.setRenderTarget(d),y=C.toneMapping,C.toneMapping=da,!0},this.hasRenderPass=function(){return k},this.end=function(C,P){C.toneMapping=y,D=!0;let U=d,F=h;for(let T=0;T<z.length;T++){const N=z[T];N.enabled!==!1&&(N.render(C,F,U,P),N.needsSwap!==!1&&(U=F,F=F===h?p:h))}if(M!==C.outputColorSpace||w!==C.toneMapping){M=C.outputColorSpace,w=C.toneMapping,g.defines={},Ft.getTransfer(M)===tn&&(g.defines.SRGB_TRANSFER="");const T=S2[w];T&&(g.defines[T]=""),g.needsUpdate=!0}g.uniforms.tDiffuse.value=U.texture,C.setRenderTarget(S),C.render(x,v),S=null,D=!1},this.isCompositing=function(){return D},this.dispose=function(){d.dispose(),h!==null&&h.dispose(),p!==null&&p.dispose(),m.dispose(),g.dispose()}}const TS=new Qn,qp=new Pl(1,1),AS=new dS,wS=new I1,RS=new vS,M_=[],E_=[],T_=new Float32Array(16),A_=new Float32Array(9),w_=new Float32Array(4);function So(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let u=M_[l];if(u===void 0&&(u=new Float32Array(l),M_[l]=u),t!==0){s.toArray(u,0);for(let d=1,h=0;d!==t;++d)h+=i,o[d].toArray(u,h)}return u}function An(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function wn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function qu(o,t){let i=E_[t];i===void 0&&(i=new Int32Array(t),E_[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function b2(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function M2(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(An(i,t))return;o.uniform2fv(this.addr,t),wn(i,t)}}function E2(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(An(i,t))return;o.uniform3fv(this.addr,t),wn(i,t)}}function T2(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(An(i,t))return;o.uniform4fv(this.addr,t),wn(i,t)}}function A2(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(An(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),wn(i,t)}else{if(An(i,s))return;w_.set(s),o.uniformMatrix2fv(this.addr,!1,w_),wn(i,s)}}function w2(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(An(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),wn(i,t)}else{if(An(i,s))return;A_.set(s),o.uniformMatrix3fv(this.addr,!1,A_),wn(i,s)}}function R2(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(An(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),wn(i,t)}else{if(An(i,s))return;T_.set(s),o.uniformMatrix4fv(this.addr,!1,T_),wn(i,s)}}function C2(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function N2(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(An(i,t))return;o.uniform2iv(this.addr,t),wn(i,t)}}function D2(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(An(i,t))return;o.uniform3iv(this.addr,t),wn(i,t)}}function L2(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(An(i,t))return;o.uniform4iv(this.addr,t),wn(i,t)}}function U2(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function O2(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(An(i,t))return;o.uniform2uiv(this.addr,t),wn(i,t)}}function P2(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(An(i,t))return;o.uniform3uiv(this.addr,t),wn(i,t)}}function z2(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(An(i,t))return;o.uniform4uiv(this.addr,t),wn(i,t)}}function I2(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(qp.compareFunction=i.isReversedDepthBuffer()?om:rm,u=qp):u=TS,i.setTexture2D(t||u,l)}function B2(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||wS,l)}function F2(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||RS,l)}function H2(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||AS,l)}function G2(o){switch(o){case 5126:return b2;case 35664:return M2;case 35665:return E2;case 35666:return T2;case 35674:return A2;case 35675:return w2;case 35676:return R2;case 5124:case 35670:return C2;case 35667:case 35671:return N2;case 35668:case 35672:return D2;case 35669:case 35673:return L2;case 5125:return U2;case 36294:return O2;case 36295:return P2;case 36296:return z2;case 35678:case 36198:case 36298:case 36306:case 35682:return I2;case 35679:case 36299:case 36307:return B2;case 35680:case 36300:case 36308:case 36293:return F2;case 36289:case 36303:case 36311:case 36292:return H2}}function V2(o,t){o.uniform1fv(this.addr,t)}function k2(o,t){const i=So(t,this.size,2);o.uniform2fv(this.addr,i)}function X2(o,t){const i=So(t,this.size,3);o.uniform3fv(this.addr,i)}function j2(o,t){const i=So(t,this.size,4);o.uniform4fv(this.addr,i)}function q2(o,t){const i=So(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function W2(o,t){const i=So(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function Y2(o,t){const i=So(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function Z2(o,t){o.uniform1iv(this.addr,t)}function K2(o,t){o.uniform2iv(this.addr,t)}function Q2(o,t){o.uniform3iv(this.addr,t)}function J2(o,t){o.uniform4iv(this.addr,t)}function $2(o,t){o.uniform1uiv(this.addr,t)}function ew(o,t){o.uniform2uiv(this.addr,t)}function tw(o,t){o.uniform3uiv(this.addr,t)}function nw(o,t){o.uniform4uiv(this.addr,t)}function iw(o,t,i){const s=this.cache,l=t.length,u=qu(i,l);An(s,u)||(o.uniform1iv(this.addr,u),wn(s,u));let d;this.type===o.SAMPLER_2D_SHADOW?d=qp:d=TS;for(let h=0;h!==l;++h)i.setTexture2D(t[h]||d,u[h])}function aw(o,t,i){const s=this.cache,l=t.length,u=qu(i,l);An(s,u)||(o.uniform1iv(this.addr,u),wn(s,u));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||wS,u[d])}function sw(o,t,i){const s=this.cache,l=t.length,u=qu(i,l);An(s,u)||(o.uniform1iv(this.addr,u),wn(s,u));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||RS,u[d])}function rw(o,t,i){const s=this.cache,l=t.length,u=qu(i,l);An(s,u)||(o.uniform1iv(this.addr,u),wn(s,u));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||AS,u[d])}function ow(o){switch(o){case 5126:return V2;case 35664:return k2;case 35665:return X2;case 35666:return j2;case 35674:return q2;case 35675:return W2;case 35676:return Y2;case 5124:case 35670:return Z2;case 35667:case 35671:return K2;case 35668:case 35672:return Q2;case 35669:case 35673:return J2;case 5125:return $2;case 36294:return ew;case 36295:return tw;case 36296:return nw;case 35678:case 36198:case 36298:case 36306:case 35682:return iw;case 35679:case 36299:case 36307:return aw;case 35680:case 36300:case 36308:case 36293:return sw;case 36289:case 36303:case 36311:case 36292:return rw}}class lw{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=G2(i.type)}}class cw{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=ow(i.type)}}class uw{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(t,i[h.id],s)}}}const np=/(\w+)(\])?(\[|\.)?/g;function R_(o,t){o.seq.push(t),o.map[t.id]=t}function fw(o,t,i){const s=o.name,l=s.length;for(np.lastIndex=0;;){const u=np.exec(s),d=np.lastIndex;let h=u[1];const p=u[2]==="]",m=u[3];if(p&&(h=h|0),m===void 0||m==="["&&d+2===l){R_(i,m===void 0?new lw(h,o,t):new cw(h,o,t));break}else{let x=i.map[h];x===void 0&&(x=new uw(h),R_(i,x)),i=x}}}class Pu{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const h=t.getActiveUniform(i,d),p=t.getUniformLocation(i,h.name);fw(h,p,this)}const l=[],u=[];for(const d of this.seq)d.type===t.SAMPLER_2D_SHADOW||d.type===t.SAMPLER_CUBE_SHADOW||d.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(d):u.push(d);l.length>0&&(this.seq=l.concat(u))}setValue(t,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],p=s[h.id];p.needsUpdate!==!1&&h.setValue(t,p.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,u=t.length;l!==u;++l){const d=t[l];d.id in i&&s.push(d)}return s}}function C_(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const dw=37297;let hw=0;function pw(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let d=l;d<u;d++){const h=d+1;s.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}const N_=new xt;function mw(o){Ft._getMatrix(N_,Ft.workingColorSpace,o);const t=`mat3( ${N_.elements.map(i=>i.toFixed(4))} )`;switch(Ft.getTransfer(o)){case Fu:return[t,"LinearTransferOETF"];case tn:return[t,"sRGBTransferOETF"];default:return ft("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function D_(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),u=(o.getShaderInfoLog(t)||"").trim();if(s&&u==="")return"";const d=/ERROR: 0:(\d+)/.exec(u);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+u+`

`+pw(o.getShaderSource(t),h)}else return u}function gw(o,t){const i=mw(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const xw={[Q_]:"Linear",[J_]:"Reinhard",[$_]:"Cineon",[eS]:"ACESFilmic",[nS]:"AgX",[iS]:"Neutral",[tS]:"Custom"};function vw(o,t){const i=xw[t];return i===void 0?(ft("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Cu=new de;function _w(){Ft.getLuminanceCoefficients(Cu);const o=Cu.x.toFixed(4),t=Cu.y.toFixed(4),i=Cu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Sw(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wl).join(`
`)}function yw(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function bw(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(t,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(t,d),locationSize:h}}return i}function wl(o){return o!==""}function L_(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function U_(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Mw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wp(o){return o.replace(Mw,Tw)}const Ew=new Map;function Tw(o,t){let i=bt[t];if(i===void 0){const s=Ew.get(t);if(s!==void 0)i=bt[s],ft('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Wp(i)}const Aw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function O_(o){return o.replace(Aw,ww)}function ww(o,t,i,s){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function P_(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const Rw={[Nu]:"SHADOWMAP_TYPE_PCF",[Tl]:"SHADOWMAP_TYPE_VSM"};function Cw(o){return Rw[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Nw={[tr]:"ENVMAP_TYPE_CUBE",[po]:"ENVMAP_TYPE_CUBE",[Vu]:"ENVMAP_TYPE_CUBE_UV"};function Dw(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":Nw[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const Lw={[po]:"ENVMAP_MODE_REFRACTION"};function Uw(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":Lw[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Ow={[K_]:"ENVMAP_BLENDING_MULTIPLY",[$M]:"ENVMAP_BLENDING_MIX",[e1]:"ENVMAP_BLENDING_ADD"};function Pw(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":Ow[o.combine]||"ENVMAP_BLENDING_NONE"}function zw(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function Iw(o,t,i,s){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const p=Cw(i),m=Dw(i),g=Uw(i),x=Pw(i),v=zw(i),M=Sw(i),w=yw(u),D=l.createProgram();let y,S,z=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,w].filter(wl).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,w].filter(wl).join(`
`),S.length>0&&(S+=`
`)):(y=[P_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,w,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wl).join(`
`),S=[P_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,w,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+g:"",i.envMap?"#define "+x:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==da?"#define TONE_MAPPING":"",i.toneMapping!==da?bt.tonemapping_pars_fragment:"",i.toneMapping!==da?vw("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",bt.colorspace_pars_fragment,gw("linearToOutputTexel",i.outputColorSpace),_w(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(wl).join(`
`)),d=Wp(d),d=L_(d,i),d=U_(d,i),h=Wp(h),h=L_(h,i),h=U_(h,i),d=O_(d),h=O_(h),i.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",i.glslVersion===kv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===kv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const k=z+y+d,C=z+S+h,P=C_(l,l.VERTEX_SHADER,k),U=C_(l,l.FRAGMENT_SHADER,C);l.attachShader(D,P),l.attachShader(D,U),i.index0AttributeName!==void 0?l.bindAttribLocation(D,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(D,0,"position"),l.linkProgram(D);function F(X){if(o.debug.checkShaderErrors){const Z=l.getProgramInfoLog(D)||"",se=l.getShaderInfoLog(P)||"",K=l.getShaderInfoLog(U)||"",ne=Z.trim(),W=se.trim(),j=K.trim();let ce=!0,oe=!0;if(l.getProgramParameter(D,l.LINK_STATUS)===!1)if(ce=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,D,P,U);else{const O=D_(l,P,"vertex"),L=D_(l,U,"fragment");Xt("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(D,l.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+ne+`
`+O+`
`+L)}else ne!==""?ft("WebGLProgram: Program Info Log:",ne):(W===""||j==="")&&(oe=!1);oe&&(X.diagnostics={runnable:ce,programLog:ne,vertexShader:{log:W,prefix:y},fragmentShader:{log:j,prefix:S}})}l.deleteShader(P),l.deleteShader(U),T=new Pu(l,D),N=bw(l,D)}let T;this.getUniforms=function(){return T===void 0&&F(this),T};let N;this.getAttributes=function(){return N===void 0&&F(this),N};let V=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=l.getProgramParameter(D,dw)),V},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(D),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=hw++,this.cacheKey=t,this.usedTimes=1,this.program=D,this.vertexShader=P,this.fragmentShader=U,this}let Bw=0;class Fw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,i,s){const l=this._getShaderCacheForMaterial(t);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new Hw(t),i.set(t,s)),s}}class Hw{constructor(t){this.id=Bw++,this.code=t,this.usedTimes=0}}function Gw(o){return o===nr||o===zu||o===Iu}function Vw(o,t,i,s,l,u){const d=new hS,h=new Fw,p=new Set,m=[],g=new Map,x=s.logarithmicDepthBuffer;let v=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(T){return p.add(T),T===0?"uv":`uv${T}`}function D(T,N,V,X,Z,se){const K=X.fog,ne=Z.geometry,W=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?X.environment:null,j=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,ce=t.get(T.envMap||W,j),oe=ce&&ce.mapping===Vu?ce.image.height:null,O=M[T.type];T.precision!==null&&(v=s.getMaxPrecision(T.precision),v!==T.precision&&ft("WebGLProgram.getParameters:",T.precision,"not supported, using",v,"instead."));const L=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Ce=L!==void 0?L.length:0;let ve=0;ne.morphAttributes.position!==void 0&&(ve=1),ne.morphAttributes.normal!==void 0&&(ve=2),ne.morphAttributes.color!==void 0&&(ve=3);let I,$,_e,G;if(O){const It=la[O];I=It.vertexShader,$=It.fragmentShader}else{I=T.vertexShader,$=T.fragmentShader;const It=h.getVertexShaderStage(T),pt=h.getFragmentShaderStage(T);h.update(T,It,pt),_e=It.id,G=pt.id}const te=o.getRenderTarget(),be=o.state.buffers.depth.getReversed(),Te=Z.isInstancedMesh===!0,le=Z.isBatchedMesh===!0,Ae=!!T.map,De=!!T.matcap,Ue=!!ce,nt=!!T.aoMap,st=!!T.lightMap,Ye=!!T.bumpMap&&T.wireframe===!1,$e=!!T.normalMap,Mt=!!T.displacementMap,Vt=!!T.emissiveMap,yt=!!T.metalnessMap,kt=!!T.roughnessMap,Q=T.anisotropy>0,Qt=T.clearcoat>0,Et=T.dispersion>0,B=T.retroreflectivity>0,E=T.iridescence>0,re=T.sheen>0,fe=T.transmission>0,Se=Q&&!!T.anisotropyMap,Le=Qt&&!!T.clearcoatMap,Oe=Qt&&!!T.clearcoatNormalMap,ye=Qt&&!!T.clearcoatRoughnessMap,Re=E&&!!T.iridescenceMap,ze=E&&!!T.iridescenceThicknessMap,at=re&&!!T.sheenColorMap,Ge=re&&!!T.sheenRoughnessMap,He=!!T.specularMap,We=!!T.specularColorMap,ot=!!T.specularIntensityMap,ht=fe&&!!T.transmissionMap,J=fe&&!!T.thicknessMap,Pe=!!T.gradientMap,we=!!T.alphaMap,Ie=T.alphaTest>0,qe=!!T.alphaHash,Ne=!!T.extensions;let it=da;T.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(it=o.toneMapping);const je={shaderID:O,shaderType:T.type,shaderName:T.name,vertexShader:I,fragmentShader:$,defines:T.defines,customVertexShaderID:_e,customFragmentShaderID:G,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:v,batching:le,batchingColor:le&&Z._colorsTexture!==null,instancing:Te,instancingColor:Te&&Z.instanceColor!==null,instancingMorph:Te&&Z.morphTexture!==null,outputColorSpace:te===null?o.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Ft.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Ae,matcap:De,envMap:Ue,envMapMode:Ue&&ce.mapping,envMapCubeUVHeight:oe,aoMap:nt,lightMap:st,bumpMap:Ye,normalMap:$e,displacementMap:Mt,emissiveMap:Vt,normalMapObjectSpace:$e&&T.normalMapType===i1,normalMapTangentSpace:$e&&T.normalMapType===jp,packedNormalMap:$e&&T.normalMapType===jp&&Gw(T.normalMap.format),metalnessMap:yt,roughnessMap:kt,anisotropy:Q,anisotropyMap:Se,clearcoat:Qt,clearcoatMap:Le,clearcoatNormalMap:Oe,clearcoatRoughnessMap:ye,dispersion:Et,retroreflection:B,iridescence:E,iridescenceMap:Re,iridescenceThicknessMap:ze,sheen:re,sheenColorMap:at,sheenRoughnessMap:Ge,specularMap:He,specularColorMap:We,specularIntensityMap:ot,transmission:fe,transmissionMap:ht,thicknessMap:J,gradientMap:Pe,opaque:T.transparent===!1&&T.blending===Rl&&T.alphaToCoverage===!1,alphaMap:we,alphaTest:Ie,alphaHash:qe,combine:T.combine,mapUv:Ae&&w(T.map.channel),aoMapUv:nt&&w(T.aoMap.channel),lightMapUv:st&&w(T.lightMap.channel),bumpMapUv:Ye&&w(T.bumpMap.channel),normalMapUv:$e&&w(T.normalMap.channel),displacementMapUv:Mt&&w(T.displacementMap.channel),emissiveMapUv:Vt&&w(T.emissiveMap.channel),metalnessMapUv:yt&&w(T.metalnessMap.channel),roughnessMapUv:kt&&w(T.roughnessMap.channel),anisotropyMapUv:Se&&w(T.anisotropyMap.channel),clearcoatMapUv:Le&&w(T.clearcoatMap.channel),clearcoatNormalMapUv:Oe&&w(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&w(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&w(T.iridescenceMap.channel),iridescenceThicknessMapUv:ze&&w(T.iridescenceThicknessMap.channel),sheenColorMapUv:at&&w(T.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&w(T.sheenRoughnessMap.channel),specularMapUv:He&&w(T.specularMap.channel),specularColorMapUv:We&&w(T.specularColorMap.channel),specularIntensityMapUv:ot&&w(T.specularIntensityMap.channel),transmissionMapUv:ht&&w(T.transmissionMap.channel),thicknessMapUv:J&&w(T.thicknessMap.channel),alphaMapUv:we&&w(T.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&($e||Q),vertexNormals:!!ne.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!ne.attributes.uv&&(Ae||we),fog:!!K,useFog:T.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||ne.attributes.normal===void 0&&$e===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:be,skinning:Z.isSkinnedMesh===!0,hasPositionAttribute:ne.attributes.position!==void 0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:ve,numSunLights:N.sun.length,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numSunLightShadows:N.sunShadowMap.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:se.length,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:T.dithering,shadowMapEnabled:o.shadowMap.enabled&&V.length>0,shadowMapType:o.shadowMap.type,toneMapping:it,decodeVideoTexture:Ae&&T.map.isVideoTexture===!0&&Ft.getTransfer(T.map.colorSpace)===tn,decodeVideoTextureEmissive:Vt&&T.emissiveMap.isVideoTexture===!0&&Ft.getTransfer(T.emissiveMap.colorSpace)===tn,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ca,flipSided:T.side===ai,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ne&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&T.extensions.multiDraw===!0||le)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return je.vertexUv1s=p.has(1),je.vertexUv2s=p.has(2),je.vertexUv3s=p.has(3),p.clear(),je}function y(T){const N=[];if(T.shaderID?N.push(T.shaderID):(N.push(T.customVertexShaderID),N.push(T.customFragmentShaderID)),T.defines!==void 0)for(const V in T.defines)N.push(V),N.push(T.defines[V]);return T.isRawShaderMaterial===!1&&(S(N,T),z(N,T),N.push(o.outputColorSpace)),N.push(T.customProgramCacheKey),N.join()}function S(T,N){T.push(N.precision),T.push(N.outputColorSpace),T.push(N.envMapMode),T.push(N.envMapCubeUVHeight),T.push(N.mapUv),T.push(N.alphaMapUv),T.push(N.lightMapUv),T.push(N.aoMapUv),T.push(N.bumpMapUv),T.push(N.normalMapUv),T.push(N.displacementMapUv),T.push(N.emissiveMapUv),T.push(N.metalnessMapUv),T.push(N.roughnessMapUv),T.push(N.anisotropyMapUv),T.push(N.clearcoatMapUv),T.push(N.clearcoatNormalMapUv),T.push(N.clearcoatRoughnessMapUv),T.push(N.iridescenceMapUv),T.push(N.iridescenceThicknessMapUv),T.push(N.sheenColorMapUv),T.push(N.sheenRoughnessMapUv),T.push(N.specularMapUv),T.push(N.specularColorMapUv),T.push(N.specularIntensityMapUv),T.push(N.transmissionMapUv),T.push(N.thicknessMapUv),T.push(N.combine),T.push(N.fogExp2),T.push(N.sizeAttenuation),T.push(N.morphTargetsCount),T.push(N.morphAttributeCount),T.push(N.numSunLights),T.push(N.numDirLights),T.push(N.numPointLights),T.push(N.numSpotLights),T.push(N.numSpotLightMaps),T.push(N.numHemiLights),T.push(N.numRectAreaLights),T.push(N.numSunLightShadows),T.push(N.numDirLightShadows),T.push(N.numPointLightShadows),T.push(N.numSpotLightShadows),T.push(N.numSpotLightShadowsWithMaps),T.push(N.numLightProbes),T.push(N.shadowMapType),T.push(N.toneMapping),T.push(N.numClippingPlanes),T.push(N.numClipIntersection),T.push(N.depthPacking)}function z(T,N){d.disableAll(),N.instancing&&d.enable(0),N.instancingColor&&d.enable(1),N.instancingMorph&&d.enable(2),N.matcap&&d.enable(3),N.envMap&&d.enable(4),N.normalMapObjectSpace&&d.enable(5),N.normalMapTangentSpace&&d.enable(6),N.clearcoat&&d.enable(7),N.iridescence&&d.enable(8),N.alphaTest&&d.enable(9),N.vertexColors&&d.enable(10),N.vertexAlphas&&d.enable(11),N.vertexUv1s&&d.enable(12),N.vertexUv2s&&d.enable(13),N.vertexUv3s&&d.enable(14),N.vertexTangents&&d.enable(15),N.anisotropy&&d.enable(16),N.alphaHash&&d.enable(17),N.batching&&d.enable(18),N.dispersion&&d.enable(19),N.retroreflection&&d.enable(24),N.batchingColor&&d.enable(20),N.gradientMap&&d.enable(21),N.packedNormalMap&&d.enable(22),N.vertexNormals&&d.enable(23),T.push(d.mask),d.disableAll(),N.fog&&d.enable(0),N.useFog&&d.enable(1),N.flatShading&&d.enable(2),N.logarithmicDepthBuffer&&d.enable(3),N.reversedDepthBuffer&&d.enable(4),N.skinning&&d.enable(5),N.morphTargets&&d.enable(6),N.morphNormals&&d.enable(7),N.morphColors&&d.enable(8),N.premultipliedAlpha&&d.enable(9),N.shadowMapEnabled&&d.enable(10),N.doubleSided&&d.enable(11),N.flipSided&&d.enable(12),N.useDepthPacking&&d.enable(13),N.dithering&&d.enable(14),N.transmission&&d.enable(15),N.sheen&&d.enable(16),N.opaque&&d.enable(17),N.pointsUvs&&d.enable(18),N.decodeVideoTexture&&d.enable(19),N.decodeVideoTextureEmissive&&d.enable(20),N.alphaToCoverage&&d.enable(21),N.numLightProbeGrids>0&&d.enable(22),N.hasPositionAttribute&&d.enable(23),T.push(d.mask)}function k(T){const N=M[T.type];let V;if(N){const X=la[N];V=sE.clone(X.uniforms)}else V=T.uniforms;return V}function C(T,N){let V=g.get(N);return V!==void 0?++V.usedTimes:(V=new Iw(o,N,T,l),m.push(V),g.set(N,V)),V}function P(T){if(--T.usedTimes===0){const N=m.indexOf(T);m[N]=m[m.length-1],m.pop(),g.delete(T.cacheKey),T.destroy()}}function U(T){h.remove(T)}function F(){h.dispose()}return{getParameters:D,getProgramCacheKey:y,getUniforms:k,acquireProgram:C,releaseProgram:P,releaseShaderCache:U,programs:m,dispose:F}}function kw(){let o=new WeakMap;function t(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function s(d){o.delete(d)}function l(d,h,p){o.get(d)[h]=p}function u(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:u}}function Xw(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.materialVariant!==t.materialVariant?o.materialVariant-t.materialVariant:o.z!==t.z?o.z-t.z:o.id-t.id}function z_(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function I_(){const o=[];let t=0;const i=[],s=[],l=[];function u(){t=0,i.length=0,s.length=0,l.length=0}function d(v){let M=0;return v.isInstancedMesh&&(M+=2),v.isSkinnedMesh&&(M+=1),M}function h(v,M,w,D,y,S){let z=o[t];return z===void 0?(z={id:v.id,object:v,geometry:M,material:w,materialVariant:d(v),groupOrder:D,renderOrder:v.renderOrder,z:y,group:S},o[t]=z):(z.id=v.id,z.object=v,z.geometry=M,z.material=w,z.materialVariant=d(v),z.groupOrder=D,z.renderOrder=v.renderOrder,z.z=y,z.group=S),t++,z}function p(v,M,w,D,y,S,z){z.reversedDepth===!0&&(y=-y);const k=h(v,M,w,D,y,S);w.transmission>0?s.push(k):w.transparent===!0?l.push(k):i.push(k)}function m(v,M,w,D,y,S){const z=h(v,M,w,D,y,S);w.transmission>0?s.unshift(z):w.transparent===!0?l.unshift(z):i.unshift(z)}function g(v,M){i.length>1&&i.sort(v||Xw),s.length>1&&s.sort(M||z_),l.length>1&&l.sort(M||z_)}function x(){for(let v=t,M=o.length;v<M;v++){const w=o[v];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:p,unshift:m,finish:x,sort:g}}function jw(){let o=new WeakMap;function t(s,l){const u=o.get(s);let d;return u===void 0?(d=new I_,o.set(s,[d])):l>=u.length?(d=new I_,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:t,dispose:i}}function qw(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new de,color:new Lt};break;case"SpotLight":i={position:new de,direction:new de,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new de,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new de,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":i={color:new Lt,position:new de,halfWidth:new de,halfHeight:new de};break}return o[t.id]=i,i}}}function Ww(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let Yw=0;function Zw(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function Kw(o){const t=new qw,i=Ww(),s={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new de);const l=new de,u=new cn,d=new cn;function h(m){let g=0,x=0,v=0;for(let Z=0;Z<9;Z++)s.probe[Z].set(0,0,0);let M=0,w=0,D=0,y=0,S=0,z=0,k=0,C=0,P=0,U=0,F=0,T=0,N=0,V=0;m.sort(Zw);for(let Z=0,se=m.length;Z<se;Z++){const K=m[Z],ne=K.color,W=K.intensity,j=K.distance;let ce=null;if(K.shadow&&K.shadow.map&&(K.shadow.map.texture.format===nr?ce=K.shadow.map.texture:ce=K.shadow.map.depthTexture||K.shadow.map.texture),K.isAmbientLight)g+=ne.r*W,x+=ne.g*W,v+=ne.b*W;else if(K.isLightProbe){for(let oe=0;oe<9;oe++)s.probe[oe].addScaledVector(K.sh.coefficients[oe],W);V++}else if(K.isSunLight){const oe=t.get(K);if(oe.color.copy(K.color).multiplyScalar(K.intensity),K.castShadow){const O=K.shadow,L=i.get(K);L.shadowIntensity=O.intensity,L.shadowBias=O.bias,L.shadowNormalBias=O.normalBias,L.shadowRadius=O.radius,L.shadowMapSize.copy(O.mapSize).multiply(O.getFrameExtents()),s.sunShadow[w]=L,s.sunShadowMap[w]=ce;const Ce=O.getViewportCount();for(let ve=0;ve<Ce;ve++)s.sunShadowMatrix[D+ve]=O.getMatrix(ve),s.sunShadowCascade[D+ve]=O._cascadeData[ve];D+=Ce,w++}s.sun[M]=oe,M++}else if(K.isDirectionalLight){const oe=t.get(K);if(oe.color.copy(K.color).multiplyScalar(K.intensity),K.castShadow){const O=K.shadow,L=i.get(K);L.shadowIntensity=O.intensity,L.shadowBias=O.bias,L.shadowNormalBias=O.normalBias,L.shadowRadius=O.radius,L.shadowMapSize=O.mapSize,s.directionalShadow[y]=L,s.directionalShadowMap[y]=ce,s.directionalShadowMatrix[y]=K.shadow.matrix,P++}s.directional[y]=oe,y++}else if(K.isSpotLight){const oe=t.get(K);oe.position.setFromMatrixPosition(K.matrixWorld),oe.color.copy(ne).multiplyScalar(W),oe.distance=j,oe.coneCos=Math.cos(K.angle),oe.penumbraCos=Math.cos(K.angle*(1-K.penumbra)),oe.decay=K.decay,s.spot[z]=oe;const O=K.shadow;if(K.map&&(s.spotLightMap[T]=K.map,T++,O.updateMatrices(K),K.castShadow&&N++),s.spotLightMatrix[z]=O.matrix,K.castShadow){const L=i.get(K);L.shadowIntensity=O.intensity,L.shadowBias=O.bias,L.shadowNormalBias=O.normalBias,L.shadowRadius=O.radius,L.shadowMapSize=O.mapSize,s.spotShadow[z]=L,s.spotShadowMap[z]=ce,F++}z++}else if(K.isRectAreaLight){const oe=t.get(K);oe.color.copy(ne).multiplyScalar(W),oe.halfWidth.set(K.width*.5,0,0),oe.halfHeight.set(0,K.height*.5,0),s.rectArea[k]=oe,k++}else if(K.isPointLight){const oe=t.get(K);if(oe.color.copy(K.color).multiplyScalar(K.intensity),oe.distance=K.distance,oe.decay=K.decay,K.castShadow){const O=K.shadow,L=i.get(K);L.shadowIntensity=O.intensity,L.shadowBias=O.bias,L.shadowNormalBias=O.normalBias,L.shadowRadius=O.radius,L.shadowMapSize=O.mapSize,L.shadowCameraNear=O.camera.near,L.shadowCameraFar=O.camera.far,s.pointShadow[S]=L,s.pointShadowMap[S]=ce,s.pointShadowMatrix[S]=K.shadow.matrix,U++}s.point[S]=oe,S++}else if(K.isHemisphereLight){const oe=t.get(K);oe.skyColor.copy(K.color).multiplyScalar(W),oe.groundColor.copy(K.groundColor).multiplyScalar(W),s.hemi[C]=oe,C++}}k>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Xe.LTC_FLOAT_1,s.rectAreaLTC2=Xe.LTC_FLOAT_2):(s.rectAreaLTC1=Xe.LTC_HALF_1,s.rectAreaLTC2=Xe.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=x,s.ambient[2]=v;const X=s.hash;(X.sunLength!==M||X.directionalLength!==y||X.pointLength!==S||X.spotLength!==z||X.rectAreaLength!==k||X.hemiLength!==C||X.numSunShadows!==w||X.numDirectionalShadows!==P||X.numPointShadows!==U||X.numSpotShadows!==F||X.numSpotMaps!==T||X.numLightProbes!==V)&&(s.sun.length=M,s.directional.length=y,s.spot.length=z,s.rectArea.length=k,s.point.length=S,s.hemi.length=C,s.sunShadow.length=w,s.sunShadowMap.length=w,s.sunShadowMatrix.length=D,s.sunShadowCascade.length=D,s.directionalShadow.length=P,s.directionalShadowMap.length=P,s.directionalShadowMatrix.length=P,s.pointShadow.length=U,s.pointShadowMap.length=U,s.pointShadowMatrix.length=U,s.spotShadow.length=F,s.spotShadowMap.length=F,s.spotLightMatrix.length=F+T-N,s.spotLightMap.length=T,s.numSpotLightShadowsWithMaps=N,s.numLightProbes=V,X.sunLength=M,X.directionalLength=y,X.pointLength=S,X.spotLength=z,X.rectAreaLength=k,X.hemiLength=C,X.numSunShadows=w,X.numDirectionalShadows=P,X.numPointShadows=U,X.numSpotShadows=F,X.numSpotMaps=T,X.numLightProbes=V,s.version=Yw++)}function p(m,g){let x=0,v=0,M=0,w=0,D=0,y=0;const S=g.matrixWorldInverse;for(let z=0,k=m.length;z<k;z++){const C=m[z];if(C.isSunLight){const P=s.sun[x];P.direction.setFromMatrixPosition(C.matrixWorld),P.direction.transformDirection(S),x++}else if(C.isDirectionalLight){const P=s.directional[v];P.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(S),v++}else if(C.isSpotLight){const P=s.spot[w];P.position.setFromMatrixPosition(C.matrixWorld),P.position.applyMatrix4(S),P.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(S),w++}else if(C.isRectAreaLight){const P=s.rectArea[D];P.position.setFromMatrixPosition(C.matrixWorld),P.position.applyMatrix4(S),d.identity(),u.copy(C.matrixWorld),u.premultiply(S),d.extractRotation(u),P.halfWidth.set(C.width*.5,0,0),P.halfHeight.set(0,C.height*.5,0),P.halfWidth.applyMatrix4(d),P.halfHeight.applyMatrix4(d),D++}else if(C.isPointLight){const P=s.point[M];P.position.setFromMatrixPosition(C.matrixWorld),P.position.applyMatrix4(S),M++}else if(C.isHemisphereLight){const P=s.hemi[y];P.direction.setFromMatrixPosition(C.matrixWorld),P.direction.transformDirection(S),y++}}}return{setup:h,setupView:p,state:s}}function B_(o){const t=new Kw(o),i=[],s=[],l=[];function u(v){x.camera=v,i.length=0,s.length=0,l.length=0}function d(v){i.push(v)}function h(v){s.push(v)}function p(v){l.push(v)}function m(){t.setup(i)}function g(v){t.setupView(i,v)}const x={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:u,state:x,setupLights:m,setupLightsView:g,pushLight:d,pushShadow:h,pushLightProbeGrid:p}}function Qw(o){let t=new WeakMap;function i(l,u=0){const d=t.get(l);let h;return d===void 0?(h=new B_(o),t.set(l,[h])):u>=d.length?(h=new B_(o),d.push(h)):h=d[u],h}function s(){t=new WeakMap}return{get:i,dispose:s}}const Jw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$w=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,e3=[new de(1,0,0),new de(-1,0,0),new de(0,1,0),new de(0,-1,0),new de(0,0,1),new de(0,0,-1)],t3=[new de(0,-1,0),new de(0,-1,0),new de(0,0,1),new de(0,0,-1),new de(0,-1,0),new de(0,-1,0)],F_=new cn,El=new de,ip=new de;function n3(o,t,i){let s=new dm;const l=new Ht,u=new Ht,d=new dn,h=new cE,p=new uE,m={},g=i.maxTextureSize,x={[er]:ai,[ai]:er,[ca]:ca},v=new ga({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ht},radius:{value:4}},vertexShader:Jw,fragmentShader:$w}),M=v.clone();M.defines.HORIZONTAL_PASS=1;const w=new xa;w.setAttribute("position",new ha(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const D=new Dt(w,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nu;let S=this.type;this.render=function(U,F,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||U.length===0)return;this.type===OM&&(ft("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Nu);const N=o.getRenderTarget(),V=o.getActiveCubeFace(),X=o.getActiveMipmapLevel(),Z=o.state;Z.setBlending(Fa),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const se=S!==this.type;se&&F.traverse(function(K){K.material&&(Array.isArray(K.material)?K.material.forEach(ne=>ne.needsUpdate=!0):K.material.needsUpdate=!0)});for(let K=0,ne=U.length;K<ne;K++){const W=U[K],j=W.shadow;if(j===void 0){ft("WebGLShadowMap:",W,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;l.copy(j.mapSize);const ce=j.getFrameExtents();l.multiply(ce),u.copy(j.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/ce.x),l.x=u.x*ce.x,j.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/ce.y),l.y=u.y*ce.y,j.mapSize.y=u.y));const oe=o.state.buffers.depth.getReversed();if(j.camera._reversedDepth=oe,j.map===null||se===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===Tl){if(W.isPointLight){ft("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new ji(l.x,l.y,{format:nr,type:ma,minFilter:Vn,magFilter:Vn,generateMipmaps:!1}),j.map.texture.name=W.name+".shadowMap",j.map.depthTexture=new Pl(l.x,l.y,ki),j.map.depthTexture.name=W.name+".shadowMapDepth",j.map.depthTexture.format=Ga,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=Bn,j.map.depthTexture.magFilter=Bn}else W.isPointLight?(j.map=new ES(l.x),j.map.depthTexture=new iE(l.x,pa)):(j.map=new ji(l.x,l.y),j.map.depthTexture=new Pl(l.x,l.y,pa)),j.map.depthTexture.name=W.name+".shadowMap",j.map.depthTexture.format=Ga,this.type===Nu?(j.map.depthTexture.compareFunction=oe?om:rm,j.map.depthTexture.minFilter=Vn,j.map.depthTexture.magFilter=Vn):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=Bn,j.map.depthTexture.magFilter=Bn);j.camera.updateProjectionMatrix()}j.map.isWebGLCubeRenderTarget!==!0&&(j.map.width!==l.x||j.map.height!==l.y)&&j.map.setSize(l.x,l.y);const O=j.map.isWebGLCubeRenderTarget?6:j.getViewportCount();W.isPointLight!==!0&&j.updateMatrices(W,T);for(let L=0;L<O;L++){const Ce=j.getCamera(L);if(W.isPointLight){const ve=j.camera,I=j.matrix,$=W.distance||ve.far;$!==ve.far&&(ve.far=$,ve.updateProjectionMatrix()),El.setFromMatrixPosition(W.matrixWorld),ve.position.copy(El),ip.copy(ve.position),ip.add(e3[L]),ve.up.copy(t3[L]),ve.lookAt(ip),ve.updateMatrixWorld(),I.makeTranslation(-El.x,-El.y,-El.z),F_.multiplyMatrices(ve.projectionMatrix,ve.matrixWorldInverse),j._frustum.setFromProjectionMatrix(F_,ve.coordinateSystem,ve.reversedDepth)}if(j.map.isWebGLCubeRenderTarget)o.setRenderTarget(j.map,L),o.clear();else{L===0&&(o.setRenderTarget(j.map),o.clear());const ve=j.getViewport(L);d.set(u.x*ve.x,u.y*ve.y,u.x*ve.z,u.y*ve.w),Z.viewport(d)}s=j.getFrustum(L),C(F,T,Ce,W,this.type)}j.isPointLightShadow!==!0&&this.type===Tl&&z(j,T),j.needsUpdate=!1}S=this.type,y.needsUpdate=!1,o.setRenderTarget(N,V,X)};function z(U,F){const T=t.update(D);v.defines.VSM_SAMPLES!==U.blurSamples&&(v.defines.VSM_SAMPLES=U.blurSamples,M.defines.VSM_SAMPLES=U.blurSamples,v.needsUpdate=!0,M.needsUpdate=!0),U.mapPass===null?U.mapPass=new ji(l.x,l.y,{format:nr,type:ma}):(U.mapPass.width!==U.map.width||U.mapPass.height!==U.map.height)&&U.mapPass.setSize(U.map.width,U.map.height),v.uniforms.shadow_pass.value=U.map.depthTexture,v.uniforms.resolution.value.set(U.map.width,U.map.height),v.uniforms.radius.value=U.radius,o.setRenderTarget(U.mapPass),o.clear(),o.renderBufferDirect(F,null,T,v,D,null),M.uniforms.shadow_pass.value=U.mapPass.texture,M.uniforms.resolution.value.set(U.map.width,U.map.height),M.uniforms.radius.value=U.radius,o.setRenderTarget(U.map),o.clear(),o.renderBufferDirect(F,null,T,M,D,null)}function k(U,F,T,N){let V=null;const X=T.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(X!==void 0)V=X;else if(V=T.isPointLight===!0?p:h,o.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const Z=V.uuid,se=F.uuid;let K=m[Z];K===void 0&&(K={},m[Z]=K);let ne=K[se];ne===void 0&&(ne=V.clone(),K[se]=ne,F.addEventListener("dispose",P)),V=ne}if(V.visible=F.visible,V.wireframe=F.wireframe,N===Tl?V.side=F.shadowSide!==null?F.shadowSide:F.side:V.side=F.shadowSide!==null?F.shadowSide:x[F.side],V.alphaMap=F.alphaMap,V.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,V.map=F.map,V.clipShadows=F.clipShadows,V.clippingPlanes=F.clippingPlanes,V.clipIntersection=F.clipIntersection,V.displacementMap=F.displacementMap,V.displacementScale=F.displacementScale,V.displacementBias=F.displacementBias,V.wireframeLinewidth=F.wireframeLinewidth,V.linewidth=F.linewidth,T.isPointLight===!0&&V.isMeshDistanceMaterial===!0){const Z=o.properties.get(V);Z.light=T}return V}function C(U,F,T,N,V){if(U.visible===!1)return;if(U.layers.test(F.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&V===Tl)&&(!U.frustumCulled||U.intersectsFrustum(s))){U.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,U.matrixWorld);const se=t.update(U),K=U.material;if(Array.isArray(K)){const ne=se.groups;for(let W=0,j=ne.length;W<j;W++){const ce=ne[W],oe=K[ce.materialIndex];if(oe&&oe.visible){const O=k(U,oe,N,V);U.onBeforeShadow(o,U,F,T,se,O,ce),o.renderBufferDirect(T,null,se,O,U,ce),U.onAfterShadow(o,U,F,T,se,O,ce)}}}else if(K.visible){const ne=k(U,K,N,V);U.onBeforeShadow(o,U,F,T,se,ne,null),o.renderBufferDirect(T,null,se,ne,U,null),U.onAfterShadow(o,U,F,T,se,ne,null)}}const Z=U.children;for(let se=0,K=Z.length;se<K;se++)C(Z[se],F,T,N,V)}function P(U){U.target.removeEventListener("dispose",P);for(const T in m){const N=m[T],V=U.target.uuid;V in N&&(N[V].dispose(),delete N[V])}}}function i3(o,t){function i(){let J=!1;const Pe=new dn;let we=null;const Ie=new dn(0,0,0,0);return{setMask:function(qe){we!==qe&&!J&&(o.colorMask(qe,qe,qe,qe),we=qe)},setLocked:function(qe){J=qe},setClear:function(qe,Ne,it,je,It){It===!0&&(qe*=je,Ne*=je,it*=je),Pe.set(qe,Ne,it,je),Ie.equals(Pe)===!1&&(o.clearColor(qe,Ne,it,je),Ie.copy(Pe))},reset:function(){J=!1,we=null,Ie.set(-1,0,0,0)}}}function s(){let J=!1,Pe=!1,we=null,Ie=null,qe=null;return{setReversed:function(Ne){if(Pe!==Ne){const it=t.get("EXT_clip_control");Ne?it.clipControlEXT(it.LOWER_LEFT_EXT,it.ZERO_TO_ONE_EXT):it.clipControlEXT(it.LOWER_LEFT_EXT,it.NEGATIVE_ONE_TO_ONE_EXT),Pe=Ne;const je=qe;qe=null,this.setClear(je)}},getReversed:function(){return Pe},setTest:function(Ne){Ne?te(o.DEPTH_TEST):be(o.DEPTH_TEST)},setMask:function(Ne){we!==Ne&&!J&&(o.depthMask(Ne),we=Ne)},setFunc:function(Ne){if(Pe&&(Ne=m1[Ne]),Ie!==Ne){switch(Ne){case rp:o.depthFunc(o.NEVER);break;case op:o.depthFunc(o.ALWAYS);break;case lp:o.depthFunc(o.LESS);break;case Dl:o.depthFunc(o.LEQUAL);break;case cp:o.depthFunc(o.EQUAL);break;case up:o.depthFunc(o.GEQUAL);break;case fp:o.depthFunc(o.GREATER);break;case dp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ie=Ne}},setLocked:function(Ne){J=Ne},setClear:function(Ne){qe!==Ne&&(qe=Ne,Pe&&(Ne=1-Ne),o.clearDepth(Ne))},reset:function(){J=!1,we=null,Ie=null,qe=null,Pe=!1}}}function l(){let J=!1,Pe=null,we=null,Ie=null,qe=null,Ne=null,it=null,je=null,It=null;return{setTest:function(pt){J||(pt?te(o.STENCIL_TEST):be(o.STENCIL_TEST))},setMask:function(pt){Pe!==pt&&!J&&(o.stencilMask(pt),Pe=pt)},setFunc:function(pt,si,_i){(we!==pt||Ie!==si||qe!==_i)&&(o.stencilFunc(pt,si,_i),we=pt,Ie=si,qe=_i)},setOp:function(pt,si,_i){(Ne!==pt||it!==si||je!==_i)&&(o.stencilOp(pt,si,_i),Ne=pt,it=si,je=_i)},setLocked:function(pt){J=pt},setClear:function(pt){It!==pt&&(o.clearStencil(pt),It=pt)},reset:function(){J=!1,Pe=null,we=null,Ie=null,qe=null,Ne=null,it=null,je=null,It=null}}}const u=new i,d=new s,h=new l,p=new WeakMap,m=new WeakMap;let g={},x={},v={},M=new WeakMap,w=[],D=null,y=!1,S=null,z=null,k=null,C=null,P=null,U=null,F=null,T=new Lt(0,0,0),N=0,V=!1,X=null,Z=null,se=null,K=null,ne=null;const W=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,ce=0;const oe=o.getParameter(o.VERSION);oe.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(oe)[1]),j=ce>=1):oe.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),j=ce>=2);let O=null,L={};const Ce=o.getParameter(o.SCISSOR_BOX),ve=o.getParameter(o.VIEWPORT),I=new dn().fromArray(Ce),$=new dn().fromArray(ve);function _e(J,Pe,we,Ie){const qe=new Uint8Array(4),Ne=o.createTexture();o.bindTexture(J,Ne),o.texParameteri(J,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(J,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let it=0;it<we;it++)J===o.TEXTURE_3D||J===o.TEXTURE_2D_ARRAY?o.texImage3D(Pe,0,o.RGBA,1,1,Ie,0,o.RGBA,o.UNSIGNED_BYTE,qe):o.texImage2D(Pe+it,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,qe);return Ne}const G={};G[o.TEXTURE_2D]=_e(o.TEXTURE_2D,o.TEXTURE_2D,1),G[o.TEXTURE_CUBE_MAP]=_e(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),G[o.TEXTURE_2D_ARRAY]=_e(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),G[o.TEXTURE_3D]=_e(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),te(o.DEPTH_TEST),d.setFunc(Dl),Ye(!1),$e(Hv),te(o.CULL_FACE),nt(Fa);function te(J){g[J]!==!0&&(o.enable(J),g[J]=!0)}function be(J){g[J]!==!1&&(o.disable(J),g[J]=!1)}function Te(J,Pe){return v[J]!==Pe?(o.bindFramebuffer(J,Pe),v[J]=Pe,J===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Pe),J===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Pe),!0):!1}function le(J,Pe){let we=w,Ie=!1;if(J){we=M.get(Pe),we===void 0&&(we=[],M.set(Pe,we));const qe=J.textures;if(we.length!==qe.length||we[0]!==o.COLOR_ATTACHMENT0){for(let Ne=0,it=qe.length;Ne<it;Ne++)we[Ne]=o.COLOR_ATTACHMENT0+Ne;we.length=qe.length,Ie=!0}}else we[0]!==o.BACK&&(we[0]=o.BACK,Ie=!0);Ie&&o.drawBuffers(we)}function Ae(J){return D!==J?(o.useProgram(J),D=J,!0):!1}const De={[ro]:o.FUNC_ADD,[zM]:o.FUNC_SUBTRACT,[IM]:o.FUNC_REVERSE_SUBTRACT};De[BM]=o.MIN,De[FM]=o.MAX;const Ue={[HM]:o.ZERO,[GM]:o.ONE,[VM]:o.SRC_COLOR,[Y_]:o.SRC_ALPHA,[YM]:o.SRC_ALPHA_SATURATE,[qM]:o.DST_COLOR,[XM]:o.DST_ALPHA,[kM]:o.ONE_MINUS_SRC_COLOR,[Z_]:o.ONE_MINUS_SRC_ALPHA,[WM]:o.ONE_MINUS_DST_COLOR,[jM]:o.ONE_MINUS_DST_ALPHA,[ZM]:o.CONSTANT_COLOR,[KM]:o.ONE_MINUS_CONSTANT_COLOR,[QM]:o.CONSTANT_ALPHA,[JM]:o.ONE_MINUS_CONSTANT_ALPHA};function nt(J,Pe,we,Ie,qe,Ne,it,je,It,pt){if(J===Fa){y===!0&&(be(o.BLEND),y=!1);return}if(y===!1&&(te(o.BLEND),y=!0),J!==PM){if(J!==S||pt!==V){if((z!==ro||P!==ro)&&(o.blendEquation(o.FUNC_ADD),z=ro,P=ro),pt)switch(J){case Rl:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case sp:o.blendFunc(o.ONE,o.ONE);break;case Gv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Vv:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Xt("WebGLState: Invalid blending: ",J);break}else switch(J){case Rl:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case sp:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Gv:Xt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vv:Xt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xt("WebGLState: Invalid blending: ",J);break}k=null,C=null,U=null,F=null,T.set(0,0,0),N=0,S=J,V=pt}return}qe=qe||Pe,Ne=Ne||we,it=it||Ie,(Pe!==z||qe!==P)&&(o.blendEquationSeparate(De[Pe],De[qe]),z=Pe,P=qe),(we!==k||Ie!==C||Ne!==U||it!==F)&&(o.blendFuncSeparate(Ue[we],Ue[Ie],Ue[Ne],Ue[it]),k=we,C=Ie,U=Ne,F=it),(je.equals(T)===!1||It!==N)&&(o.blendColor(je.r,je.g,je.b,It),T.copy(je),N=It),S=J,V=!1}function st(J,Pe){J.side===ca?be(o.CULL_FACE):te(o.CULL_FACE);let we=J.side===ai;Pe&&(we=!we),Ye(we),J.blending===Rl&&J.transparent===!1?nt(Fa):nt(J.blending,J.blendEquation,J.blendSrc,J.blendDst,J.blendEquationAlpha,J.blendSrcAlpha,J.blendDstAlpha,J.blendColor,J.blendAlpha,J.premultipliedAlpha),d.setFunc(J.depthFunc),d.setTest(J.depthTest),d.setMask(J.depthWrite),u.setMask(J.colorWrite);const Ie=J.stencilWrite;h.setTest(Ie),Ie&&(h.setMask(J.stencilWriteMask),h.setFunc(J.stencilFunc,J.stencilRef,J.stencilFuncMask),h.setOp(J.stencilFail,J.stencilZFail,J.stencilZPass)),Vt(J.polygonOffset,J.polygonOffsetFactor,J.polygonOffsetUnits),J.alphaToCoverage===!0?te(o.SAMPLE_ALPHA_TO_COVERAGE):be(o.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(J){X!==J&&(J?o.frontFace(o.CW):o.frontFace(o.CCW),X=J)}function $e(J){J!==DM?(te(o.CULL_FACE),J!==Z&&(J===Hv?o.cullFace(o.BACK):J===LM?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):be(o.CULL_FACE),Z=J}function Mt(J){J!==se&&(j&&o.lineWidth(J),se=J)}function Vt(J,Pe,we){J?(te(o.POLYGON_OFFSET_FILL),(K!==Pe||ne!==we)&&(K=Pe,ne=we,d.getReversed()&&(Pe=-Pe),o.polygonOffset(Pe,we))):be(o.POLYGON_OFFSET_FILL)}function yt(J){J?te(o.SCISSOR_TEST):be(o.SCISSOR_TEST)}function kt(J){J===void 0&&(J=o.TEXTURE0+W-1),O!==J&&(o.activeTexture(J),O=J)}function Q(J,Pe,we){we===void 0&&(O===null?we=o.TEXTURE0+W-1:we=O);let Ie=L[we];Ie===void 0&&(Ie={type:void 0,texture:void 0},L[we]=Ie),(Ie.type!==J||Ie.texture!==Pe)&&(O!==we&&(o.activeTexture(we),O=we),o.bindTexture(J,Pe||G[J]),Ie.type=J,Ie.texture=Pe)}function Qt(){const J=L[O];J!==void 0&&J.type!==void 0&&(o.bindTexture(J.type,null),J.type=void 0,J.texture=void 0)}function Et(){try{o.compressedTexImage2D(...arguments)}catch(J){Xt("WebGLState:",J)}}function B(){try{o.compressedTexImage3D(...arguments)}catch(J){Xt("WebGLState:",J)}}function E(){try{o.texSubImage2D(...arguments)}catch(J){Xt("WebGLState:",J)}}function re(){try{o.texSubImage3D(...arguments)}catch(J){Xt("WebGLState:",J)}}function fe(){try{o.compressedTexSubImage2D(...arguments)}catch(J){Xt("WebGLState:",J)}}function Se(){try{o.compressedTexSubImage3D(...arguments)}catch(J){Xt("WebGLState:",J)}}function Le(){try{o.texStorage2D(...arguments)}catch(J){Xt("WebGLState:",J)}}function Oe(){try{o.texStorage3D(...arguments)}catch(J){Xt("WebGLState:",J)}}function ye(){try{o.texImage2D(...arguments)}catch(J){Xt("WebGLState:",J)}}function Re(){try{o.texImage3D(...arguments)}catch(J){Xt("WebGLState:",J)}}function ze(J){return x[J]!==void 0?x[J]:o.getParameter(J)}function at(J,Pe){x[J]!==Pe&&(o.pixelStorei(J,Pe),x[J]=Pe)}function Ge(J){I.equals(J)===!1&&(o.scissor(J.x,J.y,J.z,J.w),I.copy(J))}function He(J){$.equals(J)===!1&&(o.viewport(J.x,J.y,J.z,J.w),$.copy(J))}function We(J,Pe){let we=m.get(Pe);we===void 0&&(we=new WeakMap,m.set(Pe,we));let Ie=we.get(J);Ie===void 0&&(Ie=o.getUniformBlockIndex(Pe,J.name),we.set(J,Ie))}function ot(J,Pe){const Ie=m.get(Pe).get(J);p.get(Pe)!==Ie&&(o.uniformBlockBinding(Pe,Ie,J.__bindingPointIndex),p.set(Pe,Ie))}function ht(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),g={},x={},O=null,L={},v={},M=new WeakMap,w=[],D=null,y=!1,S=null,z=null,k=null,C=null,P=null,U=null,F=null,T=new Lt(0,0,0),N=0,V=!1,X=null,Z=null,se=null,K=null,ne=null,I.set(0,0,o.canvas.width,o.canvas.height),$.set(0,0,o.canvas.width,o.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:te,disable:be,bindFramebuffer:Te,drawBuffers:le,useProgram:Ae,setBlending:nt,setMaterial:st,setFlipSided:Ye,setCullFace:$e,setLineWidth:Mt,setPolygonOffset:Vt,setScissorTest:yt,activeTexture:kt,bindTexture:Q,unbindTexture:Qt,compressedTexImage2D:Et,compressedTexImage3D:B,texImage2D:ye,texImage3D:Re,pixelStorei:at,getParameter:ze,updateUBOMapping:We,uniformBlockBinding:ot,texStorage2D:Le,texStorage3D:Oe,texSubImage2D:E,texSubImage3D:re,compressedTexSubImage2D:fe,compressedTexSubImage3D:Se,scissor:Ge,viewport:He,reset:ht}}function a3(o,t,i,s,l,u,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Ht,g=new WeakMap,x=new Set;let v;const M=new WeakMap;let w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function D(B,E){return w?new OffscreenCanvas(B,E):Hu("canvas")}function y(B,E,re){let fe=1;const Se=Et(B);if((Se.width>re||Se.height>re)&&(fe=re/Math.max(Se.width,Se.height)),fe<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const Le=Math.floor(fe*Se.width),Oe=Math.floor(fe*Se.height);v===void 0&&(v=D(Le,Oe));const ye=E?D(Le,Oe):v;return ye.width=Le,ye.height=Oe,ye.getContext("2d").drawImage(B,0,0,Le,Oe),ft("WebGLRenderer: Texture has been resized from ("+Se.width+"x"+Se.height+") to ("+Le+"x"+Oe+")."),ye}else return"data"in B&&ft("WebGLRenderer: Image in DataTexture is too big ("+Se.width+"x"+Se.height+")."),B;return B}function S(B){return B.generateMipmaps}function z(B){o.generateMipmap(B)}function k(B){return B.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?o.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function C(B,E,re,fe,Se,Le=!1){if(B!==null){if(o[B]!==void 0)return o[B];ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let Oe;fe&&(Oe=t.get("EXT_texture_norm16"),Oe||ft("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ye=E;if(E===o.RED&&(re===o.FLOAT&&(ye=o.R32F),re===o.HALF_FLOAT&&(ye=o.R16F),re===o.UNSIGNED_BYTE&&(ye=o.R8),re===o.UNSIGNED_SHORT&&Oe&&(ye=Oe.R16_EXT),re===o.SHORT&&Oe&&(ye=Oe.R16_SNORM_EXT)),E===o.RED_INTEGER&&(re===o.UNSIGNED_BYTE&&(ye=o.R8UI),re===o.UNSIGNED_SHORT&&(ye=o.R16UI),re===o.UNSIGNED_INT&&(ye=o.R32UI),re===o.BYTE&&(ye=o.R8I),re===o.SHORT&&(ye=o.R16I),re===o.INT&&(ye=o.R32I)),E===o.RG&&(re===o.FLOAT&&(ye=o.RG32F),re===o.HALF_FLOAT&&(ye=o.RG16F),re===o.UNSIGNED_BYTE&&(ye=o.RG8),re===o.UNSIGNED_SHORT&&Oe&&(ye=Oe.RG16_EXT),re===o.SHORT&&Oe&&(ye=Oe.RG16_SNORM_EXT)),E===o.RG_INTEGER&&(re===o.UNSIGNED_BYTE&&(ye=o.RG8UI),re===o.UNSIGNED_SHORT&&(ye=o.RG16UI),re===o.UNSIGNED_INT&&(ye=o.RG32UI),re===o.BYTE&&(ye=o.RG8I),re===o.SHORT&&(ye=o.RG16I),re===o.INT&&(ye=o.RG32I)),E===o.RGB_INTEGER&&(re===o.UNSIGNED_BYTE&&(ye=o.RGB8UI),re===o.UNSIGNED_SHORT&&(ye=o.RGB16UI),re===o.UNSIGNED_INT&&(ye=o.RGB32UI),re===o.BYTE&&(ye=o.RGB8I),re===o.SHORT&&(ye=o.RGB16I),re===o.INT&&(ye=o.RGB32I)),E===o.RGBA_INTEGER&&(re===o.UNSIGNED_BYTE&&(ye=o.RGBA8UI),re===o.UNSIGNED_SHORT&&(ye=o.RGBA16UI),re===o.UNSIGNED_INT&&(ye=o.RGBA32UI),re===o.BYTE&&(ye=o.RGBA8I),re===o.SHORT&&(ye=o.RGBA16I),re===o.INT&&(ye=o.RGBA32I)),E===o.RGB&&(re===o.UNSIGNED_SHORT&&Oe&&(ye=Oe.RGB16_EXT),re===o.SHORT&&Oe&&(ye=Oe.RGB16_SNORM_EXT),re===o.UNSIGNED_INT_5_9_9_9_REV&&(ye=o.RGB9_E5),re===o.UNSIGNED_INT_10F_11F_11F_REV&&(ye=o.R11F_G11F_B10F)),E===o.RGBA){const Re=Le?Fu:Ft.getTransfer(Se);re===o.FLOAT&&(ye=o.RGBA32F),re===o.HALF_FLOAT&&(ye=o.RGBA16F),re===o.UNSIGNED_BYTE&&(ye=Re===tn?o.SRGB8_ALPHA8:o.RGBA8),re===o.UNSIGNED_SHORT&&Oe&&(ye=Oe.RGBA16_EXT),re===o.SHORT&&Oe&&(ye=Oe.RGBA16_SNORM_EXT),re===o.UNSIGNED_SHORT_4_4_4_4&&(ye=o.RGBA4),re===o.UNSIGNED_SHORT_5_5_5_1&&(ye=o.RGB5_A1)}return(ye===o.R16F||ye===o.R32F||ye===o.RG16F||ye===o.RG32F||ye===o.RGBA16F||ye===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ye}function P(B,E){let re;return B?E===null||E===pa||E===Ul?re=o.DEPTH24_STENCIL8:E===ki?re=o.DEPTH32F_STENCIL8:E===Ll&&(re=o.DEPTH24_STENCIL8,ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===pa||E===Ul?re=o.DEPTH_COMPONENT24:E===ki?re=o.DEPTH_COMPONENT32F:E===Ll&&(re=o.DEPTH_COMPONENT16),re}function U(B,E){return S(B)===!0||B.isFramebufferTexture&&B.minFilter!==Bn&&B.minFilter!==Vn?Math.log2(Math.max(E.width,E.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?E.mipmaps.length:1}function F(B){const E=B.target;E.removeEventListener("dispose",F),N(E),E.isVideoTexture&&g.delete(E),E.isHTMLTexture&&x.delete(E)}function T(B){const E=B.target;E.removeEventListener("dispose",T),X(E)}function N(B){const E=s.get(B);if(E.__webglInit===void 0)return;const re=B.source,fe=M.get(re);if(fe){const Se=fe[E.__cacheKey];Se.usedTimes--,Se.usedTimes===0&&V(B),Object.keys(fe).length===0&&M.delete(re)}s.remove(B)}function V(B){const E=s.get(B);o.deleteTexture(E.__webglTexture);const re=B.source,fe=M.get(re);delete fe[E.__cacheKey],d.memory.textures--}function X(B){const E=s.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),s.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(E.__webglFramebuffer[fe]))for(let Se=0;Se<E.__webglFramebuffer[fe].length;Se++)o.deleteFramebuffer(E.__webglFramebuffer[fe][Se]);else o.deleteFramebuffer(E.__webglFramebuffer[fe]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[fe])}else{if(Array.isArray(E.__webglFramebuffer))for(let fe=0;fe<E.__webglFramebuffer.length;fe++)o.deleteFramebuffer(E.__webglFramebuffer[fe]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let fe=0;fe<E.__webglColorRenderbuffer.length;fe++)E.__webglColorRenderbuffer[fe]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[fe]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const re=B.textures;for(let fe=0,Se=re.length;fe<Se;fe++){const Le=s.get(re[fe]);Le.__webglTexture&&(o.deleteTexture(Le.__webglTexture),d.memory.textures--),s.remove(re[fe])}s.remove(B)}let Z=0;function se(){Z=0}function K(){return Z}function ne(B){Z=B}function W(){const B=Z;return B>=l.maxTextures&&ft("WebGLTextures: Trying to use "+(B+1)+" texture units while this GPU supports only "+l.maxTextures),Z+=1,B}function j(B){const E=[];return E.push(B.wrapS),E.push(B.wrapT),E.push(B.wrapR||0),E.push(B.magFilter),E.push(B.minFilter),E.push(B.anisotropy),E.push(B.internalFormat),E.push(B.format),E.push(B.type),E.push(B.generateMipmaps),E.push(B.premultiplyAlpha),E.push(B.flipY),E.push(B.unpackAlignment),E.push(B.colorSpace),E.join()}function ce(B,E){const re=s.get(B);if(B.isVideoTexture&&Q(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&re.__version!==B.version){const fe=B.image;if(fe===null)ft("WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)ft("WebGLRenderer: Texture marked for update but image is incomplete");else{be(re,B,E);return}}else B.isExternalTexture&&(re.__webglTexture=B.sourceTexture?B.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,re.__webglTexture,o.TEXTURE0+E)}function oe(B,E){const re=s.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&re.__version!==B.version){be(re,B,E);return}else B.isExternalTexture&&(re.__webglTexture=B.sourceTexture?B.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,re.__webglTexture,o.TEXTURE0+E)}function O(B,E){const re=s.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&re.__version!==B.version){be(re,B,E);return}i.bindTexture(o.TEXTURE_3D,re.__webglTexture,o.TEXTURE0+E)}function L(B,E){const re=s.get(B);if(B.isCubeDepthTexture!==!0&&B.version>0&&re.__version!==B.version){Te(re,B,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,re.__webglTexture,o.TEXTURE0+E)}const Ce={[hp]:o.REPEAT,[Ba]:o.CLAMP_TO_EDGE,[pp]:o.MIRRORED_REPEAT},ve={[Bn]:o.NEAREST,[t1]:o.NEAREST_MIPMAP_NEAREST,[ou]:o.NEAREST_MIPMAP_LINEAR,[Vn]:o.LINEAR,[Rh]:o.LINEAR_MIPMAP_NEAREST,[Js]:o.LINEAR_MIPMAP_LINEAR},I={[s1]:o.NEVER,[u1]:o.ALWAYS,[r1]:o.LESS,[rm]:o.LEQUAL,[o1]:o.EQUAL,[om]:o.GEQUAL,[l1]:o.GREATER,[c1]:o.NOTEQUAL};function $(B,E){if(E.type===ki&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Vn||E.magFilter===Rh||E.magFilter===ou||E.magFilter===Js||E.minFilter===Vn||E.minFilter===Rh||E.minFilter===ou||E.minFilter===Js)&&ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(B,o.TEXTURE_WRAP_S,Ce[E.wrapS]),o.texParameteri(B,o.TEXTURE_WRAP_T,Ce[E.wrapT]),(B===o.TEXTURE_3D||B===o.TEXTURE_2D_ARRAY)&&o.texParameteri(B,o.TEXTURE_WRAP_R,Ce[E.wrapR]),o.texParameteri(B,o.TEXTURE_MAG_FILTER,ve[E.magFilter]),o.texParameteri(B,o.TEXTURE_MIN_FILTER,ve[E.minFilter]),E.compareFunction&&(o.texParameteri(B,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(B,o.TEXTURE_COMPARE_FUNC,I[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Bn||E.minFilter!==ou&&E.minFilter!==Js||E.type===ki&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const re=t.get("EXT_texture_filter_anisotropic");o.texParameterf(B,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function _e(B,E){let re=!1;B.__webglInit===void 0&&(B.__webglInit=!0,E.addEventListener("dispose",F));const fe=E.source;let Se=M.get(fe);Se===void 0&&(Se={},M.set(fe,Se));const Le=j(E);if(Le!==B.__cacheKey){Se[Le]===void 0&&(Se[Le]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,re=!0),Se[Le].usedTimes++;const Oe=Se[B.__cacheKey];Oe!==void 0&&(Se[B.__cacheKey].usedTimes--,Oe.usedTimes===0&&V(E)),B.__cacheKey=Le,B.__webglTexture=Se[Le].texture}return re}function G(B,E,re){return Math.floor(Math.floor(B/re)/E)}function te(B,E,re,fe){const Le=B.updateRanges;if(Le.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,re,fe,E.data);else{Le.sort((at,Ge)=>at.start-Ge.start);let Oe=0;for(let at=1;at<Le.length;at++){const Ge=Le[Oe],He=Le[at],We=Ge.start+Ge.count,ot=G(He.start,E.width,4),ht=G(Ge.start,E.width,4);He.start<=We+1&&ot===ht&&G(He.start+He.count-1,E.width,4)===ot?Ge.count=Math.max(Ge.count,He.start+He.count-Ge.start):(++Oe,Le[Oe]=He)}Le.length=Oe+1;const ye=i.getParameter(o.UNPACK_ROW_LENGTH),Re=i.getParameter(o.UNPACK_SKIP_PIXELS),ze=i.getParameter(o.UNPACK_SKIP_ROWS);i.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let at=0,Ge=Le.length;at<Ge;at++){const He=Le[at],We=Math.floor(He.start/4),ot=Math.ceil(He.count/4),ht=We%E.width,J=Math.floor(We/E.width),Pe=ot,we=1;i.pixelStorei(o.UNPACK_SKIP_PIXELS,ht),i.pixelStorei(o.UNPACK_SKIP_ROWS,J),i.texSubImage2D(o.TEXTURE_2D,0,ht,J,Pe,we,re,fe,E.data)}B.clearUpdateRanges(),i.pixelStorei(o.UNPACK_ROW_LENGTH,ye),i.pixelStorei(o.UNPACK_SKIP_PIXELS,Re),i.pixelStorei(o.UNPACK_SKIP_ROWS,ze)}}function be(B,E,re){let fe=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(fe=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(fe=o.TEXTURE_3D);const Se=_e(B,E),Le=E.source;i.bindTexture(fe,B.__webglTexture,o.TEXTURE0+re);const Oe=s.get(Le);if(Le.version!==Oe.__version||Se===!0){if(i.activeTexture(o.TEXTURE0+re),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const we=Ft.getPrimaries(Ft.workingColorSpace),Ie=E.colorSpace===Ms?null:Ft.getPrimaries(E.colorSpace),qe=E.colorSpace===Ms||we===Ie?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe)}i.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment);let Re=y(E.image,!1,l.maxTextureSize);Re=Qt(E,Re);const ze=u.convert(E.format,E.colorSpace),at=u.convert(E.type);let Ge=C(E.internalFormat,ze,at,E.normalized,E.colorSpace,E.isVideoTexture);$(fe,E);let He;const We=E.mipmaps,ot=E.isVideoTexture!==!0,ht=Oe.__version===void 0||Se===!0,J=Le.dataReady,Pe=U(E,Re);if(E.isDepthTexture)Ge=P(E.format===$s,E.type),ht&&(ot?i.texStorage2D(o.TEXTURE_2D,1,Ge,Re.width,Re.height):i.texImage2D(o.TEXTURE_2D,0,Ge,Re.width,Re.height,0,ze,at,null));else if(E.isDataTexture)if(We.length>0){ot&&ht&&i.texStorage2D(o.TEXTURE_2D,Pe,Ge,We[0].width,We[0].height);for(let we=0,Ie=We.length;we<Ie;we++)He=We[we],ot?J&&i.texSubImage2D(o.TEXTURE_2D,we,0,0,He.width,He.height,ze,at,He.data):i.texImage2D(o.TEXTURE_2D,we,Ge,He.width,He.height,0,ze,at,He.data);E.generateMipmaps=!1}else ot?(ht&&i.texStorage2D(o.TEXTURE_2D,Pe,Ge,Re.width,Re.height),J&&te(E,Re,ze,at)):i.texImage2D(o.TEXTURE_2D,0,Ge,Re.width,Re.height,0,ze,at,Re.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ot&&ht&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Pe,Ge,We[0].width,We[0].height,Re.depth);for(let we=0,Ie=We.length;we<Ie;we++)if(He=We[we],E.format!==Xi)if(ze!==null)if(ot){if(J)if(E.layerUpdates.size>0){const qe=x_(He.width,He.height,E.format,E.type);for(const Ne of E.layerUpdates){const it=He.data.subarray(Ne*qe/He.data.BYTES_PER_ELEMENT,(Ne+1)*qe/He.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,we,0,0,Ne,He.width,He.height,1,ze,it)}}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,we,0,0,0,He.width,He.height,Re.depth,ze,He.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,we,Ge,He.width,He.height,Re.depth,0,He.data,0,0);else ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ot?J&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,we,0,0,0,He.width,He.height,Re.depth,ze,at,He.data):i.texImage3D(o.TEXTURE_2D_ARRAY,we,Ge,He.width,He.height,Re.depth,0,ze,at,He.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{ot&&ht&&i.texStorage2D(o.TEXTURE_2D,Pe,Ge,We[0].width,We[0].height);for(let we=0,Ie=We.length;we<Ie;we++)He=We[we],E.format!==Xi?ze!==null?ot?J&&i.compressedTexSubImage2D(o.TEXTURE_2D,we,0,0,He.width,He.height,ze,He.data):i.compressedTexImage2D(o.TEXTURE_2D,we,Ge,He.width,He.height,0,He.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?J&&i.texSubImage2D(o.TEXTURE_2D,we,0,0,He.width,He.height,ze,at,He.data):i.texImage2D(o.TEXTURE_2D,we,Ge,He.width,He.height,0,ze,at,He.data)}else if(E.isDataArrayTexture)if(ot){if(ht&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Pe,Ge,Re.width,Re.height,Re.depth),J)if(E.layerUpdates.size>0){const we=x_(Re.width,Re.height,E.format,E.type);for(const Ie of E.layerUpdates){const qe=Re.data.subarray(Ie*we/Re.data.BYTES_PER_ELEMENT,(Ie+1)*we/Re.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Ie,Re.width,Re.height,1,ze,at,qe)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Re.width,Re.height,Re.depth,ze,at,Re.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Ge,Re.width,Re.height,Re.depth,0,ze,at,Re.data);else if(E.isData3DTexture)ot?(ht&&i.texStorage3D(o.TEXTURE_3D,Pe,Ge,Re.width,Re.height,Re.depth),J&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Re.width,Re.height,Re.depth,ze,at,Re.data)):i.texImage3D(o.TEXTURE_3D,0,Ge,Re.width,Re.height,Re.depth,0,ze,at,Re.data);else if(E.isFramebufferTexture){if(ht)if(ot)i.texStorage2D(o.TEXTURE_2D,Pe,Ge,Re.width,Re.height);else{let we=Re.width,Ie=Re.height;for(let qe=0;qe<Pe;qe++)i.texImage2D(o.TEXTURE_2D,qe,Ge,we,Ie,0,ze,at,null),we>>=1,Ie>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in o){const we=o.canvas;if(we.hasAttribute("layoutsubtree")||we.setAttribute("layoutsubtree","true"),Re.parentNode!==we){we.appendChild(Re),x.add(E),we.onpaint=Ie=>{const qe=Ie.changedElements;for(const Ne of x)qe.includes(Ne.image)&&(Ne.needsUpdate=!0)},we.requestPaint();return}if(o.texElementImage2D.length===3)o.texElementImage2D(o.TEXTURE_2D,o.RGBA8,Re);else{const qe=o.RGBA,Ne=o.RGBA,it=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,0,qe,Ne,it,Re)}o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(We.length>0){if(ot&&ht){const we=Et(We[0]);i.texStorage2D(o.TEXTURE_2D,Pe,Ge,we.width,we.height)}for(let we=0,Ie=We.length;we<Ie;we++)He=We[we],ot?J&&i.texSubImage2D(o.TEXTURE_2D,we,0,0,ze,at,He):i.texImage2D(o.TEXTURE_2D,we,Ge,ze,at,He);E.generateMipmaps=!1}else if(ot){if(ht){const we=Et(Re);i.texStorage2D(o.TEXTURE_2D,Pe,Ge,we.width,we.height)}J&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,ze,at,Re)}else i.texImage2D(o.TEXTURE_2D,0,Ge,ze,at,Re);S(E)&&z(fe),Oe.__version=Le.version,E.onUpdate&&E.onUpdate(E)}B.__version=E.version}function Te(B,E,re){if(E.image.length!==6)return;const fe=_e(B,E),Se=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,B.__webglTexture,o.TEXTURE0+re);const Le=s.get(Se);if(Se.version!==Le.__version||fe===!0){i.activeTexture(o.TEXTURE0+re);const Oe=Ft.getPrimaries(Ft.workingColorSpace),ye=E.colorSpace===Ms?null:Ft.getPrimaries(E.colorSpace),Re=E.colorSpace===Ms||Oe===ye?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const ze=E.isCompressedTexture||E.image[0].isCompressedTexture,at=E.image[0]&&E.image[0].isDataTexture,Ge=[];for(let Ne=0;Ne<6;Ne++)!ze&&!at?Ge[Ne]=y(E.image[Ne],!0,l.maxCubemapSize):Ge[Ne]=at?E.image[Ne].image:E.image[Ne],Ge[Ne]=Qt(E,Ge[Ne]);const He=Ge[0],We=u.convert(E.format,E.colorSpace),ot=u.convert(E.type),ht=C(E.internalFormat,We,ot,E.normalized,E.colorSpace),J=E.isVideoTexture!==!0,Pe=Le.__version===void 0||fe===!0,we=Se.dataReady;let Ie=U(E,He);$(o.TEXTURE_CUBE_MAP,E);let qe;if(ze){J&&Pe&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ie,ht,He.width,He.height);for(let Ne=0;Ne<6;Ne++){qe=Ge[Ne].mipmaps;for(let it=0;it<qe.length;it++){const je=qe[it];E.format!==Xi?We!==null?J?we&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,it,0,0,je.width,je.height,We,je.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,it,ht,je.width,je.height,0,je.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):J?we&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,it,0,0,je.width,je.height,We,ot,je.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,it,ht,je.width,je.height,0,We,ot,je.data)}}}else{if(qe=E.mipmaps,J&&Pe){qe.length>0&&Ie++;const Ne=Et(Ge[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Ie,ht,Ne.width,Ne.height)}for(let Ne=0;Ne<6;Ne++)if(at){J?we&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,0,0,Ge[Ne].width,Ge[Ne].height,We,ot,Ge[Ne].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,ht,Ge[Ne].width,Ge[Ne].height,0,We,ot,Ge[Ne].data);for(let it=0;it<qe.length;it++){const It=qe[it].image[Ne].image;J?we&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,it+1,0,0,It.width,It.height,We,ot,It.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,it+1,ht,It.width,It.height,0,We,ot,It.data)}}else{J?we&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,0,0,We,ot,Ge[Ne]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,ht,We,ot,Ge[Ne]);for(let it=0;it<qe.length;it++){const je=qe[it];J?we&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,it+1,0,0,We,ot,je.image[Ne]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,it+1,ht,We,ot,je.image[Ne])}}}S(E)&&z(o.TEXTURE_CUBE_MAP),Le.__version=Se.version,E.onUpdate&&E.onUpdate(E)}B.__version=E.version}function le(B,E,re,fe,Se,Le){const Oe=u.convert(re.format,re.colorSpace),ye=u.convert(re.type),Re=C(re.internalFormat,Oe,ye,re.normalized,re.colorSpace),ze=s.get(E),at=s.get(re);if(at.__renderTarget=E,!ze.__hasExternalTextures){const Ge=Math.max(1,E.width>>Le),He=Math.max(1,E.height>>Le);Se===o.TEXTURE_3D||Se===o.TEXTURE_2D_ARRAY?i.texImage3D(Se,Le,Re,Ge,He,E.depth,0,Oe,ye,null):i.texImage2D(Se,Le,Re,Ge,He,0,Oe,ye,null)}i.bindFramebuffer(o.FRAMEBUFFER,B),kt(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,fe,Se,at.__webglTexture,0,yt(E)):(Se===o.TEXTURE_2D||Se>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Se<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,fe,Se,at.__webglTexture,Le),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ae(B,E,re){if(o.bindRenderbuffer(o.RENDERBUFFER,B),E.depthBuffer){const fe=E.depthTexture,Se=fe&&fe.isDepthTexture?fe.type:null,Le=P(E.stencilBuffer,Se),Oe=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;kt(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,yt(E),Le,E.width,E.height):re?o.renderbufferStorageMultisample(o.RENDERBUFFER,yt(E),Le,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Le,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Oe,o.RENDERBUFFER,B)}else{const fe=E.textures;for(let Se=0;Se<fe.length;Se++){const Le=fe[Se],Oe=u.convert(Le.format,Le.colorSpace),ye=u.convert(Le.type),Re=C(Le.internalFormat,Oe,ye,Le.normalized,Le.colorSpace);kt(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,yt(E),Re,E.width,E.height):re?o.renderbufferStorageMultisample(o.RENDERBUFFER,yt(E),Re,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Re,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function De(B,E,re){const fe=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,B),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Se=s.get(E.depthTexture);if(Se.__renderTarget=E,(!Se.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),fe){if(Se.__webglInit===void 0&&(Se.__webglInit=!0,E.depthTexture.addEventListener("dispose",F)),Se.__webglTexture===void 0){Se.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,Se.__webglTexture),$(o.TEXTURE_CUBE_MAP,E.depthTexture);const ze=u.convert(E.depthTexture.format),at=u.convert(E.depthTexture.type);let Ge;E.depthTexture.format===Ga?Ge=o.DEPTH_COMPONENT24:E.depthTexture.format===$s&&(Ge=o.DEPTH24_STENCIL8);for(let He=0;He<6;He++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+He,0,Ge,E.width,E.height,0,ze,at,null)}}else ce(E.depthTexture,0);const Le=Se.__webglTexture,Oe=yt(E),ye=fe?o.TEXTURE_CUBE_MAP_POSITIVE_X+re:o.TEXTURE_2D,Re=E.depthTexture.format===$s?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ga)kt(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Re,ye,Le,0,Oe):o.framebufferTexture2D(o.FRAMEBUFFER,Re,ye,Le,0);else if(E.depthTexture.format===$s)kt(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Re,ye,Le,0,Oe):o.framebufferTexture2D(o.FRAMEBUFFER,Re,ye,Le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ue(B){const E=s.get(B),re=B.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==B.depthTexture){const fe=B.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),fe){const Se=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,fe.removeEventListener("dispose",Se)};fe.addEventListener("dispose",Se),E.__depthDisposeCallback=Se}E.__boundDepthTexture=fe}if(B.depthTexture&&!E.__autoAllocateDepthBuffer)if(re)for(let fe=0;fe<6;fe++)De(E.__webglFramebuffer[fe],B,fe);else{const fe=B.texture.mipmaps;fe&&fe.length>0?De(E.__webglFramebuffer[0],B,0):De(E.__webglFramebuffer,B,0)}else if(re){E.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[fe]),E.__webglDepthbuffer[fe]===void 0)E.__webglDepthbuffer[fe]=o.createRenderbuffer(),Ae(E.__webglDepthbuffer[fe],B,!1);else{const Se=B.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Le=E.__webglDepthbuffer[fe];o.bindRenderbuffer(o.RENDERBUFFER,Le),o.framebufferRenderbuffer(o.FRAMEBUFFER,Se,o.RENDERBUFFER,Le)}}else{const fe=B.texture.mipmaps;if(fe&&fe.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Ae(E.__webglDepthbuffer,B,!1);else{const Se=B.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Le=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Le),o.framebufferRenderbuffer(o.FRAMEBUFFER,Se,o.RENDERBUFFER,Le)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function nt(B,E,re){const fe=s.get(B);E!==void 0&&le(fe.__webglFramebuffer,B,B.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),re!==void 0&&Ue(B)}function st(B){const E=B.texture,re=s.get(B),fe=s.get(E);B.addEventListener("dispose",T);const Se=B.textures,Le=B.isWebGLCubeRenderTarget===!0,Oe=Se.length>1;if(Oe||(fe.__webglTexture===void 0&&(fe.__webglTexture=o.createTexture()),fe.__version=E.version,d.memory.textures++),Le){re.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(E.mipmaps&&E.mipmaps.length>0){re.__webglFramebuffer[ye]=[];for(let Re=0;Re<E.mipmaps.length;Re++)re.__webglFramebuffer[ye][Re]=o.createFramebuffer()}else re.__webglFramebuffer[ye]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){re.__webglFramebuffer=[];for(let ye=0;ye<E.mipmaps.length;ye++)re.__webglFramebuffer[ye]=o.createFramebuffer()}else re.__webglFramebuffer=o.createFramebuffer();if(Oe)for(let ye=0,Re=Se.length;ye<Re;ye++){const ze=s.get(Se[ye]);ze.__webglTexture===void 0&&(ze.__webglTexture=o.createTexture(),d.memory.textures++)}if(B.samples>0&&kt(B)===!1){re.__webglMultisampledFramebuffer=o.createFramebuffer(),re.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,re.__webglMultisampledFramebuffer);for(let ye=0;ye<Se.length;ye++){const Re=Se[ye];re.__webglColorRenderbuffer[ye]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,re.__webglColorRenderbuffer[ye]);const ze=u.convert(Re.format,Re.colorSpace),at=u.convert(Re.type),Ge=C(Re.internalFormat,ze,at,Re.normalized,Re.colorSpace,B.isXRRenderTarget===!0),He=yt(B);o.renderbufferStorageMultisample(o.RENDERBUFFER,He,Ge,B.width,B.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ye,o.RENDERBUFFER,re.__webglColorRenderbuffer[ye])}o.bindRenderbuffer(o.RENDERBUFFER,null),B.depthBuffer&&(re.__webglDepthRenderbuffer=o.createRenderbuffer(),Ae(re.__webglDepthRenderbuffer,B,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Le){i.bindTexture(o.TEXTURE_CUBE_MAP,fe.__webglTexture),$(o.TEXTURE_CUBE_MAP,E);for(let ye=0;ye<6;ye++)if(E.mipmaps&&E.mipmaps.length>0)for(let Re=0;Re<E.mipmaps.length;Re++)le(re.__webglFramebuffer[ye][Re],B,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Re);else le(re.__webglFramebuffer[ye],B,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);S(E)&&z(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Oe){for(let ye=0,Re=Se.length;ye<Re;ye++){const ze=Se[ye],at=s.get(ze);let Ge=o.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Ge=B.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ge,at.__webglTexture),$(Ge,ze),le(re.__webglFramebuffer,B,ze,o.COLOR_ATTACHMENT0+ye,Ge,0),S(ze)&&z(Ge)}i.unbindTexture()}else{let ye=o.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(ye=B.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(ye,fe.__webglTexture),$(ye,E),E.mipmaps&&E.mipmaps.length>0)for(let Re=0;Re<E.mipmaps.length;Re++)le(re.__webglFramebuffer[Re],B,E,o.COLOR_ATTACHMENT0,ye,Re);else le(re.__webglFramebuffer,B,E,o.COLOR_ATTACHMENT0,ye,0);S(E)&&z(ye),i.unbindTexture()}B.depthBuffer&&Ue(B)}function Ye(B){const E=B.textures;for(let re=0,fe=E.length;re<fe;re++){const Se=E[re];if(S(Se)){const Le=k(B),Oe=s.get(Se).__webglTexture;i.bindTexture(Le,Oe),z(Le),i.unbindTexture()}}}const $e=[],Mt=[];function Vt(B){if(B.samples>0){if(kt(B)===!1){const E=B.textures,re=B.width,fe=B.height;let Se=o.COLOR_BUFFER_BIT;const Le=B.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Oe=s.get(B),ye=E.length>1;if(ye)for(let ze=0;ze<E.length;ze++)i.bindFramebuffer(o.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ze,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Oe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ze,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer);const Re=B.texture.mipmaps;Re&&Re.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let ze=0;ze<E.length;ze++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(Se|=o.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(Se|=o.STENCIL_BUFFER_BIT)),ye){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Oe.__webglColorRenderbuffer[ze]);const at=s.get(E[ze]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,at,0)}o.blitFramebuffer(0,0,re,fe,0,0,re,fe,Se,o.NEAREST),p===!0&&($e.length=0,Mt.length=0,$e.push(o.COLOR_ATTACHMENT0+ze),B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&($e.push(Le),Mt.push(Le),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Mt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,$e))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),ye)for(let ze=0;ze<E.length;ze++){i.bindFramebuffer(o.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ze,o.RENDERBUFFER,Oe.__webglColorRenderbuffer[ze]);const at=s.get(E[ze]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Oe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ze,o.TEXTURE_2D,at,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&p){const E=B.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function yt(B){return Math.min(l.maxSamples,B.samples)}function kt(B){const E=s.get(B);return B.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Q(B){const E=d.render.frame;g.get(B)!==E&&(g.set(B,E),B.update())}function Qt(B,E){const re=B.colorSpace,fe=B.format,Se=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||re!==Bu&&re!==Ms&&(Ft.getTransfer(re)===tn?(fe!==Xi||Se!==vi)&&ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xt("WebGLTextures: Unsupported texture color space:",re)),E}function Et(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(m.width=B.naturalWidth||B.width,m.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(m.width=B.displayWidth,m.height=B.displayHeight):(m.width=B.width,m.height=B.height),m}this.allocateTextureUnit=W,this.resetTextureUnits=se,this.getTextureUnits=K,this.setTextureUnits=ne,this.setTexture2D=ce,this.setTexture2DArray=oe,this.setTexture3D=O,this.setTextureCube=L,this.rebindTextures=nt,this.setupRenderTarget=st,this.updateRenderTargetMipmap=Ye,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=le,this.useMultisampledRTT=kt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function s3(o,t){function i(s,l=Ms){let u;const d=Ft.getTransfer(l);if(s===vi)return o.UNSIGNED_BYTE;if(s===em)return o.UNSIGNED_SHORT_4_4_4_4;if(s===tm)return o.UNSIGNED_SHORT_5_5_5_1;if(s===oS)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===lS)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===sS)return o.BYTE;if(s===rS)return o.SHORT;if(s===Ll)return o.UNSIGNED_SHORT;if(s===$p)return o.INT;if(s===pa)return o.UNSIGNED_INT;if(s===ki)return o.FLOAT;if(s===ma)return o.HALF_FLOAT;if(s===cS)return o.ALPHA;if(s===uS)return o.RGB;if(s===Xi)return o.RGBA;if(s===Ga)return o.DEPTH_COMPONENT;if(s===$s)return o.DEPTH_STENCIL;if(s===nm)return o.RED;if(s===im)return o.RED_INTEGER;if(s===nr)return o.RG;if(s===am)return o.RG_INTEGER;if(s===sm)return o.RGBA_INTEGER;if(s===Du||s===Lu||s===Uu||s===Ou)if(d===tn)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===Du)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Lu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Uu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ou)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===Du)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Lu)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Uu)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ou)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===mp||s===gp||s===xp||s===vp)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===mp)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===gp)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===xp)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===vp)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===_p||s===Sp||s===yp||s===bp||s===Mp||s===zu||s===Ep)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(s===_p||s===Sp)return d===tn?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===yp)return d===tn?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(s===bp)return u.COMPRESSED_R11_EAC;if(s===Mp)return u.COMPRESSED_SIGNED_R11_EAC;if(s===zu)return u.COMPRESSED_RG11_EAC;if(s===Ep)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Tp||s===Ap||s===wp||s===Rp||s===Cp||s===Np||s===Dp||s===Lp||s===Up||s===Op||s===Pp||s===zp||s===Ip||s===Bp)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(s===Tp)return d===tn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ap)return d===tn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===wp)return d===tn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Rp)return d===tn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Cp)return d===tn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Np)return d===tn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Dp)return d===tn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Lp)return d===tn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Up)return d===tn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Op)return d===tn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Pp)return d===tn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===zp)return d===tn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ip)return d===tn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Bp)return d===tn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Fp||s===Hp||s===Gp)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(s===Fp)return d===tn?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Hp)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Gp)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Vp||s===kp||s===Iu||s===Xp)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(s===Vp)return u.COMPRESSED_RED_RGTC1_EXT;if(s===kp)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Iu)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Xp)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ul?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const r3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,o3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class l3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new _S(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new ga({vertexShader:r3,fragmentShader:o3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Dt(new ku(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class c3 extends ir{constructor(t,i){super();const s=this;let l=null,u=1,d=null,h="local-floor",p=1,m=null,g=null,x=null,v=null,M=null,w=null;const D=typeof XRWebGLBinding<"u",y=new l3,S={},z=i.getContextAttributes();let k=null,C=null;const P=[],U=[],F=new Ht;let T=null,N=null;const V=new ii;V.viewport=new dn;const X=new ii;X.viewport=new dn;const Z=[V,X],se=new xE;let K=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let te=P[G];return te===void 0&&(te=new Ph,P[G]=te),te.getTargetRaySpace()},this.getControllerGrip=function(G){let te=P[G];return te===void 0&&(te=new Ph,P[G]=te),te.getGripSpace()},this.getHand=function(G){let te=P[G];return te===void 0&&(te=new Ph,P[G]=te),te.getHandSpace()};function W(G){const te=U.indexOf(G.inputSource);if(te===-1)return;const be=P[te];be!==void 0&&(be.update(G.inputSource,G.frame,m||d),be.dispatchEvent({type:G.type,data:G.inputSource}))}function j(){l.removeEventListener("select",W),l.removeEventListener("selectstart",W),l.removeEventListener("selectend",W),l.removeEventListener("squeeze",W),l.removeEventListener("squeezestart",W),l.removeEventListener("squeezeend",W),l.removeEventListener("end",j),l.removeEventListener("inputsourceschange",ce);for(let G=0;G<P.length;G++){const te=U[G];te!==null&&(U[G]=null,P[G].disconnect(te))}K=null,ne=null,y.reset();for(const G in S)delete S[G];if(t.setRenderTarget(k),M=null,v=null,x=null,l=null,C=null,_e.stop(),s.isPresenting=!1,t.setPixelRatio(T),t.setSize(F.width,F.height,!1),N!==null){const G=N.camera;G.fov=N.fov,G.zoom=N.zoom,G.updateProjectionMatrix(),N=null}s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){u=G,s.isPresenting===!0&&ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){h=G,s.isPresenting===!0&&ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(G){m=G},this.getBaseLayer=function(){return v!==null?v:M},this.getBinding=function(){return x===null&&D&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return w},this.getSession=function(){return l},this.setSession=async function(G){if(l=G,l!==null){if(k=t.getRenderTarget(),l.addEventListener("select",W),l.addEventListener("selectstart",W),l.addEventListener("selectend",W),l.addEventListener("squeeze",W),l.addEventListener("squeezestart",W),l.addEventListener("squeezeend",W),l.addEventListener("end",j),l.addEventListener("inputsourceschange",ce),z.xrCompatible!==!0&&await i.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(F),D&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Te=null,le=null;z.depth&&(le=z.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,be=z.stencil?$s:Ga,Te=z.stencil?Ul:pa);const Ae={colorFormat:i.RGBA8,depthFormat:le,scaleFactor:u};x=this.getBinding(),v=x.createProjectionLayer(Ae),l.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),C=new ji(v.textureWidth,v.textureHeight,{format:Xi,type:vi,depthTexture:new Pl(v.textureWidth,v.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:z.stencil,colorSpace:t.outputColorSpace,samples:z.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1,storeMultisampledDepthBuffer:v.ignoreDepthValues===!1,storeMultisampledStencilBuffer:v.ignoreDepthValues===!1})}else{const be={antialias:z.antialias,alpha:!0,depth:z.depth,stencil:z.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,be),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),C=new ji(M.framebufferWidth,M.framebufferHeight,{format:Xi,type:vi,colorSpace:t.outputColorSpace,stencilBuffer:z.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1,storeMultisampledDepthBuffer:M.ignoreDepthValues===!1,storeMultisampledStencilBuffer:M.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await l.requestReferenceSpace(h),_e.setContext(l),_e.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function ce(G){for(let te=0;te<G.removed.length;te++){const be=G.removed[te],Te=U.indexOf(be);Te>=0&&(U[Te]=null,P[Te].disconnect(be))}for(let te=0;te<G.added.length;te++){const be=G.added[te];let Te=U.indexOf(be);if(Te===-1){for(let Ae=0;Ae<P.length;Ae++)if(Ae>=U.length){U.push(be),Te=Ae;break}else if(U[Ae]===null){U[Ae]=be,Te=Ae;break}if(Te===-1)break}const le=P[Te];le&&le.connect(be)}}const oe=new de,O=new de;function L(G,te,be){oe.setFromMatrixPosition(te.matrixWorld),O.setFromMatrixPosition(be.matrixWorld);const Te=oe.distanceTo(O),le=te.projectionMatrix.elements,Ae=be.projectionMatrix.elements,De=le[14]/(le[10]-1),Ue=le[14]/(le[10]+1),nt=(le[9]+1)/le[5],st=(le[9]-1)/le[5],Ye=(le[8]-1)/le[0],$e=(Ae[8]+1)/Ae[0],Mt=De*Ye,Vt=De*$e,yt=Te/(-Ye+$e),kt=yt*-Ye;if(te.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(kt),G.translateZ(yt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),le[10]===-1)G.projectionMatrix.copy(te.projectionMatrix),G.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const Q=De+yt,Qt=Ue+yt,Et=Mt-kt,B=Vt+(Te-kt),E=nt*Ue/Qt*Q,re=st*Ue/Qt*Q;G.projectionMatrix.makePerspective(Et,B,E,re,Q,Qt),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function Ce(G,te){te===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(te.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(l===null)return;let te=G.near,be=G.far;y.texture!==null&&(y.depthNear>0&&(te=y.depthNear),y.depthFar>0&&(be=y.depthFar)),se.near=X.near=V.near=te,se.far=X.far=V.far=be,(K!==se.near||ne!==se.far)&&(l.updateRenderState({depthNear:se.near,depthFar:se.far}),K=se.near,ne=se.far),se.layers.mask=G.layers.mask|6,V.layers.mask=se.layers.mask&-5,X.layers.mask=se.layers.mask&-3;const Te=G.parent,le=se.cameras;Ce(se,Te);for(let Ae=0;Ae<le.length;Ae++)Ce(le[Ae],Te);le.length===2?L(se,V,X):se.projectionMatrix.copy(V.projectionMatrix),N===null&&G.isPerspectiveCamera&&(N={camera:G,fov:G.fov,zoom:G.zoom}),ve(G,se,Te)};function ve(G,te,be){be===null?G.matrix.copy(te.matrixWorld):(G.matrix.copy(be.matrixWorld),G.matrix.invert(),G.matrix.multiply(te.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(te.projectionMatrix),G.projectionMatrixInverse.copy(te.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=mo*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return se},this.getFoveation=function(){if(!(v===null&&M===null))return p},this.setFoveation=function(G){p=G,v!==null&&(v.fixedFoveation=G),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=G)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(se)},this.getCameraTexture=function(G){return S[G]};let I=null;function $(G,te){if(g=te.getViewerPose(m||d),w=te,g!==null){const be=g.views;M!==null&&(t.setRenderTargetFramebuffer(C,M.framebuffer),t.setRenderTarget(C));let Te=!1;be.length!==se.cameras.length&&(se.cameras.length=0,Te=!0);for(let Ue=0;Ue<be.length;Ue++){const nt=be[Ue];let st=null;if(M!==null)st=M.getViewport(nt);else{const $e=x.getViewSubImage(v,nt);st=$e.viewport,Ue===0&&(t.setRenderTargetTextures(C,$e.colorTexture,$e.depthStencilTexture),t.setRenderTarget(C))}let Ye=Z[Ue];Ye===void 0&&(Ye=new ii,Ye.layers.enable(Ue),Ye.viewport=new dn,Z[Ue]=Ye),Ye.matrix.fromArray(nt.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(nt.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(st.x,st.y,st.width,st.height),Ue===0&&(se.matrix.copy(Ye.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale)),Te===!0&&se.cameras.push(Ye)}const le=l.enabledFeatures;if(le&&le.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&D){x=s.getBinding();const Ue=x.getDepthInformation(be[0]);Ue&&Ue.isValid&&Ue.texture&&y.init(Ue,l.renderState)}if(le&&le.includes("camera-access")&&D){t.state.unbindTexture(),x=s.getBinding();for(let Ue=0;Ue<be.length;Ue++){const nt=be[Ue].camera;if(nt){let st=S[nt];st||(st=new _S,S[nt]=st);const Ye=x.getCameraImage(nt);st.sourceTexture=Ye}}}}for(let be=0;be<P.length;be++){const Te=U[be],le=P[be];Te!==null&&le!==void 0&&le.update(Te,te,m||d)}I&&I(G,te),te.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:te}),w=null}const _e=new bS;_e.setAnimationLoop($),this.setAnimationLoop=function(G){I=G},this.dispose=function(){}}}const u3=new cn,CS=new xt;CS.set(-1,0,0,0,1,0,0,0,1);function f3(o,t){function i(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function s(y,S){S.color.getRGB(y.fogColor.value,SS(o)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function l(y,S,z,k,C){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?u(y,S):S.isMeshLambertMaterial?(u(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(u(y,S),x(y,S)):S.isMeshPhongMaterial?(u(y,S),g(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(u(y,S),v(y,S),S.isMeshPhysicalMaterial&&M(y,S,C)):S.isMeshMatcapMaterial?(u(y,S),w(y,S)):S.isMeshDepthMaterial?u(y,S):S.isMeshDistanceMaterial?(u(y,S),D(y,S)):S.isMeshNormalMaterial?u(y,S):S.isLineBasicMaterial?(d(y,S),S.isLineDashedMaterial&&h(y,S)):S.isPointsMaterial?p(y,S,z,k):S.isSpriteMaterial?m(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function u(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,i(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===ai&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,i(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===ai&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,i(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,i(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const z=t.get(S),k=z.envMap,C=z.envMapRotation;k&&(y.envMap.value=k,y.envMapRotation.value.setFromMatrix4(u3.makeRotationFromEuler(C)).transpose(),k.isCubeTexture&&k.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(CS),y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,y.aoMapTransform))}function d(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform))}function h(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function p(y,S,z,k){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*z,y.scale.value=k*.5,S.map&&(y.map.value=S.map,i(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function m(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function g(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function x(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function v(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function M(y,S,z){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===ai&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.retroreflectivity>0&&(y.retroreflectivity.value=S.retroreflectivity),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=z.texture,y.transmissionSamplerSize.value.set(z.width,z.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,y.specularIntensityMapTransform))}function w(y,S){S.matcap&&(y.matcap.value=S.matcap)}function D(y,S){const z=t.get(S).light;y.referencePosition.value.setFromMatrixPosition(z.matrixWorld),y.nearDistance.value=z.shadow.camera.near,y.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function d3(o,t,i,s){let l={},u={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(C,P){const U=P.program;s.uniformBlockBinding(C,U)}function m(C,P){let U=l[C.id];U===void 0&&(y(C),U=g(C),l[C.id]=U,C.addEventListener("dispose",z));const F=P.program;s.updateUBOMapping(C,F);const T=t.render.frame;u[C.id]!==T&&(v(C),u[C.id]=T)}function g(C){const P=x();C.__bindingPointIndex=P;const U=o.createBuffer(),F=C.__size,T=C.usage;return o.bindBuffer(o.UNIFORM_BUFFER,U),o.bufferData(o.UNIFORM_BUFFER,F,T),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,P,U),U}function x(){for(let C=0;C<h;C++)if(d.indexOf(C)===-1)return d.push(C),C;return Xt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(C){const P=l[C.id],U=C.uniforms,F=C.__cache;o.bindBuffer(o.UNIFORM_BUFFER,P);for(let T=0,N=U.length;T<N;T++){const V=U[T];if(Array.isArray(V))for(let X=0,Z=V.length;X<Z;X++)M(V[X],T,X,F);else M(V,T,0,F)}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(C,P,U,F){if(D(C,P,U,F)===!0){const T=C.__offset,N=C.value;if(Array.isArray(N)){let V=0;for(let X=0;X<N.length;X++){const Z=N[X],se=S(Z);w(Z,C.__data,V),typeof Z!="number"&&typeof Z!="boolean"&&!Z.isMatrix3&&!ArrayBuffer.isView(Z)&&(V+=se.storage/Float32Array.BYTES_PER_ELEMENT)}}else w(N,C.__data,0);o.bufferSubData(o.UNIFORM_BUFFER,T,C.__data)}}function w(C,P,U){typeof C=="number"||typeof C=="boolean"?P[0]=C:C.isMatrix3?(P[0]=C.elements[0],P[1]=C.elements[1],P[2]=C.elements[2],P[3]=0,P[4]=C.elements[3],P[5]=C.elements[4],P[6]=C.elements[5],P[7]=0,P[8]=C.elements[6],P[9]=C.elements[7],P[10]=C.elements[8],P[11]=0):ArrayBuffer.isView(C)?P.set(new C.constructor(C.buffer,C.byteOffset,P.length)):C.toArray(P,U)}function D(C,P,U,F){const T=C.value,N=P+"_"+U;if(F[N]===void 0)return typeof T=="number"||typeof T=="boolean"?F[N]=T:ArrayBuffer.isView(T)?F[N]=T.slice():F[N]=T.clone(),!0;{const V=F[N];if(typeof T=="number"||typeof T=="boolean"){if(V!==T)return F[N]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(V.equals(T)===!1)return V.copy(T),!0}}return!1}function y(C){const P=C.uniforms;let U=0;const F=16;for(let N=0,V=P.length;N<V;N++){const X=Array.isArray(P[N])?P[N]:[P[N]];for(let Z=0,se=X.length;Z<se;Z++){const K=X[Z],ne=Array.isArray(K.value)?K.value:[K.value];for(let W=0,j=ne.length;W<j;W++){const ce=ne[W],oe=S(ce),O=U%F,L=O%oe.boundary,Ce=O+L;U+=L,Ce!==0&&F-Ce<oe.storage&&(U+=F-Ce),K.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=U,U+=oe.storage}}}const T=U%F;return T>0&&(U+=F-T),C.__size=U,C.__cache={},this}function S(C){const P={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(P.boundary=4,P.storage=4):C.isVector2?(P.boundary=8,P.storage=8):C.isVector3||C.isColor?(P.boundary=16,P.storage=12):C.isVector4?(P.boundary=16,P.storage=16):C.isMatrix3?(P.boundary=48,P.storage=48):C.isMatrix4?(P.boundary=64,P.storage=64):C.isTexture?ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(P.boundary=16,P.storage=C.byteLength):ft("WebGLRenderer: Unsupported uniform value type.",C),P}function z(C){const P=C.target;P.removeEventListener("dispose",z);const U=d.indexOf(P.__bindingPointIndex);d.splice(U,1),o.deleteBuffer(l[P.id]),delete l[P.id],delete u[P.id]}function k(){for(const C in l)o.deleteBuffer(l[C]);d=[],l={},u={}}return{bind:p,update:m,dispose:k}}const h3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let oa=null;function p3(){return oa===null&&(oa=new xS(h3,16,16,nr,ma),oa.name="DFG_LUT",oa.minFilter=Vn,oa.magFilter=Vn,oa.wrapS=Ba,oa.wrapT=Ba,oa.generateMipmaps=!1,oa.needsUpdate=!0),oa}class m3{constructor(t={}){const{canvas:i=h1(),context:s=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:v=!1,outputBufferType:M=vi}=t;this.isWebGLRenderer=!0;let w;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=s.getContextAttributes().alpha}else w=d;const D=M,y=new Set([sm,am,im]),S=new Set([vi,pa,Ll,Ul,em,tm]),z=new Uint32Array(4),k=new Int32Array(4),C=new de;let P=null,U=null;const F=[],T=[];let N=null;this.domElement=i,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=da,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const V=this;let X=!1,Z=null,se=null,K=null,ne=null;this._outputColorSpace=Di;let W=0,j=0,ce=null,oe=-1,O=null;const L=new dn,Ce=new dn;let ve=null;const I=new Lt(0);let $=0,_e=i.width,G=i.height,te=1,be=null,Te=null;const le=new dn(0,0,_e,G),Ae=new dn(0,0,_e,G);let De=!1;const Ue=new dm;let nt=!1,st=!1;const Ye=new cn,$e=new de,Mt=new dn,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let yt=!1;function kt(){return ce===null?te:1}let Q=s;function Qt(A,q){return i.getContext(A,q)}let Et,B,E,re,fe,Se,Le,Oe,ye,Re,ze,at,Ge,He,We,ot,ht,J,Pe,we,Ie,qe,Ne;try{const A={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Jp}`),i.addEventListener("webglcontextlost",It,!1),i.addEventListener("webglcontextrestored",pt,!1),i.addEventListener("webglcontextcreationerror",si,!1),Q===null){const q="webgl2";if(Q=Qt(q,A),Q===null)throw Qt(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}it()}catch(A){throw i.removeEventListener("webglcontextlost",It,!1),i.removeEventListener("webglcontextrestored",pt,!1),i.removeEventListener("webglcontextcreationerror",si,!1),Xt("WebGLRenderer: "+A.message),A}function it(){Et=new p2(Q),Et.init(),Ie=new s3(Q,Et),B=new a2(Q,Et,t,Ie),E=new i3(Q,Et),B.reversedDepthBuffer&&v&&E.buffers.depth.setReversed(!0),se=Q.createFramebuffer(),K=Q.createFramebuffer(),ne=Q.createFramebuffer(),re=new x2(Q),fe=new kw,Se=new a3(Q,Et,E,fe,B,Ie,re),Le=new h2(V),Oe=new _E(Q),qe=new n2(Q,Oe),ye=new m2(Q,Oe,re,qe),Re=new _2(Q,ye,Oe,qe,re),J=new v2(Q,B,Se),We=new s2(fe),ze=new Vw(V,Le,Et,B,qe,We),at=new f3(V,fe),Ge=new jw,He=new Qw(Et),ht=new t2(V,Le,E,Re,w,p),ot=new n3(V,Re,B),Ne=new d3(Q,re,B,E),Pe=new i2(Q,Et,re),we=new g2(Q,Et,re),re.programs=ze.programs,V.capabilities=B,V.extensions=Et,V.properties=fe,V.renderLists=Ge,V.shadowMap=ot,V.state=E,V.info=re}D!==vi&&(N=new y2(D,i.width,i.height,h,l,u));const je=new c3(V,Q);this.xr=je,this.getContext=function(){return Q},this.getContextAttributes=function(){return Q.getContextAttributes()},this.forceContextLoss=function(){const A=Et.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Et.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(A){A!==void 0&&(te=A,this.setSize(_e,G,!1))},this.getSize=function(A){return A.set(_e,G)},this.setSize=function(A,q,xe=!0){if(je.isPresenting){ft("WebGLRenderer: Can't change size while VR device is presenting.");return}_e=A,G=q,i.width=Math.floor(A*te),i.height=Math.floor(q*te),xe===!0&&(i.style.width=A+"px",i.style.height=q+"px"),N!==null&&N.setSize(i.width,i.height),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(_e*te,G*te).floor()},this.setDrawingBufferSize=function(A,q,xe){_e=A,G=q,te=xe,i.width=Math.floor(A*xe),i.height=Math.floor(q*xe),this.setViewport(0,0,A,q)},this.setEffects=function(A){if(D===vi){Xt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let q=0;q<A.length;q++)if(A[q].isOutputPass===!0){ft("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(L)},this.getViewport=function(A){return A.copy(le)},this.setViewport=function(A,q,xe,he){A.isVector4?le.set(A.x,A.y,A.z,A.w):le.set(A,q,xe,he),E.viewport(L.copy(le).multiplyScalar(te).round())},this.getScissor=function(A){return A.copy(Ae)},this.setScissor=function(A,q,xe,he){A.isVector4?Ae.set(A.x,A.y,A.z,A.w):Ae.set(A,q,xe,he),E.scissor(Ce.copy(Ae).multiplyScalar(te).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(A){E.setScissorTest(De=A)},this.setOpaqueSort=function(A){be=A},this.setTransparentSort=function(A){Te=A},this.getClearColor=function(A){return A.copy(ht.getClearColor())},this.setClearColor=function(){ht.setClearColor(...arguments)},this.getClearAlpha=function(){return ht.getClearAlpha()},this.setClearAlpha=function(){ht.setClearAlpha(...arguments)},this.clear=function(A=!0,q=!0,xe=!0){let he=0;if(A){let pe=!1;if(ce!==null){const Ve=ce.texture.format;pe=y.has(Ve)}if(pe){const Ve=ce.texture.type,Ze=S.has(Ve),Be=ht.getClearColor(),Je=ht.getClearAlpha(),et=Be.r,ut=Be.g,mt=Be.b;Ze?(z[0]=et,z[1]=ut,z[2]=mt,z[3]=Je,Q.clearBufferuiv(Q.COLOR,0,z)):(k[0]=et,k[1]=ut,k[2]=mt,k[3]=Je,Q.clearBufferiv(Q.COLOR,0,k))}else he|=Q.COLOR_BUFFER_BIT}q&&(he|=Q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),xe&&(he|=Q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),he!==0&&Q.clear(he)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),Z=A},this.dispose=function(){i.removeEventListener("webglcontextlost",It,!1),i.removeEventListener("webglcontextrestored",pt,!1),i.removeEventListener("webglcontextcreationerror",si,!1),ht.dispose(),Ge.dispose(),He.dispose(),fe.dispose(),Le.dispose(),Re.dispose(),qe.dispose(),Ne.dispose(),ze.dispose(),je.dispose(),je.removeEventListener("sessionstart",Ts),je.removeEventListener("sessionend",Xa),qi.stop()};function It(A){A.preventDefault(),jv("WebGLRenderer: Context Lost."),X=!0}function pt(){jv("WebGLRenderer: Context Restored."),X=!1;const A=re.autoReset,q=ot.enabled,xe=ot.autoUpdate,he=ot.needsUpdate,pe=ot.type;it(),re.autoReset=A,ot.enabled=q,ot.autoUpdate=xe,ot.needsUpdate=he,ot.type=pe}function si(A){Xt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function _i(A){const q=A.target;q.removeEventListener("dispose",_i),Wu(q)}function Wu(A){sr(A),fe.remove(A)}function sr(A){const q=fe.get(A).programs;q!==void 0&&(q.forEach(function(xe){ze.releaseProgram(xe)}),A.isShaderMaterial&&ze.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,xe,he,pe,Ve){q===null&&(q=Vt);const Ze=pe.isMesh&&pe.matrixWorld.determinantAffine()<0,Be=Ao(A,q,xe,he,pe);E.setMaterial(he,Ze);let Je=xe.index,et=1;if(he.wireframe===!0){if(Je=ye.getWireframeAttribute(xe),Je===void 0)return;et=2}const ut=xe.drawRange,mt=xe.attributes.position;let Ke=ut.start*et,Rt=(ut.start+ut.count)*et;Ve!==null&&(Ke=Math.max(Ke,Ve.start*et),Rt=Math.min(Rt,(Ve.start+Ve.count)*et)),Je!==null?(Ke=Math.max(Ke,0),Rt=Math.min(Rt,Je.count)):mt!=null&&(Ke=Math.max(Ke,0),Rt=Math.min(Rt,mt.count));const Tt=Rt-Ke;if(Tt<0||Tt===1/0)return;qe.setup(pe,he,Be,xe,Je);let nn,Zt=Pe;if(Je!==null&&(nn=Oe.get(Je),Zt=we,Zt.setIndex(nn)),pe.isMesh)he.wireframe===!0?(E.setLineWidth(he.wireframeLinewidth*kt()),Zt.setMode(Q.LINES)):Zt.setMode(Q.TRIANGLES);else if(pe.isLine){let Mn=he.linewidth;Mn===void 0&&(Mn=1),E.setLineWidth(Mn*kt()),pe.isLineSegments?Zt.setMode(Q.LINES):pe.isLineLoop?Zt.setMode(Q.LINE_LOOP):Zt.setMode(Q.LINE_STRIP)}else pe.isPoints?Zt.setMode(Q.POINTS):pe.isSprite&&Zt.setMode(Q.TRIANGLES);if(pe.isBatchedMesh)if(Et.get("WEBGL_multi_draw"))Zt.renderMultiDraw(pe._multiDrawStarts,pe._multiDrawCounts,pe._multiDrawCount);else{const Mn=pe._multiDrawStarts,ke=pe._multiDrawCounts,hn=pe._multiDrawCount,Bt=Je?Oe.get(Je).bytesPerElement:1,Xn=fe.get(he).currentProgram.getUniforms();for(let ri=0;ri<hn;ri++)Xn.setValue(Q,"_gl_DrawID",ri),Zt.render(Mn[ri]/Bt,ke[ri])}else if(pe.isInstancedMesh)Zt.renderInstances(Ke,Tt,pe.count);else if(xe.isInstancedBufferGeometry){const Mn=xe._maxInstanceCount!==void 0?xe._maxInstanceCount:1/0,ke=Math.min(xe.instanceCount,Mn);Zt.renderInstances(Ke,Tt,ke)}else Zt.render(Ke,Tt)};function Es(A,q,xe,he){Z!==null&&A.isNodeMaterial&&Z.setObject(he,A),nt===!0&&We.setState(A,xe,!1),A.transparent===!0&&A.side===ca&&A.forceSinglePass===!1?(A.side=ai,A.needsUpdate=!0,As(A,q,he),A.side=er,A.needsUpdate=!0,As(A,q,he),A.side=ca):As(A,q,he)}this.compile=function(A,q,xe=null){xe===null&&(xe=A),Z!==null&&Z.renderStart(A,q,xe),U=He.get(xe),U.init(q),T.push(U),xe.traverseVisible(function(pe){pe.isLight&&pe.layers.test(q.layers)&&(U.pushLight(pe),pe.castShadow&&U.pushShadow(pe))}),A!==xe&&A.traverseVisible(function(pe){pe.isLight&&pe.layers.test(q.layers)&&(U.pushLight(pe),pe.castShadow&&U.pushShadow(pe))}),U.setupLights(),Z!==null&&Z.updateLights(U.state.lightsArray),st=this.localClippingEnabled,nt=We.init(this.clippingPlanes,st),nt===!0&&We.setGlobalState(this.clippingPlanes,q),Z!==null&&ot.render(U.state.shadowsArray,xe,q);const he=new Set;return A.traverse(function(pe){if(!(pe.isMesh||pe.isPoints||pe.isLine||pe.isSprite))return;const Ve=pe.material;if(Ve)if(Array.isArray(Ve))for(let Ze=0;Ze<Ve.length;Ze++){const Be=Ve[Ze];Es(Be,xe,q,pe),he.add(Be)}else Es(Ve,xe,q,pe),he.add(Ve)}),U=T.pop(),Z!==null&&Z.renderEnd(),he},this.compileAsync=function(A,q,xe=null){const he=this.compile(A,q,xe);return new Promise(pe=>{function Ve(){if(he.forEach(function(Ze){const Je=fe.get(Ze).currentProgram;(Je===void 0||Je.isReady())&&he.delete(Ze)}),he.size===0){pe(A);return}setTimeout(Ve,10)}Et.get("KHR_parallel_shader_compile")!==null?Ve():setTimeout(Ve,10)})};let ka=null;function va(A){ka&&ka(A)}function Ts(){qi.stop()}function Xa(){qi.start()}const qi=new bS;qi.setAnimationLoop(va),typeof self<"u"&&qi.setContext(self),this.setAnimationLoop=function(A){ka=A,je.setAnimationLoop(A),A===null?qi.stop():qi.start()},je.addEventListener("sessionstart",Ts),je.addEventListener("sessionend",Xa),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){Xt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;Z!==null&&Z.renderStart(A,q);const xe=je.enabled===!0&&je.isPresenting===!0,he=N!==null&&(ce===null||xe)&&N.begin(V,ce);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),je.enabled===!0&&je.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(je.cameraAutoUpdate===!0&&je.updateCamera(q),q=je.getCamera()),A.isScene===!0&&A.onBeforeRender(V,A,q,ce),U=He.get(A,T.length),U.init(q),U.state.textureUnits=Se.getTextureUnits(),T.push(U),Ye.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Ue.setFromProjectionMatrix(Ye,fa,q.reversedDepth),st=this.localClippingEnabled,nt=We.init(this.clippingPlanes,st),P=Ge.get(A,F.length),P.init(),F.push(P),je.enabled===!0&&je.isPresenting===!0){const Ze=V.xr.getDepthSensingMesh();Ze!==null&&yo(Ze,q,-1/0,V.sortObjects)}yo(A,q,0,V.sortObjects),P.finish(),Z!==null&&Z.updateLights(U.state.lightsArray),V.sortObjects===!0&&P.sort(be,Te),yt=je.enabled===!1||je.isPresenting===!1||je.hasDepthSensing()===!1,yt&&ht.addToRenderList(P,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),nt===!0&&We.beginShadows();const pe=U.state.shadowsArray;if(ot.render(pe,A,q),nt===!0&&We.endShadows(),(he&&N.hasRenderPass())===!1){const Ze=P.opaque,Be=P.transmissive;if(U.setupLights(),q.isArrayCamera){const Je=q.cameras;if(Be.length>0)for(let et=0,ut=Je.length;et<ut;et++){const mt=Je[et];rr(Ze,Be,A,mt)}yt&&ht.render(A);for(let et=0,ut=Je.length;et<ut;et++){const mt=Je[et];bo(P,A,mt,mt.viewport)}}else Be.length>0&&rr(Ze,Be,A,q),yt&&ht.render(A),bo(P,A,q)}ce!==null&&j===0&&(Se.updateMultisampleRenderTarget(ce),Se.updateRenderTargetMipmap(ce)),he&&N.end(V),A.isScene===!0&&A.onAfterRender(V,A,q),qe.resetDefaultState(),oe=-1,O=null,T.pop(),T.length>0?(U=T[T.length-1],Se.setTextureUnits(U.state.textureUnits),nt===!0&&We.setGlobalState(V.clippingPlanes,U.state.camera)):U=null,F.pop(),F.length>0?P=F[F.length-1]:P=null,Z!==null&&Z.renderEnd()};function yo(A,q,xe,he){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)xe=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLightProbeGrid)U.pushLightProbeGrid(A);else if(A.isLight)U.pushLight(A),A.castShadow&&U.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(Ue)){he&&Mt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ye);const Ze=Re.update(A),Be=A.material;Be.visible&&P.push(A,Ze,Be,xe,Mt.z,null,q)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(Ue))){const Ze=Re.update(A),Be=A.material;if(he&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Mt.copy(A.boundingSphere.center)):(Ze.boundingSphere===null&&Ze.computeBoundingSphere(),Mt.copy(Ze.boundingSphere.center)),Mt.applyMatrix4(A.matrixWorld).applyMatrix4(Ye)),Array.isArray(Be)){const Je=Ze.groups;for(let et=0,ut=Je.length;et<ut;et++){const mt=Je[et],Ke=Be[mt.materialIndex];Ke&&Ke.visible&&P.push(A,Ze,Ke,xe,Mt.z,mt,q)}}else Be.visible&&P.push(A,Ze,Be,xe,Mt.z,null,q)}}const Ve=A.children;for(let Ze=0,Be=Ve.length;Ze<Be;Ze++)yo(Ve[Ze],q,xe,he)}function bo(A,q,xe,he){const{opaque:pe,transmissive:Ve,transparent:Ze}=A;U.setupLightsView(xe),nt===!0&&We.setGlobalState(V.clippingPlanes,xe),he&&E.viewport(L.copy(he)),pe.length>0&&Wi(pe,q,xe),Ve.length>0&&Wi(Ve,q,xe),Ze.length>0&&Wi(Ze,q,xe),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function rr(A,q,xe,he){if((xe.isScene===!0?xe.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[he.id]===void 0){const Ke=Et.has("EXT_color_buffer_half_float")||Et.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[he.id]=new ji(1,1,{generateMipmaps:!0,type:Ke?ma:vi,minFilter:Js,samples:Math.max(4,B.samples),stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ft.workingColorSpace})}const Ve=U.state.transmissionRenderTarget[he.id],Ze=he.viewport||L;Ve.setSize(Ze.z*V.transmissionResolutionScale,Ze.w*V.transmissionResolutionScale);const Be=V.getRenderTarget(),Je=V.getActiveCubeFace(),et=V.getActiveMipmapLevel();V.setRenderTarget(Ve),V.getClearColor(I),$=V.getClearAlpha(),$<1&&V.setClearColor(16777215,.5),V.clear(),yt&&ht.render(xe);const ut=V.toneMapping;V.toneMapping=da;const mt=he.viewport;if(he.viewport!==void 0&&(he.viewport=void 0),U.setupLightsView(he),nt===!0&&We.setGlobalState(V.clippingPlanes,he),Wi(A,xe,he),Se.updateMultisampleRenderTarget(Ve),Se.updateRenderTargetMipmap(Ve),Et.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let Rt=0,Tt=q.length;Rt<Tt;Rt++){const nn=q[Rt],{object:Zt,geometry:Mn,material:ke,group:hn}=nn;if(ke.side===ca&&Zt.layers.test(he.layers)){const Bt=ke.side;ke.side=ai,ke.needsUpdate=!0,Fl(Zt,xe,he,Mn,ke,hn),ke.side=Bt,ke.needsUpdate=!0,Ke=!0}}Ke===!0&&(Se.updateMultisampleRenderTarget(Ve),Se.updateRenderTargetMipmap(Ve))}V.setRenderTarget(Be,Je,et),V.setClearColor(I,$),mt!==void 0&&(he.viewport=mt),V.toneMapping=ut}function Wi(A,q,xe){const he=q.isScene===!0?q.overrideMaterial:null;for(let pe=0,Ve=A.length;pe<Ve;pe++){const Ze=A[pe],{object:Be,geometry:Je,group:et}=Ze;let ut=Ze.material;ut.allowOverride===!0&&he!==null&&(ut=he),Be.layers.test(xe.layers)&&Fl(Be,q,xe,Je,ut,et)}}function Fl(A,q,xe,he,pe,Ve){Z!==null&&pe.isNodeMaterial&&Z.setObject(A,pe),A.onBeforeRender(V,q,xe,he,pe,Ve),A.modelViewMatrix.multiplyMatrices(xe.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),pe.onBeforeRender(V,q,xe,he,A,Ve),pe.transparent===!0&&pe.side===ca&&pe.forceSinglePass===!1?(pe.side=ai,pe.needsUpdate=!0,V.renderBufferDirect(xe,q,he,pe,A,Ve),pe.side=er,pe.needsUpdate=!0,V.renderBufferDirect(xe,q,he,pe,A,Ve),pe.side=ca):V.renderBufferDirect(xe,q,he,pe,A,Ve),A.onAfterRender(V,q,xe,he,pe,Ve)}function As(A,q,xe){q.isScene!==!0&&(q=Vt);const he=fe.get(A),pe=U.state.lights,Ve=U.state.shadowsArray,Ze=pe.state.version,Be=ze.getParameters(A,pe.state,Ve,q,xe,U.state.lightProbeGridArray),Je=ze.getProgramCacheKey(Be);let et=he.programs;he.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?q.environment:null,he.fog=q.fog;const ut=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;he.envMap=Le.get(A.envMap||he.environment,ut),he.envMapRotation=he.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,et===void 0&&(A.addEventListener("dispose",_i),et=new Map,he.programs=et);let mt=et.get(Je);if(mt!==void 0){if(he.currentProgram===mt&&he.lightsStateVersion===Ze)return Eo(A,Be),mt}else Be.uniforms=ze.getUniforms(A),Z!==null&&A.isNodeMaterial&&Z.build(A,xe,Be),A.onBeforeCompile(Be,V),mt=ze.acquireProgram(Be,Je),et.set(Je,mt),he.uniforms=Be.uniforms;const Ke=he.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ke.clippingPlanes=We.uniform),Eo(A,Be),he.needsLights=Gl(A),he.lightsStateVersion=Ze,he.needsLights&&(Ke.ambientLightColor.value=pe.state.ambient,Ke.lightProbe.value=pe.state.probe,Ke.sunLights.value=pe.state.sun,Ke.sunLightShadows.value=pe.state.sunShadow,Ke.directionalLights.value=pe.state.directional,Ke.directionalLightShadows.value=pe.state.directionalShadow,Ke.spotLights.value=pe.state.spot,Ke.spotLightShadows.value=pe.state.spotShadow,Ke.rectAreaLights.value=pe.state.rectArea,Ke.ltc_1.value=pe.state.rectAreaLTC1,Ke.ltc_2.value=pe.state.rectAreaLTC2,Ke.pointLights.value=pe.state.point,Ke.pointLightShadows.value=pe.state.pointShadow,Ke.hemisphereLights.value=pe.state.hemi,Ke.sunShadowMatrix.value=pe.state.sunShadowMatrix,Ke.sunShadowCascade.value=pe.state.sunShadowCascade,Ke.directionalShadowMatrix.value=pe.state.directionalShadowMatrix,Ke.spotLightMatrix.value=pe.state.spotLightMatrix,Ke.spotLightMap.value=pe.state.spotLightMap,Ke.pointShadowMatrix.value=pe.state.pointShadowMatrix),he.lightProbeGrid=U.state.lightProbeGridArray.length>0,he.currentProgram=mt,he.uniformsList=null,mt}function Mo(A){if(A.uniformsList===null){const q=A.currentProgram.getUniforms();A.uniformsList=Pu.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function Eo(A,q){const xe=fe.get(A);xe.outputColorSpace=q.outputColorSpace,xe.batching=q.batching,xe.batchingColor=q.batchingColor,xe.instancing=q.instancing,xe.instancingColor=q.instancingColor,xe.instancingMorph=q.instancingMorph,xe.skinning=q.skinning,xe.morphTargets=q.morphTargets,xe.morphNormals=q.morphNormals,xe.morphColors=q.morphColors,xe.morphTargetsCount=q.morphTargetsCount,xe.numClippingPlanes=q.numClippingPlanes,xe.numIntersection=q.numClipIntersection,xe.vertexAlphas=q.vertexAlphas,xe.vertexTangents=q.vertexTangents,xe.toneMapping=q.toneMapping}function To(A,q){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;C.setFromMatrixPosition(q.matrixWorld);for(let xe=0,he=A.length;xe<he;xe++){const pe=A[xe];if(pe.texture!==null&&pe.boundingBox.containsPoint(C))return pe}return null}function Ao(A,q,xe,he,pe){q.isScene!==!0&&(q=Vt),Se.resetTextureUnits();const Ve=q.fog,Ze=he.isMeshStandardMaterial||he.isMeshLambertMaterial||he.isMeshPhongMaterial?q.environment:null,Be=ce===null?V.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Ft.workingColorSpace,Je=he.isMeshStandardMaterial||he.isMeshLambertMaterial&&!he.envMap||he.isMeshPhongMaterial&&!he.envMap,et=Le.get(he.envMap||Ze,Je),ut=he.vertexColors===!0&&!!xe.attributes.color&&xe.attributes.color.itemSize===4,mt=!!xe.attributes.tangent&&(!!he.normalMap||he.anisotropy>0),Ke=!!xe.morphAttributes.position,Rt=!!xe.morphAttributes.normal,Tt=!!xe.morphAttributes.color;let nn=da;he.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(nn=V.toneMapping);const Zt=xe.morphAttributes.position||xe.morphAttributes.normal||xe.morphAttributes.color,Mn=Zt!==void 0?Zt.length:0,ke=fe.get(he),hn=U.state.lights;if(nt===!0&&(st===!0||A!==O)){const Ut=A===O&&he.id===oe;We.setState(he,A,Ut)}let Bt=!1;he.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==hn.state.version||ke.outputColorSpace!==Be||pe.isBatchedMesh&&ke.batching===!1||!pe.isBatchedMesh&&ke.batching===!0||pe.isBatchedMesh&&ke.batchingColor===!0&&pe._colorsTexture===null||pe.isBatchedMesh&&ke.batchingColor===!1&&pe._colorsTexture!==null||pe.isInstancedMesh&&ke.instancing===!1||!pe.isInstancedMesh&&ke.instancing===!0||pe.isSkinnedMesh&&ke.skinning===!1||!pe.isSkinnedMesh&&ke.skinning===!0||pe.isInstancedMesh&&ke.instancingColor===!0&&pe.instanceColor===null||pe.isInstancedMesh&&ke.instancingColor===!1&&pe.instanceColor!==null||pe.isInstancedMesh&&ke.instancingMorph===!0&&pe.morphTexture===null||pe.isInstancedMesh&&ke.instancingMorph===!1&&pe.morphTexture!==null||ke.envMap!==et||he.fog===!0&&ke.fog!==Ve||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==We.numPlanes||ke.numIntersection!==We.numIntersection)||ke.vertexAlphas!==ut||ke.vertexTangents!==mt||ke.morphTargets!==Ke||ke.morphNormals!==Rt||ke.morphColors!==Tt||ke.toneMapping!==nn||ke.morphTargetsCount!==Mn||!!ke.lightProbeGrid!=U.state.lightProbeGridArray.length>0)&&(Bt=!0):(Bt=!0,ke.__version=he.version);let Xn=ke.currentProgram;Bt===!0&&(Xn=As(he,q,pe),Z&&he.isNodeMaterial&&Z.onUpdateProgram(he,Xn,ke));let ri=!1,Yi=!1,At=!1;const jt=Xn.getUniforms(),rn=ke.uniforms;if(E.useProgram(Xn.program)&&(ri=!0,Yi=!0,At=!0),he.id!==oe&&(oe=he.id,Yi=!0),ke.needsLights){const Ut=To(U.state.lightProbeGridArray,pe);ke.lightProbeGrid!==Ut&&(ke.lightProbeGrid=Ut,Yi=!0)}if(ri||O!==A){E.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),jt.setValue(Q,"projectionMatrix",A.projectionMatrix),jt.setValue(Q,"viewMatrix",A.matrixWorldInverse);const pn=jt.map.cameraPosition;pn!==void 0&&pn.setValue(Q,$e.setFromMatrixPosition(A.matrixWorld)),B.logarithmicDepthBuffer&&jt.setValue(Q,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(he.isMeshPhongMaterial||he.isMeshToonMaterial||he.isMeshLambertMaterial||he.isMeshBasicMaterial||he.isMeshStandardMaterial||he.isShaderMaterial)&&jt.setValue(Q,"isOrthographic",A.isOrthographicCamera===!0),O!==A&&(O=A,Yi=!0,At=!0)}if(ke.needsLights&&(hn.state.sunShadowMap.length>0&&jt.setValue(Q,"sunShadowMap",hn.state.sunShadowMap,Se),hn.state.directionalShadowMap.length>0&&jt.setValue(Q,"directionalShadowMap",hn.state.directionalShadowMap,Se),hn.state.spotShadowMap.length>0&&jt.setValue(Q,"spotShadowMap",hn.state.spotShadowMap,Se),hn.state.pointShadowMap.length>0&&jt.setValue(Q,"pointShadowMap",hn.state.pointShadowMap,Se)),pe.isSkinnedMesh){jt.setOptional(Q,pe,"bindMatrix"),jt.setOptional(Q,pe,"bindMatrixInverse");const Ut=pe.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),jt.setValue(Q,"boneTexture",Ut.boneTexture,Se))}pe.isBatchedMesh&&(jt.setOptional(Q,pe,"batchingTexture"),jt.setValue(Q,"batchingTexture",pe._matricesTexture,Se),jt.setOptional(Q,pe,"batchingIdTexture"),jt.setValue(Q,"batchingIdTexture",pe._indirectTexture,Se),jt.setOptional(Q,pe,"batchingColorTexture"),pe._colorsTexture!==null&&jt.setValue(Q,"batchingColorTexture",pe._colorsTexture,Se));const oi=xe.morphAttributes;if((oi.position!==void 0||oi.normal!==void 0||oi.color!==void 0)&&J.update(pe,xe,Xn),(Yi||ke.receiveShadow!==pe.receiveShadow)&&(ke.receiveShadow=pe.receiveShadow,jt.setValue(Q,"receiveShadow",pe.receiveShadow)),(he.isMeshStandardMaterial||he.isMeshLambertMaterial||he.isMeshPhongMaterial)&&he.envMap===null&&q.environment!==null&&(rn.envMapIntensity.value=q.environmentIntensity),rn.dfgLUT!==void 0&&(rn.dfgLUT.value=p3()),Yi){if(jt.setValue(Q,"toneMappingExposure",V.toneMappingExposure),ke.needsLights&&Hl(rn,At),Ve&&he.fog===!0&&at.refreshFogUniforms(rn,Ve),at.refreshMaterialUniforms(rn,he,te,G,U.state.transmissionRenderTarget[A.id]),ke.needsLights&&ke.lightProbeGrid){const Ut=ke.lightProbeGrid;rn.probesSH.value=Ut.texture,rn.probesMin.value.copy(Ut.boundingBox.min),rn.probesMax.value.copy(Ut.boundingBox.max),rn.probesResolution.value.copy(Ut.resolution)}Pu.upload(Q,Mo(ke),rn,Se)}if(he.isShaderMaterial&&he.uniformsNeedUpdate===!0&&(Pu.upload(Q,Mo(ke),rn,Se),he.uniformsNeedUpdate=!1),he.isSpriteMaterial&&jt.setValue(Q,"center",pe.center),jt.setValue(Q,"modelViewMatrix",pe.modelViewMatrix),jt.setValue(Q,"normalMatrix",pe.normalMatrix),jt.setValue(Q,"modelMatrix",pe.matrixWorld),he.uniformsGroups!==void 0){const Ut=he.uniformsGroups;for(let pn=0,_a=Ut.length;pn<_a;pn++){const Vl=Ut[pn];Ne.update(Vl,Xn),Ne.bind(Vl,Xn)}}return Xn}function Hl(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.sunLights.needsUpdate=q,A.sunLightShadows.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function Gl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return ce},this.setRenderTargetTextures=function(A,q,xe){const he=fe.get(A);he.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,he.__autoAllocateDepthBuffer===!1&&(he.__useRenderToTexture=!1),fe.get(A.texture).__webglTexture=q,fe.get(A.depthTexture).__webglTexture=he.__autoAllocateDepthBuffer?void 0:xe,he.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,q){const xe=fe.get(A);xe.__webglFramebuffer=q,xe.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(A,q=0,xe=0){ce=A,W=q,j=xe;let he=null,pe=!1,Ve=!1;if(A){const Be=fe.get(A);if(Be.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(Q.FRAMEBUFFER,Be.__webglFramebuffer),L.copy(A.viewport),Ce.copy(A.scissor),ve=A.scissorTest,E.viewport(L),E.scissor(Ce),E.setScissorTest(ve),oe=-1;return}else if(Be.__webglFramebuffer===void 0)Se.setupRenderTarget(A);else if(Be.__hasExternalTextures)Se.rebindTextures(A,fe.get(A.texture).__webglTexture,fe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ut=A.depthTexture;if(Be.__boundDepthTexture!==ut){if(ut!==null&&fe.has(ut)&&(A.width!==ut.image.width||A.height!==ut.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Se.setupDepthRenderbuffer(A)}}const Je=A.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Ve=!0);const et=fe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(et[q])?he=et[q][xe]:he=et[q],pe=!0):A.samples>0&&Se.useMultisampledRTT(A)===!1?he=fe.get(A).__webglMultisampledFramebuffer:Array.isArray(et)?he=et[xe]:he=et,L.copy(A.viewport),Ce.copy(A.scissor),ve=A.scissorTest}else L.copy(le).multiplyScalar(te).floor(),Ce.copy(Ae).multiplyScalar(te).floor(),ve=De;if(xe!==0&&(he=se),E.bindFramebuffer(Q.FRAMEBUFFER,he)&&E.drawBuffers(A,he),E.viewport(L),E.scissor(Ce),E.setScissorTest(ve),pe){const Be=fe.get(A.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_CUBE_MAP_POSITIVE_X+q,Be.__webglTexture,xe)}else if(Ve){const Be=q;for(let Je=0;Je<A.textures.length;Je++){const et=fe.get(A.textures[Je]);Q.framebufferTextureLayer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0+Je,et.__webglTexture,xe,Be)}}else if(A!==null&&xe!==0){const Be=fe.get(A.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,Be.__webglTexture,xe)}oe=-1};function Si(A){const q=fe.get(A);return(q.__readFormat!==A.format||q.__readType!==A.type)&&(q.__readFormat=A.format,q.__readType=A.type,q.__formatReadable=B.textureFormatReadable(A.format),q.__typeReadable=B.textureTypeReadable(A.type)),q}this.readRenderTargetPixels=function(A,q,xe,he,pe,Ve,Ze,Be=0){if(!(A&&A.isWebGLRenderTarget)){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Je=fe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ze!==void 0&&(Je=Je[Ze]),Je){E.bindFramebuffer(Q.FRAMEBUFFER,Je);try{const et=A.textures[Be],ut=et.format,mt=et.type;A.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+Be);const Ke=Si(et);if(Ke.__formatReadable===!1){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ke.__typeReadable===!1){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-he&&xe>=0&&xe<=A.height-pe&&Q.readPixels(q,xe,he,pe,Ie.convert(ut),Ie.convert(mt),Ve)}finally{const et=ce!==null?fe.get(ce).__webglFramebuffer:null;E.bindFramebuffer(Q.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(A,q,xe,he,pe,Ve,Ze,Be=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Je=fe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ze!==void 0&&(Je=Je[Ze]),Je)if(q>=0&&q<=A.width-he&&xe>=0&&xe<=A.height-pe){E.bindFramebuffer(Q.FRAMEBUFFER,Je);const et=A.textures[Be],ut=et.format,mt=et.type;A.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+Be);const Ke=Si(et);if(Ke.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ke.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Rt=Q.createBuffer();Q.bindBuffer(Q.PIXEL_PACK_BUFFER,Rt),Q.bufferData(Q.PIXEL_PACK_BUFFER,Ve.byteLength,Q.STREAM_READ),Q.readPixels(q,xe,he,pe,Ie.convert(ut),Ie.convert(mt),0),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,null);const Tt=ce!==null?fe.get(ce).__webglFramebuffer:null;E.bindFramebuffer(Q.FRAMEBUFFER,Tt);const nn=Q.fenceSync(Q.SYNC_GPU_COMMANDS_COMPLETE,0);return Q.flush(),await p1(Q,nn,4),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,Rt),Q.getBufferSubData(Q.PIXEL_PACK_BUFFER,0,Ve),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,null),Q.deleteBuffer(Rt),Q.deleteSync(nn),Ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,q=null,xe=0){const he=Math.pow(2,-xe),pe=Math.floor(A.image.width*he),Ve=Math.floor(A.image.height*he),Ze=q!==null?q.x:0,Be=q!==null?q.y:0;Se.setTexture2D(A,0),Q.copyTexSubImage2D(Q.TEXTURE_2D,xe,0,0,Ze,Be,pe,Ve),E.unbindTexture()},this.copyTextureToTexture=function(A,q,xe=null,he=null,pe=0,Ve=0){let Ze,Be,Je,et,ut,mt,Ke,Rt,Tt;const nn=A.isCompressedTexture?A.mipmaps[Ve]:A.image;if(xe!==null)Ze=xe.max.x-xe.min.x,Be=xe.max.y-xe.min.y,Je=xe.isBox3?xe.max.z-xe.min.z:1,et=xe.min.x,ut=xe.min.y,mt=xe.isBox3?xe.min.z:0;else{const rn=Math.pow(2,-pe);Ze=Math.floor(nn.width*rn),Be=Math.floor(nn.height*rn),A.isDataArrayTexture?Je=nn.depth:A.isData3DTexture?Je=Math.floor(nn.depth*rn):Je=1,et=0,ut=0,mt=0}he!==null?(Ke=he.x,Rt=he.y,Tt=he.z):(Ke=0,Rt=0,Tt=0);const Zt=Ie.convert(q.format),Mn=Ie.convert(q.type);let ke;q.isData3DTexture?(Se.setTexture3D(q,0),ke=Q.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(Se.setTexture2DArray(q,0),ke=Q.TEXTURE_2D_ARRAY):(Se.setTexture2D(q,0),ke=Q.TEXTURE_2D),E.activeTexture(Q.TEXTURE0),E.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,q.flipY),E.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),E.pixelStorei(Q.UNPACK_ALIGNMENT,q.unpackAlignment);const hn=E.getParameter(Q.UNPACK_ROW_LENGTH),Bt=E.getParameter(Q.UNPACK_IMAGE_HEIGHT),Xn=E.getParameter(Q.UNPACK_SKIP_PIXELS),ri=E.getParameter(Q.UNPACK_SKIP_ROWS),Yi=E.getParameter(Q.UNPACK_SKIP_IMAGES);E.pixelStorei(Q.UNPACK_ROW_LENGTH,nn.width),E.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,nn.height),E.pixelStorei(Q.UNPACK_SKIP_PIXELS,et),E.pixelStorei(Q.UNPACK_SKIP_ROWS,ut),E.pixelStorei(Q.UNPACK_SKIP_IMAGES,mt);const At=A.isDataArrayTexture||A.isData3DTexture,jt=q.isDataArrayTexture||q.isData3DTexture;if(A.isDepthTexture){const rn=fe.get(A),oi=fe.get(q),Ut=fe.get(rn.__renderTarget),pn=fe.get(oi.__renderTarget);E.bindFramebuffer(Q.READ_FRAMEBUFFER,Ut.__webglFramebuffer),E.bindFramebuffer(Q.DRAW_FRAMEBUFFER,pn.__webglFramebuffer);for(let _a=0;_a<Je;_a++)At&&(Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,fe.get(A).__webglTexture,pe,mt+_a),Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,fe.get(q).__webglTexture,Ve,Tt+_a)),Q.blitFramebuffer(et,ut,Ze,Be,Ke,Rt,Ze,Be,Q.DEPTH_BUFFER_BIT,Q.NEAREST);E.bindFramebuffer(Q.READ_FRAMEBUFFER,null),E.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else if(pe!==0||A.isRenderTargetTexture||fe.has(A)){const rn=fe.get(A),oi=fe.get(q);E.bindFramebuffer(Q.READ_FRAMEBUFFER,K),E.bindFramebuffer(Q.DRAW_FRAMEBUFFER,ne);for(let Ut=0;Ut<Je;Ut++)At?Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,rn.__webglTexture,pe,mt+Ut):Q.framebufferTexture2D(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,rn.__webglTexture,pe),jt?Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,oi.__webglTexture,Ve,Tt+Ut):Q.framebufferTexture2D(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,oi.__webglTexture,Ve),pe!==0?Q.blitFramebuffer(et,ut,Ze,Be,Ke,Rt,Ze,Be,Q.COLOR_BUFFER_BIT,Q.NEAREST):jt?Q.copyTexSubImage3D(ke,Ve,Ke,Rt,Tt+Ut,et,ut,Ze,Be):Q.copyTexSubImage2D(ke,Ve,Ke,Rt,et,ut,Ze,Be);E.bindFramebuffer(Q.READ_FRAMEBUFFER,null),E.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else jt?A.isDataTexture||A.isData3DTexture?Q.texSubImage3D(ke,Ve,Ke,Rt,Tt,Ze,Be,Je,Zt,Mn,nn.data):q.isCompressedArrayTexture?Q.compressedTexSubImage3D(ke,Ve,Ke,Rt,Tt,Ze,Be,Je,Zt,nn.data):Q.texSubImage3D(ke,Ve,Ke,Rt,Tt,Ze,Be,Je,Zt,Mn,nn):A.isDataTexture?Q.texSubImage2D(Q.TEXTURE_2D,Ve,Ke,Rt,Ze,Be,Zt,Mn,nn.data):A.isCompressedTexture?Q.compressedTexSubImage2D(Q.TEXTURE_2D,Ve,Ke,Rt,nn.width,nn.height,Zt,nn.data):Q.texSubImage2D(Q.TEXTURE_2D,Ve,Ke,Rt,Ze,Be,Zt,Mn,nn);E.pixelStorei(Q.UNPACK_ROW_LENGTH,hn),E.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,Bt),E.pixelStorei(Q.UNPACK_SKIP_PIXELS,Xn),E.pixelStorei(Q.UNPACK_SKIP_ROWS,ri),E.pixelStorei(Q.UNPACK_SKIP_IMAGES,Yi),Ve===0&&q.generateMipmaps&&Q.generateMipmap(ke),E.unbindTexture()},this.initRenderTarget=function(A){fe.get(A).__webglFramebuffer===void 0&&Se.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Se.setTextureCube(A,0):A.isData3DTexture?Se.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Se.setTexture2DArray(A,0):Se.setTexture2D(A,0),E.unbindTexture()},this.resetState=function(){W=0,j=0,ce=null,E.reset(),qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ft._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ft._getUnpackColorSpace()}}class g3{constructor(){this.ctx=null,this.musicInterval=null,this.isMusicPlaying=!1,this.musicVolume=.7,this.sfxVolume=.8,this.masterGain=null,this.sfxGain=null,this.musicGain=null,this.tempo=125,this.step=0,this.intensity=1}initContext(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=1,this.masterGain.connect(this.ctx.destination),this.musicGain=this.ctx.createGain(),this.musicGain.gain.value=this.musicVolume,this.musicGain.connect(this.masterGain),this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.value=this.sfxVolume,this.sfxGain.connect(this.masterGain)}this.ctx.state==="suspended"&&this.ctx.resume()}setVolumes(t,i){this.musicVolume=Math.max(0,Math.min(1,t)),this.sfxVolume=Math.max(0,Math.min(1,i)),this.musicGain&&(this.musicGain.gain.value=this.musicVolume),this.sfxGain&&(this.sfxGain.gain.value=this.sfxVolume)}setIntensity(t){this.intensity=Math.max(.8,Math.min(2.5,t))}startMusic(){if(this.isMusicPlaying)return;this.initContext(),this.isMusicPlaying=!0,this.step=0;const t=60/this.tempo/4*1e3;this.musicInterval=window.setInterval(()=>{this.playMusicStep()},t)}stopMusic(){this.isMusicPlaying=!1,this.musicInterval!==null&&(clearInterval(this.musicInterval),this.musicInterval=null)}playMusicStep(){if(!this.ctx||!this.musicGain||this.musicVolume<=.01)return;const t=this.ctx.currentTime,i=this.step%16,s=Math.floor(this.step/16%4);(i===0||i===6||i===10)&&this.synthTribalKick(t),(i===4||i===12)&&this.synthSnare(t),(i===2||i===7||i===11||i===14)&&this.synthBongo(t,i%2===0?320:440),this.synthShaker(t,i%2===0?.08:.03);const l=[65.4,77.8,87.3,98,116.5,130.8],u=[0,0,1,0,2,2,3,2,0,0,4,3,2,1,3,4];if(i%2===0){const d=u[i],h=l[d]*(this.intensity>1.8,1);this.synthChiptuneBass(t,h,.14)}if(i%2===1||this.intensity>1.5){const d=[261.6,311.1,349.2,392,466.2,523.3,622.3,698.5],h=(s*2+i*3)%d.length,p=d[h];this.synthChiptuneLead(t,p,.09,this.intensity)}this.step++}synthTribalKick(t){if(!this.ctx||!this.musicGain)return;const i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(140,t),i.frequency.exponentialRampToValueAtTime(32,t+.14),s.gain.setValueAtTime(.5*this.musicVolume,t),s.gain.exponentialRampToValueAtTime(.001,t+.18),i.connect(s),s.connect(this.musicGain),i.start(t),i.stop(t+.2)}synthSnare(t){if(!this.ctx||!this.musicGain)return;const i=this.ctx.sampleRate*.08,s=this.ctx.createBuffer(1,i,this.ctx.sampleRate),l=s.getChannelData(0);for(let p=0;p<i;p++)l[p]=Math.random()*2-1;const u=this.ctx.createBufferSource();u.buffer=s;const d=this.ctx.createBiquadFilter();d.type="highpass",d.frequency.setValueAtTime(1200,t);const h=this.ctx.createGain();h.gain.setValueAtTime(.3*this.musicVolume,t),h.gain.exponentialRampToValueAtTime(.001,t+.08),u.connect(d),d.connect(h),h.connect(this.musicGain),u.start(t),u.stop(t+.09)}synthBongo(t,i){if(!this.ctx||!this.musicGain)return;const s=this.ctx.createOscillator(),l=this.ctx.createGain();s.type="triangle",s.frequency.setValueAtTime(i*1.2,t),s.frequency.exponentialRampToValueAtTime(i*.6,t+.08),l.gain.setValueAtTime(.3*this.musicVolume,t),l.gain.exponentialRampToValueAtTime(.001,t+.09),s.connect(l),l.connect(this.musicGain),s.start(t),s.stop(t+.1)}synthShaker(t,i){if(!this.ctx||!this.musicGain)return;const s=Math.floor(this.ctx.sampleRate*.03),l=this.ctx.createBuffer(1,s,this.ctx.sampleRate),u=l.getChannelData(0);for(let m=0;m<s;m++)u[m]=(Math.random()*2-1)*.5;const d=this.ctx.createBufferSource();d.buffer=l;const h=this.ctx.createBiquadFilter();h.type="bandpass",h.frequency.setValueAtTime(6500,t);const p=this.ctx.createGain();p.gain.setValueAtTime(i*this.musicVolume,t),p.gain.exponentialRampToValueAtTime(1e-4,t+.03),d.connect(h),h.connect(p),p.connect(this.musicGain),d.start(t),d.stop(t+.035)}synthChiptuneBass(t,i,s){if(!this.ctx||!this.musicGain)return;const l=this.ctx.createOscillator(),u=this.ctx.createGain();l.type="triangle",l.frequency.setValueAtTime(i,t),u.gain.setValueAtTime(.28*this.musicVolume,t),u.gain.exponentialRampToValueAtTime(.01,t+s),l.connect(u),u.connect(this.musicGain),l.start(t),l.stop(t+s+.01)}synthChiptuneLead(t,i,s,l){if(!this.ctx||!this.musicGain)return;const u=this.ctx.createOscillator(),d=this.ctx.createGain();u.type="square",u.frequency.setValueAtTime(i,t);const h=(.12+(l-1)*.06)*this.musicVolume;d.gain.setValueAtTime(h,t),d.gain.exponentialRampToValueAtTime(.001,t+s),u.connect(d),d.connect(this.musicGain),u.start(t),u.stop(t+s)}playJump(){if(this.initContext(),!this.ctx||!this.sfxGain||this.sfxVolume<=.01)return;const t=this.ctx.currentTime,i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="square",i.frequency.setValueAtTime(160,t),i.frequency.exponentialRampToValueAtTime(420,t+.16),s.gain.setValueAtTime(.25*this.sfxVolume,t),s.gain.linearRampToValueAtTime(.001,t+.17),i.connect(s),s.connect(this.sfxGain),i.start(t),i.stop(t+.18)}playBarrelRoll(){if(this.initContext(),!this.ctx||!this.sfxGain||this.sfxVolume<=.01)return;const t=this.ctx.currentTime,i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="sawtooth",i.frequency.setValueAtTime(45+Math.random()*20,t),i.frequency.linearRampToValueAtTime(35,t+.12),s.gain.setValueAtTime(.12*this.sfxVolume,t),s.gain.exponentialRampToValueAtTime(.001,t+.14),i.connect(s),s.connect(this.sfxGain),i.start(t),i.stop(t+.15)}playHammerSmash(){if(this.initContext(),!this.ctx||!this.sfxGain||this.sfxVolume<=.01)return;const t=this.ctx.currentTime,i=this.ctx.sampleRate*.25,s=this.ctx.createBuffer(1,i,this.ctx.sampleRate),l=s.getChannelData(0);for(let p=0;p<i;p++)l[p]=(Math.random()*2-1)*Math.exp(-p/(i*.3));const u=this.ctx.createBufferSource();u.buffer=s;const d=this.ctx.createOscillator();d.type="square",d.frequency.setValueAtTime(300,t),d.frequency.exponentialRampToValueAtTime(40,t+.2);const h=this.ctx.createGain();h.gain.setValueAtTime(.4*this.sfxVolume,t),h.gain.exponentialRampToValueAtTime(.001,t+.25),u.connect(h),d.connect(h),h.connect(this.sfxGain),u.start(t),d.start(t),u.stop(t+.26),d.stop(t+.26)}playCoin(){if(this.initContext(),!this.ctx||!this.sfxGain||this.sfxVolume<=.01)return;const t=this.ctx.currentTime;[987.77,1318.51].forEach((s,l)=>{if(!this.ctx||!this.sfxGain)return;const u=this.ctx.createOscillator(),d=this.ctx.createGain();u.type="square",u.frequency.setValueAtTime(s,t+l*.08),d.gain.setValueAtTime(0,t+l*.08),d.gain.linearRampToValueAtTime(.25*this.sfxVolume,t+l*.08+.01),d.gain.exponentialRampToValueAtTime(.001,t+l*.08+.25),u.connect(d),d.connect(this.sfxGain),u.start(t+l*.08),u.stop(t+l*.08+.26)})}playLadderClimb(){if(this.initContext(),!this.ctx||!this.sfxGain||this.sfxVolume<=.01)return;const t=this.ctx.currentTime,i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="square",i.frequency.setValueAtTime(220+(Math.random()>.5?40:-30),t),s.gain.setValueAtTime(.12*this.sfxVolume,t),s.gain.exponentialRampToValueAtTime(.001,t+.06),i.connect(s),s.connect(this.sfxGain),i.start(t),i.stop(t+.07)}playApeRoar(){if(this.initContext(),!this.ctx||!this.sfxGain||this.sfxVolume<=.01)return;const t=this.ctx.currentTime,i=this.ctx.createOscillator(),s=this.ctx.createOscillator(),l=this.ctx.createBiquadFilter(),u=this.ctx.createGain();i.type="sawtooth",i.frequency.setValueAtTime(95,t),i.frequency.exponentialRampToValueAtTime(50,t+.5),s.type="sawtooth",s.frequency.setValueAtTime(102,t),s.frequency.exponentialRampToValueAtTime(53,t+.5),l.type="lowpass",l.frequency.setValueAtTime(600,t),l.frequency.linearRampToValueAtTime(250,t+.5),u.gain.setValueAtTime(.35*this.sfxVolume,t),u.gain.exponentialRampToValueAtTime(.001,t+.55),i.connect(l),s.connect(l),l.connect(u),u.connect(this.sfxGain),i.start(t),s.start(t),i.stop(t+.56),s.stop(t+.56)}playHit(){if(this.initContext(),!this.ctx||!this.sfxGain||this.sfxVolume<=.01)return;const t=this.ctx.currentTime,i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="sawtooth",i.frequency.setValueAtTime(220,t),i.frequency.exponentialRampToValueAtTime(40,t+.35),s.gain.setValueAtTime(.4*this.sfxVolume,t),s.gain.linearRampToValueAtTime(.001,t+.4),i.connect(s),s.connect(this.sfxGain),i.start(t),i.stop(t+.42)}playVictory(){if(this.initContext(),!this.ctx||!this.sfxGain||this.sfxVolume<=.01)return;const t=this.ctx.currentTime;[261.63,329.63,392,523.25,659.25,783.99].forEach((s,l)=>{if(!this.ctx||!this.sfxGain)return;const u=this.ctx.createOscillator(),d=this.ctx.createGain();u.type="square",u.frequency.setValueAtTime(s,t+l*.11),d.gain.setValueAtTime(.28*this.sfxVolume,t+l*.11),d.gain.exponentialRampToValueAtTime(.001,t+l*.11+.35),u.connect(d),d.connect(this.sfxGain),u.start(t+l*.11),u.stop(t+l*.11+.38)})}}const gt=new g3,x3=new Wt(1,1,1),v3=new Wt(.18,.18,.18),H_=new Map;function NS(o,t=.6,i=.1,s,l=.4){const u=typeof o=="string"?o:o.toString(16),d=s!==void 0?typeof s=="string"?s:s.toString(16):"none",h=`${u}_${t}_${i}_${d}_${l}`;let p=H_.get(h);if(!p){const m={color:new Lt(o),roughness:t,metalness:i};s!==void 0&&(m.emissive=new Lt(s),m.emissiveIntensity=l),p=new xi(m),H_.set(h,p)}return p}function St(o,t,i,s,l=.6,u=.1,d){const h=NS(s,l,u,d),p=new Dt(x3,h);return p.scale.set(o,t,i),p.castShadow=!0,p.receiveShadow=!0,p}function _3(){const o=new kn,t=St(2.2,2,1.4,4006676);t.position.y=1.6,o.add(t);const i=St(1.6,1.3,.2,8736014);i.position.set(0,1.65,.72),o.add(i);const s=St(1.5,1.3,1.3,4006676);s.position.set(0,3.1,.1),o.add(s);const l=St(1.1,.6,.5,8736014);l.position.set(0,2.85,.78),o.add(l);const u=St(.25,.25,.1,16436245);u.position.set(-.35,3.25,.72);const d=St(.25,.25,.1,16436245);d.position.set(.35,3.25,.72),o.add(u,d);const h=St(1.3,.25,.25,2232843);h.position.set(0,3.45,.75),o.add(h);const p=new kn;p.name="armL",p.position.set(-1.4,2.4,0);const m=St(.7,1.5,.7,4006676);m.position.y=-.6,p.add(m);const g=St(.85,.85,.85,2232843);g.position.y=-1.5,p.add(g),o.add(p);const x=new kn;x.name="armR",x.position.set(1.4,2.4,0);const v=St(.7,1.5,.7,4006676);v.position.y=-.6,x.add(v);const M=St(.85,.85,.85,2232843);M.position.y=-1.5,x.add(M),o.add(x);const w=St(.8,1,.9,2232843);w.position.set(-.7,.5,0);const D=St(.8,1,.9,2232843);return D.position.set(.7,.5,0),o.add(w,D),o}function G_(o="wood"){const t=new kn,i=.55,s=.9;let l=10576391,u=3621201;o==="fire"?(l=2450411,u=3718648):o==="gold"&&(l=16096779,u=16707722);const d=St(i*2,s,i*1.8,l);t.add(d);const h=St(i*1.8,s,i*2,l);t.add(h);const p=St(i*2.05,.14,i*2.05,u);p.position.y=s*.35;const m=St(i*2.05,.14,i*2.05,u);if(m.position.y=-s*.35,t.add(p,m),o==="fire"){const g=St(.3,.3,.3,6333946);t.add(g)}return t}function S3(o){const t=new kn,i=o.colorTheme||"#dc2626",s=16502760,l=St(.24,.24,.7,i);l.position.set(.42,-.36,-.65),l.rotation.x=Al.degToRad(-15),l.rotation.y=Al.degToRad(10),t.add(l);const u=St(.22,.22,.26,s);u.position.set(.44,-.32,-1.02),t.add(u);const d=new kn;d.name="hammerPivot",d.position.set(.44,-.28,-1.05);let h=7877903,p=6583435;o.hammerId==="hammer_steel"?(h=3359061,p=9741240):o.hammerId==="hammer_banana"?(h=8736014,p=16436245):o.hammerId==="hammer_laser"&&(h=165063,p=3718648);const m=St(.08,.8,.08,h);m.position.y=.35,d.add(m);const g=St(.4,.28,.32,p);g.position.y=.72,d.add(g),t.add(d);const x=St(.22,.22,.6,i);x.position.set(-.42,-.4,-.65),x.rotation.x=Al.degToRad(-12),x.rotation.y=Al.degToRad(-10),t.add(x);const v=St(.2,.2,.22,s);return v.position.set(-.43,-.36,-.96),t.add(v),t}function y3(o){const t=new kn,i=o.colorTheme||"#dc2626",s=St(.8,.9,.5,i);s.position.y=1,t.add(s);const l=St(.6,.6,.6,16502760);l.position.y=1.75,t.add(l);const u=St(.4,.12,.1,2565930);u.position.set(0,1.62,.32);const d=St(.08,.12,.05,1579035);d.position.set(-.14,1.82,.32);const h=St(.08,.12,.05,1579035);h.position.set(.14,1.82,.32),t.add(u,d,h);let p=14427686;o.hatId==="hat_miner"&&(p=15381256),o.hatId==="hat_bandana"&&(p=16007006),o.hatId==="hat_crown"&&(p=16498468);const m=St(.7,.2,.7,p);m.position.y=2.12;const g=St(.7,.08,.9,p);g.position.set(0,2.06,.12),t.add(m,g);const x=St(.3,.6,.35,1981066);x.position.set(-.24,.3,0);const v=St(.3,.6,.35,1981066);return v.position.set(.24,.3,0),t.add(x,v),t}function V_(){const o=new kn,t=St(.18,.5,.18,16436245,.4,.1,15381256);t.rotation.z=Al.degToRad(20);const i=St(.1,.15,.1,7421714,.8,0);return i.position.set(.1,.3,0),o.add(t,i),o}function b3(o="hammer_classic"){const t=new kn,i=St(.8,.6,.8,4674921);i.position.y=.3,t.add(i);const s=St(.5,.35,.4,16436245,.3,.2,16096779);s.position.set(0,.9,0);const l=St(.1,.7,.1,7877903);return l.position.set(0,.55,0),t.add(s,l),t}function M3(o=5){const t=new kn,i=new fm({color:16707722,transparent:!0,opacity:.14,side:ca,blending:sp,depthWrite:!1});for(let s=0;s<o;s++){const l=new hm(.3,2.8,18,6,1,!0),u=new Dt(l,i);u.position.set((Math.random()-.5)*26,14,(Math.random()-.5)*8),u.rotation.z=(Math.random()-.5)*.4,u.rotation.x=(Math.random()-.5)*.3,t.add(u)}return t}function E3(o=140){const t=new Wt(.15,.15,.05),i=new xi({color:4906624,roughness:.8}),s=new tE(t,i,o),l=new Tn,u=[];for(let h=0;h<o;h++){const p=new de((Math.random()-.5)*32,Math.random()*26,(Math.random()-.5)*14),m=new de((Math.random()-.5)*.8,-.5-Math.random()*.8,(Math.random()-.5)*.5),g=new Va(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),x=new de(Math.random()*2,Math.random()*2,Math.random()*2);u.push({pos:p,vel:m,rot:g,rotSpeed:x}),l.position.copy(p),l.rotation.copy(g),l.updateMatrix(),s.setMatrixAt(h,l.matrix)}return s.instanceMatrix.needsUpdate=!0,{mesh:s,update:h=>{for(let p=0;p<o;p++){const m=u[p];m.pos.addScaledVector(m.vel,h),m.rot.x+=m.rotSpeed.x*h,m.rot.y+=m.rotSpeed.y*h,m.rot.z+=m.rotSpeed.z*h,m.pos.y<-1&&(m.pos.y=25,m.pos.x=(Math.random()-.5)*30),l.position.copy(m.pos),l.rotation.copy(m.rot),l.updateMatrix(),s.setMatrixAt(p,l.matrix)}s.instanceMatrix.needsUpdate=!0}}}const Yp=[{id:1,name:"Nivel 1: Las Vigas Inclinadas",themeName:"Andamios de la Jungla",towerFloors:5,floorHeight:4.2,width:26,depth:3.4,apeFloor:4,themeColors:{girder:14235706,girderTop:15680580,ladder:3718648,foliage:2278750,ambient:1976635,sky:988970}},{id:2,name:"Nivel 2: Cintas y Elevadores",themeName:"Fábrica Mecánica en el Volcán",towerFloors:5,floorHeight:4.2,width:26,depth:3.2,apeFloor:4,hasConveyors:!0,themeColors:{girder:165063,girderTop:3718648,ladder:16096779,foliage:1096065,ambient:1579035,sky:1841431}},{id:3,name:"Nivel 3: Remaches de Acero",themeName:"Estructura Colgante Voxel",towerFloors:5,floorHeight:4.2,width:28,depth:3,apeFloor:4,hasRivets:!0,themeColors:{girder:9647082,girderTop:11032055,ladder:15381256,foliage:4906624,ambient:3018853,sky:1510190}},{id:4,name:"Nivel 4: La Cumbre Salvaje",themeName:"Templo del Simio Titán",towerFloors:6,floorHeight:4.2,width:30,depth:3.2,apeFloor:5,themeColors:{girder:11817737,girderTop:16096779,ladder:1096065,foliage:8702998,ambient:4528643,sky:2035715}}];class T3{constructor(t,i,s,l,u){if(this.animFrameId=null,this.lastTime=0,this.isCoop=!1,this.isPaused=!1,this.isGameOver=!1,this.isVictory=!1,this.filterMode="8bit",this.resolutionMode="8bit_retro",this.bufferWidth=320,this.bufferHeight=240,this.p2=null,this.apeThrowTimer=0,this.apeArmSwing=0,this.barrels=[],this.barrelIdCounter=0,this.collectibles=[],this.debrisParticles=[],this.floorsData=[],this.laddersData=[],this.goalPos=new de(0,0,0),this.handleResize=()=>{this.updateRendererSize()},this.container=t,this.difficulty=s,this.isCoop=l,this.currentLevelConfig=Yp.find(h=>h.id===i)||Yp[0],this.filterMode=u.settings.filter8Bit||"8bit",this.resolutionMode=u.settings.renderResolution||"8bit_retro",this.scene=new j1,this.scene.background=new Lt(657936),this.scene.fog=new um(657936,.012),this.renderer=new m3({antialias:!1,powerPreference:"high-performance",precision:"mediump",stencil:!1}),this.updateRendererSize(),this.renderer.shadowMap.enabled=this.resolutionMode==="high",this.renderer.shadowMap.type=UM,t.appendChild(this.renderer.domElement),this.setupLighting(),u.settings.volumetricRays){const h=M3(6);this.scene.add(h)}u.settings.foliageParticles&&(this.foliageSystem=E3(120),this.scene.add(this.foliageSystem.mesh)),this.buildLevelArchitecture();const d=this.getStartingLives();this.p1=this.createPlayer("p1",u.customizationP1,d,new de(-10,1.2,0)),this.isCoop&&(this.p2=this.createPlayer("p2",u.customizationP2,d,new de(-7,1.2,0)),this.scene.add(this.p1.avatarMesh),this.scene.add(this.p2.avatarMesh)),window.addEventListener("resize",this.handleResize),gt.startMusic(),gt.playApeRoar()}updateRendererSize(){if(!this.container||!this.renderer)return;const t=this.container.clientWidth||window.innerWidth,i=this.container.clientHeight||window.innerHeight;let s=t,l=i,u=1;if(this.resolutionMode==="8bit_retro"){const d=Math.min(320,Math.max(220,Math.floor(i*.42))),h=t/i;l=d,s=Math.floor(l*h),u=1,this.renderer.domElement.style.imageRendering="pixelated"}else if(this.resolutionMode==="arcade"){const d=Math.min(540,Math.max(340,Math.floor(i*.65))),h=t/i;l=d,s=Math.floor(l*h),u=1,this.renderer.domElement.style.imageRendering="pixelated"}else u=Math.min(window.devicePixelRatio||1,1.25),s=t,l=i,this.renderer.domElement.style.imageRendering="auto";this.bufferWidth=s,this.bufferHeight=l,this.renderer.setPixelRatio(u),this.renderer.setSize(s,l,!1),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block"}setFilterAndResolution(t,i){this.filterMode=t,this.resolutionMode=i,this.renderer.shadowMap.enabled=this.resolutionMode==="high",this.updateRendererSize()}getStartingLives(){return this.difficulty==="facil"?5:this.difficulty==="normal"?3:this.difficulty==="dificil"?2:1}setupLighting(){const t=new mE(this.currentLevelConfig.themeColors.ambient,1.6);this.scene.add(t);const i=new m_(16776171,2.2);i.position.set(15,30,20),i.castShadow=this.resolutionMode==="high",i.shadow.mapSize.width=512,i.shadow.mapSize.height=512,i.shadow.camera.near=.5,i.shadow.camera.far=70,i.shadow.camera.left=-25,i.shadow.camera.right=25,i.shadow.camera.top=25,i.shadow.camera.bottom=-5,this.scene.add(i);const s=new m_(3718648,.9);s.position.set(-20,15,-15),this.scene.add(s)}buildEnclosedSector(t,i,s,l){const u=t+8,d=(s+1)*l+6,h=i+7,p=-i/2-1.4,m=i/2+3.4,g=-t/2-2.8,x=t/2+2.8,v=new xi({color:1120295,roughness:.75,metalness:.35}),M=new xi({color:2042167,roughness:.6,metalness:.4}),w=new xi({color:16436245,roughness:.4,emissive:8736014,emissiveIntensity:.25}),D=new xi({color:592139,roughness:.8}),y=new Dt(new Wt(u+6,d+4,1.2),v);y.position.set(0,d/2-1,p-.6),y.receiveShadow=!0,this.scene.add(y);for(let j=1;j<=s+1;j++){const ce=(j-.5)*l,oe=new Dt(new Wt(u+2,.45,.08),w);oe.position.set(0,ce,p+.02),this.scene.add(oe);for(let O=-u/2;O<u/2;O+=2.6){const L=new Dt(new Wt(1,.47,.1),D);L.position.set(O,ce,p+.04),this.scene.add(L)}}for(let j=-t/2;j<=t/2;j+=6.5){const ce=new Dt(new Wt(.5,d+2,.2),M);ce.position.set(j,d/2-1,p+.08),this.scene.add(ce)}const S=new xi({color:15357964,roughness:.4,metalness:.6}),z=new xi({color:165063,roughness:.4,metalness:.6}),k=new Dt(new Wt(u+2,.22,.22),S);k.position.set(0,d*.38,p+.12),this.scene.add(k);const C=new Dt(new Wt(u+2,.18,.18),z);C.position.set(0,d*.72,p+.12),this.scene.add(C);for(let j=1;j<=s;j+=2){const ce=St(.35,.45,.35,15680580,.2,.1,15680580);ce.position.set(-t/2+1,j*l+1.2,p+.15),this.scene.add(ce);const oe=St(.35,.45,.35,16096779,.2,.1,16096779);oe.position.set(t/2-1,j*l+1.2,p+.15),this.scene.add(oe)}const P=new Dt(new Wt(15,1.5,.2),D);P.position.set(0,d-2,p+.12),this.scene.add(P);const U=new Dt(new Wt(14.2,.95,.08),w);U.position.set(0,d-2,p+.22),this.scene.add(U);const F=new Dt(new Wt(1.2,d+4,h+4),v);F.position.set(g-.6,d/2-1,0),F.receiveShadow=!0,this.scene.add(F);const T=s*l,N=new Dt(new Wt(.6,5.5,i+1.6),M);N.position.set(g+.1,T+2.5,-.4),this.scene.add(N);const V=new Qh(15680580,2.2,14);V.position.set(g+1.6,T+4.2,-.4),this.scene.add(V);const X=new Dt(new Wt(1.2,d+4,h+4),v);X.position.set(x+.6,d/2-1,0),X.receiveShadow=!0,this.scene.add(X);const Z=new Qh(1096065,2.2,14);Z.position.set(x-1.6,T+4.2,0),this.scene.add(Z);const se=new Dt(new Wt(u+6,1.2,h+6),v);se.position.set(0,d,0),this.scene.add(se);for(let j=-i;j<=i+2;j+=3.5){const ce=new Dt(new Wt(u+2,.7,.35),M);ce.position.set(0,d-.7,j),this.scene.add(ce)}for(let j=-t/3;j<=t/3;j+=t/3){const ce=St(1.1,.45,1.1,3359061,.5,.8);ce.position.set(j,d-1.1,0),this.scene.add(ce);const oe=new dE(16772565,1.8,38,Math.PI/4,.5);oe.position.set(j,d-1.3,0),oe.target.position.set(j,0,0),this.scene.add(oe),this.scene.add(oe.target)}const K=new Dt(new Wt(u+4,1.4,.6),v);K.position.set(0,-.1,m+.3),this.scene.add(K);const ne=new Dt(new Wt(1.2,d+2,1.2),M);ne.position.set(g,d/2-1,m),this.scene.add(ne);const W=new Dt(new Wt(1.2,d+2,1.2),M);W.position.set(x,d/2-1,m),this.scene.add(W)}buildLevelArchitecture(){this.floorsData=[],this.laddersData=[];const t=this.currentLevelConfig,i=t.towerFloors,s=t.floorHeight,l=t.width,u=t.depth;this.buildEnclosedSector(l,u,i,s);const d=new xi({color:988970,roughness:.85}),h=new Dt(new Wt(l+12,1.8,u+10),d);h.position.set(0,-.9,0),h.receiveShadow=!0,this.scene.add(h),this.floorsData.push({index:0,baseY:0,slope:0,xMin:-(l/2)-4,xMax:l/2+4,zMin:-(u/2)-2.5,zMax:u/2+2.5});const p=new xi({color:t.themeColors.girder,roughness:.5,metalness:.2}),m=new xi({color:t.themeColors.girderTop,roughness:.4});for(let D=1;D<=i;D++){const y=D===i,S=D*s,z=y?0:D%2===1?-.045:.045,k=y?l*.85:l,C=new kn;C.position.set(0,S,0);const P=new Wt(k,.45,u),U=new Dt(P,p);U.castShadow=!0,U.receiveShadow=!0,C.add(U);const F=new Dt(new Wt(k,.08,u*.95),m);F.position.y=.24,F.receiveShadow=!0,C.add(F);const T=new xi({color:16436245,roughness:.4}),N=new Dt(new Wt(k,.04,.16),T);if(N.position.set(0,.28,u/2-.1),C.add(N),C.rotation.z=Math.atan(z),this.scene.add(C),this.floorsData.push({index:D,baseY:S,slope:z,xMin:-k/2,xMax:k/2,zMin:-u/2,zMax:u/2}),D<=i){const V=D%2===1?k*.36:-k*.36;if(this.buildLadder(V,0,(D-1)*s,S,t.themeColors.ladder),D<i){const X=D%2===1?-k*.15:k*.15;this.buildLadder(X,0,(D-1)*s,S,t.themeColors.ladder)}}if(!y)for(let V=0;V<3;V++){const X=(Math.random()-.5)*(k*.7),Z=S+.9+z*X;this.addCollectible("banana",new de(X,Z,0))}if(D===2||D===4){const V=D===2?-k*.3:k*.3,X=S+.3+z*V;this.addCollectible("hammer",new de(V,X,0))}}const x=this.floorsData[i].baseY;this.apeGroup=_3(),this.apeGroup.position.set(-6,x+.25,-.4),this.apeGroup.scale.set(1.4,1.4,1.4),this.scene.add(this.apeGroup);for(let D=0;D<4;D++){const y=G_("wood");y.position.set(-9-D%2*1.2,x+.5+Math.floor(D/2)*.9,-.4),this.scene.add(y)}this.goalPos.set(7,x+.25,0);const v=St(2.8,.6,2.8,16096779);v.position.copy(this.goalPos),this.scene.add(v);const M=V_();M.position.set(this.goalPos.x,x+1.6,this.goalPos.z),M.scale.set(2,2,2),this.scene.add(M);const w=new Qh(16707722,2.2,10);w.position.set(this.goalPos.x,x+2.5,this.goalPos.z),this.scene.add(w)}buildLadder(t,i,s,l,u){const d=l-s,h=new kn;h.position.set(t,(s+l)/2,i);const p=new xi({color:u,roughness:.4}),m=new Dt(new Wt(.1,d+.3,.1),p);m.position.x=-.45;const g=new Dt(new Wt(.1,d+.3,.1),p);g.position.x=.45,h.add(m,g);const x=Math.floor(d/.45);for(let v=0;v<=x;v++){const M=new Dt(new Wt(.9,.08,.08),p);M.position.y=-d/2+v*.45,h.add(M)}this.scene.add(h),this.laddersData.push({x:t,z:i,yBottom:s,yTop:l})}addCollectible(t,i){let s;t==="banana"?s=V_():s=b3(),s.position.copy(i),this.scene.add(s),this.collectibles.push({id:this.collectibles.length+1,mesh:s,pos:i,type:t,active:!0})}createPlayer(t,i,s,l){const u=this.container.clientWidth/this.container.clientHeight,d=new ii(75,u,.1,100),h=S3(i);d.add(h),this.scene.add(d);const p=y3(i);return{id:t,position:l.clone(),velocity:new de(0,0,0),rotation:{yaw:0,pitch:0},isGrounded:!0,isClimbing:!1,lives:s,score:0,coinsEarned:0,hammerTimeLeft:0,camera:d,armViewModel:h,avatarMesh:p,lastJumpTime:0,cleanJumps:0}}update(t,i,s){if(this.isPaused||this.isGameOver||this.isVictory)return;const l=Math.min(t,.1);this.updatePlayer(this.p1,i,l),this.isCoop&&this.p2&&s&&this.updatePlayer(this.p2,s,l),this.updateApe(l),this.updateBarrels(l),this.updateCollectibles(l),this.updateParticles(l);const u=Math.max(this.p1.position.y,this.p2?this.p2.position.y:0),d=this.floorsData[this.floorsData.length-1].baseY,h=Math.max(0,Math.min(1,u/d)),p=this.p1.hammerTimeLeft>0||this.p2&&this.p2.hammerTimeLeft>0?.8:0;gt.setIntensity(1+h*.9+p),this.onStateUpdate&&this.onStateUpdate(this.p1,this.p2)}updatePlayer(t,i,s){i.turnLeft&&(t.rotation.yaw+=2.8*s),i.turnRight&&(t.rotation.yaw-=2.8*s),t.rotation.yaw-=i.lookDeltaX*.0035,t.rotation.pitch-=i.lookDeltaY*.0035,t.rotation.pitch=Math.max(-1.4,Math.min(1.4,t.rotation.pitch)),t.camera.rotation.order="YXZ",t.camera.rotation.y=t.rotation.yaw,t.camera.rotation.x=t.rotation.pitch;let l=null;for(const x of this.laddersData)if(Math.hypot(t.position.x-x.x,t.position.z-x.z)<1.35&&t.position.y>=x.yBottom-.2&&t.position.y<=x.yTop+1.3){l=x;break}if(l&&Math.abs(i.moveForward)>.15?t.position.y>=l.yTop+1&&i.moveForward>0?t.isClimbing=!1:(t.isClimbing=!0,t.velocity.y=i.moveForward*4.6,t.velocity.x=(l.x-t.position.x)*6,t.velocity.z=(l.z-t.position.z)*6,gt.playLadderClimb(),t.position.y>=l.yTop+1.15?(t.isClimbing=!1,t.position.y=l.yTop+1.25,t.velocity.y=0,t.isGrounded=!0):t.position.y<=l.yBottom+1.1&&i.moveForward<0&&(t.isClimbing=!1,t.position.y=l.yBottom+1.2,t.velocity.y=0,t.isGrounded=!0)):t.isClimbing=!1,!t.isClimbing){const x=t.hammerTimeLeft>0?8.5:7.2,v=-Math.sin(t.rotation.yaw),M=-Math.cos(t.rotation.yaw),w=Math.cos(t.rotation.yaw),D=-Math.sin(t.rotation.yaw),y=(v*i.moveForward+w*i.moveRight)*x,S=(M*i.moveForward+D*i.moveRight)*x,z=t.isGrounded?18:6;t.velocity.x+=(y-t.velocity.x)*z*s,t.velocity.z+=(S-t.velocity.z)*z*s,i.jump&&t.isGrounded&&(t.velocity.y=8.6,t.isGrounded=!1,t.lastJumpTime=performance.now(),gt.playJump()),t.velocity.y-=22*s}if(t.position.x+=t.velocity.x*s,t.position.y+=t.velocity.y*s,t.position.z+=t.velocity.z*s,!t.isClimbing){const x=this.getFloorHeightAt(t.position.x,t.position.z,t.position.y);t.position.y<=x+1.2?(t.position.y=x+1.2,t.velocity.y=0,t.isGrounded=!0):t.isGrounded=!1}const u=this.currentLevelConfig.width/2+1.8;t.position.x=Math.max(-u,Math.min(u,t.position.x));const d=Math.max(1.3,this.currentLevelConfig.depth/2+.2);t.position.z=Math.max(-d,Math.min(d,t.position.z)),t.camera.position.set(t.position.x,t.position.y+.4,t.position.z),t.avatarMesh.position.copy(t.position),t.avatarMesh.rotation.y=t.rotation.yaw;const h=Math.hypot(t.velocity.x,t.velocity.z),p=Math.sin(performance.now()*.01)*(t.isGrounded?Math.min(h*.02,.05):0);t.armViewModel.position.y=p,t.hammerTimeLeft>0&&(t.hammerTimeLeft-=s,t.hammerTimeLeft<=0&&(t.hammerTimeLeft=0,this.onFloatingText&&this.onFloatingText("¡Martillo Agotado!","#ef4444")));const m=t.armViewModel.getObjectByName("hammerPivot");if(m)if(t.hammerTimeLeft>0){m.visible=!0;const x=i.action?22:12,v=Math.sin(performance.now()*.001*x)*.8-.3;m.rotation.x=v}else m.visible=!1;t.position.distanceTo(this.goalPos)<2.5&&t.position.y>=this.floorsData[this.floorsData.length-1].baseY&&this.triggerVictory()}getFloorHeightAt(t,i,s){let l=0;for(const u of this.floorsData)if(t>=u.xMin-.6&&t<=u.xMax+.6&&i>=u.zMin-.8&&i<=u.zMax+.8){const d=u.baseY+u.slope*Math.max(u.xMin,Math.min(u.xMax,t));d<=s+.8&&d>l&&(l=d)}return l}updateApe(t){let i=1.8;this.difficulty==="facil"&&(i=2.7),this.difficulty==="dificil"&&(i=1.1),this.difficulty==="caos"&&(i=.75),this.apeThrowTimer+=t,this.apeArmSwing+=t*5;const s=this.apeGroup.getObjectByName("armL"),l=this.apeGroup.getObjectByName("armR");s&&l&&(s.rotation.x=Math.sin(this.apeArmSwing)*.5,l.rotation.x=-Math.sin(this.apeArmSwing)*.5),this.apeThrowTimer>=i&&(this.apeThrowTimer=0,this.throwBarrel())}throwBarrel(){const t=this.floorsData[this.floorsData.length-1],i=-4.5,s=t.baseY+2.5,l=0;let u="wood";(this.difficulty==="dificil"||this.difficulty==="caos")&&Math.random()<.4&&(u="fire"),Math.random()<.15&&(u="gold");const d=G_(u);d.position.set(i,s,l),this.scene.add(d);let h=1.4;this.difficulty==="facil"&&(h=1),this.difficulty==="dificil"&&(h=2),this.difficulty==="caos"&&(h=2.6),this.barrels.push({id:++this.barrelIdCounter,mesh:d,pos:new de(i,s,l),vel:new de(6.5*h,-2.5,0),rotX:0,rotZ:0,radius:.55,type:u,isGrounded:!0,floor:t.index}),gt.playBarrelRoll(),Math.random()<.25&&gt.playApeRoar()}updateBarrels(t){this.floorsData.length-1;for(let i=this.barrels.length-1;i>=0;i--){const s=this.barrels[i];s.vel.y-=45*t;const l=this.floorsData[s.floor]||this.floorsData[0],u=l.baseY+l.slope*s.pos.x;if(s.pos.y<=u+s.radius){s.pos.y=u+s.radius,s.vel.y=0,s.isGrounded=!0;const d=s.floor%2===1?1:-1;let h=1.4;this.difficulty==="facil"&&(h=1.1),this.difficulty==="dificil"&&(h=1.8),this.difficulty==="caos"&&(h=2.4);const p=d*7.5*h;if(s.vel.x+=(p-s.vel.x)*6.5*t,s.floor>0&&Math.random()<.05){for(const m of this.laddersData)if(Math.abs(s.pos.x-m.x)<.9&&s.pos.y>=m.yTop-.4){s.floor=Math.max(0,s.floor-1),s.vel.y=-14,s.vel.x*=.15,gt.playBarrelRoll();break}}}else s.isGrounded=!1;if((s.pos.x<l.xMin-.3||s.pos.x>l.xMax+.3)&&s.floor>0){s.floor--,s.vel.y=-10;const d=s.floor%2===1?1:-1;s.vel.x=d*3.5,gt.playBarrelRoll()}s.pos.x+=s.vel.x*t,s.pos.y+=s.vel.y*t,s.pos.z+=s.vel.z*t,s.rotZ-=s.vel.x/s.radius*t,s.mesh.rotation.z=s.rotZ,s.mesh.position.copy(s.pos),this.checkBarrelPlayerCollision(s,this.p1),this.isCoop&&this.p2&&this.checkBarrelPlayerCollision(s,this.p2),(s.pos.y<-3||s.floor===0&&(s.pos.x<l.xMin-6||s.pos.x>l.xMax+6))&&(this.createVoxelSmashParticles(s.pos,s.type==="fire"?15680580:7877903,15),this.scene.remove(s.mesh),this.barrels.splice(i,1))}}checkBarrelPlayerCollision(t,i){const s=Math.hypot(t.pos.x-i.position.x,t.pos.z-i.position.z),l=Math.abs(t.pos.y-i.position.y);if(i.hammerTimeLeft>0&&s<2.2&&l<1.8){this.createVoxelSmashParticles(t.pos,t.type==="fire"?15680580:16096779,25),gt.playHammerSmash(),i.score+=300,i.coinsEarned+=5,this.onFloatingText&&this.onFloatingText("¡DEMOLIDO! +300","#f59e0b"),this.onAchievementTrigger&&this.onAchievementTrigger("ach_barrel_smasher"),this.scene.remove(t.mesh);const d=this.barrels.indexOf(t);d!==-1&&this.barrels.splice(d,1);return}if(!(i.id==="p1"?t.passedP1:t.passedP2)&&s<1.4&&i.position.y>t.pos.y+.6&&!i.isGrounded){i.id==="p1"?t.passedP1=!0:t.passedP2=!0,i.score+=100,i.cleanJumps++,gt.playCoin(),this.onFloatingText&&this.onFloatingText("¡SALTO LIMPIO! +100","#10b981"),this.onAchievementTrigger&&this.onAchievementTrigger("ach_first_jump");return}s<1.1&&l<1.2&&(this.playerTakeHit(i),t.vel.x=-t.vel.x)}playerTakeHit(t){gt.playHit(),t.lives--,this.createVoxelSmashParticles(t.position,15680580,20),this.onFloatingText&&this.onFloatingText("¡GOLPEADO! -1 VIDA","#ef4444"),t.lives<=0?(t.lives=0,this.checkGameOver()):(t.position.x=-10,t.velocity.set(0,0,0))}checkGameOver(){var s;const t=this.p1.lives<=0,i=this.isCoop?(((s=this.p2)==null?void 0:s.lives)??0)<=0:!0;if(t&&i){this.isGameOver=!0,gt.stopMusic();const l=this.p1.score+(this.p2?this.p2.score:0);this.onGameOver&&this.onGameOver(l,this.currentLevelConfig.id)}}triggerVictory(){if(this.isVictory)return;this.isVictory=!0,gt.stopMusic(),gt.playVictory();const t=this.p1.score+(this.p2?this.p2.score:0)+1e3,i=this.p1.coinsEarned+(this.p2?this.p2.coinsEarned:0)+25;this.onAchievementTrigger&&(this.onAchievementTrigger("ach_level1_clear"),(this.difficulty==="dificil"||this.difficulty==="caos")&&this.onAchievementTrigger("ach_hardcore"),this.isCoop&&this.onAchievementTrigger("ach_coop_play")),this.onVictory&&this.onVictory(t,this.currentLevelConfig.id,i)}updateCollectibles(t){for(const i of this.collectibles){if(!i.active)continue;i.mesh.rotation.y+=t*2.5,i.mesh.position.y=i.pos.y+Math.sin(performance.now()*.003+i.id)*.15;const s=l=>{l.position.distanceTo(i.mesh.position)<1.4&&(i.active=!1,this.scene.remove(i.mesh),i.type==="banana"?(gt.playCoin(),l.score+=150,l.coinsEarned+=3,this.onFloatingText&&this.onFloatingText("+150 BANANA","#facc15"),this.onAchievementTrigger&&this.onAchievementTrigger("ach_banana_hoarder")):i.type==="hammer"&&(gt.playHammerSmash(),l.hammerTimeLeft=12,l.score+=200,this.onFloatingText&&this.onFloatingText("¡MARTILLO DESTRUCTOR ACTIVADO!","#38bdf8")))};s(this.p1),this.isCoop&&this.p2&&s(this.p2)}}createVoxelSmashParticles(t,i,s=10){if(this.debrisParticles.length>25){const u=this.debrisParticles.splice(0,10);for(const d of u)this.scene.remove(d.mesh)}const l=NS(i,.6,.1);for(let u=0;u<s;u++){const d=new Dt(v3,l);d.position.copy(t),this.scene.add(d);const h=new de((Math.random()-.5)*7,Math.random()*5+2,(Math.random()-.5)*7);this.debrisParticles.push({pos:t.clone(),vel:h,mesh:d,life:.6+Math.random()*.4,maxLife:1})}}updateParticles(t){this.foliageSystem&&this.foliageSystem.update(t);for(let i=this.debrisParticles.length-1;i>=0;i--){const s=this.debrisParticles[i];s.life-=t,s.vel.y-=18*t,s.pos.addScaledVector(s.vel,t),s.mesh.position.copy(s.pos),s.mesh.rotation.x+=t*5,s.mesh.rotation.y+=t*6;const l=Math.max(.01,s.life/s.maxLife);s.mesh.scale.set(l,l,l),s.life<=0&&(this.scene.remove(s.mesh),this.debrisParticles.splice(i,1))}}render(){const t=this.container.clientWidth||window.innerWidth,i=this.container.clientHeight||window.innerHeight,s=this.bufferWidth,l=this.bufferHeight;if(!this.isCoop||!this.p2)this.renderer.setScissorTest(!1),this.renderer.setViewport(0,0,s,l),this.p1.camera.aspect=t/i,this.p1.camera.updateProjectionMatrix(),this.renderer.render(this.scene,this.p1.camera);else if(this.renderer.setScissorTest(!0),t>=i){const d=Math.floor(s/2),h=t/2/i;this.renderer.setViewport(0,0,d,l),this.renderer.setScissor(0,0,d,l),this.p1.camera.aspect=h,this.p1.camera.updateProjectionMatrix(),this.p1.avatarMesh.visible=!1,this.p2.avatarMesh.visible=!0,this.renderer.render(this.scene,this.p1.camera),this.renderer.setViewport(d,0,d,l),this.renderer.setScissor(d,0,d,l),this.p2.camera.aspect=h,this.p2.camera.updateProjectionMatrix(),this.p1.avatarMesh.visible=!0,this.p2.avatarMesh.visible=!1,this.renderer.render(this.scene,this.p2.camera)}else{const d=Math.floor(l/2),h=t/(i/2);this.renderer.setViewport(0,d,s,d),this.renderer.setScissor(0,d,s,d),this.p1.camera.aspect=h,this.p1.camera.updateProjectionMatrix(),this.p1.avatarMesh.visible=!1,this.p2.avatarMesh.visible=!0,this.renderer.render(this.scene,this.p1.camera),this.renderer.setViewport(0,0,s,d),this.renderer.setScissor(0,0,s,d),this.p2.camera.aspect=h,this.p2.camera.updateProjectionMatrix(),this.p1.avatarMesh.visible=!0,this.p2.avatarMesh.visible=!1,this.renderer.render(this.scene,this.p2.camera)}}destroy(){window.removeEventListener("resize",this.handleResize),gt.stopMusic(),this.animFrameId!==null&&cancelAnimationFrame(this.animFrameId),this.renderer&&this.renderer.domElement.parentNode&&this.renderer.domElement.parentNode.removeChild(this.renderer.domElement),this.renderer.dispose()}}/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A3=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),w3=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,s)=>s?s.toUpperCase():i.toLowerCase()),k_=o=>{const t=w3(o);return t.charAt(0).toUpperCase()+t.slice(1)},DS=(...o)=>o.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim(),R3=o=>{for(const t in o)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var C3={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N3=lt.forwardRef(({color:o="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:u,iconNode:d,...h},p)=>lt.createElement("svg",{ref:p,...C3,width:t,height:t,stroke:o,strokeWidth:s?Number(i)*24/Number(t):i,className:DS("lucide",l),...!u&&!R3(h)&&{"aria-hidden":"true"},...h},[...d.map(([m,g])=>lt.createElement(m,g)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yt=(o,t)=>{const i=lt.forwardRef(({className:s,...l},u)=>lt.createElement(N3,{ref:u,iconNode:t,className:DS(`lucide-${A3(k_(o))}`,`lucide-${o}`,s),...l}));return i.displayName=k_(o),i};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D3=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],L3=Yt("arrow-right",D3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U3=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],O3=Yt("arrow-up",U3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P3=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],LS=Yt("award",P3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z3=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],gm=Yt("check",z3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I3=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],B3=Yt("circle-check",I3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F3=[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]],xo=Yt("coins",F3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H3=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],G3=Yt("credit-card",H3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V3=[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]],k3=Yt("gamepad-2",V3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X3=[["path",{d:"m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9",key:"1hayfq"}],["path",{d:"m18 15 4-4",key:"16gjal"}],["path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5",key:"15ts47"}]],j3=Yt("hammer",X3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q3=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],X_=Yt("heart",q3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W3=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],US=Yt("house",W3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y3=[["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M7 16h10",key:"wp8him"}],["path",{d:"M8 12h.01",key:"czm47f"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}]],ho=Yt("keyboard",Y3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z3=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],K3=Yt("layers",Z3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q3=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],J3=Yt("lock",Q3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $3=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],eR=Yt("pause",$3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tR=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Zp=Yt("play",tR);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nR=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],OS=Yt("refresh-cw",nR);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iR=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],aR=Yt("rotate-ccw",iR);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sR=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],rR=Yt("shield-check",sR);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oR=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],PS=Yt("shopping-bag",oR);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lR=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],cR=Yt("smartphone",lR);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uR=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],xm=Yt("sparkles",uR);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fR=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],dR=Yt("star",fR);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hR=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]],vm=Yt("trophy",hR);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pR=[["path",{d:"m17 2-5 5-5-5",key:"16satq"}],["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",key:"1e6viu"}]],_m=Yt("tv",pR);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mR=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],j_=Yt("user",mR);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gR=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],xR=Yt("users",gR);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vR=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],Kp=Yt("volume-2",vR);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _R=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],SR=Yt("volume-x",_R);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yR=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Bl=Yt("x",yR);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bR=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],MR=Yt("zap",bR),ER=[{key:"forward",label:"Avanzar / Mover Adelante",desc:"Caminar hacia adelante y subir escaleras",icon:"⬆️"},{key:"backward",label:"Retroceder / Mover Atrás",desc:"Caminar hacia atrás y bajar escaleras",icon:"⬇️"},{key:"left",label:"Girar / Desplazar Izquierda",desc:"Giro de cámara estilo Doom o paso lateral",icon:"⬅️"},{key:"right",label:"Girar / Desplazar Derecha",desc:"Giro de cámara estilo Doom o paso lateral",icon:"➡️"},{key:"jump",label:"Saltar",desc:"Impulso vertical para evadir barriles",icon:"⏫"},{key:"action",label:"Golpe de Mazo / Acción",desc:"Demoler barriles o activar mecanismos",icon:"🔨"}];function ua(o){switch(o){case"ArrowUp":return"↑ Flecha Arriba";case"ArrowDown":return"↓ Flecha Abajo";case"ArrowLeft":return"← Flecha Izq";case"ArrowRight":return"→ Flecha Der";case"Space":return"Barra Espaciadora";case"ControlLeft":return"Ctrl Izquierdo";case"ControlRight":return"Ctrl Derecho";case"ShiftLeft":return"Shift Izq";case"ShiftRight":return"Shift Der";case"Enter":return"Intro / Enter";case"KeyW":return"Tecla W";case"KeyS":return"Tecla S";case"KeyA":return"Tecla A";case"KeyD":return"Tecla D";case"KeyF":return"Tecla F";case"KeyE":return"Tecla E";case"KeyL":return"Tecla L";case"KeyK":return"Tecla K";default:return o.replace("Key","Tecla ").replace("Digit","Número ")}}const TR=({saveData:o,onUpdateSave:t,onClose:i})=>{const[s,l]=lt.useState(o.settings.keyBindings||co),[u,d]=lt.useState(null);lt.useEffect(()=>{if(!u)return;const p=m=>{if(m.preventDefault(),m.stopPropagation(),m.code==="Escape"){d(null);return}const g={...s,[u]:m.code};l(g),d(null),gt.playCoin(),t({...o,settings:{...o.settings,keyBindings:g}})};return window.addEventListener("keydown",p,!0),()=>window.removeEventListener("keydown",p,!0)},[u,s,o,t]);const h=p=>{l(p),d(null),gt.playCoin(),t({...o,settings:{...o.settings,keyBindings:p}})};return b.jsx("div",{id:"modal-controls-config",className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm select-none",children:b.jsxs("div",{className:"w-full max-w-xl bg-zinc-900 border-2 border-amber-500/40 rounded-3xl p-6 shadow-2xl flex flex-col gap-5 text-white max-h-[92vh] overflow-y-auto animate-scale-up",children:[b.jsxs("div",{className:"flex items-center justify-between border-b border-zinc-800 pb-4",children:[b.jsxs("div",{className:"flex items-center gap-3",children:[b.jsx("div",{className:"p-2.5 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-400/30",children:b.jsx(ho,{className:"w-6 h-6"})}),b.jsxs("div",{children:[b.jsx("h2",{className:"text-xl font-black font-mono tracking-wide text-amber-400 uppercase",children:"Configuración de Controles"}),b.jsx("p",{className:"text-xs text-zinc-400 font-mono",children:"Asigna cualquier tecla o elige el perfil clásico de DOOM 1"})]})]}),b.jsx("button",{type:"button",onClick:i,className:"p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors",children:b.jsx(Bl,{className:"w-5 h-5"})})]}),b.jsxs("div",{className:"flex flex-col gap-2",children:[b.jsx("span",{className:"text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider",children:"Perfiles Rápidos"}),b.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2.5",children:[b.jsxs("button",{type:"button",onClick:()=>h(co),className:`p-3 rounded-2xl border text-left flex items-center gap-3 transition-all ${s.forward==="ArrowUp"&&s.left==="ArrowLeft"?"bg-amber-500/20 border-amber-400 text-amber-300 ring-1 ring-amber-400/40 shadow-md":"bg-zinc-800/40 border-zinc-700 text-zinc-300 hover:bg-zinc-800"}`,children:[b.jsx("div",{className:"p-2 rounded-xl bg-zinc-800 text-amber-400",children:b.jsx(k3,{className:"w-5 h-5"})}),b.jsxs("div",{children:[b.jsxs("div",{className:"font-mono text-xs font-black uppercase text-white flex items-center gap-1.5",children:[b.jsx("span",{children:"DOOM 1 Clásico"}),b.jsx("span",{className:"text-[10px] px-1.5 py-0.2 rounded bg-amber-500/30 text-amber-300 border border-amber-400/40",children:"POR DEFECTO"})]}),b.jsx("div",{className:"font-mono text-[11px] text-zinc-400",children:"Flechas ↑ ↓ ← → • Ctrl (Golpe) • Espacio"})]})]}),b.jsxs("button",{type:"button",onClick:()=>h(TM),className:`p-3 rounded-2xl border text-left flex items-center gap-3 transition-all ${s.forward==="KeyW"&&s.left==="KeyA"?"bg-amber-500/20 border-amber-400 text-amber-300 ring-1 ring-amber-400/40 shadow-md":"bg-zinc-800/40 border-zinc-700 text-zinc-300 hover:bg-zinc-800"}`,children:[b.jsx("div",{className:"p-2 rounded-xl bg-zinc-800 text-blue-400",children:b.jsx(ho,{className:"w-5 h-5"})}),b.jsxs("div",{children:[b.jsx("div",{className:"font-mono text-xs font-black uppercase text-white",children:"Moderno FPS (WASD)"}),b.jsx("div",{className:"font-mono text-[11px] text-zinc-400",children:"W, A, S, D • F (Golpe) • Espacio • Ratón"})]})]})]})]}),b.jsxs("div",{className:"flex flex-col gap-2",children:[b.jsxs("div",{className:"flex items-center justify-between",children:[b.jsx("span",{className:"text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider",children:"Asignación Personalizada"}),u&&b.jsx("span",{className:"text-xs font-mono text-amber-400 animate-pulse font-bold",children:"Presiona una tecla ahora... (Esc para cancelar)"})]}),b.jsx("div",{className:"flex flex-col gap-2 bg-zinc-950/60 p-3 rounded-2xl border border-zinc-800",children:ER.map(p=>{const m=s[p.key],g=u===p.key;return b.jsxs("div",{className:"flex items-center justify-between p-2.5 rounded-xl bg-zinc-900 border border-zinc-800/80 hover:border-zinc-700 transition-colors",children:[b.jsxs("div",{className:"flex items-center gap-2.5",children:[b.jsx("span",{className:"text-lg",children:p.icon}),b.jsxs("div",{children:[b.jsx("div",{className:"font-mono text-xs font-bold text-white",children:p.label}),b.jsx("div",{className:"font-mono text-[10px] text-zinc-500",children:p.desc})]})]}),b.jsx("button",{type:"button",onClick:()=>d(p.key),className:`px-3.5 py-1.5 rounded-xl font-mono text-xs font-bold border transition-all ${g?"bg-amber-500 text-zinc-950 border-amber-300 ring-2 ring-amber-400 animate-pulse":"bg-zinc-800 border-zinc-700 text-amber-300 hover:border-amber-400/50 hover:bg-zinc-750 active:scale-95"}`,children:g?"ESCUCHANDO...":ua(m)})]},p.key)})})]}),b.jsxs("div",{className:"flex items-center justify-between pt-2 border-t border-zinc-800",children:[b.jsxs("button",{type:"button",onClick:()=>h(co),className:"flex items-center gap-1.5 font-mono text-xs text-zinc-400 hover:text-white transition-colors",children:[b.jsx(aR,{className:"w-3.5 h-3.5"}),b.jsx("span",{children:"Restablecer a Doom 1"})]}),b.jsxs("button",{type:"button",onClick:i,className:"px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-mono text-xs font-black uppercase tracking-wider transition-all shadow flex items-center gap-2",children:[b.jsx(gm,{className:"w-4 h-4"}),b.jsx("span",{children:"LISTO Y GUARDADO"})]})]})]})})},AR=({saveData:o,onStartGame:t,onOpenCustomization:i,onOpenShop:s,onOpenAchievements:l,onOpenLeaderboard:u,onOpenControlsConfig:d,onUpdateSave:h})=>{var k,C,P,U,F,T;const[p,m]=lt.useState("normal"),[g,x]=lt.useState(o.stats.currentLevel||1),[v,M]=lt.useState(!1),[w,D]=lt.useState(!1),y=()=>{gt.playCoin(),gt.playApeRoar(),t(g,p,v)},S=()=>{const N=!w;D(N),N?gt.setVolumes(0,0):(gt.setVolumes(o.settings.musicVolume,o.settings.sfxVolume),gt.playCoin())},z=()=>{const N=o.settings.touchControlsForced!==!0;h({...o,settings:{...o.settings,touchControlsForced:N}}),gt.playCoin()};return b.jsxs("div",{id:"main-menu-view",className:"relative w-full h-full min-h-screen flex flex-col items-center justify-between p-4 sm:p-8 bg-gradient-to-b from-emerald-950 via-zinc-950 to-stone-950 text-white select-none overflow-y-auto",children:[b.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none"}),b.jsx("div",{className:"absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none"}),b.jsxs("div",{className:"relative z-10 w-full max-w-4xl flex items-center justify-between gap-3",children:[b.jsxs("div",{onClick:s,className:"flex items-center gap-2 px-4 py-2 bg-yellow-500/20 border border-yellow-400/40 rounded-xl font-mono text-sm text-yellow-300 font-bold shadow cursor-pointer hover:bg-yellow-500/30 transition-all active:scale-95",children:[b.jsx("span",{className:"text-xl",children:"🍌"}),b.jsxs("span",{children:[o.stats.totalCoins," Bananas"]})]}),b.jsxs("div",{className:"flex items-center gap-2",children:[b.jsxs("button",{type:"button",onClick:d,className:"px-3 py-2 rounded-xl bg-zinc-900/80 border border-amber-500/40 text-amber-300 hover:bg-zinc-800 transition-colors text-xs font-mono font-bold flex items-center gap-1.5 shadow",title:"Configurar Controles (Doom 1 / Personalizado)",children:[b.jsx(ho,{className:"w-4 h-4 text-amber-400"}),b.jsx("span",{className:"hidden sm:inline",children:"Controles (Doom 1)"})]}),b.jsxs("button",{type:"button",onClick:z,className:`p-2.5 rounded-xl border transition-all text-xs font-mono flex items-center gap-1.5 ${o.settings.touchControlsForced?"bg-emerald-600/30 border-emerald-400/50 text-emerald-300":"bg-zinc-900/60 border-zinc-700 text-zinc-400 hover:text-white"}`,title:"Forzar Joystick Táctil en Pantalla",children:[b.jsx(cR,{className:"w-4 h-4"}),b.jsxs("span",{className:"hidden sm:inline",children:["Joystick: ",o.settings.touchControlsForced?"ON":"AUTO"]})]}),b.jsx("button",{type:"button",onClick:S,className:"p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-700 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors",title:w?"Activar Sonido":"Silenciar",children:w?b.jsx(SR,{className:"w-4 h-4 text-red-400"}):b.jsx(Kp,{className:"w-4 h-4 text-emerald-400"})})]})]}),b.jsxs("div",{className:"relative z-10 flex flex-col items-center text-center my-6 gap-2",children:[b.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-mono font-bold tracking-widest uppercase animate-pulse",children:[b.jsx(MR,{className:"w-3.5 h-3.5"})," RECONVERSIÓN 3D EN PRIMERA PERSONA"]}),b.jsxs("h1",{className:"text-4xl sm:text-6xl md:text-7xl font-black font-mono tracking-tight uppercase drop-shadow-2xl",children:[b.jsx("span",{className:"bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent",children:"Simio Salvaje"}),b.jsx("br",{}),b.jsx("span",{className:"text-white text-2xl sm:text-4xl md:text-5xl tracking-normal",children:"Desafío a las Alturas"})]}),b.jsx("p",{className:"text-xs sm:text-sm font-mono text-zinc-400 max-w-lg mt-1",children:"Plataformas voxel en primera persona con físicas realistas de barriles, escaleras infinitas y banda sonora retro-selvática."})]}),b.jsxs("div",{className:"relative z-10 w-full max-w-2xl bg-zinc-900/80 backdrop-blur-md border border-zinc-800 rounded-3xl p-5 sm:p-7 shadow-2xl flex flex-col gap-6",children:[b.jsxs("div",{className:"flex flex-col gap-2",children:[b.jsx("span",{className:"text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider",children:"Modo de Juego"}),b.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[b.jsxs("button",{type:"button",onClick:()=>{M(!1),gt.playCoin()},className:`p-3.5 rounded-2xl border font-mono font-bold text-xs flex items-center justify-center gap-2.5 transition-all ${v?"bg-zinc-800/60 border-zinc-700 text-zinc-400 hover:bg-zinc-800 hover:text-white":"bg-amber-500 text-zinc-950 border-amber-400 shadow-lg scale-102"}`,children:[b.jsx(Zp,{className:"w-4 h-4 fill-current"}),"1 JUGADOR (ASCENSO)"]}),b.jsxs("button",{type:"button",onClick:()=>{M(!0),gt.playCoin()},className:`p-3.5 rounded-2xl border font-mono font-bold text-xs flex items-center justify-center gap-2.5 transition-all ${v?"bg-blue-600 text-white border-blue-400 shadow-lg scale-102 ring-2 ring-blue-400/40":"bg-zinc-800/60 border-zinc-700 text-zinc-400 hover:bg-zinc-800 hover:text-white"}`,children:[b.jsx(xR,{className:"w-4 h-4"}),"CO-OP LOCAL (2 JUGADORES)"]})]})]}),b.jsxs("div",{className:"flex flex-col gap-2",children:[b.jsxs("div",{className:"flex items-center justify-between",children:[b.jsx("span",{className:"text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider",children:"Dificultad de la Partida"}),b.jsxs("span",{className:"text-[11px] font-mono text-amber-400",children:["Multiplicador x",(k=Fv.find(N=>N.id===p))==null?void 0:k.scoreMultiplier.toFixed(1)]})]}),b.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2.5",children:Fv.map(N=>{const V=p===N.id;return b.jsxs("button",{type:"button",onClick:()=>{m(N.id),gt.playCoin()},className:`p-3 rounded-xl border flex flex-col items-start gap-1 transition-all ${V?"bg-zinc-800 border-amber-400 ring-2 ring-amber-400/40 scale-102 shadow-md":"bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"}`,children:[b.jsxs("div",{className:"flex items-center justify-between w-full",children:[b.jsx("span",{className:"font-mono text-xs font-black uppercase text-white",children:N.subtitle}),b.jsx("div",{className:"w-2.5 h-2.5 rounded-full",style:{backgroundColor:N.color}})]}),b.jsx("span",{className:"text-[10px] font-mono text-zinc-400 line-clamp-1",children:N.name})]},N.id)})})]}),b.jsxs("div",{className:"flex flex-col gap-2",children:[b.jsxs("div",{className:"flex items-center justify-between",children:[b.jsxs("span",{className:"text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5",children:[b.jsx(K3,{className:"w-3.5 h-3.5"})," Selección de Nivel"]}),b.jsxs("span",{className:"text-[11px] font-mono text-emerald-400",children:["Desbloqueado hasta Nivel ",o.stats.maxLevelUnlocked]})]}),b.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2",children:Yp.map(N=>{const V=N.id<=(o.stats.maxLevelUnlocked||1),X=g===N.id;return b.jsxs("button",{type:"button",disabled:!V,onClick:()=>{x(N.id),gt.playCoin()},className:`p-2.5 rounded-xl border font-mono text-xs text-left transition-all ${X?"bg-amber-500/20 border-amber-400 text-amber-300 ring-1 ring-amber-400":V?"bg-zinc-800/40 border-zinc-700 text-zinc-300 hover:bg-zinc-800":"bg-zinc-950/60 border-zinc-900 text-zinc-600 cursor-not-allowed"}`,children:[b.jsxs("div",{className:"font-bold",children:["Nivel ",N.id]}),b.jsx("div",{className:"text-[10px] text-zinc-400 line-clamp-1",children:N.themeName})]},N.id)})})]}),b.jsxs("div",{className:"flex flex-col gap-2.5 bg-zinc-950/60 p-4 rounded-2xl border border-zinc-800",children:[b.jsxs("div",{className:"flex items-center justify-between",children:[b.jsxs("span",{className:"text-xs font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5",children:[b.jsx(_m,{className:"w-3.5 h-3.5 text-amber-400"})," Filtro Visual 8-Bit & Motor"]}),b.jsx("span",{className:"text-[10px] font-mono text-emerald-400 font-bold bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded-full",children:"Optimizado 60 FPS"})]}),b.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2",children:[{id:"8bit",label:"8-Bit Retro",desc:"Scanlines + Píxeles"},{id:"crt",label:"CRT Arcade",desc:"Curvatura & Viñeta"},{id:"smooth",label:"Suave 60FPS",desc:"Tono arcade suave"},{id:"off",label:"3D Nítido",desc:"Sin filtro"}].map(N=>{const V=(o.settings.filter8Bit||"8bit")===N.id;return b.jsxs("button",{type:"button",onClick:()=>{const X=N.id==="8bit"?"8bit_retro":N.id==="crt"?"arcade":"high";h({...o,settings:{...o.settings,filter8Bit:N.id,renderResolution:X}}),gt.playCoin()},className:`p-2.5 rounded-xl border text-left font-mono transition-all ${V?"bg-amber-500/25 border-amber-400 text-amber-300 ring-1 ring-amber-400 shadow-md":"bg-zinc-900/80 border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-850"}`,children:[b.jsx("div",{className:"text-xs font-bold",children:N.label}),b.jsx("div",{className:"text-[10px] text-zinc-500 line-clamp-1",children:N.desc})]},N.id)})})]}),b.jsxs("button",{id:"btn-play-game",type:"button",onClick:y,className:"w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 hover:from-amber-400 hover:to-red-400 text-zinc-950 font-mono text-base font-black uppercase tracking-wider shadow-xl hover:shadow-orange-500/25 transition-all transform active:scale-98 flex items-center justify-center gap-3 cursor-pointer",children:[b.jsx(Zp,{className:"w-6 h-6 fill-current"}),b.jsx("span",{children:"INICIAR ASCENSO A LAS ALTURAS"})]}),b.jsxs("div",{onClick:d,className:"w-full p-2.5 rounded-xl bg-zinc-950/70 border border-zinc-800 hover:border-amber-400/50 cursor-pointer flex items-center justify-between text-[11px] font-mono text-zinc-400 transition-colors",children:[b.jsxs("div",{className:"flex items-center gap-2",children:[b.jsx(ho,{className:"w-3.5 h-3.5 text-amber-400 shrink-0"}),b.jsxs("span",{children:["Controles: ",b.jsx("strong",{className:"text-white",children:ua(((C=o.settings.keyBindings)==null?void 0:C.forward)||"ArrowUp")}),","," ",b.jsx("strong",{className:"text-white",children:ua(((P=o.settings.keyBindings)==null?void 0:P.backward)||"ArrowDown")}),","," ",b.jsx("strong",{className:"text-white",children:ua(((U=o.settings.keyBindings)==null?void 0:U.left)||"ArrowLeft")}),","," ",b.jsx("strong",{className:"text-white",children:ua(((F=o.settings.keyBindings)==null?void 0:F.right)||"ArrowRight")})," • Golpe:"," ",b.jsx("strong",{className:"text-amber-300",children:ua(((T=o.settings.keyBindings)==null?void 0:T.action)||"ControlLeft")})]})]}),b.jsx("span",{className:"text-[10px] text-amber-400 underline font-bold shrink-0 ml-2",children:"Reasignar"})]})]}),b.jsxs("div",{className:"relative z-10 w-full max-w-2xl grid grid-cols-2 sm:grid-cols-5 gap-2.5 my-6",children:[b.jsxs("button",{type:"button",onClick:i,className:"p-3 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-amber-500/50 flex flex-col items-center gap-1.5 transition-all active:scale-95 shadow-md",children:[b.jsx(xm,{className:"w-5 h-5 text-amber-400"}),b.jsx("span",{className:"font-mono text-xs font-bold",children:"Personalizar"})]}),b.jsxs("button",{type:"button",onClick:s,className:"p-3 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-yellow-500/50 flex flex-col items-center gap-1.5 transition-all active:scale-95 shadow-md",children:[b.jsx(PS,{className:"w-5 h-5 text-yellow-400"}),b.jsx("span",{className:"font-mono text-xs font-bold",children:"Tienda"})]}),b.jsxs("button",{type:"button",onClick:l,className:"p-3 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-emerald-500/50 flex flex-col items-center gap-1.5 transition-all active:scale-95 shadow-md",children:[b.jsx(LS,{className:"w-5 h-5 text-emerald-400"}),b.jsx("span",{className:"font-mono text-xs font-bold",children:"Logros"})]}),b.jsxs("button",{type:"button",onClick:u,className:"p-3 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-blue-500/50 flex flex-col items-center gap-1.5 transition-all active:scale-95 shadow-md",children:[b.jsx(vm,{className:"w-5 h-5 text-blue-400"}),b.jsx("span",{className:"font-mono text-xs font-bold",children:"Récords"})]}),b.jsxs("button",{type:"button",onClick:d,className:"col-span-2 sm:col-span-1 p-3 rounded-2xl bg-zinc-900/80 border border-amber-500/30 hover:border-amber-400 flex flex-col items-center gap-1.5 transition-all active:scale-95 shadow-md",children:[b.jsx(ho,{className:"w-5 h-5 text-amber-400"}),b.jsx("span",{className:"font-mono text-xs font-bold",children:"Teclas"})]})]}),b.jsxs("div",{className:"relative z-10 flex flex-col sm:flex-row items-center justify-between w-full max-w-4xl text-zinc-500 font-mono text-[11px] gap-2",children:[b.jsxs("div",{className:"flex items-center gap-2",children:[b.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500 animate-pulse"}),b.jsx("span",{children:"Modo Offline Activo • Guardado Automático Local Habilitado"})]}),b.jsx("div",{children:b.jsxs("span",{children:["Récord Personal: ",o.stats.highScore.toLocaleString()," PTS"]})})]})]})},wR=({p1:o,p2:t,isCoop:i,highScore:s,levelNum:l,difficulty:u,isTouch:d,keyBindings:h,filterMode:p="8bit",onToggleFilter:m,onPause:g,floatingMessage:x})=>b.jsxs("div",{id:"game-hud-overlay",className:"absolute inset-0 pointer-events-none z-20 flex flex-col justify-between p-4",children:[b.jsxs("div",{className:"flex items-start justify-between w-full",children:[b.jsxs("div",{className:"flex flex-col gap-1.5 bg-black/40 backdrop-blur-xs p-3 rounded-xl border border-white/10 text-white",children:[b.jsxs("div",{className:"flex items-center gap-2",children:[b.jsx("span",{className:"text-xs font-mono font-bold px-1.5 py-0.5 rounded bg-red-600/80 text-white",children:i?"J1":"P1"}),b.jsx("div",{className:"flex items-center gap-1",children:Array.from({length:Math.max(0,o.lives)}).map((v,M)=>b.jsx(X_,{className:"w-5 h-5 text-red-500 fill-red-500 animate-pulse"},M))})]}),b.jsxs("div",{className:"flex items-center gap-4 text-sm font-mono",children:[b.jsxs("div",{children:[b.jsx("span",{className:"text-white/50 text-[10px] uppercase block",children:"Puntos"}),b.jsx("span",{className:"font-bold text-amber-300",children:o.score.toString().padStart(6,"0")})]}),b.jsxs("div",{className:"flex items-center gap-1 text-yellow-400",children:[b.jsx(xo,{className:"w-4 h-4"}),b.jsxs("span",{className:"font-bold",children:["+",o.coinsEarned]})]})]}),o.hammerTimeLeft>0&&b.jsx("div",{className:"w-full bg-black/50 rounded-full h-2 overflow-hidden border border-amber-400/50",children:b.jsx("div",{className:"bg-amber-400 h-full transition-all duration-100",style:{width:`${o.hammerTimeLeft/12*100}%`}})})]}),b.jsxs("div",{className:"flex flex-col items-center gap-2",children:[b.jsxs("div",{className:"flex items-center gap-3 bg-black/50 backdrop-blur-xs px-4 py-1.5 rounded-full border border-white/15 text-white font-mono text-xs",children:[b.jsxs("span",{className:"text-white/60",children:["NIVEL ",l]}),b.jsx("span",{className:"w-1 h-1 rounded-full bg-white/30"}),b.jsx("span",{className:`font-bold uppercase ${u==="caos"?"text-purple-400":u==="dificil"?"text-red-400":u==="normal"?"text-amber-400":"text-emerald-400"}`,children:u}),b.jsx("span",{className:"w-1 h-1 rounded-full bg-white/30"}),b.jsxs("div",{className:"flex items-center gap-1 text-amber-300",children:[b.jsx(vm,{className:"w-3.5 h-3.5"}),b.jsxs("span",{children:["RÉCORD: ",s]})]})]}),x&&b.jsx("div",{className:"px-4 py-1.5 rounded-lg text-sm font-mono font-black tracking-wide uppercase shadow-lg animate-bounce border",style:{backgroundColor:"rgba(0,0,0,0.7)",color:x.color,borderColor:x.color},children:x.text})]}),b.jsxs("div",{className:"flex items-start gap-3",children:[i&&t&&b.jsxs("div",{className:"flex flex-col gap-1.5 bg-black/40 backdrop-blur-xs p-3 rounded-xl border border-white/10 text-white text-right",children:[b.jsxs("div",{className:"flex items-center justify-end gap-2",children:[b.jsx("div",{className:"flex items-center gap-1",children:Array.from({length:Math.max(0,t.lives)}).map((v,M)=>b.jsx(X_,{className:"w-5 h-5 text-blue-400 fill-blue-400 animate-pulse"},M))}),b.jsx("span",{className:"text-xs font-mono font-bold px-1.5 py-0.5 rounded bg-blue-600/80 text-white",children:"J2"})]}),b.jsxs("div",{className:"flex items-center justify-end gap-4 text-sm font-mono",children:[b.jsxs("div",{className:"flex items-center gap-1 text-yellow-400",children:[b.jsx(xo,{className:"w-4 h-4"}),b.jsxs("span",{className:"font-bold",children:["+",t.coinsEarned]})]}),b.jsxs("div",{children:[b.jsx("span",{className:"text-white/50 text-[10px] uppercase block",children:"Puntos"}),b.jsx("span",{className:"font-bold text-amber-300",children:t.score.toString().padStart(6,"0")})]})]}),t.hammerTimeLeft>0&&b.jsx("div",{className:"w-full bg-black/50 rounded-full h-2 overflow-hidden border border-blue-400/50",children:b.jsx("div",{className:"bg-blue-400 h-full transition-all duration-100",style:{width:`${t.hammerTimeLeft/12*100}%`}})})]}),m&&b.jsxs("button",{id:"btn-hud-filter-toggle",type:"button",onClick:m,className:"pointer-events-auto px-2.5 py-2 rounded-xl bg-black/50 backdrop-blur-xs border border-amber-400/40 text-amber-300 hover:text-amber-200 hover:bg-black/70 transition-all active:scale-95 flex items-center gap-1.5 text-xs font-mono font-bold shadow",title:"Alternar Capa Visual 8-Bit (8Bit / CRT / Suave / Off)",children:[b.jsx(_m,{className:"w-4 h-4 text-amber-400"}),b.jsx("span",{children:p==="8bit"?"8-BIT":p==="crt"?"CRT":p==="smooth"?"SUAVE":"3D"})]}),b.jsx("button",{id:"btn-hud-pause",type:"button",onClick:g,className:"pointer-events-auto p-2.5 rounded-xl bg-black/40 backdrop-blur-xs border border-white/15 text-white/80 hover:text-white hover:bg-black/60 transition-colors active:scale-95",title:"Pausar Partida",children:b.jsx(eR,{className:"w-5 h-5"})})]})]}),b.jsxs("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center opacity-60",children:[b.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-white shadow-sm"}),b.jsx("div",{className:"absolute w-6 h-0.5 bg-white/30"}),b.jsx("div",{className:"absolute h-6 w-0.5 bg-white/30"})]}),!d&&b.jsx("div",{className:"flex items-center justify-center w-full",children:b.jsxs("div",{className:"bg-black/50 backdrop-blur-xs px-4 py-1.5 rounded-xl border border-white/15 text-white/80 text-xs font-mono flex items-center gap-3 shadow-lg",children:[b.jsxs("span",{children:[b.jsx("strong",{className:"text-white",children:(h==null?void 0:h.forward)==="ArrowUp"?"↑ ↓ ← →":`${ua((h==null?void 0:h.forward)||"ArrowUp")} / ${ua((h==null?void 0:h.backward)||"ArrowDown")}`})," ","Moverse"]}),b.jsx("span",{children:"•"}),b.jsxs("span",{children:[b.jsx("strong",{className:"text-white",children:ua((h==null?void 0:h.jump)||"Space")})," Saltar"]}),b.jsx("span",{children:"•"}),b.jsxs("span",{children:[b.jsxs("strong",{className:"text-amber-300",children:[ua((h==null?void 0:h.action)||"ControlLeft")," / Click"]})," Golpe"]}),b.jsx("span",{children:"•"}),b.jsxs("span",{children:[b.jsx("strong",{className:"text-zinc-300",children:"Ratón / Teclas"})," Mirar"]}),i&&b.jsxs(b.Fragment,{children:[b.jsx("span",{children:"•"}),b.jsxs("span",{className:"text-blue-300",children:[b.jsx("strong",{children:"J2: WASD"})," + ",b.jsx("strong",{children:"Espacio"})]})]})]})})]}),q_=({onUpdateInput:o,idSuffix:t="",isCoopPlayer2:i=!1})=>{const s=lt.useRef(null),[l,u]=lt.useState(!1),[d,h]=lt.useState({x:0,y:0}),p=lt.useRef(null),m=lt.useRef(null),g=S=>{S.stopPropagation();const z=S.changedTouches[0];if(!s.current)return;const k=s.current.getBoundingClientRect(),C=k.left+k.width/2,P=k.top+k.height/2;p.current={id:z.identifier,startX:C,startY:P},u(!0),M(z.clientX,z.clientY,C,P)},x=S=>{if(S.stopPropagation(),!!p.current)for(let z=0;z<S.changedTouches.length;z++){const k=S.changedTouches[z];if(k.identifier===p.current.id){M(k.clientX,k.clientY,p.current.startX,p.current.startY);break}}},v=S=>{if(S.stopPropagation(),!!p.current){for(let z=0;z<S.changedTouches.length;z++)if(S.changedTouches[z].identifier===p.current.id){p.current=null,u(!1),h({x:0,y:0}),o({moveForward:0,moveRight:0});break}}},M=(S,z,k,C)=>{const U=S-k,F=z-C,T=Math.hypot(U,F),N=Math.atan2(F,U),V=Math.min(T,46),X=Math.cos(N)*V,Z=Math.sin(N)*V;h({x:X,y:Z});const se=-Z/46,K=X/46;o({moveForward:Math.abs(se)<.15?0:se,moveRight:Math.abs(K)<.15?0:K})},w=S=>{const z=S.changedTouches[0];m.current={id:z.identifier,lastX:z.clientX,lastY:z.clientY}},D=S=>{if(m.current)for(let z=0;z<S.changedTouches.length;z++){const k=S.changedTouches[z];if(k.identifier===m.current.id){const C=k.clientX-m.current.lastX,P=k.clientY-m.current.lastY;m.current.lastX=k.clientX,m.current.lastY=k.clientY,o({lookDeltaX:C*1.5,lookDeltaY:P*1.5});break}}},y=S=>{if(m.current){for(let z=0;z<S.changedTouches.length;z++)if(S.changedTouches[z].identifier===m.current.id){m.current=null,o({lookDeltaX:0,lookDeltaY:0});break}}};return b.jsxs("div",{id:`touch-controls-container${t}`,className:"absolute inset-0 pointer-events-none select-none z-30",children:[b.jsx("div",{id:`touch-camera-area${t}`,className:"absolute top-0 right-0 w-3/5 h-full pointer-events-auto",onTouchStart:w,onTouchMove:D,onTouchEnd:y,onTouchCancel:y}),b.jsxs("div",{id:`touch-stick-wrapper${t}`,className:"absolute bottom-6 left-6 pointer-events-auto flex flex-col items-center gap-1.5",children:[b.jsxs("div",{ref:s,id:`touch-stick-base${t}`,className:"w-28 h-28 rounded-full bg-black/25 backdrop-blur-xs border-2 border-white/20 relative flex items-center justify-center shadow-lg active:border-amber-400/50 transition-colors",onTouchStart:g,onTouchMove:x,onTouchEnd:v,onTouchCancel:v,children:[b.jsx("div",{className:"absolute w-8 h-0.5 bg-white/15"}),b.jsx("div",{className:"absolute w-0.5 h-8 bg-white/15"}),b.jsx("div",{id:`touch-stick-knob${t}`,className:"w-12 h-12 rounded-full bg-white/30 border border-white/40 shadow-inner flex items-center justify-center transition-transform duration-75",style:{transform:`translate(${d.x}px, ${d.y}px)`,backgroundColor:l?"rgba(251, 191, 36, 0.4)":"rgba(255, 255, 255, 0.25)"},children:b.jsx("div",{className:"w-4 h-4 rounded-full bg-white/60"})})]}),b.jsx("span",{className:"text-[10px] font-mono tracking-wider text-white/50 uppercase font-semibold",children:i?"Mover J2":"Mover"})]}),b.jsxs("div",{id:`touch-actions-wrapper${t}`,className:"absolute bottom-6 right-6 pointer-events-auto flex items-end gap-3",children:[b.jsxs("button",{id:`touch-btn-hammer${t}`,type:"button",className:"w-16 h-16 rounded-full bg-black/30 backdrop-blur-xs border-2 border-amber-400/40 active:bg-amber-500/40 text-amber-300 flex flex-col items-center justify-center shadow-lg transition-transform active:scale-95",onTouchStart:S=>{S.stopPropagation(),o({action:!0})},onTouchEnd:S=>{S.stopPropagation(),o({action:!1})},onMouseDown:()=>o({action:!0}),onMouseUp:()=>o({action:!1}),title:"Golpe con Martillo",children:[b.jsx(j3,{className:"w-6 h-6"}),b.jsx("span",{className:"text-[9px] font-mono font-bold tracking-tighter mt-0.5",children:"GOLPE"})]}),b.jsxs("button",{id:`touch-btn-jump${t}`,type:"button",className:"w-20 h-20 rounded-full bg-black/35 backdrop-blur-xs border-2 border-emerald-400/50 active:bg-emerald-500/45 text-emerald-300 flex flex-col items-center justify-center shadow-xl transition-transform active:scale-95",onTouchStart:S=>{S.stopPropagation(),o({jump:!0})},onTouchEnd:S=>{S.stopPropagation(),o({jump:!1})},onMouseDown:()=>o({jump:!0}),onMouseUp:()=>o({jump:!1}),title:"Saltar",children:[b.jsx(O3,{className:"w-8 h-8 stroke-[2.5]"}),b.jsx("span",{className:"text-[10px] font-mono font-bold tracking-wider mt-0.5",children:"SALTO"})]})]})]})},RR=({onResume:o,onRestart:t,onReturnToMenu:i,onOpenControlsConfig:s,saveData:l,onUpdateSave:u})=>{const d=m=>{const g=parseFloat(m.target.value);gt.setVolumes(g,l.settings.sfxVolume),u({...l,settings:{...l.settings,musicVolume:g}})},h=m=>{const g=parseFloat(m.target.value);gt.setVolumes(l.settings.musicVolume,g),gt.playCoin(),u({...l,settings:{...l.settings,sfxVolume:g}})},p=m=>{const g=m==="8bit"?"8bit_retro":m==="crt"?"arcade":"high";u({...l,settings:{...l.settings,filter8Bit:m,renderResolution:g}}),gt.playCoin()};return b.jsx("div",{id:"modal-pause",className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto",children:b.jsxs("div",{className:"w-full max-w-sm bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-2xl flex flex-col items-center gap-4 text-white animate-scale-up my-auto",children:[b.jsx("h2",{className:"text-xl font-mono font-black tracking-wider uppercase text-amber-400",children:"Juego en Pausa"}),b.jsxs("div",{className:"w-full bg-zinc-800/60 p-3.5 rounded-2xl flex flex-col gap-2 font-mono text-xs border border-zinc-700/50",children:[b.jsxs("div",{className:"flex items-center justify-between text-zinc-300",children:[b.jsxs("span",{className:"flex items-center gap-1.5 font-bold text-amber-300",children:[b.jsx(_m,{className:"w-3.5 h-3.5 text-amber-400"})," Capa Visual 8-Bit"]}),b.jsx("span",{className:"text-[10px] text-emerald-400 font-bold",children:"Optimizado"})]}),b.jsx("div",{className:"grid grid-cols-2 gap-1.5",children:[{id:"8bit",label:"8-Bit Retro"},{id:"crt",label:"CRT Arcade"},{id:"smooth",label:"Suave 60FPS"},{id:"off",label:"Sin Filtro"}].map(m=>{const g=(l.settings.filter8Bit||"8bit")===m.id;return b.jsx("button",{type:"button",onClick:()=>p(m.id),className:`py-1.5 px-2 rounded-lg text-[11px] font-bold transition-all ${g?"bg-amber-500 text-zinc-950 shadow":"bg-zinc-800 text-zinc-400 hover:text-white"}`,children:m.label},m.id)})})]}),b.jsxs("div",{className:"w-full bg-zinc-800/60 p-3.5 rounded-2xl flex flex-col gap-2.5 font-mono text-xs border border-zinc-700/50",children:[b.jsxs("div",{className:"flex flex-col gap-1",children:[b.jsxs("div",{className:"flex justify-between text-zinc-400",children:[b.jsxs("span",{className:"flex items-center gap-1",children:[b.jsx(Kp,{className:"w-3.5 h-3.5 text-emerald-400"})," Música Selvática"]}),b.jsxs("span",{children:[Math.round(l.settings.musicVolume*100),"%"]})]}),b.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:l.settings.musicVolume,onChange:d,className:"w-full accent-amber-400 cursor-pointer"})]}),b.jsxs("div",{className:"flex flex-col gap-1",children:[b.jsxs("div",{className:"flex justify-between text-zinc-400",children:[b.jsxs("span",{className:"flex items-center gap-1",children:[b.jsx(Kp,{className:"w-3.5 h-3.5 text-yellow-400"})," Efectos 8-Bit"]}),b.jsxs("span",{children:[Math.round(l.settings.sfxVolume*100),"%"]})]}),b.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:l.settings.sfxVolume,onChange:h,className:"w-full accent-amber-400 cursor-pointer"})]})]}),b.jsxs("div",{className:"w-full flex flex-col gap-2",children:[b.jsxs("button",{type:"button",onClick:o,className:"w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-mono text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow",children:[b.jsx(Zp,{className:"w-4 h-4 fill-current"}),b.jsx("span",{children:"CONTINUAR ASCENSO"})]}),b.jsxs("button",{type:"button",onClick:s,className:"w-full py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-amber-300 font-mono text-xs font-bold uppercase transition-all flex items-center justify-center gap-2 border border-amber-500/30",children:[b.jsx(ho,{className:"w-4 h-4 text-amber-400"}),b.jsx("span",{children:"CONFIGURAR CONTROLES (DOOM 1)"})]}),b.jsxs("button",{type:"button",onClick:t,className:"w-full py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-mono text-xs font-bold uppercase transition-all flex items-center justify-center gap-2",children:[b.jsx(OS,{className:"w-4 h-4"}),b.jsx("span",{children:"REINICIAR NIVEL"})]}),b.jsxs("button",{type:"button",onClick:i,className:"w-full py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white font-mono text-xs font-bold uppercase transition-all flex items-center justify-center gap-2",children:[b.jsx(US,{className:"w-4 h-4"}),b.jsx("span",{children:"VOLVER AL MENÚ"})]})]})]})})};var Sm={};(function o(t,i,s,l){var u=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),d=typeof Path2D=="function"&&typeof DOMMatrix=="function",h=(function(){if(!t.OffscreenCanvas)return!1;try{var O=new OffscreenCanvas(1,1),L=O.getContext("2d");L.fillRect(0,0,1,1);var Ce=O.transferToImageBitmap();L.createPattern(Ce,"no-repeat")}catch{return!1}return!0})();function p(){}function m(O){var L=i.exports.Promise,Ce=L!==void 0?L:t.Promise;return typeof Ce=="function"?new Ce(O):(O(p,p),null)}var g=(function(O,L){return{transform:function(Ce){if(O)return Ce;if(L.has(Ce))return L.get(Ce);var ve=new OffscreenCanvas(Ce.width,Ce.height),I=ve.getContext("2d");return I.drawImage(Ce,0,0),L.set(Ce,ve),ve},clear:function(){L.clear()}}})(h,new Map),x=(function(){var O=Math.floor(16.666666666666668),L,Ce,ve={},I=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(L=function($){var _e=Math.random();return ve[_e]=requestAnimationFrame(function G(te){I===te||I+O-1<te?(I=te,delete ve[_e],$()):ve[_e]=requestAnimationFrame(G)}),_e},Ce=function($){ve[$]&&cancelAnimationFrame(ve[$])}):(L=function($){return setTimeout($,O)},Ce=function($){return clearTimeout($)}),{frame:L,cancel:Ce}})(),v=(function(){var O,L,Ce={};function ve(I){function $(_e,G){I.postMessage({options:_e||{},callback:G})}I.init=function(G){var te=G.transferControlToOffscreen();I.postMessage({canvas:te},[te])},I.fire=function(G,te,be){if(L)return $(G,null),L;var Te=Math.random().toString(36).slice(2);return L=m(function(le){function Ae(De){De.data.callback===Te&&(delete Ce[Te],I.removeEventListener("message",Ae),L=null,g.clear(),be(),le())}I.addEventListener("message",Ae),$(G,Te),Ce[Te]=Ae.bind(null,{data:{callback:Te}})}),L},I.reset=function(){I.postMessage({reset:!0});for(var G in Ce)Ce[G](),delete Ce[G]}}return function(){if(O)return O;if(!s&&u){var I=["var CONFETTI, SIZE = {}, module = {};","("+o.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{O=new Worker(URL.createObjectURL(new Blob([I])))}catch($){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",$),null}ve(O)}return O}})(),M={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function w(O,L){return L?L(O):O}function D(O){return O!=null}function y(O,L,Ce){return w(O&&D(O[L])?O[L]:M[L],Ce)}function S(O){return O<0?0:Math.floor(O)}function z(O,L){return Math.floor(Math.random()*(L-O))+O}function k(O){return parseInt(O,16)}function C(O){return O.map(P)}function P(O){var L=String(O).replace(/[^0-9a-f]/gi,"");return L.length<6&&(L=L[0]+L[0]+L[1]+L[1]+L[2]+L[2]),{r:k(L.substring(0,2)),g:k(L.substring(2,4)),b:k(L.substring(4,6))}}function U(O){var L=y(O,"origin",Object);return L.x=y(L,"x",Number),L.y=y(L,"y",Number),L}function F(O){O.width=document.documentElement.clientWidth,O.height=document.documentElement.clientHeight}function T(O){var L=O.getBoundingClientRect();O.width=L.width,O.height=L.height}function N(O){var L=document.createElement("canvas");return L.style.position="fixed",L.style.top="0px",L.style.left="0px",L.style.pointerEvents="none",L.style.zIndex=O,L}function V(O,L,Ce,ve,I,$,_e,G,te){O.save(),O.translate(L,Ce),O.rotate($),O.scale(ve,I),O.arc(0,0,1,_e,G,te),O.restore()}function X(O){var L=O.angle*(Math.PI/180),Ce=O.spread*(Math.PI/180);return{x:O.x,y:O.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:O.startVelocity*.5+Math.random()*O.startVelocity,angle2D:-L+(.5*Ce-Math.random()*Ce),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:O.color,shape:O.shape,tick:0,totalTicks:O.ticks,decay:O.decay,drift:O.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:O.gravity*3,ovalScalar:.6,scalar:O.scalar,flat:O.flat}}function Z(O,L){L.x+=Math.cos(L.angle2D)*L.velocity+L.drift,L.y+=Math.sin(L.angle2D)*L.velocity+L.gravity,L.velocity*=L.decay,L.flat?(L.wobble=0,L.wobbleX=L.x+10*L.scalar,L.wobbleY=L.y+10*L.scalar,L.tiltSin=0,L.tiltCos=0,L.random=1):(L.wobble+=L.wobbleSpeed,L.wobbleX=L.x+10*L.scalar*Math.cos(L.wobble),L.wobbleY=L.y+10*L.scalar*Math.sin(L.wobble),L.tiltAngle+=.1,L.tiltSin=Math.sin(L.tiltAngle),L.tiltCos=Math.cos(L.tiltAngle),L.random=Math.random()+2);var Ce=L.tick++/L.totalTicks,ve=L.x+L.random*L.tiltCos,I=L.y+L.random*L.tiltSin,$=L.wobbleX+L.random*L.tiltCos,_e=L.wobbleY+L.random*L.tiltSin;if(O.fillStyle="rgba("+L.color.r+", "+L.color.g+", "+L.color.b+", "+(1-Ce)+")",O.beginPath(),d&&L.shape.type==="path"&&typeof L.shape.path=="string"&&Array.isArray(L.shape.matrix))O.fill(j(L.shape.path,L.shape.matrix,L.x,L.y,Math.abs($-ve)*.1,Math.abs(_e-I)*.1,Math.PI/10*L.wobble));else if(L.shape.type==="bitmap"){var G=Math.PI/10*L.wobble,te=Math.abs($-ve)*.1,be=Math.abs(_e-I)*.1,Te=L.shape.bitmap.width*L.scalar,le=L.shape.bitmap.height*L.scalar,Ae=new DOMMatrix([Math.cos(G)*te,Math.sin(G)*te,-Math.sin(G)*be,Math.cos(G)*be,L.x,L.y]);Ae.multiplySelf(new DOMMatrix(L.shape.matrix));var De=O.createPattern(g.transform(L.shape.bitmap),"no-repeat");De.setTransform(Ae),O.globalAlpha=1-Ce,O.fillStyle=De,O.fillRect(L.x-Te/2,L.y-le/2,Te,le),O.globalAlpha=1}else if(L.shape==="circle")O.ellipse?O.ellipse(L.x,L.y,Math.abs($-ve)*L.ovalScalar,Math.abs(_e-I)*L.ovalScalar,Math.PI/10*L.wobble,0,2*Math.PI):V(O,L.x,L.y,Math.abs($-ve)*L.ovalScalar,Math.abs(_e-I)*L.ovalScalar,Math.PI/10*L.wobble,0,2*Math.PI);else if(L.shape==="star")for(var Ue=Math.PI/2*3,nt=4*L.scalar,st=8*L.scalar,Ye=L.x,$e=L.y,Mt=5,Vt=Math.PI/Mt;Mt--;)Ye=L.x+Math.cos(Ue)*st,$e=L.y+Math.sin(Ue)*st,O.lineTo(Ye,$e),Ue+=Vt,Ye=L.x+Math.cos(Ue)*nt,$e=L.y+Math.sin(Ue)*nt,O.lineTo(Ye,$e),Ue+=Vt;else O.moveTo(Math.floor(L.x),Math.floor(L.y)),O.lineTo(Math.floor(L.wobbleX),Math.floor(I)),O.lineTo(Math.floor($),Math.floor(_e)),O.lineTo(Math.floor(ve),Math.floor(L.wobbleY));return O.closePath(),O.fill(),L.tick<L.totalTicks}function se(O,L,Ce,ve,I){var $=L.slice(),_e=O.getContext("2d"),G,te,be=m(function(Te){function le(){G=te=null,_e.clearRect(0,0,ve.width,ve.height),g.clear(),I(),Te()}function Ae(){s&&!(ve.width===l.width&&ve.height===l.height)&&(ve.width=O.width=l.width,ve.height=O.height=l.height),!ve.width&&!ve.height&&(Ce(O),ve.width=O.width,ve.height=O.height),_e.clearRect(0,0,ve.width,ve.height),$=$.filter(function(De){return Z(_e,De)}),$.length?G=x.frame(Ae):le()}G=x.frame(Ae),te=le});return{addFettis:function(Te){return $=$.concat(Te),be},canvas:O,promise:be,reset:function(){G&&x.cancel(G),te&&te()}}}function K(O,L){var Ce=!O,ve=!!y(L||{},"resize"),I=!1,$=y(L,"disableForReducedMotion",Boolean),_e=u&&!!y(L||{},"useWorker"),G=_e?v():null,te=Ce?F:T,be=O&&G?!!O.__confetti_initialized:!1,Te=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,le;function Ae(Ue,nt,st){for(var Ye=y(Ue,"particleCount",S),$e=y(Ue,"angle",Number),Mt=y(Ue,"spread",Number),Vt=y(Ue,"startVelocity",Number),yt=y(Ue,"decay",Number),kt=y(Ue,"gravity",Number),Q=y(Ue,"drift",Number),Qt=y(Ue,"colors",C),Et=y(Ue,"ticks",Number),B=y(Ue,"shapes"),E=y(Ue,"scalar"),re=!!y(Ue,"flat"),fe=U(Ue),Se=Ye,Le=[],Oe=O.width*fe.x,ye=O.height*fe.y;Se--;)Le.push(X({x:Oe,y:ye,angle:$e,spread:Mt,startVelocity:Vt,color:Qt[Se%Qt.length],shape:B[z(0,B.length)],ticks:Et,decay:yt,gravity:kt,drift:Q,scalar:E,flat:re}));return le?le.addFettis(Le):(le=se(O,Le,te,nt,st),le.promise)}function De(Ue){var nt=$||y(Ue,"disableForReducedMotion",Boolean),st=y(Ue,"zIndex",Number);if(nt&&Te)return m(function(Vt){Vt()});Ce&&le?O=le.canvas:Ce&&!O&&(O=N(st),document.body.appendChild(O)),ve&&!be&&te(O);var Ye={width:O.width,height:O.height};G&&!be&&G.init(O),be=!0,G&&(O.__confetti_initialized=!0);function $e(){if(G){var Vt={getBoundingClientRect:function(){if(!Ce)return O.getBoundingClientRect()}};te(Vt),G.postMessage({resize:{width:Vt.width,height:Vt.height}});return}Ye.width=Ye.height=null}function Mt(){le=null,ve&&(I=!1,t.removeEventListener("resize",$e)),Ce&&O&&(document.body.contains(O)&&document.body.removeChild(O),O=null,be=!1)}return ve&&!I&&(I=!0,t.addEventListener("resize",$e,!1)),G?G.fire(Ue,Ye,Mt):Ae(Ue,Ye,Mt)}return De.reset=function(){G&&G.reset(),le&&le.reset()},De}var ne;function W(){return ne||(ne=K(null,{useWorker:!0,resize:!0})),ne}function j(O,L,Ce,ve,I,$,_e){var G=new Path2D(O),te=new Path2D;te.addPath(G,new DOMMatrix(L));var be=new Path2D;return be.addPath(te,new DOMMatrix([Math.cos(_e)*I,Math.sin(_e)*I,-Math.sin(_e)*$,Math.cos(_e)*$,Ce,ve])),be}function ce(O){if(!d)throw new Error("path confetti are not supported in this browser");var L,Ce;typeof O=="string"?L=O:(L=O.path,Ce=O.matrix);var ve=new Path2D(L),I=document.createElement("canvas"),$=I.getContext("2d");if(!Ce){for(var _e=1e3,G=_e,te=_e,be=0,Te=0,le,Ae,De=0;De<_e;De+=2)for(var Ue=0;Ue<_e;Ue+=2)$.isPointInPath(ve,De,Ue,"nonzero")&&(G=Math.min(G,De),te=Math.min(te,Ue),be=Math.max(be,De),Te=Math.max(Te,Ue));le=be-G,Ae=Te-te;var nt=10,st=Math.min(nt/le,nt/Ae);Ce=[st,0,0,st,-Math.round(le/2+G)*st,-Math.round(Ae/2+te)*st]}return{type:"path",path:L,matrix:Ce}}function oe(O){var L,Ce=1,ve="#000000",I='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof O=="string"?L=O:(L=O.text,Ce="scalar"in O?O.scalar:Ce,I="fontFamily"in O?O.fontFamily:I,ve="color"in O?O.color:ve);var $=10*Ce,_e=""+$+"px "+I,G=new OffscreenCanvas($,$),te=G.getContext("2d");te.font=_e;var be=te.measureText(L),Te=Math.ceil(be.actualBoundingBoxRight+be.actualBoundingBoxLeft),le=Math.ceil(be.actualBoundingBoxAscent+be.actualBoundingBoxDescent),Ae=2,De=be.actualBoundingBoxLeft+Ae,Ue=be.actualBoundingBoxAscent+Ae;Te+=Ae+Ae,le+=Ae+Ae,G=new OffscreenCanvas(Te,le),te=G.getContext("2d"),te.font=_e,te.fillStyle=ve,te.fillText(L,De,Ue);var nt=1/Ce;return{type:"bitmap",bitmap:G.transferToImageBitmap(),matrix:[nt,0,0,nt,-Te*nt/2,-le*nt/2]}}i.exports=function(){return W().apply(this,arguments)},i.exports.reset=function(){W().reset()},i.exports.create=K,i.exports.shapeFromPath=ce,i.exports.shapeFromText=oe})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),Sm,!1);const CR=Sm.exports;Sm.exports.create;const NR=({isVictory:o,score:t,level:i,coinsEarned:s,onRestart:l,onNextLevel:u,onReturnToMenu:d,onSaveScore:h})=>{const[p,m]=lt.useState("JugadorVoxel"),[g,x]=lt.useState(!1);lt.useEffect(()=>{o&&CR({particleCount:100,spread:70,origin:{y:.6}})},[o]);const v=M=>{M.preventDefault(),!(!p.trim()||g)&&(gt.playCoin(),h(p.trim()),x(!0))};return b.jsx("div",{id:"modal-end-game",className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md",children:b.jsxs("div",{className:"w-full max-w-md bg-zinc-900 border-2 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col items-center text-center gap-5 text-white border-amber-500/40 animate-scale-up",children:[b.jsx("div",{className:`w-20 h-20 rounded-full flex items-center justify-center text-3xl shadow-lg border-2 ${o?"bg-amber-500/20 border-amber-400 text-amber-400":"bg-red-500/20 border-red-400 text-red-400"}`,children:o?"👑":"💥"}),b.jsxs("div",{children:[b.jsx("h2",{className:"text-2xl sm:text-3xl font-black font-mono tracking-tight uppercase",children:o?"¡CUMBRE CONQUISTADA!":"¡CAÍDA A LAS PROFUNDIDADES!"}),b.jsx("p",{className:"text-xs font-mono text-zinc-400 mt-1",children:o?"Has evadido todos los barriles y alcanzado la cima del Simio.":"El Simio Salvaje defendió su territorio. ¡Vuelve a intentarlo!"})]}),b.jsxs("div",{className:"w-full bg-zinc-800/60 border border-zinc-700/60 rounded-2xl p-4 flex items-center justify-around font-mono",children:[b.jsxs("div",{children:[b.jsx("span",{className:"text-[10px] text-zinc-400 uppercase block",children:"Puntuación"}),b.jsx("span",{className:"text-xl font-black text-amber-300",children:t.toLocaleString()})]}),b.jsx("div",{className:"w-px h-8 bg-zinc-700"}),b.jsxs("div",{children:[b.jsx("span",{className:"text-[10px] text-zinc-400 uppercase block",children:"Nivel"}),b.jsx("span",{className:"text-xl font-black text-white",children:i})]}),b.jsx("div",{className:"w-px h-8 bg-zinc-700"}),b.jsxs("div",{children:[b.jsx("span",{className:"text-[10px] text-zinc-400 uppercase block",children:"Bananas"}),b.jsxs("span",{className:"text-xl font-black text-yellow-400 flex items-center gap-1 justify-center",children:[b.jsx(xo,{className:"w-4 h-4"})," +",s]})]})]}),g?b.jsxs("div",{className:"text-xs font-mono text-emerald-400 flex items-center gap-1.5 font-bold",children:[b.jsx(dR,{className:"w-4 h-4"})," ¡Puntaje registrado con éxito!"]}):b.jsxs("form",{onSubmit:v,className:"w-full flex flex-col gap-2",children:[b.jsx("span",{className:"text-xs font-mono text-zinc-400",children:"Registrar en Tabla de Clasificación"}),b.jsxs("div",{className:"flex gap-2",children:[b.jsx("input",{type:"text",maxLength:15,value:p,onChange:M=>m(M.target.value),placeholder:"Tu Nombre",className:"flex-1 px-3 py-2 bg-zinc-950 border border-zinc-700 rounded-xl font-mono text-xs text-white focus:outline-none focus:border-amber-400"}),b.jsx("button",{type:"submit",className:"px-4 py-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-mono text-xs font-bold rounded-xl transition-all shadow",children:"Guardar"})]})]}),b.jsxs("div",{className:"w-full flex flex-col gap-2.5 pt-2",children:[o&&u&&i<4&&b.jsxs("button",{type:"button",onClick:u,className:"w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-mono text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg",children:[b.jsxs("span",{children:["SIGUIENTE NIVEL (",i+1,")"]}),b.jsx(L3,{className:"w-4 h-4"})]}),b.jsxs("button",{type:"button",onClick:l,className:"w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-mono text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow",children:[b.jsx(OS,{className:"w-4 h-4"}),b.jsx("span",{children:"REINTENTAR NIVEL"})]}),b.jsxs("button",{type:"button",onClick:d,className:"w-full py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white font-mono text-xs font-bold uppercase transition-all flex items-center justify-center gap-2",children:[b.jsx(US,{className:"w-4 h-4"}),b.jsx("span",{children:"MENÚ PRINCIPAL"})]})]})]})})},DR=({saveData:o,onUpdateSave:t,onClose:i})=>{const[s,l]=lt.useState("p1"),[u,d]=lt.useState("skin"),h=s==="p1"?o.customizationP1:o.customizationP2,p=g=>{if(gt.playCoin(),!(o.unlockedItems.includes(g.id)||g.unlockedByDefault))return;const v={...o},M=s==="p1"?"customizationP1":"customizationP2";g.category==="skin"?(v[M].skinId=g.id,v[M].colorTheme=g.previewColor):g.category==="hat"?v[M].hatId=g.id:g.category==="hammer"&&(v[M].hammerId=g.id);const w=v.achievements.find(D=>D.id==="ach_fashion");w&&!w.unlocked&&(w.unlocked=!0,w.unlockedAt=new Date().toISOString(),v.stats.totalCoins+=w.rewardCoins),t(v)},m=ap.filter(g=>g.category===u);return b.jsx("div",{id:"modal-customization",className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm",children:b.jsxs("div",{className:"w-full max-w-2xl bg-zinc-900 border-2 border-amber-500/40 rounded-2xl p-6 shadow-2xl flex flex-col gap-6 text-white max-h-[90vh] overflow-y-auto",children:[b.jsxs("div",{className:"flex items-center justify-between border-b border-zinc-800 pb-4",children:[b.jsxs("div",{className:"flex items-center gap-3",children:[b.jsx("div",{className:"p-2 rounded-xl bg-amber-500/20 text-amber-400",children:b.jsx(xm,{className:"w-6 h-6"})}),b.jsxs("div",{children:[b.jsx("h2",{className:"text-xl font-black font-mono tracking-wide text-amber-400 uppercase",children:"Personalización de Avatar"}),b.jsx("p",{className:"text-xs text-zinc-400",children:"Personaliza la apariencia y herramientas de los escaladores voxel"})]})]}),b.jsx("button",{type:"button",onClick:i,className:"p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors",children:b.jsx(Bl,{className:"w-5 h-5"})})]}),b.jsxs("div",{className:"flex items-center justify-center gap-4",children:[b.jsxs("button",{type:"button",onClick:()=>l("p1"),className:`flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-bold transition-all ${s==="p1"?"bg-red-600 text-white shadow-lg scale-105 ring-2 ring-red-400/50":"bg-zinc-800 text-zinc-400 hover:bg-zinc-700"}`,children:[b.jsx(j_,{className:"w-4 h-4"}),"JUGADOR 1 (ROJO)"]}),b.jsxs("button",{type:"button",onClick:()=>l("p2"),className:`flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-bold transition-all ${s==="p2"?"bg-blue-600 text-white shadow-lg scale-105 ring-2 ring-blue-400/50":"bg-zinc-800 text-zinc-400 hover:bg-zinc-700"}`,children:[b.jsx(j_,{className:"w-4 h-4"}),"JUGADOR 2 (CO-OP AZUL)"]})]}),b.jsx("div",{className:"flex border-b border-zinc-800",children:["skin","hat","hammer"].map(g=>b.jsx("button",{type:"button",onClick:()=>d(g),className:`flex-1 py-3 text-center font-mono text-xs font-bold uppercase transition-colors border-b-2 ${u===g?"border-amber-400 text-amber-400 bg-amber-400/5":"border-transparent text-zinc-400 hover:text-zinc-200"}`,children:g==="skin"?"Skins / Trajes":g==="hat"?"Sombreros":"Mazos de Poder"},g))}),b.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:m.map(g=>{const x=o.unlockedItems.includes(g.id)||g.unlockedByDefault,v=u==="skin"&&h.skinId===g.id||u==="hat"&&h.hatId===g.id||u==="hammer"&&h.hammerId===g.id;return b.jsxs("div",{className:`p-4 rounded-xl border flex flex-col justify-between gap-3 transition-all ${v?"bg-zinc-800/90 border-amber-400 shadow-md ring-1 ring-amber-400/30":x?"bg-zinc-800/40 border-zinc-700/60 hover:border-zinc-500":"bg-zinc-900/60 border-zinc-800 opacity-60"}`,children:[b.jsxs("div",{className:"flex items-start gap-3",children:[b.jsx("div",{className:"w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border border-white/20 shadow-inner",style:{backgroundColor:g.previewColor},children:b.jsx("span",{className:"text-xl",children:g.category==="skin"?"👕":g.category==="hat"?"🧢":"🔨"})}),b.jsxs("div",{children:[b.jsx("h3",{className:"font-mono text-sm font-bold text-white",children:g.name}),b.jsx("p",{className:"text-xs text-zinc-400 mt-0.5",children:g.description})]})]}),b.jsxs("div",{className:"flex items-center justify-between pt-2 border-t border-zinc-800/80",children:[b.jsx("div",{className:"text-xs font-mono",children:x?b.jsxs("span",{className:"text-emerald-400 flex items-center gap-1 font-semibold",children:[b.jsx(rR,{className:"w-3.5 h-3.5"})," Adquirido"]}):b.jsxs("span",{className:"text-amber-400 font-bold",children:["🛒 ",g.price," Bananas (En Tienda)"]})}),x&&b.jsx("button",{type:"button",disabled:v,onClick:()=>p(g),className:`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${v?"bg-amber-500/20 text-amber-300 border border-amber-400/40 cursor-default":"bg-zinc-700 hover:bg-zinc-600 text-white"}`,children:v?b.jsxs(b.Fragment,{children:[b.jsx(gm,{className:"w-3.5 h-3.5"})," Equipado"]}):"Equipar"})]})]},g.id)})})]})})},LR=({saveData:o,onUpdateSave:t,onClose:i})=>{const[s,l]=lt.useState("all"),[u,d]=lt.useState(null),h=g=>{if(o.stats.totalCoins<g.price){gt.playHit(),d("¡No tienes suficientes bananas doradas!"),setTimeout(()=>d(null),2500);return}gt.playCoin();const x={...o,stats:{...o.stats,totalCoins:o.stats.totalCoins-g.price},unlockedItems:[...o.unlockedItems,g.id]};t(x),d(`¡${g.name} desbloqueado exitosamente!`),setTimeout(()=>d(null),2500)},p=(g,x)=>{gt.playVictory();const v={...o,stats:{...o.stats,totalCoins:o.stats.totalCoins+g}};t(v),d(`¡Compra IAP completada! +${g} bananas agregadas.`),setTimeout(()=>d(null),3e3)},m=s==="all"?ap:s==="iap"?[]:ap.filter(g=>g.category===s);return b.jsx("div",{id:"modal-shop",className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm",children:b.jsxs("div",{className:"w-full max-w-2xl bg-zinc-900 border-2 border-yellow-500/40 rounded-2xl p-6 shadow-2xl flex flex-col gap-6 text-white max-h-[90vh] overflow-y-auto",children:[b.jsxs("div",{className:"flex items-center justify-between border-b border-zinc-800 pb-4",children:[b.jsxs("div",{className:"flex items-center gap-3",children:[b.jsx("div",{className:"p-2 rounded-xl bg-yellow-500/20 text-yellow-400",children:b.jsx(PS,{className:"w-6 h-6"})}),b.jsxs("div",{children:[b.jsx("h2",{className:"text-xl font-black font-mono tracking-wide text-yellow-400 uppercase",children:"Tienda Integrada Voxel"}),b.jsx("p",{className:"text-xs text-zinc-400",children:"Adquiere accesorios exclusivos y paquetes de bananas doradas"})]})]}),b.jsxs("div",{className:"flex items-center gap-3",children:[b.jsxs("div",{className:"flex items-center gap-1.5 px-3 py-1.5 bg-yellow-500/20 border border-yellow-400/40 rounded-xl font-mono text-sm text-yellow-300 font-bold",children:[b.jsx(xo,{className:"w-4 h-4 text-yellow-400"}),b.jsx("span",{children:o.stats.totalCoins})]}),b.jsx("button",{type:"button",onClick:i,className:"p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors",children:b.jsx(Bl,{className:"w-5 h-5"})})]})]}),u&&b.jsx("div",{className:"p-3 bg-yellow-500/15 border border-yellow-400/40 rounded-xl text-yellow-300 text-xs font-mono font-bold flex items-center justify-between animate-fade-in",children:b.jsx("span",{children:u})}),b.jsx("div",{className:"flex border-b border-zinc-800 gap-1 overflow-x-auto pb-1",children:[{id:"all",label:"Todo"},{id:"skin",label:"Skins"},{id:"hat",label:"Sombreros"},{id:"hammer",label:"Mazos"},{id:"iap",label:"💎 Paquetes IAP"}].map(g=>b.jsx("button",{type:"button",onClick:()=>l(g.id),className:`px-4 py-2 font-mono text-xs font-bold rounded-lg transition-colors whitespace-nowrap ${s===g.id?"bg-yellow-500/20 text-yellow-300 border border-yellow-400/30":"text-zinc-400 hover:text-white hover:bg-zinc-800/60"}`,children:g.label},g.id))}),(s==="all"||s==="iap")&&b.jsxs("div",{className:"flex flex-col gap-3",children:[b.jsxs("h3",{className:"text-xs font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5",children:[b.jsx(G3,{className:"w-4 h-4"})," Compras Integradas (Soporte Offline)"]}),b.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:[{name:"Bolsa Selvática",coins:300,price:"$0.99 (Prueba)",icon:"🍌",color:"border-yellow-500/40"},{name:"Barril de Bananas",coins:1e3,price:"$2.49 (Prueba)",icon:"📦",color:"border-amber-500/60"},{name:"Cofre del Simio Titán",coins:3500,price:"$4.99 (Prueba)",icon:"👑",color:"border-yellow-400"}].map((g,x)=>b.jsxs("div",{className:`p-3.5 rounded-xl border ${g.color} bg-zinc-800/40 flex flex-col justify-between gap-3 text-center`,children:[b.jsx("div",{className:"text-2xl",children:g.icon}),b.jsxs("div",{children:[b.jsx("h4",{className:"font-mono text-xs font-bold text-white",children:g.name}),b.jsxs("p",{className:"font-mono text-sm font-black text-yellow-400 mt-1",children:["+",g.coins," Bananas"]})]}),b.jsxs("button",{type:"button",onClick:()=>p(g.coins,g.name),className:"w-full py-2 rounded-lg bg-yellow-500 hover:bg-yellow-400 text-zinc-950 font-mono text-xs font-bold transition-all shadow active:scale-95 flex items-center justify-center gap-1",children:[b.jsx(xm,{className:"w-3.5 h-3.5"})," ",g.price]})]},x))})]}),s!=="iap"&&b.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:m.map(g=>{const x=o.unlockedItems.includes(g.id)||g.unlockedByDefault;return b.jsxs("div",{className:"p-4 rounded-xl border border-zinc-800 bg-zinc-800/40 flex flex-col justify-between gap-3",children:[b.jsxs("div",{className:"flex items-start gap-3",children:[b.jsx("div",{className:"w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border border-white/20 shadow-inner",style:{backgroundColor:g.previewColor},children:b.jsx("span",{className:"text-xl",children:g.category==="skin"?"👕":g.category==="hat"?"🧢":"🔨"})}),b.jsxs("div",{children:[b.jsx("h4",{className:"font-mono text-sm font-bold text-white",children:g.name}),b.jsx("p",{className:"text-xs text-zinc-400 mt-0.5",children:g.description})]})]}),b.jsxs("div",{className:"flex items-center justify-between pt-2 border-t border-zinc-800",children:[b.jsxs("div",{className:"font-mono text-xs font-bold text-yellow-400 flex items-center gap-1",children:[b.jsx(xo,{className:"w-3.5 h-3.5"}),b.jsx("span",{children:g.price===0?"Gratis":`${g.price} Bananas`})]}),x?b.jsxs("span",{className:"text-emerald-400 font-mono text-xs flex items-center gap-1 font-semibold",children:[b.jsx(gm,{className:"w-3.5 h-3.5"})," Adquirido"]}):b.jsx("button",{type:"button",onClick:()=>h(g),className:"px-3.5 py-1.5 rounded-lg bg-yellow-500 hover:bg-yellow-400 text-zinc-950 font-mono text-xs font-bold transition-all shadow active:scale-95",children:"Comprar"})]})]},g.id)})})]})})},UR=({saveData:o,onUpdateSave:t,onClose:i})=>{const s=o.achievements.filter(d=>d.unlocked).length,l=o.achievements.length,u=Math.round(s/l*100);return b.jsx("div",{id:"modal-achievements",className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm",children:b.jsxs("div",{className:"w-full max-w-2xl bg-zinc-900 border-2 border-emerald-500/40 rounded-2xl p-6 shadow-2xl flex flex-col gap-6 text-white max-h-[90vh] overflow-y-auto",children:[b.jsxs("div",{className:"flex items-center justify-between border-b border-zinc-800 pb-4",children:[b.jsxs("div",{className:"flex items-center gap-3",children:[b.jsx("div",{className:"p-2 rounded-xl bg-emerald-500/20 text-emerald-400",children:b.jsx(LS,{className:"w-6 h-6"})}),b.jsxs("div",{children:[b.jsx("h2",{className:"text-xl font-black font-mono tracking-wide text-emerald-400 uppercase",children:"Logros Desbloqueables"}),b.jsx("p",{className:"text-xs text-zinc-400",children:"Supera desafíos y desbloquea recompensas en bananas doradas"})]})]}),b.jsx("button",{type:"button",onClick:i,className:"p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors",children:b.jsx(Bl,{className:"w-5 h-5"})})]}),b.jsxs("div",{className:"p-4 rounded-xl bg-zinc-800/60 border border-zinc-700/60 flex flex-col gap-2",children:[b.jsxs("div",{className:"flex items-center justify-between font-mono text-xs",children:[b.jsx("span",{className:"text-zinc-300 font-bold",children:"Progreso Total"}),b.jsxs("span",{className:"text-emerald-400 font-bold",children:[s," de ",l," (",u,"%)"]})]}),b.jsx("div",{className:"w-full bg-zinc-700/50 rounded-full h-2.5 overflow-hidden",children:b.jsx("div",{className:"bg-emerald-500 h-full rounded-full transition-all duration-300",style:{width:`${u}%`}})})]}),b.jsx("div",{className:"flex flex-col gap-3",children:o.achievements.map(d=>b.jsxs("div",{className:`p-4 rounded-xl border flex items-center justify-between gap-4 transition-all ${d.unlocked?"bg-zinc-800/70 border-emerald-500/40 shadow-sm":"bg-zinc-900/50 border-zinc-800 opacity-60"}`,children:[b.jsxs("div",{className:"flex items-center gap-3.5",children:[b.jsx("div",{className:`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border ${d.unlocked?"bg-emerald-500/20 border-emerald-400/50 text-emerald-400":"bg-zinc-800 border-zinc-700 text-zinc-500"}`,children:d.unlocked?b.jsx(B3,{className:"w-6 h-6"}):b.jsx(J3,{className:"w-6 h-6"})}),b.jsxs("div",{children:[b.jsxs("h3",{className:"font-mono text-sm font-bold text-white flex items-center gap-2",children:[d.title,d.unlocked&&b.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-normal",children:"Completado"})]}),b.jsx("p",{className:"text-xs text-zinc-400 mt-0.5",children:d.description})]})]}),b.jsxs("div",{className:"flex items-center gap-1.5 shrink-0 px-3 py-1.5 rounded-lg bg-yellow-500/10 border border-yellow-400/20 text-yellow-300 font-mono text-xs font-bold",children:[b.jsx(xo,{className:"w-4 h-4 text-yellow-400"}),b.jsxs("span",{children:["+",d.rewardCoins]})]})]},d.id))})]})})},OR=({saveData:o,onClose:t})=>{const[i,s]=lt.useState("all"),l=o.leaderboard.filter(u=>i==="all"||u.difficulty===i).sort((u,d)=>d.score-u.score);return b.jsx("div",{id:"modal-leaderboard",className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm",children:b.jsxs("div",{className:"w-full max-w-2xl bg-zinc-900 border-2 border-amber-500/40 rounded-2xl p-6 shadow-2xl flex flex-col gap-6 text-white max-h-[90vh] overflow-y-auto",children:[b.jsxs("div",{className:"flex items-center justify-between border-b border-zinc-800 pb-4",children:[b.jsxs("div",{className:"flex items-center gap-3",children:[b.jsx("div",{className:"p-2 rounded-xl bg-amber-500/20 text-amber-400",children:b.jsx(vm,{className:"w-6 h-6"})}),b.jsxs("div",{children:[b.jsx("h2",{className:"text-xl font-black font-mono tracking-wide text-amber-400 uppercase",children:"Tablas de Clasificación Global"}),b.jsx("p",{className:"text-xs text-zinc-400",children:"Compite con amigos y escala en el salón de la fama arcade"})]})]}),b.jsx("button",{type:"button",onClick:t,className:"p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors",children:b.jsx(Bl,{className:"w-5 h-5"})})]}),b.jsx("div",{className:"flex border-b border-zinc-800 gap-1 overflow-x-auto pb-1",children:[{id:"all",label:"Todas las Dificultades"},{id:"facil",label:"Selva Serena"},{id:"normal",label:"Clásico"},{id:"dificil",label:"Furia"},{id:"caos",label:"Caos Salvaje"}].map(u=>b.jsx("button",{type:"button",onClick:()=>s(u.id),className:`px-3.5 py-1.5 font-mono text-xs font-bold rounded-lg transition-colors whitespace-nowrap ${i===u.id?"bg-amber-500/20 text-amber-300 border border-amber-400/30":"text-zinc-400 hover:text-white hover:bg-zinc-800/60"}`,children:u.label},u.id))}),b.jsx("div",{className:"flex flex-col gap-2.5",children:l.map((u,d)=>{const h=d<3,p=d===0?"text-yellow-400 bg-yellow-400/20 border-yellow-400/50":d===1?"text-zinc-300 bg-zinc-300/20 border-zinc-300/50":d===2?"text-amber-600 bg-amber-600/20 border-amber-600/50":"text-zinc-500 bg-zinc-800 border-zinc-700";return b.jsxs("div",{className:`p-3.5 rounded-xl border flex items-center justify-between gap-3 ${u.isLocalUser?"bg-amber-500/10 border-amber-400/50 shadow-md ring-1 ring-amber-400/30":h?"bg-zinc-800/60 border-zinc-700":"bg-zinc-900/40 border-zinc-800/80"}`,children:[b.jsxs("div",{className:"flex items-center gap-3.5",children:[b.jsx("div",{className:`w-9 h-9 rounded-lg border flex items-center justify-center font-mono font-black text-sm shrink-0 ${p}`,children:d===0?"🥇":d===1?"🥈":d===2?"🥉":`#${d+1}`}),b.jsxs("div",{className:"flex items-center gap-2",children:[b.jsx("span",{className:"text-xl",children:u.avatar}),b.jsxs("div",{children:[b.jsxs("div",{className:"flex items-center gap-2",children:[b.jsx("span",{className:"font-mono text-sm font-bold text-white",children:u.playerName}),u.isLocalUser&&b.jsx("span",{className:"text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-400/30",children:"TÚ"})]}),b.jsxs("div",{className:"flex items-center gap-2 text-[11px] font-mono text-zinc-400 mt-0.5",children:[b.jsx("span",{className:"capitalize",children:u.difficulty}),b.jsx("span",{children:"•"}),b.jsxs("span",{children:["Nivel ",u.level]}),b.jsx("span",{children:"•"}),b.jsx("span",{children:u.date})]})]})]})]}),b.jsx("div",{className:"text-right",children:b.jsxs("div",{className:"font-mono text-base font-black text-amber-300",children:[u.score.toLocaleString()," PTS"]})})]},u.id)})})]})})},PR=({mode:o})=>o==="off"?null:b.jsxs("div",{id:"filter-8bit-layer",className:"absolute inset-0 pointer-events-none z-10 overflow-hidden select-none","aria-hidden":"true",children:[(o==="8bit"||o==="crt")&&b.jsx("div",{className:`absolute inset-0 ${o==="crt"?"opacity-35 [background:repeating-linear-gradient(0deg,rgba(0,0,0,0.4)_0px,rgba(0,0,0,0.4)_1.5px,transparent_1.5px,transparent_3px)]":"opacity-22 [background:repeating-linear-gradient(0deg,rgba(0,0,0,0.3)_0px,rgba(0,0,0,0.3)_2px,transparent_2px,transparent_4px)]"}`}),o==="8bit"&&b.jsx("div",{className:"absolute inset-0 opacity-12 mix-blend-overlay",style:{backgroundImage:"radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px)",backgroundSize:"4px 4px"}}),(o==="8bit"||o==="crt")&&b.jsx("div",{className:`absolute inset-0 ${o==="crt"?"bg-[radial-gradient(circle_at_center,transparent_55%,rgba(0,0,0,0.75)_100%)] shadow-[inset_0_0_90px_rgba(0,0,0,0.85)]":"bg-[radial-gradient(circle_at_center,transparent_70%,rgba(0,0,0,0.5)_100%)] shadow-[inset_0_0_50px_rgba(0,0,0,0.6)]"}`}),b.jsx("div",{className:`absolute inset-0 pointer-events-none ${o==="8bit"?"backdrop-contrast-115 backdrop-saturate-125":o==="crt"?"backdrop-contrast-120 backdrop-saturate-130 backdrop-brightness-105":"backdrop-contrast-105 backdrop-saturate-110"}`})]});function zR(){const[o,t]=lt.useState(()=>RM()),[i,s]=lt.useState("menu"),[l,u]=lt.useState("none"),[d,h]=lt.useState(!1),[p,m]=lt.useState(null),[g,x]=lt.useState(1),[v,M]=lt.useState("normal"),[w,D]=lt.useState(!1),[y,S]=lt.useState(null),[z,k]=lt.useState(null),[C,P]=lt.useState(null),[U,F]=lt.useState(!1),T=lt.useRef(null),N=lt.useRef(null),V=lt.useRef(null),X=lt.useRef(0),Z=lt.useRef({moveForward:0,moveRight:0,jump:!1,action:!1,lookDeltaX:0,lookDeltaY:0}),se=lt.useRef({moveForward:0,moveRight:0,jump:!1,action:!1,lookDeltaX:0,lookDeltaY:0}),K=lt.useRef({}),ne=lt.useRef(o.settings.keyBindings||co);lt.useEffect(()=>{ne.current=o.settings.keyBindings||co},[o.settings.keyBindings]),lt.useEffect(()=>{const ve=()=>{F(NM(o.settings.touchControlsForced))};return ve(),window.addEventListener("resize",ve),()=>window.removeEventListener("resize",ve)},[o.settings.touchControlsForced]);const W=lt.useCallback(ve=>{t(ve),CM(ve),N.current&&ve.settings&&N.current.setFilterAndResolution(ve.settings.filter8Bit||"8bit",ve.settings.renderResolution||"8bit_retro")},[]),j=lt.useCallback(()=>{const ve=["8bit","crt","smooth","off"],I=o.settings.filter8Bit||"8bit",$=(ve.indexOf(I)+1)%ve.length,_e=ve[$],G=_e==="8bit"?"8bit_retro":_e==="crt"?"arcade":"high",te={...o,settings:{...o.settings,filter8Bit:_e,renderResolution:G}};W(te),ce(`Filtro: ${_e.toUpperCase()}`,"#f59e0b"),gt.playCoin()},[o,W]),ce=(ve,I)=>{S({text:ve,color:I}),setTimeout(()=>S(null),1800)};lt.useEffect(()=>{const ve=$=>{i==="playing"&&!d&&["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes($.code)&&$.preventDefault(),K.current[$.code]=!0,$.code==="Escape"&&i==="playing"&&!p&&h(_e=>!_e)},I=$=>{K.current[$.code]=!1};return window.addEventListener("keydown",ve),window.addEventListener("keyup",I),()=>{window.removeEventListener("keydown",ve),window.removeEventListener("keyup",I)}},[i,p]),lt.useEffect(()=>{if(i!=="playing")return;const ve=_e=>{document.pointerLockElement&&(Z.current.lookDeltaX+=_e.movementX,Z.current.lookDeltaY+=_e.movementY)},I=_e=>{if(!U&&T.current&&!document.pointerLockElement&&!d&&!p)try{T.current.requestPointerLock()}catch{}_e.button===0&&(Z.current.action=!0)},$=_e=>{_e.button===0&&(Z.current.action=!1)};return document.addEventListener("mousemove",ve),document.addEventListener("mousedown",I),document.addEventListener("mouseup",$),()=>{document.removeEventListener("mousemove",ve),document.removeEventListener("mousedown",I),document.removeEventListener("mouseup",$),document.pointerLockElement&&document.exitPointerLock()}},[i,U,d,p]);const oe=(ve,I,$)=>{x(ve),M(I),D($),h(!1),m(null),s("playing")};lt.useEffect(()=>{if(i!=="playing"||!T.current)return;const ve=new T3(T.current,g,v,w,o);N.current=ve;let I=0,$=-1,_e=-1,G=-1,te=!1;ve.onStateUpdate=(Te,le)=>{const Ae=performance.now(),De=Te.hammerTimeLeft>0;(Te.lives!==$||Te.score!==_e||Te.coinsEarned!==G||De!==te||Ae-I>85)&&(I=Ae,$=Te.lives,_e=Te.score,G=Te.coinsEarned,te=De,k({...Te}),le&&P({...le}))},ve.onFloatingText=(Te,le)=>{ce(Te,le)},ve.onAchievementTrigger=Te=>{const le=o.achievements.find(Ae=>Ae.id===Te);if(le&&!le.unlocked){le.unlocked=!0,le.unlockedAt=new Date().toISOString();const Ae=o.stats.totalCoins+le.rewardCoins;ce(`🏆 ¡Logro Desbloqueado: ${le.title}!`,"#10b981"),gt.playCoin(),W({...o,stats:{...o.stats,totalCoins:Ae}})}},ve.onGameOver=(Te,le)=>{var nt;const Ae=Te>o.stats.highScore,De=Math.max(o.stats.highScore,Te),Ue={...o,stats:{...o.stats,highScore:De,gamesPlayed:o.stats.gamesPlayed+1}};W(Ue),m({isVictory:!1,score:Te,level:le,coinsEarned:ve.p1.coinsEarned+(((nt=ve.p2)==null?void 0:nt.coinsEarned)||0)}),Ae&&ce("¡NUEVO RÉCORD HISTÓRICO!","#facc15")},ve.onVictory=(Te,le,Ae)=>{const De=Math.min(4,le+1),Ue=Math.max(o.stats.maxLevelUnlocked,De),nt=Math.max(o.stats.highScore,Te),st={...o,stats:{...o.stats,highScore:nt,totalCoins:o.stats.totalCoins+Ae,maxLevelUnlocked:Ue,currentLevel:De,gamesPlayed:o.stats.gamesPlayed+1,coopWins:w?o.stats.coopWins+1:o.stats.coopWins}};W(st),m({isVictory:!0,score:Te,level:le,coinsEarned:Ae})},X.current=performance.now();const be=Te=>{const le=(Te-X.current)/1e3;X.current=Te;const Ae=Math.min(.033,Math.max(.001,le));if(N.current&&!d&&!p){const De=K.current,Ue=ne.current;let nt=Z.current.moveForward,st=Z.current.moveRight,Ye=!1,$e=!1;De[Ue.forward]||Ue.forward!=="KeyW"&&De.KeyW?nt=1:(De[Ue.backward]||Ue.backward!=="KeyS"&&De.KeyS)&&(nt=-1),Ue.left==="ArrowLeft"?(De.ArrowLeft&&(Ye=!0),(De.KeyA||De.Comma||De.AltLeft&&De.ArrowLeft)&&(st=-1)):(De[Ue.left]||De.KeyA)&&(st=-1),Ue.right==="ArrowRight"?(De.ArrowRight&&($e=!0),(De.KeyD||De.Period||De.AltLeft&&De.ArrowRight)&&(st=1)):(De[Ue.right]||De.KeyD)&&(st=1);const Mt=De[Ue.jump]||De.Space||Z.current.jump,Vt=De[Ue.action]||De.ControlLeft||De.ControlRight||De.KeyF||De.KeyE||Z.current.action;let yt=se.current.moveForward,kt=se.current.moveRight,Q=!1,Qt=!1;const Et=Ue.forward==="ArrowUp";Et?(De.KeyW?yt=1:De.KeyS&&(yt=-1),De.KeyD?kt=1:De.KeyA&&(kt=-1)):(De.ArrowUp?yt=1:De.ArrowDown&&(yt=-1),De.ArrowRight?(Qt=!0,kt=1):De.ArrowLeft&&(Q=!0,kt=-1));const B=Et?De.ShiftLeft||De.KeyJ||se.current.jump:De.Enter||De.ShiftRight||De.Numpad0||se.current.jump,E=Et?De.KeyE||De.KeyK||se.current.action:De.KeyL||De.KeyK||De.NumpadDecimal||se.current.action,re={moveForward:nt,moveRight:st,turnLeft:Ye,turnRight:$e,jump:Mt,action:Vt,lookDeltaX:Z.current.lookDeltaX,lookDeltaY:Z.current.lookDeltaY},fe={moveForward:yt,moveRight:kt,turnLeft:Q,turnRight:Qt,jump:B,action:E,lookDeltaX:se.current.lookDeltaX,lookDeltaY:se.current.lookDeltaY};Z.current.lookDeltaX=0,Z.current.lookDeltaY=0,se.current.lookDeltaX=0,se.current.lookDeltaY=0,N.current.update(Ae,re,w?fe:void 0),N.current.render()}V.current=requestAnimationFrame(be)};return V.current=requestAnimationFrame(be),()=>{V.current!==null&&cancelAnimationFrame(V.current),ve.destroy(),N.current=null}},[i,g,v,w,d,p]);const O=ve=>{Z.current={...Z.current,...ve}},L=ve=>{se.current={...se.current,...ve}},Ce=ve=>{if(!p)return;const $=[{id:Date.now().toString(),playerName:ve,score:p.score,level:p.level,difficulty:v,date:new Date().toISOString().split("T")[0],avatar:"🦍",isLocalUser:!0},...o.leaderboard].sort((_e,G)=>G.score-_e.score);W({...o,leaderboard:$})};return b.jsxs("div",{id:"simio-salvaje-root",className:"relative w-full h-screen overflow-hidden bg-zinc-950 font-sans select-none",children:[i==="menu"&&b.jsx(AR,{saveData:o,onStartGame:oe,onOpenCustomization:()=>u("customization"),onOpenShop:()=>u("shop"),onOpenAchievements:()=>u("achievements"),onOpenLeaderboard:()=>u("leaderboard"),onOpenControlsConfig:()=>u("controls"),onUpdateSave:W}),i==="playing"&&b.jsxs("div",{id:"gameplay-viewport",className:"relative w-full h-full overflow-hidden",children:[b.jsx("div",{ref:T,className:"w-full h-full cursor-crosshair overflow-hidden"}),b.jsx(PR,{mode:o.settings.filter8Bit||"8bit"}),z&&b.jsx(wR,{p1:z,p2:C,isCoop:w,highScore:o.stats.highScore,levelNum:g,difficulty:v,isTouch:U,keyBindings:o.settings.keyBindings,filterMode:o.settings.filter8Bit,onToggleFilter:j,onPause:()=>h(!0),floatingMessage:y}),U&&!d&&!p&&b.jsxs(b.Fragment,{children:[b.jsx(q_,{onUpdateInput:O,idSuffix:"-p1"}),w&&b.jsx(q_,{onUpdateInput:L,idSuffix:"-p2",isCoopPlayer2:!0})]}),d&&b.jsx(RR,{onResume:()=>h(!1),onRestart:()=>{h(!1),oe(g,v,w)},onReturnToMenu:()=>{h(!1),gt.stopMusic(),s("menu")},onOpenControlsConfig:()=>u("controls"),saveData:o,onUpdateSave:W}),p&&b.jsx(NR,{isVictory:p.isVictory,score:p.score,level:p.level,coinsEarned:p.coinsEarned,onRestart:()=>oe(g,v,w),onNextLevel:()=>oe(Math.min(4,g+1),v,w),onReturnToMenu:()=>{m(null),gt.stopMusic(),s("menu")},onSaveScore:Ce})]}),l==="controls"&&b.jsx(TR,{saveData:o,onUpdateSave:W,onClose:()=>u("none")}),l==="customization"&&b.jsx(DR,{saveData:o,onUpdateSave:W,onClose:()=>u("none")}),l==="shop"&&b.jsx(LR,{saveData:o,onUpdateSave:W,onClose:()=>u("none")}),l==="achievements"&&b.jsx(UR,{saveData:o,onUpdateSave:W,onClose:()=>u("none")}),l==="leaderboard"&&b.jsx(OR,{saveData:o,onClose:()=>u("none")})]})}EM.createRoot(document.getElementById("root")).render(b.jsx(lt.StrictMode,{children:b.jsx(zR,{})}));
