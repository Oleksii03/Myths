!function(){function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=r.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},r.parcelRequired7c6=i),i.register("iE7OH",(function(t,r){var n,o;e(t.exports,"register",(function(){return n}),(function(e){return n=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var i={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)i[t[r]]=e[t[r]]},o=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i.register("aNJCr",(function(t,r){var n;e(t.exports,"getBundleURL",(function(){return n}),(function(e){return n=e}));var o={};function i(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}n=function(e){var t=o[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),o[e]=t),t}})),i("iE7OH").register(JSON.parse('{"EVgbq":"index.95f9c2d2.js","gG3IH":"item-mob-1.15985316.jpg","euFJS":"item-mob-2.393f09de.jpg","jtGza":"item-mob-3.81d0e6e1.jpg","jtsLn":"spriggan.e05ed955.jpg","feT3L":"grifon.bea4bc90.jpg","iOwtO":"grigg.00657c76.jpg"}'));const s=document.querySelector(".js-header-wrapper"),c=document.querySelector(".js-header-container").clientHeight,a=document.querySelector(".js-tab-menu"),d=document.querySelector(".nav-header__list-tab-inner"),l=document.querySelector(".js-tab-list"),u=document.querySelector(".js-svg-rotate"),g=document.querySelector(".js-header-btm-menu"),m=document.querySelector(".js-mob-menu-btn-close"),f=document.querySelector(".js-transform-btn"),b=document.querySelector(".js-mob-menu"),v=document.querySelector(".js-backdrop");function p(e){if(document.body.classList.toggle("is-freeze"),b.classList.toggle("is-hidden-mob-menu"),v.classList.toggle("backdrop--hidden"),!d.classList.contains("is-hidden"))return d.classList.add("is-hidden"),void u.classList.remove("active-rotate")}function h(e){f.classList.toggle("transform-btn")}s.style.height=c+"px",a.addEventListener("click",(e=>{const{target:t}=e;if(b.classList.contains("is-hidden-mob-menu")||(b.classList.add("is-hidden-mob-menu"),v.classList.add("backdrop--hidden"),h(),document.body.classList.remove("is-freeze")),t.classList.contains("dropdown"))return l.classList.toggle("is-hidden"),void u.classList.toggle("active-rotate")})),g.addEventListener("click",p),m.addEventListener("click",(e=>{p(),h(),document.body.classList.remove("is-freeze")})),v.addEventListener("click",(e=>{p(),h(),document.body.classList.remove("is-freeze")})),f.addEventListener("click",h);var L;L=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("gG3IH");var E;E=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("euFJS");var y;y=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("jtGza");const j=[{name:"Боровик",description:"Боровик — (за слов'янською міфологією) один\n    з лісових духів, господар борів та...",image:t(L),ref:"./page-borovik.html"},{name:"Грифон (Гриф)",description:"Грифони — суперечливі істоти, які одночасно об'єднують Небо і Землю ...",image:t(E),ref:"./page-griffin.html"},{name:"Домовик",description:"Домовик  — у слов'янських народів домашній дух, міфологічний господар ...",image:t(y),ref:"./page-domovik.html"}];var S;S=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("jtsLn");var q;q=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("feT3L");var H;H=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("iOwtO");const w=[{name:"Боровик",description:"Боровик (пол. Borowy, англ. Spriggan) — бестія у всесвіті Відьмака ...",image:t(S),genus:"Релікти",ref:"./page-borovik.html"},{name:"Грифон",description:"Грифон — це істота з тілом, задніми ногами та хвостом лева і головою ...",image:t(q),genus:"Гібриди",ref:"./page-griffin.html"},{name:"Домовик",description:"Домовик, гріг — це крихітний гуманоїд, пустотлива, але нешкідлива істота ...",image:t(H),genus:"Людиноподібні",ref:"./page-domovik.html"}],k=document.querySelector(".js-backdrop-search"),_=document.querySelector(".js-search-icon"),O=(document.querySelector(".js-search-list"),document.querySelector(".js-search-input")),R=document.querySelector(".js-btn-search");_.addEventListener("click",(function(e){k.classList.toggle("backdrop-search--hidden"),document.body.style.overflow=document.body.style.overflow?"":"hidden"}));let x="";function C(){const e=[...j,...w].filter((e=>e.name.toLocaleLowerCase()===x));console.log(e)}O.addEventListener("change",(e=>{x=e.target.value.toLocaleLowerCase().trim()})),R.addEventListener("click",C),k.addEventListener("keydown",(e=>{"Enter"===e.key&&C()}))}();
//# sourceMappingURL=index.95f9c2d2.js.map