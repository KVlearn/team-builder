(this["webpackJsonpteam-builder"]=this["webpackJsonpteam-builder"]||[]).push([[0],{14:function(e,a,t){},15:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(8),o=t.n(r),m=(t(14),t(1)),i=t(6),c=t(3),u=t(4);var d=function(e){var a=e.addMember,t=e.memberToEdit,r=e.editMember;console.log("Member to edit in Form=",t);var o=Object(n.useState)({urname:"",email:"",role:""}),i=Object(c.a)(o,2),d=i[0],s=i[1];Object(n.useEffect)((function(){s(Object(u.a)(Object(u.a)({},d),t))}),[t]);var b=function(e){s(Object(u.a)(Object(u.a)({},d),{},Object(m.a)({},e.target.name,e.target.value)))};console.log("Form Data in Form=",d);var E=function(e){e.preventDefault(),t?r(d):a(d),s({urname:"",email:"",role:""})};return l.a.createElement("div",null,l.a.createElement("forms",{onSubmit:E},l.a.createElement("label",{htmlFor:"urname"},"Enter your Name"),l.a.createElement("input",{onChange:b,type:"text",name:"urname",id:"urname",value:d.urname,placeholder:"Your sweet Name!"}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"email"},"Enter your Email"),l.a.createElement("input",{onChange:b,type:"email",name:"email",id:"email",value:d.email,placeholder:"Your email ID"}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"role"},"Enter your Role"),l.a.createElement("input",{onChange:b,type:"role",name:"role",id:"role",value:d.role,placeholder:"Your Role"}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"submit"}),l.a.createElement("div",null,l.a.createElement("button",{onClick:E,name:"submit",id:"submit",type:"submit"},"Submit"))))},s=(t(15),[{id:1,urname:"Kavya",email:"kavya.mdu@gmail.com",role:"Front End Engineer"},{id:2,urname:"Deek",email:"deek.v@gmail.com",role:"Front End Engineer"},{id:3,urname:"Harsha",email:"heek.v@gmail.com",role:"Back End Engineer"}]);var b=function(){var e=Object(n.useState)(s),a=Object(c.a)(e,2),t=a[0],r=a[1],o=Object(n.useState)({urname:"",email:"",role:""}),u=Object(c.a)(o,2),b=u[0],E=u[1];return l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,"Team Builder App!"),l.a.createElement(d,{memberToEdit:b[0],addMember:function(e){console.log("meminfo=",e);var a={id:Date.now(),urname:e.urname,email:e.email,role:e.role};r([].concat(Object(i.a)(t),[a]))},editMember:function(e){console.log("editMemberinfo=",e);var a=Object(i.a)(t).map((function(a){return a.id==e.id?e:a}));console.log("mapnewList=",a),r(a)}}),l.a.createElement("div",null,l.a.createElement("h2",null,"Team Info"),t.map((function(e,a){var n;return l.a.createElement("div",{className:"teaminfo"},l.a.createElement("div",null,l.a.createElement("li",null,e.urname),l.a.createElement("li",null,e.email),l.a.createElement("li",null,e.role),l.a.createElement("button",(n={className:"edit",type:"submit"},Object(m.a)(n,"className","edit"),Object(m.a)(n,"onClick",(function(a){return function(e){var a;console.log("index in handleEdit=",e),a=t.filter((function(a){return a.id===e})),console.log("editInfo",a),E(a)}(e.id)})),n),"Edit"),l.a.createElement("button",{className:"remove",type:"submit",onClick:function(e){return function(e){var a=Object(i.a)(t);a.splice(e,1),r(a)}(a)}},"Remove")))}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,a,t){e.exports=t(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.add9973e.chunk.js.map