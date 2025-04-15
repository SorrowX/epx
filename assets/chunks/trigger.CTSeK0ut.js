import{_ as b,r as m,q as n,o as c,t as x,v as e,c as V,S as h,a7 as A,R as v,a as f,p as H,l as F,y as o,Q as p,u as L}from"./framework.D-asAmv2.js";const Z={__name:"async",setup(k){const s=m(!1),d=m(0);return setTimeout(()=>{d.value=8},1e3*1),(t,i)=>{const r=n("el-collapse-content");return c(),x(r,{modelValue:s.value,"onUpdate:modelValue":i[0]||(i[0]=u=>s.value=u),height:"305px",transition:!1},{default:e(()=>[(c(!0),V(h,null,A(d.value,u=>(c(),V("p",{key:u,class:"scrollbar-demo-item ep-bg-purple-light"},v(u),1))),128))]),_:1},8,["modelValue"])}}},K=b(Z,[["__scopeId","data-v-44e3ff83"]]),j={__name:"basic",setup(k){const s=m(!0);return(d,t)=>{const i=n("el-collapse-content");return c(),x(i,{modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=r=>s.value=r),height:"305px"},{default:e(()=>[(c(),V(h,null,A(8,r=>f("p",{key:r,class:"scrollbar-demo-item ep-bg-purple-light"},v(r),1)),64))]),_:1},8,["modelValue"])}}},M=b(j,[["__scopeId","data-v-4392b6df"]]),D={__name:"content",setup(k){const s=m(!0);return(d,t)=>{const i=n("el-collapse-content");return c(),x(i,{modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=r=>s.value=r),height:"305px"},{default:e(()=>[(c(),V(h,null,A(3,r=>f("p",{key:r,class:"scrollbar-demo-item ep-bg-purple-light"},v(r),1)),64))]),_:1},8,["modelValue"])}}},W=b(D,[["__scopeId","data-v-72e1445d"]]),Q=H({__name:"form",setup(k){const s=m("default"),d=m(),t=F({name:"Hello",region:"",count:"",date1:"",date2:"",delivery:!1,location:"",type:[],resource:"",desc:""}),i=["Home","Company","School"],r=F({name:[{required:!0,message:"Please input Activity name",trigger:"blur"},{min:3,max:5,message:"Length should be 3 to 5",trigger:"blur"}],region:[{required:!0,message:"Please select Activity zone",trigger:"change"}],count:[{required:!0,message:"Please select Activity count",trigger:"change"}],date1:[{type:"date",required:!0,message:"Please pick a date",trigger:"change"}],date2:[{type:"date",required:!0,message:"Please pick a time",trigger:"change"}],location:[{required:!0,message:"Please select a location",trigger:"change"}],type:[{type:"array",required:!0,message:"Please select at least one activity type",trigger:"change"}],resource:[{required:!0,message:"Please select activity resource",trigger:"change"}],desc:[{required:!0,message:"Please input activity form",trigger:"blur"}]}),u=async _=>{_&&await _.validate((l,U)=>{l?console.log("submit!"):console.log("error submit!",U)})},S=_=>{_&&_.resetFields()},w=Array.from({length:1e4}).map((_,l)=>({value:`${l+1}`,label:`${l+1}`})),y=m(!0);return(_,l)=>{const U=n("el-input"),g=n("el-form-item"),q=n("el-option"),z=n("el-select"),I=n("el-select-v2"),B=n("el-switch"),E=n("el-segmented"),C=n("el-checkbox"),O=n("el-checkbox-group"),$=n("el-radio"),R=n("el-radio-group"),N=n("el-form"),P=n("el-button"),T=n("el-collapse-content");return c(),x(T,{modelValue:y.value,"onUpdate:modelValue":l[10]||(l[10]=a=>y.value=a),height:"100px"},{trigger:e(()=>[f("div",{class:"trigger"},[f("div",null,[o(P,{type:"primary",onClick:l[7]||(l[7]=a=>u(d.value))},{default:e(()=>[p(" 查询 ")]),_:1}),o(P,{onClick:l[8]||(l[8]=a=>S(d.value))},{default:e(()=>[p("重置")]),_:1}),o(P,{type:"text",onClick:l[9]||(l[9]=a=>y.value=!y.value)},{default:e(()=>[p(v(y.value?"全部展开":"收起"),1)]),_:1})])])]),default:e(()=>[o(N,{ref_key:"ruleFormRef",ref:d,inline:"",model:t,rules:r,"label-width":"auto",class:"demo-form-inline",size:s.value,"status-icon":""},{default:e(()=>[o(g,{label:"Activity name",prop:"name"},{default:e(()=>[o(U,{modelValue:t.name,"onUpdate:modelValue":l[0]||(l[0]=a=>t.name=a)},null,8,["modelValue"])]),_:1}),o(g,{label:"Activity zone",prop:"region"},{default:e(()=>[o(z,{modelValue:t.region,"onUpdate:modelValue":l[1]||(l[1]=a=>t.region=a),placeholder:"Activity zone"},{default:e(()=>[o(q,{label:"Zone one",value:"shanghai"}),o(q,{label:"Zone two",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),o(g,{label:"Activity count",prop:"count"},{default:e(()=>[o(I,{modelValue:t.count,"onUpdate:modelValue":l[2]||(l[2]=a=>t.count=a),placeholder:"Activity count",options:L(w)},null,8,["modelValue","options"])]),_:1}),o(g,{label:"Instant delivery",prop:"delivery"},{default:e(()=>[o(B,{modelValue:t.delivery,"onUpdate:modelValue":l[3]||(l[3]=a=>t.delivery=a)},null,8,["modelValue"])]),_:1}),o(g,{label:"Activity location",prop:"location"},{default:e(()=>[o(E,{modelValue:t.location,"onUpdate:modelValue":l[4]||(l[4]=a=>t.location=a),options:i},null,8,["modelValue"])]),_:1}),o(g,{label:"Activity type",prop:"type"},{default:e(()=>[o(O,{modelValue:t.type,"onUpdate:modelValue":l[5]||(l[5]=a=>t.type=a)},{default:e(()=>[o(C,{value:"Online activities",name:"type"},{default:e(()=>[p(" Online activities ")]),_:1}),o(C,{value:"Promotion activities",name:"type"},{default:e(()=>[p(" Promotion activities ")]),_:1}),o(C,{value:"Offline activities",name:"type"},{default:e(()=>[p(" Offline activities ")]),_:1}),o(C,{value:"Simple brand exposure",name:"type"},{default:e(()=>[p(" Simple brand exposure ")]),_:1})]),_:1},8,["modelValue"])]),_:1}),o(g,{label:"Resources",prop:"resource"},{default:e(()=>[o(R,{modelValue:t.resource,"onUpdate:modelValue":l[6]||(l[6]=a=>t.resource=a)},{default:e(()=>[o($,{value:"Sponsorship"},{default:e(()=>[p("Sponsorship")]),_:1}),o($,{value:"Venue"},{default:e(()=>[p("Venue")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules","size"])]),_:1},8,["modelValue"])}}}),X=b(Q,[["__scopeId","data-v-a3a024d6"]]),G={__name:"trigger",setup(k){const s=m(!0);return(d,t)=>{const i=n("el-link"),r=n("el-collapse-content");return c(),x(r,{modelValue:s.value,"onUpdate:modelValue":t[1]||(t[1]=u=>s.value=u),height:"305px"},{trigger:e(()=>[f("div",{class:"trigger",onClick:t[0]||(t[0]=u=>s.value=!s.value)},[o(i,null,{default:e(()=>[p(v(s.value?"全部展开":"收起"),1)]),_:1})])]),default:e(()=>[(c(),V(h,null,A(8,u=>f("p",{key:u,class:"scrollbar-demo-item ep-bg-purple-light"},v(u),1)),64))]),_:1},8,["modelValue"])}}},Y=b(G,[["__scopeId","data-v-8ad088db"]]);export{M as E,K as a,W as b,Y as c,X as d};
