webpackJsonp([1],{"3SLu":function(t,e){},Dbsp:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("//Fk"),o=n.n(i),r=n("fZjL"),s=n.n(r),a=n("woOf"),d=n.n(a),u=n("Zrlr"),c=n.n(u),l=n("wxAW"),f=n.n(l),h=function(){function t(){c()(this,t),this.listeners={}}return f()(t,[{key:"on",value:function(t,e){void 0===this.listeners[t]&&(this.listeners[t]=[]),this.listeners[t].push(e)}},{key:"emit",value:function(t){this.listeners[t]&&this.listeners[t].forEach(function(t){return t()})}}]),t}(),m={name:"VueUeditorWrap",data:function(){return{id:"editor"+Math.random().toString().slice(-10),editor:null,defaultConfig:{UEDITOR_HOME_URL:"./static/UEditor/",enableAutoSave:!1}}},props:{value:{type:String,default:"Vue + UEditor + v-model双向绑定"},config:{type:Object,default:function(){return{}}},init:{type:Function,default:function(){return function(){}}},destroy:Boolean},computed:{mixedConfig:function(){return d()({},this.defaultConfig,this.config)}},methods:{registerButton:function(t){var e=t.name,n=t.icon,i=t.tip,o=t.handler,r=t.UE,s=void 0===r?window.UE:r;s.registerUI(e,function(t,e){t.registerCommand(e,{execCommand:function(){o(t,e)}});var r=new s.ui.Button({name:e,title:i,cssRules:"background-image: url("+n+") !important;background-size: cover;",onclick:function(){t.execCommand(e)}});return t.addListener("selectionchange",function(){var n=t.queryCommandState(e);-1===n?(r.setDisabled(!0),r.setChecked(!1)):(r.setDisabled(!1),r.setChecked(n))}),r})},_beforeInitEditor:function(t){var e=this;window.UE&&window.UEDITOR_CONFIG&&0!==s()(window.UEDITOR_CONFIG).length&&window.UE.getEditor?this._initEditor(t):this._loadScripts().then(function(){return e._initEditor(t)})},_initEditor:function(t){var e=this;this.$nextTick(function(){e.init(),e.editor=window.UE.getEditor(e.id,e.mixedConfig),e.editor.addListener("ready",function(){e.$emit("ready",e.editor),e.editor.setContent(t),e.editor.addListener("contentChange",function(){e.$emit("input",e.editor.getContent())})})})},_loadScripts:function(){var t=this;return window.loadEnv?new o.a(function(t,e){window.loadEnv.on("scriptsLoaded",function(){t()})}):(window.loadEnv=new h,new o.a(function(e,n){t._loadConfig().then(function(){return t._loadCore()}).then(function(){window.loadEnv.emit("scriptsLoaded"),e()})}))},_loadConfig:function(){var t=this;return new o.a(function(e,n){if(window.UE&&window.UEDITOR_CONFIG&&0!==s()(window.UEDITOR_CONFIG).length)e();else{var i=document.createElement("script");i.type="text/javascript",i.src=t.mixedConfig.UEDITOR_HOME_URL+"ueditor.config.js",document.getElementsByTagName("head")[0].appendChild(i),i.onload=function(){window.UE&&window.UEDITOR_CONFIG&&0!==s()(window.UEDITOR_CONFIG).length?e():console&&console.error("加载ueditor.config.js失败,请检查您的配置地址UEDITOR_HOME_URL填写是否正确!")}}})},_loadCore:function(){var t=this;return new o.a(function(e,n){if(window.UE&&window.UE.getEditor)e();else{var i=document.createElement("script");i.type="text/javascript",i.src=t.mixedConfig.UEDITOR_HOME_URL+"ueditor.all.min.js",document.getElementsByTagName("head")[0].appendChild(i),i.onload=function(){window.UE&&window.UE.getEditor?e():console&&console.error("加载ueditor.all.min.js失败,请检查您的配置地址UEDITOR_HOME_URL填写是否正确!")}}})},_setContent:function(t){t===this.editor.getContent()||this.editor.setContent(t)}},beforeDestroy:function(){this.destroy&&this.editor&&this.editor.destroy&&this.editor.destroy()},watch:{value:{handler:function(t){this.editor?this._setContent(t):this._beforeInitEditor(t)},immediate:!0}}},p={render:function(){var t=this.$createElement;return(this._self._c||t)("script",{attrs:{id:this.id,type:"text/plain"}})},staticRenderFns:[]},E=n("VU/8")(m,p,!1,null,null,null);e.default=E.exports},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("ul",{staticClass:"nav"},[e("router-link",{attrs:{to:{path:"/Home"},tag:"li"}},[this._v("主页")]),this._v(" "),e("router-link",{attrs:{to:{path:"/Empty"},tag:"li"}},[this._v("空白页")])],1),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var r=n("VU/8")({name:"App"},o,!1,function(t){n("OCtB")},"data-v-4b1889fb",null).exports,s=n("/ocq"),a=n("WMqk"),d={name:"HelloWorld",components:{VueUeditorWrap:n.n(a).a},data:function(){return{msg:'<h2><img src="http://img.baidu.com/hi/jx2/j_0003.gif"/>Vue + UEditor + v-model双向绑定</h2>',config:{UEDITOR_HOME_URL:"./static/UEditor/",autoHeightEnabled:!1,initialFrameHeight:240,initialFrameWidth:"100%",enableAutoSave:!1}}},methods:{ready:function(t){console.log("你要的实例"+t.key+"在此:",t)},showData:function(){alert(this.msg),console.log(this.msg)},myInit:function(){this.$refs.ueditor.forEach(function(t){t.registerButton({name:"test",icon:"./static/test-button.png",tip:"this is a test tip",handler:function(t,e){t.execCommand("inserthtml","<span>text inserted by test button</span>")}})})}}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("div",{staticClass:"preview",domProps:{innerHTML:t._s(t.msg)},on:{click:t.showData}}),t._v(" "),t._l(2,function(e){return n("vue-ueditor-wrap",{key:e,ref:"ueditor",refInFor:!0,attrs:{destroy:!1,config:t.config,init:t.myInit},on:{ready:t.ready},model:{value:t.msg,callback:function(e){t.msg=e},expression:"msg"}})})],2)},staticRenderFns:[]};var c=n("VU/8")(d,u,!1,function(t){n("3SLu")},null,null).exports,l={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("你瞅啥?")])},staticRenderFns:[]},f=n("VU/8")(null,l,!1,null,null,null).exports;i.a.use(s.a);var h=new s.a({routes:[{path:"*",redirect:"/Home"},{path:"/Home",component:c},{path:"/Empty",component:f}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:h,components:{App:r},template:"<App/>"})},OCtB:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.a436c0ded828017eab04.js.map