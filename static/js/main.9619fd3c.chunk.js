(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"Michael Jordan",image:"https://upload.wikimedia.org/wikipedia/commons/c/c3/Jordan_by_Lipofsky_16577.jpg",clicked:!1},{id:2,name:"LeBron James",image:"https://upload.wikimedia.org/wikipedia/commons/d/dd/Lebronred.jpg",clicked:!1},{id:3,name:"Stephen Curry",image:"https://upload.wikimedia.org/wikipedia/commons/b/b6/Stephen_Curry_shooting.jpg",clicked:!1},{id:4,name:"James Harden",image:"https://upload.wikimedia.org/wikipedia/commons/c/ce/James_Harden_%2830852408515%29.jpg",clicked:!1},{id:5,name:"Kevin Durant",image:"https://upload.wikimedia.org/wikipedia/commons/5/5b/Durant.png",clicked:!1},{id:6,name:"Chris Paul",image:"https://upload.wikimedia.org/wikipedia/commons/a/ac/Chris_Paul_%2831585840292%29.jpg",clicked:!1},{id:7,name:"Anthony Davis",image:"https://upload.wikimedia.org/wikipedia/commons/0/04/Anthony_Davis_%2838464014214%29.jpg",clicked:!1},{id:8,name:"Kyrie Irving",image:"https://upload.wikimedia.org/wikipedia/commons/6/68/Kyrie_Irving_2015.jpg",clicked:!1},{id:9,name:"Victor Oladipo",image:"https://upload.wikimedia.org/wikipedia/commons/8/87/Victor_Oladipo_%2839060706270%29_crop.jpg",clicked:!1},{id:10,name:"Ben Simmons",image:"https://upload.wikimedia.org/wikipedia/commons/f/fa/Ben_Simmons.jpg",clicked:!1},{id:11,name:"Joel Embiid",image:"https://upload.wikimedia.org/wikipedia/commons/4/4d/Joel_Embiid_2018.jpg",clicked:!1},{id:12,name:"Russell Westbrook",image:"https://upload.wikimedia.org/wikipedia/commons/8/87/Russell_Westbrook_%2832077032673%29.jpg",clicked:!1},{id:13,name:"Paul Geroge",image:"https://upload.wikimedia.org/wikipedia/commons/2/22/PaulGeorge.jpg",clicked:!1},{id:14,name:"John Wall",image:"https://upload.wikimedia.org/wikipedia/commons/f/f2/John_Wall_%2823457961226%29.jpg",clicked:!1},{id:15,name:"Klay Thompson",image:"https://upload.wikimedia.org/wikipedia/commons/d/d2/Klay_Thompson_%2816614748116%29.jpg",clicked:!1},{id:16,name:"Dwyane Wade",image:"https://upload.wikimedia.org/wikipedia/commons/7/73/Dwyane_Wade_e1.jpg",clicked:!1},{id:17,name:"Kobe Bryant",image:"https://upload.wikimedia.org/wikipedia/commons/5/5f/Kobe_Bryant_Drives2.jpg",clicked:!1},{id:18,name:"Shaquille O'Neal",image:"https://upload.wikimedia.org/wikipedia/commons/6/67/Shaquille_O%27Neal1.jpg",clicked:!1}]},,,,,,,,function(e,i,a){e.exports=a(23)},,,,,,function(e,i,a){},,function(e,i,a){},,function(e,i,a){},,function(e,i,a){},,function(e,i,a){"use strict";a.r(i);var t=a(0),n=a.n(t),o=a(3),c=a.n(o),r=(a(15),a(4)),d=a(5),m=a(7),s=a(6),l=a(8);a(17);var p=function(e){return n.a.createElement("div",{className:"container game-board"},e.children)};a(19);var u=function(e){return n.a.createElement("div",{className:"img-div"},n.a.createElement("img",{id:e.id,alt:e.name,src:e.image,onClick:function(){return e.clickHandler(e.id)}}))};var g=function(e){return n.a.createElement("div",null,n.a.createElement("h1",null,"Score: ",n.a.createElement("span",null,e.score)),n.a.createElement("h1",null,"Top Score: ",n.a.createElement("span",null,e.topScore)),n.a.createElement("h1",null,e.result))},k=a(1),h=(a(21),function(e){function i(e){var a;return Object(r.a)(this,i),(a=Object(m.a)(this,Object(s.a)(i).call(this,e))).handleImageClick=function(e){for(var i in 0===a.state.score&&a.setState({result:""}),k){var t=k[i];if(t.id===e){!0===t.clicked?a.resetGame():(t.clicked=!0,a.incrementScore(),a.setState({cards:a.shuffle(a.state.cards)}));break}}},a.incrementScore=function(){a.setState({score:a.state.score+1},function(){this.state.score>this.state.topScore&&this.setState({topScore:this.state.score}),this.state.score===this.state.cards.length&&this.resetGame()})},a.shuffle=function(e){for(var i=e.length-1;i>0;i--){var a=Math.floor(Math.random()*(i+1)),t=e[i];e[i]=e[a],e[a]=t}return e},a.resetGame=function(){var e=a.state.cards.map(function(e){return e.clicked=!1,e});a.setState({result:a.state.score===a.state.cards.length?"You Won!":"You Lost!",score:0,cards:a.shuffle(e)})},a.state={cards:k,score:0,topScore:0,result:""},a}return Object(l.a)(i,e),Object(d.a)(i,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement(g,{score:this.state.score,topScore:this.state.topScore,result:this.state.result}),n.a.createElement(p,null,this.state.cards.map(function(i){return n.a.createElement(u,{id:i.id,key:i.id,image:i.image,name:i.name,clickHandler:e.handleImageClick})})))}}]),i}(t.Component));c.a.render(n.a.createElement(h,null),document.getElementById("root"))}],[[9,2,1]]]);
//# sourceMappingURL=main.9619fd3c.chunk.js.map