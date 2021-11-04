(this["webpackJsonppomodoro-clock"]=this["webpackJsonppomodoro-clock"]||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),i=n(6),a=n.n(i),r=(n(11),n(2)),o=(n(5),n(3)),j=s.a.createContext(),b=n(0),u=function(e){Object(o.a)(e);var t=Object(c.useContext)(j),n=t.breakLength,s=t.setBreakLength,i=t.isRunning,a=Object(c.useState)(1===n),u=Object(r.a)(a,2),d=u[0],l=u[1],O=Object(c.useState)(!1),h=Object(r.a)(O,2),x=h[0],f=h[1];return Object(b.jsxs)("div",{children:[Object(b.jsxs)("p",{id:"break-label",children:["Break Length: ",n]}),Object(b.jsx)("button",{id:"break-decrement",className:"decrement",disabled:n<=1||d,onClick:function(){i||(n-1===1?(s(n-1),l(!0)):(s(n-1),l(!1)))},children:"-"}),Object(b.jsx)("button",{id:"break-increment",className:"increment",disabled:n>=60||x,onClick:function(){i||(n+1>=2?(s(n+1),l(!1)):n+1===60?(s(n+1),f(!0)):s(n+1))},children:"+"})]})},d=function(e){Object(o.a)(e);var t=Object(c.useContext)(j),n=t.sessionLength,s=t.setSessionLength,i=t.isRunning,a=Object(c.useState)(!1),u=Object(r.a)(a,2),d=u[0],l=u[1],O=Object(c.useState)(!1),h=Object(r.a)(O,2),x=h[0],f=h[1];return Object(b.jsxs)("div",{children:[Object(b.jsxs)("p",{id:"session-label",children:["Session Length: ",n]}),Object(b.jsx)("button",{id:"session-decrement",className:"decrement",disabled:n<=1||d,onClick:function(){i||(n-1<1?(s(n-1),l(!0)):s(n-1))},children:"-"}),Object(b.jsx)("button",{id:"session-increment",className:"increment",disabled:n>=60||x,onClick:function(){i||(n+1===2?(s(n+1),l(!1)):n+1===60?(s(n+1),f(!0)):s(n+1))},children:"+"})]})};n(13);function l(e){Object(o.a)(e);var t=Object(c.useContext)(j),n=t.sessionLength,s=t.setSessionLength,i=t.breakLength,a=t.setBreakLength,u=t.isRunning,d=t.setIsRunning,l=Object(c.useState)("Session"),O=Object(r.a)(l,2),h=O[0],x=O[1],f=Object(c.useState)(new Audio),g=Object(r.a)(f,2),m=g[0],k=g[1],S=Object(c.useState)(n),p=Object(r.a)(S,2),v=p[0],C=p[1],L=Object(c.useState)(0),B=Object(r.a)(L,2),N=B[0],R=B[1];return Object(c.useEffect)((function(){"Session"===h?(C(n),R(0)):(C(i),R(0))}),[n,i]),Object(c.useEffect)((function(){if(u){var e=setTimeout((function(){v>0&&(0===N?(C(v-1),R(59)):R(N-1)),0===v&&(0===N?(clearTimeout(e),m.play(),"Session"===h?(x("Break"),C(i)):(x("Session"),C(n))):R(N-1))}),1e3);return function(){clearTimeout(e)}}})),Object(b.jsxs)("div",{style:{textAlign:"center"},children:[Object(b.jsx)("h2",{id:"timer-label",children:h}),Object(b.jsxs)("div",{id:"time-left",children:[Object(b.jsx)("span",{children:v<=9&&0}),Object(b.jsx)("span",{children:v}),":",Object(b.jsx)("span",{children:N<=9&&0}),Object(b.jsx)("span",{children:N})]}),Object(b.jsx)("button",{id:"start_stop",onClick:function(){d(!u)},children:"Start/Pause"}),Object(b.jsx)("button",{id:"reset",onClick:function(){m.pause(),m.currentTime=0,x("Session"),C(25),R(0),s(25),a(5),d(!1)},children:"Restart"}),Object(b.jsx)("audio",{id:"beep",ref:function(e){return k(e)},src:"https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"})]})}var O=function(){var e=Object(c.useState)(25),t=Object(r.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)(5),a=Object(r.a)(i,2),o=a[0],O=a[1],h=Object(c.useState)(!1),x=Object(r.a)(h,2),f=x[0],g=x[1];return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(j.Provider,{value:{sessionLength:n,setSessionLength:s,breakLength:o,setBreakLength:O,isRunning:f,setIsRunning:g},children:[Object(b.jsx)("h1",{children:"Pomodoro Clock"}),Object(b.jsxs)("div",{className:"clock",children:[Object(b.jsx)(l,{}),Object(b.jsxs)("div",{className:"break-session",children:[Object(b.jsx)(u,{}),Object(b.jsx)(d,{})]})]}),Object(b.jsx)("footer",{children:"Created by Izan Huang"})]})})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),i(e),a(e)}))};a.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root")),h()},5:function(e,t,n){}},[[14,1,2]]]);
//# sourceMappingURL=main.f7c08ad9.chunk.js.map