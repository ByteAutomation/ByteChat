import{d as g,c as x,r as l,o as p,a as _,D as S,b as h,e as m,f as i,w as u,u as s,g as b,h as D,C as T,i as C,j as I,k as M,s as N,l as O}from"./vendor.cda98c08.js";const $=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function r(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerpolicy&&(n.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?n.credentials="include":a.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(a){if(a.ep)return;a.ep=!0;const n=r(a);fetch(a.href,n)}};$();const j=g({setup(t){return(e,r)=>{const o=l("router-view");return p(),x(o)}}});const c={homePage:"/",chatPage:"/chat",registerOrLoginPage:"/registerOrLogin"},w=_({pageSelected:c.homePage,constants:{}});var k=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",PageIdentity:c,globalDict:w}),B="./assets/logo.7a2ec0e0.png";const y={basic:{jsonToObj(t){return JSON.parse(t)},objToJson(t){return JSON.stringify(t)},dateToTimestamp(t){return typeof t=="string"&&(t=new Date(t)),t.getTime()},timestampToString(t){return t===null?"":new Date(t).toLocaleString()},timestampToDateString(t){return t===null?"":new Date(t).toLocaleDateString()},log:t=>{console.log(t)},print:(t,e=async()=>{})=>{S.alert({message:t,theme:"round-button",confirmButtonText:"Confirm"}).then(async()=>{await e()})},openALink:t=>{window.open(t)}},pages:{switchPage:t=>{w.pageSelected=t,L.push(t)}}};const V={class:"bigBackground"},A={class:"container"},E=m("div",{class:"van-multi-ellipsis--l2 introduction"},"ByteChat is a world-class decentralized communication platform.",-1),R=b("GET IN !"),U=g({setup(t){return _({functions:{}}),(e,r)=>{const o=l("van-image"),a=l("van-row"),n=l("van-button");return p(),h("div",V,[m("div",A,[i(a,{justify:"center"},{default:u(()=>[i(o,{width:"130",height:"130",round:"",src:s(B)},null,8,["src"])]),_:1}),i(a,{justify:"center"},{default:u(()=>[E]),_:1}),i(a,{justify:"center"},{default:u(()=>[i(n,{size:"small",color:"linear-gradient(to right, #ff6034, #ee0a24)",onClick:r[0]||(r[0]=d=>s(y).pages.switchPage(s(k).PageIdentity.registerOrLoginPage))},{default:u(()=>[R]),_:1})]),_:1})])])}}});const J={class:"bigBackground"},q={class:"container"},z=g({setup(t){const e=_({tempData:{messageLoaded:!1,roomLoaded:!1},data:{rooms:[{roomId:1,roomName:"Chat Room",avatar:"/logo.png",unreadCount:4,index:3,lastMessage:{content:"You got new messages",senderId:1234,username:"John Doe",timestamp:"10:20",saved:!0,distributed:!1,seen:!1,new:!0},users:[{_id:1,username:"Target",avatar:"/logo.png",status:{state:"offline",lastChanged:"today, 14:30"}},{_id:2,username:"yingshaoxo",avatar:"/logo.png",status:{state:"online",lastChanged:"14 July, 20:00"}}],typingUsers:[]}],messages:[{_id:1,indexId:1,content:"Hi there!",senderId:2,username:"yingshaoxo",avatar:"/logo.png",date:"13 November",timestamp:"10:20",system:!0,saved:!0,distributed:!0,seen:!0,deleted:!1,failure:!1,disableActions:!0,disableReactions:!0}],currentUserId:2},functions:{fetchMessages:({room:r,options:o})=>{e.tempData.messageLoaded=!1,setTimeout(()=>{e.tempData.messageLoaded=!0},500)},sendMessage:async({content:r,roomId:o,files:a,replyMessage:n})=>{const d={_id:o,content:r,senderId:e.data.currentUserId,username:"yingshaoxo",avatar:"/logo.png",date:"13 November",timestamp:"10:20",system:!1,saved:!0,distributed:!0,seen:!0,deleted:!1,failure:!1,disableActions:!0,disableReactions:!0,files:[]};e.data.messages=[...e.data.messages,d],setTimeout(()=>{e.data.messages=[...e.data.messages,{_id:o,content:"Hi, You!",senderId:1,username:"Target",avatar:"/logo.png",distributed:!0,date:"13 November",timestamp:new Date().toTimeString().split(" ")[0].split(":").slice(0,2).join(":")}]},1e3)}}});return D(async()=>{setTimeout(()=>{e.tempData.messageLoaded=!0,e.tempData.roomLoaded=!0},1e3)}),(r,o)=>(p(),h("div",J,[m("div",q,[i(s(T),{height:"100vh","current-user-id":s(e).data.currentUserId,rooms:s(e).data.rooms,messages:s(e).data.messages,messagesLoaded:s(e).tempData.messageLoaded,roomsLoaded:s(e).tempData.roomLoaded,"rooms-order":"desc",styles:{general:{color:"#0a0a0a",colorSpinner:"#333",borderStyle:"1px solid #e1e4e8"},footer:{background:"#f8f9fa",backgroundReply:"rgba(0, 0, 0, 0.08)"},icons:{search:"#9ca6af"}},onSendMessage:s(e).functions.sendMessage,onFetchMessages:s(e).functions.fetchMessages},null,8,["current-user-id","rooms","messages","messagesLoaded","roomsLoaded","styles","onSendMessage","onFetchMessages"])])]))}});const H={class:"bigBackground"},Y={class:"container"},F={style:{margin:"16px"}},W=b("Login/Register"),G=g({setup(t){const e=_({data:{email:"",password:""},validators:{email:r=>/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(r),password:r=>/^[A-Za-z]\w{7,14}$/.test(r)},functions:{onSubmit:()=>{y.basic.print("Your Email is: "+e.data.email+`

Your Password is: `+e.data.password,async()=>{y.pages.switchPage(c.chatPage)})}}});return(r,o)=>{const a=l("van-field"),n=l("van-button"),d=l("van-row"),P=l("van-form");return p(),h("div",H,[m("div",Y,[i(P,{onSubmit:s(e).functions.onSubmit},{default:u(()=>[i(a,{modelValue:s(e).data.email,"onUpdate:modelValue":o[0]||(o[0]=v=>s(e).data.email=v),name:"Email",label:"Email",placeholder:"Email",rules:[{validator:s(e).validators.email,required:!0,message:"Email is required"}]},null,8,["modelValue","rules"]),i(a,{modelValue:s(e).data.password,"onUpdate:modelValue":o[1]||(o[1]=v=>s(e).data.password=v),type:"password",name:"Password",label:"Password",placeholder:"Password",rules:[{validator:s(e).validators.password,message:"Password is required"}]},null,8,["modelValue","rules"]),m("div",F,[i(d,{justify:"center"},{default:u(()=>[i(n,{color:"linear-gradient(to right, #ff6034, #ee0a24)",type:"primary","native-type":"submit"},{default:u(()=>[W]),_:1})]),_:1})])]),_:1},8,["onSubmit"])])])}}}),K=[{path:c.homePage,component:U},{path:c.chatPage,component:z},{path:c.registerOrLoginPage,component:G}],L=C({history:I(),routes:K}),f=M(j);f.use(N);f.use(O);f.use(L);f.mount("#app");