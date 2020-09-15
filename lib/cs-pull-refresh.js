!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueDropUpload=t():e.VueDropUpload=t()}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function s(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,s),o.l=!0,o.exports}return s.m=e,s.c=t,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s(s.s=155)}({0:function(e,t){!function(){if(!window.$circles){window.$circles=function(){},function(e,t){var s=t.documentElement,n=e.devicePixelRatio||1;function o(){var e=s.clientWidth/7.5;s.style.fontSize=e+"px"}if(function e(){t.body?t.body.style.fontSize=12*n+"px":t.addEventListener("DOMContentLoaded",e)}(),o(),e.addEventListener("resize",o),e.addEventListener("pageshow",function(e){e.persisted&&o()}),n>=2){var r=t.createElement("body"),a=t.createElement("div");a.style.border=".5px solid transparent",r.appendChild(a),s.appendChild(r),1===a.offsetHeight&&s.classList.add("hairlines"),s.removeChild(r)}}(window,document),e=document.createElement("script"),t=document.createElement("link"),s=document.getElementsByTagName("html")[0],(n=document.createElement("style")).type="text/css",n.innerHTML="\n                :root {\n                    --color: #1989fa;\n                    --inactiveColor: #7d7e80;\n                    --disabledColor: #ebedf0;\n                }\n                \n                :root[data-theme='Primary'] {\n                  --color: #1989fa;\n                  --inactiveColor: #7d7e80;\n                  --disabledColor: #ebedf0;\n                }\n                \n                :root[data-theme='Success'] {\n                  --color: #69c23a;\n                  --inactiveColor: #7d7e80;\n                  --disabledColor: #ebedf0;\n                }\n                \n                :root[data-theme='Warning'] {\n                  --color: #E6A23C;\n                  --inactiveColor: #7d7e80;\n                  --disabledColor: #ebedf0;\n                }\n                \n                :root[data-theme='Danger'] {\n                  --color: #FF2C7D;\n                  --inactiveColor: #7d7e80;\n                  --disabledColor: #ebedf0;\n                }\n                \n                :root[data-theme='Info'] {\n                  --color: #909399;\n                  --inactiveColor: #7d7e80;\n                  --disabledColor: #ebedf0;\n                }\n            ",e.src="//at.alicdn.com/t/font_1665721_rljtpy8bxgg.js",e.type="text/javascript",t.href="//at.alicdn.com/t/font_1665721_rljtpy8bxgg.css",t.rel="stylesheet",s.appendChild(t),s.appendChild(n),s.appendChild(e),Array.prototype.shuffle=function(){for(var e,t,s=this.length;s;)t=Math.floor(Math.random()*s--),e=this[s],this[s]=this[t],this[t]=e;return this}}var e,t,s,n}()},1:function(e,t,s){"use strict";t.a=function(e,t,s,n,o,r,a,i){var l=typeof(e=e||{}).default;"object"!==l&&"function"!==l||(e=e.default);var u,c="function"==typeof e?e.options:e;t&&(c.render=t,c.staticRenderFns=s,c._compiled=!0);n&&(c.functional=!0);r&&(c._scopeId=r);a?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},c._ssrRegister=u):o&&(u=i?function(){o.call(this,this.$root.$options.shadowRoot)}:o);if(u)if(c.functional){c._injectStyles=u;var f=c.render;c.render=function(e,t){return u.call(t),f(e,t)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,u):[u]}return{exports:e,options:c}}},155:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(0),o=(s.n(n),s(156));o.a.install=function(e){e.component(o.a.name,o.a)},t.default=o.a},156:function(e,t,s){"use strict";var n=s(97),o=s(158),r=s(1);var a=function(e){s(157)},i=Object(r.a)(n.a,o.a,o.b,!1,a,"data-v-6d5f3b32",null);t.a=i.exports},157:function(e,t){},158:function(e,t,s){"use strict";s.d(t,"a",function(){return n}),s.d(t,"b",function(){return o});var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{ref:"csPullRefresh",staticClass:"cs-pullRefresh",style:"background: "+e.backgroundColor,on:{touchstart:function(t){return t.stopPropagation(),e.touchStart(t)},touchmove:function(t){return t.stopPropagation(),e.touchMove(t)},touchend:function(t){return t.stopPropagation(),e.touchEnd(t)}}},[s("div",{ref:"cs-pullRefresh-track",staticClass:"cs-pullRefresh-track",style:"margin-top: -"+e.headHeight+"px;"},[s("div",{staticClass:"cs-pullRefresh-track-head",style:"height: "+e.headHeight+"px;"},[s("p",{directives:[{name:"show",rawName:"v-show",value:"pull"===e.pullRefreshStatus,expression:"pullRefreshStatus === 'pull'"}]},[e._v(e._s(e.pullingText))]),e._v(" "),s("p",{directives:[{name:"show",rawName:"v-show",value:"loos"===e.pullRefreshStatus,expression:"pullRefreshStatus === 'loos'"}]},[e._v(e._s(e.loosingText))]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:"loading"===e.pullRefreshStatus,expression:"pullRefreshStatus === 'loading'"}],staticClass:"cs-pullRefresh-track-head-loading"},[s("svg",{staticClass:"cs-pullRefresh-loading aniRotate",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#iconloading"}})]),e._v(" "),s("p",[e._v(e._s(e.loadingText))])]),e._v(" "),s("p",{directives:[{name:"show",rawName:"v-show",value:"success"===e.pullRefreshStatus,expression:"pullRefreshStatus === 'success'"}]},[e._v(e._s(e.successText))])]),e._v(" "),e._t("default")],2)])},o=[]},97:function(e,t,s){"use strict";var n=void 0;t.a={name:"csPullRefresh",data:function(){return{pullRefreshStatus:"pull"}},props:{maxMoveDistance:{type:Number,default:120},isLoading:{type:Boolean,default:!1},isPullRefresh:{type:Boolean,default:!0},"pulling-text":{type:String,default:"下拉即可刷新..."},"loosing-text":{type:String,default:"释放即可刷新..."},"loading-text":{type:String,default:"加载中..."},"success-text":{type:String,default:"刷新成功"},"head-height":{type:Number,default:50},lower:{type:Number,default:50},isThrottling:{type:Boolean,default:!1},backgroundColor:{type:String,default:"#fafafa"}},model:{prop:"isLoading",event:"refresh"},mounted:function(){this.$refs.csPullRefresh.parentNode.addEventListener("scroll",this.fncThr(this.scroll))},methods:{fncThr:function(e){var t=void 0,s=this;return function(){s.$emit("bindscroll",arguments[0]),t||(t=!0,e(s,arguments,function(){t=!1}))}},scroll:function(e,t,s){var n=this.$refs.csPullRefresh.parentNode,o=n.scrollHeight,r=n.clientHeight,a=n.scrollTop;a+r+e.lower>=o?e.isThrottling?e.$emit("scrolltolower",s):(e.$emit("scrolltolower"),s()):s(),t[0].stopPropagation()},touchStart:function(e){n=e.targetTouches[0].pageY,e.stopPropagation()},touchMove:function(e){if(this.isPullRefresh&&0===this.$refs.csPullRefresh.parentNode.scrollTop){if(e.targetTouches[0].pageY-n<0)return;if(e.preventDefault(),"pull"===this.pullRefreshStatus||"loos"===this.pullRefreshStatus){e.targetTouches[0].pageY-n>this.headHeight?this.pullRefreshStatus="loos":this.pullRefreshStatus="pull";var t=this.$refs["cs-pullRefresh-track"];t.style.transition="-webkit-transform 0 ease-out";var s=e.targetTouches[0].pageY-n>this.maxMoveDistance?this.maxMoveDistance:e.targetTouches[0].pageY-n;t.style.webkitTransform="translate(0, "+s+"px)"}}e.stopPropagation()},touchEnd:function(e){if(this.isPullRefresh&&0===this.$refs.csPullRefresh.parentNode.scrollTop){var t=this.$refs["cs-pullRefresh-track"];"loos"===this.pullRefreshStatus?(t.style.transition="-webkit-transform 200ms ease-out",t.style.webkitTransform="translate(0, "+this.headHeight+"px)",this.pullRefreshStatus="loading",this.$emit("refresh",!0)):"pull"===this.pullRefreshStatus&&(t.style.transition="-webkit-transform 200ms ease-out",t.style.webkitTransform="translate(0, 0px)")}}},watch:{isLoading:function(e){var t=this;if(!e){this.pullRefreshStatus="success";var s=this.$refs["cs-pullRefresh-track"];s.style.transition="-webkit-transform 400ms ease-out",s.style.webkitTransform="translate(0, 0px)",setTimeout(function(){t.pullRefreshStatus="pull"},200)}}}}}})});
//# sourceMappingURL=cs-pull-refresh.js.map