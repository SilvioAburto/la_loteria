(this.webpackJsonpla_loteria=this.webpackJsonpla_loteria||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(2),o=a.n(s),r=(a(13),a(3)),c=a(4),l=a(6),u=a(5),d=a(7);a(14);var m=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={secondsElapsed:0,isActive:!1,images:[{id:1,name:"El Gallo",src:"el_gallo"},{id:2,name:"El Diablito",src:"el_diablito"},{id:3,name:"La Dama",src:"la_dama"},{id:4,name:"El Catrin",src:"el_catrin"},{id:5,name:"El Paraguas",src:"el_paraguas"},{id:6,name:"La Sirena",src:"la_sirena"}],card_index:0},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"getCardIndex",value:function(){return this.state.card_index}},{key:"getHours",value:function(){return("0"+Math.round(this.state.secondsElapsed/3600)).slice(-2)}},{key:"getMinutes",value:function(){return("0"+Math.round(this.state.secondsElapsed%3600/60)).slice(-2)}},{key:"getSeconds",value:function(){return("0"+this.state.secondsElapsed%60).slice(-2)}},{key:"imageLength",value:function(){return this.state.images.length}},{key:"change_card",value:function(){var e=this;e.state.card_index>=e.state.images.length?console.log("All cards have been used"):(e.state.images=function(e){for(var t,a,n=e.length;0!==n;)a=Math.floor(Math.random()*n),t=e[n-=1],e[n]=e[a],e[a]=t;return e}(e.state.images),e.countdown=setInterval((function(){console.log(e.state.card_index),console.log(e.state.images.length),function(){console.log("function playing");var e=new Audio("https://silvioaburto.github.io/la_loteria/la_sirena.mp3"),t=new Audio("http://touchbasicapp.com/nothing.wav"),a=[];a.push(e);t.play().then((function(){})).catch((function(){}));var n=function(){e.play().then((function(){}))};n()}();document.querySelector("img_id");document.getElementById("img_id").style.backgroundImage="url('/la_loteria/"+e.state.images[e.state.card_index].src+".jpg')",e.setState({card_index:e.state.card_index+1}),e.state.card_index>=e.state.images.length&&(console.log("True"),clearInterval(e.countdown))}),3e3))}},{key:"resetCards",value:function(){this.setState({secondsElapsed:this.state.card_index=0}),clearInterval(this.countdown),document.getElementById("img_id").style.backgroundImage="url('/la_loteria/loteria_cover.jpg')"}},{key:"pauseTime",value:function(){clearInterval(this.countdown)}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"title"},"La Loteria"),i.a.createElement("button",{className:"play_button",onClick:function(){return e.change_card()}},"Play"),i.a.createElement("h2",null,this.getCardIndex(),"/",this.imageLength()),i.a.createElement("div",{id:"img_id",className:"img_class"}),i.a.createElement("div",{className:"cards_footer"},i.a.createElement("button",{className:"start_button",onClick:function(){return e.change_card()}},"START"),i.a.createElement("button",{className:"pause_button",onClick:function(){return e.pauseTime()}},"PAUSE"),i.a.createElement("button",{className:"reset_button",onClick:function(){return e.resetCards()}},"RESET")))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.38d2505b.chunk.js.map