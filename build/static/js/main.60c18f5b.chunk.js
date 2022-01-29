(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,a){"use strict";var o=a(11),n=a.n(o),i=a(0);t.a=function(e){var t="".concat(n.a.btn," ").concat("RED"===e.look&&n.a.red);return Object(i.jsx)("button",{className:t,onClick:e.clickHandler,type:e.type,children:e.children})}},,function(e,t,a){e.exports={navigation:"Navigation_navigation__2LBy2",navigation__link:"Navigation_navigation__link__2wwa3",logo:"Navigation_logo__3HMap",about:"Navigation_about__75t2I"}},function(e,t,a){e.exports={backdrop:"Backdrop_backdrop__1GJSz",show:"Backdrop_show__1_y1L",appear:"Backdrop_appear___E8VB",hide:"Backdrop_hide__21vuo",disappear:"Backdrop_disappear__3FjS8"}},function(e,t,a){e.exports={start:"Start_start__26iPi",start__introduction:"Start_start__introduction__2lAiD",start__buttoncontainer:"Start_start__buttoncontainer__1MzYD"}},,,function(e,t,a){e.exports={btn:"Button_btn__1uk4q",red:"Button_red__3eXhc"}},,function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var o=a(14),n=a(7),i=a.n(n),r=a(0);function s(e){return Object(r.jsx)(o.a,{in:e.show,timeout:400,mountOnEnter:!0,unmountOnExit:!0,children:function(t){var a=[i.a.backdrop,"entering"===t?i.a.show:"exiting"===t?i.a.hide:null];return Object(r.jsx)("div",{className:a.join(" "),children:e.children})}})}},,function(e,t,a){e.exports={welcome:"Welcome_welcome__l24Eh"}},,,,,function(e,t,a){},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var o=a(5),n=a.n(o),i=(a(20),a(3)),r=a(2),s=a(1),l=a.n(s),d=a(4),u=a(13),c=a(15),h=a.n(c),f=a(0);function b(e){return Object(f.jsxs)(s.Fragment,{children:[Object(f.jsx)(u.a,{show:!0}),Object(f.jsxs)("div",{className:h.a.welcome,children:[Object(f.jsx)("h2",{children:"Hello!"}),Object(f.jsxs)("p",{children:["Thank you for taking a look at my musical memory web app. I built it in April/May 2021 to put my React.js knowledge to practice.",Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),'Enjoy playing it and learn more about me and the building process in the "About" section.']}),Object(f.jsx)(d.a,{clickHandler:e.onClose,type:"button",look:"RED",children:"Play Memory"})]})]})}var y=a(8),m=a.n(y);var p=function(e){return Object(f.jsxs)(s.Fragment,{children:[e.showWelcome&&Object(f.jsx)(b,{onClose:e.closeWelcome}),Object(f.jsxs)("div",{className:m.a.start,children:[Object(f.jsxs)("div",{className:m.a.start__introduction,children:[Object(f.jsx)("p",{children:"This game of memory is all about great music and you might stumble about a fun fact you do not know yet."}),Object(f.jsx)("h1",{children:"Are you ready?"}),Object(f.jsx)("h1",{children:"Play now!"})]}),Object(f.jsxs)("div",{className:m.a.start__buttoncontainer,children:[Object(f.jsx)(d.a,{clickHandler:function(){return e.onStart("ROCK")},type:"button",look:"music",children:"ROCK EDITION"}),Object(f.jsx)(d.a,{clickHandler:e.onStart.bind(null,"METAL"),type:"button",look:"literature",children:"METAL EDITION"}),Object(f.jsx)(d.a,{clickHandler:e.onStart.bind(null,"POP"),type:"button",look:"politics",children:"POP EDITION"})]})]})]})},g=a(6),w=a.n(g);var I=function(e){return Object(f.jsx)("div",{className:w.a.navigation,children:Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{className:"".concat(w.a.navigation__link," ").concat(w.a.logo),onClick:e.onShowStart,children:"Memory"}),Object(f.jsx)("div",{className:"".concat(w.a.navigation__link," ").concat(w.a.about),onClick:e.onShowAbout,children:"About this app"})]})})},k=[{id:1,pairId:"A",title:"I don't want to die",artist:"Queen",fullQuote:["I don't want to die","I sometimes wish I'd never been born at all"],revealed:!1,pairFound:!1,fact:"In the music video for 'I want to break free' the band dressed up as housewives. It got banned in the USA."},{id:2,pairId:"A",title:"I sometimes wish I'd never been born at all",artist:"Queen",fullQuote:["I don't want to die","I sometimes wish I'd never been born at all"],revealed:!1,pairFound:!1,fact:"In the music video for 'I want to break free' the band dressed up as housewives. It got banned in the USA."},{id:3,pairId:"B",title:"I got another confession to make",artist:"Foo Fighters",fullQuote:["I got another confession to make","I`m your fool"],revealed:!1,pairFound:!1,fact:"Dave Grohl once broke his leg during a show, got a quick fix at a hospital, came back and finished the show. The accident happened during the first song."},{id:4,pairId:"B",title:"I\xb4m your fool",artist:"Foo Fighters",fullQuote:["I got another confession to make","I\xb4m your fool"],revealed:!1,pairFound:!1,fact:"Dave Grohl once broke his leg during a show, got a quick fix at a hospital, came back and finished the show. The accident happened during the first song."},{id:5,pairId:"C",title:"It\xb4s hard to hold a candle",artist:"Guns N\xb4 Roses",fullQuote:["It\xb4s hard to hold a candle","In the cold November rain"],revealed:!1,pairFound:!1,fact:"Lead guitarist Slash did not hesitate when he got the offer to play rythm guitar an Michael Jackson\xb4s 'Beat it'. Eddie van Halen got the solo. That\xb4s how big MJ was."},{id:6,pairId:"C",title:"In the cold November Rain",artist:"Guns N\xb4 Roses",fullQuote:["It\xb4s hard to hold a candle","In the cold November rain"],revealed:!1,pairFound:!1,fact:"Lead guitarist Slash did not hesitate when he got the offer to play rythm guitar an Michael Jackson\xb4s 'Beat it'. Eddie van Halen got the solo. That\xb4s how big MJ was."},{id:7,pairId:"D",title:"It ain't if you fall, but how you rise",artist:"Queens of the Stone Age",fullQuote:["It ain't if you fall, but how you rise","that says who you really are"],revealed:!1,pairFound:!1,fact:"When Josh Homme is not writing music, recording a new record or touring, he sometimes works as a producer. He even did so for none less than the Arctic Monkeys."},{id:8,pairId:"D",title:"that says who you really are",artist:"Queens of the Stone Age",fullQuote:["It ain't if you fall, but how you rise","that says who you really are"],revealed:!1,pairFound:!1,fact:"When Josh Homme is not writing music, recording a new record or touring, he sometimes works as a producer. He even did so for none less than the Arctic Monkeys."},{id:9,pairId:"E",title:"Nights were mainly made for saying things",artist:"Arctic Monkeys",fullQuote:["Nights were mainly made for saying things","That you can\xb4t say tomorrow day"],revealed:!1,pairFound:!1,fact:"Their show attracted huge crowds even before their debut's release. When that day came, it became the fastest selling debut of a british band."},{id:10,pairId:"E",title:"That you can\xb4t say tomorrow day",artist:"Arctic Monkeys",fullQuote:["Nights were mainly made for saying things","That you can\xb4t say tomorrow day"],revealed:!1,pairFound:!1,fact:"Their show attracted huge crowds even before their debut's release. When that day came, it became the fastest selling debut of a british band."},{id:11,pairId:"F",title:"I\xb4m a loser and a user",artist:"Green Day",fullQuote:["I\xb4m a loser and a user","So I don\xb4t need no accuser"],revealed:!1,pairFound:!1,fact:"Bass player Mike Dirnt got a tooth knocked out when he wanted to leave the stage. A security had mistaken him for a fan."},{id:12,pairId:"F",title:"So I don\xb4t need no accuser",artist:"Green Day",fullQuote:["I\xb4m a loser and a user","So I don\xb4t need no accuser"],revealed:!1,pairFound:!1,fact:"Bass player Mike Dirnt got a tooth knocked out when he wanted to leave the stage. A security had mistaken him for a fan."}],v=[{id:1,pairId:"A",title:"Never mind the sound you heard",artist:"Metallica",fullQuote:["Never mind the sound you heard","It's just the beasts under your bed"],revealed:!1,pairFound:!1,fact:"James Hetfield was literally on fire when an accicent including pyro technics happened. He continued the tour singing only. Their guitar tech helped out by playing James's guitar."},{id:2,pairId:"A",title:"It's just the beasts under your bed",artist:"Metallica",fullQuote:["Never mind the sound you heard","It's just the beasts under your bed"],pairFound:!1,fact:"James Hetfield was literally on fire when an accicent including pyro technics happened. He continued the tour singing only. Their guitar tech helped out by playing James's guitar."},{id:3,pairId:"B",title:"You can't be something you're not",artist:"Pantera",fullQuote:["You can't be something you're not","Be yourself, by yourself, Stay away from me"],revealed:!1,pairFound:!1,fact:"Pantera have not always been that heavy. They actually started as a glam metal band consuming loads of hairspray and make-up."},{id:4,pairId:"B",title:"Be yourself, by yourself, stay away from me",artist:"Pantera",fullQuote:["You can't be something you're not","Be yourself, by yourself, Stay away from me"],revealed:!1,pairFound:!1,fact:"Pantera have not always been that heavy. They actually started as a glam metal band consuming loads of hairspray and make-up."},{id:5,pairId:"C",title:"Make a joke and I will sigh",artist:"Black Sabbath",fullQuote:["Make a joke and I will sigh","and you will laugh and I will cry"],revealed:!1,pairFound:!1,fact:"Tony Iommi lost the tips of two fingers of his fretting hand before becoming one of metal's biggest guitar players."},{id:6,pairId:"C",title:"and you will laugh and I will cry",artist:"Black Sabbath",fullQuote:["Make a joke and I will sigh","and you will laugh and I will cry"],revealed:!1,pairFound:!1,fact:"Tony Iommi lost the tips of two fingers of his fretting hand before becoming one of metal's biggest guitar players."},{id:7,pairId:"D",title:"Why don't presidents fight the war?",artist:"System Of A Down",fullQuote:["Why don't presidents fight the war?","Why do they always send the poor?"],revealed:!1,pairFound:!1,fact:"One SOAD's songs is featured in the pixar kids movie 'The secret life of pets' making the pets headbang."},{id:8,pairId:"D",title:"Why do they always send the poor?",artist:"System Of A Down",fullQuote:["Why don't presidents fight the war?","Why do they always send the poor?"],revealed:!1,pairFound:!1,fact:"One SOAD's songs is featured in the pixar kids movie 'The secret life of pets' making the pets headbang."},{id:9,pairId:"E",title:"Woe to you, o'er Earth and Sea",artist:"Iron Maiden",fullQuote:["Woe to you, o'er Earth and Sea","For the Devil sends the beast with wrath"],revealed:!1,pairFound:!1,fact:"Vocalist Bruce Dickinson is a pilot. He sometimes personally makes sure the band has a safe flight by sitting in the cockpit."},{id:10,pairId:"E",title:"For the Devil sends the beast with wrath",artist:"Iron Maiden",fullQuote:["Woe to you, o'er Earth and Sea","For the Devil sends the beast with wrath"],revealed:!1,pairFound:!1,fact:"Vocalist Bruce Dickinson is a pilot. He sometimes personally makes sure the band has a safe flight by sitting in the cockpit."},{id:11,pairId:"F",title:"You win some, lose some",artist:"Mot\xf6rhead",fullQuote:["You win some, lose some,","it's all the same to me"],revealed:!1,pairFound:!1,fact:"Before being onstage, Lemmy has been working as a roadie for none other than Jimi Hendrix."},{id:12,pairId:"F",title:"It's all the same to me",artist:"Mot\xf6rhead",fullQuote:["You win some, lose some,","It's all the same to me"],revealed:!1,pairFound:!1,fact:"Before being onstage, Lemmy has been working as a roadie for none other than Jimi Hendrix."}],j=[{id:1,pairId:"A",title:"I know it's not much, but it's the best I can do",artist:"Elton John",fullQuote:["I know it's not much, but it's the best I can do","My gift is my song, and this one's for you"],revealed:!1,pairFound:!1,fact:"His song 'Candle in the wind' is the best-selling pop single of all times - and he got knighted by the Queen."},{id:2,pairId:"A",title:"My gift is my song, and this one's for you",artist:"Elton John",fullQuote:["I know it's not much, but it's the best I can do","My gift is my song, and this one's for you"],pairFound:!1,fact:"His song 'Candle in the wind' is the best-selling pop single of all times - and he got knighted by the Queen."},{id:3,pairId:"B",title:"If you wanna make the world a better place",artist:"Michael Jackson",fullQuote:["If you wanna make the world a better place","Take a look at yourself and make that change"],revealed:!1,pairFound:!1,fact:"His record 'Thriller' was number one of the billboard charts for 37 weeks."},{id:4,pairId:"B",title:"Take a look at yourself and then make that change",artist:"Michael Jackson",fullQuote:["If you wanna make the world a better place","Take a look at yourself and make that change"],revealed:!1,pairFound:!1,fact:"His record 'Thriller' was number one of the billboard charts for 37 weeks."},{id:5,pairId:"C",title:"When you call my name it's like a little prayer",artist:"Madonna",fullQuote:["When you call my name it's like a little prayer","I'm down on my knees, I wanna take you there"],revealed:!1,pairFound:!1,fact:"Madonna picked The Beasty Boys to be the opening act on her first tour in 1985. She loved them - her crowd not too much."},{id:6,pairId:"C",title:"I'm down on my knees, I wanna take you there",artist:"Madonna",fullQuote:["When you call my name it's like a little prayer","I'm down on my knees, I wanna take you there"],revealed:!1,pairFound:!1,fact:"Madonna picked The Beasty Boys to be the opening act on her first tour in 1985. She loved them - her crowd not too much."},{id:7,pairId:"D",title:"I am the dragon breathing fire",artist:"Beyonce",fullQuote:["I am the dragon breathing fire","Beautiful mane, I'm the lion."],revealed:!1,pairFound:!1,fact:"In 2011, Beyonc\xe9 became the first-ever solo-female to headline the Glastonbury Festival\u2019s main stage."},{id:8,pairId:"D",title:"Beautiful mane, I'm the lion.",artist:"Beyonce",fullQuote:["I am the dragon breathing fire","Beautiful mane, I'm the lion."],revealed:!1,pairFound:!1,fact:"In 2011, Beyonc\xe9 became the first-ever solo-female to headline the Glastonbury Festival\u2019s main stage."},{id:9,pairId:"E",title:"Don't be a drag, just be a queen",artist:"Lady Gaga",fullQuote:["Don't be a drag, just be a queen","Whether you're broke or evergreen."],revealed:!1,pairFound:!1,fact:"Lady Gaga is the godmother of Elton John's kids."},{id:10,pairId:"E",title:"Whether you're broke or evergreen.",artist:"Lady Gaga",fullQuote:["Don't be a drag, just be a queen","Whether you're broke or evergreen."],revealed:!1,pairFound:!1,fact:"Lady Gaga is the godmother of Elton John's kids."},{id:11,pairId:"F",title:"I want to be your fantasy",artist:"Prince",fullQuote:["I want to be your fantasy","Maybe you could be mine"],revealed:!1,pairFound:!1,fact:"Willy Wonka style: In 2006, Universal hid 14 purple tickets inside Prince's album for a private performance at his house."},{id:12,pairId:"F",title:"Maybe you could be mine",artist:"Prince",fullQuote:["I want to be your fantasy","Maybe you could be mine"],revealed:!1,pairFound:!1,fact:"Willy Wonka style: In 2006, Universal hid 14 purple tickets inside Prince's album for a private performance at his house."}],O=(a(25),l.a.lazy((function(){return a.e(4).then(a.bind(null,41))}))),_=l.a.lazy((function(){return a.e(5).then(a.bind(null,40))})),F=l.a.lazy((function(){return a.e(3).then(a.bind(null,42))}));var x=function(){var e=Object(s.useState)(),t=Object(r.a)(e,2),a=t[0],o=t[1],n=Object(s.useState)(),d=Object(r.a)(n,2),u=d[0],c=d[1],h=Object(s.useState)(3),b=Object(r.a)(h,2),y=b[0],m=b[1],g=Object(s.useState)(),w=Object(r.a)(g,2),x=w[0],S=w[1],M=Object(s.useState)(!1),Q=Object(r.a)(M,2),B=Q[0],A=Q[1],T=Object(s.useState)(),D=Object(r.a)(T,2),E=D[0],N=D[1],W=Object(s.useState)(!0),H=Object(r.a)(W,2),J=H[0],C=H[1];function P(e){var t=function(e){var t;"ROCK"===e&&(t=k.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{revealed:!1})})));"METAL"===e&&(t=v.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{revealed:!1})})));"POP"===e&&(t=j.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{revealed:!1})})));return t}(e);N(function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*t),o=e[t];e[t]=e[a],e[a]=o}return e}(t)),c(!1),o(!0)}function L(){A((function(e){return!e}))}function G(){A(!1),o(!1),c(!1),m(0),S(),N(null)}return Object(f.jsxs)(l.a.Fragment,{children:[Object(f.jsx)(I,{count:y,activeMode:x,onSelectMode:function(e){S(e)},onShowAbout:L,onShowStart:G}),Object(f.jsxs)(s.Suspense,{fallback:Object(f.jsx)("p",{style:{textAlign:"center"},children:"Loading"}),children:[Object(f.jsxs)("div",{className:"App",children:[!a&&!B&&Object(f.jsx)(p,{onStart:P,showWelcome:J,closeWelcome:function(){C(!1)}}),a&&!u&&Object(f.jsx)(O,{show:!B,cards:E,increaseCount:function(){m((function(e){return e+1}))},onFinish:function(){c(!0)},isOver:u,count:y}),Object(f.jsx)(_,{show:u&&!B,onStart:P,counter:y})]}),B&&Object(f.jsx)(F,{gameIsRunning:a,onCloseAbout:L,onCloseAboutAndReset:G})]})]})};n.a.render(Object(f.jsx)(x,{}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.60c18f5b.chunk.js.map