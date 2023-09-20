import{r as s,b as x,e as A,cg as L,cb as q,a as i,j as e,aK as h,B as m,c8 as R,c9 as W,d as E,u as _,R as G,c as K,F as O}from"./index.91378ad2.js";import{F as b}from"./index.56607e43.js";import{T as j}from"./index.963be225.js";import{T as P,C as $,S as y}from"./check-circle-filled.31ad06dc.js";import{C as D}from"./common.module.d7e709a7.js";import"./formModel.a6a83887.js";import"./image.e16bd38c.js";import"./DateRangePicker.25de2ce4.js";import"./index.7b0bf6d2.js";import"./useDebounce.f1e3b9dd.js";import"./observe.3c3f0282.js";import"./react-render.41054dd1.js";const{FormItem:v}=b,{Option:M}=h;var z=s.exports.memo(t=>{const{callback:u,data:l}=t,a=()=>{u("next")};s.exports.useRef();const n=x(),o=A(L),{goldTableList:r}=o;return s.exports.useEffect(()=>{n(q())},[]),i(b,{labelWidth:200,children:[e(v,{label:"Gold Table Name",name:"goldTableName",rules:[{required:!0,message:"Gold Table Name is Ruqired!",type:"error"}],children:e(h,{placeholder:"Please select Gold Table",onChange:d=>{t.data.goldTableId=d},children:r.map(d=>{const{id:p,goldTable:g}=d;return e(M,{label:g,value:p},p)})})}),e(v,{children:e(m,{type:"submit",onClick:()=>a(),children:"Submit"})})]})});const{FormItem:H,FormList:he}=b;var J=s.exports.memo(t=>{const{data:u,current:l,callback:a,steps:n=[]}=t,o=u.goldTableId,r=u.mappingList,[d,p]=s.exports.useState([]),g=()=>{a("next")},S=()=>{u.mappingList=[],a("back")};s.exports.useRef();const k=x(),T=A(R),{goldTableColumnList:f}=T;s.exports.useEffect(()=>{k(W(o))},[]);const I=[{colKey:"row-select",type:"multiple",width:150},{colKey:"goldColumn",title:"Gold Column"},{colKey:"subscrName",title:"Subscr Name",edit:{component:E,onEdited:c=>{r.splice(c.rowIndex,1,c.newRowData),console.log("Edit Subscr Name:",c)},rules:[{required:!0,message:"\u4E0D\u80FD\u4E3A\u7A7A"},{max:10,message:"\u5B57\u7B26\u6570\u91CF\u4E0D\u80FD\u8D85\u8FC7 10",type:"warning"}]},defaultEditable:!0}];function N(c,{selectedRowData:w}){console.log(c,w),p(c)}return i(b,{labelWidth:100,children:[e(j,{rowKey:"id",data:f,columns:I,selectOnRowClick:!0,selectedRowKeys:d,onSelectChange:N,editableCellState:c=>c.colIndex!==1}),e("div",{}),i(H,{children:[l<n.length-1&&e(m,{type:"submit",onClick:()=>g(),children:"Next"}),l>0&&e(m,{style:{margin:"0 8px"},onClick:()=>S(),children:"Prev"})]})]})});const{FormItem:F}=b,{Option:Q}=h,U=[{label:"\u5E7F\u4E1C\u7701\u6DF1\u5733\u5E02\u5357\u5C71\u533A",value:"0"},{label:"\u5317\u4EAC\u5E02\u6D77\u6DC0\u533A",value:"1"},{label:"\u56DB\u5DDD\u7701\u6210\u90FD\u5E02\u9AD8\u65B0\u533A",value:"2"},{label:"\u5E7F\u4E1C\u7701\u5E7F\u5DDE\u5E02\u5929\u6CB3\u533A",value:"3"},{label:"\u9655\u897F\u7701\u897F\u5B89\u5E02\u9AD8\u65B0\u533A",value:"4"}];var V=s.exports.memo(t=>{const{current:u,callback:l,steps:a}=t,n=()=>{l("next")},o=()=>{l("back")};return i(b,{labelWidth:100,children:[e(F,{label:"\u6536\u8D27\u4EBA",name:"receiver",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6536\u8D27\u4EBA",type:"error"}],children:e(E,{placeholder:"\u8BF7\u8F93\u5165\u6536\u8D27\u4EBA"})}),e(F,{label:"\u6536\u8D27\u4EBA\u624B\u673A\u53F7",name:"receiverPhone",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6536\u8D27\u4EBA\u624B\u673A\u53F7",type:"error"}],children:e(E,{placeholder:"\u8BF7\u8F93\u5165\u6536\u8D27\u4EBA\u624B\u673A\u53F7\u53F7"})}),e(F,{label:"\u6536\u8D27\u5730\u5740",name:"receiverAddress",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u6536\u8D27\u5730\u5740",type:"error"}],children:e(h,{value:"3",placeholder:"\u8BF7\u9009\u62E9\u6536\u8D27\u5730\u5740",children:U.map(r=>{const{label:d,value:p}=r;return e(Q,{label:d,value:p},p)})})}),e(F,{label:"\u8BE6\u7EC6\u5730\u5740",name:"taxpayerId",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u8BE6\u7EC6\u5730\u5740",type:"error"}],children:e(P,{placeholder:"\u8BF7\u8F93\u5165\u8BE6\u7EC6\u5730\u5740",value:"\u54C8\u54C8\u54C8"})}),i(F,{children:[u<a.length-1&&e(m,{type:"submit",onClick:()=>n(),children:"\u4E0B\u4E00\u6B65"}),u>0&&e(m,{style:{margin:"0 8px"},onClick:()=>o(),children:"\u4E0A\u4E00\u6B65"})]})]})});const X="_stepFourWrapper_27q4d_1",Y="_icon_27q4d_4",Z="_title_27q4d_8";var C={stepFourWrapper:X,icon:Y,title:Z},ee=s.exports.memo(t=>{const u=_(),{callback:l}=t,a=()=>{l("first")},n=()=>{u("/detail/advanced")};return e("div",{className:C.stepFourWrapper,children:i("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:[e($,{className:C.icon}),e("div",{className:C.title,children:"\u5B8C\u6210\u5F00\u7968\u7533\u8BF7"}),e("p",{children:"\u9884\u8BA11\uFF5E3\u4E2A\u5DE5\u4F5C\u65E5\u4F1A\u5C06\u7535\u5B50\u53D1\u7968\u53D1\u81F3\u90AE\u7BB1\uFF0C\u53D1\u7968\u90AE\u5BC4\u8BF7\u8010\u5FC3\u7B49\u5F85"}),i("div",{className:"tdesign-demo-block-column",style:{marginTop:"20px"},children:[e(m,{theme:"primary",variant:"base",onClick:a,children:"\u518D\u6B21\u7533\u8BF7"}),e(m,{theme:"default",variant:"base",style:{marginLeft:"15px"},onClick:n,children:"\u67E5\u770B\u8FDB\u5EA6"})]})]})})});const{StepItem:te}=y,ue={goldTableId:"",subName:"",mappingList:[]},B=[{title:"Select Gold Table",content:"",component:z},{title:"Distribution Mapping",content:"",component:J},{title:"Distribution Name",content:"",component:V},{title:"Completed",content:"",component:ee}];var ge=s.exports.memo(()=>{const[t,u]=G.useState(0),l=B[t].component,a=()=>{u(t+1)},n=()=>{u(t-1)},o=r=>{switch(r){case"back":n();break;case"next":a();break;case"first":u(0);break}};return e("div",{className:K(D.pageWithPadding,D.pageWithColor),children:i(O,{children:[e(y,{current:t,children:B.map(r=>e(te,{title:r.title},r.title))}),e("div",{style:{marginTop:"52px"},children:e(l,{steps:B,current:t,callback:o,data:ue})})]})})});export{ge as default};
