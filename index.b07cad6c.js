function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=r.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},r.parcelRequired7c6=i),i.register("kyEFX",(function(t,r){var n,o;e(t.exports,"register",(function(){return n}),(function(e){return n=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var i={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)i[t[r]]=e[t[r]]},o=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i("kyEFX").register(JSON.parse('{"5ZPII":"index.b07cad6c.js","ctAAP":"item-mob-1.15985316.jpg","2JQ7r":"item-mob-2.393f09de.jpg","6SR7J":"item-mob-3.81d0e6e1.jpg","kkLFk":"spriggan.e05ed955.jpg","1K0po":"grifon.bea4bc90.jpg","581ik":"grigg.00657c76.jpg","lp5u4":"sprite.a48f67ed.svg","kmr4k":"Content-404-mob.ef8f1dfe.jpg","2vhLd":"Content-404-tab.b40ee184.jpg","lBdN2":"PC-404.2c9ec4dc.jpg"}'));const s=document.querySelector(".js-header-wrapper"),a=document.querySelector(".js-header-container").clientHeight,c=document.querySelector(".js-tab-menu"),d=document.querySelector(".nav-header__list-tab-inner"),l=document.querySelector(".js-tab-list"),u=document.querySelector(".js-svg-rotate"),m=document.querySelector(".js-header-btm-menu"),g=document.querySelector(".js-mob-menu-btn-close"),f=document.querySelector(".js-transform-btn"),p=document.querySelector(".js-mob-menu"),v=document.querySelector(".js-backdrop");function b(e){if(document.body.classList.toggle("is-freeze"),p.classList.toggle("is-hidden-mob-menu"),v.classList.toggle("backdrop--hidden"),!d.classList.contains("is-hidden"))return d.classList.add("is-hidden"),void u.classList.remove("active-rotate")}function h(e){f.classList.toggle("transform-btn")}s.style.height=a+"px",c.addEventListener("click",(e=>{const{target:t}=e;if(p.classList.contains("is-hidden-mob-menu")||(p.classList.add("is-hidden-mob-menu"),v.classList.add("backdrop--hidden"),h(),document.body.classList.remove("is-freeze")),t.classList.contains("dropdown"))return l.classList.toggle("is-hidden"),void u.classList.toggle("active-rotate")})),m.addEventListener("click",b),g.addEventListener("click",(e=>{b(),h(),document.body.classList.remove("is-freeze")})),v.addEventListener("click",(e=>{b(),h(),document.body.classList.remove("is-freeze")})),f.addEventListener("click",h);var y;y=new URL(i("kyEFX").resolve("ctAAP"),import.meta.url).toString();var L;L=new URL(i("kyEFX").resolve("2JQ7r"),import.meta.url).toString();var k;k=new URL(i("kyEFX").resolve("6SR7J"),import.meta.url).toString();const S=[{name:"Боровик",searchName:"Боровик",description:"Боровик — (за слов'янською міфологією) один\n    з лісових духів, господар борів та...",image:t(y),ref:"./page-borovik.html"},{name:"Грифон (Гриф)",searchName:"Грифон",description:"Грифони — суперечливі істоти, які одночасно об'єднують Небо і Землю ...",image:t(L),ref:"./page-griffin.html"},{name:"Домовик",searchName:"Домовик",description:"Домовик  — у слов'янських народів домашній дух, міфологічний господар ...",image:t(k),ref:"./page-domovik.html"}];var E;E=new URL(i("kyEFX").resolve("kkLFk"),import.meta.url).toString();var w;w=new URL(i("kyEFX").resolve("1K0po"),import.meta.url).toString();var j;j=new URL(i("kyEFX").resolve("581ik"),import.meta.url).toString();const _=[{name:"Боровик",searchName:"Боровик",description:"Боровик (пол. Borowy, англ. Spriggan) — бестія у всесвіті Відьмака ...",image:t(E),genus:"Релікти",ref:"./page-borovik.html"},{name:"Грифон",searchName:"Грифон",description:"Грифон — це істота з тілом, задніми ногами та хвостом лева і головою ...",image:t(w),genus:"Гібриди",ref:"./page-griffin.html"},{name:"Домовик",searchName:"Домовик",description:"Домовик, гріг — це крихітний гуманоїд, пустотлива, але нешкідлива істота ...",image:t(j),genus:"Людиноподібні",ref:"./page-domovik.html"}];new URL(i("kyEFX").resolve("lp5u4"),import.meta.url).toString();var F;F=new URL(i("kyEFX").resolve("kmr4k"),import.meta.url).toString();var H;H=new URL(i("kyEFX").resolve("2vhLd"),import.meta.url).toString();var R;R=new URL(i("kyEFX").resolve("lBdN2"),import.meta.url).toString(),console.log(t(F));const q=document.querySelector(".js-backdrop-search"),A=document.querySelector(".js-search-icon"),N=document.querySelector(".js-search-list"),U=document.querySelector(".js-search-container"),X=document.querySelector(".js-search-input"),x=document.querySelector(".js-btn-search");A.addEventListener("click",(function(e){q.classList.toggle("backdrop-search--hidden"),document.body.style.overflow=document.body.style.overflow?"":"hidden"}));const C=[...S,..._];X.addEventListener("change",J),x.addEventListener("click",P);let O="";function J(){O=X.value.toLowerCase().trim(),X.value=""}function P(){C.filter((e=>e.searchName.toLowerCase()===O)).length?N.innerHTML=void 0:U.innerHTML=`<picture>\n      <source srcset="${t(R)}" media="(min-width: 1200px)">\n      <source srcset="${t(H)}" media="(min-width: 768px)">\n      <img src="${t(F)}" alt="">\n  </picture>`}document.addEventListener("keydown",(e=>{"Enter"===e.key&&(e.preventDefault(),J(),P())}));
//# sourceMappingURL=index.b07cad6c.js.map
