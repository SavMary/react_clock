(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,c){},13:function(t,e,c){},15:function(t,e,c){"use strict";c.r(e);var n=c(7),a=c.n(n),o=c(2),i=c(3),s=c(5),l=c(4),r=c(1),u=c.n(r),m=(c(12),c(13),c(0)),h=function(t){Object(s.a)(c,t);var e=Object(l.a)(c);function c(){var t;Object(o.a)(this,c);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={date:""},t.timerId=void 0,t}return Object(i.a)(c,[{key:"componentDidMount",value:function(){var t=this;this.timerId=setInterval((function(){t.setState({date:(new Date).toLocaleTimeString()}),console.log(t.state.date)}),1e3)}},{key:"componentDidUpdate",value:function(t){var e=t.name;console.log("The Clock was renamed from ".concat(e," to ").concat(this.props.name))}},{key:"componentWillUnmount",value:function(){this.timerId&&clearInterval(this.timerId)}},{key:"render",value:function(){var t=this.state.date;return Object(m.jsxs)("div",{className:"clock",children:[Object(m.jsx)("p",{className:"clock-info",children:"Current time:"}),Object(m.jsx)("strong",{"data-cy":"time",className:"clock-time",children:t})]})}}]),c}(u.a.Component),b=h,d=["Nice Clock","Happy Clock","Hello Clock"],k=function(t){Object(s.a)(c,t);var e=Object(l.a)(c);function c(){var t;Object(o.a)(this,c);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={clockName:"React clock",isClockVisible:!0},t.showClock=function(){t.setState({isClockVisible:!0})},t.hideClock=function(){t.setState({isClockVisible:!1})},t.setRandomName=function(){t.setState({clockName:d[Math.floor(Math.random()*d.length)]})},t}return Object(i.a)(c,[{key:"render",value:function(){var t=this.state,e=t.isClockVisible,c=t.clockName;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{className:"app-name",children:c}),e&&Object(m.jsx)(b,{name:c}),Object(m.jsx)("button",{type:"button",className:"big-button",onClick:this.showClock,children:"Show Clock"}),Object(m.jsx)("button",{type:"button",className:"big-button",onClick:this.hideClock,children:"Hide Clock"}),Object(m.jsx)("button",{type:"button",className:"big-button",onClick:this.setRandomName,children:"Set Random Name"})]})}}]),c}(u.a.Component),j=k;a.a.render(Object(m.jsx)(j,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.e998be8a.chunk.js.map