(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,a,t){e.exports=t(30)},26:function(e,a,t){},28:function(e,a,t){},30:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(16),c=t.n(r),o=(t(26),t(3)),s=(t(28),function(e){var a={color:"dark"===e.mode?"white":"#0d183d",backgroundColor:"dark"===e.mode?"#28335a":"white",border:"dark"===e.mode?"white":"#0d183d",borderColor:"dark"===e.mode?"white":"#0d183d"};return l.a.createElement("div",{className:"container p-3 mt-3"},l.a.createElement("h1",{className:"my-2",style:{color:"dark"===e.mode?"white":"black"}},"About Us"),l.a.createElement("div",{className:"accordion",id:"accordionExample"},l.a.createElement("div",{className:"accordion-item"},l.a.createElement("h2",{className:"accordion-header",id:"headingOne"},l.a.createElement("button",{className:"accordion-button",type:"button",style:a,"data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"},"Analyze Your Text")),l.a.createElement("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample"},l.a.createElement("div",{className:"accordion-body",style:a},l.a.createElement("strong",null," TxtAnalyzer gives you a way to analyze your text quickly and efficiently. Their is in built feature of word and character counter")))),l.a.createElement("div",{className:"accordion-item"},l.a.createElement("h2",{className:"accordion-header",id:"headingTwo"},l.a.createElement("button",{className:"accordion-button collapsed",type:"button",style:a,"data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"},"Free To Use")),l.a.createElement("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample"},l.a.createElement("div",{className:"accordion-body",style:a},l.a.createElement("strong",null,"TxtAnalyzer is a free character counter tool that providesinstant character count and word count statistics for a giventext. TxtAnalyzer reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.")))),l.a.createElement("div",{className:"accordion-item"},l.a.createElement("h2",{className:"accordion-header",id:"headingThree"},l.a.createElement("button",{className:"accordion-button collapsed",type:"button",style:a,"data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"},"Browser Compatible")),l.a.createElement("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample"},l.a.createElement("div",{className:"accordion-body",style:a},l.a.createElement("strong",null,"This word counter softwware works in any web browser such as Chrome, Firefox, MS Edge, Safari, Opera etc. It suits the count chracters in facebook, blog, books, excel document, pdf document, essays etc."))))))}),i=t(8);function m(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement(i.b,{className:"navbar-brand",to:"/"},"TxtAnalyzer"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse justify-content-between",id:"navbarNav"},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{className:"nav-link active",to:"/"}," Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{className:"nav-link",to:"/about"},"About"))),l.a.createElement("div",{className:"form-check form-switch"},l.a.createElement("label",{className:"form-check-label text-".concat("light"===e.mode?"dark":"light"),htmlFor:"flexSwitchCheckDefault"},"Enable Dark Mode"),l.a.createElement("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"})))))}m.defaultProps={title:"set title here",aboutText:"About"};var d=function(e){var a=Object(n.useState)(""),t=Object(o.a)(a,2),r=t[0],c=t[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"}},l.a.createElement("h1",{className:"mb-4"},e.heading),l.a.createElement("div",{className:"mb-3"},l.a.createElement("textarea",{className:"form-control",value:r,onChange:function(e){c(e.target.value)},style:{backgroundColor:"dark"===e.mode?"#28335a":"white",color:"dark"===e.mode?"white":"black"},id:"myBox",rows:"8"})),l.a.createElement("button",{className:"btn btn-primary m-2",disabled:0===r.length,onClick:function(){var a=r.toUpperCase();c(a),e.showAlert("Converted to uppercase!","success")}},"Convert to Uppercase"),l.a.createElement("button",{className:"btn btn-primary m-2",disabled:0===r.length,onClick:function(){var a=r.toLowerCase();c(a),e.showAlert("Converted to lowercase!","success")}},"Convert to Lowercase"),l.a.createElement("button",{className:"btn btn-primary m-2",disabled:0===r.length,onClick:function(){c(""),e.showAlert("Text Cleared!","success")}},"Clear Text"),l.a.createElement("button",{className:"btn btn-primary m-2",disabled:0===r.length,onClick:function(){var a=new SpeechSynthesisUtterance;a.text=r,window.speechSynthesis.speak(a),e.showAlert("You can listen to the message now!","success")}},"Listen to Text"),l.a.createElement("button",{className:"btn btn-primary m-2",disabled:0===r.length,onClick:function(){var a=r.substr(0,r.length-1);c(a),e.showAlert("You can undo the message!","success")}},"Undo Text")),l.a.createElement("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"black"}},l.a.createElement("h2",null,"Your text here"),l.a.createElement("strong",null,l.a.createElement("p",{className:"mb-0"},r.split(/\n+/).filter(function(e){return""!==e}).length," words and ",r.length," characters")),l.a.createElement("strong",null,l.a.createElement("p",null,.008*r.split(" ").filter(function(e){return""!==e}).length," minutes read")),l.a.createElement("h2",null,"Preview"),l.a.createElement("p",null,r.length>0?r:"Enter something in textbox above to preview it here")))};function u(e){var a;return l.a.createElement("div",{style:{height:"3.125rem"}},e.alert&&l.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},l.a.createElement("strong",null,(a=e.alert.type).charAt(0).toUpperCase()+a.slice(1)),": ",e.alert.msg))}var b=t(0);var h=function(){var e=Object(n.useState)("light"),a=Object(o.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(null),h=Object(o.a)(c,2),p=h[0],g=h[1],E=function(e,a){g({msg:e,type:a}),setTimeout(function(){g(null)},1500)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,null,l.a.createElement(m,{title:"TxtAnalyzer",mode:t,toggleMode:function(){"light"===t?(r("dark"),document.body.style.backgroundColor="#0d183d",E("Dark mode has been enabled","success")):(r("light"),document.body.style.backgroundColor="white",E("Light mode has been enabled","success"))}}),l.a.createElement(u,{alert:p}),l.a.createElement("div",{className:"container my-3"},l.a.createElement(b.c,null,l.a.createElement(b.a,{path:"/about",element:l.a.createElement(s,{mode:t})}),l.a.createElement(b.a,{path:"/",element:l.a.createElement(d,{showAlert:E,heading:"Try TxtAnalyzer - Word counter | Character counter | Lowercase to uppercase",mode:t})})))))},p=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,31)).then(function(a){var t=a.getCLS,n=a.getFID,l=a.getFCP,r=a.getLCP,c=a.getTTFB;t(e),n(e),l(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(h,null))),p()}},[[17,3,2]]]);
//# sourceMappingURL=main.0a325c8e.chunk.js.map