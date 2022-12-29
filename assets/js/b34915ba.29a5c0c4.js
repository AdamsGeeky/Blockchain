"use strict";(self.webpackChunksource=self.webpackChunksource||[]).push([[8121],{3905:(e,o,t)=>{t.d(o,{Zo:()=>u,kt:()=>m});var r=t(7294);function n(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function l(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?l(Object(t),!0).forEach((function(o){n(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function i(e,o){if(null==e)return{};var t,r,n=function(e,o){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],o.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=r.createContext({}),s=function(e){var o=r.useContext(c),t=o;return e&&(t="function"==typeof e?e(o):a(a({},o),e)),t},u=function(e){var o=s(e.components);return r.createElement(c.Provider,{value:o},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},f=r.forwardRef((function(e,o){var t=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(t),f=n,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||l;return t?r.createElement(m,a(a({ref:o},u),{},{components:t})):r.createElement(m,a({ref:o},u))}));function m(e,o){var t=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var l=t.length,a=new Array(l);a[0]=f;var i={};for(var c in o)hasOwnProperty.call(o,c)&&(i[c]=o[c]);i.originalType=e,i[p]="string"==typeof e?e:n,a[1]=i;for(var s=2;s<l;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1442:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=t(7462),n=(t(7294),t(3905));const l={sidebar_position:3},a="installation and local Dev Enviroment",i={unversionedId:"Recources/golang/local",id:"Recources/golang/local",title:"installation and local Dev Enviroment",description:"To install Go on your local machine, follow these steps:",source:"@site/docs/Recources/golang/local.md",sourceDirName:"Recources/golang",slug:"/Recources/golang/local",permalink:"/Blockchain/docs/Recources/golang/local",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Recources/golang/local.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"why Go was developd ?",permalink:"/Blockchain/docs/Recources/golang/why"},next:{title:"Basic Struture of a Go file",permalink:"/Blockchain/docs/Recources/golang/structure"}},c={},s=[{value:"To set up your local development environment for Go, follow these steps:",id:"to-set-up-your-local-development-environment-for-go-follow-these-steps",level:2}],u={toc:s};function p(e){let{components:o,...t}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,t,{components:o,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"installation-and-local-dev-enviroment"},"installation and local Dev Enviroment"),(0,n.kt)("p",null,"To install Go on your local machine, follow these steps:"),(0,n.kt)("p",null,"Download the Go installer from the official website ",(0,n.kt)("a",{parentName:"p",href:"https://golang.org/dl/"},"Download")," and run the installer. Make sure to select the correct version for your operating system."),(0,n.kt)("p",null,"Follow the prompts in the installer to complete the installation process."),(0,n.kt)("p",null,'Once the installation is complete, open a terminal window and type "go version" to confirm that Go is installed and working properly.'),(0,n.kt)("h2",{id:"to-set-up-your-local-development-environment-for-go-follow-these-steps"},"To set up your local development environment for Go, follow these steps:"),(0,n.kt)("p",null,'Create a new directory for your Go project. This will be your "workspace" where all of your Go code will be stored.'),(0,n.kt)("p",null,"Set the GOPATH environment variable to point to your workspace directory. This will allow Go to find your code when you build and run it."),(0,n.kt)("p",null,'Create a "src" directory within your workspace. This is where you will store all of your Go source code.'),(0,n.kt)("p",null,'Write your Go code and save it in the "src" directory.'),(0,n.kt)("p",null,'Use the "go build" command to build your code into an executable binary.'),(0,n.kt)("p",null,'Run the binary using the "./',"[binary name]",'" command.'),(0,n.kt)("p",null,"Use tools like gofmt and go vet to ensure that your code follows best practices and is free of errors."),(0,n.kt)("p",null,"That's it! You should now have a working Go development environment on your local machine."))}p.isMDXComponent=!0}}]);