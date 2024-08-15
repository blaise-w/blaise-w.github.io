(this["webpackJsonpstudy-buddies-frontend"]=this["webpackJsonpstudy-buddies-frontend"]||[]).push([[0],{62:function(e,t,s){},63:function(e,t,s){"use strict";s.r(t);var a=s(2),c=s.n(a),i=s(11),n=s.n(i),r=s(28),l=s(4),o=s(26),d=s.n(o),b=s(3);var j=()=>{const[e,t]=Object(a.useState)(""),[s,c]=Object(a.useState)("");return Object(b.jsxs)("div",{className:"container mt-4",children:[Object(b.jsx)("header",{className:"bg-dark text-white text-center py-5",children:Object(b.jsx)("h1",{children:"Edit Profile"})}),Object(b.jsxs)("section",{id:"edit-profile-section",children:[Object(b.jsx)("h2",{children:"Enter your name"}),Object(b.jsx)("p",{children:"Your first name will be visible to all users"}),Object(b.jsxs)("form",{onSubmit:async t=>{t.preventDefault();try{const t=await d.a.post("http://localhost:5001/users/add",{firstName:e,lastName:s,availability:[]});console.log("User created:",t.data),window.location.href="/schedule"}catch(a){console.error("Error creating user:",a)}},className:"mb-4",children:[Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"first-name",children:"First name"}),Object(b.jsx)("input",{type:"text",id:"first-name",name:"first-name",className:"form-control",value:e,onChange:e=>t(e.target.value),placeholder:"First name"})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"last-name",children:"Last name"}),Object(b.jsx)("input",{type:"text",id:"last-name",name:"last-name",className:"form-control",value:s,onChange:e=>c(e.target.value),placeholder:"Last name"})]}),Object(b.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Continue"})]})]})]})},h=s(30),m=s(27);var u=e=>{let{availability:t,setAvailability:s}=e;return Object(b.jsx)(h.a,{plugins:[m.a],initialView:"dayGridMonth",dateClick:e=>{const a=e.dateStr;let c;c=t.includes(a)?t.filter((e=>e!==a)):[...t,a],s(c)},events:t.map((e=>({title:"Available",date:e})))})};var x=e=>{let{user:t,setUserAvailability:s}=e;const[c,i]=Object(a.useState)(t?t.availability:[]);return Object(b.jsxs)("div",{className:"container mt-4",children:[Object(b.jsx)("header",{className:"bg-dark text-white text-center py-5",children:Object(b.jsx)("h1",{children:"Set Schedule"})}),Object(b.jsxs)("section",{id:"schedule-section",children:[Object(b.jsx)("h2",{children:"Set your availability"}),Object(b.jsxs)("form",{onSubmit:e=>{e.preventDefault(),s(c),window.location.href="/match"},children:[Object(b.jsx)(u,{availability:c,setAvailability:i}),Object(b.jsx)("button",{type:"submit",className:"btn btn-primary mt-3",children:"Continue"})]})]})]})};var p=()=>{const[e,t]=Object(a.useState)(0),s=[{name:"Jane (she/her)",badges:["Night owl","North campus","Comp Sci","Sophomore"],lookingFor:["Project partner","Study group","Study partner"],scheduleImage:"/images/userschedule.png"},{name:"John (he/him)",badges:["Early bird","South campus","Mathematics","Junior"],lookingFor:["Project partner","Study group"],scheduleImage:"/images/userschedule.png"},{name:"Alice (she/her)",badges:["Night owl","East campus","Biology","Senior"],lookingFor:["Study partner","Study group"],scheduleImage:"/images/userschedule.png"}],c=()=>{t((e+1)%s.length)};return Object(b.jsxs)("div",{className:"container mt-4",children:[Object(b.jsx)("header",{className:"bg-dark text-white text-center py-5",children:Object(b.jsx)("h1",{children:"Study Partner Match"})}),Object(b.jsx)("section",{id:"match-section",children:(i=e,Object(b.jsxs)("div",{className:"user-profile mb-4",children:[Object(b.jsxs)("div",{className:"image-container",children:[Object(b.jsx)("img",{src:s[i].scheduleImage,alt:"User's schedule",className:"img-fluid"}),Object(b.jsx)("div",{className:"image-caption",children:"User's schedule"})]}),Object(b.jsx)("h2",{children:s[i].name}),Object(b.jsx)("p",{children:s[i].badges.map((e=>Object(b.jsx)("span",{className:"badge badge-success",children:e},e)))}),Object(b.jsxs)("div",{className:"looking-for mb-4",children:[Object(b.jsx)("p",{children:"Looking for..."}),Object(b.jsx)("ul",{className:"list-inline",children:s[i].lookingFor.map((e=>Object(b.jsx)("li",{className:"list-inline-item",children:e},e)))})]}),Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{className:"btn btn-success interested-button",onClick:c,children:"Interested"}),Object(b.jsx)("button",{className:"btn btn-secondary next-button",onClick:c,children:"Next"})]})]}))})]});var i};var O=function(){const[e,t]=Object(a.useState)({firstName:"John",lastName:"Doe",availability:[]}),s=e=>{t((t=>({...t,availability:e})))};return Object(b.jsx)(r.a,{children:Object(b.jsxs)(l.c,{children:[Object(b.jsx)(l.a,{path:"/",exact:!0,component:j}),Object(b.jsx)(l.a,{path:"/schedule",render:t=>Object(b.jsx)(x,{...t,user:e,setUserAvailability:s})}),Object(b.jsx)(l.a,{path:"/match",component:p})]})})};s(62);n.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.cd328372.chunk.js.map