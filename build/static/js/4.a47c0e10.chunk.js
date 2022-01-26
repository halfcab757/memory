(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[4],{28:function(e,n,t){e.exports={memorycard:"MemoryCard_memorycard__2aFQP",memorycard__questionmark:"MemoryCard_memorycard__questionmark__2qTyp",zooming:"MemoryCard_zooming__Ond5E"}},29:function(e,n,t){e.exports={opencard:"OpenCard_opencard__1-gxE",quote:"OpenCard_quote__1WT4F",quote__lineleft:"OpenCard_quote__lineleft__1nH6p",quote__lineright:"OpenCard_quote__lineright__2Ktn6",quote__artist:"OpenCard_quote__artist__UTt8w","static-visible":"OpenCard_static-visible__1PWqw",cardcontent:"OpenCard_cardcontent__2caXh","button-container":"OpenCard_button-container__axYuB",funfact:"OpenCard_funfact__1ZHtb",visible:"OpenCard_visible__1iPNc","border-visible":"OpenCard_border-visible__1E6bx",funFact:"OpenCard_funFact__2ckN8",wiggle:"OpenCard_wiggle__1_LSL",open:"OpenCard_open__2rGAr",enterOpenCard:"OpenCard_enterOpenCard__3H-UN",closed:"OpenCard_closed__23MaU",exitOpenCard:"OpenCard_exitOpenCard__wA6XA",shown:"OpenCard_shown__1VXO_",slideFromLeft:"OpenCard_slideFromLeft__2EXKb","shown-two":"OpenCard_shown-two__3uiqc",slideFromRight:"OpenCard_slideFromRight__2WmK_","shown-three":"OpenCard_shown-three__2S62v"}},30:function(e,n,t){e.exports={card:"NoMatchCard_card__3vsaI"}},31:function(e,n,t){e.exports={memorycards:"Memory_memorycards__x2TaU"}},41:function(e,n,t){"use strict";t.r(n);var r=t(12);var a=t(10);function i(e){return function(e){if(Array.isArray(e))return Object(a.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o=t(3),c=t(2),s=t(1),l=t(28),u=t.n(l),d=t(0),_=function(e){var n=Object(s.useState)(),t=Object(c.a)(n,2),r=t[0],a=t[1];function i(){a(!1)}return Object(d.jsxs)("div",{className:u.a.memorycard,onMouseEnter:function(){e.disabled||(a(!0),setTimeout((function(){i()}),800))},onMouseLeave:i,onClick:function(){return e.clickHandler(e.card.id)},children:[!e.card.revealed&&r&&Object(d.jsx)("p",{className:u.a.memorycard__questionmark,children:"?"}),e.card.revealed&&Object(d.jsx)("p",{children:e.card.title})]})},b=t(13),f=t(14),O=t(4),j=t(29),m=t.n(j);function p(e){var n=e.allPairsFound?"CHECK RESULTS":"GO ON";return Object(d.jsx)(f.a,{in:e.show,timeout:400,mountOnEnter:!0,unmountOnExit:!0,children:function(t){var r=[m.a.opencard,"entering"===t?m.a.open:"exiting"===t?m.a.closed:null],a=[m.a.quote__lineleft,"entered"===t?m.a.shown:null,"exiting"===t?m.a["static-visible"]:null],i=[m.a.quote__lineright,"entered"===t?m.a["shown-two"]:null,"exiting"===t?m.a["static-visible"]:null],o=[m.a.quote__artist,"entered"===t?m.a["shown-three"]:null,"exiting"===t?m.a["static-visible"]:null],c=[m.a.funfact,"entered"===t?m.a.visible:null],s=[m.a["button-container"],"entered"===t?m.a.visible:null,"entered"===t?m.a.wiggle:null],l=[m.a.quote,"entered"===t?m.a["border-visible"]:null];return Object(d.jsxs)("div",{className:r.join(" "),children:[Object(d.jsx)("h2",{children:"It's a match : )"}),Object(d.jsxs)("div",{className:l.join(" "),children:[Object(d.jsxs)("p",{className:a.join(" "),children:[Object(d.jsx)("span",{children:'"'}),e.card.fullQuote[0]]}),Object(d.jsxs)("p",{className:i.join(" "),children:[e.card.fullQuote[1],Object(d.jsx)("span",{children:'"'})]}),Object(d.jsx)("p",{className:o.join(" "),children:e.card.artist})]}),Object(d.jsxs)("div",{className:c.join(" "),children:[Object(d.jsx)("h3",{children:"Did you know?"}),e.card.fact&&Object(d.jsx)("p",{children:e.card.fact})]}),Object(d.jsx)("div",{className:s.join(" "),children:Object(d.jsx)(O.a,{clickHandler:e.onClose,type:"button",look:"RED",children:n})})]})}})}var h=t(30),v=t.n(h);function x(e){return Object(d.jsxs)("div",{className:v.a.card,children:[Object(d.jsx)("h2",{children:"It's not a match"}),Object(d.jsx)(O.a,{clickHandler:e.onClose,type:"button",look:"RED",children:"KEEP GOING"})]})}var C=t(31),y=t.n(C);n.default=function(e){var n=Object(s.useState)(e.cards),t=Object(c.a)(n,2),a=t[0],l=t[1],u=Object(s.useState)(0),f=Object(c.a)(u,2),O=f[0],j=f[1],m=Object(s.useState)(),h=Object(c.a)(m,2),v=h[0],C=h[1],w=Object(s.useState)(),g=Object(c.a)(w,2),q=g[0],S=g[1],E=Object(s.useState)(),N=Object(c.a)(E,2),k=N[0],F=N[1],T=Object(s.useState)(),I=Object(c.a)(T,2),M=I[0],A=I[1],H=e.isOver,L=e.finish,P=0===a.filter((function(e){return!e.pairFound})).length;Object(s.useEffect)((function(){}),[a]);var K=Object(s.useCallback)((function(){j(0);var e=a.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{revealed:e.pairFound})}));l(e)}),[a,l,j]);Object(s.useEffect)((function(){return K()}),[]);var R=Object(s.useCallback)((function(){if(console.log("blurCard"),C(!1),A(!1),setTimeout((function(){F(!1),S(null)}),500),setTimeout((function(){K()}),400),0===a.filter((function(e){return!e.pairFound})).length)return e.onFinish()}),[O,a,H,L,C,F,S,K]),U=function(n){if((!q||q.id!==n)&&!(O>=2)){j((function(e){return e+1})),e.increaseCount(),S(a.find((function(e){return e.id===n})));var t=i(a),o=t.findIndex((function(e){return e.id===n})),c=t[o];if(c.revealed=!0,t[o]=c,l(t),1===O){var s=t.filter((function(e){return e.revealed&&!e.pairFound}));if(s[0].pairId===s[1].pairId){var u,d=function(e,n){var t;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=Object(r.a)(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var a=0,i=function(){};return{s:i,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,s=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return c=e.done,e},e:function(e){s=!0,o=e},f:function(){try{c||null==t.return||t.return()}finally{if(s)throw o}}}}(s);try{for(d.s();!(u=d.n()).done;){u.value.pairFound=!0}}catch(_){d.e(_)}finally{d.f()}setTimeout((function(){return j(0),F(!0),C(!0)}),1e3)}else setTimeout((function(){A(!0),F(!0)}),1400)}}},G=a.map((function(e){return Object(d.jsx)(_,{card:e,clickHandler:U,disabled:O>=2,cards:a},e.id)}));return e.show?Object(d.jsxs)("div",{className:y.a.memorycards,children:[!e.isOver&&G,Object(d.jsx)(b.a,{show:k}),Object(d.jsx)(p,{show:v,card:q,cardsMatch:v,onClose:R,allPairsFound:P}),M&&Object(d.jsx)(x,{onClose:R})]}):null}}}]);
//# sourceMappingURL=4.a47c0e10.chunk.js.map