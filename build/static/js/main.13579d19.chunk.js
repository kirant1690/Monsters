(this["webpackJsonpmonsters-roll"]=this["webpackJsonpmonsters-roll"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(3),o=n.n(s),a=(n(12),n(4)),i=n(5),l=n(7),h=n(6),u=(n(13),n(14),n(0)),d=function(e){return Object(u.jsxs)("div",{className:"card-container",children:[Object(u.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180")}),Object(u.jsx)("h2",{children:e.monster.name}),Object(u.jsx)("p",{children:e.monster.email})]})},j=(n(16),function(e){return console.log(e),Object(u.jsx)("div",{className:"card-list",children:e.monster.map((function(e){return Object(u.jsx)(d,{monster:e},e.id)}))})}),m=(n(17),function(e){var t=e.placeholder,n=e.handleChange;return Object(u.jsx)("input",{type:"search",className:"search",placeholder:t,onChange:n})}),f=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={monster:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monster:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monster,n=e.searchField,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLocaleLowerCase())}));return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Monsters Rolodex"}),Object(u.jsx)(m,{placeholder:"search monster",handleChange:this.handleChange}),Object(u.jsx)(j,{monster:c})]})}}]),n}(c.Component),b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),s(e),o(e)}))};o.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root")),b()}],[[18,1,2]]]);
//# sourceMappingURL=main.13579d19.chunk.js.map