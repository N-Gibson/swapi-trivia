(this["webpackJsonpswapi-trivia"]=this["webpackJsonpswapi-trivia"]||[]).push([[0],{20:function(e,t,a){e.exports=a.p+"static/media/jedi_bold.fa01db36.svg"},21:function(e,t,a){e.exports=a.p+"static/media/sith_bold.50ee4c43.svg"},26:function(e,t,a){e.exports=a(45)},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(16),i=a.n(o),s=a(4),c=(a(31),a(13)),l=a(10),m=a(17),h=a(18),u=a(24),d=a(19),p=a(25),v=(a(32),function(e){var t=e.map((function(e){return fetch(e).then((function(e){return e.json()})).then((function(e){var t=e.films,a=e.homeworld,r=e.name,n=e.species;return f(t).then((function(e){return{films:e,homeworld:a,name:r,species:n}}))})).then((function(e){var t=e.films,a=e.homeworld,r=e.name,n=e.species;return w(a).then((function(e){return{films:t,homeworld:e,name:r,species:n}}))})).then((function(e){var t=e.films,a=e.homeworld,r=e.name,n=e.species,o=Date.now();return g(n).then((function(e){return{films:t,homeworld:a,name:r,species:e,isFavorite:!1,id:o}}))}))}));return Promise.all(t)}),f=function(e){var t=e.map((function(e){return fetch(e).then((function(e){return e.json()})).then((function(e){return e.title}))}));return Promise.all(t)},w=function(e){return fetch(e).then((function(e){return e.json()})).then((function(e){return[e.name,e.population]}))},g=function(e){return fetch(e).then((function(e){return e.json()})).then((function(e){return e.name})).catch((function(e){return console.log(e)}))},b=a(6),E=(a(33),a(20)),N=a.n(E),k=a(21),_=a.n(k),P=function(e){var t,a=e.handleFormChange,r=e.handleOrderColor,o=e.orderColor,i=e.orderRank,c=e.name,l=e.favQuote,m=e.setRank;return""!==c&""!==l&&(t=n.a.createElement(s.b,{to:"/movies"},n.a.createElement("button",{className:"jump-to-light-speeb-btn",id:o,type:"button"},"Jump to Light Speed"))),n.a.createElement("section",{className:"splash-container"},n.a.createElement("div",{className:"splash-div"},n.a.createElement("h1",{className:"splash-starwars-h1",id:o},"Star"),n.a.createElement("h2",{className:"splash-starwars-h2"},"A Trivia Story"),n.a.createElement("h1",{className:"splash-starwars-h1",id:o},"Wars")),n.a.createElement("form",{id:o},n.a.createElement("input",{type:"text",placeholder:"Enter Name",name:"name",onChange:function(e){return a(e)}}),n.a.createElement("h2",{className:"splash-starwars-h2",id:o},"Jedi or Sith"),n.a.createElement("div",{className:"jedi-or-sith-div"},n.a.createElement("button",{className:"order-button jedi-btn",type:"button",onClick:function(e){return r(e)}},n.a.createElement("img",{className:"order-icon",src:N.a,alt:"Jedi Order Icon"})),n.a.createElement("button",{className:"order-button sith-btn",type:"button",onClick:function(e){return r(e)}},n.a.createElement("img",{className:"order-icon",src:_.a,alt:"Sith Order Icon"}))),n.a.createElement("h2",{className:"splash-starwars-h2",id:o},"Rank"),n.a.createElement("select",{id:o,onChange:function(e){return m(e)}},n.a.createElement("option",{value:i[0]},i[0]),n.a.createElement("option",{value:i[1]},i[1]),n.a.createElement("option",{value:i[2]},i[2])),n.a.createElement("input",{type:"text",placeholder:"Enter Favorite Quote",name:"favQuote",onChange:function(e){return a(e)}}),t))},C=(a(39),a(40),function(e){var t=e.id,a=e.image,r=e.title,o=e.releaseDate,i=e.orderColor,c=e.trailer,l=o.split("-");return l="".concat(l[1],"/").concat(l[2],"/").concat(l[0]),n.a.createElement("article",{id:i},n.a.createElement(s.b,{className:"movie-a-tag",to:"/movies/".concat(t,"/characters")},n.a.createElement("img",{src:a,alt:"movie poster"}),n.a.createElement("h2",{className:"movie-title-h2",id:i},"Episode ",t),n.a.createElement("h2",{className:"movie-title-h2",id:i},r),n.a.createElement("h3",{className:"release-date-h3",id:i},l)),n.a.createElement("a",{className:"trailer",href:c,id:i,target:"_blank",rel:"noopener noreferrer"},"View Trailer"))}),D=(a(41),function(e){var t=e.orderColor,a=e.name,r=e.favQuote,o=e.rank;return n.a.createElement("nav",null,n.a.createElement("h2",{className:"favorite-quote-h2",id:t},r),n.a.createElement("div",{className:"splash-div"},n.a.createElement("h1",{className:"splash-starwars-h1",id:t},"Star"),n.a.createElement("h2",{className:"splash-starwars-h2"},"A Trivia Story"),n.a.createElement("h1",{className:"splash-starwars-h1",id:t},"Wars")),n.a.createElement("div",{className:"user-div"},n.a.createElement("h1",{className:"user-name-h1",id:t},"Hello ".concat(a)),n.a.createElement("h2",{className:"user-rank-h2",id:t},"A ".concat(o)),n.a.createElement(s.b,{className:"favorite-char-a",to:"/movies/characters/favorites"},n.a.createElement("button",{className:"favorite-char-btn",type:"button",id:t},"Fav. Characters")),n.a.createElement(s.b,{className:"logout-a",to:"/"},n.a.createElement("button",{className:"logout-btn",type:"button",id:t},"Log Out"))))}),T=function(e){var t=e.movies,a=e.orderColor,r=e.name,o=e.favQuote,i=e.rank;return n.a.createElement(n.a.Fragment,null,n.a.createElement(D,{orderColor:a,name:r,favQuote:o,rank:i}),n.a.createElement("section",{className:"movie-container"},t.map((function(e){return n.a.createElement(C,{image:e.image,title:e.title,releaseDate:e.release_date,id:e.episode_id,key:e.episode_id,trailer:e.trailer,orderColor:a})}))))},y=[{image:"https://vignette.wikia.nocookie.net/starwars/images/7/75/EPI_TPM_poster.png/revision/latest?cb=20130822171446",trailer:"https://www.youtube.com/watch?v=bD7bpG-zDJQ"},{image:"https://vignette.wikia.nocookie.net/starwars/images/d/dd/Attack-Clones-Poster.jpg/revision/latest?cb=20180318125654",trailer:"https://www.youtube.com/watch?v=gYbW1F_c9eM"},{image:"https://vignette.wikia.nocookie.net/starwars/images/e/e7/EPIII_RotS_poster.png/revision/latest?cb=20130822174232",trailer:"https://www.youtube.com/watch?v=5UnjrG_N8hU"},{image:"https://vignette.wikia.nocookie.net/starwars/images/0/06/Star_Wars_Style_A_poster_1977.jpg/revision/latest?cb=20100708051712",trailer:"https://www.youtube.com/watch?v=vZ734NWnAHA"},{image:"https://vignette.wikia.nocookie.net/starwars/images/e/e4/Empire_strikes_back_old.jpg/revision/latest?cb=20161114072554",trailer:"https://www.youtube.com/watch?v=JNwNXF9Y6kY"},{image:"https://vignette.wikia.nocookie.net/starwars/images/b/b2/ReturnOfTheJediPoster1983.jpg/revision/latest?cb=20170926193831",trailer:"https://www.youtube.com/watch?v=7L8p7_SLzvU"},{image:"https://vignette.wikia.nocookie.net/starwars/images/f/fd/Star_Wars_Episode_VII_The_Force_Awakens.jpg/revision/latest/scale-to-width-down/998?cb=20151018162823",trailer:"https://www.youtube.com/watch?v=sGbxmsDFVnE"}],M=[{episode_id:1,image:"https://vignette.wikia.nocookie.net/starwars/images/7/75/EPI_TPM_poster.png/revision/latest?cb=20130822171446",release_date:"1999-05-19",title:"The Phantom Menace",trailer:"https://www.youtube.com/watch?v=bD7bpG-zDJQ",opening_crawl:"Turmoil has engulfed the Galactic Republic. The taxation of trade routes to outlying star  systems is in dispute. Hoping to resolve the matter with a blockade of deadly battleships, the greedy Trade Federation has stopped all shipping to the small planet of Naboo. While the Congress of the Republic endlessly debates this alarming chain of events, the Supreme Chancellor has secretly dispatched two Jedi Knights, the guardians of peace and justice in the galaxy, to settle the conflict....",characters:[{films:["The Phantom Menace"],homeworld:["Mars","234567890"],id:Date.now(),isFavorite:!1,name:"Qui-Gon Jinn",species:"Human"},{films:["The Phantom Menace"],homeworld:["Naboo","4500000000"],id:Date.now(),isFavorite:!1,name:"Roos Tarpals",species:"Gungan"},{films:["The Phantom Menace"],homeworld:["Vulpter","421000000"],id:Date.now(),isFavorite:!1,name:"Dud Bolt",species:"Vulptereen"}]},{episode_id:1,image:"https://vignette.wikia.nocookie.net/starwars/images/7/75/EPI_TPM_poster.png/revision/latest?cb=20130822171446",release_date:"1999-05-19",title:"The Phantom Menace",trailer:"https://www.youtube.com/watch?v=bD7bpG-zDJQ",characters:[{films:["The Phantom Menace"],homeworld:["Mars","234567890"],id:Date.now(),isFavorite:!1,name:"Qui-Gon Jinn",species:"Human"},{films:["The Phantom Menace"],homeworld:["Naboo","4500000000"],id:Date.now(),isFavorite:!1,name:"Roos Tarpals",species:"Gungan"},{films:["The Phantom Menace"],homeworld:["Vulpter","421000000"],id:Date.now(),isFavorite:!1,name:"Dud Bolt",species:"Vulptereen"}]},{episode_id:1,image:"https://vignette.wikia.nocookie.net/starwars/images/7/75/EPI_TPM_poster.png/revision/latest?cb=20130822171446",release_date:"1999-05-19",title:"The Phantom Menace",trailer:"https://www.youtube.com/watch?v=bD7bpG-zDJQ",characters:[{films:["The Phantom Menace"],homeworld:["Mars","234567890"],id:Date.now(),isFavorite:!1,name:"Qui-Gon Jinn",species:"Human"},{films:["The Phantom Menace"],homeworld:["Naboo","4500000000"],id:Date.now(),isFavorite:!1,name:"Roos Tarpals",species:"Gungan"},{films:["The Phantom Menace"],homeworld:["Vulpter","421000000"],id:Date.now(),isFavorite:!1,name:"Dud Bolt",species:"Vulptereen"}]},{episode_id:1,image:"https://vignette.wikia.nocookie.net/starwars/images/7/75/EPI_TPM_poster.png/revision/latest?cb=20130822171446",release_date:"1999-05-19",title:"The Phantom Menace",trailer:"https://www.youtube.com/watch?v=bD7bpG-zDJQ",characters:[{films:["The Phantom Menace"],homeworld:["Mars","234567890"],id:Date.now(),isFavorite:!1,name:"Qui-Gon Jinn",species:"Human"},{films:["The Phantom Menace"],homeworld:["Naboo","4500000000"],id:Date.now(),isFavorite:!1,name:"Roos Tarpals",species:"Gungan"},{films:["The Phantom Menace"],homeworld:["Vulpter","421000000"],id:Date.now(),isFavorite:!1,name:"Dud Bolt",species:"Vulptereen"}]},{episode_id:1,image:"https://vignette.wikia.nocookie.net/starwars/images/7/75/EPI_TPM_poster.png/revision/latest?cb=20130822171446",release_date:"1999-05-19",title:"The Phantom Menace",trailer:"https://www.youtube.com/watch?v=bD7bpG-zDJQ",characters:[{films:["The Phantom Menace"],homeworld:["Mars","234567890"],id:Date.now(),isFavorite:!1,name:"Qui-Gon Jinn",species:"Human"},{films:["The Phantom Menace"],homeworld:["Naboo","4500000000"],id:Date.now(),isFavorite:!1,name:"Roos Tarpals",species:"Gungan"},{films:["The Phantom Menace"],homeworld:["Vulpter","421000000"],id:Date.now(),isFavorite:!1,name:"Dud Bolt",species:"Vulptereen"}]},{episode_id:1,image:"https://vignette.wikia.nocookie.net/starwars/images/7/75/EPI_TPM_poster.png/revision/latest?cb=20130822171446",release_date:"1999-05-19",title:"The Phantom Menace",trailer:"https://www.youtube.com/watch?v=bD7bpG-zDJQ",characters:[{films:["The Phantom Menace"],homeworld:["Mars","234567890"],id:Date.now(),isFavorite:!1,name:"Qui-Gon Jinn",species:"Human"},{films:["The Phantom Menace"],homeworld:["Naboo","4500000000"],id:Date.now(),isFavorite:!1,name:"Roos Tarpals",species:"Gungan"},{films:["The Phantom Menace"],homeworld:["Vulpter","421000000"],id:Date.now(),isFavorite:!1,name:"Dud Bolt",species:"Vulptereen"}]},{episode_id:1,image:"https://vignette.wikia.nocookie.net/starwars/images/7/75/EPI_TPM_poster.png/revision/latest?cb=20130822171446",release_date:"1999-05-19",title:"The Phantom Menace",trailer:"https://www.youtube.com/watch?v=bD7bpG-zDJQ",characters:[{films:["The Phantom Menace"],homeworld:["Mars","234567890"],id:Date.now(),isFavorite:!1,name:"Qui-Gon Jinn",species:"Human"},{films:["The Phantom Menace"],homeworld:["Naboo","4500000000"],id:Date.now(),isFavorite:!1,name:"Roos Tarpals",species:"Gungan"},{films:["The Phantom Menace"],homeworld:["Vulpter","421000000"],id:Date.now(),isFavorite:!1,name:"Dud Bolt",species:"Vulptereen"}]}],F=(a(42),function(e){var t=e.character,a=e.favoriteCharacter,r=e.orderColor,o=t.films,i=t.homeworld,s=t.name,c=t.species;void 0===c&&(c="Unknown");var l=o.map((function(e){return n.a.createElement("p",null,e)}));return n.a.createElement("article",{className:"character-card",id:r},n.a.createElement("h1",{className:"character-name-h1",id:r},s),n.a.createElement("div",{className:"line",id:r}),n.a.createElement("h2",{className:"character-h2",id:r},"Homeworld:"),n.a.createElement("h2",{className:"character-h2",id:r},i[0]),n.a.createElement("h2",{className:"character-h2",id:r},"Population:"),n.a.createElement("h2",{className:"character-h2",id:r},i[1]),n.a.createElement("div",{className:"line",id:r}),n.a.createElement("h2",{className:"character-h2",id:r},"Species:"),n.a.createElement("h2",{className:"character-h2",id:r},c),n.a.createElement("div",{className:"line",id:r}),n.a.createElement("h2",{className:"character-h2",id:r},"Appears In:"),n.a.createElement("div",null,n.a.createElement("h2",{className:"character-movie-h2",id:r},l)),n.a.createElement("button",{type:"button",className:"favorite-character",id:r,onClick:a},"Favorite Character"))}),j=(a(43),function(e){var t,a=e.characters,r=e.favoriteCharacter,o=e.orderColor,i=e.name,s=e.favQuote,c=e.rank,l=e.movieNumber,m=e.movieTitle,h=e.scroll,u=a.slice(0,10).map((function(e){return n.a.createElement(F,{character:e,favoriteCharacter:r,orderColor:o})}));return 1===l&&(t="I"),2===l&&(t="II"),3===l&&(t="III"),4===l&&(t="IV"),5===l&&(t="V"),6===l&&(t="VI"),n.a.createElement("section",{className:"container"},n.a.createElement("div",{className:"fade"},n.a.createElement(D,{orderColor:o,name:i,favQuote:s,rank:c})),n.a.createElement("div",{className:"star-wars-crawl"},n.a.createElement("div",{className:"crawl"},n.a.createElement("div",{className:"title"},n.a.createElement("h3",null,"Episode ".concat(t)),n.a.createElement("h2",null,m)),h)),n.a.createElement("div",{className:"character-container"},u))}),Q=(a(44),function(e){var t=e.characters,a=e.orderColor,r=e.name,o=e.favQuote,i=e.rank,s=e.favoriteCharacter,c=t.reduce((function(e,t){return!0===t.isFavorite&&e.push(t),e}),[]),l=c.map((function(e){return n.a.createElement(F,{character:e,favoriteCharacter:s,orderColor:a})})),m=n.a.createElement("p",{className:"fav-char-prompt"},"Please favorite some characters!");return n.a.createElement(n.a.Fragment,null,n.a.createElement(D,{orderColor:a,name:r,favQuote:o,rank:i}),n.a.createElement("h2",{className:"favorite-characters-h2"},"Favorite Characters"),n.a.createElement("section",{className:"favorite-characters"},n.a.createElement("p",null,"Number of favorites: ",c.length),0===c.length?m:l))});function O(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var G=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).handleOrderColor=function(t){t.target.parentNode.className.includes("jedi-btn")?e.setState({orderColor:"jediColor",orderRank:["Padawan","Jedi Master","Grand Master of the Jedi"],rank:"Padawan"}):t.target.parentNode.className.includes("sith-btn")&&e.setState({orderColor:"sithColor",orderRank:["Apprentice","Sith Master","Dark Lord of the Sith"],rank:"Apprentice"})},e.handleFormChange=function(t){e.setState(Object(l.a)({},t.target.name,t.target.value))},e.setRank=function(t){e.setState({rank:t.target.value})},e.favoriteNewCharacter=function(t){var a=e.state.movies.reduce((function(e,t){return e.push.apply(e,Object(c.a)(t.characters)),e}),[]),r=e.state.movies.map((function(e){return e})),n=a.find((function(e){return e.name===t.target.parentNode.children[0].innerText}));console.log(a,n);var o=n.isFavorite;n.isFavorite=!o,e.setState({movies:r})},e.state={movies:M,loading:!0,name:"",favQuote:"",rank:"Initiate",formError:"",orderColor:"",orderRank:["Initiate","Gray Master","Gray Grandmaster"],favoriteCharacters:[]},e}return Object(p.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;(function(e){return fetch(e).then((function(e){return e.json()})).then((function(e){var t=e.results.map((function(e){var t=e.characters,a=e.episode_id,r=e.opening_crawl,n=e.release_date,o=e.title;return v(t).then((function(e){return{characters:e,episode_id:a,opening_crawl:r,release_date:n,title:o}}))}));return Promise.all(t)}))})("https://swapi.co/api/films").then((function(e){return e.sort((function(e,t){return e.episode_id-t.episode_id}))})).then((function(e){return e.map((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(a,!0).forEach((function(t){Object(l.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):O(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,{image:y[t].image,trailer:y[t].trailer})}))})).then((function(t){return e.setState({movies:t})}))}},{key:"render",value:function(){var e=this;return n.a.createElement("main",null,n.a.createElement(b.a,{exact:!0,path:"/",render:function(){return n.a.createElement(P,{handleFormChange:e.handleFormChange,handleOrderColor:e.handleOrderColor,orderColor:e.state.orderColor,orderRank:e.state.orderRank,name:e.state.name,favQuote:e.state.favQuote,setRank:e.setRank})}}),n.a.createElement(b.a,{exact:!0,path:"/movies",render:function(){return n.a.createElement(T,{movies:e.state.movies,orderColor:e.state.orderColor,name:e.state.name,favQuote:e.state.favQuote,rank:e.state.rank})}}),n.a.createElement(b.a,{exact:!0,path:"/movies/:id/characters",render:function(t){var a=t.match.params.id,r=e.state.movies.find((function(e){return e.episode_id===parseInt(a)})).characters,o=e.state.movies.find((function(e){return e.episode_id===parseInt(a)}));return n.a.createElement(j,{characters:r,favoriteCharacter:e.favoriteNewCharacter,orderColor:e.state.orderColor,name:e.state.name,favQuote:e.state.favQuote,rank:e.state.rank,scroll:o.opening_crawl,movieTitle:o.title,movieNumber:o.episode_id})}}),n.a.createElement(b.a,{exact:!0,path:"/movies/characters/favorites",render:function(){return n.a.createElement(Q,{orderColor:e.state.orderColor,name:e.state.name,favQuote:e.state.favQuote,rank:e.state.rank,favoriteCharacter:e.favoriteNewCharacter,characters:e.state.movies.reduce((function(e,t){return e.push.apply(e,Object(c.a)(t.characters)),e}),[])})}}))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var I=n.a.createElement(s.a,null,n.a.createElement(G,null));i.a.render(I,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.73fa3752.chunk.js.map