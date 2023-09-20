import{r as d,b as N,j as e,c as g,a as c,bt as u,bu as p,d as C,B as f,bW as y}from"./index.2c1de01e.js";import{C as r}from"./common.module.e5e57554.js";import{U as T,F as v}from"./index.3544f977.js";import{M as h}from"./index.4b5a6ee9.js";import"./formModel.7e9be4b9.js";import"./DateRangePicker.c0d7081d.js";import"./index.ba8e3ddb.js";import"./react-render.54adfee5.js";/**
 * tdesign v1.2.4
 * (c) 2023 tdesign
 * @license MIT
 */var F=T;const w="_formContainer_147ra_1",A="_row_147ra_10",E="_inputText_147ra_13",H="_titleText_147ra_16",I="_dateCol_147ra_21";var t={formContainer:w,row:A,inputText:E,titleText:H,dateCol:I};const{FormItem:i}=v,b={eventhubName:"",file:[]};var L=d.exports.memo(()=>{const x=N(),l=d.exports.useRef(),_=s=>{var a,o;if(s.validateResult===!0){console.log("form: ",(o=(a=l.current)==null?void 0:a.getFieldsValue)==null?void 0:o.call(a,!0));const n=s.fields;console.log("p: ",n),x(y(n)).then(m=>{console.log("resp: ",m),m.payload.code===0?h.info("submit successfully!"):h.error("Failed to send file")})}};return e("div",{className:g(r.pageWithColor,r.pageWithPadding,r.pageWithSize),children:e("div",{className:t.formContainer,children:c(v,{ref:l,onSubmit:_,labelWidth:100,labelAlign:"top",children:[e("div",{className:t.titleBox,children:e("div",{className:t.titleText,children:"Send File to EventHub"})}),e(u,{className:t.row,children:e(p,{children:e(i,{label:"EventHub Name",name:"eventhubName",initialData:b.eventhubName,rules:[{required:!0,message:"EventHub Name is required",type:"error"}],children:e(C,{className:t.inputText,placeholder:"please input EventHub Name"})})})}),e(u,{className:t.row,children:e(p,{children:e(i,{label:"File",name:"file",initialData:b.file,rules:[{required:!0,message:"File is required",type:"error"}],children:e(F,{tips:"please upload file to EventHub",autoUpload:!1,multiple:!1})})})}),c(i,{children:[e(f,{type:"submit",theme:"primary",children:"submit"}),e(f,{type:"reset",style:{marginLeft:12},children:"reset"})]})]})})})});export{L as default};
