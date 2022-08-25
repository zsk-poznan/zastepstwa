(self.webpackChunk_strapi_admin=self.webpackChunk_strapi_admin||[]).push([[9066],{16540:(g,O,d)=>{"use strict";g.exports=d(67468)},67468:function(g,O,d){(function(m,h){g.exports=h(d(32735),d(19615))})(this,function(m,h){return function(n){var i={};function e(o){if(i[o])return i[o].exports;var t=i[o]={i:o,l:!1,exports:{}};return n[o].call(t.exports,t,t.exports,e),t.l=!0,t.exports}return e.m=n,e.c=i,e.d=function(o,t,s){e.o(o,t)||Object.defineProperty(o,t,{enumerable:!0,get:s})},e.r=function(o){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},e.t=function(o,t){if(1&t&&(o=e(o)),8&t||4&t&&typeof o=="object"&&o&&o.__esModule)return o;var s=Object.create(null);if(e.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:o}),2&t&&typeof o!="string")for(var u in o)e.d(s,u,function(f){return o[f]}.bind(null,u));return s},e.n=function(o){var t=o&&o.__esModule?function(){return o.default}:function(){return o};return e.d(t,"a",t),t},e.o=function(o,t){return Object.prototype.hasOwnProperty.call(o,t)},e.p="",e(e.s=110)}({0:function(n,i,e){n.exports=e(19)()},1:function(n,i){n.exports=m},10:function(n,i,e){var o=e(25),t=e(26),s=e(22),u=e(27);n.exports=function(f,p){return o(f)||t(f,p)||s(f,p)||u()},n.exports.default=n.exports,n.exports.__esModule=!0},110:function(n,i,e){"use strict";e.r(i),e.d(i,"Main",function(){return r}),e.d(i,"SkipToContent",function(){return P});var o,t=e(5),s=e.n(t),u=e(4),f=e.n(u),p=e(3),l=e.n(p),v=e(1),j=e.n(v),c=e(0),x=e.n(c),y=e(2),w=e.n(y),S=["labelledBy"],T=w.a.main(o||(o=l()([`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`]))),r=function(M){var k=M.labelledBy,B=f()(M,S),A=k||"main-content-title";return j.a.createElement(T,s()({"aria-labelledby":A,id:"main-content",tabIndex:-1},B))};r.defaultProps={labelledBy:void 0},r.propTypes={labelledBy:x.a.string};var a,b=e(6),_=w()(b.Box)(a||(a=l()([`
  text-decoration: none;
  position: absolute;
  z-index: 9999;
  left: -100%;
  top: -100%;

  &:focus {
    left: `,`;
    top: `,`;
  }
`])),function(M){return M.theme.spaces[3]},function(M){return M.theme.spaces[3]}),P=function(M){var k=M.children;return j.a.createElement(_,{as:"a",href:"#main-content",background:"primary600",color:"neutral0",padding:3,hasRadius:!0},k)};P.propTypes={children:x.a.node.isRequired}},13:function(n,i){function e(o){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(n.exports=e=function(t){return typeof t},n.exports.default=n.exports,n.exports.__esModule=!0):(n.exports=e=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n.exports.default=n.exports,n.exports.__esModule=!0),e(o)}n.exports=e,n.exports.default=n.exports,n.exports.__esModule=!0},19:function(n,i,e){"use strict";var o=e(20);function t(){}function s(){}s.resetWarningCache=t,n.exports=function(){function u(l,v,j,c,x,y){if(y!==o){var w=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw w.name="Invariant Violation",w}}function f(){return u}u.isRequired=u;var p={array:u,bool:u,func:u,number:u,object:u,string:u,symbol:u,any:u,arrayOf:f,element:u,elementType:u,instanceOf:f,node:u,objectOf:f,oneOf:f,oneOfType:f,shape:f,exact:f,checkPropTypes:s,resetWarningCache:t};return p.PropTypes=p,p}},2:function(n,i){n.exports=h},20:function(n,i,e){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},21:function(n,i){n.exports=function(e,o){(o==null||o>e.length)&&(o=e.length);for(var t=0,s=new Array(o);t<o;t++)s[t]=e[t];return s},n.exports.default=n.exports,n.exports.__esModule=!0},22:function(n,i,e){var o=e(21);n.exports=function(t,s){if(t){if(typeof t=="string")return o(t,s);var u=Object.prototype.toString.call(t).slice(8,-1);return u==="Object"&&t.constructor&&(u=t.constructor.name),u==="Map"||u==="Set"?Array.from(t):u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)?o(t,s):void 0}},n.exports.default=n.exports,n.exports.__esModule=!0},24:function(n,i){n.exports=function(e,o){if(e==null)return{};var t,s,u={},f=Object.keys(e);for(s=0;s<f.length;s++)t=f[s],o.indexOf(t)>=0||(u[t]=e[t]);return u},n.exports.default=n.exports,n.exports.__esModule=!0},25:function(n,i){n.exports=function(e){if(Array.isArray(e))return e},n.exports.default=n.exports,n.exports.__esModule=!0},26:function(n,i){n.exports=function(e,o){var t=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var s,u,f=[],p=!0,l=!1;try{for(t=t.call(e);!(p=(s=t.next()).done)&&(f.push(s.value),!o||f.length!==o);p=!0);}catch(v){l=!0,u=v}finally{try{p||t.return==null||t.return()}finally{if(l)throw u}}return f}},n.exports.default=n.exports,n.exports.__esModule=!0},27:function(n,i){n.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},n.exports.default=n.exports,n.exports.__esModule=!0},3:function(n,i){n.exports=function(e,o){return o||(o=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(o)}}))},n.exports.default=n.exports,n.exports.__esModule=!0},4:function(n,i,e){var o=e(24);n.exports=function(t,s){if(t==null)return{};var u,f,p=o(t,s);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(f=0;f<l.length;f++)u=l[f],s.indexOf(u)>=0||Object.prototype.propertyIsEnumerable.call(t,u)&&(p[u]=t[u])}return p},n.exports.default=n.exports,n.exports.__esModule=!0},5:function(n,i){function e(){return n.exports=e=Object.assign||function(o){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var u in s)Object.prototype.hasOwnProperty.call(s,u)&&(o[u]=s[u])}return o},n.exports.default=n.exports,n.exports.__esModule=!0,e.apply(this,arguments)}n.exports=e,n.exports.default=n.exports,n.exports.__esModule=!0},6:function(n,i,e){"use strict";e.r(i),e.d(i,"Box",function(){return T});var o,t=e(3),s=e.n(t),u=e(2),f=e.n(u),p=e(7),l=e(1),v=e.n(l),j=e(0),c=e.n(j),x=function(r){return v.a.createElement("div",r)},y={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},w={_hover:c.a.func,background:c.a.string,basis:c.a.oneOfType([c.a.string,c.a.string]),borderColor:c.a.string,children:c.a.oneOfType([c.a.node,c.a.string]),color:c.a.string,flex:c.a.oneOfType([c.a.string,c.a.string]),grow:c.a.oneOfType([c.a.string,c.a.string]),hasRadius:c.a.bool,hiddenS:c.a.bool,hiddenXS:c.a.bool,padding:c.a.oneOfType([c.a.number,c.a.arrayOf(c.a.number)]),paddingBottom:c.a.oneOfType([c.a.number,c.a.arrayOf(c.a.number)]),paddingLeft:c.a.oneOfType([c.a.number,c.a.arrayOf(c.a.number)]),paddingRight:c.a.oneOfType([c.a.number,c.a.arrayOf(c.a.number)]),paddingTop:c.a.oneOfType([c.a.number,c.a.arrayOf(c.a.number)]),shadow:c.a.string,shrink:c.a.oneOfType([c.a.string,c.a.string])};x.defaultProps=y,x.propTypes=w;var S={color:!0},T=f.a.div.withConfig({shouldForwardProp:function(r,a){return!S[r]&&a(r)}})(o||(o=s()([`
  // Font
  font-size: `,`;

  // Colors
  background: `,`;
  color: `,`;

  // Spaces
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`

  // Responsive hiding
  `,`
  `,`
  

  // Borders
  border-radius: `,`;
  border-style: `,`;
  border-width: `,`;
  border-color: `,`;
  border: `,`;

  // Shadows
  box-shadow: `,`;

  // Handlers
  pointer-events: `,`;
  &:hover {
    `,`
  }

  // Display
  display: `,`;

  // Position
  position: `,`;
  left: `,`;
  right: `,`;
  top: `,`;
  bottom: `,`;
  z-index: `,`;
  overflow: `,`;
  cursor: `,`;

  // Size
  width: `,`;
  max-width: `,`;
  min-width: `,`;
  height: `,`;
  max-height: `,`;
  min-height: `,`;

  // Animation
  transition: `,`;
  transform: `,`;
  animation: `,`;

  //Flexbox children props
  flex-shrink: `,`;
  flex-grow: `,`;
  flex-basis: `,`;
  flex: `,`;

  // Text
  text-align: `,`;
  text-transform: `,`;
  line-height: `,`;

  // Cursor
  cursor: `,`;
`])),function(r){var a=r.fontSize;return r.theme.fontSizes[a]||a},function(r){var a=r.theme,b=r.background;return a.colors[b]},function(r){var a=r.theme,b=r.color;return a.colors[b]},function(r){var a=r.theme,b=r.padding;return Object(p.a)("padding",b,a)},function(r){var a=r.theme,b=r.paddingTop;return Object(p.a)("padding-top",b,a)},function(r){var a=r.theme,b=r.paddingRight;return Object(p.a)("padding-right",b,a)},function(r){var a=r.theme,b=r.paddingBottom;return Object(p.a)("padding-bottom",b,a)},function(r){var a=r.theme,b=r.paddingLeft;return Object(p.a)("padding-left",b,a)},function(r){var a=r.theme,b=r.marginLeft;return Object(p.a)("margin-left",b,a)},function(r){var a=r.theme,b=r.marginRight;return Object(p.a)("margin-right",b,a)},function(r){var a=r.theme,b=r.marginTop;return Object(p.a)("margin-top",b,a)},function(r){var a=r.theme,b=r.marginBottom;return Object(p.a)("margin-bottom",b,a)},function(r){var a=r.theme;return r.hiddenS?"".concat(a.mediaQueries.tablet," { display: none; }"):void 0},function(r){var a=r.theme;return r.hiddenXS?"".concat(a.mediaQueries.mobile," { display: none; }"):void 0},function(r){var a=r.theme,b=r.hasRadius,_=r.borderRadius;return b?a.borderRadius:_},function(r){return r.borderStyle},function(r){return r.borderWidth},function(r){var a=r.borderColor;return r.theme.colors[a]},function(r){var a=r.theme,b=r.borderColor,_=r.borderStyle,P=r.borderWidth;if(b&&!_&&!P)return"1px solid ".concat(a.colors[b])},function(r){var a=r.theme,b=r.shadow;return a.shadows[b]},function(r){return r.pointerEvents},function(r){var a=r._hover,b=r.theme;return a?a(b):void 0},function(r){return r.display},function(r){return r.position},function(r){var a=r.left;return r.theme.spaces[a]||a},function(r){var a=r.right;return r.theme.spaces[a]||a},function(r){var a=r.top;return r.theme.spaces[a]||a},function(r){var a=r.bottom;return r.theme.spaces[a]||a},function(r){return r.zIndex},function(r){return r.overflow},function(r){return r.cursor},function(r){var a=r.width;return r.theme.spaces[a]||a},function(r){var a=r.maxWidth;return r.theme.spaces[a]||a},function(r){var a=r.minWidth;return r.theme.spaces[a]||a},function(r){var a=r.height;return r.theme.spaces[a]||a},function(r){var a=r.maxHeight;return r.theme.spaces[a]||a},function(r){var a=r.minHeight;return r.theme.spaces[a]||a},function(r){return r.transition},function(r){return r.transform},function(r){return r.animation},function(r){return r.shrink},function(r){return r.grow},function(r){return r.basis},function(r){return r.flex},function(r){return r.textAlign},function(r){return r.textTransform},function(r){return r.lineHeight},function(r){return r.cursor});T.defaultProps=y,T.propTypes=w},7:function(n,i,e){"use strict";var o=e(10),t=e.n(o),s=e(13),u=e.n(s);i.a=function(f,p,l){var v=p;if(Array.isArray(p)||u()(p)!=="object"||(v=[p==null?void 0:p.desktop,p==null?void 0:p.tablet,p==null?void 0:p.mobile]),v!==void 0){if(Array.isArray(v)){var j=v,c=t()(j,3),x=c[0],y=c[1],w=c[2],S="".concat(f,": ").concat(l.spaces[x],";");return y!==void 0&&(S+="".concat(l.mediaQueries.tablet,`{
          `).concat(f,": ").concat(l.spaces[y],`;
        }`)),w!==void 0&&(S+="".concat(l.mediaQueries.mobile,`{
          `).concat(f,": ").concat(l.spaces[w],`;
        }`)),S}var T=l.spaces[v]||v;return"".concat(f,": ").concat(T,";")}}}})})},42258:function(g,O,d){(function(m,h){g.exports=h(d(32735))})(this,function(m){return function(h){var n={};function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return h[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=h,i.c=n,i.d=function(e,o,t){i.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:t})},i.r=function(e){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,o){if(1&o&&(e=i(e)),8&o||4&o&&typeof e=="object"&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&o&&typeof e!="string")for(var s in e)i.d(t,s,function(u){return e[u]}.bind(null,s));return t},i.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(o,"a",o),o},i.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},i.p="",i(i.s=35)}({0:function(h,n){h.exports=m},35:function(h,n,i){"use strict";i.r(n);var e=i(0);function o(){return(o=Object.assign||function(t){for(var s=1;s<arguments.length;s++){var u=arguments[s];for(var f in u)Object.prototype.hasOwnProperty.call(u,f)&&(t[f]=u[f])}return t}).apply(this,arguments)}n.default=function(t){return e.createElement("svg",o({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),e.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.68 9.192c-.6.276-2.114 1.18-2.306 1.303a.792.792 0 00-.374.68v1.65a.797.797 0 00.384.687c.254.16 1.73 1.042 2.306 1.303l.744 1.8c-.24.634-.67 2.333-.72 2.554a.797.797 0 00.216.744l1.167 1.166a.801.801 0 00.744.216l.03-.008c.36-.092 1.946-.498 2.523-.712l1.8.744c.276.6 1.181 2.115 1.304 2.307a.805.805 0 00.679.374h1.649a.797.797 0 00.686-.384c.16-.254 1.042-1.73 1.303-2.306l1.8-.744c.634.24 2.333.67 2.554.72a.797.797 0 00.744-.216l1.166-1.167a.803.803 0 00.216-.744l-.008-.03c-.092-.36-.498-1.946-.712-2.523l.744-1.8c.6-.276 2.115-1.181 2.307-1.304a.804.804 0 00.374-.679v-1.649a.796.796 0 00-.382-.679c-.254-.16-1.73-1.041-2.306-1.303l-.744-1.8c.24-.634.67-2.333.72-2.554a.796.796 0 00-.216-.744l-1.166-1.173a.802.802 0 00-.744-.216l-.03.008c-.361.092-1.947.498-2.524.712l-1.8-.744c-.276-.6-1.18-2.115-1.303-2.307a.803.803 0 00-.68-.374h-1.65a.797.797 0 00-.68.382c-.16.254-1.041 1.73-1.303 2.306l-1.8.744c-.634-.24-2.333-.67-2.554-.72a.797.797 0 00-.744.216L2.921 4.094a.802.802 0 00-.216.744l.008.03c.092.361.498 1.947.712 2.524l-.744 1.8zM12 17a5 5 0 100-10 5 5 0 000 10z",fill:"#212134"}))}}})})},56671:(g,O,d)=>{var m=d(35897),h=d(74741),n=h(m);g.exports=n},52920:(g,O,d)=>{var m=d(56671),h=d(81580);function n(i,e){var o=-1,t=h(i)?Array(i.length):[];return m(i,function(s,u,f){t[++o]=e(s,u,f)}),t}g.exports=n},50690:(g,O,d)=>{var m=d(26460),h=d(80166),n=d(88904),i=d(52920),e=d(36024),o=d(76535),t=d(1397),s=d(15362),u=d(77236);function f(p,l,v){l.length?l=m(l,function(x){return u(x)?function(y){return h(y,x.length===1?x[0]:x)}:x}):l=[s];var j=-1;l=m(l,o(n));var c=i(p,function(x,y,w){var S=m(l,function(T){return T(x)});return{criteria:S,index:++j,value:x}});return e(c,function(x,y){return t(x,y,v)})}g.exports=f},36024:g=>{function O(d,m){var h=d.length;for(d.sort(m);h--;)d[h]=d[h].value;return d}g.exports=O},40709:(g,O,d)=>{var m=d(22945);function h(n,i){if(n!==i){var e=n!==void 0,o=n===null,t=n===n,s=m(n),u=i!==void 0,f=i===null,p=i===i,l=m(i);if(!f&&!l&&!s&&n>i||s&&u&&p&&!f&&!l||o&&u&&p||!e&&p||!t)return 1;if(!o&&!s&&!l&&n<i||l&&e&&t&&!o&&!s||f&&e&&t||!u&&t||!p)return-1}return 0}g.exports=h},1397:(g,O,d)=>{var m=d(40709);function h(n,i,e){for(var o=-1,t=n.criteria,s=i.criteria,u=t.length,f=e.length;++o<u;){var p=m(t[o],s[o]);if(p){if(o>=f)return p;var l=e[o];return p*(l=="desc"?-1:1)}}return n.index-i.index}g.exports=h},74741:(g,O,d)=>{var m=d(81580);function h(n,i){return function(e,o){if(e==null)return e;if(!m(e))return n(e,o);for(var t=e.length,s=i?t:-1,u=Object(e);(i?s--:++s<t)&&o(u[s],s,u)!==!1;);return e}}g.exports=h},98978:(g,O,d)=>{var m=d(40314),h=d(50690),n=d(94569),i=d(63108),e=n(function(o,t){if(o==null)return[];var s=t.length;return s>1&&i(o,t[0],t[1])?t=[]:s>2&&i(t[0],t[1],t[2])&&(t=[t[0]]),h(o,m(t,1),[])});g.exports=e},15738:(g,O,d)=>{var m=d(4293);function h(n){var i=n==null?0:n.length;return i?m(n,1,i):[]}g.exports=h}}]);
