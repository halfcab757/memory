(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[4],{28:function(e,n,t){e.exports={memorycard:"MemoryCard_memorycard__2aFQP",memorycard__questionmark:"MemoryCard_memorycard__questionmark__2qTyp",zooming:"MemoryCard_zooming__Ond5E"}},29:function(e,n,t){e.exports={opencard:"OpenCard_opencard__1-gxE",quote:"OpenCard_quote__1WT4F",quote__lineleft:"OpenCard_quote__lineleft__1nH6p",quote__lineright:"OpenCard_quote__lineright__2Ktn6",quote__artist:"OpenCard_quote__artist__UTt8w","static-visible":"OpenCard_static-visible__1PWqw",cardcontent:"OpenCard_cardcontent__2caXh","button-container":"OpenCard_button-container__axYuB",funfact:"OpenCard_funfact__1ZHtb",visible:"OpenCard_visible__1iPNc","border-visible":"OpenCard_border-visible__1E6bx",funFact:"OpenCard_funFact__2ckN8",wiggle:"OpenCard_wiggle__1_LSL",open:"OpenCard_open__2rGAr",enterOpenCard:"OpenCard_enterOpenCard__3H-UN",closed:"OpenCard_closed__23MaU",exitOpenCard:"OpenCard_exitOpenCard__wA6XA",shown:"OpenCard_shown__1VXO_",slideFromLeft:"OpenCard_slideFromLeft__2EXKb","shown-two":"OpenCard_shown-two__3uiqc",slideFromRight:"OpenCard_slideFromRight__2WmK_","shown-three":"OpenCard_shown-three__2S62v"}},30:function(e,n,t){e.exports={card:"NoMatchCard_card__3vsaI"}},31:function(e,n,t){e.exports={memorycards:"Memory_memorycards__x2TaU"}},41:function(e,n,t){"use strict";t.r(n);var r=t(10);var a=t(12);function i(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(a.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o=t(3),c=t(2),u=t(1),s=t(28),l=t.n(s),d=t(0),_=function(e){var n=Object(u.useState)(),t=Object(c.a)(n,2),r=t[0],a=t[1];function i(){a(!1)}return Object(d.jsxs)("div",{className:l.a.memorycard,onMouseEnter:function(){e.disabled||(a(!0),setTimeout((function(){i()}),800))},onMouseLeave:i,onClick:function(){return e.clickHandler(e.card.id)},children:[!e.card.revealed&&r&&Object(d.jsx)("p",{className:l.a.memorycard__questionmark,children:"?"}),e.card.revealed&&Object(d.jsx)("p",{children:e.card.title})]})},f=t(13),b=t(14),O=t(4),j=t(29),m=t.n(j);function p(e){var n=e.allPairsFound?"CHECK EVALUATION":"GO ON";return Object(d.jsx)(b.a,{in:e.show,timeout:400,mountOnEnter:!0,unmountOnExit:!0,children:function(t){var r=[m.a.opencard,"entering"===t?m.a.open:"exiting"===t?m.a.closed:null],a=[m.a.quote__lineleft,"entered"===t?m.a.shown:null,"exiting"===t?m.a["static-visible"]:null],i=[m.a.quote__lineright,"entered"===t?m.a["shown-two"]:null,"exiting"===t?m.a["static-visible"]:null],o=[m.a.quote__artist,"entered"===t?m.a["shown-three"]:null,"exiting"===t?m.a["static-visible"]:null],c=[m.a.funfact,"entered"===t?m.a.visible:null],u=[m.a["button-container"],"entered"===t?m.a.visible:null,"entered"===t?m.a.wiggle:null],s=[m.a.quote,"entered"===t?m.a["border-visible"]:null];return Object(d.jsxs)("div",{className:r.join(" "),children:[Object(d.jsx)("h2",{children:"It's a match : )"}),Object(d.jsxs)("div",{className:s.join(" "),children:[Object(d.jsxs)("p",{className:a.join(" "),children:[Object(d.jsx)("span",{children:'"'}),e.card.fullQuote[0]]}),Object(d.jsxs)("p",{className:i.join(" "),children:[e.card.fullQuote[1],Object(d.jsx)("span",{children:'"'})]}),Object(d.jsx)("p",{className:o.join(" "),children:e.card.artist})]}),Object(d.jsxs)("div",{className:c.join(" "),children:[Object(d.jsx)("h3",{children:"Did you know?"}),e.card.fact&&Object(d.jsx)("p",{children:e.card.fact})]}),Object(d.jsx)("div",{className:u.join(" "),children:Object(d.jsx)(O.a,{clickHandler:e.onClose,type:"button",look:"RED",children:n})})]})}})}var h=t(30),v=t.n(h);function x(e){return Object(d.jsxs)("div",{className:v.a.card,children:[Object(d.jsx)("h2",{children:"It's not a match"}),Object(d.jsx)(O.a,{clickHandler:e.onClose,type:"button",look:"RED",children:"KEEP GOING"})]})}var y=t(31),C=t.n(y);n.default=function(e){var n=Object(u.useState)(e.cards),t=Object(c.a)(n,2),r=t[0],s=t[1],l=Object(u.useState)(0),b=Object(c.a)(l,2),O=b[0],j=b[1],m=Object(u.useState)(),h=Object(c.a)(m,2),v=h[0],y=h[1],w=Object(u.useState)(),g=Object(c.a)(w,2),q=g[0],N=g[1],E=Object(u.useState)(),k=Object(c.a)(E,2),F=k[0],S=k[1],I=Object(u.useState)(),T=Object(c.a)(I,2),A=T[0],M=T[1],H=e.onFinish,L=0===r.filter((function(e){return!e.pairFound})).length;Object(u.useEffect)((function(){}),[r]);var P=Object(u.useCallback)((function(){j(0);var e=r.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{revealed:e.pairFound})}));s(e)}),[r,s,j]);Object(u.useEffect)((function(){return P()}),[]);var K=Object(u.useCallback)((function(){if(y(!1),M(!1),setTimeout((function(){S(!1),N(null)}),500),setTimeout((function(){P()}),400),0===r.filter((function(e){return!e.pairFound})).length)return H()}),[y,S,N,P,H,r]),U=function(e){if(0!==O&&1===O){var n=e.filter((function(e){return e.revealed&&!e.pairFound})),t=n[0].pairId===n[1].pairId;if(t){var r,i=function(e,n){var t;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=Object(a.a)(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,u=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return c=e.done,e},e:function(e){u=!0,o=e},f:function(){try{c||null==t.return||t.return()}finally{if(u)throw o}}}}(n);try{for(i.s();!(r=i.n()).done;){r.value.pairFound=!0}}catch(o){i.e(o)}finally{i.f()}}!function(e){e&&setTimeout((function(){return j(0),S(!0),y(!0)}),1e3),e||setTimeout((function(){M(!0),S(!0)}),1400)}(t)}},G=function(n){if(function(e){return(!q||q.id!==e)&&!(O>=2)}(n)){j((function(e){return e+1})),e.increaseCount(),N(r.find((function(e){return e.id===n})));var t=function(e){var n=i(r),t=n.findIndex((function(n){return n.id===e})),a=n[t];return a.revealed=!0,n[t]=a,n}(n);s(t),U(t)}},R=r.map((function(e){return Object(d.jsx)(_,{card:e,clickHandler:G,disabled:O>=2,cards:r},e.id)}));return e.show?Object(d.jsxs)("div",{className:C.a.memorycards,children:[!e.isOver&&R,Object(d.jsx)(f.a,{show:F}),Object(d.jsx)(p,{show:v,card:q,cardsMatch:v,onClose:K,allPairsFound:L}),A&&Object(d.jsx)(x,{onClose:K})]}):null}}}]);
//# sourceMappingURL=4.eb0587c6.chunk.js.map