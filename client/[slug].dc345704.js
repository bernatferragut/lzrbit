import{S as t,i as s,s as a,a as e,e as n,t as i,g as o,c as r,b as c,d as l,f as h,h as u,k as f,l as p,y as m,n as d}from"./index.f67fa270.js";function g(t){let s,a,g,x,j,y,H=t[0].title+"",b=t[0].html+"";return document.title=s=t[0].title,{c(){a=e(),g=n("h1"),x=i(H),j=e(),y=n("div"),this.h()},l(t){a=o(t),g=r(t,"H1",{});var s=c(g);x=l(s,H),s.forEach(h),j=o(t),y=r(t,"DIV",{class:!0}),c(y).forEach(h),this.h()},h(){u(y,"class","content")},m(t,s){f(t,a,s),f(t,g,s),p(g,x),f(t,j,s),f(t,y,s),y.innerHTML=b},p(t,[a]){1&a&&s!==(s=t[0].title)&&(document.title=s),1&a&&H!==(H=t[0].title+"")&&m(x,H),1&a&&b!==(b=t[0].html+"")&&(y.innerHTML=b)},i:d,o:d,d(t){t&&h(a),t&&h(g),t&&h(j),t&&h(y)}}}async function x({params:t,query:s}){const a=await this.fetch(`blog/${t.slug}.json`),e=await a.json();if(200===a.status)return{post:e};this.error(a.status,e.message)}function j(t,s,a){let{post:e}=s;return t.$set=(t=>{"post"in t&&a(0,e=t.post)}),[e]}export default class extends t{constructor(t){super(),s(this,t,j,g,a,{post:0})}}export{x as preload};
