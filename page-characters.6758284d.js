function e(e,t,n,s){Object.defineProperty(e,t,{get:n,set:s,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},i={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in s)return s[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return s[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){i[e]=t},n.parcelRequired7c6=r),r.register("kyEFX",(function(t,n){var s,i;e(t.exports,"register",(function(){return s}),(function(e){return s=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var r={};s=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)r[t[n]]=e[t[n]]},i=function(e){var t=r[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),r("kyEFX").register(JSON.parse('{"5VbBO":"page-characters.6758284d.js","lp5u4":"sprite.45ec0c9d.svg","ft1aw":"ukrainskii-kozak-art-1_PC.87b80e1c.jpg","dcUtB":"Petro-Sahaidachnyi.64f93d4f.jpg","4jbkQ":"Ivan-Bohun.d18fe11c.jpg","fxoCy":"ukrainskii-kozak-Repin.9fd78304.jpg","j5lKD":"Geralt.2b3a04db.jpg","jxhZj":"Geralt-item-2.ef4c9f9c.png","1rHDc":"Geralt-item-3.3cba96e8.png","2qiia":"Geralt-item-4.a82d18ff.jpg"}'));const a=document.querySelector(".js-header-wrapper"),c=document.querySelector(".js-header-container").clientHeight,l=document.querySelector(".js-tab-menu"),o=document.querySelector(".nav-header__list-tab-inner"),d=document.querySelector(".js-tab-list"),_=document.querySelector(".js-svg-rotate"),m=document.querySelector(".js-header-btm-menu"),u=document.querySelector(".js-mob-menu-btn-close"),v=document.querySelector(".js-transform-btn"),h=document.querySelector(".js-mob-menu"),g=document.querySelector(".js-backdrop");function b(e){if(document.body.classList.toggle("is-freeze"),h.classList.toggle("is-hidden-mob-menu"),g.classList.toggle("backdrop--hidden"),!o.classList.contains("is-hidden"))return o.classList.add("is-hidden"),void _.classList.remove("active-rotate")}function k(e){v.classList.toggle("transform-btn")}a.style.height=c+"px",l.addEventListener("click",(e=>{const{target:t}=e;if(h.classList.contains("is-hidden-mob-menu")||(h.classList.add("is-hidden-mob-menu"),g.classList.add("backdrop--hidden"),k(),document.body.classList.remove("is-freeze")),t.classList.contains("dropdown"))return d.classList.toggle("is-hidden"),void _.classList.toggle("active-rotate")})),m.addEventListener("click",b),u.addEventListener("click",(e=>{b(),k(),document.body.classList.remove("is-freeze")})),g.addEventListener("click",(e=>{b(),k(),document.body.classList.remove("is-freeze")})),v.addEventListener("click",k);const y=document.querySelector(".js-backdrop-search");document.querySelector(".js-search-icon").addEventListener("click",(function(e){y.classList.toggle("backdrop-search--hidden"),document.body.style.overflow=document.body.style.overflow?"":"hidden"}));var p;p=new URL(r("kyEFX").resolve("lp5u4"),import.meta.url).toString();var f;f=new URL(r("kyEFX").resolve("ft1aw"),import.meta.url).toString();var L;L=new URL(r("kyEFX").resolve("dcUtB"),import.meta.url).toString();var w;w=new URL(r("kyEFX").resolve("4jbkQ"),import.meta.url).toString();var S;S=new URL(r("kyEFX").resolve("fxoCy"),import.meta.url).toString();var j;j=new URL(r("kyEFX").resolve("j5lKD"),import.meta.url).toString();var E;E=new URL(r("kyEFX").resolve("jxhZj"),import.meta.url).toString();var q;q=new URL(r("kyEFX").resolve("1rHDc"),import.meta.url).toString();var x;x=new URL(r("kyEFX").resolve("2qiia"),import.meta.url).toString();const H=document.querySelector(".characters-btn__witcher"),R=document.querySelector(".jscharacters-btn-ukr"),F=document.querySelector(".js-characters-btn-box"),z=document.querySelector(".js-characters-title"),$=document.querySelector(".js-main-content"),G=document.querySelector(".js-gallery-character"),N=document.querySelector(".js-backdrop-kozak-gallery"),U=document.querySelector(".js-backdrop-witcher-gallery"),X=document.querySelector(".js-kozak-modal-img"),A=document.querySelector(".js-witcher-modal-img"),M=document.querySelector(".js-kozak-modal-video"),T=document.querySelector(".js-witcher-modal-video"),I=document.querySelector(".js-backdrop-close"),C=document.querySelector(".js-backdrop-close-witch");function O(e){F.classList.remove("characters-btn__active"),R.classList.add("characters-btn__active"),H.classList.remove("characters-btn__active"),z.textContent="Козак-характерник",$.innerHTML=`\n  <div class="bestiary-list__item borovik-item">\n  <div class="borovik-item__heder">\n    <svg width="40" height="40" class="borovik-item__logo">\n      <use href="${t(p)+"#icon-ukr-characters"}"></use>\n    </svg>\n\n    <div class="borovik-item__content">\n      <h3 class="borovik-item__title">Козак-характерник</h3>\n      <h4 class="borovik-item__sub-title">Українська міфологія</h4>\n    </div>\n\n    <a href="#" class="borovik-item__svg-more">\n      <svg width="18" height="18" class="borovik-body__logo">\n        <use href="${t(p)+"#more-vertical"}"></use>\n      </svg>\n    </a>\n  </div>\n\n  <picture class="borovik-item__picture">\n    <a href="#">\n      <img class="borovik-item__img borovik-item__img-ukr" src="${t(f)}" alt="${t(f)}"\n        loading="lazy">\n    </a>\n  </picture>\n\n  <div class="borovik-item__body borovik-body">\n\n    <a class="borovik-body__link-myth" href="#">\n      <svg width="18" height="18" class="borovik-body__logo">\n        <use href="${t(p)+"#icon-profile"}"></use>\n      </svg>\n      Козаки-характерники\n    </a>\n\n    <p class="borovik-body__text">\n      Характерник — своєрідний духовний наставник, якого козаки шанували і дещо побоювались, хранитель традицій і таємниць бойового мистецтва запорозького козацтва.\n    </p>\n\n  </div>\n</div>\n\n<ol class="main-content__list">\n  <li class="main-content__list-item">\n    <h3 class="main-content__list-title">Зміст</h3>\n  </li>\n  <li class="main-content__list-item">1. Опис, міфи та легенди</li>\n  <li class="main-content__list-item">2. Галерея</li>\n  <li class="main-content__list-item">3. Відомі козаки-характерники</li>\n</ol>\n\n<div class="main-content__description description-content">\n\n<h4 class="description-content__title">Опис</h4>\n\n<p class="description-content__text">\n  У циклі фентезійних романів та оповідань «Відьмак»\n  польського письменника Анджея Сапковського відьмаки — це\n  найманці-мутанти з надприродними здібностями, які \n  володіють магією та захищають людей від чудовиськ та інших \n  темних сил.  \n</p>\n<p class="description-content__text">\n  Існує також версія, що образ був узятий з\n  козака-характерника.\n</p>\n<p class="description-content__text">\n  Характе́рник, химоро́дник, галдо́вник («галдувати» —\n  чаклувати) або заморо́чник (вмів напускати «морок» — туман,\n  сон) — назва віщуна, чаклуна на Запорозькій Січі, який займався\n  не лише ворожінням, але й лікуванням поранених козаків, їх\n  психотерапією та фізичною підготовкою, про що існує ряд\n  історичних свідчень очевидців, народних легенд та переказів.\n</p>\n<p class="description-content__text">\n  Найвідомішим козаком-характерником є козак Мамай — ідеалізований образ козака-мандрівника, воїна, мудреця, казкаря і характерника в одній особі.\n</p>\n<p class="description-content__text">\n  Також, за переказами, майже всі козацькі гетьмани, кошові отамани і відомі полковники були характерниками.\n  Серед них — Дмитро Байда-Вишневецький, Іван Підкова, Самійло Кішка, Северин Наливайко, Петро Сагайдачний, Максим Кривоніс, Іван Богун, Данило Нечай і найбільший характерник з них — Іван Сірко. \n</p>\n<p class="description-content__text">\n  Характерниками ставали, як правило, люди з екстрасенсорними здібностями, зі схильністю до навіювання, гіпнозу, яснобачення, телекінезу чи телепатії.\n</p>\n</div>`,G.innerHTML=`\n      <div class="borovik__gallery-header gallery-borovik">\n        <h2 class="gallery-borovik__title">Галерея</h2>\n        <p><a class="gallery-borovik__link" href="#">Подивитись всі</a></p>\n      </div>\n      \n      <ul class="gallery-character__list js-gallery-character-urk">\n\n        <li class="gallery-character__item">\n          <img data-id="1" class="gallery-character__img" src="${t(f)}"\n            alt="ukrainskii-kozak">\n        </li>\n\n        <li class="gallery-character__item">\n          <img data-id="2" class="gallery-character__img" src="${t(L)}"\n            alt="Petro-Sahaidachnyi">\n        </li>\n\n        <li class="gallery-character__item">\n          <img data-id="3" class="gallery-character__img" src="${t(w)}" alt="Ivan-Bohun">\n        </li>\n\n        <li class="gallery-character__item">\n          <img data-id="4" class="gallery-character__img" src="${t(S)}"\n            alt="ukrainskii-kozak-Repin">\n        </li>\n      </ul>\n\n      <div class="famous-cossacks">\n        <h3 class="famous-cossacks__title">Відомі Козаки-Характерники</h3>\n\n        <ol class="famous-cossacks__list">\n          <li class="famous-cossacks__list-item">1. Петро Сагайдачний</li>\n          <li class="famous-cossacks__list-item">2. Іван Богун</li>\n          <li class="famous-cossacks__list-item">3. Іван Сірко</li>\n        </ol>\n\n      </div>\n\n      <button class="gallery-borovik__btn js-gallery-btn-wich" type="button">У грі Відьмак</button>`,document.querySelector(".js-gallery-btn-wich").addEventListener("click",(()=>{D()}));document.querySelector(".js-gallery-character-urk").addEventListener("click",(e=>{const{target:t}=e;if("IMG"!==t.tagName)return;N.classList.remove("backdrop-borovik-gallery--hidden"),document.body.classList.add("is-freeze");const n=Number(t.dataset.id);1===n&&(X.closest("picture").hidden=!0,M.hidden=!1),X.src=t.src;const s=document.querySelector(".js-small-gallery");s.addEventListener("click",(e=>{const{target:t,currentTarget:n}=e;if("IMG"!==t.tagName)return;1===Number(t.closest("LI").dataset.id)?(X.closest("picture").hidden=!0,M.hidden=!1):(X.closest("picture").hidden=!1,M.hidden=!0),X.src=t.src,[...n.children].forEach((e=>{e.classList.contains("small-img-active")&&e.classList.remove("small-img-active")})),t.closest(".small-gallery__item").classList.add("small-img-active")})),[...s.children].forEach((e=>{const t=Number(e.dataset.id);e.classList.contains("small-img-active")&&e.classList.remove("small-img-active"),t===n&&e.classList.add("small-img-active")}))}))}function D(e){F.classList.add("characters-btn__active"),R.classList.remove("characters-btn__active"),H.classList.add("characters-btn__active"),z.textContent="Відьмак, Ґеральт з Рівії",$.innerHTML=`\n  <div class="bestiary-list__item borovik-item">\n        <div class="borovik-item__heder">\n          <svg width="40" height="40" class="borovik-item__logo">\n            <use href="${t(p)+"#witcher-icon"}"></use>\n          </svg>\n\n          <div class="borovik-item__content">\n            <h3 class="borovik-item__title">Відьмак, Ґеральт з Рівії</h3>\n            <h4 class="borovik-item__sub-title">Гра «Відьмак 3: Дикий Гін»</h4>\n          </div>\n\n          <a href="#" class="borovik-item__svg-more">\n            <svg width="18" height="18" class="borovik-body__logo">\n              <use href="${t(p)+"#more-vertical"}"></use>\n            </svg>\n          </a>\n        </div>\n\n        <picture class="borovik-item__picture">\n          <a href="#">\n            <img class="borovik-item__img borovik-item__img-witcher" src="${t(j)}" alt="Geralt"\n              loading="lazy">\n          </a>\n        </picture>\n\n        <div class="borovik-item__body borovik-body">\n\n          <div class="author-img">\n            <h5 class="author-img__title">Марек Мадей</h5>\n            <a class="author-img__link" href="#">Автор малюнку</a>\n          </div>\n\n          <a class="borovik-body__link-myth" href="#">\n            <svg width="18" height="18" class="borovik-body__logo">\n              <use href="${t(p)+"#icon-profile"}"></use>\n            </svg>\n            Відьмаки\n          </a>\n\n          <p class="borovik-body__text">\n            Ґеральт з Рівії, також відомий як «Білий Вовк» та «М' ясник з Блавікену» (пол. Geralt z Rivii; англ. Geralt of Rivia) — головний герой літературного циклу, написаного Анджеєм Сапковським та його адаптацій.\n          </p>\n\n          <table class="borovik-witcher__table">\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Раса</td>\n              <td class="borovik-witcher__data">Людина (Відьмак)</td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Стать</td>\n              <td class="borovik-witcher__data">Чоловіча</td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Нація</td>\n              <td class="borovik-witcher__data">Кедвенець</td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td></td>\n              <td class="characters-witcher__table_title"><b>Особові дані</b></td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Професія</td>\n              <td class="borovik-witcher__data">Відьмак</td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Належність</td>\n              <td class="borovik-witcher__data">Школа Вовка</td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Здібності</td>\n              <td class="borovik-witcher__data">\n                Відьмацькі здібності\n                Фехтування<br>\n                Алхімія<br>\n                Знаки\n              </td>\n            </tr>\n\n          </table>\n\n        </div>\n      </div>\n      \n      <ol class="main-content__list">\n        <li class="main-content__list-item">\n          <h3 class="main-content__list-title">Зміст</h3>\n        </li>\n        <li class="main-content__list-item">1. Опис, Запис у журналі</li>\n        <li class="main-content__list-item">2. Галерея</li>\n      </ol>\n\n      <div class="main-content__description description-content">\n\n        <h4 class="description-content__title">Гра «Відьмак 3: Дикий Гін»</h4>\n\n        <p class="description-content__text">Запис у журналі</p>\n        <p class="description-content__text">\n          Я міг чимало розповісти про це всесвітньо відомому мисливця\n          на чудовиськ, якого Старша Мова кличе Ґвинблейдд, а наш\n          новий, не менш благородний - мова іменує Білим вовком.\n          Ґеральт із Ривії - особистість виняткова. На перший погляд\n          він звичайний рубака, мисливець, нехитрий і простецький\n          виконавець брудних справ. Але тільки придивись — і перед\n          тобою відкриється людина небувалою глибини, незвичайного\n          світогляду і величезного досвіду. На поверхні він замислений і\n          грубуватий мовчун, але трохи глибше лежить ціле море\n          доброти, радості і готовності в будь-який момент прийти на\n          допомогу друзям — і слушною порадою, і гострим мечем. Він\n          різкий, неотесаний і часом ходить в справжніх лахмітті і все ж\n          користується незмінною прихильністю прекрасної статі. \n          Коротко кажучи, Ґеральт - ходяче протиріччя.\n        </p>\n        <p class="description-content__text">\n          Без зайвої скромності можу я вам сказати, що знаю його\n          минуле краще, ніж будь-який з нині живих. Я був біля нього і у\n          важкі часи і в години веселощів, допомагав то мудрою порадою,\n          то гострим словом. \n        </p>\n        <p class="description-content__text">\n          Тому вважаю своїм обов'язком продовжувати літопис і, заради\n          блага і освіти прийдешніх поколінь ...\n        </p>\n      </div>`,G.innerHTML=`\n  <div class="borovik__gallery-header gallery-borovik">\n    <h2 class="gallery-borovik__title">Галерея</h2>\n    <p><a class="gallery-borovik__link" href="#">Подивитись всі</a></p>\n  </div>\n  \n  <ul class="gallery-character__list js-gallery-witcher">\n\n    <li class="gallery-character__item">\n      <img data-id="1" class="gallery-character__img" src="${t(j)}"\n        alt="Geralt">\n    </li>\n\n    <li class="gallery-character__item">\n      <img data-id="2" class="gallery-character__img gallery-character__img_w" src="${t(E)}"\n        alt="Geralt-item-2">\n    </li>\n\n    <li class="gallery-character__item">\n      <img data-id="3" class="gallery-character__img gallery-character__img_w" src="${t(q)}" alt="Geralt-item-3">\n    </li>\n\n    <li class="gallery-character__item">\n      <img data-id="4" class="gallery-character__img gallery-character__img_fill" src="${t(x)}"\n        alt="Geralt-item-4">\n    </li>\n  </ul>\n\n  <button class="gallery-borovik__btn js-gallery-btn-ukr" type="button">В укр. міфології</button>`,document.querySelector(".js-gallery-btn-ukr").addEventListener("click",(()=>{O()}));document.querySelector(".js-gallery-witcher").addEventListener("click",(e=>{const{target:t}=e;if("IMG"!==t.tagName)return;document.body.classList.add("is-freeze"),U.classList.remove("backdrop-borovik-gallery--hidden");const n=Number(t.dataset.id);1===n&&(A.closest("picture").hidden=!0,T.hidden=!1),A.src=t.src;const s=document.querySelector(".js-small-gallery-w");s.addEventListener("click",(e=>{const{target:t,currentTarget:n}=e;if("IMG"!==t.tagName)return;1===Number(t.closest("LI").dataset.id)?(A.closest("picture").hidden=!0,T.hidden=!1):(A.closest("picture").hidden=!1,T.hidden=!0),A.src=t.src,[...n.children].forEach((e=>{e.classList.contains("small-img-active")&&e.classList.remove("small-img-active")})),t.closest(".small-gallery__item").classList.add("small-img-active")})),[...s.children].forEach((e=>{const t=Number(e.dataset.id);e.classList.contains("small-img-active")&&e.classList.remove("small-img-active"),t===n&&e.classList.add("small-img-active")}))}))}console.log(U),R.addEventListener("click",O),H.addEventListener("click",D),O(),I.addEventListener("click",(e=>{X.closest("picture").hidden=!1,M.hidden=!0,N.classList.add("backdrop-borovik-gallery--hidden"),document.body.classList.remove("is-freeze")})),C.addEventListener("click",(()=>{A.closest("picture").hidden=!1,T.hidden=!0,U.classList.add("backdrop-borovik-gallery--hidden"),document.body.classList.remove("is-freeze")}));
//# sourceMappingURL=page-characters.6758284d.js.map