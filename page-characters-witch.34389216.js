function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},r={},s=n.parcelRequired7c6;null==s&&((s=function(e){if(e in i)return i[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){r[e]=t},n.parcelRequired7c6=s),s.register("kyEFX",(function(t,n){var i,r;e(t.exports,"register",(function(){return i}),(function(e){return i=e})),e(t.exports,"resolve",(function(){return r}),(function(e){return r=e}));var s={};i=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)s[t[n]]=e[t[n]]},r=function(e){var t=s[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),s("kyEFX").register(JSON.parse('{"400dn":"page-characters-witch.34389216.js","lp5u4":"sprite.45ec0c9d.svg","76WeU":"white-whitch-1.5727c56a.png","a8Jkj":"witch-img-2.203cf1fb.jpg","3RdpI":"witch-img-3.c5598f8a.jpg","2Ax9e":"witch-img-4.430298e4.jpg","fNHIx":"Yennefer.3107b75e.jpg","aDQJ4":"Yennefer-img-2.8d0237e4.jpg","5XwMK":"Yennefer-img-3.87418cb0.jpg","3vVXS":"Yennefer-img-4.c7265524.png"}'));const a=document.querySelector(".js-header-wrapper"),c=document.querySelector(".js-header-container").clientHeight,l=document.querySelector(".js-tab-menu"),o=document.querySelector(".nav-header__list-tab-inner"),d=document.querySelector(".js-tab-list"),_=document.querySelector(".js-svg-rotate"),m=document.querySelector(".js-header-btm-menu"),h=document.querySelector(".js-mob-menu-btn-close"),g=document.querySelector(".js-transform-btn"),u=document.querySelector(".js-mob-menu"),v=document.querySelector(".js-backdrop");function b(e){if(document.body.classList.toggle("is-freeze"),u.classList.toggle("is-hidden-mob-menu"),v.classList.toggle("backdrop--hidden"),!o.classList.contains("is-hidden"))return o.classList.add("is-hidden"),void _.classList.remove("active-rotate")}function y(e){g.classList.toggle("transform-btn")}a.style.height=c+"px",l.addEventListener("click",(e=>{const{target:t}=e;if(u.classList.contains("is-hidden-mob-menu")||(u.classList.add("is-hidden-mob-menu"),v.classList.add("backdrop--hidden"),y(),document.body.classList.remove("is-freeze")),t.classList.contains("dropdown"))return d.classList.toggle("is-hidden"),void _.classList.toggle("active-rotate")})),m.addEventListener("click",b),h.addEventListener("click",(e=>{b(),y(),document.body.classList.remove("is-freeze")})),v.addEventListener("click",(e=>{b(),y(),document.body.classList.remove("is-freeze")})),g.addEventListener("click",y);const p=document.querySelector(".js-backdrop-search");document.querySelector(".js-search-icon").addEventListener("click",(function(e){p.classList.toggle("backdrop-search--hidden"),document.body.style.overflow=document.body.style.overflow?"":"hidden"}));var k;k=new URL(s("kyEFX").resolve("lp5u4"),import.meta.url).toString();var f;f=new URL(s("kyEFX").resolve("76WeU"),import.meta.url).toString();var w;w=new URL(s("kyEFX").resolve("a8Jkj"),import.meta.url).toString();var L;L=new URL(s("kyEFX").resolve("3RdpI"),import.meta.url).toString();var S;S=new URL(s("kyEFX").resolve("2Ax9e"),import.meta.url).toString();var j;j=new URL(s("kyEFX").resolve("fNHIx"),import.meta.url).toString();var E;E=new URL(s("kyEFX").resolve("aDQJ4"),import.meta.url).toString();var q;q=new URL(s("kyEFX").resolve("5XwMK"),import.meta.url).toString();var x;x=new URL(s("kyEFX").resolve("3vVXS"),import.meta.url).toString();const H=document.querySelector(".characters-btn__witcher"),R=document.querySelector(".jscharacters-btn-ukr"),F=document.querySelector(".js-characters-btn-box"),$=document.querySelector(".js-characters-title"),N=document.querySelector(".js-main-content"),X=document.querySelector(".js-gallery-character"),M=document.querySelector(".js-backdrop-witche-gallery"),U=document.querySelector(".js-backdrop-yennefer-gallery"),A=document.querySelector(".js-witche-modal-img"),z=document.querySelector(".js-yennefer-modal-img"),I=document.querySelector(".js-witche-modal-video"),T=document.querySelector(".js-yennefer-modal-video"),Y=document.querySelector(".js-backdrop-close"),O=document.querySelector(".js-backdrop-close-yennefer");function G(e){F.classList.remove("characters-btn__active"),R.classList.add("characters-btn__active"),H.classList.remove("characters-btn__active"),$.textContent="Чародійки (Відьми)",N.innerHTML=`\n  <div class="bestiary-list__item borovik-item">\n  <div class="borovik-item__heder">\n    <svg width="40" height="40" class="borovik-item__logo">\n      <use href="${t(k)+"#icon-ukr-characters"}"></use>\n    </svg>\n\n    <div class="borovik-item__content">\n      <h3 class="borovik-item__title">Чародійка</h3>\n      <h4 class="borovik-item__sub-title">Українська міфологія</h4>\n    </div>\n\n    <a href="#" class="borovik-item__svg-more">\n      <svg width="18" height="18" class="borovik-body__logo">\n        <use href="${t(k)+"#more-vertical"}"></use>\n      </svg>\n    </a>\n  </div>\n\n  <picture class="borovik-item__picture">\n    <a href="#">\n      <img class="borovik-item__img whitch-item__img" src="${t(f)}" alt="whitch"\n        loading="lazy">\n    </a>\n  </picture>\n\n  <div class="borovik-item__body borovik-body">\n\n    <div class="author-img">\n      <h5 class="author-img__title">playgroundai.com (network)</h5>\n      <a class="author-img__link" href="#">Автор малюнку</a>\n    </div>\n\n    <a class="borovik-body__link-myth" href="#">\n      <svg width="18" height="18" class="borovik-body__logo">\n        <use href="${t(k)+"#icon-profile"}"></use>\n      </svg>\n      Чаклунки/Відьми\n    </a>\n\n    <p class="borovik-body__text">\n      Ві́дьма, чаклу́нка (чародійка) — жінка, наділена чаклунськими здібностями, котрі отримала від природи, або навчилася чаклувати.\n    </p>\n\n  </div>\n</div>\n\n<ol class="main-content__list">\n  <li class="main-content__list-item">\n    <h3 class="main-content__list-title">Зміст</h3>\n  </li>\n  <li class="main-content__list-item">1. Опис, міфи та легенди</li>\n  <li class="main-content__list-item">2. Галерея</li>\n</ol>\n\n<div class="main-content__description description-content">\n\n<h4 class="description-content__title">Опис</h4>\n\n<p class="description-content__text">\n  Часто постаті відьом і чарівниць (чарівників) зливаються в\n  один образ, та насправді ці образи, хоч і стоять в одному\n  семантичному ряду, не є тотожними. \n</p>\n<p class="description-content__text">\n  Чарівниці також поділялися на дві категорії: вроджені та\n  навчені. Вроджена чарівниця робила добро і зло людям,\n  дивлячись, під якою планетою вона народилася, а навчена —\n  та, що уклала угоду з чортом, — мала робити тільки зло.\n  Чарівниця за допомогою зілля та заклинань могла заважати\n  людині в усіх справах: могла роз’єднати сім’ю, займатися\n  любовною магією, погіршувати здоров’я, спричинити смерть\n  чи, навпаки, привертати вдачу.\n</p>\n<p class="description-content__text">\n  Чарівниця діяла із власної вигоди та бажання, а діяльність\n  відьом мала більш визначений характер: вони мусили робити\n  те, що передбачала їм їхня природа. \n</p>\n<p class="description-content__text">\n  Спільним фактором, який об’єднує знахарок, відьом, чарівниць,\n  є те, що вони не могли померти без передачі своїх знань. \n</p>\n<p class="description-content__text">\n  Грані між образами знахарки, ворожки, чарівниці, чаклунки, відьми і їх чол. відповідниками є тонкими. Відмінний за характером, функціями, а певною мірою і за походженням образ чаклуна.\n  В укр. нар. віруваннях постать чаклуна була пов’язана з колом уявлень про вовкулак та упирів.\n</p>\n</div>`,X.innerHTML=`\n      <div class="borovik__gallery-header gallery-borovik">\n        <h2 class="gallery-borovik__title">Галерея</h2>\n        <p><a class="gallery-borovik__link" href="#">Подивитись всі</a></p>\n      </div>\n      \n      <ul class="gallery-character__list js-gallery-whitch">\n\n        <li class="gallery-character__item">\n          <img data-id="1" class="gallery-character__img" src="${t(f)}"\n            alt="whitch-img">\n        </li>\n\n        <li class="gallery-character__item">\n          <img data-id="2" class="gallery-character__img gallery-whitch__img" src="${t(w)}"\n            alt="whitch-img-2">\n        </li>\n\n        <li class="gallery-character__item">\n          <img data-id="3" class="gallery-character__img gallery-whitch__img" src="${t(L)}" alt="whitch-img-3">\n        </li>\n\n        <li class="gallery-character__item">\n          <img data-id="4" class="gallery-character__img" src="${t(S)}"\n            alt="whitch-img-4">\n        </li>\n      </ul>\n\n      <button class="gallery-borovik__btn js-gallery-btn-wich" type="button">У грі Відьмак</button>`,document.querySelector(".js-gallery-btn-wich").addEventListener("click",(()=>{J()}));document.querySelector(".js-gallery-whitch").addEventListener("click",(e=>{const{target:t}=e;if("IMG"!==t.tagName)return;M.classList.remove("backdrop-borovik-gallery--hidden"),document.body.classList.add("is-freeze");const n=Number(t.dataset.id);1===n&&(A.closest("picture").hidden=!0,I.hidden=!1),A.src=t.src;const i=document.querySelector(".js-small-gallery");i.addEventListener("click",(e=>{const{target:t,currentTarget:n}=e;if("IMG"!==t.tagName)return;1===Number(t.closest("LI").dataset.id)?(A.closest("picture").hidden=!0,I.hidden=!1):(A.closest("picture").hidden=!1,I.hidden=!0),A.src=t.src,[...n.children].forEach((e=>{e.classList.contains("small-img-active")&&e.classList.remove("small-img-active")})),t.closest(".small-gallery__item").classList.add("small-img-active")})),[...i.children].forEach((e=>{const t=Number(e.dataset.id);e.classList.contains("small-img-active")&&e.classList.remove("small-img-active"),t===n&&e.classList.add("small-img-active")}))}))}function J(e){F.classList.add("characters-btn__active"),R.classList.remove("characters-btn__active"),H.classList.add("characters-btn__active"),$.textContent="Чародійка, Йеннефер",N.innerHTML=`\n  <div class="bestiary-list__item borovik-item">\n        <div class="borovik-item__heder">\n          <svg width="40" height="40" class="yennefer-item__logo">\n            <use href="${t(k)+"#icon-Magic-center"}"></use>\n          </svg>\n\n          <div class="borovik-item__content">\n            <h3 class="borovik-item__title">Йеннефер</h3>\n            <h4 class="borovik-item__sub-title">Гра «Відьмак 3: Дикий Гін»</h4>\n          </div>\n\n          <a href="#" class="borovik-item__svg-more">\n            <svg width="18" height="18" class="borovik-body__logo">\n              <use href="${t(k)+"#more-vertical"}"></use>\n            </svg>\n          </a>\n        </div>\n\n        <picture class="borovik-item__picture">\n          <a href="#">\n            <img class="borovik-item__img yennefer-item__img" src="${t(j)}" alt="Geralt"\n              loading="lazy">\n          </a>\n        </picture>\n\n        <div class="borovik-item__body borovik-body">\n\n          <div class="author-img">\n            <h5 class="author-img__title">Гжегож Рутковський</h5>\n            <a class="author-img__link" href="#">Автор малюнку</a>\n          </div>\n\n          <a class="borovik-body__link-myth" href="#">\n            <svg width="18" height="18" class="borovik-body__logo">\n              <use href="${t(k)+"#icon-profile"}"></use>\n            </svg>\n            Чародійки\n          </a>\n\n          <p class="borovik-body__text">\n            Йеннефер із Венґерберґу (пол. Yennefer z Vengerbergu) — одна з головних героїнь літературного циклу, написаного Анджеєм Сапковським, і його адаптацій.\n          </p>\n\n          <table class="borovik-witcher__table">\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Раса</td>\n              <td class="borovik-witcher__data">Людина (квартерон)</td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Стать</td>\n              <td class="borovik-witcher__data">Жіноча</td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Нація</td>\n              <td class="borovik-witcher__data">Едірнка</td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td></td>\n              <td class="characters-witcher__table_title"><b>Особові дані</b></td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Професія</td>\n              <td class="borovik-witcher__data">Чародійка</td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Належність</td>\n              <td class="borovik-witcher__data">Рада Чародіїв Ложа, Чародійок</td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Здібності</td>\n              <td class="borovik-witcher__data">Магія</td>\n            </tr>\n\n          </table>\n\n        </div>\n      </div>\n      \n      <ol class="main-content__list">\n        <li class="main-content__list-item">\n          <h3 class="main-content__list-title">Зміст</h3>\n        </li>\n        <li class="main-content__list-item">1. Опис, Запис у журналі</li>\n        <li class="main-content__list-item">2. Галерея</li>\n      </ol>\n\n      <div class="main-content__description description-content">\n\n        <h4 class="description-content__title">Гра «Відьмак 3: Дикий Гін»</h4>\n\n        <p class="description-content__text">Запис у журналі</p>\n        <p class="description-content__text">\n          Вперше відьмака спіткав круковолосу чарівницею добрих років\n          двадцять тому. Їхнє знайомство розпочалося пригодою з\n          джином, а почуття — бажання промовлене тоді Ґеральтом,\n          нерозривно сплело їхні долі разом.        \n        </p>\n        <p class="description-content__text">\n          Втім їхні стосунки виявилися непростими — сповненими\n          злетів, падінь, криз та розставань. Кохання Ґеральта та Йен\n          було безсумнівним підтвердженням того, що «протилежності\n          притягуються».\n        </p>\n        <p class="description-content__text">\n          Обставини першої зустрічі після років розлуки з Йеннефер\n          були безперечно дивними. Чарівниця не лише виявилися цілою\n          та здоровою, але й користувалося підтримкою несподіваного\n          союзника — Нільфгардської імперії.\n        </p>\n        <p class="description-content__text">\n          Йеннефер завжди вважала, що мета виправдовує засоби. Коли\n          стало зрозуміло, що порятунок Цірі потребує допомоги\n          Філіппи Ейльгарт та інших чарівниць горезвісної Ложі,\n          Йеннефер забула давні образи та переконала Емгира\n          амністувати їх.        \n        </p>\n      </div>`,X.innerHTML=`\n  <div class="borovik__gallery-header gallery-borovik">\n    <h2 class="gallery-borovik__title">Галерея</h2>\n    <p><a class="gallery-borovik__link" href="#">Подивитись всі</a></p>\n  </div>\n  \n  <ul class="gallery-character__list js-gallery-yennefer">\n\n    <li class="gallery-character__item">\n      <img data-id="1" class="gallery-character__img" src="${t(j)}"\n        alt="Yennefer">\n    </li>\n\n    <li class="gallery-character__item">\n      <img data-id="2" class="gallery-character__img gallery-character__img_w" src="${t(E)}"\n        alt="Yennefer-item-2">\n    </li>\n\n    <li class="gallery-character__item">\n      <img data-id="3" class="gallery-character__img gallery-character__img_w" src="${t(q)}" alt="Yennefer-item-3">\n    </li>\n\n    <li class="gallery-character__item">\n      <img data-id="4" class="gallery-character__img gallery-character__img_fill" src="${t(x)}"\n        alt="Yennefer-item-4">\n    </li>\n  </ul>\n\n  <button class="gallery-borovik__btn js-gallery-btn-ukr" type="button">В укр. міфології</button>`,document.querySelector(".js-gallery-btn-ukr").addEventListener("click",(()=>{G()}));document.querySelector(".js-gallery-yennefer").addEventListener("click",(e=>{const{target:t}=e;if("IMG"!==t.tagName)return;document.body.classList.add("is-freeze"),U.classList.remove("backdrop-borovik-gallery--hidden");const n=Number(t.dataset.id);1===n&&(z.closest("picture").hidden=!0,T.hidden=!1),z.src=t.src;const i=document.querySelector(".js-small-gallery-yennefer");i.addEventListener("click",(e=>{const{target:t,currentTarget:n}=e;if("IMG"!==t.tagName)return;1===Number(t.closest("LI").dataset.id)?(z.closest("picture").hidden=!0,T.hidden=!1):(z.closest("picture").hidden=!1,T.hidden=!0),z.src=t.src,[...n.children].forEach((e=>{e.classList.contains("small-img-active")&&e.classList.remove("small-img-active")})),t.closest(".small-gallery__item").classList.add("small-img-active")})),[...i.children].forEach((e=>{const t=Number(e.dataset.id);e.classList.contains("small-img-active")&&e.classList.remove("small-img-active"),t===n&&e.classList.add("small-img-active")}))}))}R.addEventListener("click",G),H.addEventListener("click",J),G(),Y.addEventListener("click",(e=>{A.closest("picture").hidden=!1,I.hidden=!0,M.classList.add("backdrop-borovik-gallery--hidden"),document.body.classList.remove("is-freeze")})),O.addEventListener("click",(()=>{z.closest("picture").hidden=!1,T.hidden=!0,U.classList.add("backdrop-borovik-gallery--hidden"),document.body.classList.remove("is-freeze")}));
//# sourceMappingURL=page-characters-witch.34389216.js.map
