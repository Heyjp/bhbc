(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{151:function(e,a,t){"use strict";t.r(a),t.d(a,"pageQuery",function(){return l});var n=t(0),r=t.n(n),s=t(160),c=t(157),i=132;a.default=function(e){var a=e.data;return r.a.createElement(s.a,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"columns is-centered"},r.a.createElement("div",{className:"column is-four-fifths "},r.a.createElement("section",{className:"content history-wrap"},r.a.createElement("h3",{className:"title is-3"},"Latest News"),r.a.createElement("hr",null),r.a.createElement("ul",{className:"news-list"},a.allStrapiArticle.edges.map(function(e){var a,t,n=e.node;return r.a.createElement("li",{key:n.id,className:"news-item"},r.a.createElement("h2",null,r.a.createElement(c.a,{to:"/"+n.id},n.title)),r.a.createElement("h5",{className:"subtitle is-5"},new Date(n.updatedAt).toDateString()),r.a.createElement("p",null,(a=n.content,void 0===t&&(t=i),a.length>t?a.substr(0,t)+"...":a)))})))))))};var l="2802539403"},157:function(e,a,t){"use strict";t.d(a,"b",function(){return u});var n=t(0),r=t.n(n),s=t(4),c=t.n(s),i=t(33),l=t.n(i);t.d(a,"a",function(){return l.a}),t.d(a,"c",function(){return i.navigate});t(158);var o=r.a.createContext({}),u=function(e){return r.a.createElement(o.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},158:function(e,a,t){var n;e.exports=(n=t(162))&&n.default||n},159:function(e,a,t){"use strict";t.d(a,"a",function(){return s}),t.d(a,"b",function(){return c}),t.d(a,"c",function(){return i});var n=function(){return"undefined"!=typeof window&&window.sessionStorage.getItem("gatsbyUser")?JSON.parse(window.sessionStorage.getItem("gatsbyUser")):{}},r=function(e){return window.sessionStorage.setItem("gatsbyUser",JSON.stringify(e))},s=function(e){return"1970"===e.password&&r({username:"member"})},c=function(){return!!n().username},i=function(e){r({}),e()}},160:function(e,a,t){"use strict";var n=t(161),r=t(0),s=t.n(r),c=t(4),i=t.n(c),l=t(157),o=t(7),u=t.n(o),m=t(159),d=function(e){function a(a){var t;return(t=e.call(this,a)||this).toggleNav=function(){return t.setState({activeNav:!t.state.activeNav})},t.state={activeNav:""},t}return u()(a,e),a.prototype.render=function(){var e=this;return s.a.createElement("nav",{className:"navbar has-background-white-ter",role:"navigation","aria-label":"main navigation"},s.a.createElement("div",{className:"navbar-brand"},s.a.createElement(l.a,{className:"navbar-item",to:"/"},s.a.createElement("p",{className:"title"},"BH",s.a.createElement("span",{className:"has-text-primary"},"BC"))),s.a.createElement("a",{role:"button",className:"navbar-burger "+(this.state.activeNav?"is-active":""),"data-target":"navMenu","aria-label":"menu","aria-expanded":"false",onClick:function(){return e.toggleNav()}},s.a.createElement("span",{"aria-hidden":"true"}),s.a.createElement("span",{"aria-hidden":"true"}),s.a.createElement("span",{"aria-hidden":"true"}))),s.a.createElement("div",{className:"navbar-menu "+(this.state.activeNav?"is-active":"")},s.a.createElement("div",{className:"navbar-end"},s.a.createElement(l.a,{className:"navbar-item",to:"/"},"Home"),s.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},s.a.createElement(l.a,{className:"navbar-item",to:"/history"},"About"),s.a.createElement("div",{className:"navbar-dropdown"},s.a.createElement(l.a,{className:"navbar-item",to:"/commitee"},"Committee"),s.a.createElement(l.a,{className:"navbar-item",to:"/history"},"History"))),s.a.createElement(l.a,{className:"navbar-item",to:"/news"},"News"),s.a.createElement(l.a,{className:"navbar-item",to:"/events"},"Events"),s.a.createElement(l.a,{className:"navbar-item",to:"/rules"},"Rules"),Object(m.b)()&&s.a.createElement(l.a,{className:"navbar-item",to:"/app/minutes"},"Minutes"),!Object(m.b)()&&s.a.createElement(l.a,{className:"navbar-item",to:"/app/login"},"Login"),Object(m.b)()?s.a.createElement(l.a,{className:"navbar-item",to:"/app/login",onClick:function(e){e.preventDefault(),Object(m.c)(function(){return Object(l.c)("/")})}},"Logout"):null)))},a}(s.a.Component),v=function(){return s.a.createElement("footer",{className:"footer"},s.a.createElement("div",{className:"content has-text-centered"},s.a.createElement("p",null,"Burgess Hill Bowls Club - Created by HeyJPDesigns")))},b=(t(163),function(e){var a=e.children;return s.a.createElement(l.b,{query:"755544856",render:function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(d,null),s.a.createElement("div",null,s.a.createElement("main",null,a)),s.a.createElement(v,null))},data:n})});b.propTypes={children:i.a.node.isRequired};a.a=b},161:function(e){e.exports={data:{site:{siteMetadata:{title:"Burgess Hill Bowls Club"}}}}},162:function(e,a,t){"use strict";t.r(a);t(34);var n=t(0),r=t.n(n),s=t(4),c=t.n(s),i=t(55),l=t(2),o=function(e){var a=e.location,t=l.default.getResourcesForPathnameSync(a.pathname);return t?r.a.createElement(i.a,Object.assign({location:a,pageResources:t},t.json)):null};o.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},a.default=o}}]);
//# sourceMappingURL=component---src-pages-news-js-fab8a17ed9bb8275d7e8.js.map