import{r as m,e as _,bR as v,b as I,bS as A,bT as D,j as e,c as N,a as c,bs as T,bt as i,d as l,B as b,bU as S}from"./index.5d2473c0.js";import{C as F}from"./common.module.e5e57554.js";import{F as x}from"./index.4412805a.js";import{M as P}from"./index.ced0b3c4.js";import"./formModel.826f5022.js";import"./DateRangePicker.510e6887.js";import"./index.fc288b5f.js";import"./react-render.11a037e2.js";const R="_formContainer_rhia5_1",B="_titleText_rhia5_10",j="_dateCol_rhia5_15";var t={formContainer:R,titleText:B,dateCol:j};const{FormItem:a}=x,n={name:"",type:"",host:"",username:""};var k=m.exports.memo(()=>{var u;const o=m.exports.useRef(),y=_(v),d=I(),{id:p}=A(),{item:s}=y;m.exports.useEffect(()=>(d(D({id:p})),()=>{console.log("clear")}),[]),(u=o.current)==null||u.setFieldsValue({name:s.name,type:s.type,host:s.host,username:s.username});const g=C=>{var r,h;if(C.validateResult===!0){let f=(h=(r=o.current)==null?void 0:r.getFieldsValue)==null?void 0:h.call(r,!0);f.id=p,d(S(f)),P.info("\u63D0\u4EA4\u6210\u529F")}};return e("div",{className:N(F.pageWithColor),children:e("div",{className:t.formContainer,children:c(x,{ref:o,onSubmit:g,labelWidth:100,labelAlign:"top",children:[e("div",{className:t.titleBox,children:e("div",{className:t.titleText,children:"dataSource Info"})}),c(T,{gutter:[32,24],children:[e(i,{span:6,children:e(a,{label:"name",name:"name",initialData:n.name,children:e(l,{placeholder:"Please input item"})})}),e(i,{span:6,children:e(a,{label:"type",name:"type",initialData:n.type,children:e(l,{placeholder:"Please input item"})})}),e(i,{span:6,children:e(a,{label:"host",name:"host",initialData:n.host,children:e(l,{placeholder:"Please input item"})})}),e(i,{span:6,children:e(a,{label:"username",name:"username",initialData:n.partyA,rules:[{required:!0}],children:e(l,{placeholder:"Please input item"})})})]}),e("div",{className:t.titleBox,children:e("div",{className:t.titleText,children:"other info"})}),c(a,{children:[e(b,{type:"submit",theme:"primary",children:"submit"}),e(b,{type:"reset",style:{marginLeft:12},children:"reset"})]})]})})})});export{k as default};