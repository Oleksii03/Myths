function e(e,t,i,n){Object.defineProperty(e,t,{get:i,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},s={},o=i.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in s){var t=s[e];delete s[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){s[e]=t},i.parcelRequired7c6=o),o.register("kyEFX",(function(t,i){var n,s;e(t.exports,"register",(function(){return n}),(function(e){return n=e})),e(t.exports,"resolve",(function(){return s}),(function(e){return s=e}));var o={};n=function(e){for(var t=Object.keys(e),i=0;i<t.length;i++)o[t[i]]=e[t[i]]},s=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o("kyEFX").register(JSON.parse('{"csl0Y":"page-borovik.cace0ab7.js","ctAAP":"item-mob-1.15985316.jpg","2JQ7r":"item-mob-2.393f09de.jpg","6SR7J":"item-mob-3.81d0e6e1.jpg","kkLFk":"spriggan.e05ed955.jpg","1K0po":"grifon.bea4bc90.jpg","581ik":"grigg.00657c76.jpg","lp5u4":"sprite.a48f67ed.svg","kmr4k":"Content-404-mob.ef8f1dfe.jpg","2vhLd":"Content-404-tab.b40ee184.jpg","lBdN2":"PC-404.2c9ec4dc.jpg","4qqZx":"borovik-item-2.01fd9ff3.jpg","jF4FN":"borovik-item-3.d74ec1ae.jpg","dl2Dn":"borovik-witcher-item-2.3eabf7d6.png","3hyro":"borovik-witcher-item-3.60242583.jpg"}'));const r=document.querySelector(".js-header-wrapper"),l=document.querySelector(".js-header-container").clientHeight,c=document.querySelector(".js-tab-menu"),a=document.querySelector(".nav-header__list-tab-inner"),d=document.querySelector(".js-tab-list"),m=document.querySelector(".js-svg-rotate"),h=document.querySelector(".js-header-btm-menu"),v=document.querySelector(".js-mob-menu-btn-close"),_=document.querySelector(".js-transform-btn"),g=document.querySelector(".js-mob-menu"),u=document.querySelector(".js-backdrop");function b(e){if(document.body.classList.toggle("is-freeze"),g.classList.toggle("is-hidden-mob-menu"),u.classList.toggle("backdrop--hidden"),!a.classList.contains("is-hidden"))return a.classList.add("is-hidden"),void m.classList.remove("active-rotate")}function k(e){_.classList.toggle("transform-btn")}r.style.height=l+"px",c.addEventListener("click",(e=>{const{target:t}=e;if(g.classList.contains("is-hidden-mob-menu")||(g.classList.add("is-hidden-mob-menu"),u.classList.add("backdrop--hidden"),k(),document.body.classList.remove("is-freeze")),t.classList.contains("dropdown"))return d.classList.toggle("is-hidden"),void m.classList.toggle("active-rotate")})),h.addEventListener("click",b),v.addEventListener("click",(e=>{b(),k(),document.body.classList.remove("is-freeze")})),u.addEventListener("click",(e=>{b(),k(),document.body.classList.remove("is-freeze")})),_.addEventListener("click",k);var y;y=new URL(o("kyEFX").resolve("ctAAP"),import.meta.url).toString();var p;p=new URL(o("kyEFX").resolve("2JQ7r"),import.meta.url).toString();var f;f=new URL(o("kyEFX").resolve("6SR7J"),import.meta.url).toString();const L=[{name:"Боровик",searchName:"Боровик",description:"Боровик — (за слов'янською міфологією) один\n    з лісових духів, господар борів та...",image:t(y),ref:"./page-borovik.html"},{name:"Грифон (Гриф)",searchName:"Грифон",description:"Грифони — суперечливі істоти, які одночасно об'єднують Небо і Землю ...",image:t(p),ref:"./page-griffin.html"},{name:"Домовик",searchName:"Домовик",description:"Домовик  — у слов'янських народів домашній дух, міфологічний господар ...",image:t(f),ref:"./page-domovik.html"}];var w;w=new URL(o("kyEFX").resolve("kkLFk"),import.meta.url).toString();var S;S=new URL(o("kyEFX").resolve("1K0po"),import.meta.url).toString();var j;j=new URL(o("kyEFX").resolve("581ik"),import.meta.url).toString();const E=[{name:"Боровик",searchName:"Боровик",description:"Боровик (пол. Borowy, англ. Spriggan) — бестія у всесвіті Відьмака ...",image:t(w),genus:"Релікти",ref:"./page-borovik.html"},{name:"Грифон",searchName:"Грифон",description:"Грифон — це істота з тілом, задніми ногами та хвостом лева і головою ...",image:t(S),genus:"Гібриди",ref:"./page-griffin.html"},{name:"Домовик",searchName:"Домовик",description:"Домовик, гріг — це крихітний гуманоїд, пустотлива, але нешкідлива істота ...",image:t(j),genus:"Людиноподібні",ref:"./page-domovik.html"}];var q;q=new URL(o("kyEFX").resolve("lp5u4"),import.meta.url).toString();var H;H=new URL(o("kyEFX").resolve("kmr4k"),import.meta.url).toString();var F;F=new URL(o("kyEFX").resolve("2vhLd"),import.meta.url).toString();var R;R=new URL(o("kyEFX").resolve("lBdN2"),import.meta.url).toString(),console.log(t(H));const x=document.querySelector(".js-backdrop-search"),N=document.querySelector(".js-search-icon"),A=document.querySelector(".js-search-list"),$=document.querySelector(".js-search-container"),U=document.querySelector(".js-search-input"),X=document.querySelector(".js-btn-search");N.addEventListener("click",(function(e){x.classList.toggle("backdrop-search--hidden"),document.body.style.overflow=document.body.style.overflow?"":"hidden"}));const T=[...L,...E];U.addEventListener("change",z),X.addEventListener("click",P);let M="";function z(){M=U.value.toLowerCase().trim(),U.value=""}function P(){T.filter((e=>e.searchName.toLowerCase()===M)).length?A.innerHTML=void 0:$.innerHTML=`<picture>\n      <source srcset="${t(R)}" media="(min-width: 1200px)">\n      <source srcset="${t(F)}" media="(min-width: 768px)">\n      <img src="${t(H)}" alt="">\n  </picture>`}document.addEventListener("keydown",(e=>{"Enter"===e.key&&(e.preventDefault(),z(),P())}));var C;C=new URL(o("kyEFX").resolve("4qqZx"),import.meta.url).toString();var I;I=new URL(o("kyEFX").resolve("jF4FN"),import.meta.url).toString();var O;O=new URL(o("kyEFX").resolve("dl2Dn"),import.meta.url).toString();var W;W=new URL(o("kyEFX").resolve("3hyro"),import.meta.url).toString();const D=document.querySelector(".js-btn-plus"),J=document.querySelector(".js-btn-minus"),B=document.querySelector(".js-btn-plus-w"),G=document.querySelector(".js-btn-minus-w"),K=document.querySelector(".backdrop-borovik__container"),Q=document.querySelector(".js-myth-btns_ukr"),Z=document.querySelector(".js-myth-btn_witcher"),Y=document.querySelector(".js-main-content"),V=document.querySelector(".js-gallery-borovik-section"),ee=document.querySelector(".js-backdrop-borovik-gallery"),te=document.querySelector(".js-backdrop-borovik-gallery-wicher"),ie=document.querySelector(".js-borovik-modal-img"),ne=document.querySelector(".js-borovik-modal-img-wich"),se=document.querySelector(".js-borovik-modal-video"),oe=document.querySelector(".js-borovik-modal-video-witcher"),re=document.querySelector(".js-backdrop-close"),le=document.querySelector(".js-backdrop-close-wich");function ce(){Z.classList.remove("myth-btns__active"),Q.classList.add("myth-btns__active"),Y.innerHTML=`\n  <div class="bestiary-list__item borovik-item">\n  <div class="borovik-item__heder">\n    <svg width="40" height="40" class="borovik-item__logo">\n      <use href="${t(q)+"#icon-logo-ua"}"></use>\n    </svg>\n\n    <div class="borovik-item__content">\n      <h3 class="borovik-item__title">Боровик</h3>\n      <h4 class="borovik-item__sub-title">Українська міфологія</h4>\n    </div>\n\n    <a href="#" class="borovik-item__svg-more">\n      <svg width="18" height="18" class="borovik-body__logo">\n        <use href="${t(q)+"#more-vertical"}"></use>\n      </svg>\n    </a>\n  </div>\n\n  <picture class="borovik-item__picture">\n    <a href="#gallery">\n      <img class="borovik-item__img borovik-item__img-ukr" src="${t(y)}" alt="#"\n        loading="lazy">\n    </a>\n  </picture>\n\n  <div class="borovik-item__body borovik-body">\n\n    <a class="borovik-body__link-myth" href="#">\n      <svg width="18" height="18" class="borovik-body__logo">\n        <use href="${t(q)+"#icon-logo-ua"}"></use>\n      </svg>\n      Міф\n    </a>\n\n    <p class="borovik-body__text">За слов'янською міфологією один з лісових духів, господар борів та гаїв.</p>\n\n  </div>\n</div>\n\n<ol class="main-content__list">\n<li class="main-content__list-item">\n  <h3 class="main-content__list-title">Зміст</h3>\n</li>\n<li class="main-content__list-item">1. Опис</li>\n<li class="main-content__list-item">2. Галерея</li>\n<li class="main-content__list-item">3. Відео</li>\n</ol>\n\n<div class="main-content__description description-content">\n\n<h4 class="description-content__title">Опис</h4>\n\n<p class="description-content__text">\n  Боровик — дух особливо густих соснових борів згідно міфології\n  слов'ян. Він відрізняється від свого родича кількома деталями;\n</p>\n<p class="description-content__text">\n  Перша це ареал проживання, Боровик дуже сильно леліє свої соснові ліси і ненавидить коли туди хтось\n  забрідає, тому випадково подорожнього він може просто з'їсти якщо подумаєш що той загрожує його деревам чи\n  тваринам.\n</p>\n<p class="description-content__text">\n  Друга важлива відмінність — це нелюбов до кішок якщо лісовик любить усіх тварин, то Боровик просто\n  ненавидить\n  кішок від звуку нявкання кота він шалено лякається і тікає в своє найглибше ліго. Частково саме тому люди що\n  жили біля лісів повинні були обов'язково мати в господарстві пару котів, кішок.\n</p>\n</div>`,V.innerHTML=`\n      <div class="borovik__gallery-header gallery-borovik">\n        <h2 class="gallery-borovik__title">Галерея</h2>\n        <p class="gallery-borovik__link">Подивитись всі</p>\n      </div>\n\n      <ul id="gallery" class="gallery-borovik__list js-gallery-borovik-urk">\n\n        <li class="gallery-borovik__item gallery-borovik__item-col">\n          <img data-id="1" class="gallery-borovik__img" src="${t(y)}" alt="borovik"\n        </li>\n\n        <li class="gallery-borovik__item">\n          <img data-id="2" class="gallery-borovik__img" src="${t(C)}" alt="borovik2">\n        </li>\n        <li class="gallery-borovik__item gallery-borovik__item-row">\n          <img data-id="3" class="gallery-borovik__img gallery-borovik__img-row" src="${t(I)}"\n            alt="borovik3">\n        </li>\n      </ul>\n\n      <button class="gallery-borovik__btn js-gallery-btn-wich" type="button">У грі Відьмак</button>`,document.querySelector(".js-gallery-btn-wich").addEventListener("click",(()=>{ae()}));document.querySelector(".js-gallery-borovik-urk").addEventListener("click",(e=>{const{target:t}=e;if("IMG"!==t.tagName)return;ee.classList.remove("backdrop-borovik-gallery--hidden"),document.body.classList.add("is-freeze");const i=document.querySelector(".js-wolf-head-img-box-urk"),n=Number(t.dataset.id),s=[...i.children];switch(n){case 1:s[0].hidden=!1,s[1].hidden=!0,s[2].hidden=!0;break;case 2:s[0].hidden=!0,s[1].hidden=!1,s[2].hidden=!0;break;case 3:s[0].hidden=!0,s[1].hidden=!0,s[2].hidden=!1}1===n&&(ie.closest("picture").hidden=!0,se.hidden=!1,D.classList.add("is-hidden"),J.classList.add("is-hidden")),ie.src=t.src;const o=document.querySelector(".js-small-gallery");o.addEventListener("click",(e=>{const{target:t,currentTarget:i}=e;if("IMG"!==t.tagName)return;ie.style.cssText="width:100%; height:100%;";const n=Number(t.closest("LI").dataset.id);switch(n){case 1:s[0].hidden=!1,s[1].hidden=!0,s[2].hidden=!0;break;case 2:s[0].hidden=!0,s[1].hidden=!1,s[2].hidden=!0;break;case 3:s[0].hidden=!0,s[1].hidden=!0,s[2].hidden=!1}1===n?(ie.closest("picture").hidden=!0,se.hidden=!1,D.classList.add("is-hidden"),J.classList.add("is-hidden")):(ie.closest("picture").hidden=!1,se.hidden=!0,D.classList.remove("is-hidden"),J.classList.remove("is-hidden")),ie.src=t.src,[...i.children].forEach((e=>{e.classList.contains("small-img-active")&&e.classList.remove("small-img-active")})),t.closest(".small-gallery__item").classList.add("small-img-active")})),[...o.children].forEach((e=>{const t=Number(e.dataset.id);e.classList.contains("small-img-active")&&e.classList.remove("small-img-active"),t===n&&e.classList.add("small-img-active")}))}))}function ae(e){Q.classList.remove("myth-btns__active"),Z.classList.add("myth-btns__active"),Y.innerHTML=`\n  <div class="bestiary-list__item borovik-item">\n        <div class="borovik-item__heder">\n          <svg width="40" height="40" class="borovik-item__logo">\n            <use href="${t(q)+"#witcher-icon"}"></use>\n          </svg>\n\n          <div class="borovik-item__content">\n            <h3 class="borovik-item__title">Боровик</h3>\n            <h4 class="borovik-item__sub-title">Гра «Відьмак 3: Дикий Гін»</h4>\n          </div>\n\n          <a href="#" class="borovik-item__svg-more">\n            <svg width="18" height="18" class="borovik-body__logo">\n              <use href="${t(q)+"#more-vertical"}"></use>\n            </svg>\n          </a>\n        </div>\n\n        <picture class="borovik-item__picture">\n          <a href="#gallery-w">\n            <img class="borovik-item__img borovik-item__img-witcher" src="${t(w)}" alt="spriggan"\n              loading="lazy">\n          </a>\n        </picture>\n\n        <div class="borovik-item__body borovik-body">\n\n          <div class="author-img">\n            <h5 class="author-img__title">Доменіко Кава</h5>\n            <a class="author-img__link" href="#">Автор малюнку</a>\n          </div>\n\n          <a class="borovik-body__link-myth" href="#">\n            <svg width="18" height="18" class="borovik-body__logo">\n              <use href="${t(q)+"#leading"}"></use>\n            </svg>\n            Релікти\n          </a>\n\n          <p class="borovik-body__text">Боровик (пол. Borowy, англ. Spriggan) — бестія, яка фігурує в книжках\n            Сапковського\n            та у всесвіті Відьмака.</p>\n\n\n          <table class="borovik-witcher__table">\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Клас</td>\n              <td class="borovik-witcher__data">Релікти</td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Місце появи/\n                <br> Проживання\n              </td>\n              <td class="borovik-witcher__data">Морвудд</td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Вразливість</td>\n              <td class="borovik-witcher__data">знак Ігні\n                Двімеритова бомба\n                Мастило проти реліктів</td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Тактика</td>\n              <td class="borovik-witcher__data">Фізичні атаки</td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Трофей</td>\n              <td class="borovik-witcher__data">Так\n                З Гротника після виконання завдання «Ноги холодні як лід»</td>\n            </tr>\n          </table>\n\n        </div>\n      </div>\n      \n      <ol class="main-content__list">\n        <li class="main-content__list-item">\n          <h3 class="main-content__list-title">Зміст</h3>\n        </li>\n        <li class="main-content__list-item">1. Опис, Запис у бестіарії</li>\n        <li class="main-content__list-item">2. Галерея</li>\n        <li class="main-content__list-item">3. Відео</li>\n      </ol>\n\n      <div class="main-content__description description-content">\n\n        <h4 class="description-content__title">Гра «Відьмак 3: Дикий Гін»,\n          <br> Запис у бестіарії\n        </h4>\n\n        <p class="description-content__text">\n          Боровики — підвид лісовиків. Натрапити на них можна в недоступних безлюдних хащах. Якщо їх не злити, вони\n          можуть і не напасти, але в гніві ці істоти страшні. Боровик дуже кремезний, завдає величезної шкоди, а м’яса\n          зжерти може більше, ніж на доброму весіллі подають.\n        </p>\n        <p class="description-content__text">\n          Кожний боровик панує над рослинами й нерозривно пов’язаний із ними. Якщо хтось нищить зелень у володіннях\n          боровика, потвора обов’язково прийде й покарає порушника спокою.\n        </p>\n        <p class="description-content__text">\n          У бою боровик управно користується своїми дужими кінцівками. Атакує він стрімко, що, беручи до уваги його\n          масивність, може спричинити клопіт. Подібна до кори тверда шкіра боровика витримує навіть сильні вдари мечем,\n          а сам він б’є так потужно, що ставити блок не варто й пробувати. Слід пильнувати коріння, яке боровик примушує\n          вилазити з-під землі й хапати ворога. Ця потвора вміє також телепортуватися, раптово з’являючись просто перед\n          супротивником. Бити його Знаком Аард марно, бо жодна сила цього монстра не повалить.\n        </p>\n      </div>`,V.innerHTML=`\n  <div class="borovik__gallery-header gallery-borovik">\n  <h2 class="gallery-borovik__title">Галерея</h2>\n  <p class="gallery-borovik__link">Подивитись всі</p>\n  </div>\n\n<ul id="gallery-w" class="gallery-borovik__list js-gallery-borovik-wich">\n  <li class="gallery-borovik__item gallery-borovik__item-col">\n    <img data-id="1" class="gallery-borovik__img gallery-borovik__img-col gallery-borovik__img-wicher_col"\n      src="${t(w)}" alt="spriggan">\n  </li>\n  <li class="gallery-borovik__item">\n    <img data-id="2" class="gallery-borovik__img gallery-borovik__img-wicher_row"\n      src="${t(O)}" alt="borovik-witcher-item-2">\n  </li>\n  <li class="gallery-borovik__item gallery-borovik__item-row">\n    <img data-id="3" class="gallery-borovik__img gallery-borovik__img-row gallery-borovik__img-wicher_row"\n      src="${t(W)}" alt="borovik-witcher-item-3">\n  </li>\n</ul>\n\n<button class="gallery-borovik__btn js-gallery-btn-ukr" type="button">В укр. міфології</button>`,document.querySelector(".js-gallery-btn-ukr").addEventListener("click",(()=>{ce()}));document.querySelector(".js-gallery-borovik-wich").addEventListener("click",(e=>{const{target:t}=e;if("IMG"!==t.tagName)return;te.classList.remove("backdrop-borovik-gallery--hidden"),document.body.classList.add("is-freeze");const i=document.querySelector(".js-wolf-head-img-box-witcher"),n=Number(t.dataset.id),s=[...i.children];switch(n){case 1:s[0].hidden=!1,s[1].hidden=!0,s[2].hidden=!0;break;case 2:s[0].hidden=!0,s[1].hidden=!1,s[2].hidden=!0;break;case 3:s[0].hidden=!0,s[1].hidden=!0,s[2].hidden=!1}1===n&&(ne.closest("picture").hidden=!0,oe.hidden=!1,B.classList.add("is-hidden"),G.classList.add("is-hidden")),ne.src=t.src;const o=document.querySelector(".js-small-gallery-wich");o.addEventListener("click",(e=>{const{target:t,currentTarget:i}=e;if("IMG"!==t.tagName)return;ne.style.cssText="width:100%; height:100%;";const n=Number(t.closest("LI").dataset.id);switch(n){case 1:s[0].hidden=!1,s[1].hidden=!0,s[2].hidden=!0;break;case 2:s[0].hidden=!0,s[1].hidden=!1,s[2].hidden=!0;break;case 3:s[0].hidden=!0,s[1].hidden=!0,s[2].hidden=!1}1===n?(ne.closest("picture").hidden=!0,oe.hidden=!1,B.classList.add("is-hidden"),G.classList.add("is-hidden")):(ne.closest("picture").hidden=!1,oe.hidden=!0,B.classList.remove("is-hidden"),G.classList.remove("is-hidden")),ne.src=t.src,[...i.children].forEach((e=>{e.classList.contains("small-img-active")&&e.classList.remove("small-img-active")})),t.closest(".small-gallery__item").classList.add("small-img-active")})),[...o.children].forEach((e=>{const t=Number(e.dataset.id);e.classList.contains("small-img-active")&&e.classList.remove("small-img-active"),t===n&&e.classList.add("small-img-active")}))}))}ce(),Q.addEventListener("click",ce),Z.addEventListener("click",ae),re.addEventListener("click",(()=>{ie.closest("picture").hidden=!1,se.hidden=!0,ee.classList.add("backdrop-borovik-gallery--hidden"),document.body.classList.remove("is-freeze")})),le.addEventListener("click",(()=>{ne.closest("picture").hidden=!1,oe.hidden=!0,te.classList.add("backdrop-borovik-gallery--hidden"),document.body.classList.remove("is-freeze")})),D.addEventListener("click",(function(){K.offsetWidth<=360&&(ie.style.objectFit="cover",ie.style.objectPosition="top",console.log("hello"));let e=ie.offsetHeight,t=ie.offsetWidth;t+=25,e+=50,ie.style.width=t+"px",ie.style.height=e+"px"})),J.addEventListener("click",(function(){ie.style.objectPosition="center";let e=ie.offsetHeight,t=ie.offsetWidth;t-=25,e-=50,ie.style.width=t+"px",ie.style.height=e+"px"})),B.addEventListener("click",(function(){K.offsetWidth<=360&&(ne.style.objectFit="cover",ne.style.objectPosition="top",console.log("hello"));let e=ne.offsetHeight,t=ne.offsetWidth;t+=25,e+=50,ne.style.width=t+"px",ne.style.height=e+"px"})),G.addEventListener("click",(function(){ne.style.objectPosition="center";let e=ne.offsetHeight,t=ne.offsetWidth;t-=25,e-=50,ne.style.width=t+"px",ne.style.height=e+"px"}));
//# sourceMappingURL=page-borovik.cace0ab7.js.map
