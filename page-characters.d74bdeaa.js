!function(){function e(e,t,s,n){Object.defineProperty(e,t,{get:s,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},r=s.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var s={id:e,exports:{}};return n[e]=s,t.call(s.exports,s,s.exports),s.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){i[e]=t},s.parcelRequired7c6=r),r.register("iE7OH",(function(t,s){var n,i;e(t.exports,"register",(function(){return n}),(function(e){return n=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var r={};n=function(e){for(var t=Object.keys(e),s=0;s<t.length;s++)r[t[s]]=e[t[s]]},i=function(e){var t=r[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),r.register("aNJCr",(function(t,s){var n;e(t.exports,"getBundleURL",(function(){return n}),(function(e){return n=e}));var i={};function r(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}n=function(e){var t=i[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return r(e[2])}return"/"}(),i[e]=t),t}})),r("iE7OH").register(JSON.parse('{"amJDg":"page-characters.d74bdeaa.js","ee16w":"sprite.a48f67ed.svg","bb9Vd":"ukrainskii-kozak-art-1_PC.87b80e1c.jpg","jGpyM":"Petro-Sahaidachnyi.64f93d4f.jpg","byAlp":"Ivan-Bohun.d18fe11c.jpg","2eF2E":"ukrainskii-kozak-Repin.9fd78304.jpg","l2EtK":"Geralt.2b3a04db.jpg","kVVKd":"Geralt-item-2.ef4c9f9c.png","cWlr1":"Geralt-item-3.3cba96e8.png","5U7Md":"Geralt-item-4.a82d18ff.jpg"}'));const c=document.querySelector(".js-header-wrapper"),a=document.querySelector(".js-header-container").clientHeight,l=document.querySelector(".js-tab-menu"),o=document.querySelector(".nav-header__list-tab-inner"),d=document.querySelector(".js-tab-list"),_=document.querySelector(".js-svg-rotate"),m=document.querySelector(".js-header-btm-menu"),h=document.querySelector(".js-mob-menu-btn-close"),u=document.querySelector(".js-transform-btn"),v=document.querySelector(".js-mob-menu"),g=document.querySelector(".js-backdrop");function b(e){if(document.body.classList.toggle("is-freeze"),v.classList.toggle("is-hidden-mob-menu"),g.classList.toggle("backdrop--hidden"),!o.classList.contains("is-hidden"))return o.classList.add("is-hidden"),void _.classList.remove("active-rotate")}function y(e){u.classList.toggle("transform-btn")}c.style.height=a+"px",l.addEventListener("click",(e=>{const{target:t}=e;if(v.classList.contains("is-hidden-mob-menu")||(v.classList.add("is-hidden-mob-menu"),g.classList.add("backdrop--hidden"),y(),document.body.classList.remove("is-freeze")),t.classList.contains("dropdown"))return d.classList.toggle("is-hidden"),void _.classList.toggle("active-rotate")})),m.addEventListener("click",b),h.addEventListener("click",(e=>{b(),y(),document.body.classList.remove("is-freeze")})),g.addEventListener("click",(e=>{b(),y(),document.body.classList.remove("is-freeze")})),u.addEventListener("click",y);const k=document.querySelector(".js-backdrop-search");document.querySelector(".js-search-icon").addEventListener("click",(function(e){k.classList.toggle("backdrop-search--hidden"),document.body.style.overflow=document.body.style.overflow?"":"hidden"}));var p;p=r("aNJCr").getBundleURL("amJDg")+r("iE7OH").resolve("ee16w");var f;f=r("aNJCr").getBundleURL("amJDg")+r("iE7OH").resolve("bb9Vd");var L;L=r("aNJCr").getBundleURL("amJDg")+r("iE7OH").resolve("jGpyM");var w;w=r("aNJCr").getBundleURL("amJDg")+r("iE7OH").resolve("byAlp");var j;j=r("aNJCr").getBundleURL("amJDg")+r("iE7OH").resolve("2eF2E");var E;E=r("aNJCr").getBundleURL("amJDg")+r("iE7OH").resolve("l2EtK");var S;S=r("aNJCr").getBundleURL("amJDg")+r("iE7OH").resolve("kVVKd");var q;q=r("aNJCr").getBundleURL("amJDg")+r("iE7OH").resolve("cWlr1");var H;H=r("aNJCr").getBundleURL("amJDg")+r("iE7OH").resolve("5U7Md");const x=document.querySelector(".characters-btn__witcher"),R=document.querySelector(".jscharacters-btn-ukr"),N=document.querySelector(".js-characters-btn-box"),J=document.querySelector(".js-characters-title"),z=document.querySelector(".js-main-content"),G=document.querySelector(".js-gallery-character"),$=document.querySelector(".js-backdrop-kozak-gallery"),O=document.querySelector(".js-backdrop-witcher-gallery"),C=document.querySelector(".js-kozak-modal-img"),F=document.querySelector(".js-witcher-modal-img"),M=document.querySelector(".js-kozak-modal-video"),U=document.querySelector(".js-witcher-modal-video"),A=document.querySelector(".js-backdrop-close"),B=document.querySelector(".js-backdrop-close-witch");function D(e){N.classList.remove("characters-btn__active"),R.classList.add("characters-btn__active"),x.classList.remove("characters-btn__active"),J.textContent="Козак-характерник",z.innerHTML=`\n  <div class="bestiary-list__item borovik-item">\n  <div class="borovik-item__heder">\n    <svg width="40" height="40" class="borovik-item__logo">\n      <use href="${t(p)+"#icon-ukr-characters"}"></use>\n    </svg>\n\n    <div class="borovik-item__content">\n      <h3 class="borovik-item__title">Козак-характерник</h3>\n      <h4 class="borovik-item__sub-title">Українська міфологія</h4>\n    </div>\n\n    <a href="#" class="borovik-item__svg-more">\n      <svg width="18" height="18" class="borovik-body__logo">\n        <use href="${t(p)+"#more-vertical"}"></use>\n      </svg>\n    </a>\n  </div>\n\n  <picture class="borovik-item__picture">\n    <a href="#gallery-k">\n      <img class="borovik-item__img borovik-item__img-ukr" src="${t(f)}" alt="${t(f)}"\n        loading="lazy">\n    </a>\n  </picture>\n\n  <div class="borovik-item__body borovik-body">\n\n    <a class="borovik-body__link-myth" href="#">\n      <svg width="18" height="18" class="borovik-body__logo">\n        <use href="${t(p)+"#icon-profile"}"></use>\n      </svg>\n      Козаки-характерники\n    </a>\n\n    <p class="borovik-body__text">\n      Характерник — своєрідний духовний наставник, якого козаки шанували і дещо побоювались, хранитель традицій і таємниць бойового мистецтва запорозького козацтва.\n    </p>\n\n  </div>\n</div>\n\n<ol class="main-content__list">\n  <li class="main-content__list-item">\n    <h3 class="main-content__list-title">Зміст</h3>\n  </li>\n  <li class="main-content__list-item">1. Опис, міфи та легенди</li>\n  <li class="main-content__list-item">2. Галерея</li>\n  <li class="main-content__list-item">3. Відомі козаки-характерники</li>\n</ol>\n\n<div class="main-content__description description-content">\n\n<h4 class="description-content__title">Опис</h4>\n\n<p class="description-content__text">\n  У циклі фентезійних романів та оповідань «Відьмак»\n  польського письменника Анджея Сапковського відьмаки — це\n  найманці-мутанти з надприродними здібностями, які \n  володіють магією та захищають людей від чудовиськ та інших \n  темних сил.  \n</p>\n<p class="description-content__text">\n  Існує також версія, що образ був узятий з\n  козака-характерника.\n</p>\n<p class="description-content__text">\n  Характе́рник, химоро́дник, галдо́вник («галдувати» —\n  чаклувати) або заморо́чник (вмів напускати «морок» — туман,\n  сон) — назва віщуна, чаклуна на Запорозькій Січі, який займався\n  не лише ворожінням, але й лікуванням поранених козаків, їх\n  психотерапією та фізичною підготовкою, про що існує ряд\n  історичних свідчень очевидців, народних легенд та переказів.\n</p>\n<p class="description-content__text">\n  Найвідомішим козаком-характерником є козак Мамай — ідеалізований образ козака-мандрівника, воїна, мудреця, казкаря і характерника в одній особі.\n</p>\n<p class="description-content__text">\n  Також, за переказами, майже всі козацькі гетьмани, кошові отамани і відомі полковники були характерниками.\n  Серед них — Дмитро Байда-Вишневецький, Іван Підкова, Самійло Кішка, Северин Наливайко, Петро Сагайдачний, Максим Кривоніс, Іван Богун, Данило Нечай і найбільший характерник з них — Іван Сірко. \n</p>\n<p class="description-content__text">\n  Характерниками ставали, як правило, люди з екстрасенсорними здібностями, зі схильністю до навіювання, гіпнозу, яснобачення, телекінезу чи телепатії.\n</p>\n</div>`,G.innerHTML=`\n      <div class="borovik__gallery-header gallery-borovik">\n        <h2 class="gallery-borovik__title">Галерея</h2>\n        <p class="gallery-borovik__link">Подивитись всі</p>\n      </div>\n      \n      <ul id="gallery-k" class="gallery-character__list js-gallery-character-urk">\n\n        <li class="gallery-character__item">\n          <img data-id="1" class="gallery-character__img" src="${t(f)}"\n            alt="ukrainskii-kozak">\n        </li>\n\n        <li class="gallery-character__item">\n          <img data-id="2" class="gallery-character__img" src="${t(L)}"\n            alt="Petro-Sahaidachnyi">\n        </li>\n\n        <li class="gallery-character__item">\n          <img data-id="3" class="gallery-character__img" src="${t(w)}" alt="Ivan-Bohun">\n        </li>\n\n        <li class="gallery-character__item">\n          <img data-id="4" class="gallery-character__img" src="${t(j)}"\n            alt="ukrainskii-kozak-Repin">\n        </li>\n      </ul>\n\n      <div class="famous-cossacks">\n        <h3 class="famous-cossacks__title">Відомі Козаки-Характерники</h3>\n\n        <ol class="famous-cossacks__list">\n          <li class="famous-cossacks__list-item">1. Петро Сагайдачний</li>\n          <li class="famous-cossacks__list-item">2. Іван Богун</li>\n          <li class="famous-cossacks__list-item">3. Іван Сірко</li>\n        </ol>\n\n      </div>\n\n      <button class="gallery-borovik__btn js-gallery-btn-wich" type="button">У грі Відьмак</button>`,document.querySelector(".js-gallery-btn-wich").addEventListener("click",(()=>{T()}));document.querySelector(".js-gallery-character-urk").addEventListener("click",(e=>{const{target:t}=e;if("IMG"!==t.tagName)return;$.classList.remove("backdrop-borovik-gallery--hidden"),document.body.classList.add("is-freeze");const s=Number(t.dataset.id);1===s&&(C.closest("picture").hidden=!0,M.hidden=!1,I.classList.add("is-hidden"),P.classList.add("is-hidden")),C.src=t.src;const n=document.querySelector(".js-small-gallery");n.addEventListener("click",(e=>{const{target:t,currentTarget:s}=e;if("IMG"!==t.tagName)return;C.style.cssText="width:100%; height:100%;";1===Number(t.closest("LI").dataset.id)?(C.closest("picture").hidden=!0,M.hidden=!1,I.classList.add("is-hidden"),P.classList.add("is-hidden")):(C.closest("picture").hidden=!1,M.hidden=!0,I.classList.remove("is-hidden"),P.classList.remove("is-hidden")),C.src=t.src,[...s.children].forEach((e=>{e.classList.contains("small-img-active")&&e.classList.remove("small-img-active")})),t.closest(".small-gallery__item").classList.add("small-img-active")})),[...n.children].forEach((e=>{const t=Number(e.dataset.id);e.classList.contains("small-img-active")&&e.classList.remove("small-img-active"),t===s&&e.classList.add("small-img-active")}))}))}function T(e){N.classList.add("characters-btn__active"),R.classList.remove("characters-btn__active"),x.classList.add("characters-btn__active"),J.textContent="Відьмак, Ґеральт з Рівії",z.innerHTML=`\n  <div class="bestiary-list__item borovik-item">\n        <div class="borovik-item__heder">\n          <svg width="40" height="40" class="borovik-item__logo">\n            <use href="${t(p)+"#witcher-icon"}"></use>\n          </svg>\n\n          <div class="borovik-item__content">\n            <h3 class="borovik-item__title">Відьмак, Ґеральт з Рівії</h3>\n            <h4 class="borovik-item__sub-title">Гра «Відьмак 3: Дикий Гін»</h4>\n          </div>\n\n          <a href="#" class="borovik-item__svg-more">\n            <svg width="18" height="18" class="borovik-body__logo">\n              <use href="${t(p)+"#more-vertical"}"></use>\n            </svg>\n          </a>\n        </div>\n\n        <picture class="borovik-item__picture">\n          <a href="#gallery-G">\n            <img class="borovik-item__img borovik-item__img-witcher" src="${t(E)}" alt="Geralt"\n              loading="lazy">\n          </a>\n        </picture>\n\n        <div class="borovik-item__body borovik-body">\n\n          <div class="author-img">\n            <h5 class="author-img__title">Марек Мадей</h5>\n            <a class="author-img__link" href="#">Автор малюнку</a>\n          </div>\n\n          <a class="borovik-body__link-myth" href="#">\n            <svg width="18" height="18" class="borovik-body__logo">\n              <use href="${t(p)+"#icon-profile"}"></use>\n            </svg>\n            Відьмаки\n          </a>\n\n          <p class="borovik-body__text">\n            Ґеральт з Рівії, також відомий як «Білий Вовк» та «М' ясник з Блавікену» (пол. Geralt z Rivii; англ. Geralt of Rivia) — головний герой літературного циклу, написаного Анджеєм Сапковським та його адаптацій.\n          </p>\n\n          <table class="borovik-witcher__table">\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Раса</td>\n              <td class="borovik-witcher__data">Людина (Відьмак)</td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Стать</td>\n              <td class="borovik-witcher__data">Чоловіча</td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Нація</td>\n              <td class="borovik-witcher__data">Кедвенець</td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td></td>\n              <td class="characters-witcher__table_title"><b>Особові дані</b></td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Професія</td>\n              <td class="borovik-witcher__data">Відьмак</td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Належність</td>\n              <td class="borovik-witcher__data">Школа Вовка</td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Здібності</td>\n              <td class="borovik-witcher__data">\n                Відьмацькі здібності\n                Фехтування<br>\n                Алхімія<br>\n                Знаки\n              </td>\n            </tr>\n\n          </table>\n\n        </div>\n      </div>\n      \n      <ol class="main-content__list">\n        <li class="main-content__list-item">\n          <h3 class="main-content__list-title">Зміст</h3>\n        </li>\n        <li class="main-content__list-item">1. Опис, Запис у журналі</li>\n        <li class="main-content__list-item">2. Галерея</li>\n      </ol>\n\n      <div class="main-content__description description-content">\n\n        <h4 class="description-content__title">Гра «Відьмак 3: Дикий Гін»</h4>\n\n        <p class="description-content__text">Запис у журналі</p>\n        <p class="description-content__text">\n          Я міг чимало розповісти про це всесвітньо відомому мисливця\n          на чудовиськ, якого Старша Мова кличе Ґвинблейдд, а наш\n          новий, не менш благородний - мова іменує Білим вовком.\n          Ґеральт із Ривії - особистість виняткова. На перший погляд\n          він звичайний рубака, мисливець, нехитрий і простецький\n          виконавець брудних справ. Але тільки придивись — і перед\n          тобою відкриється людина небувалою глибини, незвичайного\n          світогляду і величезного досвіду. На поверхні він замислений і\n          грубуватий мовчун, але трохи глибше лежить ціле море\n          доброти, радості і готовності в будь-який момент прийти на\n          допомогу друзям — і слушною порадою, і гострим мечем. Він\n          різкий, неотесаний і часом ходить в справжніх лахмітті і все ж\n          користується незмінною прихильністю прекрасної статі. \n          Коротко кажучи, Ґеральт - ходяче протиріччя.\n        </p>\n        <p class="description-content__text">\n          Без зайвої скромності можу я вам сказати, що знаю його\n          минуле краще, ніж будь-який з нині живих. Я був біля нього і у\n          важкі часи і в години веселощів, допомагав то мудрою порадою,\n          то гострим словом. \n        </p>\n        <p class="description-content__text">\n          Тому вважаю своїм обов'язком продовжувати літопис і, заради\n          блага і освіти прийдешніх поколінь ...\n        </p>\n      </div>`,G.innerHTML=`\n  <div class="borovik__gallery-header gallery-borovik">\n    <h2 class="gallery-borovik__title">Галерея</h2>\n    <p class="gallery-borovik__link">Подивитись всі</p>\n  </div>\n  \n  <ul id="gallery-G" class="gallery-character__list js-gallery-witcher">\n\n    <li class="gallery-character__item">\n      <img data-id="1" class="gallery-character__img" src="${t(E)}"\n        alt="Geralt">\n    </li>\n\n    <li class="gallery-character__item">\n      <img data-id="2" class="gallery-character__img gallery-character__img_w" src="${t(S)}"\n        alt="Geralt-item-2">\n    </li>\n\n    <li class="gallery-character__item">\n      <img data-id="3" class="gallery-character__img gallery-character__img_w" src="${t(q)}" alt="Geralt-item-3">\n    </li>\n\n    <li class="gallery-character__item">\n      <img data-id="4" class="gallery-character__img gallery-character__img_fill" src="${t(H)}"\n        alt="Geralt-item-4">\n    </li>\n  </ul>\n\n  <button class="gallery-borovik__btn js-gallery-btn-ukr" type="button">В укр. міфології</button>`,document.querySelector(".js-gallery-btn-ukr").addEventListener("click",(()=>{D()}));document.querySelector(".js-gallery-witcher").addEventListener("click",(e=>{const{target:t}=e;if("IMG"!==t.tagName)return;document.body.classList.add("is-freeze"),O.classList.remove("backdrop-borovik-gallery--hidden");const s=Number(t.dataset.id);1===s&&(F.closest("picture").hidden=!0,U.hidden=!1,V.classList.add("is-hidden"),K.classList.add("is-hidden")),F.src=t.src;const n=document.querySelector(".js-small-gallery-w");n.addEventListener("click",(e=>{const{target:t,currentTarget:s}=e;if("IMG"!==t.tagName)return;F.style.cssText="width:100%; height:100%;";1===Number(t.closest("LI").dataset.id)?(F.closest("picture").hidden=!0,U.hidden=!1,V.classList.add("is-hidden"),K.classList.add("is-hidden")):(F.closest("picture").hidden=!1,U.hidden=!0,V.classList.remove("is-hidden"),K.classList.remove("is-hidden")),F.src=t.src,[...s.children].forEach((e=>{e.classList.contains("small-img-active")&&e.classList.remove("small-img-active")})),t.closest(".small-gallery__item").classList.add("small-img-active")})),[...n.children].forEach((e=>{const t=Number(e.dataset.id);e.classList.contains("small-img-active")&&e.classList.remove("small-img-active"),t===s&&e.classList.add("small-img-active")}))}))}console.log(O),R.addEventListener("click",D),x.addEventListener("click",T),D(),A.addEventListener("click",(e=>{C.closest("picture").hidden=!1,M.hidden=!0,$.classList.add("backdrop-borovik-gallery--hidden"),document.body.classList.remove("is-freeze")})),B.addEventListener("click",(()=>{F.closest("picture").hidden=!1,U.hidden=!0,O.classList.add("backdrop-borovik-gallery--hidden"),document.body.classList.remove("is-freeze")}));const I=document.querySelector(".js-btn-plus"),P=document.querySelector(".js-btn-minus");console.log(I);const W=document.querySelector(".backdrop-borovik__container");I.addEventListener("click",(function(){W.offsetWidth<=360&&(C.style.objectFit="cover",C.style.objectPosition="top",console.log("hello"));let e=C.offsetHeight,t=C.offsetWidth;t+=25,e+=50,C.style.width=t+"px",C.style.height=e+"px"})),P.addEventListener("click",(function(){C.style.objectPosition="center";let e=C.offsetHeight,t=C.offsetWidth;t-=25,e-=50,C.style.width=t+"px",C.style.height=e+"px"}));const V=document.querySelector(".js-btn-plus-w"),K=document.querySelector(".js-btn-minus-w");V.addEventListener("click",(function(){W.offsetWidth<=360&&(F.style.objectFit="cover",F.style.objectPosition="top",console.log("hello"));let e=F.offsetHeight,t=F.offsetWidth;t+=25,e+=50,F.style.width=t+"px",F.style.height=e+"px"})),K.addEventListener("click",(function(){F.style.objectPosition="center";let e=F.offsetHeight,t=F.offsetWidth;t-=25,e-=50,F.style.width=t+"px",F.style.height=e+"px"}))}();
//# sourceMappingURL=page-characters.d74bdeaa.js.map
