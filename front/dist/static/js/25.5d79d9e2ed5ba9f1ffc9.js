webpackJsonp([25],{Dusb:function(a,e,t){e=a.exports=t("FZ+f")(!1),e.push([a.i,"\n.applyShop {\n  background: #fff;\n  padding-bottom: 20px;\n}\n.applyShop .title {\n    font-size: 20px;\n    text-align: center;\n    font-weight: 600;\n    padding: 30px;\n}\n.applyShop .status {\n    text-align: center;\n    color: #e00101;\n}\n.applyShop .el-form._el-form {\n    margin: 30px auto 0;\n    width: 60%;\n}\n.applyShop .avatar-uploader .el-upload {\n    border: 1px dashed #d9d9d9;\n    border-radius: 6px;\n    cursor: pointer;\n    position: relative;\n    overflow: hidden;\n}\n.applyShop .avatar-uploader .el-upload:hover {\n      border-color: #409EFF;\n}\n.applyShop .avatar-uploader-icon {\n    font-size: 28px;\n    color: #8c939d;\n    height: 178px;\n    line-height: 178px;\n    text-align: center;\n}\n.applyShop .avatar {\n    height: 178px;\n    display: block;\n}\n.applyShop .el-input-group__prepend {\n    padding: 0;\n    border: none;\n}\n.applyShop .el-input-group__prepend .el-cascader {\n      width: 150px;\n}\n",""])},IH1w:function(a,e,t){var r=t("Dusb");"string"==typeof r&&(r=[[a.i,r,""]]),r.locals&&(a.exports=r.locals);t("rjj0")("10307cac",r,!0,{})},QQOC:function(a,e,t){"use strict";function r(a){t("IH1w")}Object.defineProperty(e,"__esModule",{value:!0});var s=t("woOf"),l=t.n(s),o=t("Dd8w"),i=t.n(o),n=t("NYxO"),p=t("pN2o"),d=t("cD3F"),c=t("OOMk"),u=c.a.user.upload,m={data:function(){return{logoUrl:"",Applyed:!1,imgUrl:"",cardPic:"",status:"",TRUE:"",uploadUrl:u,longitude:"",latitude:"",validateForm:{abstract:"",name:"",type:[],address:"",cardId:""}}},computed:i()({},Object(n.c)("user",["cityOptions","suggestionsList","userInfo","shopTypeList"]),{types:function(){return this.shopTypeList.map(function(a){return{label:a.shopType,value:a.shopTypeCode}})}}),created:function(){this.getApplyStatus(),this.initCity()},methods:{submitForm:function(a){var e=this;this.$refs[a].validate(function(a){if(!a)return console.log("error submit!!"),!1;if(!e.imgUrl||!e.logoUrl)return e.$message({type:"error",message:"请上传图片"}),!1;var t=e.logoUrl,r=e.imgUrl,s=e.cardPic,l=e.longitude,o=e.latitude,i=e.userInfo.userId,n=e.validateForm,d=n.name,c=n.abstract,u=n.cardId,m=n.type,f=n.address;Object(p.a)(i,d,c,u,m,f,t,s,r,l,o).then(function(a){1===a.code?e.$message({type:"success",message:"已提交申请!"}):e.$message({type:"error",message:"操作失败"})})})},getApplyStatus:function(){var a=this,e=this.userInfo.userId;Object(p.d)(e).then(function(e){1===e.code&&(a.validateForm=l()(a.validateForm,{abstract:e.data.shopAbstract,name:e.data.shopName,type:a.types.find(function(a){return a.value===e.data.shopType}).label,address:e.data.shopLocation,cardId:e.data.identificationNum}),a.logoUrl=e.data.shopLogo,a.imgUrl=e.data.identificationPic,a.cardPic=e.data.shopAuthImages,a.status=d.a.applyStatus[e.data.shopStatus],a.Applyed=!0)})},logoSuccess:function(a,e){this.logoUrl=a.data.imageUrl},img1Success:function(a,e){this.imgUrl=a.data.imageUrl},cardPicSuccess:function(a,e){this.cardPic=a.data.imageUrl},beforeAvatarUpload:function(a){var e="image/jpeg"===a.type||"image/png"||"image/gif",t=a.size/1024/1024<5;return e||this.$message.error("上传图片只能是 JPG 格式!"),t||this.$message.error("上传图片大小不能超过 5MB!"),e&&t},initCity:function(){var a=this;Object(p.l)().then(function(e){a.longitude=e.point.x,a.latitude=e.point.y})}}},f=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"applyShop"},[t("p",{staticClass:"title"},[a._v("店铺申请")]),a._v(" "),a.Applyed?t("p",{staticClass:"status"},[a._v("审核状态："+a._s(a.status))]):a._e(),a._v(" "),t("el-form",{ref:"validateForm",staticClass:"demo-ruleForm _el-form",attrs:{model:a.validateForm,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"店铺名称",prop:"name",rules:[{required:!0,message:"名称不能为空"}]}},[t("el-input",{attrs:{type:"name",disabled:a.Applyed,"auto-complete":"off"},model:{value:a.validateForm.name,callback:function(e){a.$set(a.validateForm,"name",e)},expression:"validateForm.name"}})],1),a._v(" "),t("el-form-item",{attrs:{label:"简介",prop:"abstract",rules:[{required:!0,message:"联系人不能为空"}]}},[t("el-input",{attrs:{type:"abstract",disabled:a.Applyed,"auto-complete":"off"},model:{value:a.validateForm.abstract,callback:function(e){a.$set(a.validateForm,"abstract",e)},expression:"validateForm.abstract"}})],1),a._v(" "),t("el-form-item",{attrs:{label:"身份证",prop:"cardId",rules:[{required:!0,message:"身份证不能为空"}]}},[t("el-input",{attrs:{type:"userId",disabled:a.Applyed,"auto-complete":"off"},model:{value:a.validateForm.cardId,callback:function(e){a.$set(a.validateForm,"cardId",e)},expression:"validateForm.cardId"}})],1),a._v(" "),t("el-form-item",{attrs:{label:"类型",prop:"type",rules:[{required:!0,message:"类型不能为空"}]}},[t("el-select",{attrs:{disabled:a.Applyed,placeholder:"请选择商铺类型"},model:{value:a.validateForm.type,callback:function(e){a.$set(a.validateForm,"type",e)},expression:"validateForm.type"}},a._l(a.types,function(a){return t("el-option",{key:a.value,attrs:{label:a.label,value:a.value}})}),1)],1),a._v(" "),t("el-form-item",{attrs:{label:"地址",prop:"address",rules:[{required:!0,message:"地址不能为空"}]}},[t("el-input",{attrs:{type:"address",disabled:a.Applyed,"auto-complete":"off"},model:{value:a.validateForm.address,callback:function(e){a.$set(a.validateForm,"address",e)},expression:"validateForm.address"}})],1),a._v(" "),t("el-form-item",{attrs:{label:"logo",prop:"logoUrl"}},[a.Applyed?t("img",{staticClass:"avatar",attrs:{src:a.logoUrl}}):t("el-upload",{staticClass:"avatar-uploader",attrs:{action:a.uploadUrl,name:"image","with-credentials":a.TRUE,"show-file-list":!1,drag:!0,"on-success":a.logoSuccess,"before-upload":a.beforeAvatarUpload}},[a.logoUrl?t("img",{staticClass:"avatar",attrs:{src:a.logoUrl}}):t("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),a._v(" "),t("el-form-item",{attrs:{label:"身份证照片",prop:"cardPic"}},[a.Applyed?t("img",{staticClass:"avatar",attrs:{src:a.cardPic}}):t("el-upload",{staticClass:"avatar-uploader",attrs:{action:a.uploadUrl,name:"image","with-credentials":a.TRUE,"show-file-list":!1,drag:!0,"on-success":a.cardPicSuccess,"before-upload":a.beforeAvatarUpload}},[a.cardPic?t("img",{staticClass:"avatar",attrs:{src:a.cardPic}}):t("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),a._v(" "),t("el-form-item",{attrs:{label:"商铺照片",prop:"imgUrl"}},[a.Applyed?t("img",{staticClass:"avatar",attrs:{src:a.imgUrl}}):t("el-upload",{staticClass:"avatar-uploader",attrs:{action:a.uploadUrl,name:"image","with-credentials":a.TRUE,"show-file-list":!1,drag:!0,"on-success":a.img1Success,"before-upload":a.beforeAvatarUpload}},[a.imgUrl?t("img",{staticClass:"avatar",attrs:{src:a.imgUrl}}):t("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),a._v(" "),t("el-form-item",[a.Applyed?a._e():t("el-button",{attrs:{type:"primary"},on:{click:function(e){a.submitForm("validateForm")}}},[a._v("提交")])],1)],1)],1)},g=[],v={render:f,staticRenderFns:g},h=v,y=t("VU/8"),b=r,U=y(m,h,!1,b,null,null);e.default=U.exports}});