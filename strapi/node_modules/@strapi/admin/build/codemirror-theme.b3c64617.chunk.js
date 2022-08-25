"use strict";(self.webpackChunk_strapi_admin=self.webpackChunk_strapi_admin||[]).push([[2218],{52582:(d,t,e)=>{e.d(t,{Z:()=>i});var s=e(65064),o=e.n(s),r=e(38904),a=e.n(r),n=a()(o());n.push([d.id,`/* Port of TextMate's Blackboard theme */

.cm-s-blackboard.CodeMirror { background: #0C1021; color: #F8F8F8; }
.cm-s-blackboard div.CodeMirror-selected { background: #253B76; }
.cm-s-blackboard .CodeMirror-line::selection, .cm-s-blackboard .CodeMirror-line > span::selection, .cm-s-blackboard .CodeMirror-line > span > span::selection { background: rgba(37, 59, 118, .99); }
.cm-s-blackboard .CodeMirror-line::-moz-selection, .cm-s-blackboard .CodeMirror-line > span::-moz-selection, .cm-s-blackboard .CodeMirror-line > span > span::-moz-selection { background: rgba(37, 59, 118, .99); }
.cm-s-blackboard .CodeMirror-gutters { background: #0C1021; border-right: 0; }
.cm-s-blackboard .CodeMirror-guttermarker { color: #FBDE2D; }
.cm-s-blackboard .CodeMirror-guttermarker-subtle { color: #888; }
.cm-s-blackboard .CodeMirror-linenumber { color: #888; }
.cm-s-blackboard .CodeMirror-cursor { border-left: 1px solid #A7A7A7; }

.cm-s-blackboard .cm-keyword { color: #FBDE2D; }
.cm-s-blackboard .cm-atom { color: #D8FA3C; }
.cm-s-blackboard .cm-number { color: #D8FA3C; }
.cm-s-blackboard .cm-def { color: #8DA6CE; }
.cm-s-blackboard .cm-variable { color: #FF6400; }
.cm-s-blackboard .cm-operator { color: #FBDE2D; }
.cm-s-blackboard .cm-comment { color: #AEAEAE; }
.cm-s-blackboard .cm-string { color: #61CE3C; }
.cm-s-blackboard .cm-string-2 { color: #61CE3C; }
.cm-s-blackboard .cm-meta { color: #D8FA3C; }
.cm-s-blackboard .cm-builtin { color: #8DA6CE; }
.cm-s-blackboard .cm-tag { color: #8DA6CE; }
.cm-s-blackboard .cm-attribute { color: #8DA6CE; }
.cm-s-blackboard .cm-header { color: #FF6400; }
.cm-s-blackboard .cm-hr { color: #AEAEAE; }
.cm-s-blackboard .cm-link { color: #8DA6CE; }
.cm-s-blackboard .cm-error { background: #9D1E15; color: #F8F8F8; }

.cm-s-blackboard .CodeMirror-activeline-background { background: #3C3636; }
.cm-s-blackboard .CodeMirror-matchingbracket { outline:1px solid grey;color:white !important; }
`,""]);const i=n},38904:d=>{d.exports=function(t){var e=[];return e.toString=function(){return this.map(function(o){var r="",a=typeof o[5]!="undefined";return o[4]&&(r+="@supports (".concat(o[4],") {")),o[2]&&(r+="@media ".concat(o[2]," {")),a&&(r+="@layer".concat(o[5].length>0?" ".concat(o[5]):""," {")),r+=t(o),a&&(r+="}"),o[2]&&(r+="}"),o[4]&&(r+="}"),r}).join("")},e.i=function(o,r,a,n,i){typeof o=="string"&&(o=[[null,o,void 0]]);var l={};if(a)for(var _=0;_<this.length;_++){var m=this[_][0];m!=null&&(l[m]=!0)}for(var f=0;f<o.length;f++){var c=[].concat(o[f]);a&&l[c[0]]||(typeof i!="undefined"&&(typeof c[5]=="undefined"||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),r&&(c[2]&&(c[1]="@media ".concat(c[2]," {").concat(c[1],"}")),c[2]=r),n&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=n):c[4]="".concat(n)),e.push(c))}},e}},65064:d=>{d.exports=function(t){return t[1]}},88333:(d,t,e)=>{e.r(t),e.d(t,{default:()=>v});var s=e(93379),o=e.n(s),r=e(7795),a=e.n(r),n=e(90569),i=e.n(n),l=e(3565),_=e.n(l),m=e(19216),f=e.n(m),c=e(44589),E=e.n(c),p=e(52582),u={};u.styleTagTransform=E(),u.setAttributes=_(),u.insert=i().bind(null,"head"),u.domAPI=a(),u.insertStyleElement=f();var b=o()(p.Z,u);const v=p.Z&&p.Z.locals?p.Z.locals:void 0},93379:d=>{var t=[];function e(r){for(var a=-1,n=0;n<t.length;n++)if(t[n].identifier===r){a=n;break}return a}function s(r,a){for(var n={},i=[],l=0;l<r.length;l++){var _=r[l],m=a.base?_[0]+a.base:_[0],f=n[m]||0,c="".concat(m," ").concat(f);n[m]=f+1;var E=e(c),p={css:_[1],media:_[2],sourceMap:_[3],supports:_[4],layer:_[5]};if(E!==-1)t[E].references++,t[E].updater(p);else{var u=o(p,a);a.byIndex=l,t.splice(l,0,{identifier:c,updater:u,references:1})}i.push(c)}return i}function o(r,a){var n=a.domAPI(a);n.update(r);var i=function(_){if(_){if(_.css===r.css&&_.media===r.media&&_.sourceMap===r.sourceMap&&_.supports===r.supports&&_.layer===r.layer)return;n.update(r=_)}else n.remove()};return i}d.exports=function(r,a){a=a||{},r=r||[];var n=s(r,a);return function(l){l=l||[];for(var _=0;_<n.length;_++){var m=n[_],f=e(m);t[f].references--}for(var c=s(l,a),E=0;E<n.length;E++){var p=n[E],u=e(p);t[u].references===0&&(t[u].updater(),t.splice(u,1))}n=c}}},90569:d=>{var t={};function e(o){if(typeof t[o]=="undefined"){var r=document.querySelector(o);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(a){r=null}t[o]=r}return t[o]}function s(o,r){var a=e(o);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(r)}d.exports=s},19216:d=>{function t(e){var s=document.createElement("style");return e.setAttributes(s,e.attributes),e.insert(s,e.options),s}d.exports=t},3565:(d,t,e)=>{function s(o){var r=e.nc;r&&o.setAttribute("nonce",r)}d.exports=s},7795:d=>{function t(o,r,a){var n="";a.supports&&(n+="@supports (".concat(a.supports,") {")),a.media&&(n+="@media ".concat(a.media," {"));var i=typeof a.layer!="undefined";i&&(n+="@layer".concat(a.layer.length>0?" ".concat(a.layer):""," {")),n+=a.css,i&&(n+="}"),a.media&&(n+="}"),a.supports&&(n+="}");var l=a.sourceMap;l&&typeof btoa!="undefined"&&(n+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(l))))," */")),r.styleTagTransform(n,o,r.options)}function e(o){if(o.parentNode===null)return!1;o.parentNode.removeChild(o)}function s(o){var r=o.insertStyleElement(o);return{update:function(n){t(r,o,n)},remove:function(){e(r)}}}d.exports=s},44589:d=>{function t(e,s){if(s.styleSheet)s.styleSheet.cssText=e;else{for(;s.firstChild;)s.removeChild(s.firstChild);s.appendChild(document.createTextNode(e))}}d.exports=t}}]);
