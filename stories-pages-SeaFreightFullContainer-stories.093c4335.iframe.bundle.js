"use strict";(self.webpackChunklg_prototype=self.webpackChunklg_prototype||[]).push([[8252],{"./src/components/layout/GlobalHeader.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var antd__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/antd/es/typography/index.js"),_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@ant-design/icons/es/icons/LeftOutlined.js"),styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_styles_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/styles/theme.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const{Title}=antd__WEBPACK_IMPORTED_MODULE_3__.A,HeaderContainer=styled_components__WEBPACK_IMPORTED_MODULE_4__.Ay.div`
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
`,__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{onBack,onNext}=_ref;const[containerType,setContainerType]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("whole"),[cargoType,setCargoType]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),[cargoWeight,setCargoWeight]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),[cargoDimensions,setCargoDimensions]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),[totalQuantity,setTotalQuantity]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),[totalValue,setTotalValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),[currency,setCurrency]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("AUD"),[needsWarehouse,setNeedsWarehouse]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[warehouseAddress,setWarehouseAddress]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),[contactName,setContactName]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),[contactPhone,setContactPhone]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),[phonePrefix,setPhonePrefix]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("+86");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(StyledLayout,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_layout_GlobalHeader__WEBPACK_IMPORTED_MODULE_2__.A,{title:"新增委托",onBack}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(ContentContainer,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(FormGroup,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"label",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"required",children:"*"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{children:"整柜/拼柜"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(StyledRadioGroup,{value:containerType,onChange:e=>setContainerType(e.target.value),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_7__.Ay,{value:"whole",children:"整柜"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_7__.Ay,{value:"part",children:"拼柜"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(FormGroup,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"label",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"required",children:"*"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{children:"柜型选择"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(StyledSelect,{value:cargoType,onChange:value=>setCargoType(value),placeholder:"请选择",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__.A.Option,{value:"type1",children:"20尺标准柜"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__.A.Option,{value:"type2",children:"40尺标准柜"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__.A.Option,{value:"type3",children:"40尺高柜"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(FormGroup,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"label",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"required",children:"*"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{children:"货物类型"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(StyledSelect,{value:cargoType,onChange:value=>setCargoType(value),placeholder:"请选择",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__.A.Option,{value:"type1",children:"普通货物"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__.A.Option,{value:"type2",children:"危险品"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__.A.Option,{value:"type3",children:"冷藏货物"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(FormGroup,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"label",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"required",children:"*"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{children:"货物总重量(kg)"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(StyledInput,{value:cargoWeight,onChange:e=>setCargoWeight(e.target.value),placeholder:"货物总重量"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(FormGroup,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"label",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"required",children:"*"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{children:"货物总尺寸(cbm)"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(StyledInput,{value:cargoDimensions,onChange:e=>setCargoDimensions(e.target.value),placeholder:"货物总尺寸"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(FormGroup,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"label",children:"总箱数"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(StyledInput,{value:totalQuantity,onChange:e=>setTotalQuantity(e.target.value),placeholder:"总箱数"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(FormGroup,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"label",children:"总货值"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(CurrencyInput,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(StyledSelect,{className:"currency-select",value:currency,onChange:value=>setCurrency(value),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__.A.Option,{value:"AUD",children:"AUD"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__.A.Option,{value:"USD",children:"USD"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__.A.Option,{value:"CNY",children:"CNY"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(StyledInput,{className:"value-input",value:totalValue,onChange:e=>setTotalValue(e.target.value),placeholder:"总货值"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(FormGroup,{noMargin:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_11__.A,{checked:needsWarehouse,onChange:e=>setNeedsWarehouse(e.target.checked),children:"上门装柜(可选填)"})}),needsWarehouse&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(AddressSection,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(FormGroup,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"label",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"required",children:"*"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{children:"装柜地址"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(StyledInput,{value:warehouseAddress,onChange:e=>setWarehouseAddress(e.target.value),placeholder:"装柜地址"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(FormGroup,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"label",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"required",children:"*"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{children:"联系人"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(StyledInput,{value:contactName,onChange:e=>setContactName(e.target.value),placeholder:"联系人姓名"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(FormGroup,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"label",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"required",children:"*"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{children:"联系人电话"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(CurrencyInput,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(StyledSelect,{className:"currency-select",value:phonePrefix,onChange:value=>setPhonePrefix(value),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__.A.Option,{value:"+86",children:"+86"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__.A.Option,{value:"+61",children:"+61"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(StyledInput,{className:"value-input",value:contactPhone,onChange:e=>setContactPhone(e.target.value),placeholder:"电话"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(AddButton,{icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_12__.A,{}),children:"添加装柜"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(BottomButtons,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_10__.Ay,{onClick:onBack,children:"上一步"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_10__.Ay,{type:"primary",onClick:()=>{null==onNext||onNext({containerType,cargoType,cargoWeight,cargoDimensions,totalQuantity,totalValue,currency,needsWarehouse,warehouseAddress,contactName,contactPhone,phonePrefix})},children:"下一步"})]})]})}},"./src/pages/OrderSummary.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),antd__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/antd/es/typography/index.js"),antd__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/antd/es/layout/index.js"),antd__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/antd/es/modal/index.js"),antd__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/antd/es/button/index.js"),_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@ant-design/icons/es/icons/InfoCircleOutlined.js"),styled_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_styles_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/styles/theme.ts"),_components_layout_GlobalHeader__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/layout/GlobalHeader.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const{Text}=antd__WEBPACK_IMPORTED_MODULE_4__.A,StyledLayout=(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay)(antd__WEBPACK_IMPORTED_MODULE_6__.A)`
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
`,__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{onBack,onNext,data}=_ref;const[isModalVisible,setIsModalVisible]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),summaryData=data||{basicInfo:{transportType:"海运",route:"中国大陆→澳大利亚",departurePort:"连云港",destinationPort:"悉尼"},cargoInfo:[{containerType:"整柜",cargoType:"普通货物",weight:"1000",dimensions:"20",hasWarehouse:!0,warehouseAddress:"上海市浦东新区XX路XX号",contact:"张三",phone:"+86 13800138000"}]},handleModalConfirm=()=>{setIsModalVisible(!1),null==onNext||onNext()},handleModalCancel=()=>{setIsModalVisible(!1)};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(StyledLayout,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_layout_GlobalHeader__WEBPACK_IMPORTED_MODULE_2__.A,{title:"新增委托",onBack}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(ContentContainer,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(SummarySection,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"section-title",children:"基本委托信息"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(DetailItem,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"label",children:"运输方式："}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"value",children:summaryData.basicInfo.transportType})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(DetailItem,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"label",children:"物流线路："}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"value",children:summaryData.basicInfo.route})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(DetailItem,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"label",children:"起运港："}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"value",children:summaryData.basicInfo.departurePort})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(DetailItem,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"label",children:"目的地港："}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"value",children:summaryData.basicInfo.destinationPort})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(SummarySection,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"section-title",children:"商品信息"}),summaryData.cargoInfo.map(((cargo,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(CargoCard,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"card-title",children:["货柜 ",index+1]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(DetailItem,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"label",children:"柜型选择"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"value",children:cargo.containerType})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(DetailItem,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"label",children:"货物类型"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"value",children:cargo.cargoType})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(DetailItem,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"label",children:"货物总重量(kg)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"value",children:cargo.weight})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(DetailItem,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"label",children:"货物总尺寸(cbm)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"value",children:cargo.dimensions})]}),cargo.hasWarehouse&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(DetailItem,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"label",children:"上门装柜："}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"value",children:"是"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(DetailItem,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"label",children:"装柜地址："}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"value",children:cargo.warehouseAddress})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(DetailItem,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"label",children:"联系人"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"value",children:cargo.contact})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(DetailItem,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"label",children:"联系人电话"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"value",children:cargo.phone})]})]})]},index)))]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(BottomButtons,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__.Ay,{onClick:onBack,children:"上一步"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__.Ay,{type:"primary",onClick:()=>{setIsModalVisible(!0)},children:"下一步"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(StyledModal,{visible:isModalVisible,onOk:handleModalConfirm,onCancel:handleModalCancel,footer:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__.Ay,{onClick:handleModalCancel,children:"否"},"cancel"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__.Ay,{type:"primary",onClick:handleModalConfirm,children:"是"},"confirm")],centered:!0,closable:!1,width:320,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__.A,{className:"modal-icon"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{className:"modal-text",children:"即将创建订舱头号，是否确认？"})]})]})}},"./src/pages/ShippingRoute.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),antd__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/antd/es/typography/index.js"),antd__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/antd/es/layout/index.js"),antd__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/antd/es/radio/index.js"),antd__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/antd/es/select/index.js"),antd__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/antd/es/button/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_styles_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/styles/theme.ts"),_components_layout_GlobalHeader__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/layout/GlobalHeader.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const{Title}=antd__WEBPACK_IMPORTED_MODULE_4__.A,StyledLayout=(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay)(antd__WEBPACK_IMPORTED_MODULE_6__.A)`
  background: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.Tj.background.default};
  min-height: 100vh;
  width: 100%;
`,ContentContainer=styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay.div`
  margin-top: 76px;
  padding: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.YK.md};
`,FormGroup=styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay.div`
  margin-bottom: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.YK.lg};

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
`,__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{onBack,onNext}=_ref;const[transportType,setTransportType]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("sea"),[route,setRoute]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("中国大陆→澳大利亚"),[departurePort,setDeparturePort]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),[destinationPort,setDestinationPort]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(StyledLayout,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_layout_GlobalHeader__WEBPACK_IMPORTED_MODULE_2__.A,{title:"新增委托",onBack}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(ContentContainer,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(FormGroup,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"label",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"required",children:"*"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{children:"海运/空运"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(StyledRadioGroup,{value:transportType,onChange:e=>setTransportType(e.target.value),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_7__.Ay,{value:"sea",children:"海运"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_7__.Ay,{value:"air",children:"空运"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(FormGroup,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"label",children:"物流线路"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(StyledSelect,{value:route,onChange:value=>setRoute(value),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__.A.Option,{value:"中国大陆→澳大利亚",children:"中国大陆→澳大利亚"})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(FormGroup,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"label",children:"起运港"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(StyledSelect,{value:departurePort,onChange:value=>setDeparturePort(value),placeholder:"请选择",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__.A.Option,{value:"port1",children:"青岛港"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__.A.Option,{value:"port2",children:"上海港"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__.A.Option,{value:"port3",children:"深圳港"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(FormGroup,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"label",children:"目的地港"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(StyledSelect,{value:destinationPort,onChange:value=>setDestinationPort(value),placeholder:"请选择",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__.A.Option,{value:"port1",children:"悉尼港"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__.A.Option,{value:"port2",children:"墨尔本港"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__.A.Option,{value:"port3",children:"布里斯班港"})]})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(BottomButtons,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_9__.Ay,{onClick:onBack,children:"上一步"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_9__.Ay,{type:"primary",onClick:()=>{null==onNext||onNext({transportType,route,departurePort,destinationPort})},children:"下一步"})]})]})}},"./src/stories/pages/SeaFreightFullContainer.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BookingDetailsPage:()=>BookingDetailsPage,BookingSuccessPage:()=>BookingSuccessPage,CargoDetailsPage:()=>CargoDetailsPage,CargoInputPage:()=>CargoInputPage,HomePage:()=>HomePage,OrderSummaryPage:()=>OrderSummaryPage,ShippingRoutePage:()=>ShippingRoutePage,SpecialHandlingPage:()=>SpecialHandlingPage,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SeaFreightFullContainer_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Home=__webpack_require__("./src/pages/Home.tsx"),CargoDetails=__webpack_require__("./src/pages/CargoDetails.tsx"),OrderSummary=__webpack_require__("./src/pages/OrderSummary.tsx"),ShippingRoute=__webpack_require__("./src/pages/ShippingRoute.tsx"),typography=__webpack_require__("./node_modules/antd/es/typography/index.js"),layout=__webpack_require__("./node_modules/antd/es/layout/index.js"),es_button=__webpack_require__("./node_modules/antd/es/button/index.js"),CopyOutlined=__webpack_require__("./node_modules/@ant-design/icons/es/icons/CopyOutlined.js"),theme=__webpack_require__("./src/styles/theme.ts"),GlobalHeader=__webpack_require__("./src/components/layout/GlobalHeader.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const{Text}=typography.A,StyledLayout=(0,styled_components_browser_esm.Ay)(layout.A)`
  background: ${theme.Tj.background.default};
  min-height: 100vh;
  width: 100%;
`,ContentContainer=styled_components_browser_esm.Ay.div`
  margin-top: 76px;
  padding: ${theme.YK.md};
`,Title=styled_components_browser_esm.Ay.h2`
  font-size: 18px;
  font-weight: 500;
  color: ${theme.Tj.text.primary};
  margin-bottom: ${theme.YK.lg};
  text-align: center;
`,InfoCard=styled_components_browser_esm.Ay.div`
  background: white;
  border-radius: ${theme.Vq.medium};
  padding: ${theme.YK.md};
  margin-bottom: ${theme.YK.lg};
`,InfoRow=styled_components_browser_esm.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.YK.sm} 0;
  border-bottom: 1px solid ${theme.Tj.border.light};

  &:last-child {
    border-bottom: none;
  }

  .label {
    color: ${theme.Tj.text.secondary};
    font-size: 14px;
  }

  .value {
    color: ${theme.Tj.text.primary};
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: ${theme.YK.xs};
  }
`,Message=styled_components_browser_esm.Ay.p`
  font-size: 14px;
  color: ${theme.Tj.text.secondary};
  text-align: center;
  margin: ${theme.YK.lg} 0;
  line-height: 1.5;
`,DownloadButton=(0,styled_components_browser_esm.Ay)(es_button.Ay)`
  width: 100%;
  height: 44px;
  margin-bottom: ${theme.YK.lg};
  border-radius: ${theme.Vq.medium};
`,ButtonGroup=styled_components_browser_esm.Ay.div`
  display: flex;
  gap: ${theme.YK.md};
  margin-top: ${theme.YK.xl};

  .ant-btn {
    flex: 1;
    height: 44px;
    border-radius: ${theme.Vq.medium};
  }
`,pages_BookingSuccess=_ref=>{let{bookingData={bookingNumber:"UE-006-2024",origin:"中国-郑州",departure:"中国-广州",destination:"澳大利亚-悉尼",warehouseAddress:"澳大利亚-悉尼"},onEdit,onNext}=_ref;return(0,jsx_runtime.jsxs)(StyledLayout,{children:[(0,jsx_runtime.jsx)(GlobalHeader.A,{}),(0,jsx_runtime.jsxs)(ContentContainer,{children:[(0,jsx_runtime.jsx)(Title,{children:"哨头号创建成功"}),(0,jsx_runtime.jsxs)(InfoCard,{children:[(0,jsx_runtime.jsxs)(InfoRow,{children:[(0,jsx_runtime.jsx)("span",{className:"label",children:"哨头号"}),(0,jsx_runtime.jsxs)("div",{className:"value",children:[bookingData.bookingNumber,(0,jsx_runtime.jsx)(CopyOutlined.A,{onClick:()=>{navigator.clipboard.writeText(bookingData.bookingNumber)},style:{cursor:"pointer"}})]})]}),(0,jsx_runtime.jsxs)(InfoRow,{children:[(0,jsx_runtime.jsx)("span",{className:"label",children:"出货地"}),(0,jsx_runtime.jsx)("span",{className:"value",children:bookingData.origin})]}),(0,jsx_runtime.jsxs)(InfoRow,{children:[(0,jsx_runtime.jsx)("span",{className:"label",children:"起运港"}),(0,jsx_runtime.jsx)("span",{className:"value",children:bookingData.departure})]}),(0,jsx_runtime.jsxs)(InfoRow,{children:[(0,jsx_runtime.jsx)("span",{className:"label",children:"目的地"}),(0,jsx_runtime.jsx)("span",{className:"value",children:bookingData.destination})]}),(0,jsx_runtime.jsxs)(InfoRow,{children:[(0,jsx_runtime.jsx)("span",{className:"label",children:"集运仓地址"}),(0,jsx_runtime.jsx)("span",{className:"value",children:bookingData.warehouseAddress})]})]}),(0,jsx_runtime.jsx)(Message,{children:"请务必下载哨头面单，打印并贴贴于每件货物外箱。如缺失面单，将无法送进入库。"}),(0,jsx_runtime.jsx)(DownloadButton,{type:"primary",children:"下载哨头面单"}),(0,jsx_runtime.jsxs)(ButtonGroup,{children:[(0,jsx_runtime.jsx)(es_button.Ay,{onClick:onEdit,children:"稍后录入"}),(0,jsx_runtime.jsx)(es_button.Ay,{type:"primary",onClick:onNext,children:"立即录入"})]})]})]})};var input=__webpack_require__("./node_modules/antd/es/input/index.js"),es_select=__webpack_require__("./node_modules/antd/es/select/index.js");const{TextArea}=input.A,CargoInput_StyledLayout=(0,styled_components_browser_esm.Ay)(layout.A)`
  background: ${theme.Tj.background.default};
  min-height: 100vh;
  width: 100%;
`,CargoInput_ContentContainer=styled_components_browser_esm.Ay.div`
  margin-top: 76px;
  padding: ${theme.YK.md};
  padding-bottom: 120px;
`,Breadcrumb=styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
  gap: ${theme.YK.xs};
  margin-bottom: ${theme.YK.lg};
  font-size: 14px;
  color: ${theme.Tj.text.secondary};

  .current {
    color: ${theme.Tj.text.primary};
  }
`,FormGroup=styled_components_browser_esm.Ay.div`
  margin-bottom: ${theme.YK.lg};

  .label {
    display: flex;
    align-items: center;
    margin-bottom: ${theme.YK.xs};
    
    .required {
      color: ${theme.Tj.status.error};
      margin-right: 4px;
    }

    .translate {
      margin-left: auto;
      color: ${theme.Tj.primary};
      font-size: 12px;
    }
  }

  .hint {
    font-size: 12px;
    color: ${theme.Tj.text.secondary};
    margin-top: ${theme.YK.xs};
  }
`,StyledInput=(0,styled_components_browser_esm.Ay)(input.A)`
  height: 44px;
  border-radius: ${theme.Vq.medium};
`,StyledSelect=(0,styled_components_browser_esm.Ay)(es_select.A)`
  width: 100%;
  
  .ant-select-selector {
    height: 44px !important;
    padding: 6px 12px !important;
    border-radius: ${theme.Vq.medium} !important;
  }
`,CurrencyInput=styled_components_browser_esm.Ay.div`
  display: flex;
  gap: ${theme.YK.sm};

  .currency-select {
    width: 80px;
  }

  .value-input {
    flex: 1;
  }
`,BottomButtons=styled_components_browser_esm.Ay.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: ${theme.YK.md};
  background: white;
  display: flex;
  gap: ${theme.YK.md};
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.06);

  .ant-btn {
    flex: 1;
    height: 44px;
    border-radius: ${theme.Vq.medium};
  }
`,pages_CargoInput=_ref=>{let{bookingNumber="AU4383",onCancel,onSave}=_ref;return(0,jsx_runtime.jsxs)(CargoInput_StyledLayout,{children:[(0,jsx_runtime.jsx)(GlobalHeader.A,{}),(0,jsx_runtime.jsxs)(CargoInput_ContentContainer,{children:[(0,jsx_runtime.jsxs)(Breadcrumb,{children:[(0,jsx_runtime.jsx)("span",{children:"首页"}),(0,jsx_runtime.jsx)("span",{children:">"}),(0,jsx_runtime.jsxs)("span",{children:["哨头号 ",bookingNumber]}),(0,jsx_runtime.jsx)("span",{children:">"}),(0,jsx_runtime.jsx)("span",{className:"current",children:"录入商品信息"})]}),(0,jsx_runtime.jsxs)(FormGroup,{children:[(0,jsx_runtime.jsxs)("div",{className:"label",children:[(0,jsx_runtime.jsx)("span",{className:"required",children:"*"}),(0,jsx_runtime.jsx)("span",{children:"中文品名"}),(0,jsx_runtime.jsx)("span",{className:"translate",children:"英译中"})]}),(0,jsx_runtime.jsx)(StyledInput,{placeholder:"中文品名"})]}),(0,jsx_runtime.jsxs)(FormGroup,{children:[(0,jsx_runtime.jsxs)("div",{className:"label",children:[(0,jsx_runtime.jsx)("span",{className:"required",children:"*"}),(0,jsx_runtime.jsx)("span",{children:"英文品名"}),(0,jsx_runtime.jsx)("span",{className:"translate",children:"中译英"})]}),(0,jsx_runtime.jsx)(StyledInput,{placeholder:"英文品名"}),(0,jsx_runtime.jsx)("div",{className:"hint",children:"中英文译转仅一次建议，仅供参考，最终翻译人工审核。"})]}),(0,jsx_runtime.jsxs)(FormGroup,{children:[(0,jsx_runtime.jsxs)("div",{className:"label",children:[(0,jsx_runtime.jsx)("span",{className:"required",children:"*"}),(0,jsx_runtime.jsx)("span",{children:"商品材质"})]}),(0,jsx_runtime.jsx)(StyledSelect,{placeholder:"商品材质"})]}),(0,jsx_runtime.jsxs)(FormGroup,{children:[(0,jsx_runtime.jsxs)("div",{className:"label",children:[(0,jsx_runtime.jsx)("span",{className:"required",children:"*"}),(0,jsx_runtime.jsx)("span",{children:"商品套数"})]}),(0,jsx_runtime.jsx)(StyledInput,{placeholder:"商品套数"})]}),(0,jsx_runtime.jsxs)(FormGroup,{children:[(0,jsx_runtime.jsxs)("div",{className:"label",children:[(0,jsx_runtime.jsx)("span",{className:"required",children:"*"}),(0,jsx_runtime.jsx)("span",{children:"箱数"})]}),(0,jsx_runtime.jsx)(StyledInput,{placeholder:"箱数"})]}),(0,jsx_runtime.jsxs)(FormGroup,{children:[(0,jsx_runtime.jsxs)("div",{className:"label",children:[(0,jsx_runtime.jsx)("span",{className:"required",children:"*"}),(0,jsx_runtime.jsx)("span",{children:"重量(kg)"})]}),(0,jsx_runtime.jsx)(StyledInput,{placeholder:"重量"})]}),(0,jsx_runtime.jsxs)(FormGroup,{children:[(0,jsx_runtime.jsxs)("div",{className:"label",children:[(0,jsx_runtime.jsx)("span",{className:"required",children:"*"}),(0,jsx_runtime.jsx)("span",{children:"体积(cbm)"})]}),(0,jsx_runtime.jsx)(StyledSelect,{placeholder:"体积"})]}),(0,jsx_runtime.jsxs)(FormGroup,{children:[(0,jsx_runtime.jsxs)("div",{className:"label",children:[(0,jsx_runtime.jsx)("span",{className:"required",children:"*"}),(0,jsx_runtime.jsx)("span",{children:"单价"})]}),(0,jsx_runtime.jsxs)(CurrencyInput,{children:[(0,jsx_runtime.jsx)(es_select.A,{defaultValue:"AUD",className:"currency-select"}),(0,jsx_runtime.jsx)(StyledInput,{placeholder:"单价",className:"value-input"})]})]}),(0,jsx_runtime.jsxs)(FormGroup,{children:[(0,jsx_runtime.jsxs)("div",{className:"label",children:[(0,jsx_runtime.jsx)("span",{className:"required",children:"*"}),(0,jsx_runtime.jsx)("span",{children:"货值"})]}),(0,jsx_runtime.jsxs)(CurrencyInput,{children:[(0,jsx_runtime.jsx)(es_select.A,{defaultValue:"AUD",className:"currency-select"}),(0,jsx_runtime.jsx)(StyledInput,{placeholder:"货值",className:"value-input"})]})]}),(0,jsx_runtime.jsxs)(FormGroup,{children:[(0,jsx_runtime.jsx)("div",{className:"label",children:(0,jsx_runtime.jsx)("span",{children:"备注"})}),(0,jsx_runtime.jsx)(TextArea,{rows:4,placeholder:"备注"})]}),(0,jsx_runtime.jsxs)(BottomButtons,{children:[(0,jsx_runtime.jsx)(es_button.Ay,{onClick:onCancel,children:"取消"}),(0,jsx_runtime.jsx)(es_button.Ay,{type:"primary",onClick:onSave,children:"保存"})]})]})]})};var es_checkbox=__webpack_require__("./node_modules/antd/es/checkbox/index.js"),SearchOutlined=__webpack_require__("./node_modules/@ant-design/icons/es/icons/SearchOutlined.js");const{Search}=input.A,SpecialHandling_StyledLayout=(0,styled_components_browser_esm.Ay)(layout.A)`
  background: ${theme.Tj.background.default};
  min-height: 100vh;
  width: 100%;
`,SpecialHandling_ContentContainer=styled_components_browser_esm.Ay.div`
  margin-top: 76px;
  padding: ${theme.YK.md};
  padding-bottom: 120px;
`,SpecialHandling_Breadcrumb=styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
  gap: ${theme.YK.xs};
  margin-bottom: ${theme.YK.lg};
  font-size: 14px;
  color: ${theme.Tj.text.secondary};

  .current {
    color: ${theme.Tj.text.primary};
  }
`,SearchContainer=styled_components_browser_esm.Ay.div`
  margin-bottom: ${theme.YK.md};

  .ant-input-affix-wrapper {
    background: #F5F5F5;
    border: none;
    border-radius: ${theme.Vq.medium};
    padding: ${theme.YK.sm} ${theme.YK.md};

    &:hover, &:focus, &-focused {
      background: #F5F5F5;
    }

    .anticon {
      color: ${theme.Tj.text.secondary};
      margin-right: ${theme.YK.sm};
    }

    input.ant-input {
      background: transparent;
      font-size: 14px;

      &::placeholder {
        color: ${theme.Tj.text.secondary};
      }
    }
  }
`,FilterTags=styled_components_browser_esm.Ay.div`
  display: flex;
  gap: ${theme.YK.xs};
  margin-bottom: ${theme.YK.md};
  overflow-x: auto;
  padding-bottom: ${theme.YK.xs};
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
`,FilterTag=(0,styled_components_browser_esm.Ay)(es_button.Ay)`
  flex-shrink: 0;
  border-radius: 16px;
  height: 32px;
  padding: 0 ${theme.YK.md};
  background: ${props=>props.$active?theme.Tj.primary:"white"};
  color: ${props=>props.$active?"white":theme.Tj.text.secondary};
  border: 1px solid ${props=>props.$active?theme.Tj.primary:theme.Tj.border.light};

  &:hover {
    color: ${props=>props.$active?"white":theme.Tj.primary} !important;
    border-color: ${theme.Tj.primary} !important;
  }
`,ListContainer=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.YK.sm};
`,ListItem=styled_components_browser_esm.Ay.div`
  background: ${props=>props.$selected?"white":"#F5F5F5"};
  border-radius: ${theme.Vq.medium};
  padding: ${theme.YK.md};
  display: flex;
  flex-direction: column;
  gap: ${theme.YK.sm};
  border: 1px solid ${props=>props.$selected?theme.Tj.primary:"transparent"};
  transition: all 0.2s ease;
`,ItemHeader=styled_components_browser_esm.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,ItemInfo=styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
  gap: ${theme.YK.sm};

  .booking-number {
    font-size: 14px;
    color: ${props=>props.$selected?theme.Tj.primary:theme.Tj.text.primary};
  }
`,ItemFooter=styled_components_browser_esm.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .description {
    font-size: 14px;
    color: ${theme.Tj.text.secondary};
  }
`,ViewDetailsButton=styled_components_browser_esm.Ay.button`
  background: none;
  border: none;
  font-size: 14px;
  color: ${theme.Tj.text.secondary};
  padding: ${theme.YK.xs} ${theme.YK.sm};
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: ${theme.Vq.small};

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`,StatusBadge=styled_components_browser_esm.Ay.div`
  padding: 4px 8px;
  border-radius: ${theme.Vq.small};
  font-size: 12px;
  background: ${props=>{switch(props.$status){case"success":default:return"#E6F7FF";case"warning":return"#FFF7E6";case"error":return"#FFF1F0"}}};
  color: ${props=>{switch(props.$status){case"success":default:return"#1890FF";case"warning":return"#FA8C16";case"error":return"#F5222D"}}};
`,BottomBar=styled_components_browser_esm.Ay.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: ${theme.YK.md};
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  gap: ${theme.YK.md};
  border-top: 1px solid ${theme.Tj.border.light};

  .select-all {
    flex: 1;
    display: flex;
    align-items: center;
    gap: ${theme.YK.xs};
  }

  .total {
    flex: 1;
    font-size: 14px;
    color: ${theme.Tj.text.secondary};
  }

  .ant-btn {
    height: 44px;
    border-radius: ${theme.Vq.medium};
    padding: 0 ${theme.YK.xl};
  }
`,pages_SpecialHandling=_ref=>{let{onBack}=_ref;const[selectedFilter,setSelectedFilter]=(0,react.useState)("待处理"),[selectAll,setSelectAll]=(0,react.useState)(!1),[selectedItems,setSelectedItems]=(0,react.useState)([]),mockData=[{bookingNumber:"AU4363",description:"普货 | 40尺标准柜 | 深圳仓 A12-B05",status:"success",statusText:"信息完全"},{bookingNumber:"AU4363",description:"危险品 | 20尺高柜 | 等待危险品证书",status:"warning",statusText:"信息缺失"}],handleSelectItem=index=>{setSelectedItems((prev=>{const newSelected=prev.includes(index)?prev.filter((i=>i!==index)):[...prev,index];return setSelectAll(newSelected.length===mockData.length),newSelected}))};return(0,jsx_runtime.jsxs)(SpecialHandling_StyledLayout,{children:[(0,jsx_runtime.jsx)(GlobalHeader.A,{}),(0,jsx_runtime.jsxs)(SpecialHandling_ContentContainer,{children:[(0,jsx_runtime.jsxs)(SpecialHandling_Breadcrumb,{children:[(0,jsx_runtime.jsx)("span",{children:"首页"}),(0,jsx_runtime.jsx)("span",{children:">"}),(0,jsx_runtime.jsx)("span",{className:"current",children:"特处理"})]}),(0,jsx_runtime.jsx)(SearchContainer,{children:(0,jsx_runtime.jsx)(input.A,{placeholder:"集运单查询",prefix:(0,jsx_runtime.jsx)(SearchOutlined.A,{style:{fontSize:16}}),allowClear:!0})}),(0,jsx_runtime.jsx)(FilterTags,{children:["待处理","打印中","待支付","待发货","运输中","待提取"].map((filter=>(0,jsx_runtime.jsx)(FilterTag,{$active:selectedFilter===filter,onClick:()=>setSelectedFilter(filter),children:filter},filter)))}),(0,jsx_runtime.jsx)(ListContainer,{children:mockData.map(((item,index)=>(0,jsx_runtime.jsxs)(ListItem,{$selected:selectedItems.includes(index),onClick:()=>handleSelectItem(index),children:[(0,jsx_runtime.jsxs)(ItemHeader,{children:[(0,jsx_runtime.jsxs)(ItemInfo,{$selected:selectedItems.includes(index),children:[(0,jsx_runtime.jsx)(es_checkbox.A,{checked:selectedItems.includes(index),onChange:e=>{e.stopPropagation(),handleSelectItem(index)}}),(0,jsx_runtime.jsxs)("div",{className:"booking-number",children:["哨头号：",item.bookingNumber]})]}),(0,jsx_runtime.jsx)(StatusBadge,{$status:item.status,children:item.statusText})]}),(0,jsx_runtime.jsxs)(ItemFooter,{children:[(0,jsx_runtime.jsx)("div",{className:"description",children:item.description}),(0,jsx_runtime.jsx)(ViewDetailsButton,{onClick:e=>e.stopPropagation(),children:"查看详情"})]})]},index)))}),(0,jsx_runtime.jsxs)(BottomBar,{children:[(0,jsx_runtime.jsxs)("div",{className:"select-all",children:[(0,jsx_runtime.jsx)(es_checkbox.A,{checked:selectAll,onChange:e=>{return checked=e.target.checked,setSelectAll(checked),void setSelectedItems(checked?mockData.map(((_,index)=>index)):[]);var checked}}),(0,jsx_runtime.jsx)("span",{children:"全选"})]}),(0,jsx_runtime.jsxs)("div",{className:"total",children:["已选 ",selectedItems.length]}),(0,jsx_runtime.jsx)(es_button.Ay,{type:"primary",children:"结算"})]})]})]})};var collapse=__webpack_require__("./node_modules/antd/es/collapse/index.js"),modal=__webpack_require__("./node_modules/antd/es/modal/index.js"),descriptions=__webpack_require__("./node_modules/antd/es/descriptions/index.js"),card=__webpack_require__("./node_modules/antd/es/card/index.js"),es_form=__webpack_require__("./node_modules/antd/es/form/index.js"),message=__webpack_require__("./node_modules/antd/es/message/index.js"),space=__webpack_require__("./node_modules/antd/es/space/index.js"),es_radio=__webpack_require__("./node_modules/antd/es/radio/index.js"),date_picker=__webpack_require__("./node_modules/antd/es/date-picker/index.js"),flex=__webpack_require__("./node_modules/antd/es/flex/index.js"),divider=__webpack_require__("./node_modules/antd/es/divider/index.js"),list=__webpack_require__("./node_modules/antd/es/list/index.js"),row=__webpack_require__("./node_modules/antd/es/row/index.js"),col=__webpack_require__("./node_modules/antd/es/col/index.js"),statistic=__webpack_require__("./node_modules/antd/es/statistic/index.js"),timeline=__webpack_require__("./node_modules/antd/es/timeline/index.js"),badge=__webpack_require__("./node_modules/antd/es/badge/index.js"),es_alert=__webpack_require__("./node_modules/antd/es/alert/index.js"),EditOutlined=__webpack_require__("./node_modules/@ant-design/icons/es/icons/EditOutlined.js"),FileTextOutlined=__webpack_require__("./node_modules/@ant-design/icons/es/icons/FileTextOutlined.js"),WarningOutlined=__webpack_require__("./node_modules/@ant-design/icons/es/icons/WarningOutlined.js"),DownOutlined=__webpack_require__("./node_modules/@ant-design/icons/es/icons/DownOutlined.js"),InboxOutlined=__webpack_require__("./node_modules/@ant-design/icons/es/icons/InboxOutlined.js"),DownloadOutlined=__webpack_require__("./node_modules/@ant-design/icons/es/icons/DownloadOutlined.js"),PrinterOutlined=__webpack_require__("./node_modules/@ant-design/icons/es/icons/PrinterOutlined.js"),JsBarcode=__webpack_require__("./node_modules/jsbarcode/bin/JsBarcode.js"),JsBarcode_default=__webpack_require__.n(JsBarcode),browser=__webpack_require__("./node_modules/qrcode/lib/browser.js"),html2canvas=__webpack_require__("./node_modules/html2canvas/dist/html2canvas.js"),html2canvas_default=__webpack_require__.n(html2canvas),upload=__webpack_require__("./node_modules/antd/es/upload/index.js"),UploadOutlined=__webpack_require__("./node_modules/@ant-design/icons/es/icons/UploadOutlined.js"),CameraOutlined=__webpack_require__("./node_modules/@ant-design/icons/es/icons/CameraOutlined.js");const PreviewContainer=styled_components_browser_esm.Ay.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 300px;
  border-radius: ${theme.Vq.medium};
  overflow: hidden;
  background: #000;
`,Video=styled_components_browser_esm.Ay.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,atoms_CameraPreview=_ref=>{let{stream,zoom}=_ref;const videoRef=(0,react.useRef)(null);return(0,react.useEffect)((()=>{videoRef.current&&stream&&(videoRef.current.srcObject=stream)}),[stream]),(0,react.useEffect)((()=>{if(videoRef.current&&stream){const track=stream.getVideoTracks()[0];"zoom"in track.getCapabilities()&&track.applyConstraints({advanced:[{zoom}]})}}),[zoom,stream]),(0,jsx_runtime.jsx)(PreviewContainer,{children:(0,jsx_runtime.jsx)(Video,{ref:videoRef,autoPlay:!0,playsInline:!0,muted:!0})})};var slider=__webpack_require__("./node_modules/antd/es/slider/index.js"),ZoomOutOutlined=__webpack_require__("./node_modules/@ant-design/icons/es/icons/ZoomOutOutlined.js"),ZoomInOutlined=__webpack_require__("./node_modules/@ant-design/icons/es/icons/ZoomInOutlined.js");const StyledButton=(0,styled_components_browser_esm.Ay)(es_button.Ay)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${theme.Tj.background.light};
  border: none;
  padding: 0;
  
  &:hover {
    background: ${theme.Tj.background.hover};
  }

  .anticon {
    font-size: 20px;
    color: ${theme.Tj.text.primary};
  }
`,atoms_IconButton=_ref=>{let{icon,onClick,title}=_ref;return(0,jsx_runtime.jsx)(StyledButton,{type:"text",icon,onClick,title})},ControlsWrapper=styled_components_browser_esm.Ay.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.YK.lg};
  padding-bottom: ${theme.YK.xl};
`,ControlsContainer=styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
  gap: ${theme.YK.md};
  padding: ${theme.YK.sm} ${theme.YK.md};
  background: rgba(0, 0, 0, 0.6);
  border-radius: 100px;
  backdrop-filter: blur(8px);
  min-width: 240px;
`,ZoomButton=(0,styled_components_browser_esm.Ay)(atoms_IconButton)`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: white;
  color: ${theme.Tj.text.primary};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${theme.Tj.background.light};
  }

  .anticon {
    font-size: 20px;
  }
`,ZoomSlider=(0,styled_components_browser_esm.Ay)(slider.A)`
  flex: 1;
  margin: 0 ${theme.YK.xs};

  .ant-slider-rail {
    background-color: rgba(255, 255, 255, 0.3);
    height: 2px;
  }

  .ant-slider-track {
    background-color: white;
    height: 2px;
  }

  .ant-slider-handle {
    width: 12px;
    height: 12px;
    border-color: white;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-top: -5px;

    &:hover, &:active {
      border-color: white;
    }
  }
`,CaptureButton=styled_components_browser_esm.Ay.button`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: ${theme.Tj.primary};
  border: 4px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  .anticon {
    color: white;
    font-size: 32px;
  }
`,molecules_CameraControls=_ref=>{let{onZoomChange,onCapture,minZoom=1,maxZoom=5,currentZoom=1}=_ref;return(0,jsx_runtime.jsxs)(ControlsWrapper,{children:[(0,jsx_runtime.jsxs)(ControlsContainer,{children:[(0,jsx_runtime.jsx)(ZoomButton,{icon:(0,jsx_runtime.jsx)(ZoomOutOutlined.A,{}),onClick:()=>onZoomChange(Math.max(minZoom,currentZoom-.5))}),(0,jsx_runtime.jsx)(ZoomSlider,{min:minZoom,max:maxZoom,step:.1,value:currentZoom,onChange:onZoomChange}),(0,jsx_runtime.jsx)(ZoomButton,{icon:(0,jsx_runtime.jsx)(ZoomInOutlined.A,{}),onClick:()=>onZoomChange(Math.min(maxZoom,currentZoom+.5))})]}),(0,jsx_runtime.jsx)(CaptureButton,{onClick:onCapture,children:(0,jsx_runtime.jsx)(CameraOutlined.A,{})})]})},{Dragger}=upload.A,Container=styled_components_browser_esm.Ay.div`
  position: relative;
  width: 100%;
  min-height: 300px;
  border-radius: ${theme.Vq.medium};
  overflow: hidden;
`,StyledDropzone=(0,styled_components_browser_esm.Ay)(Dragger)`
  &.ant-upload-wrapper {
    .ant-upload {
      background: ${theme.Tj.background.light};
      border: 2px dashed ${theme.Tj.border.light};
      border-radius: ${theme.Vq.medium};
      padding: ${theme.YK.xl};
      
      &:hover {
        border-color: #1890ff;
      }
    }
  }

  .upload-hint {
    margin-top: ${theme.YK.md};
    color: ${theme.Tj.text.secondary};
    font-size: 14px;
  }
`,CameraContainer=styled_components_browser_esm.Ay.div`
  position: relative;
  width: 100%;
  height: 300px;
`,organisms_CameraDropzone=_ref=>{let{onFileSelect,onCapture,accept="image/*",maxSize=10485760}=_ref;const[stream,setStream]=(0,react.useState)(null),[zoom,setZoom]=(0,react.useState)(1),[minZoom,setMinZoom]=(0,react.useState)(1),[maxZoom,setMaxZoom]=(0,react.useState)(1),[isCameraActive,setIsCameraActive]=(0,react.useState)(!1),canvasRef=(0,react.useRef)(null),startCamera=(0,react.useCallback)((async()=>{try{const mediaStream=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:1920},height:{ideal:1080}}});setStream(mediaStream),setIsCameraActive(!0);const capabilities=mediaStream.getVideoTracks()[0].getCapabilities();var _capabilities$zoom,_capabilities$zoom2;if("zoom"in capabilities)setMinZoom((null===(_capabilities$zoom=capabilities.zoom)||void 0===_capabilities$zoom?void 0:_capabilities$zoom.min)||1),setMaxZoom((null===(_capabilities$zoom2=capabilities.zoom)||void 0===_capabilities$zoom2?void 0:_capabilities$zoom2.max)||1)}catch(error){message.Ay.error("无法访问相机，请检查权限设置")}}),[]),stopCamera=(0,react.useCallback)((()=>{stream&&(stream.getTracks().forEach((track=>track.stop())),setStream(null),setIsCameraActive(!1))}),[stream]),handleCapture=(0,react.useCallback)((()=>{if(!stream)return;const video=document.querySelector("video"),canvas=canvasRef.current;if(video&&canvas){const context=canvas.getContext("2d");canvas.width=video.videoWidth,canvas.height=video.videoHeight,context&&(context.drawImage(video,0,0),canvas.toBlob((blob=>{blob&&(onCapture(blob),stopCamera())}),"image/jpeg",.95))}}),[stream,onCapture,stopCamera]),handleZoomChange=(0,react.useCallback)((value=>{setZoom(value)}),[]),uploadProps={accept,maxSize,multiple:!1,showUploadList:!1,beforeUpload:file=>file.size>maxSize?(message.Ay.error("文件大小不能超过10MB"),!1):(onFileSelect(file),!1)};return(0,jsx_runtime.jsx)(Container,{children:isCameraActive?(0,jsx_runtime.jsxs)(CameraContainer,{children:[(0,jsx_runtime.jsx)(atoms_CameraPreview,{stream,zoom}),(0,jsx_runtime.jsx)(molecules_CameraControls,{zoom,minZoom,maxZoom,onZoomChange:handleZoomChange,onCapture:handleCapture}),(0,jsx_runtime.jsx)("canvas",{ref:canvasRef,style:{display:"none"}})]}):(0,jsx_runtime.jsxs)(StyledDropzone,{...uploadProps,children:[(0,jsx_runtime.jsx)("p",{className:"ant-upload-drag-icon",children:(0,jsx_runtime.jsx)(UploadOutlined.A,{})}),(0,jsx_runtime.jsx)("p",{className:"ant-upload-text",children:"点击或拖拽文件到此处上传"}),(0,jsx_runtime.jsx)("p",{className:"upload-hint",children:"支持jpg、png、pdf格式，单个文件不超过10MB"}),(0,jsx_runtime.jsx)("div",{style:{marginTop:theme.YK.md},children:(0,jsx_runtime.jsxs)("span",{onClick:e=>{e.stopPropagation(),startCamera()},style:{cursor:"pointer",color:"#1890ff",display:"flex",alignItems:"center",justifyContent:"center",gap:theme.YK.xs},children:[(0,jsx_runtime.jsx)(CameraOutlined.A,{}),"使用相机拍照"]})})]})})},FileUploadItem_Container=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.YK.xs};
`,FileLink=styled_components_browser_esm.Ay.a`
  color: #1890ff;
  font-size: 14px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 4px;

  &:hover {
    text-decoration: underline;
  }

  .anticon {
    font-size: 14px;
  }
`,Label=styled_components_browser_esm.Ay.span`
  color: ${theme.Tj.text.secondary};
  font-size: 14px;
`,molecules_FileUploadItem=_ref=>{let{label,onFileSelect}=_ref;const[isModalVisible,setIsModalVisible]=(0,react.useState)(!1);return(0,jsx_runtime.jsxs)(FileUploadItem_Container,{children:[(0,jsx_runtime.jsx)(Label,{children:label}),(0,jsx_runtime.jsxs)(FileLink,{onClick:()=>setIsModalVisible(!0),children:[(0,jsx_runtime.jsx)(FileTextOutlined.A,{}),"点击上传"]}),(0,jsx_runtime.jsx)(modal.A,{title:`上传${label}`,open:isModalVisible,onCancel:()=>setIsModalVisible(!1),footer:null,width:600,centered:!0,children:(0,jsx_runtime.jsx)(organisms_CameraDropzone,{onFileSelect:file=>{onFileSelect(file),setIsModalVisible(!1)},onCapture:blob=>{onFileSelect(blob),setIsModalVisible(!1)},accept:"image/*,.pdf",maxSize:10485760})})]})};var dayjs_min=__webpack_require__("./node_modules/dayjs/dayjs.min.js"),dayjs_min_default=__webpack_require__.n(dayjs_min);const{Title:BookingDetails_Title,Text:BookingDetails_Text,Paragraph}=typography.A,{Option}=es_select.A,{Panel}=collapse.A,BookingDetails_StyledLayout=(0,styled_components_browser_esm.Ay)(layout.A)`
  background: ${theme.Tj.background.default};
  min-height: 100vh;
  width: 100%;
`,BookingDetails_ContentContainer=styled_components_browser_esm.Ay.div`
  margin-top: 76px;
  padding: ${theme.YK.sm};
  padding-bottom: 120px;
`,BookingDetails_Breadcrumb=styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
  gap: ${theme.YK.xs};
  margin-bottom: ${theme.YK.lg};
  font-size: 14px;
  color: ${theme.Tj.text.secondary};

  .current {
    color: ${theme.Tj.text.primary};
  }
`,Section=styled_components_browser_esm.Ay.div`
  background: white;
  border-radius: ${theme.Vq.medium};
  margin-bottom: ${theme.YK.md};
`,StyledDivider=(styled_components_browser_esm.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.YK.md};
  border-bottom: 1px solid ${theme.Tj.border.light};

  .title {
    font-size: 16px;
    font-weight: 500;
    color: ${theme.Tj.text.primary};
  }

  .action {
    color: ${theme.Tj.text.secondary};
    font-size: 14px;
  }
`,styled_components_browser_esm.Ay.div`
  padding: ${theme.YK.md};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.YK.md};
`,styled_components_browser_esm.Ay.div`
  .label {
    font-size: 14px;
    color: ${theme.Tj.text.secondary};
    margin-bottom: 4px;
  }

  .value {
    font-size: 14px;
    color: ${theme.Tj.text.primary};
  }
`,styled_components_browser_esm.Ay.div`
  height: 1px;
  background: ${theme.Tj.border.light};
  margin: 0 ${theme.YK.md};
`),OverviewCard=(styled_components_browser_esm.Ay.div`
  padding: ${theme.YK.md};

  .hint {
    font-size: 12px;
    color: #ff4d4f;
    margin-bottom: ${theme.YK.sm};
  }
`,styled_components_browser_esm.Ay.div`
  display: flex;
  gap: ${theme.YK.sm};
`,styled_components_browser_esm.Ay.a`
  color: #1890ff;
  font-size: 14px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`,(0,styled_components_browser_esm.Ay)(Section)`
  background: #F5F5F5;
  margin-bottom: ${theme.YK.md};
  
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${theme.YK.md} ${theme.YK.lg};
    cursor: pointer;
    background: white;
    border-radius: ${theme.Vq.medium};

    .left-content {
      display: flex;
      align-items: center;
      gap: ${theme.YK.md};

      .chevron {
        color: ${theme.Tj.text.secondary};
        transition: transform 0.3s ease;
        
        &.expanded {
          transform: rotate(180deg);
        }
      }
    }

    .title {
      font-size: 16px;
      font-weight: 500;
      color: ${theme.Tj.text.primary};
    }

    .subtitle {
      font-size: 12px;
      color: ${theme.Tj.text.secondary};
      margin-left: ${theme.YK.xs};
    }
  }
`,styled_components_browser_esm.Ay.div`
  padding: ${theme.YK.lg};
  font-size: 14px;
  background: #F5F5F5;
  margin-top: ${theme.YK.xs};
  border-radius: ${theme.Vq.medium};
`,styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.YK.md};
  position: relative;
  width: 100%;
  max-width: 500px;

  .form-label {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 14px;
    
    .required {
      color: #ff4d4f;
    }
  }

  .ant-form-item {
    margin-bottom: ${theme.YK.md};
  }

  .ant-input, .ant-select-selector, .ant-picker {
    height: 40px;
    border-radius: 2px;
    
    &::placeholder {
      color: #bfbfbf;
    }
  }

  .ant-select-selector {
    padding: 4px 11px;
    
    .ant-select-selection-placeholder {
      line-height: 30px;
    }
  }

  .ant-radio-group {
    display: flex;
    gap: ${theme.YK.lg};
  }

  .phone-group {
    display: flex;
    gap: ${theme.YK.sm};

    .country-code {
      width: 120px;
    }

    .phone-input {
      flex: 1;
    }
  }

  .upload-section {
    border: 1px dashed ${theme.Tj.border.default};
    border-radius: 2px;
    padding: ${theme.YK.lg};
    text-align: center;
    background: #fafafa;
    cursor: pointer;

    .upload-icon {
      color: #1890ff;
      font-size: 24px;
      margin-bottom: ${theme.YK.xs};
    }

    .upload-text {
      color: ${theme.Tj.text.secondary};
      font-size: 14px;
      margin-bottom: 4px;
    }

    .upload-hint {
      color: ${theme.Tj.text.secondary};
      font-size: 12px;
    }
  }
`,styled_components_browser_esm.Ay.div`
  .container-header {
    background: white;
    border-radius: ${theme.Vq.medium};
    padding: ${theme.YK.lg};
    margin-bottom: ${theme.YK.md};
    position: relative;

    .info-group {
      margin-bottom: ${theme.YK.md};

      &:last-child {
        margin-bottom: 0;
      }

      .label {
        color: ${theme.Tj.text.secondary};
        margin-bottom: 4px;
        font-size: 14px;
      }

      .value {
        color: ${theme.Tj.text.primary};
        font-size: 14px;
      }
    }
  }

  .label {
    color: ${theme.Tj.text.primary};
    font-size: 14px;
    margin: ${theme.YK.md} 0;
  }

  .product-list {
    display: flex;
    flex-direction: column;
    gap: ${theme.YK.md};
  }

  .product-item {
    background: white;
    padding: ${theme.YK.lg};
    border-radius: ${theme.Vq.medium};
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.YK.md} ${theme.YK.xl};

    .item-detail {
      font-size: 14px;
      
      .label {
        color: ${theme.Tj.text.secondary};
        margin-bottom: 4px;
        margin: 0 0 4px 0;
      }
      
      .value {
        color: ${theme.Tj.text.primary};
      }
    }
  }
`,(0,styled_components_browser_esm.Ay)(es_button.Ay)`
  padding: 4px 8px;
  height: auto;
  color: ${theme.Tj.text.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  position: relative;
  z-index: 1;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
    color: ${theme.Tj.text.secondary};
  }

  .anticon {
    font-size: 16px;
  }
`,styled_components_browser_esm.Ay.div`
  background: #F5F5F5;
  border-radius: ${theme.Vq.medium};
  padding: ${theme.YK.md};

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${theme.YK.md};
    padding-bottom: ${theme.YK.sm};
    border-bottom: 1px solid ${theme.Tj.border.light};

    .title {
      font-size: 16px;
      font-weight: 500;
      color: ${theme.Tj.text.primary};
    }
  }

  .content {
    background: white;
    border-radius: ${theme.Vq.small};
    padding: ${theme.YK.lg};

    .info-row {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: ${theme.YK.lg};
      margin-bottom: ${theme.YK.md};

      &:last-child {
        margin-bottom: 0;
      }

      .info-item {
        display: flex;
        flex-direction: column;
        gap: ${theme.YK.xs};
        
        .label {
          color: ${theme.Tj.text.secondary};
          font-size: 14px;
        }

        .value {
          color: ${theme.Tj.text.primary};
          font-size: 14px;
          word-break: break-word;

          &.highlight {
            color: #1890ff;
            font-weight: 500;
          }

          &.warning {
            color: #ff4d4f;
          }

          &.success {
            color: #52c41a;
          }

          .status-tag {
            display: inline-flex;
            align-items: center;
            padding: 2px 8px;
            border-radius: 4px;
            font-size: 12px;
            line-height: 1.5;
            margin-left: ${theme.YK.sm};
            background: #fff7e6;
            color: #fa8c16;
            border: 1px solid #ffd591;
          }
        }
      }
    }
  }

  .footer {
    padding: ${theme.YK.lg};
    background: white;
    display: flex;
    flex-direction: column;
    gap: ${theme.YK.md};
  }

  .footer-title {
    display: flex;
    align-items: center;
    gap: ${theme.YK.sm};
    font-size: 14px;
    color: ${theme.Tj.text.warning};

    .anticon {
      color: ${theme.Tj.status.warning};
    }
  }

  .file-links {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${theme.YK.md};
  }
`),Footer=styled_components_browser_esm.Ay.div`
  padding: ${theme.YK.lg};
  background: white;
  display: flex;
  flex-direction: column;
  gap: ${theme.YK.md};
`,FooterTitle=styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
  gap: ${theme.YK.sm};
  font-size: 14px;
  color: ${theme.Tj.text.warning};

  .anticon {
    color: ${theme.Tj.status.warning};
  }
`,FileLinks=styled_components_browser_esm.Ay.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.YK.md};
`,StyledCollapse=(styled_components_browser_esm.Ay.div`
  .status-section {
    background: white;
    border-radius: ${theme.Vq.medium};
    padding: ${theme.YK.lg};
    margin-bottom: ${theme.YK.md};

    .section-title {
      font-size: 14px;
      font-weight: 500;
      color: ${theme.Tj.text.primary};
      margin-bottom: ${theme.YK.md};
    }

    .status-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: ${theme.YK.md};

      .status-item {
        display: flex;
        flex-direction: column;
        gap: ${theme.YK.xs};

        .label {
          color: ${theme.Tj.text.secondary};
          font-size: 14px;
        }

        .value {
          color: ${theme.Tj.text.primary};
          font-size: 14px;

          &.success {
            color: #52c41a;
          }

          &.warning {
            color: #fa8c16;
          }

          &.error {
            color: #ff4d4f;
          }
        }
      }
    }
  }

  .timeline {
    background: white;
    border-radius: ${theme.Vq.medium};
    padding: ${theme.YK.lg};

    .timeline-title {
      font-size: 14px;
      font-weight: 500;
      color: ${theme.Tj.text.primary};
      margin-bottom: ${theme.YK.md};
    }

    .timeline-item {
      display: flex;
      gap: ${theme.YK.md};
      padding-bottom: ${theme.YK.md};
      position: relative;

      &:not(:last-child):before {
        content: '';
        position: absolute;
        left: 6px;
        top: 24px;
        bottom: 0;
        width: 1px;
        background: ${theme.Tj.border.light};
      }

      .dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: #1890ff;
        margin-top: 6px;
        flex-shrink: 0;

        &.success {
          background: #52c41a;
        }

        &.warning {
          background: #fa8c16;
        }

        &.error {
          background: #ff4d4f;
        }
      }

      .content {
        flex: 1;

        .time {
          font-size: 12px;
          color: ${theme.Tj.text.secondary};
          margin-bottom: 4px;
        }

        .text {
          font-size: 14px;
          color: ${theme.Tj.text.primary};
        }
      }
    }
  }
`,styled_components_browser_esm.Ay.div`
  .tax-section {
    background: white;
    border-radius: ${theme.Vq.medium};
    padding: ${theme.YK.lg};
    margin-bottom: ${theme.YK.md};

    .section-title {
      font-size: 14px;
      font-weight: 500;
      color: ${theme.Tj.text.primary};
      margin-bottom: ${theme.YK.md};
    }

    .tax-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: ${theme.YK.md};

      .tax-item {
        display: flex;
        flex-direction: column;
        gap: ${theme.YK.xs};

        .label {
          color: ${theme.Tj.text.secondary};
          font-size: 14px;
        }

        .value {
          color: ${theme.Tj.text.primary};
          font-size: 14px;

          &.highlight {
            color: #1890ff;
            font-weight: 500;
          }
        }
      }
    }
  }
`,(0,styled_components_browser_esm.Ay)(modal.A)`
  @media print {
    .ant-modal-header,
    .action-buttons {
      display: none !important;
    }

    .ant-modal-content {
      box-shadow: none;
    }

    .ant-modal-body {
      padding: 0;
    }
  }
`,(0,styled_components_browser_esm.Ay)(collapse.A)`
  background: transparent !important;
  border: none !important;
  
  .ant-collapse-item {
    margin-bottom: ${theme.YK.md};
    border: none !important;
  }
`),StyledPanel=(0,styled_components_browser_esm.Ay)(Panel)`
  background: #F5F5F5 !important;
  border-radius: ${theme.Vq.medium} !important;
  overflow: hidden !important;

  .ant-collapse-header {
    background: white !important;
    border-radius: ${theme.Vq.medium} !important;
    padding: ${theme.YK.md} ${theme.YK.lg} !important;
    align-items: center !important;
    
    .ant-collapse-expand-icon {
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      color: ${theme.Tj.text.secondary} !important;
    }
    
    .ant-collapse-header-text {
      display: flex !important;
      align-items: center !important;
      gap: ${theme.YK.md} !important;
      
      .title {
        font-size: 16px !important;
        font-weight: 500 !important;
        color: ${theme.Tj.text.primary} !important;
      }
      
      .subtitle {
        font-size: 12px !important;
        color: ${theme.Tj.text.secondary} !important;
      }
    }
  }

  .ant-collapse-content {
    background: #F5F5F5 !important;
    border-top: none !important;
    
    .ant-collapse-content-box {
      padding: ${theme.YK.lg} !important;
    }
  }
`,StyledDescriptions=(0,styled_components_browser_esm.Ay)(descriptions.A)`
  .ant-descriptions-item-label {
    color: ${theme.Tj.text.secondary};
    font-size: 14px;
  }
  
  .ant-descriptions-item-content {
    color: ${theme.Tj.text.primary};
    font-size: 14px;
  }
`,StyledCard=(0,styled_components_browser_esm.Ay)(card.A)`
  background: white;
  border-radius: ${theme.Vq.medium};
  margin-bottom: ${theme.YK.md};
  
  .ant-card-head {
    border-bottom: 1px solid ${theme.Tj.border.light};
    padding: ${theme.YK.md} ${theme.YK.lg};
    min-height: auto;
    
    .ant-card-head-title {
      font-size: 14px;
      font-weight: 500;
      padding: ${theme.YK.xs} 0;
    }
  }
  
  .ant-card-body {
    padding: ${theme.YK.lg};
  }
`,SectionTitle=(0,styled_components_browser_esm.Ay)(BookingDetails_Title)`
  font-size: 14px !important;
  font-weight: 500 !important;
  margin-bottom: ${theme.YK.md} !important;
`,ProductItem=(0,styled_components_browser_esm.Ay)(card.A)`
  border-radius: ${theme.Vq.medium};
  margin-bottom: ${theme.YK.md};
  overflow: hidden;
  box-shadow: none;
  transition: all 0.3s ease;
  border: 1px solid ${theme.Tj.border.light};
  background: #FFFFFF;
  
  .ant-card-body {
    padding: ${theme.YK.lg};
  }
  
  .product-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: ${theme.YK.lg};
    
    .left-section {
      display: flex;
      flex-direction: column;
      gap: ${theme.YK.xs};
    }
  }
  
  .product-title {
    display: flex;
    gap: ${theme.YK.sm};
    align-items: center;
    margin-bottom: ${theme.YK.xs};
    
    .product-id {
      font-size: 16px;
      color: ${theme.Tj.text.primary};
      font-weight: 500;
    }
  }
  
  .name-group {
    display: flex;
    gap: ${theme.YK.lg};
    align-items: center;
    
    .name-item {
      display: flex;
      gap: ${theme.YK.xs};
      align-items: center;
      
      .label {
        color: ${theme.Tj.text.secondary};
        font-size: 14px;
      }
      
      .value {
        color: ${theme.Tj.text.primary};
        font-size: 14px;
      }
    }
  }
  
  .product-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.YK.lg} ${theme.YK.xl};
  }
  
  .info-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    .label {
      font-size: 14px;
      color: ${theme.Tj.text.secondary};
    }
    
    .value {
      font-size: 14px;
      color: ${theme.Tj.text.primary};
      font-weight: 400;
      
      &.highlight {
        color: #1890ff;
      }
    }
  }
  
  .edit-button {
    border: none;
    padding: 4px;
    height: auto;
    color: ${theme.Tj.text.secondary};
    
    &:hover {
      color: #1890ff;
      background: transparent;
    }
  }
`,pages_BookingDetails=_ref=>{let{bookingNumber="AU4363",onBack}=_ref;const[expandedSections,setExpandedSections]=(0,react.useState)([]),[isLabelModalVisible,setIsLabelModalVisible]=(0,react.useState)(!1),barcodeRef=(0,react.useRef)(null),qrCodeRef=(0,react.useRef)(null),labelContentRef=(0,react.useRef)(null),[shipperModalVisible,setShipperModalVisible]=(0,react.useState)(!1),[shipperInfo,setShipperInfo]=(0,react.useState)({shipperType:"company",companyName:"",country:"澳大利亚",city:"悉尼",abn:"",contactName:"Mike Zhou",countryCode:"+61",phone:"0416222333",address:"11 Archer St, Chatswood NSW 2067",email:"mikezhou@gmail.com",expectedShipDate:"2024-11-12",idDocument:""}),[isShipperEditing,setIsShipperEditing]=(0,react.useState)(!1),[consigneeInfo,setConsigneeInfo]=(0,react.useState)({consigneeType:"individual",companyName:"",country:"澳大利亚",city:"悉尼",abn:"",contactName:"Mike Zhou",countryCode:"+61",phone:"0416222333",address:"11 Archer St, Chatswood NSW 2067",email:"mikezhou@gmail.com",notes:"日上午 查看",idDocument:""}),[isConsigneeEditing,setIsConsigneeEditing]=(0,react.useState)(!1),[form]=es_form.A.useForm(),[consigneeForm]=es_form.A.useForm();(0,react.useEffect)((()=>{if(isLabelModalVisible){const barcodeElement=document.createElement("canvas");JsBarcode_default()(barcodeElement,"AU1000888",{format:"CODE128",width:2,height:40,displayValue:!1}),barcodeRef.current&&(barcodeRef.current.src=barcodeElement.toDataURL());const qrData=JSON.stringify({bookingNumber:"AU1000888",consignee:"HePinyu",address:"25 Lombard St, FAIRFIELD NSW 2165",phone:"0406222886"});browser.toDataURL(qrData,{width:120,margin:0}).then((url=>{qrCodeRef.current&&(qrCodeRef.current.src=url)}))}}),[isLabelModalVisible]),(0,react.useEffect)((()=>{isShipperEditing&&setTimeout((()=>{form.setFieldsValue({...shipperInfo,expectedShipDate:dayjs_min_default()(shipperInfo.expectedShipDate)}),console.log("Form initialized with shipperType:",shipperInfo.shipperType)}),10)}),[isShipperEditing,shipperInfo,form]),(0,react.useEffect)((()=>{isConsigneeEditing&&setTimeout((()=>{consigneeForm.setFieldsValue({...consigneeInfo}),console.log("Consignee form initialized with consigneeType:",consigneeInfo.consigneeType)}),10)}),[isConsigneeEditing,consigneeInfo,consigneeForm]);const handleFileSelect=file=>{console.log("File selected:",file)};(0,react.useEffect)((()=>{if(isShipperEditing){const currentType=form.getFieldValue("shipperType");form.setFieldsValue({shipperType:currentType})}}),[form.getFieldValue("shipperType"),isShipperEditing]);return(0,jsx_runtime.jsxs)(BookingDetails_StyledLayout,{children:[(0,jsx_runtime.jsx)(GlobalHeader.A,{}),(0,jsx_runtime.jsxs)(BookingDetails_ContentContainer,{children:[(0,jsx_runtime.jsxs)(BookingDetails_Breadcrumb,{children:[(0,jsx_runtime.jsx)("span",{children:"首页"}),(0,jsx_runtime.jsx)("span",{children:">"}),(0,jsx_runtime.jsxs)("span",{children:["哨头号 ",bookingNumber]}),(0,jsx_runtime.jsx)("span",{children:">"}),(0,jsx_runtime.jsx)("span",{className:"current",children:"查看详情"})]}),(0,jsx_runtime.jsxs)(OverviewCard,{children:[(0,jsx_runtime.jsxs)("div",{className:"header",children:[(0,jsx_runtime.jsx)("span",{className:"title",children:"委托信息总览"}),(0,jsx_runtime.jsx)(es_button.Ay,{type:"primary",ghost:!0,icon:(0,jsx_runtime.jsx)(FileTextOutlined.A,{}),onClick:()=>{setIsLabelModalVisible(!0)},children:"查看哨头面单"})]}),(0,jsx_runtime.jsxs)("div",{className:"content",children:[(0,jsx_runtime.jsxs)("div",{className:"info-row",children:[(0,jsx_runtime.jsxs)("div",{className:"info-item",children:[(0,jsx_runtime.jsx)("span",{className:"label",children:"货柜数"}),(0,jsx_runtime.jsx)("span",{className:"value",children:"1"})]}),(0,jsx_runtime.jsxs)("div",{className:"info-item",children:[(0,jsx_runtime.jsx)("span",{className:"label",children:"总货值"}),(0,jsx_runtime.jsxs)("span",{className:"value",children:["35435","\n","AUD"]})]})]}),(0,jsx_runtime.jsxs)("div",{className:"info-row",children:[(0,jsx_runtime.jsxs)("div",{className:"info-item",children:[(0,jsx_runtime.jsx)("span",{className:"label",children:"总箱数"}),(0,jsx_runtime.jsx)("span",{className:"value",children:"32"})]}),(0,jsx_runtime.jsxs)("div",{className:"info-item",children:[(0,jsx_runtime.jsx)("span",{className:"label",children:"发货地"}),(0,jsx_runtime.jsx)("span",{className:"value",children:"中国-郑州"})]})]}),(0,jsx_runtime.jsxs)("div",{className:"info-row",children:[(0,jsx_runtime.jsxs)("div",{className:"info-item",children:[(0,jsx_runtime.jsx)("span",{className:"label",children:"已入库箱数"}),(0,jsx_runtime.jsxs)("span",{className:"value",children:["1",(0,jsx_runtime.jsx)("span",{className:"status-tag",children:"待入库: 31"})]})]}),(0,jsx_runtime.jsxs)("div",{className:"info-item",children:[(0,jsx_runtime.jsx)("span",{className:"label",children:"目的地港"}),(0,jsx_runtime.jsx)("span",{className:"value",children:"澳大利亚-悉尼"})]})]}),(0,jsx_runtime.jsxs)("div",{className:"info-row",children:[(0,jsx_runtime.jsxs)("div",{className:"info-item",children:[(0,jsx_runtime.jsx)("span",{className:"label",children:"总重量"}),(0,jsx_runtime.jsx)("span",{className:"value",children:"31000 kg"})]}),(0,jsx_runtime.jsxs)("div",{className:"info-item",children:[(0,jsx_runtime.jsx)("span",{className:"label",children:"提交时间"}),(0,jsx_runtime.jsx)("span",{className:"value",children:"2024/11/10 15:20"})]})]}),(0,jsx_runtime.jsxs)("div",{className:"info-row",children:[(0,jsx_runtime.jsxs)("div",{className:"info-item",children:[(0,jsx_runtime.jsx)("span",{className:"label",children:"总体积"}),(0,jsx_runtime.jsx)("span",{className:"value",children:"45 cbm"})]}),(0,jsx_runtime.jsxs)("div",{className:"info-item",children:[(0,jsx_runtime.jsx)("span",{className:"label",children:"预计发运日期"}),(0,jsx_runtime.jsx)("span",{className:"value",children:"2024/11/12"})]})]})]}),(0,jsx_runtime.jsxs)(Footer,{children:[(0,jsx_runtime.jsxs)(FooterTitle,{children:[(0,jsx_runtime.jsx)(WarningOutlined.A,{}),"请上传以下文件"]}),(0,jsx_runtime.jsxs)(FileLinks,{children:[(0,jsx_runtime.jsx)(molecules_FileUploadItem,{label:"装箱单",onFileSelect:handleFileSelect}),(0,jsx_runtime.jsx)(molecules_FileUploadItem,{label:"发票",onFileSelect:handleFileSelect}),(0,jsx_runtime.jsx)(molecules_FileUploadItem,{label:"报关单",onFileSelect:handleFileSelect}),(0,jsx_runtime.jsx)(molecules_FileUploadItem,{label:"其他文件",onFileSelect:handleFileSelect})]})]})]}),(0,jsx_runtime.jsxs)(StyledCollapse,{expandIcon:_ref2=>{let{isActive}=_ref2;return(0,jsx_runtime.jsx)(DownOutlined.A,{rotate:isActive?180:0})},activeKey:expandedSections,onChange:key=>setExpandedSections(key),children:[(0,jsx_runtime.jsx)(StyledPanel,{header:(0,jsx_runtime.jsxs)(space.A,{children:[(0,jsx_runtime.jsx)("span",{className:"title",children:"发货方资料"}),(0,jsx_runtime.jsx)(BookingDetails_Text,{type:"secondary",style:{fontSize:12},children:"（提交申请前必须添加发货方）"})]}),children:isShipperEditing?(0,jsx_runtime.jsxs)(es_form.A,{form,layout:"vertical",initialValues:{...shipperInfo,expectedShipDate:dayjs_min_default()(shipperInfo.expectedShipDate)},onValuesChange:changedValues=>{if("shipperType"in changedValues){console.log("Shipper type changed to:",changedValues.shipperType);const commonFields=["country","countryCode","phone","address","email","expectedShipDate"],currentValues=form.getFieldsValue();form.setFieldsValue({shipperType:changedValues.shipperType}),setTimeout((()=>{form.setFieldsValue({...commonFields.reduce(((acc,field)=>({...acc,[field]:currentValues[field]})),{})})}),10)}},children:[(0,jsx_runtime.jsx)(es_form.A.Item,{name:"shipperType",label:(0,jsx_runtime.jsxs)("span",{className:"form-label",children:[(0,jsx_runtime.jsx)("span",{className:"required",children:"*"}),"发货方类型"]}),rules:[{required:!0,message:"请选择发货方类型"}],children:(0,jsx_runtime.jsxs)(es_radio.Ay.Group,{onChange:e=>{const value=e.target.value;form.setFieldsValue({shipperType:value}),console.log("Radio value changed to:",value)},children:[(0,jsx_runtime.jsx)(es_radio.Ay,{value:"company",children:"公司"}),(0,jsx_runtime.jsx)(es_radio.Ay,{value:"individual",children:"个人"})]})}),(0,jsx_runtime.jsx)(es_form.A.Item,{noStyle:!0,dependencies:["shipperType"],children:_ref3=>{let{getFieldValue}=_ref3;return"company"===getFieldValue("shipperType")?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(es_form.A.Item,{name:"companyName",label:(0,jsx_runtime.jsxs)("span",{className:"form-label",children:[(0,jsx_runtime.jsx)("span",{className:"required",children:"*"}),"公司名"]}),rules:[{required:!0,message:"请输入公司名"}],children:(0,jsx_runtime.jsx)(input.A,{placeholder:"公司名"})}),(0,jsx_runtime.jsx)(es_form.A.Item,{name:"country",label:(0,jsx_runtime.jsxs)("span",{className:"form-label",children:[(0,jsx_runtime.jsx)("span",{className:"required",children:"*"}),"国家"]}),rules:[{required:!0,message:"请选择国家"}],children:(0,jsx_runtime.jsxs)(es_select.A,{placeholder:"请选择",children:[(0,jsx_runtime.jsx)(Option,{value:"澳大利亚",children:"澳大利亚"}),(0,jsx_runtime.jsx)(Option,{value:"中国",children:"中国"})]})}),(0,jsx_runtime.jsx)(es_form.A.Item,{name:"city",label:(0,jsx_runtime.jsxs)("span",{className:"form-label",children:[(0,jsx_runtime.jsx)("span",{className:"required",children:"*"}),"城市"]}),rules:[{required:!0,message:"请选择城市"}],children:(0,jsx_runtime.jsxs)(es_select.A,{placeholder:"请选择",children:[(0,jsx_runtime.jsx)(Option,{value:"悉尼",children:"悉尼"}),(0,jsx_runtime.jsx)(Option,{value:"墨尔本",children:"墨尔本"})]})}),(0,jsx_runtime.jsx)(es_form.A.Item,{name:"abn",label:(0,jsx_runtime.jsxs)("span",{className:"form-label",children:[(0,jsx_runtime.jsx)("span",{className:"required",children:"*"}),"公司ABN或税号"]}),rules:[{required:!0,message:"请输入公司ABN或税号"}],children:(0,jsx_runtime.jsx)(input.A,{placeholder:"公司ABN"})}),(0,jsx_runtime.jsx)(es_form.A.Item,{name:"contactName",label:(0,jsx_runtime.jsxs)("span",{className:"form-label",children:[(0,jsx_runtime.jsx)("span",{className:"required",children:"*"}),"联系人姓名"]}),rules:[{required:!0,message:"请输入联系人姓名"}],children:(0,jsx_runtime.jsx)(input.A,{placeholder:"联系人姓名"})}),(0,jsx_runtime.jsx)(es_form.A.Item,{label:(0,jsx_runtime.jsxs)("span",{className:"form-label",children:[(0,jsx_runtime.jsx)("span",{className:"required",children:"*"}),"联系人电话"]}),required:!0,children:(0,jsx_runtime.jsxs)(input.A.Group,{compact:!0,className:"phone-group",children:[(0,jsx_runtime.jsx)(es_form.A.Item,{name:"countryCode",noStyle:!0,rules:[{required:!0,message:"请选择国际区号"}],children:(0,jsx_runtime.jsxs)(es_select.A,{placeholder:"+61",className:"country-code",children:[(0,jsx_runtime.jsx)(Option,{value:"+61",children:"+61"}),(0,jsx_runtime.jsx)(Option,{value:"+86",children:"+86"})]})}),(0,jsx_runtime.jsx)(es_form.A.Item,{name:"phone",noStyle:!0,rules:[{required:!0,message:"请输入电话号码"}],children:(0,jsx_runtime.jsx)(input.A,{placeholder:"电话",className:"phone-input"})})]})}),(0,jsx_runtime.jsx)(es_form.A.Item,{name:"address",label:(0,jsx_runtime.jsxs)("span",{className:"form-label",children:[(0,jsx_runtime.jsx)("span",{className:"required",children:"*"}),"联系人地址"]}),rules:[{required:!0,message:"请输入联系人地址"}],children:(0,jsx_runtime.jsx)(input.A,{placeholder:"发货人地址"})}),(0,jsx_runtime.jsx)(es_form.A.Item,{name:"email",label:(0,jsx_runtime.jsxs)("span",{className:"form-label",children:[(0,jsx_runtime.jsx)("span",{className:"required",children:"*"}),"联系人邮箱"]}),rules:[{required:!0,message:"请输入联系人邮箱"},{type:"email",message:"请输入有效的邮箱地址"}],children:(0,jsx_runtime.jsx)(input.A,{placeholder:"发货人邮箱"})})]}):(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(es_form.A.Item,{name:"contactName",label:(0,jsx_runtime.jsxs)("span",{className:"form-label",children:[(0,jsx_runtime.jsx)("span",{className:"required",children:"*"}),"收货人姓名"]}),rules:[{required:!0,message:"请输入收货人姓名"}],children:(0,jsx_runtime.jsx)(input.A,{placeholder:"收货人姓名"})}),(0,jsx_runtime.jsx)(es_form.A.Item,{name:"country",label:(0,jsx_runtime.jsxs)("span",{className:"form-label",children:[(0,jsx_runtime.jsx)("span",{className:"required",children:"*"}),"国家"]}),rules:[{required:!0,message:"请选择国家"}],children:(0,jsx_runtime.jsxs)(es_select.A,{placeholder:"请选择",children:[(0,jsx_runtime.jsx)(Option,{value:"澳大利亚",children:"澳大利亚"}),(0,jsx_runtime.jsx)(Option,{value:"中国",children:"中国"})]})}),(0,jsx_runtime.jsx)(es_form.A.Item,{name:"idDocument",label:(0,jsx_runtime.jsxs)("span",{className:"form-label",children:[(0,jsx_runtime.jsx)("span",{className:"required",children:"*"}),"收货人驾照或护照扫描件"]}),rules:[{required:!0,message:"请上传驾照或护照扫描件"}],children:(0,jsx_runtime.jsxs)("div",{className:"upload-section",children:[(0,jsx_runtime.jsx)("div",{className:"upload-icon",children:(0,jsx_runtime.jsx)(InboxOutlined.A,{})}),(0,jsx_runtime.jsx)("div",{className:"upload-text",children:"点击或者拖动文件到这区域来上传。"}),(0,jsx_runtime.jsx)("div",{className:"upload-hint",children:"支持.jpg .png .pdf等文件格式"})]})}),(0,jsx_runtime.jsx)(es_form.A.Item,{label:(0,jsx_runtime.jsxs)("span",{className:"form-label",children:[(0,jsx_runtime.jsx)("span",{className:"required",children:"*"}),"收货人电话"]}),required:!0,children:(0,jsx_runtime.jsxs)(input.A.Group,{compact:!0,className:"phone-group",children:[(0,jsx_runtime.jsx)(es_form.A.Item,{name:"countryCode",noStyle:!0,rules:[{required:!0,message:"请选择国际区号"}],children:(0,jsx_runtime.jsxs)(es_select.A,{placeholder:"+61",className:"country-code",children:[(0,jsx_runtime.jsx)(Option,{value:"+61",children:"+61"}),(0,jsx_runtime.jsx)(Option,{value:"+86",children:"+86"})]})}),(0,jsx_runtime.jsx)(es_form.A.Item,{name:"phone",noStyle:!0,rules:[{required:!0,message:"请输入电话号码"}],children:(0,jsx_runtime.jsx)(input.A,{placeholder:"电话",className:"phone-input"})})]})}),(0,jsx_runtime.jsx)(es_form.A.Item,{name:"address",label:(0,jsx_runtime.jsxs)("span",{className:"form-label",children:[(0,jsx_runtime.jsx)("span",{className:"required",children:"*"}),"收货人地址"]}),rules:[{required:!0,message:"请输入收货人地址"}],children:(0,jsx_runtime.jsx)(input.A,{placeholder:"收货人地址"})}),(0,jsx_runtime.jsx)(es_form.A.Item,{name:"email",label:(0,jsx_runtime.jsxs)("span",{className:"form-label",children:[(0,jsx_runtime.jsx)("span",{className:"required",children:"*"}),"收货人邮箱"]}),rules:[{required:!0,message:"请输入收货人邮箱"},{type:"email",message:"请输入有效的邮箱地址"}],children:(0,jsx_runtime.jsx)(input.A,{placeholder:"收货人邮箱"})})]})}}),(0,jsx_runtime.jsx)(es_form.A.Item,{name:"expectedShipDate",label:(0,jsx_runtime.jsxs)("span",{className:"form-label",children:[(0,jsx_runtime.jsx)("span",{className:"required",children:"*"}),"期望出货日期"]}),rules:[{required:!0,message:"请选择期望出货日期"}],children:(0,jsx_runtime.jsx)(date_picker.A,{placeholder:"选择日期",style:{width:"100%"}})}),(0,jsx_runtime.jsxs)(flex.A,{justify:"flex-end",gap:theme.YK.sm,children:[(0,jsx_runtime.jsx)(es_button.Ay,{onClick:()=>{setIsShipperEditing(!1),form.resetFields()},children:"取消"}),(0,jsx_runtime.jsx)(es_button.Ay,{type:"primary",onClick:async()=>{try{const values=await form.validateFields(),formattedValues={...values,expectedShipDate:values.expectedShipDate.format("YYYY-MM-DD")};setShipperInfo(formattedValues),setIsShipperEditing(!1),message.Ay.success("发货方资料更新成功")}catch(error){message.Ay.error("请检查表单填写是否正确")}},children:"确认"})]})]}):(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)("div",{style:{position:"relative"},children:[(0,jsx_runtime.jsx)(es_button.Ay,{type:"text",icon:(0,jsx_runtime.jsx)(EditOutlined.A,{}),onClick:()=>{setIsShipperEditing(!0)},style:{position:"absolute",top:0,right:0}}),(0,jsx_runtime.jsxs)(StyledDescriptions,{column:1,bordered:!1,colon:!0,labelStyle:{width:"150px"},children:[(0,jsx_runtime.jsx)(descriptions.A.Item,{label:"发货方类型",children:"company"===shipperInfo.shipperType?"公司":"个人"}),"company"===shipperInfo.shipperType&&shipperInfo.companyName&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(descriptions.A.Item,{label:"公司名",children:shipperInfo.companyName}),shipperInfo.abn&&(0,jsx_runtime.jsx)(descriptions.A.Item,{label:"公司ABN或税号",children:shipperInfo.abn})]}),(0,jsx_runtime.jsx)(descriptions.A.Item,{label:"国家",children:shipperInfo.country}),(0,jsx_runtime.jsx)(descriptions.A.Item,{label:"城市",children:shipperInfo.city}),(0,jsx_runtime.jsx)(descriptions.A.Item,{label:"联系人姓名",children:shipperInfo.contactName}),(0,jsx_runtime.jsx)(descriptions.A.Item,{label:"联系人电话",children:`${shipperInfo.countryCode} ${shipperInfo.phone}`}),(0,jsx_runtime.jsx)(descriptions.A.Item,{label:"联系人地址",children:shipperInfo.address}),(0,jsx_runtime.jsx)(descriptions.A.Item,{label:"联系人邮箱",children:shipperInfo.email}),(0,jsx_runtime.jsx)(descriptions.A.Item,{label:"期望出货日期",children:shipperInfo.expectedShipDate})]})]})})},"shipper"),(0,jsx_runtime.jsx)(StyledPanel,{header:(0,jsx_runtime.jsxs)(space.A,{children:[(0,jsx_runtime.jsx)("span",{className:"title",children:"收货方资料"}),(0,jsx_runtime.jsx)(BookingDetails_Text,{type:"secondary",style:{fontSize:12},children:"（提交申请前必须添加收货方）"})]}),children:isConsigneeEditing?(0,jsx_runtime.jsxs)(es_form.A,{form:consigneeForm,layout:"vertical",initialValues:consigneeInfo,onValuesChange:changedValues=>{if("consigneeType"in changedValues){console.log("Consignee type changed to:",changedValues.consigneeType);const commonFields=["country","countryCode","phone","address","email","notes"],currentValues=consigneeForm.getFieldsValue();consigneeForm.setFieldsValue({consigneeType:changedValues.consigneeType}),setTimeout((()=>{consigneeForm.setFieldsValue({...commonFields.reduce(((acc,field)=>({...acc,[field]:currentValues[field]})),{})})}),10)}},children:[(0,jsx_runtime.jsx)(es_form.A.Item,{name:"consigneeType",label:(0,jsx_runtime.jsxs)("span",{className:"form-label",children:[(0,jsx_runtime.jsx)("span",{className:"required",children:"*"}),"收货方类型"]}),rules:[{required:!0,message:"请选择收货方类型"}],children:(0,jsx_runtime.jsxs)(es_radio.Ay.Group,{onChange:e=>{const value=e.target.value;consigneeForm.setFieldsValue({consigneeType:value}),console.log("Radio value changed to:",value)},children:[(0,jsx_runtime.jsx)(es_radio.Ay,{value:"company",children:"公司"}),(0,jsx_runtime.jsx)(es_radio.Ay,{value:"individual",children:"个人"})]})}),(0,jsx_runtime.jsx)(es_form.A.Item,{noStyle:!0,dependencies:["consigneeType"],children:_ref4=>{let{getFieldValue}=_ref4;return"company"===getFieldValue("consigneeType")?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(es_form.A.Item,{name:"companyName",label:(0,jsx_runtime.jsxs)("span",{className:"form-label",children:[(0,jsx_runtime.jsx)("span",{className:"required",children:"*"}),"公司名"]}),rules:[{required:!0,message:"请输入公司名"}],children:(0,jsx_runtime.jsx)(input.A,{placeholder:"公司名"})}),(0,jsx_runtime.jsx)(es_form.A.Item,{name:"country",label:(0,jsx_runtime.jsxs)("span",{className:"form-label",children:[(0,jsx_runtime.jsx)("span",{className:"required",children:"*"}),"国家"]}),rules:[{required:!0,message:"请选择国家"}],children:(0,jsx_runtime.jsxs)(es_select.A,{placeholder:"请选择",children:[(0,jsx_runtime.jsx)(Option,{value:"澳大利亚",children:"澳大利亚"}),(0,jsx_runtime.jsx)(Option,{value:"中国",children:"中国"})]})}),(0,jsx_runtime.jsx)(es_form.A.Item,{name:"city",label:(0,jsx_runtime.jsxs)("span",{className:"form-label",children:[(0,jsx_runtime.jsx)("span",{className:"required",children:"*"}),"城市"]}),rules:[{required:!0,message:"请选择城市"}],children:(0,jsx_runtime.jsxs)(es_select.A,{placeholder:"请选择",children:[(0,jsx_runtime.jsx)(Option,{value:"悉尼",children:"悉尼"}),(0,jsx_runtime.jsx)(Option,{value:"墨尔本",children:"墨尔本"})]})}),(0,jsx_runtime.jsx)(es_form.A.Item,{name:"abn",label:(0,jsx_runtime.jsxs)("span",{className:"form-label",children:[(0,jsx_runtime.jsx)("span",{className:"required",children:"*"}),"公司ABN或税号"]}),rules:[{required:!0,message:"请输入公司ABN或税号"}],children:(0,jsx_runtime.jsx)(input.A,{placeholder:"公司ABN"})}),(0,jsx_runtime.jsx)(es_form.A.Item,{name:"contactName",label:(0,jsx_runtime.jsxs)("span",{className:"form-label",children:[(0,jsx_runtime.jsx)("span",{className:"required",children:"*"}),"联系人姓名"]}),rules:[{required:!0,message:"请输入联系人姓名"}],children:(0,jsx_runtime.jsx)(input.A,{placeholder:"联系人姓名"})}),(0,jsx_runtime.jsx)(es_form.A.Item,{label:(0,jsx_runtime.jsxs)("span",{className:"form-label",children:[(0,jsx_runtime.jsx)("span",{className:"required",children:"*"}),"联系人电话"]}),required:!0,children:(0,jsx_runtime.jsxs)(input.A.Group,{compact:!0,className:"phone-group",children:[(0,jsx_runtime.jsx)(es_form.A.Item,{name:"countryCode",noStyle:!0,rules:[{required:!0,message:"请选择国际区号"}],children:(0,jsx_runtime.jsxs)(es_select.A,{placeholder:"+61",className:"country-code",children:[(0,jsx_runtime.jsx)(Option,{value:"+61",children:"+61"}),(0,jsx_runtime.jsx)(Option,{value:"+86",children:"+86"})]})}),(0,jsx_runtime.jsx)(es_form.A.Item,{name:"phone",noStyle:!0,rules:[{required:!0,message:"请输入电话号码"}],children:(0,jsx_runtime.jsx)(input.A,{placeholder:"电话",className:"phone-input"})})]})}),(0,jsx_runtime.jsx)(es_form.A.Item,{name:"address",label:(0,jsx_runtime.jsxs)("span",{className:"form-label",children:[(0,jsx_runtime.jsx)("span",{className:"required",children:"*"}),"联系人地址"]}),rules:[{required:!0,message:"请输入联系人地址"}],children:(0,jsx_runtime.jsx)(input.A,{placeholder:"收货人地址"})}),(0,jsx_runtime.jsx)(es_form.A.Item,{name:"email",label:(0,jsx_runtime.jsxs)("span",{className:"form-label",children:[(0,jsx_runtime.jsx)("span",{className:"required",children:"*"}),"联系人邮箱"]}),rules:[{required:!0,message:"请输入联系人邮箱"},{type:"email",message:"请输入有效的邮箱地址"}],children:(0,jsx_runtime.jsx)(input.A,{placeholder:"收货人邮箱"})})]}):(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(es_form.A.Item,{name:"contactName",label:(0,jsx_runtime.jsxs)("span",{className:"form-label",children:[(0,jsx_runtime.jsx)("span",{className:"required",children:"*"}),"收货人姓名"]}),rules:[{required:!0,message:"请输入收货人姓名"}],children:(0,jsx_runtime.jsx)(input.A,{placeholder:"收货人姓名"})}),(0,jsx_runtime.jsx)(es_form.A.Item,{name:"country",label:(0,jsx_runtime.jsxs)("span",{className:"form-label",children:[(0,jsx_runtime.jsx)("span",{className:"required",children:"*"}),"国家"]}),rules:[{required:!0,message:"请选择国家"}],children:(0,jsx_runtime.jsxs)(es_select.A,{placeholder:"请选择",children:[(0,jsx_runtime.jsx)(Option,{value:"澳大利亚",children:"澳大利亚"}),(0,jsx_runtime.jsx)(Option,{value:"中国",children:"中国"})]})}),(0,jsx_runtime.jsx)(es_form.A.Item,{name:"idDocument",label:(0,jsx_runtime.jsxs)("span",{className:"form-label",children:[(0,jsx_runtime.jsx)("span",{className:"required",children:"*"}),"收货人驾照或护照扫描件"]}),rules:[{required:!0,message:"请上传驾照或护照扫描件"}],children:(0,jsx_runtime.jsxs)("div",{className:"upload-section",children:[(0,jsx_runtime.jsx)("div",{className:"upload-icon",children:(0,jsx_runtime.jsx)(InboxOutlined.A,{})}),(0,jsx_runtime.jsx)("div",{className:"upload-text",children:"点击或者拖动文件到这区域来上传。"}),(0,jsx_runtime.jsx)("div",{className:"upload-hint",children:"支持.jpg .png .pdf等文件格式"})]})}),(0,jsx_runtime.jsx)(es_form.A.Item,{label:(0,jsx_runtime.jsxs)("span",{className:"form-label",children:[(0,jsx_runtime.jsx)("span",{className:"required",children:"*"}),"收货人电话"]}),required:!0,children:(0,jsx_runtime.jsxs)(input.A.Group,{compact:!0,className:"phone-group",children:[(0,jsx_runtime.jsx)(es_form.A.Item,{name:"countryCode",noStyle:!0,rules:[{required:!0,message:"请选择国际区号"}],children:(0,jsx_runtime.jsxs)(es_select.A,{placeholder:"+61",className:"country-code",children:[(0,jsx_runtime.jsx)(Option,{value:"+61",children:"+61"}),(0,jsx_runtime.jsx)(Option,{value:"+86",children:"+86"})]})}),(0,jsx_runtime.jsx)(es_form.A.Item,{name:"phone",noStyle:!0,rules:[{required:!0,message:"请输入电话号码"}],children:(0,jsx_runtime.jsx)(input.A,{placeholder:"电话",className:"phone-input"})})]})}),(0,jsx_runtime.jsx)(es_form.A.Item,{name:"address",label:(0,jsx_runtime.jsxs)("span",{className:"form-label",children:[(0,jsx_runtime.jsx)("span",{className:"required",children:"*"}),"收货人地址"]}),rules:[{required:!0,message:"请输入收货人地址"}],children:(0,jsx_runtime.jsx)(input.A,{placeholder:"收货人地址"})}),(0,jsx_runtime.jsx)(es_form.A.Item,{name:"email",label:(0,jsx_runtime.jsxs)("span",{className:"form-label",children:[(0,jsx_runtime.jsx)("span",{className:"required",children:"*"}),"收货人邮箱"]}),rules:[{required:!0,message:"请输入收货人邮箱"},{type:"email",message:"请输入有效的邮箱地址"}],children:(0,jsx_runtime.jsx)(input.A,{placeholder:"收货人邮箱"})})]})}}),(0,jsx_runtime.jsx)(es_form.A.Item,{name:"notes",label:(0,jsx_runtime.jsx)("span",{className:"form-label",children:"收货人注释"}),children:(0,jsx_runtime.jsx)(input.A.TextArea,{placeholder:"收货人注释",rows:2})}),(0,jsx_runtime.jsxs)(flex.A,{justify:"flex-end",gap:theme.YK.sm,children:[(0,jsx_runtime.jsx)(es_button.Ay,{onClick:()=>{setIsConsigneeEditing(!1),consigneeForm.resetFields()},children:"取消"}),(0,jsx_runtime.jsx)(es_button.Ay,{type:"primary",onClick:async()=>{try{const values=await consigneeForm.validateFields();setConsigneeInfo(values),setIsConsigneeEditing(!1),message.Ay.success("收货方资料更新成功")}catch(error){message.Ay.error("请检查表单填写是否正确")}},children:"确认"})]})]}):(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)("div",{style:{position:"relative"},children:[(0,jsx_runtime.jsx)(es_button.Ay,{type:"text",icon:(0,jsx_runtime.jsx)(EditOutlined.A,{}),onClick:()=>{setIsConsigneeEditing(!0)},style:{position:"absolute",top:0,right:0}}),(0,jsx_runtime.jsxs)(StyledDescriptions,{column:1,bordered:!1,colon:!0,labelStyle:{width:"150px"},children:[(0,jsx_runtime.jsx)(descriptions.A.Item,{label:"收货方类型",children:"company"===consigneeInfo.consigneeType?"公司":"个人"}),"company"===consigneeInfo.consigneeType&&consigneeInfo.companyName&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(descriptions.A.Item,{label:"公司名",children:consigneeInfo.companyName}),consigneeInfo.abn&&(0,jsx_runtime.jsx)(descriptions.A.Item,{label:"公司ABN或税号",children:consigneeInfo.abn})]}),(0,jsx_runtime.jsx)(descriptions.A.Item,{label:"国家",children:consigneeInfo.country}),"company"===consigneeInfo.consigneeType&&(0,jsx_runtime.jsx)(descriptions.A.Item,{label:"城市",children:consigneeInfo.city}),(0,jsx_runtime.jsx)(descriptions.A.Item,{label:"company"===consigneeInfo.consigneeType?"联系人姓名":"收货人姓名",children:consigneeInfo.contactName}),(0,jsx_runtime.jsx)(descriptions.A.Item,{label:"company"===consigneeInfo.consigneeType?"联系人电话":"收货人电话",children:`${consigneeInfo.countryCode} ${consigneeInfo.phone}`}),(0,jsx_runtime.jsx)(descriptions.A.Item,{label:"company"===consigneeInfo.consigneeType?"联系人地址":"收货人地址",children:consigneeInfo.address}),(0,jsx_runtime.jsx)(descriptions.A.Item,{label:"company"===consigneeInfo.consigneeType?"联系人邮箱":"收货人邮箱",children:consigneeInfo.email}),(0,jsx_runtime.jsx)(descriptions.A.Item,{label:"收货人注释",children:consigneeInfo.notes})]})]})})},"consignee"),(0,jsx_runtime.jsxs)(StyledPanel,{header:(0,jsx_runtime.jsx)("span",{className:"title",children:"货柜 1 信息"}),children:[(0,jsx_runtime.jsx)(StyledCard,{bordered:!1,children:(0,jsx_runtime.jsxs)(flex.A,{justify:"space-between",align:"start",children:[(0,jsx_runtime.jsxs)(StyledDescriptions,{column:1,bordered:!1,children:[(0,jsx_runtime.jsx)(descriptions.A.Item,{label:"柜型",children:"20 GP"}),(0,jsx_runtime.jsx)(descriptions.A.Item,{label:"货物总重(kg)",children:"16000"}),(0,jsx_runtime.jsx)(descriptions.A.Item,{label:"装柜地址",children:"河南省 郑州市 郑东新区空港区富航路7号"}),(0,jsx_runtime.jsx)(descriptions.A.Item,{label:"联系人",children:"张三"}),(0,jsx_runtime.jsx)(descriptions.A.Item,{label:"联系电话",children:"+86 13611112222"})]}),(0,jsx_runtime.jsx)(es_button.Ay,{type:"text",icon:(0,jsx_runtime.jsx)(EditOutlined.A,{})})]})}),(0,jsx_runtime.jsx)(divider.A,{style:{margin:`${theme.YK.md} 0`}}),(0,jsx_runtime.jsx)(SectionTitle,{level:5,children:"货柜1内商品信息（共 2 套商品）"}),(0,jsx_runtime.jsx)(list.A,{itemLayout:"vertical",dataSource:[{name:"桌子",englishName:"table",quantity:10,packageCount:2,material:"木质",volume:"32 立方米",price:"34 AUD",value:"340 AUD"},{name:"椅子",englishName:"chair",quantity:10,packageCount:2,material:"木质",volume:"32 立方米",price:"34 AUD",value:"340 AUD"}],renderItem:item=>(0,jsx_runtime.jsxs)(ProductItem,{children:[(0,jsx_runtime.jsxs)("div",{className:"product-header",children:[(0,jsx_runtime.jsxs)("div",{className:"left-section",children:[(0,jsx_runtime.jsx)("div",{className:"product-title",children:(0,jsx_runtime.jsx)("span",{className:"product-id",children:"商品 1"})}),(0,jsx_runtime.jsxs)("div",{className:"name-group",children:[(0,jsx_runtime.jsxs)("div",{className:"name-item",children:[(0,jsx_runtime.jsx)("span",{className:"label",children:"中文品名："}),(0,jsx_runtime.jsx)("span",{className:"value",children:item.name})]}),(0,jsx_runtime.jsxs)("div",{className:"name-item",children:[(0,jsx_runtime.jsx)("span",{className:"label",children:"英文品名："}),(0,jsx_runtime.jsx)("span",{className:"value",children:item.englishName})]})]})]}),(0,jsx_runtime.jsx)(es_button.Ay,{className:"edit-button",type:"text",icon:(0,jsx_runtime.jsx)(EditOutlined.A,{}),size:"small"})]}),(0,jsx_runtime.jsxs)("div",{className:"product-content",children:[(0,jsx_runtime.jsxs)("div",{className:"info-item",children:[(0,jsx_runtime.jsx)("span",{className:"label",children:"箱号"}),(0,jsx_runtime.jsx)("span",{className:"value",children:"12312ASA"})]}),(0,jsx_runtime.jsxs)("div",{className:"info-item",children:[(0,jsx_runtime.jsx)("span",{className:"label",children:"箱数"}),(0,jsx_runtime.jsx)("span",{className:"value",children:"2"})]}),(0,jsx_runtime.jsxs)("div",{className:"info-item",children:[(0,jsx_runtime.jsx)("span",{className:"label",children:"商品材质"}),(0,jsx_runtime.jsx)("span",{className:"value",children:"木质"})]}),(0,jsx_runtime.jsxs)("div",{className:"info-item",children:[(0,jsx_runtime.jsx)("span",{className:"label",children:"货币"}),(0,jsx_runtime.jsx)("span",{className:"value",children:"AUD"})]}),(0,jsx_runtime.jsxs)("div",{className:"info-item",children:[(0,jsx_runtime.jsx)("span",{className:"label",children:"商品套数"}),(0,jsx_runtime.jsx)("span",{className:"value",children:"10"})]}),(0,jsx_runtime.jsxs)("div",{className:"info-item",children:[(0,jsx_runtime.jsx)("span",{className:"label",children:"重量(kg)"}),(0,jsx_runtime.jsx)("span",{className:"value",children:"1000"})]}),(0,jsx_runtime.jsxs)("div",{className:"info-item",children:[(0,jsx_runtime.jsx)("span",{className:"label",children:"体积(cbm)"}),(0,jsx_runtime.jsx)("span",{className:"value",children:"32 立方米"})]}),(0,jsx_runtime.jsxs)("div",{className:"info-item",children:[(0,jsx_runtime.jsx)("span",{className:"label",children:"单价"}),(0,jsx_runtime.jsx)("span",{className:"value highlight",children:"34 AUD"})]}),(0,jsx_runtime.jsxs)("div",{className:"info-item",children:[(0,jsx_runtime.jsx)("span",{className:"label",children:"货值"}),(0,jsx_runtime.jsx)("span",{className:"value highlight",children:"340 AUD"})]})]})]})})]},"container1"),(0,jsx_runtime.jsxs)(StyledPanel,{header:(0,jsx_runtime.jsx)("span",{className:"title",children:"货柜 2 信息"}),children:[(0,jsx_runtime.jsx)(StyledCard,{bordered:!1,children:(0,jsx_runtime.jsxs)(flex.A,{justify:"space-between",align:"start",children:[(0,jsx_runtime.jsxs)(StyledDescriptions,{column:1,bordered:!1,children:[(0,jsx_runtime.jsx)(descriptions.A.Item,{label:"柜型",children:"20 GP"}),(0,jsx_runtime.jsx)(descriptions.A.Item,{label:"货物总重(kg)",children:"16000"}),(0,jsx_runtime.jsx)(descriptions.A.Item,{label:"装柜地址",children:"河南省 郑州市 郑东新区空港区富航路7号"}),(0,jsx_runtime.jsx)(descriptions.A.Item,{label:"联系人",children:"张三"}),(0,jsx_runtime.jsx)(descriptions.A.Item,{label:"联系电话",children:"+86 13611112222"})]}),(0,jsx_runtime.jsx)(es_button.Ay,{type:"text",icon:(0,jsx_runtime.jsx)(EditOutlined.A,{})})]})}),(0,jsx_runtime.jsx)(divider.A,{style:{margin:`${theme.YK.md} 0`}}),(0,jsx_runtime.jsx)(SectionTitle,{level:5,children:"货柜2内商品信息（共 2 套商品）"}),(0,jsx_runtime.jsx)(list.A,{itemLayout:"vertical",dataSource:[{name:"桌子",englishName:"table",quantity:10,packageCount:2,material:"木质",volume:"32 立方米",price:"34 AUD",value:"340 AUD"},{name:"椅子",englishName:"chair",quantity:10,packageCount:2,material:"木质",volume:"32 立方米",price:"34 AUD",value:"340 AUD"}],renderItem:item=>(0,jsx_runtime.jsxs)(ProductItem,{children:[(0,jsx_runtime.jsxs)("div",{className:"product-header",children:[(0,jsx_runtime.jsxs)("div",{className:"left-section",children:[(0,jsx_runtime.jsx)("div",{className:"product-title",children:(0,jsx_runtime.jsx)("span",{className:"product-id",children:"商品 1"})}),(0,jsx_runtime.jsxs)("div",{className:"name-group",children:[(0,jsx_runtime.jsxs)("div",{className:"name-item",children:[(0,jsx_runtime.jsx)("span",{className:"label",children:"中文品名："}),(0,jsx_runtime.jsx)("span",{className:"value",children:item.name})]}),(0,jsx_runtime.jsxs)("div",{className:"name-item",children:[(0,jsx_runtime.jsx)("span",{className:"label",children:"英文品名："}),(0,jsx_runtime.jsx)("span",{className:"value",children:item.englishName})]})]})]}),(0,jsx_runtime.jsx)(es_button.Ay,{className:"edit-button",type:"text",icon:(0,jsx_runtime.jsx)(EditOutlined.A,{}),size:"small"})]}),(0,jsx_runtime.jsxs)("div",{className:"product-content",children:[(0,jsx_runtime.jsxs)("div",{className:"info-item",children:[(0,jsx_runtime.jsx)("span",{className:"label",children:"箱号"}),(0,jsx_runtime.jsx)("span",{className:"value",children:"12312ASA"})]}),(0,jsx_runtime.jsxs)("div",{className:"info-item",children:[(0,jsx_runtime.jsx)("span",{className:"label",children:"箱数"}),(0,jsx_runtime.jsx)("span",{className:"value",children:"2"})]}),(0,jsx_runtime.jsxs)("div",{className:"info-item",children:[(0,jsx_runtime.jsx)("span",{className:"label",children:"商品材质"}),(0,jsx_runtime.jsx)("span",{className:"value",children:"木质"})]}),(0,jsx_runtime.jsxs)("div",{className:"info-item",children:[(0,jsx_runtime.jsx)("span",{className:"label",children:"货币"}),(0,jsx_runtime.jsx)("span",{className:"value",children:"AUD"})]}),(0,jsx_runtime.jsxs)("div",{className:"info-item",children:[(0,jsx_runtime.jsx)("span",{className:"label",children:"商品套数"}),(0,jsx_runtime.jsx)("span",{className:"value",children:"10"})]}),(0,jsx_runtime.jsxs)("div",{className:"info-item",children:[(0,jsx_runtime.jsx)("span",{className:"label",children:"重量(kg)"}),(0,jsx_runtime.jsx)("span",{className:"value",children:"1000"})]}),(0,jsx_runtime.jsxs)("div",{className:"info-item",children:[(0,jsx_runtime.jsx)("span",{className:"label",children:"体积(cbm)"}),(0,jsx_runtime.jsx)("span",{className:"value",children:"32 立方米"})]}),(0,jsx_runtime.jsxs)("div",{className:"info-item",children:[(0,jsx_runtime.jsx)("span",{className:"label",children:"单价"}),(0,jsx_runtime.jsx)("span",{className:"value highlight",children:"34 AUD"})]}),(0,jsx_runtime.jsxs)("div",{className:"info-item",children:[(0,jsx_runtime.jsx)("span",{className:"label",children:"货值"}),(0,jsx_runtime.jsx)("span",{className:"value highlight",children:"340 AUD"})]})]})]})})]},"container2"),(0,jsx_runtime.jsxs)(StyledPanel,{header:(0,jsx_runtime.jsx)("span",{className:"title",children:"货物入库状态"}),children:[(0,jsx_runtime.jsx)(StyledCard,{title:"入库状态",bordered:!1,children:(0,jsx_runtime.jsxs)(row.A,{gutter:[24,16],children:[(0,jsx_runtime.jsx)(col.A,{span:12,children:(0,jsx_runtime.jsx)(statistic.A,{title:"总箱数",value:32,valueStyle:{fontSize:"16px"}})}),(0,jsx_runtime.jsx)(col.A,{span:12,children:(0,jsx_runtime.jsx)(statistic.A,{title:"已入库箱数",value:1,valueStyle:{color:"#52c41a",fontSize:"16px"}})}),(0,jsx_runtime.jsx)(col.A,{span:12,children:(0,jsx_runtime.jsx)(statistic.A,{title:"待入库箱数",value:31,valueStyle:{color:"#fa8c16",fontSize:"16px"}})}),(0,jsx_runtime.jsx)(col.A,{span:12,children:(0,jsx_runtime.jsx)(statistic.A,{title:"入库异常箱数",value:0,valueStyle:{color:"#ff4d4f",fontSize:"16px"}})})]})}),(0,jsx_runtime.jsx)(StyledCard,{title:"入库记录",bordered:!1,style:{marginTop:theme.YK.md},children:(0,jsx_runtime.jsx)(timeline.A,{items:[{dot:(0,jsx_runtime.jsx)(badge.A,{status:"success"}),children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(BookingDetails_Text,{type:"secondary",style:{display:"block",fontSize:"12px"},children:"2024-01-15 14:30:00"}),(0,jsx_runtime.jsx)(BookingDetails_Text,{children:"货物已入库 - 箱数：1"})]})},{children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(BookingDetails_Text,{type:"secondary",style:{display:"block",fontSize:"12px"},children:"2024-01-15 10:20:00"}),(0,jsx_runtime.jsx)(BookingDetails_Text,{children:"货物已到达仓库，等待入库"})]})},{children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(BookingDetails_Text,{type:"secondary",style:{display:"block",fontSize:"12px"},children:"2024-01-14 16:45:00"}),(0,jsx_runtime.jsx)(BookingDetails_Text,{children:"货物运输中"})]})}]})})]},"warehouse"),(0,jsx_runtime.jsx)(StyledPanel,{header:(0,jsx_runtime.jsx)("span",{className:"title",children:"税单"}),children:(0,jsx_runtime.jsx)(StyledCard,{title:"税费信息",bordered:!1,children:(0,jsx_runtime.jsxs)(row.A,{gutter:[24,16],children:[(0,jsx_runtime.jsx)(col.A,{span:12,children:(0,jsx_runtime.jsx)(statistic.A,{title:"商品总价值",value:35435,suffix:"AUD",valueStyle:{fontSize:"16px"}})}),(0,jsx_runtime.jsx)(col.A,{span:12,children:(0,jsx_runtime.jsx)(statistic.A,{title:"GST税率",value:10,suffix:"%",valueStyle:{fontSize:"16px"}})}),(0,jsx_runtime.jsx)(col.A,{span:12,children:(0,jsx_runtime.jsx)(statistic.A,{title:"应缴GST税费",value:3543.5,suffix:"AUD",valueStyle:{color:"#1890ff",fontWeight:500,fontSize:"16px"}})}),(0,jsx_runtime.jsx)(col.A,{span:12,children:(0,jsx_runtime.jsx)(statistic.A,{title:"关税税率",value:5,suffix:"%",valueStyle:{fontSize:"16px"}})}),(0,jsx_runtime.jsx)(col.A,{span:12,children:(0,jsx_runtime.jsx)(statistic.A,{title:"应缴关税",value:1771.75,suffix:"AUD",valueStyle:{color:"#1890ff",fontWeight:500,fontSize:"16px"}})}),(0,jsx_runtime.jsx)(col.A,{span:12,children:(0,jsx_runtime.jsx)(statistic.A,{title:"总税费",value:5315.25,suffix:"AUD",valueStyle:{color:"#1890ff",fontWeight:500,fontSize:"16px"}})})]})})},"tax")]})]}),(0,jsx_runtime.jsx)(modal.A,{title:"查看哨头面单",open:isLabelModalVisible,onCancel:()=>{setIsLabelModalVisible(!1)},footer:null,width:450,centered:!0,children:(0,jsx_runtime.jsxs)("div",{ref:labelContentRef,className:"shipping-label",children:[(0,jsx_runtime.jsxs)(card.A,{className:"label-card",children:[(0,jsx_runtime.jsxs)("div",{className:"header-section",children:[(0,jsx_runtime.jsxs)("div",{className:"company-info",children:[(0,jsx_runtime.jsx)("img",{src:"/logo.svg",alt:"Logo",className:"logo"}),(0,jsx_runtime.jsx)(BookingDetails_Text,{className:"company-name",children:"LogistiEXPRESS"})]}),(0,jsx_runtime.jsxs)("div",{className:"barcode-container",children:[(0,jsx_runtime.jsx)("img",{ref:barcodeRef,alt:"Barcode",className:"barcode"}),(0,jsx_runtime.jsxs)("div",{className:"code-info",children:[(0,jsx_runtime.jsx)(BookingDetails_Text,{className:"tracking-number",children:"AU1000888"}),(0,jsx_runtime.jsx)(BookingDetails_Text,{className:"location-tag",children:"SYD"})]})]})]}),(0,jsx_runtime.jsxs)("div",{className:"content-section",children:[(0,jsx_runtime.jsx)("div",{className:"section-title",children:"Consignee Information"}),(0,jsx_runtime.jsxs)("div",{className:"info-list",children:[(0,jsx_runtime.jsx)(BookingDetails_Text,{children:"HePinyu"}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)(BookingDetails_Text,{children:"25 Lombard St"}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)(BookingDetails_Text,{children:"FAIRFIELD NSW 2165"}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)(BookingDetails_Text,{children:"Ph: 0406222886"}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)(BookingDetails_Text,{children:"ID: 100000"})]}),(0,jsx_runtime.jsxs)("div",{className:"details-grid",children:[(0,jsx_runtime.jsxs)("div",{className:"detail-item",children:[(0,jsx_runtime.jsx)(BookingDetails_Text,{className:"label",children:"PCS"}),(0,jsx_runtime.jsx)(BookingDetails_Text,{className:"value",children:"1"})]}),(0,jsx_runtime.jsxs)("div",{className:"detail-item",children:[(0,jsx_runtime.jsx)(BookingDetails_Text,{className:"label",children:"Dead weight"}),(0,jsx_runtime.jsx)(BookingDetails_Text,{className:"value",children:"14.25 kg"})]}),(0,jsx_runtime.jsxs)("div",{className:"detail-item",children:[(0,jsx_runtime.jsx)(BookingDetails_Text,{className:"label",children:"Originate"}),(0,jsx_runtime.jsx)(BookingDetails_Text,{className:"value",children:"CAN"})]})]}),(0,jsx_runtime.jsx)(StyledDivider,{style:{margin:`${theme.YK.md} 0`}}),(0,jsx_runtime.jsx)("div",{className:"section-title",children:"Return Address"}),(0,jsx_runtime.jsxs)("div",{className:"info-list",children:[(0,jsx_runtime.jsx)(BookingDetails_Text,{children:"56a ANZAC ST"}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)(BookingDetails_Text,{children:"Chullora NSW 2190"})]})]}),(0,jsx_runtime.jsx)("div",{className:"signature-section",children:(0,jsx_runtime.jsxs)(row.A,{gutter:16,children:[(0,jsx_runtime.jsx)(col.A,{span:12,children:(0,jsx_runtime.jsxs)("div",{className:"signature-box",children:[(0,jsx_runtime.jsx)("div",{className:"box-label",children:"Signature"}),(0,jsx_runtime.jsx)("div",{className:"signature-line"})]})}),(0,jsx_runtime.jsx)(col.A,{span:12,children:(0,jsx_runtime.jsxs)("div",{className:"signature-box",children:[(0,jsx_runtime.jsx)("div",{className:"box-label",children:"Delivery Date"}),(0,jsx_runtime.jsx)("div",{className:"signature-line"})]})})]})}),(0,jsx_runtime.jsx)("div",{className:"qr-section",children:(0,jsx_runtime.jsx)("img",{ref:qrCodeRef,alt:"QR Code",className:"qr-code"})})]}),(0,jsx_runtime.jsx)(es_alert.A,{message:"请务必下载哨头面单，打印并贴于每件货物外箱；如缺哨头面单，将无法正常入仓。",type:"warning",showIcon:!0,className:"warning-alert"}),(0,jsx_runtime.jsx)(BookingDetails_Text,{className:"note-text",children:"Attempt signature then ATL + 2 photos (NO ATL at Apartment or unit)"}),(0,jsx_runtime.jsxs)(flex.A,{className:"action-buttons",justify:"space-between",children:[(0,jsx_runtime.jsx)(es_button.Ay,{type:"primary",icon:(0,jsx_runtime.jsx)(DownloadOutlined.A,{}),onClick:async()=>{if(labelContentRef.current)try{const modalHeader=document.querySelector(".ant-modal-header"),actionButtons=labelContentRef.current.querySelector(".action-buttons");modalHeader&&modalHeader.classList.add("hidden"),actionButtons&&actionButtons.classList.add("hidden");const canvas=await html2canvas_default()(labelContentRef.current,{scale:2,backgroundColor:"#ffffff"});modalHeader&&modalHeader.classList.remove("hidden"),actionButtons&&actionButtons.classList.remove("hidden");const dataUrl=canvas.toDataURL("image/png"),link=document.createElement("a");link.download=`shipping-label-${bookingNumber}.png`,link.href=dataUrl,link.click(),message.Ay.success("标签下载成功")}catch(error){message.Ay.error("下载失败，请重试")}},children:"下载面单"}),(0,jsx_runtime.jsx)(es_button.Ay,{type:"primary",icon:(0,jsx_runtime.jsx)(PrinterOutlined.A,{}),onClick:()=>{window.print()},children:"打印面单"})]})]})})]})},StoryLayout=styled_components_browser_esm.Ay.div`
  max-width: 375px;
  margin: 0 auto;
  border: 1px solid #eee;
  min-height: 100vh;
  background: white;
`,SeaFreightFullContainer_stories={title:"页面/海运整柜",parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"}},decorators:[Story=>(0,jsx_runtime.jsx)(StoryLayout,{children:(0,jsx_runtime.jsx)(Story,{})})]},HomePage={name:"首页",render:()=>(0,jsx_runtime.jsx)(Home.A,{})},ShippingRoutePage={name:"航线选择",render:()=>(0,jsx_runtime.jsx)(ShippingRoute.A,{onBack:()=>console.log("Back clicked"),onNext:values=>console.log("Next clicked with values:",values)})},CargoDetailsPage={name:"货物信息",render:()=>(0,jsx_runtime.jsx)(CargoDetails.A,{onBack:()=>console.log("Back clicked"),onNext:values=>console.log("Next clicked with values:",values)})},OrderSummaryPage={name:"订单确认",render:()=>(0,jsx_runtime.jsx)(OrderSummary.A,{onBack:()=>console.log("Back clicked"),onNext:()=>console.log("Next clicked")})},BookingSuccessPage={name:"哨头号创建成功",render:()=>(0,jsx_runtime.jsx)(pages_BookingSuccess,{onEdit:()=>console.log("Edit clicked"),onNext:()=>console.log("Next clicked"),bookingData:{bookingNumber:"UE-006-2024",origin:"中国-郑州",departure:"中国-广州",destination:"澳大利亚-悉尼",warehouseAddress:"澳大利亚-悉尼"}})},CargoInputPage={name:"录入商品信息",render:()=>(0,jsx_runtime.jsx)(pages_CargoInput,{bookingNumber:"AU4383",onCancel:()=>console.log("Cancel clicked"),onSave:values=>console.log("Save clicked with values:",values)})},SpecialHandlingPage={name:"特处理",render:()=>(0,jsx_runtime.jsx)(pages_SpecialHandling,{onBack:()=>console.log("Back clicked")})},BookingDetailsPage={name:"查看详情",render:()=>(0,jsx_runtime.jsx)(pages_BookingDetails,{bookingNumber:"AU4363",onBack:()=>console.log("Back clicked")})};HomePage.parameters={...HomePage.parameters,docs:{...HomePage.parameters?.docs,source:{originalSource:"{\n  name: '首页',\n  render: () => <Home />\n}",...HomePage.parameters?.docs?.source}}},ShippingRoutePage.parameters={...ShippingRoutePage.parameters,docs:{...ShippingRoutePage.parameters?.docs,source:{originalSource:"{\n  name: '航线选择',\n  render: () => <ShippingRoute onBack={() => console.log('Back clicked')} onNext={values => console.log('Next clicked with values:', values)} />\n}",...ShippingRoutePage.parameters?.docs?.source}}},CargoDetailsPage.parameters={...CargoDetailsPage.parameters,docs:{...CargoDetailsPage.parameters?.docs,source:{originalSource:"{\n  name: '货物信息',\n  render: () => <CargoDetails onBack={() => console.log('Back clicked')} onNext={values => console.log('Next clicked with values:', values)} />\n}",...CargoDetailsPage.parameters?.docs?.source}}},OrderSummaryPage.parameters={...OrderSummaryPage.parameters,docs:{...OrderSummaryPage.parameters?.docs,source:{originalSource:"{\n  name: '订单确认',\n  render: () => <OrderSummary onBack={() => console.log('Back clicked')} onNext={() => console.log('Next clicked')} />\n}",...OrderSummaryPage.parameters?.docs?.source}}},BookingSuccessPage.parameters={...BookingSuccessPage.parameters,docs:{...BookingSuccessPage.parameters?.docs,source:{originalSource:"{\n  name: '哨头号创建成功',\n  render: () => <BookingSuccess onEdit={() => console.log('Edit clicked')} onNext={() => console.log('Next clicked')} bookingData={{\n    bookingNumber: 'UE-006-2024',\n    origin: '中国-郑州',\n    departure: '中国-广州',\n    destination: '澳大利亚-悉尼',\n    warehouseAddress: '澳大利亚-悉尼'\n  }} />\n}",...BookingSuccessPage.parameters?.docs?.source}}},CargoInputPage.parameters={...CargoInputPage.parameters,docs:{...CargoInputPage.parameters?.docs,source:{originalSource:"{\n  name: '录入商品信息',\n  render: () => <CargoInput bookingNumber=\"AU4383\" onCancel={() => console.log('Cancel clicked')} onSave={values => console.log('Save clicked with values:', values)} />\n}",...CargoInputPage.parameters?.docs?.source}}},SpecialHandlingPage.parameters={...SpecialHandlingPage.parameters,docs:{...SpecialHandlingPage.parameters?.docs,source:{originalSource:"{\n  name: '特处理',\n  render: () => <SpecialHandling onBack={() => console.log('Back clicked')} />\n}",...SpecialHandlingPage.parameters?.docs?.source}}},BookingDetailsPage.parameters={...BookingDetailsPage.parameters,docs:{...BookingDetailsPage.parameters?.docs,source:{originalSource:"{\n  name: '查看详情',\n  render: () => <BookingDetails bookingNumber=\"AU4363\" onBack={() => console.log('Back clicked')} />\n}",...BookingDetailsPage.parameters?.docs?.source}}};const __namedExportsOrder=["HomePage","ShippingRoutePage","CargoDetailsPage","OrderSummaryPage","BookingSuccessPage","CargoInputPage","SpecialHandlingPage","BookingDetailsPage"]}}]);
//# sourceMappingURL=stories-pages-SeaFreightFullContainer-stories.093c4335.iframe.bundle.js.map