function e(e,t,i,s){Object.defineProperty(e,t,{get:i,set:s,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},r={},n=i.parcelRequired7c6;null==n&&((n=function(e){if(e in s)return s[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return s[e]=i,t.call(i.exports,i,i.exports),i.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){r[e]=t},i.parcelRequired7c6=n),n.register("kyEFX",(function(t,i){var s,r;e(t.exports,"register",(function(){return s}),(function(e){return s=e})),e(t.exports,"resolve",(function(){return r}),(function(e){return r=e}));var n={};s=function(e){for(var t=Object.keys(e),i=0;i<t.length;i++)n[t[i]]=e[t[i]]},r=function(e){var t=n[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),n("kyEFX").register(JSON.parse('{"id70a":"bestiary.a7b5a5ac.js","ctAAP":"item-mob-1.15985316.jpg","2JQ7r":"item-mob-2.393f09de.jpg","6SR7J":"item-mob-3.81d0e6e1.jpg","kkLFk":"spriggan.e05ed955.jpg","1K0po":"grifon.bea4bc90.jpg","581ik":"grigg.00657c76.jpg","ft1aw":"ukrainskii-kozak-art-1_PC.87b80e1c.jpg","76WeU":"white-whitch-1.5727c56a.png","j5lKD":"Geralt.2b3a04db.jpg","fNHIx":"Yennefer.3107b75e.jpg","lp5u4":"sprite.a48f67ed.svg","3AOGA":"Mobile-404.d5b09e1e.png","axhsV":"Tab-404.81c5d66d.png","eqOun":"PC-404.b1aafd21.png"}'));const a=document.querySelector(".js-header-wrapper"),o=document.querySelector(".js-header-container").clientHeight,c=document.querySelector(".js-tab-menu"),l=document.querySelector(".nav-header__list-tab-inner"),d=document.querySelector(".js-tab-list"),m=document.querySelector(".js-svg-rotate"),u=document.querySelector(".js-header-btm-menu"),g=document.querySelector(".js-mob-menu-btn-close"),h=document.querySelector(".js-transform-btn"),b=document.querySelector(".js-mob-menu"),y=document.querySelector(".js-backdrop");function _(e){if(document.body.classList.toggle("is-freeze"),b.classList.toggle("is-hidden-mob-menu"),y.classList.toggle("backdrop--hidden"),!l.classList.contains("is-hidden"))return l.classList.add("is-hidden"),void m.classList.remove("active-rotate")}function v(e){h.classList.toggle("transform-btn")}a.style.height=o+"px",c.addEventListener("click",(e=>{const{target:t}=e;if(b.classList.contains("is-hidden-mob-menu")||(b.classList.add("is-hidden-mob-menu"),y.classList.add("backdrop--hidden"),v(),document.body.classList.remove("is-freeze")),t.classList.contains("dropdown"))return d.classList.toggle("is-hidden"),void m.classList.toggle("active-rotate")})),u.addEventListener("click",_),g.addEventListener("click",(e=>{_(),v(),document.body.classList.remove("is-freeze")})),y.addEventListener("click",(e=>{_(),v(),document.body.classList.remove("is-freeze")})),h.addEventListener("click",v);var f;f=new URL(n("kyEFX").resolve("ctAAP"),import.meta.url).toString();var p;p=new URL(n("kyEFX").resolve("2JQ7r"),import.meta.url).toString();var k;k=new URL(n("kyEFX").resolve("6SR7J"),import.meta.url).toString();const w=[{name:"Боровик",searchName:"Боровик",description:"Боровик — (за слов'янською міфологією) один\n    з лісових духів, господар борів та...",image:t(f),ref:"./page-borovik.html"},{name:"Грифон (Гриф)",searchName:"Грифон",description:"Грифони — суперечливі істоти, які одночасно об'єднують Небо і Землю ...",image:t(p),ref:"./page-griffin.html"},{name:"Домовик",searchName:"Домовик",description:"Домовик  — у слов'янських народів домашній дух, міфологічний господар ...",image:t(k),ref:"./page-domovik.html"}];var L;L=new URL(n("kyEFX").resolve("kkLFk"),import.meta.url).toString();var S;S=new URL(n("kyEFX").resolve("1K0po"),import.meta.url).toString();var E;E=new URL(n("kyEFX").resolve("581ik"),import.meta.url).toString();const j=[{name:"Боровик",searchName:"Боровик",description:"Боровик (пол. Borowy, англ. Spriggan) — бестія у всесвіті Відьмака ...",image:t(L),genus:"Релікти",ref:"./page-borovik.html"},{name:"Грифон",searchName:"Грифон",description:"Грифон — це істота з тілом, задніми ногами та хвостом лева і головою ...",image:t(S),genus:"Гібриди",ref:"./page-griffin.html"},{name:"Домовик",searchName:"Домовик",description:"Домовик, гріг — це крихітний гуманоїд, пустотлива, але нешкідлива істота ...",image:t(E),genus:"Людиноподібні",ref:"./page-domovik.html"}];var H;H=new URL(n("kyEFX").resolve("ft1aw"),import.meta.url).toString();var F;F=new URL(n("kyEFX").resolve("76WeU"),import.meta.url).toString();var $;$=new URL(n("kyEFX").resolve("j5lKD"),import.meta.url).toString();var R;R=new URL(n("kyEFX").resolve("fNHIx"),import.meta.url).toString();const q=[{name:"Козак-характерник",searchName:"Козак",genus:"Козаки-характерники",img:t(H),description:"Відьма́к та Характе́рник (відьма́н) — персонаж слов'янської міфології, чаклун ...",ref:"./page-characters.html"},{name:"Чародійки",searchName:"Чародійки",genus:"Чаклунки/Відьми",img:t(F),description:"Ві́дьма, чаклу́нка (чародійка) — жінка, наділена чаклунськими здібностями ...",ref:"./page-characters-witch.html"}],A=[{name:"Ґеральт з Рівії",searchName:"Геральт",genus:"Відьмак",img:t($),logo:"#witcher-icon",description:"Ґеральт з Рівії, «Білий Вовк» — головний герой літературного циклу романів ...",ref:"./page-characters.html"},{name:"Йеннефер",searchName:"Йеннефер",genus:"Чародійка",img:t(R),logo:"#icon-Magic-center",description:"Йеннефер — одна з головних героїнь літературного циклу А.Сапковського ...",ref:"./page-characters-witch.html"}];var U;U=new URL(n("kyEFX").resolve("lp5u4"),import.meta.url).toString();var x;x=new URL(n("kyEFX").resolve("3AOGA"),import.meta.url).toString();var N;N=new URL(n("kyEFX").resolve("axhsV"),import.meta.url).toString();var X;X=new URL(n("kyEFX").resolve("eqOun"),import.meta.url).toString();const O=document.querySelector(".js-backdrop-search"),M=document.querySelector(".js-search-icon"),T=document.querySelector(".js-search-list"),z=document.querySelector(".js-search-input"),C=document.querySelector(".js-btn-search"),D=document.querySelector(".js-history-close");M.addEventListener("click",(function(e){O.classList.toggle("backdrop-search--hidden"),document.body.style.overflow=document.body.style.overflow?"":"hidden"}));const J=[...w,...j,...q,...A];console.log(J),z.addEventListener("change",K),C.addEventListener("click",G);let P="";function K(){P=z.value.toLowerCase().trim(),z.value=""}function G(){const e=J.filter((e=>e.searchName.toLowerCase()===P));e.length?T.innerHTML=function(e){return e.map((({name:e,description:i,image:s,ref:r})=>`<li class="bestiary-list__item bestiary-item">\n    <div class="bestiary-item__heder">\n        <svg width="40" height="40" class="bestiary-item__logo">\n          <use href="${t(U)+"#icon-logo-ua"}"></use>\n        </svg> \n\n      <div class="bestiary-item__content">\n        <h3 class="bestiary-item__title">${e}</h3>\n        <h4 class="bestiary-item__sub-title">Українська міфологія</h4>\n      </div>\n\n      <a href="#" class="bestiary-item__svg-more">\n        <svg width="18" height="18" class="bestiary-body__logo">\n          <use href="${t(U)+"#more-vertical"}"></use>\n        </svg> \n      </a>\n    </div>\n  </div>\n\n<picture class="bestiary-item__picture">\n  <a href="${r}">\n    <img class="bestiary-item__img bestiary-item__img-ukr" src="${s}" alt="${e}" loading="lazy">\n  </a>\n</picture>\n\n<div class="bestiary-item__body bestiary-body">\n\n  <a class="bestiary-body__link-myth" href="#">\n    <svg width="18" height="18" class="bestiary-body__logo">\n      <use href="${t(U)+"#icon-logo-ua"}"></use>\n    </svg> \n    Міф\n  </a>\n\n  <p class="bestiary-body__text">${i}</p>\n\n  <a class="bestiary-body__link-btn" href="${r}">\n    Читати далі\n    <svg width="19" height="18" class="bestiary-item__logo">\n      <use href="${t(U)+"#arrow-up-right"}"></use>\n    </svg> \n  </a>\n</div>\n</li>`)).join("")}(e):T.innerHTML=`<li><picture class="erroe-photo">\n      <source srcset="${t(X)}" media="(min-width: 1200px)">\n      <source srcset="${t(N)}" media="(min-width: 768px)">\n      <img class="erroe-img" src="${t(x)}" alt="witcher-error">\n  </picture></li>`}document.addEventListener("keydown",(e=>{"Enter"===e.key&&(e.preventDefault(),K(),G())})),D.addEventListener("click",(()=>{P="",T.innerHTML=""}));const I=document.querySelector(".js-bestiary-section-list"),Q=document.querySelector(".js-myth-btn-ukr"),V=document.querySelector(".js-myth-btn-witcher"),W=document.querySelector(".js-sort-btns-alphabet"),B=document.querySelector(".js-sort-btns-menu");function Y(e){I.innerHTML=w.map((({name:e,description:i,image:s,ref:r})=>`<li class="bestiary-list__item bestiary-item">\n    <div class="bestiary-item__heder">\n        <svg width="40" height="40" class="bestiary-item__logo">\n          <use href="${t(U)+"#icon-logo-ua"}"></use>\n        </svg> \n\n      <div class="bestiary-item__content">\n        <h3 class="bestiary-item__title">${e}</h3>\n        <h4 class="bestiary-item__sub-title">Українська міфологія</h4>\n      </div>\n\n      <a href="#" class="bestiary-item__svg-more">\n        <svg width="18" height="18" class="bestiary-body__logo">\n          <use href="${t(U)+"#more-vertical"}"></use>\n        </svg> \n      </a>\n    </div>\n\n    <picture class="bestiary-item__picture">\n      <a href="${r}">\n        <img class="bestiary-item__img bestiary-item__img-ukr" src="${s}" alt="${e}" loading="lazy">\n      </a>\n    </picture>\n\n    <div class="bestiary-item__body bestiary-body">\n\n      <a class="bestiary-body__link-myth" href="#">\n        <svg width="18" height="18" class="bestiary-body__logo">\n          <use href="${t(U)+"#icon-logo-ua"}"></use>\n        </svg> \n        Міф\n      </a>\n\n      <p class="bestiary-body__text">${i}</p>\n\n      <a class="bestiary-body__link-btn" href="${r}">\n        Читати далі\n        <svg width="19" height="18" class="bestiary-item__logo">\n          <use href="${t(U)+"#arrow-up-right"}"></use>\n        </svg> \n      </a>\n    </div>\n  </li>`)).join(""),V.classList.remove("myth-btns__active"),Q.classList.add("myth-btns__active")}W.addEventListener("click",(e=>{B.classList.toggle("is-hidden")})),Y(),Q.addEventListener("click",Y),V.addEventListener("click",(function(e){I.innerHTML=(i=j,i.map((({name:e,description:i,image:s,genus:r,ref:n})=>`<li class="bestiary-list__item bestiary-item">\n    <div class="bestiary-item__heder">\n        <svg width="40" height="40" class="bestiary-item__logo">\n          <use href="${t(U)+"#witcher-icon"}"></use>\n        </svg> \n      <div class="bestiary-item__content">\n        <h3 class="bestiary-item__title">${e}</h3>\n        <h4 class="bestiary-item__sub-title">Гра «Відьмак 3: Дикий Гін»</h4>\n      </div>\n\n      <a href="#" class="bestiary-item__svg-more">\n        <svg width="18" height="18" class="bestiary-body__logo">\n          <use href="${t(U)+"#more-vertical"}"></use>\n        </svg> \n      </a>\n    </div>\n\n    <picture class="bestiary-item__picture">\n      <a href="${n}">\n        <img class="bestiary-item__img bestiary-item__img-witcher js-bestiary-item-img-witcher" src="${s}" alt="${e}" loading="lazy">\n      </a>\n    </picture>\n\n    <div class="bestiary-item__body bestiary-body">\n      <a class="bestiary-body__link-myth" href="#">\n        <svg width="18" height="18" class="bestiary-item__logo">\n          <use href="${t(U)+"#leading"}"></use>\n        </svg> \n        ${r}\n      </a>\n\n      <p class="bestiary-body__text">${i}</p>\n\n      <a class="bestiary-body__link-btn" href="${n}">\n        Читати далі\n        <svg width="19" height="18" class="bestiary-item__logo">\n          <use href="${t(U)+"#arrow-up-right"}"></use>\n        </svg> \n      </a>\n    </div>\n  </li>`)).join("")),Q.classList.remove("myth-btns__active"),V.classList.add("myth-btns__active");var i}));
//# sourceMappingURL=bestiary.a7b5a5ac.js.map
