(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[7],{173:function(t,e,n){"use strict";n.r(e);var i=n(0),r=(n(1),n(5)),s=n(21),a=n(71),o=n.n(a),u=function(t){var e=t.data;return Object(i.jsx)("div",{className:"cell-container",children:Object(i.jsxs)("article",{className:"mini-post",children:[Object(i.jsxs)("header",{children:[Object(i.jsx)("h3",{children:Object(i.jsx)("a",{rel:"noreferrer",target:"_blank",href:e.link,children:e.title})}),Object(i.jsx)("time",{className:"published",children:o()(e.date).format("MMMM, YYYY")})]}),Object(i.jsx)("a",{rel:"noreferrer",target:"_blank",href:e.link,className:"image",children:Object(i.jsx)("img",{src:"".concat("/site").concat(e.image),alt:e.title})}),Object(i.jsx)("div",{className:"description",children:Object(i.jsx)("p",{children:e.desc})})]})})},c=[{title:"Small Personal Website",subtitle:"Create personal website from scratch",link:"https://brianmli.github.io/personal-website/",image:"/images/projects/Simple.png",date:"2021-03-05",desc:"Built from scratch using React. Uses TypeScript, react-testing-library, GitHub Pages, and Node.js CI. It was a fun side project to get the rust off after school."},{title:"Predicting Wine Quality using ML",subtitle:"A project done on predicting the quality (0-10) of wine based on chemistry",image:"/images/projects/wine.png",date:"2020-11-19",desc:"Predicted the quality of wine from 0 to 10 based on its chemistry components. I used Machine Learning to predict. More specifically, I used LGBM classifier, RandomizedSearchCV for tuning, and CV. Email me if you are curious about more."},{title:"Rainbow Six: Siege Strat Book",subtitle:"Used to help the UBC R6 team",link:"https://docs.google.com/spreadsheets/d/1kHEZ8dtXA2sSkMT-Mo9rT9YXc5jUSv1_fgS51AcguhU/edit?usp=sharing",image:"/images/projects/Strat.png",date:"2020-07-20",desc:"Created a strat book for Rainbow Six: Siege. Used to advise and teach my friends and the UBC R6 team more about the R6 Proleague meta and strategies."}];e.default=function(){return Object(i.jsx)(s.a,{title:"Projects",description:"Learn about Brian's projects.",children:Object(i.jsxs)("article",{className:"post",id:"projects",children:[Object(i.jsx)("header",{children:Object(i.jsxs)("div",{className:"title",children:[Object(i.jsx)("h2",{"data-testid":"heading",children:Object(i.jsx)(r.b,{to:"/projects",children:"Projects"})}),Object(i.jsx)("p",{children:"A few projects I enjoyed doing (excluding this one)"})]})}),c.map((function(t){return Object(i.jsx)(u,{data:t},t.title)}))]})})}},71:function(t,e,n){t.exports=function(){"use strict";var t="millisecond",e="second",n="minute",i="hour",r="day",s="week",a="month",o="quarter",u="year",c="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,d=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,l={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},f=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},$={s:f,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),r=n%60;return(e<=0?"+":"-")+f(i,2,"0")+":"+f(r,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),r=e.clone().add(i,a),s=n-r<0,o=e.clone().add(i+(s?-1:1),a);return+(-(i+(n-r)/(s?r-o:o-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:a,y:u,w:s,d:r,D:c,h:i,m:n,s:e,ms:t,Q:o}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},m="en",g={};g[m]=l;var p=function(t){return t instanceof y},b=function(t,e,n){var i;if(!t)return m;if("string"==typeof t)g[t]&&(i=t),e&&(g[t]=e,i=t);else{var r=t.name;g[r]=t,i=r}return!n&&i&&(m=i),i||!n&&m},j=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new y(n)},M=$;M.l=b,M.i=p,M.w=function(t,e){return j(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var y=function(){function l(t){this.$L=b(t.locale,null,!0),this.parse(t)}var f=l.prototype;return f.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(M.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(h);if(i){var r=i[2]-1||0,s=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},f.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},f.$utils=function(){return M},f.isValid=function(){return!("Invalid Date"===this.$d.toString())},f.isSame=function(t,e){var n=j(t);return this.startOf(e)<=n&&n<=this.endOf(e)},f.isAfter=function(t,e){return j(t)<this.startOf(e)},f.isBefore=function(t,e){return this.endOf(e)<j(t)},f.$g=function(t,e,n){return M.u(t)?this[e]:this.set(n,t)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(t,o){var h=this,d=!!M.u(o)||o,l=M.p(t),f=function(t,e){var n=M.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return d?n:n.endOf(r)},$=function(t,e){return M.w(h.toDate()[t].apply(h.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},m=this.$W,g=this.$M,p=this.$D,b="set"+(this.$u?"UTC":"");switch(l){case u:return d?f(1,0):f(31,11);case a:return d?f(1,g):f(0,g+1);case s:var j=this.$locale().weekStart||0,y=(m<j?m+7:m)-j;return f(d?p-y:p+(6-y),g);case r:case c:return $(b+"Hours",0);case i:return $(b+"Minutes",1);case n:return $(b+"Seconds",2);case e:return $(b+"Milliseconds",3);default:return this.clone()}},f.endOf=function(t){return this.startOf(t,!1)},f.$set=function(s,o){var h,d=M.p(s),l="set"+(this.$u?"UTC":""),f=(h={},h[r]=l+"Date",h[c]=l+"Date",h[a]=l+"Month",h[u]=l+"FullYear",h[i]=l+"Hours",h[n]=l+"Minutes",h[e]=l+"Seconds",h[t]=l+"Milliseconds",h)[d],$=d===r?this.$D+(o-this.$W):o;if(d===a||d===u){var m=this.clone().set(c,1);m.$d[f]($),m.init(),this.$d=m.set(c,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f]($);return this.init(),this},f.set=function(t,e){return this.clone().$set(t,e)},f.get=function(t){return this[M.p(t)]()},f.add=function(t,o){var c,h=this;t=Number(t);var d=M.p(o),l=function(e){var n=j(h);return M.w(n.date(n.date()+Math.round(e*t)),h)};if(d===a)return this.set(a,this.$M+t);if(d===u)return this.set(u,this.$y+t);if(d===r)return l(1);if(d===s)return l(7);var f=(c={},c[n]=6e4,c[i]=36e5,c[e]=1e3,c)[d]||1,$=this.$d.getTime()+t*f;return M.w($,this)},f.subtract=function(t,e){return this.add(-1*t,e)},f.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",i=M.z(this),r=this.$locale(),s=this.$H,a=this.$m,o=this.$M,u=r.weekdays,c=r.months,h=function(t,i,r,s){return t&&(t[i]||t(e,n))||r[i].substr(0,s)},l=function(t){return M.s(s%12||12,t,"0")},f=r.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},$={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:M.s(o+1,2,"0"),MMM:h(r.monthsShort,o,c,3),MMMM:h(c,o),D:this.$D,DD:M.s(this.$D,2,"0"),d:String(this.$W),dd:h(r.weekdaysMin,this.$W,u,2),ddd:h(r.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(s),HH:M.s(s,2,"0"),h:l(1),hh:l(2),a:f(s,a,!0),A:f(s,a,!1),m:String(a),mm:M.s(a,2,"0"),s:String(this.$s),ss:M.s(this.$s,2,"0"),SSS:M.s(this.$ms,3,"0"),Z:i};return n.replace(d,(function(t,e){return e||$[t]||i.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(t,c,h){var d,l=M.p(c),f=j(t),$=6e4*(f.utcOffset()-this.utcOffset()),m=this-f,g=M.m(this,f);return g=(d={},d[u]=g/12,d[a]=g,d[o]=g/3,d[s]=(m-$)/6048e5,d[r]=(m-$)/864e5,d[i]=m/36e5,d[n]=m/6e4,d[e]=m/1e3,d)[l]||m,h?g:M.a(g)},f.daysInMonth=function(){return this.endOf(a).$D},f.$locale=function(){return g[this.$L]},f.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=b(t,e,!0);return i&&(n.$L=i),n},f.clone=function(){return M.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},l}(),S=y.prototype;return j.prototype=S,[["$ms",t],["$s",e],["$m",n],["$H",i],["$W",r],["$M",a],["$y",u],["$D",c]].forEach((function(t){S[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),j.extend=function(t,e){return t.$i||(t(e,y,j),t.$i=!0),j},j.locale=b,j.isDayjs=p,j.unix=function(t){return j(1e3*t)},j.en=g[m],j.Ls=g,j.p={},j}()}}]);
//# sourceMappingURL=7.abeb25da.chunk.js.map