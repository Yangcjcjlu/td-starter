import{R as m,r as i,j as e,a as s,b2 as L,b3 as b,b4 as h,c as S,bN as w,F as g}from"./index.e0b1210f.js";import{u as f,E as A}from"./useDynamicChart.9aa03f5e.js";import{a as I,b as l}from"./chart.7e485036.js";import{C as y}from"./index.79d7b4da.js";import{D as k}from"./index.701834d3.js";import{T as N}from"./index.f21004cf.js";import"./formModel.c390b604.js";import"./useDebounce.e798d582.js";import"./observe.3c3f0282.js";import"./index.d46c6699.js";import"./react-render.cf2f3eaa.js";function C(u=[]){let t=["00:00","02:00","04:00","06:00"];return u.length>0&&(t=I(u,7)),{tooltip:{trigger:"item"},grid:{top:"10px",left:"0",right:"20px",bottom:"36px",containLabel:!0},xAxis:{type:"category",data:t,boundaryGap:!1,axisLine:{lineStyle:{color:"#E3E6EB",width:1}}},yAxis:{type:"value"},legend:{data:["\u672C\u6708","\u4E0A\u6708"],icon:"circle",bottom:"0",itemGap:48,itemHeight:8,itemWidth:8},series:[{name:"\u4E0A\u6708",data:[l(),l(),l(),l(),l(),l(),l()],type:"line",smooth:!0,showSymbol:!0,symbol:"circle",symbolSize:8,areaStyle:{color:"#0053D92F"}},{name:"\u672C\u6708",data:[l(),l(),l(),l(),l(),l(),l()],type:"line",smooth:!0,showSymbol:!0,symbol:"circle",symbolSize:8}]}}const v=[100,120,140,160,180,200,210];function E(u=!1){let t=v.concat([]),a=v.concat([]);return u&&(t=t.reverse(),a=a.reverse()),{tooltip:{trigger:"item"},grid:{top:"10px",left:"0",right:"0",bottom:"36px",containLabel:!0},xAxis:[{type:"category",data:["\u5468\u4E00","\u5468\u4E8C","\u5468\u4E09","\u5468\u56DB","\u5468\u4E94","\u5468\u516D","\u5468\u65E5"],axisTick:{alignWithLabel:!0},axisLine:{lineStyle:{color:"#E3E6EB",width:1}}}],yAxis:[{type:"value",axisLabel:{color:"rgba(0, 0, 0, 0.4)"}}],legend:{data:["\u53BB\u5E74","\u4ECA\u5E74"],bottom:"0",icon:"rect",itemGap:48,itemHeight:4,itemWidth:12},series:[{name:"\u53BB\u5E74",type:"bar",barWidth:"30%",data:t,itemStyle:{color:"#BCC4D0"}},{name:"\u4ECA\u5E74",type:"bar",barWidth:"30%",data:a}]}}const T=()=>{const[u,t]=i.exports.useState(C()),a=f(u,{placeholderColor:["legend.textStyle.color","xAxis.axisLabel.color","yAxis.axisLabel.color"]});return i.exports.useEffect(()=>{const n=setInterval(()=>t(C()),3e3);return()=>{clearInterval(n)}},[]),e(A,{option:a,notMerge:!0,lazyUpdate:!0,style:{height:265}})};var O=m.memo(T);const q="_panel_gi7e7_1",K="_deployPanelLeft_gi7e7_4";var x={panel:q,deployPanelLeft:K};const R=()=>{const[u,t]=i.exports.useState(E()),a=o=>{t(E(o))},n=f(u,{placeholderColor:["legend.textStyle.color","xAxis.0.axisLabel.color","yAxis.0.axisLabel.color"]});return s(L,{gutter:16,className:x.panel,children:[e(b,{span:6,children:e(y,{title:"\u90E8\u7F72\u8D8B\u52BF",bordered:!1,children:e("div",{className:x.deployPanelLeft,children:e(O,{})})})}),e(b,{span:6,children:e(y,{title:"\u544A\u8B66\u60C5\u51B5",actions:s(h.Group,{defaultValue:"week",onChange:o=>a(o==="month"),children:[e(h.Button,{value:"week",children:"\u672C\u5468"}),e(h.Button,{value:"month",children:"\u672C\u6708"})]}),bordered:!1,children:e(A,{option:n,notMerge:!0,lazyUpdate:!0,style:{height:255}})})})]})};var z=m.memo(R);const P=(u,t)=>{const a=u.name.charCodeAt(0)-t.name.charCodeAt(0);return a>0?1:a<0?-1:0},$=[{width:"448",ellipsis:!0,colKey:"name",title:"\u9879\u76EE\u540D\u79F0",sortType:"all",sorter:P},{width:"224",ellipsis:!0,colKey:"adminName",title:"\u7BA1\u7406\u5458"},{width:"224",ellipsis:!0,colKey:"telephone",title:"\u8054\u7CFB\u65B9\u5F0F"},{width:"224",className:"test",ellipsis:!0,colKey:"updateTime",title:"\u521B\u5EFA\u65F6\u95F4",sortType:"all",sorter:!0},{align:"left",width:"200",className:"test2",ellipsis:!0,colKey:"op",fixed:"right",title:"\u64CD\u4F5C"}],G=[{name:"\u96C6\u7FA4\u540D",value:"helloworld"},{name:"\u96C6\u7FA4ID",value:"cls - 2ntelvxw",type:{key:"color",value:"blue"}},{name:"\u72B6\u6001",value:"\u8FD0\u884C\u4E2D",type:{key:"color",value:"green"}},{name:"K8S\u7248\u672C",value:"1.7.8"},{name:"\u914D\u7F6E",value:"6.73 \u6838 10.30 GB"},{name:"\u6240\u5728\u5730\u57DF",value:"\u5E7F\u5DDE"},{name:"\u65B0\u589E\u8D44\u6E90\u6240\u5C5E\u9879\u76EE",value:"\u9ED8\u8BA4\u9879\u76EE"},{name:"\u8282\u70B9\u6570\u91CF",value:"4 \u4E2A"},{name:"\u8282\u70B9\u7F51\u7EDC",value:"vpc - 5frmkm1x",type:{key:"color",value:"blue"}},{name:"\u5BB9\u5668\u7F51\u7EDC",value:"172.16.0.0 / 16"},{name:"\u96C6\u7FA4\u51ED\u8BC1",value:"\u663E\u793A\u51ED\u8BC1",type:{key:"color",value:"blue"}},{name:"\u521B\u5EFA/\u66F4\u65B0",value:"2018-05-31 22:11:44 2018-05-31 22:11:44",type:{key:"contractAnnex",value:"pdf"}},{name:"\u63CF\u8FF0",value:"istio_test"}],M="_popupBox_qql7v_1",W="_popupItem_qql7v_4",j="_popupItem_blue_qql7v_22",U="_popupItem_green_qql7v_25";var c={popupBox:M,popupItem:W,popupItem_blue:j,popupItem_green:U};const V=({visible:u})=>{const[t,a]=i.exports.useState(u),n=()=>a(!t);return e(k,{header:"\u57FA\u672C\u4FE1\u606F",visible:t,onClose:n,onConfirm:n,onCancel:n,children:e("div",{children:e("div",{className:c.popupBox,children:G.map((o,p)=>s("div",{className:c.popupItem,children:[e("h1",{children:o.name}),e("p",{className:S({[c.popupItem_green]:o.type&&o.type.value==="green",[c.popupItem_blue]:o.type&&o.type.value==="blue"}),children:o.value})]},p))})})})};var Y=m.memo(V);const H="_operationLink_2ew4d_1";var B={operationLink:H};const J=()=>{const[u,t]=i.exports.useState({sortBy:"name",descending:!0}),[a,n]=i.exports.useState(!1),[{tableData:o},p]=i.exports.useState({tableData:[]}),D={pageSize:10,total:o.length,pageSizeOptions:[]};i.exports.useEffect(()=>{w.get("/api/get-project-list").then(r=>{if(r.code===0){const{list:d=[]}=r.data;p({tableData:d})}})},[]);const _=r=>{console.log(" rowIndex = ",r),console.log(" tableData = ",o),o.splice(r,1),p({tableData:o})};return s(g,{children:[e(y,{title:"\u9879\u76EE\u5217\u8868",bordered:!1,children:e(N,{columns:(r=>(r&&(r[4].cell=d=>{const{rowIndex:F}=d;return s(g,{children:[e("a",{className:B.operationLink,onClick:()=>n(!a),children:"\u7BA1\u7406"}),e("a",{className:B.operationLink,onClick:()=>_(F),children:"\u5220\u9664"})]})}),r))($),rowKey:"index",pagination:D,data:o,sort:u,onSortChange:r=>t(r)})}),a&&e(Y,{visible:a})]})};var Q=m.memo(J);const X=()=>s("div",{children:[e(z,{}),e(Q,{})]});var ce=i.exports.memo(X);export{ce as default};
