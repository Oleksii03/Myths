!function(){function e(e,i,t,n){Object.defineProperty(e,i,{get:t,set:n,enumerable:!0,configurable:!0})}function i(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},s=t.parcelRequired7c6;null==s&&((s=function(e){if(e in n)return n[e].exports;if(e in r){var i=r[e];delete r[e];var t={id:e,exports:{}};return n[e]=t,i.call(t.exports,t,t.exports),t.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,i){r[e]=i},t.parcelRequired7c6=s),s.register("iE7OH",(function(i,t){var n,r;e(i.exports,"register",(function(){return n}),(function(e){return n=e})),e(i.exports,"resolve",(function(){return r}),(function(e){return r=e}));var s={};n=function(e){for(var i=Object.keys(e),t=0;t<i.length;t++)s[i[t]]=e[i[t]]},r=function(e){var i=s[e];if(null==i)throw new Error("Could not resolve bundle with id "+e);return i}})),s.register("aNJCr",(function(i,t){var n;e(i.exports,"getBundleURL",(function(){return n}),(function(e){return n=e}));var r={};function s(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}n=function(e){var i=r[e];return i||(i=function(){try{throw new Error}catch(i){var e=(""+i.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return s(e[2])}return"/"}(),r[e]=i),i}})),s("iE7OH").register(JSON.parse('{"gfUIf":"page-griffin.1bafb7e2.js","ee16w":"sprite.5ed25768.svg","euFJS":"item-mob-2.393f09de.jpg","6jgTx":"item-img-2.246bf061.jpg","5ZP9a":"item-img-3.e35e9dea.jpg","feT3L":"grifon.bea4bc90.jpg","dlAph":"item-img-witc.2.101c8103.jpg","98F9O":"item-img-witc.3.bf4ae601.jpg"}'));const o=document.querySelector(".js-header-wrapper"),l=document.querySelector(".js-header-container").clientHeight,c=document.querySelector(".js-tab-menu"),a=document.querySelector(".nav-header__list-tab-inner"),d=document.querySelector(".js-tab-list"),_=document.querySelector(".js-svg-rotate"),m=document.querySelector(".js-header-btm-menu"),g=document.querySelector(".js-mob-menu-btn-close"),v=document.querySelector(".js-transform-btn"),h=document.querySelector(".js-mob-menu"),u=document.querySelector(".js-backdrop");function b(e){if(document.body.classList.toggle("is-freeze"),h.classList.toggle("is-hidden-mob-menu"),u.classList.toggle("backdrop--hidden"),!a.classList.contains("is-hidden"))return a.classList.add("is-hidden"),void _.classList.remove("active-rotate")}function f(e){v.classList.toggle("transform-btn")}o.style.height=l+"px",c.addEventListener("click",(e=>{const{target:i}=e;if(h.classList.contains("is-hidden-mob-menu")||(h.classList.add("is-hidden-mob-menu"),u.classList.add("backdrop--hidden"),f(),document.body.classList.remove("is-freeze")),i.classList.contains("dropdown"))return d.classList.toggle("is-hidden"),void _.classList.toggle("active-rotate")})),m.addEventListener("click",b),g.addEventListener("click",(e=>{b(),f(),document.body.classList.remove("is-freeze")})),u.addEventListener("click",(e=>{b(),f(),document.body.classList.remove("is-freeze")})),v.addEventListener("click",f);const k=document.querySelector(".js-backdrop-search");document.querySelector(".js-search-icon").addEventListener("click",(function(e){k.classList.remove("backdrop-search--hidden"),document.body.style.overflow=document.body.style.overflow?"":"hidden"})),k.addEventListener("click",(function(e){const{target:i,currentTarget:t}=e;if(i!==t)return;k.classList.add("backdrop-search--hidden"),document.body.style.overflow=document.body.style.overflow?"":"hidden"}));var y;y=s("aNJCr").getBundleURL("gfUIf")+s("iE7OH").resolve("ee16w");var p;p=s("aNJCr").getBundleURL("gfUIf")+s("iE7OH").resolve("euFJS");var w;w=s("aNJCr").getBundleURL("gfUIf")+s("iE7OH").resolve("6jgTx");var L;L=s("aNJCr").getBundleURL("gfUIf")+s("iE7OH").resolve("5ZP9a");var j;j=s("aNJCr").getBundleURL("gfUIf")+s("iE7OH").resolve("feT3L");var S;S=s("aNJCr").getBundleURL("gfUIf")+s("iE7OH").resolve("dlAph");var E;E=s("aNJCr").getBundleURL("gfUIf")+s("iE7OH").resolve("98F9O");const q=document.querySelector(".js-myth-btns_ukr-griff"),H=document.querySelector(".js-myth-btn_witcher-griff"),x=document.querySelector(".js-main-content-griffin"),N=document.querySelector(".js-gallery-griffin"),R=document.querySelector(".js-backdrop-griffin-gallery"),U=document.querySelector(".js-backdrop-griffin-gallery-witcher"),O=document.querySelector(".js-griffin-modal-img"),$=document.querySelector(".js-griffin-modal-img-witch"),I=document.querySelector(".js-griffin-modal-video"),T=document.querySelector(".js-griffin-modal-video-witcher"),F=document.querySelector(".js-backdrop-close"),z=document.querySelector(".js-backdrop-close-witch");function J(){H.classList.remove("myth-btns__active"),q.classList.add("myth-btns__active"),x.innerHTML=`\n  <div class="bestiary-list__item borovik-item">\n  <div class="borovik-item__heder">\n    <svg width="40" height="40" class="borovik-item__logo">\n      <use href="${i(y)+"#icon-logo-ua"}"></use>\n    </svg>\n\n    <div class="borovik-item__content">\n      <h3 class="borovik-item__title">Грифон (Гриф)</h3>\n      <h4 class="borovik-item__sub-title">Українська міфологія</h4>\n    </div>\n\n    <a href="#" class="borovik-item__svg-more">\n      <svg width="18" height="18" class="borovik-body__logo">\n        <use href="${i(y)+"#more-vertical"}"></use>\n      </svg>\n    </a>\n  </div>\n\n  <picture class="borovik-item__picture">\n    <a href="#">\n      <img class="borovik-item__img borovik-item__img-ukr" src="${i(p)}" alt="#"\n        loading="lazy">\n    </a>\n  </picture>\n\n  <div class="borovik-item__body borovik-body">\n\n    <a class="borovik-body__link-myth" href="#">\n      <svg width="18" height="18" class="borovik-body__logo">\n        <use href="${i(y)+"#icon-logo-ua"}"></use>\n      </svg>\n      Міф\n    </a>\n\n    <p class="borovik-body__text">Грифони — суперечливі істоти, які одночасно об'єднують Небо і Землю, Добро і Зло. Їх роль і в різних міфах, і в літературі – неоднозначна; вони можуть і як захисники, покровителями, як і злісними звірами, не стриманими звірами.</p>\n\n  </div>\n</div>\n\n<ol class="main-content__list">\n<li class="main-content__list-item">\n  <h3 class="main-content__list-title">Зміст</h3>\n</li>\n<li class="main-content__list-item">1. Опис</li>\n<li class="main-content__list-item">2. Галерея</li>\n<li class="main-content__list-item">3. Відео</li>\n</ol>\n\n<div class="main-content__description description-content">\n\n<h4 class="description-content__title">Опис</h4>\n\n<p class="description-content__text">\n  Монстр якого ви точно не могли б запідозрити у\n  зв'язках з Україною це гриф. Ви запитаєте який Гриф ?\n  У відьмаку ж є тільки Грифон.\n</p>\n<p class="description-content__text">\n  Бо в оригіналі цього велетенського пернатого звіра\n  звати саме Гриф і ніяк інакше. Якщо Грифон — це\n  чудовисько саме народів заходу Європи, то Гриф — це\n  український і польський Монстр. \n</p>\n<p class="description-content__text">\n  В українських легендах розповідається що гриф — це\n  здоровезний птах який своїми крилами може\n  заслоняти світло сонця. Так що на землю навіть падає\n  морок. Літати Гриф здатен протягом цілих семи діб\n  без перепочинку. Зауважимо що хоча в оригіналі\n  монстра звуть Грифом візуально він списаний скоріше з Грифона.\n</p>\n</div>`,N.innerHTML=`\n      <div class="borovik__gallery-header gallery-borovik">\n        <h2 class="gallery-borovik__title">Галерея</h2>\n        <p><a class="gallery-borovik__link" href="#">Подивитись всі</a></p>\n      </div>\n\n      <ul class="gallery-borovik__list js-gallery-griffin-urk">\n\n        <li class="gallery-borovik__item gallery-borovik__item-col">\n          <img data-id="1" class="gallery-borovik__img" src="${i(p)}" alt="griffin-1"\n        </li>\n\n        <li class="gallery-borovik__item">\n          <img data-id="2" class="gallery-borovik__img" src="${i(w)}" alt="griffin-2">\n        </li>\n        <li class="gallery-borovik__item gallery-borovik__item-row">\n          <img data-id="3" class="gallery-borovik__img gallery-borovik__img-row gallery--griffin" src="${i(L)}"\n            alt="griffin-3">\n        </li>\n      </ul>\n\n      <button class="gallery-borovik__btn js-gallery-btn-witch" type="button">У грі Відьмак</button>`,document.querySelector(".js-gallery-btn-witch").addEventListener("click",(()=>{A()}));document.querySelector(".js-gallery-griffin-urk").addEventListener("click",(e=>{const{target:i}=e;if("IMG"!==i.tagName)return;R.classList.remove("backdrop-borovik-gallery--hidden"),document.body.classList.add("is-freeze");const t=document.querySelector(".js-wolf-head-img-box-urk"),n=Number(i.dataset.id),r=[...t.children];switch(n){case 1:r[0].hidden=!1,r[1].hidden=!0,r[2].hidden=!0;break;case 2:r[0].hidden=!0,r[1].hidden=!1,r[2].hidden=!0;break;case 3:r[0].hidden=!0,r[1].hidden=!0,r[2].hidden=!1}1===n&&(O.closest("picture").hidden=!0,I.hidden=!1),O.src=i.src;const s=document.querySelector(".js-small-gallery");s.addEventListener("click",(e=>{const{target:i,currentTarget:t}=e;if("IMG"!==i.tagName)return;const n=Number(i.closest("LI").dataset.id);switch(n){case 1:r[0].hidden=!1,r[1].hidden=!0,r[2].hidden=!0;break;case 2:r[0].hidden=!0,r[1].hidden=!1,r[2].hidden=!0;break;case 3:r[0].hidden=!0,r[1].hidden=!0,r[2].hidden=!1}1===n?(O.closest("picture").hidden=!0,I.hidden=!1):(O.closest("picture").hidden=!1,I.hidden=!0),O.src=i.src,[...t.children].forEach((e=>{e.classList.contains("small-img-active")&&e.classList.remove("small-img-active")})),i.closest(".small-gallery__item").classList.add("small-img-active")})),[...s.children].forEach((e=>{const i=Number(e.dataset.id);e.classList.contains("small-img-active")&&e.classList.remove("small-img-active"),i===n&&e.classList.add("small-img-active")}))}))}function A(e){q.classList.remove("myth-btns__active"),H.classList.add("myth-btns__active"),x.innerHTML=`\n  <div class="bestiary-list__item borovik-item">\n        <div class="borovik-item__heder">\n          <svg width="40" height="40" class="borovik-item__logo">\n            <use href="${i(y)+"#witcher-icon"}"></use>\n          </svg>\n\n          <div class="borovik-item__content">\n            <h3 class="borovik-item__title">Грифон (Гриф)</h3>\n            <h4 class="borovik-item__sub-title">Гра «Відьмак 3: Дикий Гін»</h4>\n          </div>\n\n          <a href="#" class="borovik-item__svg-more">\n            <svg width="18" height="18" class="borovik-body__logo">\n              <use href="${i(y)+"#more-vertical"}"></use>\n            </svg>\n          </a>\n        </div>\n\n        <picture class="borovik-item__picture">\n          <a href="#">\n            <img class="borovik-item__img borovik-item__img-witcher" src="${i(j)}" alt="spriggan"\n              loading="lazy">\n          </a>\n        </picture>\n\n        <div class="borovik-item__body borovik-body">\n\n          <div class="author-img">\n            <h5 class="author-img__title">Анна Подедворна</h5>\n            <a class="author-img__link" href="#">Авторка малюнку</a>\n          </div>\n\n          <a class="borovik-body__link-myth" href="#">\n            <svg width="18" height="18" class="borovik-body__logo">\n              <use href="${i(y)+"#leading"}"></use>\n            </svg>\n            Гібриди\n          </a>\n\n          <p class="borovik-body__text">Грифон - це істота з тілом, задніми ногами та хвостом лева і головою, крилами та пазурами орла.</p>\n\n\n          <table class="borovik-witcher__table">\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Клас</td>\n              <td class="borovik-witcher__data">Гібриди</td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Місце появи/\n                <br> Проживання\n              </td>\n              <td class="borovik-witcher__data">Білий Сад<br>\n              Велен<br>\n              Скелліґе<br>\n              Оксенфурт</td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Стійкість</td>\n              <td class="borovik-witcher__data">До оглушення</td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Вразливість</td>\n              <td class="borovik-witcher__data">\n                  «Картеч» (бомба)<br>\n                  Мастило проти гібридів<br>\n                  знак Аард<br>\n                  знак Квен\n              </td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Тактика</td>\n              <td class="borovik-witcher__data">\n              Налетіти на жертву у стрімкому піке і вдарити кігтями\n              </td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Трофей</td>\n              <td class="borovik-witcher__data">Так</td>\n            </tr>\n          </table>\n\n        </div>\n      </div>\n      \n      <ol class="main-content__list">\n        <li class="main-content__list-item">\n          <h3 class="main-content__list-title">Зміст</h3>\n        </li>\n        <li class="main-content__list-item">1. Опис, Запис у бестіарії</li>\n        <li class="main-content__list-item">2. Галерея</li>\n        <li class="main-content__list-item">3. Відео</li>\n      </ol>\n\n      <div class="main-content__description description-content">\n\n        <h4 class="description-content__title">Гра «Відьмак 3: Дикий Гін»,\n          <br> Запис у бестіарії\n        </h4>\n\n        <p class="description-content__text">\n          А так, напіворел, напівкіт, точно як у шляхтича на\n          гербі. Тільки в пазурах не берло ніс, а коров’ячу тушу.\n          — Невідомий свідок нападу грифона\n        </p>\n        <p class="description-content__text">\n          Колись грифони водилися лише високо в горах, де\n          ловили кіз та іншу гірську живність. Та згодом вони\n          збагнули, що на залюднених рівнинах легше знайти\n          щось їстівне: корову, вівцю, пастуха. Вони й досі\n          уникають битих шляхів і міст, але давно вже\n          перестали бути дивиною в королівствах Півночі.\n          Особливо небезпечні такі їхні різновиди, як\n          королівський грифон і архігрифон.\n        </p>\n        <p class="description-content__text">\n          Грифони паруються на все життя й до загину\n          боронять свого партнера. Тому їх часто вважають\n          утіленням хоробрості, відданості та войовничості.\n          Бойового духу їм аж ніяк не бракує: якщо\n          спровокувати грифона, він не заспокоїться, доки\n          не розірве ворога на шмаття.\n        </p>\n      </div>`,N.innerHTML=`\n<div class="borovik__gallery-header gallery-borovik">\n<h2 class="gallery-borovik__title">Галерея</h2>\n<p><a class="gallery-borovik__link" href="#">Подивитись всі</a></p>\n</div>\n\n<ul class="gallery-borovik__list js-gallery-griffin-witch">\n  <li class="gallery-borovik__item gallery-borovik__item-col">\n    <img data-id="1" class="gallery-borovik__img gallery-borovik__img-col gallery-borovik__img-wicher_col"\n      src="${i(j)}" alt="spriggan">\n  </li>\n  <li class="gallery-borovik__item">\n    <img data-id="2" class="gallery-borovik__img gallery-borovik__img-wicher_row gallery-griffin__witcher_top"\n      src="${i(S)}" alt="borovik-witcher-item-2">\n  </li>\n  <li class="gallery-borovik__item gallery-borovik__item-row">\n    <img data-id="3" class="gallery-borovik__img gallery-borovik__img-row gallery-borovik__img-wicher_row gallery-griffin__witcher"\n      src="${i(E)}" alt="borovik-witcher-item-3">\n  </li>\n</ul>\n\n<button class="gallery-borovik__btn js-gallery-btn-ukr" type="button">В укр. міфології</button>`,document.querySelector(".js-gallery-btn-ukr").addEventListener("click",(()=>{J()}));document.querySelector(".js-gallery-griffin-witch").addEventListener("click",(e=>{const{target:i}=e;if("IMG"!==i.tagName)return;document.body.classList.add("is-freeze"),U.classList.remove("backdrop-borovik-gallery--hidden");const t=document.querySelector(".js-wolf-head-img-box-witcher"),n=Number(i.dataset.id),r=[...t.children];switch(n){case 1:r[0].hidden=!1,r[1].hidden=!0,r[2].hidden=!0;break;case 2:r[0].hidden=!0,r[1].hidden=!1,r[2].hidden=!0;break;case 3:r[0].hidden=!0,r[1].hidden=!0,r[2].hidden=!1}1===n&&($.closest("picture").hidden=!0,T.hidden=!1),$.src=i.src;const s=document.querySelector(".js-small-gallery-witch");s.addEventListener("click",(e=>{const{target:i,currentTarget:t}=e;if("IMG"!==i.tagName)return;const n=Number(i.closest("LI").dataset.id);switch(n){case 1:r[0].hidden=!1,r[1].hidden=!0,r[2].hidden=!0;break;case 2:r[0].hidden=!0,r[1].hidden=!1,r[2].hidden=!0;break;case 3:r[0].hidden=!0,r[1].hidden=!0,r[2].hidden=!1}1===n?($.closest("picture").hidden=!0,T.hidden=!1):($.closest("picture").hidden=!1,T.hidden=!0),$.src=i.src,[...t.children].forEach((e=>{e.classList.contains("small-img-active")&&e.classList.remove("small-img-active")})),i.closest(".small-gallery__item").classList.add("small-img-active")})),[...s.children].forEach((e=>{const i=Number(e.dataset.id);e.classList.contains("small-img-active")&&e.classList.remove("small-img-active"),i===n&&e.classList.add("small-img-active")}))}))}q.addEventListener("click",J),H.addEventListener("click",A),J(),F.addEventListener("click",(e=>{O.closest("picture").hidden=!1,I.hidden=!0,R.classList.add("backdrop-borovik-gallery--hidden"),document.body.classList.remove("is-freeze")})),z.addEventListener("click",(()=>{$.closest("picture").hidden=!1,T.hidden=!0,U.classList.add("backdrop-borovik-gallery--hidden"),document.body.classList.remove("is-freeze")}))}();
//# sourceMappingURL=page-griffin.1bafb7e2.js.map
