function e(e,t,i,n){Object.defineProperty(e,t,{get:i,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},s={},r=i.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in s){var t=s[e];delete s[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){s[e]=t},i.parcelRequired7c6=r),r.register("kyEFX",(function(t,i){var n,s;e(t.exports,"register",(function(){return n}),(function(e){return n=e})),e(t.exports,"resolve",(function(){return s}),(function(e){return s=e}));var r={};n=function(e){for(var t=Object.keys(e),i=0;i<t.length;i++)r[t[i]]=e[t[i]]},s=function(e){var t=r[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),r("kyEFX").register(JSON.parse('{"8qyFj":"page-griffin.8e061ae2.js","ctAAP":"item-mob-1.15985316.jpg","2JQ7r":"item-mob-2.393f09de.jpg","6SR7J":"item-mob-3.81d0e6e1.jpg","kkLFk":"spriggan.e05ed955.jpg","1K0po":"grifon.bea4bc90.jpg","581ik":"grigg.00657c76.jpg","lp5u4":"sprite.a48f67ed.svg","5Zfkh":"item-img-2.246bf061.jpg","Fsb3N":"item-img-3.e35e9dea.jpg","iEwMh":"item-img-witc.2.101c8103.jpg","g76h6":"item-img-witc.3.bf4ae601.jpg"}'));const o=document.querySelector(".js-header-wrapper"),l=document.querySelector(".js-header-container").clientHeight,c=document.querySelector(".js-tab-menu"),a=document.querySelector(".nav-header__list-tab-inner"),d=document.querySelector(".js-tab-list"),m=document.querySelector(".js-svg-rotate"),g=document.querySelector(".js-header-btm-menu"),_=document.querySelector(".js-mob-menu-btn-close"),h=document.querySelector(".js-transform-btn"),v=document.querySelector(".js-mob-menu"),b=document.querySelector(".js-backdrop");function u(e){if(document.body.classList.toggle("is-freeze"),v.classList.toggle("is-hidden-mob-menu"),b.classList.toggle("backdrop--hidden"),!a.classList.contains("is-hidden"))return a.classList.add("is-hidden"),void m.classList.remove("active-rotate")}function y(e){h.classList.toggle("transform-btn")}o.style.height=l+"px",c.addEventListener("click",(e=>{const{target:t}=e;if(v.classList.contains("is-hidden-mob-menu")||(v.classList.add("is-hidden-mob-menu"),b.classList.add("backdrop--hidden"),y(),document.body.classList.remove("is-freeze")),t.classList.contains("dropdown"))return d.classList.toggle("is-hidden"),void m.classList.toggle("active-rotate")})),g.addEventListener("click",u),_.addEventListener("click",(e=>{u(),y(),document.body.classList.remove("is-freeze")})),b.addEventListener("click",(e=>{u(),y(),document.body.classList.remove("is-freeze")})),h.addEventListener("click",y);var k;k=new URL(r("kyEFX").resolve("ctAAP"),import.meta.url).toString();var f;f=new URL(r("kyEFX").resolve("2JQ7r"),import.meta.url).toString();var p;p=new URL(r("kyEFX").resolve("6SR7J"),import.meta.url).toString();const w=[{name:"Боровик",description:"Боровик — (за слов'янською міфологією) один\n    з лісових духів, господар борів та...",image:t(k),ref:"./page-borovik.html"},{name:"Грифон (Гриф)",description:"Грифони — суперечливі істоти, які одночасно об'єднують Небо і Землю ...",image:t(f),ref:"./page-griffin.html"},{name:"Домовик",description:"Домовик  — у слов'янських народів домашній дух, міфологічний господар ...",image:t(p),ref:"./page-domovik.html"}];var L;L=new URL(r("kyEFX").resolve("kkLFk"),import.meta.url).toString();var S;S=new URL(r("kyEFX").resolve("1K0po"),import.meta.url).toString();var j;j=new URL(r("kyEFX").resolve("581ik"),import.meta.url).toString();const E=[{name:"Боровик",description:"Боровик (пол. Borowy, англ. Spriggan) — бестія у всесвіті Відьмака ...",image:t(L),genus:"Релікти",ref:"./page-borovik.html"},{name:"Грифон",description:"Грифон — це істота з тілом, задніми ногами та хвостом лева і головою ...",image:t(S),genus:"Гібриди",ref:"./page-griffin.html"},{name:"Домовик",description:"Домовик, гріг — це крихітний гуманоїд, пустотлива, але нешкідлива істота ...",image:t(j),genus:"Людиноподібні",ref:"./page-domovik.html"}],q=document.querySelector(".js-backdrop-search"),F=document.querySelector(".js-search-icon"),H=document.querySelector(".js-search-list");console.log(H),F.addEventListener("click",(function(e){q.classList.toggle("backdrop-search--hidden"),document.body.style.overflow=document.body.style.overflow?"":"hidden"}));[...w,...E].filter((e=>"боровик"===e.name.toLocaleLowerCase())).map((e=>console.log(e)));var x;x=new URL(r("kyEFX").resolve("lp5u4"),import.meta.url).toString();var R;R=new URL(r("kyEFX").resolve("5Zfkh"),import.meta.url).toString();var A;A=new URL(r("kyEFX").resolve("Fsb3N"),import.meta.url).toString();var N;N=new URL(r("kyEFX").resolve("iEwMh"),import.meta.url).toString();var $;$=new URL(r("kyEFX").resolve("g76h6"),import.meta.url).toString();const U=document.querySelector(".js-btn-plus"),X=document.querySelector(".js-btn-minus"),M=document.querySelector(".js-btn-plus-w"),T=document.querySelector(".js-btn-minus-w"),z=document.querySelector(".backdrop-borovik__container");console.log(z);const P=document.querySelector(".js-myth-btns_ukr-griff"),I=document.querySelector(".js-myth-btn_witcher-griff"),O=document.querySelector(".js-main-content-griffin"),W=document.querySelector(".js-gallery-griffin"),J=document.querySelector(".js-backdrop-griffin-gallery"),G=document.querySelector(".js-backdrop-griffin-gallery-witcher"),C=document.querySelector(".js-griffin-modal-img"),D=document.querySelector(".js-griffin-modal-img-witch"),K=document.querySelector(".js-griffin-modal-video"),Q=document.querySelector(".js-griffin-modal-video-witcher"),Z=document.querySelector(".js-backdrop-close"),B=document.querySelector(".js-backdrop-close-witch");function V(){I.classList.remove("myth-btns__active"),P.classList.add("myth-btns__active"),O.innerHTML=`\n  <div class="bestiary-list__item borovik-item">\n  <div class="borovik-item__heder">\n    <svg width="40" height="40" class="borovik-item__logo">\n      <use href="${t(x)+"#icon-logo-ua"}"></use>\n    </svg>\n\n    <div class="borovik-item__content">\n      <h3 class="borovik-item__title">Грифон (Гриф)</h3>\n      <h4 class="borovik-item__sub-title">Українська міфологія</h4>\n    </div>\n\n    <a href="#" class="borovik-item__svg-more">\n      <svg width="18" height="18" class="borovik-body__logo">\n        <use href="${t(x)+"#more-vertical"}"></use>\n      </svg>\n    </a>\n  </div>\n\n  <picture class="borovik-item__picture">\n    <a href="#gallery">\n      <img class="borovik-item__img borovik-item__img-ukr" src="${t(f)}" alt="#"\n        loading="lazy">\n    </a>\n  </picture>\n\n  <div class="borovik-item__body borovik-body">\n\n    <a class="borovik-body__link-myth" href="#">\n      <svg width="18" height="18" class="borovik-body__logo">\n        <use href="${t(x)+"#icon-logo-ua"}"></use>\n      </svg>\n      Міф\n    </a>\n\n    <p class="borovik-body__text">Грифони — суперечливі істоти, які одночасно об'єднують Небо і Землю, Добро і Зло. Їх роль і в різних міфах, і в літературі – неоднозначна; вони можуть і як захисники, покровителями, як і злісними звірами, не стриманими звірами.</p>\n\n  </div>\n</div>\n\n<ol class="main-content__list">\n<li class="main-content__list-item">\n  <h3 class="main-content__list-title">Зміст</h3>\n</li>\n<li class="main-content__list-item">1. Опис</li>\n<li class="main-content__list-item">2. Галерея</li>\n<li class="main-content__list-item">3. Відео</li>\n</ol>\n\n<div class="main-content__description description-content">\n\n<h4 class="description-content__title">Опис</h4>\n\n<p class="description-content__text">\n  Монстр якого ви точно не могли б запідозрити у\n  зв'язках з Україною це гриф. Ви запитаєте який Гриф ?\n  У відьмаку ж є тільки Грифон.\n</p>\n<p class="description-content__text">\n  Бо в оригіналі цього велетенського пернатого звіра\n  звати саме Гриф і ніяк інакше. Якщо Грифон — це\n  чудовисько саме народів заходу Європи, то Гриф — це\n  український і польський Монстр. \n</p>\n<p class="description-content__text">\n  В українських легендах розповідається що гриф — це\n  здоровезний птах який своїми крилами може\n  заслоняти світло сонця. Так що на землю навіть падає\n  морок. Літати Гриф здатен протягом цілих семи діб\n  без перепочинку. Зауважимо що хоча в оригіналі\n  монстра звуть Грифом візуально він списаний скоріше з Грифона.\n</p>\n</div>`,W.innerHTML=`\n      <div class="borovik__gallery-header gallery-borovik">\n        <h2 class="gallery-borovik__title">Галерея</h2>\n        <p class="gallery-borovik__link">Подивитись всі</p>\n      </div>\n\n      <ul id="gallery" class="gallery-borovik__list js-gallery-griffin-urk">\n\n        <li class="gallery-borovik__item gallery-borovik__item-col">\n          <img data-id="1" class="gallery-borovik__img" src="${t(f)}" alt="griffin-1"\n        </li>\n\n        <li class="gallery-borovik__item">\n          <img data-id="2" class="gallery-borovik__img" src="${t(R)}" alt="griffin-2">\n        </li>\n        <li class="gallery-borovik__item gallery-borovik__item-row">\n          <img data-id="3" class="gallery-borovik__img gallery-borovik__img-row gallery--griffin" src="${t(A)}"\n            alt="griffin-3">\n        </li>\n      </ul>\n\n      <button class="gallery-borovik__btn js-gallery-btn-witch" type="button">У грі Відьмак</button>`,document.querySelector(".js-gallery-btn-witch").addEventListener("click",(()=>{Y()}));document.querySelector(".js-gallery-griffin-urk").addEventListener("click",(e=>{const{target:t}=e;if("IMG"!==t.tagName)return;J.classList.remove("backdrop-borovik-gallery--hidden"),document.body.classList.add("is-freeze");const i=document.querySelector(".js-wolf-head-img-box-urk"),n=Number(t.dataset.id),s=[...i.children];switch(n){case 1:s[0].hidden=!1,s[1].hidden=!0,s[2].hidden=!0;break;case 2:s[0].hidden=!0,s[1].hidden=!1,s[2].hidden=!0;break;case 3:s[0].hidden=!0,s[1].hidden=!0,s[2].hidden=!1}1===n&&(C.closest("picture").hidden=!0,K.hidden=!1,U.classList.add("is-hidden"),X.classList.add("is-hidden")),C.src=t.src;const r=document.querySelector(".js-small-gallery");r.addEventListener("click",(e=>{const{target:t,currentTarget:i}=e;if("IMG"!==t.tagName)return;C.style.cssText="width:100%; height:100%;";const n=Number(t.closest("LI").dataset.id);switch(n){case 1:s[0].hidden=!1,s[1].hidden=!0,s[2].hidden=!0;break;case 2:s[0].hidden=!0,s[1].hidden=!1,s[2].hidden=!0;break;case 3:s[0].hidden=!0,s[1].hidden=!0,s[2].hidden=!1}1===n?(C.closest("picture").hidden=!0,K.hidden=!1,U.classList.add("is-hidden"),X.classList.add("is-hidden")):(C.closest("picture").hidden=!1,K.hidden=!0,U.classList.remove("is-hidden"),X.classList.remove("is-hidden")),C.src=t.src,[...i.children].forEach((e=>{e.classList.contains("small-img-active")&&e.classList.remove("small-img-active")})),t.closest(".small-gallery__item").classList.add("small-img-active")})),[...r.children].forEach((e=>{const t=Number(e.dataset.id);e.classList.contains("small-img-active")&&e.classList.remove("small-img-active"),t===n&&e.classList.add("small-img-active")}))}))}function Y(e){P.classList.remove("myth-btns__active"),I.classList.add("myth-btns__active"),O.innerHTML=`\n  <div class="bestiary-list__item borovik-item">\n        <div class="borovik-item__heder">\n          <svg width="40" height="40" class="borovik-item__logo">\n            <use href="${t(x)+"#witcher-icon"}"></use>\n          </svg>\n\n          <div class="borovik-item__content">\n            <h3 class="borovik-item__title">Грифон (Гриф)</h3>\n            <h4 class="borovik-item__sub-title">Гра «Відьмак 3: Дикий Гін»</h4>\n          </div>\n\n          <a href="#" class="borovik-item__svg-more">\n            <svg width="18" height="18" class="borovik-body__logo">\n              <use href="${t(x)+"#more-vertical"}"></use>\n            </svg>\n          </a>\n        </div>\n\n        <picture class="borovik-item__picture">\n          <a href="#gallery-w">\n            <img class="borovik-item__img borovik-item__img-witcher" src="${t(S)}" alt="spriggan"\n              loading="lazy">\n          </a>\n        </picture>\n\n        <div class="borovik-item__body borovik-body">\n\n          <div class="author-img">\n            <h5 class="author-img__title">Анна Подедворна</h5>\n            <a class="author-img__link" href="#">Авторка малюнку</a>\n          </div>\n\n          <a class="borovik-body__link-myth" href="#">\n            <svg width="18" height="18" class="borovik-body__logo">\n              <use href="${t(x)+"#leading"}"></use>\n            </svg>\n            Гібриди\n          </a>\n\n          <p class="borovik-body__text">Грифон - це істота з тілом, задніми ногами та хвостом лева і головою, крилами та пазурами орла.</p>\n\n\n          <table class="borovik-witcher__table">\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Клас</td>\n              <td class="borovik-witcher__data">Гібриди</td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Місце появи/\n                <br> Проживання\n              </td>\n              <td class="borovik-witcher__data">Білий Сад<br>\n              Велен<br>\n              Скелліґе<br>\n              Оксенфурт</td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Стійкість</td>\n              <td class="borovik-witcher__data">До оглушення</td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Вразливість</td>\n              <td class="borovik-witcher__data">\n                  «Картеч» (бомба)<br>\n                  Мастило проти гібридів<br>\n                  знак Аард<br>\n                  знак Квен\n              </td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Тактика</td>\n              <td class="borovik-witcher__data">\n              Налетіти на жертву у стрімкому піке і вдарити кігтями\n              </td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Трофей</td>\n              <td class="borovik-witcher__data">Так</td>\n            </tr>\n          </table>\n\n        </div>\n      </div>\n      \n      <ol class="main-content__list">\n        <li class="main-content__list-item">\n          <h3 class="main-content__list-title">Зміст</h3>\n        </li>\n        <li class="main-content__list-item">1. Опис, Запис у бестіарії</li>\n        <li class="main-content__list-item">2. Галерея</li>\n        <li class="main-content__list-item">3. Відео</li>\n      </ol>\n\n      <div class="main-content__description description-content">\n\n        <h4 class="description-content__title">Гра «Відьмак 3: Дикий Гін»,\n          <br> Запис у бестіарії\n        </h4>\n\n        <p class="description-content__text">\n          А так, напіворел, напівкіт, точно як у шляхтича на\n          гербі. Тільки в пазурах не берло ніс, а коров’ячу тушу.\n          — Невідомий свідок нападу грифона\n        </p>\n        <p class="description-content__text">\n          Колись грифони водилися лише високо в горах, де\n          ловили кіз та іншу гірську живність. Та згодом вони\n          збагнули, що на залюднених рівнинах легше знайти\n          щось їстівне: корову, вівцю, пастуха. Вони й досі\n          уникають битих шляхів і міст, але давно вже\n          перестали бути дивиною в королівствах Півночі.\n          Особливо небезпечні такі їхні різновиди, як\n          королівський грифон і архігрифон.\n        </p>\n        <p class="description-content__text">\n          Грифони паруються на все життя й до загину\n          боронять свого партнера. Тому їх часто вважають\n          утіленням хоробрості, відданості та войовничості.\n          Бойового духу їм аж ніяк не бракує: якщо\n          спровокувати грифона, він не заспокоїться, доки\n          не розірве ворога на шмаття.\n        </p>\n      </div>`,W.innerHTML=`\n<div class="borovik__gallery-header gallery-borovik">\n<h2 class="gallery-borovik__title">Галерея</h2>\n<p class="gallery-borovik__link">Подивитись всі</p>\n</div>\n\n<ul id="gallery-w" class="gallery-borovik__list js-gallery-griffin-witch">\n  <li class="gallery-borovik__item gallery-borovik__item-col">\n    <img data-id="1" class="gallery-borovik__img gallery-borovik__img-col gallery-borovik__img-wicher_col"\n      src="${t(S)}" alt="spriggan">\n  </li>\n  <li class="gallery-borovik__item">\n    <img data-id="2" class="gallery-borovik__img gallery-borovik__img-wicher_row gallery-griffin__witcher_top"\n      src="${t(N)}" alt="borovik-witcher-item-2">\n  </li>\n  <li class="gallery-borovik__item gallery-borovik__item-row">\n    <img data-id="3" class="gallery-borovik__img gallery-borovik__img-row gallery-borovik__img-wicher_row gallery-griffin__witcher"\n      src="${t($)}" alt="borovik-witcher-item-3">\n  </li>\n</ul>\n\n<button class="gallery-borovik__btn js-gallery-btn-ukr" type="button">В укр. міфології</button>`,document.querySelector(".js-gallery-btn-ukr").addEventListener("click",(()=>{V()}));document.querySelector(".js-gallery-griffin-witch").addEventListener("click",(e=>{const{target:t}=e;if("IMG"!==t.tagName)return;document.body.classList.add("is-freeze"),G.classList.remove("backdrop-borovik-gallery--hidden");const i=document.querySelector(".js-wolf-head-img-box-witcher"),n=Number(t.dataset.id),s=[...i.children];switch(n){case 1:s[0].hidden=!1,s[1].hidden=!0,s[2].hidden=!0;break;case 2:s[0].hidden=!0,s[1].hidden=!1,s[2].hidden=!0;break;case 3:s[0].hidden=!0,s[1].hidden=!0,s[2].hidden=!1}1===n&&(D.closest("picture").hidden=!0,Q.hidden=!1,M.classList.add("is-hidden"),T.classList.add("is-hidden")),D.src=t.src;const r=document.querySelector(".js-small-gallery-witch");r.addEventListener("click",(e=>{const{target:t,currentTarget:i}=e;if("IMG"!==t.tagName)return;D.style.cssText="width:100%; height:100%;";const n=Number(t.closest("LI").dataset.id);switch(n){case 1:s[0].hidden=!1,s[1].hidden=!0,s[2].hidden=!0;break;case 2:s[0].hidden=!0,s[1].hidden=!1,s[2].hidden=!0;break;case 3:s[0].hidden=!0,s[1].hidden=!0,s[2].hidden=!1}1===n?(D.closest("picture").hidden=!0,Q.hidden=!1,M.classList.add("is-hidden"),T.classList.add("is-hidden")):(D.closest("picture").hidden=!1,Q.hidden=!0,M.classList.remove("is-hidden"),T.classList.remove("is-hidden")),D.src=t.src,[...i.children].forEach((e=>{e.classList.contains("small-img-active")&&e.classList.remove("small-img-active")})),t.closest(".small-gallery__item").classList.add("small-img-active")})),[...r.children].forEach((e=>{const t=Number(e.dataset.id);e.classList.contains("small-img-active")&&e.classList.remove("small-img-active"),t===n&&e.classList.add("small-img-active")}))}))}P.addEventListener("click",V),I.addEventListener("click",Y),V(),Z.addEventListener("click",(e=>{C.closest("picture").hidden=!1,K.hidden=!0,J.classList.add("backdrop-borovik-gallery--hidden"),document.body.classList.remove("is-freeze")})),B.addEventListener("click",(()=>{D.closest("picture").hidden=!1,Q.hidden=!0,G.classList.add("backdrop-borovik-gallery--hidden"),document.body.classList.remove("is-freeze")})),U.addEventListener("click",(function(){z.offsetWidth<=360&&(C.style.objectFit="cover",C.style.objectPosition="top",console.log("hello"));let e=C.offsetHeight,t=C.offsetWidth;t+=25,e+=50,C.style.width=t+"px",C.style.height=e+"px"})),X.addEventListener("click",(function(){C.style.objectPosition="center";let e=C.offsetHeight,t=C.offsetWidth;t-=25,e-=50,C.style.width=t+"px",C.style.height=e+"px"})),M.addEventListener("click",(function(){z.offsetWidth<=360&&(D.style.objectFit="cover",D.style.objectPosition="top",console.log("hello"));let e=D.offsetHeight,t=D.offsetWidth;t+=25,e+=50,D.style.width=t+"px",D.style.height=e+"px"})),T.addEventListener("click",(function(){D.style.objectPosition="center";let e=D.offsetHeight,t=D.offsetWidth;t-=25,e-=50,D.style.width=t+"px",D.style.height=e+"px"}));
//# sourceMappingURL=page-griffin.8e061ae2.js.map
