!function(){function e(e,t,s,i){Object.defineProperty(e,t,{get:s,set:i,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},n={},r=s.parcelRequired7c6;null==r&&((r=function(e){if(e in i)return i[e].exports;if(e in n){var t=n[e];delete n[e];var s={id:e,exports:{}};return i[e]=s,t.call(s.exports,s,s.exports),s.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},s.parcelRequired7c6=r),r.register("iE7OH",(function(t,s){var i,n;e(t.exports,"register",(function(){return i}),(function(e){return i=e})),e(t.exports,"resolve",(function(){return n}),(function(e){return n=e}));var r={};i=function(e){for(var t=Object.keys(e),s=0;s<t.length;s++)r[t[s]]=e[t[s]]},n=function(e){var t=r[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),r.register("aNJCr",(function(t,s){var i;e(t.exports,"getBundleURL",(function(){return i}),(function(e){return i=e}));var n={};function r(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}i=function(e){var t=n[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return r(e[2])}return"/"}(),n[e]=t),t}})),r("iE7OH").register(JSON.parse('{"4CyFu":"bestiary.860c5b44.js","gG3IH":"item-mob-1.15985316.jpg","euFJS":"item-mob-2.393f09de.jpg","jtGza":"item-mob-3.81d0e6e1.jpg","jtsLn":"spriggan.e05ed955.jpg","feT3L":"grifon.bea4bc90.jpg","iOwtO":"grigg.00657c76.jpg","ee16w":"sprite.a48f67ed.svg"}'));const a=document.querySelector(".js-header-wrapper"),o=document.querySelector(".js-header-container").clientHeight,c=document.querySelector(".js-tab-menu"),l=document.querySelector(".nav-header__list-tab-inner"),d=document.querySelector(".js-tab-list"),u=document.querySelector(".js-svg-rotate"),m=document.querySelector(".js-header-btm-menu"),g=document.querySelector(".js-mob-menu-btn-close"),b=document.querySelector(".js-transform-btn"),y=document.querySelector(".js-mob-menu"),h=document.querySelector(".js-backdrop");function _(e){if(document.body.classList.toggle("is-freeze"),y.classList.toggle("is-hidden-mob-menu"),h.classList.toggle("backdrop--hidden"),!l.classList.contains("is-hidden"))return l.classList.add("is-hidden"),void u.classList.remove("active-rotate")}function f(e){b.classList.toggle("transform-btn")}a.style.height=o+"px",c.addEventListener("click",(e=>{const{target:t}=e;if(y.classList.contains("is-hidden-mob-menu")||(y.classList.add("is-hidden-mob-menu"),h.classList.add("backdrop--hidden"),f(),document.body.classList.remove("is-freeze")),t.classList.contains("dropdown"))return d.classList.toggle("is-hidden"),void u.classList.toggle("active-rotate")})),m.addEventListener("click",_),g.addEventListener("click",(e=>{_(),f(),document.body.classList.remove("is-freeze")})),h.addEventListener("click",(e=>{_(),f(),document.body.classList.remove("is-freeze")})),b.addEventListener("click",f);var v;v=r("aNJCr").getBundleURL("4CyFu")+r("iE7OH").resolve("gG3IH");var p;p=r("aNJCr").getBundleURL("4CyFu")+r("iE7OH").resolve("euFJS");var L;L=r("aNJCr").getBundleURL("4CyFu")+r("iE7OH").resolve("jtGza");const w=[{name:"Боровик",description:"Боровик — (за слов'янською міфологією) один\n    з лісових духів, господар борів та...",image:t(v),ref:"./page-borovik.html"},{name:"Грифон (Гриф)",description:"Грифони — суперечливі істоти, які одночасно об'єднують Небо і Землю ...",image:t(p),ref:"./page-griffin.html"},{name:"Домовик",description:"Домовик  — у слов'янських народів домашній дух, міфологічний господар ...",image:t(L),ref:"./page-domovik.html"}];var j;j=r("aNJCr").getBundleURL("4CyFu")+r("iE7OH").resolve("jtsLn");var S;S=r("aNJCr").getBundleURL("4CyFu")+r("iE7OH").resolve("feT3L");var E;E=r("aNJCr").getBundleURL("4CyFu")+r("iE7OH").resolve("iOwtO");const H=[{name:"Боровик",description:"Боровик (пол. Borowy, англ. Spriggan) — бестія у всесвіті Відьмака ...",image:t(j),genus:"Релікти",ref:"./page-borovik.html"},{name:"Грифон",description:"Грифон — це істота з тілом, задніми ногами та хвостом лева і головою ...",image:t(S),genus:"Гібриди",ref:"./page-griffin.html"},{name:"Домовик",description:"Домовик, гріг — це крихітний гуманоїд, пустотлива, але нешкідлива істота ...",image:t(E),genus:"Людиноподібні",ref:"./page-domovik.html"}],k=document.querySelector(".js-backdrop-search"),$=document.querySelector(".js-search-icon"),q=document.querySelector(".js-search-list");console.log(q),$.addEventListener("click",(function(e){k.classList.toggle("backdrop-search--hidden"),document.body.style.overflow=document.body.style.overflow?"":"hidden"}));[...w,...H].filter((e=>"боровик"===e.name.toLocaleLowerCase())).map((e=>console.log(e)));var C;C=r("aNJCr").getBundleURL("4CyFu")+r("iE7OH").resolve("ee16w");const F=document.querySelector(".js-bestiary-section-list"),O=document.querySelector(".js-myth-btn-ukr"),R=document.querySelector(".js-myth-btn-witcher"),x=document.querySelector(".js-sort-btns-alphabet"),J=document.querySelector(".js-sort-btns-menu");function N(e){F.innerHTML=w.map((({name:e,description:s,image:i,ref:n})=>`<li class="bestiary-list__item bestiary-item">\n    <div class="bestiary-item__heder">\n        <svg width="40" height="40" class="bestiary-item__logo">\n          <use href="${t(C)+"#icon-logo-ua"}"></use>\n        </svg> \n\n      <div class="bestiary-item__content">\n        <h3 class="bestiary-item__title">${e}</h3>\n        <h4 class="bestiary-item__sub-title">Українська міфологія</h4>\n      </div>\n\n      <a href="#" class="bestiary-item__svg-more">\n        <svg width="18" height="18" class="bestiary-body__logo">\n          <use href="${t(C)+"#more-vertical"}"></use>\n        </svg> \n      </a>\n    </div>\n\n    <picture class="bestiary-item__picture">\n      <a href="${n}">\n        <img class="bestiary-item__img bestiary-item__img-ukr" src="${i}" alt="${e}" loading="lazy">\n      </a>\n    </picture>\n\n    <div class="bestiary-item__body bestiary-body">\n\n      <a class="bestiary-body__link-myth" href="#">\n        <svg width="18" height="18" class="bestiary-body__logo">\n          <use href="${t(C)+"#icon-logo-ua"}"></use>\n        </svg> \n        Міф\n      </a>\n\n      <p class="bestiary-body__text">${s}</p>\n\n      <a class="bestiary-body__link-btn" href="${n}">\n        Читати далі\n        <svg width="19" height="18" class="bestiary-item__logo">\n          <use href="${t(C)+"#arrow-up-right"}"></use>\n        </svg> \n      </a>\n    </div>\n  </li>`)).join(""),R.classList.remove("myth-btns__active"),O.classList.add("myth-btns__active")}x.addEventListener("click",(e=>{J.classList.toggle("is-hidden")})),N(),O.addEventListener("click",N),R.addEventListener("click",(function(e){F.innerHTML=(s=H,s.map((({name:e,description:s,image:i,genus:n,ref:r})=>`<li class="bestiary-list__item bestiary-item">\n    <div class="bestiary-item__heder">\n        <svg width="40" height="40" class="bestiary-item__logo">\n          <use href="${t(C)+"#witcher-icon"}"></use>\n        </svg> \n      <div class="bestiary-item__content">\n        <h3 class="bestiary-item__title">${e}</h3>\n        <h4 class="bestiary-item__sub-title">Гра «Відьмак 3: Дикий Гін»</h4>\n      </div>\n\n      <a href="#" class="bestiary-item__svg-more">\n        <svg width="18" height="18" class="bestiary-body__logo">\n          <use href="${t(C)+"#more-vertical"}"></use>\n        </svg> \n      </a>\n    </div>\n\n    <picture class="bestiary-item__picture">\n      <a href="${r}">\n        <img class="bestiary-item__img bestiary-item__img-witcher js-bestiary-item-img-witcher" src="${i}" alt="${e}" loading="lazy">\n      </a>\n    </picture>\n\n    <div class="bestiary-item__body bestiary-body">\n      <a class="bestiary-body__link-myth" href="#">\n        <svg width="18" height="18" class="bestiary-item__logo">\n          <use href="${t(C)+"#leading"}"></use>\n        </svg> \n        ${n}\n      </a>\n\n      <p class="bestiary-body__text">${s}</p>\n\n      <a class="bestiary-body__link-btn" href="${r}">\n        Читати далі\n        <svg width="19" height="18" class="bestiary-item__logo">\n          <use href="${t(C)+"#arrow-up-right"}"></use>\n        </svg> \n      </a>\n    </div>\n  </li>`)).join("")),O.classList.remove("myth-btns__active"),R.classList.add("myth-btns__active");var s}))}();
//# sourceMappingURL=bestiary.860c5b44.js.map
