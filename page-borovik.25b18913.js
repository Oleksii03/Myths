!function(){function e(e,t,i,s){Object.defineProperty(e,t,{get:i,set:s,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},n={},r=i.parcelRequired7c6;null==r&&((r=function(e){if(e in s)return s[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return s[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},i.parcelRequired7c6=r),r.register("iE7OH",(function(t,i){var s,n;e(t.exports,"register",(function(){return s}),(function(e){return s=e})),e(t.exports,"resolve",(function(){return n}),(function(e){return n=e}));var r={};s=function(e){for(var t=Object.keys(e),i=0;i<t.length;i++)r[t[i]]=e[t[i]]},n=function(e){var t=r[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),r.register("aNJCr",(function(t,i){var s;e(t.exports,"getBundleURL",(function(){return s}),(function(e){return s=e}));var n={};function r(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}s=function(e){var t=n[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return r(e[2])}return"/"}(),n[e]=t),t}})),r("iE7OH").register(JSON.parse('{"csx9q":"page-borovik.25b18913.js","gG3IH":"item-mob-1.15985316.jpg","euFJS":"item-mob-2.393f09de.jpg","jtGza":"item-mob-3.81d0e6e1.jpg","jtsLn":"spriggan.e05ed955.jpg","feT3L":"grifon.bea4bc90.jpg","iOwtO":"grigg.00657c76.jpg","bb9Vd":"ukrainskii-kozak-art-1_PC.cac7d6e8.jpg","kTwkG":"white-whitch-1.5727c56a.png","l2EtK":"Geralt.2b3a04db.jpg","aueHW":"Yennefer.3107b75e.jpg","ee16w":"sprite.a48f67ed.svg","8ace9":"Mobile-404.d5b09e1e.png","esZtx":"Tab-404.81c5d66d.png","dsPg8":"PC-404.b1aafd21.png","7srpn":"borovik-item-2.01fd9ff3.jpg","dpVsz":"borovik-item-3.d74ec1ae.jpg","etbr3":"borovik-witcher-item-2.3eabf7d6.png","7DqB1":"borovik-witcher-item-3.60242583.jpg"}'));const o=document.querySelector(".js-header-wrapper"),c=document.querySelector(".js-header-container").clientHeight,a=document.querySelector(".js-tab-menu"),l=document.querySelector(".nav-header__list-tab-inner"),d=document.querySelector(".js-tab-list"),h=document.querySelector(".js-svg-rotate"),m=document.querySelector(".js-header-btm-menu"),g=document.querySelector(".js-mob-menu-btn-close"),_=document.querySelector(".js-transform-btn"),v=document.querySelector(".js-mob-menu"),u=document.querySelector(".js-backdrop");function b(e){if(document.body.classList.toggle("is-freeze"),v.classList.toggle("is-hidden-mob-menu"),u.classList.toggle("backdrop--hidden"),!l.classList.contains("is-hidden"))return l.classList.add("is-hidden"),void h.classList.remove("active-rotate")}function y(e){_.classList.toggle("transform-btn")}o.style.height=c+"px",a.addEventListener("click",(e=>{const{target:t}=e;if(v.classList.contains("is-hidden-mob-menu")||(v.classList.add("is-hidden-mob-menu"),u.classList.add("backdrop--hidden"),y(),document.body.classList.remove("is-freeze")),t.classList.contains("dropdown"))return d.classList.toggle("is-hidden"),void h.classList.toggle("active-rotate")})),m.addEventListener("click",b),g.addEventListener("click",(e=>{b(),y(),document.body.classList.remove("is-freeze")})),u.addEventListener("click",(e=>{b(),y(),document.body.classList.remove("is-freeze")})),_.addEventListener("click",y);var k;k=r("aNJCr").getBundleURL("csx9q")+r("iE7OH").resolve("gG3IH");var p;p=r("aNJCr").getBundleURL("csx9q")+r("iE7OH").resolve("euFJS");var f;f=r("aNJCr").getBundleURL("csx9q")+r("iE7OH").resolve("jtGza");const L=[{name:"Боровик",searchName:"Боровик",description:"Боровик — (за слов'янською міфологією) один\n    з лісових духів, господар борів та...",img:t(k),logo:"#icon-logo-ua",genus:"Міф",ref:"./page-borovik.html"},{name:"Грифон (Гриф)",searchName:"Грифон",description:"Грифони — суперечливі істоти, які одночасно об'єднують Небо і Землю ...",img:t(p),logo:"#icon-logo-ua",genus:"Міф",ref:"./page-griffin.html"},{name:"Домовик",searchName:"Домовик",description:"Домовик  — у слов'янських народів домашній дух, міфологічний господар ...",img:t(f),logo:"#icon-logo-ua",genus:"Міф",ref:"./page-domovik.html"}];var w;w=r("aNJCr").getBundleURL("csx9q")+r("iE7OH").resolve("jtsLn");var E;E=r("aNJCr").getBundleURL("csx9q")+r("iE7OH").resolve("feT3L");var H;H=r("aNJCr").getBundleURL("csx9q")+r("iE7OH").resolve("iOwtO");const j=[{name:"Боровик",searchName:"Боровик",description:"Боровик (пол. Borowy, англ. Spriggan) — бестія у всесвіті Відьмака ...",img:t(w),logo:"#witcher-icon",genus:"Релікти",ref:"./page-borovik.html"},{name:"Грифон",searchName:"Грифон",description:"Грифон — це істота з тілом, задніми ногами та хвостом лева і головою ...",img:t(E),logo:"#witcher-icon",genus:"Гібриди",ref:"./page-griffin.html"},{name:"Домовик",searchName:"Домовик",description:"Домовик, гріг — це крихітний гуманоїд, пустотлива, але нешкідлива істота ...",img:t(H),logo:"#witcher-icon",genus:"Людиноподібні",ref:"./page-domovik.html"}];var S;S=r("aNJCr").getBundleURL("csx9q")+r("iE7OH").resolve("bb9Vd");var q;q=r("aNJCr").getBundleURL("csx9q")+r("iE7OH").resolve("kTwkG");var x;x=r("aNJCr").getBundleURL("csx9q")+r("iE7OH").resolve("l2EtK");var N;N=r("aNJCr").getBundleURL("csx9q")+r("iE7OH").resolve("aueHW");const R=[{name:"Козак-характерник",searchName:"Козак",genus:"Козаки-характерники",img:t(S),logo:"#icon-ukr-characters",description:"Відьма́к та Характе́рник (відьма́н) — персонаж слов'янської міфології, чаклун ...",ref:"./page-characters.html"},{name:"Чародійки",searchName:"Чародійка",genus:"Чаклунки/Відьми",img:t(q),logo:"#icon-ukr-characters",description:"Ві́дьма, чаклу́нка (чародійка) — жінка, наділена чаклунськими здібностями ...",ref:"./page-characters-witch.html"}],$=[{name:"Ґеральт з Рівії",searchName:"Геральт",genus:"Відьмак",img:t(x),logo:"#witcher-icon",description:"Ґеральт з Рівії, «Білий Вовк» — головний герой літературного циклу романів ...",ref:"./page-characters.html"},{name:"Йеннефер",searchName:"Йеннефер",genus:"Чародійка",img:t(N),logo:"#icon-Magic-center",description:"Йеннефер — одна з головних героїнь літературного циклу А.Сапковського ...",ref:"./page-characters-witch.html"}];var O;O=r("aNJCr").getBundleURL("csx9q")+r("iE7OH").resolve("ee16w");var C;C=r("aNJCr").getBundleURL("csx9q")+r("iE7OH").resolve("8ace9");var F;F=r("aNJCr").getBundleURL("csx9q")+r("iE7OH").resolve("esZtx");var B;B=r("aNJCr").getBundleURL("csx9q")+r("iE7OH").resolve("dsPg8");const J=document.querySelector(".js-backdrop-search"),U=document.querySelector(".js-search-icon"),A=document.querySelector(".js-search-list"),T=document.querySelector(".js-search-input"),z=document.querySelector(".js-btn-search"),M=document.querySelector(".js-history-close");U.addEventListener("click",(function(e){J.classList.toggle("backdrop-search--hidden"),document.body.style.overflow=document.body.style.overflow?"":"hidden"}));const G=[...L,...j,...R,...$];console.log(G),T.addEventListener("change",I),z.addEventListener("click",W);let P="";function I(){P=T.value.toLowerCase().trim(),T.value=""}function W(){const e=G.filter((e=>e.searchName.toLowerCase()===P));e.length?A.innerHTML=function(e){return e.map((({name:e,description:i,img:s,logo:n,genus:r,ref:o})=>`<li class="bestiary-list__item bestiary-item">\n    <div class="bestiary-item__heder">\n        <svg width="40" height="40" class="bestiary-item__logo">\n          <use href="${t(O)+n}"></use>\n        </svg> \n\n      <div class="bestiary-item__content">\n        <h3 class="bestiary-item__title">${e}</h3>\n        <h4 class="bestiary-item__sub-title">${r}</h4>\n      </div>\n\n      <a href="#" class="bestiary-item__svg-more">\n        <svg width="18" height="18" class="bestiary-body__logo">\n          <use href="${t(O)+"#more-vertical"}"></use>\n        </svg> \n      </a>\n    </div>\n  </div>\n\n<picture class="bestiary-item__picture">\n  <a href="${o}">\n    <img class="search-item__img" src="${s}" alt="${e}" loading="lazy">\n  </a>\n</picture>\n\n<div class="bestiary-item__body bestiary-body">\n\n  <a class="bestiary-body__link-myth" href="#">\n    <svg width="18" height="18" class="bestiary-body__logo">\n      <use href="${t(O)+n}"></use>\n    </svg> \n    ${r}\n  </a>\n\n  <p class="bestiary-body__text">${i}</p>\n\n  <a class="bestiary-body__link-btn" href="${o}">\n    Читати далі\n    <svg width="19" height="18" class="bestiary-item__logo">\n      <use href="${t(O)+"#arrow-up-right"}"></use>\n    </svg> \n  </a>\n</div>\n</li>`)).join("")}(e):A.innerHTML=`<li><picture class="erroe-photo">\n      <source srcset="${t(B)}" media="(min-width: 1200px)">\n      <source srcset="${t(F)}" media="(min-width: 768px)">\n      <img class="erroe-img" src="${t(C)}" alt="witcher-error">\n  </picture></li>`}document.addEventListener("keydown",(e=>{"Enter"===e.key&&(e.preventDefault(),I(),W())})),M.addEventListener("click",(()=>{P="",A.innerHTML=""}));var D;D=r("aNJCr").getBundleURL("csx9q")+r("iE7OH").resolve("7srpn");var V;V=r("aNJCr").getBundleURL("csx9q")+r("iE7OH").resolve("dpVsz");var K;K=r("aNJCr").getBundleURL("csx9q")+r("iE7OH").resolve("etbr3");var Z;Z=r("aNJCr").getBundleURL("csx9q")+r("iE7OH").resolve("7DqB1");const Y=document.querySelector(".js-btn-plus"),Q=document.querySelector(".js-btn-minus"),X=document.querySelector(".js-btn-plus-w"),ee=document.querySelector(".js-btn-minus-w"),te=document.querySelector(".backdrop-borovik__container"),ie=document.querySelector(".js-myth-btns_ukr"),se=document.querySelector(".js-myth-btn_witcher"),ne=document.querySelector(".js-main-content"),re=document.querySelector(".js-gallery-borovik-section"),oe=document.querySelector(".js-backdrop-borovik-gallery"),ce=document.querySelector(".js-backdrop-borovik-gallery-wicher"),ae=document.querySelector(".js-borovik-modal-img"),le=document.querySelector(".js-borovik-modal-img-wich"),de=document.querySelector(".js-borovik-modal-video"),he=document.querySelector(".js-borovik-modal-video-witcher"),me=document.querySelector(".js-backdrop-close"),ge=document.querySelector(".js-backdrop-close-wich");function _e(){se.classList.remove("myth-btns__active"),ie.classList.add("myth-btns__active"),ne.innerHTML=`\n  <div class="bestiary-list__item borovik-item">\n  <div class="borovik-item__heder">\n    <svg width="40" height="40" class="borovik-item__logo">\n      <use href="${t(O)+"#icon-logo-ua"}"></use>\n    </svg>\n\n    <div class="borovik-item__content">\n      <h3 class="borovik-item__title">Боровик</h3>\n      <h4 class="borovik-item__sub-title">Українська міфологія</h4>\n    </div>\n\n    <a href="#" class="borovik-item__svg-more">\n      <svg width="18" height="18" class="borovik-body__logo">\n        <use href="${t(O)+"#more-vertical"}"></use>\n      </svg>\n    </a>\n  </div>\n\n  <picture class="borovik-item__picture">\n    <a href="#gallery">\n      <img class="borovik-item__img borovik-item__img-ukr" src="${t(k)}" alt="#"\n        loading="lazy">\n    </a>\n  </picture>\n\n  <div class="borovik-item__body borovik-body">\n\n    <a class="borovik-body__link-myth" href="#">\n      <svg width="18" height="18" class="borovik-body__logo">\n        <use href="${t(O)+"#icon-logo-ua"}"></use>\n      </svg>\n      Міф\n    </a>\n\n    <p class="borovik-body__text">За слов'янською міфологією один з лісових духів, господар борів та гаїв.</p>\n\n  </div>\n</div>\n\n<ol class="main-content__list">\n<li class="main-content__list-item">\n  <h3 class="main-content__list-title">Зміст</h3>\n</li>\n<li class="main-content__list-item">1. Опис</li>\n<li class="main-content__list-item">2. Галерея</li>\n<li class="main-content__list-item">3. Відео</li>\n</ol>\n\n<div class="main-content__description description-content">\n\n<h4 class="description-content__title">Опис</h4>\n\n<p class="description-content__text">\n  Боровик — дух особливо густих соснових борів згідно міфології\n  слов'ян. Він відрізняється від свого родича кількома деталями;\n</p>\n<p class="description-content__text">\n  Перша це ареал проживання, Боровик дуже сильно леліє свої соснові ліси і ненавидить коли туди хтось\n  забрідає, тому випадково подорожнього він може просто з'їсти якщо подумаєш що той загрожує його деревам чи\n  тваринам.\n</p>\n<p class="description-content__text">\n  Друга важлива відмінність — це нелюбов до кішок якщо лісовик любить усіх тварин, то Боровик просто\n  ненавидить\n  кішок від звуку нявкання кота він шалено лякається і тікає в своє найглибше ліго. Частково саме тому люди що\n  жили біля лісів повинні були обов'язково мати в господарстві пару котів, кішок.\n</p>\n</div>`,re.innerHTML=`\n      <div class="borovik__gallery-header gallery-borovik">\n        <h2 class="gallery-borovik__title">Галерея</h2>\n        <p class="gallery-borovik__link">Подивитись всі</p>\n      </div>\n\n      <ul id="gallery" class="gallery-borovik__list js-gallery-borovik-urk">\n\n        <li class="gallery-borovik__item gallery-borovik__item-col">\n          <img data-id="1" class="gallery-borovik__img" src="${t(k)}" alt="borovik"\n        </li>\n\n        <li class="gallery-borovik__item">\n          <img data-id="2" class="gallery-borovik__img" src="${t(D)}" alt="borovik2">\n        </li>\n        <li class="gallery-borovik__item gallery-borovik__item-row">\n          <img data-id="3" class="gallery-borovik__img gallery-borovik__img-row" src="${t(V)}"\n            alt="borovik3">\n        </li>\n      </ul>\n\n      <button class="gallery-borovik__btn js-gallery-btn-wich" type="button">У грі Відьмак</button>`,document.querySelector(".js-gallery-btn-wich").addEventListener("click",(()=>{ve()}));document.querySelector(".js-gallery-borovik-urk").addEventListener("click",(e=>{const{target:t}=e;if("IMG"!==t.tagName)return;oe.classList.remove("backdrop-borovik-gallery--hidden"),document.body.classList.add("is-freeze");const i=document.querySelector(".js-wolf-head-img-box-urk"),s=Number(t.dataset.id),n=[...i.children];switch(s){case 1:n[0].hidden=!1,n[1].hidden=!0,n[2].hidden=!0;break;case 2:n[0].hidden=!0,n[1].hidden=!1,n[2].hidden=!0;break;case 3:n[0].hidden=!0,n[1].hidden=!0,n[2].hidden=!1}1===s&&(ae.closest("picture").hidden=!0,de.hidden=!1,Y.classList.add("is-hidden"),Q.classList.add("is-hidden")),ae.src=t.src;const r=document.querySelector(".js-small-gallery");r.addEventListener("click",(e=>{const{target:t,currentTarget:i}=e;if("IMG"!==t.tagName)return;ae.style.cssText="width:100%; height:100%;";const s=Number(t.closest("LI").dataset.id);switch(s){case 1:n[0].hidden=!1,n[1].hidden=!0,n[2].hidden=!0;break;case 2:n[0].hidden=!0,n[1].hidden=!1,n[2].hidden=!0;break;case 3:n[0].hidden=!0,n[1].hidden=!0,n[2].hidden=!1}1===s?(ae.closest("picture").hidden=!0,de.hidden=!1,Y.classList.add("is-hidden"),Q.classList.add("is-hidden")):(ae.closest("picture").hidden=!1,de.hidden=!0,Y.classList.remove("is-hidden"),Q.classList.remove("is-hidden")),ae.src=t.src,[...i.children].forEach((e=>{e.classList.contains("small-img-active")&&e.classList.remove("small-img-active")})),t.closest(".small-gallery__item").classList.add("small-img-active")})),[...r.children].forEach((e=>{const t=Number(e.dataset.id);e.classList.contains("small-img-active")&&e.classList.remove("small-img-active"),t===s&&e.classList.add("small-img-active")}))}))}function ve(e){ie.classList.remove("myth-btns__active"),se.classList.add("myth-btns__active"),ne.innerHTML=`\n  <div class="bestiary-list__item borovik-item">\n        <div class="borovik-item__heder">\n          <svg width="40" height="40" class="borovik-item__logo">\n            <use href="${t(O)+"#witcher-icon"}"></use>\n          </svg>\n\n          <div class="borovik-item__content">\n            <h3 class="borovik-item__title">Боровик</h3>\n            <h4 class="borovik-item__sub-title">Гра «Відьмак 3: Дикий Гін»</h4>\n          </div>\n\n          <a href="#" class="borovik-item__svg-more">\n            <svg width="18" height="18" class="borovik-body__logo">\n              <use href="${t(O)+"#more-vertical"}"></use>\n            </svg>\n          </a>\n        </div>\n\n        <picture class="borovik-item__picture">\n          <a href="#gallery-w">\n            <img class="borovik-item__img borovik-item__img-witcher" src="${t(w)}" alt="spriggan"\n              loading="lazy">\n          </a>\n        </picture>\n\n        <div class="borovik-item__body borovik-body">\n\n          <div class="author-img">\n            <h5 class="author-img__title">Доменіко Кава</h5>\n            <a class="author-img__link" href="#">Автор малюнку</a>\n          </div>\n\n          <a class="borovik-body__link-myth" href="#">\n            <svg width="18" height="18" class="borovik-body__logo">\n              <use href="${t(O)+"#leading"}"></use>\n            </svg>\n            Релікти\n          </a>\n\n          <p class="borovik-body__text">Боровик (пол. Borowy, англ. Spriggan) — бестія, яка фігурує в книжках\n            Сапковського\n            та у всесвіті Відьмака.</p>\n\n\n          <table class="borovik-witcher__table">\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Клас</td>\n              <td class="borovik-witcher__data">Релікти</td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Місце появи/\n                <br> Проживання\n              </td>\n              <td class="borovik-witcher__data">Морвудд</td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Вразливість</td>\n              <td class="borovik-witcher__data">знак Ігні\n                Двімеритова бомба\n                Мастило проти реліктів</td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Тактика</td>\n              <td class="borovik-witcher__data">Фізичні атаки</td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Трофей</td>\n              <td class="borovik-witcher__data">Так\n                З Гротника після виконання завдання «Ноги холодні як лід»</td>\n            </tr>\n          </table>\n\n        </div>\n      </div>\n      \n      <ol class="main-content__list">\n        <li class="main-content__list-item">\n          <h3 class="main-content__list-title">Зміст</h3>\n        </li>\n        <li class="main-content__list-item">1. Опис, Запис у бестіарії</li>\n        <li class="main-content__list-item">2. Галерея</li>\n        <li class="main-content__list-item">3. Відео</li>\n      </ol>\n\n      <div class="main-content__description description-content">\n\n        <h4 class="description-content__title">Гра «Відьмак 3: Дикий Гін»,\n          <br> Запис у бестіарії\n        </h4>\n\n        <p class="description-content__text">\n          Боровики — підвид лісовиків. Натрапити на них можна в недоступних безлюдних хащах. Якщо їх не злити, вони\n          можуть і не напасти, але в гніві ці істоти страшні. Боровик дуже кремезний, завдає величезної шкоди, а м’яса\n          зжерти може більше, ніж на доброму весіллі подають.\n        </p>\n        <p class="description-content__text">\n          Кожний боровик панує над рослинами й нерозривно пов’язаний із ними. Якщо хтось нищить зелень у володіннях\n          боровика, потвора обов’язково прийде й покарає порушника спокою.\n        </p>\n        <p class="description-content__text">\n          У бою боровик управно користується своїми дужими кінцівками. Атакує він стрімко, що, беручи до уваги його\n          масивність, може спричинити клопіт. Подібна до кори тверда шкіра боровика витримує навіть сильні вдари мечем,\n          а сам він б’є так потужно, що ставити блок не варто й пробувати. Слід пильнувати коріння, яке боровик примушує\n          вилазити з-під землі й хапати ворога. Ця потвора вміє також телепортуватися, раптово з’являючись просто перед\n          супротивником. Бити його Знаком Аард марно, бо жодна сила цього монстра не повалить.\n        </p>\n      </div>`,re.innerHTML=`\n  <div class="borovik__gallery-header gallery-borovik">\n  <h2 class="gallery-borovik__title">Галерея</h2>\n  <p class="gallery-borovik__link">Подивитись всі</p>\n  </div>\n\n<ul id="gallery-w" class="gallery-borovik__list js-gallery-borovik-wich">\n  <li class="gallery-borovik__item gallery-borovik__item-col">\n    <img data-id="1" class="gallery-borovik__img gallery-borovik__img-col gallery-borovik__img-wicher_col"\n      src="${t(w)}" alt="spriggan">\n  </li>\n  <li class="gallery-borovik__item">\n    <img data-id="2" class="gallery-borovik__img gallery-borovik__img-wicher_row"\n      src="${t(K)}" alt="borovik-witcher-item-2">\n  </li>\n  <li class="gallery-borovik__item gallery-borovik__item-row">\n    <img data-id="3" class="gallery-borovik__img gallery-borovik__img-row gallery-borovik__img-wicher_row"\n      src="${t(Z)}" alt="borovik-witcher-item-3">\n  </li>\n</ul>\n\n<button class="gallery-borovik__btn js-gallery-btn-ukr" type="button">В укр. міфології</button>`,document.querySelector(".js-gallery-btn-ukr").addEventListener("click",(()=>{_e()}));document.querySelector(".js-gallery-borovik-wich").addEventListener("click",(e=>{const{target:t}=e;if("IMG"!==t.tagName)return;ce.classList.remove("backdrop-borovik-gallery--hidden"),document.body.classList.add("is-freeze");const i=document.querySelector(".js-wolf-head-img-box-witcher"),s=Number(t.dataset.id),n=[...i.children];switch(s){case 1:n[0].hidden=!1,n[1].hidden=!0,n[2].hidden=!0;break;case 2:n[0].hidden=!0,n[1].hidden=!1,n[2].hidden=!0;break;case 3:n[0].hidden=!0,n[1].hidden=!0,n[2].hidden=!1}1===s&&(le.closest("picture").hidden=!0,he.hidden=!1,X.classList.add("is-hidden"),ee.classList.add("is-hidden")),le.src=t.src;const r=document.querySelector(".js-small-gallery-wich");r.addEventListener("click",(e=>{const{target:t,currentTarget:i}=e;if("IMG"!==t.tagName)return;le.style.cssText="width:100%; height:100%;";const s=Number(t.closest("LI").dataset.id);switch(s){case 1:n[0].hidden=!1,n[1].hidden=!0,n[2].hidden=!0;break;case 2:n[0].hidden=!0,n[1].hidden=!1,n[2].hidden=!0;break;case 3:n[0].hidden=!0,n[1].hidden=!0,n[2].hidden=!1}1===s?(le.closest("picture").hidden=!0,he.hidden=!1,X.classList.add("is-hidden"),ee.classList.add("is-hidden")):(le.closest("picture").hidden=!1,he.hidden=!0,X.classList.remove("is-hidden"),ee.classList.remove("is-hidden")),le.src=t.src,[...i.children].forEach((e=>{e.classList.contains("small-img-active")&&e.classList.remove("small-img-active")})),t.closest(".small-gallery__item").classList.add("small-img-active")})),[...r.children].forEach((e=>{const t=Number(e.dataset.id);e.classList.contains("small-img-active")&&e.classList.remove("small-img-active"),t===s&&e.classList.add("small-img-active")}))}))}_e(),ie.addEventListener("click",_e),se.addEventListener("click",ve),me.addEventListener("click",(()=>{ae.closest("picture").hidden=!1,de.hidden=!0,oe.classList.add("backdrop-borovik-gallery--hidden"),document.body.classList.remove("is-freeze")})),ge.addEventListener("click",(()=>{le.closest("picture").hidden=!1,he.hidden=!0,ce.classList.add("backdrop-borovik-gallery--hidden"),document.body.classList.remove("is-freeze")})),Y.addEventListener("click",(function(){te.offsetWidth<=360&&(ae.style.objectFit="cover",ae.style.objectPosition="top",console.log("hello"));let e=ae.offsetHeight,t=ae.offsetWidth;t+=25,e+=50,ae.style.width=t+"px",ae.style.height=e+"px"})),Q.addEventListener("click",(function(){ae.style.objectPosition="center";let e=ae.offsetHeight,t=ae.offsetWidth;t-=25,e-=50,ae.style.width=t+"px",ae.style.height=e+"px"})),X.addEventListener("click",(function(){te.offsetWidth<=360&&(le.style.objectFit="cover",le.style.objectPosition="top",console.log("hello"));let e=le.offsetHeight,t=le.offsetWidth;t+=25,e+=50,le.style.width=t+"px",le.style.height=e+"px"})),ee.addEventListener("click",(function(){le.style.objectPosition="center";let e=le.offsetHeight,t=le.offsetWidth;t-=25,e-=50,le.style.width=t+"px",le.style.height=e+"px"}))}();
//# sourceMappingURL=page-borovik.25b18913.js.map
