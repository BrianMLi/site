(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[12],{172:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),s=a(5),c=a(21),i=function(e){var t=e.label,a=e.link,r=e.value,s=e.format;return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{width:"70%",children:t}),Object(n.jsx)("td",{children:a?Object(n.jsx)("a",{href:a,children:s(r)}):s(r)})]})};i.defaultProps={format:function(e){return e},link:null,value:null};var l=i,u=function(e){var t=e.data;return Object(n.jsx)("table",{children:Object(n.jsx)("tbody",{children:t.map((function(e){return Object(n.jsx)(l,{format:e.format,label:e.label,link:e.link,value:e.value},e.label)}))})})},o=a(22),b=function(){var e=Object(r.useState)(),t=Object(o.a)(e,2),a=t[0],s=t[1];return Object(r.useEffect)((function(){var e=setInterval((function(){return function(){var e=new Date("1998-03-05T08:24:00");s(((Date.now()-e)/31556925190.079998).toFixed(11))}()}),25);return function(){clearInterval(e)}}),[]),Object(n.jsx)(n.Fragment,{children:a})},j=[{key:"age",label:"Current age",value:Object(n.jsx)(b,{})},{key:"countries",label:"Countries visited",value:"~24"},{key:"location",label:"Current city",value:"Vancouver, BC"}],h=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h3",{children:"Some stats about me"}),Object(n.jsx)(u,{data:j})]})},f=a(159),d=a.n(f),O=a(55),v=a(161),p=a(71),x=a.n(p),m=function(){var e=Object(r.useState)(),t=Object(o.a)(e,2),a=t[0],s=t[1];return Object(r.useEffect)((function(){var e=setInterval((function(){return function(){var e=new Date("2021-03-05T08:24:00");s(((Date.now()-e)/864e5).toFixed(11))}()}),25);return function(){clearInterval(e)}}),[]),Object(n.jsx)(n.Fragment,{children:a})},k=function(){var e=new Date("2021-03-06T08:24:00"),t=((Date.now()-e)/864e5).toFixed(0);return Object(n.jsx)(n.Fragment,{children:t})},g=[{label:"Stars this repository has on github",key:"stargazers_count",link:"https://github.com/BrianMLi/site/stargazers"},{label:"Number of people watching this repository",key:"subscribers_count",link:"https://github.com/BrianMLi/site/stargazers"},{label:"Number of forks",key:"forks",link:"https://github.com/BrianMLi/site/network"},{label:"Number of breakfasts skipped",value:Object(n.jsx)(k,{})},{label:"Number of coffees drank",value:Object(n.jsx)(k,{})},{label:"Days since creation",value:Object(n.jsx)(m,{})},{label:"Last updated at",key:"pushed_at",link:"https://github.com/BrianMLi/site/commits",format:function(e){return x()(e).format("MMMM DD, YYYY")}},{label:"Lines of Javascript powering this website",value:"~2000",link:"https://github.com/BrianMLi/site/graphs/contributors"}],w=function(){var e=Object(r.useState)(g),t=Object(o.a)(e,2),a=t[0],s=t[1],c=Object(r.useCallback)(Object(v.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/repos/BrianMLi/site");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,s(g.map((function(e){return Object(O.a)(Object(O.a)({},e),{},{value:Object.keys(a).includes(e.key)?a[e.key]:e.value})})));case 7:case"end":return e.stop()}}),e)}))),[]);return Object(r.useEffect)((function(){c()}),[c]),Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:"Some stats about this site"}),Object(n.jsx)(u,{data:a})]})};t.default=function(){return Object(n.jsx)(c.a,{title:"Stats",description:"Some statistics about Brian and the site",children:Object(n.jsxs)("article",{className:"post",id:"stats",children:[Object(n.jsx)("header",{children:Object(n.jsx)("div",{className:"title",children:Object(n.jsx)("h2",{"data-testid":"heading",children:Object(n.jsx)(s.b,{to:"/stats",children:"Stats"})})})}),Object(n.jsx)(h,{}),Object(n.jsx)(w,{})]})})}}}]);
//# sourceMappingURL=12.74a3b3fc.chunk.js.map