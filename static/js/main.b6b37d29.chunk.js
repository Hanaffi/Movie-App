(this.webpackJsonpmovieapp=this.webpackJsonpmovieapp||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),s=n.n(i),a=n(4),r=n.n(a),o=(n(11),n(5)),j=n(3);function u(e){var t,n=e.title,i=e.poster_path,s=e.overview,a=e.vote_average;return Object(c.jsxs)("div",{className:"movie",children:[Object(c.jsx)("img",{className:"img_to_blur",src:i?"https://image.tmdb.org/t/p/w1280"+i:"https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg",alt:n}),Object(c.jsxs)("div",{className:"movie-info",children:[Object(c.jsx)("h3",{children:n}),Object(c.jsx)("span",{className:"tag ".concat((t=a,t>7?"green":t>5?"yellow":"red")),children:a})]}),Object(c.jsxs)("div",{className:"movie-over",children:[Object(c.jsx)("h2",{children:"Overview"}),Object(c.jsx)("p",{children:""===s?" -- No Info -- ":s})]})]})}function l(){var e=Object(i.useState)([]),t=Object(j.a)(e,2),n=t[0],s=t[1],a=Object(i.useState)(""),r=Object(j.a)(a,2),l=r[0],h=r[1];Object(i.useEffect)((function(){fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1").then((function(e){return e.json()})).then((function(e){s(e.results)}))}),[]);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("header",{children:Object(c.jsx)("form",{onSubmit:function(e){l&&(e.preventDefault(),fetch("https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="+l).then((function(e){return e.json()})).then((function(e){s(e.results)})))},children:Object(c.jsx)("input",{value:l,onChange:function(e){h(e.target.value)},className:"search",type:"text",placeholder:"Search ..."})})}),Object(c.jsx)("div",{className:"Null"}),Object(c.jsx)("div",{className:"movie-container",children:n.length>0?n.map((function(e){return Object(c.jsx)(u,Object(o.a)({},e),e.id)})):"No Movies Matches!"})]})}var h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),s(e),a(e)}))};r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(l,{})}),document.getElementById("root")),h()}},[[12,1,2]]]);
//# sourceMappingURL=main.b6b37d29.chunk.js.map