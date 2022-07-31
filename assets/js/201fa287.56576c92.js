"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[75001],{79874:function(t,e,n){n.d(e,{Zo:function(){return i},kt:function(){return k}});var r=n(93106);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),u=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},i=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,s=t.parentName,i=c(t,["components","mdxType","originalType","parentName"]),d=u(n),k=a,m=d["".concat(s,".").concat(k)]||d[k]||p[k]||l;return n?r.createElement(m,o(o({ref:e},i),{},{components:n})):r.createElement(m,o({ref:e},i))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=d;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:a,o[1]=c;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},13800:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return i}});n(93106);var r=n(79874);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a.apply(this,arguments)}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const o={title:"Taro.onCompassChange(callback)",sidebar_label:"onCompassChange"},c=void 0,s={unversionedId:"apis/device/compass/onCompassChange",id:"version-2.x/apis/device/compass/onCompassChange",title:"Taro.onCompassChange(callback)",description:"\u76d1\u542c\u7f57\u76d8\u6570\u636e\u53d8\u5316\u4e8b\u4ef6\u3002\u9891\u7387\uff1a5 \u6b21/\u79d2\uff0c\u63a5\u53e3\u8c03\u7528\u540e\u4f1a\u81ea\u52a8\u5f00\u59cb\u76d1\u542c\uff0c\u53ef\u4f7f\u7528 Taro.stopCompass \u505c\u6b62\u76d1\u542c\u3002",source:"@site/versioned_docs/version-2.x/apis/device/compass/onCompassChange.md",sourceDirName:"apis/device/compass",slug:"/apis/device/compass/onCompassChange",permalink:"/taro-docs/docs/2.x/apis/device/compass/onCompassChange",editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-2.x/apis/device/compass/onCompassChange.md",tags:[],version:"2.x",frontMatter:{title:"Taro.onCompassChange(callback)",sidebar_label:"onCompassChange"},sidebar:"version-2.x/API",previous:{title:"startCompass",permalink:"/taro-docs/docs/2.x/apis/device/compass/startCompass"},next:{title:"offCompassChange",permalink:"/taro-docs/docs/2.x/apis/device/compass/offCompassChange"}},u={},i=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"Callback",id:"callback",level:3},{value:"OnCompassChangeCallbackResult",id:"oncompasschangecallbackresult",level:3},{value:"accuracy",id:"accuracy",level:3},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:2}],p={toc:i};function d(t){var{components:e}=t,n=l(t,["components"]);return(0,r.kt)("wrapper",a({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u76d1\u542c\u7f57\u76d8\u6570\u636e\u53d8\u5316\u4e8b\u4ef6\u3002\u9891\u7387\uff1a5 \u6b21/\u79d2\uff0c\u63a5\u53e3\u8c03\u7528\u540e\u4f1a\u81ea\u52a8\u5f00\u59cb\u76d1\u542c\uff0c\u53ef\u4f7f\u7528 Taro.stopCompass \u505c\u6b62\u76d1\u542c\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/compass/wx.onCompassChange.html"}),"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("h2",a({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(callback: Callback) => void\n")),(0,r.kt)("h2",a({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,r.kt)("h3",a({},{id:"callback"}),"Callback"),(0,r.kt)("p",null,"\u7f57\u76d8\u6570\u636e\u53d8\u5316\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(result: OnCompassChangeCallbackResult) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c2\u6570"),(0,r.kt)("th",null,"\u7c7b\u578b"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"result"),(0,r.kt)("td",null,(0,r.kt)("code",null,"OnCompassChangeCallbackResult"))))),(0,r.kt)("h3",a({},{id:"oncompasschangecallbackresult"}),"OnCompassChangeCallbackResult"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c2\u6570"),(0,r.kt)("th",null,"\u7c7b\u578b"),(0,r.kt)("th",null,"\u8bf4\u660e"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"accuracy"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string | number")),(0,r.kt)("td",null,"\u7cbe\u5ea6",(0,r.kt)("br",null),(0,r.kt)("br",null),"\u7531\u4e8e\u5e73\u53f0\u5dee\u5f02\uff0caccuracy \u5728 iOS/Android \u7684\u503c\u4e0d\u540c\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"- iOS\uff1aaccuracy \u662f\u4e00\u4e2a number \u7c7b\u578b\u7684\u503c\uff0c\u8868\u793a\u76f8\u5bf9\u4e8e\u78c1\u5317\u6781\u7684\u504f\u5dee\u30020 \u8868\u793a\u8bbe\u5907\u6307\u5411\u78c1\u5317\uff0c90 \u8868\u793a\u6307\u5411\u4e1c\uff0c180 \u8868\u793a\u6307\u5411\u5357\uff0c\u4f9d\u6b64\u7c7b\u63a8\u3002",(0,r.kt)("br",null),"- Android\uff1aaccuracy \u662f\u4e00\u4e2a string \u7c7b\u578b\u7684\u679a\u4e3e\u503c\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"direction"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,"\u9762\u5bf9\u7684\u65b9\u5411\u5ea6\u6570")))),(0,r.kt)("h3",a({},{id:"accuracy"}),"accuracy"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c2\u6570"),(0,r.kt)("th",null,"\u8bf4\u660e"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"high"),(0,r.kt)("td",null,"\u9ad8\u7cbe\u5ea6")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"medium"),(0,r.kt)("td",null,"\u4e2d\u7b49\u7cbe\u5ea6")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"low"),(0,r.kt)("td",null,"\u4f4e\u7cbe\u5ea6")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"no-contact"),(0,r.kt)("td",null,"\u4e0d\u53ef\u4fe1\uff0c\u4f20\u611f\u5668\u5931\u53bb\u8fde\u63a5")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"unreliable"),(0,r.kt)("td",null,"\u4e0d\u53ef\u4fe1\uff0c\u539f\u56e0\u672a\u77e5")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"unknow ","{value}"),(0,r.kt)("td",null,"\u672a\u77e5\u7684\u7cbe\u5ea6\u679a\u4e3e\u503c\uff0c\u5373\u8be5 Android \u7cfb\u7edf\u6b64\u65f6\u8fd4\u56de\u7684\u8868\u793a\u7cbe\u5ea6\u7684 value \u4e0d\u662f\u4e00\u4e2a\u6807\u51c6\u7684\u7cbe\u5ea6\u679a\u4e3e\u503c")))),(0,r.kt)("h2",a({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"Taro.onCompassChange(function (res) {\n  console.log(res.direction)\n})\n")),(0,r.kt)("h2",a({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"Taro.onCompassChange"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}))))))}d.isMDXComponent=!0}}]);