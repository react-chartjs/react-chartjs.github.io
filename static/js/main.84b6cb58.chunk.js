(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{122:function(e,t,n){e.exports={pie:"pie.m_pie__1NEGo"}},28:function(e,t,n){n(29),e.exports=n(35)},29:function(e,t,n){"use strict";"undefined"===typeof Promise&&(n(30).enable(),window.Promise=n(32)),n(33),Object.assign=n(34)},35:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(0),a=n(16);n(44),n(46),n(48);const o=n(50),i=n(15),s=n(57);a.render(r.createElement(i.Router,null,r.createElement(s.Home,{path:"/*"})),document.getElementById("root")),o.unregister()},48:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t),n.d(t,"register",function(){return a}),n.d(t,"unregister",function(){return i});var r=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function a(e){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");r?(!function(e,t){fetch(e).then(function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):o(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):o(t,e)})}}function o(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available; please refresh."),t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t.onSuccess&&t.onSuccess(e)))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}function i(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},57:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(0),a=n(58),o=n(15),i=n(10),s=n(61),c=n(64),l=n(124),d=n(125),u=n(69);t.Home=class extends r.PureComponent{componentDidMount(){this.drawer=d.MDCDrawer.attachTo(document.getElementById("mdc-drawer")),this.topAppBar=l.MDCTopAppBar.attachTo(document.getElementById("app-bar")),this.topAppBar.setScrollTarget(document.getElementById("main-content")),this.topAppBar.listen("MDCTopAppBar:nav",()=>{this.drawer.open=!this.drawer.open})}componentWillUnmount(){this.topAppBar.destroy()}render(){return r.createElement("div",null,r.createElement(a.Nav,null),r.createElement("div",{className:i.default("mdc-drawer-app-content")},r.createElement(s.Header,null),r.createElement(c.Main,null,r.createElement(o.Router,null,r.createElement(u.Pie,{path:"pie"})))))}}},58:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(0),a=n(10),o=n(15);n(59);t.Nav=class extends r.PureComponent{render(){return r.createElement("aside",{id:"mdc-drawer",className:a.default("mdc-drawer","mdc-drawer--dismissible")},r.createElement("div",{className:"mdc-drawer__content"},r.createElement("nav",{className:"mdc-list"},r.createElement(o.Link,{className:a.default("mdc-list-item","mdc-list-item--activated"),to:"pie","aria-selected":"true"},r.createElement("i",{className:a.default("material-icons","mdc-list-item__graphic"),"aria-hidden":"true"},"pie_chart"),r.createElement("span",{className:"mdc-list-item__text"},"Pie")),r.createElement(o.Link,{className:"mdc-list-item",to:"#"},r.createElement("i",{className:a.default("material-icons","mdc-list-item__graphic"),"aria-hidden":"true"},"send"),r.createElement("span",{className:"mdc-list-item__text"},"Outgoing")),r.createElement(o.Link,{className:"mdc-list-item",to:"#"},r.createElement("i",{className:a.default("material-icons","mdc-list-item__graphic"),"aria-hidden":"true"},"drafts"),r.createElement("span",{className:"mdc-list-item__text"},"Drafts")))))}}},59:function(e,t,n){},61:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(0),a=n(10);n(62);t.Header=class extends r.PureComponent{constructor(e){super(e)}render(){return r.createElement("header",{id:"app-bar",className:a.default("mdc-top-app-bar","app-bar")},r.createElement("div",{className:a.default("mdc-top-app-bar__row")},r.createElement("section",{className:a.default("mdc-top-app-bar__section","mdc-top-app-bar__section--align-start")},r.createElement("a",{href:"#",className:a.default("material-icons","mdc-top-app-bar__navigation-icon")},"menu"),r.createElement("span",{className:a.default("mdc-top-app-bar__title")},"react-chartjs"))))}}},62:function(e,t,n){},64:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(0),a=n(10);n(65);t.Main=class extends r.PureComponent{render(){return r.createElement("main",{id:"main-content",className:a.default("main-content")},r.createElement("div",{className:a.default("mdc-top-app-bar--fixed-adjust")},this.props.children))}}},65:function(e,t,n){},69:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(0),a=n(70),o=n(122);class i extends r.Component{constructor(e){super(e),this.randomize=this.randomize.bind(this),this.add=this.add.bind(this),this.remove=this.remove.bind(this),this.chartColors={red:"rgb(255, 99, 132)",orange:"rgb(255, 159, 64)",yellow:"rgb(255, 205, 86)",green:"rgb(75, 192, 192)",blue:"rgb(54, 162, 235)",purple:"rgb(153, 102, 255)",grey:"rgb(201, 203, 207)"},this.colorNames=Object.keys(this.chartColors),this.state={pie:{width:"100%",data:{datasets:[{data:[i.randomScalingFactor(),i.randomScalingFactor(),i.randomScalingFactor(),i.randomScalingFactor(),i.randomScalingFactor()],backgroundColor:["rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(54, 162, 235)"],label:"Dataset 1"}],labels:["Red","Orange","Yellow","Green","Blue"]},options:{responsive:!0,legend:{display:!0,position:"top"}}}}}static randomScalingFactor(){return Math.round(100*Math.random())}randomize(e){this.setState(e=>(e.pie.data.datasets.forEach(e=>{e.data=e.data.map(()=>i.randomScalingFactor())}),e))}add(e){let t={backgroundColor:new Array,data:new Array,label:`New dataset ${this.state.pie.data.datasets.length}`};for(let n=0;n<this.state.pie.data.labels.length;++n){t.data.push(i.randomScalingFactor());let e=this.colorNames[n%this.colorNames.length],r=this.chartColors[e];t.backgroundColor.push(r)}this.setState(e=>e.pie.data.datasets.push(t))}remove(e){this.setState(e=>e.pie.data.datasets.splice(0,1))}render(){return r.createElement("div",{className:o.pie},r.createElement("button",{onClick:this.randomize},"Randomize Data"),r.createElement("button",{onClick:this.add},"Add Data Set"),r.createElement("button",{onClick:this.remove},"Remove Data Set"),r.createElement(a.PieChart,Object.assign({},this.state.pie)))}}t.Pie=i},70:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n(71))},71:function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}function s(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(t,"__esModule",{value:!0});var u=n(72),p=n(74),m=function(e){function t(e){var n;return a(this,t),(n=s(this,c(t).call(this,e))).ref=u.createRef(),n}return l(t,u.Component),i(t,[{key:"componentWillReceiveProps",value:function(e){this.chart.update()}},{key:"componentDidMount",value:function(){this.chart=new p.Chart(this.ref.current.getContext("2d"),{type:this.props.type,data:this.props.data,options:this.props.options})}},{key:"componentWillUnmount",value:function(){this.chart.destroy()}},{key:"render",value:function(){var e={};for(var t in this.props)this.props.hasOwnProperty(t)&&-1===["data","options","type"].indexOf(t)&&(e[t]=this.props[t]);return u.createElement("canvas",Object.assign({ref:this.ref},e))}}]),t}();t.ReactChart=m;var f=function(e){function t(){return a(this,t),s(this,c(t).apply(this,arguments))}return l(t,u.Component),i(t,[{key:"render",value:function(){return u.createElement(m,{type:"line",data:this.props.data,options:this.props.options})}}]),t}();t.LineChart=f;var h=function(e){function t(){return a(this,t),s(this,c(t).apply(this,arguments))}return l(t,u.Component),i(t,[{key:"render",value:function(){return u.createElement(m,Object.assign({type:"pie"},this.props))}}]),t}();t.PieChart=h}},[[28,2,1]]]);
//# sourceMappingURL=main.84b6cb58.chunk.js.map