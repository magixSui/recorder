(function(e){function t(t){for(var o,c,s=t[0],l=t[1],a=t[2],p=0,f=[];p<s.length;p++)c=s[p],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);u&&u(t);while(f.length)f.shift()();return i.push.apply(i,a||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(o=!1)}o&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={index:0},i=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var a=0;a<s.length;a++)t(s[a]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"137d":function(e,t,n){"use strict";n("1d2f")},"1d2f":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},i=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("div",{staticClass:"btn-container"},[n("div",{staticClass:"button",on:{click:e.clear}},[e._v("重置")]),n("div",{staticClass:"button ml-1r",on:{click:e.changeColor}},[e._v("换色")])]),n("div",{staticClass:"board double-width"},e._l(e.pieces1,(function(t,o){return n("div",{key:"piece1"+o,staticClass:"card",class:e.color1,on:{mousedown:function(t){return t.target!==t.currentTarget?null:e.rightClick(t,"pieces1",o)},contextmenu:e.contextMenu}},[e._v(" "+e._s(t.value)+" ")])})),0),n("div",{staticClass:"flex"},[n("div",{staticClass:"board"},e._l(e.pieces2,(function(t,o){return n("div",{key:"piece2"+o,staticClass:"card",class:e.color2,on:{mousedown:function(t){return t.target!==t.currentTarget?null:e.rightClick(t,"pieces2",o)},contextmenu:e.contextMenu}},[e._v(" "+e._s(t.value)+" ")])})),0),n("div",{staticClass:"board"},e._l(e.pieces3,(function(t,o){return n("div",{key:"piece3"+o,staticClass:"card",class:e.color3,on:{mousedown:function(t){return t.target!==t.currentTarget?null:e.rightClick(t,"pieces3",o)},contextmenu:e.contextMenu}},[e._v(" "+e._s(t.value)+" ")])})),0)]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"mark",style:"top:"+e.top+"px;left:"+e.left+"px;"},[n("MarkCard",{on:{mark:e.mark,cancel:e.cancel,clear:e.clearMark}})],1),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showColor,expression:"showColor"}],staticClass:"flex color-container"},[n("div",{staticClass:"item yellow",on:{click:function(t){return e.setColor("yellow")}}}),n("div",{staticClass:"item blue",on:{click:function(t){return e.setColor("blue")}}}),n("div",{staticClass:"item green",on:{click:function(t){return e.setColor("green")}}}),n("div",{staticClass:"item purple",on:{click:function(t){return e.setColor("purple")}}})])])},s=[],l=(n("4160"),n("b0c0"),n("159b"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mark-card"},[n("div",{staticClass:"mark-card-container"},e._l(e.cards,(function(t,o){return n("div",{key:o,staticClass:"item",on:{click:function(n){return e.$emit("mark",t)}}},[e._v(" "+e._s(t.name)+" ")])})),0),n("div",{staticClass:"btn-container"},[n("div",{staticClass:"button",on:{click:function(t){return e.$emit("clear")}}},[e._v("清除")]),n("div",{staticClass:"button",on:{click:function(t){return e.$emit("cancel")}}},[e._v("取消")])])])}),a=[],u={name:"mark_card",data:function(){return{cards:[{name:"军"},{name:"师"},{name:"旅"},{name:"团"},{name:"营"},{name:"连"},{name:"排"},{name:"兵"},{name:"弹"},{name:"?"},{name:"小"},{name:"大"}]}}},p=u,f=(n("d24e"),n("2877")),d=Object(f["a"])(p,l,a,!1,null,"53661532",null),h=d.exports,v={name:"HelloWorld",components:{MarkCard:h},data:function(){return{show:!1,showColor:!1,left:0,top:0,pieces1:[],pieces2:[],pieces3:[],color1:"green",color2:"blue",color3:"purple",keyName:"",count:null}},props:{msg:String},mounted:function(){document.addEventListener("contextmenu",(function(e){e.preventDefault()}));for(var e=0;e<16;e++)this.pieces1.push({value:""}),this.pieces2.push({value:""}),this.pieces3.push({value:""})},methods:{clear:function(){this.reset(this.pieces1),this.reset(this.pieces2),this.reset(this.pieces3)},clearMark:function(){this.show=!1,this[this.keyName][this.count].value=""},cancel:function(){this.show=!1},reset:function(e){e.forEach((function(e){e.value=""}))},rightClick:function(e,t,n){this.show=!0,e.layerY>=90?this.top=90:this.top=e.layerY,e.layerX>=220?this.left=220:this.left=e.layerX,this.count=n,this.keyName=t},contextMenu:function(e){e.preventDefault()},mark:function(e){this.show=!1,this[this.keyName][this.count].value=e.name},changeColor:function(){this.showColor=!0},setColor:function(e){"yellow"===e&&(this.color1="green",this.color2="blue",this.color3="purple"),"blue"===e&&(this.color1="purple",this.color2="green",this.color3="yellow"),"green"===e&&(this.color1="yellow",this.color2="purple",this.color3="blue"),"purple"===e&&(this.color1="blue",this.color2="yellow",this.color3="green"),this.showColor=!1}}},m=v,b=(n("137d"),Object(f["a"])(m,c,s,!1,null,"387f27be",null)),C=b.exports,w={name:"App",components:{HelloWorld:C}},k=w,y=(n("034f"),Object(f["a"])(k,r,i,!1,null,null,null)),g=y.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(g)}}).$mount("#app")},"85ec":function(e,t,n){},d24e:function(e,t,n){"use strict";n("f6bb")},f6bb:function(e,t,n){}});
//# sourceMappingURL=index.1510e52b.js.map