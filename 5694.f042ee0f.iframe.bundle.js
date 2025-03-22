"use strict";(self.webpackChunklg_prototype=self.webpackChunklg_prototype||[]).push([[5694],{"./src/pages/Home.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Home});__webpack_require__("./node_modules/react/index.js");var layout=__webpack_require__("./node_modules/antd/es/layout/index.js"),typography=__webpack_require__("./node_modules/antd/es/typography/index.js"),input=__webpack_require__("./node_modules/antd/es/input/index.js"),card=__webpack_require__("./node_modules/antd/es/card/index.js"),space=__webpack_require__("./node_modules/antd/es/space/index.js"),row=__webpack_require__("./node_modules/antd/es/row/index.js"),col=__webpack_require__("./node_modules/antd/es/col/index.js"),tooltip=__webpack_require__("./node_modules/antd/es/tooltip/index.js"),MenuOutlined=__webpack_require__("./node_modules/@ant-design/icons/es/icons/MenuOutlined.js"),UserOutlined=__webpack_require__("./node_modules/@ant-design/icons/es/icons/UserOutlined.js"),SearchOutlined=__webpack_require__("./node_modules/@ant-design/icons/es/icons/SearchOutlined.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),theme=__webpack_require__("./src/styles/theme.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ContainerIcon=_ref=>{let{className}=_ref;return(0,jsx_runtime.jsxs)("svg",{className,width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,jsx_runtime.jsx)("rect",{x:"4",y:"10",width:"32",height:"20",rx:"2",stroke:theme.Tj.primary,strokeWidth:"1.5"}),(0,jsx_runtime.jsx)("path",{d:"M4 15H36",stroke:theme.Tj.primary,strokeWidth:"1.5"}),(0,jsx_runtime.jsx)("path",{d:"M20 15V30",stroke:theme.Tj.primary,strokeWidth:"1.5"}),(0,jsx_runtime.jsx)("rect",{x:"8",y:"19",width:"8",height:"6",rx:"1",stroke:theme.Tj.primary,strokeWidth:"1.5"}),(0,jsx_runtime.jsx)("rect",{x:"24",y:"19",width:"8",height:"6",rx:"1",stroke:theme.Tj.primary,strokeWidth:"1.5"})]})},PackageIcon=_ref2=>{let{className}=_ref2;return(0,jsx_runtime.jsxs)("svg",{className,width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,jsx_runtime.jsx)("path",{d:"M20 4L36 12V28L20 36L4 28V12L20 4Z",stroke:theme.Tj.primary,strokeWidth:"1.5"}),(0,jsx_runtime.jsx)("path",{d:"M20 4V36",stroke:theme.Tj.primary,strokeWidth:"1.5"}),(0,jsx_runtime.jsx)("path",{d:"M4 12L36 28",stroke:theme.Tj.primary,strokeWidth:"1.5"}),(0,jsx_runtime.jsx)("path",{d:"M36 12L4 28",stroke:theme.Tj.primary,strokeWidth:"1.5"})]})},StepIcon=_ref3=>{let{number,className}=_ref3;return(0,jsx_runtime.jsxs)("svg",{className,width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,jsx_runtime.jsx)("circle",{cx:"10",cy:"10",r:"9",stroke:theme.Tj.primary,strokeWidth:"1.5"}),(0,jsx_runtime.jsx)("text",{x:"10",y:"14",textAnchor:"middle",fill:theme.Tj.primary,fontSize:"12",fontFamily:"Arial",fontWeight:"500",children:number})]})},icons_LogoIcon=()=>(0,jsx_runtime.jsxs)("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,jsx_runtime.jsx)("circle",{cx:"16",cy:"16",r:"14",fill:"white",stroke:theme.Tj.primary,strokeWidth:"2"}),(0,jsx_runtime.jsx)("path",{d:"M16 6C20.4183 6 24 9.58172 24 14C24 18.4183 20.4183 22 16 22",stroke:theme.Tj.primary,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,jsx_runtime.jsx)("path",{d:"M12 11V18H15",stroke:theme.Tj.primary,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,jsx_runtime.jsx)("path",{d:"M19 14.5C19 13.1193 17.8807 12 16.5 12C15.1193 12 14 13.1193 14 14.5V15.5C14 16.8807 15.1193 18 16.5 18H17",stroke:theme.Tj.primary,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,jsx_runtime.jsx)("path",{d:"M8 16L16 13L24 16",stroke:theme.Tj.primary,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",opacity:"0.5"}),(0,jsx_runtime.jsx)("path",{d:"M16 4L16.4755 5.19577L17.6574 5.09549L16.9389 6.05423L17.4577 7.19577L16.3106 6.65423L15.1634 7.19577L15.6823 6.05423L14.9637 5.09549L16.1456 5.19577L16 4Z",fill:theme.Tj.primary}),(0,jsx_runtime.jsx)("path",{d:"M26 16L24 14M26 16L24 18M26 16H22",stroke:theme.Tj.primary,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),GlobalIcon=()=>(0,jsx_runtime.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,jsx_runtime.jsx)("path",{d:"M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,jsx_runtime.jsx)("path",{d:"M3.6 9H20.4",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,jsx_runtime.jsx)("path",{d:"M3.6 15H20.4",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,jsx_runtime.jsx)("path",{d:"M12 3C14.5013 5.46452 15.9228 8.66283 16 12C15.9228 15.3372 14.5013 18.5355 12 21",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,jsx_runtime.jsx)("path",{d:"M12 3C9.49872 5.46452 8.07725 8.66283 8 12C8.07725 15.3372 9.49872 18.5355 12 21",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),TeamIcon=()=>(0,jsx_runtime.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,jsx_runtime.jsx)("path",{d:"M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,jsx_runtime.jsx)("path",{d:"M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,jsx_runtime.jsx)("path",{d:"M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,jsx_runtime.jsx)("path",{d:"M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),ProcessIcon=()=>(0,jsx_runtime.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("path",{d:"M22 12H18L15 21L9 3L6 12H2",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),SystemIcon=()=>(0,jsx_runtime.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,jsx_runtime.jsx)("path",{d:"M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,jsx_runtime.jsx)("path",{d:"M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),ChainIcon=()=>(0,jsx_runtime.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,jsx_runtime.jsx)("path",{d:"M10 13C11.1046 13 12 12.1046 12 11C12 9.89543 11.1046 9 10 9C8.89543 9 8 9.89543 8 11C8 12.1046 8.89543 13 10 13Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,jsx_runtime.jsx)("path",{d:"M14 13C15.1046 13 16 12.1046 16 11C16 9.89543 15.1046 9 14 9C12.8954 9 12 9.89543 12 11C12 12.1046 12.8954 13 14 13Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),PlaneIcon=()=>(0,jsx_runtime.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,jsx_runtime.jsx)("path",{d:"M22 16.32C22 16.32 18 20 12 20C6 20 2 16.32 2 16.32",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,jsx_runtime.jsx)("path",{d:"M12 4C7.58172 4 4 7.58172 4 12C4 13.657 4.49114 15.1958 5.33733 16.4722C6.18352 17.7486 7.34391 18.7382 8.67878 19.3247C10.0137 19.9112 11.4994 20.0701 12.9417 19.7823C14.384 19.4945 15.7173 18.7715 16.7782 17.7106C17.839 16.6498 18.562 15.3165 18.8498 13.8742C19.1377 12.4319 18.9788 10.9462 18.3923 9.61132C17.8058 8.27645 16.8161 7.11605 15.5397 6.26987C14.2633 5.42368 12.7245 4.93254 11.0675 4.93254L12 12L4.93254 11.0675C4.93254 12.7245 5.42368 14.2633 6.26987 15.5397C7.11605 16.8161 8.27645 17.8058 9.61132 18.3923C10.9462 18.9788 12.4319 19.1377 13.8742 18.8498C15.3165 18.562 16.6498 17.839 17.7106 16.7782C18.7715 15.7173 19.4945 14.384 19.7823 12.9417C20.0701 11.4994 19.9112 10.0137 19.3247 8.67878C18.7382 7.34391 17.7486 6.18352 16.4722 5.33733C15.1958 4.49114 13.657 4 12 4Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),WarehouseIcon=()=>(0,jsx_runtime.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,jsx_runtime.jsx)("path",{d:"M3 21V8L12 4L21 8V21",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,jsx_runtime.jsx)("path",{d:"M13 13H17V21H7V13H11",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),BoxStackIcon=()=>(0,jsx_runtime.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,jsx_runtime.jsx)("path",{d:"M21 16V8C20.9996 7.64927 20.9071 7.30481 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.27L13 2.27C12.696 2.09446 12.3511 2.00205 12 2.00205C11.6489 2.00205 11.304 2.09446 11 2.27L4 6.27C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.30481 3.00036 7.64927 3 8V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,jsx_runtime.jsx)("path",{d:"M3.27002 6.96L12 12.01L20.73 6.96",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,jsx_runtime.jsx)("path",{d:"M12 22.08V12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),ProjectIcon=()=>(0,jsx_runtime.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,jsx_runtime.jsx)("path",{d:"M2 3H8C9.06087 3 10.0783 3.42143 10.8284 4.17157C11.5786 4.92172 12 5.93913 12 7V21C12 20.2044 11.6839 19.4413 11.1213 18.8787C10.5587 18.3161 9.79565 18 9 18H2V3Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,jsx_runtime.jsx)("path",{d:"M22 3H16C14.9391 3 13.9217 3.42143 13.1716 4.17157C12.4214 4.92172 12 5.93913 12 7V21C12 20.2044 12.3161 19.4413 12.8787 18.8787C13.4413 18.3161 14.2044 18 15 18H22V3Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),CustomIcon=()=>(0,jsx_runtime.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,jsx_runtime.jsx)("path",{d:"M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,jsx_runtime.jsx)("path",{d:"M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),StyledSvg=styled_components_browser_esm.Ay.svg`
  width: 100%;
  height: 200px;
  display: block;
`,backgrounds_BannerBackground=()=>(0,jsx_runtime.jsxs)(StyledSvg,{viewBox:"0 0 375 200",fill:"none",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",children:[(0,jsx_runtime.jsxs)("defs",{children:[(0,jsx_runtime.jsxs)("linearGradient",{id:"bannerGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[(0,jsx_runtime.jsx)("stop",{offset:"0%",style:{stopColor:theme.Tj.primary,stopOpacity:1}}),(0,jsx_runtime.jsx)("stop",{offset:"100%",style:{stopColor:theme.Tj.primaryLight,stopOpacity:1}})]}),(0,jsx_runtime.jsxs)("linearGradient",{id:"overlayGradient",x1:"50%",y1:"0%",x2:"50%",y2:"100%",children:[(0,jsx_runtime.jsx)("stop",{offset:"0%",style:{stopColor:"#FFFFFF",stopOpacity:.1}}),(0,jsx_runtime.jsx)("stop",{offset:"100%",style:{stopColor:"#FFFFFF",stopOpacity:0}})]})]}),(0,jsx_runtime.jsx)("path",{d:"M0 0H375V180C375 191.046 366.046 200 355 200H20C8.95431 200 0 191.046 0 180V0Z",fill:"url(#bannerGradient)"}),(0,jsx_runtime.jsx)("path",{d:"M-50 120C0 100 100 160 200 120C300 80 400 120 450 100",stroke:"url(#overlayGradient)",strokeWidth:"2",fill:"none"}),(0,jsx_runtime.jsx)("path",{d:"M-50 140C0 120 100 180 200 140C300 100 400 140 450 120",stroke:"url(#overlayGradient)",strokeWidth:"2",fill:"none"}),(0,jsx_runtime.jsx)("circle",{cx:"50",cy:"50",r:"30",fill:"white",fillOpacity:"0.1"}),(0,jsx_runtime.jsx)("circle",{cx:"320",cy:"80",r:"40",fill:"white",fillOpacity:"0.1"}),(0,jsx_runtime.jsx)("circle",{cx:"180",cy:"20",r:"15",fill:"white",fillOpacity:"0.1"}),(0,jsx_runtime.jsxs)("g",{transform:"translate(285, 40)",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,jsx_runtime.jsx)("rect",{x:"0",y:"0",width:"40",height:"30",rx:"2",fill:"none"}),(0,jsx_runtime.jsx)("line",{x1:"0",y1:"10",x2:"40",y2:"10"}),(0,jsx_runtime.jsx)("line",{x1:"10",y1:"0",x2:"10",y2:"30"}),(0,jsx_runtime.jsx)("line",{x1:"20",y1:"0",x2:"20",y2:"30"}),(0,jsx_runtime.jsx)("line",{x1:"30",y1:"0",x2:"30",y2:"30"})]}),(0,jsx_runtime.jsxs)("g",{transform:"translate(40, 80)",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,jsx_runtime.jsx)("path",{d:"M0,15 L40,15 L35,25 L5,25 Z",fill:"none"}),(0,jsx_runtime.jsx)("path",{d:"M15,5 L25,5 L25,15 L15,15 Z",fill:"none"}),(0,jsx_runtime.jsx)("line",{x1:"20",y1:"0",x2:"20",y2:"5"}),(0,jsx_runtime.jsx)("path",{d:"M0,15 C10,13 30,13 40,15",fill:"none"})]})]}),{Header}=layout.A,{Title,Text}=typography.A,StyledLayout=(0,styled_components_browser_esm.Ay)(layout.A)`
  background: ${theme.Tj.background.default};
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
`,HeaderContainer=styled_components_browser_esm.Ay.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: ${theme.Tj.background.default};
`,StatusBar=styled_components_browser_esm.Ay.div`
  height: 24px;
  width: 100%;
  background: #333333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${theme.YK.md};
  font-size: 12px;
  color: white;
`,StyledHeader=(0,styled_components_browser_esm.Ay)(Header)`
  background: white;
  padding: ${theme.YK.sm} ${theme.YK.md};
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: ${theme.Eo.small};
`,Logo=styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.Tj.text.primary};
  font-weight: 500;
  font-size: 16px;
  
  svg {
    width: 32px;
    height: 32px;
  }
`,StyledContent=(0,styled_components_browser_esm.Ay)(layout.A.Content)`
  margin-top: 76px; // 24px (status bar) + 52px (header)
  padding-bottom: ${theme.YK.lg};
`,BannerContainer=styled_components_browser_esm.Ay.div`
  position: relative;
  width: 100%;
  margin-bottom: ${theme.YK.md};
`,BannerContent=styled_components_browser_esm.Ay.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${theme.YK.lg};
  color: white;
  z-index: 1;

  h2 {
    font-size: 24px;
    font-weight: 600;
    margin: 0 0 ${theme.YK.sm};
    color: white;
  }

  p {
    font-size: 14px;
    margin: 0;
    opacity: 0.9;
  }
`,SearchContainer=styled_components_browser_esm.Ay.div`
  padding: ${theme.YK.sm} ${theme.YK.md};
  margin-top: -30px;
  position: relative;
  z-index: 2;
`,StyledInput=(0,styled_components_browser_esm.Ay)(input.A)`
  border-radius: ${theme.Vq.medium};
  background: ${theme.Tj.background.light};
  border: 1px solid ${theme.Tj.border.light};
  height: 40px;
  
  .ant-input {
    background: ${theme.Tj.background.light};
    font-size: 14px;
  }
  
  .ant-input-prefix {
    margin-right: ${theme.YK.sm};
    color: ${theme.Tj.text.light};
  }

  &:hover, &:focus {
    border-color: ${theme.Tj.primary};
    box-shadow: ${theme.Eo.small};
  }
`,ServiceCard=(0,styled_components_browser_esm.Ay)(card.A)`
  text-align: center;
  margin: 0;
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  background: white;
  border: 1px solid ${theme.Tj.border.light};
  border-radius: ${theme.Vq.medium};
  transition: all 0.3s ease;
  overflow: hidden;
  
  .ant-card-body {
    padding: ${theme.YK.md};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.YK.xs};
    height: 100%;
  }
  
  .title-text {
    font-size: 16px;
    font-weight: 500;
    margin: 0 !important;
    padding: 0 ${theme.YK.sm};
  }

  .secondary-text {
    font-size: 12px;
    color: ${theme.Tj.text.secondary};
    line-height: 1.4;
    margin: 0 !important;
    padding: 0 ${theme.YK.sm};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    max-width: 100%;
  }
  
  &:hover {
    box-shadow: ${theme.Eo.medium};
    transform: translateY(-2px);
    border-color: ${theme.Tj.primary};

    svg {
      stroke: ${theme.Tj.primary};
      transform: scale(1.1);
    }
  }
`,InstructionCard=(0,styled_components_browser_esm.Ay)(card.A)`
  margin: ${theme.YK.md};
  border-radius: ${theme.Vq.medium};
  background: white;
  border: 1px solid ${theme.Tj.border.light};
  box-shadow: ${theme.Eo.small};
  
  .ant-card-body {
    padding: ${theme.YK.lg};
  }

  .header {
    margin-bottom: ${theme.YK.md};
    padding-bottom: ${theme.YK.md};
    border-bottom: 1px solid ${theme.Tj.border.light};
  }
`,StepCard=(0,styled_components_browser_esm.Ay)(card.A)`
  background: white;
  border: 1px solid ${theme.Tj.border.light};
  border-radius: ${theme.Vq.medium};
  margin-bottom: ${theme.YK.sm};
  transition: all 0.3s ease;
  
  .ant-card-body {
    padding: ${theme.YK.md};
  }

  .step-content {
    flex: 1;
    min-width: 0; // Important for text truncation
  }

  .step-title {
    font-size: 16px;
    font-weight: 500;
    display: block;
    margin-bottom: ${theme.YK.xs};
    color: ${theme.Tj.text.primary};
  }

  .step-description {
    font-size: 14px;
    line-height: 1.6;
    color: ${theme.Tj.text.secondary};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  &:hover {
    border-color: ${theme.Tj.primary};
    box-shadow: ${theme.Eo.small};

    .step-title {
      color: ${theme.Tj.primary};
    }
  }
`,IconWrapper=styled_components_browser_esm.Ay.div`
  margin-bottom: ${theme.YK.sm};
  svg {
    width: 32px;
    height: 32px;
    stroke: ${theme.Tj.primary};
    transition: all 0.3s ease;
  }
`,StepIconWrapper=styled_components_browser_esm.Ay.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  margin-right: ${theme.YK.md};
  background: ${theme.Tj.background.blue};
  border-radius: 50%;
  
  svg {
    width: 20px;
    height: 20px;
    stroke: ${theme.Tj.primary};
  }
`,WelcomeText=(0,styled_components_browser_esm.Ay)(Text)`
  display: block;
  margin: ${theme.YK.md};
  padding: ${theme.YK.lg};
  background: linear-gradient(135deg, ${theme.Tj.primary} 0%, ${theme.Tj.primaryLight} 100%);
  border-radius: ${theme.Vq.medium};
  font-weight: 500;
  font-size: 16px;
  color: white;
  text-align: center;
  box-shadow: ${theme.Eo.small};
`,SectionTitle=(0,styled_components_browser_esm.Ay)(Title)`
  margin: ${theme.YK.lg} ${theme.YK.md} ${theme.YK.md} !important;
  font-size: 20px !important;
  color: ${theme.Tj.text.primary} !important;
  position: relative;
  padding-left: ${theme.YK.md};
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 4px;
    bottom: 4px;
    width: 4px;
    background: ${theme.Tj.primary};
    border-radius: ${theme.Vq.small};
  }
`,BusinessIconWrapper=styled_components_browser_esm.Ay.div`
  margin-bottom: ${theme.YK.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${theme.Tj.background.blue};
  transition: all 0.3s ease;

  svg {
    width: 24px;
    height: 24px;
    stroke: ${theme.Tj.primary};
    transition: all 0.3s ease;
  }
`,BusinessCard=(0,styled_components_browser_esm.Ay)(card.A)`
  height: 100px;
  margin-bottom: 0;
  background: white;
  border: 1px solid ${theme.Tj.border.light};
  border-radius: ${theme.Vq.medium};
  transition: all 0.3s ease;
  cursor: pointer;

  .ant-card-body {
    padding: ${theme.YK.md} ${theme.YK.sm};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${theme.YK.xs};
    height: 100%;
  }

  .text-wrapper {
    width: 100%;
    text-align: center;
  }

  .ant-typography {
    font-size: 14px;
    line-height: 1.4;
    text-align: center;
    font-weight: 500;
    margin: 0 !important;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    max-width: 100%;
  }

  &:hover {
    border-color: ${theme.Tj.primary};
    box-shadow: ${theme.Eo.small};
    transform: translateY(-2px);

    ${BusinessIconWrapper} {
      background: ${theme.Tj.primary};
      
      svg {
        stroke: white;
      }
    }

    .ant-typography {
      color: ${theme.Tj.primary};
    }
  }
`,Home=_ref=>{let{onMenuClick,onUserClick,onSearch,onServiceCardClick}=_ref;const businessServices=[{icon:(0,jsx_runtime.jsx)(ChainIcon,{}),text:"先进的供应链技术大数据解决方案"},{icon:(0,jsx_runtime.jsx)(PlaneIcon,{}),text:"航空国际快递代理"},{icon:(0,jsx_runtime.jsx)(BoxStackIcon,{}),text:"海运集装箱、包裹"},{icon:(0,jsx_runtime.jsx)(PlaneIcon,{}),text:"航空快递"},{icon:(0,jsx_runtime.jsx)(WarehouseIcon,{}),text:"澳大利亚本地仓储、配送、派送运输"},{icon:(0,jsx_runtime.jsx)(ChainIcon,{}),text:"供应链管理"},{icon:(0,jsx_runtime.jsx)(BoxStackIcon,{}),text:"货物装载和加固"},{icon:(0,jsx_runtime.jsx)(ProjectIcon,{}),text:"物流项目管理、系统开发"},{icon:(0,jsx_runtime.jsx)(CustomIcon,{}),text:"定制化物流服务"}],features=[{icon:(0,jsx_runtime.jsx)(GlobalIcon,{}),text:"强大的国际资源"},{icon:(0,jsx_runtime.jsx)(TeamIcon,{}),text:"专业的业务团队"},{icon:(0,jsx_runtime.jsx)(ProcessIcon,{}),text:"完善的操作流程"},{icon:(0,jsx_runtime.jsx)(SystemIcon,{}),text:"强大的信息系统"}];return(0,jsx_runtime.jsxs)(StyledLayout,{children:[(0,jsx_runtime.jsxs)(HeaderContainer,{children:[(0,jsx_runtime.jsxs)(StatusBar,{children:[(0,jsx_runtime.jsx)("span",{children:"12:09"}),(0,jsx_runtime.jsxs)("div",{style:{display:"flex",gap:"4px",alignItems:"center"},children:[(0,jsx_runtime.jsx)("span",{children:"􀙇"}),(0,jsx_runtime.jsx)("span",{children:"􀙈"}),(0,jsx_runtime.jsx)("span",{children:"24%"})]})]}),(0,jsx_runtime.jsxs)(StyledHeader,{children:[(0,jsx_runtime.jsx)(MenuOutlined.A,{style:{fontSize:"20px",color:theme.Tj.text.primary,cursor:"pointer"},onClick:onMenuClick}),(0,jsx_runtime.jsx)(Logo,{children:(0,jsx_runtime.jsx)(icons_LogoIcon,{})}),(0,jsx_runtime.jsxs)(space.A,{size:16,children:[(0,jsx_runtime.jsx)(Text,{style:{color:theme.Tj.text.primary,fontSize:"14px"},children:"中 (简)"}),(0,jsx_runtime.jsx)(UserOutlined.A,{style:{fontSize:"20px",color:theme.Tj.text.primary,cursor:"pointer"},onClick:onUserClick})]})]})]}),(0,jsx_runtime.jsxs)(StyledContent,{children:[(0,jsx_runtime.jsxs)(BannerContainer,{children:[(0,jsx_runtime.jsx)(backgrounds_BannerBackground,{}),(0,jsx_runtime.jsxs)(BannerContent,{children:[(0,jsx_runtime.jsx)("h2",{children:"全球物流解决方案"}),(0,jsx_runtime.jsx)("p",{children:"为您提供专业的国际物流服务，让您的货物安全、快速到达目的地"})]})]}),(0,jsx_runtime.jsx)(SearchContainer,{children:(0,jsx_runtime.jsx)(StyledInput,{prefix:(0,jsx_runtime.jsx)(SearchOutlined.A,{}),placeholder:"搜索 国内快递单号/提单号/国际运单号",onChange:e=>{null==onSearch||onSearch(e.target.value)},allowClear:!0})}),(0,jsx_runtime.jsxs)(row.A,{gutter:[16,16],style:{padding:`0 ${theme.YK.md}`},children:[(0,jsx_runtime.jsx)(col.A,{span:12,children:(0,jsx_runtime.jsxs)(ServiceCard,{onClick:()=>null==onServiceCardClick?void 0:onServiceCardClick("container"),children:[(0,jsx_runtime.jsx)(IconWrapper,{children:(0,jsx_runtime.jsx)(ContainerIcon,{})}),(0,jsx_runtime.jsx)(tooltip.A,{title:"集装箱（整柜/拼柜）",children:(0,jsx_runtime.jsx)(Text,{className:"title-text",children:"集装箱（整柜/拼柜）"})}),(0,jsx_runtime.jsx)(tooltip.A,{title:"如果您有大件物品需要通过集装箱运输，可以选择整柜或者拼柜。",children:(0,jsx_runtime.jsx)(Text,{className:"secondary-text",children:"如果您有大件物品需要通过集装箱运输，可以选择整柜或者拼柜。"})})]})}),(0,jsx_runtime.jsx)(col.A,{span:12,children:(0,jsx_runtime.jsxs)(ServiceCard,{onClick:()=>null==onServiceCardClick?void 0:onServiceCardClick("package"),children:[(0,jsx_runtime.jsx)(IconWrapper,{children:(0,jsx_runtime.jsx)(PackageIcon,{})}),(0,jsx_runtime.jsx)(tooltip.A,{title:"国际包裹",children:(0,jsx_runtime.jsx)(Text,{className:"title-text",children:"国际包裹"})}),(0,jsx_runtime.jsx)(tooltip.A,{title:"如果您有小件物品需要通过集装箱运输，可以选择国际包裹。",children:(0,jsx_runtime.jsx)(Text,{className:"secondary-text",children:"如果您有小件物品需要通过集装箱运输，可以选择国际包裹。"})})]})})]}),(0,jsx_runtime.jsx)(WelcomeText,{children:"欢迎使用我们的服务，您可以根据以下指引来操作。"}),(0,jsx_runtime.jsxs)(InstructionCard,{children:[(0,jsx_runtime.jsxs)("div",{className:"header",children:[(0,jsx_runtime.jsx)(Text,{strong:!0,style:{fontSize:"18px",color:theme.Tj.text.primary},children:"新手指引"}),(0,jsx_runtime.jsx)(Text,{type:"secondary",style:{display:"block",marginTop:theme.YK.xs},children:"会员号: 23432123"})]}),(0,jsx_runtime.jsx)(space.A,{direction:"vertical",size:12,style:{width:"100%"},children:[{step:1,title:"购物",text:"当您在电商平台下单时，可以一键复制集合仓地址，把您购买的商品寄往集合仓。"},{step:2,title:"等待",text:"接下来，请耐心等待你的快递送达到仓集合仓。"},{step:3,title:"下单",text:"当快递送达集合仓之后，您可以将需要合并的包裹，勾选合并成一个包裹，节省不必要的运费开销。"},{step:4,title:"支付",text:"接下来就是为即将寄出的包裹支付费用。"},{step:5,title:"收货",text:"支付后，您的包裹会及时寄出下一个环节，随着我们的物流渠道送达您指定的收货地址。"}].map(((item,index)=>(0,jsx_runtime.jsx)(StepCard,{children:(0,jsx_runtime.jsxs)(space.A,{align:"start",size:16,children:[(0,jsx_runtime.jsx)(StepIconWrapper,{children:(0,jsx_runtime.jsx)(StepIcon,{number:item.step})}),(0,jsx_runtime.jsxs)("div",{className:"step-content",children:[(0,jsx_runtime.jsx)(tooltip.A,{title:item.title,children:(0,jsx_runtime.jsx)(Text,{className:"step-title",children:item.title})}),(0,jsx_runtime.jsx)(tooltip.A,{title:item.text,children:(0,jsx_runtime.jsx)(Text,{className:"step-description",children:item.text})})]})]})},index)))})]}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(SectionTitle,{level:4,children:"业务方向"}),(0,jsx_runtime.jsx)(row.A,{gutter:[16,16],style:{padding:`0 ${theme.YK.md}`},children:businessServices.map(((service,index)=>(0,jsx_runtime.jsx)(col.A,{span:12,children:(0,jsx_runtime.jsxs)(BusinessCard,{hoverable:!0,children:[(0,jsx_runtime.jsx)(BusinessIconWrapper,{children:service.icon}),(0,jsx_runtime.jsx)("div",{className:"text-wrapper",children:(0,jsx_runtime.jsx)(tooltip.A,{title:service.text,children:(0,jsx_runtime.jsx)(Text,{children:service.text})})})]})},index)))})]}),(0,jsx_runtime.jsxs)("div",{style:{marginBottom:theme.YK.lg},children:[(0,jsx_runtime.jsx)(SectionTitle,{level:4,children:"为什么选择我们"}),(0,jsx_runtime.jsx)(row.A,{gutter:[16,16],style:{padding:`0 ${theme.YK.md}`},children:features.map(((feature,index)=>(0,jsx_runtime.jsx)(col.A,{span:12,children:(0,jsx_runtime.jsxs)(BusinessCard,{hoverable:!0,children:[(0,jsx_runtime.jsx)(BusinessIconWrapper,{children:feature.icon}),(0,jsx_runtime.jsx)("div",{className:"text-wrapper",children:(0,jsx_runtime.jsx)(tooltip.A,{title:feature.text,children:(0,jsx_runtime.jsx)(Text,{children:feature.text})})})]})},index)))})]})]})]})}},"./src/styles/theme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Eo:()=>shadows,Tj:()=>colors,Vq:()=>borderRadius,YK:()=>spacing});const colors={primary:"#1890ff",primaryLight:"#e6f7ff",primaryDark:"#096dd9",secondary:"#8c8c8c",secondaryDark:"#595959",text:{primary:"#262626",secondary:"#8c8c8c",light:"#bfbfbf",warning:"#faad14"},background:{default:"#f0f2f5",light:"#fafafa",dark:"#f5f5f5",blue:"#e6f7ff"},border:{default:"#d9d9d9",light:"#f0f0f0"},status:{success:"#52c41a",error:"#ff4d4f",warning:"#faad14"}},shadows={small:"0 1px 2px rgba(0,0,0,0.05)",medium:"0 2px 4px rgba(0,0,0,0.1)",large:"0 4px 8px rgba(0,0,0,0.15)"},spacing={xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px"},borderRadius={small:"4px",medium:"8px",large:"16px",circle:"50%"}}}]);
//# sourceMappingURL=5694.f042ee0f.iframe.bundle.js.map