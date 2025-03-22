"use strict";(self.webpackChunklg_prototype=self.webpackChunklg_prototype||[]).push([[2748],{"./node_modules/@ant-design/icons/es/icons/PlusOutlined.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>icons_PlusOutlined});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js");const asn_PlusOutlined={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"};var AntdIcon=__webpack_require__("./node_modules/@ant-design/icons/es/components/AntdIcon.js"),PlusOutlined_PlusOutlined=function PlusOutlined(props,ref){return react.createElement(AntdIcon.A,(0,esm_extends.A)({},props,{ref,icon:asn_PlusOutlined}))};const icons_PlusOutlined=react.forwardRef(PlusOutlined_PlusOutlined)},"./node_modules/antd/es/checkbox/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>es_checkbox});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),es=__webpack_require__("./node_modules/rc-checkbox/es/index.js"),es_ref=__webpack_require__("./node_modules/rc-util/es/ref.js"),wave=__webpack_require__("./node_modules/antd/es/_util/wave/index.js"),wave_interface=__webpack_require__("./node_modules/antd/es/_util/wave/interface.js"),config_provider_context=__webpack_require__("./node_modules/antd/es/config-provider/context.js"),DisabledContext=__webpack_require__("./node_modules/antd/es/config-provider/DisabledContext.js"),useCSSVarCls=__webpack_require__("./node_modules/antd/es/config-provider/hooks/useCSSVarCls.js"),context=__webpack_require__("./node_modules/antd/es/form/context.js");const checkbox_GroupContext=react.createContext(null);var checkbox_style=__webpack_require__("./node_modules/antd/es/checkbox/style/index.js"),useBubbleLock=__webpack_require__("./node_modules/antd/es/checkbox/useBubbleLock.js"),__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};const InternalCheckbox=(props,ref)=>{var _a;const{prefixCls:customizePrefixCls,className,rootClassName,children,indeterminate=!1,style,onMouseEnter,onMouseLeave,skipGroup=!1,disabled}=props,restProps=__rest(props,["prefixCls","className","rootClassName","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]),{getPrefixCls,direction,checkbox}=react.useContext(config_provider_context.QO),checkboxGroup=react.useContext(checkbox_GroupContext),{isFormItemInput}=react.useContext(context.$W),contextDisabled=react.useContext(DisabledContext.A),mergedDisabled=null!==(_a=(null==checkboxGroup?void 0:checkboxGroup.disabled)||disabled)&&void 0!==_a?_a:contextDisabled,prevValue=react.useRef(restProps.value),checkboxRef=react.useRef(null),mergedRef=(0,es_ref.K4)(ref,checkboxRef);react.useEffect((()=>{null==checkboxGroup||checkboxGroup.registerValue(restProps.value)}),[]),react.useEffect((()=>{if(!skipGroup)return restProps.value!==prevValue.current&&(null==checkboxGroup||checkboxGroup.cancelValue(prevValue.current),null==checkboxGroup||checkboxGroup.registerValue(restProps.value),prevValue.current=restProps.value),()=>null==checkboxGroup?void 0:checkboxGroup.cancelValue(restProps.value)}),[restProps.value]),react.useEffect((()=>{var _a;(null===(_a=checkboxRef.current)||void 0===_a?void 0:_a.input)&&(checkboxRef.current.input.indeterminate=indeterminate)}),[indeterminate]);const prefixCls=getPrefixCls("checkbox",customizePrefixCls),rootCls=(0,useCSSVarCls.A)(prefixCls),[wrapCSSVar,hashId,cssVarCls]=(0,checkbox_style.Ay)(prefixCls,rootCls),checkboxProps=Object.assign({},restProps);checkboxGroup&&!skipGroup&&(checkboxProps.onChange=function(){restProps.onChange&&restProps.onChange.apply(restProps,arguments),checkboxGroup.toggleOption&&checkboxGroup.toggleOption({label:children,value:restProps.value})},checkboxProps.name=checkboxGroup.name,checkboxProps.checked=checkboxGroup.value.includes(restProps.value));const classString=classnames_default()(`${prefixCls}-wrapper`,{[`${prefixCls}-rtl`]:"rtl"===direction,[`${prefixCls}-wrapper-checked`]:checkboxProps.checked,[`${prefixCls}-wrapper-disabled`]:mergedDisabled,[`${prefixCls}-wrapper-in-form-item`]:isFormItemInput},null==checkbox?void 0:checkbox.className,className,rootClassName,cssVarCls,rootCls,hashId),checkboxClass=classnames_default()({[`${prefixCls}-indeterminate`]:indeterminate},wave_interface.D,hashId),[onLabelClick,onInputClick]=(0,useBubbleLock.A)(checkboxProps.onClick);return wrapCSSVar(react.createElement(wave.A,{component:"Checkbox",disabled:mergedDisabled},react.createElement("label",{className:classString,style:Object.assign(Object.assign({},null==checkbox?void 0:checkbox.style),style),onMouseEnter,onMouseLeave,onClick:onLabelClick},react.createElement(es.A,Object.assign({},checkboxProps,{onClick:onInputClick,prefixCls,className:checkboxClass,disabled:mergedDisabled,ref:mergedRef})),void 0!==children&&react.createElement("span",{className:`${prefixCls}-label`},children))))};const checkbox_Checkbox=react.forwardRef(InternalCheckbox);var toConsumableArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),omit=__webpack_require__("./node_modules/rc-util/es/omit.js"),Group_rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};const CheckboxGroup=react.forwardRef(((props,ref)=>{const{defaultValue,children,options=[],prefixCls:customizePrefixCls,className,rootClassName,style,onChange}=props,restProps=Group_rest(props,["defaultValue","children","options","prefixCls","className","rootClassName","style","onChange"]),{getPrefixCls,direction}=react.useContext(config_provider_context.QO),[value,setValue]=react.useState(restProps.value||defaultValue||[]),[registeredValues,setRegisteredValues]=react.useState([]);react.useEffect((()=>{"value"in restProps&&setValue(restProps.value||[])}),[restProps.value]);const memoizedOptions=react.useMemo((()=>options.map((option=>"string"==typeof option||"number"==typeof option?{label:option,value:option}:option))),[options]),prefixCls=getPrefixCls("checkbox",customizePrefixCls),groupPrefixCls=`${prefixCls}-group`,rootCls=(0,useCSSVarCls.A)(prefixCls),[wrapCSSVar,hashId,cssVarCls]=(0,checkbox_style.Ay)(prefixCls,rootCls),domProps=(0,omit.A)(restProps,["value","disabled"]),childrenNode=options.length?memoizedOptions.map((option=>react.createElement(checkbox_Checkbox,{prefixCls,key:option.value.toString(),disabled:"disabled"in option?option.disabled:restProps.disabled,value:option.value,checked:value.includes(option.value),onChange:option.onChange,className:`${groupPrefixCls}-item`,style:option.style,title:option.title,id:option.id,required:option.required},option.label))):children,context={toggleOption:option=>{const optionIndex=value.indexOf(option.value),newValue=(0,toConsumableArray.A)(value);-1===optionIndex?newValue.push(option.value):newValue.splice(optionIndex,1),"value"in restProps||setValue(newValue),null==onChange||onChange(newValue.filter((val=>registeredValues.includes(val))).sort(((a,b)=>memoizedOptions.findIndex((opt=>opt.value===a))-memoizedOptions.findIndex((opt=>opt.value===b)))))},value,disabled:restProps.disabled,name:restProps.name,registerValue:val=>{setRegisteredValues((prevValues=>[].concat((0,toConsumableArray.A)(prevValues),[val])))},cancelValue:val=>{setRegisteredValues((prevValues=>prevValues.filter((v=>v!==val))))}},classString=classnames_default()(groupPrefixCls,{[`${groupPrefixCls}-rtl`]:"rtl"===direction},className,rootClassName,cssVarCls,rootCls,hashId);return wrapCSSVar(react.createElement("div",Object.assign({className:classString,style},domProps,{ref}),react.createElement(checkbox_GroupContext.Provider,{value:context},childrenNode)))})),Group=CheckboxGroup,es_checkbox_Checkbox=checkbox_Checkbox;es_checkbox_Checkbox.Group=Group,es_checkbox_Checkbox.__ANT_CHECKBOX=!0;const es_checkbox=es_checkbox_Checkbox},"./node_modules/antd/es/checkbox/style/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ay:()=>__WEBPACK_DEFAULT_EXPORT__,gd:()=>getStyle});var _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@ant-design/cssinjs/es/index.js"),_style__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/antd/es/style/index.js"),_theme_internal__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@ant-design/cssinjs-utils/es/index.js"),_theme_internal__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/antd/es/theme/util/genStyleUtils.js");const genCheckboxStyle=token=>{const{checkboxCls}=token,wrapperCls=`${checkboxCls}-wrapper`;return[{[`${checkboxCls}-group`]:Object.assign(Object.assign({},(0,_style__WEBPACK_IMPORTED_MODULE_1__.dF)(token)),{display:"inline-flex",flexWrap:"wrap",columnGap:token.marginXS,[`> ${token.antCls}-row`]:{flex:1}}),[wrapperCls]:Object.assign(Object.assign({},(0,_style__WEBPACK_IMPORTED_MODULE_1__.dF)(token)),{display:"inline-flex",alignItems:"baseline",cursor:"pointer","&:after":{display:"inline-block",width:0,overflow:"hidden",content:"'\\a0'"},[`& + ${wrapperCls}`]:{marginInlineStart:0},[`&${wrapperCls}-in-form-item`]:{'input[type="checkbox"]':{width:14,height:14}}}),[checkboxCls]:Object.assign(Object.assign({},(0,_style__WEBPACK_IMPORTED_MODULE_1__.dF)(token)),{position:"relative",whiteSpace:"nowrap",lineHeight:1,cursor:"pointer",borderRadius:token.borderRadiusSM,alignSelf:"center",[`${checkboxCls}-input`]:{position:"absolute",inset:0,zIndex:1,cursor:"pointer",opacity:0,margin:0,[`&:focus-visible + ${checkboxCls}-inner`]:Object.assign({},(0,_style__WEBPACK_IMPORTED_MODULE_1__.jk)(token))},[`${checkboxCls}-inner`]:{boxSizing:"border-box",display:"block",width:token.checkboxSize,height:token.checkboxSize,direction:"ltr",backgroundColor:token.colorBgContainer,border:`${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.zA)(token.lineWidth)} ${token.lineType} ${token.colorBorder}`,borderRadius:token.borderRadiusSM,borderCollapse:"separate",transition:`all ${token.motionDurationSlow}`,"&:after":{boxSizing:"border-box",position:"absolute",top:"50%",insetInlineStart:"25%",display:"table",width:token.calc(token.checkboxSize).div(14).mul(5).equal(),height:token.calc(token.checkboxSize).div(14).mul(8).equal(),border:`${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.zA)(token.lineWidthBold)} solid ${token.colorWhite}`,borderTop:0,borderInlineStart:0,transform:"rotate(45deg) scale(0) translate(-50%,-50%)",opacity:0,content:'""',transition:`all ${token.motionDurationFast} ${token.motionEaseInBack}, opacity ${token.motionDurationFast}`}},"& + span":{paddingInlineStart:token.paddingXS,paddingInlineEnd:token.paddingXS}})},{[`\n        ${wrapperCls}:not(${wrapperCls}-disabled),\n        ${checkboxCls}:not(${checkboxCls}-disabled)\n      `]:{[`&:hover ${checkboxCls}-inner`]:{borderColor:token.colorPrimary}},[`${wrapperCls}:not(${wrapperCls}-disabled)`]:{[`&:hover ${checkboxCls}-checked:not(${checkboxCls}-disabled) ${checkboxCls}-inner`]:{backgroundColor:token.colorPrimaryHover,borderColor:"transparent"},[`&:hover ${checkboxCls}-checked:not(${checkboxCls}-disabled):after`]:{borderColor:token.colorPrimaryHover}}},{[`${checkboxCls}-checked`]:{[`${checkboxCls}-inner`]:{backgroundColor:token.colorPrimary,borderColor:token.colorPrimary,"&:after":{opacity:1,transform:"rotate(45deg) scale(1) translate(-50%,-50%)",transition:`all ${token.motionDurationMid} ${token.motionEaseOutBack} ${token.motionDurationFast}`}}},[`\n        ${wrapperCls}-checked:not(${wrapperCls}-disabled),\n        ${checkboxCls}-checked:not(${checkboxCls}-disabled)\n      `]:{[`&:hover ${checkboxCls}-inner`]:{backgroundColor:token.colorPrimaryHover,borderColor:"transparent"}}},{[checkboxCls]:{"&-indeterminate":{[`${checkboxCls}-inner`]:{backgroundColor:`${token.colorBgContainer} !important`,borderColor:`${token.colorBorder} !important`,"&:after":{top:"50%",insetInlineStart:"50%",width:token.calc(token.fontSizeLG).div(2).equal(),height:token.calc(token.fontSizeLG).div(2).equal(),backgroundColor:token.colorPrimary,border:0,transform:"translate(-50%, -50%) scale(1)",opacity:1,content:'""'}},[`&:hover ${checkboxCls}-inner`]:{backgroundColor:`${token.colorBgContainer} !important`,borderColor:`${token.colorPrimary} !important`}}}},{[`${wrapperCls}-disabled`]:{cursor:"not-allowed"},[`${checkboxCls}-disabled`]:{[`&, ${checkboxCls}-input`]:{cursor:"not-allowed",pointerEvents:"none"},[`${checkboxCls}-inner`]:{background:token.colorBgContainerDisabled,borderColor:token.colorBorder,"&:after":{borderColor:token.colorTextDisabled}},"&:after":{display:"none"},"& + span":{color:token.colorTextDisabled},[`&${checkboxCls}-indeterminate ${checkboxCls}-inner::after`]:{background:token.colorTextDisabled}}}]};function getStyle(prefixCls,token){const checkboxToken=(0,_theme_internal__WEBPACK_IMPORTED_MODULE_2__.oX)(token,{checkboxCls:`.${prefixCls}`,checkboxSize:token.controlInteractiveSize});return[genCheckboxStyle(checkboxToken)]}const __WEBPACK_DEFAULT_EXPORT__=(0,_theme_internal__WEBPACK_IMPORTED_MODULE_3__.OF)("Checkbox",((token,_ref)=>{let{prefixCls}=_ref;return[getStyle(prefixCls,token)]}))},"./src/components/layout/GlobalHeader.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var antd__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/antd/es/typography/index.js"),_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@ant-design/icons/es/icons/LeftOutlined.js"),styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_styles_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/styles/theme.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const{Title}=antd__WEBPACK_IMPORTED_MODULE_3__.A,HeaderContainer=styled_components__WEBPACK_IMPORTED_MODULE_4__.Ay.div`
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
`,__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{title,onBack}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(HeaderContainer,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(StatusBar,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{children:"12:09"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{style:{display:"flex",gap:"4px",alignItems:"center"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{children:"􀙇"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{children:"􀙈"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{children:"24%"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(Header,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(LeftSection,{children:onBack&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.A,{className:"back-button",onClick:onBack})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CenterSection,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img",{src:"/logo.svg",alt:"Logo",className:"logo"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(RightSection,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{className:"language-select",children:"中 (簡)"})})]})]})}},"./src/pages/CargoDetails.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),antd__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/antd/es/typography/index.js"),antd__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/antd/es/layout/index.js"),antd__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/antd/es/radio/index.js"),antd__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/antd/es/select/index.js"),antd__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/antd/es/input/index.js"),antd__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/antd/es/button/index.js"),antd__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/antd/es/checkbox/index.js"),_ant_design_icons__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/@ant-design/icons/es/icons/PlusOutlined.js"),styled_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_styles_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/styles/theme.ts"),_components_layout_GlobalHeader__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/layout/GlobalHeader.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const{Title}=antd__WEBPACK_IMPORTED_MODULE_4__.A,StyledLayout=(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay)(antd__WEBPACK_IMPORTED_MODULE_6__.A)`
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
`),FormGroup=styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay.div`
  margin-bottom: ${props=>props.noMargin?"0":_styles_theme__WEBPACK_IMPORTED_MODULE_1__.YK.lg};

  .label {
    font-size: 14px;
    color: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.Tj.text.primary};
    margin-bottom: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.YK.sm};
    display: flex;
    align-items: center;

    .required {
      color: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.Tj.status.error};
      margin-right: 4px;
    }
  }
`,StyledRadioGroup=(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay)(antd__WEBPACK_IMPORTED_MODULE_7__.Ay.Group)`
  display: flex;
  gap: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.YK.sm};

  .ant-radio-wrapper {
    border: 1px solid ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.Tj.border.light};
    padding: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.YK.sm} ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.YK.md};
    border-radius: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.Vq.medium};
    margin-right: 0;

    &-checked {
      border-color: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.Tj.primary};
      background: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.Tj.background.blue};
    }
  }
`,StyledSelect=(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay)(antd__WEBPACK_IMPORTED_MODULE_8__.A)`
  width: 100%;

  .ant-select-selector {
    height: 44px !important;
    padding: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.YK.sm} ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.YK.md} !important;
    border-radius: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.Vq.medium} !important;

    .ant-select-selection-search-input {
      height: 42px !important;
    }

    .ant-select-selection-placeholder,
    .ant-select-selection-item {
      line-height: 28px !important;
    }
  }
`,StyledInput=(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay)(antd__WEBPACK_IMPORTED_MODULE_9__.A)`
  height: 44px;
  border-radius: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.Vq.medium};
  padding: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.YK.sm} ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.YK.md};

  &::placeholder {
    color: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.Tj.text.light};
  }
`,CurrencyInput=styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay.div`
  display: flex;
  gap: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.YK.sm};

  .currency-select {
    width: 100px;
  }

  .value-input {
    flex: 1;
  }
`,AddressSection=styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay.div`
  margin-top: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.YK.xl};
  padding-top: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.YK.lg};
  border-top: 1px solid ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.Tj.border.light};
`,AddButton=(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay)(antd__WEBPACK_IMPORTED_MODULE_10__.Ay)`
  width: 100%;
  height: 44px;
  margin-top: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.YK.md};
  border-radius: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.Vq.medium};
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
`,__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{onBack,onNext}=_ref;const[containerType,setContainerType]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("whole"),[cargoType,setCargoType]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),[cargoWeight,setCargoWeight]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),[cargoDimensions,setCargoDimensions]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),[totalQuantity,setTotalQuantity]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),[totalValue,setTotalValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),[currency,setCurrency]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("AUD"),[needsWarehouse,setNeedsWarehouse]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[warehouseAddress,setWarehouseAddress]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),[contactName,setContactName]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),[contactPhone,setContactPhone]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),[phonePrefix,setPhonePrefix]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("+86");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(StyledLayout,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_layout_GlobalHeader__WEBPACK_IMPORTED_MODULE_2__.A,{title:"新增委托",onBack}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(ContentContainer,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(FormGroup,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"label",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"required",children:"*"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{children:"整柜/拼柜"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(StyledRadioGroup,{value:containerType,onChange:e=>setContainerType(e.target.value),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_7__.Ay,{value:"whole",children:"整柜"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_7__.Ay,{value:"part",children:"拼柜"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(FormGroup,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"label",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"required",children:"*"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{children:"柜型选择"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(StyledSelect,{value:cargoType,onChange:value=>setCargoType(value),placeholder:"请选择",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__.A.Option,{value:"type1",children:"20尺标准柜"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__.A.Option,{value:"type2",children:"40尺标准柜"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__.A.Option,{value:"type3",children:"40尺高柜"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(FormGroup,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"label",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"required",children:"*"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{children:"货物类型"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(StyledSelect,{value:cargoType,onChange:value=>setCargoType(value),placeholder:"请选择",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__.A.Option,{value:"type1",children:"普通货物"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__.A.Option,{value:"type2",children:"危险品"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__.A.Option,{value:"type3",children:"冷藏货物"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(FormGroup,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"label",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"required",children:"*"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{children:"货物总重量(kg)"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(StyledInput,{value:cargoWeight,onChange:e=>setCargoWeight(e.target.value),placeholder:"货物总重量"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(FormGroup,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"label",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"required",children:"*"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{children:"货物总尺寸(cbm)"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(StyledInput,{value:cargoDimensions,onChange:e=>setCargoDimensions(e.target.value),placeholder:"货物总尺寸"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(FormGroup,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"label",children:"总箱数"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(StyledInput,{value:totalQuantity,onChange:e=>setTotalQuantity(e.target.value),placeholder:"总箱数"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(FormGroup,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"label",children:"总货值"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(CurrencyInput,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(StyledSelect,{className:"currency-select",value:currency,onChange:value=>setCurrency(value),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__.A.Option,{value:"AUD",children:"AUD"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__.A.Option,{value:"USD",children:"USD"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__.A.Option,{value:"CNY",children:"CNY"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(StyledInput,{className:"value-input",value:totalValue,onChange:e=>setTotalValue(e.target.value),placeholder:"总货值"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(FormGroup,{noMargin:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_11__.A,{checked:needsWarehouse,onChange:e=>setNeedsWarehouse(e.target.checked),children:"上门装柜(可选填)"})}),needsWarehouse&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(AddressSection,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(FormGroup,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"label",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"required",children:"*"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{children:"装柜地址"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(StyledInput,{value:warehouseAddress,onChange:e=>setWarehouseAddress(e.target.value),placeholder:"装柜地址"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(FormGroup,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"label",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"required",children:"*"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{children:"联系人"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(StyledInput,{value:contactName,onChange:e=>setContactName(e.target.value),placeholder:"联系人姓名"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(FormGroup,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"label",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"required",children:"*"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{children:"联系人电话"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(CurrencyInput,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(StyledSelect,{className:"currency-select",value:phonePrefix,onChange:value=>setPhonePrefix(value),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__.A.Option,{value:"+86",children:"+86"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__.A.Option,{value:"+61",children:"+61"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(StyledInput,{className:"value-input",value:contactPhone,onChange:e=>setContactPhone(e.target.value),placeholder:"电话"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(AddButton,{icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_12__.A,{}),children:"添加装柜"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(BottomButtons,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_10__.Ay,{onClick:onBack,children:"上一步"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_10__.Ay,{type:"primary",onClick:()=>{null==onNext||onNext({containerType,cargoType,cargoWeight,cargoDimensions,totalQuantity,totalValue,currency,needsWarehouse,warehouseAddress,contactName,contactPhone,phonePrefix})},children:"下一步"})]})]})}},"./src/stories/pages/CargoDetails.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Mobile:()=>Mobile,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _pages_CargoDetails__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/pages/CargoDetails.tsx"),antd__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/antd/es/layout/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const StoryLayout=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay)(antd__WEBPACK_IMPORTED_MODULE_4__.A)`
  max-width: 375px;
  margin: 0 auto;
  overflow: hidden;
`,__WEBPACK_DEFAULT_EXPORT__={title:"Pages/CargoDetails",component:_pages_CargoDetails__WEBPACK_IMPORTED_MODULE_1__.A,parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"}},decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(StoryLayout,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Story,{})})],argTypes:{onBack:{action:"onBack"},onNext:{action:"onNext"}}},Mobile={args:{}};Mobile.parameters={...Mobile.parameters,docs:{...Mobile.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Mobile.parameters?.docs?.source}}};const __namedExportsOrder=["Mobile"]},"./src/styles/theme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Eo:()=>shadows,Tj:()=>colors,Vq:()=>borderRadius,YK:()=>spacing});const colors={primary:"#1890ff",primaryLight:"#e6f7ff",primaryDark:"#096dd9",secondary:"#8c8c8c",secondaryDark:"#595959",text:{primary:"#262626",secondary:"#8c8c8c",light:"#bfbfbf",warning:"#faad14"},background:{default:"#f0f2f5",light:"#fafafa",dark:"#f5f5f5",blue:"#e6f7ff"},border:{default:"#d9d9d9",light:"#f0f0f0"},status:{success:"#52c41a",error:"#ff4d4f",warning:"#faad14"}},shadows={small:"0 1px 2px rgba(0,0,0,0.05)",medium:"0 2px 4px rgba(0,0,0,0.1)",large:"0 4px 8px rgba(0,0,0,0.15)"},spacing={xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px"},borderRadius={small:"4px",medium:"8px",large:"16px",circle:"50%"}}}]);
//# sourceMappingURL=stories-pages-CargoDetails-stories.45774eda.iframe.bundle.js.map