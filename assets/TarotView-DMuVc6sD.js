import{d as Q,_ as I,u as R,o as z,k as w,l as x,a as n,c as a,b as t,n as d,e as r,w as y,v as S,F as _,r as v,m as B,f as k,t as p,q as N,p as U,i as j}from"./index-BtRSe40Q.js";import{a as q}from"./axios-Cm0UX6qg.js";const D=Q("tarot",{persist:!0,state:()=>({currentTarotQuestion:"",currentTarotList:[],result:""}),getters:{defaultTarotList:()=>({big:[{title:"愚者"},{title:"魔術師"},{title:"女祭司"},{title:"皇后"},{title:"皇帝"},{title:"教皇"},{title:"戀人"},{title:"戰車"},{title:"力量"},{title:"隱者"},{title:"命運之輪"},{title:"正義"},{title:"倒吊人"},{title:"死神"},{title:"節制"},{title:"惡魔"},{title:"塔"},{title:"星星"},{title:"月亮"},{title:"太陽"},{title:"審判"},{title:"世界"}],small:[{title:"錢幣"},{title:"權杖"},{title:"聖杯"},{title:"寶劍"}],smallOptions:[{title:"1"},{title:"2"},{title:"3"},{title:"4"},{title:"5"},{title:"6"},{title:"7"},{title:"8"},{title:"9"},{title:"10"},{title:"侍從"},{title:"騎士"},{title:"皇后"},{title:"國王"}]})}}),b=h=>(U("data-v-94ece7dc"),h=h(),j(),h),F={class:"container",style:{"min-height":"calc(100vh - 215px)"}},O=b(()=>t("p",{class:"big-title py-3"},[t("span",{class:"big-title-color"},"Tarot Parse")],-1)),A={class:"columns is-gapless is-mobile is-multiline mt-3"},E={class:"column is-full mb-3"},H={class:"field has-addons has-addons-centered"},P={class:"control"},G=["disabled"],J=b(()=>t("i",{class:"bi bi-x-circle"},null,-1)),K=[J],W={class:"control"},X=["disabled"],Y={class:"column is-full p-0"},Z={class:"field is-grouped is-grouped-centered"},tt={class:"field has-addons"},et={class:"control"},st=["onClick","disabled"],ot=b(()=>t("i",{class:"bi bi-trash3"},null,-1)),lt=[ot],it={class:"control"},nt=["onClick","disabled"],at={class:"control"},dt=["onClick","disabled"],ct={class:"field has-addons ml-2"},rt={class:"control"},ut=["onClick"],_t={class:"dropdown-trigger"},pt=["disabled"],ht={class:"icon is-small"},mt={class:"dropdown-menu",id:"dropdown-menu",role:"menu",style:{"max-height":"300px",overflow:"scroll"}},vt={class:"dropdown-content"},bt=["onClick"],ft=b(()=>t("hr",{class:"dropdown-divider"},null,-1)),gt=["onClick"],wt={key:0,class:"control"},kt=["onClick"],Tt={class:"dropdown-trigger"},Ct=["disabled"],xt={style:"width: 49px"},yt={key:0},St={class:"icon is-small"},Lt={class:"dropdown-menu",id:"dropdown-menu",role:"menu",style:{"max-height":"300px",overflow:"scroll","min-width":"75px"}},Vt={class:"dropdown-content"},Mt=["onClick"],$t={class:"column is-full p-0 mt-3 mb-5"},Qt={class:"field is-grouped is-grouped-centered p-0 m-0"},It=["disabled"],Rt=["disabled"],zt={class:"column is-full mb-3"},Bt={class:"field is-grouped is-grouped-centered p-0 m-0"},Nt=["disabled"],Ut={class:"column is-full p-0 mb-3"},jt={class:"field is-grouped is-grouped-centered p-0 m-0"},qt=["disabled"],Dt={__name:"TarotView",setup(h){const T=R(),o=D();z(()=>{T.tag="projects",w(()=>{f()})});function L(){o.currentTarotList.push({value:"",smallValue:"",direction:!0,showMenu:!1,showSmallMenu:!1})}function V(i){o.currentTarotList.splice(i,1)}function C(i){return i==="錢幣"||i==="權杖"||i==="聖杯"||i==="寶劍"}const l=x(!1);function M(){if(o.currentTarotQuestion===""){alert("請你先輸入你的問題。");return}if(o.currentTarotList.length===0){alert("請你增加你抽到的塔羅牌卡片。");return}if(l===!0)return;l.value=!0;let i="你是一個塔羅牌解牌師，你可以根據我的問題和抽到的牌組來幫我進行結果解析。",u=o.currentTarotQuestion,e="";for(const s in o.currentTarotList){const c=o.currentTarotList[s];e+=(parseInt(s)+1).toString()+". "+c.value+c.smallValue+(c.direction===!0?" - 正位":" - 逆位")+`
`}i+=`

我的問題是：
\`\`\`
`+u+"\n```",i+=`

我抽到的牌組是：
\`\`\`
`+e+"\n```",i+=`

解析結果是：
`;const g={"Content-Type":"application/json"};q.post(T.gptURL,{temperature:0,messages:[{role:"user",content:i}]},{headers:g}).then(s=>{l.value=!1;try{o.result=s.data.choices[0].message.content,w(()=>{f()})}catch{alert(s.data)}}).catch(s=>{l.value=!1;try{const c=s.response.data.error.message;alert(c)}catch{alert(s)}})}const m=x(null);function f(){m.value.style.height="0px";let i=m.value.scrollHeight;m.value.style.height=i+"px"}function $(){confirm("你確定要清空所有內容嗎？")&&(o.currentTarotQuestion="",o.currentTarotList=[],o.result="",w(()=>{f()}))}return(i,u)=>(n(),a("div",F,[O,t("div",A,[t("div",E,[t("div",H,[t("p",P,[t("button",{class:d(["button is-danger"]),onClick:u[0]||(u[0]=e=>r(o).currentTarotQuestion=""),disabled:l.value},K,8,G)]),t("p",W,[y(t("input",{class:"input",type:"text","onUpdate:modelValue":u[1]||(u[1]=e=>r(o).currentTarotQuestion=e),style:{width:"310px"},placeholder:"請輸入你的問題",disabled:l.value},null,8,X),[[S,r(o).currentTarotQuestion]])])])]),(n(!0),a(_,null,v(r(o).currentTarotList,(e,g)=>(n(),a("div",Y,[t("div",Z,[t("div",tt,[t("p",et,[t("button",{class:d(["button is-danger"]),onClick:s=>V(g),disabled:l.value},lt,8,st)]),t("p",it,[t("button",{class:d(["button",e.direction===!0?"is-dark":""]),onClick:s=>e.direction=!0,disabled:l.value},"正 ",10,nt)]),t("p",at,[t("button",{class:d(["button",e.direction===!1?"is-dark":""]),onClick:s=>e.direction=!1,disabled:l.value}," 逆 ",10,dt)])]),t("div",ct,[t("p",rt,[t("div",{class:d(["dropdown",e.showMenu?"is-active":""]),onClick:s=>e.showMenu=!e.showMenu},[t("div",_t,[t("button",{class:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",disabled:l.value},[t("span",{style:B([C(e.value)?"width: 49px":"width: 150px"])},[e.value===""?(n(),a(_,{key:0},[k(" 請選擇牌面 ")],64)):(n(),a(_,{key:1},[k(p(e.value),1)],64))],4),t("span",ht,[t("i",{class:d(["bi",e.showMenu?"bi-caret-up":"bi-caret-down"])},null,2)])],8,pt)]),t("div",mt,[t("div",vt,[(n(!0),a(_,null,v(r(o).defaultTarotList.small,s=>(n(),a("a",{class:d(["dropdown-item",e.value===s.title?"is-active":""]),onClick:c=>e.value=s.title},p(s.title),11,bt))),256)),ft,(n(!0),a(_,null,v(r(o).defaultTarotList.big,s=>(n(),a("a",{class:d(["dropdown-item",e.value===s.title?"is-active":""]),onClick:c=>{e.value=s.title,e.smallValue=""}},p(s.title),11,gt))),256))])])],10,ut)]),C(e.value)?(n(),a("p",wt,[t("div",{class:d(["dropdown",e.showSmallMenu?"is-active":""]),onClick:s=>e.showSmallMenu=!e.showSmallMenu},[t("div",Tt,[t("button",{class:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",disabled:l.value},[t("span",xt,[e.smallValue===""?(n(),a("small",yt,"請選擇")):(n(),a(_,{key:1},[k(p(e.smallValue),1)],64))]),t("span",St,[t("i",{class:d(["bi",e.showSmallMenu?"bi-caret-up":"bi-caret-down"])},null,2)])],8,Ct)]),t("div",Lt,[t("div",Vt,[(n(!0),a(_,null,v(r(o).defaultTarotList.smallOptions,s=>(n(),a("a",{class:d(["dropdown-item",e.smallValue===s.title?"is-active":""]),onClick:c=>e.smallValue=s.title},p(s.title),11,Mt))),256))])])],10,kt)])):N("",!0)])])]))),256)),t("div",$t,[t("div",Qt,[t("button",{class:d(["button mr-3"]),onClick:L,disabled:l.value},"新 增 卡 片",8,It),t("button",{class:d(["button is-warning",l.value?"is-loading":""]),onClick:M,disabled:l.value},"解 析 結 果",10,Rt)])]),t("div",zt,[t("div",Bt,[y(t("textarea",{"onUpdate:modelValue":u[2]||(u[2]=e=>r(o).result=e),placeholder:"",ref_key:"inputRef",ref:m,disabled:l.value},null,8,Nt),[[S,r(o).result]])])]),t("div",Ut,[t("div",jt,[t("button",{class:d(["button mr-3 is-danger"]),onClick:$,disabled:l.value},"清 空",8,qt)])])])]))}},At=I(Dt,[["__scopeId","data-v-94ece7dc"]]);export{At as default};
