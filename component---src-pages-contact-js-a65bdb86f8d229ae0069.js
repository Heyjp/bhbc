(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{151:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(157),c=t(7),s=t.n(c),i=t(196),m=t(197),o=t(195),u=t(198),d=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(a=e.call.apply(e,[this].concat(n))||this).state={lat:50.95715,lng:-.14416,zoom:16},a}return s()(a,e),a.prototype.render=function(){var e=[this.state.lat,this.state.lng];return r.a.createElement(i.a,{center:e,zoom:13},r.a.createElement(m.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),r.a.createElement(o.a,{position:e},r.a.createElement(u.a,null,"A pretty CSS3 popup.",r.a.createElement("br",null),"Easily customizable.")))},a}(r.a.Component),E=function(){return r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Name"),r.a.createElement("div",{className:"control"},r.a.createElement("input",{className:"input",type:"text",placeholder:"e.g Alex Smith"}))),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Email"),r.a.createElement("div",{className:"control"},r.a.createElement("input",{className:"input",type:"email",placeholder:"e.g. alexsmith@gmail.com"}))),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Message"),r.a.createElement("div",{className:"control"},r.a.createElement("textarea",{className:"textarea",placeholder:"Textarea"}))),r.a.createElement("div",{className:"field is-grouped"},r.a.createElement("div",{className:"control",style:{width:"100%"}},r.a.createElement("button",{className:"button is-link is-fullwidth"},"Submit"))))},v=t(187),p=t.n(v),b=t(189),N=t.n(b);a.default=function(){return r.a.createElement(l.a,null,r.a.createElement("section",{className:"contact-section"},r.a.createElement("div",{className:"columns is-centered"},r.a.createElement("div",{className:"column is-four-fifths "},r.a.createElement("div",{className:"contact"},r.a.createElement("h1",{className:"title is-4 has-text-centered"},"Contact Burgess Hill Bowls Club"),r.a.createElement("h4",{className:"subtitle is-5 has-text-centered"},"Visit or Drop us a line")),r.a.createElement(d,null),r.a.createElement("div",{className:"contact-info-wrapper"},r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column is-one-third is-centered"},r.a.createElement("div",{className:"box"},r.a.createElement("h2",{className:"subtitle"},"Club Address"),r.a.createElement("hr",null),r.a.createElement("ul",{className:"contact-address"},r.a.createElement("li",null,r.a.createElement(p.a,null),"Burgess Hill Bowling Club"),r.a.createElement("li",null,"Westhill Drive"),r.a.createElement("li",null,"Burgess Hill"),r.a.createElement("li",null,"RH15 9PP"),r.a.createElement("br",null)),r.a.createElement("ul",{className:"contact-address"},r.a.createElement("li",null,r.a.createElement("h4",{className:"subtitle is-6"},r.a.createElement(N.a,null),"    Phone")),r.a.createElement("li",null,"01444 870533")))),r.a.createElement(E,null)))))))}},154:function(e,a,t){"use strict";t.d(a,"b",function(){return o});var n=t(0),r=t.n(n),l=t(4),c=t.n(l),s=t(33),i=t.n(s);t.d(a,"a",function(){return i.a}),t.d(a,"c",function(){return s.navigate});t(155);var m=r.a.createContext({}),o=function(e){return r.a.createElement(m.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};o.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},155:function(e,a,t){var n;e.exports=(n=t(159))&&n.default||n},156:function(e,a,t){"use strict";t.d(a,"a",function(){return l}),t.d(a,"b",function(){return c}),t.d(a,"c",function(){return s});var n=function(){return"undefined"!=typeof window&&window.sessionStorage.getItem("gatsbyUser")?JSON.parse(window.sessionStorage.getItem("gatsbyUser")):{}},r=function(e){return window.sessionStorage.setItem("gatsbyUser",JSON.stringify(e))},l=function(e){return"1970"===e.password&&r({username:"member"})},c=function(){return!!n().username},s=function(e){r({}),e()}},157:function(e,a,t){"use strict";var n=t(158),r=t(0),l=t.n(r),c=t(4),s=t.n(c),i=t(154),m=t(7),o=t.n(m),u=t(156),d=function(e){function a(a){var t;return(t=e.call(this,a)||this).toggleNav=function(){return t.setState({activeNav:!t.state.activeNav})},t.state={activeNav:""},t}return o()(a,e),a.prototype.render=function(){var e=this;return l.a.createElement("nav",{className:"navbar has-background-white-ter",role:"navigation","aria-label":"main navigation"},l.a.createElement("div",{className:"navbar-brand"},l.a.createElement(i.a,{className:"navbar-item",to:"/"},l.a.createElement("p",{className:"title"},"BH",l.a.createElement("span",{className:"has-text-primary"},"BC"))),l.a.createElement("a",{role:"button",className:"navbar-burger "+(this.state.activeNav?"is-active":""),"data-target":"navMenu","aria-label":"menu","aria-expanded":"false",onClick:function(){return e.toggleNav()}},l.a.createElement("span",{"aria-hidden":"true"}),l.a.createElement("span",{"aria-hidden":"true"}),l.a.createElement("span",{"aria-hidden":"true"}))),l.a.createElement("div",{className:"navbar-menu "+(this.state.activeNav?"is-active":"")},l.a.createElement("div",{className:"navbar-end"},l.a.createElement(i.a,{className:"navbar-item",to:"/"},"Home"),l.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},l.a.createElement(i.a,{className:"navbar-item",to:"/history"},"About"),l.a.createElement("div",{className:"navbar-dropdown"},l.a.createElement(i.a,{className:"navbar-item",to:"/commitee"},"Committee"),l.a.createElement(i.a,{className:"navbar-item",to:"/history"},"History"))),l.a.createElement(i.a,{className:"navbar-item",to:"/news"},"News"),l.a.createElement(i.a,{className:"navbar-item",to:"/events"},"Events"),l.a.createElement(i.a,{className:"navbar-item",to:"/rules"},"Rules"),l.a.createElement(i.a,{className:"navbar-item",to:"/contact"},"Contact"),Object(u.b)()&&l.a.createElement(i.a,{className:"navbar-item",to:"/app/minutes"},"Minutes"),!Object(u.b)()&&l.a.createElement(i.a,{className:"navbar-item",to:"/app/login"},"Login"),Object(u.b)()?l.a.createElement(i.a,{className:"navbar-item",to:"/app/login",onClick:function(e){e.preventDefault(),Object(u.c)(function(){return Object(i.c)("/")})}},"Logout"):null)))},a}(l.a.Component),E=function(){return l.a.createElement("footer",{className:"footer"},l.a.createElement("div",{className:"content has-text-centered"},l.a.createElement("p",null,"Burgess Hill Bowls Club - Created by HeyJPDesigns")))},v=(t(160),function(e){var a=e.children;return l.a.createElement(i.b,{query:"755544856",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(d,null),l.a.createElement("div",null,l.a.createElement("main",null,a)),l.a.createElement(E,null))},data:n})});v.propTypes={children:s.a.node.isRequired};a.a=v},158:function(e){e.exports={data:{site:{siteMetadata:{title:"Burgess Hill Bowls Club"}}}}},159:function(e,a,t){"use strict";t.r(a);t(34);var n=t(0),r=t.n(n),l=t(4),c=t.n(l),s=t(55),i=t(2),m=function(e){var a=e.location,t=i.default.getResourcesForPathnameSync(a.pathname);return t?r.a.createElement(s.a,Object.assign({location:a,pageResources:t},t.json)):null};m.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},a.default=m}}]);
//# sourceMappingURL=component---src-pages-contact-js-a65bdb86f8d229ae0069.js.map