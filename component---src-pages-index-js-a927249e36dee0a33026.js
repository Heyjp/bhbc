(window.webpackJsonp=window.webpackJsonp||[]).push([[9,4],{143:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(17),s=t(157),c=(t(161),t(165)),i=t(154),o=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("section",{className:"content"},r.a.createElement("div",{className:"columns minutes-wrap is-centered "},r.a.createElement("div",{className:"column is-three-quarters minute-col"},r.a.createElement("h3",{className:"subtitle is-3"},"Minutes"),r.a.createElement("hr",null),r.a.createElement("table",{className:"table is-fullwidth is-bordered is-striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Name"),r.a.createElement("td",null,"Date"),r.a.createElement("td",null,"Download Link"))),r.a.createElement("tbody",null,e.allStrapiFile.edges.map(function(e){var a=e.node;return r.a.createElement("tr",{key:a.id},r.a.createElement("td",null,a.name),r.a.createElement("td",null,new Date(a.date).toDateString()),r.a.createElement("td",null,r.a.createElement("a",{className:"button is-link",href:a.file.publicURL,download:!0},"Click here to download")))})))))))},m=function(){return r.a.createElement(i.b,{query:"1943531735",render:o,data:c})},u=t(7),d=t.n(u),h=t(156),p=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(a=e.call.apply(e,[this].concat(n))||this).state={password:""},a.handleUpdate=function(e){var t;a.setState(((t={})[e.target.name]=e.target.value,t))},a.handleSubmit=function(e){console.log(a.state),e.preventDefault(),Object(h.a)(a.state)},a}return d()(a,e),a.prototype.render=function(){var e=this;return Object(h.b)()&&Object(i.c)("/app/minutes"),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"columns form-wrap is-centered is-vcentered"},r.a.createElement("div",{className:"column is-two-fifths"},r.a.createElement("div",{className:"box "},r.a.createElement("div",{className:"field "},r.a.createElement("label",{className:"label"},"Member Area"),r.a.createElement("div",{className:"control"},r.a.createElement("input",{className:"input",type:"text",placeholder:"Enter Password",name:"password",onChange:this.handleUpdate})),r.a.createElement("p",{className:"help"},"Enter member password")),r.a.createElement("button",{className:"button is-primary is-fullwidth is-small",onClick:function(a){e.handleSubmit(a),Object(i.c)("/app/minutes")}},"Login")))))},a}(r.a.Component),b=t(74),E=t.n(b),v=function(e){var a=e.component,t=e.location,n=E()(e,["component","location"]);return Object(h.b)()||"/app/login"===t.pathname?r.a.createElement(a,n):(Object(i.c)("/"),null)};a.default=function(){return r.a.createElement(s.a,null,r.a.createElement(l.Router,null,r.a.createElement(v,{path:"/app/minutes",component:m}),r.a.createElement(p,{path:"/app/login"})))}},147:function(e,a,t){"use strict";t.r(a),t.d(a,"pageQuery",function(){return d});var n=t(0),r=t.n(n),l=t(154),s=(t(143),t(157)),c=function(){return r.a.createElement("section",{className:"hero"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{className:"level"},r.a.createElement("div",{className:"level-left"},r.a.createElement("div",null,r.a.createElement("h1",{className:"title"},"Burgess Hill Bowls Club"),r.a.createElement("h4",{className:"subtitle is-4"},"Welcome to our website"))),r.a.createElement("div",{className:"level-right"},r.a.createElement("img",{alt:"Burgess Hill Cred",src:"http://btckstorage.blob.core.windows.net/site9514/Header/New_Crest_2006_006%5B1%5D.jpg"}))))))},i=function(){return r.a.createElement("section",{className:"content has-background-light main-container"},r.a.createElement("div",{className:"container"},r.a.createElement("h4",{className:"subtitle is-4 has-text-centered"},"About Our Club"),r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column"},r.a.createElement("p",null,"Burgess Hill Bowls Club, is the only Lawn Bowls Club in our town and is tucked away in West Hill Drive, just off Royal George Road. The club has over one hundred and fifty playing and social members and has six rinks and a modern licensed clubhouse, used on match days and for social events"),r.a.createElement("p",null,"Our playing season begins in late April and runs through the summer months to the middle of September. The majority of our fixtures throughout the season are friendly matches with other clubs in the area, and are played on weekday and weekend afternoons.These games are a relaxed and easy way to learn, improve and play bowls. ")),r.a.createElement("div",{className:"column"},r.a.createElement("p",null,"For those players wishing to play in a more competitive arena the club enters teams in two leagues as well as players in both National and County competitions. On Monday afternoons and Friday nights there are ‘Turn up and Bowl’ drives, and during the season a number of Fun drives are held such as the Candlelight match, Club Triples day, End of Season drive and others. Most of these events raise money for our chosen charity."),r.a.createElement("p",null,"Please note that we welcome touring sides who are visiting Sussex, please use the contact form if you are interested in playing us.")))))},o=function(){return r.a.createElement("section",{className:"content box-container"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column box-column"},r.a.createElement("div",{className:"box box-vertical "},r.a.createElement("h4",{className:"subtitle "},"Club History"),r.a.createElement("p",null,"Find out more about our club and get to know our commitee."),r.a.createElement(l.a,{to:"/history",className:"button is-fullwidth has-background-success has-text-light"},"History"))),r.a.createElement("div",{className:"column box-column"},r.a.createElement("div",{className:"box box-vertical"},r.a.createElement("h4",{className:"subtitle"},"Events"),r.a.createElement("p",null,"A number of social events take place throughout the year, Quiz nights, Bingo, Club Barbeques, Jazz Nights and a Christmas Party. "),r.a.createElement(l.a,{to:"/events",className:"button is-fullwidth has-background-success has-text-light"},"Find our Events"))),r.a.createElement("div",{className:"column box-column"},r.a.createElement("div",{className:"box box-vertical"},r.a.createElement("h4",{className:"subtitle"},"Find Us"),r.a.createElement("p",null,"Our Green is open to members of the public, but advance booking is required and the appropriate Green Fee payable."),r.a.createElement(l.a,{to:"/contact",className:"button is-fullwidth has-background-success has-text-light"},"Contact Us"))))))},m=function(){return r.a.createElement("section",{className:"content membership-container"},r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"subtitle is-3 has-text-centered"},"Join Us"),r.a.createElement("div",{className:"columns is-5 ",style:{marginTop:"1rem"}},r.a.createElement("div",{className:"column"},r.a.createElement("h4",{className:"has-text-centered"},"Membership"),r.a.createElement("p",null,"Should you feel like taking up a new hobby or just moving from another area or club you will be made most welcome. You don't need to be super fit, just willing to join in and enjoy yourself."),r.a.createElement("p",null,"If you are new to bowling don’t despair, we hold Beginners nights from May with a great coach to show you the ropes. The club also hold a couple of Open Days during the year and everyone is made welcome and encouraged to ‘have a go’")),r.a.createElement("div",{className:"column"},r.a.createElement("h4",{className:"has-text-centered"},"Annual Subscriptions - 2018"),r.a.createElement("p",null,"There are currently three types are Membership: Playing, Junior and Social."),r.a.createElement("ul",null,r.a.createElement("li",null,"Playing Member Subscription is: £80.00 per year"),r.a.createElement("li",null,"Junior Member Subscription is £10.00 per year"),r.a.createElement("li",null,"Social Member Subscription is £16.00 per year")),r.a.createElement("p",null,"The Membership year is from 1st April"),r.a.createElement("p",null,"Our Green is open to members of the public, but advance booking is required and the appropriate Green Fee payable. ")))))},u=function(){return r.a.createElement("section",{className:"sponsor-container has-background-light"},r.a.createElement("h2",{className:"subtitle has-text-centered"},"Sponsors"),r.a.createElement("div",{className:"columns is-centered"},r.a.createElement("div",{className:"column is-half level"},r.a.createElement("figure",{className:"image is-128x128 container"},r.a.createElement(l.a,{to:"http://www.karrenharriswm.co.uk"},r.a.createElement("img",{alt:"sponsor logo",src:"https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fs3-eu-west-1.amazonaws.com%2Ffta-ez-prod%2Fez%2Fimages%2F3%2F6%2F4%2F6%2F1386463-1-eng-GB%2Fsjp.jpg%3Fv1?width=700&source=ftadviser"}))))))};a.default=function(e){e.data;return r.a.createElement(s.a,null,r.a.createElement(c,null),r.a.createElement(i,null),r.a.createElement(o,null),r.a.createElement("hr",null),r.a.createElement(m,null),r.a.createElement(u,null))};var d="561227742"},154:function(e,a,t){"use strict";t.d(a,"b",function(){return m});var n=t(0),r=t.n(n),l=t(4),s=t.n(l),c=t(33),i=t.n(c);t.d(a,"a",function(){return i.a}),t.d(a,"c",function(){return c.navigate});t(155);var o=r.a.createContext({}),m=function(e){return r.a.createElement(o.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},155:function(e,a,t){var n;e.exports=(n=t(159))&&n.default||n},156:function(e,a,t){"use strict";t.d(a,"a",function(){return l}),t.d(a,"b",function(){return s}),t.d(a,"c",function(){return c});var n=function(){return"undefined"!=typeof window&&window.sessionStorage.getItem("gatsbyUser")?JSON.parse(window.sessionStorage.getItem("gatsbyUser")):{}},r=function(e){return window.sessionStorage.setItem("gatsbyUser",JSON.stringify(e))},l=function(e){return"1970"===e.password&&r({username:"member"})},s=function(){return!!n().username},c=function(e){r({}),e()}},157:function(e,a,t){"use strict";var n=t(158),r=t(0),l=t.n(r),s=t(4),c=t.n(s),i=t(154),o=t(7),m=t.n(o),u=t(156),d=function(e){function a(a){var t;return(t=e.call(this,a)||this).toggleNav=function(){return t.setState({activeNav:!t.state.activeNav})},t.state={activeNav:""},t}return m()(a,e),a.prototype.render=function(){var e=this;return l.a.createElement("nav",{className:"navbar has-background-white-ter",role:"navigation","aria-label":"main navigation"},l.a.createElement("div",{className:"navbar-brand"},l.a.createElement(i.a,{className:"navbar-item",to:"/"},l.a.createElement("p",{className:"title"},"BH",l.a.createElement("span",{className:"has-text-primary"},"BC"))),l.a.createElement("a",{role:"button",className:"navbar-burger "+(this.state.activeNav?"is-active":""),"data-target":"navMenu","aria-label":"menu","aria-expanded":"false",onClick:function(){return e.toggleNav()}},l.a.createElement("span",{"aria-hidden":"true"}),l.a.createElement("span",{"aria-hidden":"true"}),l.a.createElement("span",{"aria-hidden":"true"}))),l.a.createElement("div",{className:"navbar-menu "+(this.state.activeNav?"is-active":"")},l.a.createElement("div",{className:"navbar-end"},l.a.createElement(i.a,{className:"navbar-item",to:"/"},"Home"),l.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},l.a.createElement(i.a,{className:"navbar-item",to:"/history"},"About"),l.a.createElement("div",{className:"navbar-dropdown"},l.a.createElement(i.a,{className:"navbar-item",to:"/commitee"},"Committee"),l.a.createElement(i.a,{className:"navbar-item",to:"/history"},"History"))),l.a.createElement(i.a,{className:"navbar-item",to:"/news"},"News"),l.a.createElement(i.a,{className:"navbar-item",to:"/events"},"Events"),l.a.createElement(i.a,{className:"navbar-item",to:"/rules"},"Rules"),l.a.createElement(i.a,{className:"navbar-item",to:"/contact"},"Contact"),Object(u.b)()&&l.a.createElement(i.a,{className:"navbar-item",to:"/app/minutes"},"Minutes"),!Object(u.b)()&&l.a.createElement(i.a,{className:"navbar-item",to:"/app/login"},"Login"),Object(u.b)()?l.a.createElement(i.a,{className:"navbar-item",to:"/app/login",onClick:function(e){e.preventDefault(),Object(u.c)(function(){return Object(i.c)("/")})}},"Logout"):null)))},a}(l.a.Component),h=function(){return l.a.createElement("footer",{className:"footer"},l.a.createElement("div",{className:"content has-text-centered"},l.a.createElement("p",null,"Burgess Hill Bowls Club - Created by HeyJPDesigns")))},p=(t(160),function(e){var a=e.children;return l.a.createElement(i.b,{query:"755544856",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(d,null),l.a.createElement("div",null,l.a.createElement("main",null,a)),l.a.createElement(h,null))},data:n})});p.propTypes={children:c.a.node.isRequired};a.a=p},158:function(e){e.exports={data:{site:{siteMetadata:{title:"Burgess Hill Bowls Club"}}}}},159:function(e,a,t){"use strict";t.r(a);t(34);var n=t(0),r=t.n(n),l=t(4),s=t.n(l),c=t(55),i=t(2),o=function(e){var a=e.location,t=i.default.getResourcesForPathnameSync(a.pathname);return t?r.a.createElement(c.a,Object.assign({location:a,pageResources:t},t.json)):null};o.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},a.default=o},161:function(e,a,t){var n=t(25).f,r=Function.prototype,l=/^\s*function ([^ (]*)/;"name"in r||t(18)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(l)[1]}catch(e){return""}}})},165:function(e){e.exports={data:{allStrapiFile:{edges:[{node:{id:"File_5cb9cb9084ba9207d4572397",name:"File",date:"2019-04-16T23:00:00.000Z",file:{url:"/uploads/89a0066c3eb3467d8bc05d1daf0f83f4.pdf"}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-a927249e36dee0a33026.js.map