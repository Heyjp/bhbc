(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{143:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(17),c=t(160),i=(t(164),t(165)),s=t(157),o=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("section",{className:"content"},r.a.createElement("div",{className:"columns minutes-wrap is-centered "},r.a.createElement("div",{className:"column is-three-quarters minute-col"},r.a.createElement("h3",{className:"subtitle is-3"},"Minutes"),r.a.createElement("hr",null),r.a.createElement("table",{className:"table is-fullwidth is-bordered is-striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Name"),r.a.createElement("td",null,"Date"),r.a.createElement("td",null,"Download Link"))),r.a.createElement("tbody",null,e.allStrapiFile.edges.map(function(e){var a=e.node;return r.a.createElement("tr",{key:a.id},r.a.createElement("td",null,a.name),r.a.createElement("td",null,new Date(a.date).toDateString()),r.a.createElement("td",null,r.a.createElement("a",{className:"button is-link",href:a.file.publicURL,download:!0},"Click here to download")))})))))))},u=function(){return r.a.createElement(s.b,{query:"1943531735",render:o,data:i})},m=t(7),d=t.n(m),p=t(159),b=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(a=e.call.apply(e,[this].concat(n))||this).state={password:""},a.handleUpdate=function(e){var t;a.setState(((t={})[e.target.name]=e.target.value,t))},a.handleSubmit=function(e){console.log(a.state),e.preventDefault(),Object(p.a)(a.state)},a}return d()(a,e),a.prototype.render=function(){var e=this;return Object(p.b)()&&Object(s.c)("/app/minutes"),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"columns form-wrap is-centered is-vcentered"},r.a.createElement("div",{className:"column is-two-fifths"},r.a.createElement("div",{className:"box "},r.a.createElement("div",{className:"field "},r.a.createElement("label",{className:"label"},"Member Area"),r.a.createElement("div",{className:"control"},r.a.createElement("input",{className:"input",type:"text",placeholder:"Enter Password",name:"password",onChange:this.handleUpdate})),r.a.createElement("p",{className:"help"},"Enter member password")),r.a.createElement("button",{className:"button is-primary is-fullwidth is-small",onClick:function(a){e.handleSubmit(a),Object(s.c)("/app/minutes")}},"Login")))))},a}(r.a.Component),v=t(74),f=t.n(v),E=function(e){var a=e.component,t=e.location,n=f()(e,["component","location"]);return Object(p.b)()||"/app/login"===t.pathname?r.a.createElement(a,n):(Object(s.c)("/"),null)};a.default=function(){return r.a.createElement(c.a,null,r.a.createElement(l.Router,null,r.a.createElement(E,{path:"/app/minutes",component:u}),r.a.createElement(b,{path:"/app/login"})))}},157:function(e,a,t){"use strict";t.d(a,"b",function(){return u});var n=t(0),r=t.n(n),l=t(4),c=t.n(l),i=t(33),s=t.n(i);t.d(a,"a",function(){return s.a}),t.d(a,"c",function(){return i.navigate});t(158);var o=r.a.createContext({}),u=function(e){return r.a.createElement(o.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},158:function(e,a,t){var n;e.exports=(n=t(162))&&n.default||n},159:function(e,a,t){"use strict";t.d(a,"a",function(){return l}),t.d(a,"b",function(){return c}),t.d(a,"c",function(){return i});var n=function(){return"undefined"!=typeof window&&window.sessionStorage.getItem("gatsbyUser")?JSON.parse(window.sessionStorage.getItem("gatsbyUser")):{}},r=function(e){return window.sessionStorage.setItem("gatsbyUser",JSON.stringify(e))},l=function(e){return"1970"===e.password&&r({username:"member"})},c=function(){return!!n().username},i=function(e){r({}),e()}},160:function(e,a,t){"use strict";var n=t(161),r=t(0),l=t.n(r),c=t(4),i=t.n(c),s=t(157),o=t(7),u=t.n(o),m=t(159),d=function(e){function a(a){var t;return(t=e.call(this,a)||this).toggleNav=function(){return t.setState({activeNav:!t.state.activeNav})},t.state={activeNav:""},t}return u()(a,e),a.prototype.render=function(){var e=this;return l.a.createElement("nav",{className:"navbar has-background-white-ter",role:"navigation","aria-label":"main navigation"},l.a.createElement("div",{className:"navbar-brand"},l.a.createElement(s.a,{className:"navbar-item",to:"/"},l.a.createElement("p",{className:"title"},"BH",l.a.createElement("span",{className:"has-text-primary"},"BC"))),l.a.createElement("a",{role:"button",className:"navbar-burger "+(this.state.activeNav?"is-active":""),"data-target":"navMenu","aria-label":"menu","aria-expanded":"false",onClick:function(){return e.toggleNav()}},l.a.createElement("span",{"aria-hidden":"true"}),l.a.createElement("span",{"aria-hidden":"true"}),l.a.createElement("span",{"aria-hidden":"true"}))),l.a.createElement("div",{className:"navbar-menu "+(this.state.activeNav?"is-active":"")},l.a.createElement("div",{className:"navbar-end"},l.a.createElement(s.a,{className:"navbar-item",to:"/"},"Home"),l.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},l.a.createElement(s.a,{className:"navbar-item",to:"/history"},"About"),l.a.createElement("div",{className:"navbar-dropdown"},l.a.createElement(s.a,{className:"navbar-item",to:"/commitee"},"Committee"),l.a.createElement(s.a,{className:"navbar-item",to:"/history"},"History"))),l.a.createElement(s.a,{className:"navbar-item",to:"/news"},"News"),l.a.createElement(s.a,{className:"navbar-item",to:"/events"},"Events"),l.a.createElement(s.a,{className:"navbar-item",to:"/rules"},"Rules"),Object(m.b)()&&l.a.createElement(s.a,{className:"navbar-item",to:"/app/minutes"},"Minutes"),!Object(m.b)()&&l.a.createElement(s.a,{className:"navbar-item",to:"/app/login"},"Login"),Object(m.b)()?l.a.createElement(s.a,{className:"navbar-item",to:"/app/login",onClick:function(e){e.preventDefault(),Object(m.c)(function(){return Object(s.c)("/")})}},"Logout"):null)))},a}(l.a.Component),p=function(){return l.a.createElement("footer",{className:"footer"},l.a.createElement("div",{className:"content has-text-centered"},l.a.createElement("p",null,"Burgess Hill Bowls Club - Created by HeyJPDesigns")))},b=(t(163),function(e){var a=e.children;return l.a.createElement(s.b,{query:"755544856",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(d,null),l.a.createElement("div",null,l.a.createElement("main",null,a)),l.a.createElement(p,null))},data:n})});b.propTypes={children:i.a.node.isRequired};a.a=b},161:function(e){e.exports={data:{site:{siteMetadata:{title:"Burgess Hill Bowls Club"}}}}},162:function(e,a,t){"use strict";t.r(a);t(34);var n=t(0),r=t.n(n),l=t(4),c=t.n(l),i=t(55),s=t(2),o=function(e){var a=e.location,t=s.default.getResourcesForPathnameSync(a.pathname);return t?r.a.createElement(i.a,Object.assign({location:a,pageResources:t},t.json)):null};o.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},a.default=o},164:function(e,a,t){var n=t(25).f,r=Function.prototype,l=/^\s*function ([^ (]*)/;"name"in r||t(18)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(l)[1]}catch(e){return""}}})},165:function(e){e.exports={data:{allStrapiFile:{edges:[{node:{id:"File_5cb9cb9084ba9207d4572397",name:"File",date:"2019-04-16T23:00:00.000Z",file:{url:"/uploads/89a0066c3eb3467d8bc05d1daf0f83f4.pdf"}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-app-js-466759e3a94027fe42b4.js.map