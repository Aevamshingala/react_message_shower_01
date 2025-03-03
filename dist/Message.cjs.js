(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('@keyframes fadeInSlide{0%{opacity:0;transform:translateY(-60px)}to{opacity:1;transform:translateY(0)}}@keyframes fadeOutSlide{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-30px);display:none}}.frame{background:linear-gradient(135deg,#6a11cb,#2575fc);color:#fff;max-width:350px;width:100%;min-height:100px;border-radius:15px;opacity:0;transform:translateY(-20px);animation:fadeInSlide .8s ease-out forwards;position:fixed;top:8%;right:5%;z-index:1000;box-shadow:0 10px 30px #0000004d;overflow:hidden;font-family:Segoe UI,sans-serif;padding:20px}.hide{animation:fadeOutSlide .5s ease-out forwards}.header{display:flex;justify-content:space-between;align-items:center}.title{margin:0;font-size:20px;font-weight:600}.exitbutton{background:none;border:none;cursor:pointer;padding:5px;display:flex;align-items:center;justify-content:center;outline:none}.exitbutton:focus{outline:none}.cancel{position:relative;width:20px;height:20px}.cancel:before,.cancel:after{content:"";position:absolute;width:100%;height:2px;background:#fff;border-radius:1px;top:50%;left:50%;transform:translate(-50%,-50%) rotate(45deg)}.cancel:after{transform:translate(-50%,-50%) rotate(-45deg)}.message{margin:15px 0 0;font-size:14px;line-height:1.5}')),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
"use strict";const H=require("react");var S={exports:{}},C={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ve;function pe(){if(ve)return C;ve=1;var i=Symbol.for("react.transitional.element"),_=Symbol.for("react.fragment");function m(h,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var v in l)v!=="key"&&(c[v]=l[v])}else c=l;return l=c.ref,{$$typeof:i,type:h,key:f,ref:l!==void 0?l:null,props:c}}return C.Fragment=_,C.jsx=m,C.jsxs=m,C}var N={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ee;function Ce(){return Ee||(Ee=1,process.env.NODE_ENV!=="production"&&function(){function i(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===je?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Y:return"Fragment";case he:return"Portal";case Z:return"Profiler";case L:return"StrictMode";case M:return"Suspense";case W:return"SuspenseList"}if(typeof e=="object")switch(typeof e.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),e.$$typeof){case Q:return(e.displayName||"Context")+".Provider";case I:return(e._context.displayName||"Context")+".Consumer";case $:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case U:return r=e.displayName||null,r!==null?r:i(e.type)||"Memo";case q:r=e._payload,e=e._init;try{return i(e(r))}catch{}}return null}function _(e){return""+e}function m(e){try{_(e);var r=!1}catch{r=!0}if(r){r=console;var t=r.error,n=typeof Symbol=="function"&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t.call(r,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",n),_(e)}}function h(){}function l(){if(w===0){ee=console.log,re=console.info,te=console.warn,oe=console.error,ne=console.group,ae=console.groupCollapsed,se=console.groupEnd;var e={configurable:!0,enumerable:!0,value:h,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}w++}function c(){if(w--,w===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:x({},e,{value:ee}),info:x({},e,{value:re}),warn:x({},e,{value:te}),error:x({},e,{value:oe}),group:x({},e,{value:ne}),groupCollapsed:x({},e,{value:ae}),groupEnd:x({},e,{value:se})})}0>w&&console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}function f(e){if(z===void 0)try{throw Error()}catch(t){var r=t.stack.trim().match(/\n( *(at )?)/);z=r&&r[1]||"",ue=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+z+e+ue}function v(e,r){if(!e||V)return"";var t=G.get(e);if(t!==void 0)return t;V=!0,t=Error.prepareStackTrace,Error.prepareStackTrace=void 0;var n=null;n=g.H,g.H=null,l();try{var s={DetermineComponentFrameRoot:function(){try{if(r){var b=function(){throw Error()};if(Object.defineProperty(b.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(b,[])}catch(d){var k=d}Reflect.construct(e,[],b)}else{try{b.call()}catch(d){k=d}e.call(b.prototype)}}else{try{throw Error()}catch(d){k=d}(b=e())&&typeof b.catch=="function"&&b.catch(function(){})}}catch(d){if(d&&k&&typeof d.stack=="string")return[d.stack,k.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=s.DetermineComponentFrameRoot(),E=o[0],y=o[1];if(E&&y){var u=E.split(`
`),T=y.split(`
`);for(o=a=0;a<u.length&&!u[a].includes("DetermineComponentFrameRoot");)a++;for(;o<T.length&&!T[o].includes("DetermineComponentFrameRoot");)o++;if(a===u.length||o===T.length)for(a=u.length-1,o=T.length-1;1<=a&&0<=o&&u[a]!==T[o];)o--;for(;1<=a&&0<=o;a--,o--)if(u[a]!==T[o]){if(a!==1||o!==1)do if(a--,o--,0>o||u[a]!==T[o]){var p=`
`+u[a].replace(" at new "," at ");return e.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",e.displayName)),typeof e=="function"&&G.set(e,p),p}while(1<=a&&0<=o);break}}}finally{V=!1,g.H=n,c(),Error.prepareStackTrace=t}return u=(u=e?e.displayName||e.name:"")?f(u):"",typeof e=="function"&&G.set(e,u),u}function R(e){if(e==null)return"";if(typeof e=="function"){var r=e.prototype;return v(e,!(!r||!r.isReactComponent))}if(typeof e=="string")return f(e);switch(e){case M:return f("Suspense");case W:return f("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case $:return e=v(e.render,!1),e;case U:return R(e.type);case q:r=e._payload,e=e._init;try{return R(e(r))}catch{}}return""}function O(){var e=g.A;return e===null?null:e.getOwner()}function be(e){if(D.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function me(e,r){function t(){le||(le=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",r))}t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}function ge(){var e=i(this.type);return ie[e]||(ie[e]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),e=this.props.ref,e!==void 0?e:null}function xe(e,r,t,n,s,a){return t=a.ref,e={$$typeof:P,type:e,key:r,props:a,_owner:s},(t!==void 0?t:null)!==null?Object.defineProperty(e,"ref",{enumerable:!1,get:ge}):Object.defineProperty(e,"ref",{enumerable:!1,value:null}),e._store={},Object.defineProperty(e._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(e,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.freeze&&(Object.freeze(e.props),Object.freeze(e)),e}function X(e,r,t,n,s,a){if(typeof e=="string"||typeof e=="function"||e===Y||e===Z||e===L||e===M||e===W||e===ye||typeof e=="object"&&e!==null&&(e.$$typeof===q||e.$$typeof===U||e.$$typeof===Q||e.$$typeof===I||e.$$typeof===$||e.$$typeof===Re||e.getModuleId!==void 0)){var o=r.children;if(o!==void 0)if(n)if(J(o)){for(n=0;n<o.length;n++)B(o[n],e);Object.freeze&&Object.freeze(o)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else B(o,e)}else o="",(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(o+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."),e===null?n="null":J(e)?n="array":e!==void 0&&e.$$typeof===P?(n="<"+(i(e.type)||"Unknown")+" />",o=" Did you accidentally export a JSX literal instead of a component?"):n=typeof e,console.error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",n,o);if(D.call(r,"key")){o=i(e);var E=Object.keys(r).filter(function(u){return u!=="key"});n=0<E.length?"{key: someKey, "+E.join(": ..., ")+": ...}":"{key: someKey}",ce[o+n]||(E=0<E.length?"{"+E.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,n,o,E,o),ce[o+n]=!0)}if(o=null,t!==void 0&&(m(t),o=""+t),be(r)&&(m(r.key),o=""+r.key),"key"in r){t={};for(var y in r)y!=="key"&&(t[y]=r[y])}else t=r;return o&&me(t,typeof e=="function"?e.displayName||e.name||"Unknown":e),xe(e,o,a,s,O(),t)}function B(e,r){if(typeof e=="object"&&e&&e.$$typeof!==we){if(J(e))for(var t=0;t<e.length;t++){var n=e[t];A(n)&&F(n,r)}else if(A(e))e._store&&(e._store.validated=1);else if(e===null||typeof e!="object"?t=null:(t=K&&e[K]||e["@@iterator"],t=typeof t=="function"?t:null),typeof t=="function"&&t!==e.entries&&(t=t.call(e),t!==e))for(;!(e=t.next()).done;)A(e.value)&&F(e.value,r)}}function A(e){return typeof e=="object"&&e!==null&&e.$$typeof===P}function F(e,r){if(e._store&&!e._store.validated&&e.key==null&&(e._store.validated=1,r=Te(r),!fe[r])){fe[r]=!0;var t="";e&&e._owner!=null&&e._owner!==O()&&(t=null,typeof e._owner.tag=="number"?t=i(e._owner.type):typeof e._owner.name=="string"&&(t=e._owner.name),t=" It was passed a child from "+t+".");var n=g.getCurrentStack;g.getCurrentStack=function(){var s=R(e.type);return n&&(s+=n()||""),s},console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',r,t),g.getCurrentStack=n}}function Te(e){var r="",t=O();return t&&(t=i(t.type))&&(r=`

Check the render method of \``+t+"`."),r||(e=i(e))&&(r=`

Check the top-level render call using <`+e+">."),r}var _e=H,P=Symbol.for("react.transitional.element"),he=Symbol.for("react.portal"),Y=Symbol.for("react.fragment"),L=Symbol.for("react.strict_mode"),Z=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),Q=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),M=Symbol.for("react.suspense"),W=Symbol.for("react.suspense_list"),U=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),ye=Symbol.for("react.offscreen"),K=Symbol.iterator,je=Symbol.for("react.client.reference"),g=_e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=Object.prototype.hasOwnProperty,x=Object.assign,Re=Symbol.for("react.client.reference"),J=Array.isArray,w=0,ee,re,te,oe,ne,ae,se;h.__reactDisabledLog=!0;var z,ue,V=!1,G=new(typeof WeakMap=="function"?WeakMap:Map),we=Symbol.for("react.client.reference"),le,ie={},ce={},fe={};N.Fragment=Y,N.jsx=function(e,r,t,n,s){return X(e,r,t,!1,n,s)},N.jsxs=function(e,r,t,n,s){return X(e,r,t,!0,n,s)}}()),N}var de;function Ne(){return de||(de=1,process.env.NODE_ENV==="production"?S.exports=pe():S.exports=Ce()),S.exports}var j=Ne();function ke({title:i="Notification",message:_="This is a creative notification message!",className:m="",titleColor:h="",messageColor:l="",customStyles:c={}}){const[f,v]=H.useState(!1);return H.useEffect(()=>{const R=setTimeout(()=>{v(!0)},5e3);return()=>clearTimeout(R)},[]),j.jsxs("div",{className:`frame ${m} ${f?"hide":""}`,style:c,children:[j.jsxs("div",{className:"header",children:[j.jsx("h1",{className:"title",style:{color:h},children:i}),j.jsx("button",{className:"exitbutton",onClick:()=>v(!0),children:j.jsx("span",{className:"cancel"})})]}),j.jsx("p",{className:"message",style:{color:l},children:_})]})}module.exports=ke;
