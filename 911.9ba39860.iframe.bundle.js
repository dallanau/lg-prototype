"use strict";(self.webpackChunklg_prototype=self.webpackChunklg_prototype||[]).push([[911],{"./node_modules/antd/es/style/motion/slide.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{YU:()=>slideDownOut,_j:()=>initSlideMotion,nP:()=>slideDownIn,ox:()=>slideUpIn,vR:()=>slideUpOut});var _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@ant-design/cssinjs/es/index.js"),_motion__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/antd/es/style/motion/motion.js");const slideUpIn=new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.Mo("antSlideUpIn",{"0%":{transform:"scaleY(0.8)",transformOrigin:"0% 0%",opacity:0},"100%":{transform:"scaleY(1)",transformOrigin:"0% 0%",opacity:1}}),slideUpOut=new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.Mo("antSlideUpOut",{"0%":{transform:"scaleY(1)",transformOrigin:"0% 0%",opacity:1},"100%":{transform:"scaleY(0.8)",transformOrigin:"0% 0%",opacity:0}}),slideDownIn=new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.Mo("antSlideDownIn",{"0%":{transform:"scaleY(0.8)",transformOrigin:"100% 100%",opacity:0},"100%":{transform:"scaleY(1)",transformOrigin:"100% 100%",opacity:1}}),slideDownOut=new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.Mo("antSlideDownOut",{"0%":{transform:"scaleY(1)",transformOrigin:"100% 100%",opacity:1},"100%":{transform:"scaleY(0.8)",transformOrigin:"100% 100%",opacity:0}}),slideLeftIn=new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.Mo("antSlideLeftIn",{"0%":{transform:"scaleX(0.8)",transformOrigin:"0% 0%",opacity:0},"100%":{transform:"scaleX(1)",transformOrigin:"0% 0%",opacity:1}}),slideLeftOut=new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.Mo("antSlideLeftOut",{"0%":{transform:"scaleX(1)",transformOrigin:"0% 0%",opacity:1},"100%":{transform:"scaleX(0.8)",transformOrigin:"0% 0%",opacity:0}}),slideRightIn=new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.Mo("antSlideRightIn",{"0%":{transform:"scaleX(0.8)",transformOrigin:"100% 0%",opacity:0},"100%":{transform:"scaleX(1)",transformOrigin:"100% 0%",opacity:1}}),slideRightOut=new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.Mo("antSlideRightOut",{"0%":{transform:"scaleX(1)",transformOrigin:"100% 0%",opacity:1},"100%":{transform:"scaleX(0.8)",transformOrigin:"100% 0%",opacity:0}}),slideMotion={"slide-up":{inKeyframes:slideUpIn,outKeyframes:slideUpOut},"slide-down":{inKeyframes:slideDownIn,outKeyframes:slideDownOut},"slide-left":{inKeyframes:slideLeftIn,outKeyframes:slideLeftOut},"slide-right":{inKeyframes:slideRightIn,outKeyframes:slideRightOut}},initSlideMotion=(token,motionName)=>{const{antCls}=token,motionCls=`${antCls}-${motionName}`,{inKeyframes,outKeyframes}=slideMotion[motionName];return[(0,_motion__WEBPACK_IMPORTED_MODULE_1__.b)(motionCls,inKeyframes,outKeyframes,token.motionDurationMid),{[`\n      ${motionCls}-enter,\n      ${motionCls}-appear\n    `]:{transform:"scale(0)",transformOrigin:"0% 0%",opacity:0,animationTimingFunction:token.motionEaseOutQuint,"&-prepare":{transform:"scale(1)"}},[`${motionCls}-leave`]:{animationTimingFunction:token.motionEaseInQuint}}]}},"./node_modules/rc-overflow/es/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>rc_overflow_es});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),es=__webpack_require__("./node_modules/rc-resize-observer/es/index.js"),useLayoutEffect=__webpack_require__("./node_modules/rc-util/es/hooks/useLayoutEffect.js"),_excluded=["prefixCls","invalidate","item","renderItem","responsive","responsiveDisabled","registerSize","itemKey","className","style","children","display","order","component"];function InternalItem(props,ref){var prefixCls=props.prefixCls,invalidate=props.invalidate,item=props.item,renderItem=props.renderItem,responsive=props.responsive,responsiveDisabled=props.responsiveDisabled,registerSize=props.registerSize,itemKey=props.itemKey,className=props.className,style=props.style,children=props.children,display=props.display,order=props.order,_props$component=props.component,Component=void 0===_props$component?"div":_props$component,restProps=(0,objectWithoutProperties.A)(props,_excluded),mergedHidden=responsive&&!display;function internalRegisterSize(width){registerSize(itemKey,width)}react.useEffect((function(){return function(){internalRegisterSize(null)}}),[]);var overflowStyle,childNode=renderItem&&undefined!==item?renderItem(item,{index:order}):children;invalidate||(overflowStyle={opacity:mergedHidden?0:1,height:mergedHidden?0:undefined,overflowY:mergedHidden?"hidden":undefined,order:responsive?order:undefined,pointerEvents:mergedHidden?"none":undefined,position:mergedHidden?"absolute":undefined});var overflowProps={};mergedHidden&&(overflowProps["aria-hidden"]=!0);var itemNode=react.createElement(Component,(0,esm_extends.A)({className:classnames_default()(!invalidate&&prefixCls,className),style:(0,objectSpread2.A)((0,objectSpread2.A)({},overflowStyle),style)},overflowProps,restProps,{ref}),childNode);return responsive&&(itemNode=react.createElement(es.A,{onResize:function onResize(_ref){internalRegisterSize(_ref.offsetWidth)},disabled:responsiveDisabled},itemNode)),itemNode}var Item=react.forwardRef(InternalItem);Item.displayName="Item";const es_Item=Item;var useEvent=__webpack_require__("./node_modules/rc-util/es/hooks/useEvent.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),raf=__webpack_require__("./node_modules/rc-util/es/raf.js");function useBatcher(){var updateFuncRef=react.useRef(null);return function notifyEffectUpdate(callback){updateFuncRef.current||(updateFuncRef.current=[],function channelUpdate(callback){if("undefined"==typeof MessageChannel)(0,raf.A)(callback);else{var channel=new MessageChannel;channel.port1.onmessage=function(){return callback()},channel.port2.postMessage(void 0)}}((function(){(0,react_dom.unstable_batchedUpdates)((function(){updateFuncRef.current.forEach((function(fn){fn()})),updateFuncRef.current=null}))}))),updateFuncRef.current.push(callback)}}function useEffectState(notifyEffectUpdate,defaultValue){var _React$useState=react.useState(defaultValue),_React$useState2=(0,slicedToArray.A)(_React$useState,2),stateValue=_React$useState2[0],setStateValue=_React$useState2[1];return[stateValue,(0,useEvent.A)((function(nextValue){notifyEffectUpdate((function(){setStateValue(nextValue)}))}))]}var OverflowContext=react.createContext(null),RawItem_excluded=["component"],_excluded2=["className"],_excluded3=["className"],InternalRawItem=function InternalRawItem(props,ref){var context=react.useContext(OverflowContext);if(!context){var _props$component=props.component,Component=void 0===_props$component?"div":_props$component,_restProps=(0,objectWithoutProperties.A)(props,RawItem_excluded);return react.createElement(Component,(0,esm_extends.A)({},_restProps,{ref}))}var contextClassName=context.className,restContext=(0,objectWithoutProperties.A)(context,_excluded2),className=props.className,restProps=(0,objectWithoutProperties.A)(props,_excluded3);return react.createElement(OverflowContext.Provider,{value:null},react.createElement(es_Item,(0,esm_extends.A)({ref,className:classnames_default()(contextClassName,className)},restContext,restProps)))},RawItem=react.forwardRef(InternalRawItem);RawItem.displayName="RawItem";const es_RawItem=RawItem;var Overflow_excluded=["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"];function defaultRenderRest(omittedItems){return"+ ".concat(omittedItems.length," ...")}function Overflow(props,ref){var _props$prefixCls=props.prefixCls,prefixCls=void 0===_props$prefixCls?"rc-overflow":_props$prefixCls,_props$data=props.data,data=void 0===_props$data?[]:_props$data,renderItem=props.renderItem,renderRawItem=props.renderRawItem,itemKey=props.itemKey,_props$itemWidth=props.itemWidth,itemWidth=void 0===_props$itemWidth?10:_props$itemWidth,ssr=props.ssr,style=props.style,className=props.className,maxCount=props.maxCount,renderRest=props.renderRest,renderRawRest=props.renderRawRest,suffix=props.suffix,_props$component=props.component,Component=void 0===_props$component?"div":_props$component,itemComponent=props.itemComponent,onVisibleChange=props.onVisibleChange,restProps=(0,objectWithoutProperties.A)(props,Overflow_excluded),fullySSR="full"===ssr,notifyEffectUpdate=useBatcher(),_useEffectState=useEffectState(notifyEffectUpdate,null),_useEffectState2=(0,slicedToArray.A)(_useEffectState,2),containerWidth=_useEffectState2[0],setContainerWidth=_useEffectState2[1],mergedContainerWidth=containerWidth||0,_useEffectState3=useEffectState(notifyEffectUpdate,new Map),_useEffectState4=(0,slicedToArray.A)(_useEffectState3,2),itemWidths=_useEffectState4[0],setItemWidths=_useEffectState4[1],_useEffectState5=useEffectState(notifyEffectUpdate,0),_useEffectState6=(0,slicedToArray.A)(_useEffectState5,2),prevRestWidth=_useEffectState6[0],setPrevRestWidth=_useEffectState6[1],_useEffectState7=useEffectState(notifyEffectUpdate,0),_useEffectState8=(0,slicedToArray.A)(_useEffectState7,2),restWidth=_useEffectState8[0],setRestWidth=_useEffectState8[1],_useEffectState9=useEffectState(notifyEffectUpdate,0),_useEffectState10=(0,slicedToArray.A)(_useEffectState9,2),suffixWidth=_useEffectState10[0],setSuffixWidth=_useEffectState10[1],_useState=(0,react.useState)(null),_useState2=(0,slicedToArray.A)(_useState,2),suffixFixedStart=_useState2[0],setSuffixFixedStart=_useState2[1],_useState3=(0,react.useState)(null),_useState4=(0,slicedToArray.A)(_useState3,2),displayCount=_useState4[0],setDisplayCount=_useState4[1],mergedDisplayCount=react.useMemo((function(){return null===displayCount&&fullySSR?Number.MAX_SAFE_INTEGER:displayCount||0}),[displayCount,containerWidth]),_useState5=(0,react.useState)(!1),_useState6=(0,slicedToArray.A)(_useState5,2),restReady=_useState6[0],setRestReady=_useState6[1],itemPrefixCls="".concat(prefixCls,"-item"),mergedRestWidth=Math.max(prevRestWidth,restWidth),isResponsive="responsive"===maxCount,shouldResponsive=data.length&&isResponsive,invalidate="invalidate"===maxCount,showRest=shouldResponsive||"number"==typeof maxCount&&data.length>maxCount,mergedData=(0,react.useMemo)((function(){var items=data;return shouldResponsive?items=null===containerWidth&&fullySSR?data:data.slice(0,Math.min(data.length,mergedContainerWidth/itemWidth)):"number"==typeof maxCount&&(items=data.slice(0,maxCount)),items}),[data,itemWidth,containerWidth,maxCount,shouldResponsive]),omittedItems=(0,react.useMemo)((function(){return shouldResponsive?data.slice(mergedDisplayCount+1):data.slice(mergedData.length)}),[data,mergedData,shouldResponsive,mergedDisplayCount]),getKey=(0,react.useCallback)((function(item,index){var _ref;return"function"==typeof itemKey?itemKey(item):null!==(_ref=itemKey&&(null==item?void 0:item[itemKey]))&&void 0!==_ref?_ref:index}),[itemKey]),mergedRenderItem=(0,react.useCallback)(renderItem||function(item){return item},[renderItem]);function updateDisplayCount(count,suffixFixedStartVal,notReady){(displayCount!==count||void 0!==suffixFixedStartVal&&suffixFixedStartVal!==suffixFixedStart)&&(setDisplayCount(count),notReady||(setRestReady(count<data.length-1),null==onVisibleChange||onVisibleChange(count)),void 0!==suffixFixedStartVal&&setSuffixFixedStart(suffixFixedStartVal))}function registerSize(key,width){setItemWidths((function(origin){var clone=new Map(origin);return null===width?clone.delete(key):clone.set(key,width),clone}))}function getItemWidth(index){return itemWidths.get(getKey(mergedData[index],index))}(0,useLayoutEffect.A)((function(){if(mergedContainerWidth&&"number"==typeof mergedRestWidth&&mergedData){var totalWidth=suffixWidth,len=mergedData.length,lastIndex=len-1;if(!len)return void updateDisplayCount(0,null);for(var i=0;i<len;i+=1){var currentItemWidth=getItemWidth(i);if(fullySSR&&(currentItemWidth=currentItemWidth||0),void 0===currentItemWidth){updateDisplayCount(i-1,void 0,!0);break}if(totalWidth+=currentItemWidth,0===lastIndex&&totalWidth<=mergedContainerWidth||i===lastIndex-1&&totalWidth+getItemWidth(lastIndex)<=mergedContainerWidth){updateDisplayCount(lastIndex,null);break}if(totalWidth+mergedRestWidth>mergedContainerWidth){updateDisplayCount(i-1,totalWidth-currentItemWidth-suffixWidth+restWidth);break}}suffix&&getItemWidth(0)+suffixWidth>mergedContainerWidth&&setSuffixFixedStart(null)}}),[mergedContainerWidth,itemWidths,restWidth,suffixWidth,getKey,mergedData]);var displayRest=restReady&&!!omittedItems.length,suffixStyle={};null!==suffixFixedStart&&shouldResponsive&&(suffixStyle={position:"absolute",left:suffixFixedStart,top:0});var itemSharedProps={prefixCls:itemPrefixCls,responsive:shouldResponsive,component:itemComponent,invalidate},internalRenderItemNode=renderRawItem?function(item,index){var key=getKey(item,index);return react.createElement(OverflowContext.Provider,{key,value:(0,objectSpread2.A)((0,objectSpread2.A)({},itemSharedProps),{},{order:index,item,itemKey:key,registerSize,display:index<=mergedDisplayCount})},renderRawItem(item,index))}:function(item,index){var key=getKey(item,index);return react.createElement(es_Item,(0,esm_extends.A)({},itemSharedProps,{order:index,key,item,renderItem:mergedRenderItem,itemKey:key,registerSize,display:index<=mergedDisplayCount}))},restContextProps={order:displayRest?mergedDisplayCount:Number.MAX_SAFE_INTEGER,className:"".concat(itemPrefixCls,"-rest"),registerSize:function registerOverflowSize(_,width){setRestWidth(width),setPrevRestWidth(restWidth)},display:displayRest},mergedRenderRest=renderRest||defaultRenderRest,restNode=renderRawRest?react.createElement(OverflowContext.Provider,{value:(0,objectSpread2.A)((0,objectSpread2.A)({},itemSharedProps),restContextProps)},renderRawRest(omittedItems)):react.createElement(es_Item,(0,esm_extends.A)({},itemSharedProps,restContextProps),"function"==typeof mergedRenderRest?mergedRenderRest(omittedItems):mergedRenderRest),overflowNode=react.createElement(Component,(0,esm_extends.A)({className:classnames_default()(!invalidate&&prefixCls,className),style,ref},restProps),mergedData.map(internalRenderItemNode),showRest?restNode:null,suffix&&react.createElement(es_Item,(0,esm_extends.A)({},itemSharedProps,{responsive:isResponsive,responsiveDisabled:!shouldResponsive,order:mergedDisplayCount,className:"".concat(itemPrefixCls,"-suffix"),registerSize:function registerSuffixSize(_,width){setSuffixWidth(width)},display:!0,style:suffixStyle}),suffix));return isResponsive?react.createElement(es.A,{onResize:function onOverflowResize(_,element){setContainerWidth(element.clientWidth)},disabled:!shouldResponsive},overflowNode):overflowNode}var ForwardOverflow=react.forwardRef(Overflow);ForwardOverflow.displayName="Overflow",ForwardOverflow.Item=es_RawItem,ForwardOverflow.RESPONSIVE="responsive",ForwardOverflow.INVALIDATE="invalidate";const rc_overflow_es=ForwardOverflow}}]);