(this.webpackJsonpconverter=this.webpackJsonpconverter||[]).push([[0],{26:function(e,t,n){e.exports=n(41)},31:function(e,t,n){},32:function(e,t,n){},37:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(15),u=n.n(r),l=(n(31),n(8)),o=n(9),i=(n(32),n(14)),s=n(2),m=n(3),b=function(e){return{type:"Change",payload:e}},f=function(e){return{type:"newList",payload:e}};n(37);function v(){var e=Object(m.b)(),t=Object(m.c)((function(e){return e.baseCurrencyReducer})),n=Object(m.c)((function(e){return e.favCurrencyListReducer}));return c.a.createElement("nav",{className:"nav"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(i.b,{to:"/"},"Converter")),c.a.createElement("li",null,c.a.createElement(i.b,{to:"/currencies"},"Currencies"))),c.a.createElement("div",null,c.a.createElement("p",null,"Favorites: "),c.a.createElement("select",{value:t||n[0],onChange:function(t){return n=t.target.value,void e(b(n));var n}},n.map((function(e){return c.a.createElement("option",{key:e},e)})))))}n(39);function E(e){var t=e.url,n=e.toCurrency,r=e.setToCurrency,u=e.countries,l=Object(a.useState)(1),i=Object(o.a)(l,2),s=i[0],f=i[1],v=Object(a.useState)(0),E=Object(o.a)(v,2),d=E[0],j=E[1],O=Object(m.b)(),h=Object(m.c)((function(e){return e.baseCurrencyReducer}));return Object(a.useEffect)((function(){h&&n&&fetch("".concat(t,"?base=").concat(h,"&symbols=").concat(n)).then((function(e){return e.json()})).then((function(e){return j(e.rates[n]*s)}))}),[h,n,s,t]),c.a.createElement("section",{className:"converter"},c.a.createElement("h1",null,"Converter"),c.a.createElement("div",{className:"converter__container"},c.a.createElement("div",{className:"converter__inputBox"},c.a.createElement("label",null),c.a.createElement("input",{type:"number",value:s,onChange:function(e){return function(e){f(e)}(e.target.value)}})),c.a.createElement("div",{className:"converter__operations"},c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"currencyFrom"},"From"),c.a.createElement("select",{id:"currencyFrom",className:"converter__select",value:h,onChange:function(e){return O(b(e.target.value))}},u?u.map((function(e){return c.a.createElement("option",{key:e,value:e},e)})):"loading data")),c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"currencyTo"},"To"),c.a.createElement("select",{id:"currencyTo",className:"converter__select",value:n,onChange:function(e){return r(e.target.value)}},u?u.map((function(e){return c.a.createElement("option",{key:e,value:e},e)})):"loading data"))),c.a.createElement("div",{className:"converter__btn"},c.a.createElement("button",{type:"button",className:"converter__submit",onClick:function(){var e=h;O(b(n)),r(e)}},"SWAP"))),c.a.createElement("div",{className:"converter__resultbox"},c.a.createElement("h2",null,"TOTAL : ",c.a.createElement("span",null,d)," ",n))))}n(40);var d=n(25),j=n.n(d);function O(e){var t=e.url,n=e.setCountries,r=Object(a.useState)([]),u=Object(o.a)(r,2),i=u[0],s=u[1],b=Object(m.c)((function(e){return e.baseCurrencyReducer})),v=Object(m.c)((function(e){return e.favCurrencyListReducer})),E=Object(m.b)();return Object(a.useEffect)((function(){b&&t&&fetch("".concat(t,"?base=").concat(b)).then((function(e){return e.json()})).then((function(e){return s(e.rates)}))}),[b,t]),c.a.createElement("section",{className:"container"},c.a.createElement("h1",null,"Choose favorite currencies"),c.a.createElement("ul",{className:"List"},Object(l.a)(new Set([].concat(Object(l.a)(v),Object(l.a)(Object.keys(i))))).map((function(e){return c.a.createElement("li",{key:e,onClick:function(e){return function(e){var t=e.currentTarget.children[0].innerHTML;v.includes(t)?E(f(v.filter((function(e){return e!==t})))):E(f([t].concat(Object(l.a)(v)))),n((function(e){return Object(l.a)(new Set([].concat(Object(l.a)(v),Object(l.a)(e))))}))}(e)},className:j()({List__favorite:v.includes(e)})},c.a.createElement("h4",null,e),c.a.createElement("div",null,"1 ",b," = ",i[e]?i[e]:1," ",e))}))))}var h=function(){var e="https://api.exchangeratesapi.io/latest",t=Object(m.b)(),n=Object(a.useState)([]),r=Object(o.a)(n,2),u=r[0],f=r[1],d=Object(a.useState)([]),j=Object(o.a)(d,2),h=j[0],p=j[1],y=Object(a.useState)(),C=Object(o.a)(y,2),g=C[0],_=C[1];return Object(a.useEffect)((function(){fetch(e).then((function(e){return e.json()})).then((function(e){f(e),t(b(e.base)),p([e.base].concat(Object(l.a)(Object.keys(e.rates).sort()))),_("USD")}))}),[e]),c.a.createElement("div",{className:"App"},c.a.createElement(i.a,null,c.a.createElement(v,null),c.a.createElement(s.c,null,c.a.createElement(s.a,{path:"/",exact:!0,render:function(){return 0!==u?c.a.createElement(E,{url:e,countries:h,toCurrency:g,setToCurrency:_}):"loading"}}),c.a.createElement(s.a,{path:"/currencies",exact:!0,render:function(){return c.a.createElement(O,{url:e,setCountries:p})}}))))},p=n(11);var y=Object(p.b)({baseCurrencyReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"EUR",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"Change":return t.payload;default:return e}},favCurrencyListReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["EUR","USD"],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"newList":return t.payload;default:return e}}}),C=Object(p.c)(y);u.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m.a,{store:C},c.a.createElement(h,null))),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.5e0ef5f5.chunk.js.map