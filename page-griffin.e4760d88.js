function n(n,t,i,e){Object.defineProperty(n,t,{get:i,set:e,enumerable:!0,configurable:!0})}function t(n){return n&&n.__esModule?n.default:n}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},r={},o=i.parcelRequired7c6;null==o&&((o=function(n){if(n in e)return e[n].exports;if(n in r){var t=r[n];delete r[n];var i={id:n,exports:{}};return e[n]=i,t.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+n+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(n,t){r[n]=t},i.parcelRequired7c6=o),o.register("kyEFX",(function(t,i){var e,r;n(t.exports,"register",(function(){return e}),(function(n){return e=n})),n(t.exports,"resolve",(function(){return r}),(function(n){return r=n}));var o={};e=function(n){for(var t=Object.keys(n),i=0;i<t.length;i++)o[t[i]]=n[t[i]]},r=function(n){var t=o[n];if(null==t)throw new Error("Could not resolve bundle with id "+n);return t}})),o("kyEFX").register(JSON.parse('{"8qyFj":"page-griffin.e4760d88.js","lp5u4":"sprite.5ed25768.svg","2JQ7r":"item-mob-2.393f09de.jpg","5Zfkh":"item-img-2.246bf061.jpg","Fsb3N":"item-img-3.e35e9dea.jpg","1K0po":"grifon.bea4bc90.jpg","iEwMh":"item-img-witc.2.101c8103.jpg","g76h6":"item-img-witc.3.bf4ae601.jpg"}'));const s=document.querySelector(".js-header-wrapper"),l=document.querySelector(".js-header-container").clientHeight,a=document.querySelector(".js-tab-menu"),c=document.querySelector(".nav-header__list-tab-inner"),_=document.querySelector(".js-tab-list"),d=document.querySelector(".js-svg-rotate"),v=document.querySelector(".js-header-btm-menu"),b=document.querySelector(".js-mob-menu-btn-close"),g=document.querySelector(".js-transform-btn"),m=document.querySelector(".js-mob-menu"),h=document.querySelector(".js-backdrop");function u(n){if(m.classList.toggle("is-hidden-mob-menu"),h.classList.toggle("backdrop--hidden"),!c.classList.contains("is-hidden"))return c.classList.add("is-hidden"),void d.classList.remove("active-rotate")}function k(n){g.classList.toggle("transform-btn")}s.style.height=l+"px",a.addEventListener("click",(n=>{const{target:t}=n;if(m.classList.contains("is-hidden-mob-menu")||(m.classList.add("is-hidden-mob-menu"),h.classList.add("backdrop--hidden")),t.classList.contains("dropdown"))return _.classList.toggle("is-hidden"),void d.classList.toggle("active-rotate")})),v.addEventListener("click",u),b.addEventListener("click",(n=>{u(),k()})),h.addEventListener("click",(n=>{u(),k()})),g.addEventListener("click",k);const y=document.querySelector(".js-backdrop-search");document.querySelector(".js-search-icon").addEventListener("click",(function(n){y.classList.remove("backdrop-search--hidden")})),y.addEventListener("click",(function(n){const{target:t,currentTarget:i}=n;if(t!==i)return;y.classList.add("backdrop-search--hidden")}));var f;f=new URL(o("kyEFX").resolve("lp5u4"),import.meta.url).toString();var p;p=new URL(o("kyEFX").resolve("2JQ7r"),import.meta.url).toString();var w;w=new URL(o("kyEFX").resolve("5Zfkh"),import.meta.url).toString();var L;L=new URL(o("kyEFX").resolve("Fsb3N"),import.meta.url).toString();var S;S=new URL(o("kyEFX").resolve("1K0po"),import.meta.url).toString();var E;E=new URL(o("kyEFX").resolve("iEwMh"),import.meta.url).toString();var j;j=new URL(o("kyEFX").resolve("g76h6"),import.meta.url).toString();const F=document.querySelector(".js-myth-btns_ukr-griff"),H=document.querySelector(".js-myth-btn_witcher-griff"),q=document.querySelector(".js-main-content-griffin"),R=document.querySelector(".js-gallery-griffin");function x(){H.classList.remove("myth-btns__active"),F.classList.add("myth-btns__active"),q.innerHTML=`\n  <div class="bestiary-list__item borovik-item">\n  <div class="borovik-item__heder">\n    <svg width="40" height="40" class="borovik-item__logo">\n      <use href="${t(f)+"#icon-logo-ua"}"></use>\n    </svg>\n\n    <div class="borovik-item__content">\n      <h3 class="borovik-item__title">Грифон (Гриф)</h3>\n      <h4 class="borovik-item__sub-title">Українська міфологія</h4>\n    </div>\n\n    <a href="#" class="borovik-item__svg-more">\n      <svg width="18" height="18" class="borovik-body__logo">\n        <use href="${t(f)+"#more-vertical"}"></use>\n      </svg>\n    </a>\n  </div>\n\n  <picture class="borovik-item__picture">\n    <a href="#">\n      <img class="borovik-item__img borovik-item__img-ukr" src="${t(p)}" alt="#"\n        loading="lazy">\n    </a>\n  </picture>\n\n  <div class="borovik-item__body borovik-body">\n\n    <a class="borovik-body__link-myth" href="#">\n      <svg width="18" height="18" class="borovik-body__logo">\n        <use href="${t(f)+"#icon-logo-ua"}"></use>\n      </svg>\n      Міф\n    </a>\n\n    <p class="borovik-body__text">Грифони — суперечливі істоти, які одночасно об'єднують Небо і Землю, Добро і Зло. Їх роль і в різних міфах, і в літературі – неоднозначна; вони можуть і як захисники, покровителями, як і злісними звірами, не стриманими звірами.</p>\n\n  </div>\n</div>\n\n<ol class="main-content__list">\n<li class="main-content__list-item">\n  <h3 class="main-content__list-title">Зміст</h3>\n</li>\n<li class="main-content__list-item">1. Опис</li>\n<li class="main-content__list-item">2. Галерея</li>\n<li class="main-content__list-item">3. Відео</li>\n</ol>\n\n<div class="main-content__description description-content">\n\n<h4 class="description-content__title">Опис</h4>\n\n<p class="description-content__text">\n  Монстр якого ви точно не могли б запідозрити у\n  зв'язках з Україною це гриф. Ви запитаєте який Гриф ?\n  У відьмаку ж є тільки Грифон.\n</p>\n<p class="description-content__text">\n  Бо в оригіналі цього велетенського пернатого звіра\n  звати саме Гриф і ніяк інакше. Якщо Грифон — це\n  чудовисько саме народів заходу Європи, то Гриф — це\n  український і польський Монстр. \n</p>\n<p class="description-content__text">\n  В українських легендах розповідається що гриф — це\n  здоровезний птах який своїми крилами може\n  заслоняти світло сонця. Так що на землю навіть падає\n  морок. Літати Гриф здатен протягом цілих семи діб\n  без перепочинку. Зауважимо що хоча в оригіналі\n  монстра звуть Грифом візуально він списаний скоріше з Грифона.\n</p>\n</div>`,R.innerHTML=`\n      <div class="borovik__gallery-header gallery-borovik">\n        <h2 class="gallery-borovik__title">Галерея</h2>\n        <p><a class="gallery-borovik__link" href="#">Подивитись всі</a></p>\n      </div>\n\n      <ul class="gallery-borovik__list js-gallery-borovik-urk">\n\n        <li class="gallery-borovik__item gallery-borovik__item-col">\n          <img data-id="1" class="gallery-borovik__img" src="${t(p)}" alt="griffin-1"\n        </li>\n\n        <li class="gallery-borovik__item">\n          <img data-id="2" class="gallery-borovik__img" src="${t(w)}" alt="griffin-2">\n        </li>\n        <li class="gallery-borovik__item gallery-borovik__item-row">\n          <img data-id="3" class="gallery-borovik__img gallery-borovik__img-row gallery--griffin" src="${t(L)}"\n            alt="griffin-3">\n        </li>\n      </ul>\n\n      <button class="gallery-borovik__btn js-gallery-btn-wich" type="button">У грі Відьмак</button>`}F.addEventListener("click",x),H.addEventListener("click",(function(n){F.classList.remove("myth-btns__active"),H.classList.add("myth-btns__active"),q.innerHTML=`\n  <div class="bestiary-list__item borovik-item">\n        <div class="borovik-item__heder">\n          <svg width="40" height="40" class="borovik-item__logo">\n            <use href="${t(f)+"#witcher-icon"}"></use>\n          </svg>\n\n          <div class="borovik-item__content">\n            <h3 class="borovik-item__title">Грифон (Гриф)</h3>\n            <h4 class="borovik-item__sub-title">Гра «Відьмак 3: Дикий Гін»</h4>\n          </div>\n\n          <a href="#" class="borovik-item__svg-more">\n            <svg width="18" height="18" class="borovik-body__logo">\n              <use href="${t(f)+"#more-vertical"}"></use>\n            </svg>\n          </a>\n        </div>\n\n        <picture class="borovik-item__picture">\n          <a href="#">\n            <img class="borovik-item__img borovik-item__img-witcher" src="${t(S)}" alt="spriggan"\n              loading="lazy">\n          </a>\n        </picture>\n\n        <div class="borovik-item__body borovik-body">\n\n          <div class="author-img">\n            <h5 class="author-img__title">Анна Подедворна</h5>\n            <a class="author-img__link" href="#">Авторка малюнку</a>\n          </div>\n\n          <a class="borovik-body__link-myth" href="#">\n            <svg width="18" height="18" class="borovik-body__logo">\n              <use href="${t(f)+"#leading"}"></use>\n            </svg>\n            Гібриди\n          </a>\n\n          <p class="borovik-body__text">Грифон - це істота з тілом, задніми ногами та хвостом лева і головою, крилами та пазурами орла.</p>\n\n\n          <table class="borovik-witcher__table">\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Клас</td>\n              <td class="borovik-witcher__data">Гібриди</td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Місце появи/\n                <br> Проживання\n              </td>\n              <td class="borovik-witcher__data">Білий Сад<br>\n              Велен<br>\n              Скелліґе<br>\n              Оксенфурт</td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Стійкість</td>\n              <td class="borovik-witcher__data">До оглушення</td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Вразливість</td>\n              <td class="borovik-witcher__data">\n                  «Картеч» (бомба)<br>\n                  Мастило проти гібридів<br>\n                  знак Аард<br>\n                  знак Квен\n              </td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Тактика</td>\n              <td class="borovik-witcher__data">\n              Налетіти на жертву у стрімкому піке і вдарити кігтями\n              </td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Трофей</td>\n              <td class="borovik-witcher__data">Так</td>\n            </tr>\n          </table>\n\n        </div>\n      </div>\n      \n      <ol class="main-content__list">\n        <li class="main-content__list-item">\n          <h3 class="main-content__list-title">Зміст</h3>\n        </li>\n        <li class="main-content__list-item">1. Опис, Запис у бестіарії</li>\n        <li class="main-content__list-item">2. Галерея</li>\n        <li class="main-content__list-item">3. Відео</li>\n      </ol>\n\n      <div class="main-content__description description-content">\n\n        <h4 class="description-content__title">Гра «Відьмак 3: Дикий Гін»,\n          <br> Запис у бестіарії\n        </h4>\n\n        <p class="description-content__text">\n          А так, напіворел, напівкіт, точно як у шляхтича на\n          гербі. Тільки в пазурах не берло ніс, а коров’ячу тушу.\n          — Невідомий свідок нападу грифона\n        </p>\n        <p class="description-content__text">\n          Колись грифони водилися лише високо в горах, де\n          ловили кіз та іншу гірську живність. Та згодом вони\n          збагнули, що на залюднених рівнинах легше знайти\n          щось їстівне: корову, вівцю, пастуха. Вони й досі\n          уникають битих шляхів і міст, але давно вже\n          перестали бути дивиною в королівствах Півночі.\n          Особливо небезпечні такі їхні різновиди, як\n          королівський грифон і архігрифон.\n        </p>\n        <p class="description-content__text">\n          Грифони паруються на все життя й до загину\n          боронять свого партнера. Тому їх часто вважають\n          утіленням хоробрості, відданості та войовничості.\n          Бойового духу їм аж ніяк не бракує: якщо\n          спровокувати грифона, він не заспокоїться, доки\n          не розірве ворога на шмаття.\n        </p>\n      </div>`,R.innerHTML=`\n<div class="borovik__gallery-header gallery-borovik">\n<h2 class="gallery-borovik__title">Галерея</h2>\n<p><a class="gallery-borovik__link" href="#">Подивитись всі</a></p>\n</div>\n\n<ul class="gallery-borovik__list js-gallery-borovik-wich">\n  <li class="gallery-borovik__item gallery-borovik__item-col">\n    <img data-id="1" class="gallery-borovik__img gallery-borovik__img-col gallery-borovik__img-wicher_col"\n      src="${t(S)}" alt="spriggan">\n  </li>\n  <li class="gallery-borovik__item">\n    <img data-id="2" class="gallery-borovik__img gallery-borovik__img-wicher_row gallery-griffin__witcher_top"\n      src="${t(E)}" alt="borovik-witcher-item-2">\n  </li>\n  <li class="gallery-borovik__item gallery-borovik__item-row">\n    <img data-id="3" class="gallery-borovik__img gallery-borovik__img-row gallery-borovik__img-wicher_row gallery-griffin__witcher"\n      src="${t(j)}" alt="borovik-witcher-item-3">\n  </li>\n</ul>\n\n<button class="gallery-borovik__btn js-gallery-btn-ukr" type="button">В укр. міфології</button>`})),x();
//# sourceMappingURL=page-griffin.e4760d88.js.map
