import{h as a,o as e,l as o}from"./index.d528b25e.js";function r(){const r=a(""),s=a([]),t=a(1),n=a(10),l=a(15),{proxy:d}=o(),i=async()=>{console.log(d.listParams,"listParams***")};e((()=>{i()}));return{keyword:r,tableData:s,pageNumber:t,pageSize:n,total:l,rowClassName:({rowIndex:a})=>a%2==1?"even-row":"odd-row",handleListData:i,handleCurrentChange:a=>{t.value=a,i()}}}export{r as t};