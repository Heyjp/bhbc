(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{154:function(e,t,a){"use strict";a.r(t);a(75);var n=a(37),r=a.n(n),i=a(7),s=a.n(i),c=a(0),l=a.n(c),o=a(165),m=(a(293),a(294),a(185),a(35),a(296)),u=a.n(m),d=function(){return l.a.createElement("section",{className:"hero"},l.a.createElement("div",{className:"hero-body"},l.a.createElement("div",{className:"level"},l.a.createElement("div",{className:"level-item"},l.a.createElement("h1",{className:"title has-text-centered has-text-weight-light"},"Club Competitions")))))},v=function(e){return l.a.createElement("div",{className:""+u.a.matchHeader},l.a.createElement("p",{className:"has-text-weight-semibold has-text-info"},"G",e.matchNum))},f=function(e){return l.a.createElement("div",{className:""+u.a.matchContainer},l.a.createElement(v,{matchNum:e.matchNum}),l.a.createElement("ul",{className:u.a.playerList},l.a.createElement("li",{className:"has-background-white-ter has-text-weight-semibold "+u.a.player},e.challenger||""),l.a.createElement("li",{className:"has-background-grey-lighter has-text-weight-semibold "+u.a.player},e.opponent||"")))},p=function(){return l.a.createElement("div",{className:""+u.a.byeWrap},l.a.createElement("div",null),l.a.createElement("div",null))},h=function(e){var t=e.round;return e.semiFinals?t="Semi Finals":e.finals&&(t="Finals"),l.a.createElement("div",{className:"subtitle is-4 "+u.a.title},l.a.createElement("h5",{className:u.a.titleText},""+(isNaN(t)?t:"Round "+t)))},E=function(e){var t=e.totalTeams,a=e.round,n=e.matches,r=e.prelim,i=void 0!==r&&r,s=function(e,t,a){if(a)return function(e,t,a){var n=new Array(e).fill(null);if(!t)return n.map(function(e,t){return l.a.createElement(p,{key:"prelim"+t})});return n.map(function(e,n){var r=t.find(function(e){return e.match_number===n+1});if(r){var i=r.challenger,s=void 0===i?"TBC":i,c=r.round,o=r.match_number,m=void 0===o?n+1:o,u=r.opponent,d=void 0===u?"TBC":u;return l.a.createElement(f,{challenger:s,opponent:d,key:"prelim"+n,round:c,matchNum:m})}return n<a?l.a.createElement(f,{key:"prelim"+n+" ",matchNum:n+1}):l.a.createElement(p,{key:"prelim"+n})})}(e,t,a);return new Array(e).fill(null).map(function(e,a){var n=t.find(function(e){return e.match_number===a+1});if(n){var r=n.challenger,i=void 0===r?"TBC":r,s=n.round,c=n.match_number,o=void 0===c?a+1:c,m=n.opponent,u=void 0===m?"TBC":m;return l.a.createElement(f,{challenger:i,opponent:u,key:a,round:s,matchNum:o})}return l.a.createElement(f,{key:a,matchNum:a+1})})}(t,n.filter(function(e){return i?"prelim"===e.round:e.round===a.toString()}),i);return l.a.createElement("div",{className:u.a.round},l.a.createElement(h,{round:a,seminFinals:e.semiFinals,finals:e.finals}),l.a.createElement("div",{className:u.a.matchwrap},s))},N=function(e){return l.a.createElement("div",{style:{width:"100%"}},l.a.createElement(d,null),l.a.createElement("hr",null),l.a.createElement("div",{className:"columns is-centered"},l.a.createElement("div",{className:"column is-four-fifths is-full-mobile"},l.a.createElement("div",{className:u.a.container},e.tournys&&b(e.tournys)))))};var b=function(e){var t=e.matches,a=e.total_teams,n=!1,r=[64,32,16,8,4,2],i=r.findIndex(function(e){return a>=e});a!==r[i]&&(n=!0);var s=[];if(n){var c=a-r[i];s.push(l.a.createElement(E,{key:"key0",round:"Prelim",totalTeams:r[i-1]/2,prelim:c,matches:t,totalMatches:a}))}for(var o=1,m=i;m<r.length;m++)s.push(l.a.createElement(E,{key:"key"+m,round:o,totalTeams:r[m]/2,matches:t,semiFinals:m===r.length-2,finals:m===r.length-1})),o++;return s},g=function(e){return l.a.createElement("ul",null,e.tournys&&e.tournys.map(function(t){return l.a.createElement("li",{key:t.title},l.a.createElement("a",{className:t.title===e.tourny?"is-active":"",onClick:function(){return e.setTourny(t.title)}},t.title))}))},y=function(e){return l.a.createElement("div",{className:"menu-wrap has-background-white-bis"},l.a.createElement("aside",{className:"menu "},l.a.createElement("p",{className:"menu-label"},"Club Competitions"),l.a.createElement("ul",{className:"menu-list"},e.comps.map(function(t,a){return l.a.createElement("li",{key:"comp-"+a},l.a.createElement("a",{className:t.Name===e.comp?"is-active":"",onClick:function(){e.setComp(t.Name)}},t.Name),t.Name===e.comp&&l.a.createElement(g,{tourny:e.tourny,tournys:t.tournaments,setTourny:e.setTourny}))}))))};a.d(t,"pageQuery",function(){return C});var w=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={comp:"",tourny:""},a.setComp=a.setComp.bind(r()(a)),a.setTournament=a.setTournament.bind(r()(a)),a}s()(t,e);var a=t.prototype;return a.setComp=function(e){return this.setState({comp:e===this.state.comp?"":e})},a.setTournament=function(e){return this.setState({tourny:e===this.state.tourny?"":e})},a.render=function(){var e=this,t=this.props.data,a=t.competition,n=t.tournament,r=a.edges.map(function(e){return e.node}),i=n.edges.map(function(e){return e.node}).find(function(t){return t.title===e.state.tourny});return l.a.createElement(o.a,null,l.a.createElement("div",{className:"events-wrapper"},l.a.createElement(y,{comps:r,setComp:this.setComp,setTourny:this.setTournament,tourny:this.state.tourny,comp:this.state.comp}),l.a.createElement(N,{tournys:i})))},t}(l.a.Component),C=(t.default=w,"650444264")},160:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),i=a(4),s=a.n(i),c=a(33),l=a.n(c);a.d(t,"a",function(){return l.a}),a.d(t,"c",function(){return c.navigate});a(161);var o=r.a.createContext({}),m=function(e){return r.a.createElement(o.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},161:function(e,t,a){var n;e.exports=(n=a(162))&&n.default||n},162:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),s=a.n(i),c=a(55),l=a(2),o=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};o.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=o},163:function(e,t,a){"use strict";a.d(t,"a",function(){return i}),a.d(t,"b",function(){return s}),a.d(t,"c",function(){return c});var n=function(){return"undefined"!=typeof window&&window.sessionStorage.getItem("gatsbyUser")?JSON.parse(window.sessionStorage.getItem("gatsbyUser")):{}},r=function(e){return window.sessionStorage.setItem("gatsbyUser",JSON.stringify(e))},i=function(e){return"1970"===e.password&&r({username:"member"})},s=function(){return!!n().username},c=function(e){r({}),e()}},164:function(e){e.exports={data:{site:{siteMetadata:{title:"Burgess Hill Bowls Club"}}}}},165:function(e,t,a){"use strict";var n=a(164),r=a(0),i=a.n(r),s=a(4),c=a.n(s),l=a(160),o=a(7),m=a.n(o),u=a(163),d=function(e){function t(t){var a;return(a=e.call(this,t)||this).toggleNav=function(){return a.setState({activeNav:!a.state.activeNav})},a.state={activeNav:""},a}return m()(t,e),t.prototype.render=function(){var e=this;return i.a.createElement("nav",{className:"navbar has-background-white-ter",role:"navigation","aria-label":"main navigation"},i.a.createElement("div",{className:"navbar-brand"},i.a.createElement(l.a,{className:"navbar-item",to:"/"},i.a.createElement("p",{className:"title"},"BH",i.a.createElement("span",{className:"has-text-primary"},"BC"))),i.a.createElement("a",{className:"navbar-burger "+(this.state.activeNav?"is-active":""),"data-target":"navMenu","aria-label":"menu","aria-expanded":"false",onClick:function(){return e.toggleNav()}},i.a.createElement("span",{"aria-hidden":"true"}),i.a.createElement("span",{"aria-hidden":"true"}),i.a.createElement("span",{"aria-hidden":"true"}))),i.a.createElement("div",{className:"navbar-menu "+(this.state.activeNav?"is-active":"")},i.a.createElement("div",{className:"navbar-end"},i.a.createElement(l.a,{className:"navbar-item",to:"/"},"Home"),i.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},i.a.createElement(l.a,{className:"navbar-item",to:"/history"},"About"),i.a.createElement("div",{className:"navbar-dropdown"},i.a.createElement(l.a,{className:"navbar-item",to:"/commitee"},"Committee"),i.a.createElement(l.a,{className:"navbar-item",to:"/history"},"History"))),i.a.createElement(l.a,{className:"navbar-item",to:"/news"},"News"),i.a.createElement(l.a,{className:"navbar-item",to:"/fixtures"},"Fixtures"),i.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},i.a.createElement(l.a,{className:"navbar-item",to:"/competitions"},"Competitions"),i.a.createElement("div",{className:"navbar-dropdown"},i.a.createElement(l.a,{className:"navbar-item",to:"/trophy"},"Nicholas Soames Trophy"),i.a.createElement(l.a,{className:"navbar-item",to:"/rules"},"Rules"))),i.a.createElement(l.a,{className:"navbar-item",to:"/contact"},"Contact"),Object(u.b)()&&i.a.createElement(l.a,{className:"navbar-item",to:"/app/minutes"},"Minutes"),!Object(u.b)()&&i.a.createElement(l.a,{className:"navbar-item",to:"/app/login"},"Login"),Object(u.b)()?i.a.createElement(l.a,{className:"navbar-item",to:"/app/login",onClick:function(e){e.preventDefault(),Object(u.c)(function(){return Object(l.c)("/")})}},"Logout"):null)))},t}(i.a.Component),v=function(){return i.a.createElement("footer",{className:"footer has-background-grey-dark"},i.a.createElement("div",{className:"content has-text-centered"},i.a.createElement("div",{className:"level"},i.a.createElement("div",{className:"level-item"},i.a.createElement("p",{className:"is-uppercase has-text-white-ter"},"Burgess Hill Bowling Club, Westhill Drive, Burgess Hill, RH15 9PP, 01444 870533"))),i.a.createElement("hr",{className:"has-background-white"}),i.a.createElement("div",{className:"level"},i.a.createElement("div",{className:"level-item"},i.a.createElement("p",{className:"has-text-white"},"Home")),i.a.createElement("div",{className:"level-item"},i.a.createElement("p",{className:"has-text-white"},"About")),i.a.createElement("div",{className:"level-item"},i.a.createElement("p",{className:"has-text-white"},"Events")),i.a.createElement("div",{className:"level-item"},i.a.createElement("p",{className:"has-text-white"},"Contact")))))},f=(a(166),function(e){var t=e.children;return i.a.createElement(l.b,{query:"755544856",render:function(e){return i.a.createElement("div",null,i.a.createElement(d,null),i.a.createElement("main",{className:"main has-background-white "},t),i.a.createElement(v,null))},data:n})});f.propTypes={children:c.a.node.isRequired};t.a=f},185:function(e,t,a){"use strict";a(186);var n=a(5),r=a(74),i=a(18),s=/./.toString,c=function(e){a(14)(RegExp.prototype,"toString",e,!0)};a(19)(function(){return"/a/b"!=s.call({source:"a",flags:"b"})})?c(function(){var e=n(this);return"/".concat(e.source,"/","flags"in e?e.flags:!i&&e instanceof RegExp?r.call(e):void 0)}):"toString"!=s.name&&c(function(){return s.call(this)})},186:function(e,t,a){a(18)&&"g"!=/./g.flags&&a(25).f(RegExp.prototype,"flags",{configurable:!0,get:a(74)})},293:function(e,t,a){"use strict";var n=a(11),r=a(79)(6),i="findIndex",s=!0;i in[]&&Array(1)[i](function(){s=!1}),n(n.P+n.F*s,"Array",{findIndex:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),a(36)(i)},294:function(e,t,a){var n=a(11);n(n.P,"Array",{fill:a(295)}),a(36)("fill")},295:function(e,t,a){"use strict";var n=a(26),r=a(78),i=a(15);e.exports=function(e){for(var t=n(this),a=i(t.length),s=arguments.length,c=r(s>1?arguments[1]:void 0,a),l=s>2?arguments[2]:void 0,o=void 0===l?a:r(l,a);o>c;)t[c++]=e;return t}}}]);
//# sourceMappingURL=component---src-pages-competitions-js-11768272869e769fc412.js.map