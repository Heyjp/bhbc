(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{151:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(157),c=t(7),s=t.n(c),i=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),l=0;l<t;l++)n[l]=arguments[l];return(a=e.call.apply(e,[this].concat(n))||this).state={lat:50.95715,lng:-.14416,zoom:16},a}return s()(a,e),a.prototype.render=function(){this.state.lat,this.state.lng;return l.a.createElement("div",null,"Placeholder for map")},a}(l.a.Component),o=function(){return l.a.createElement("div",{className:"column"},l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"Name"),l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input",type:"text",placeholder:"e.g Alex Smith"}))),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"Email"),l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input",type:"email",placeholder:"e.g. alexsmith@gmail.com"}))),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"Message"),l.a.createElement("div",{className:"control"},l.a.createElement("textarea",{className:"textarea",placeholder:"Textarea"}))),l.a.createElement("div",{className:"field is-grouped"},l.a.createElement("div",{className:"control",style:{width:"100%"}},l.a.createElement("button",{className:"button is-link is-fullwidth"},"Submit"))))},u=t(174),m=t.n(u),d=t(176),f=t.n(d);a.default=function(){return l.a.createElement(r.a,null,l.a.createElement("section",{className:"contact-section"},l.a.createElement("div",{className:"columns is-centered"},l.a.createElement("div",{className:"column is-four-fifths "},l.a.createElement("div",{className:"contact"},l.a.createElement("h1",{className:"title is-4 has-text-centered"},"Contact Burgess Hill Bowls Club"),l.a.createElement("h4",{className:"subtitle is-5 has-text-centered"},"Visit or Drop us a line")),l.a.createElement(i,null),l.a.createElement("div",{className:"contact-info-wrapper"},l.a.createElement("div",{className:"columns"},l.a.createElement("div",{className:"column is-one-third is-centered"},l.a.createElement("div",{className:"box"},l.a.createElement("h2",{className:"subtitle"},"Club Address"),l.a.createElement("hr",null),l.a.createElement("ul",{className:"contact-address"},l.a.createElement("li",null,l.a.createElement(m.a,null),"Burgess Hill Bowling Club"),l.a.createElement("li",null,"Westhill Drive"),l.a.createElement("li",null,"Burgess Hill"),l.a.createElement("li",null,"RH15 9PP"),l.a.createElement("br",null)),l.a.createElement("ul",{className:"contact-address"},l.a.createElement("li",null,l.a.createElement("h4",{className:"subtitle is-6"},l.a.createElement(f.a,null),"    Phone")),l.a.createElement("li",null,"01444 870533")))),l.a.createElement(o,null)))))))}},154:function(e,a,t){"use strict";t.d(a,"b",function(){return u});var n=t(0),l=t.n(n),r=t(4),c=t.n(r),s=t(33),i=t.n(s);t.d(a,"a",function(){return i.a}),t.d(a,"c",function(){return s.navigate});t(155);var o=l.a.createContext({}),u=function(e){return l.a.createElement(o.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):l.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},155:function(e,a,t){var n;e.exports=(n=t(159))&&n.default||n},156:function(e,a,t){"use strict";t.d(a,"a",function(){return r}),t.d(a,"b",function(){return c}),t.d(a,"c",function(){return s});var n=function(){return"undefined"!=typeof window&&window.sessionStorage.getItem("gatsbyUser")?JSON.parse(window.sessionStorage.getItem("gatsbyUser")):{}},l=function(e){return window.sessionStorage.setItem("gatsbyUser",JSON.stringify(e))},r=function(e){return"1970"===e.password&&l({username:"member"})},c=function(){return!!n().username},s=function(e){l({}),e()}},157:function(e,a,t){"use strict";var n=t(158),l=t(0),r=t.n(l),c=t(4),s=t.n(c),i=t(154),o=t(7),u=t.n(o),m=t(156),d=function(e){function a(a){var t;return(t=e.call(this,a)||this).toggleNav=function(){return t.setState({activeNav:!t.state.activeNav})},t.state={activeNav:""},t}return u()(a,e),a.prototype.render=function(){var e=this;return r.a.createElement("nav",{className:"navbar has-background-white-ter",role:"navigation","aria-label":"main navigation"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement(i.a,{className:"navbar-item",to:"/"},r.a.createElement("p",{className:"title"},"BH",r.a.createElement("span",{className:"has-text-primary"},"BC"))),r.a.createElement("a",{role:"button",className:"navbar-burger "+(this.state.activeNav?"is-active":""),"data-target":"navMenu","aria-label":"menu","aria-expanded":"false",onClick:function(){return e.toggleNav()}},r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}))),r.a.createElement("div",{className:"navbar-menu "+(this.state.activeNav?"is-active":"")},r.a.createElement("div",{className:"navbar-end"},r.a.createElement(i.a,{className:"navbar-item",to:"/"},"Home"),r.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},r.a.createElement(i.a,{className:"navbar-item",to:"/history"},"About"),r.a.createElement("div",{className:"navbar-dropdown"},r.a.createElement(i.a,{className:"navbar-item",to:"/commitee"},"Committee"),r.a.createElement(i.a,{className:"navbar-item",to:"/history"},"History"))),r.a.createElement(i.a,{className:"navbar-item",to:"/news"},"News"),r.a.createElement(i.a,{className:"navbar-item",to:"/events"},"Events"),r.a.createElement(i.a,{className:"navbar-item",to:"/rules"},"Rules"),r.a.createElement(i.a,{className:"navbar-item",to:"/contact"},"Contact"),Object(m.b)()&&r.a.createElement(i.a,{className:"navbar-item",to:"/app/minutes"},"Minutes"),!Object(m.b)()&&r.a.createElement(i.a,{className:"navbar-item",to:"/app/login"},"Login"),Object(m.b)()?r.a.createElement(i.a,{className:"navbar-item",to:"/app/login",onClick:function(e){e.preventDefault(),Object(m.c)(function(){return Object(i.c)("/")})}},"Logout"):null)))},a}(r.a.Component),f=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"content has-text-centered"},r.a.createElement("p",null,"Burgess Hill Bowls Club - Created by HeyJPDesigns")))},v=(t(160),function(e){var a=e.children;return r.a.createElement(i.b,{query:"755544856",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null),r.a.createElement("div",null,r.a.createElement("main",null,a)),r.a.createElement(f,null))},data:n})});v.propTypes={children:s.a.node.isRequired};a.a=v},158:function(e){e.exports={data:{site:{siteMetadata:{title:"Burgess Hill Bowls Club"}}}}},159:function(e,a,t){"use strict";t.r(a);t(34);var n=t(0),l=t.n(n),r=t(4),c=t.n(r),s=t(55),i=t(2),o=function(e){var a=e.location,t=i.default.getResourcesForPathnameSync(a.pathname);return t?l.a.createElement(s.a,Object.assign({location:a,pageResources:t},t.json)):null};o.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},a.default=o},164:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,a){var t=function(a){return n.default.createElement(l.default,a,e)};return t.displayName=a,t};var n=r(t(0)),l=r(t(175));function r(e){return e&&e.__esModule?e:{default:e}}},174:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=r(t(0)),l=r(t(164));function r(e){return e&&e.__esModule?e:{default:e}}a.default=(0,l.default)(n.default.createElement("g",null,n.default.createElement("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"})),"LocationOn")},175:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},l=c(t(0)),r=c(t(4));function c(e){return e&&e.__esModule?e:{default:e}}var s,i,o,u=(o="1em",(i="width")in(s={userSelect:"none",width:"100%",fill:"currentColor",height:"1em",verticalAlign:"middle"})?Object.defineProperty(s,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):s[i]=o,s);function m(e){var a=e.children,t=e.className,r=e.color,c=e.size,s=e.styles,i=e.viewBox,o=function(e,a){var t={};for(var n in e)a.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}(e,["children","className","color","size","styles","viewBox"]),m=i||"0 0 24 24";return l.default.createElement("svg",n({className:t,focusable:"false",style:n({},u,{color:r,fontSize:c+"px"},s),viewBox:m},o),a)}m.propTypes={children:r.default.node,color:r.default.string,className:r.default.string,size:r.default.number,styles:r.default.object,viewBox:r.default.string},m.defaultProps={color:"inherit",size:24},a.default=m},176:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=r(t(0)),l=r(t(164));function r(e){return e&&e.__esModule?e:{default:e}}a.default=(0,l.default)(n.default.createElement("g",null,n.default.createElement("path",{d:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"})),"Phone")}}]);
//# sourceMappingURL=component---src-pages-contact-js-79b6e1121c86593f0f36.js.map