function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},o=r.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},r.parcelRequired7c6=o),o.register("kyEFX",(function(t,r){var n,i;e(t.exports,"register",(function(){return n}),(function(e){return n=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var o={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)o[t[r]]=e[t[r]]},i=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o("kyEFX").register(JSON.parse('{"7e3CX":"glossary.30735fe2.js","ctAAP":"item-mob-1.15985316.jpg","2JQ7r":"item-mob-2.393f09de.jpg","6SR7J":"item-mob-3.81d0e6e1.jpg","kkLFk":"spriggan.e05ed955.jpg","1K0po":"grifon.bea4bc90.jpg","581ik":"grigg.00657c76.jpg","ft1aw":"ukrainskii-kozak-art-1_PC.cac7d6e8.jpg","76WeU":"white-whitch-1.5727c56a.png","j5lKD":"Geralt.39352b96.jpg","fNHIx":"Yennefer.3107b75e.jpg","lp5u4":"sprite.a48f67ed.svg","3AOGA":"Mobile-404.d5b09e1e.png","axhsV":"Tab-404.81c5d66d.png","eqOun":"PC-404.b1aafd21.png"}'));const s=document.querySelector(".js-header-wrapper"),a=document.querySelector(".js-header-container").clientHeight,c=document.querySelector(".js-tab-menu"),l=document.querySelector(".nav-header__list-tab-inner"),d=document.querySelector(".js-tab-list"),m=document.querySelector(".js-svg-rotate"),u=document.querySelector(".js-header-btm-menu"),g=document.querySelector(".js-mob-menu-btn-close"),h=document.querySelector(".js-transform-btn"),f=document.querySelector(".js-mob-menu"),p=document.querySelector(".js-backdrop");function v(e){if(document.body.classList.toggle("is-freeze"),f.classList.toggle("is-hidden-mob-menu"),p.classList.toggle("backdrop--hidden"),!l.classList.contains("is-hidden"))return l.classList.add("is-hidden"),void m.classList.remove("active-rotate")}function b(e){h.classList.toggle("transform-btn")}s.style.height=a+"px",c.addEventListener("click",(e=>{const{target:t}=e;if(f.classList.contains("is-hidden-mob-menu")||(f.classList.add("is-hidden-mob-menu"),p.classList.add("backdrop--hidden"),b(),document.body.classList.remove("is-freeze")),t.classList.contains("dropdown"))return d.classList.toggle("is-hidden"),void m.classList.toggle("active-rotate")})),u.addEventListener("click",v),g.addEventListener("click",(e=>{v(),b(),document.body.classList.remove("is-freeze")})),p.addEventListener("click",(e=>{v(),b(),document.body.classList.remove("is-freeze")})),h.addEventListener("click",b);var y;y=new URL(o("kyEFX").resolve("ctAAP"),import.meta.url).toString();var _;_=new URL(o("kyEFX").resolve("2JQ7r"),import.meta.url).toString();var k;k=new URL(o("kyEFX").resolve("6SR7J"),import.meta.url).toString();const S=[{name:"Боровик",searchName:"Боровик",description:"Боровик — (за слов'янською міфологією) один\n    з лісових духів, господар борів та...",img:t(y),logo:"#icon-logo-ua",genus:"Міф",ref:"./page-borovik.html"},{name:"Грифон (Гриф)",searchName:"Грифон",description:"Грифони — суперечливі істоти, які одночасно об'єднують Небо і Землю ...",img:t(_),logo:"#icon-logo-ua",genus:"Міф",ref:"./page-griffin.html"},{name:"Домовик",searchName:"Домовик",description:"Домовик  — у слов'янських народів домашній дух, міфологічний господар ...",img:t(k),logo:"#icon-logo-ua",genus:"Міф",ref:"./page-domovik.html"}];var w;w=new URL(o("kyEFX").resolve("kkLFk"),import.meta.url).toString();var L;L=new URL(o("kyEFX").resolve("1K0po"),import.meta.url).toString();var E;E=new URL(o("kyEFX").resolve("581ik"),import.meta.url).toString();const H=[{name:"Боровик",searchName:"Боровик",description:"Боровик (пол. Borowy, англ. Spriggan) — бестія у всесвіті Відьмака ...",img:t(w),logo:"#witcher-icon",genus:"Релікти",ref:"./page-borovik.html"},{name:"Грифон",searchName:"Грифон",description:"Грифон — це істота з тілом, задніми ногами та хвостом лева і головою ...",img:t(L),logo:"#witcher-icon",genus:"Гібриди",ref:"./page-griffin.html"},{name:"Домовик",searchName:"Домовик",description:"Домовик, гріг — це крихітний гуманоїд, пустотлива, але нешкідлива істота ...",img:t(E),logo:"#witcher-icon",genus:"Людиноподібні",ref:"./page-domovik.html"}];var F;F=new URL(o("kyEFX").resolve("ft1aw"),import.meta.url).toString();var R;R=new URL(o("kyEFX").resolve("76WeU"),import.meta.url).toString();var j;j=new URL(o("kyEFX").resolve("j5lKD"),import.meta.url).toString();var A;A=new URL(o("kyEFX").resolve("fNHIx"),import.meta.url).toString();const q=[{name:"Козак-характерник",searchName:"Козак",genus:"Козаки-характерники",img:t(F),logo:"#icon-ukr-characters",description:"Відьма́к та Характе́рник (відьма́н) — персонаж слов'янської міфології, чаклун ...",ref:"./page-characters.html"},{name:"Чародійки",searchName:"Чародійка",genus:"Чаклунки/Відьми",img:t(R),logo:"#icon-ukr-characters",description:"Ві́дьма, чаклу́нка (чародійка) — жінка, наділена чаклунськими здібностями ...",ref:"./page-characters-witch.html"}],U=[{name:"Ґеральт з Рівії",searchName:"Геральт",genus:"Відьмак",img:t(j),logo:"#witcher-icon",description:"Ґеральт з Рівії, «Білий Вовк» — головний герой літературного ...",ref:"./page-characters.html"},{name:"Йеннефер",searchName:"Йеннефер",genus:"Чародійка",img:t(A),logo:"#icon-Magic-center",description:"Йеннефер — одна з головних героїнь літературного циклу А.Сапковського ...",ref:"./page-characters-witch.html"}];var X;X=new URL(o("kyEFX").resolve("lp5u4"),import.meta.url).toString();var N;N=new URL(o("kyEFX").resolve("3AOGA"),import.meta.url).toString();var x;x=new URL(o("kyEFX").resolve("axhsV"),import.meta.url).toString();var $;$=new URL(o("kyEFX").resolve("eqOun"),import.meta.url).toString();const O=document.querySelector(".js-backdrop-search"),C=document.querySelector(".js-search-icon"),M=document.querySelector(".js-search-list"),T=document.querySelector(".js-search-input"),z=document.querySelector(".js-btn-search"),D=document.querySelector(".js-history-close");C.addEventListener("click",(function(e){O.classList.toggle("backdrop-search--hidden"),document.body.style.overflow=document.body.style.overflow?"":"hidden"}));const J=[...S,...H,...q,...U];console.log(J),T.addEventListener("change",K),z.addEventListener("click",G);let P="";function K(){P=T.value.toLowerCase().trim(),T.value=""}function G(){const e=J.filter((e=>e.searchName.toLowerCase()===P));e.length?M.innerHTML=function(e){return e.map((({name:e,description:r,img:n,logo:i,genus:o,ref:s})=>`<li class="bestiary-list__item bestiary-item">\n    <div class="bestiary-item__heder">\n        <svg width="40" height="40" class="bestiary-item__logo bestiary-item__logo_accent">\n          <use href="${t(X)+i}"></use>\n        </svg> \n\n      <div class="bestiary-item__content">\n        <h3 class="bestiary-item__title">${e}</h3>\n        <h4 class="bestiary-item__sub-title">${o}</h4>\n      </div>\n\n      <a href="#" class="bestiary-item__svg-more">\n        <svg width="18" height="18" class="bestiary-body__logo">\n          <use href="${t(X)+"#more-vertical"}"></use>\n        </svg> \n      </a>\n    </div>\n  </div>\n\n<picture class="bestiary-item__picture">\n  <a href="${s}">\n    <img class="search-item__img" src="${n}" alt="${e}" loading="lazy">\n  </a>\n</picture>\n\n<div class="bestiary-item__body bestiary-body">\n\n  <a class="bestiary-body__link-myth" href="#">\n    <svg width="18" height="18" class="bestiary-body__logo">\n      <use href="${t(X)+i}"></use>\n    </svg> \n    ${o}\n  </a>\n\n  <p class="bestiary-body__text">${r}</p>\n\n  <a class="bestiary-body__link-btn" href="${s}">\n    Читати далі\n    <svg width="19" height="18" class="bestiary-item__logo">\n      <use href="${t(X)+"#arrow-up-right"}"></use>\n    </svg> \n  </a>\n</div>\n</li>`)).join("")}(e):M.innerHTML=`<li><picture class="erroe-photo">\n      <source srcset="${t($)}" media="(min-width: 1200px)">\n      <source srcset="${t(x)}" media="(min-width: 768px)">\n      <img class="erroe-img" src="${t(N)}" alt="witcher-error">\n  </picture></li>`}document.addEventListener("keydown",(e=>{"Enter"===e.key&&(e.preventDefault(),K(),G())})),D.addEventListener("click",(()=>{P="",M.innerHTML=""}));
//# sourceMappingURL=glossary.30735fe2.js.map