"use strict";(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[8538],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=i.createContext({}),s=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=s(n),f=r,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||o;return n?i.createElement(m,l(l({ref:t},c),{},{components:n})):i.createElement(m,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var s=2;s<o;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2729:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var i=n(7462),r=n(3366),o=(n(7294),n(3905)),l=["components"],a={id:"introduction",title:"Introduction",sidebar_label:"Introduction",original_id:"introduction",sidebar_position:0},u=void 0,s={unversionedId:"overview/introduction",id:"overview/introduction",isDocsHomePage:!1,title:"Introduction",description:"Intro",source:"@site/docs/overview/intro.md",sourceDirName:"overview",slug:"/overview/introduction",permalink:"/docs/overview/introduction",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/overview/intro.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"introduction",title:"Introduction",sidebar_label:"Introduction",original_id:"introduction",sidebar_position:0},sidebar:"tutorialSidebar",next:{title:"Architecture",permalink:"/docs/overview/architecture"}},c=[{value:"Intro",id:"intro",children:[],level:2},{value:"Core &amp; CLI",id:"core--cli",children:[],level:2},{value:"Plugins",id:"plugins",children:[],level:2},{value:"AppConfigs",id:"appconfigs",children:[],level:2},{value:"Configuration",id:"configuration",children:[],level:2},{value:"Engines",id:"engines",children:[],level:2},{value:"Integrations",id:"integrations",children:[],level:2},{value:"Platforms",id:"platforms",children:[],level:2},{value:"Tasks",id:"tasks",children:[],level:2},{value:"App Code",id:"app-code",children:[],level:2},{value:"Templates",id:"templates",children:[],level:2},{value:"File Extensions",id:"file-extensions",children:[],level:2},{value:"Runtime",id:"runtime",children:[],level:2}],p={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"intro"},"Intro"),(0,o.kt)("p",null,"Scale from simple command to enterprise ecosystem"),(0,o.kt)("h2",{id:"core--cli"},"Core & CLI"),(0,o.kt)("p",null,"Core RNV system is base dependency of engines, extensions, tasks\nIt also includes"),(0,o.kt)("h2",{id:"plugins"},"Plugins"),(0,o.kt)("p",null,"Allows you to extend app functionality with numerous available plugins."),(0,o.kt)("h2",{id:"appconfigs"},"AppConfigs"),(0,o.kt)("p",null,"Allows you to setup multiple application targets under one project"),(0,o.kt)("p",null,"Every app configuration flavour contains its own ",(0,o.kt)("inlineCode",{parentName:"p"},"renative.*.json")," file used to extend overall config with configurations specific to app flavour"),(0,o.kt)("p",null,"Configurations typically stored in your project ",(0,o.kt)("inlineCode",{parentName:"p"},"appConfigs/[APP_ID]/renative.json")," :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"App id, Title, Description etc"),(0,o.kt)("li",{parentName:"ul"},"Active / inactive plugins"),(0,o.kt)("li",{parentName:"ul"},"Plugin overrides per app"),(0,o.kt)("li",{parentName:"ul"},"Build schemes"),(0,o.kt)("li",{parentName:"ul"},"Runtime injections")),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"Extremely versatile config system"),(0,o.kt)("p",null,"allows you to configure most of your project by simple ",(0,o.kt)("inlineCode",{parentName:"p"},"renative.json")," file changes."),(0,o.kt)("h2",{id:"engines"},"Engines"),(0,o.kt)("p",null,"Engines allow you to build your project for specific platform with variety of different technology stacks"),(0,o.kt)("p",null,"They provide project structure and fundamental rendering / transpilation functionality."),(0,o.kt)("p",null,"Default engine for ReNative is ",(0,o.kt)("inlineCode",{parentName:"p"},"react-native")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/engines/engine-rn"},"Full Documentation")),(0,o.kt)("h2",{id:"integrations"},"Integrations"),(0,o.kt)("p",null,"Allow you to extend features of rnv via external integration plugins"),(0,o.kt)("h2",{id:"platforms"},"Platforms"),(0,o.kt)("p",null,"RNV allows you to target over 15 different platforms."),(0,o.kt)("h2",{id:"tasks"},"Tasks"),(0,o.kt)("p",null,"RNV is essentially and task runner. most of the execution is completed by tasks."),(0,o.kt)("h2",{id:"app-code"},"App Code"),(0,o.kt)("p",null,"Application code is the actual code of your app. it usually sits in src."),(0,o.kt)("h2",{id:"templates"},"Templates"),(0,o.kt)("p",null,"Templates are used as initial bootstrap structure you can use instead of creating your project source, configs and assets from scratch."),(0,o.kt)("p",null,"Templates are offered during creation of new project ( ",(0,o.kt)("inlineCode",{parentName:"p"},"rnv new")," )"),(0,o.kt)("p",null,"More Info (Templates)"),(0,o.kt)("h2",{id:"file-extensions"},"File Extensions"),(0,o.kt)("p",null,"You can create highly sophisticated reusable multiplatofrm architecture by utilising powerful file extension system"),(0,o.kt)("h2",{id:"runtime"},"Runtime"),(0,o.kt)("p",null,"ReNative provides runtime SDK library to support multi-platform development"))}d.isMDXComponent=!0}}]);