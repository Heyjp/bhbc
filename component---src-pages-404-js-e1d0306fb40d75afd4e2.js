(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{158:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(165),i=a(292),c=a(4),l=a.n(c),o=a(293),m=a.n(o);function u(e){var t=e.description,a=e.lang,n=e.meta,s=e.keywords,c=e.title,l=i.data.site,o=t||l.siteMetadata.description;return r.a.createElement(m.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:c},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:o}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(n)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired};var d=u;t.default=function(){return r.a.createElement(s.a,null,r.a.createElement(d,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},160:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),s=a(4),i=a.n(s),c=a(33),l=a.n(c);a.d(t,"a",function(){return l.a}),a.d(t,"c",function(){return c.navigate});a(161);var o=r.a.createContext({}),m=function(e){return r.a.createElement(o.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},161:function(e,t,a){var n;e.exports=(n=a(162))&&n.default||n},162:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),s=a(4),i=a.n(s),c=a(55),l=a(2),o=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};o.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=o},163:function(e,t,a){"use strict";a.d(t,"a",function(){return s}),a.d(t,"b",function(){return i}),a.d(t,"c",function(){return c});var n=function(){return"undefined"!=typeof window&&window.sessionStorage.getItem("gatsbyUser")?JSON.parse(window.sessionStorage.getItem("gatsbyUser")):{}},r=function(e){return window.sessionStorage.setItem("gatsbyUser",JSON.stringify(e))},s=function(e){return"1970"===e.password&&r({username:"member"})},i=function(){return!!n().username},c=function(e){r({}),e()}},164:function(e){e.exports={data:{site:{siteMetadata:{title:"Burgess Hill Bowls Club"}}}}},165:function(e,t,a){"use strict";var n=a(164),r=a(0),s=a.n(r),i=a(4),c=a.n(i),l=a(160),o=a(7),m=a.n(o),u=a(163),d=function(e){function t(t){var a;return(a=e.call(this,t)||this).toggleNav=function(){return a.setState({activeNav:!a.state.activeNav})},a.state={activeNav:""},a}return m()(t,e),t.prototype.render=function(){var e=this;return s.a.createElement("nav",{className:"navbar has-background-white-ter",role:"navigation","aria-label":"main navigation"},s.a.createElement("div",{className:"navbar-brand"},s.a.createElement(l.a,{className:"navbar-item",to:"/"},s.a.createElement("p",{className:"title"},"BH",s.a.createElement("span",{className:"has-text-primary"},"BC"))),s.a.createElement("a",{className:"navbar-burger "+(this.state.activeNav?"is-active":""),"data-target":"navMenu","aria-label":"menu","aria-expanded":"false",onClick:function(){return e.toggleNav()}},s.a.createElement("span",{"aria-hidden":"true"}),s.a.createElement("span",{"aria-hidden":"true"}),s.a.createElement("span",{"aria-hidden":"true"}))),s.a.createElement("div",{className:"navbar-menu "+(this.state.activeNav?"is-active":"")},s.a.createElement("div",{className:"navbar-end"},s.a.createElement(l.a,{className:"navbar-item",to:"/"},"Home"),s.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},s.a.createElement(l.a,{className:"navbar-item",to:"/history"},"About"),s.a.createElement("div",{className:"navbar-dropdown"},s.a.createElement(l.a,{className:"navbar-item",to:"/commitee"},"Committee"),s.a.createElement(l.a,{className:"navbar-item",to:"/history"},"History"))),s.a.createElement(l.a,{className:"navbar-item",to:"/news"},"News"),s.a.createElement(l.a,{className:"navbar-item",to:"/fixtures"},"Fixtures"),s.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},s.a.createElement(l.a,{className:"navbar-item",to:"/competitions"},"Competitions"),s.a.createElement("div",{className:"navbar-dropdown"},s.a.createElement(l.a,{className:"navbar-item",to:"/trophy"},"Nicholas Soames Trophy"),s.a.createElement(l.a,{className:"navbar-item",to:"/rules"},"Rules"))),s.a.createElement(l.a,{className:"navbar-item",to:"/contact"},"Contact"),Object(u.b)()&&s.a.createElement(l.a,{className:"navbar-item",to:"/app/minutes"},"Minutes"),!Object(u.b)()&&s.a.createElement(l.a,{className:"navbar-item",to:"/app/login"},"Login"),Object(u.b)()?s.a.createElement(l.a,{className:"navbar-item",to:"/app/login",onClick:function(e){e.preventDefault(),Object(u.c)(function(){return Object(l.c)("/")})}},"Logout"):null)))},t}(s.a.Component),v=function(){return s.a.createElement("footer",{className:"footer has-background-grey-dark"},s.a.createElement("div",{className:"content has-text-centered"},s.a.createElement("div",{className:"level"},s.a.createElement("div",{className:"level-item"},s.a.createElement("p",{className:"is-uppercase has-text-white-ter"},"Burgess Hill Bowling Club, Westhill Drive, Burgess Hill, RH15 9PP, 01444 870533"))),s.a.createElement("hr",{className:"has-background-white"}),s.a.createElement("div",{className:"level"},s.a.createElement("div",{className:"level-item"},s.a.createElement(l.a,{to:"/",className:"has-text-white"},"Home")),s.a.createElement("div",{className:"level-item"},s.a.createElement(l.a,{to:"/history",className:"has-text-white"},"About")),s.a.createElement("div",{className:"level-item"},s.a.createElement(l.a,{to:"/fixtures",className:"has-text-white"},"Fixtures")),s.a.createElement("div",{className:"level-item"},s.a.createElement(l.a,{to:"/contact",className:"has-text-white"},"Contact")))))},p=(a(166),function(e){var t=e.children;return s.a.createElement(l.b,{query:"755544856",render:function(e){return s.a.createElement("div",null,s.a.createElement(d,null),s.a.createElement("main",{className:"main has-background-white "},t),s.a.createElement(v,null))},data:n})});p.propTypes={children:c.a.node.isRequired};t.a=p},292:function(e){e.exports={data:{site:{siteMetadata:{title:"Burgess Hill Bowls Club",description:"Burgess Hill Bowls Club website"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-e1d0306fb40d75afd4e2.js.map