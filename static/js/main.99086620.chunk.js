(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"Michael Jordan",image:"https://upload.wikimedia.org/wikipedia/commons/c/c3/Jordan_by_Lipofsky_16577.jpg",clicked:!1},{id:2,name:"LeBron James",image:"https://upload.wikimedia.org/wikipedia/commons/d/dd/Lebronred.jpg",clicked:!1},{id:3,name:"Stephen Curry",image:"https://upload.wikimedia.org/wikipedia/commons/b/b6/Stephen_Curry_shooting.jpg",clicked:!1},{id:4,name:"James Harden",image:"https://upload.wikimedia.org/wikipedia/commons/c/ce/James_Harden_%2830852408515%29.jpg",clicked:!1},{id:5,name:"Kevin Durant",image:"https://upload.wikimedia.org/wikipedia/commons/5/5b/Durant.png",clicked:!1},{id:6,name:"Chris Paul",image:"https://upload.wikimedia.org/wikipedia/commons/a/ac/Chris_Paul_%2831585840292%29.jpg",clicked:!1},{id:7,name:"Anthony Davis",image:"https://upload.wikimedia.org/wikipedia/commons/0/04/Anthony_Davis_%2838464014214%29.jpg",clicked:!1},{id:8,name:"Kyrie Irving",image:"https://upload.wikimedia.org/wikipedia/commons/6/68/Kyrie_Irving_2015.jpg",clicked:!1},{id:9,name:"Victor Oladipo",image:"https://upload.wikimedia.org/wikipedia/commons/8/87/Victor_Oladipo_%2839060706270%29_crop.jpg",clicked:!1},{id:10,name:"Ben Simmons",image:"https://upload.wikimedia.org/wikipedia/commons/f/fa/Ben_Simmons.jpg",clicked:!1},{id:11,name:"Joel Embiid",image:"https://upload.wikimedia.org/wikipedia/commons/4/4d/Joel_Embiid_2018.jpg",clicked:!1},{id:12,name:"Russell Westbrook",image:"https://upload.wikimedia.org/wikipedia/commons/8/87/Russell_Westbrook_%2832077032673%29.jpg",clicked:!1},{id:13,name:"Paul Geroge",image:"https://upload.wikimedia.org/wikipedia/commons/2/22/PaulGeorge.jpg",clicked:!1},{id:14,name:"John Wall",image:"https://upload.wikimedia.org/wikipedia/commons/f/f2/John_Wall_%2823457961226%29.jpg",clicked:!1},{id:15,name:"Klay Thompson",image:"https://upload.wikimedia.org/wikipedia/commons/d/d2/Klay_Thompson_%2816614748116%29.jpg",clicked:!1},{id:16,name:"Dwyane Wade",image:"https://upload.wikimedia.org/wikipedia/commons/7/73/Dwyane_Wade_e1.jpg",clicked:!1},{id:17,name:"Kobe Bryant",image:"https://upload.wikimedia.org/wikipedia/commons/5/5f/Kobe_Bryant_Drives2.jpg",clicked:!1},{id:18,name:"Shaquille O'Neal",image:"https://upload.wikimedia.org/wikipedia/commons/6/67/Shaquille_O%27Neal1.jpg",clicked:!1}]},,,,,,,,function(e,a,i){e.exports=i(22)},,,,,,function(e,a){for(var i=["#3CC157","#2AA7FF","#1B1B1B","#FCBC0F","#F85F36"],t=[],o=0;o<60;o++){var n=document.createElement("div");n.classList.add("ball"),n.style.background=i[Math.floor(Math.random()*i.length)];Math.floor(10*Math.random());n.style.left="".concat(Math.floor(100*Math.random()+0),"%"),n.style.top="".concat(Math.floor(100*Math.random()+0),"%"),n.style.transform="scale(".concat(Math.random(),")"),n.style.width="".concat(Math.random(),"em"),n.style.height=n.style.width,t.push(n),document.body.append(n)}t.forEach(function(e,a,i){var t={x:Math.random()*(a%2===0?-11:11),y:12*Math.random()};e.animate([{transform:"translate(0, 0)"},{transform:"translate(".concat(t.x,"rem, ").concat(t.y,"rem)")}],{duration:2e3*(Math.random()+1),direction:"alternate",fill:"both",iterations:1/0,easing:"ease-in-out"})})},function(e,a,i){},,function(e,a,i){},,function(e,a,i){},,function(e,a,i){"use strict";i.r(a);var t=i(0),o=i.n(t),n=i(3),c=i.n(n),r=(i(15),i(16),i(4)),m=i(5),s=i(7),d=i(6),l=i(8);i(18);var p=function(e){return o.a.createElement("div",{className:"container game-board"},e.children)};i(20);var u=function(e){return o.a.createElement("div",{className:"img-div"},o.a.createElement("img",{id:e.id,alt:e.name,src:e.image,onClick:function(){return e.clickHandler(e.id)}}))};var h=function(e){return o.a.createElement("div",{className:"jumbotron text-center"},o.a.createElement("h1",{className:"display-4"},"Memory Game - NBA Edition"),o.a.createElement("p",null,"Click each picture one time!"),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-4"},o.a.createElement("h3",null,"Score: ",o.a.createElement("span",null,e.score))),o.a.createElement("div",{className:"col-sm-4"},o.a.createElement("h1",null,e.result)),o.a.createElement("div",{className:"col-sm-4"},o.a.createElement("h3",null,"Top Score: ",o.a.createElement("span",null,e.topScore)))))},g=i(1),k=function(e){function a(e){var i;return Object(r.a)(this,a),(i=Object(s.a)(this,Object(d.a)(a).call(this,e))).handleImageClick=function(e){for(var a in 0===i.state.score&&i.setState({result:""}),g){var t=g[a];if(t.id===e){!0===t.clicked?i.resetGame():(t.clicked=!0,i.incrementScore(),i.setState({cards:i.shuffle(i.state.cards)}));break}}},i.incrementScore=function(){i.setState({score:i.state.score+1},function(){this.state.score>this.state.topScore&&this.setState({topScore:this.state.score}),this.state.score===this.state.cards.length&&this.resetGame()})},i.shuffle=function(e){for(var a=e.length-1;a>0;a--){var i=Math.floor(Math.random()*(a+1)),t=e[a];e[a]=e[i],e[i]=t}return e},i.resetGame=function(){var e=i.state.cards.map(function(e){return e.clicked=!1,e});i.setState({result:i.state.score===i.state.cards.length?"You Won!":"You Lost!",score:0,cards:i.shuffle(e)})},i.state={cards:g,score:0,topScore:0,result:""},i}return Object(l.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(h,{score:this.state.score,topScore:this.state.topScore,result:this.state.result}),o.a.createElement(p,null,this.state.cards.map(function(a){return o.a.createElement(u,{id:a.id,key:a.id,image:a.image,name:a.name,clickHandler:e.handleImageClick})})))}}]),a}(t.Component);c.a.render(o.a.createElement(k,null),document.getElementById("root"))}],[[9,2,1]]]);
//# sourceMappingURL=main.99086620.chunk.js.map