function e(e,t,i,s){Object.defineProperty(e,t,{get:i,set:s,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},n={},r=i.parcelRequired7c6;null==r&&((r=function(e){if(e in s)return s[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return s[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},i.parcelRequired7c6=r),r.register("kyEFX",(function(t,i){var s,n;e(t.exports,"register",(function(){return s}),(function(e){return s=e})),e(t.exports,"resolve",(function(){return n}),(function(e){return n=e}));var r={};s=function(e){for(var t=Object.keys(e),i=0;i<t.length;i++)r[t[i]]=e[t[i]]},n=function(e){var t=r[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),r("kyEFX").register(JSON.parse('{"id70a":"bestiary.b60f53e6.js","lp5u4":"sprite.a48f67ed.svg","ctAAP":"item-mob-1.15985316.jpg","2JQ7r":"item-mob-2.393f09de.jpg","6SR7J":"item-mob-3.81d0e6e1.jpg","kkLFk":"spriggan.e05ed955.jpg","1K0po":"grifon.bea4bc90.jpg","581ik":"grigg.00657c76.jpg"}'));const a=document.querySelector(".js-header-wrapper"),o=document.querySelector(".js-header-container").clientHeight,c=document.querySelector(".js-tab-menu"),l=document.querySelector(".nav-header__list-tab-inner"),d=document.querySelector(".js-tab-list"),m=document.querySelector(".js-svg-rotate"),u=document.querySelector(".js-header-btm-menu"),g=document.querySelector(".js-mob-menu-btn-close"),b=document.querySelector(".js-transform-btn"),y=document.querySelector(".js-mob-menu"),h=document.querySelector(".js-backdrop");function _(e){if(document.body.classList.toggle("is-freeze"),y.classList.toggle("is-hidden-mob-menu"),h.classList.toggle("backdrop--hidden"),!l.classList.contains("is-hidden"))return l.classList.add("is-hidden"),void m.classList.remove("active-rotate")}function v(e){b.classList.toggle("transform-btn")}a.style.height=o+"px",c.addEventListener("click",(e=>{const{target:t}=e;if(y.classList.contains("is-hidden-mob-menu")||(y.classList.add("is-hidden-mob-menu"),h.classList.add("backdrop--hidden"),v(),document.body.classList.remove("is-freeze")),t.classList.contains("dropdown"))return d.classList.toggle("is-hidden"),void m.classList.toggle("active-rotate")})),u.addEventListener("click",_),g.addEventListener("click",(e=>{_(),v(),document.body.classList.remove("is-freeze")})),h.addEventListener("click",(e=>{_(),v(),document.body.classList.remove("is-freeze")})),b.addEventListener("click",v);const f=document.querySelector(".js-backdrop-search");document.querySelector(".js-search-icon").addEventListener("click",(function(e){f.classList.toggle("backdrop-search--hidden"),document.body.style.overflow=document.body.style.overflow?"":"hidden"}));var p;p=new URL(r("kyEFX").resolve("lp5u4"),import.meta.url).toString();var L;L=new URL(r("kyEFX").resolve("ctAAP"),import.meta.url).toString();var k;k=new URL(r("kyEFX").resolve("2JQ7r"),import.meta.url).toString();var S;S=new URL(r("kyEFX").resolve("6SR7J"),import.meta.url).toString();const w=[{name:"Боровик",description:"Боровик — (за слов'янською міфологією) один\n    з лісових духів, господар борів та...",image:t(L),ref:"./page-borovik.html"},{name:"Грифон (Гриф)",description:"Грифони — суперечливі істоти, які одночасно об'єднують Небо і Землю ...",image:t(k),ref:"./page-griffin.html"},{name:"Домовик",description:"Домовик  — у слов'янських народів домашній дух, міфологічний господар ...",image:t(S),ref:"./page-domovik.html"}];var j;j=new URL(r("kyEFX").resolve("kkLFk"),import.meta.url).toString();var E;E=new URL(r("kyEFX").resolve("1K0po"),import.meta.url).toString();var $;$=new URL(r("kyEFX").resolve("581ik"),import.meta.url).toString();const q=[{name:"Боровик",description:"Боровик (пол. Borowy, англ. Spriggan) — бестія у всесвіті Відьмака ...",image:t(j),genus:"Релікти",ref:"./page-borovik.html"},{name:"Грифон",description:"Грифон — це істота з тілом, задніми ногами та хвостом лева і головою ...",image:t(E),genus:"Гібриди",ref:"./page-griffin.html"},{name:"Домовик",description:"Домовик, гріг — це крихітний гуманоїд, пустотлива, але нешкідлива істота ...",image:t($),genus:"Людиноподібні",ref:"./page-domovik.html"}],F=document.querySelector(".js-bestiary-section-list"),H=document.querySelector(".js-myth-btn-ukr"),R=document.querySelector(".js-myth-btn-witcher"),A=document.querySelector(".js-sort-btns-alphabet"),x=document.querySelector(".js-sort-btns-menu");function U(e){F.innerHTML=w.map((({name:e,description:i,image:s,ref:n})=>`<li class="bestiary-list__item bestiary-item">\n    <div class="bestiary-item__heder">\n        <svg width="40" height="40" class="bestiary-item__logo">\n          <use href="${t(p)+"#icon-logo-ua"}"></use>\n        </svg> \n\n      <div class="bestiary-item__content">\n        <h3 class="bestiary-item__title">${e}</h3>\n        <h4 class="bestiary-item__sub-title">Українська міфологія</h4>\n      </div>\n\n      <a href="#" class="bestiary-item__svg-more">\n        <svg width="18" height="18" class="bestiary-body__logo">\n          <use href="${t(p)+"#more-vertical"}"></use>\n        </svg> \n      </a>\n    </div>\n\n    <picture class="bestiary-item__picture">\n      <a href="${n}">\n        <img class="bestiary-item__img bestiary-item__img-ukr" src="${s}" alt="${e}" loading="lazy">\n      </a>\n    </picture>\n\n    <div class="bestiary-item__body bestiary-body">\n\n      <a class="bestiary-body__link-myth" href="#">\n        <svg width="18" height="18" class="bestiary-body__logo">\n          <use href="${t(p)+"#icon-logo-ua"}"></use>\n        </svg> \n        Міф\n      </a>\n\n      <p class="bestiary-body__text">${i}</p>\n\n      <a class="bestiary-body__link-btn" href="${n}">\n        Читати далі\n        <svg width="19" height="18" class="bestiary-item__logo">\n          <use href="${t(p)+"#arrow-up-right"}"></use>\n        </svg> \n      </a>\n    </div>\n  </li>`)).join(""),R.classList.remove("myth-btns__active"),H.classList.add("myth-btns__active")}A.addEventListener("click",(e=>{x.classList.toggle("is-hidden")})),U(),H.addEventListener("click",U),R.addEventListener("click",(function(e){F.innerHTML=(i=q,i.map((({name:e,description:i,image:s,genus:n,ref:r})=>`<li class="bestiary-list__item bestiary-item">\n    <div class="bestiary-item__heder">\n        <svg width="40" height="40" class="bestiary-item__logo">\n          <use href="${t(p)+"#witcher-icon"}"></use>\n        </svg> \n      <div class="bestiary-item__content">\n        <h3 class="bestiary-item__title">${e}</h3>\n        <h4 class="bestiary-item__sub-title">Гра «Відьмак 3: Дикий Гін»</h4>\n      </div>\n\n      <a href="#" class="bestiary-item__svg-more">\n        <svg width="18" height="18" class="bestiary-body__logo">\n          <use href="${t(p)+"#more-vertical"}"></use>\n        </svg> \n      </a>\n    </div>\n\n    <picture class="bestiary-item__picture">\n      <a href="${r}">\n        <img class="bestiary-item__img bestiary-item__img-witcher js-bestiary-item-img-witcher" src="${s}" alt="${e}" loading="lazy">\n      </a>\n    </picture>\n\n    <div class="bestiary-item__body bestiary-body">\n      <a class="bestiary-body__link-myth" href="#">\n        <svg width="18" height="18" class="bestiary-item__logo">\n          <use href="${t(p)+"#leading"}"></use>\n        </svg> \n        ${n}\n      </a>\n\n      <p class="bestiary-body__text">${i}</p>\n\n      <a class="bestiary-body__link-btn" href="${r}">\n        Читати далі\n        <svg width="19" height="18" class="bestiary-item__logo">\n          <use href="${t(p)+"#arrow-up-right"}"></use>\n        </svg> \n      </a>\n    </div>\n  </li>`)).join("")),H.classList.remove("myth-btns__active"),R.classList.add("myth-btns__active");var i}));
//# sourceMappingURL=bestiary.b60f53e6.js.map
