import{r as l,a as n,j as e,c as i}from"./index.9fcbf863.js";import{C as d}from"./index.86b70016.js";import{S as o}from"./index.15f6e9d7.js";const s=[{id:1,name:"\u5408\u540C\u540D\u79F0",value:"\u603B\u90E8\u529E\u516C\u7528\u54C1\u91C7\u8D2D\u9879\u76EE"},{id:2,name:"\u5408\u540C\u72B6\u6001",value:"\u5C65\u884C\u4E2D",type:"status"},{id:3,name:"\u5408\u540C\u7F16\u53F7",value:"BH00010"},{id:4,name:"\u5408\u540C\u7C7B\u578B",value:"\u4E3B\u5408\u540C"},{id:5,name:"\u5408\u540C\u6536\u4ED8\u7C7B\u578B",value:"\u4ED8\u6B3E"},{id:6,name:"\u5408\u540C\u91D1\u989D",value:"5,000,000\u5143"},{id:7,name:"\u7532\u65B9",value:"\u817E\u8BAF\u79D1\u6280\uFF08\u6DF1\u5733\uFF09\u6709\u9650\u516C\u53F8"},{id:8,name:"\u4E59\u65B9",value:"\u6B27\u5C1A"},{id:9,name:"\u5408\u540C\u7B7E\u8BA2\u65E5\u671F",value:"2020-12-20"},{id:10,name:"\u5408\u540C\u751F\u6548\u65E5\u671F",value:"2021-01-20"},{id:11,name:"\u5408\u540C\u7ED3\u675F\u65E5\u671F",value:"2022-12-20"},{id:12,name:"\u5408\u540C\u9644\u4EF6",value:"\u603B\u90E8\u529E\u516C\u7528\u54C1\u91C7\u8D2D\u9879\u76EE\u5408\u540C.pdf",type:"link"},{id:13,name:"\u5907\u6CE8",value:"--"},{id:14,name:"\u521B\u5EFA\u65F6\u95F4",value:"2020-12-22 10:00:00"}],t=[{id:1,name:"\u4E0A\u4F20\u5408\u540C\u9644\u4EF6",detail:"\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"},{id:2,name:"\u4FEE\u6539\u5408\u540C\u91D1\u989D",detail:"\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"},{id:3,name:"\u65B0\u5EFA\u5408\u540C",detail:"2020-12-01 15:00:00 \u7BA1\u7406\u5458-\u674E\u5DDD\u64CD\u4F5C"}],r="_infoBox_1jnyj_1",C="_infoBoxItem_1jnyj_4",B="_inProgress_1jnyj_33",m="_pdf_1jnyj_36",F="_logBox_1jnyj_42";var a={infoBox:r,infoBoxItem:C,inProgress:B,pdf:m,logBox:F};const{StepItem:E}=o;var p=l.exports.memo(()=>n("div",{children:[e(d,{title:"\u57FA\u672C\u4FE1\u606F",bordered:!1,children:e("div",{className:i(a.infoBox),children:s.map(u=>n("div",{className:i(a.infoBoxItem),children:[e("h1",{children:u.name}),n("span",{className:i({[a.inProgress]:u.type==="status",[a.pdf]:u.type==="link"}),children:[u.type==="status"&&e("i",{}),u.value]})]},u.id))})}),e(d,{title:"\u53D8\u66F4\u8BB0\u5F55",className:a.logBox,bordered:!1,children:e("div",{children:e(o,{layout:"vertical",theme:"dot",current:1,children:t.map(u=>e(E,{title:u.name,content:u.detail},u.id))})})})]}));export{p as default};