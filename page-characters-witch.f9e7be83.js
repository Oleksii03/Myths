function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},s={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in i)return i[e].exports;if(e in s){var t=s[e];delete s[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){s[e]=t},n.parcelRequired7c6=r),r.register("kyEFX",(function(t,n){var i,s;e(t.exports,"register",(function(){return i}),(function(e){return i=e})),e(t.exports,"resolve",(function(){return s}),(function(e){return s=e}));var r={};i=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)r[t[n]]=e[t[n]]},s=function(e){var t=r[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),r("kyEFX").register(JSON.parse('{"400dn":"page-characters-witch.f9e7be83.js","ctAAP":"item-mob-1.15985316.jpg","2JQ7r":"item-mob-2.393f09de.jpg","6SR7J":"item-mob-3.81d0e6e1.jpg","kkLFk":"spriggan.e05ed955.jpg","1K0po":"grifon.bea4bc90.jpg","581ik":"grigg.00657c76.jpg","ft1aw":"ukrainskii-kozak-art-1_PC.cac7d6e8.jpg","76WeU":"white-whitch-1.5727c56a.png","j5lKD":"Geralt.39352b96.jpg","fNHIx":"Yennefer.3107b75e.jpg","lp5u4":"sprite.a48f67ed.svg","3AOGA":"Mobile-404.d5b09e1e.png","axhsV":"Tab-404.81c5d66d.png","eqOun":"PC-404.b1aafd21.png","a8Jkj":"witch-img-2.203cf1fb.jpg","3RdpI":"witch-img-3.c5598f8a.jpg","2Ax9e":"witch-img-4.430298e4.jpg","aDQJ4":"Yennefer-img-2.8d0237e4.jpg","5XwMK":"Yennefer-img-3.87418cb0.jpg","3vVXS":"Yennefer-img-4.c7265524.png"}'));const a=document.querySelector(".js-header-wrapper"),c=document.querySelector(".js-header-container").clientHeight,o=document.querySelector(".js-tab-menu"),l=document.querySelector(".nav-header__list-tab-inner"),d=document.querySelector(".js-tab-list"),m=document.querySelector(".js-svg-rotate"),h=document.querySelector(".js-header-btm-menu"),_=document.querySelector(".js-mob-menu-btn-close"),g=document.querySelector(".js-transform-btn"),u=document.querySelector(".js-mob-menu"),v=document.querySelector(".js-backdrop");function b(e){if(document.body.classList.toggle("is-freeze"),u.classList.toggle("is-hidden-mob-menu"),v.classList.toggle("backdrop--hidden"),!l.classList.contains("is-hidden"))return l.classList.add("is-hidden"),void m.classList.remove("active-rotate")}function y(e){g.classList.toggle("transform-btn")}a.style.height=c+"px",o.addEventListener("click",(e=>{const{target:t}=e;if(u.classList.contains("is-hidden-mob-menu")||(u.classList.add("is-hidden-mob-menu"),v.classList.add("backdrop--hidden"),y(),document.body.classList.remove("is-freeze")),t.classList.contains("dropdown"))return d.classList.toggle("is-hidden"),void m.classList.toggle("active-rotate")})),h.addEventListener("click",b),_.addEventListener("click",(e=>{b(),y(),document.body.classList.remove("is-freeze")})),v.addEventListener("click",(e=>{b(),y(),document.body.classList.remove("is-freeze")})),g.addEventListener("click",y);var p;p=new URL(r("kyEFX").resolve("ctAAP"),import.meta.url).toString();var f;f=new URL(r("kyEFX").resolve("2JQ7r"),import.meta.url).toString();var k;k=new URL(r("kyEFX").resolve("6SR7J"),import.meta.url).toString();const w=[{name:"Боровик",searchName:"Боровик",description:"Боровик — (за слов'янською міфологією) один\n    з лісових духів, господар борів та...",img:t(p),logo:"#icon-logo-ua",genus:"Міф",ref:"./page-borovik.html"},{name:"Грифон (Гриф)",searchName:"Грифон",description:"Грифони — суперечливі істоти, які одночасно об'єднують Небо і Землю ...",img:t(f),logo:"#icon-logo-ua",genus:"Міф",ref:"./page-griffin.html"},{name:"Домовик",searchName:"Домовик",description:"Домовик  — у слов'янських народів домашній дух, міфологічний господар ...",img:t(k),logo:"#icon-logo-ua",genus:"Міф",ref:"./page-domovik.html"}];var L;L=new URL(r("kyEFX").resolve("kkLFk"),import.meta.url).toString();var S;S=new URL(r("kyEFX").resolve("1K0po"),import.meta.url).toString();var E;E=new URL(r("kyEFX").resolve("581ik"),import.meta.url).toString();const j=[{name:"Боровик",searchName:"Боровик",description:"Боровик (пол. Borowy, англ. Spriggan) — бестія у всесвіті Відьмака ...",img:t(L),logo:"#witcher-icon",genus:"Релікти",ref:"./page-borovik.html"},{name:"Грифон",searchName:"Грифон",description:"Грифон — це істота з тілом, задніми ногами та хвостом лева і головою ...",img:t(S),logo:"#witcher-icon",genus:"Гібриди",ref:"./page-griffin.html"},{name:"Домовик",searchName:"Домовик",description:"Домовик, гріг — це крихітний гуманоїд, пустотлива, але нешкідлива істота ...",img:t(E),logo:"#witcher-icon",genus:"Людиноподібні",ref:"./page-domovik.html"}];var H;H=new URL(r("kyEFX").resolve("ft1aw"),import.meta.url).toString();var F;F=new URL(r("kyEFX").resolve("76WeU"),import.meta.url).toString();var R;R=new URL(r("kyEFX").resolve("j5lKD"),import.meta.url).toString();var q;q=new URL(r("kyEFX").resolve("fNHIx"),import.meta.url).toString();const x=[{name:"Козак-характерник",searchName:"Козак",genus:"Козаки-характерники",img:t(H),logo:"#icon-ukr-characters",description:"Відьма́к та Характе́рник (відьма́н) — персонаж слов'янської міфології, чаклун ...",ref:"./page-characters.html"},{name:"Чародійки",searchName:"Чародійка",genus:"Чаклунки/Відьми",img:t(F),logo:"#icon-ukr-characters",description:"Ві́дьма, чаклу́нка (чародійка) — жінка, наділена чаклунськими здібностями ...",ref:"./page-characters-witch.html"}],A=[{name:"Ґеральт з Рівії",searchName:"Геральт",genus:"Відьмак",img:t(R),logo:"#witcher-icon",description:"Ґеральт з Рівії, «Білий Вовк» — головний герой літературного ...",ref:"./page-characters.html"},{name:"Йеннефер",searchName:"Йеннефер",genus:"Чародійка",img:t(q),logo:"#icon-Magic-center",description:"Йеннефер — одна з головних героїнь літературного циклу А.Сапковського ...",ref:"./page-characters-witch.html"}];var $;$=new URL(r("kyEFX").resolve("lp5u4"),import.meta.url).toString();var N;N=new URL(r("kyEFX").resolve("3AOGA"),import.meta.url).toString();var X;X=new URL(r("kyEFX").resolve("axhsV"),import.meta.url).toString();var U;U=new URL(r("kyEFX").resolve("eqOun"),import.meta.url).toString();const M=document.querySelector(".js-backdrop-search"),T=document.querySelector(".js-search-icon"),z=document.querySelector(".js-search-list"),I=document.querySelector(".js-search-input"),O=document.querySelector(".js-btn-search"),J=document.querySelector(".js-history-close");T.addEventListener("click",(function(e){M.classList.toggle("backdrop-search--hidden"),document.body.style.overflow=document.body.style.overflow?"":"hidden"}));const P=[...w,...j,...x,...A];console.log(P),I.addEventListener("change",C),O.addEventListener("click",G);let Y="";function C(){Y=I.value.toLowerCase().trim(),I.value=""}function G(){const e=P.filter((e=>e.searchName.toLowerCase()===Y));e.length?z.innerHTML=function(e){return e.map((({name:e,description:n,img:i,logo:s,genus:r,ref:a})=>`<li class="bestiary-list__item bestiary-item">\n    <div class="bestiary-item__heder">\n        <svg width="40" height="40" class="bestiary-item__logo bestiary-item__logo_accent">\n          <use href="${t($)+s}"></use>\n        </svg> \n\n      <div class="bestiary-item__content">\n        <h3 class="bestiary-item__title">${e}</h3>\n        <h4 class="bestiary-item__sub-title">${r}</h4>\n      </div>\n\n      <a href="#" class="bestiary-item__svg-more">\n        <svg width="18" height="18" class="bestiary-body__logo">\n          <use href="${t($)+"#more-vertical"}"></use>\n        </svg> \n      </a>\n    </div>\n  </div>\n\n<picture class="bestiary-item__picture">\n  <a href="${a}">\n    <img class="search-item__img" src="${i}" alt="${e}" loading="lazy">\n  </a>\n</picture>\n\n<div class="bestiary-item__body bestiary-body">\n\n  <a class="bestiary-body__link-myth" href="#">\n    <svg width="18" height="18" class="bestiary-body__logo">\n      <use href="${t($)+s}"></use>\n    </svg> \n    ${r}\n  </a>\n\n  <p class="bestiary-body__text">${n}</p>\n\n  <a class="bestiary-body__link-btn" href="${a}">\n    Читати далі\n    <svg width="19" height="18" class="bestiary-item__logo">\n      <use href="${t($)+"#arrow-up-right"}"></use>\n    </svg> \n  </a>\n</div>\n</li>`)).join("")}(e):z.innerHTML=`<li><picture class="erroe-photo">\n      <source srcset="${t(U)}" media="(min-width: 1200px)">\n      <source srcset="${t(X)}" media="(min-width: 768px)">\n      <img class="erroe-img" src="${t(N)}" alt="witcher-error">\n  </picture></li>`}document.addEventListener("keydown",(e=>{"Enter"===e.key&&(e.preventDefault(),C(),G())})),J.addEventListener("click",(()=>{Y="",z.innerHTML=""}));var W;W=new URL(r("kyEFX").resolve("a8Jkj"),import.meta.url).toString();var D;D=new URL(r("kyEFX").resolve("3RdpI"),import.meta.url).toString();var K;K=new URL(r("kyEFX").resolve("2Ax9e"),import.meta.url).toString();var V;V=new URL(r("kyEFX").resolve("aDQJ4"),import.meta.url).toString();var Q;Q=new URL(r("kyEFX").resolve("5XwMK"),import.meta.url).toString();var B;B=new URL(r("kyEFX").resolve("3vVXS"),import.meta.url).toString();const Z=document.querySelector(".characters-btn__witcher"),ee=document.querySelector(".jscharacters-btn-ukr"),te=document.querySelector(".js-characters-btn-box"),ne=document.querySelector(".js-characters-title"),ie=document.querySelector(".js-main-content"),se=document.querySelector(".js-gallery-character"),re=document.querySelector(".js-backdrop-witche-gallery"),ae=document.querySelector(".js-backdrop-yennefer-gallery"),ce=document.querySelector(".js-witche-modal-img"),oe=document.querySelector(".js-yennefer-modal-img"),le=document.querySelector(".js-witche-modal-video"),de=document.querySelector(".js-yennefer-modal-video"),me=document.querySelector(".js-backdrop-close"),he=document.querySelector(".js-backdrop-close-yennefer");function _e(e){te.classList.remove("characters-btn__active"),ee.classList.add("characters-btn__active"),Z.classList.remove("characters-btn__active"),ne.textContent="Чародійки (Відьми)",ie.innerHTML=`\n  <div class="bestiary-list__item borovik-item">\n  <div class="borovik-item__heder">\n    <svg width="40" height="40" class="borovik-item__logo">\n      <use href="${t($)+"#icon-ukr-characters"}"></use>\n    </svg>\n\n    <div class="borovik-item__content">\n      <h3 class="borovik-item__title">Чародійка</h3>\n      <h4 class="borovik-item__sub-title">Українська міфологія</h4>\n    </div>\n\n    <a href="#" class="borovik-item__svg-more">\n      <svg width="18" height="18" class="borovik-body__logo">\n        <use href="${t($)+"#more-vertical"}"></use>\n      </svg>\n    </a>\n  </div>\n\n  <picture class="borovik-item__picture">\n    <a href="#gallery">\n      <img class="borovik-item__img whitch-item__img" src="${t(F)}" alt="whitch"\n        loading="lazy">\n    </a>\n  </picture>\n\n  <div class="borovik-item__body borovik-body">\n\n    <div class="author-img">\n      <h5 class="author-img__title">playgroundai.com (network)</h5>\n      <a class="author-img__link" href="#">Автор малюнку</a>\n    </div>\n\n    <a class="borovik-body__link-myth" href="#">\n      <svg width="18" height="18" class="borovik-body__logo">\n        <use href="${t($)+"#icon-profile"}"></use>\n      </svg>\n      Чаклунки/Відьми\n    </a>\n\n    <p class="borovik-body__text">\n      Ві́дьма, чаклу́нка (чародійка) — жінка, наділена чаклунськими здібностями, котрі отримала від природи, або навчилася чаклувати.\n    </p>\n\n  </div>\n</div>\n\n<ol class="main-content__list">\n  <li class="main-content__list-item">\n    <h3 class="main-content__list-title">Зміст</h3>\n  </li>\n  <li class="main-content__list-item">1. Опис, міфи та легенди</li>\n  <li class="main-content__list-item">2. Галерея</li>\n</ol>\n\n<div class="main-content__description description-content">\n\n<h4 class="description-content__title">Опис</h4>\n\n<p class="description-content__text">\n  Часто постаті відьом і чарівниць (чарівників) зливаються в\n  один образ, та насправді ці образи, хоч і стоять в одному\n  семантичному ряду, не є тотожними. \n</p>\n<p class="description-content__text">\n  Чарівниці також поділялися на дві категорії: вроджені та\n  навчені. Вроджена чарівниця робила добро і зло людям,\n  дивлячись, під якою планетою вона народилася, а навчена —\n  та, що уклала угоду з чортом, — мала робити тільки зло.\n  Чарівниця за допомогою зілля та заклинань могла заважати\n  людині в усіх справах: могла роз’єднати сім’ю, займатися\n  любовною магією, погіршувати здоров’я, спричинити смерть\n  чи, навпаки, привертати вдачу.\n</p>\n<p class="description-content__text">\n  Чарівниця діяла із власної вигоди та бажання, а діяльність\n  відьом мала більш визначений характер: вони мусили робити\n  те, що передбачала їм їхня природа. \n</p>\n<p class="description-content__text">\n  Спільним фактором, який об’єднує знахарок, відьом, чарівниць,\n  є те, що вони не могли померти без передачі своїх знань. \n</p>\n<p class="description-content__text">\n  Грані між образами знахарки, ворожки, чарівниці, чаклунки, відьми і їх чол. відповідниками є тонкими. Відмінний за характером, функціями, а певною мірою і за походженням образ чаклуна.\n  В укр. нар. віруваннях постать чаклуна була пов’язана з колом уявлень про вовкулак та упирів.\n</p>\n</div>`,se.innerHTML=`\n      <div class="borovik__gallery-header gallery-borovik">\n        <h2 class="gallery-borovik__title">Галерея</h2>\n        <p class="gallery-borovik__link">Подивитись всі</p>\n      </div>\n      \n      <ul id="gallery" class="gallery-character__list js-gallery-whitch">\n\n        <li class="gallery-character__item">\n          <img data-id="1" class="gallery-character__img" src="${t(F)}"\n            alt="whitch-img">\n        </li>\n\n        <li class="gallery-character__item">\n          <img data-id="2" class="gallery-character__img gallery-whitch__img" src="${t(W)}"\n            alt="whitch-img-2">\n        </li>\n\n        <li class="gallery-character__item">\n          <img data-id="3" class="gallery-character__img gallery-whitch__img" src="${t(D)}" alt="whitch-img-3">\n        </li>\n\n        <li class="gallery-character__item">\n          <img data-id="4" class="gallery-character__img" src="${t(K)}"\n            alt="whitch-img-4">\n        </li>\n      </ul>\n\n      <button class="gallery-borovik__btn js-gallery-btn-wich" type="button">У грі Відьмак</button>`,document.querySelector(".js-gallery-btn-wich").addEventListener("click",(()=>{ge()}));document.querySelector(".js-gallery-whitch").addEventListener("click",(e=>{const{target:t}=e;if("IMG"!==t.tagName)return;re.classList.remove("backdrop-borovik-gallery--hidden"),document.body.classList.add("is-freeze");const n=Number(t.dataset.id);1===n?(ce.closest("picture").hidden=!0,le.hidden=!1,ue.classList.add("is-hidden"),ve.classList.add("is-hidden")):(ue.classList.remove("is-hidden"),ve.classList.remove("is-hidden")),ce.src=t.src;const i=document.querySelector(".js-small-gallery");i.addEventListener("click",(e=>{const{target:t,currentTarget:n}=e;if("IMG"!==t.tagName)return;ce.style.cssText="width:100%; height:100%;";1===Number(t.closest("LI").dataset.id)?(ce.closest("picture").hidden=!0,le.hidden=!1,ue.classList.add("is-hidden"),ve.classList.add("is-hidden")):(ce.closest("picture").hidden=!1,le.hidden=!0,ue.classList.remove("is-hidden"),ve.classList.remove("is-hidden")),ce.src=t.src,[...n.children].forEach((e=>{e.classList.contains("small-img-active")&&e.classList.remove("small-img-active")})),t.closest(".small-gallery__item").classList.add("small-img-active")})),[...i.children].forEach((e=>{const t=Number(e.dataset.id);e.classList.contains("small-img-active")&&e.classList.remove("small-img-active"),t===n&&e.classList.add("small-img-active")}))}))}function ge(e){te.classList.add("characters-btn__active"),ee.classList.remove("characters-btn__active"),Z.classList.add("characters-btn__active"),ne.textContent="Чародійка, Йеннефер",ie.innerHTML=`\n  <div class="bestiary-list__item borovik-item">\n        <div class="borovik-item__heder">\n          <svg width="40" height="40" class="yennefer-item__logo">\n            <use href="${t($)+"#icon-Magic-center"}"></use>\n          </svg>\n\n          <div class="borovik-item__content">\n            <h3 class="borovik-item__title">Йеннефер</h3>\n            <h4 class="borovik-item__sub-title">Гра «Відьмак 3: Дикий Гін»</h4>\n          </div>\n\n          <a href="#" class="borovik-item__svg-more">\n            <svg width="18" height="18" class="borovik-body__logo">\n              <use href="${t($)+"#more-vertical"}"></use>\n            </svg>\n          </a>\n        </div>\n\n        <picture class="borovik-item__picture">\n          <a href="#gallery-w">\n            <img class="borovik-item__img yennefer-item__img" src="${t(q)}" alt="Geralt"\n              loading="lazy">\n          </a>\n        </picture>\n\n        <div class="borovik-item__body borovik-body">\n\n          <div class="author-img">\n            <h5 class="author-img__title">Гжегож Рутковський</h5>\n            <a class="author-img__link" href="#">Автор малюнку</a>\n          </div>\n\n          <a class="borovik-body__link-myth" href="#">\n            <svg width="18" height="18" class="borovik-body__logo">\n              <use href="${t($)+"#icon-profile"}"></use>\n            </svg>\n            Чародійки\n          </a>\n\n          <p class="borovik-body__text">\n            Йеннефер із Венґерберґу (пол. Yennefer z Vengerbergu) — одна з головних героїнь літературного циклу, написаного Анджеєм Сапковським, і його адаптацій.\n          </p>\n\n          <table class="borovik-witcher__table">\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Раса</td>\n              <td class="borovik-witcher__data">Людина (квартерон)</td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Стать</td>\n              <td class="borovik-witcher__data">Жіноча</td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Нація</td>\n              <td class="borovik-witcher__data">Едірнка</td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td></td>\n              <td class="characters-witcher__table_title"><b>Особові дані</b></td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Професія</td>\n              <td class="borovik-witcher__data">Чародійка</td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Належність</td>\n              <td class="borovik-witcher__data">Рада Чародіїв Ложа, Чародійок</td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Здібності</td>\n              <td class="borovik-witcher__data">Магія</td>\n            </tr>\n\n          </table>\n\n        </div>\n      </div>\n      \n      <ol class="main-content__list">\n        <li class="main-content__list-item">\n          <h3 class="main-content__list-title">Зміст</h3>\n        </li>\n        <li class="main-content__list-item">1. Опис, Запис у журналі</li>\n        <li class="main-content__list-item">2. Галерея</li>\n      </ol>\n\n      <div class="main-content__description description-content">\n\n        <h4 class="description-content__title">Гра «Відьмак 3: Дикий Гін»</h4>\n\n        <p class="description-content__text">Запис у журналі</p>\n        <p class="description-content__text">\n          Вперше відьмака спіткав круковолосу чарівницею добрих років\n          двадцять тому. Їхнє знайомство розпочалося пригодою з\n          джином, а почуття — бажання промовлене тоді Ґеральтом,\n          нерозривно сплело їхні долі разом.        \n        </p>\n        <p class="description-content__text">\n          Втім їхні стосунки виявилися непростими — сповненими\n          злетів, падінь, криз та розставань. Кохання Ґеральта та Йен\n          було безсумнівним підтвердженням того, що «протилежності\n          притягуються».\n        </p>\n        <p class="description-content__text">\n          Обставини першої зустрічі після років розлуки з Йеннефер\n          були безперечно дивними. Чарівниця не лише виявилися цілою\n          та здоровою, але й користувалося підтримкою несподіваного\n          союзника — Нільфгардської імперії.\n        </p>\n        <p class="description-content__text">\n          Йеннефер завжди вважала, що мета виправдовує засоби. Коли\n          стало зрозуміло, що порятунок Цірі потребує допомоги\n          Філіппи Ейльгарт та інших чарівниць горезвісної Ложі,\n          Йеннефер забула давні образи та переконала Емгира\n          амністувати їх.        \n        </p>\n      </div>`,se.innerHTML=`\n  <div class="borovik__gallery-header gallery-borovik">\n    <h2 class="gallery-borovik__title">Галерея</h2>\n    <p class="gallery-borovik__link">Подивитись всі</p>\n  </div>\n  \n  <ul id="gallery-w" class="gallery-character__list js-gallery-yennefer">\n\n    <li class="gallery-character__item">\n      <img data-id="1" class="gallery-character__img" src="${t(q)}"\n        alt="Yennefer">\n    </li>\n\n    <li class="gallery-character__item">\n      <img data-id="2" class="gallery-character__img gallery-character__img_w" src="${t(V)}"\n        alt="Yennefer-item-2">\n    </li>\n\n    <li class="gallery-character__item">\n      <img data-id="3" class="gallery-character__img gallery-character__img_w" src="${t(Q)}" alt="Yennefer-item-3">\n    </li>\n\n    <li class="gallery-character__item">\n      <img data-id="4" class="gallery-character__img gallery-character__img_fill" src="${t(B)}"\n        alt="Yennefer-item-4">\n    </li>\n  </ul>\n\n  <button class="gallery-borovik__btn js-gallery-btn-ukr" type="button">В укр. міфології</button>`,document.querySelector(".js-gallery-btn-ukr").addEventListener("click",(()=>{_e()}));document.querySelector(".js-gallery-yennefer").addEventListener("click",(e=>{const{target:t}=e;if("IMG"!==t.tagName)return;document.body.classList.add("is-freeze"),ae.classList.remove("backdrop-borovik-gallery--hidden");const n=Number(t.dataset.id);1===n&&(oe.closest("picture").hidden=!0,de.hidden=!1,ye.classList.add("is-hidden"),pe.classList.add("is-hidden")),oe.src=t.src;const i=document.querySelector(".js-small-gallery-yennefer");i.addEventListener("click",(e=>{const{target:t,currentTarget:n}=e;if("IMG"!==t.tagName)return;oe.style.cssText="width:100%; height:100%;";1===Number(t.closest("LI").dataset.id)?(oe.closest("picture").hidden=!0,de.hidden=!1,ye.classList.add("is-hidden"),pe.classList.add("is-hidden")):(oe.closest("picture").hidden=!1,de.hidden=!0,ye.classList.remove("is-hidden"),pe.classList.remove("is-hidden")),oe.src=t.src,[...n.children].forEach((e=>{e.classList.contains("small-img-active")&&e.classList.remove("small-img-active")})),t.closest(".small-gallery__item").classList.add("small-img-active")})),[...i.children].forEach((e=>{const t=Number(e.dataset.id);e.classList.contains("small-img-active")&&e.classList.remove("small-img-active"),t===n&&e.classList.add("small-img-active")}))}))}ee.addEventListener("click",_e),Z.addEventListener("click",ge),_e(),me.addEventListener("click",(e=>{ce.closest("picture").hidden=!1,le.hidden=!0,re.classList.add("backdrop-borovik-gallery--hidden"),document.body.classList.remove("is-freeze")})),he.addEventListener("click",(()=>{oe.closest("picture").hidden=!1,de.hidden=!0,ae.classList.add("backdrop-borovik-gallery--hidden"),document.body.classList.remove("is-freeze")}));const ue=document.querySelector(".js-btn-plus"),ve=document.querySelector(".js-btn-minus"),be=document.querySelector(".backdrop-borovik__container");ue.addEventListener("click",(function(){be.offsetWidth<=360&&(ce.style.objectFit="cover",ce.style.objectPosition="top",console.log("hello"));let e=ce.offsetHeight,t=ce.offsetWidth;t+=25,e+=50,ce.style.width=t+"px",ce.style.height=e+"px"})),ve.addEventListener("click",(function(){ce.style.objectPosition="center";let e=ce.offsetHeight,t=ce.offsetWidth;t-=25,e-=50,ce.style.width=t+"px",ce.style.height=e+"px"}));const ye=document.querySelector(".js-btn-plus-y"),pe=document.querySelector(".js-btn-minus-y");ye.addEventListener("click",(function(){be.offsetWidth<=360&&(oe.style.objectFit="cover",oe.style.objectPosition="top",console.log("hello"));let e=oe.offsetHeight,t=oe.offsetWidth;t+=25,e+=50,oe.style.width=t+"px",oe.style.height=e+"px"})),pe.addEventListener("click",(function(){oe.style.objectPosition="center";let e=oe.offsetHeight,t=oe.offsetWidth;t-=25,e-=50,oe.style.width=t+"px",oe.style.height=e+"px"}));
//# sourceMappingURL=page-characters-witch.f9e7be83.js.map