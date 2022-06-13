"use strict";(self.webpackChunkrenative_website=self.webpackChunkrenative_website||[]).push([[9403],{852:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return r},metadata:function(){return d},toc:function(){return k},default:function(){return u}});var a=t(7462),p=t(3366),l=(t(7294),t(3905)),i=["components"],o={id:"cli-engine-rn",title:"Engine RN CLI Reference",sidebar_label:"engine-rn"},r=void 0,d={unversionedId:"api/cli-engine-rn",id:"api/cli-engine-rn",title:"Engine RN CLI Reference",description:"---",source:"@site/docs/api/cli-engine-rn.md",sourceDirName:"api",slug:"/api/cli-engine-rn",permalink:"/docs/api/cli-engine-rn",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/api/cli-engine-rn.md",tags:[],version:"current",frontMatter:{id:"cli-engine-rn",title:"Engine RN CLI Reference",sidebar_label:"engine-rn"},sidebar:"apiSidebar",previous:{title:"engine-rn-web",permalink:"/docs/api/cli-engine-rn-web"},next:{title:"renative.json",permalink:"/docs/api/json-config"}},k=[{value:"run",id:"run",children:[],level:2},{value:"package",id:"package",children:[],level:2},{value:"build",id:"build",children:[],level:2},{value:"configure",id:"configure",children:[],level:2},{value:"start",id:"start",children:[],level:2},{value:"export",id:"export",children:[],level:2},{value:"deploy",id:"deploy",children:[],level:2},{value:"debug",id:"debug",children:[],level:2},{value:"crypto installCerts",id:"crypto-installcerts",children:[],level:2},{value:"crypto updateProfile",id:"crypto-updateprofile",children:[],level:2},{value:"crypto updateProfiles",id:"crypto-updateprofiles",children:[],level:2},{value:"crypto installProfiles",id:"crypto-installprofiles",children:[],level:2},{value:"log",id:"log",children:[],level:2}],m={toc:k};function u(e){var n=e.components,t=(0,p.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("hr",null),(0,l.kt)("p",null,"This command reference applies if your platform uses engine ",(0,l.kt)("inlineCode",{parentName:"p"},"engine-rn"),"."),(0,l.kt)("p",null,"More info at ",(0,l.kt)("a",{parentName:"p",href:"/docs/engines/engine-rn"},"Engine RN Guide")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"run"},"run"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Run your app on target device or emulator")),(0,l.kt)("p",null,"Supported Platforms:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ios"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"tvos"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"android"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"androidtv"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"firetv"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"androidwear")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"rnv run\n")),(0,l.kt)("p",null,"Options:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-i"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--info")," - Show full debug Info"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--ci")," - CI/CD flag so it wont ask questions"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--mono")," - Monochrome console output without chalk"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--maxErrorLength")," - Specify how many characters each error should display. Default 200"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-o"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--only")," - run Only top command (Skip dependencies)"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-r"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--reset")," - also perform reset of platform build"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-R"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--resetHard")," - also perform reset of platform platform and platform assets"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-e"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--engine")," - engine to be used (next)"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-a"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--resetAssets")," - also perform reset of platform assets"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-c"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--appConfigID")," - select specific app Config id"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-s"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--scheme")," - select build Scheme"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-p"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--platform")," - select specific Platform"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-t"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--target")," - select specific Target device/simulator"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-d"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--device")," - select connected Device"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--hosted")," - Run in a hosted environment (skip budleAssets)"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-P"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--port")," - custom Port"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-D"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--debug")," - enable or disable remote debugger."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--debugIp")," - (optional) overwrite the ip to which the remote debugger will connect"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--skipTargetCheck")," - Skip Android target check, just display the raw adb devices to choose from"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-H"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--host")," - custom Host ip"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"This command reference applies if your platform uses engine ",(0,l.kt)("inlineCode",{parentName:"p"},"engine-rn"),"."),(0,l.kt)("p",null,"More info at ",(0,l.kt)("a",{parentName:"p",href:"/docs/engines/engine-rn"},"undefined Guide")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"package"},"package"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Package source files into bundle")),(0,l.kt)("p",null,"Supported Platforms:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ios"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"tvos"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"android"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"androidtv"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"firetv"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"androidwear")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"rnv package\n")),(0,l.kt)("p",null,"Options:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-i"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--info")," - Show full debug Info"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--ci")," - CI/CD flag so it wont ask questions"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--mono")," - Monochrome console output without chalk"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--maxErrorLength")," - Specify how many characters each error should display. Default 200"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-o"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--only")," - run Only top command (Skip dependencies)"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-r"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--reset")," - also perform reset of platform build"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-R"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--resetHard")," - also perform reset of platform platform and platform assets"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-e"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--engine")," - engine to be used (next)"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-a"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--resetAssets")," - also perform reset of platform assets"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-c"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--appConfigID")," - select specific app Config id"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-s"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--scheme")," - select build Scheme"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-p"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--platform")," - select specific Platform"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"This command reference applies if your platform uses engine ",(0,l.kt)("inlineCode",{parentName:"p"},"engine-rn"),"."),(0,l.kt)("p",null,"More info at ",(0,l.kt)("a",{parentName:"p",href:"/docs/engines/engine-rn"},"undefined Guide")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"build"},"build"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Build project binary")),(0,l.kt)("p",null,"Supported Platforms:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ios"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"tvos"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"android"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"androidtv"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"androidwear")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"rnv build\n")),(0,l.kt)("p",null,"Options:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-i"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--info")," - Show full debug Info"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--ci")," - CI/CD flag so it wont ask questions"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--mono")," - Monochrome console output without chalk"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--maxErrorLength")," - Specify how many characters each error should display. Default 200"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-o"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--only")," - run Only top command (Skip dependencies)"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-r"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--reset")," - also perform reset of platform build"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-R"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--resetHard")," - also perform reset of platform platform and platform assets"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-e"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--engine")," - engine to be used (next)"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-a"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--resetAssets")," - also perform reset of platform assets"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-c"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--appConfigID")," - select specific app Config id"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-s"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--scheme")," - select build Scheme"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-p"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--platform")," - select specific Platform"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"This command reference applies if your platform uses engine ",(0,l.kt)("inlineCode",{parentName:"p"},"engine-rn"),"."),(0,l.kt)("p",null,"More info at ",(0,l.kt)("a",{parentName:"p",href:"/docs/engines/engine-rn"},"undefined Guide")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"configure"},"configure"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Configure current project")),(0,l.kt)("p",null,"Supported Platforms:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ios"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"tvos"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"android"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"androidtv"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"firetv"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"androidwear")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"rnv configure\n")),(0,l.kt)("p",null,"Options:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-i"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--info")," - Show full debug Info"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--ci")," - CI/CD flag so it wont ask questions"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--mono")," - Monochrome console output without chalk"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--maxErrorLength")," - Specify how many characters each error should display. Default 200"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-o"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--only")," - run Only top command (Skip dependencies)"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-r"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--reset")," - also perform reset of platform build"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-R"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--resetHard")," - also perform reset of platform platform and platform assets"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-e"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--engine")," - engine to be used (next)"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-a"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--resetAssets")," - also perform reset of platform assets"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-c"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--appConfigID")," - select specific app Config id"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-s"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--scheme")," - select build Scheme"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-p"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--platform")," - select specific Platform"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"This command reference applies if your platform uses engine ",(0,l.kt)("inlineCode",{parentName:"p"},"engine-rn"),"."),(0,l.kt)("p",null,"More info at ",(0,l.kt)("a",{parentName:"p",href:"/docs/engines/engine-rn"},"undefined Guide")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"start"},"start"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Starts bundler / server")),(0,l.kt)("p",null,"Supported Platforms:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ios"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"tvos"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"android"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"androidtv"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"firetv"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"androidwear")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"rnv start\n")),(0,l.kt)("p",null,"Options:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-i"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--info")," - Show full debug Info"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--ci")," - CI/CD flag so it wont ask questions"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--mono")," - Monochrome console output without chalk"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--maxErrorLength")," - Specify how many characters each error should display. Default 200"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-o"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--only")," - run Only top command (Skip dependencies)"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-r"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--reset")," - also perform reset of platform build"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-R"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--resetHard")," - also perform reset of platform platform and platform assets"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-e"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--engine")," - engine to be used (next)"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-a"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--resetAssets")," - also perform reset of platform assets"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-c"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--appConfigID")," - select specific app Config id"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-s"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--scheme")," - select build Scheme"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-p"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--platform")," - select specific Platform"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"This command reference applies if your platform uses engine ",(0,l.kt)("inlineCode",{parentName:"p"},"engine-rn"),"."),(0,l.kt)("p",null,"More info at ",(0,l.kt)("a",{parentName:"p",href:"/docs/engines/engine-rn"},"undefined Guide")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"export"},"export"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Export the app into deployable binary")),(0,l.kt)("p",null,"Supported Platforms:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ios"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"tvos"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"android"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"androidtv"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"firetv"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"androidwear")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"rnv export\n")),(0,l.kt)("p",null,"Options:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-i"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--info")," - Show full debug Info"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--ci")," - CI/CD flag so it wont ask questions"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--mono")," - Monochrome console output without chalk"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--maxErrorLength")," - Specify how many characters each error should display. Default 200"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-o"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--only")," - run Only top command (Skip dependencies)"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-r"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--reset")," - also perform reset of platform build"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-R"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--resetHard")," - also perform reset of platform platform and platform assets"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-e"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--engine")," - engine to be used (next)"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-a"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--resetAssets")," - also perform reset of platform assets"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-c"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--appConfigID")," - select specific app Config id"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-s"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--scheme")," - select build Scheme"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-p"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--platform")," - select specific Platform"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"This command reference applies if your platform uses engine ",(0,l.kt)("inlineCode",{parentName:"p"},"engine-rn"),"."),(0,l.kt)("p",null,"More info at ",(0,l.kt)("a",{parentName:"p",href:"/docs/engines/engine-rn"},"undefined Guide")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"deploy"},"deploy"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Deploy the binary via selected deployment intgeration or buld hook")),(0,l.kt)("p",null,"Supported Platforms:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ios"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"tvos"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"android"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"androidtv"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"firetv"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"androidwear")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"rnv deploy\n")),(0,l.kt)("p",null,"Options:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-i"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--info")," - Show full debug Info"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--ci")," - CI/CD flag so it wont ask questions"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--mono")," - Monochrome console output without chalk"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--maxErrorLength")," - Specify how many characters each error should display. Default 200"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-o"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--only")," - run Only top command (Skip dependencies)"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-r"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--reset")," - also perform reset of platform build"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-R"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--resetHard")," - also perform reset of platform platform and platform assets"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-e"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--engine")," - engine to be used (next)"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-a"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--resetAssets")," - also perform reset of platform assets"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-c"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--appConfigID")," - select specific app Config id"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-s"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--scheme")," - select build Scheme"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-p"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--platform")," - select specific Platform"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"This command reference applies if your platform uses engine ",(0,l.kt)("inlineCode",{parentName:"p"},"engine-rn"),"."),(0,l.kt)("p",null,"More info at ",(0,l.kt)("a",{parentName:"p",href:"/docs/engines/engine-rn"},"undefined Guide")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"debug"},"debug"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Debug your app on target device or emulator")),(0,l.kt)("p",null,"Supported Platforms:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ios"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"android"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"firetv"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"androidtv"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"androidwear"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"web"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"webtv"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"tizen"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"tizenmobile"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"tvos"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"webos"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"macos"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"windows"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"tizenwatch"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"kaios"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"firefoxos"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"firefoxtv"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"chromecast")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"rnv debug\n")),(0,l.kt)("p",null,"Options:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-i"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--info")," - Show full debug Info"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--ci")," - CI/CD flag so it wont ask questions"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--mono")," - Monochrome console output without chalk"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--maxErrorLength")," - Specify how many characters each error should display. Default 200"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-o"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--only")," - run Only top command (Skip dependencies)"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"This command reference applies if your platform uses engine ",(0,l.kt)("inlineCode",{parentName:"p"},"engine-rn"),"."),(0,l.kt)("p",null,"More info at ",(0,l.kt)("a",{parentName:"p",href:"/docs/engines/engine-rn"},"undefined Guide")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"crypto-installcerts"},"crypto installCerts"),(0,l.kt)("blockquote",null),(0,l.kt)("p",null,"Supported Platforms:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ios"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"android"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"firetv"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"androidtv"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"androidwear"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"web"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"webtv"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"tizen"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"tizenmobile"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"tvos"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"webos"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"macos"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"windows"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"tizenwatch"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"kaios"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"firefoxos"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"firefoxtv"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"chromecast")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"rnv crypto installCerts\n")),(0,l.kt)("p",null,"Options:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-i"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--info")," - Show full debug Info"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--ci")," - CI/CD flag so it wont ask questions"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--mono")," - Monochrome console output without chalk"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--maxErrorLength")," - Specify how many characters each error should display. Default 200"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-o"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--only")," - run Only top command (Skip dependencies)"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"This command reference applies if your platform uses engine ",(0,l.kt)("inlineCode",{parentName:"p"},"engine-rn"),"."),(0,l.kt)("p",null,"More info at ",(0,l.kt)("a",{parentName:"p",href:"/docs/engines/engine-rn"},"undefined Guide")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"crypto-updateprofile"},"crypto updateProfile"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Update provisioning profile")),(0,l.kt)("p",null,"Supported Platforms:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ios"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"tvos")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"rnv crypto updateProfile\n")),(0,l.kt)("p",null,"Options:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-i"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--info")," - Show full debug Info"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--ci")," - CI/CD flag so it wont ask questions"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--mono")," - Monochrome console output without chalk"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--maxErrorLength")," - Specify how many characters each error should display. Default 200"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-o"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--only")," - run Only top command (Skip dependencies)"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"This command reference applies if your platform uses engine ",(0,l.kt)("inlineCode",{parentName:"p"},"engine-rn"),"."),(0,l.kt)("p",null,"More info at ",(0,l.kt)("a",{parentName:"p",href:"/docs/engines/engine-rn"},"undefined Guide")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"crypto-updateprofiles"},"crypto updateProfiles"),(0,l.kt)("blockquote",null),(0,l.kt)("p",null,"Supported Platforms:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ios"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"android"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"firetv"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"androidtv"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"androidwear"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"web"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"webtv"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"tizen"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"tizenmobile"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"tvos"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"webos"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"macos"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"windows"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"tizenwatch"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"kaios"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"firefoxos"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"firefoxtv"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"chromecast")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"rnv crypto updateProfiles\n")),(0,l.kt)("p",null,"Options:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-i"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--info")," - Show full debug Info"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--ci")," - CI/CD flag so it wont ask questions"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--mono")," - Monochrome console output without chalk"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--maxErrorLength")," - Specify how many characters each error should display. Default 200"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-o"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--only")," - run Only top command (Skip dependencies)"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"This command reference applies if your platform uses engine ",(0,l.kt)("inlineCode",{parentName:"p"},"engine-rn"),"."),(0,l.kt)("p",null,"More info at ",(0,l.kt)("a",{parentName:"p",href:"/docs/engines/engine-rn"},"undefined Guide")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"crypto-installprofiles"},"crypto installProfiles"),(0,l.kt)("blockquote",null),(0,l.kt)("p",null,"Supported Platforms:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ios"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"android"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"firetv"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"androidtv"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"androidwear"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"web"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"webtv"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"tizen"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"tizenmobile"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"tvos"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"webos"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"macos"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"windows"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"tizenwatch"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"kaios"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"firefoxos"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"firefoxtv"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"chromecast")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"rnv crypto installProfiles\n")),(0,l.kt)("p",null,"Options:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-i"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--info")," - Show full debug Info"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--ci")," - CI/CD flag so it wont ask questions"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--mono")," - Monochrome console output without chalk"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--maxErrorLength")," - Specify how many characters each error should display. Default 200"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-o"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--only")," - run Only top command (Skip dependencies)"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"This command reference applies if your platform uses engine ",(0,l.kt)("inlineCode",{parentName:"p"},"engine-rn"),"."),(0,l.kt)("p",null,"More info at ",(0,l.kt)("a",{parentName:"p",href:"/docs/engines/engine-rn"},"undefined Guide")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"log"},"log"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Attach logger to device or emulator and print out logs")),(0,l.kt)("p",null,"Supported Platforms:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ios"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"tvos"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"android"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"androidtv"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"firetv"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"androidwear")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"rnv log\n")),(0,l.kt)("p",null,"Options:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-i"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--info")," - Show full debug Info"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--ci")," - CI/CD flag so it wont ask questions"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--mono")," - Monochrome console output without chalk"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--maxErrorLength")," - Specify how many characters each error should display. Default 200"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-o"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--only")," - run Only top command (Skip dependencies)"),(0,l.kt)("p",null,"test"))}u.isMDXComponent=!0},3905:function(e,n,t){t.d(n,{Zo:function(){return k},kt:function(){return s}});var a=t(7294);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,p=function(e,n){if(null==e)return{};var t,a,p={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(p[t]=e[t]);return p}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var r=a.createContext({}),d=function(e){var n=a.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},k=function(e){var n=d(e.components);return a.createElement(r.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,p=e.mdxType,l=e.originalType,r=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),u=d(t),s=p,c=u["".concat(r,".").concat(s)]||u[s]||m[s]||l;return t?a.createElement(c,i(i({ref:n},k),{},{components:t})):a.createElement(c,i({ref:n},k))}));function s(e,n){var t=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var l=t.length,i=new Array(l);i[0]=u;var o={};for(var r in n)hasOwnProperty.call(n,r)&&(o[r]=n[r]);o.originalType=e,o.mdxType="string"==typeof e?e:p,i[1]=o;for(var d=2;d<l;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);