(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{144:function(e,t,n){"use strict";n.r(t);n(163);var a=n(7),r=n.n(a),s=n(0),c=n.n(s),i=n(156),o=n(159),u=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={password:""},t.handleUpdate=function(e){var n;t.setState(((n={})[e.target.name]=e.target.value,n))},t.handleSubmit=function(e){console.log(t.state),e.preventDefault(),Object(o.a)(t.state)},t}return r()(t,e),t.prototype.render=function(){var e=this;return Object(o.b)()&&Object(i.c)("/app/minutes"),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"columns form-wrap is-centered is-vcentered"},c.a.createElement("div",{className:"column is-two-fifths"},c.a.createElement("div",{className:"box "},c.a.createElement("div",{className:"field "},c.a.createElement("label",{className:"label"},"Member Area"),c.a.createElement("div",{className:"control"},c.a.createElement("input",{className:"input",type:"text",placeholder:"Enter Password",name:"password",onChange:this.handleUpdate})),c.a.createElement("p",{className:"help"},"Enter member password")),c.a.createElement("button",{className:"button is-primary is-fullwidth is-small",onClick:function(t){e.handleSubmit(t),Object(i.c)("/app/minutes")}},"Login")))))},t}(c.a.Component);t.default=u},156:function(e,t,n){"use strict";n.d(t,"b",function(){return l});var a=n(0),r=n.n(a),s=n(4),c=n.n(s),i=n(33),o=n.n(i);n.d(t,"a",function(){return o.a}),n.d(t,"c",function(){return i.navigate});n(157);var u=r.a.createContext({}),l=function(e){return r.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},157:function(e,t,n){var a;e.exports=(a=n(158))&&a.default||a},158:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),s=n(4),c=n.n(s),i=n(55),o=n(2),u=function(e){var t=e.location,n=o.default.getResourcesForPathnameSync(t.pathname);return n?r.a.createElement(i.a,Object.assign({location:t,pageResources:n},n.json)):null};u.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=u},159:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"b",function(){return c}),n.d(t,"c",function(){return i});var a=function(){return"undefined"!=typeof window&&window.sessionStorage.getItem("gatsbyUser")?JSON.parse(window.sessionStorage.getItem("gatsbyUser")):{}},r=function(e){return window.sessionStorage.setItem("gatsbyUser",JSON.stringify(e))},s=function(e){return"1970"===e.password&&r({username:"member"})},c=function(){return!!a().username},i=function(e){r({}),e()}},163:function(e,t,n){var a=n(25).f,r=Function.prototype,s=/^\s*function ([^ (]*)/;"name"in r||n(18)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(s)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=component---src-pages-app-login-js-ab314ead256e32d30d72.js.map