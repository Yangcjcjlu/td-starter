import{aV as s}from"./index.e0b1210f.js";const g=[s().subtract(7,"day"),s().subtract(1,"day")],i=["\u5468\u4E00","\u5468\u4E8C","\u5468\u4E09","\u5468\u56DB","\u5468\u4E94","\u5468\u516D","\u5468\u65E5"],e=(t=100)=>{const r=Number((Math.random()*t).toFixed(0));return r<=1?1:r};function m(t=[],r=10,a="MM-DD"){const u=[];t.length===0&&t.push(...g.map(n=>n.format(a)));for(let n=0;n<r;n++){const o=(new Date(t[1]).getTime()-new Date(t[0]).getTime())/r,c=new Date(t[0]).getTime()+o*n;u.push(s(c).format(a))}return u}const D=(t=[],r=10)=>{const a=m(t,r),u=[],n=[];for(let o=0;o<r;o++)u.push(e().toString()),n.push(e().toString());return[a,u,n]};export{i as O,m as a,e as b,D as g};
