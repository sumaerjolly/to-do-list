!function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(n,e,t){"use strict";t.r(e);t(1);console.log("Everything working hopefully")},function(n,e,t){var r=t(2);"string"==typeof r&&(r=[[n.i,r,""]]);var o={insert:"head",singleton:!1};t(4)(r,o);r.locals&&(n.exports=r.locals)},function(n,e,t){(n.exports=t(3)(!1)).push([n.i,":root {\n  --clr-primary: rgb(54, 112, 199);\n  --clr-light: #f4f4f4;\n  --clr-dark: #333;\n  --clr-warning: rgb(99, 36, 36);\n}\n\n*,\n*::before,\n*::after {\n  font-family: inherit;\n  box-sizing: border-box;\n}\n\nbody {\n  margin-left: 100px;\n  font-family: sans-serif;\n  font-weight: 300;\n  font-size: 1.5rem;\n  background-color: var(--clr-primary);\n  color: var(--clr-light);\n  display: grid;\n  grid:\n    'header header header header' auto\n    'lists active  active ......' auto/1fr minmax(100px, 300px)\n    minmax(250px, 500px) 1fr;\n}\n\n.title {\n  grid-area: header;\n  text-align: center;\n  font-size: calc(7vw + 2rem);\n  font-weight: 900;\n  color: rgba(0, 0, 0, 0.1);\n  letter-spacing: 2px;\n  margin: -0.1em 0 0.5em;\n}\n\n.all-tasks {\n  grid-area: lists;\n}\n\n.task-list {\n  font-size: 1.2rem;\n  line-height: 1.7;\n  list-style: circle;\n  padding-left: 1.1em;\n}\n\n.list-name {\n  cursor: pointer;\n}\n\n.list-name:hover {\n  opacity: 0.7;\n}\n\nform {\n  display: flex;\n}\n\n.btn {\n  cursor: pointer;\n  background: 0;\n  border: 0;\n  padding: 0;\n  color: inherit;\n}\n\n.btn.create {\n  font-size: 1.5rem;\n  font-weight: 900;\n  margin-right: 0.25em;\n  transition: opacity 250ms ease-in;\n}\n\n.btn.create:hover {\n  opacity: 0.7;\n}\n\n.btn.delete {\n  opacity: 0.7;\n  font-size: 1rem;\n  transition: color 200ms;\n}\n\n.btn.delete:hover {\n  color: var(--clr-warning);\n}\n\n.new {\n  background: transparent;\n  border: 0;\n  color: inherit;\n  border-bottom: 1px solid currentColor;\n  font-size: inherit;\n  outline: none;\n  padding: 0.25em;\n  transition: border-bottom 150ms ease-in;\n  order: 2;\n}\n\n.new::-webkit-input-placeholder {\n  opacity: 0.4;\n}\n\n.new:-ms-input-placeholder {\n  opacity: 0.4;\n}\n\n.new::-ms-input-placeholder {\n  opacity: 0.4;\n}\n\n.new::placeholder {\n  opacity: 0.4;\n}\n\n.new:focus {\n  border-bottom-width: 3px;\n}\n\n.new:focus::-webkit-input-placeholder {\n  opacity: 0.15;\n}\n\n.new:focus:-ms-input-placeholder {\n  opacity: 0.15;\n}\n\n.new:focus::-ms-input-placeholder {\n  opacity: 0.15;\n}\n\n.new:focus::placeholder {\n  opacity: 0.15;\n}\n\n.new.list {\n  font-size: 1.1rem;\n}\n\n.new.task {\n  margin-bottom: 0;\n}\n\n.active-list {\n  font-weight: 700;\n}\n\n.todo-list {\n  --spacer: 2rem;\n  grid-area: active;\n  background: var(--clr-light);\n  color: var(--clr-dark);\n}\n\n.todo-header {\n  padding: var(--spacer);\n  background: #e4e4e4;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.list-title {\n  margin: 0 1em 0 0;\n}\n\n.task-count {\n  margin: 0;\n  font-size: 1rem;\n}\n\n.todo-body {\n  padding: var(--spacer);\n  position: relative;\n}\n\n.new-task-creator .create {\n  color: var(--clr-primary);\n}\n\n[type='checkbox'] {\n  opacity: 0;\n  position: absolute;\n}\n\n.task label {\n  display: flex-inline;\n  align-items: center;\n  position: relative;\n}\n\n.task {\n  position: relative;\n  margin-bottom: 1.25em;\n}\n\n.task::after {\n  content: '';\n  position: absolute;\n  right: 0;\n  left: 0;\n  bottom: -0.5em;\n  height: 1px;\n  background: currentColor;\n  opacity: 0.1;\n}\n\n.custom-checkbox {\n  --size: 0.75em;\n  display: inline-block;\n  width: var(--size);\n  height: var(--size);\n  margin-right: var(--size);\n  cursor: pointer;\n  border: 2px solid currentColor;\n  border-radius: 50%;\n  -webkit-transform: scale(1);\n  transform: scale(1);\n  transition: -webkit-transform 300ms ease-in-out;\n  transition: transform 300ms ease-in-out;\n  transition: transform 300ms ease-in-out, -webkit-transform 300ms ease-in-out;\n}\n\n.task:hover .custom-checkbox,\n[type='checkbox']:focus + label .custom-checkbox {\n  -webkit-transform: scale(1.2);\n  transform: scale(1.2);\n  color: var(--clr-primary);\n}\n\n[type='checkbox']:checked + label .custom-checkbox {\n  background: var(--clr-primary);\n  border-color: var(--clr-primary);\n  box-shadow: inset 0 0 0px 2px white;\n}\n\n[type='checkbox']:checked + label {\n  opacity: 0.5;\n}\n\n.task label::after {\n  content: '';\n  position: absolute;\n  left: 0;\n  right: 0;\n  left: 1.5em;\n  top: 50%;\n  height: 3px;\n  background: currentColor;\n  -webkit-transform: scaleX(0);\n  transform: scaleX(0);\n  -webkit-transform-origin: right;\n  transform-origin: right;\n  transition: -webkit-transform 150ms ease-in-out;\n  transition: transform 150ms ease-in-out;\n  transition: transform 150ms ease-in-out, -webkit-transform 150ms ease-in-out;\n}\n\n[type='checkbox']:checked + label::after {\n  -webkit-transform: scaleX(1);\n  transform: scaleX(1);\n  -webkit-transform-origin: left;\n  transform-origin: left;\n}\n\n.delete-stuff {\n  display: flex;\n  justify-content: space-evenly;\n  position: absolute;\n  width: 100%;\n  left: 0;\n  bottom: -35px;\n  color: var(--clr-light);\n}\n\n.red-icon {\n  color: red;\n}\n\n.priority {\n  position: absolute;\n  right: 0px;\n  font-size: 0.5em;\n}\n\n.delete-icon {\n  position: absolute;\n  right: 20px;\n  font-size: 0.5em;\n}\n",""])},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var o=(a=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),i=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot).concat(n," */")}));return[t].concat(i).concat([o]).join("\n")}var a,s,c;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2],"{").concat(t,"}"):t})).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(var a=0;a<n.length;a++){var s=n[a];null!=s[0]&&r[s[0]]||(t&&!s[2]?s[2]=t:t&&(s[2]="(".concat(s[2],") and (").concat(t,")")),e.push(s))}},e}},function(n,e,t){"use strict";var r,o={},i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}();function s(n,e){for(var t=[],r={},o=0;o<n.length;o++){var i=n[o],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):t.push(r[a]={id:a,parts:[s]})}return t}function c(n,e){for(var t=0;t<n.length;t++){var r=n[t],i=o[r.id],a=0;if(i){for(i.refs++;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(h(r.parts[a],e))}else{for(var s=[];a<r.parts.length;a++)s.push(h(r.parts[a],e));o[r.id]={id:r.id,refs:1,parts:s}}}}function l(n){var e=document.createElement("style");if(void 0===n.attributes.nonce){var r=t.nc;r&&(n.attributes.nonce=r)}if(Object.keys(n.attributes).forEach((function(t){e.setAttribute(t,n.attributes[t])})),"function"==typeof n.insert)n.insert(e);else{var o=a(n.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var u,f=(u=[],function(n,e){return u[n]=e,u.filter(Boolean).join("\n")});function p(n,e,t,r){var o=t?"":r.css;if(n.styleSheet)n.styleSheet.cssText=f(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function d(n,e,t){var r=t.css,o=t.media,i=t.sourceMap;if(o&&n.setAttribute("media",o),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var m=null,b=0;function h(n,e){var t,r,o;if(e.singleton){var i=b++;t=m||(m=l(e)),r=p.bind(null,t,i,!1),o=p.bind(null,t,i,!0)}else t=l(e),r=d.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=i());var t=s(n,e);return c(t,e),function(n){for(var r=[],i=0;i<t.length;i++){var a=t[i],l=o[a.id];l&&(l.refs--,r.push(l))}n&&c(s(n,e),e);for(var u=0;u<r.length;u++){var f=r[u];if(0===f.refs){for(var p=0;p<f.parts.length;p++)f.parts[p]();delete o[f.id]}}}}}]);