"use strict";(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[7427],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,v=c["".concat(d,".").concat(m)]||c[m]||s[m]||a;return n?r.createElement(v,o(o({ref:t},u),{},{components:n})):r.createElement(v,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3807:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={id:"androidtv",title:"Android TV Platform",sidebar_label:"Android TV",original_id:"androidtv"},d=void 0,p={unversionedId:"platforms/androidtv",id:"platforms/androidtv",isDocsHomePage:!1,title:"Android TV Platform",description:"Overview",source:"@site/docs/platforms/androidtv.md",sourceDirName:"platforms",slug:"/platforms/androidtv",permalink:"/docs/platforms/androidtv",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/platforms/androidtv.md",tags:[],version:"current",frontMatter:{id:"androidtv",title:"Android TV Platform",sidebar_label:"Android TV",original_id:"androidtv"},sidebar:"tutorialSidebar",previous:{title:"Android",permalink:"/docs/platforms/android"},next:{title:"Android Wear",permalink:"/docs/platforms/androidwear"}},u=[{value:"Overview",id:"overview",children:[],level:2},{value:"File Extension Support",id:"file-extension-support",children:[],level:2},{value:"Requirements",id:"requirements",children:[],level:2},{value:"Project Configuration",id:"project-configuration",children:[],level:2},{value:"Run on Simulator",id:"run-on-simulator",children:[],level:2},{value:"Run on Device",id:"run-on-device",children:[],level:2},{value:"Deploy on Device",id:"deploy-on-device",children:[],level:2},{value:"Android X support",id:"android-x-support",children:[],level:2},{value:"Hermes support",id:"hermes-support",children:[],level:2},{value:"Advanced",id:"advanced",children:[],level:2},{value:"Android X support",id:"android-x-support-1",children:[],level:2},{value:"Hermes support",id:"hermes-support-1",children:[],level:2},{value:"App Config",id:"app-config",children:[],level:2}],s={toc:u};function c(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("img",{src:"https://img.shields.io/badge/Mac-yes-brightgreen.svg"}),(0,a.kt)("img",{src:"https://img.shields.io/badge/Windows-yes-brightgreen.svg"}),(0,a.kt)("img",{src:"https://img.shields.io/badge/Linux-yes-brightgreen.svg"}),(0,a.kt)("img",{src:"https://img.shields.io/badge/HostMode-n/a-lightgrey.svg"})))),(0,a.kt)("img",{className:"platform-image",src:"https://renative.org/img/rnv_android-tv.gif",height:"250"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Latest Android project"),(0,a.kt)("li",{parentName:"ul"},"Kotlin Support"),(0,a.kt)("li",{parentName:"ul"},"Support for Gradle 4.9")),(0,a.kt)("h2",{id:"file-extension-support"},"File Extension Support"),(0,a.kt)("p",null,"Extenstions are defined via engines. Engines with androidtv support: "),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.android.com/studio/index.html"},"Android Studio")," for Android development"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.android.com/sdk/"},"Android SDK")," ",(0,a.kt)("inlineCode",{parentName:"li"},"23.0.1")," or newer for Android development")),(0,a.kt)("h2",{id:"project-configuration"},"Project Configuration"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Feature"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Version"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Gradle"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"4.10.1"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Android Gradle"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"3.3.1"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Kotlin"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"1.3.20"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Target SDK"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"27"))))),(0,a.kt)("h2",{id:"run-on-simulator"},"Run on Simulator"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rnv run -p androidtv\n")),(0,a.kt)("h2",{id:"run-on-device"},"Run on Device"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rnv run -p androidtv -d\n")),(0,a.kt)("h2",{id:"deploy-on-device"},"Deploy on Device"),(0,a.kt)("p",null,"This will run production version on your device (not connected to metro bundler)\nYou can configure each ",(0,a.kt)("inlineCode",{parentName:"p"},"buildScheme")," ie ",(0,a.kt)("inlineCode",{parentName:"p"},"-s release")," in your config file ",(0,a.kt)("inlineCode",{parentName:"p"},"./appConfigs/<YOUR_APP_CONFIG>/renative.json")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rnv run -p androidtv -s release -d\n")),(0,a.kt)("h2",{id:"android-x-support"},"Android X support"),(0,a.kt)("p",null,"androidX is enabled by default"),(0,a.kt)("p",null,"make sure you have this piece of script in package.json"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'"scripts" : {\n  "postinstall": "jetify"\n}\n')),(0,a.kt)("h2",{id:"hermes-support"},"Hermes support"),(0,a.kt)("p",null,"Hermes can be enabled or disabled with ",(0,a.kt)("inlineCode",{parentName:"p"},'"reactNativeEngine": "hermes"')," prop in ",(0,a.kt)("inlineCode",{parentName:"p"},"renative.json:platforms.android.reactNativeEngine"),"\nor ",(0,a.kt)("inlineCode",{parentName:"p"},"renative.json:platforms.android.buildSchemes.[SCHEME].reactNativeEngine")),(0,a.kt)("h2",{id:"advanced"},"Advanced"),(0,a.kt)("p",null,"Clean and Re-build platform project"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rnv run -p androidtv -r\n")),(0,a.kt)("p",null,"Launch specific emulator:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rnv target launch -p androidtv -t Android_TV_720p_API_22\n")),(0,a.kt)("h2",{id:"android-x-support-1"},"Android X support"),(0,a.kt)("p",null,"androidX is enabled by default"),(0,a.kt)("p",null,"make sure you have this piece of script in package.json"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'"scripts" : {\n  "postinstall": "jetify"\n}\n')),(0,a.kt)("h2",{id:"hermes-support-1"},"Hermes support"),(0,a.kt)("p",null,"Hermes can be enabled or disabled with ",(0,a.kt)("inlineCode",{parentName:"p"},'"reactNativeEngine": "hermes"')," prop in ",(0,a.kt)("inlineCode",{parentName:"p"},"renative.json:platforms.android.reactNativeEngine"),"\nor ",(0,a.kt)("inlineCode",{parentName:"p"},"renative.json:platforms.android.buildSchemes.[SCHEME].reactNativeEngine")),(0,a.kt)("h2",{id:"app-config"},"App Config"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api/config#android-props"},"see: Android based config")))}c.isMDXComponent=!0}}]);