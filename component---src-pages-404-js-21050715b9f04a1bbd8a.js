(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{154:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(161),s=a(167),c=a(4),o=a.n(c),l=a(168),u=a.n(l);function m(e){var t=e.description,a=e.lang,n=e.meta,i=e.keywords,c=e.title,o=s.data.site,l=t||o.siteMetadata.description;return r.a.createElement(u.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:c},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:l}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(n)})}m.defaultProps={lang:"en",meta:[],keywords:[],description:""},m.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired};var d=m;t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(d,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},156:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),s=a.n(i),c=a(33),o=a.n(c);a.d(t,"a",function(){return o.a}),a.d(t,"c",function(){return c.navigate});a(157);var l=r.a.createContext({}),u=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},157:function(e,t,a){var n;e.exports=(n=a(158))&&n.default||n},158:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),s=a.n(i),c=a(55),o=a(2),l=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};l.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=l},159:function(e,t,a){"use strict";a.d(t,"a",function(){return i}),a.d(t,"b",function(){return s}),a.d(t,"c",function(){return c});var n=function(){return"undefined"!=typeof window&&window.sessionStorage.getItem("gatsbyUser")?JSON.parse(window.sessionStorage.getItem("gatsbyUser")):{}},r=function(e){return window.sessionStorage.setItem("gatsbyUser",JSON.stringify(e))},i=function(e){return"1970"===e.password&&r({username:"member"})},s=function(){return!!n().username},c=function(e){r({}),e()}},160:function(e){e.exports={data:{site:{siteMetadata:{title:"Burgess Hill Bowls Club"}}}}},161:function(e,t,a){"use strict";var n=a(160),r=a(0),i=a.n(r),s=a(4),c=a.n(s),o=a(156),l=a(7),u=a.n(l),m=a(159),d=function(e){function t(t){var a;return(a=e.call(this,t)||this).toggleNav=function(){return a.setState({activeNav:!a.state.activeNav})},a.state={activeNav:""},a}return u()(t,e),t.prototype.render=function(){var e=this;return i.a.createElement("nav",{className:"navbar has-background-white-ter",role:"navigation","aria-label":"main navigation"},i.a.createElement("div",{className:"navbar-brand"},i.a.createElement(o.a,{className:"navbar-item",to:"/"},i.a.createElement("p",{className:"title"},"BH",i.a.createElement("span",{className:"has-text-primary"},"BC"))),i.a.createElement("a",{role:"button",className:"navbar-burger "+(this.state.activeNav?"is-active":""),"data-target":"navMenu","aria-label":"menu","aria-expanded":"false",onClick:function(){return e.toggleNav()}},i.a.createElement("span",{"aria-hidden":"true"}),i.a.createElement("span",{"aria-hidden":"true"}),i.a.createElement("span",{"aria-hidden":"true"}))),i.a.createElement("div",{className:"navbar-menu "+(this.state.activeNav?"is-active":"")},i.a.createElement("div",{className:"navbar-end"},i.a.createElement(o.a,{className:"navbar-item",to:"/"},"Home"),i.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},i.a.createElement(o.a,{className:"navbar-item",to:"/history"},"About"),i.a.createElement("div",{className:"navbar-dropdown"},i.a.createElement(o.a,{className:"navbar-item",to:"/commitee"},"Committee"),i.a.createElement(o.a,{className:"navbar-item",to:"/history"},"History"))),i.a.createElement(o.a,{className:"navbar-item",to:"/news"},"News"),i.a.createElement(o.a,{className:"navbar-item",to:"/events"},"Events"),i.a.createElement(o.a,{className:"navbar-item",to:"/rules"},"Rules"),i.a.createElement(o.a,{className:"navbar-item",to:"/contact"},"Contact"),Object(m.b)()&&i.a.createElement(o.a,{className:"navbar-item",to:"/app/minutes"},"Minutes"),!Object(m.b)()&&i.a.createElement(o.a,{className:"navbar-item",to:"/app/login"},"Login"),Object(m.b)()?i.a.createElement(o.a,{className:"navbar-item",to:"/app/login",onClick:function(e){e.preventDefault(),Object(m.c)(function(){return Object(o.c)("/")})}},"Logout"):null)))},t}(i.a.Component),p=function(){return i.a.createElement("footer",{className:"footer"},i.a.createElement("div",{className:"content has-text-centered"},i.a.createElement("p",null,"Burgess Hill Bowls Club - Created by HeyJPDesigns")))},v=(a(162),function(e){var t=e.children;return i.a.createElement(o.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(d,null),i.a.createElement("div",null,i.a.createElement("main",null,t)),i.a.createElement(p,null))},data:n})});v.propTypes={children:c.a.node.isRequired};t.a=v},167:function(e){e.exports={data:{site:{siteMetadata:{title:"Burgess Hill Bowls Club",description:"Burgess Hill Bowls Club website"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-21050715b9f04a1bbd8a.js.map