"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[36820],{79874:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(93106);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(a),d=r,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||l;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},81564:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});a(93106);var n=a(79874);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const i={title:"Taro.saveFile(option)",sidebar_label:"saveFile"},o=void 0,p={unversionedId:"apis/files/saveFile",id:"version-3.x/apis/files/saveFile",title:"Taro.saveFile(option)",description:"\u4fdd\u5b58\u6587\u4ef6\u5230\u672c\u5730\u3002\u6ce8\u610f\uff1asaveFile \u4f1a\u628a\u4e34\u65f6\u6587\u4ef6\u79fb\u52a8\uff0c\u56e0\u6b64\u8c03\u7528\u6210\u529f\u540e\u4f20\u5165\u7684 tempFilePath \u5c06\u4e0d\u53ef\u7528",source:"@site/versioned_docs/version-3.x/apis/files/saveFile.md",sourceDirName:"apis/files",slug:"/apis/files/saveFile",permalink:"/taro-docs/docs/apis/files/saveFile",editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/apis/files/saveFile.md",tags:[],version:"3.x",frontMatter:{title:"Taro.saveFile(option)",sidebar_label:"saveFile"},sidebar:"API",previous:{title:"saveFileToDisk",permalink:"/taro-docs/docs/apis/files/saveFileToDisk"},next:{title:"removeSavedFile",permalink:"/taro-docs/docs/apis/files/removeSavedFile"}},s={},c=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"Option",id:"option",level:3},{value:"FailCallbackResult",id:"failcallbackresult",level:3},{value:"SuccessCallbackResult",id:"successcallbackresult",level:3},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2}],u={toc:c};function m(e){var{components:t}=e,i=l(e,["components"]);return(0,n.kt)("wrapper",r({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u4fdd\u5b58\u6587\u4ef6\u5230\u672c\u5730\u3002",(0,n.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1asaveFile \u4f1a\u628a\u4e34\u65f6\u6587\u4ef6\u79fb\u52a8\uff0c\u56e0\u6b64\u8c03\u7528\u6210\u529f\u540e\u4f20\u5165\u7684 tempFilePath \u5c06\u4e0d\u53ef\u7528")),(0,n.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,n.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(21207).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f",src:a(58884).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"H5",src:a(56174).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"React Native",src:a(82078).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"Harmony",src:a(13555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.saveFile.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("h2",r({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<FailCallbackResult | SuccessCallbackResult>\n")),(0,n.kt)("h2",r({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"option"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Option"))))),(0,n.kt)("h3",r({},{id:"option"}),"Option"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"\u5fc5\u586b"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"tempFilePath"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u662f"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u4e34\u65f6\u5b58\u50a8\u6587\u4ef6\u8def\u5f84")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"complete"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"fail"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"(result: FailCallbackResult) => void")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"filePath"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u8981\u5b58\u50a8\u7684\u6587\u4ef6\u8def\u5f84")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"success"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"(result: SuccessCallbackResult) => void")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,n.kt)("h3",r({},{id:"failcallbackresult"}),"FailCallbackResult"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"errMsg"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u9519\u8bef\u4fe1\u606f",(0,n.kt)("br",null),(0,n.kt)("br",null),"\u53ef\u9009\u503c\uff1a",(0,n.kt)("br",null),"- 'fail tempFilePath file not exist': \u6307\u5b9a\u7684 tempFilePath \u627e\u4e0d\u5230\u6587\u4ef6;",(0,n.kt)("br",null),"- 'fail permission denied, open \"${filePath}\"': \u6307\u5b9a\u7684 filePath \u8def\u5f84\u6ca1\u6709\u5199\u6743\u9650;",(0,n.kt)("br",null),"- 'fail no such file or directory \"${dirPath}\"': \u4e0a\u7ea7\u76ee\u5f55\u4e0d\u5b58\u5728;",(0,n.kt)("br",null),"- 'fail the maximum size of the file storage limit is exceeded': \u5b58\u50a8\u7a7a\u95f4\u4e0d\u8db3;")))),(0,n.kt)("h3",r({},{id:"successcallbackresult"}),"SuccessCallbackResult"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"savedFilePath"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u5b58\u50a8\u540e\u7684\u6587\u4ef6\u8def\u5f84")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"errMsg"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u8c03\u7528\u7ed3\u679c")))),(0,n.kt)("h2",r({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"Taro.chooseImage({\n  success: function (res) {\n    var tempFilePaths = res.tempFilePaths\n    Taro.saveFile({\n      tempFilePath: tempFilePaths[0],\n      success: function (res) {\n        var savedFilePath = res.savedFilePath\n      }\n    })\n  }\n})\n")))}m.isMDXComponent=!0},56174:function(e,t,a){t.Z=a.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},13555:function(e,t,a){t.Z=a.p+"assets/images/harmony-736bf88652a8ed1b8d792107239a9004.png"},82078:function(e,t,a){t.Z=a.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},58884:function(e,t,a){t.Z=a.p+"assets/images/tt-f4ec120e570f924e7ef763dcaf7fc69d.png"},21207:function(e,t,a){t.Z=a.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);