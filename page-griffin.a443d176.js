function e(e,t,i,n){Object.defineProperty(e,t,{get:i,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},s={},r=i.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in s){var t=s[e];delete s[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){s[e]=t},i.parcelRequired7c6=r),r.register("kyEFX",(function(t,i){var n,s;e(t.exports,"register",(function(){return n}),(function(e){return n=e})),e(t.exports,"resolve",(function(){return s}),(function(e){return s=e}));var r={};n=function(e){for(var t=Object.keys(e),i=0;i<t.length;i++)r[t[i]]=e[t[i]]},s=function(e){var t=r[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),r("kyEFX").register(JSON.parse('{"8qyFj":"page-griffin.a443d176.js","ctAAP":"item-mob-1.15985316.jpg","2JQ7r":"item-mob-2.393f09de.jpg","6SR7J":"item-mob-3.81d0e6e1.jpg","kkLFk":"spriggan.e05ed955.jpg","1K0po":"grifon.bea4bc90.jpg","581ik":"grigg.00657c76.jpg","ft1aw":"ukrainskii-kozak-art-1_PC.cac7d6e8.jpg","76WeU":"white-whitch-1.5727c56a.png","j5lKD":"Geralt.39352b96.jpg","fNHIx":"Yennefer.3107b75e.jpg","lp5u4":"sprite.a48f67ed.svg","3AOGA":"Mobile-404.d5b09e1e.png","axhsV":"Tab-404.81c5d66d.png","eqOun":"PC-404.b1aafd21.png","5Zfkh":"item-img-2.246bf061.jpg","Fsb3N":"item-img-3.e35e9dea.jpg","iEwMh":"item-img-witc.2.101c8103.jpg","g76h6":"item-img-witc.3.bf4ae601.jpg"}'));const o=document.querySelector(".js-header-wrapper"),a=document.querySelector(".js-header-container").clientHeight,l=document.querySelector(".js-tab-menu"),c=document.querySelector(".nav-header__list-tab-inner"),d=document.querySelector(".js-tab-list"),m=document.querySelector(".js-svg-rotate"),g=document.querySelector(".js-header-btm-menu"),h=document.querySelector(".js-mob-menu-btn-close"),_=document.querySelector(".js-transform-btn"),u=document.querySelector(".js-mob-menu"),v=document.querySelector(".js-backdrop");function b(e){if(document.body.classList.toggle("is-freeze"),u.classList.toggle("is-hidden-mob-menu"),v.classList.toggle("backdrop--hidden"),!c.classList.contains("is-hidden"))return c.classList.add("is-hidden"),void m.classList.remove("active-rotate")}function y(e){_.classList.toggle("transform-btn")}o.style.height=a+"px",l.addEventListener("click",(e=>{const{target:t}=e;if(u.classList.contains("is-hidden-mob-menu")||(u.classList.add("is-hidden-mob-menu"),v.classList.add("backdrop--hidden"),y(),document.body.classList.remove("is-freeze")),t.classList.contains("dropdown"))return d.classList.toggle("is-hidden"),void m.classList.toggle("active-rotate")})),g.addEventListener("click",b),h.addEventListener("click",(e=>{b(),y(),document.body.classList.remove("is-freeze")})),v.addEventListener("click",(e=>{b(),y(),document.body.classList.remove("is-freeze")})),_.addEventListener("click",y);var f;f=new URL(r("kyEFX").resolve("ctAAP"),import.meta.url).toString();var k;k=new URL(r("kyEFX").resolve("2JQ7r"),import.meta.url).toString();var p;p=new URL(r("kyEFX").resolve("6SR7J"),import.meta.url).toString();const w=[{name:"Боровик",searchName:"Боровик",description:"Боровик — (за слов'янською міфологією) один\n    з лісових духів, господар борів та...",img:t(f),logo:"#icon-logo-ua",genus:"Міф",ref:"./page-borovik.html"},{name:"Грифон (Гриф)",searchName:"Грифон",description:"Грифони — суперечливі істоти, які одночасно об'єднують Небо і Землю ...",img:t(k),logo:"#icon-logo-ua",genus:"Міф",ref:"./page-griffin.html"},{name:"Домовик",searchName:"Домовик",description:"Домовик  — у слов'янських народів домашній дух, міфологічний господар ...",img:t(p),logo:"#icon-logo-ua",genus:"Міф",ref:"./page-domovik.html"}];var L;L=new URL(r("kyEFX").resolve("kkLFk"),import.meta.url).toString();var S;S=new URL(r("kyEFX").resolve("1K0po"),import.meta.url).toString();var E;E=new URL(r("kyEFX").resolve("581ik"),import.meta.url).toString();const j=[{name:"Боровик",searchName:"Боровик",description:"Боровик (пол. Borowy, англ. Spriggan) — бестія у всесвіті Відьмака ...",img:t(L),logo:"#witcher-icon",genus:"Релікти",ref:"./page-borovik.html"},{name:"Грифон",searchName:"Грифон",description:"Грифон — це істота з тілом, задніми ногами та хвостом лева і головою ...",img:t(S),logo:"#witcher-icon",genus:"Гібриди",ref:"./page-griffin.html"},{name:"Домовик",searchName:"Домовик",description:"Домовик, гріг — це крихітний гуманоїд, пустотлива, але нешкідлива істота ...",img:t(E),logo:"#witcher-icon",genus:"Людиноподібні",ref:"./page-domovik.html"}];var H;H=new URL(r("kyEFX").resolve("ft1aw"),import.meta.url).toString();var q;q=new URL(r("kyEFX").resolve("76WeU"),import.meta.url).toString();var F;F=new URL(r("kyEFX").resolve("j5lKD"),import.meta.url).toString();var R;R=new URL(r("kyEFX").resolve("fNHIx"),import.meta.url).toString();const x=[{name:"Козак-характерник",searchName:"Козак",genus:"Козаки-характерники",img:t(H),logo:"#icon-ukr-characters",description:"Відьма́к та Характе́рник (відьма́н) — персонаж слов'янської міфології, чаклун ...",ref:"./page-characters.html"},{name:"Чародійки",searchName:"Чародійка",genus:"Чаклунки/Відьми",img:t(q),logo:"#icon-ukr-characters",description:"Ві́дьма, чаклу́нка (чародійка) — жінка, наділена чаклунськими здібностями ...",ref:"./page-characters-witch.html"}],$=[{name:"Ґеральт з Рівії",searchName:"Геральт",genus:"Відьмак",img:t(F),logo:"#witcher-icon",description:"Ґеральт з Рівії, «Білий Вовк» — головний герой літературного ...",ref:"./page-characters.html"},{name:"Йеннефер",searchName:"Йеннефер",genus:"Чародійка",img:t(R),logo:"#icon-Magic-center",description:"Йеннефер — одна з головних героїнь літературного циклу А.Сапковського ...",ref:"./page-characters-witch.html"}];var N;N=new URL(r("kyEFX").resolve("lp5u4"),import.meta.url).toString();var A;A=new URL(r("kyEFX").resolve("3AOGA"),import.meta.url).toString();var U;U=new URL(r("kyEFX").resolve("axhsV"),import.meta.url).toString();var X;X=new URL(r("kyEFX").resolve("eqOun"),import.meta.url).toString();const M=document.querySelector(".js-backdrop-search"),T=document.querySelector(".js-search-icon"),z=document.querySelector(".js-search-list"),O=document.querySelector(".js-search-input"),P=document.querySelector(".js-btn-search"),I=document.querySelector(".js-history-close");T.addEventListener("click",(function(e){M.classList.toggle("backdrop-search--hidden"),document.body.style.overflow=document.body.style.overflow?"":"hidden"}));const W=[...w,...j,...x,...$];console.log(W),O.addEventListener("change",C),P.addEventListener("click",D);let G="";function C(){G=O.value.toLowerCase().trim(),O.value=""}function D(){const e=W.filter((e=>e.searchName.toLowerCase()===G));e.length?z.innerHTML=function(e){return e.map((({name:e,description:i,img:n,logo:s,genus:r,ref:o})=>`<li class="bestiary-list__item bestiary-item">\n    <div class="bestiary-item__heder">\n        <svg width="40" height="40" class="bestiary-item__logo bestiary-item__logo_accent">\n          <use href="${t(N)+s}"></use>\n        </svg> \n\n      <div class="bestiary-item__content">\n        <h3 class="bestiary-item__title">${e}</h3>\n        <h4 class="bestiary-item__sub-title">${r}</h4>\n      </div>\n\n      <a href="#" class="bestiary-item__svg-more">\n        <svg width="18" height="18" class="bestiary-body__logo">\n          <use href="${t(N)+"#more-vertical"}"></use>\n        </svg> \n      </a>\n    </div>\n  </div>\n\n<picture class="bestiary-item__picture">\n  <a href="${o}">\n    <img class="search-item__img" src="${n}" alt="${e}" loading="lazy">\n  </a>\n</picture>\n\n<div class="bestiary-item__body bestiary-body">\n\n  <a class="bestiary-body__link-myth" href="#">\n    <svg width="18" height="18" class="bestiary-body__logo">\n      <use href="${t(N)+s}"></use>\n    </svg> \n    ${r}\n  </a>\n\n  <p class="bestiary-body__text">${i}</p>\n\n  <a class="bestiary-body__link-btn" href="${o}">\n    Читати далі\n    <svg width="19" height="18" class="bestiary-item__logo">\n      <use href="${t(N)+"#arrow-up-right"}"></use>\n    </svg> \n  </a>\n</div>\n</li>`)).join("")}(e):z.innerHTML=`<li><picture class="erroe-photo">\n      <source srcset="${t(X)}" media="(min-width: 1200px)">\n      <source srcset="${t(U)}" media="(min-width: 768px)">\n      <img class="erroe-img" src="${t(A)}" alt="witcher-error">\n  </picture></li>`}document.addEventListener("keydown",(e=>{"Enter"===e.key&&(e.preventDefault(),C(),D())})),I.addEventListener("click",(()=>{G="",z.innerHTML=""}));var J;J=new URL(r("kyEFX").resolve("5Zfkh"),import.meta.url).toString();var K;K=new URL(r("kyEFX").resolve("Fsb3N"),import.meta.url).toString();var Q;Q=new URL(r("kyEFX").resolve("iEwMh"),import.meta.url).toString();var V;V=new URL(r("kyEFX").resolve("g76h6"),import.meta.url).toString();const Z=document.querySelector(".js-btn-plus"),B=document.querySelector(".js-btn-minus"),Y=document.querySelector(".js-btn-plus-w"),ee=document.querySelector(".js-btn-minus-w"),te=document.querySelector(".backdrop-borovik__container");console.log(te);const ie=document.querySelector(".js-myth-btns_ukr-griff"),ne=document.querySelector(".js-myth-btn_witcher-griff"),se=document.querySelector(".js-main-content-griffin"),re=document.querySelector(".js-gallery-griffin"),oe=document.querySelector(".js-backdrop-griffin-gallery"),ae=document.querySelector(".js-backdrop-griffin-gallery-witcher"),le=document.querySelector(".js-griffin-modal-img"),ce=document.querySelector(".js-griffin-modal-img-witch"),de=document.querySelector(".js-griffin-modal-video"),me=document.querySelector(".js-griffin-modal-video-witcher"),ge=document.querySelector(".js-backdrop-close"),he=document.querySelector(".js-backdrop-close-witch");function _e(){ne.classList.remove("myth-btns__active"),ie.classList.add("myth-btns__active"),se.innerHTML=`\n  <div class="bestiary-list__item borovik-item">\n  <div class="borovik-item__heder">\n    <svg width="40" height="40" class="borovik-item__logo">\n      <use href="${t(N)+"#icon-logo-ua"}"></use>\n    </svg>\n\n    <div class="borovik-item__content">\n      <h3 class="borovik-item__title">Грифон (Гриф)</h3>\n      <h4 class="borovik-item__sub-title">Українська міфологія</h4>\n    </div>\n\n    <a href="#" class="borovik-item__svg-more">\n      <svg width="18" height="18" class="borovik-body__logo">\n        <use href="${t(N)+"#more-vertical"}"></use>\n      </svg>\n    </a>\n  </div>\n\n  <picture class="borovik-item__picture">\n    <a href="#gallery">\n      <img class="borovik-item__img borovik-item__img-ukr" src="${t(k)}" alt="#"\n        loading="lazy">\n    </a>\n  </picture>\n\n  <div class="borovik-item__body borovik-body">\n\n    <a class="borovik-body__link-myth" href="#">\n      <svg width="18" height="18" class="borovik-body__logo">\n        <use href="${t(N)+"#icon-logo-ua"}"></use>\n      </svg>\n      Міф\n    </a>\n\n    <p class="borovik-body__text">Грифони — суперечливі істоти, які одночасно об'єднують Небо і Землю, Добро і Зло. Їх роль і в різних міфах, і в літературі – неоднозначна; вони можуть і як захисники, покровителями, як і злісними звірами, не стриманими звірами.</p>\n\n  </div>\n</div>\n\n<ol class="main-content__list">\n<li class="main-content__list-item">\n  <h3 class="main-content__list-title">Зміст</h3>\n</li>\n<li class="main-content__list-item">1. Опис</li>\n<li class="main-content__list-item">2. Галерея</li>\n<li class="main-content__list-item">3. Відео</li>\n</ol>\n\n<div class="main-content__description description-content">\n\n<h4 class="description-content__title">Опис</h4>\n\n<p class="description-content__text">\n  Монстр якого ви точно не могли б запідозрити у\n  зв'язках з Україною це гриф. Ви запитаєте який Гриф ?\n  У відьмаку ж є тільки Грифон.\n</p>\n<p class="description-content__text">\n  Бо в оригіналі цього велетенського пернатого звіра\n  звати саме Гриф і ніяк інакше. Якщо Грифон — це\n  чудовисько саме народів заходу Європи, то Гриф — це\n  український і польський Монстр. \n</p>\n<p class="description-content__text">\n  В українських легендах розповідається що гриф — це\n  здоровезний птах який своїми крилами може\n  заслоняти світло сонця. Так що на землю навіть падає\n  морок. Літати Гриф здатен протягом цілих семи діб\n  без перепочинку. Зауважимо що хоча в оригіналі\n  монстра звуть Грифом візуально він списаний скоріше з Грифона.\n</p>\n</div>`,re.innerHTML=`\n      <div class="borovik__gallery-header gallery-borovik">\n        <h2 class="gallery-borovik__title">Галерея</h2>\n        <p class="gallery-borovik__link">Подивитись всі</p>\n      </div>\n\n      <ul id="gallery" class="gallery-borovik__list js-gallery-griffin-urk">\n\n        <li class="gallery-borovik__item gallery-borovik__item-col">\n          <img data-id="1" class="gallery-borovik__img" src="${t(k)}" alt="griffin-1"\n        </li>\n\n        <li class="gallery-borovik__item">\n          <img data-id="2" class="gallery-borovik__img" src="${t(J)}" alt="griffin-2">\n        </li>\n        <li class="gallery-borovik__item gallery-borovik__item-row">\n          <img data-id="3" class="gallery-borovik__img gallery-borovik__img-row gallery--griffin" src="${t(K)}"\n            alt="griffin-3">\n        </li>\n      </ul>\n\n      <button class="gallery-borovik__btn js-gallery-btn-witch" type="button">У грі Відьмак</button>`,document.querySelector(".js-gallery-btn-witch").addEventListener("click",(()=>{ue()}));document.querySelector(".js-gallery-griffin-urk").addEventListener("click",(e=>{const{target:t}=e;if("IMG"!==t.tagName)return;oe.classList.remove("backdrop-borovik-gallery--hidden"),document.body.classList.add("is-freeze");const i=document.querySelector(".js-wolf-head-img-box-urk"),n=Number(t.dataset.id),s=[...i.children];switch(n){case 1:s[0].hidden=!1,s[1].hidden=!0,s[2].hidden=!0;break;case 2:s[0].hidden=!0,s[1].hidden=!1,s[2].hidden=!0;break;case 3:s[0].hidden=!0,s[1].hidden=!0,s[2].hidden=!1}1===n&&(le.closest("picture").hidden=!0,de.hidden=!1,Z.classList.add("is-hidden"),B.classList.add("is-hidden")),le.src=t.src;const r=document.querySelector(".js-small-gallery");r.addEventListener("click",(e=>{const{target:t,currentTarget:i}=e;if("IMG"!==t.tagName)return;le.style.cssText="width:100%; height:100%;";const n=Number(t.closest("LI").dataset.id);switch(n){case 1:s[0].hidden=!1,s[1].hidden=!0,s[2].hidden=!0;break;case 2:s[0].hidden=!0,s[1].hidden=!1,s[2].hidden=!0;break;case 3:s[0].hidden=!0,s[1].hidden=!0,s[2].hidden=!1}1===n?(le.closest("picture").hidden=!0,de.hidden=!1,Z.classList.add("is-hidden"),B.classList.add("is-hidden")):(le.closest("picture").hidden=!1,de.hidden=!0,Z.classList.remove("is-hidden"),B.classList.remove("is-hidden")),le.src=t.src,[...i.children].forEach((e=>{e.classList.contains("small-img-active")&&e.classList.remove("small-img-active")})),t.closest(".small-gallery__item").classList.add("small-img-active")})),[...r.children].forEach((e=>{const t=Number(e.dataset.id);e.classList.contains("small-img-active")&&e.classList.remove("small-img-active"),t===n&&e.classList.add("small-img-active")}))}))}function ue(e){ie.classList.remove("myth-btns__active"),ne.classList.add("myth-btns__active"),se.innerHTML=`\n  <div class="bestiary-list__item borovik-item">\n        <div class="borovik-item__heder">\n          <svg width="40" height="40" class="borovik-item__logo">\n            <use href="${t(N)+"#witcher-icon"}"></use>\n          </svg>\n\n          <div class="borovik-item__content">\n            <h3 class="borovik-item__title">Грифон (Гриф)</h3>\n            <h4 class="borovik-item__sub-title">Гра «Відьмак 3: Дикий Гін»</h4>\n          </div>\n\n          <a href="#" class="borovik-item__svg-more">\n            <svg width="18" height="18" class="borovik-body__logo">\n              <use href="${t(N)+"#more-vertical"}"></use>\n            </svg>\n          </a>\n        </div>\n\n        <picture class="borovik-item__picture">\n          <a href="#gallery-w">\n            <img class="borovik-item__img borovik-item__img-witcher" src="${t(S)}" alt="spriggan"\n              loading="lazy">\n          </a>\n        </picture>\n\n        <div class="borovik-item__body borovik-body">\n\n          <div class="author-img">\n            <h5 class="author-img__title">Анна Подедворна</h5>\n            <a class="author-img__link" href="#">Авторка малюнку</a>\n          </div>\n\n          <a class="borovik-body__link-myth" href="#">\n            <svg width="18" height="18" class="borovik-body__logo">\n              <use href="${t(N)+"#leading"}"></use>\n            </svg>\n            Гібриди\n          </a>\n\n          <p class="borovik-body__text">Грифон - це істота з тілом, задніми ногами та хвостом лева і головою, крилами та пазурами орла.</p>\n\n\n          <table class="borovik-witcher__table">\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Клас</td>\n              <td class="borovik-witcher__data">Гібриди</td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Місце появи/\n                <br> Проживання\n              </td>\n              <td class="borovik-witcher__data">Білий Сад<br>\n              Велен<br>\n              Скелліґе<br>\n              Оксенфурт</td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Стійкість</td>\n              <td class="borovik-witcher__data">До оглушення</td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Вразливість</td>\n              <td class="borovik-witcher__data">\n                  «Картеч» (бомба)<br>\n                  Мастило проти гібридів<br>\n                  знак Аард<br>\n                  знак Квен\n              </td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Тактика</td>\n              <td class="borovik-witcher__data">\n              Налетіти на жертву у стрімкому піке і вдарити кігтями\n              </td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Трофей</td>\n              <td class="borovik-witcher__data">Так</td>\n            </tr>\n          </table>\n\n        </div>\n      </div>\n      \n      <ol class="main-content__list">\n        <li class="main-content__list-item">\n          <h3 class="main-content__list-title">Зміст</h3>\n        </li>\n        <li class="main-content__list-item">1. Опис, Запис у бестіарії</li>\n        <li class="main-content__list-item">2. Галерея</li>\n        <li class="main-content__list-item">3. Відео</li>\n      </ol>\n\n      <div class="main-content__description description-content">\n\n        <h4 class="description-content__title">Гра «Відьмак 3: Дикий Гін»,\n          <br> Запис у бестіарії\n        </h4>\n\n        <p class="description-content__text">\n          А так, напіворел, напівкіт, точно як у шляхтича на\n          гербі. Тільки в пазурах не берло ніс, а коров’ячу тушу.\n          — Невідомий свідок нападу грифона\n        </p>\n        <p class="description-content__text">\n          Колись грифони водилися лише високо в горах, де\n          ловили кіз та іншу гірську живність. Та згодом вони\n          збагнули, що на залюднених рівнинах легше знайти\n          щось їстівне: корову, вівцю, пастуха. Вони й досі\n          уникають битих шляхів і міст, але давно вже\n          перестали бути дивиною в королівствах Півночі.\n          Особливо небезпечні такі їхні різновиди, як\n          королівський грифон і архігрифон.\n        </p>\n        <p class="description-content__text">\n          Грифони паруються на все життя й до загину\n          боронять свого партнера. Тому їх часто вважають\n          утіленням хоробрості, відданості та войовничості.\n          Бойового духу їм аж ніяк не бракує: якщо\n          спровокувати грифона, він не заспокоїться, доки\n          не розірве ворога на шмаття.\n        </p>\n      </div>`,re.innerHTML=`\n<div class="borovik__gallery-header gallery-borovik">\n<h2 class="gallery-borovik__title">Галерея</h2>\n<p class="gallery-borovik__link">Подивитись всі</p>\n</div>\n\n<ul id="gallery-w" class="gallery-borovik__list js-gallery-griffin-witch">\n  <li class="gallery-borovik__item gallery-borovik__item-col">\n    <img data-id="1" class="gallery-borovik__img gallery-borovik__img-col gallery-borovik__img-wicher_col"\n      src="${t(S)}" alt="spriggan">\n  </li>\n  <li class="gallery-borovik__item">\n    <img data-id="2" class="gallery-borovik__img gallery-borovik__img-wicher_row gallery-griffin__witcher_top"\n      src="${t(Q)}" alt="borovik-witcher-item-2">\n  </li>\n  <li class="gallery-borovik__item gallery-borovik__item-row">\n    <img data-id="3" class="gallery-borovik__img gallery-borovik__img-row gallery-borovik__img-wicher_row gallery-griffin__witcher"\n      src="${t(V)}" alt="borovik-witcher-item-3">\n  </li>\n</ul>\n\n<button class="gallery-borovik__btn js-gallery-btn-ukr" type="button">В укр. міфології</button>`,document.querySelector(".js-gallery-btn-ukr").addEventListener("click",(()=>{_e()}));document.querySelector(".js-gallery-griffin-witch").addEventListener("click",(e=>{const{target:t}=e;if("IMG"!==t.tagName)return;document.body.classList.add("is-freeze"),ae.classList.remove("backdrop-borovik-gallery--hidden");const i=document.querySelector(".js-wolf-head-img-box-witcher"),n=Number(t.dataset.id),s=[...i.children];switch(n){case 1:s[0].hidden=!1,s[1].hidden=!0,s[2].hidden=!0;break;case 2:s[0].hidden=!0,s[1].hidden=!1,s[2].hidden=!0;break;case 3:s[0].hidden=!0,s[1].hidden=!0,s[2].hidden=!1}1===n&&(ce.closest("picture").hidden=!0,me.hidden=!1,Y.classList.add("is-hidden"),ee.classList.add("is-hidden")),ce.src=t.src;const r=document.querySelector(".js-small-gallery-witch");r.addEventListener("click",(e=>{const{target:t,currentTarget:i}=e;if("IMG"!==t.tagName)return;ce.style.cssText="width:100%; height:100%;";const n=Number(t.closest("LI").dataset.id);switch(n){case 1:s[0].hidden=!1,s[1].hidden=!0,s[2].hidden=!0;break;case 2:s[0].hidden=!0,s[1].hidden=!1,s[2].hidden=!0;break;case 3:s[0].hidden=!0,s[1].hidden=!0,s[2].hidden=!1}1===n?(ce.closest("picture").hidden=!0,me.hidden=!1,Y.classList.add("is-hidden"),ee.classList.add("is-hidden")):(ce.closest("picture").hidden=!1,me.hidden=!0,Y.classList.remove("is-hidden"),ee.classList.remove("is-hidden")),ce.src=t.src,[...i.children].forEach((e=>{e.classList.contains("small-img-active")&&e.classList.remove("small-img-active")})),t.closest(".small-gallery__item").classList.add("small-img-active")})),[...r.children].forEach((e=>{const t=Number(e.dataset.id);e.classList.contains("small-img-active")&&e.classList.remove("small-img-active"),t===n&&e.classList.add("small-img-active")}))}))}ie.addEventListener("click",_e),ne.addEventListener("click",ue),_e(),ge.addEventListener("click",(e=>{le.closest("picture").hidden=!1,de.hidden=!0,oe.classList.add("backdrop-borovik-gallery--hidden"),document.body.classList.remove("is-freeze")})),he.addEventListener("click",(()=>{ce.closest("picture").hidden=!1,me.hidden=!0,ae.classList.add("backdrop-borovik-gallery--hidden"),document.body.classList.remove("is-freeze")})),Z.addEventListener("click",(function(){te.offsetWidth<=360&&(le.style.objectFit="cover",le.style.objectPosition="top",console.log("hello"));let e=le.offsetHeight,t=le.offsetWidth;t+=25,e+=50,le.style.width=t+"px",le.style.height=e+"px"})),B.addEventListener("click",(function(){le.style.objectPosition="center";let e=le.offsetHeight,t=le.offsetWidth;t-=25,e-=50,le.style.width=t+"px",le.style.height=e+"px"})),Y.addEventListener("click",(function(){te.offsetWidth<=360&&(ce.style.objectFit="cover",ce.style.objectPosition="top",console.log("hello"));let e=ce.offsetHeight,t=ce.offsetWidth;t+=25,e+=50,ce.style.width=t+"px",ce.style.height=e+"px"})),ee.addEventListener("click",(function(){ce.style.objectPosition="center";let e=ce.offsetHeight,t=ce.offsetWidth;t-=25,e-=50,ce.style.width=t+"px",ce.style.height=e+"px"}));
//# sourceMappingURL=page-griffin.a443d176.js.map