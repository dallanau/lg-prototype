"use strict";(self.webpackChunklg_prototype=self.webpackChunklg_prototype||[]).push([[4910],{"./node_modules/@ant-design/icons/es/icons/CheckCircleFilled.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>icons_CheckCircleFilled});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js");const asn_CheckCircleFilled={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"}}]},name:"check-circle",theme:"filled"};var AntdIcon=__webpack_require__("./node_modules/@ant-design/icons/es/components/AntdIcon.js"),CheckCircleFilled_CheckCircleFilled=function CheckCircleFilled(props,ref){return react.createElement(AntdIcon.A,(0,esm_extends.A)({},props,{ref,icon:asn_CheckCircleFilled}))};const icons_CheckCircleFilled=react.forwardRef(CheckCircleFilled_CheckCircleFilled)},"./node_modules/@ant-design/icons/es/icons/ExclamationCircleFilled.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>icons_ExclamationCircleFilled});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js");const asn_ExclamationCircleFilled={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"exclamation-circle",theme:"filled"};var AntdIcon=__webpack_require__("./node_modules/@ant-design/icons/es/components/AntdIcon.js"),ExclamationCircleFilled_ExclamationCircleFilled=function ExclamationCircleFilled(props,ref){return react.createElement(AntdIcon.A,(0,esm_extends.A)({},props,{ref,icon:asn_ExclamationCircleFilled}))};const icons_ExclamationCircleFilled=react.forwardRef(ExclamationCircleFilled_ExclamationCircleFilled)},"./node_modules/@ant-design/icons/es/icons/InfoCircleOutlined.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>icons_InfoCircleOutlined});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js");const asn_InfoCircleOutlined={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"}}]},name:"info-circle",theme:"outlined"};var AntdIcon=__webpack_require__("./node_modules/@ant-design/icons/es/components/AntdIcon.js"),InfoCircleOutlined_InfoCircleOutlined=function InfoCircleOutlined(props,ref){return react.createElement(AntdIcon.A,(0,esm_extends.A)({},props,{ref,icon:asn_InfoCircleOutlined}))};const icons_InfoCircleOutlined=react.forwardRef(InfoCircleOutlined_InfoCircleOutlined)},"./node_modules/antd/es/_util/hooks/useClosable.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>useClosable,d:()=>pickClosable});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_ant_design_icons_es_icons_CloseOutlined__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@ant-design/icons/es/icons/CloseOutlined.js"),rc_util_es_pickAttrs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rc-util/es/pickAttrs.js");function pickClosable(context){if(context)return{closable:context.closable,closeIcon:context.closeIcon}}function useClosableConfig(closableCollection){const{closable,closeIcon}=closableCollection||{};return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>{if(!closable&&(!1===closable||!1===closeIcon||null===closeIcon))return!1;if(void 0===closable&&void 0===closeIcon)return null;let closableConfig={closeIcon:"boolean"!=typeof closeIcon&&null!==closeIcon?closeIcon:void 0};return closable&&"object"==typeof closable&&(closableConfig=Object.assign(Object.assign({},closableConfig),closable)),closableConfig}),[closable,closeIcon])}function assignWithoutUndefined(){const target={};for(var _len=arguments.length,objList=new Array(_len),_key=0;_key<_len;_key++)objList[_key]=arguments[_key];return objList.forEach((obj=>{obj&&Object.keys(obj).forEach((key=>{void 0!==obj[key]&&(target[key]=obj[key])}))})),target}const EmptyFallbackCloseCollection={};function useClosable(propCloseCollection,contextCloseCollection){let fallbackCloseCollection=arguments.length>2&&void 0!==arguments[2]?arguments[2]:EmptyFallbackCloseCollection;const propCloseConfig=useClosableConfig(propCloseCollection),contextCloseConfig=useClosableConfig(contextCloseCollection),closeBtnIsDisabled="boolean"!=typeof propCloseConfig&&!!(null==propCloseConfig?void 0:propCloseConfig.disabled),mergedFallbackCloseCollection=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>Object.assign({closeIcon:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ant_design_icons_es_icons_CloseOutlined__WEBPACK_IMPORTED_MODULE_2__.A,null)},fallbackCloseCollection)),[fallbackCloseCollection]),mergedClosableConfig=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>!1!==propCloseConfig&&(propCloseConfig?assignWithoutUndefined(mergedFallbackCloseCollection,contextCloseConfig,propCloseConfig):!1!==contextCloseConfig&&(contextCloseConfig?assignWithoutUndefined(mergedFallbackCloseCollection,contextCloseConfig):!!mergedFallbackCloseCollection.closable&&mergedFallbackCloseCollection))),[propCloseConfig,contextCloseConfig,mergedFallbackCloseCollection]);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>{if(!1===mergedClosableConfig)return[!1,null,closeBtnIsDisabled];const{closeIconRender}=mergedFallbackCloseCollection,{closeIcon}=mergedClosableConfig;let mergedCloseIcon=closeIcon;if(null!=mergedCloseIcon){closeIconRender&&(mergedCloseIcon=closeIconRender(closeIcon));const ariaProps=(0,rc_util_es_pickAttrs__WEBPACK_IMPORTED_MODULE_1__.A)(mergedClosableConfig,!0);Object.keys(ariaProps).length&&(mergedCloseIcon=react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(mergedCloseIcon)?react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(mergedCloseIcon,ariaProps):react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",Object.assign({},ariaProps),mergedCloseIcon))}return[!0,mergedCloseIcon,closeBtnIsDisabled]}),[mergedClosableConfig,mergedFallbackCloseCollection])}},"./node_modules/rc-util/es/pickAttrs.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>pickAttrs});var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),propList="".concat("accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap"," ").concat("onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError").split(/[\s\n]+/),ariaPrefix="aria-",dataPrefix="data-";function match(key,prefix){return 0===key.indexOf(prefix)}function pickAttrs(props){var mergedConfig,ariaOnly=arguments.length>1&&void 0!==arguments[1]&&arguments[1];mergedConfig=!1===ariaOnly?{aria:!0,data:!0,attr:!0}:!0===ariaOnly?{aria:!0}:(0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.A)({},ariaOnly);var attrs={};return Object.keys(props).forEach((function(key){(mergedConfig.aria&&("role"===key||match(key,ariaPrefix))||mergedConfig.data&&match(key,dataPrefix)||mergedConfig.attr&&propList.includes(key))&&(attrs[key]=props[key])})),attrs}},"./src/components/layout/GlobalHeader.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var antd__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/antd/es/typography/index.js"),_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@ant-design/icons/es/icons/LeftOutlined.js"),styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_styles_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/styles/theme.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const{Title}=antd__WEBPACK_IMPORTED_MODULE_3__.A,HeaderContainer=styled_components__WEBPACK_IMPORTED_MODULE_4__.Ay.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.Tj.background.default};
`,StatusBar=styled_components__WEBPACK_IMPORTED_MODULE_4__.Ay.div`
  height: 24px;
  background: #333333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.YK.md};
  font-size: 12px;
  color: white;
`,Header=styled_components__WEBPACK_IMPORTED_MODULE_4__.Ay.div`
  height: 52px;
  padding: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.YK.sm} ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.YK.md};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.Tj.border.light};
  background: white;
`,LeftSection=styled_components__WEBPACK_IMPORTED_MODULE_4__.Ay.div`
  display: flex;
  align-items: center;
  gap: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.YK.sm};

  .back-button {
    font-size: 20px;
    color: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.Tj.text.primary};
    cursor: pointer;
  }
`,CenterSection=styled_components__WEBPACK_IMPORTED_MODULE_4__.Ay.div`
  display: flex;
  align-items: center;
  gap: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.YK.sm};

  .logo {
    height: 24px;
    width: auto;
  }
`,RightSection=styled_components__WEBPACK_IMPORTED_MODULE_4__.Ay.div`
  display: flex;
  align-items: center;
  gap: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.YK.sm};

  .language-select {
    font-size: 14px;
    color: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.Tj.text.primary};
    cursor: pointer;
    border: none;
    background: none;
    padding: 0;
  }
`,__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{title,onBack}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(HeaderContainer,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(StatusBar,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{children:"12:09"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{style:{display:"flex",gap:"4px",alignItems:"center"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{children:"􀙇"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{children:"􀙈"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{children:"24%"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(Header,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(LeftSection,{children:onBack&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.A,{className:"back-button",onClick:onBack})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CenterSection,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img",{src:"/logo.svg",alt:"Logo",className:"logo"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(RightSection,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{className:"language-select",children:"中 (簡)"})})]})]})}},"./src/pages/OrderSummary.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),antd__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/antd/es/typography/index.js"),antd__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/antd/es/layout/index.js"),antd__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/antd/es/modal/index.js"),antd__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/antd/es/button/index.js"),_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@ant-design/icons/es/icons/InfoCircleOutlined.js"),styled_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_styles_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/styles/theme.ts"),_components_layout_GlobalHeader__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/layout/GlobalHeader.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const{Text}=antd__WEBPACK_IMPORTED_MODULE_4__.A,StyledLayout=(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay)(antd__WEBPACK_IMPORTED_MODULE_6__.A)`
  background: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.Tj.background.default};
  min-height: 100vh;
  width: 100%;
`,ContentContainer=(styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.Tj.background.default};
`,styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay.div`
  height: 24px;
  background: #333333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.YK.md};
  font-size: 12px;
  color: white;
`,styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay.div`
  height: 52px;
  padding: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.YK.sm} ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.YK.md};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.Tj.border.light};
  background: white;

  .back-button {
    font-size: 20px;
    color: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.Tj.text.primary};
    cursor: pointer;
  }

  .title {
    font-size: 16px;
    font-weight: 500;
    color: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.Tj.text.primary};
    margin: 0;
  }

  .right-space {
    width: 20px;
  }
`,styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay.div`
  margin-top: 76px;
  padding: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.YK.md};
  padding-bottom: 120px;
`),SummarySection=styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay.div`
  background: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.Tj.background.light};
  border-radius: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.Vq.medium};
  padding: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.YK.md};
  margin-bottom: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.YK.lg};

  .section-title {
    font-size: 16px;
    font-weight: 500;
    color: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.Tj.text.primary};
    margin-bottom: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.YK.md};
  }
`,DetailItem=styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.YK.sm};
  font-size: 14px;

  .label {
    color: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.Tj.text.secondary};
  }

  .value {
    color: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.Tj.text.primary};
    text-align: right;
  }
`,CargoCard=styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay.div`
  background: white;
  border-radius: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.Vq.medium};
  padding: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.YK.md};
  margin-bottom: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.YK.md};

  .card-title {
    font-size: 14px;
    font-weight: 500;
    color: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.Tj.text.primary};
    margin-bottom: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.YK.md};
  }
`,BottomButtons=styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.YK.md};
  background: white;
  box-shadow: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.Eo.medium};
  display: flex;
  gap: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.YK.md};

  .ant-btn {
    flex: 1;
    height: 44px;
    font-size: 16px;
    border-radius: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.Vq.medium};
  }
`,StyledModal=(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay)(antd__WEBPACK_IMPORTED_MODULE_7__.A)`
  .ant-modal-content {
    border-radius: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.Vq.medium};
    padding: 0;
  }

  .ant-modal-body {
    padding: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.YK.xl} ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.YK.lg};
    text-align: center;
  }

  .ant-modal-footer {
    padding: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.YK.md};
    display: flex;
    gap: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.YK.md};
    border-top: none;

    .ant-btn {
      flex: 1;
      height: 44px;
      font-size: 16px;
      border-radius: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.Vq.medium};
      margin: 0;
    }
  }

  .modal-icon {
    color: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.Tj.primary};
    font-size: 24px;
    margin-bottom: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.YK.md};
  }

  .modal-text {
    font-size: 16px;
    color: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.Tj.text.primary};
    margin: 0;
  }
`,__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{onBack,onNext,data}=_ref;const[isModalVisible,setIsModalVisible]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),summaryData=data||{basicInfo:{transportType:"海运",route:"中国大陆→澳大利亚",departurePort:"连云港",destinationPort:"悉尼"},cargoInfo:[{containerType:"整柜",cargoType:"普通货物",weight:"1000",dimensions:"20",hasWarehouse:!0,warehouseAddress:"上海市浦东新区XX路XX号",contact:"张三",phone:"+86 13800138000"}]},handleModalConfirm=()=>{setIsModalVisible(!1),null==onNext||onNext()},handleModalCancel=()=>{setIsModalVisible(!1)};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(StyledLayout,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_layout_GlobalHeader__WEBPACK_IMPORTED_MODULE_2__.A,{title:"新增委托",onBack}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(ContentContainer,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(SummarySection,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"section-title",children:"基本委托信息"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(DetailItem,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"label",children:"运输方式："}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"value",children:summaryData.basicInfo.transportType})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(DetailItem,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"label",children:"物流线路："}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"value",children:summaryData.basicInfo.route})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(DetailItem,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"label",children:"起运港："}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"value",children:summaryData.basicInfo.departurePort})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(DetailItem,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"label",children:"目的地港："}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"value",children:summaryData.basicInfo.destinationPort})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(SummarySection,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"section-title",children:"商品信息"}),summaryData.cargoInfo.map(((cargo,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(CargoCard,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"card-title",children:["货柜 ",index+1]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(DetailItem,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"label",children:"柜型选择"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"value",children:cargo.containerType})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(DetailItem,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"label",children:"货物类型"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"value",children:cargo.cargoType})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(DetailItem,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"label",children:"货物总重量(kg)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"value",children:cargo.weight})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(DetailItem,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"label",children:"货物总尺寸(cbm)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"value",children:cargo.dimensions})]}),cargo.hasWarehouse&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(DetailItem,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"label",children:"上门装柜："}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"value",children:"是"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(DetailItem,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"label",children:"装柜地址："}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"value",children:cargo.warehouseAddress})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(DetailItem,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"label",children:"联系人"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"value",children:cargo.contact})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(DetailItem,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"label",children:"联系人电话"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"value",children:cargo.phone})]})]})]},index)))]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(BottomButtons,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__.Ay,{onClick:onBack,children:"上一步"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__.Ay,{type:"primary",onClick:()=>{setIsModalVisible(!0)},children:"下一步"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(StyledModal,{visible:isModalVisible,onOk:handleModalConfirm,onCancel:handleModalCancel,footer:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__.Ay,{onClick:handleModalCancel,children:"否"},"cancel"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__.Ay,{type:"primary",onClick:handleModalConfirm,children:"是"},"confirm")],centered:!0,closable:!1,width:320,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__.A,{className:"modal-icon"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{className:"modal-text",children:"即将创建订舱头号，是否确认？"})]})]})}},"./src/stories/pages/OrderSummary.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Mobile:()=>Mobile,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _pages_OrderSummary__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/pages/OrderSummary.tsx"),antd__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/antd/es/layout/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const StoryLayout=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay)(antd__WEBPACK_IMPORTED_MODULE_4__.A)`
  max-width: 375px;
  margin: 0 auto;
  overflow: hidden;
`,__WEBPACK_DEFAULT_EXPORT__={title:"Pages/OrderSummary",component:_pages_OrderSummary__WEBPACK_IMPORTED_MODULE_1__.A,parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"}},decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(StoryLayout,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Story,{})})],argTypes:{onBack:{action:"onBack clicked"},onNext:{action:"onNext clicked",description:"Called after confirming in the modal dialog"}}},Mobile={args:{data:{basicInfo:{transportType:"海运",route:"中国大陆→澳大利亚",departurePort:"连云港",destinationPort:"悉尼"},cargoInfo:[{containerType:"整柜",cargoType:"普通货物",weight:"1000",dimensions:"20",hasWarehouse:!0,warehouseAddress:"上海市浦东新区XX路XX号",contact:"张三",phone:"+86 13800138000"},{containerType:"拼柜",cargoType:"冷藏货物",weight:"500",dimensions:"10",hasWarehouse:!1}]}},parameters:{docs:{description:{story:"The order summary page shows a confirmation modal when clicking the next button. The modal asks for confirmation before creating a booking number."}}}};Mobile.parameters={...Mobile.parameters,docs:{...Mobile.parameters?.docs,source:{originalSource:"{\n  args: {\n    data: sampleData\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'The order summary page shows a confirmation modal when clicking the next button. The modal asks for confirmation before creating a booking number.'\n      }\n    }\n  }\n}",...Mobile.parameters?.docs?.source}}};const __namedExportsOrder=["Mobile"]},"./src/styles/theme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Eo:()=>shadows,Tj:()=>colors,Vq:()=>borderRadius,YK:()=>spacing});const colors={primary:"#1890ff",primaryLight:"#e6f7ff",primaryDark:"#096dd9",secondary:"#8c8c8c",secondaryDark:"#595959",text:{primary:"#262626",secondary:"#8c8c8c",light:"#bfbfbf",warning:"#faad14"},background:{default:"#f0f2f5",light:"#fafafa",dark:"#f5f5f5",blue:"#e6f7ff"},border:{default:"#d9d9d9",light:"#f0f0f0"},status:{success:"#52c41a",error:"#ff4d4f",warning:"#faad14"}},shadows={small:"0 1px 2px rgba(0,0,0,0.05)",medium:"0 2px 4px rgba(0,0,0,0.1)",large:"0 4px 8px rgba(0,0,0,0.15)"},spacing={xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px"},borderRadius={small:"4px",medium:"8px",large:"16px",circle:"50%"}}}]);
//# sourceMappingURL=stories-pages-OrderSummary-stories.672c5589.iframe.bundle.js.map