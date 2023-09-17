import{r as h,j as e,c as b,a as l,b2 as v,b3 as r,d as B,aO as o,b4 as c,B as F}from"./index.ddc3d799.js";import{C as A}from"./common.module.d7e709a7.js";import{F as D}from"./index.8895e431.js";import{a as m}from"./index.f5d0d3ef.js";import{U as y}from"./index.abfa5a78.js";import{T as g}from"./index.d9c7eae4.js";import{A as s}from"./index.313f3e2f.js";import{M as x}from"./index.8a7925ef.js";import"./formModel.f3d878d0.js";import"./image.a78538a5.js";import"./DateRangePicker.49213930.js";import"./index.ea9018f6.js";import"./useDebounce.0e488d19.js";import"./observe.3c3f0282.js";import"./react-render.035f1873.js";const N="_formContainer_rhia5_1",_="_titleText_rhia5_10",T="_dateCol_rhia5_15";var i={formContainer:N,titleText:_,dateCol:T};const{FormItem:a}=D,{Option:t}=o,{Group:q}=s,u={name:"",type:"",payment:"",partyA:"",partyB:"",signDate:"",effectiveDate:"",endDate:"",remark:"",notary:"",file:[]};var $=h.exports.memo(()=>{const p=h.exports.useRef(),f=d=>{var n,C;d.validateResult===!0&&(console.log("form \u503C",(C=(n=p.current)==null?void 0:n.getFieldsValue)==null?void 0:C.call(n,!0)),x.info("\u63D0\u4EA4\u6210\u529F"))},E=({file:d})=>{console.error(`\u6587\u4EF6 ${d.name} \u4E0A\u4F20\u5931\u8D25`)};return e("div",{className:b(A.pageWithColor),children:e("div",{className:i.formContainer,children:l(D,{ref:p,onSubmit:f,labelWidth:100,labelAlign:"top",children:[e("div",{className:i.titleBox,children:e("div",{className:i.titleText,children:"\u5408\u540C\u4FE1\u606F"})}),l(v,{gutter:[32,24],children:[e(r,{span:6,children:e(a,{label:"\u5408\u540C\u540D\u79F0",name:"name",initialData:u.name,rules:[{required:!0,message:"\u5408\u540C\u540D\u79F0\u5FC5\u586B",type:"error"}],children:e(B,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"})})}),e(r,{span:6,children:e(a,{label:"\u5408\u540C\u7C7B\u578B",name:"type",initialData:u.type,rules:[{required:!0,message:"\u5408\u540C\u7C7B\u578B\u5FC5\u586B",type:"error"}],children:l(o,{placeholder:"\u8BF7\u9009\u62E9\u7C7B\u578B",children:[e(t,{label:"\u7C7B\u578BA",value:"A"},"A"),e(t,{label:"\u7C7B\u578BB",value:"B"},"B"),e(t,{label:"\u7C7B\u578BC",value:"C"},"C")]})})}),e(r,{span:12,children:l(a,{label:"\u5408\u540C\u6536\u4ED8\u7C7B\u578B",name:"payment",initialData:u.payment,rules:[{required:!0}],children:[l(c.Group,{children:[e(c,{value:"0",children:"\u6536\u6B3E"}),e(c,{value:"1",children:"\u4ED8\u6B3E"})]}),e(B,{placeholder:"\u8BF7\u8F93\u5165\u91D1\u989D",style:{width:160}})]})}),e(r,{span:6,children:e(a,{label:"\u7532\u65B9",name:"partyA",initialData:u.partyA,rules:[{required:!0}],children:l(o,{placeholder:"\u8BF7\u9009\u62E9\u7C7B\u578B",children:[e(t,{label:"\u516C\u53F8A",value:"A"},"A"),e(t,{label:"\u516C\u53F8B",value:"B"},"B"),e(t,{label:"\u516C\u53F8C",value:"C"},"C")]})})}),e(r,{span:6,children:e(a,{label:"\u4E59\u65B9",name:"partyB",initialData:u.partyB,rules:[{required:!0}],children:l(o,{value:"A",placeholder:"\u8BF7\u9009\u62E9\u7C7B\u578B",children:[e(t,{label:"\u516C\u53F8A",value:"A"},"A"),e(t,{label:"\u516C\u53F8B",value:"B"},"B"),e(t,{label:"\u516C\u53F8C",value:"C"},"C")]})})}),e(r,{span:6,className:i.dateCol,children:e(a,{label:"\u5408\u540C\u7B7E\u8BA2\u65E5\u671F",name:"signDate",initialData:u.signDate,rules:[{required:!0}],children:e(m,{mode:"date"})})}),e(r,{span:6,className:i.dateCol,children:e(a,{label:"\u5408\u540C\u751F\u6548\u65E5\u671F",name:"effectiveDate",initialData:u.effectiveDate,rules:[{required:!0}],children:e(m,{mode:"date"})})}),e(r,{span:6,className:i.dateCol,children:e(a,{label:"\u5408\u540C\u7ED3\u675F\u65E5\u671F",name:"endDate",initialData:u.endDate,rules:[{required:!0}],children:e(m,{mode:"date"})})}),e(r,{span:6,children:e(a,{label:"\u5408\u540C\u6587\u4EF6",name:"file",initialData:u.file,children:e(y,{onFail:E,tips:"\u8BF7\u4E0A\u4F20pdf\u6587\u4EF6\uFF0C\u5927\u5C0F\u572860M\u4EE5\u5185",action:"//service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"})})})]}),e("div",{className:i.titleBox,children:e("div",{className:i.titleText,children:"\u5176\u4ED6\u4FE1\u606F"})}),e(a,{label:"\u5907\u6CE8",name:"remark",initialData:u.remark,children:e(g,{placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"})}),e(a,{label:"\u516C\u8BC1\u4EBA",name:"notary",initialData:u.notary,children:l(q,{children:[e(s,{children:"D"}),e(s,{children:"S"}),e(s,{children:"+"})]})}),l(a,{children:[e(F,{type:"submit",theme:"primary",children:"\u63D0\u4EA4"}),e(F,{type:"reset",style:{marginLeft:12},children:"\u91CD\u7F6E"})]})]})})})});export{$ as default};
