webpackJsonp([4],{"/mA8":function(n,t,a){var e=a("CFf6");"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);a("rjj0")("2bbb7f2b",e,!0,{})},"1WHb":function(n,t,a){"use strict";function e(n){a("/mA8")}var o=a("WGpD"),r=a.n(o),i=a("xonq"),s=a("VU/8"),d=e,l=s(r.a,i.a,!1,d,"data-v-338bc298",null);t.default=l.exports},"2RJg":function(n,t,a){t=n.exports=a("FZ+f")(!1),t.push([n.i,"\nheader[data-v-d7842208] {\n  background-color: #1e89e0;\n}\n.container[data-v-d7842208] {\n  margin: 0 auto;\n  width: 80%;\n}\n.logo[data-v-d7842208] {\n  font-size: 28px;\n  margin-right: 10px;\n  text-decoration: none;\n  color: #fff;\n  background: transparent !important;\n}\n.nav[data-v-d7842208] {\n  width: 100px;\n  color: #fff;\n  line-height: 60px;\n  text-align: center;\n}\n.nav[data-v-d7842208]:hover {\n    background: #0c77d1;\n}\n.router-link-active[data-v-d7842208] {\n  background: #006bc7;\n}\n.router-link-active[data-v-d7842208]:hover {\n    background: #006bc7;\n}\n.fr[data-v-d7842208] {\n  text-align: right;\n}\n.fr[data-v-d7842208]:hover {\n    background: transparent;\n}\n.fr.router-link-active[data-v-d7842208] {\n    background: transparent;\n}\n.rightNav[data-v-d7842208] {\n  width: 100px;\n}\n.login[data-v-d7842208] {\n  color: #fff;\n  background: transparent;\n}\n.login.router-link-active[data-v-d7842208] {\n    background: transparent;\n}\n.login[data-v-d7842208]:hover {\n    background: transparent;\n}\n.el-dropdown-link[data-v-d7842208] {\n  color: #fff;\n  line-height: 60px;\n  display: block;\n  cursor: default;\n}\n.el-dropdown-menu .router-link-active[data-v-d7842208] {\n  background: transparent;\n}\n.kaidian[data-v-d7842208] {\n  margin-top: 20px;\n  margin-left: 10px;\n  padding: 3px;\n  font-size: 12px;\n  color: #fff;\n  background: #5db423 !important;\n  border-radius: 3px;\n}\n.kaidian[data-v-d7842208]:hover {\n    background: #5db423;\n}\n.userName[data-v-d7842208] {\n  width: 200px;\n}\n",""])},CFf6:function(n,t,a){t=n.exports=a("FZ+f")(!1),t.push([n.i,"\nfooter[data-v-338bc298] {\n  width: 100%;\n  height: 100px;\n  background: #fff;\n}\n.footer[data-v-338bc298] {\n  text-align: center;\n}\n.footer p[data-v-338bc298] {\n    line-height: 40px;\n    color: #999;\n}\n",""])},DKbr:function(n,t,a){"use strict";function e(n){a("eK9h")}Object.defineProperty(t,"__esModule",{value:!0});var o=a("Dd8w"),r=a.n(o),i=a("V9R3"),s=a("1WHb"),d=a("NYxO"),l={components:{userHeader:i.a,userFooter:s.default},methods:r()({},Object(d.b)("user",["logOut"]),Object(d.d)({noteKaidian:"user/NOTE_KAIDIAN",clearKaidianNote:"user/CLEAR_KAIDIAN_NOTE"}),{kaidian:function(){var n=this;this.userInfo.name?(this.$confirm("是否马上申请开店?","提示",{confirmButtonText:"申请",cancelButtonText:"取消",type:"info"}).then(function(){n.$router.push("/applyShop")}).catch(function(){n.normalLogin()}),this.clearKaidianNote()):(this.$message({showClose:!0,message:"开店请先登录"}),this.noteKaidian(),this.$router.push("/login"))},_logOut:function(){this.logOut(),this.$message({showClose:!0,message:"已退出"}),this.$router.push("/")}}),computed:r()({},Object(d.c)("user",["userInfo"]),{home:function(){return"/home"===this.$route.path}})},c=function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{attrs:{id:"app"}},[a("user-header",{attrs:{home:n.home,logo:"https://www.baidu.com/img/baidu_jgylogo3.gif",userInfo:n.userInfo},on:{kaidian:n.kaidian,logOut:n._logOut}}),n._v(" "),a("div",{staticClass:"main"},[n._v("页面已经被吃掉了...")]),n._v(" "),a("user-footer")],1)},u=[],f={render:c,staticRenderFns:u},p=f,v=a("VU/8"),h=e,g=v(l,p,!1,h,"data-v-14e9731e",null);t.default=g.exports},V9R3:function(n,t,a){"use strict";function e(n){a("sYi0")}var o={props:{home:{type:Boolean,default:!1},logo:{type:String,default:""},userInfo:{type:Object,default:function(){return{}}}},data:function(){return{timeout:150}},methods:{kaidian:function(){this.$emit("kaidian")},logOut:function(){this.$emit("logOut")}}},r=function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("header",[a("div",{staticClass:"container clearfix"},[a("router-link",{staticClass:"fl nav logo",attrs:{to:"/place",tag:"a"}},[n._v("吃货宝")]),n._v(" "),a("router-link",{directives:[{name:"show",rawName:"v-show",value:!n.home,expression:"!home"}],staticClass:"fl nav",attrs:{to:"/place",tag:"a"}},[n._v("首 页")]),n._v(" "),a("router-link",{directives:[{name:"show",rawName:"v-show",value:!n.home,expression:"!home"}],staticClass:"fl nav",attrs:{to:"/order",tag:"a"}},[n._v("我的订单")]),n._v(" "),n.userInfo.userName?n._e():a("router-link",{staticClass:"kaidian fr",attrs:{to:""}},[a("span",{on:{click:n.kaidian}},[n._v("我要开店")])]),n._v(" "),n.userInfo.userName?a("el-col",{staticClass:"fr nav userName",attrs:{span:12}},[a("el-dropdown",{attrs:{"show-timeout":n.timeout}},[a("span",{staticClass:"el-dropdown-link"},[n._v("\n          "+n._s(n.userInfo.userName)),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),n._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",[a("router-link",{attrs:{to:"/profile"}},[n._v("个人中心")])],1),n._v(" "),a("el-dropdown-item",[a("router-link",{attrs:{to:""}},[a("span",{on:{click:n.kaidian}},[n._v("我要开店")])])],1),n._v(" "),a("el-dropdown-item",[a("router-link",{attrs:{to:""}},[a("p",{on:{click:n.logOut}},[n._v("退出")])])],1)],1)],1)],1):a("router-link",{staticClass:"fr nav rightNav",attrs:{to:"",tag:"a"}},[a("router-link",{staticClass:"login",attrs:{to:"/login"}},[n._v("登录")]),n._v(" "),a("router-link",{staticClass:"login",attrs:{to:"/register"}},[n._v("| 注册")])],1)],1)])},i=[],s={render:r,staticRenderFns:i},d=s,l=a("VU/8"),c=e,u=l(o,d,!1,c,"data-v-d7842208",null);t.a=u.exports},WGpD:function(n,t){},eK9h:function(n,t,a){var e=a("kZ2g");"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);a("rjj0")("12f270fd",e,!0,{})},kZ2g:function(n,t,a){t=n.exports=a("FZ+f")(!1),t.push([n.i,"\n#app[data-v-14e9731e] {\n  height: 100%;\n  width: 100%;\n}\n#app .main[data-v-14e9731e] {\n    min-height: 550px;\n    text-align: center;\n    padding-top: 250px;\n}\n",""])},sYi0:function(n,t,a){var e=a("2RJg");"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);a("rjj0")("2301aef0",e,!0,{})},xonq:function(n,t,a){"use strict";var e=function(){var n=this,t=n.$createElement;n._self._c;return n._m(0)},o=[function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("footer",[a("div",{staticClass:"container footer"},[a("p",[n._v("吃货宝点餐系统")])])])}],r={render:e,staticRenderFns:o};t.a=r}});