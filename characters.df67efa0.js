!function(){function e(e,t,s,r){Object.defineProperty(e,t,{get:s,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},i=s.parcelRequired7c6;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var s={id:e,exports:{}};return r[e]=s,t.call(s.exports,s,s.exports),s.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},s.parcelRequired7c6=i),i.register("iE7OH",(function(t,s){var r,n;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return n}),(function(e){return n=e}));var i={};r=function(e){for(var t=Object.keys(e),s=0;s<t.length;s++)i[t[s]]=e[t[s]]},n=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i.register("aNJCr",(function(t,s){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var n={};function i(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=n[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),n[e]=t),t}})),i("iE7OH").register(JSON.parse('{"lAzv8":"characters.df67efa0.js","bb9Vd":"ukrainskii-kozak-art-1_PC.87b80e1c.jpg","kTwkG":"white-whitch-1.5727c56a.png","l2EtK":"Geralt.2b3a04db.jpg","aueHW":"Yennefer.3107b75e.jpg","ee16w":"sprite.88c93e7d.svg"}'));const a=document.querySelector(".js-header-wrapper"),c=document.querySelector(".js-header-container").clientHeight,o=document.querySelector(".js-tab-menu"),l=document.querySelector(".nav-header__list-tab-inner"),d=document.querySelector(".js-tab-list"),u=document.querySelector(".js-svg-rotate"),h=document.querySelector(".js-header-btm-menu"),m=document.querySelector(".js-mob-menu-btn-close"),b=document.querySelector(".js-transform-btn"),g=document.querySelector(".js-mob-menu"),_=document.querySelector(".js-backdrop");function v(e){if(document.body.classList.toggle("is-freeze"),g.classList.toggle("is-hidden-mob-menu"),_.classList.toggle("backdrop--hidden"),!l.classList.contains("is-hidden"))return l.classList.add("is-hidden"),void u.classList.remove("active-rotate")}function y(e){b.classList.toggle("transform-btn")}a.style.height=c+"px",o.addEventListener("click",(e=>{const{target:t}=e;if(g.classList.contains("is-hidden-mob-menu")||(g.classList.add("is-hidden-mob-menu"),_.classList.add("backdrop--hidden"),y(),document.body.classList.remove("is-freeze")),t.classList.contains("dropdown"))return d.classList.toggle("is-hidden"),void u.classList.toggle("active-rotate")})),h.addEventListener("click",v),m.addEventListener("click",(e=>{v(),y(),document.body.classList.remove("is-freeze")})),_.addEventListener("click",(e=>{v(),y(),document.body.classList.remove("is-freeze")})),b.addEventListener("click",y);const f=document.querySelector(".js-backdrop-search");document.querySelector(".js-search-icon").addEventListener("click",(function(e){f.classList.toggle("backdrop-search--hidden"),document.body.style.overflow=document.body.style.overflow?"":"hidden"}));var p;p=i("aNJCr").getBundleURL("lAzv8")+i("iE7OH").resolve("bb9Vd");var L;L=i("aNJCr").getBundleURL("lAzv8")+i("iE7OH").resolve("kTwkG");var w;w=i("aNJCr").getBundleURL("lAzv8")+i("iE7OH").resolve("l2EtK");var k;k=i("aNJCr").getBundleURL("lAzv8")+i("iE7OH").resolve("aueHW");const E=[{name:"Козак-характерник",genus:"Козаки-характерники",img:t(p),description:"Відьма́к та Характе́рник (відьма́н) — персонаж слов'янської міфології, чаклун ...",ref:"./page-characters.html"},{name:"Чародійки",genus:"Чаклунки/Відьми",img:t(L),description:"Ві́дьма, чаклу́нка (чародійка) — жінка, наділена чаклунськими здібностями ...",ref:"#"}],j=[{name:"Ґеральт з Рівії",genus:"Відтмак",img:t(w),logo:"#witcher-icon",description:"Ґеральт з Рівії, «Білий Вовк» — головний герой літературного циклу романів ...",ref:"#"},{name:"Йеннефер",genus:"Чародійка",img:t(k),logo:"#icon-Magic-center",description:"Йеннефер — одна з головних героїнь літературного циклу А.Сапковського ...",ref:"#"}];var H;H=i("aNJCr").getBundleURL("lAzv8")+i("iE7OH").resolve("ee16w");const S=document.querySelector(".characters-btn__witcher"),$=document.querySelector(".jscharacters-btn-ukr"),q=document.querySelector(".js-characters-btn-box"),z=document.querySelector(".js-characters-section-list");function x(e){q.classList.remove("characters-btn__active"),$.classList.add("characters-btn__active"),S.classList.remove("characters-btn__active"),z.innerHTML=E.map((({name:e,genus:s,img:r,description:n,ref:i})=>`<li class="bestiary-list__item bestiary-item">\n    <div class="bestiary-item__heder">\n        <svg width="40" height="40" class="bestiary-item__logo">\n          <use href="${t(H)+"#icon-ukr-characters"}"></use>\n        </svg> \n\n      <div class="bestiary-item__content">\n        <h3 class="bestiary-item__title">${e}</h3>\n        <h4 class="bestiary-item__sub-title">Українська міфологія</h4>\n      </div>\n\n      <a href="#" class="bestiary-item__svg-more">\n        <svg width="18" height="18" class="bestiary-body__logo">\n          <use href="${t(H)+"#more-vertical"}"></use>\n        </svg> \n      </a>\n    </div>\n\n    <picture class="bestiary-item__picture">\n      <a href="${i}">\n        <img class="bestiary-item__img bestiary-item__img-ukr" src="${r}" alt="${e}" loading="lazy">\n      </a>\n    </picture>\n\n    <div class="bestiary-item__body bestiary-body">\n\n      <a class="bestiary-body__link-myth" href="#">\n        <svg width="18" height="18" class="bestiary-body__logo">\n          <use href="${t(H)+"#icon-profile"}"></use>\n        </svg> \n        ${s}\n      </a>\n\n      <p class="bestiary-body__text">${n}</p>\n\n      <a class="bestiary-body__link-btn" href="${i}">\n        Читати далі\n        <svg width="19" height="18" class="bestiary-item__logo">\n          <use href="${t(H)+"#arrow-up-right"}"></use>\n        </svg> \n      </a>\n    </div>\n  </li>`)).join("")}$.addEventListener("click",x),S.addEventListener("click",(function(e){q.classList.add("characters-btn__active"),$.classList.remove("characters-btn__active"),S.classList.add("characters-btn__active"),z.innerHTML=(s=j,s.map((({name:e,genus:s,img:r,description:n,ref:i,logo:a})=>`<li class="bestiary-list__item bestiary-item">\n    <div class="bestiary-item__heder">\n        <svg width="40" height="40" class="characters-item__logo">\n          <use class="characters-item__logo_inner" href="${t(H)+a}"></use>\n        </svg> \n      <div class="bestiary-item__content">\n        <h3 class="bestiary-item__title">${e}</h3>\n        <h4 class="bestiary-item__sub-title">Гра «Відьмак 3: Дикий Гін»</h4>\n      </div>\n\n      <a href="#" class="bestiary-item__svg-more">\n        <svg width="18" height="18" class="bestiary-body__logo">\n          <use href="${t(H)+"#more-vertical"}"></use>\n        </svg> \n      </a>\n    </div>\n\n    <picture class="bestiary-item__picture">\n      <a href="${i}">\n        <img class="bestiary-item__img bestiary-item__img-witcher js-bestiary-item-img-witcher" src="${r}" alt="${e}" loading="lazy">\n      </a>\n    </picture>\n\n    <div class="bestiary-item__body bestiary-body">\n      <a class="bestiary-body__link-myth" href="#">\n        <svg width="18" height="18" class="bestiary-item__logo">\n          <use href="${t(H)+"#icon-profile"}"></use>\n        </svg> \n        ${s}\n      </a>\n\n      <p class="bestiary-body__text">${n}</p>\n\n      <a class="bestiary-body__link-btn" href="${i}">\n        Читати далі\n        <svg width="19" height="18" class="bestiary-item__logo">\n          <use href="${t(H)+"#arrow-up-right"}"></use>\n        </svg> \n      </a>\n    </div>\n  </li>`)).join(""));var s})),x()}();
//# sourceMappingURL=characters.df67efa0.js.map
