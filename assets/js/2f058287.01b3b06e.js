"use strict";(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[636],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=i,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||a;return t?r.createElement(f,o(o({ref:n},s),{},{components:t})):r.createElement(f,o({ref:n},s))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5411:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=t(7462),i=t(3366),a=(t(7294),t(3905)),o=["components"],l={id:"0.31",title:"Upgrade to 0.31.x Guide",sidebar_label:"0.31.x",original_id:"0.31"},p=void 0,u={unversionedId:"upgrades/0.31",id:"upgrades/0.31",isDocsHomePage:!1,title:"Upgrade to 0.31.x Guide",description:"---",source:"@site/docs/upgrades/0.31.md",sourceDirName:"upgrades",slug:"/upgrades/0.31",permalink:"/docs/upgrades/0.31",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/upgrades/0.31.md",tags:[],version:"current",frontMatter:{id:"0.31",title:"Upgrade to 0.31.x Guide",sidebar_label:"0.31.x",original_id:"0.31"},sidebar:"tutorialSidebar",previous:{title:"0.30.x",permalink:"/docs/upgrades/0.30"},next:{title:"0.32.x",permalink:"/docs/upgrades/0.32"}},s=[],c={toc:s};function d(e){var n=e.components,l=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},c,l,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("img",{className:"header-image",src:"https://renative.org/img/ic_upgrade.png",width:"50",height:"50"}),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".next.js")," extension is DEPRECATED. use ",(0,a.kt)("inlineCode",{parentName:"li"},".web.js")," and ",(0,a.kt)("inlineCode",{parentName:"li"},".server.web.js")," in combination with engine ",(0,a.kt)("inlineCode",{parentName:"li"},"engine-rn-next")," instead")),(0,a.kt)("p",null,"REASON: next.js was temporary ",(0,a.kt)("inlineCode",{parentName:"p"},"web-next")," platform extension. this has been replaced with ",(0,a.kt)("inlineCode",{parentName:"p"},"engine-rn-next")," which supports standard ",(0,a.kt)("inlineCode",{parentName:"p"},"-p web")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rnv configure")," now requires platform ",(0,a.kt)("inlineCode",{parentName:"li"},"-p")," specified. if you don't, rnv will ask you to pick one. if you use ",(0,a.kt)("inlineCode",{parentName:"li"},"--ci")," option command will fail.")),(0,a.kt)("p",null,"REASON: ",(0,a.kt)("inlineCode",{parentName:"p"},"rnv configure")," used to run configure command on all supported platforms of the project at once but that is hardly ever needed as all platform commands chain back to configure anyway. this created unnecessary log builds"),(0,a.kt)("p",null,"NOTE: ",(0,a.kt)("inlineCode",{parentName:"p"},"rnv configure")," is not necessary if you plan to run ",(0,a.kt)("inlineCode",{parentName:"p"},"rnv run / build / export / package")," afterwards as these commands will run configure task as dependency anyway"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"NextJS config should migrate to use withRNV from ",(0,a.kt)("inlineCode",{parentName:"p"},"@rnv/engine-rn-next"),":"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"next.config.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"const { withRNV } = require('@rnv/engine-rn-next');\nconst path = require('path');\n\nconst config = {\n\n};\n\nmodule.exports = withRNV(../api/config.md);\n")),(0,a.kt)("p",null,"Metro config should migrate to use withRNV from ",(0,a.kt)("inlineCode",{parentName:"p"},"@rnv/engine-rn"),":"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"metro.config.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"const path = require('path');\nconst { withRNV } = require('@rnv/engine-rn');\n\nconst config = {\n\n};\n\nmodule.exports = withRNV(../api/config.md);\n")),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"appConfigs/","*","*","/builds/_shared is DEPRECATED. use appConfigs/","*","*","/builds/\\<PLATFORM",">"," instead")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"iOS Template has been updated to follow new requirements for storyboard based launch screen. More info:  ",(0,a.kt)("a",{parentName:"p",href:"https://developer.apple.com/news/?id=01132020b"},"https://developer.apple.com/news/?id=01132020b")),(0,a.kt)("p",null,"new launch images should be placed to your assets configs typically:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},".\n\u2514\u2500\u2500 [appConfigs/<appConfig>/assets/ios/Assets.xcassets/launch-image.imageset]\n    \u251c\u2500\u2500 launch-image.png\n    \u251c\u2500\u2500 launch-image@2x.png\n    \u2514\u2500\u2500 launch-image@3x.png\n\n")),(0,a.kt)("p",null,"Recommended size is 1000x1000, 2000x2000 and 3000x3000 to cover all iOS screen densities"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"ios launch image guide",src:t(6868).Z})),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-p web-next"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"-e next")," are no longer be available.")),(0,a.kt)("p",null,"Use:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "platforms": {\n        "web": {\n            "engine": "engine-rn-next"\n        }\n    }\n}\n')),(0,a.kt)("p",null,"instead"),(0,a.kt)("hr",null))}d.isMDXComponent=!0},6868:function(e,n,t){n.Z=t.p+"assets/images/launch-image-guide-96005ccf1d19c319461f28b1a3b82367.png"}}]);