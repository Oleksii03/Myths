!function(){function e(e,n,t,i){Object.defineProperty(e,n,{get:t,set:i,enumerable:!0,configurable:!0})}function n(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in i)return i[e].exports;if(e in o){var n=o[e];delete o[e];var t={id:e,exports:{}};return i[e]=t,n.call(t.exports,t,t.exports),t.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},t.parcelRequired7c6=r),r.register("iE7OH",(function(n,t){var i,o;e(n.exports,"register",(function(){return i}),(function(e){return i=e})),e(n.exports,"resolve",(function(){return o}),(function(e){return o=e}));var r={};i=function(e){for(var n=Object.keys(e),t=0;t<n.length;t++)r[n[t]]=e[n[t]]},o=function(e){var n=r[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),r.register("aNJCr",(function(n,t){var i;e(n.exports,"getBundleURL",(function(){return i}),(function(e){return i=e}));var o={};function r(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}i=function(e){var n=o[e];return n||(n=function(){try{throw new Error}catch(n){var e=(""+n.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return r(e[2])}return"/"}(),o[e]=n),n}})),r("iE7OH").register(JSON.parse('{"csx9q":"page-borovik.7fb08bec.js","ee16w":"sprite.2814b2ad.svg","gG3IH":"item-mob-1.15985316.jpg","7srpn":"borovik-item-2.01fd9ff3.jpg","dpVsz":"borovik-item-3.7da94815.jpg","jtsLn":"spriggan.e05ed955.jpg","7K2Wu":"borovik-witcher-item-2.e427a0fd.jpg","7DqB1":"borovik-witcher-item-3.6183a7ec.jpg"}'));const s=document.querySelector(".js-header-wrapper"),l=document.querySelector(".js-header-container").clientHeight,c=document.querySelector(".js-tab-menu"),a=document.querySelector(".nav-header__list-tab-inner"),_=document.querySelector(".js-tab-list"),d=document.querySelector(".js-svg-rotate"),v=document.querySelector(".js-header-btm-menu"),b=document.querySelector(".js-mob-menu-btn-close"),g=document.querySelector(".js-transform-btn"),m=document.querySelector(".js-mob-menu"),u=document.querySelector(".js-backdrop");function h(e){if(m.classList.toggle("is-hidden-mob-menu"),u.classList.toggle("backdrop--hidden"),!a.classList.contains("is-hidden"))return a.classList.add("is-hidden"),void d.classList.remove("active-rotate")}function k(e){g.classList.toggle("transform-btn")}s.style.height=l+"px",c.addEventListener("click",(e=>{const{target:n}=e;if(m.classList.contains("is-hidden-mob-menu")||(m.classList.add("is-hidden-mob-menu"),u.classList.add("backdrop--hidden")),n.classList.contains("dropdown"))return _.classList.toggle("is-hidden"),void d.classList.toggle("active-rotate")})),v.addEventListener("click",h),b.addEventListener("click",(e=>{h(),k()})),u.addEventListener("click",(e=>{h(),k()})),g.addEventListener("click",k);const y=document.querySelector(".js-backdrop-search");document.querySelector(".js-search-icon").addEventListener("click",(function(e){y.classList.remove("backdrop-search--hidden")})),y.addEventListener("click",(function(e){const{target:n,currentTarget:t}=e;if(n!==t)return;y.classList.add("backdrop-search--hidden")}));var p;p=r("aNJCr").getBundleURL("csx9q")+r("iE7OH").resolve("ee16w");var f;f=r("aNJCr").getBundleURL("csx9q")+r("iE7OH").resolve("gG3IH");var w;w=r("aNJCr").getBundleURL("csx9q")+r("iE7OH").resolve("7srpn");var L;L=r("aNJCr").getBundleURL("csx9q")+r("iE7OH").resolve("dpVsz");var H;H=r("aNJCr").getBundleURL("csx9q")+r("iE7OH").resolve("jtsLn");var E;E=r("aNJCr").getBundleURL("csx9q")+r("iE7OH").resolve("7K2Wu");var q;q=r("aNJCr").getBundleURL("csx9q")+r("iE7OH").resolve("7DqB1");const j=document.querySelector(".js-myth-btns_ukr"),x=document.querySelector(".js-myth-btn_witcher"),S=document.querySelector(".js-main-content"),R=document.querySelector(".js-gallery-borovik-section");function $(){x.classList.remove("myth-btns__active"),j.classList.add("myth-btns__active"),S.innerHTML=`\n  <div class="bestiary-list__item borovik-item">\n  <div class="borovik-item__heder">\n    <svg width="40" height="40" class="borovik-item__logo">\n      <use href="${n(p)+"#icon-logo-ua"}"></use>\n    </svg>\n\n    <div class="borovik-item__content">\n      <h3 class="borovik-item__title">Боровик</h3>\n      <h4 class="borovik-item__sub-title">Українська міфологія</h4>\n    </div>\n\n    <a href="#" class="borovik-item__svg-more">\n      <svg width="18" height="18" class="borovik-body__logo">\n        <use href="${n(p)+"#more-vertical"}"></use>\n      </svg>\n    </a>\n  </div>\n\n  <picture class="borovik-item__picture">\n    <a href="#">\n      <img class="borovik-item__img borovik-item__img-ukr" src="${n(f)}" alt="#"\n        loading="lazy">\n    </a>\n  </picture>\n\n  <div class="borovik-item__body borovik-body">\n\n    <a class="borovik-body__link-myth" href="#">\n      <svg width="18" height="18" class="borovik-body__logo">\n        <use href="${n(p)+"#icon-logo-ua"}"></use>\n      </svg>\n      Міф\n    </a>\n\n    <p class="borovik-body__text">За слов'янською міфологією один з лісових духів, господар борів та гаїв.</p>\n\n  </div>\n</div>\n\n<ol class="main-content__list">\n<li class="main-content__list-item">\n  <h3 class="main-content__list-title">Зміст</h3>\n</li>\n<li class="main-content__list-item">1. Опис</li>\n<li class="main-content__list-item">2. Галерея</li>\n<li class="main-content__list-item">3. Відео</li>\n</ol>\n\n<div class="main-content__description description-content">\n\n<h4 class="description-content__title">Опис</h4>\n\n<p class="description-content__text">\n  Боровик — дух особливо густих соснових борів згідно міфології\n  слов'ян. Він відрізняється від свого родича кількома деталями;\n</p>\n<p class="description-content__text">\n  Перша це ареал проживання, Боровик дуже сильно леліє свої соснові ліси і ненавидить коли туди хтось\n  забрідає, тому випадково подорожнього він може просто з'їсти якщо подумаєш що той загрожує його деревам чи\n  тваринам.\n</p>\n<p class="description-content__text">\n  Друга важлива відмінність — це нелюбов до кішок якщо лісовик любить усіх тварин, то Боровик просто\n  ненавидить\n  кішок від звуку нявкання кота він шалено лякається і тікає в своє найглибше ліго. Частково саме тому люди що\n  жили біля лісів повинні були обов'язково мати в господарстві пару котів, кішок.\n</p>\n</div>`,R.innerHTML=`\n      <div class="borovik__gallery-header gallery-borovik">\n        <h2 class="gallery-borovik__title">Галерея</h2>\n        <p><a class="gallery-borovik__link" href="#">Подивитись всі</a></p>\n      </div>\n\n      <ul class="gallery-borovik__list">\n        <li class="gallery-borovik__item gallery-borovik__item-col">\n          <img class="gallery-borovik__img gallery-borovik__img-col" src="${n(f)}" alt="borovik">\n        </li>\n        <li class="gallery-borovik__item">\n          <img class="gallery-borovik__img" src="${n(w)}" alt="borovik2">\n        </li>\n        <li class="gallery-borovik__item gallery-borovik__item-row">\n          <img class="gallery-borovik__img gallery-borovik__img-row" src="${n(L)}"\n            alt="borovik3">\n        </li>\n      </ul>\n      <button class="gallery-borovik__btn" type="button">У грі Відьмак</button>`}$(),j.addEventListener("click",$),x.addEventListener("click",(function(e){j.classList.remove("myth-btns__active"),x.classList.add("myth-btns__active"),S.innerHTML=`\n  <div class="bestiary-list__item borovik-item">\n        <div class="borovik-item__heder">\n          <svg width="40" height="40" class="borovik-item__logo">\n            <use href="${n(p)+"#witcher-icon"}"></use>\n          </svg>\n\n          <div class="borovik-item__content">\n            <h3 class="borovik-item__title">Боровик</h3>\n            <h4 class="borovik-item__sub-title">Гра «Відьмак 3: Дикий Гін»</h4>\n          </div>\n\n          <a href="#" class="borovik-item__svg-more">\n            <svg width="18" height="18" class="borovik-body__logo">\n              <use href="${n(p)+"#more-vertical"}"></use>\n            </svg>\n          </a>\n        </div>\n\n        <picture class="borovik-item__picture">\n          <a href="#">\n            <img class="borovik-item__img borovik-item__img-witcher" src="${n(H)}" alt="spriggan"\n              loading="lazy">\n          </a>\n        </picture>\n\n        <div class="borovik-item__body borovik-body">\n\n          <div class="author-img">\n            <h5 class="author-img__title">Доменіко Кава</h5>\n            <a class="author-img__link" href="#">Автор малюнку</a>\n          </div>\n\n          <a class="borovik-body__link-myth" href="#">\n            <svg width="18" height="18" class="borovik-body__logo">\n              <use href="${n(p)+"#leading"}"></use>\n            </svg>\n            Релікти\n          </a>\n\n          <p class="borovik-body__text">Боровик (пол. Borowy, англ. Spriggan) — бестія, яка фігурує в книжках\n            Сапковського\n            та у всесвіті Відьмака.</p>\n\n\n          <table class="borovik-witcher__table">\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Клас</td>\n              <td class="borovik-witcher__data">Релікти</td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Місце появи/\n                <br> Проживання\n              </td>\n              <td class="borovik-witcher__data">Морвудд</td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Вразливість</td>\n              <td class="borovik-witcher__data">знак Ігні\n                Двімеритова бомба\n                Мастило проти реліктів</td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Тактика</td>\n              <td class="borovik-witcher__data">Фізичні атаки</td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Трофей</td>\n              <td class="borovik-witcher__data">Так\n                З Гротника після виконання завдання «Ноги холодні як лід»</td>\n            </tr>\n          </table>\n\n        </div>\n      </div>\n      \n      <ol class="main-content__list">\n        <li class="main-content__list-item">\n          <h3 class="main-content__list-title">Зміст</h3>\n        </li>\n        <li class="main-content__list-item">1. Опис, Запис у бестіарії</li>\n        <li class="main-content__list-item">2. Галерея</li>\n        <li class="main-content__list-item">3. Відео</li>\n      </ol>\n\n      <div class="main-content__description description-content">\n\n        <h4 class="description-content__title">Гра «Відьмак 3: Дикий Гін»,\n          <br> Запис у бестіарії\n        </h4>\n\n        <p class="description-content__text">\n          Боровики — підвид лісовиків. Натрапити на них можна в недоступних безлюдних хащах. Якщо їх не злити, вони\n          можуть і не напасти, але в гніві ці істоти страшні. Боровик дуже кремезний, завдає величезної шкоди, а м’яса\n          зжерти може більше, ніж на доброму весіллі подають.\n        </p>\n        <p class="description-content__text">\n          Кожний боровик панує над рослинами й нерозривно пов’язаний із ними. Якщо хтось нищить зелень у володіннях\n          боровика, потвора обов’язково прийде й покарає порушника спокою.\n        </p>\n        <p class="description-content__text">\n          У бою боровик управно користується своїми дужими кінцівками. Атакує він стрімко, що, беручи до уваги його\n          масивність, може спричинити клопіт. Подібна до кори тверда шкіра боровика витримує навіть сильні вдари мечем,\n          а сам він б’є так потужно, що ставити блок не варто й пробувати. Слід пильнувати коріння, яке боровик примушує\n          вилазити з-під землі й хапати ворога. Ця потвора вміє також телепортуватися, раптово з’являючись просто перед\n          супротивником. Бити його Знаком Аард марно, бо жодна сила цього монстра не повалить.\n        </p>\n      </div>`,R.innerHTML=`\n<div class="borovik__gallery-header gallery-borovik">\n<h2 class="gallery-borovik__title">Галерея</h2>\n<p><a class="gallery-borovik__link" href="#">Подивитись всі</a></p>\n</div>\n\n<ul class="gallery-borovik__list">\n<li class="gallery-borovik__item gallery-borovik__item-col">\n  <img class="gallery-borovik__img gallery-borovik__img-col gallery-borovik__img-wicher_col"\n    src="${n(H)}" alt="spriggan">\n</li>\n<li class="gallery-borovik__item">\n  <img class="gallery-borovik__img gallery-borovik__img-wicher_row"\n    src="${n(E)}" alt="borovik-witcher-item-2">\n</li>\n<li class="gallery-borovik__item gallery-borovik__item-row">\n  <img class="gallery-borovik__img gallery-borovik__img-row gallery-borovik__img-wicher_row"\n    src="${n(q)}" alt="borovik-witcher-item-3">\n</li>\n</ul>\n\n<button class="gallery-borovik__btn" type="button">В укр. міфології</button>`}))}();
//# sourceMappingURL=page-borovik.7fb08bec.js.map
