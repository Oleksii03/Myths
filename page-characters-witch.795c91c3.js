!function(){function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},s={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in i)return i[e].exports;if(e in s){var t=s[e];delete s[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){s[e]=t},n.parcelRequired7c6=r),r.register("iE7OH",(function(t,n){var i,s;e(t.exports,"register",(function(){return i}),(function(e){return i=e})),e(t.exports,"resolve",(function(){return s}),(function(e){return s=e}));var r={};i=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)r[t[n]]=e[t[n]]},s=function(e){var t=r[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),r.register("aNJCr",(function(t,n){var i;e(t.exports,"getBundleURL",(function(){return i}),(function(e){return i=e}));var s={};function r(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}i=function(e){var t=s[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return r(e[2])}return"/"}(),s[e]=t),t}})),r("iE7OH").register(JSON.parse('{"cZSED":"page-characters-witch.795c91c3.js","ee16w":"sprite.f421f41b.svg","kTwkG":"white-whitch-1.5727c56a.png","g31Lu":"witch-img-2.203cf1fb.jpg","fOXYa":"witch-img-3.c5598f8a.jpg","2AgKd":"witch-img-4.430298e4.jpg","aueHW":"Yennefer.3107b75e.jpg","khgTe":"Yennefer-img-2.8d0237e4.jpg","g3vEj":"Yennefer-img-3.87418cb0.jpg","145K3":"Yennefer-img-4.c7265524.png"}'));const c=document.querySelector(".js-header-wrapper"),a=document.querySelector(".js-header-container").clientHeight,l=document.querySelector(".js-tab-menu"),o=document.querySelector(".nav-header__list-tab-inner"),d=document.querySelector(".js-tab-list"),_=document.querySelector(".js-svg-rotate"),h=document.querySelector(".js-header-btm-menu"),m=document.querySelector(".js-mob-menu-btn-close"),u=document.querySelector(".js-transform-btn"),g=document.querySelector(".js-mob-menu"),v=document.querySelector(".js-backdrop");function b(e){if(document.body.classList.toggle("is-freeze"),g.classList.toggle("is-hidden-mob-menu"),v.classList.toggle("backdrop--hidden"),!o.classList.contains("is-hidden"))return o.classList.add("is-hidden"),void _.classList.remove("active-rotate")}function y(e){u.classList.toggle("transform-btn")}c.style.height=a+"px",l.addEventListener("click",(e=>{const{target:t}=e;if(g.classList.contains("is-hidden-mob-menu")||(g.classList.add("is-hidden-mob-menu"),v.classList.add("backdrop--hidden"),y(),document.body.classList.remove("is-freeze")),t.classList.contains("dropdown"))return d.classList.toggle("is-hidden"),void _.classList.toggle("active-rotate")})),h.addEventListener("click",b),m.addEventListener("click",(e=>{b(),y(),document.body.classList.remove("is-freeze")})),v.addEventListener("click",(e=>{b(),y(),document.body.classList.remove("is-freeze")})),u.addEventListener("click",y);const f=document.querySelector(".js-backdrop-search");document.querySelector(".js-search-icon").addEventListener("click",(function(e){f.classList.toggle("backdrop-search--hidden"),document.body.style.overflow=document.body.style.overflow?"":"hidden"}));var p;p=r("aNJCr").getBundleURL("cZSED")+r("iE7OH").resolve("ee16w");var k;k=r("aNJCr").getBundleURL("cZSED")+r("iE7OH").resolve("kTwkG");var L;L=r("aNJCr").getBundleURL("cZSED")+r("iE7OH").resolve("g31Lu");var w;w=r("aNJCr").getBundleURL("cZSED")+r("iE7OH").resolve("fOXYa");var E;E=r("aNJCr").getBundleURL("cZSED")+r("iE7OH").resolve("2AgKd");var S;S=r("aNJCr").getBundleURL("cZSED")+r("iE7OH").resolve("aueHW");var j;j=r("aNJCr").getBundleURL("cZSED")+r("iE7OH").resolve("khgTe");var H;H=r("aNJCr").getBundleURL("cZSED")+r("iE7OH").resolve("g3vEj");var q;q=r("aNJCr").getBundleURL("cZSED")+r("iE7OH").resolve("145K3");const x=document.querySelector(".characters-btn__witcher"),N=document.querySelector(".jscharacters-btn-ukr"),R=document.querySelector(".js-characters-btn-box"),O=document.querySelector(".js-characters-title"),$=document.querySelector(".js-main-content"),C=document.querySelector(".js-gallery-character"),T=document.querySelector(".js-backdrop-witche-gallery"),z=document.querySelector(".js-backdrop-yennefer-gallery"),A=document.querySelector(".js-witche-modal-img"),D=document.querySelector(".js-yennefer-modal-img"),F=document.querySelector(".js-witche-modal-video"),U=document.querySelector(".js-yennefer-modal-video"),J=document.querySelector(".js-backdrop-close"),M=document.querySelector(".js-backdrop-close-yennefer");function Y(e){R.classList.remove("characters-btn__active"),N.classList.add("characters-btn__active"),x.classList.remove("characters-btn__active"),O.textContent="Чародійки (Відьми)",$.innerHTML=`\n  <div class="bestiary-list__item borovik-item">\n  <div class="borovik-item__heder">\n    <svg width="40" height="40" class="borovik-item__logo">\n      <use href="${t(p)+"#icon-ukr-characters"}"></use>\n    </svg>\n\n    <div class="borovik-item__content">\n      <h3 class="borovik-item__title">Чародійка</h3>\n      <h4 class="borovik-item__sub-title">Українська міфологія</h4>\n    </div>\n\n    <a href="#" class="borovik-item__svg-more">\n      <svg width="18" height="18" class="borovik-body__logo">\n        <use href="${t(p)+"#more-vertical"}"></use>\n      </svg>\n    </a>\n  </div>\n\n  <picture class="borovik-item__picture">\n    <a href="#gallery">\n      <img class="borovik-item__img whitch-item__img" src="${t(k)}" alt="whitch"\n        loading="lazy">\n    </a>\n  </picture>\n\n  <div class="borovik-item__body borovik-body">\n\n    <div class="author-img">\n      <h5 class="author-img__title">playgroundai.com (network)</h5>\n      <a class="author-img__link" href="#">Автор малюнку</a>\n    </div>\n\n    <a class="borovik-body__link-myth" href="#">\n      <svg width="18" height="18" class="borovik-body__logo">\n        <use href="${t(p)+"#icon-profile"}"></use>\n      </svg>\n      Чаклунки/Відьми\n    </a>\n\n    <p class="borovik-body__text">\n      Ві́дьма, чаклу́нка (чародійка) — жінка, наділена чаклунськими здібностями, котрі отримала від природи, або навчилася чаклувати.\n    </p>\n\n  </div>\n</div>\n\n<ol class="main-content__list">\n  <li class="main-content__list-item">\n    <h3 class="main-content__list-title">Зміст</h3>\n  </li>\n  <li class="main-content__list-item">1. Опис, міфи та легенди</li>\n  <li class="main-content__list-item">2. Галерея</li>\n</ol>\n\n<div class="main-content__description description-content">\n\n<h4 class="description-content__title">Опис</h4>\n\n<p class="description-content__text">\n  Часто постаті відьом і чарівниць (чарівників) зливаються в\n  один образ, та насправді ці образи, хоч і стоять в одному\n  семантичному ряду, не є тотожними. \n</p>\n<p class="description-content__text">\n  Чарівниці також поділялися на дві категорії: вроджені та\n  навчені. Вроджена чарівниця робила добро і зло людям,\n  дивлячись, під якою планетою вона народилася, а навчена —\n  та, що уклала угоду з чортом, — мала робити тільки зло.\n  Чарівниця за допомогою зілля та заклинань могла заважати\n  людині в усіх справах: могла роз’єднати сім’ю, займатися\n  любовною магією, погіршувати здоров’я, спричинити смерть\n  чи, навпаки, привертати вдачу.\n</p>\n<p class="description-content__text">\n  Чарівниця діяла із власної вигоди та бажання, а діяльність\n  відьом мала більш визначений характер: вони мусили робити\n  те, що передбачала їм їхня природа. \n</p>\n<p class="description-content__text">\n  Спільним фактором, який об’єднує знахарок, відьом, чарівниць,\n  є те, що вони не могли померти без передачі своїх знань. \n</p>\n<p class="description-content__text">\n  Грані між образами знахарки, ворожки, чарівниці, чаклунки, відьми і їх чол. відповідниками є тонкими. Відмінний за характером, функціями, а певною мірою і за походженням образ чаклуна.\n  В укр. нар. віруваннях постать чаклуна була пов’язана з колом уявлень про вовкулак та упирів.\n</p>\n</div>`,C.innerHTML=`\n      <div class="borovik__gallery-header gallery-borovik">\n        <h2 class="gallery-borovik__title">Галерея</h2>\n        <p><a class="gallery-borovik__link" href="#">Подивитись всі</a></p>\n      </div>\n      \n      <ul id="gallery" class="gallery-character__list js-gallery-whitch">\n\n        <li class="gallery-character__item">\n          <img data-id="1" class="gallery-character__img" src="${t(k)}"\n            alt="whitch-img">\n        </li>\n\n        <li class="gallery-character__item">\n          <img data-id="2" class="gallery-character__img gallery-whitch__img" src="${t(L)}"\n            alt="whitch-img-2">\n        </li>\n\n        <li class="gallery-character__item">\n          <img data-id="3" class="gallery-character__img gallery-whitch__img" src="${t(w)}" alt="whitch-img-3">\n        </li>\n\n        <li class="gallery-character__item">\n          <img data-id="4" class="gallery-character__img" src="${t(E)}"\n            alt="whitch-img-4">\n        </li>\n      </ul>\n\n      <button class="gallery-borovik__btn js-gallery-btn-wich" type="button">У грі Відьмак</button>`,document.querySelector(".js-gallery-btn-wich").addEventListener("click",(()=>{B()}));document.querySelector(".js-gallery-whitch").addEventListener("click",(e=>{const{target:t}=e;if("IMG"!==t.tagName)return;T.classList.remove("backdrop-borovik-gallery--hidden"),document.body.classList.add("is-freeze");const n=Number(t.dataset.id);1===n?(A.closest("picture").hidden=!0,F.hidden=!1,Z.classList.add("is-hidden"),G.classList.add("is-hidden")):(Z.classList.remove("is-hidden"),G.classList.remove("is-hidden")),A.src=t.src;const i=document.querySelector(".js-small-gallery");i.addEventListener("click",(e=>{const{target:t,currentTarget:n}=e;if("IMG"!==t.tagName)return;A.style.cssText="width:100%; height:100%;";1===Number(t.closest("LI").dataset.id)?(A.closest("picture").hidden=!0,F.hidden=!1,Z.classList.add("is-hidden"),G.classList.add("is-hidden")):(A.closest("picture").hidden=!1,F.hidden=!0,Z.classList.remove("is-hidden"),G.classList.remove("is-hidden")),A.src=t.src,[...n.children].forEach((e=>{e.classList.contains("small-img-active")&&e.classList.remove("small-img-active")})),t.closest(".small-gallery__item").classList.add("small-img-active")})),[...i.children].forEach((e=>{const t=Number(e.dataset.id);e.classList.contains("small-img-active")&&e.classList.remove("small-img-active"),t===n&&e.classList.add("small-img-active")}))}))}function B(e){R.classList.add("characters-btn__active"),N.classList.remove("characters-btn__active"),x.classList.add("characters-btn__active"),O.textContent="Чародійка, Йеннефер",$.innerHTML=`\n  <div class="bestiary-list__item borovik-item">\n        <div class="borovik-item__heder">\n          <svg width="40" height="40" class="yennefer-item__logo">\n            <use href="${t(p)+"#icon-Magic-center"}"></use>\n          </svg>\n\n          <div class="borovik-item__content">\n            <h3 class="borovik-item__title">Йеннефер</h3>\n            <h4 class="borovik-item__sub-title">Гра «Відьмак 3: Дикий Гін»</h4>\n          </div>\n\n          <a href="#" class="borovik-item__svg-more">\n            <svg width="18" height="18" class="borovik-body__logo">\n              <use href="${t(p)+"#more-vertical"}"></use>\n            </svg>\n          </a>\n        </div>\n\n        <picture class="borovik-item__picture">\n          <a href="#gallery-w">\n            <img class="borovik-item__img yennefer-item__img" src="${t(S)}" alt="Geralt"\n              loading="lazy">\n          </a>\n        </picture>\n\n        <div class="borovik-item__body borovik-body">\n\n          <div class="author-img">\n            <h5 class="author-img__title">Гжегож Рутковський</h5>\n            <a class="author-img__link" href="#">Автор малюнку</a>\n          </div>\n\n          <a class="borovik-body__link-myth" href="#">\n            <svg width="18" height="18" class="borovik-body__logo">\n              <use href="${t(p)+"#icon-profile"}"></use>\n            </svg>\n            Чародійки\n          </a>\n\n          <p class="borovik-body__text">\n            Йеннефер із Венґерберґу (пол. Yennefer z Vengerbergu) — одна з головних героїнь літературного циклу, написаного Анджеєм Сапковським, і його адаптацій.\n          </p>\n\n          <table class="borovik-witcher__table">\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Раса</td>\n              <td class="borovik-witcher__data">Людина (квартерон)</td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Стать</td>\n              <td class="borovik-witcher__data">Жіноча</td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Нація</td>\n              <td class="borovik-witcher__data">Едірнка</td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td></td>\n              <td class="characters-witcher__table_title"><b>Особові дані</b></td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Професія</td>\n              <td class="borovik-witcher__data">Чародійка</td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Належність</td>\n              <td class="borovik-witcher__data">Рада Чародіїв Ложа, Чародійок</td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Здібності</td>\n              <td class="borovik-witcher__data">Магія</td>\n            </tr>\n\n          </table>\n\n        </div>\n      </div>\n      \n      <ol class="main-content__list">\n        <li class="main-content__list-item">\n          <h3 class="main-content__list-title">Зміст</h3>\n        </li>\n        <li class="main-content__list-item">1. Опис, Запис у журналі</li>\n        <li class="main-content__list-item">2. Галерея</li>\n      </ol>\n\n      <div class="main-content__description description-content">\n\n        <h4 class="description-content__title">Гра «Відьмак 3: Дикий Гін»</h4>\n\n        <p class="description-content__text">Запис у журналі</p>\n        <p class="description-content__text">\n          Вперше відьмака спіткав круковолосу чарівницею добрих років\n          двадцять тому. Їхнє знайомство розпочалося пригодою з\n          джином, а почуття — бажання промовлене тоді Ґеральтом,\n          нерозривно сплело їхні долі разом.        \n        </p>\n        <p class="description-content__text">\n          Втім їхні стосунки виявилися непростими — сповненими\n          злетів, падінь, криз та розставань. Кохання Ґеральта та Йен\n          було безсумнівним підтвердженням того, що «протилежності\n          притягуються».\n        </p>\n        <p class="description-content__text">\n          Обставини першої зустрічі після років розлуки з Йеннефер\n          були безперечно дивними. Чарівниця не лише виявилися цілою\n          та здоровою, але й користувалося підтримкою несподіваного\n          союзника — Нільфгардської імперії.\n        </p>\n        <p class="description-content__text">\n          Йеннефер завжди вважала, що мета виправдовує засоби. Коли\n          стало зрозуміло, що порятунок Цірі потребує допомоги\n          Філіппи Ейльгарт та інших чарівниць горезвісної Ложі,\n          Йеннефер забула давні образи та переконала Емгира\n          амністувати їх.        \n        </p>\n      </div>`,C.innerHTML=`\n  <div class="borovik__gallery-header gallery-borovik">\n    <h2 class="gallery-borovik__title">Галерея</h2>\n    <p><a class="gallery-borovik__link" href="#">Подивитись всі</a></p>\n  </div>\n  \n  <ul id="gallery-w" class="gallery-character__list js-gallery-yennefer">\n\n    <li class="gallery-character__item">\n      <img data-id="1" class="gallery-character__img" src="${t(S)}"\n        alt="Yennefer">\n    </li>\n\n    <li class="gallery-character__item">\n      <img data-id="2" class="gallery-character__img gallery-character__img_w" src="${t(j)}"\n        alt="Yennefer-item-2">\n    </li>\n\n    <li class="gallery-character__item">\n      <img data-id="3" class="gallery-character__img gallery-character__img_w" src="${t(H)}" alt="Yennefer-item-3">\n    </li>\n\n    <li class="gallery-character__item">\n      <img data-id="4" class="gallery-character__img gallery-character__img_fill" src="${t(q)}"\n        alt="Yennefer-item-4">\n    </li>\n  </ul>\n\n  <button class="gallery-borovik__btn js-gallery-btn-ukr" type="button">В укр. міфології</button>`,document.querySelector(".js-gallery-btn-ukr").addEventListener("click",(()=>{Y()}));document.querySelector(".js-gallery-yennefer").addEventListener("click",(e=>{const{target:t}=e;if("IMG"!==t.tagName)return;document.body.classList.add("is-freeze"),z.classList.remove("backdrop-borovik-gallery--hidden");const n=Number(t.dataset.id);1===n&&(D.closest("picture").hidden=!0,U.hidden=!1),D.src=t.src;const i=document.querySelector(".js-small-gallery-yennefer");i.addEventListener("click",(e=>{const{target:t,currentTarget:n}=e;if("IMG"!==t.tagName)return;1===Number(t.closest("LI").dataset.id)?(D.closest("picture").hidden=!0,U.hidden=!1):(D.closest("picture").hidden=!1,U.hidden=!0),D.src=t.src,[...n.children].forEach((e=>{e.classList.contains("small-img-active")&&e.classList.remove("small-img-active")})),t.closest(".small-gallery__item").classList.add("small-img-active")})),[...i.children].forEach((e=>{const t=Number(e.dataset.id);e.classList.contains("small-img-active")&&e.classList.remove("small-img-active"),t===n&&e.classList.add("small-img-active")}))}))}N.addEventListener("click",Y),x.addEventListener("click",B),Y(),J.addEventListener("click",(e=>{A.closest("picture").hidden=!1,F.hidden=!0,T.classList.add("backdrop-borovik-gallery--hidden"),document.body.classList.remove("is-freeze")})),M.addEventListener("click",(()=>{D.closest("picture").hidden=!1,U.hidden=!0,z.classList.add("backdrop-borovik-gallery--hidden"),document.body.classList.remove("is-freeze")}));const Z=document.querySelector(".js-btn-plus"),G=document.querySelector(".js-btn-minus"),I=document.querySelector(".backdrop-borovik__container");Z.addEventListener("click",(function(){I.offsetWidth<=360&&(A.style.objectFit="cover",A.style.objectPosition="top",console.log("hello"));let e=A.offsetHeight,t=A.offsetWidth;t+=25,e+=50,A.style.width=t+"px",A.style.height=e+"px"})),G.addEventListener("click",(function(){A.style.objectPosition="center";let e=A.offsetHeight,t=A.offsetWidth;t-=25,e-=50,A.style.width=t+"px",A.style.height=e+"px"}))}();
//# sourceMappingURL=page-characters-witch.795c91c3.js.map