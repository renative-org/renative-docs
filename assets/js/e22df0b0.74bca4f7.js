"use strict";(self.webpackChunkrenative_website=self.webpackChunkrenative_website||[]).push([[3981],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return v}});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=i.createContext({}),c=function(e){var t=i.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},s=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(r),v=n,m=s["".concat(p,".").concat(v)]||s[v]||d[v]||o;return r?i.createElement(m,a(a({ref:t},u),{},{components:r})):i.createElement(m,a({ref:t},u))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}s.displayName="MDXCreateElement"},4324:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return s}});var i=r(7462),n=r(3366),o=(r(7294),r(3905)),a=["components"],l={id:"customize",title:"Customize ReNative Project",sidebar_label:"Customize ReNative",original_id:"customize"},p=void 0,c={unversionedId:"overview/customize",id:"overview/customize",isDocsHomePage:!1,title:"Customize ReNative Project",description:"Overview",source:"@site/docs/overview/customize.md",sourceDirName:"overview",slug:"/overview/customize",permalink:"/docs/overview/customize",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/overview/customize.md",tags:[],version:"current",frontMatter:{id:"customize",title:"Customize ReNative Project",sidebar_label:"Customize ReNative",original_id:"customize"},sidebar:"tutorialSidebar",previous:{title:"Architecture",permalink:"/docs/overview/architecture"},next:{title:"Features",permalink:"/docs/overview/features"}},u=[{value:"Overview",id:"overview",children:[],level:2},{value:"Override file provided by ReNative",id:"override-file-provided-by-renative",children:[],level:2},{value:"Example 1",id:"example-1",children:[],level:2},{value:"Example 2",id:"example-2",children:[],level:2}],d={toc:u};function s(e){var t=e.components,r=(0,n.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("img",{className:"header-image",src:"https://renative.org/img/ic_configuration.png",width:"50",height:"50"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"ReNative allows you to customize, extend or override pretty much anything."),(0,o.kt)("h2",{id:"override-file-provided-by-renative"},"Override file provided by ReNative"),(0,o.kt)("p",null,"Let's imagine you want to override one of the files generated in ",(0,o.kt)("inlineCode",{parentName:"p"},"./platformBuilds/[APP_ID]_[PLATFORM]/[FILE_PATH]")),(0,o.kt)("p",null,"you can override any file via ",(0,o.kt)("inlineCode",{parentName:"p"},"./appConfigs/base/builds/[PLATFORM]/[FILE_PATH]")),(0,o.kt)("h2",{id:"example-1"},"Example 1"),(0,o.kt)("p",null,"Webpack config file of your web app (use ",(0,o.kt)("inlineCode",{parentName:"p"},".dev.")," or ",(0,o.kt)("inlineCode",{parentName:"p"},".prod.")," to override the config for development or production builds):"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"./platformBuilds/helloworld_web/webpack.config.dev.js")),(0,o.kt)("p",null,"Will be overridden with:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"./appConfigs/base/builds/web/webpack.config.dev.js")),(0,o.kt)("h2",{id:"example-2"},"Example 2"),(0,o.kt)("p",null,"Application delegate of your iOS app"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"./platformBuilds/helloworld_ios/RNVApp/AppDelegate.swift")),(0,o.kt)("p",null,"Will be overridden with:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"./projectConfig/builds/ios/RNVApp/AppDelegate.swift")))}s.isMDXComponent=!0}}]);