!function(){function e(e,t,s,i){Object.defineProperty(e,t,{get:s,set:i,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},n={},r=s.parcelRequired7c6;null==r&&((r=function(e){if(e in i)return i[e].exports;if(e in n){var t=n[e];delete n[e];var s={id:e,exports:{}};return i[e]=s,t.call(s.exports,s,s.exports),s.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},s.parcelRequired7c6=r),r.register("iE7OH",(function(t,s){var i,n;e(t.exports,"register",(function(){return i}),(function(e){return i=e})),e(t.exports,"resolve",(function(){return n}),(function(e){return n=e}));var r={};i=function(e){for(var t=Object.keys(e),s=0;s<t.length;s++)r[t[s]]=e[t[s]]},n=function(e){var t=r[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),r.register("aNJCr",(function(t,s){var i;e(t.exports,"getBundleURL",(function(){return i}),(function(e){return i=e}));var n={};function r(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}i=function(e){var t=n[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return r(e[2])}return"/"}(),n[e]=t),t}})),r("iE7OH").register(JSON.parse('{"amJDg":"page-characters.115e2225.js","gG3IH":"item-mob-1.15985316.jpg","euFJS":"item-mob-2.393f09de.jpg","jtGza":"item-mob-3.81d0e6e1.jpg","jtsLn":"spriggan.e05ed955.jpg","feT3L":"grifon.bea4bc90.jpg","iOwtO":"grigg.00657c76.jpg","bb9Vd":"ukrainskii-kozak-art-1_PC.87b80e1c.jpg","kTwkG":"white-whitch-1.5727c56a.png","l2EtK":"Geralt.2b3a04db.jpg","aueHW":"Yennefer.3107b75e.jpg","ee16w":"sprite.a48f67ed.svg","8ace9":"Mobile-404.d5b09e1e.png","esZtx":"Tab-404.81c5d66d.png","dsPg8":"PC-404.b1aafd21.png","jGpyM":"Petro-Sahaidachnyi.64f93d4f.jpg","byAlp":"Ivan-Bohun.d18fe11c.jpg","2eF2E":"ukrainskii-kozak-Repin.9fd78304.jpg","kVVKd":"Geralt-item-2.ef4c9f9c.png","cWlr1":"Geralt-item-3.3cba96e8.png","5U7Md":"Geralt-item-4.a82d18ff.jpg"}'));const a=document.querySelector(".js-header-wrapper"),c=document.querySelector(".js-header-container").clientHeight,o=document.querySelector(".js-tab-menu"),l=document.querySelector(".nav-header__list-tab-inner"),d=document.querySelector(".js-tab-list"),m=document.querySelector(".js-svg-rotate"),_=document.querySelector(".js-header-btm-menu"),g=document.querySelector(".js-mob-menu-btn-close"),h=document.querySelector(".js-transform-btn"),u=document.querySelector(".js-mob-menu"),v=document.querySelector(".js-backdrop");function b(e){if(document.body.classList.toggle("is-freeze"),u.classList.toggle("is-hidden-mob-menu"),v.classList.toggle("backdrop--hidden"),!l.classList.contains("is-hidden"))return l.classList.add("is-hidden"),void m.classList.remove("active-rotate")}function y(e){h.classList.toggle("transform-btn")}a.style.height=c+"px",o.addEventListener("click",(e=>{const{target:t}=e;if(u.classList.contains("is-hidden-mob-menu")||(u.classList.add("is-hidden-mob-menu"),v.classList.add("backdrop--hidden"),y(),document.body.classList.remove("is-freeze")),t.classList.contains("dropdown"))return d.classList.toggle("is-hidden"),void m.classList.toggle("active-rotate")})),_.addEventListener("click",b),g.addEventListener("click",(e=>{b(),y(),document.body.classList.remove("is-freeze")})),v.addEventListener("click",(e=>{b(),y(),document.body.classList.remove("is-freeze")})),h.addEventListener("click",y);var p;p=r("aNJCr").getBundleURL("amJDg")+r("iE7OH").resolve("gG3IH");var f;f=r("aNJCr").getBundleURL("amJDg")+r("iE7OH").resolve("euFJS");var k;k=r("aNJCr").getBundleURL("amJDg")+r("iE7OH").resolve("jtGza");const L=[{name:"Боровик",searchName:"Боровик",description:"Боровик — (за слов'янською міфологією) один\n    з лісових духів, господар борів та...",img:t(p),logo:"#icon-logo-ua",genus:"Міф",ref:"./page-borovik.html"},{name:"Грифон (Гриф)",searchName:"Грифон",description:"Грифони — суперечливі істоти, які одночасно об'єднують Небо і Землю ...",img:t(f),logo:"#icon-logo-ua",genus:"Міф",ref:"./page-griffin.html"},{name:"Домовик",searchName:"Домовик",description:"Домовик  — у слов'янських народів домашній дух, міфологічний господар ...",img:t(k),logo:"#icon-logo-ua",genus:"Міф",ref:"./page-domovik.html"}];var w;w=r("aNJCr").getBundleURL("amJDg")+r("iE7OH").resolve("jtsLn");var E;E=r("aNJCr").getBundleURL("amJDg")+r("iE7OH").resolve("feT3L");var H;H=r("aNJCr").getBundleURL("amJDg")+r("iE7OH").resolve("iOwtO");const j=[{name:"Боровик",searchName:"Боровик",description:"Боровик (пол. Borowy, англ. Spriggan) — бестія у всесвіті Відьмака ...",img:t(w),logo:"#witcher-icon",genus:"Релікти",ref:"./page-borovik.html"},{name:"Грифон",searchName:"Грифон",description:"Грифон — це істота з тілом, задніми ногами та хвостом лева і головою ...",img:t(E),logo:"#witcher-icon",genus:"Гібриди",ref:"./page-griffin.html"},{name:"Домовик",searchName:"Домовик",description:"Домовик, гріг — це крихітний гуманоїд, пустотлива, але нешкідлива істота ...",img:t(H),logo:"#witcher-icon",genus:"Людиноподібні",ref:"./page-domovik.html"}];var S;S=r("aNJCr").getBundleURL("amJDg")+r("iE7OH").resolve("bb9Vd");var R;R=r("aNJCr").getBundleURL("amJDg")+r("iE7OH").resolve("kTwkG");var J;J=r("aNJCr").getBundleURL("amJDg")+r("iE7OH").resolve("l2EtK");var N;N=r("aNJCr").getBundleURL("amJDg")+r("iE7OH").resolve("aueHW");const q=[{name:"Козак-характерник",searchName:"Козак",genus:"Козаки-характерники",img:t(S),logo:"#icon-ukr-characters",description:"Відьма́к та Характе́рник (відьма́н) — персонаж слов'янської міфології, чаклун ...",ref:"./page-characters.html"},{name:"Чародійки",searchName:"Чародійка",genus:"Чаклунки/Відьми",img:t(R),logo:"#icon-ukr-characters",description:"Ві́дьма, чаклу́нка (чародійка) — жінка, наділена чаклунськими здібностями ...",ref:"./page-characters-witch.html"}],x=[{name:"Ґеральт з Рівії",searchName:"Геральт",genus:"Відьмак",img:t(J),logo:"#witcher-icon",description:"Ґеральт з Рівії, «Білий Вовк» — головний герой літературного циклу романів ...",ref:"./page-characters.html"},{name:"Йеннефер",searchName:"Йеннефер",genus:"Чародійка",img:t(N),logo:"#icon-Magic-center",description:"Йеннефер — одна з головних героїнь літературного циклу А.Сапковського ...",ref:"./page-characters-witch.html"}];var $;$=r("aNJCr").getBundleURL("amJDg")+r("iE7OH").resolve("ee16w");var O;O=r("aNJCr").getBundleURL("amJDg")+r("iE7OH").resolve("8ace9");var C;C=r("aNJCr").getBundleURL("amJDg")+r("iE7OH").resolve("esZtx");var F;F=r("aNJCr").getBundleURL("amJDg")+r("iE7OH").resolve("dsPg8");const G=document.querySelector(".js-backdrop-search"),U=document.querySelector(".js-search-icon"),B=document.querySelector(".js-search-list"),D=document.querySelector(".js-search-input"),z=document.querySelector(".js-btn-search"),A=document.querySelector(".js-history-close");U.addEventListener("click",(function(e){G.classList.toggle("backdrop-search--hidden"),document.body.style.overflow=document.body.style.overflow?"":"hidden"}));const M=[...L,...j,...q,...x];console.log(M),D.addEventListener("change",P),z.addEventListener("click",I);let T="";function P(){T=D.value.toLowerCase().trim(),D.value=""}function I(){const e=M.filter((e=>e.searchName.toLowerCase()===T));e.length?B.innerHTML=function(e){return e.map((({name:e,description:s,img:i,logo:n,genus:r,ref:a})=>`<li class="bestiary-list__item bestiary-item">\n    <div class="bestiary-item__heder">\n        <svg width="40" height="40" class="bestiary-item__logo">\n          <use href="${t($)+n}"></use>\n        </svg> \n\n      <div class="bestiary-item__content">\n        <h3 class="bestiary-item__title">${e}</h3>\n        <h4 class="bestiary-item__sub-title">${r}</h4>\n      </div>\n\n      <a href="#" class="bestiary-item__svg-more">\n        <svg width="18" height="18" class="bestiary-body__logo">\n          <use href="${t($)+"#more-vertical"}"></use>\n        </svg> \n      </a>\n    </div>\n  </div>\n\n<picture class="bestiary-item__picture">\n  <a href="${a}">\n    <img class="bestiary-item__img bestiary-item__img-ukr" src="${i}" alt="${e}" loading="lazy">\n  </a>\n</picture>\n\n<div class="bestiary-item__body bestiary-body">\n\n  <a class="bestiary-body__link-myth" href="#">\n    <svg width="18" height="18" class="bestiary-body__logo">\n      <use href="${t($)+n}"></use>\n    </svg> \n    ${r}\n  </a>\n\n  <p class="bestiary-body__text">${s}</p>\n\n  <a class="bestiary-body__link-btn" href="${a}">\n    Читати далі\n    <svg width="19" height="18" class="bestiary-item__logo">\n      <use href="${t($)+"#arrow-up-right"}"></use>\n    </svg> \n  </a>\n</div>\n</li>`)).join("")}(e):B.innerHTML=`<li><picture class="erroe-photo">\n      <source srcset="${t(F)}" media="(min-width: 1200px)">\n      <source srcset="${t(C)}" media="(min-width: 768px)">\n      <img class="erroe-img" src="${t(O)}" alt="witcher-error">\n  </picture></li>`}document.addEventListener("keydown",(e=>{"Enter"===e.key&&(e.preventDefault(),P(),I())})),A.addEventListener("click",(()=>{T="",B.innerHTML=""}));var W;W=r("aNJCr").getBundleURL("amJDg")+r("iE7OH").resolve("jGpyM");var V;V=r("aNJCr").getBundleURL("amJDg")+r("iE7OH").resolve("byAlp");var K;K=r("aNJCr").getBundleURL("amJDg")+r("iE7OH").resolve("2eF2E");var Z;Z=r("aNJCr").getBundleURL("amJDg")+r("iE7OH").resolve("kVVKd");var Y;Y=r("aNJCr").getBundleURL("amJDg")+r("iE7OH").resolve("cWlr1");var Q;Q=r("aNJCr").getBundleURL("amJDg")+r("iE7OH").resolve("5U7Md");const X=document.querySelector(".characters-btn__witcher"),ee=document.querySelector(".jscharacters-btn-ukr"),te=document.querySelector(".js-characters-btn-box"),se=document.querySelector(".js-characters-title"),ie=document.querySelector(".js-main-content"),ne=document.querySelector(".js-gallery-character"),re=document.querySelector(".js-backdrop-kozak-gallery"),ae=document.querySelector(".js-backdrop-witcher-gallery"),ce=document.querySelector(".js-kozak-modal-img"),oe=document.querySelector(".js-witcher-modal-img"),le=document.querySelector(".js-kozak-modal-video"),de=document.querySelector(".js-witcher-modal-video"),me=document.querySelector(".js-backdrop-close"),_e=document.querySelector(".js-backdrop-close-witch");function ge(e){te.classList.remove("characters-btn__active"),ee.classList.add("characters-btn__active"),X.classList.remove("characters-btn__active"),se.textContent="Козак-характерник",ie.innerHTML=`\n  <div class="bestiary-list__item borovik-item">\n  <div class="borovik-item__heder">\n    <svg width="40" height="40" class="borovik-item__logo">\n      <use href="${t($)+"#icon-ukr-characters"}"></use>\n    </svg>\n\n    <div class="borovik-item__content">\n      <h3 class="borovik-item__title">Козак-характерник</h3>\n      <h4 class="borovik-item__sub-title">Українська міфологія</h4>\n    </div>\n\n    <a href="#" class="borovik-item__svg-more">\n      <svg width="18" height="18" class="borovik-body__logo">\n        <use href="${t($)+"#more-vertical"}"></use>\n      </svg>\n    </a>\n  </div>\n\n  <picture class="borovik-item__picture">\n    <a href="#gallery-k">\n      <img class="borovik-item__img borovik-item__img-ukr" src="${t(S)}" alt="${t(S)}"\n        loading="lazy">\n    </a>\n  </picture>\n\n  <div class="borovik-item__body borovik-body">\n\n    <a class="borovik-body__link-myth" href="#">\n      <svg width="18" height="18" class="borovik-body__logo">\n        <use href="${t($)+"#icon-profile"}"></use>\n      </svg>\n      Козаки-характерники\n    </a>\n\n    <p class="borovik-body__text">\n      Характерник — своєрідний духовний наставник, якого козаки шанували і дещо побоювались, хранитель традицій і таємниць бойового мистецтва запорозького козацтва.\n    </p>\n\n  </div>\n</div>\n\n<ol class="main-content__list">\n  <li class="main-content__list-item">\n    <h3 class="main-content__list-title">Зміст</h3>\n  </li>\n  <li class="main-content__list-item">1. Опис, міфи та легенди</li>\n  <li class="main-content__list-item">2. Галерея</li>\n  <li class="main-content__list-item">3. Відомі козаки-характерники</li>\n</ol>\n\n<div class="main-content__description description-content">\n\n<h4 class="description-content__title">Опис</h4>\n\n<p class="description-content__text">\n  У циклі фентезійних романів та оповідань «Відьмак»\n  польського письменника Анджея Сапковського відьмаки — це\n  найманці-мутанти з надприродними здібностями, які \n  володіють магією та захищають людей від чудовиськ та інших \n  темних сил.  \n</p>\n<p class="description-content__text">\n  Існує також версія, що образ був узятий з\n  козака-характерника.\n</p>\n<p class="description-content__text">\n  Характе́рник, химоро́дник, галдо́вник («галдувати» —\n  чаклувати) або заморо́чник (вмів напускати «морок» — туман,\n  сон) — назва віщуна, чаклуна на Запорозькій Січі, який займався\n  не лише ворожінням, але й лікуванням поранених козаків, їх\n  психотерапією та фізичною підготовкою, про що існує ряд\n  історичних свідчень очевидців, народних легенд та переказів.\n</p>\n<p class="description-content__text">\n  Найвідомішим козаком-характерником є козак Мамай — ідеалізований образ козака-мандрівника, воїна, мудреця, казкаря і характерника в одній особі.\n</p>\n<p class="description-content__text">\n  Також, за переказами, майже всі козацькі гетьмани, кошові отамани і відомі полковники були характерниками.\n  Серед них — Дмитро Байда-Вишневецький, Іван Підкова, Самійло Кішка, Северин Наливайко, Петро Сагайдачний, Максим Кривоніс, Іван Богун, Данило Нечай і найбільший характерник з них — Іван Сірко. \n</p>\n<p class="description-content__text">\n  Характерниками ставали, як правило, люди з екстрасенсорними здібностями, зі схильністю до навіювання, гіпнозу, яснобачення, телекінезу чи телепатії.\n</p>\n</div>`,ne.innerHTML=`\n      <div class="borovik__gallery-header gallery-borovik">\n        <h2 class="gallery-borovik__title">Галерея</h2>\n        <p class="gallery-borovik__link">Подивитись всі</p>\n      </div>\n      \n      <ul id="gallery-k" class="gallery-character__list js-gallery-character-urk">\n\n        <li class="gallery-character__item">\n          <img data-id="1" class="gallery-character__img" src="${t(S)}"\n            alt="ukrainskii-kozak">\n        </li>\n\n        <li class="gallery-character__item">\n          <img data-id="2" class="gallery-character__img" src="${t(W)}"\n            alt="Petro-Sahaidachnyi">\n        </li>\n\n        <li class="gallery-character__item">\n          <img data-id="3" class="gallery-character__img" src="${t(V)}" alt="Ivan-Bohun">\n        </li>\n\n        <li class="gallery-character__item">\n          <img data-id="4" class="gallery-character__img" src="${t(K)}"\n            alt="ukrainskii-kozak-Repin">\n        </li>\n      </ul>\n\n      <div class="famous-cossacks">\n        <h3 class="famous-cossacks__title">Відомі Козаки-Характерники</h3>\n\n        <ol class="famous-cossacks__list">\n          <li class="famous-cossacks__list-item">1. Петро Сагайдачний</li>\n          <li class="famous-cossacks__list-item">2. Іван Богун</li>\n          <li class="famous-cossacks__list-item">3. Іван Сірко</li>\n        </ol>\n\n      </div>\n\n      <button class="gallery-borovik__btn js-gallery-btn-wich" type="button">У грі Відьмак</button>`,document.querySelector(".js-gallery-btn-wich").addEventListener("click",(()=>{he()}));document.querySelector(".js-gallery-character-urk").addEventListener("click",(e=>{const{target:t}=e;if("IMG"!==t.tagName)return;re.classList.remove("backdrop-borovik-gallery--hidden"),document.body.classList.add("is-freeze");const s=Number(t.dataset.id);1===s&&(ce.closest("picture").hidden=!0,le.hidden=!1,ue.classList.add("is-hidden"),ve.classList.add("is-hidden")),ce.src=t.src;const i=document.querySelector(".js-small-gallery");i.addEventListener("click",(e=>{const{target:t,currentTarget:s}=e;if("IMG"!==t.tagName)return;ce.style.cssText="width:100%; height:100%;";1===Number(t.closest("LI").dataset.id)?(ce.closest("picture").hidden=!0,le.hidden=!1,ue.classList.add("is-hidden"),ve.classList.add("is-hidden")):(ce.closest("picture").hidden=!1,le.hidden=!0,ue.classList.remove("is-hidden"),ve.classList.remove("is-hidden")),ce.src=t.src,[...s.children].forEach((e=>{e.classList.contains("small-img-active")&&e.classList.remove("small-img-active")})),t.closest(".small-gallery__item").classList.add("small-img-active")})),[...i.children].forEach((e=>{const t=Number(e.dataset.id);e.classList.contains("small-img-active")&&e.classList.remove("small-img-active"),t===s&&e.classList.add("small-img-active")}))}))}function he(e){te.classList.add("characters-btn__active"),ee.classList.remove("characters-btn__active"),X.classList.add("characters-btn__active"),se.textContent="Відьмак, Ґеральт з Рівії",ie.innerHTML=`\n  <div class="bestiary-list__item borovik-item">\n        <div class="borovik-item__heder">\n          <svg width="40" height="40" class="borovik-item__logo">\n            <use href="${t($)+"#witcher-icon"}"></use>\n          </svg>\n\n          <div class="borovik-item__content">\n            <h3 class="borovik-item__title">Відьмак, Ґеральт з Рівії</h3>\n            <h4 class="borovik-item__sub-title">Гра «Відьмак 3: Дикий Гін»</h4>\n          </div>\n\n          <a href="#" class="borovik-item__svg-more">\n            <svg width="18" height="18" class="borovik-body__logo">\n              <use href="${t($)+"#more-vertical"}"></use>\n            </svg>\n          </a>\n        </div>\n\n        <picture class="borovik-item__picture">\n          <a href="#gallery-G">\n            <img class="borovik-item__img borovik-item__img-witcher" src="${t(J)}" alt="Geralt"\n              loading="lazy">\n          </a>\n        </picture>\n\n        <div class="borovik-item__body borovik-body">\n\n          <div class="author-img">\n            <h5 class="author-img__title">Марек Мадей</h5>\n            <a class="author-img__link" href="#">Автор малюнку</a>\n          </div>\n\n          <a class="borovik-body__link-myth" href="#">\n            <svg width="18" height="18" class="borovik-body__logo">\n              <use href="${t($)+"#icon-profile"}"></use>\n            </svg>\n            Відьмаки\n          </a>\n\n          <p class="borovik-body__text">\n            Ґеральт з Рівії, також відомий як «Білий Вовк» та «М' ясник з Блавікену» (пол. Geralt z Rivii; англ. Geralt of Rivia) — головний герой літературного циклу, написаного Анджеєм Сапковським та його адаптацій.\n          </p>\n\n          <table class="borovik-witcher__table">\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Раса</td>\n              <td class="borovik-witcher__data">Людина (Відьмак)</td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Стать</td>\n              <td class="borovik-witcher__data">Чоловіча</td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Нація</td>\n              <td class="borovik-witcher__data">Кедвенець</td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td></td>\n              <td class="characters-witcher__table_title"><b>Особові дані</b></td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Професія</td>\n              <td class="borovik-witcher__data">Відьмак</td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Належність</td>\n              <td class="borovik-witcher__data">Школа Вовка</td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Здібності</td>\n              <td class="borovik-witcher__data">\n                Відьмацькі здібності\n                Фехтування<br>\n                Алхімія<br>\n                Знаки\n              </td>\n            </tr>\n\n          </table>\n\n        </div>\n      </div>\n      \n      <ol class="main-content__list">\n        <li class="main-content__list-item">\n          <h3 class="main-content__list-title">Зміст</h3>\n        </li>\n        <li class="main-content__list-item">1. Опис, Запис у журналі</li>\n        <li class="main-content__list-item">2. Галерея</li>\n      </ol>\n\n      <div class="main-content__description description-content">\n\n        <h4 class="description-content__title">Гра «Відьмак 3: Дикий Гін»</h4>\n\n        <p class="description-content__text">Запис у журналі</p>\n        <p class="description-content__text">\n          Я міг чимало розповісти про це всесвітньо відомому мисливця\n          на чудовиськ, якого Старша Мова кличе Ґвинблейдд, а наш\n          новий, не менш благородний - мова іменує Білим вовком.\n          Ґеральт із Ривії - особистість виняткова. На перший погляд\n          він звичайний рубака, мисливець, нехитрий і простецький\n          виконавець брудних справ. Але тільки придивись — і перед\n          тобою відкриється людина небувалою глибини, незвичайного\n          світогляду і величезного досвіду. На поверхні він замислений і\n          грубуватий мовчун, але трохи глибше лежить ціле море\n          доброти, радості і готовності в будь-який момент прийти на\n          допомогу друзям — і слушною порадою, і гострим мечем. Він\n          різкий, неотесаний і часом ходить в справжніх лахмітті і все ж\n          користується незмінною прихильністю прекрасної статі. \n          Коротко кажучи, Ґеральт - ходяче протиріччя.\n        </p>\n        <p class="description-content__text">\n          Без зайвої скромності можу я вам сказати, що знаю його\n          минуле краще, ніж будь-який з нині живих. Я був біля нього і у\n          важкі часи і в години веселощів, допомагав то мудрою порадою,\n          то гострим словом. \n        </p>\n        <p class="description-content__text">\n          Тому вважаю своїм обов'язком продовжувати літопис і, заради\n          блага і освіти прийдешніх поколінь ...\n        </p>\n      </div>`,ne.innerHTML=`\n  <div class="borovik__gallery-header gallery-borovik">\n    <h2 class="gallery-borovik__title">Галерея</h2>\n    <p class="gallery-borovik__link">Подивитись всі</p>\n  </div>\n  \n  <ul id="gallery-G" class="gallery-character__list js-gallery-witcher">\n\n    <li class="gallery-character__item">\n      <img data-id="1" class="gallery-character__img" src="${t(J)}"\n        alt="Geralt">\n    </li>\n\n    <li class="gallery-character__item">\n      <img data-id="2" class="gallery-character__img gallery-character__img_w" src="${t(Z)}"\n        alt="Geralt-item-2">\n    </li>\n\n    <li class="gallery-character__item">\n      <img data-id="3" class="gallery-character__img gallery-character__img_w" src="${t(Y)}" alt="Geralt-item-3">\n    </li>\n\n    <li class="gallery-character__item">\n      <img data-id="4" class="gallery-character__img gallery-character__img_fill" src="${t(Q)}"\n        alt="Geralt-item-4">\n    </li>\n  </ul>\n\n  <button class="gallery-borovik__btn js-gallery-btn-ukr" type="button">В укр. міфології</button>`,document.querySelector(".js-gallery-btn-ukr").addEventListener("click",(()=>{ge()}));document.querySelector(".js-gallery-witcher").addEventListener("click",(e=>{const{target:t}=e;if("IMG"!==t.tagName)return;document.body.classList.add("is-freeze"),ae.classList.remove("backdrop-borovik-gallery--hidden");const s=Number(t.dataset.id);1===s&&(oe.closest("picture").hidden=!0,de.hidden=!1,ye.classList.add("is-hidden"),pe.classList.add("is-hidden")),oe.src=t.src;const i=document.querySelector(".js-small-gallery-w");i.addEventListener("click",(e=>{const{target:t,currentTarget:s}=e;if("IMG"!==t.tagName)return;oe.style.cssText="width:100%; height:100%;";1===Number(t.closest("LI").dataset.id)?(oe.closest("picture").hidden=!0,de.hidden=!1,ye.classList.add("is-hidden"),pe.classList.add("is-hidden")):(oe.closest("picture").hidden=!1,de.hidden=!0,ye.classList.remove("is-hidden"),pe.classList.remove("is-hidden")),oe.src=t.src,[...s.children].forEach((e=>{e.classList.contains("small-img-active")&&e.classList.remove("small-img-active")})),t.closest(".small-gallery__item").classList.add("small-img-active")})),[...i.children].forEach((e=>{const t=Number(e.dataset.id);e.classList.contains("small-img-active")&&e.classList.remove("small-img-active"),t===s&&e.classList.add("small-img-active")}))}))}console.log(ae),ee.addEventListener("click",ge),X.addEventListener("click",he),ge(),me.addEventListener("click",(e=>{ce.closest("picture").hidden=!1,le.hidden=!0,re.classList.add("backdrop-borovik-gallery--hidden"),document.body.classList.remove("is-freeze")})),_e.addEventListener("click",(()=>{oe.closest("picture").hidden=!1,de.hidden=!0,ae.classList.add("backdrop-borovik-gallery--hidden"),document.body.classList.remove("is-freeze")}));const ue=document.querySelector(".js-btn-plus"),ve=document.querySelector(".js-btn-minus");console.log(ue);const be=document.querySelector(".backdrop-borovik__container");ue.addEventListener("click",(function(){be.offsetWidth<=360&&(ce.style.objectFit="cover",ce.style.objectPosition="top",console.log("hello"));let e=ce.offsetHeight,t=ce.offsetWidth;t+=25,e+=50,ce.style.width=t+"px",ce.style.height=e+"px"})),ve.addEventListener("click",(function(){ce.style.objectPosition="center";let e=ce.offsetHeight,t=ce.offsetWidth;t-=25,e-=50,ce.style.width=t+"px",ce.style.height=e+"px"}));const ye=document.querySelector(".js-btn-plus-w"),pe=document.querySelector(".js-btn-minus-w");ye.addEventListener("click",(function(){be.offsetWidth<=360&&(oe.style.objectFit="cover",oe.style.objectPosition="top",console.log("hello"));let e=oe.offsetHeight,t=oe.offsetWidth;t+=25,e+=50,oe.style.width=t+"px",oe.style.height=e+"px"})),pe.addEventListener("click",(function(){oe.style.objectPosition="center";let e=oe.offsetHeight,t=oe.offsetWidth;t-=25,e-=50,oe.style.width=t+"px",oe.style.height=e+"px"}))}();
//# sourceMappingURL=page-characters.115e2225.js.map
