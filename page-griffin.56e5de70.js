!function(){function e(e,t,i,n){Object.defineProperty(e,t,{get:i,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},s={},r=i.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in s){var t=s[e];delete s[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){s[e]=t},i.parcelRequired7c6=r),r.register("iE7OH",(function(t,i){var n,s;e(t.exports,"register",(function(){return n}),(function(e){return n=e})),e(t.exports,"resolve",(function(){return s}),(function(e){return s=e}));var r={};n=function(e){for(var t=Object.keys(e),i=0;i<t.length;i++)r[t[i]]=e[t[i]]},s=function(e){var t=r[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),r.register("aNJCr",(function(t,i){var n;e(t.exports,"getBundleURL",(function(){return n}),(function(e){return n=e}));var s={};function r(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}n=function(e){var t=s[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return r(e[2])}return"/"}(),s[e]=t),t}})),r("iE7OH").register(JSON.parse('{"gfUIf":"page-griffin.56e5de70.js","gG3IH":"item-mob-1.15985316.jpg","euFJS":"item-mob-2.393f09de.jpg","jtGza":"item-mob-3.81d0e6e1.jpg","jtsLn":"spriggan.e05ed955.jpg","feT3L":"grifon.bea4bc90.jpg","iOwtO":"grigg.00657c76.jpg","ee16w":"sprite.a48f67ed.svg","8ace9":"Mobile-404.d5b09e1e.png","esZtx":"Tab-404.81c5d66d.png","dsPg8":"PC-404.b1aafd21.png","6jgTx":"item-img-2.246bf061.jpg","5ZP9a":"item-img-3.e35e9dea.jpg","dlAph":"item-img-witc.2.101c8103.jpg","98F9O":"item-img-witc.3.bf4ae601.jpg"}'));const o=document.querySelector(".js-header-wrapper"),a=document.querySelector(".js-header-container").clientHeight,l=document.querySelector(".js-tab-menu"),c=document.querySelector(".nav-header__list-tab-inner"),d=document.querySelector(".js-tab-list"),g=document.querySelector(".js-svg-rotate"),m=document.querySelector(".js-header-btm-menu"),h=document.querySelector(".js-mob-menu-btn-close"),_=document.querySelector(".js-transform-btn"),u=document.querySelector(".js-mob-menu"),v=document.querySelector(".js-backdrop");function b(e){if(document.body.classList.toggle("is-freeze"),u.classList.toggle("is-hidden-mob-menu"),v.classList.toggle("backdrop--hidden"),!c.classList.contains("is-hidden"))return c.classList.add("is-hidden"),void g.classList.remove("active-rotate")}function f(e){_.classList.toggle("transform-btn")}o.style.height=a+"px",l.addEventListener("click",(e=>{const{target:t}=e;if(u.classList.contains("is-hidden-mob-menu")||(u.classList.add("is-hidden-mob-menu"),v.classList.add("backdrop--hidden"),f(),document.body.classList.remove("is-freeze")),t.classList.contains("dropdown"))return d.classList.toggle("is-hidden"),void g.classList.toggle("active-rotate")})),m.addEventListener("click",b),h.addEventListener("click",(e=>{b(),f(),document.body.classList.remove("is-freeze")})),v.addEventListener("click",(e=>{b(),f(),document.body.classList.remove("is-freeze")})),_.addEventListener("click",f);var y;y=r("aNJCr").getBundleURL("gfUIf")+r("iE7OH").resolve("gG3IH");var k;k=r("aNJCr").getBundleURL("gfUIf")+r("iE7OH").resolve("euFJS");var p;p=r("aNJCr").getBundleURL("gfUIf")+r("iE7OH").resolve("jtGza");const L=[{name:"Боровик",searchName:"Боровик",description:"Боровик — (за слов'янською міфологією) один\n    з лісових духів, господар борів та...",image:t(y),ref:"./page-borovik.html"},{name:"Грифон (Гриф)",searchName:"Грифон",description:"Грифони — суперечливі істоти, які одночасно об'єднують Небо і Землю ...",image:t(k),ref:"./page-griffin.html"},{name:"Домовик",searchName:"Домовик",description:"Домовик  — у слов'янських народів домашній дух, міфологічний господар ...",image:t(p),ref:"./page-domovik.html"}];var w;w=r("aNJCr").getBundleURL("gfUIf")+r("iE7OH").resolve("jtsLn");var j;j=r("aNJCr").getBundleURL("gfUIf")+r("iE7OH").resolve("feT3L");var E;E=r("aNJCr").getBundleURL("gfUIf")+r("iE7OH").resolve("iOwtO");const S=[{name:"Боровик",searchName:"Боровик",description:"Боровик (пол. Borowy, англ. Spriggan) — бестія у всесвіті Відьмака ...",image:t(w),genus:"Релікти",ref:"./page-borovik.html"},{name:"Грифон",searchName:"Грифон",description:"Грифон — це істота з тілом, задніми ногами та хвостом лева і головою ...",image:t(j),genus:"Гібриди",ref:"./page-griffin.html"},{name:"Домовик",searchName:"Домовик",description:"Домовик, гріг — це крихітний гуманоїд, пустотлива, але нешкідлива істота ...",image:t(E),genus:"Людиноподібні",ref:"./page-domovik.html"}];var H;H=r("aNJCr").getBundleURL("gfUIf")+r("iE7OH").resolve("ee16w");var q;q=r("aNJCr").getBundleURL("gfUIf")+r("iE7OH").resolve("8ace9");var x;x=r("aNJCr").getBundleURL("gfUIf")+r("iE7OH").resolve("esZtx");var N;N=r("aNJCr").getBundleURL("gfUIf")+r("iE7OH").resolve("dsPg8");const R=document.querySelector(".js-backdrop-search"),U=document.querySelector(".js-search-icon"),$=document.querySelector(".js-search-list"),O=document.querySelector(".js-search-input"),I=document.querySelector(".js-btn-search"),F=document.querySelector(".js-history-close");U.addEventListener("click",(function(e){R.classList.toggle("backdrop-search--hidden"),document.body.style.overflow=document.body.style.overflow?"":"hidden"}));const C=[...L,...S];O.addEventListener("change",J),I.addEventListener("click",A);let T="";function J(){T=O.value.toLowerCase().trim(),O.value=""}function A(){const e=C.filter((e=>e.searchName.toLowerCase()===T));e.length?$.innerHTML=function(e){return e.map((({name:e,description:i,image:n,ref:s})=>`<li class="bestiary-list__item bestiary-item">\n    <div class="bestiary-item__heder">\n        <svg width="40" height="40" class="bestiary-item__logo">\n          <use href="${t(H)+"#icon-logo-ua"}"></use>\n        </svg> \n\n      <div class="bestiary-item__content">\n        <h3 class="bestiary-item__title">${e}</h3>\n        <h4 class="bestiary-item__sub-title">Українська міфологія</h4>\n      </div>\n\n      <a href="#" class="bestiary-item__svg-more">\n        <svg width="18" height="18" class="bestiary-body__logo">\n          <use href="${t(H)+"#more-vertical"}"></use>\n        </svg> \n      </a>\n    </div>\n\n    <picture class="bestiary-item__picture">\n      <a href="${s}">\n        <img class="bestiary-item__img bestiary-item__img-ukr" src="${n}" alt="${e}" loading="lazy">\n      </a>\n    </picture>\n\n    <div class="bestiary-item__body bestiary-body">\n\n      <a class="bestiary-body__link-myth" href="#">\n        <svg width="18" height="18" class="bestiary-body__logo">\n          <use href="${t(H)+"#icon-logo-ua"}"></use>\n        </svg> \n        Міф\n      </a>\n\n      <p class="bestiary-body__text">${i}</p>\n\n      <a class="bestiary-body__link-btn" href="${s}">\n        Читати далі\n        <svg width="19" height="18" class="bestiary-item__logo">\n          <use href="${t(H)+"#arrow-up-right"}"></use>\n        </svg> \n      </a>\n    </div>\n  </li>`)).join("")}(e):$.innerHTML=`<li><picture class="erroe-photo">\n      <source srcset="${t(N)}" media="(min-width: 1200px)">\n      <source srcset="${t(x)}" media="(min-width: 768px)">\n      <img class="erroe-img" src="${t(q)}" alt="witcher-error">\n  </picture></li>`}document.addEventListener("keydown",(e=>{"Enter"===e.key&&(e.preventDefault(),J(),A())})),F.addEventListener("click",(()=>{T="",$.innerHTML=""}));var B;B=r("aNJCr").getBundleURL("gfUIf")+r("iE7OH").resolve("6jgTx");var z;z=r("aNJCr").getBundleURL("gfUIf")+r("iE7OH").resolve("5ZP9a");var M;M=r("aNJCr").getBundleURL("gfUIf")+r("iE7OH").resolve("dlAph");var P;P=r("aNJCr").getBundleURL("gfUIf")+r("iE7OH").resolve("98F9O");const G=document.querySelector(".js-btn-plus"),W=document.querySelector(".js-btn-minus"),Z=document.querySelector(".js-btn-plus-w"),D=document.querySelector(".js-btn-minus-w"),K=document.querySelector(".backdrop-borovik__container");console.log(K);const Q=document.querySelector(".js-myth-btns_ukr-griff"),V=document.querySelector(".js-myth-btn_witcher-griff"),X=document.querySelector(".js-main-content-griffin"),Y=document.querySelector(".js-gallery-griffin"),ee=document.querySelector(".js-backdrop-griffin-gallery"),te=document.querySelector(".js-backdrop-griffin-gallery-witcher"),ie=document.querySelector(".js-griffin-modal-img"),ne=document.querySelector(".js-griffin-modal-img-witch"),se=document.querySelector(".js-griffin-modal-video"),re=document.querySelector(".js-griffin-modal-video-witcher"),oe=document.querySelector(".js-backdrop-close"),ae=document.querySelector(".js-backdrop-close-witch");function le(){V.classList.remove("myth-btns__active"),Q.classList.add("myth-btns__active"),X.innerHTML=`\n  <div class="bestiary-list__item borovik-item">\n  <div class="borovik-item__heder">\n    <svg width="40" height="40" class="borovik-item__logo">\n      <use href="${t(H)+"#icon-logo-ua"}"></use>\n    </svg>\n\n    <div class="borovik-item__content">\n      <h3 class="borovik-item__title">Грифон (Гриф)</h3>\n      <h4 class="borovik-item__sub-title">Українська міфологія</h4>\n    </div>\n\n    <a href="#" class="borovik-item__svg-more">\n      <svg width="18" height="18" class="borovik-body__logo">\n        <use href="${t(H)+"#more-vertical"}"></use>\n      </svg>\n    </a>\n  </div>\n\n  <picture class="borovik-item__picture">\n    <a href="#gallery">\n      <img class="borovik-item__img borovik-item__img-ukr" src="${t(k)}" alt="#"\n        loading="lazy">\n    </a>\n  </picture>\n\n  <div class="borovik-item__body borovik-body">\n\n    <a class="borovik-body__link-myth" href="#">\n      <svg width="18" height="18" class="borovik-body__logo">\n        <use href="${t(H)+"#icon-logo-ua"}"></use>\n      </svg>\n      Міф\n    </a>\n\n    <p class="borovik-body__text">Грифони — суперечливі істоти, які одночасно об'єднують Небо і Землю, Добро і Зло. Їх роль і в різних міфах, і в літературі – неоднозначна; вони можуть і як захисники, покровителями, як і злісними звірами, не стриманими звірами.</p>\n\n  </div>\n</div>\n\n<ol class="main-content__list">\n<li class="main-content__list-item">\n  <h3 class="main-content__list-title">Зміст</h3>\n</li>\n<li class="main-content__list-item">1. Опис</li>\n<li class="main-content__list-item">2. Галерея</li>\n<li class="main-content__list-item">3. Відео</li>\n</ol>\n\n<div class="main-content__description description-content">\n\n<h4 class="description-content__title">Опис</h4>\n\n<p class="description-content__text">\n  Монстр якого ви точно не могли б запідозрити у\n  зв'язках з Україною це гриф. Ви запитаєте який Гриф ?\n  У відьмаку ж є тільки Грифон.\n</p>\n<p class="description-content__text">\n  Бо в оригіналі цього велетенського пернатого звіра\n  звати саме Гриф і ніяк інакше. Якщо Грифон — це\n  чудовисько саме народів заходу Європи, то Гриф — це\n  український і польський Монстр. \n</p>\n<p class="description-content__text">\n  В українських легендах розповідається що гриф — це\n  здоровезний птах який своїми крилами може\n  заслоняти світло сонця. Так що на землю навіть падає\n  морок. Літати Гриф здатен протягом цілих семи діб\n  без перепочинку. Зауважимо що хоча в оригіналі\n  монстра звуть Грифом візуально він списаний скоріше з Грифона.\n</p>\n</div>`,Y.innerHTML=`\n      <div class="borovik__gallery-header gallery-borovik">\n        <h2 class="gallery-borovik__title">Галерея</h2>\n        <p class="gallery-borovik__link">Подивитись всі</p>\n      </div>\n\n      <ul id="gallery" class="gallery-borovik__list js-gallery-griffin-urk">\n\n        <li class="gallery-borovik__item gallery-borovik__item-col">\n          <img data-id="1" class="gallery-borovik__img" src="${t(k)}" alt="griffin-1"\n        </li>\n\n        <li class="gallery-borovik__item">\n          <img data-id="2" class="gallery-borovik__img" src="${t(B)}" alt="griffin-2">\n        </li>\n        <li class="gallery-borovik__item gallery-borovik__item-row">\n          <img data-id="3" class="gallery-borovik__img gallery-borovik__img-row gallery--griffin" src="${t(z)}"\n            alt="griffin-3">\n        </li>\n      </ul>\n\n      <button class="gallery-borovik__btn js-gallery-btn-witch" type="button">У грі Відьмак</button>`,document.querySelector(".js-gallery-btn-witch").addEventListener("click",(()=>{ce()}));document.querySelector(".js-gallery-griffin-urk").addEventListener("click",(e=>{const{target:t}=e;if("IMG"!==t.tagName)return;ee.classList.remove("backdrop-borovik-gallery--hidden"),document.body.classList.add("is-freeze");const i=document.querySelector(".js-wolf-head-img-box-urk"),n=Number(t.dataset.id),s=[...i.children];switch(n){case 1:s[0].hidden=!1,s[1].hidden=!0,s[2].hidden=!0;break;case 2:s[0].hidden=!0,s[1].hidden=!1,s[2].hidden=!0;break;case 3:s[0].hidden=!0,s[1].hidden=!0,s[2].hidden=!1}1===n&&(ie.closest("picture").hidden=!0,se.hidden=!1,G.classList.add("is-hidden"),W.classList.add("is-hidden")),ie.src=t.src;const r=document.querySelector(".js-small-gallery");r.addEventListener("click",(e=>{const{target:t,currentTarget:i}=e;if("IMG"!==t.tagName)return;ie.style.cssText="width:100%; height:100%;";const n=Number(t.closest("LI").dataset.id);switch(n){case 1:s[0].hidden=!1,s[1].hidden=!0,s[2].hidden=!0;break;case 2:s[0].hidden=!0,s[1].hidden=!1,s[2].hidden=!0;break;case 3:s[0].hidden=!0,s[1].hidden=!0,s[2].hidden=!1}1===n?(ie.closest("picture").hidden=!0,se.hidden=!1,G.classList.add("is-hidden"),W.classList.add("is-hidden")):(ie.closest("picture").hidden=!1,se.hidden=!0,G.classList.remove("is-hidden"),W.classList.remove("is-hidden")),ie.src=t.src,[...i.children].forEach((e=>{e.classList.contains("small-img-active")&&e.classList.remove("small-img-active")})),t.closest(".small-gallery__item").classList.add("small-img-active")})),[...r.children].forEach((e=>{const t=Number(e.dataset.id);e.classList.contains("small-img-active")&&e.classList.remove("small-img-active"),t===n&&e.classList.add("small-img-active")}))}))}function ce(e){Q.classList.remove("myth-btns__active"),V.classList.add("myth-btns__active"),X.innerHTML=`\n  <div class="bestiary-list__item borovik-item">\n        <div class="borovik-item__heder">\n          <svg width="40" height="40" class="borovik-item__logo">\n            <use href="${t(H)+"#witcher-icon"}"></use>\n          </svg>\n\n          <div class="borovik-item__content">\n            <h3 class="borovik-item__title">Грифон (Гриф)</h3>\n            <h4 class="borovik-item__sub-title">Гра «Відьмак 3: Дикий Гін»</h4>\n          </div>\n\n          <a href="#" class="borovik-item__svg-more">\n            <svg width="18" height="18" class="borovik-body__logo">\n              <use href="${t(H)+"#more-vertical"}"></use>\n            </svg>\n          </a>\n        </div>\n\n        <picture class="borovik-item__picture">\n          <a href="#gallery-w">\n            <img class="borovik-item__img borovik-item__img-witcher" src="${t(j)}" alt="spriggan"\n              loading="lazy">\n          </a>\n        </picture>\n\n        <div class="borovik-item__body borovik-body">\n\n          <div class="author-img">\n            <h5 class="author-img__title">Анна Подедворна</h5>\n            <a class="author-img__link" href="#">Авторка малюнку</a>\n          </div>\n\n          <a class="borovik-body__link-myth" href="#">\n            <svg width="18" height="18" class="borovik-body__logo">\n              <use href="${t(H)+"#leading"}"></use>\n            </svg>\n            Гібриди\n          </a>\n\n          <p class="borovik-body__text">Грифон - це істота з тілом, задніми ногами та хвостом лева і головою, крилами та пазурами орла.</p>\n\n\n          <table class="borovik-witcher__table">\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Клас</td>\n              <td class="borovik-witcher__data">Гібриди</td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Місце появи/\n                <br> Проживання\n              </td>\n              <td class="borovik-witcher__data">Білий Сад<br>\n              Велен<br>\n              Скелліґе<br>\n              Оксенфурт</td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Стійкість</td>\n              <td class="borovik-witcher__data">До оглушення</td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Вразливість</td>\n              <td class="borovik-witcher__data">\n                  «Картеч» (бомба)<br>\n                  Мастило проти гібридів<br>\n                  знак Аард<br>\n                  знак Квен\n              </td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Тактика</td>\n              <td class="borovik-witcher__data">\n              Налетіти на жертву у стрімкому піке і вдарити кігтями\n              </td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Трофей</td>\n              <td class="borovik-witcher__data">Так</td>\n            </tr>\n          </table>\n\n        </div>\n      </div>\n      \n      <ol class="main-content__list">\n        <li class="main-content__list-item">\n          <h3 class="main-content__list-title">Зміст</h3>\n        </li>\n        <li class="main-content__list-item">1. Опис, Запис у бестіарії</li>\n        <li class="main-content__list-item">2. Галерея</li>\n        <li class="main-content__list-item">3. Відео</li>\n      </ol>\n\n      <div class="main-content__description description-content">\n\n        <h4 class="description-content__title">Гра «Відьмак 3: Дикий Гін»,\n          <br> Запис у бестіарії\n        </h4>\n\n        <p class="description-content__text">\n          А так, напіворел, напівкіт, точно як у шляхтича на\n          гербі. Тільки в пазурах не берло ніс, а коров’ячу тушу.\n          — Невідомий свідок нападу грифона\n        </p>\n        <p class="description-content__text">\n          Колись грифони водилися лише високо в горах, де\n          ловили кіз та іншу гірську живність. Та згодом вони\n          збагнули, що на залюднених рівнинах легше знайти\n          щось їстівне: корову, вівцю, пастуха. Вони й досі\n          уникають битих шляхів і міст, але давно вже\n          перестали бути дивиною в королівствах Півночі.\n          Особливо небезпечні такі їхні різновиди, як\n          королівський грифон і архігрифон.\n        </p>\n        <p class="description-content__text">\n          Грифони паруються на все життя й до загину\n          боронять свого партнера. Тому їх часто вважають\n          утіленням хоробрості, відданості та войовничості.\n          Бойового духу їм аж ніяк не бракує: якщо\n          спровокувати грифона, він не заспокоїться, доки\n          не розірве ворога на шмаття.\n        </p>\n      </div>`,Y.innerHTML=`\n<div class="borovik__gallery-header gallery-borovik">\n<h2 class="gallery-borovik__title">Галерея</h2>\n<p class="gallery-borovik__link">Подивитись всі</p>\n</div>\n\n<ul id="gallery-w" class="gallery-borovik__list js-gallery-griffin-witch">\n  <li class="gallery-borovik__item gallery-borovik__item-col">\n    <img data-id="1" class="gallery-borovik__img gallery-borovik__img-col gallery-borovik__img-wicher_col"\n      src="${t(j)}" alt="spriggan">\n  </li>\n  <li class="gallery-borovik__item">\n    <img data-id="2" class="gallery-borovik__img gallery-borovik__img-wicher_row gallery-griffin__witcher_top"\n      src="${t(M)}" alt="borovik-witcher-item-2">\n  </li>\n  <li class="gallery-borovik__item gallery-borovik__item-row">\n    <img data-id="3" class="gallery-borovik__img gallery-borovik__img-row gallery-borovik__img-wicher_row gallery-griffin__witcher"\n      src="${t(P)}" alt="borovik-witcher-item-3">\n  </li>\n</ul>\n\n<button class="gallery-borovik__btn js-gallery-btn-ukr" type="button">В укр. міфології</button>`,document.querySelector(".js-gallery-btn-ukr").addEventListener("click",(()=>{le()}));document.querySelector(".js-gallery-griffin-witch").addEventListener("click",(e=>{const{target:t}=e;if("IMG"!==t.tagName)return;document.body.classList.add("is-freeze"),te.classList.remove("backdrop-borovik-gallery--hidden");const i=document.querySelector(".js-wolf-head-img-box-witcher"),n=Number(t.dataset.id),s=[...i.children];switch(n){case 1:s[0].hidden=!1,s[1].hidden=!0,s[2].hidden=!0;break;case 2:s[0].hidden=!0,s[1].hidden=!1,s[2].hidden=!0;break;case 3:s[0].hidden=!0,s[1].hidden=!0,s[2].hidden=!1}1===n&&(ne.closest("picture").hidden=!0,re.hidden=!1,Z.classList.add("is-hidden"),D.classList.add("is-hidden")),ne.src=t.src;const r=document.querySelector(".js-small-gallery-witch");r.addEventListener("click",(e=>{const{target:t,currentTarget:i}=e;if("IMG"!==t.tagName)return;ne.style.cssText="width:100%; height:100%;";const n=Number(t.closest("LI").dataset.id);switch(n){case 1:s[0].hidden=!1,s[1].hidden=!0,s[2].hidden=!0;break;case 2:s[0].hidden=!0,s[1].hidden=!1,s[2].hidden=!0;break;case 3:s[0].hidden=!0,s[1].hidden=!0,s[2].hidden=!1}1===n?(ne.closest("picture").hidden=!0,re.hidden=!1,Z.classList.add("is-hidden"),D.classList.add("is-hidden")):(ne.closest("picture").hidden=!1,re.hidden=!0,Z.classList.remove("is-hidden"),D.classList.remove("is-hidden")),ne.src=t.src,[...i.children].forEach((e=>{e.classList.contains("small-img-active")&&e.classList.remove("small-img-active")})),t.closest(".small-gallery__item").classList.add("small-img-active")})),[...r.children].forEach((e=>{const t=Number(e.dataset.id);e.classList.contains("small-img-active")&&e.classList.remove("small-img-active"),t===n&&e.classList.add("small-img-active")}))}))}Q.addEventListener("click",le),V.addEventListener("click",ce),le(),oe.addEventListener("click",(e=>{ie.closest("picture").hidden=!1,se.hidden=!0,ee.classList.add("backdrop-borovik-gallery--hidden"),document.body.classList.remove("is-freeze")})),ae.addEventListener("click",(()=>{ne.closest("picture").hidden=!1,re.hidden=!0,te.classList.add("backdrop-borovik-gallery--hidden"),document.body.classList.remove("is-freeze")})),G.addEventListener("click",(function(){K.offsetWidth<=360&&(ie.style.objectFit="cover",ie.style.objectPosition="top",console.log("hello"));let e=ie.offsetHeight,t=ie.offsetWidth;t+=25,e+=50,ie.style.width=t+"px",ie.style.height=e+"px"})),W.addEventListener("click",(function(){ie.style.objectPosition="center";let e=ie.offsetHeight,t=ie.offsetWidth;t-=25,e-=50,ie.style.width=t+"px",ie.style.height=e+"px"})),Z.addEventListener("click",(function(){K.offsetWidth<=360&&(ne.style.objectFit="cover",ne.style.objectPosition="top",console.log("hello"));let e=ne.offsetHeight,t=ne.offsetWidth;t+=25,e+=50,ne.style.width=t+"px",ne.style.height=e+"px"})),D.addEventListener("click",(function(){ne.style.objectPosition="center";let e=ne.offsetHeight,t=ne.offsetWidth;t-=25,e-=50,ne.style.width=t+"px",ne.style.height=e+"px"}))}();
//# sourceMappingURL=page-griffin.56e5de70.js.map
