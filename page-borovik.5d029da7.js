function e(e,i,t,n){Object.defineProperty(e,i,{get:t,set:n,enumerable:!0,configurable:!0})}function i(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},s=t.parcelRequired7c6;null==s&&((s=function(e){if(e in n)return n[e].exports;if(e in r){var i=r[e];delete r[e];var t={id:e,exports:{}};return n[e]=t,i.call(t.exports,t,t.exports),t.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,i){r[e]=i},t.parcelRequired7c6=s),s.register("kyEFX",(function(i,t){var n,r;e(i.exports,"register",(function(){return n}),(function(e){return n=e})),e(i.exports,"resolve",(function(){return r}),(function(e){return r=e}));var s={};n=function(e){for(var i=Object.keys(e),t=0;t<i.length;t++)s[i[t]]=e[i[t]]},r=function(e){var i=s[e];if(null==i)throw new Error("Could not resolve bundle with id "+e);return i}})),s("kyEFX").register(JSON.parse('{"csl0Y":"page-borovik.5d029da7.js","lp5u4":"sprite.5ed25768.svg","ctAAP":"item-mob-1.15985316.jpg","4qqZx":"borovik-item-2.01fd9ff3.jpg","jF4FN":"borovik-item-3.d74ec1ae.jpg","kkLFk":"spriggan.e05ed955.jpg","dl2Dn":"borovik-witcher-item-2.3eabf7d6.png","3hyro":"borovik-witcher-item-3.60242583.jpg"}'));const o=document.querySelector(".js-header-wrapper"),l=document.querySelector(".js-header-container").clientHeight,c=document.querySelector(".js-tab-menu"),a=document.querySelector(".nav-header__list-tab-inner"),d=document.querySelector(".js-tab-list"),_=document.querySelector(".js-svg-rotate"),m=document.querySelector(".js-header-btm-menu"),v=document.querySelector(".js-mob-menu-btn-close"),b=document.querySelector(".js-transform-btn"),h=document.querySelector(".js-mob-menu"),u=document.querySelector(".js-backdrop");function g(e){if(document.body.classList.toggle("is-freeze"),h.classList.toggle("is-hidden-mob-menu"),u.classList.toggle("backdrop--hidden"),!a.classList.contains("is-hidden"))return a.classList.add("is-hidden"),void _.classList.remove("active-rotate")}function k(e){b.classList.toggle("transform-btn")}o.style.height=l+"px",c.addEventListener("click",(e=>{const{target:i}=e;if(h.classList.contains("is-hidden-mob-menu")||(h.classList.add("is-hidden-mob-menu"),u.classList.add("backdrop--hidden"),k(),document.body.classList.remove("is-freeze")),i.classList.contains("dropdown"))return d.classList.toggle("is-hidden"),void _.classList.toggle("active-rotate")})),m.addEventListener("click",g),v.addEventListener("click",(e=>{g(),k(),document.body.classList.remove("is-freeze")})),u.addEventListener("click",(e=>{g(),k(),document.body.classList.remove("is-freeze")})),b.addEventListener("click",k);const y=document.querySelector(".js-backdrop-search");document.querySelector(".js-search-icon").addEventListener("click",(function(e){y.classList.remove("backdrop-search--hidden"),document.body.style.overflow="hidden"})),y.addEventListener("click",(function(e){const{target:i,currentTarget:t}=e;if(i!==t)return;y.classList.add("backdrop-search--hidden"),document.body.style.overflow=""}));var p;p=new URL(s("kyEFX").resolve("lp5u4"),import.meta.url).toString();var f;f=new URL(s("kyEFX").resolve("ctAAP"),import.meta.url).toString();var w;w=new URL(s("kyEFX").resolve("4qqZx"),import.meta.url).toString();var L;L=new URL(s("kyEFX").resolve("jF4FN"),import.meta.url).toString();var S;S=new URL(s("kyEFX").resolve("kkLFk"),import.meta.url).toString();var j;j=new URL(s("kyEFX").resolve("dl2Dn"),import.meta.url).toString();var E;E=new URL(s("kyEFX").resolve("3hyro"),import.meta.url).toString();const q=document.querySelector(".js-myth-btns_ukr"),F=document.querySelector(".js-myth-btn_witcher"),H=document.querySelector(".js-main-content"),x=document.querySelector(".js-gallery-borovik-section"),R=document.querySelector(".js-backdrop-borovik-gallery"),N=document.querySelector(".js-backdrop-borovik-gallery-wicher"),$=document.querySelector(".js-borovik-modal-img"),A=document.querySelector(".js-borovik-modal-img-wich"),z=document.querySelector(".js-borovik-modal-video"),M=document.querySelector(".js-borovik-modal-video-witcher"),T=document.querySelector(".js-backdrop-close"),U=document.querySelector(".js-backdrop-close-wich");function X(){F.classList.remove("myth-btns__active"),q.classList.add("myth-btns__active"),H.innerHTML=`\n  <div class="bestiary-list__item borovik-item">\n  <div class="borovik-item__heder">\n    <svg width="40" height="40" class="borovik-item__logo">\n      <use href="${i(p)+"#icon-logo-ua"}"></use>\n    </svg>\n\n    <div class="borovik-item__content">\n      <h3 class="borovik-item__title">Боровик</h3>\n      <h4 class="borovik-item__sub-title">Українська міфологія</h4>\n    </div>\n\n    <a href="#" class="borovik-item__svg-more">\n      <svg width="18" height="18" class="borovik-body__logo">\n        <use href="${i(p)+"#more-vertical"}"></use>\n      </svg>\n    </a>\n  </div>\n\n  <picture class="borovik-item__picture">\n    <a href="#">\n      <img class="borovik-item__img borovik-item__img-ukr" src="${i(f)}" alt="#"\n        loading="lazy">\n    </a>\n  </picture>\n\n  <div class="borovik-item__body borovik-body">\n\n    <a class="borovik-body__link-myth" href="#">\n      <svg width="18" height="18" class="borovik-body__logo">\n        <use href="${i(p)+"#icon-logo-ua"}"></use>\n      </svg>\n      Міф\n    </a>\n\n    <p class="borovik-body__text">За слов'янською міфологією один з лісових духів, господар борів та гаїв.</p>\n\n  </div>\n</div>\n\n<ol class="main-content__list">\n<li class="main-content__list-item">\n  <h3 class="main-content__list-title">Зміст</h3>\n</li>\n<li class="main-content__list-item">1. Опис</li>\n<li class="main-content__list-item">2. Галерея</li>\n<li class="main-content__list-item">3. Відео</li>\n</ol>\n\n<div class="main-content__description description-content">\n\n<h4 class="description-content__title">Опис</h4>\n\n<p class="description-content__text">\n  Боровик — дух особливо густих соснових борів згідно міфології\n  слов'ян. Він відрізняється від свого родича кількома деталями;\n</p>\n<p class="description-content__text">\n  Перша це ареал проживання, Боровик дуже сильно леліє свої соснові ліси і ненавидить коли туди хтось\n  забрідає, тому випадково подорожнього він може просто з'їсти якщо подумаєш що той загрожує його деревам чи\n  тваринам.\n</p>\n<p class="description-content__text">\n  Друга важлива відмінність — це нелюбов до кішок якщо лісовик любить усіх тварин, то Боровик просто\n  ненавидить\n  кішок від звуку нявкання кота він шалено лякається і тікає в своє найглибше ліго. Частково саме тому люди що\n  жили біля лісів повинні були обов'язково мати в господарстві пару котів, кішок.\n</p>\n</div>`,x.innerHTML=`\n      <div class="borovik__gallery-header gallery-borovik">\n        <h2 class="gallery-borovik__title">Галерея</h2>\n        <p><a class="gallery-borovik__link" href="#">Подивитись всі</a></p>\n      </div>\n\n      <ul class="gallery-borovik__list js-gallery-borovik-urk">\n\n        <li class="gallery-borovik__item gallery-borovik__item-col">\n          <img data-id="1" class="gallery-borovik__img" src="${i(f)}" alt="borovik"\n        </li>\n\n        <li class="gallery-borovik__item">\n          <img data-id="2" class="gallery-borovik__img" src="${i(w)}" alt="borovik2">\n        </li>\n        <li class="gallery-borovik__item gallery-borovik__item-row">\n          <img data-id="3" class="gallery-borovik__img gallery-borovik__img-row" src="${i(L)}"\n            alt="borovik3">\n        </li>\n      </ul>\n\n      <button class="gallery-borovik__btn js-gallery-btn-wich" type="button">У грі Відьмак</button>`,document.querySelector(".js-gallery-btn-wich").addEventListener("click",(()=>{I()}));document.querySelector(".js-gallery-borovik-urk").addEventListener("click",(e=>{const{target:i}=e;if("IMG"!==i.tagName)return;R.classList.remove("backdrop-borovik-gallery--hidden"),document.body.classList.add("is-freeze");const t=document.querySelector(".js-wolf-head-img-box-urk"),n=Number(i.dataset.id),r=[...t.children];switch(n){case 1:r[0].hidden=!1,r[1].hidden=!0,r[2].hidden=!0;break;case 2:r[0].hidden=!0,r[1].hidden=!1,r[2].hidden=!0;break;case 3:r[0].hidden=!0,r[1].hidden=!0,r[2].hidden=!1}1===n&&($.closest("picture").hidden=!0,z.hidden=!1),$.src=i.src;const s=document.querySelector(".js-small-gallery");s.addEventListener("click",(e=>{const{target:i,currentTarget:t}=e;if("IMG"!==i.tagName)return;const n=Number(i.closest("LI").dataset.id);switch(n){case 1:r[0].hidden=!1,r[1].hidden=!0,r[2].hidden=!0;break;case 2:r[0].hidden=!0,r[1].hidden=!1,r[2].hidden=!0;break;case 3:r[0].hidden=!0,r[1].hidden=!0,r[2].hidden=!1}1===n?($.closest("picture").hidden=!0,z.hidden=!1):($.closest("picture").hidden=!1,z.hidden=!0),$.src=i.src,[...t.children].forEach((e=>{e.classList.contains("small-img-active")&&e.classList.remove("small-img-active")})),i.closest(".small-gallery__item").classList.add("small-img-active")})),[...s.children].forEach((e=>{const i=Number(e.dataset.id);e.classList.contains("small-img-active")&&e.classList.remove("small-img-active"),i===n&&e.classList.add("small-img-active")}))}))}function I(e){q.classList.remove("myth-btns__active"),F.classList.add("myth-btns__active"),H.innerHTML=`\n  <div class="bestiary-list__item borovik-item">\n        <div class="borovik-item__heder">\n          <svg width="40" height="40" class="borovik-item__logo">\n            <use href="${i(p)+"#witcher-icon"}"></use>\n          </svg>\n\n          <div class="borovik-item__content">\n            <h3 class="borovik-item__title">Боровик</h3>\n            <h4 class="borovik-item__sub-title">Гра «Відьмак 3: Дикий Гін»</h4>\n          </div>\n\n          <a href="#" class="borovik-item__svg-more">\n            <svg width="18" height="18" class="borovik-body__logo">\n              <use href="${i(p)+"#more-vertical"}"></use>\n            </svg>\n          </a>\n        </div>\n\n        <picture class="borovik-item__picture">\n          <a href="#">\n            <img class="borovik-item__img borovik-item__img-witcher" src="${i(S)}" alt="spriggan"\n              loading="lazy">\n          </a>\n        </picture>\n\n        <div class="borovik-item__body borovik-body">\n\n          <div class="author-img">\n            <h5 class="author-img__title">Доменіко Кава</h5>\n            <a class="author-img__link" href="#">Автор малюнку</a>\n          </div>\n\n          <a class="borovik-body__link-myth" href="#">\n            <svg width="18" height="18" class="borovik-body__logo">\n              <use href="${i(p)+"#leading"}"></use>\n            </svg>\n            Релікти\n          </a>\n\n          <p class="borovik-body__text">Боровик (пол. Borowy, англ. Spriggan) — бестія, яка фігурує в книжках\n            Сапковського\n            та у всесвіті Відьмака.</p>\n\n\n          <table class="borovik-witcher__table">\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Клас</td>\n              <td class="borovik-witcher__data">Релікти</td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Місце появи/\n                <br> Проживання\n              </td>\n              <td class="borovik-witcher__data">Морвудд</td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Вразливість</td>\n              <td class="borovik-witcher__data">знак Ігні\n                Двімеритова бомба\n                Мастило проти реліктів</td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Тактика</td>\n              <td class="borovik-witcher__data">Фізичні атаки</td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Трофей</td>\n              <td class="borovik-witcher__data">Так\n                З Гротника після виконання завдання «Ноги холодні як лід»</td>\n            </tr>\n          </table>\n\n        </div>\n      </div>\n      \n      <ol class="main-content__list">\n        <li class="main-content__list-item">\n          <h3 class="main-content__list-title">Зміст</h3>\n        </li>\n        <li class="main-content__list-item">1. Опис, Запис у бестіарії</li>\n        <li class="main-content__list-item">2. Галерея</li>\n        <li class="main-content__list-item">3. Відео</li>\n      </ol>\n\n      <div class="main-content__description description-content">\n\n        <h4 class="description-content__title">Гра «Відьмак 3: Дикий Гін»,\n          <br> Запис у бестіарії\n        </h4>\n\n        <p class="description-content__text">\n          Боровики — підвид лісовиків. Натрапити на них можна в недоступних безлюдних хащах. Якщо їх не злити, вони\n          можуть і не напасти, але в гніві ці істоти страшні. Боровик дуже кремезний, завдає величезної шкоди, а м’яса\n          зжерти може більше, ніж на доброму весіллі подають.\n        </p>\n        <p class="description-content__text">\n          Кожний боровик панує над рослинами й нерозривно пов’язаний із ними. Якщо хтось нищить зелень у володіннях\n          боровика, потвора обов’язково прийде й покарає порушника спокою.\n        </p>\n        <p class="description-content__text">\n          У бою боровик управно користується своїми дужими кінцівками. Атакує він стрімко, що, беручи до уваги його\n          масивність, може спричинити клопіт. Подібна до кори тверда шкіра боровика витримує навіть сильні вдари мечем,\n          а сам він б’є так потужно, що ставити блок не варто й пробувати. Слід пильнувати коріння, яке боровик примушує\n          вилазити з-під землі й хапати ворога. Ця потвора вміє також телепортуватися, раптово з’являючись просто перед\n          супротивником. Бити його Знаком Аард марно, бо жодна сила цього монстра не повалить.\n        </p>\n      </div>`,x.innerHTML=`\n<div class="borovik__gallery-header gallery-borovik">\n<h2 class="gallery-borovik__title">Галерея</h2>\n<p><a class="gallery-borovik__link" href="#">Подивитись всі</a></p>\n</div>\n\n<ul class="gallery-borovik__list js-gallery-borovik-wich">\n  <li class="gallery-borovik__item gallery-borovik__item-col">\n    <img data-id="1" class="gallery-borovik__img gallery-borovik__img-col gallery-borovik__img-wicher_col"\n      src="${i(S)}" alt="spriggan">\n  </li>\n  <li class="gallery-borovik__item">\n    <img data-id="2" class="gallery-borovik__img gallery-borovik__img-wicher_row"\n      src="${i(j)}" alt="borovik-witcher-item-2">\n  </li>\n  <li class="gallery-borovik__item gallery-borovik__item-row">\n    <img data-id="3" class="gallery-borovik__img gallery-borovik__img-row gallery-borovik__img-wicher_row"\n      src="${i(E)}" alt="borovik-witcher-item-3">\n  </li>\n</ul>\n\n<button class="gallery-borovik__btn js-gallery-btn-ukr" type="button">В укр. міфології</button>`,document.querySelector(".js-gallery-btn-ukr").addEventListener("click",(()=>{X()}));document.querySelector(".js-gallery-borovik-wich").addEventListener("click",(e=>{const{target:i}=e;if("IMG"!==i.tagName)return;N.classList.remove("backdrop-borovik-gallery--hidden"),document.body.classList.add("is-freeze");const t=document.querySelector(".js-wolf-head-img-box-witcher"),n=Number(i.dataset.id),r=[...t.children];switch(n){case 1:r[0].hidden=!1,r[1].hidden=!0,r[2].hidden=!0;break;case 2:r[0].hidden=!0,r[1].hidden=!1,r[2].hidden=!0;break;case 3:r[0].hidden=!0,r[1].hidden=!0,r[2].hidden=!1}1===n&&(A.closest("picture").hidden=!0,M.hidden=!1),A.src=i.src;const s=document.querySelector(".js-small-gallery-wich");s.addEventListener("click",(e=>{const{target:i,currentTarget:t}=e;if("IMG"!==i.tagName)return;const n=Number(i.closest("LI").dataset.id);switch(n){case 1:r[0].hidden=!1,r[1].hidden=!0,r[2].hidden=!0;break;case 2:r[0].hidden=!0,r[1].hidden=!1,r[2].hidden=!0;break;case 3:r[0].hidden=!0,r[1].hidden=!0,r[2].hidden=!1}1===n?(A.closest("picture").hidden=!0,M.hidden=!1):(A.closest("picture").hidden=!1,M.hidden=!0),A.src=i.src,[...t.children].forEach((e=>{e.classList.contains("small-img-active")&&e.classList.remove("small-img-active")})),i.closest(".small-gallery__item").classList.add("small-img-active")})),[...s.children].forEach((e=>{const i=Number(e.dataset.id);e.classList.contains("small-img-active")&&e.classList.remove("small-img-active"),i===n&&e.classList.add("small-img-active")}))}))}X(),q.addEventListener("click",X),F.addEventListener("click",I),T.addEventListener("click",(()=>{$.closest("picture").hidden=!1,z.hidden=!0,R.classList.add("backdrop-borovik-gallery--hidden"),document.body.classList.remove("is-freeze")})),U.addEventListener("click",(()=>{A.closest("picture").hidden=!1,M.hidden=!0,N.classList.add("backdrop-borovik-gallery--hidden"),document.body.classList.remove("is-freeze")}));
//# sourceMappingURL=page-borovik.5d029da7.js.map
