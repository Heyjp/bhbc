(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{150:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(160);a.default=function(){return r.a.createElement(i.a,null,r.a.createElement("div",{className:"container"},r.a.createElement("section",{className:"content"},r.a.createElement("h4",null,"Membership"),r.a.createElement("p",null,"Should you feel like taking up a new hobby or just moving from another area or club you will be made most welcome. You don't need to be super fit, just willing to join in and enjoy yourself."),r.a.createElement("p",null,"If you are new to bowling don’t despair, we hold Beginners nights from May with a great coach to show you the ropes. The club also hold a couple of Open Days during the year and everyone is made welcome and encouraged to ‘have a go’"),r.a.createElement("h4",null,"Annual Subscriptions - 2018"),r.a.createElement("p",null,"There are currently three types are Membership: Playing, Junior and Social. The Membership year is from 1st April"),r.a.createElement("ul",null,r.a.createElement("li",null,"Playing Member Subscription is: £80.00 per year"),r.a.createElement("li",null,"Junior Member Subscription is £10.00 per year"),r.a.createElement("li",null,"Social Member Subscription is £16.00 per year")))))}},157:function(e,a,t){"use strict";t.d(a,"b",function(){return u});var n=t(0),r=t.n(n),i=t(4),l=t.n(i),s=t(33),c=t.n(s);t.d(a,"a",function(){return c.a}),t.d(a,"c",function(){return s.navigate});t(158);var o=r.a.createContext({}),u=function(e){return r.a.createElement(o.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},158:function(e,a,t){var n;e.exports=(n=t(162))&&n.default||n},159:function(e,a,t){"use strict";t.d(a,"a",function(){return i}),t.d(a,"b",function(){return l}),t.d(a,"c",function(){return s});var n=function(){return"undefined"!=typeof window&&window.sessionStorage.getItem("gatsbyUser")?JSON.parse(window.sessionStorage.getItem("gatsbyUser")):{}},r=function(e){return window.sessionStorage.setItem("gatsbyUser",JSON.stringify(e))},i=function(e){return"1970"===e.password&&r({username:"member"})},l=function(){return!!n().username},s=function(e){r({}),e()}},160:function(e,a,t){"use strict";var n=t(161),r=t(0),i=t.n(r),l=t(4),s=t.n(l),c=t(157),o=t(7),u=t.n(o),m=t(159),d=function(e){function a(a){var t;return(t=e.call(this,a)||this).toggleNav=function(){return t.setState({activeNav:!t.state.activeNav})},t.state={activeNav:""},t}return u()(a,e),a.prototype.render=function(){var e=this;return i.a.createElement("nav",{className:"navbar has-background-white-ter",role:"navigation","aria-label":"main navigation"},i.a.createElement("div",{className:"navbar-brand"},i.a.createElement(c.a,{className:"navbar-item",to:"/"},i.a.createElement("p",{className:"title"},"BH",i.a.createElement("span",{className:"has-text-primary"},"BC"))),i.a.createElement("a",{role:"button",className:"navbar-burger "+(this.state.activeNav?"is-active":""),"data-target":"navMenu","aria-label":"menu","aria-expanded":"false",onClick:function(){return e.toggleNav()}},i.a.createElement("span",{"aria-hidden":"true"}),i.a.createElement("span",{"aria-hidden":"true"}),i.a.createElement("span",{"aria-hidden":"true"}))),i.a.createElement("div",{className:"navbar-menu "+(this.state.activeNav?"is-active":"")},i.a.createElement("div",{className:"navbar-end"},i.a.createElement(c.a,{className:"navbar-item",to:"/"},"Home"),i.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},i.a.createElement(c.a,{className:"navbar-item",to:"/history"},"About"),i.a.createElement("div",{className:"navbar-dropdown"},i.a.createElement(c.a,{className:"navbar-item",to:"/commitee"},"Committee"),i.a.createElement(c.a,{className:"navbar-item",to:"/history"},"History"))),i.a.createElement(c.a,{className:"navbar-item",to:"/news"},"News"),i.a.createElement(c.a,{className:"navbar-item",to:"/events"},"Events"),i.a.createElement(c.a,{className:"navbar-item",to:"/rules"},"Rules"),i.a.createElement(c.a,{className:"navbar-item",to:"/contact"},"Contact"),Object(m.b)()&&i.a.createElement(c.a,{className:"navbar-item",to:"/app/minutes"},"Minutes"),!Object(m.b)()&&i.a.createElement(c.a,{className:"navbar-item",to:"/app/login"},"Login"),Object(m.b)()?i.a.createElement(c.a,{className:"navbar-item",to:"/app/login",onClick:function(e){e.preventDefault(),Object(m.c)(function(){return Object(c.c)("/")})}},"Logout"):null)))},a}(i.a.Component),b=function(){return i.a.createElement("footer",{className:"footer"},i.a.createElement("div",{className:"content has-text-centered"},i.a.createElement("p",null,"Burgess Hill Bowls Club - Created by HeyJPDesigns")))},v=(t(163),function(e){var a=e.children;return i.a.createElement(c.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(d,null),i.a.createElement("div",null,i.a.createElement("main",null,a)),i.a.createElement(b,null))},data:n})});v.propTypes={children:s.a.node.isRequired};a.a=v},161:function(e){e.exports={data:{site:{siteMetadata:{title:"Burgess Hill Bowls Club"}}}}},162:function(e,a,t){"use strict";t.r(a);t(34);var n=t(0),r=t.n(n),i=t(4),l=t.n(i),s=t(55),c=t(2),o=function(e){var a=e.location,t=c.default.getResourcesForPathnameSync(a.pathname);return t?r.a.createElement(s.a,Object.assign({location:a,pageResources:t},t.json)):null};o.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},a.default=o}}]);
//# sourceMappingURL=component---src-pages-members-js-6d3480e32cb352a49210.js.map