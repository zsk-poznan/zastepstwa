(self.webpackChunk_strapi_admin=self.webpackChunk_strapi_admin||[]).push([[6925],{9799:function(ie,qt,Y){var G=Y(98399);/*!
 * Font Awesome Free 6.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */(function(E,ft){ft(qt)})(this,function(E){"use strict";function ft(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,a)}return e}function l(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?ft(Object(e),!0).forEach(function(a){X(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):ft(Object(e)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}function lt(t){return lt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},lt(t)}function $(){$=function(r,o){return new e(r,void 0,o)};var t=RegExp.prototype,n=new WeakMap;function e(r,o,i){var s=new RegExp(r,o);return n.set(s,i||n.get(r)),nt(s,e.prototype)}function a(r,o){var i=n.get(o);return Object.keys(i).reduce(function(s,c){return s[c]=r[i[c]],s},Object.create(null))}return Qt(e,RegExp),e.prototype.exec=function(r){var o=t.exec.call(this,r);return o&&(o.groups=a(o,this)),o},e.prototype[Symbol.replace]=function(r,o){if(typeof o=="string"){var i=n.get(this);return t[Symbol.replace].call(this,r,o.replace(/\$<([^>]+)>/g,function(c,b){return"$"+i[b]}))}if(typeof o=="function"){var s=this;return t[Symbol.replace].call(this,r,function(){var c=arguments;return typeof c[c.length-1]!="object"&&(c=[].slice.call(c)).push(a(c,s)),o.apply(this,c)})}return t[Symbol.replace].call(this,r,o)},$.apply(this,arguments)}function Rt(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function R(t,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function ct(t,n,e){return n&&R(t.prototype,n),e&&R(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function X(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function Qt(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&nt(t,n)}function nt(t,n){return nt=Object.setPrototypeOf||function(a,r){return a.__proto__=r,a},nt(t,n)}function et(t,n){return Zt(t)||tn(t,n)||Lt(t,n)||nn()}function ut(t){return Jt(t)||yt(t)||Lt(t)||Dt()}function Jt(t){if(Array.isArray(t))return kt(t)}function Zt(t){if(Array.isArray(t))return t}function yt(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function tn(t,n){var e=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(e!=null){var a=[],r=!0,o=!1,i,s;try{for(e=e.call(t);!(r=(i=e.next()).done)&&(a.push(i.value),!(n&&a.length===n));r=!0);}catch(c){o=!0,s=c}finally{try{!r&&e.return!=null&&e.return()}finally{if(o)throw s}}return a}}function Lt(t,n){if(!!t){if(typeof t=="string")return kt(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return kt(t,n)}}function kt(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,a=new Array(n);e<n;e++)a[e]=t[e];return a}function Dt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function nn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var jt=function(){},wt={},xt={},At=null,zt={mark:jt,measure:jt};try{typeof window!="undefined"&&(wt=window),typeof document!="undefined"&&(xt=document),typeof MutationObserver!="undefined"&&(At=MutationObserver),typeof performance!="undefined"&&(zt=performance)}catch(t){}var Ft=wt.navigator||{},mt=Ft.userAgent,Yt=mt===void 0?"":mt,_=wt,y=xt,f=At,u=zt,m=!!_.document,g=!!y.documentElement&&!!y.head&&typeof y.addEventListener=="function"&&typeof y.createElement=="function",w=~Yt.indexOf("MSIE")||~Yt.indexOf("Trident/"),k="___FONT_AWESOME___",U=16,K="fa",I="svg-inline--fa",A="data-fa-i2svg",N="data-fa-pseudo-element",Ot="data-fa-pseudo-element-pending",at="data-prefix",rt="data-icon",it="fontawesome-i2svg",Et="async",W=["HTML","HEAD","STYLE","SCRIPT"],z=function(){try{return!0}catch(t){return!1}}(),V={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},q={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},St={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},dt={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},oe=/fa[srltdbk\-\ ]/,An="fa-layers-text",se=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,fe={"900":"fas","400":"far",normal:"far","300":"fal","100":"fat"},On=[1,2,3,4,5,6,7,8,9,10],le=On.concat([11,12,13,14,15,16,17,18,19,20]),ce=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ot={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ue=[].concat(ut(Object.keys(q)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ot.GROUP,ot.SWAP_OPACITY,ot.PRIMARY,ot.SECONDARY]).concat(On.map(function(t){return"".concat(t,"x")})).concat(le.map(function(t){return"w-".concat(t)})),En=_.FontAwesomeConfig||{};function me(t){var n=y.querySelector("script["+t+"]");if(n)return n.getAttribute(t)}function de(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(y&&typeof y.querySelector=="function"){var ve=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];ve.forEach(function(t){var n=et(t,2),e=n[0],a=n[1],r=de(me(e));r!=null&&(En[a]=r)})}var pe={familyPrefix:K,styleDefault:"solid",replacementClass:I,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Pt=l(l({},pe),En);Pt.autoReplaceSvg||(Pt.observeMutations=!1);var p={};Object.keys(Pt).forEach(function(t){Object.defineProperty(p,t,{enumerable:!0,set:function(e){Pt[t]=e,$t.forEach(function(a){return a(p)})},get:function(){return Pt[t]}})}),_.FontAwesomeConfig=p;var $t=[];function be(t){return $t.push(t),function(){$t.splice($t.indexOf(t),1)}}var Q=U,F={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ge(t){if(!(!t||!g)){var n=y.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=t;for(var e=y.head.childNodes,a=null,r=e.length-1;r>-1;r--){var o=e[r],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(a=o)}return y.head.insertBefore(n,a),t}}var he="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function _t(){for(var t=12,n="";t-- >0;)n+=he[Math.random()*62|0];return n}function vt(t){for(var n=[],e=(t||[]).length>>>0;e--;)n[e]=t[e];return n}function en(t){return t.classList?vt(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(n){return n})}function Sn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ye(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,'="').concat(Sn(t[e]),'" ')},"").trim()}function Ut(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,": ").concat(t[e].trim(),";")},"")}function an(t){return t.size!==F.size||t.x!==F.x||t.y!==F.y||t.rotate!==F.rotate||t.flipX||t.flipY}function ke(t){var n=t.transform,e=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(e/2," 256)")},o="translate(".concat(n.x*32,", ").concat(n.y*32,") "),i="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),s="rotate(".concat(n.rotate," 0 0)"),c={transform:"".concat(o," ").concat(i," ").concat(s)},b={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:c,path:b}}function we(t){var n=t.transform,e=t.width,a=e===void 0?U:e,r=t.height,o=r===void 0?U:r,i=t.startCentered,s=i===void 0?!1:i,c="";return s&&w?c+="translate(".concat(n.x/Q-a/2,"em, ").concat(n.y/Q-o/2,"em) "):s?c+="translate(calc(-50% + ".concat(n.x/Q,"em), calc(-50% + ").concat(n.y/Q,"em)) "):c+="translate(".concat(n.x/Q,"em, ").concat(n.y/Q,"em) "),c+="scale(".concat(n.size/Q*(n.flipX?-1:1),", ").concat(n.size/Q*(n.flipY?-1:1),") "),c+="rotate(".concat(n.rotate,"deg) "),c}var xe=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Pn(){var t=K,n=I,e=p.familyPrefix,a=p.replacementClass,r=xe;if(e!==t||a!==n){var o=new RegExp("\\.".concat(t,"\\-"),"g"),i=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(n),"g");r=r.replace(o,".".concat(e,"-")).replace(i,"--".concat(e,"-")).replace(s,".".concat(a))}return r}var _n=!1;function rn(){p.autoAddCss&&!_n&&(ge(Pn()),_n=!0)}var Ae={mixout:function(){return{dom:{css:Pn,insertCss:rn}}},hooks:function(){return{beforeDOMElementCreation:function(){rn()},beforeI2svg:function(){rn()}}}},H=_||{};H[k]||(H[k]={}),H[k].styles||(H[k].styles={}),H[k].hooks||(H[k].hooks={}),H[k].shims||(H[k].shims=[]);var L=H[k],In=[],Oe=function t(){y.removeEventListener("DOMContentLoaded",t),Wt=1,In.map(function(n){return n()})},Wt=!1;g&&(Wt=(y.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(y.readyState),Wt||y.addEventListener("DOMContentLoaded",Oe));function Ee(t){!g||(Wt?setTimeout(t,0):In.push(t))}function It(t){var n=t.tag,e=t.attributes,a=e===void 0?{}:e,r=t.children,o=r===void 0?[]:r;return typeof t=="string"?Sn(t):"<".concat(n," ").concat(ye(a),">").concat(o.map(It).join(""),"</").concat(n,">")}function Cn(t,n,e){if(t&&t[n]&&t[n][e])return{prefix:n,iconName:e,icon:t[n][e]}}var Se=function(n,e){return function(a,r,o,i){return n.call(e,a,r,o,i)}},on=function(n,e,a,r){var o=Object.keys(n),i=o.length,s=r!==void 0?Se(e,r):e,c,b,d;for(a===void 0?(c=1,d=n[o[0]]):(c=0,d=a);c<i;c++)b=o[c],d=s(d,n[b],b,n);return d};function Pe(t){for(var n=[],e=0,a=t.length;e<a;){var r=t.charCodeAt(e++);if(r>=55296&&r<=56319&&e<a){var o=t.charCodeAt(e++);(o&64512)==56320?n.push(((r&1023)<<10)+(o&1023)+65536):(n.push(r),e--)}else n.push(r)}return n}function sn(t){var n=Pe(t);return n.length===1?n[0].toString(16):null}function _e(t,n){var e=t.length,a=t.charCodeAt(n),r;return a>=55296&&a<=56319&&e>n+1&&(r=t.charCodeAt(n+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Nn(t){return Object.keys(t).reduce(function(n,e){var a=t[e],r=!!a.icon;return r?n[a.iconName]=a.icon:n[e]=a,n},{})}function fn(t,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=e.skipHooks,r=a===void 0?!1:a,o=Nn(n);typeof L.hooks.addPack=="function"&&!r?L.hooks.addPack(t,Nn(n)):L.styles[t]=l(l({},L.styles[t]||{}),o),t==="fas"&&fn("fa",n)}var ja=[$(/path d="((?:(?!")[\s\S])+)".*path d="((?:(?!")[\s\S])+)"/,{d1:1,d2:2}),$(/path class="((?:(?!")[\s\S])+)".*d="((?:(?!")[\s\S])+)".*path class="((?:(?!")[\s\S])+)".*d="((?:(?!")[\s\S])+)"/,{cls1:1,d1:2,cls2:3,d2:4}),$(/path class="((?:(?!")[\s\S])+)".*d="((?:(?!")[\s\S])+)"/,{cls1:1,d1:2})],Ct=L.styles,Ie=L.shims,Ce=Object.values(St),ln=null,Tn={},Mn={},Rn={},Ln={},Dn={},Ne=Object.keys(V);function Te(t){return~ue.indexOf(t)}function Me(t,n){var e=n.split("-"),a=e[0],r=e.slice(1).join("-");return a===t&&r!==""&&!Te(r)?r:null}var jn=function(){var n=function(o){return on(Ct,function(i,s,c){return i[c]=on(s,o,{}),i},{})};Tn=n(function(r,o,i){if(o[3]&&(r[o[3]]=i),o[2]){var s=o[2].filter(function(c){return typeof c=="number"});s.forEach(function(c){r[c.toString(16)]=i})}return r}),Mn=n(function(r,o,i){if(r[i]=i,o[2]){var s=o[2].filter(function(c){return typeof c=="string"});s.forEach(function(c){r[c]=i})}return r}),Dn=n(function(r,o,i){var s=o[2];return r[i]=i,s.forEach(function(c){r[c]=i}),r});var e="far"in Ct||p.autoFetchSvg,a=on(Ie,function(r,o){var i=o[0],s=o[1],c=o[2];return s==="far"&&!e&&(s="fas"),typeof i=="string"&&(r.names[i]={prefix:s,iconName:c}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:s,iconName:c}),r},{names:{},unicodes:{}});Rn=a.names,Ln=a.unicodes,ln=Ht(p.styleDefault)};be(function(t){ln=Ht(t.styleDefault)}),jn();function cn(t,n){return(Tn[t]||{})[n]}function Re(t,n){return(Mn[t]||{})[n]}function pt(t,n){return(Dn[t]||{})[n]}function zn(t){return Rn[t]||{prefix:null,iconName:null}}function Le(t){var n=Ln[t],e=cn("fas",t);return n||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function J(){return ln}var un=function(){return{prefix:null,iconName:null,rest:[]}};function Ht(t){var n=V[t],e=q[t]||q[n],a=t in L.styles?t:null;return e||a||null}function Bt(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.skipLookups,a=e===void 0?!1:e,r=null,o=t.reduce(function(i,s){var c=Me(p.familyPrefix,s);if(Ct[s]?(s=Ce.includes(s)?dt[s]:s,r=s,i.prefix=s):Ne.indexOf(s)>-1?(r=s,i.prefix=Ht(s)):c?i.iconName=c:s!==p.replacementClass&&i.rest.push(s),!a&&i.prefix&&i.iconName){var b=r==="fa"?zn(i.iconName):{},d=pt(i.prefix,i.iconName);b.prefix&&(r=null),i.iconName=b.iconName||d||i.iconName,i.prefix=b.prefix||i.prefix,i.prefix==="far"&&!Ct.far&&Ct.fas&&!p.autoFetchSvg&&(i.prefix="fas")}return i},un());return(o.prefix==="fa"||r==="fa")&&(o.prefix=J()||"fas"),o}var De=function(){function t(){Rt(this,t),this.definitions={}}return ct(t,[{key:"add",value:function(){for(var e=this,a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(s){e.definitions[s]=l(l({},e.definitions[s]||{}),i[s]),fn(s,i[s]);var c=St[s];c&&fn(c,i[s]),jn()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(o){var i=r[o],s=i.prefix,c=i.iconName,b=i.icon,d=b[2];e[s]||(e[s]={}),d.length>0&&d.forEach(function(v){typeof v=="string"&&(e[s][v]=b)}),e[s][c]=b}),e}}]),t}(),Fn=[],bt={},gt={},je=Object.keys(gt);function ze(t,n){var e=n.mixoutsTo;return Fn=t,bt={},Object.keys(gt).forEach(function(a){je.indexOf(a)===-1&&delete gt[a]}),Fn.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(i){typeof r[i]=="function"&&(e[i]=r[i]),lt(r[i])==="object"&&Object.keys(r[i]).forEach(function(s){e[i]||(e[i]={}),e[i][s]=r[i][s]})}),a.hooks){var o=a.hooks();Object.keys(o).forEach(function(i){bt[i]||(bt[i]=[]),bt[i].push(o[i])})}a.provides&&a.provides(gt)}),e}function mn(t,n){for(var e=arguments.length,a=new Array(e>2?e-2:0),r=2;r<e;r++)a[r-2]=arguments[r];var o=bt[t]||[];return o.forEach(function(i){n=i.apply(null,[n].concat(a))}),n}function st(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),a=1;a<n;a++)e[a-1]=arguments[a];var r=bt[t]||[];r.forEach(function(o){o.apply(null,e)})}function B(){var t=arguments[0],n=Array.prototype.slice.call(arguments,1);return gt[t]?gt[t].apply(null,n):void 0}function dn(t){t.prefix==="fa"&&(t.prefix="fas");var n=t.iconName,e=t.prefix||J();if(!!n)return n=pt(e,n)||n,Cn(Yn.definitions,e,n)||Cn(L.styles,e,n)}var Yn=new De,Fe=function(){p.autoReplaceSvg=!1,p.observeMutations=!1,st("noAuto")},Ye={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return g?(st("beforeI2svg",n),B("pseudoElements2svg",n),B("i2svg",n)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot;p.autoReplaceSvg===!1&&(p.autoReplaceSvg=!0),p.observeMutations=!0,Ee(function(){Ue({autoReplaceSvgRoot:e}),st("watch",n)})}},$e={icon:function(n){if(n===null)return null;if(lt(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:pt(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var e=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],a=Ht(n[0]);return{prefix:a,iconName:pt(a,e)||e}}if(typeof n=="string"&&(n.indexOf("".concat(p.familyPrefix,"-"))>-1||n.match(oe))){var r=Bt(n.split(" "),{skipLookups:!0});return{prefix:r.prefix||J(),iconName:pt(r.prefix,r.iconName)||r.iconName}}if(typeof n=="string"){var o=J();return{prefix:o,iconName:pt(o,n)||n}}}},C={noAuto:Fe,config:p,dom:Ye,parse:$e,library:Yn,findIconDefinition:dn,toHtml:It},Ue=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot,a=e===void 0?y:e;(Object.keys(L.styles).length>0||p.autoFetchSvg)&&g&&p.autoReplaceSvg&&C.dom.i2svg({node:a})};function Gt(t,n){return Object.defineProperty(t,"abstract",{get:n}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return It(a)})}}),Object.defineProperty(t,"node",{get:function(){if(!!g){var a=y.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function We(t){var n=t.children,e=t.main,a=t.mask,r=t.attributes,o=t.styles,i=t.transform;if(an(i)&&e.found&&!a.found){var s=e.width,c=e.height,b={x:s/c/2,y:.5};r.style=Ut(l(l({},o),{},{"transform-origin":"".concat(b.x+i.x/16,"em ").concat(b.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:n}]}function He(t){var n=t.prefix,e=t.iconName,a=t.children,r=t.attributes,o=t.symbol,i=o===!0?"".concat(n,"-").concat(p.familyPrefix,"-").concat(e):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:l(l({},r),{},{id:i}),children:a}]}]}function vn(t){var n=t.icons,e=n.main,a=n.mask,r=t.prefix,o=t.iconName,i=t.transform,s=t.symbol,c=t.title,b=t.maskId,d=t.titleId,v=t.extra,h=t.watchable,x=h===void 0?!1:h,S=a.found?a:e,D=S.width,j=S.height,T=r==="fak",P=[p.replacementClass,o?"".concat(p.familyPrefix,"-").concat(o):""].filter(function(ht){return v.classes.indexOf(ht)===-1}).filter(function(ht){return ht!==""||!!ht}).concat(v.classes).join(" "),O={children:[],attributes:l(l({},v.attributes),{},{"data-prefix":r,"data-icon":o,class:P,role:v.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(D," ").concat(j)})},Z=T&&!~v.classes.indexOf("fa-fw")?{width:"".concat(D/j*16*.0625,"em")}:{};x&&(O.attributes[A]=""),c&&(O.children.push({tag:"title",attributes:{id:O.attributes["aria-labelledby"]||"title-".concat(d||_t())},children:[c]}),delete O.attributes.title);var M=l(l({},O),{},{prefix:r,iconName:o,main:e,mask:a,maskId:b,transform:i,symbol:s,styles:l(l({},Z),v.styles)}),tt=a.found&&e.found?B("generateAbstractMask",M)||{children:[],attributes:{}}:B("generateAbstractIcon",M)||{children:[],attributes:{}},Tt=tt.children,Mt=tt.attributes;return M.children=Tt,M.attributes=Mt,s?He(M):We(M)}function $n(t){var n=t.content,e=t.width,a=t.height,r=t.transform,o=t.title,i=t.extra,s=t.watchable,c=s===void 0?!1:s,b=l(l(l({},i.attributes),o?{title:o}:{}),{},{class:i.classes.join(" ")});c&&(b[A]="");var d=l({},i.styles);an(r)&&(d.transform=we({transform:r,startCentered:!0,width:e,height:a}),d["-webkit-transform"]=d.transform);var v=Ut(d);v.length>0&&(b.style=v);var h=[];return h.push({tag:"span",attributes:b,children:[n]}),o&&h.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),h}function Be(t){var n=t.content,e=t.title,a=t.extra,r=l(l(l({},a.attributes),e?{title:e}:{}),{},{class:a.classes.join(" ")}),o=Ut(a.styles);o.length>0&&(r.style=o);var i=[];return i.push({tag:"span",attributes:r,children:[n]}),e&&i.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),i}var pn=L.styles;function bn(t){var n=t[0],e=t[1],a=t.slice(4),r=et(a,1),o=r[0],i=null;return Array.isArray(o)?i={tag:"g",attributes:{class:"".concat(p.familyPrefix,"-").concat(ot.GROUP)},children:[{tag:"path",attributes:{class:"".concat(p.familyPrefix,"-").concat(ot.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(p.familyPrefix,"-").concat(ot.PRIMARY),fill:"currentColor",d:o[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:n,height:e,icon:i}}var Ge={found:!1,width:512,height:512};function Xe(t,n){!z&&!p.showMissingIcons&&t&&G.error('Icon with name "'.concat(t,'" and prefix "').concat(n,'" is missing.'))}function gn(t,n){var e=n;return n==="fa"&&p.styleDefault!==null&&(n=J()),new Promise(function(a,r){var o={found:!1,width:512,height:512,icon:B("missingIconAbstract")||{}};if(e==="fa"){var i=zn(t)||{};t=i.iconName||t,n=i.prefix||n}if(t&&n&&pn[n]&&pn[n][t]){var s=pn[n][t];return a(bn(s))}Xe(t,n),a(l(l({},Ge),{},{icon:p.showMissingIcons&&t?B("missingIconAbstract")||{}:{}}))})}var Un=function(){},hn=p.measurePerformance&&u&&u.mark&&u.measure?u:{mark:Un,measure:Un},Nt='FA "6.0.0"',Ke=function(n){return hn.mark("".concat(Nt," ").concat(n," begins")),function(){return Wn(n)}},Wn=function(n){hn.mark("".concat(Nt," ").concat(n," ends")),hn.measure("".concat(Nt," ").concat(n),"".concat(Nt," ").concat(n," begins"),"".concat(Nt," ").concat(n," ends"))},yn={begin:Ke,end:Wn},Xt=function(){};function Hn(t){var n=t.getAttribute?t.getAttribute(A):null;return typeof n=="string"}function Ve(t){var n=t.getAttribute?t.getAttribute(at):null,e=t.getAttribute?t.getAttribute(rt):null;return n&&e}function qe(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(p.replacementClass)}function Qe(){if(p.autoReplaceSvg===!0)return Kt.replace;var t=Kt[p.autoReplaceSvg];return t||Kt.replace}function Je(t){return y.createElementNS("http://www.w3.org/2000/svg",t)}function Ze(t){return y.createElement(t)}function Bn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.ceFn,a=e===void 0?t.tag==="svg"?Je:Ze:e;if(typeof t=="string")return y.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(i){r.setAttribute(i,t.attributes[i])});var o=t.children||[];return o.forEach(function(i){r.appendChild(Bn(i,{ceFn:a}))}),r}function ta(t){var n=" ".concat(t.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var Kt={replace:function(n){var e=n[0];if(e.parentNode)if(n[1].forEach(function(r){e.parentNode.insertBefore(Bn(r),e)}),e.getAttribute(A)===null&&p.keepOriginalSource){var a=y.createComment(ta(e));e.parentNode.replaceChild(a,e)}else e.remove()},nest:function(n){var e=n[0],a=n[1];if(~en(e).indexOf(p.replacementClass))return Kt.replace(n);var r=new RegExp("".concat(p.familyPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var o=a[0].attributes.class.split(" ").reduce(function(s,c){return c===p.replacementClass||c.match(r)?s.toSvg.push(c):s.toNode.push(c),s},{toNode:[],toSvg:[]});a[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",o.toNode.join(" "))}var i=a.map(function(s){return It(s)}).join(`
`);e.setAttribute(A,""),e.innerHTML=i}};function Gn(t){t()}function Xn(t,n){var e=typeof n=="function"?n:Xt;if(t.length===0)e();else{var a=Gn;p.mutateApproach===Et&&(a=_.requestAnimationFrame||Gn),a(function(){var r=Qe(),o=yn.begin("mutate");t.map(r),o(),e()})}}var kn=!1;function Kn(){kn=!0}function wn(){kn=!1}var Vt=null;function Vn(t){if(!!f&&!!p.observeMutations){var n=t.treeCallback,e=n===void 0?Xt:n,a=t.nodeCallback,r=a===void 0?Xt:a,o=t.pseudoElementsCallback,i=o===void 0?Xt:o,s=t.observeMutationsRoot,c=s===void 0?y:s;Vt=new f(function(b){if(!kn){var d=J();vt(b).forEach(function(v){if(v.type==="childList"&&v.addedNodes.length>0&&!Hn(v.addedNodes[0])&&(p.searchPseudoElements&&i(v.target),e(v.target)),v.type==="attributes"&&v.target.parentNode&&p.searchPseudoElements&&i(v.target.parentNode),v.type==="attributes"&&Hn(v.target)&&~ce.indexOf(v.attributeName))if(v.attributeName==="class"&&Ve(v.target)){var h=Bt(en(v.target)),x=h.prefix,S=h.iconName;v.target.setAttribute(at,x||d),S&&v.target.setAttribute(rt,S)}else qe(v.target)&&r(v.target)})}}),g&&Vt.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function na(){!Vt||Vt.disconnect()}function ea(t){var n=t.getAttribute("style"),e=[];return n&&(e=n.split(";").reduce(function(a,r){var o=r.split(":"),i=o[0],s=o.slice(1);return i&&s.length>0&&(a[i]=s.join(":").trim()),a},{})),e}function aa(t){var n=t.getAttribute("data-prefix"),e=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=Bt(en(t));return r.prefix||(r.prefix=J()),n&&e&&(r.prefix=n,r.iconName=e),r.iconName&&r.prefix||r.prefix&&a.length>0&&(r.iconName=Re(r.prefix,t.innerText)||cn(r.prefix,sn(t.innerText))),r}function ra(t){var n=vt(t.attributes).reduce(function(r,o){return r.name!=="class"&&r.name!=="style"&&(r[o.name]=o.value),r},{}),e=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return p.autoA11y&&(e?n["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(a||_t()):(n["aria-hidden"]="true",n.focusable="false")),n}function ia(){return{iconName:null,title:null,titleId:null,prefix:null,transform:F,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function qn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=aa(t),a=e.iconName,r=e.prefix,o=e.rest,i=ra(t),s=mn("parseNodeAttributes",{},t),c=n.styleParser?ea(t):[];return l({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:F,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:c,attributes:i}},s)}var oa=L.styles;function Qn(t){var n=p.autoReplaceSvg==="nest"?qn(t,{styleParser:!1}):qn(t);return~n.extra.classes.indexOf(An)?B("generateLayersText",t,n):B("generateSvgReplacementMutation",t,n)}function Jn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!g)return Promise.resolve();var e=y.documentElement.classList,a=function(v){return e.add("".concat(it,"-").concat(v))},r=function(v){return e.remove("".concat(it,"-").concat(v))},o=p.autoFetchSvg?Object.keys(V):Object.keys(oa),i=[".".concat(An,":not([").concat(A,"])")].concat(o.map(function(d){return".".concat(d,":not([").concat(A,"])")})).join(", ");if(i.length===0)return Promise.resolve();var s=[];try{s=vt(t.querySelectorAll(i))}catch(d){}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var c=yn.begin("onTree"),b=s.reduce(function(d,v){try{var h=Qn(v);h&&d.push(h)}catch(x){z||x.name==="MissingIcon"&&G.error(x)}return d},[]);return new Promise(function(d,v){Promise.all(b).then(function(h){Xn(h,function(){a("active"),a("complete"),r("pending"),typeof n=="function"&&n(),c(),d()})}).catch(function(h){c(),v(h)})})}function sa(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Qn(t).then(function(e){e&&Xn([e],n)})}function fa(t){return function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(n||{}).icon?n:dn(n||{}),r=e.mask;return r&&(r=(r||{}).icon?r:dn(r||{})),t(a,l(l({},e),{},{mask:r}))}}var la=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.transform,r=a===void 0?F:a,o=e.symbol,i=o===void 0?!1:o,s=e.mask,c=s===void 0?null:s,b=e.maskId,d=b===void 0?null:b,v=e.title,h=v===void 0?null:v,x=e.titleId,S=x===void 0?null:x,D=e.classes,j=D===void 0?[]:D,T=e.attributes,P=T===void 0?{}:T,O=e.styles,Z=O===void 0?{}:O;if(!!n){var M=n.prefix,tt=n.iconName,Tt=n.icon;return Gt(l({type:"icon"},n),function(){return st("beforeDOMElementCreation",{iconDefinition:n,params:e}),p.autoA11y&&(h?P["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(S||_t()):(P["aria-hidden"]="true",P.focusable="false")),vn({icons:{main:bn(Tt),mask:c?bn(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:M,iconName:tt,transform:l(l({},F),r),symbol:i,title:h,maskId:d,titleId:S,extra:{attributes:P,styles:Z,classes:j}})})}},ca={mixout:function(){return{icon:fa(la)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=Jn,e.nodeCallback=sa,e}}},provides:function(n){n.i2svg=function(e){var a=e.node,r=a===void 0?y:a,o=e.callback,i=o===void 0?function(){}:o;return Jn(r,i)},n.generateSvgReplacementMutation=function(e,a){var r=a.iconName,o=a.title,i=a.titleId,s=a.prefix,c=a.transform,b=a.symbol,d=a.mask,v=a.maskId,h=a.extra;return new Promise(function(x,S){Promise.all([gn(r,s),d.iconName?gn(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(D){var j=et(D,2),T=j[0],P=j[1];x([e,vn({icons:{main:T,mask:P},prefix:s,iconName:r,transform:c,symbol:b,maskId:v,title:o,titleId:i,extra:h,watchable:!0})])}).catch(S)})},n.generateAbstractIcon=function(e){var a=e.children,r=e.attributes,o=e.main,i=e.transform,s=e.styles,c=Ut(s);c.length>0&&(r.style=c);var b;return an(i)&&(b=B("generateAbstractTransformGrouping",{main:o,transform:i,containerWidth:o.width,iconWidth:o.width})),a.push(b||o.icon),{children:a,attributes:r}}}},ua={mixout:function(){return{layer:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,o=r===void 0?[]:r;return Gt({type:"layer"},function(){st("beforeDOMElementCreation",{assembler:e,params:a});var i=[];return e(function(s){Array.isArray(s)?s.map(function(c){i=i.concat(c.abstract)}):i=i.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(p.familyPrefix,"-layers")].concat(ut(o)).join(" ")},children:i}]})}}}},ma={mixout:function(){return{counter:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,o=r===void 0?null:r,i=a.classes,s=i===void 0?[]:i,c=a.attributes,b=c===void 0?{}:c,d=a.styles,v=d===void 0?{}:d;return Gt({type:"counter",content:e},function(){return st("beforeDOMElementCreation",{content:e,params:a}),Be({content:e.toString(),title:o,extra:{attributes:b,styles:v,classes:["".concat(p.familyPrefix,"-layers-counter")].concat(ut(s))}})})}}}},da={mixout:function(){return{text:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,o=r===void 0?F:r,i=a.title,s=i===void 0?null:i,c=a.classes,b=c===void 0?[]:c,d=a.attributes,v=d===void 0?{}:d,h=a.styles,x=h===void 0?{}:h;return Gt({type:"text",content:e},function(){return st("beforeDOMElementCreation",{content:e,params:a}),$n({content:e,transform:l(l({},F),o),title:s,extra:{attributes:v,styles:x,classes:["".concat(p.familyPrefix,"-layers-text")].concat(ut(b))}})})}}},provides:function(n){n.generateLayersText=function(e,a){var r=a.title,o=a.transform,i=a.extra,s=null,c=null;if(w){var b=parseInt(getComputedStyle(e).fontSize,10),d=e.getBoundingClientRect();s=d.width/b,c=d.height/b}return p.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,$n({content:e.innerHTML,width:s,height:c,transform:o,title:r,extra:i,watchable:!0})])}}},va=new RegExp('"',"ug"),Zn=[1105920,1112319];function pa(t){var n=t.replace(va,""),e=_e(n,0),a=e>=Zn[0]&&e<=Zn[1],r=n.length===2?n[0]===n[1]:!1;return{value:sn(r?n[0]:n),isSecondary:a||r}}function te(t,n){var e="".concat(Ot).concat(n.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(e)!==null)return a();var o=vt(t.children),i=o.filter(function(tt){return tt.getAttribute(N)===n})[0],s=_.getComputedStyle(t,n),c=s.getPropertyValue("font-family").match(se),b=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(i&&!c)return t.removeChild(i),a();if(c&&d!=="none"&&d!==""){var v=s.getPropertyValue("content"),h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?q[c[2].toLowerCase()]:fe[b],x=pa(v),S=x.value,D=x.isSecondary,j=c[0].startsWith("FontAwesome"),T=cn(h,S),P=T;if(j){var O=Le(S);O.iconName&&O.prefix&&(T=O.iconName,h=O.prefix)}if(T&&!D&&(!i||i.getAttribute(at)!==h||i.getAttribute(rt)!==P)){t.setAttribute(e,P),i&&t.removeChild(i);var Z=ia(),M=Z.extra;M.attributes[N]=n,gn(T,h).then(function(tt){var Tt=vn(l(l({},Z),{},{icons:{main:tt,mask:un()},prefix:h,iconName:P,extra:M,watchable:!0})),Mt=y.createElement("svg");n==="::before"?t.insertBefore(Mt,t.firstChild):t.appendChild(Mt),Mt.outerHTML=Tt.map(function(ht){return It(ht)}).join(`
`),t.removeAttribute(e),a()}).catch(r)}else a()}else a()})}function ba(t){return Promise.all([te(t,"::before"),te(t,"::after")])}function ga(t){return t.parentNode!==document.head&&!~W.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(N)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function ne(t){if(!!g)return new Promise(function(n,e){var a=vt(t.querySelectorAll("*")).filter(ga).map(ba),r=yn.begin("searchPseudoElements");Kn(),Promise.all(a).then(function(){r(),wn(),n()}).catch(function(){r(),wn(),e()})})}var ha={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=ne,e}}},provides:function(n){n.pseudoElements2svg=function(e){var a=e.node,r=a===void 0?y:a;p.searchPseudoElements&&ne(r)}}},ee=!1,ya={mixout:function(){return{dom:{unwatch:function(){Kn(),ee=!0}}}},hooks:function(){return{bootstrap:function(){Vn(mn("mutationObserverCallbacks",{}))},noAuto:function(){na()},watch:function(e){var a=e.observeMutationsRoot;ee?wn():Vn(mn("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},ae=function(n){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(a,r){var o=r.toLowerCase().split("-"),i=o[0],s=o.slice(1).join("-");if(i&&s==="h")return a.flipX=!0,a;if(i&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(i){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},e)},ka={mixout:function(){return{parse:{transform:function(e){return ae(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-transform");return r&&(e.transform=ae(r)),e}}},provides:function(n){n.generateAbstractTransformGrouping=function(e){var a=e.main,r=e.transform,o=e.containerWidth,i=e.iconWidth,s={transform:"translate(".concat(o/2," 256)")},c="translate(".concat(r.x*32,", ").concat(r.y*32,") "),b="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),d="rotate(".concat(r.rotate," 0 0)"),v={transform:"".concat(c," ").concat(b," ").concat(d)},h={transform:"translate(".concat(i/2*-1," -256)")},x={outer:s,inner:v,path:h};return{tag:"g",attributes:l({},x.outer),children:[{tag:"g",attributes:l({},x.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:l(l({},a.icon.attributes),x.path)}]}]}}}},xn={x:0,y:0,width:"100%",height:"100%"};function re(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||n)&&(t.attributes.fill="black"),t}function wa(t){return t.tag==="g"?t.children:[t]}var xa={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-mask"),o=r?Bt(r.split(" ").map(function(i){return i.trim()})):un();return o.prefix||(o.prefix=J()),e.mask=o,e.maskId=a.getAttribute("data-fa-mask-id"),e}}},provides:function(n){n.generateAbstractMask=function(e){var a=e.children,r=e.attributes,o=e.main,i=e.mask,s=e.maskId,c=e.transform,b=o.width,d=o.icon,v=i.width,h=i.icon,x=ke({transform:c,containerWidth:v,iconWidth:b}),S={tag:"rect",attributes:l(l({},xn),{},{fill:"white"})},D=d.children?{children:d.children.map(re)}:{},j={tag:"g",attributes:l({},x.inner),children:[re(l({tag:d.tag,attributes:l(l({},d.attributes),x.path)},D))]},T={tag:"g",attributes:l({},x.outer),children:[j]},P="mask-".concat(s||_t()),O="clip-".concat(s||_t()),Z={tag:"mask",attributes:l(l({},xn),{},{id:P,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[S,T]},M={tag:"defs",children:[{tag:"clipPath",attributes:{id:O},children:wa(h)},Z]};return a.push(M,{tag:"rect",attributes:l({fill:"currentColor","clip-path":"url(#".concat(O,")"),mask:"url(#".concat(P,")")},xn)}),{children:a,attributes:r}}}},Aa={provides:function(n){var e=!1;_.matchMedia&&(e=_.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:l(l({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=l(l({},o),{},{attributeName:"opacity"}),s={tag:"circle",attributes:l(l({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:l(l({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:l(l({},i),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:l(l({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:l(l({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||a.push({tag:"path",attributes:l(l({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:l(l({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},Oa={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-symbol"),o=r===null?!1:r===""?!0:r;return e.symbol=o,e}}}},Ea=[Ae,ca,ua,ma,da,ha,ya,ka,xa,Aa,Oa];ze(Ea,{mixoutsTo:C});var Sa=C.noAuto,Pa=C.config,_a=C.library,Ia=C.dom,Ca=C.parse,Na=C.findIconDefinition,Ta=C.toHtml,Ma=C.icon,Ra=C.layer,La=C.text,Da=C.counter;E.noAuto=Sa,E.config=Pa,E.library=_a,E.dom=Ia,E.parse=Ca,E.findIconDefinition=Na,E.toHtml=Ta,E.icon=Ma,E.layer=Ra,E.text=La,E.counter=Da,E.api=C,Object.defineProperty(E,"__esModule",{value:!0})})},16925:(ie,qt,Y)=>{"use strict";Y.d(qt,{G:()=>_});var G=Y(9799),E=Y.n(G),ft=Y(60216),l=Y.n(ft),lt=Y(32735),$=Y(98399);function Rt(f,u){var m=Object.keys(f);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(f);u&&(g=g.filter(function(w){return Object.getOwnPropertyDescriptor(f,w).enumerable})),m.push.apply(m,g)}return m}function R(f){for(var u=1;u<arguments.length;u++){var m=arguments[u]!=null?arguments[u]:{};u%2?Rt(Object(m),!0).forEach(function(g){X(f,g,m[g])}):Object.getOwnPropertyDescriptors?Object.defineProperties(f,Object.getOwnPropertyDescriptors(m)):Rt(Object(m)).forEach(function(g){Object.defineProperty(f,g,Object.getOwnPropertyDescriptor(m,g))})}return f}function ct(f){return ct=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},ct(f)}function X(f,u,m){return u in f?Object.defineProperty(f,u,{value:m,enumerable:!0,configurable:!0,writable:!0}):f[u]=m,f}function Qt(f,u){if(f==null)return{};var m={},g=Object.keys(f),w,k;for(k=0;k<g.length;k++)w=g[k],!(u.indexOf(w)>=0)&&(m[w]=f[w]);return m}function nt(f,u){if(f==null)return{};var m=Qt(f,u),g,w;if(Object.getOwnPropertySymbols){var k=Object.getOwnPropertySymbols(f);for(w=0;w<k.length;w++)g=k[w],!(u.indexOf(g)>=0)&&(!Object.prototype.propertyIsEnumerable.call(f,g)||(m[g]=f[g]))}return m}function et(f){return ut(f)||Jt(f)||Zt(f)||tn()}function ut(f){if(Array.isArray(f))return yt(f)}function Jt(f){if(typeof Symbol!="undefined"&&f[Symbol.iterator]!=null||f["@@iterator"]!=null)return Array.from(f)}function Zt(f,u){if(!!f){if(typeof f=="string")return yt(f,u);var m=Object.prototype.toString.call(f).slice(8,-1);if(m==="Object"&&f.constructor&&(m=f.constructor.name),m==="Map"||m==="Set")return Array.from(f);if(m==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m))return yt(f,u)}}function yt(f,u){(u==null||u>f.length)&&(u=f.length);for(var m=0,g=new Array(u);m<u;m++)g[m]=f[m];return g}function tn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Lt(f){var u,m=f.beat,g=f.fade,w=f.beatFade,k=f.bounce,U=f.shake,K=f.flash,I=f.spin,A=f.spinPulse,N=f.spinReverse,Ot=f.pulse,at=f.fixedWidth,rt=f.inverse,it=f.border,Et=f.listItem,W=f.flip,z=f.size,V=f.rotation,q=f.pull,St=(u={"fa-beat":m,"fa-fade":g,"fa-beat-fade":w,"fa-bounce":k,"fa-shake":U,"fa-flash":K,"fa-spin":I,"fa-spin-reverse":N,"fa-spin-pulse":A,"fa-pulse":Ot,"fa-fw":at,"fa-inverse":rt,"fa-border":it,"fa-li":Et,"fa-flip-horizontal":W==="horizontal"||W==="both","fa-flip-vertical":W==="vertical"||W==="both"},X(u,"fa-".concat(z),typeof z!="undefined"&&z!==null),X(u,"fa-rotate-".concat(V),typeof V!="undefined"&&V!==null&&V!==0),X(u,"fa-pull-".concat(q),typeof q!="undefined"&&q!==null),X(u,"fa-swap-opacity",f.swapOpacity),u);return Object.keys(St).map(function(dt){return St[dt]?dt:null}).filter(function(dt){return dt})}function kt(f){return f=f-0,f===f}function Dt(f){return kt(f)?f:(f=f.replace(/[\-_\s]+(.)?/g,function(u,m){return m?m.toUpperCase():""}),f.substr(0,1).toLowerCase()+f.substr(1))}var nn=["style"];function jt(f){return f.charAt(0).toUpperCase()+f.slice(1)}function wt(f){return f.split(";").map(function(u){return u.trim()}).filter(function(u){return u}).reduce(function(u,m){var g=m.indexOf(":"),w=Dt(m.slice(0,g)),k=m.slice(g+1).trim();return w.startsWith("webkit")?u[jt(w)]=k:u[w]=k,u},{})}function xt(f,u){var m=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof u=="string")return u;var g=(u.children||[]).map(function(I){return xt(f,I)}),w=Object.keys(u.attributes||{}).reduce(function(I,A){var N=u.attributes[A];switch(A){case"class":I.attrs.className=N,delete u.attributes.class;break;case"style":I.attrs.style=wt(N);break;default:A.indexOf("aria-")===0||A.indexOf("data-")===0?I.attrs[A.toLowerCase()]=N:I.attrs[Dt(A)]=N}return I},{attrs:{}}),k=m.style,U=k===void 0?{}:k,K=nt(m,nn);return w.attrs.style=R(R({},w.attrs.style),U),f.apply(void 0,[u.tag,R(R({},w.attrs),K)].concat(et(g)))}var At=!1;try{At=!0}catch(f){}function zt(){if(!At&&$&&typeof $.error=="function"){var f;(f=$).error.apply(f,arguments)}}function Ft(f){if(f&&ct(f)==="object"&&f.prefix&&f.iconName&&f.icon)return f;if(G.parse.icon)return G.parse.icon(f);if(f===null)return null;if(f&&ct(f)==="object"&&f.prefix&&f.iconName)return f;if(Array.isArray(f)&&f.length===2)return{prefix:f[0],iconName:f[1]};if(typeof f=="string")return{prefix:"fas",iconName:f}}function mt(f,u){return Array.isArray(u)&&u.length>0||!Array.isArray(u)&&u?X({},f,u):{}}var Yt=["forwardedRef"];function _(f){var u=f.forwardedRef,m=nt(f,Yt),g=m.icon,w=m.mask,k=m.symbol,U=m.className,K=m.title,I=m.titleId,A=m.maskId,N=Ft(g),Ot=mt("classes",[].concat(et(Lt(m)),et(U.split(" ")))),at=mt("transform",typeof m.transform=="string"?G.parse.transform(m.transform):m.transform),rt=mt("mask",Ft(w)),it=(0,G.icon)(N,R(R(R(R({},Ot),at),rt),{},{symbol:k,title:K,titleId:I,maskId:A}));if(!it)return zt("Could not find icon",N),null;var Et=it.abstract,W={ref:u};return Object.keys(m).forEach(function(z){_.defaultProps.hasOwnProperty(z)||(W[z]=m[z])}),y(Et[0],W)}_.displayName="FontAwesomeIcon",_.propTypes={beat:l().bool,border:l().bool,bounce:l().bool,className:l().string,fade:l().bool,flash:l().bool,mask:l().oneOfType([l().object,l().array,l().string]),maskId:l().string,fixedWidth:l().bool,inverse:l().bool,flip:l().oneOf(["horizontal","vertical","both"]),icon:l().oneOfType([l().object,l().array,l().string]),listItem:l().bool,pull:l().oneOf(["right","left"]),pulse:l().bool,rotation:l().oneOf([0,90,180,270]),shake:l().bool,size:l().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:l().bool,spinPulse:l().bool,spinReverse:l().bool,symbol:l().oneOfType([l().bool,l().string]),title:l().string,titleId:l().string,transform:l().oneOfType([l().string,l().object]),swapOpacity:l().bool},_.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var y=xt.bind(null,lt.createElement)}}]);
