(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{51:function(n,t,e){},52:function(n,t,e){},57:function(n,t,e){"use strict";e.r(t);var c,i=e(0),r=e.n(i),o=e(26),u=e.n(o),l=(e(51),e(25)),s=(e(52),e(53),e(45)),a=e(4),j=function(n){var t=n.num,e=n.onClick;return Object(a.jsx)(s.a,{type:"ghost",shape:"circle",onClick:function(){return e(t)},children:t})},b=function(n){var t=n.operation,e=n.onClick;return Object(a.jsx)(s.a,{type:"primary",shape:"circle",onClick:function(){return e(t)},children:t})};!function(n){n.fold="+",n.subtract="-",n.multiply="*",n.division="/",n.equals="=",n.clear="c"}(c||(c={}));var f=e(59);var d=function(){var n=Object(i.useState)(),t=Object(l.a)(n,2),e=t[0],r=t[1],o=Object(i.useState)(null),u=Object(l.a)(o,2),s=u[0],d=u[1],O=Object(i.useState)(),v=Object(l.a)(O,2),x=v[0],k=v[1],m=Object(i.useState)(""),p=Object(l.a)(m,2),C=p[0],h=p[1],g=function(n){if(s)if(void 0===x)k(n);else{var t=x.toString()+n.toString();k(Number(t))}else if(void 0===e)r(n);else{var c=e.toString()+n.toString();r(Number(c))}},y=function(n){if(n===c.clear)r(void 0),d(null),k(void 0);else if(n===c.equals){var t=0;switch(s){case c.fold:t=e+x;break;case c.subtract:t=e-x;break;case c.multiply:t=e*x;break;case c.division:t=e/x;break;default:throw new Error("\u0422\u0430\u043a\u043e\u0439 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442")}r(t),d(null),k(void 0)}else d(n)};return Object(i.useEffect)((function(){h("".concat(null!==e&&void 0!==e?e:"").concat(null!==s&&void 0!==s?s:"").concat(null!==x&&void 0!==x?x:""))}),[e,s,x]),Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("div",{className:"result_input",children:Object(a.jsx)(f.a,{readOnly:!0,value:C,type:"text"})}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)(j,{num:7,onClick:function(){return g(7)}}),Object(a.jsx)(j,{num:8,onClick:function(){return g(8)}}),Object(a.jsx)(j,{num:9,onClick:function(){return g(9)}}),Object(a.jsx)(b,{operation:c.multiply,onClick:function(){return y(c.multiply)}})]}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)(j,{num:4,onClick:function(){return g(4)}}),Object(a.jsx)(j,{num:5,onClick:function(){return g(5)}}),Object(a.jsx)(j,{num:6,onClick:function(){return g(6)}}),Object(a.jsx)(b,{operation:c.subtract,onClick:function(){return y(c.subtract)}})]}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)(j,{num:1,onClick:function(){return g(1)}}),Object(a.jsx)(j,{num:2,onClick:function(){return g(2)}}),Object(a.jsx)(j,{num:3,onClick:function(){return g(3)}}),Object(a.jsx)(b,{operation:c.fold,onClick:function(){return y(c.fold)}})]}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)(b,{operation:c.clear,onClick:function(){return y(c.clear)}}),Object(a.jsx)(j,{num:0,onClick:function(){return g(0)}}),Object(a.jsx)(b,{operation:c.division,onClick:function(){return y(c.division)}}),Object(a.jsx)(b,{operation:c.equals,onClick:function(){return y(c.equals)}})]})]})},O=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,61)).then((function(t){var e=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,o=t.getTTFB;e(n),c(n),i(n),r(n),o(n)}))};u.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(d,{})}),document.getElementById("root")),O()}},[[57,1,2]]]);
//# sourceMappingURL=main.d31cb243.chunk.js.map