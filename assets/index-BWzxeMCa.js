import{s as B,h as D,r as A,E as W,c as H,a as P,b as L,d as T,e as _,C as J,B as X,j as p,I as G,f as I}from"./index-DtxUwsDR.js";import{L as Y}from"./index-Cf7rB8ia.js";var R={exports:{}},r={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N;function K(){if(N)return r;N=1;var t=typeof Symbol=="function"&&Symbol.for,s=t?Symbol.for("react.element"):60103,n=t?Symbol.for("react.portal"):60106,u=t?Symbol.for("react.fragment"):60107,f=t?Symbol.for("react.strict_mode"):60108,a=t?Symbol.for("react.profiler"):60114,i=t?Symbol.for("react.provider"):60109,g=t?Symbol.for("react.context"):60110,v=t?Symbol.for("react.async_mode"):60111,m=t?Symbol.for("react.concurrent_mode"):60111,h=t?Symbol.for("react.forward_ref"):60112,b=t?Symbol.for("react.suspense"):60113,w=t?Symbol.for("react.suspense_list"):60120,d=t?Symbol.for("react.memo"):60115,c=t?Symbol.for("react.lazy"):60116,y=t?Symbol.for("react.block"):60121,$=t?Symbol.for("react.fundamental"):60117,x=t?Symbol.for("react.responder"):60118,S=t?Symbol.for("react.scope"):60119;function o(e){if(typeof e=="object"&&e!==null){var l=e.$$typeof;switch(l){case s:switch(e=e.type,e){case v:case m:case u:case a:case f:case b:return e;default:switch(e=e&&e.$$typeof,e){case g:case h:case c:case d:case i:return e;default:return l}}case n:return l}}}function j(e){return o(e)===m}return r.AsyncMode=v,r.ConcurrentMode=m,r.ContextConsumer=g,r.ContextProvider=i,r.Element=s,r.ForwardRef=h,r.Fragment=u,r.Lazy=c,r.Memo=d,r.Portal=n,r.Profiler=a,r.StrictMode=f,r.Suspense=b,r.isAsyncMode=function(e){return j(e)||o(e)===v},r.isConcurrentMode=j,r.isContextConsumer=function(e){return o(e)===g},r.isContextProvider=function(e){return o(e)===i},r.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===s},r.isForwardRef=function(e){return o(e)===h},r.isFragment=function(e){return o(e)===u},r.isLazy=function(e){return o(e)===c},r.isMemo=function(e){return o(e)===d},r.isPortal=function(e){return o(e)===n},r.isProfiler=function(e){return o(e)===a},r.isStrictMode=function(e){return o(e)===f},r.isSuspense=function(e){return o(e)===b},r.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===u||e===m||e===a||e===f||e===b||e===w||typeof e=="object"&&e!==null&&(e.$$typeof===c||e.$$typeof===d||e.$$typeof===i||e.$$typeof===g||e.$$typeof===h||e.$$typeof===$||e.$$typeof===x||e.$$typeof===S||e.$$typeof===y)},r.typeOf=o,r}var M;function V(){return M||(M=1,R.exports=K()),R.exports}var O,C;function Q(){if(C)return O;C=1;var t=V(),s={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},n={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},u={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},f={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},a={};a[t.ForwardRef]=u,a[t.Memo]=f;function i(c){return t.isMemo(c)?f:a[c.$$typeof]||s}var g=Object.defineProperty,v=Object.getOwnPropertyNames,m=Object.getOwnPropertySymbols,h=Object.getOwnPropertyDescriptor,b=Object.getPrototypeOf,w=Object.prototype;function d(c,y,$){if(typeof y!="string"){if(w){var x=b(y);x&&x!==w&&d(c,x,$)}var S=v(y);m&&(S=S.concat(m(y)));for(var o=i(c),j=i(y),e=0;e<S.length;++e){var l=S[e];if(!n[l]&&!($&&$[l])&&!(j&&j[l])&&!(o&&o[l])){var q=h(y,l);try{g(c,l,q)}catch{}}}}return c}return O=d,O}Q();var z=function(s,n){var u=arguments;if(n==null||!D.call(n,"css"))return A.createElement.apply(void 0,u);var f=u.length,a=new Array(f);a[0]=W,a[1]=H(s,n);for(var i=2;i<f;i++)a[i]=u[i];return A.createElement.apply(null,a)};(function(t){var s;s||(s=t.JSX||(t.JSX={}))})(z||(z={}));function U(){for(var t=arguments.length,s=new Array(t),n=0;n<t;n++)s[n]=arguments[n];return B(s)}const Z="/zyphora-crypto/assets/hero-C2NgNqG7.png",k={background:"linear-gradient(-90deg, #ffffff, #859fbc, #3b4f63, #6786ac)",WebkitBackgroundClip:"text",WebkitTextFillColor:P.transparent,backgroundClip:"text",color:P.transparent},E={borderRadius:L.lg,padding:"1.5rem",noBg:{background:P.transparent,color:P.white}},F=U`
  .title {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }

  .description {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`,ee=_(J)`
  min-height: 100dvh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;
  justify-content: center;
  align-items: center;

  ${T.tablet} {
    gap: 1rem;
    min-height: inherit;
  }

  ${T.mobile} {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`,re=_(X)`
  color: ${P.white};

  .title {
    font-size: 4rem;
    font-weight: 700;
    line-height: 4.5rem;
  }

  .description {
    font-size: 1.15rem;
    line-height: 2rem;
  }

  ${T.tablet} {
    ${F}
  }

  ${T.mobile} {
    ${F}
  }
`,te=_.div`
  display: flex;
  gap: 0.8rem;
  margin-top: 1rem;
`,ae=()=>p.jsxs(ee,{children:[p.jsx(G,{src:Z,alt:"hero-banner",$fit:"contain",$ratio:"3 / 4"}),p.jsxs(re,{children:[p.jsxs("h1",{className:"title",children:[p.jsx("span",{style:k,children:"Trusted & Secure"})," Trading Crypto Wallet"]}),p.jsx("p",{className:"description",children:"You might wonder why a designer would choose to use Morem text Paragraphs in English or their native language."}),p.jsxs(te,{children:[p.jsx(I,{style:E,type:"primary",children:"Get Started"}),p.jsx(I,{style:{...E,...E.noBg},icon:p.jsx(Y,{}),children:"How it works"})]})]})]});export{ae as default};
