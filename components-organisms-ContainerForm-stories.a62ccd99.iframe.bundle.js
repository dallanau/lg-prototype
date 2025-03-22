"use strict";(self.webpackChunklg_prototype=self.webpackChunklg_prototype||[]).push([[3647],{"./node_modules/antd/es/grid/style/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L3:()=>useRowStyle,i4:()=>getMediaSize,xV:()=>useColStyle});var _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@ant-design/cssinjs/es/index.js"),_theme_internal__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/antd/es/theme/util/genStyleUtils.js"),_theme_internal__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@ant-design/cssinjs-utils/es/index.js");const genGridColStyle=token=>{const{componentCls}=token;return{[componentCls]:{position:"relative",maxWidth:"100%",minHeight:1}}},genGridStyle=(token,sizeCls)=>((token,sizeCls)=>{const{prefixCls,componentCls,gridColumns}=token,gridColumnsStyle={};for(let i=gridColumns;i>=0;i--)0===i?(gridColumnsStyle[`${componentCls}${sizeCls}-${i}`]={display:"none"},gridColumnsStyle[`${componentCls}-push-${i}`]={insetInlineStart:"auto"},gridColumnsStyle[`${componentCls}-pull-${i}`]={insetInlineEnd:"auto"},gridColumnsStyle[`${componentCls}${sizeCls}-push-${i}`]={insetInlineStart:"auto"},gridColumnsStyle[`${componentCls}${sizeCls}-pull-${i}`]={insetInlineEnd:"auto"},gridColumnsStyle[`${componentCls}${sizeCls}-offset-${i}`]={marginInlineStart:0},gridColumnsStyle[`${componentCls}${sizeCls}-order-${i}`]={order:0}):(gridColumnsStyle[`${componentCls}${sizeCls}-${i}`]=[{"--ant-display":"block",display:"block"},{display:"var(--ant-display)",flex:`0 0 ${i/gridColumns*100}%`,maxWidth:i/gridColumns*100+"%"}],gridColumnsStyle[`${componentCls}${sizeCls}-push-${i}`]={insetInlineStart:i/gridColumns*100+"%"},gridColumnsStyle[`${componentCls}${sizeCls}-pull-${i}`]={insetInlineEnd:i/gridColumns*100+"%"},gridColumnsStyle[`${componentCls}${sizeCls}-offset-${i}`]={marginInlineStart:i/gridColumns*100+"%"},gridColumnsStyle[`${componentCls}${sizeCls}-order-${i}`]={order:i});return gridColumnsStyle[`${componentCls}${sizeCls}-flex`]={flex:`var(--${prefixCls}${sizeCls}-flex)`},gridColumnsStyle})(token,sizeCls),useRowStyle=(0,_theme_internal__WEBPACK_IMPORTED_MODULE_1__.OF)("Grid",(token=>{const{componentCls}=token;return{[componentCls]:{display:"flex",flexFlow:"row wrap",minWidth:0,"&::before, &::after":{display:"flex"},"&-no-wrap":{flexWrap:"nowrap"},"&-start":{justifyContent:"flex-start"},"&-center":{justifyContent:"center"},"&-end":{justifyContent:"flex-end"},"&-space-between":{justifyContent:"space-between"},"&-space-around":{justifyContent:"space-around"},"&-space-evenly":{justifyContent:"space-evenly"},"&-top":{alignItems:"flex-start"},"&-middle":{alignItems:"center"},"&-bottom":{alignItems:"flex-end"}}}}),(()=>({}))),getMediaSize=token=>({xs:token.screenXSMin,sm:token.screenSMMin,md:token.screenMDMin,lg:token.screenLGMin,xl:token.screenXLMin,xxl:token.screenXXLMin}),useColStyle=(0,_theme_internal__WEBPACK_IMPORTED_MODULE_1__.OF)("Grid",(token=>{const gridToken=(0,_theme_internal__WEBPACK_IMPORTED_MODULE_2__.oX)(token,{gridColumns:24}),gridMediaSizesMap=getMediaSize(gridToken);return delete gridMediaSizesMap.xs,[genGridColStyle(gridToken),genGridStyle(gridToken,""),genGridStyle(gridToken,"-xs"),Object.keys(gridMediaSizesMap).map((key=>((token,screenSize,sizeCls)=>({[`@media (min-width: ${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.zA)(screenSize)})`]:Object.assign({},genGridStyle(token,sizeCls))}))(gridToken,gridMediaSizesMap[key],`-${key}`))).reduce(((pre,cur)=>Object.assign(Object.assign({},pre),cur)),{})]}),(()=>({})))},"./src/components/atoms/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var antd__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/antd/es/button/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const StyledButton=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay)(antd__WEBPACK_IMPORTED_MODULE_3__.Ay)`
  // Primary button - blue background, white text
  &.ant-btn-primary {
    background-color: #1890ff;
    border-color: #1890ff;
    color: white;
    font-weight: 500;
    
    &:hover, &:focus {
      background-color: #40a9ff;
      border-color: #40a9ff;
    }
  }
  
  // Secondary button - white background with blue border
  &.ant-btn-default {
    background-color: white;
    border-color: #1890ff;
    color: #1890ff;
    
    &:hover, &:focus {
      border-color: #40a9ff;
      color: #40a9ff;
    }
  }
  
  // Text button - no background or border
  &.ant-btn-text {
    color: #1890ff;
    
    &:hover, &:focus {
      color: #40a9ff;
      background-color: rgba(24, 144, 255, 0.1);
    }
  }
  
  // Danger button - red styling
  &.ant-btn-dangerous {
    background-color: #ff4d4f;
    border-color: #ff4d4f;
    color: white;
    
    &:hover, &:focus {
      background-color: #ff7875;
      border-color: #ff7875;
    }
  }
  
  // For disabled state
  &.ant-btn-disabled,
  &.ant-btn-disabled:hover,
  &.ant-btn-disabled:focus,
  &.ant-btn-disabled:active {
    background-color: #f5f5f5;
    border-color: #d9d9d9;
    color: rgba(0, 0, 0, 0.25);
  }
  
  // Shared styles for all buttons - updated for mobile-first design
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  // Updated size variants for mobile
  &.ant-btn-lg {
    font-size: 16px;
    height: 44px;
    padding: 8px 16px;
    border-radius: 6px;
  }
  
  &.ant-btn-sm {
    font-size: 12px;
    height: 28px;
    padding: 4px 12px;
  }
  
  // Default size adjusted for mobile
  &.ant-btn {
    font-size: 14px;
    height: 36px;
    padding: 6px 16px;
  }
  
  // Full-width button for mobile interfaces
  &.mobile-full-width {
    width: 100%;
    border-radius: 4px;
  }
  
  // Bottom fixed button often used in mobile apps
  &.bottom-fixed {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    border-radius: 0;
    z-index: 100;
    height: 48px;
  }
`,__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{label,children,buttonVariant="default",type,danger,fullWidthMobile=!1,bottomFixed=!1,className="",...props}=_ref,buttonType=type,buttonDanger=danger;if(!buttonType)switch(buttonVariant){case"primary":buttonType="primary";break;case"secondary":default:buttonType="default";break;case"text":buttonType="text";break;case"danger":buttonType="primary",buttonDanger=!0}const combinedClassName=[className,fullWidthMobile?"mobile-full-width":"",bottomFixed?"bottom-fixed":""].filter(Boolean).join(" ");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StyledButton,{type:buttonType,danger:buttonDanger,className:combinedClassName,...props,children:label||children})}},"./src/components/atoms/Input.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var antd__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/antd/es/input/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const InputContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div`
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
`,__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{label,error,helperText,fullWidthMobile=!1,...props}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(InputContainer,{fullWidthMobile,children:[label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(LabelContainer,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("label",{children:[label,props.required&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{style:{color:"#ff4d4f"},children:" *"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StyledInput,{...props,status:error?"error":""}),error&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ErrorText,{children:error}),helperText&&!error&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(HelperText,{children:helperText})]})}},"./src/components/organisms/ContainerForm.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AddNew:()=>AddNew,Edit:()=>Edit,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ContainerForm_stories});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),es_select=__webpack_require__("./node_modules/antd/es/select/index.js"),es_form=__webpack_require__("./node_modules/antd/es/form/index.js"),Input=__webpack_require__("./src/components/atoms/Input.tsx"),Button=__webpack_require__("./src/components/atoms/Button.tsx"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const FormContainer=styled_components_browser_esm.Ay.div`
  background: #fff;
  min-height: 100vh;
  padding: 16px;
`,Title=styled_components_browser_esm.Ay.h1`
  font-size: 20px;
  font-weight: 500;
  color: #333;
  margin: 0 0 24px 0;
`,ButtonGroup=styled_components_browser_esm.Ay.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;
  background: #fff;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  gap: 12px;
`,{Option}=es_select.A,organisms_ContainerForm=_ref=>{let{initialValues,onSubmit,onCancel,isEdit=!1}=_ref;const[form]=es_form.A.useForm(),{t}=(0,es.Bd)();return(0,jsx_runtime.jsxs)(FormContainer,{children:[(0,jsx_runtime.jsx)(Title,{children:t(isEdit?"container.form.editContainer":"container.form.addContainer")}),(0,jsx_runtime.jsxs)(es_form.A,{form,layout:"vertical",initialValues,style:{marginBottom:"80px"},children:[(0,jsx_runtime.jsx)(es_form.A.Item,{name:"containerNumber",label:t("container.details.containerNumber"),rules:[{required:!0,message:t("container.validation.pleaseEnterContainerNumber")}],children:(0,jsx_runtime.jsx)(Input.A,{placeholder:t("container.form.enterContainerNumber"),fullWidthMobile:!0})}),(0,jsx_runtime.jsx)(es_form.A.Item,{name:"type",label:t("container.details.containerType"),rules:[{required:!0,message:t("container.validation.pleaseSelectContainerType")}],children:(0,jsx_runtime.jsxs)(es_select.A,{placeholder:t("container.form.selectContainerType"),children:[(0,jsx_runtime.jsx)(Option,{value:"20GP",children:"20GP"}),(0,jsx_runtime.jsx)(Option,{value:"40GP",children:"40GP"}),(0,jsx_runtime.jsx)(Option,{value:"40HC",children:"40HC"})]})}),(0,jsx_runtime.jsx)(es_form.A.Item,{name:"weight",label:t("container.details.weight"),rules:[{required:!0,message:t("container.validation.pleaseEnterWeight")}],children:(0,jsx_runtime.jsx)(Input.A,{placeholder:t("container.form.enterWeight"),suffix:t("container.form.ton"),fullWidthMobile:!0})}),(0,jsx_runtime.jsx)(es_form.A.Item,{name:"destination",label:t("container.details.destination"),rules:[{required:!0,message:t("container.validation.pleaseEnterDestination")}],children:(0,jsx_runtime.jsx)(Input.A,{placeholder:t("container.form.enterDestination"),fullWidthMobile:!0})}),(0,jsx_runtime.jsx)(es_form.A.Item,{name:"loadingPort",label:t("container.details.loadingPort"),rules:[{required:!0,message:t("container.validation.pleaseEnterLoadingPort")}],children:(0,jsx_runtime.jsx)(Input.A,{placeholder:t("container.form.enterLoadingPort"),fullWidthMobile:!0})}),(0,jsx_runtime.jsx)(es_form.A.Item,{name:"dischargePort",label:t("container.details.dischargePort"),rules:[{required:!0,message:t("container.validation.pleaseEnterDischargePort")}],children:(0,jsx_runtime.jsx)(Input.A,{placeholder:t("container.form.enterDischargePort"),fullWidthMobile:!0})}),(0,jsx_runtime.jsx)(es_form.A.Item,{name:"vessel",label:t("container.details.vessel"),rules:[{required:!0,message:t("container.validation.pleaseEnterVessel")}],children:(0,jsx_runtime.jsx)(Input.A,{placeholder:t("container.form.enterVessel"),fullWidthMobile:!0})}),(0,jsx_runtime.jsx)(es_form.A.Item,{name:"voyage",label:t("container.details.voyage"),rules:[{required:!0,message:t("container.validation.pleaseEnterVoyage")}],children:(0,jsx_runtime.jsx)(Input.A,{placeholder:t("container.form.enterVoyage"),fullWidthMobile:!0})}),(0,jsx_runtime.jsx)(es_form.A.Item,{name:"eta",label:t("container.details.eta"),rules:[{required:!0,message:t("container.validation.pleaseEnterETA")}],children:(0,jsx_runtime.jsx)(Input.A,{placeholder:"YYYY-MM-DD HH:mm",fullWidthMobile:!0})})]}),(0,jsx_runtime.jsxs)(ButtonGroup,{children:[(0,jsx_runtime.jsx)(Button.A,{buttonVariant:"secondary",fullWidthMobile:!0,onClick:onCancel,children:t("common.cancel")}),(0,jsx_runtime.jsx)(Button.A,{buttonVariant:"primary",fullWidthMobile:!0,onClick:()=>{form.validateFields().then((values=>{onSubmit(values)}))},children:t("common.confirm")})]})]})};var es_button=__webpack_require__("./node_modules/antd/es/button/index.js");const SwitcherContainer=styled_components_browser_esm.Ay.div`
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 1000;
  display: flex;
  gap: 8px;
`,LanguageButton=(0,styled_components_browser_esm.Ay)(es_button.Ay)`
  min-width: 40px;
  opacity: ${props=>props.$isActive?1:.6};
`,atoms_LanguageSwitcher=()=>{const{i18n}=(0,es.Bd)(),changeLanguage=lng=>{i18n.changeLanguage(lng)};return(0,jsx_runtime.jsxs)(SwitcherContainer,{children:[(0,jsx_runtime.jsx)(LanguageButton,{type:"en"===i18n.language?"primary":"default",$isActive:"en"===i18n.language,onClick:()=>changeLanguage("en"),children:"EN"}),(0,jsx_runtime.jsx)(LanguageButton,{type:"zh"===i18n.language?"primary":"default",$isActive:"zh"===i18n.language,onClick:()=>changeLanguage("zh"),children:"中"})]})};__webpack_require__("./src/i18n.ts");const ContainerForm_stories={title:"Organisms/ContainerForm",component:organisms_ContainerForm,tags:["autodocs"],parameters:{layout:"fullscreen"},decorators:[Story=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(atoms_LanguageSwitcher,{}),(0,jsx_runtime.jsx)(Story,{})]})]},AddNew={args:{isEdit:!1},parameters:{viewport:{defaultViewport:"mobile1"}}},Edit={args:{isEdit:!0,initialValues:{containerNumber:"ABCD1234567",type:"40GP",weight:"25",destination:"上海港",loadingPort:"深圳港",dischargePort:"上海港",vessel:"COSCO SHIPPING PISCES",voyage:"023W",eta:"2024-03-25 14:30"}},parameters:{viewport:{defaultViewport:"mobile1"}}};AddNew.parameters={...AddNew.parameters,docs:{...AddNew.parameters?.docs,source:{originalSource:"{\n  args: {\n    isEdit: false\n  },\n  parameters: {\n    viewport: {\n      defaultViewport: 'mobile1'\n    }\n  }\n}",...AddNew.parameters?.docs?.source}}},Edit.parameters={...Edit.parameters,docs:{...Edit.parameters?.docs,source:{originalSource:"{\n  args: {\n    isEdit: true,\n    initialValues: {\n      containerNumber: 'ABCD1234567',\n      type: '40GP',\n      weight: '25',\n      destination: '上海港',\n      loadingPort: '深圳港',\n      dischargePort: '上海港',\n      vessel: 'COSCO SHIPPING PISCES',\n      voyage: '023W',\n      eta: '2024-03-25 14:30'\n    }\n  },\n  parameters: {\n    viewport: {\n      defaultViewport: 'mobile1'\n    }\n  }\n}",...Edit.parameters?.docs?.source}}};const __namedExportsOrder=["AddNew","Edit"]}}]);
//# sourceMappingURL=components-organisms-ContainerForm-stories.a62ccd99.iframe.bundle.js.map