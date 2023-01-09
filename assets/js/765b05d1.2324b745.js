"use strict";(self.webpackChunksource=self.webpackChunksource||[]).push([[6531],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(t),m=a,g=c["".concat(u,".").concat(m)]||c[m]||f[m]||o;return t?r.createElement(g,i(i({ref:n},p),{},{components:t})):r.createElement(g,i({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7887:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=t(7462),a=(t(7294),t(3905));const o={sidebar_position:8},i="user input/output",s={unversionedId:"Recources/golang/inputOutput",id:"Recources/golang/inputOutput",title:"user input/output",description:"The fmt package in Go provides a variety of functions for formatting and printing text. It is a standard library package, so you can use it without installing any additional dependencies.",source:"@site/docs/Recources/golang/inputOutput.md",sourceDirName:"Recources/golang",slug:"/Recources/golang/inputOutput",permalink:"/Blockchain/docs/Recources/golang/inputOutput",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Recources/golang/inputOutput.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Pointer:",permalink:"/Blockchain/docs/Recources/golang/pointer"},next:{title:"control  statement",permalink:"/Blockchain/docs/Recources/golang/control"}},u={},l=[],p={toc:l};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"user-inputoutput"},"user input/output"),(0,a.kt)("p",null,"The fmt package in Go provides a variety of functions for formatting and printing text. It is a standard library package, so you can use it without installing any additional dependencies."),(0,a.kt)("p",null,"Here are some examples of how you might use the fmt package:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "fmt"\n\nfunc main() {\n    // Print a string to the console\n    fmt.Println("Hello, World!")\n\n    // Print an integer value\n    fmt.Println(42)\n\n    // Print a floating point value with a specific number of decimal places\n    fmt.Printf("%.2f", 3.1415926535)\n\n    // Print a value with a specific width and precision\n    fmt.Printf("%10.2f", 3.1415926535)\n}\n')),(0,a.kt)("p",null,"Some of the functions provided by the fmt package include:"),(0,a.kt)("p",null,"Printf: This function formats and prints values to the console using a format string.\nSprintf: This function formats and returns a string instead of printing to the console.\nFprintf: This function formats and prints values to a specified io.Writer interface.\nScanf: This function reads values from the console and stores them in variables using a format string.\nFscanf: This function reads values from a specified io.Reader interface and stores them in variables using a format string."),(0,a.kt)("p",null,"Examples of using these functions:"),(0,a.kt)("p",null,"Printf:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'fmt.Printf("Hello, %s! You are %d years old.\\n", name, age)\n')),(0,a.kt)("p",null,"Sprintf:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'message := fmt.Sprintf("Hello, %s! You are %d years old.\\n", name, age)\n')),(0,a.kt)("p",null,"Fprintf:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'f, err := os.Create("output.txt")\nif err != nil {\npanic(err)\n}\ndefer f.Close()\nfmt.Fprintf(f, "Hello, %s! You are %d years old.\\n", name, age)\n')),(0,a.kt)("p",null,"Scanf:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'fmt.Print("Enter your name: ")\nvar name string\nfmt.Scanf("%s", &name)\n')),(0,a.kt)("p",null,"Fscanf:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'f, err := os.Open("input.txt")\nif err != nil {\npanic(err)\n}\ndefer f.Close()\nvar name string\nfmt.Fscanf(f, "%s", &name)\n')),(0,a.kt)("p",null,"For more information, you can refer to the documentation for the ",(0,a.kt)("a",{parentName:"p",href:"https://golang.org/pkg/fmt/"},"fmt package")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'\nIn Go, input is typically taken from the standard input stream (stdin) using the fmt package\'s Scan function. The input is then stored in a variable for further processing.\n\nFor example:\n```go\npackage main\n\nimport (\n"fmt"\n)\n\nfunc main() {\nvar input string\nfmt.Scan(&input) // reads input from stdin and stores it in the variable "input"\nfmt.Println("You entered:", input)\n}\n')),(0,a.kt)("p",null,"Output is typically done using the fmt package's Print or Println functions, which write to the standard output stream (stdout)."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n"fmt"\n)\n\nfunc main() {\nfmt.Println("This is the output")\n}\n')))}c.isMDXComponent=!0}}]);