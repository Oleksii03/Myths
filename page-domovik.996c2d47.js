!function(){function e(e,t,i,n){Object.defineProperty(e,t,{get:i,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},s={},o=i.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in s){var t=s[e];delete s[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){s[e]=t},i.parcelRequired7c6=o),o.register("iE7OH",(function(t,i){var n,s;e(t.exports,"register",(function(){return n}),(function(e){return n=e})),e(t.exports,"resolve",(function(){return s}),(function(e){return s=e}));var o={};n=function(e){for(var t=Object.keys(e),i=0;i<t.length;i++)o[t[i]]=e[t[i]]},s=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o.register("aNJCr",(function(t,i){var n;e(t.exports,"getBundleURL",(function(){return n}),(function(e){return n=e}));var s={};function o(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}n=function(e){var t=s[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return o(e[2])}return"/"}(),s[e]=t),t}})),o("iE7OH").register(JSON.parse('{"5wTFm":"page-domovik.996c2d47.js","gG3IH":"item-mob-1.15985316.jpg","euFJS":"item-mob-2.393f09de.jpg","jtGza":"item-mob-3.81d0e6e1.jpg","jtsLn":"spriggan.e05ed955.jpg","feT3L":"grifon.bea4bc90.jpg","iOwtO":"grigg.00657c76.jpg","ee16w":"sprite.a48f67ed.svg","bNGm1":"Content-404-mob.ef8f1dfe.jpg","5aIhV":"Content-404-tab.b40ee184.jpg","hKl4g":"PC-404.2c9ec4dc.jpg","h5KFT":"item-gall-2.955bc875.jpg","d4n5f":"item-gall-3.f9899ba6.jpg","2ZYXK":"Grigg_2.cc971009.jpg","1QoTR":"item-gall-witcher-3.753e366e.jpg"}'));const r=document.querySelector(".js-header-wrapper"),c=document.querySelector(".js-header-container").clientHeight,l=document.querySelector(".js-tab-menu"),a=document.querySelector(".nav-header__list-tab-inner"),d=document.querySelector(".js-tab-list"),m=document.querySelector(".js-svg-rotate"),h=document.querySelector(".js-header-btm-menu"),v=document.querySelector(".js-mob-menu-btn-close"),_=document.querySelector(".js-transform-btn"),u=document.querySelector(".js-mob-menu"),g=document.querySelector(".js-backdrop");function b(e){if(document.body.classList.toggle("is-freeze"),u.classList.toggle("is-hidden-mob-menu"),g.classList.toggle("backdrop--hidden"),!a.classList.contains("is-hidden"))return a.classList.add("is-hidden"),void m.classList.remove("active-rotate")}function k(e){_.classList.toggle("transform-btn")}r.style.height=c+"px",l.addEventListener("click",(e=>{const{target:t}=e;if(u.classList.contains("is-hidden-mob-menu")||(u.classList.add("is-hidden-mob-menu"),g.classList.add("backdrop--hidden"),k(),document.body.classList.remove("is-freeze")),t.classList.contains("dropdown"))return d.classList.toggle("is-hidden"),void m.classList.toggle("active-rotate")})),h.addEventListener("click",b),v.addEventListener("click",(e=>{b(),k(),document.body.classList.remove("is-freeze")})),g.addEventListener("click",(e=>{b(),k(),document.body.classList.remove("is-freeze")})),_.addEventListener("click",k);var y;y=o("aNJCr").getBundleURL("5wTFm")+o("iE7OH").resolve("gG3IH");var f;f=o("aNJCr").getBundleURL("5wTFm")+o("iE7OH").resolve("euFJS");var p;p=o("aNJCr").getBundleURL("5wTFm")+o("iE7OH").resolve("jtGza");const L=[{name:"Боровик",searchName:"Боровик",description:"Боровик — (за слов'янською міфологією) один\n    з лісових духів, господар борів та...",image:t(y),ref:"./page-borovik.html"},{name:"Грифон (Гриф)",searchName:"Грифон",description:"Грифони — суперечливі істоти, які одночасно об'єднують Небо і Землю ...",image:t(f),ref:"./page-griffin.html"},{name:"Домовик",searchName:"Домовик",description:"Домовик  — у слов'янських народів домашній дух, міфологічний господар ...",image:t(p),ref:"./page-domovik.html"}];var w;w=o("aNJCr").getBundleURL("5wTFm")+o("iE7OH").resolve("jtsLn");var j;j=o("aNJCr").getBundleURL("5wTFm")+o("iE7OH").resolve("feT3L");var E;E=o("aNJCr").getBundleURL("5wTFm")+o("iE7OH").resolve("iOwtO");const S=[{name:"Боровик",searchName:"Боровик",description:"Боровик (пол. Borowy, англ. Spriggan) — бестія у всесвіті Відьмака ...",image:t(w),genus:"Релікти",ref:"./page-borovik.html"},{name:"Грифон",searchName:"Грифон",description:"Грифон — це істота з тілом, задніми ногами та хвостом лева і головою ...",image:t(j),genus:"Гібриди",ref:"./page-griffin.html"},{name:"Домовик",searchName:"Домовик",description:"Домовик, гріг — це крихітний гуманоїд, пустотлива, але нешкідлива істота ...",image:t(E),genus:"Людиноподібні",ref:"./page-domovik.html"}];var H;H=o("aNJCr").getBundleURL("5wTFm")+o("iE7OH").resolve("ee16w");var q;q=o("aNJCr").getBundleURL("5wTFm")+o("iE7OH").resolve("bNGm1");var F;F=o("aNJCr").getBundleURL("5wTFm")+o("iE7OH").resolve("5aIhV");var N;N=o("aNJCr").getBundleURL("5wTFm")+o("iE7OH").resolve("hKl4g"),console.log(t(q));const x=document.querySelector(".js-backdrop-search"),R=document.querySelector(".js-search-icon"),T=document.querySelector(".js-search-list"),O=document.querySelector(".js-search-container"),C=document.querySelector(".js-search-input"),$=document.querySelector(".js-btn-search");R.addEventListener("click",(function(e){x.classList.toggle("backdrop-search--hidden"),document.body.style.overflow=document.body.style.overflow?"":"hidden"}));const J=[...L,...S];C.addEventListener("change",B),$.addEventListener("click",A);let U="";function B(){U=C.value.toLowerCase().trim(),C.value=""}function A(){J.filter((e=>e.searchName.toLowerCase()===U)).length?T.innerHTML=void 0:O.innerHTML=`<picture>\n      <source srcset="${t(N)}" media="(min-width: 1200px)">\n      <source srcset="${t(F)}" media="(min-width: 768px)">\n      <img src="${t(q)}" alt="">\n  </picture>`}document.addEventListener("keydown",(e=>{"Enter"===e.key&&(e.preventDefault(),B(),A())}));var z;z=o("aNJCr").getBundleURL("5wTFm")+o("iE7OH").resolve("h5KFT");var M;M=o("aNJCr").getBundleURL("5wTFm")+o("iE7OH").resolve("d4n5f");var G;G=o("aNJCr").getBundleURL("5wTFm")+o("iE7OH").resolve("2ZYXK");var I;I=o("aNJCr").getBundleURL("5wTFm")+o("iE7OH").resolve("1QoTR");const K=document.querySelector(".js-btn-plus"),P=document.querySelector(".js-btn-minus"),W=document.querySelector(".js-btn-plus-w"),D=document.querySelector(".js-btn-minus-w"),Q=document.querySelector(".backdrop-borovik__container"),V=document.querySelector(".js-myth-btns_ukr"),X=document.querySelector(".js-myth-btn_witcher"),Y=document.querySelector(".js-main-content"),Z=document.querySelector(".js-gallery-domovik-section"),ee=document.querySelector(".js-backdrop-domovik-gallery"),te=document.querySelector(".js-backdrop-domovik-gallery-witcher"),ie=document.querySelector(".js-domovik-modal-img"),ne=document.querySelector(".js-domovik-modal-img-witch"),se=document.querySelector(".js-domovik-modal-video"),oe=document.querySelector(".js-domovik-modal-video-witcher"),re=document.querySelector(".js-backdrop-close"),ce=document.querySelector(".js-backdrop-close-witch");function le(){X.classList.remove("myth-btns__active"),V.classList.add("myth-btns__active"),Y.innerHTML=`\n  <div class="bestiary-list__item borovik-item">\n  <div class="borovik-item__heder">\n    <svg width="40" height="40" class="borovik-item__logo">\n      <use href="${t(H)+"#icon-logo-ua"}"></use>\n    </svg>\n\n    <div class="borovik-item__content">\n      <h3 class="borovik-item__title">Домовик</h3>\n      <h4 class="borovik-item__sub-title">Українська міфологія</h4>\n    </div>\n\n    <a href="#" class="borovik-item__svg-more">\n      <svg width="18" height="18" class="borovik-body__logo">\n        <use href="${t(H)+"#more-vertical"}"></use>\n      </svg>\n    </a>\n  </div>\n\n  <picture class="borovik-item__picture">\n    <a href="#gallery">\n      <img class="borovik-item__img borovik-item__img-ukr" src="${t(p)}" alt="domovik"\n        loading="lazy">\n    </a>\n  </picture>\n\n  <div class="borovik-item__body borovik-body">\n\n    <a class="borovik-body__link-myth" href="#">\n      <svg width="18" height="18" class="borovik-body__logo">\n        <use href="${t(H)+"#icon-logo-ua"}"></use>\n      </svg>\n      Міф\n    </a>\n\n    <p class="borovik-body__text">\n      Домовик (кутний бог) — у слов'янських народів домашній дух, міфологічний господар і покровитель будинку, що забезпечує нормальне життя сім'ї, родючість, здоров'я людей, тварин.\n    </p>\n\n  </div>\n</div>\n\n<ol class="main-content__list">\n<li class="main-content__list-item">\n  <h3 class="main-content__list-title">Зміст</h3>\n</li>\n<li class="main-content__list-item">1. Опис</li>\n<li class="main-content__list-item">2. Галерея</li>\n<li class="main-content__list-item">3. Відео</li>\n</ol>\n\n<div class="main-content__description description-content">\n\n<h4 class="description-content__title">Опис</h4>\n\n<p class="description-content__text">\n  Домовик, дух вважається спільним для дуже багатьох слов'янських народів одним з яких звісно є український проте навіть у цьому випадку домовик з українських казок трохи відрізняється від інших домовиків легенд Польщі чи балканських держав.\n</p>\n<p class="description-content__text">\n  Домовики — це також тіж нащадки чорта що постали з тих крапель які він струсунув коли за порадою Бога намочив руку у воді. Ці духи населяють майже кожну оселю і з ними треба вміти вправлятися. Домовик може постати з недоношеної дитини котру дівчина виносила таємне від усіх або зі старого чоловіка що все життя прожив у домі або навіть зі зноска найменшого курячого яйця яке треба носити під пахвою 9 днів щоб з нього вилупився домовик. Такий домовик найкращий, бо ґаздиня може виховати його під себе. Треба годувати його недосоленими стравами і посадити жити на горище, тоді домовик буде допомагати хазяйці сприяти урожаю проганяти мишей і охороняти дім.\n</p>\n<p class="description-content__text">\n  До речі Ви точно чули про устелений вираз “насолити комусь” себто “заподіяти комусь якусь капость” даний фразеологізм пішов саме від історії про домовика, бо домовику ніколи не можна солити їжу. Якщо посолити їжу один раз він образиться, а якщо домовику посолити їжу двічі, - то він зірве дах з дому і втече геть забравши з собою все щастя газдівства.\n</p>\n</div>`,Z.innerHTML=`\n      <div class="borovik__gallery-header gallery-borovik">\n        <h2 class="gallery-borovik__title">Галерея</h2>\n        <p class="gallery-borovik__link">Подивитись всі</p>\n      </div>\n\n      <ul id="gallery" class="gallery-borovik__list js-gallery-borovik-urk">\n\n        <li class="gallery-borovik__item gallery-borovik__item-col">\n          <img data-id="1" class="gallery-borovik__img" src="${t(p)}" alt="domovik"\n        </li>\n\n        <li class="gallery-borovik__item">\n          <img data-id="2" class="gallery-borovik__img" src="${t(z)}" alt="domovik-item-2">\n        </li>\n        <li class="gallery-borovik__item gallery-borovik__item-row">\n          <img data-id="3" class="gallery-borovik__img gallery-borovik__img-row" src="${t(M)}"\n            alt="domovik-item-2">\n        </li>\n      </ul>\n\n      <button class="gallery-borovik__btn js-gallery-btn-wich" type="button">У грі Відьмак</button>`,document.querySelector(".js-gallery-btn-wich").addEventListener("click",(()=>{ae()}));document.querySelector(".js-gallery-borovik-urk").addEventListener("click",(e=>{const{target:t}=e;if("IMG"!==t.tagName)return;ee.classList.remove("backdrop-borovik-gallery--hidden"),document.body.classList.add("is-freeze");const i=document.querySelector(".js-wolf-head-img-box-urk"),n=Number(t.dataset.id),s=[...i.children];switch(n){case 1:s[0].hidden=!1,s[1].hidden=!0,s[2].hidden=!0;break;case 2:s[0].hidden=!0,s[1].hidden=!1,s[2].hidden=!0;break;case 3:s[0].hidden=!0,s[1].hidden=!0,s[2].hidden=!1}1===n&&(ie.closest("picture").hidden=!0,se.hidden=!1,K.classList.add("is-hidden"),P.classList.add("is-hidden")),ie.src=t.src;const o=document.querySelector(".js-small-gallery");o.addEventListener("click",(e=>{const{target:t,currentTarget:i}=e;if("IMG"!==t.tagName)return;ie.style.cssText="width:100%; height:100%;";const n=Number(t.closest("LI").dataset.id);switch(n){case 1:s[0].hidden=!1,s[1].hidden=!0,s[2].hidden=!0;break;case 2:s[0].hidden=!0,s[1].hidden=!1,s[2].hidden=!0;break;case 3:s[0].hidden=!0,s[1].hidden=!0,s[2].hidden=!1}1===n?(ie.closest("picture").hidden=!0,se.hidden=!1,K.classList.add("is-hidden"),P.classList.add("is-hidden")):(ie.closest("picture").hidden=!1,se.hidden=!0,K.classList.remove("is-hidden"),P.classList.remove("is-hidden")),ie.src=t.src,[...i.children].forEach((e=>{e.classList.contains("small-img-active")&&e.classList.remove("small-img-active")})),t.closest(".small-gallery__item").classList.add("small-img-active")})),[...o.children].forEach((e=>{const t=Number(e.dataset.id);e.classList.contains("small-img-active")&&e.classList.remove("small-img-active"),t===n&&e.classList.add("small-img-active")}))}))}function ae(e){V.classList.remove("myth-btns__active"),X.classList.add("myth-btns__active"),Y.innerHTML=`\n  <div class="bestiary-list__item borovik-item">\n        <div class="borovik-item__heder">\n          <svg width="40" height="40" class="borovik-item__logo">\n            <use href="${t(H)+"#witcher-icon"}"></use>\n          </svg>\n\n          <div class="borovik-item__content">\n            <h3 class="borovik-item__title">Домовик (Гріг)</h3>\n            <h4 class="borovik-item__sub-title">Гра «Відьмак 3: Дикий Гін»</h4>\n          </div>\n\n          <a href="#" class="borovik-item__svg-more">\n            <svg width="18" height="18" class="borovik-body__logo">\n              <use href="${t(H)+"#more-vertical"}"></use>\n            </svg>\n          </a>\n        </div>\n\n        <picture class="borovik-item__picture">\n          <a href="#gallery-w">\n            <img class="borovik-item__img borovik-item__img-witcher" src="${t(E)}" alt="grigg"\n              loading="lazy">\n          </a>\n        </picture>\n\n        <div class="borovik-item__body borovik-body">\n\n          <div class="author-img">\n            <h5 class="author-img__title">Знімок з гри відьмак 3</h5>\n            <a class="author-img__link" href="#">Автор малюнку</a>\n          </div>\n\n          <a class="borovik-body__link-myth" href="#">\n            <svg width="18" height="18" class="borovik-body__logo">\n              <use href="${t(H)+"#leading"}"></use>\n            </svg>\n            Людиноподібні\n          </a>\n\n          <p class="borovik-body__text">\n          Домовик, гріг, або Імп, — це крихітний гуманоїд, відомий по обидва боки Яруги як пустотлива, але нешкідлива істота, що мешкає в сільській місцевості, лісах, а іноді й у підземних склепах.\n          </p>\n\n\n          <table class="borovik-witcher__table">\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Клас</td>\n              <td class="borovik-witcher__data">Людиноподібні</td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Місце появи/\n                <br> Проживання\n              </td>\n              <td class="borovik-witcher__data">Ліси, луки та склепи</td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Тактика</td>\n              <td class="borovik-witcher__data">Сховатись</td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Особливості</td>\n              <td class="borovik-witcher__data">Гострі вуха<br>\n              Широкі носи та животи\n              Пискливий голос</td>\n            </tr>\n          </table>\n\n        </div>\n      </div>\n      \n      <ol class="main-content__list">\n        <li class="main-content__list-item">\n          <h3 class="main-content__list-title">Зміст</h3>\n        </li>\n        <li class="main-content__list-item">1. Опис, Запис у бестіарії</li>\n        <li class="main-content__list-item">2. Галерея</li>\n        <li class="main-content__list-item">3. Відео</li>\n      </ol>\n\n      <div class="main-content__description description-content">\n\n        <h4 class="description-content__title">Опис</h4>\n\n        <p class="description-content__text">\n          Грігґи, цілком ймовірно, найменша з визнаних рас. Стоячи поруч з людиною, вони в кращому випадку доходять йому до коліна, і через це некеровану дитину іноді називають «дурним грігом». Оскільки зріст не дозволяє їм сидіти на коні , вони сідають на котів.\n        </p>\n        <br>\n        <h4 class="description-content__title">Запис у бестіарії</h4>\n\n        <p class="description-content__text">\n          З’являється в доповненні «Кров та Вино»\n        </p>\n        <p class="description-content__text">\n          Село Ґрігг у «Країні тисячі байок» (ілюзія).\n          Вони безперервно збирають трави, гриби та копають землю.\n        </p>\n        <p class="description-content__text">\n          Село Грігг — це місце в ілюзії «Країна тисячі байок». Воно розташовано у темному лісі,  на північ від початкової локації персонажу, біля одного з відгалужень дороги з жовтої цегли. Тут живуть грігги. Але якщо підійти ближче, вони кричать від страху і біжать до своїх хатинок.\n        </p>\n      </div>`,Z.innerHTML=`\n<div class="borovik__gallery-header gallery-borovik">\n<h2 class="gallery-borovik__title">Галерея</h2>\n<p class="gallery-borovik__link">Подивитись всі</p>\n</div>\n\n<ul id="gallery-w" class="gallery-borovik__list js-gallery-borovik-wich">\n  <li class="gallery-borovik__item gallery-borovik__item-col">\n    <img data-id="1" class="gallery-borovik__img gallery-borovik__img-col gallery-borovik__img-wicher_col"\n      src="${t(E)}" alt="domovik-witcher-item">\n  </li>\n  <li class="gallery-borovik__item">\n    <img data-id="2" class="gallery-borovik__img gallery-borovik__img-wicher_row gallery-static__domovik-witcher_second"\n      src="${t(G)}" alt="domovik-witcher-item-2">\n  </li>\n  <li class="gallery-borovik__item gallery-borovik__item-row">\n    <img data-id="3" class="gallery-borovik__img gallery-borovik__img-row gallery-static__domovik-witcher_last"\n      src="${t(I)}" alt="domovik-witcher-item-3">\n  </li>\n</ul>\n\n<button class="gallery-borovik__btn js-gallery-btn-ukr" type="button">В укр. міфології</button>`,document.querySelector(".js-gallery-btn-ukr").addEventListener("click",(()=>{le()}));document.querySelector(".js-gallery-borovik-wich").addEventListener("click",(e=>{const{target:t}=e;if("IMG"!==t.tagName)return;document.body.classList.add("is-freeze"),te.classList.remove("backdrop-borovik-gallery--hidden");const i=document.querySelector(".js-wolf-head-img-box-witcher"),n=Number(t.dataset.id),s=[...i.children];switch(n){case 1:s[0].hidden=!1,s[1].hidden=!0,s[2].hidden=!0;break;case 2:s[0].hidden=!0,s[1].hidden=!1,s[2].hidden=!0;break;case 3:s[0].hidden=!0,s[1].hidden=!0,s[2].hidden=!1}1===n&&(ne.closest("picture").hidden=!0,oe.hidden=!1,W.classList.add("is-hidden"),D.classList.add("is-hidden")),ne.src=t.src;const o=document.querySelector(".js-small-gallery-witch");o.addEventListener("click",(e=>{const{target:t,currentTarget:i}=e;if("IMG"!==t.tagName)return;ne.style.cssText="width:100%; height:100%;";const n=Number(t.closest("LI").dataset.id);switch(n){case 1:s[0].hidden=!1,s[1].hidden=!0,s[2].hidden=!0;break;case 2:s[0].hidden=!0,s[1].hidden=!1,s[2].hidden=!0;break;case 3:s[0].hidden=!0,s[1].hidden=!0,s[2].hidden=!1}1===n?(ne.closest("picture").hidden=!0,oe.hidden=!1,W.classList.add("is-hidden"),D.classList.add("is-hidden")):(ne.closest("picture").hidden=!1,oe.hidden=!0,W.classList.remove("is-hidden"),D.classList.remove("is-hidden")),ne.src=t.src,[...i.children].forEach((e=>{e.classList.contains("small-img-active")&&e.classList.remove("small-img-active")})),t.closest(".small-gallery__item").classList.add("small-img-active")})),[...o.children].forEach((e=>{const t=Number(e.dataset.id);e.classList.contains("small-img-active")&&e.classList.remove("small-img-active"),t===n&&e.classList.add("small-img-active")}))}))}V.addEventListener("click",le),X.addEventListener("click",ae),le(),re.addEventListener("click",(e=>{ie.closest("picture").hidden=!1,se.hidden=!0,ee.classList.add("backdrop-borovik-gallery--hidden"),document.body.classList.remove("is-freeze")})),ce.addEventListener("click",(()=>{ne.closest("picture").hidden=!1,oe.hidden=!0,te.classList.add("backdrop-borovik-gallery--hidden"),document.body.classList.remove("is-freeze")})),K.addEventListener("click",(function(){Q.offsetWidth<=360&&(ie.style.objectFit="cover",ie.style.objectPosition="top",console.log("hello"));let e=ie.offsetHeight,t=ie.offsetWidth;t+=25,e+=50,ie.style.width=t+"px",ie.style.height=e+"px"})),P.addEventListener("click",(function(){ie.style.objectPosition="center";let e=ie.offsetHeight,t=ie.offsetWidth;t-=25,e-=50,ie.style.width=t+"px",ie.style.height=e+"px"})),W.addEventListener("click",(function(){Q.offsetWidth<=360&&(ne.style.objectFit="cover",ne.style.objectPosition="top",console.log("hello"));let e=ne.offsetHeight,t=ne.offsetWidth;t+=25,e+=50,ne.style.width=t+"px",ne.style.height=e+"px"})),D.addEventListener("click",(function(){ne.style.objectPosition="center";let e=ne.offsetHeight,t=ne.offsetWidth;t-=25,e-=50,ne.style.width=t+"px",ne.style.height=e+"px"}))}();
//# sourceMappingURL=page-domovik.996c2d47.js.map
