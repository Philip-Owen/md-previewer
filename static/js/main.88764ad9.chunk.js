(this["webpackJsonpmd-preview"]=this["webpackJsonpmd-preview"]||[]).push([[0],{120:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(25),l=t.n(i),o=(t(36),t(6)),c=t(2),u=t(3);function d(){var e=Object(c.a)(["\n  text-decoration: underline;\n  cursor: pointer;\n  :hover {\n    color: gray;\n  }\n"]);return d=function(){return e},e}function g(){var e=Object(c.a)(["\n  display: flex;\n  padding: 0 10px;\n  align-items: center;\n  * {\n    padding-left: 10px;\n  }\n"]);return g=function(){return e},e}var p=u.a.div(g()),s=u.a.h3(d()),v=function(e){var n=e.toggleEditor,t=e.toggleRaw,r=e.setToggleEditor,i=e.setToggleRaw;return a.a.createElement(p,null,a.a.createElement("h1",null,"Markdown Editor"),a.a.createElement("div",null,a.a.createElement(s,{onClick:function(){return r(!n)}},n?"Show Editor":"Hide Editor")),a.a.createElement("div",null,a.a.createElement(s,{onClick:function(){return i(!t)}},t?"View Markdown":"View Raw Text")))};function f(){var e=Object(c.a)(["\n  font-size: 18px;\n  resize: none;\n  height: 80vh;\n  width: 100%;\n  outline: none;\n  border: 2px solid black;\n  padding: 0 10px;\n"]);return f=function(){return e},e}function m(){var e=Object(c.a)(["\n  min-width: 30%;\n  padding: 20px;\n  display: flex;\n  align-items: center;\n"]);return m=function(){return e},e}var w=u.a.div(m()),E=u.a.textarea(f()),x=function(e){var n=e.text,t=e.setText;return a.a.createElement(w,null,a.a.createElement(E,{value:n,onChange:function(e){return t(e.target.value)}}))},h=t(29),b=t.n(h);function j(){var e=Object(c.a)(["\n  min-width: 70%;\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  .markdown {\n    outline: 2px solid black;\n    height: 80vh;\n    width: 100%;\n    padding: 0 10px;\n    white-space: pre-wrap;\n    overflow-y: scroll;\n  }\n  pre,\n  code {\n    background-color: lightgray;\n  }\n  pre {\n    padding: 5px;\n    width: fit-content;\n  }\n"]);return j=function(){return e},e}var k=u.a.div(j()),y=function(e){var n=e.text;return a.a.createElement(k,null,a.a.createElement(b.a,{className:"markdown",source:n}))};function O(){var e=Object(c.a)(["\n  min-width: 70%;\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  .raw {\n    outline: 2px solid black;\n    height: 80vh;\n    width: 100%;\n    padding: 0 10px;\n    white-space: pre-wrap;\n    overflow-y: scroll;\n  }\n"]);return O=function(){return e},e}var T=u.a.div(O()),R=function(e){var n=e.text;return a.a.createElement(T,null,a.a.createElement("div",{className:"raw"},a.a.createElement("pre",null,n)))};function S(){var e=Object(c.a)(["\n  display: flex;\n  ","\n"]);return S=function(){return e},e}var C=u.a.div(S(),(function(e){return e.toggleEditor?"justify-content: center":null})),M=function(e){var n=e.toggleEditor,t=e.toggleRaw,i=Object(r.useState)("# Type your Markdown here..."),l=Object(o.a)(i,2),c=l[0],u=l[1];return a.a.createElement("div",null,a.a.createElement(C,{toggleEditor:n},n?null:a.a.createElement(x,{text:c,setText:u}),t?a.a.createElement(R,{text:c}):a.a.createElement(y,{text:c})))};var N=function(){var e=Object(r.useState)(!1),n=Object(o.a)(e,2),t=n[0],i=n[1],l=Object(r.useState)(!1),c=Object(o.a)(l,2),u=c[0],d=c[1];return a.a.createElement("div",{className:"App"},a.a.createElement(v,{toggleEditor:t,setToggleEditor:i,toggleRaw:u,setToggleRaw:d}),a.a.createElement(M,{toggleEditor:t,toggleRaw:u}))};l.a.render(a.a.createElement(N,null),document.getElementById("root"))},31:function(e,n,t){e.exports=t(120)},36:function(e,n,t){}},[[31,1,2]]]);
//# sourceMappingURL=main.88764ad9.chunk.js.map