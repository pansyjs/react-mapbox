import{r as n}from"./index-4g5l5LRQ.js";import{u as l}from"./index-tNdqmU4a.js";const t=r=>{const{center:o=[116.36904455256712,39.94939362625391],zoom:a=12.5}=r,{map:e}=l();return n.useEffect(()=>{e&&e.flyTo({center:o,zoom:a,duration:12*1e3,essential:!0})},[e]),null};try{t.displayName="Flyto",t.__docgenInfo={description:"",displayName:"Flyto",props:{center:{defaultValue:null,description:"",name:"center",required:!1,type:{name:"[number, number]"}},zoom:{defaultValue:null,description:"",name:"zoom",required:!1,type:{name:"number"}}}}}catch{}export{t as F};