"use strict";(self.webpackChunklg_prototype=self.webpackChunklg_prototype||[]).push([[6189],{"./src/components/atoms/Input.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,MobileForm:()=>MobileForm,MobileFullWidth:()=>MobileFullWidth,MobileSearch:()=>MobileSearch,Required:()=>Required,WithError:()=>WithError,WithHelperText:()=>WithHelperText,WithLabel:()=>WithLabel,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Input__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/atoms/Input.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Atoms/Input",component:_Input__WEBPACK_IMPORTED_MODULE_0__.A,tags:["autodocs"],argTypes:{placeholder:{control:"text"},disabled:{control:"boolean"},required:{control:"boolean"},size:{control:{type:"select"},options:["large","middle","small"]},helperText:{control:"text"},fullWidthMobile:{control:"boolean"}},parameters:{layout:"centered"},decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{width:"100%",maxWidth:"350px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Story,{})})]},Default={args:{placeholder:"Enter text"}},WithLabel={args:{label:"Username",placeholder:"Enter username"}},Required={args:{label:"Email",placeholder:"Enter email",required:!0}},WithError={args:{label:"Password",placeholder:"Enter password",error:"Password must be at least 8 characters"}},WithHelperText={args:{label:"Password",placeholder:"Enter password",helperText:"Password should contain at least 8 characters"}},Disabled={args:{label:"Disabled Input",placeholder:"You cannot edit this",disabled:!0}},MobileFullWidth={args:{label:"Full Name",placeholder:"Enter your full name",fullWidthMobile:!0},parameters:{viewport:{defaultViewport:"mobile1"}}},MobileForm={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{style:{width:"100%"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Input__WEBPACK_IMPORTED_MODULE_0__.A,{label:"集装箱号",placeholder:"请输入集装箱号",required:!0,fullWidthMobile:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Input__WEBPACK_IMPORTED_MODULE_0__.A,{label:"箱型",placeholder:"请选择箱型",fullWidthMobile:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Input__WEBPACK_IMPORTED_MODULE_0__.A,{label:"货重",placeholder:"请输入货重",fullWidthMobile:!0,suffix:"吨"})]}),parameters:{viewport:{defaultViewport:"mobile1"}}},MobileSearch={args:{placeholder:"搜索集装箱",prefix:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{children:"🔍"}),fullWidthMobile:!0,size:"large"},parameters:{viewport:{defaultViewport:"mobile1"}}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    placeholder: 'Enter text'\n  }\n}",...Default.parameters?.docs?.source}}},WithLabel.parameters={...WithLabel.parameters,docs:{...WithLabel.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Username',\n    placeholder: 'Enter username'\n  }\n}",...WithLabel.parameters?.docs?.source}}},Required.parameters={...Required.parameters,docs:{...Required.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Email',\n    placeholder: 'Enter email',\n    required: true\n  }\n}",...Required.parameters?.docs?.source}}},WithError.parameters={...WithError.parameters,docs:{...WithError.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Password',\n    placeholder: 'Enter password',\n    error: 'Password must be at least 8 characters'\n  }\n}",...WithError.parameters?.docs?.source}}},WithHelperText.parameters={...WithHelperText.parameters,docs:{...WithHelperText.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Password',\n    placeholder: 'Enter password',\n    helperText: 'Password should contain at least 8 characters'\n  }\n}",...WithHelperText.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Disabled Input',\n    placeholder: 'You cannot edit this',\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}},MobileFullWidth.parameters={...MobileFullWidth.parameters,docs:{...MobileFullWidth.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Full Name',\n    placeholder: 'Enter your full name',\n    fullWidthMobile: true\n  },\n  parameters: {\n    viewport: {\n      defaultViewport: 'mobile1'\n    }\n  }\n}",...MobileFullWidth.parameters?.docs?.source}}},MobileForm.parameters={...MobileForm.parameters,docs:{...MobileForm.parameters?.docs,source:{originalSource:'{\n  render: () => <div style={{\n    width: \'100%\'\n  }}>\n      <Input label="集装箱号" placeholder="请输入集装箱号" required fullWidthMobile />\n      <Input label="箱型" placeholder="请选择箱型" fullWidthMobile />\n      <Input label="货重" placeholder="请输入货重" fullWidthMobile suffix="吨" />\n    </div>,\n  parameters: {\n    viewport: {\n      defaultViewport: \'mobile1\'\n    }\n  }\n}',...MobileForm.parameters?.docs?.source}}},MobileSearch.parameters={...MobileSearch.parameters,docs:{...MobileSearch.parameters?.docs,source:{originalSource:"{\n  args: {\n    placeholder: '搜索集装箱',\n    prefix: <span>🔍</span>,\n    fullWidthMobile: true,\n    size: 'large'\n  },\n  parameters: {\n    viewport: {\n      defaultViewport: 'mobile1'\n    }\n  }\n}",...MobileSearch.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithLabel","Required","WithError","WithHelperText","Disabled","MobileFullWidth","MobileForm","MobileSearch"]},"./src/components/atoms/Input.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var antd__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/antd/es/input/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const InputContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div`
  margin-bottom: 16px;
  width: ${props=>props.fullWidthMobile?"100%":"auto"};
`,LabelContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #333;
`,StyledInput=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay)(antd__WEBPACK_IMPORTED_MODULE_3__.A)`
  // Default styling
  border-radius: 4px;
  
  // Size adjustments for mobile
  &.ant-input-lg {
    font-size: 16px;
    padding: 10px 12px;
    height: 44px;
  }
  
  &.ant-input {
    font-size: 14px;
    padding: 8px 12px;
    height: 36px;
  }
  
  &.ant-input-sm {
    font-size: 12px;
    padding: 4px 8px;
    height: 28px;
  }
  
  // Focus state
  &:focus, &:hover {
    border-color: #1890ff;
  }
  
  // Error state
  &.ant-input-status-error {
    border-color: #ff4d4f;
  }
`,ErrorText=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div`
  color: #ff4d4f;
  font-size: 12px;
  margin-top: 4px;
`,HelperText=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div`
  color: #999;
  font-size: 12px;
  margin-top: 4px;
`,__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{label,error,helperText,fullWidthMobile=!1,...props}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(InputContainer,{fullWidthMobile,children:[label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(LabelContainer,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("label",{children:[label,props.required&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{style:{color:"#ff4d4f"},children:" *"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StyledInput,{...props,status:error?"error":""}),error&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ErrorText,{children:error}),helperText&&!error&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(HelperText,{children:helperText})]})}}}]);
//# sourceMappingURL=components-atoms-Input-stories.4126ac47.iframe.bundle.js.map