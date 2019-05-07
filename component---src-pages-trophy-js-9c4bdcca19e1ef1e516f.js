(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{157:function(e,a,t){"use strict";t.r(a);t(76),t(56),t(35);var n=t(0),r=t.n(n),l=t(165),s=(t(170),t(189),t(339),function(e){var a=e.entries.edges,t=[];return[1,2,3,4].forEach(function(e){var n=c(a,e);return t.push(n)}),r.a.createElement("div",{className:"container league-table-container"},r.a.createElement("div",{className:"columns is-centered"},r.a.createElement("div",{className:"column is-four-fifths "},r.a.createElement("div",{className:"trophy-header"},r.a.createElement("h2",{className:"title is-2 has-text-centered has-text-weight-light"},"Nicholas Soames Trophy")),r.a.createElement("h4",{className:"subtitle is-4"},"League Table"),r.a.createElement("table",{className:"table is-bordered is-striped is-fullwidth"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("abbr",{title:"Team"},"TM")),r.a.createElement("td",null,r.a.createElement("abbr",{title:"Played"},"PLD")),r.a.createElement("td",null,r.a.createElement("abbr",{title:"Points"},"PTS")),r.a.createElement("td",null,r.a.createElement("abbr",{title:"Shots For"},"SF")),r.a.createElement("td",null,r.a.createElement("abbr",{title:"Shots Against"},"SA")),r.a.createElement("td",null,r.a.createElement("abbr",{title:"Shot Difference"},"SD (+/-)")))),r.a.createElement("tfoot",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("abbr",{title:"Team"},"TM")),r.a.createElement("td",null,r.a.createElement("abbr",{title:"Played"},"PLD")),r.a.createElement("td",null,r.a.createElement("abbr",{title:"Points"},"PTS")),r.a.createElement("td",null,r.a.createElement("abbr",{title:"Shots For"},"SF")),r.a.createElement("td",null,r.a.createElement("abbr",{title:"Shots Against"},"SA")),r.a.createElement("td",null,r.a.createElement("abbr",{title:"Shot Difference"},"SD (+/-)")))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{className:"has-text-weight-semibold has-background-primary",colSpan:"6"},"Pool 1")),t[0],r.a.createElement("tr",null,r.a.createElement("td",{className:" has-text-weight-semibold has-background-primary",colSpan:"6"},"Pool 2")),t[1],r.a.createElement("tr",null,r.a.createElement("td",{className:"has-text-weight-semibold has-background-primary",colSpan:"6"},"Pool 3")),t[2],r.a.createElement("tr",null,r.a.createElement("td",{className:"has-text-weight-semibold has-background-primary",colSpan:"6"},"Pool 4")),t[3])))))}),c=function(e,a){return e.filter(function(e){return e.node.pool===a.toString()}).sort(function(e,a){return a.node.points-e.node.points}).map(function(e,a){var t=e.node;return r.a.createElement("tr",{key:t.name},r.a.createElement("td",{className:a<1?"has-text-weight-semibold":""},t.name),r.a.createElement("td",null,t.played),r.a.createElement("td",null,t.points),r.a.createElement("td",null,t.shots_for),r.a.createElement("td",null,t.shots_against),r.a.createElement("td",null,t.shots_for>=t.shots_against?"+"+(t.shots_for-t.shots_against):""+(t.shots_for-t.shots_against)))})},i=t(210),m=t.n(i),o=["January","February","March","April","May","June","July","August","September","October","November","December"],u=function(e){var a=e.fixture;return r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"level is-marginless"},r.a.createElement("div",{className:"level-left"},r.a.createElement("div",{className:"level-item"},r.a.createElement(d,{date:a.date})),r.a.createElement("div",{className:"level-item"},r.a.createElement(E,{home:a.home_team,away:a.away_team}))),r.a.createElement("div",{className:"level-right"},r.a.createElement("div",{className:"level-item"},r.a.createElement("div",null,r.a.createElement("p",{className:"heading"},"Result"),a.home_score&&a.away_score&&r.a.createElement("p",{className:"title is-5"},a.home_score+" - "+a.away_score),!a.home_score&&r.a.createElement("p",{className:"title is-5"},"TBC"))),r.a.createElement("div",{className:"level-item"},r.a.createElement("div",null,r.a.createElement("p",{className:"heading"},"Points"),r.a.createElement("p",{className:"title is-5"},a.points))))))},d=function(e){var a=e.date,t=new Date(a);return r.a.createElement("div",{className:m.a.dateBoxWrap},r.a.createElement("h5",{className:"title is-6  has-text-info is-marginless has-text-weight-bold"},o[t.getMonth()]),r.a.createElement("h5",{className:"subtitle is-7 is-marginless"},["Sun","Mon","Tues","Wed","Thur","Fri","Sat","Sun"][t.getDay()].toUpperCase()),r.a.createElement("h2",{className:"subtitle is-3 is-marginless"},t.getDate()))},E=function(e){var a=e.home,t=e.away;return r.a.createElement("div",{className:m.a.descWrap},r.a.createElement("p",{className:"heading"},"Match"),r.a.createElement("h1",{className:"has-text-weight-semibold"},a+" vs "+t))},v=function(e){var a=e.fixtures,t=(e.year,e.month,a.edges);return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"columns is-centered"},r.a.createElement("div",{className:"column is-four-fifths "},r.a.createElement("h4",{className:"subtitle is-4"},"League Fixtures"),r.a.createElement("div",{className:"league-fixture-wrap"},t.map(function(e){var a=e.node;return r.a.createElement(u,{key:a.id,fixture:a})})))))};t.d(a,"query",function(){return h});a.default=function(e){var a=e.data;return r.a.createElement(l.a,null,r.a.createElement(s,{entries:a.entries}),r.a.createElement("hr",null),r.a.createElement(v,{fixtures:a.fixtures}))};var h="2010558994"},160:function(e,a,t){"use strict";t.d(a,"b",function(){return o});var n=t(0),r=t.n(n),l=t(4),s=t.n(l),c=t(33),i=t.n(c);t.d(a,"a",function(){return i.a}),t.d(a,"c",function(){return c.navigate});t(161);var m=r.a.createContext({}),o=function(e){return r.a.createElement(m.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};o.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},161:function(e,a,t){var n;e.exports=(n=t(162))&&n.default||n},162:function(e,a,t){"use strict";t.r(a);t(34);var n=t(0),r=t.n(n),l=t(4),s=t.n(l),c=t(55),i=t(2),m=function(e){var a=e.location,t=i.default.getResourcesForPathnameSync(a.pathname);return t?r.a.createElement(c.a,Object.assign({location:a,pageResources:t},t.json)):null};m.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},a.default=m},163:function(e,a,t){"use strict";t.d(a,"a",function(){return l}),t.d(a,"b",function(){return s}),t.d(a,"c",function(){return c});var n=function(){return"undefined"!=typeof window&&window.sessionStorage.getItem("gatsbyUser")?JSON.parse(window.sessionStorage.getItem("gatsbyUser")):{}},r=function(e){return window.sessionStorage.setItem("gatsbyUser",JSON.stringify(e))},l=function(e){return"1970"===e.password&&r({username:"member"})},s=function(){return!!n().username},c=function(e){r({}),e()}},164:function(e){e.exports={data:{site:{siteMetadata:{title:"Burgess Hill Bowls Club"}}}}},165:function(e,a,t){"use strict";var n=t(164),r=t(0),l=t.n(r),s=t(4),c=t.n(s),i=t(160),m=t(7),o=t.n(m),u=t(163),d=function(e){function a(a){var t;return(t=e.call(this,a)||this).toggleNav=function(){return t.setState({activeNav:!t.state.activeNav})},t.state={activeNav:""},t}return o()(a,e),a.prototype.render=function(){var e=this;return l.a.createElement("nav",{className:"navbar has-background-white-ter",role:"navigation","aria-label":"main navigation"},l.a.createElement("div",{className:"navbar-brand"},l.a.createElement(i.a,{className:"navbar-item",to:"/"},l.a.createElement("p",{className:"title"},"BH",l.a.createElement("span",{className:"has-text-primary"},"BC"))),l.a.createElement("a",{className:"navbar-burger "+(this.state.activeNav?"is-active":""),"data-target":"navMenu","aria-label":"menu","aria-expanded":"false",onClick:function(){return e.toggleNav()}},l.a.createElement("span",{"aria-hidden":"true"}),l.a.createElement("span",{"aria-hidden":"true"}),l.a.createElement("span",{"aria-hidden":"true"}))),l.a.createElement("div",{className:"navbar-menu "+(this.state.activeNav?"is-active":"")},l.a.createElement("div",{className:"navbar-end"},l.a.createElement(i.a,{className:"navbar-item",to:"/"},"Home"),l.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},l.a.createElement(i.a,{className:"navbar-item",to:"/history"},"About"),l.a.createElement("div",{className:"navbar-dropdown"},l.a.createElement(i.a,{className:"navbar-item",to:"/commitee"},"Committee"),l.a.createElement(i.a,{className:"navbar-item",to:"/history"},"History"))),l.a.createElement(i.a,{className:"navbar-item",to:"/news"},"News"),l.a.createElement(i.a,{className:"navbar-item",to:"/fixtures"},"Fixtures"),l.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},l.a.createElement(i.a,{className:"navbar-item",to:"/competitions"},"Competitions"),l.a.createElement("div",{className:"navbar-dropdown"},l.a.createElement(i.a,{className:"navbar-item",to:"/trophy"},"Nicholas Soames Trophy"),l.a.createElement(i.a,{className:"navbar-item",to:"/rules"},"Rules"))),l.a.createElement(i.a,{className:"navbar-item",to:"/contact"},"Contact"),Object(u.b)()&&l.a.createElement(i.a,{className:"navbar-item",to:"/app/minutes"},"Minutes"),!Object(u.b)()&&l.a.createElement(i.a,{className:"navbar-item",to:"/app/login"},"Login"),Object(u.b)()?l.a.createElement(i.a,{className:"navbar-item",to:"/app/login",onClick:function(e){e.preventDefault(),Object(u.c)(function(){return Object(i.c)("/")})}},"Logout"):null)))},a}(l.a.Component),E=function(){return l.a.createElement("footer",{className:"footer has-background-grey-dark"},l.a.createElement("div",{className:"content has-text-centered"},l.a.createElement("div",{className:"level"},l.a.createElement("div",{className:"level-item"},l.a.createElement("p",{className:"is-uppercase has-text-white-ter"},"Burgess Hill Bowling Club, Westhill Drive, Burgess Hill, RH15 9PP, 01444 870533"))),l.a.createElement("hr",{className:"has-background-white"}),l.a.createElement("div",{className:"level"},l.a.createElement("div",{className:"level-item"},l.a.createElement(i.a,{to:"/",className:"has-text-white"},"Home")),l.a.createElement("div",{className:"level-item"},l.a.createElement(i.a,{to:"/history",className:"has-text-white"},"About")),l.a.createElement("div",{className:"level-item"},l.a.createElement(i.a,{to:"/fixtures",className:"has-text-white"},"Fixtures")),l.a.createElement("div",{className:"level-item"},l.a.createElement(i.a,{to:"/contact",className:"has-text-white"},"Contact")))))},v=(t(166),function(e){var a=e.children;return l.a.createElement(i.b,{query:"755544856",render:function(e){return l.a.createElement("div",null,l.a.createElement(d,null),l.a.createElement("main",{className:"main has-background-white "},a),l.a.createElement(E,null))},data:n})});v.propTypes={children:c.a.node.isRequired};a.a=v},170:function(e,a,t){var n=t(25).f,r=Function.prototype,l=/^\s*function ([^ (]*)/;"name"in r||t(18)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(l)[1]}catch(e){return""}}})},189:function(e,a,t){"use strict";t(190);var n=t(5),r=t(74),l=t(18),s=/./.toString,c=function(e){t(14)(RegExp.prototype,"toString",e,!0)};t(19)(function(){return"/a/b"!=s.call({source:"a",flags:"b"})})?c(function(){var e=n(this);return"/".concat(e.source,"/","flags"in e?e.flags:!l&&e instanceof RegExp?r.call(e):void 0)}):"toString"!=s.name&&c(function(){return s.call(this)})},190:function(e,a,t){t(18)&&"g"!=/./g.flags&&t(25).f(RegExp.prototype,"flags",{configurable:!0,get:t(74)})},339:function(e,a,t){"use strict";var n=t(11),r=t(27),l=t(26),s=t(19),c=[].sort,i=[1,2,3];n(n.P+n.F*(s(function(){i.sort(void 0)})||!s(function(){i.sort(null)})||!t(340)(c)),"Array",{sort:function(e){return void 0===e?c.call(l(this)):c.call(l(this),r(e))}})},340:function(e,a,t){"use strict";var n=t(19);e.exports=function(e,a){return!!e&&n(function(){a?e.call(null,function(){},1):e.call(null)})}}}]);
//# sourceMappingURL=component---src-pages-trophy-js-9c4bdcca19e1ef1e516f.js.map