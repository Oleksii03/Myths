function e(e,t,i,n){Object.defineProperty(e,t,{get:i,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},s={},o=i.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in s){var t=s[e];delete s[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){s[e]=t},i.parcelRequired7c6=o),o.register("kyEFX",(function(t,i){var n,s;e(t.exports,"register",(function(){return n}),(function(e){return n=e})),e(t.exports,"resolve",(function(){return s}),(function(e){return s=e}));var o={};n=function(e){for(var t=Object.keys(e),i=0;i<t.length;i++)o[t[i]]=e[t[i]]},s=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o("kyEFX").register(JSON.parse('{"470VH":"page-domovik.9feb9dc0.js","ctAAP":"item-mob-1.15985316.jpg","2JQ7r":"item-mob-2.393f09de.jpg","6SR7J":"item-mob-3.81d0e6e1.jpg","kkLFk":"spriggan.e05ed955.jpg","1K0po":"grifon.bea4bc90.jpg","581ik":"grigg.00657c76.jpg","ft1aw":"ukrainskii-kozak-art-1_PC.87b80e1c.jpg","76WeU":"white-whitch-1.5727c56a.png","j5lKD":"Geralt.2b3a04db.jpg","fNHIx":"Yennefer.3107b75e.jpg","lp5u4":"sprite.a48f67ed.svg","3AOGA":"Mobile-404.d5b09e1e.png","axhsV":"Tab-404.81c5d66d.png","eqOun":"PC-404.b1aafd21.png","18IFR":"item-gall-2.955bc875.jpg","2VASV":"item-gall-3.f9899ba6.jpg","jT5Y5":"Grigg_2.cc971009.jpg","eDPwt":"item-gall-witcher-3.753e366e.jpg"}'));const r=document.querySelector(".js-header-wrapper"),a=document.querySelector(".js-header-container").clientHeight,l=document.querySelector(".js-tab-menu"),c=document.querySelector(".nav-header__list-tab-inner"),d=document.querySelector(".js-tab-list"),m=document.querySelector(".js-svg-rotate"),h=document.querySelector(".js-header-btm-menu"),g=document.querySelector(".js-mob-menu-btn-close"),_=document.querySelector(".js-transform-btn"),v=document.querySelector(".js-mob-menu"),u=document.querySelector(".js-backdrop");function b(e){if(document.body.classList.toggle("is-freeze"),v.classList.toggle("is-hidden-mob-menu"),u.classList.toggle("backdrop--hidden"),!c.classList.contains("is-hidden"))return c.classList.add("is-hidden"),void m.classList.remove("active-rotate")}function y(e){_.classList.toggle("transform-btn")}r.style.height=a+"px",l.addEventListener("click",(e=>{const{target:t}=e;if(v.classList.contains("is-hidden-mob-menu")||(v.classList.add("is-hidden-mob-menu"),u.classList.add("backdrop--hidden"),y(),document.body.classList.remove("is-freeze")),t.classList.contains("dropdown"))return d.classList.toggle("is-hidden"),void m.classList.toggle("active-rotate")})),h.addEventListener("click",b),g.addEventListener("click",(e=>{b(),y(),document.body.classList.remove("is-freeze")})),u.addEventListener("click",(e=>{b(),y(),document.body.classList.remove("is-freeze")})),_.addEventListener("click",y);var k;k=new URL(o("kyEFX").resolve("ctAAP"),import.meta.url).toString();var p;p=new URL(o("kyEFX").resolve("2JQ7r"),import.meta.url).toString();var f;f=new URL(o("kyEFX").resolve("6SR7J"),import.meta.url).toString();const w=[{name:"Боровик",searchName:"Боровик",description:"Боровик — (за слов'янською міфологією) один\n    з лісових духів, господар борів та...",img:t(k),logo:"#icon-logo-ua",genus:"Міф",ref:"./page-borovik.html"},{name:"Грифон (Гриф)",searchName:"Грифон",description:"Грифони — суперечливі істоти, які одночасно об'єднують Небо і Землю ...",img:t(p),logo:"#icon-logo-ua",genus:"Міф",ref:"./page-griffin.html"},{name:"Домовик",searchName:"Домовик",description:"Домовик  — у слов'янських народів домашній дух, міфологічний господар ...",img:t(f),logo:"#icon-logo-ua",genus:"Міф",ref:"./page-domovik.html"}];var L;L=new URL(o("kyEFX").resolve("kkLFk"),import.meta.url).toString();var S;S=new URL(o("kyEFX").resolve("1K0po"),import.meta.url).toString();var j;j=new URL(o("kyEFX").resolve("581ik"),import.meta.url).toString();const E=[{name:"Боровик",searchName:"Боровик",description:"Боровик (пол. Borowy, англ. Spriggan) — бестія у всесвіті Відьмака ...",img:t(L),logo:"#witcher-icon",genus:"Релікти",ref:"./page-borovik.html"},{name:"Грифон",searchName:"Грифон",description:"Грифон — це істота з тілом, задніми ногами та хвостом лева і головою ...",img:t(S),logo:"#witcher-icon",genus:"Гібриди",ref:"./page-griffin.html"},{name:"Домовик",searchName:"Домовик",description:"Домовик, гріг — це крихітний гуманоїд, пустотлива, але нешкідлива істота ...",img:t(j),logo:"#witcher-icon",genus:"Людиноподібні",ref:"./page-domovik.html"}];var H;H=new URL(o("kyEFX").resolve("ft1aw"),import.meta.url).toString();var q;q=new URL(o("kyEFX").resolve("76WeU"),import.meta.url).toString();var F;F=new URL(o("kyEFX").resolve("j5lKD"),import.meta.url).toString();var R;R=new URL(o("kyEFX").resolve("fNHIx"),import.meta.url).toString();const x=[{name:"Козак-характерник",searchName:"Козак",genus:"Козаки-характерники",img:t(H),logo:"#icon-ukr-characters",description:"Відьма́к та Характе́рник (відьма́н) — персонаж слов'янської міфології, чаклун ...",ref:"./page-characters.html"},{name:"Чародійки",searchName:"Чародійка",genus:"Чаклунки/Відьми",img:t(q),logo:"#icon-ukr-characters",description:"Ві́дьма, чаклу́нка (чародійка) — жінка, наділена чаклунськими здібностями ...",ref:"./page-characters-witch.html"}],A=[{name:"Ґеральт з Рівії",searchName:"Геральт",genus:"Відьмак",img:t(F),logo:"#witcher-icon",description:"Ґеральт з Рівії, «Білий Вовк» — головний герой літературного циклу романів ...",ref:"./page-characters.html"},{name:"Йеннефер",searchName:"Йеннефер",genus:"Чародійка",img:t(R),logo:"#icon-Magic-center",description:"Йеннефер — одна з головних героїнь літературного циклу А.Сапковського ...",ref:"./page-characters-witch.html"}];var $;$=new URL(o("kyEFX").resolve("lp5u4"),import.meta.url).toString();var N;N=new URL(o("kyEFX").resolve("3AOGA"),import.meta.url).toString();var U;U=new URL(o("kyEFX").resolve("axhsV"),import.meta.url).toString();var X;X=new URL(o("kyEFX").resolve("eqOun"),import.meta.url).toString();const T=document.querySelector(".js-backdrop-search"),M=document.querySelector(".js-search-icon"),z=document.querySelector(".js-search-list"),P=document.querySelector(".js-search-input"),I=document.querySelector(".js-btn-search"),O=document.querySelector(".js-history-close");M.addEventListener("click",(function(e){T.classList.toggle("backdrop-search--hidden"),document.body.style.overflow=document.body.style.overflow?"":"hidden"}));const G=[...w,...E,...x,...A];console.log(G),P.addEventListener("change",D),I.addEventListener("click",V);let W="";function D(){W=P.value.toLowerCase().trim(),P.value=""}function V(){const e=G.filter((e=>e.searchName.toLowerCase()===W));e.length?z.innerHTML=function(e){return e.map((({name:e,description:i,img:n,logo:s,genus:o,ref:r})=>`<li class="bestiary-list__item bestiary-item">\n    <div class="bestiary-item__heder">\n        <svg width="40" height="40" class="bestiary-item__logo">\n          <use href="${t($)+s}"></use>\n        </svg> \n\n      <div class="bestiary-item__content">\n        <h3 class="bestiary-item__title">${e}</h3>\n        <h4 class="bestiary-item__sub-title">${o}</h4>\n      </div>\n\n      <a href="#" class="bestiary-item__svg-more">\n        <svg width="18" height="18" class="bestiary-body__logo">\n          <use href="${t($)+"#more-vertical"}"></use>\n        </svg> \n      </a>\n    </div>\n  </div>\n\n<picture class="bestiary-item__picture">\n  <a href="${r}">\n    <img class="bestiary-item__img bestiary-item__img-ukr" src="${n}" alt="${e}" loading="lazy">\n  </a>\n</picture>\n\n<div class="bestiary-item__body bestiary-body">\n\n  <a class="bestiary-body__link-myth" href="#">\n    <svg width="18" height="18" class="bestiary-body__logo">\n      <use href="${t($)+s}"></use>\n    </svg> \n    ${o}\n  </a>\n\n  <p class="bestiary-body__text">${i}</p>\n\n  <a class="bestiary-body__link-btn" href="${r}">\n    Читати далі\n    <svg width="19" height="18" class="bestiary-item__logo">\n      <use href="${t($)+"#arrow-up-right"}"></use>\n    </svg> \n  </a>\n</div>\n</li>`)).join("")}(e):z.innerHTML=`<li><picture class="erroe-photo">\n      <source srcset="${t(X)}" media="(min-width: 1200px)">\n      <source srcset="${t(U)}" media="(min-width: 768px)">\n      <img class="erroe-img" src="${t(N)}" alt="witcher-error">\n  </picture></li>`}document.addEventListener("keydown",(e=>{"Enter"===e.key&&(e.preventDefault(),D(),V())})),O.addEventListener("click",(()=>{W="",z.innerHTML=""}));var C;C=new URL(o("kyEFX").resolve("18IFR"),import.meta.url).toString();var J;J=new URL(o("kyEFX").resolve("2VASV"),import.meta.url).toString();var K;K=new URL(o("kyEFX").resolve("jT5Y5"),import.meta.url).toString();var Y;Y=new URL(o("kyEFX").resolve("eDPwt"),import.meta.url).toString();const Q=document.querySelector(".js-btn-plus"),B=document.querySelector(".js-btn-minus"),Z=document.querySelector(".js-btn-plus-w"),ee=document.querySelector(".js-btn-minus-w"),te=document.querySelector(".backdrop-borovik__container"),ie=document.querySelector(".js-myth-btns_ukr"),ne=document.querySelector(".js-myth-btn_witcher"),se=document.querySelector(".js-main-content"),oe=document.querySelector(".js-gallery-domovik-section"),re=document.querySelector(".js-backdrop-domovik-gallery"),ae=document.querySelector(".js-backdrop-domovik-gallery-witcher"),le=document.querySelector(".js-domovik-modal-img"),ce=document.querySelector(".js-domovik-modal-img-witch"),de=document.querySelector(".js-domovik-modal-video"),me=document.querySelector(".js-domovik-modal-video-witcher"),he=document.querySelector(".js-backdrop-close"),ge=document.querySelector(".js-backdrop-close-witch");function _e(){ne.classList.remove("myth-btns__active"),ie.classList.add("myth-btns__active"),se.innerHTML=`\n  <div class="bestiary-list__item borovik-item">\n  <div class="borovik-item__heder">\n    <svg width="40" height="40" class="borovik-item__logo">\n      <use href="${t($)+"#icon-logo-ua"}"></use>\n    </svg>\n\n    <div class="borovik-item__content">\n      <h3 class="borovik-item__title">Домовик</h3>\n      <h4 class="borovik-item__sub-title">Українська міфологія</h4>\n    </div>\n\n    <a href="#" class="borovik-item__svg-more">\n      <svg width="18" height="18" class="borovik-body__logo">\n        <use href="${t($)+"#more-vertical"}"></use>\n      </svg>\n    </a>\n  </div>\n\n  <picture class="borovik-item__picture">\n    <a href="#gallery">\n      <img class="borovik-item__img borovik-item__img-ukr" src="${t(f)}" alt="domovik"\n        loading="lazy">\n    </a>\n  </picture>\n\n  <div class="borovik-item__body borovik-body">\n\n    <a class="borovik-body__link-myth" href="#">\n      <svg width="18" height="18" class="borovik-body__logo">\n        <use href="${t($)+"#icon-logo-ua"}"></use>\n      </svg>\n      Міф\n    </a>\n\n    <p class="borovik-body__text">\n      Домовик (кутний бог) — у слов'янських народів домашній дух, міфологічний господар і покровитель будинку, що забезпечує нормальне життя сім'ї, родючість, здоров'я людей, тварин.\n    </p>\n\n  </div>\n</div>\n\n<ol class="main-content__list">\n<li class="main-content__list-item">\n  <h3 class="main-content__list-title">Зміст</h3>\n</li>\n<li class="main-content__list-item">1. Опис</li>\n<li class="main-content__list-item">2. Галерея</li>\n<li class="main-content__list-item">3. Відео</li>\n</ol>\n\n<div class="main-content__description description-content">\n\n<h4 class="description-content__title">Опис</h4>\n\n<p class="description-content__text">\n  Домовик, дух вважається спільним для дуже багатьох слов'янських народів одним з яких звісно є український проте навіть у цьому випадку домовик з українських казок трохи відрізняється від інших домовиків легенд Польщі чи балканських держав.\n</p>\n<p class="description-content__text">\n  Домовики — це також тіж нащадки чорта що постали з тих крапель які він струсунув коли за порадою Бога намочив руку у воді. Ці духи населяють майже кожну оселю і з ними треба вміти вправлятися. Домовик може постати з недоношеної дитини котру дівчина виносила таємне від усіх або зі старого чоловіка що все життя прожив у домі або навіть зі зноска найменшого курячого яйця яке треба носити під пахвою 9 днів щоб з нього вилупився домовик. Такий домовик найкращий, бо ґаздиня може виховати його під себе. Треба годувати його недосоленими стравами і посадити жити на горище, тоді домовик буде допомагати хазяйці сприяти урожаю проганяти мишей і охороняти дім.\n</p>\n<p class="description-content__text">\n  До речі Ви точно чули про устелений вираз “насолити комусь” себто “заподіяти комусь якусь капость” даний фразеологізм пішов саме від історії про домовика, бо домовику ніколи не можна солити їжу. Якщо посолити їжу один раз він образиться, а якщо домовику посолити їжу двічі, - то він зірве дах з дому і втече геть забравши з собою все щастя газдівства.\n</p>\n</div>`,oe.innerHTML=`\n      <div class="borovik__gallery-header gallery-borovik">\n        <h2 class="gallery-borovik__title">Галерея</h2>\n        <p class="gallery-borovik__link">Подивитись всі</p>\n      </div>\n\n      <ul id="gallery" class="gallery-borovik__list js-gallery-borovik-urk">\n\n        <li class="gallery-borovik__item gallery-borovik__item-col">\n          <img data-id="1" class="gallery-borovik__img" src="${t(f)}" alt="domovik"\n        </li>\n\n        <li class="gallery-borovik__item">\n          <img data-id="2" class="gallery-borovik__img" src="${t(C)}" alt="domovik-item-2">\n        </li>\n        <li class="gallery-borovik__item gallery-borovik__item-row">\n          <img data-id="3" class="gallery-borovik__img gallery-borovik__img-row" src="${t(J)}"\n            alt="domovik-item-2">\n        </li>\n      </ul>\n\n      <button class="gallery-borovik__btn js-gallery-btn-wich" type="button">У грі Відьмак</button>`,document.querySelector(".js-gallery-btn-wich").addEventListener("click",(()=>{ve()}));document.querySelector(".js-gallery-borovik-urk").addEventListener("click",(e=>{const{target:t}=e;if("IMG"!==t.tagName)return;re.classList.remove("backdrop-borovik-gallery--hidden"),document.body.classList.add("is-freeze");const i=document.querySelector(".js-wolf-head-img-box-urk"),n=Number(t.dataset.id),s=[...i.children];switch(n){case 1:s[0].hidden=!1,s[1].hidden=!0,s[2].hidden=!0;break;case 2:s[0].hidden=!0,s[1].hidden=!1,s[2].hidden=!0;break;case 3:s[0].hidden=!0,s[1].hidden=!0,s[2].hidden=!1}1===n&&(le.closest("picture").hidden=!0,de.hidden=!1,Q.classList.add("is-hidden"),B.classList.add("is-hidden")),le.src=t.src;const o=document.querySelector(".js-small-gallery");o.addEventListener("click",(e=>{const{target:t,currentTarget:i}=e;if("IMG"!==t.tagName)return;le.style.cssText="width:100%; height:100%;";const n=Number(t.closest("LI").dataset.id);switch(n){case 1:s[0].hidden=!1,s[1].hidden=!0,s[2].hidden=!0;break;case 2:s[0].hidden=!0,s[1].hidden=!1,s[2].hidden=!0;break;case 3:s[0].hidden=!0,s[1].hidden=!0,s[2].hidden=!1}1===n?(le.closest("picture").hidden=!0,de.hidden=!1,Q.classList.add("is-hidden"),B.classList.add("is-hidden")):(le.closest("picture").hidden=!1,de.hidden=!0,Q.classList.remove("is-hidden"),B.classList.remove("is-hidden")),le.src=t.src,[...i.children].forEach((e=>{e.classList.contains("small-img-active")&&e.classList.remove("small-img-active")})),t.closest(".small-gallery__item").classList.add("small-img-active")})),[...o.children].forEach((e=>{const t=Number(e.dataset.id);e.classList.contains("small-img-active")&&e.classList.remove("small-img-active"),t===n&&e.classList.add("small-img-active")}))}))}function ve(e){ie.classList.remove("myth-btns__active"),ne.classList.add("myth-btns__active"),se.innerHTML=`\n  <div class="bestiary-list__item borovik-item">\n        <div class="borovik-item__heder">\n          <svg width="40" height="40" class="borovik-item__logo">\n            <use href="${t($)+"#witcher-icon"}"></use>\n          </svg>\n\n          <div class="borovik-item__content">\n            <h3 class="borovik-item__title">Домовик (Гріг)</h3>\n            <h4 class="borovik-item__sub-title">Гра «Відьмак 3: Дикий Гін»</h4>\n          </div>\n\n          <a href="#" class="borovik-item__svg-more">\n            <svg width="18" height="18" class="borovik-body__logo">\n              <use href="${t($)+"#more-vertical"}"></use>\n            </svg>\n          </a>\n        </div>\n\n        <picture class="borovik-item__picture">\n          <a href="#gallery-w">\n            <img class="borovik-item__img borovik-item__img-witcher" src="${t(j)}" alt="grigg"\n              loading="lazy">\n          </a>\n        </picture>\n\n        <div class="borovik-item__body borovik-body">\n\n          <div class="author-img">\n            <h5 class="author-img__title">Знімок з гри відьмак 3</h5>\n            <a class="author-img__link" href="#">Автор малюнку</a>\n          </div>\n\n          <a class="borovik-body__link-myth" href="#">\n            <svg width="18" height="18" class="borovik-body__logo">\n              <use href="${t($)+"#leading"}"></use>\n            </svg>\n            Людиноподібні\n          </a>\n\n          <p class="borovik-body__text">\n          Домовик, гріг, або Імп, — це крихітний гуманоїд, відомий по обидва боки Яруги як пустотлива, але нешкідлива істота, що мешкає в сільській місцевості, лісах, а іноді й у підземних склепах.\n          </p>\n\n\n          <table class="borovik-witcher__table">\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Клас</td>\n              <td class="borovik-witcher__data">Людиноподібні</td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Місце появи/\n                <br> Проживання\n              </td>\n              <td class="borovik-witcher__data">Ліси, луки та склепи</td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Тактика</td>\n              <td class="borovik-witcher__data">Сховатись</td>\n            </tr>\n\n            <tr class="borovik-witcher__row">\n              <td class="borovik-witcher__data">Особливості</td>\n              <td class="borovik-witcher__data">Гострі вуха<br>\n              Широкі носи та животи\n              Пискливий голос</td>\n            </tr>\n          </table>\n\n        </div>\n      </div>\n      \n      <ol class="main-content__list">\n        <li class="main-content__list-item">\n          <h3 class="main-content__list-title">Зміст</h3>\n        </li>\n        <li class="main-content__list-item">1. Опис, Запис у бестіарії</li>\n        <li class="main-content__list-item">2. Галерея</li>\n        <li class="main-content__list-item">3. Відео</li>\n      </ol>\n\n      <div class="main-content__description description-content">\n\n        <h4 class="description-content__title">Опис</h4>\n\n        <p class="description-content__text">\n          Грігґи, цілком ймовірно, найменша з визнаних рас. Стоячи поруч з людиною, вони в кращому випадку доходять йому до коліна, і через це некеровану дитину іноді називають «дурним грігом». Оскільки зріст не дозволяє їм сидіти на коні , вони сідають на котів.\n        </p>\n        <br>\n        <h4 class="description-content__title">Запис у бестіарії</h4>\n\n        <p class="description-content__text">\n          З’являється в доповненні «Кров та Вино»\n        </p>\n        <p class="description-content__text">\n          Село Ґрігг у «Країні тисячі байок» (ілюзія).\n          Вони безперервно збирають трави, гриби та копають землю.\n        </p>\n        <p class="description-content__text">\n          Село Грігг — це місце в ілюзії «Країна тисячі байок». Воно розташовано у темному лісі,  на північ від початкової локації персонажу, біля одного з відгалужень дороги з жовтої цегли. Тут живуть грігги. Але якщо підійти ближче, вони кричать від страху і біжать до своїх хатинок.\n        </p>\n      </div>`,oe.innerHTML=`\n<div class="borovik__gallery-header gallery-borovik">\n<h2 class="gallery-borovik__title">Галерея</h2>\n<p class="gallery-borovik__link">Подивитись всі</p>\n</div>\n\n<ul id="gallery-w" class="gallery-borovik__list js-gallery-borovik-wich">\n  <li class="gallery-borovik__item gallery-borovik__item-col">\n    <img data-id="1" class="gallery-borovik__img gallery-borovik__img-col gallery-borovik__img-wicher_col"\n      src="${t(j)}" alt="domovik-witcher-item">\n  </li>\n  <li class="gallery-borovik__item">\n    <img data-id="2" class="gallery-borovik__img gallery-borovik__img-wicher_row gallery-static__domovik-witcher_second"\n      src="${t(K)}" alt="domovik-witcher-item-2">\n  </li>\n  <li class="gallery-borovik__item gallery-borovik__item-row">\n    <img data-id="3" class="gallery-borovik__img gallery-borovik__img-row gallery-static__domovik-witcher_last"\n      src="${t(Y)}" alt="domovik-witcher-item-3">\n  </li>\n</ul>\n\n<button class="gallery-borovik__btn js-gallery-btn-ukr" type="button">В укр. міфології</button>`,document.querySelector(".js-gallery-btn-ukr").addEventListener("click",(()=>{_e()}));document.querySelector(".js-gallery-borovik-wich").addEventListener("click",(e=>{const{target:t}=e;if("IMG"!==t.tagName)return;document.body.classList.add("is-freeze"),ae.classList.remove("backdrop-borovik-gallery--hidden");const i=document.querySelector(".js-wolf-head-img-box-witcher"),n=Number(t.dataset.id),s=[...i.children];switch(n){case 1:s[0].hidden=!1,s[1].hidden=!0,s[2].hidden=!0;break;case 2:s[0].hidden=!0,s[1].hidden=!1,s[2].hidden=!0;break;case 3:s[0].hidden=!0,s[1].hidden=!0,s[2].hidden=!1}1===n&&(ce.closest("picture").hidden=!0,me.hidden=!1,Z.classList.add("is-hidden"),ee.classList.add("is-hidden")),ce.src=t.src;const o=document.querySelector(".js-small-gallery-witch");o.addEventListener("click",(e=>{const{target:t,currentTarget:i}=e;if("IMG"!==t.tagName)return;ce.style.cssText="width:100%; height:100%;";const n=Number(t.closest("LI").dataset.id);switch(n){case 1:s[0].hidden=!1,s[1].hidden=!0,s[2].hidden=!0;break;case 2:s[0].hidden=!0,s[1].hidden=!1,s[2].hidden=!0;break;case 3:s[0].hidden=!0,s[1].hidden=!0,s[2].hidden=!1}1===n?(ce.closest("picture").hidden=!0,me.hidden=!1,Z.classList.add("is-hidden"),ee.classList.add("is-hidden")):(ce.closest("picture").hidden=!1,me.hidden=!0,Z.classList.remove("is-hidden"),ee.classList.remove("is-hidden")),ce.src=t.src,[...i.children].forEach((e=>{e.classList.contains("small-img-active")&&e.classList.remove("small-img-active")})),t.closest(".small-gallery__item").classList.add("small-img-active")})),[...o.children].forEach((e=>{const t=Number(e.dataset.id);e.classList.contains("small-img-active")&&e.classList.remove("small-img-active"),t===n&&e.classList.add("small-img-active")}))}))}ie.addEventListener("click",_e),ne.addEventListener("click",ve),_e(),he.addEventListener("click",(e=>{le.closest("picture").hidden=!1,de.hidden=!0,re.classList.add("backdrop-borovik-gallery--hidden"),document.body.classList.remove("is-freeze")})),ge.addEventListener("click",(()=>{ce.closest("picture").hidden=!1,me.hidden=!0,ae.classList.add("backdrop-borovik-gallery--hidden"),document.body.classList.remove("is-freeze")})),Q.addEventListener("click",(function(){te.offsetWidth<=360&&(le.style.objectFit="cover",le.style.objectPosition="top",console.log("hello"));let e=le.offsetHeight,t=le.offsetWidth;t+=25,e+=50,le.style.width=t+"px",le.style.height=e+"px"})),B.addEventListener("click",(function(){le.style.objectPosition="center";let e=le.offsetHeight,t=le.offsetWidth;t-=25,e-=50,le.style.width=t+"px",le.style.height=e+"px"})),Z.addEventListener("click",(function(){te.offsetWidth<=360&&(ce.style.objectFit="cover",ce.style.objectPosition="top",console.log("hello"));let e=ce.offsetHeight,t=ce.offsetWidth;t+=25,e+=50,ce.style.width=t+"px",ce.style.height=e+"px"})),ee.addEventListener("click",(function(){ce.style.objectPosition="center";let e=ce.offsetHeight,t=ce.offsetWidth;t-=25,e-=50,ce.style.width=t+"px",ce.style.height=e+"px"}));
//# sourceMappingURL=page-domovik.9feb9dc0.js.map
