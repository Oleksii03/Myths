function e(e,t,r,s){Object.defineProperty(e,t,{get:r,set:s,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},i={},n=r.parcelRequired7c6;null==n&&((n=function(e){if(e in s)return s[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return s[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){i[e]=t},r.parcelRequired7c6=n),n.register("kyEFX",(function(t,r){var s,i;e(t.exports,"register",(function(){return s}),(function(e){return s=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var n={};s=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)n[t[r]]=e[t[r]]},i=function(e){var t=n[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),n("kyEFX").register(JSON.parse('{"cOeSE":"characters.97c0dc6e.js","ctAAP":"item-mob-1.15985316.jpg","2JQ7r":"item-mob-2.393f09de.jpg","6SR7J":"item-mob-3.81d0e6e1.jpg","kkLFk":"spriggan.e05ed955.jpg","1K0po":"grifon.bea4bc90.jpg","581ik":"grigg.00657c76.jpg","ft1aw":"ukrainskii-kozak-art-1_PC.87b80e1c.jpg","76WeU":"white-whitch-1.5727c56a.png","j5lKD":"Geralt.2b3a04db.jpg","fNHIx":"Yennefer.3107b75e.jpg","lp5u4":"sprite.a48f67ed.svg"}'));const a=document.querySelector(".js-header-wrapper"),o=document.querySelector(".js-header-container").clientHeight,c=document.querySelector(".js-tab-menu"),l=document.querySelector(".nav-header__list-tab-inner"),d=document.querySelector(".js-tab-list"),m=document.querySelector(".js-svg-rotate"),u=document.querySelector(".js-header-btm-menu"),g=document.querySelector(".js-mob-menu-btn-close"),b=document.querySelector(".js-transform-btn"),h=document.querySelector(".js-mob-menu"),_=document.querySelector(".js-backdrop");function y(e){if(document.body.classList.toggle("is-freeze"),h.classList.toggle("is-hidden-mob-menu"),_.classList.toggle("backdrop--hidden"),!l.classList.contains("is-hidden"))return l.classList.add("is-hidden"),void m.classList.remove("active-rotate")}function f(e){b.classList.toggle("transform-btn")}a.style.height=o+"px",c.addEventListener("click",(e=>{const{target:t}=e;if(h.classList.contains("is-hidden-mob-menu")||(h.classList.add("is-hidden-mob-menu"),_.classList.add("backdrop--hidden"),f(),document.body.classList.remove("is-freeze")),t.classList.contains("dropdown"))return d.classList.toggle("is-hidden"),void m.classList.toggle("active-rotate")})),u.addEventListener("click",y),g.addEventListener("click",(e=>{y(),f(),document.body.classList.remove("is-freeze")})),_.addEventListener("click",(e=>{y(),f(),document.body.classList.remove("is-freeze")})),b.addEventListener("click",f);var v;v=new URL(n("kyEFX").resolve("ctAAP"),import.meta.url).toString();var p;p=new URL(n("kyEFX").resolve("2JQ7r"),import.meta.url).toString();var k;k=new URL(n("kyEFX").resolve("6SR7J"),import.meta.url).toString();const L=[{name:"Боровик",description:"Боровик — (за слов'янською міфологією) один\n    з лісових духів, господар борів та...",image:t(v),ref:"./page-borovik.html"},{name:"Грифон (Гриф)",description:"Грифони — суперечливі істоти, які одночасно об'єднують Небо і Землю ...",image:t(p),ref:"./page-griffin.html"},{name:"Домовик",description:"Домовик  — у слов'янських народів домашній дух, міфологічний господар ...",image:t(k),ref:"./page-domovik.html"}];var S;S=new URL(n("kyEFX").resolve("kkLFk"),import.meta.url).toString();var w;w=new URL(n("kyEFX").resolve("1K0po"),import.meta.url).toString();var E;E=new URL(n("kyEFX").resolve("581ik"),import.meta.url).toString();const j=[{name:"Боровик",description:"Боровик (пол. Borowy, англ. Spriggan) — бестія у всесвіті Відьмака ...",image:t(S),genus:"Релікти",ref:"./page-borovik.html"},{name:"Грифон",description:"Грифон — це істота з тілом, задніми ногами та хвостом лева і головою ...",image:t(w),genus:"Гібриди",ref:"./page-griffin.html"},{name:"Домовик",description:"Домовик, гріг — це крихітний гуманоїд, пустотлива, але нешкідлива істота ...",image:t(E),genus:"Людиноподібні",ref:"./page-domovik.html"}],H=document.querySelector(".js-backdrop-search"),F=document.querySelector(".js-search-icon"),R=document.querySelector(".js-search-list");console.log(R),F.addEventListener("click",(function(e){H.classList.toggle("backdrop-search--hidden"),document.body.style.overflow=document.body.style.overflow?"":"hidden"}));[...L,...j].filter((e=>"боровик"===e.name.toLocaleLowerCase())).map((e=>console.log(e)));var q;q=new URL(n("kyEFX").resolve("ft1aw"),import.meta.url).toString();var $;$=new URL(n("kyEFX").resolve("76WeU"),import.meta.url).toString();var A;A=new URL(n("kyEFX").resolve("j5lKD"),import.meta.url).toString();var U;U=new URL(n("kyEFX").resolve("fNHIx"),import.meta.url).toString();const x=[{name:"Козак-характерник",genus:"Козаки-характерники",img:t(q),description:"Відьма́к та Характе́рник (відьма́н) — персонаж слов'янської міфології, чаклун ...",ref:"./page-characters.html"},{name:"Чародійки",genus:"Чаклунки/Відьми",img:t($),description:"Ві́дьма, чаклу́нка (чародійка) — жінка, наділена чаклунськими здібностями ...",ref:"./page-characters-witch.html"}],X=[{name:"Ґеральт з Рівії",genus:"Відьмак",img:t(A),logo:"#witcher-icon",description:"Ґеральт з Рівії, «Білий Вовк» — головний герой літературного циклу романів ...",ref:"./page-characters.html"},{name:"Йеннефер",genus:"Чародійка",img:t(U),logo:"#icon-Magic-center",description:"Йеннефер — одна з головних героїнь літературного циклу А.Сапковського ...",ref:"./page-characters-witch.html"}];var z;z=new URL(n("kyEFX").resolve("lp5u4"),import.meta.url).toString();const O=document.querySelector(".characters-btn__witcher"),J=document.querySelector(".jscharacters-btn-ukr"),M=document.querySelector(".js-characters-btn-box"),N=document.querySelector(".js-characters-section-list"),T=document.querySelector(".js-sort-btns-alphabet"),C=document.querySelector(".js-sort-btns-menu");function D(e){M.classList.remove("characters-btn__active"),J.classList.add("characters-btn__active"),O.classList.remove("characters-btn__active"),N.innerHTML=x.map((({name:e,genus:r,img:s,description:i,ref:n})=>`<li class="bestiary-list__item bestiary-item">\n    <div class="bestiary-item__heder">\n        <svg width="40" height="40" class="bestiary-item__logo">\n          <use href="${t(z)+"#icon-ukr-characters"}"></use>\n        </svg> \n\n      <div class="bestiary-item__content">\n        <h3 class="bestiary-item__title">${e}</h3>\n        <h4 class="bestiary-item__sub-title">Українська міфологія</h4>\n      </div>\n\n      <a href="#" class="bestiary-item__svg-more">\n        <svg width="18" height="18" class="bestiary-body__logo">\n          <use href="${t(z)+"#more-vertical"}"></use>\n        </svg> \n      </a>\n    </div>\n\n    <picture class="bestiary-item__picture">\n      <a href="${n}">\n        <img class="bestiary-item__img bestiary-item__img-ukr" src="${s}" alt="${e}" loading="lazy">\n      </a>\n    </picture>\n\n    <div class="bestiary-item__body bestiary-body">\n\n      <a class="bestiary-body__link-myth" href="#">\n        <svg width="18" height="18" class="bestiary-body__logo">\n          <use href="${t(z)+"#icon-profile"}"></use>\n        </svg> \n        ${r}\n      </a>\n\n      <p class="bestiary-body__text">${i}</p>\n\n      <a class="bestiary-body__link-btn" href="${n}">\n        Читати далі\n        <svg width="19" height="18" class="bestiary-item__logo">\n          <use href="${t(z)+"#arrow-up-right"}"></use>\n        </svg> \n      </a>\n    </div>\n  </li>`)).join("")}T.addEventListener("click",(e=>{C.classList.toggle("is-hidden")})),J.addEventListener("click",D),O.addEventListener("click",(function(e){M.classList.add("characters-btn__active"),J.classList.remove("characters-btn__active"),O.classList.add("characters-btn__active"),N.innerHTML=(r=X,r.map((({name:e,genus:r,img:s,description:i,ref:n,logo:a})=>`<li class="bestiary-list__item bestiary-item">\n    <div class="bestiary-item__heder">\n        <svg width="40" height="40" class="characters-item__logo">\n          <use class="characters-item__logo_inner" href="${t(z)+a}"></use>\n        </svg> \n      <div class="bestiary-item__content">\n        <h3 class="bestiary-item__title">${e}</h3>\n        <h4 class="bestiary-item__sub-title">Гра «Відьмак 3: Дикий Гін»</h4>\n      </div>\n\n      <a href="#" class="bestiary-item__svg-more">\n        <svg width="18" height="18" class="bestiary-body__logo">\n          <use href="${t(z)+"#more-vertical"}"></use>\n        </svg> \n      </a>\n    </div>\n\n    <picture class="bestiary-item__picture">\n      <a href="${n}">\n        <img class="bestiary-item__img bestiary-item__img-witcher js-bestiary-item-img-witcher" src="${s}" alt="${e}" loading="lazy">\n      </a>\n    </picture>\n\n    <div class="bestiary-item__body bestiary-body">\n      <a class="bestiary-body__link-myth" href="#">\n        <svg width="18" height="18" class="bestiary-item__logo">\n          <use href="${t(z)+"#icon-profile"}"></use>\n        </svg> \n        ${r}\n      </a>\n\n      <p class="bestiary-body__text">${i}</p>\n\n      <a class="bestiary-body__link-btn" href="${n}">\n        Читати далі\n        <svg width="19" height="18" class="bestiary-item__logo">\n          <use href="${t(z)+"#arrow-up-right"}"></use>\n        </svg> \n      </a>\n    </div>\n  </li>`)).join(""));var r})),D();
//# sourceMappingURL=characters.97c0dc6e.js.map
