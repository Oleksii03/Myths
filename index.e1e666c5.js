!function(){const e=document.querySelector(".js-header-wrapper"),t=document.querySelector(".js-header-container").clientHeight,s=document.querySelector(".js-tab-menu"),n=document.querySelector(".nav-header__list-tab-inner"),i=document.querySelector(".js-tab-list"),a=document.querySelector(".js-svg-rotate"),c=document.querySelector(".js-header-btm-menu"),r=document.querySelector(".js-mob-menu-btn-close"),o=document.querySelector(".js-transform-btn"),C=document.querySelector(".js-mob-menu"),l=document.querySelector(".js-backdrop");function d(e){if(C.classList.toggle("is-hidden-mob-menu"),l.classList.toggle("backdrop--hidden"),!n.classList.contains("is-hidden"))return n.classList.add("is-hidden"),void a.classList.remove("active-rotate")}function m(e){o.classList.toggle("transform-btn")}e.style.height=t+"px",s.addEventListener("click",(e=>{const{target:t}=e;if(C.classList.contains("is-hidden-mob-menu")||(C.classList.add("is-hidden-mob-menu"),l.classList.add("backdrop--hidden")),t.classList.contains("dropdown"))return i.classList.toggle("is-hidden"),void a.classList.toggle("active-rotate")})),c.addEventListener("click",d),r.addEventListener("click",(e=>{d(),m()})),l.addEventListener("click",(e=>{d(),m()})),o.addEventListener("click",m);const L=document.querySelector(".js-backdrop-search");document.querySelector(".js-search-icon").addEventListener("click",(function(e){L.classList.remove("backdrop-search--hidden")})),L.addEventListener("click",(function(e){const{target:t,currentTarget:s}=e;if(t!==s)return;L.classList.add("backdrop-search--hidden")}));const h=[{name:"Боровик",description:"Боровик — (за слов'янською міфологією) один\n    з лісових духів, господар борів та",image:"https://github.com/Oleksii03/Myths/blob/main/src/images/beasts-main/item-mob-1.jpg?raw=true"},{name:"Грифон (Гриф)",description:"Грифони — суперечливі істоти, які одночасно об'єднують Небо і Землю ...",image:"https://github.com/Oleksii03/Myths/blob/main/src/images/beasts-main/item-mob-2.jpg?raw=true"},{name:"Домовик",description:"Домовик  — у слов'янських народів домашній дух, міфологічний господар ...",image:"https://github.com/Oleksii03/Myths/blob/main/src/images/beasts-main/item-mob-3.jpg?raw=true"}],g=document.querySelector(".js-bestiary-section-list"),b=document.querySelector(".js-myth-btn-ukr"),u=document.querySelector(".js-myth-btn-witcher");function y(e){g.innerHTML=h.map((({name:e,description:t,image:s},n)=>`<li class="bestiary-list__item bestiary-item">\n\n    <div class="bestiary-item__heder">\n\n      \x3c!-- <svg width="40" height="40" class="list-beasts__logo bestiary-item__logo">\n        <use href="./images/sprite.svg#icon-logo-ua"></use>\n      </svg> --\x3e\n\n      <svg class="list-beasts__logo bestiary-item__logo" xmlns="http://www.w3.org/2000/svg" width="40" height="40"\n        viewBox="0 0 40 40" fill="none">\n        <circle cx="20" cy="20" r="20" fill="#005AC2" />\n        <path\n          d="M24.8031 3.33333L24.8092 3.34073L22.3645 5.60583L24.9478 5.34376L23.8701 7.44764L26.5335 6.3248C28.3637 11.2119 26.5771 17.1011 22.8546 17.9382C22.3958 16.1661 20.4655 15.2878 20.3307 13.9301C20.352 13.9366 20.373 13.9431 20.3946 13.9489C20.7329 14.0394 21.0761 14.0316 21.3938 13.9441L23.1534 15.5429L24.5991 14.399C24.0837 14.5971 22.598 14.3011 22.2716 13.4265C22.4924 13.2002 22.6601 12.9177 22.7471 12.5937C22.7811 12.4671 22.8001 12.3398 22.8074 12.2134L23.3333 13.3333L23.9794 12.6211C24.5132 13.0105 24.8526 13.5714 24.7837 14.0974C24.7837 14.0974 25.9508 12.9663 25.9508 12.0439C25.9508 11.4852 20.901 9.97908 20.901 9.97908L16.837 6.62418L18.034 8.807L14.6596 7.42725L17.1194 9.60916C14.2773 11.576 15.5735 15.5492 16.9937 17.9416C12.9687 17.2651 9.77474 12.5327 10.2903 7.81121L13.735 6.31879L11.5594 5.95976L13.6039 3.62558L11.3628 4.43165C11.3654 4.42697 11.3677 4.42222 11.3703 4.41754C-0.414881 9.0507 3.22141 30.0525 6.90936 33.6142C6.89606 33.5222 6.88388 33.434 6.87156 33.3449C5.82702 29.4163 5.44531 24.5701 5.64656 20.0364C5.85796 15.27 6.68494 10.8748 8.22214 8.19525L9.35754 8.84367C8.03496 11.1493 7.15954 15.4489 6.95339 20.094C6.81745 23.1576 6.96081 26.3821 7.39264 29.32C7.82132 29.4521 8.44586 29.9916 9.30329 30.9433C8.96603 30.0108 8.82869 29.0922 8.84955 28.2694C10.2696 31.1797 13.5634 33.1054 16.1739 32.6216C17.7449 32.3304 19.1001 31.7324 20.2206 30.9121L20.7323 31.989C19.3275 32.3408 19.1358 34.2686 19.7007 35.8386C19.823 34.4498 20.4959 33.7575 21.2218 33.5822C20.7599 34.6905 20.8929 35.7212 21.0036 36.6667C21.7141 35.8182 22.5065 35.0047 22.6575 33.9178C23.2692 34.4299 23.5197 35.4189 22.7411 36.6459C24.5835 35.5651 24.9507 33.7126 23.2996 32.6166L21.0547 30.221C21.4689 29.8333 21.8415 29.4107 22.171 28.959L24.9206 30.061C24.6446 31.0173 25.3289 32.2621 26.3045 33.0862C25.7406 31.8786 25.9667 30.9851 26.4838 30.4946C26.5979 31.7093 27.2286 32.5337 27.7951 33.293C27.9862 32.1988 28.2704 31.0932 27.7802 30.0808C28.5513 30.1898 29.2642 30.8889 29.2039 32.3075C30.2092 30.5393 29.6316 28.8358 27.7519 28.7088L22.7725 28.0178C23.6655 26.4125 24.0798 24.5377 23.9635 22.6062C24.9567 20.1818 27.4676 21.7808 27.7802 26.04C29.6999 20.4278 32.4758 23.3426 31.8979 27.7522C32.7245 26.1191 33.4264 25.3066 33.9882 25.2204C33.2342 18.7994 31.1562 11.8392 28.5537 7.7056L29.6613 7.01115C33.1842 12.6066 35.6191 22.4236 35.6029 30.1698C38.5711 22.0733 35.4386 5.26049 24.8031 3.33333ZM22.7411 36.6459L22.7392 36.6469L22.7382 36.6504L22.7411 36.6459ZM20.8647 11.4852C20.9253 11.4833 20.9877 11.4903 21.0503 11.5071C21.3845 11.5965 21.573 11.9223 21.4834 12.2558C21.3938 12.5895 21.0674 12.7776 20.733 12.6882C20.3988 12.5988 20.2103 12.2731 20.2999 11.9394C20.3671 11.6891 20.5675 11.5208 20.8046 11.4899C20.8243 11.4874 20.8445 11.4857 20.8647 11.4852ZM16.3985 22.8627C17.23 22.8488 17.9831 23.3346 18.2305 24.4335C18.23 26.9397 17.5615 29.2407 15.2809 29.8407C13.3473 30.3494 10.4002 29.0445 9.39254 26.0923C10.2521 24.62 12.0079 24.5566 13.7912 27.6704C12.9104 24.7649 14.7983 22.8897 16.3985 22.8627Z"\n          fill="#E9C400" />\n      </svg>\n\n      <div class="bestiary-item__content">\n        <h3 class="bestiary-item__title">${e}</h3>\n        <h4 class="bestiary-item__sub-title">Українська міфологія</h4>\n      </div>\n\n      <a href="#" class="bestiary-item__svg-more">\n        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">\n          <path\n            d="M12 7.69231C10.8954 7.69231 10 6.86576 10 5.84615C10 4.82655 10.8954 4 12 4C13.1046 4 14 4.82655 14 5.84615C14 6.86576 13.1046 7.69231 12 7.69231Z"\n            fill="#363A3A" />\n          <path\n            d="M12 13.8462C10.8954 13.8462 10 13.0196 10 12C10 10.9804 10.8954 10.1538 12 10.1538C13.1046 10.1538 14 10.9804 14 12C14 13.0196 13.1046 13.8462 12 13.8462Z"\n            fill="#363A3A" />\n          <path\n            d="M10 18.1538C10 19.1734 10.8954 20 12 20C13.1046 20 14 19.1734 14 18.1538C14 17.1342 13.1046 16.3077 12 16.3077C10.8954 16.3077 10 17.1342 10 18.1538Z"\n            fill="#363A3A" />\n        </svg>\n      </a>\n\n    </div>\n\n    <picture class="bestiary-item__picture">\n      <a href="#">\n        <img class="bestiary-item__img" src="${s}" alt="${e}" loading="lazy">\n      </a>\n    </picture>\n\n    <div class="bestiary-item__body bestiary-body">\n\n      <a class="bestiary-body__link-myth" href="#">\n        \x3c!-- <svg width="18" height="18" class="bestiary-body__logo">\n          <use href="./images/sprite.svg#icon-logo-ua"></use>\n        </svg> --\x3e\n        <svg class="bestiary-body__logo" xmlns="http://www.w3.org/2000/svg" width="18" height="18"\n          viewBox="0 0 18 18" fill="none">\n          <circle cx="9" cy="8.99997" r="9" fill="#005AC2" />\n          <path\n            d="M11.1614 1.5L11.1642 1.50333L10.0641 2.52263L11.2266 2.40469L10.7416 3.35144L11.9401 2.84616C12.7637 5.04534 11.9597 7.69549 10.2846 8.0722C10.0782 7.27476 9.20951 6.8795 9.14887 6.26854C9.15842 6.27146 9.1679 6.27442 9.1776 6.27703C9.32984 6.31773 9.48429 6.31421 9.62723 6.27483L10.4191 6.99432L11.0696 6.47955C10.8377 6.56869 10.1691 6.43548 10.0223 6.04191C10.1216 5.94007 10.1971 5.81296 10.2363 5.66717C10.2515 5.61019 10.2601 5.55292 10.2633 5.49602L10.5 6L10.7908 5.67949C11.031 5.85473 11.1837 6.10713 11.1527 6.34385C11.1527 6.34385 11.6779 5.83484 11.6779 5.41974C11.6779 5.16834 9.4055 4.49059 9.4055 4.49059L7.57671 2.98088L8.11536 3.96315L6.59687 3.34226L7.70378 4.32412C6.42481 5.2092 7.0081 6.99715 7.6472 8.07371C5.83595 7.76929 4.39867 5.63973 4.63067 3.51505L6.18078 2.84346L5.20176 2.6819L6.12178 1.63151L5.11331 1.99425C5.11448 1.99214 5.11552 1.99 5.11668 1.9879C-0.18666 4.07282 1.44967 13.5236 3.10925 15.1264C3.10326 15.085 3.09778 15.0453 3.09224 15.0052C2.6222 13.2373 2.45043 11.0565 2.54099 9.01638C2.63612 6.87151 3.00826 4.89368 3.7 3.68786L4.21093 3.97965C3.61577 5.01718 3.22183 6.95201 3.12906 9.04231C3.06789 10.4209 3.1324 11.8719 3.32673 13.194C3.51963 13.2535 3.80067 13.4962 4.18652 13.9245C4.03475 13.5049 3.97295 13.0915 3.98234 12.7212C4.62134 14.0309 6.10355 14.8974 7.27828 14.6797C7.98526 14.5487 8.59507 14.2796 9.09929 13.9104L9.32956 14.3951C8.69741 14.5533 8.61114 15.4209 8.86534 16.1274C8.9204 15.5024 9.22318 15.1909 9.54984 15.112C9.342 15.6107 9.40185 16.0746 9.45165 16.5C9.77138 16.1182 10.128 15.7521 10.1959 15.263C10.4712 15.4935 10.5839 15.9385 10.2335 16.4907C11.0626 16.0043 11.2278 15.1707 10.4849 14.6775L9.47465 13.5994C9.66106 13.425 9.82871 13.2348 9.97698 13.0316L11.2143 13.5275C11.0901 13.9578 11.398 14.518 11.8371 14.8888C11.5833 14.3454 11.685 13.9433 11.9178 13.7226C11.9691 14.2692 12.2529 14.6402 12.5078 14.9819C12.5938 14.4895 12.7217 13.992 12.5011 13.5364C12.8481 13.5854 13.1689 13.9 13.1418 14.5384C13.5942 13.7427 13.3342 12.9761 12.4884 12.919L10.2477 12.608C10.6495 11.8856 10.836 11.042 10.7836 10.1728C11.2306 9.08182 12.3605 9.80137 12.5011 11.718C13.365 9.19249 14.6142 10.5042 14.3541 12.4885C14.726 11.7536 15.0419 11.388 15.2947 11.3492C14.9554 8.45974 14.0203 5.32764 12.8492 3.46752L13.3476 3.15502C14.9329 5.67296 16.0286 10.0906 16.0213 13.5764C17.357 9.93298 15.9474 2.36722 11.1614 1.5ZM10.2335 16.4907L10.2327 16.4911L10.2322 16.4927L10.2335 16.4907ZM9.38915 5.16834C9.41643 5.16749 9.4445 5.17063 9.47269 5.17818C9.62307 5.21841 9.7079 5.36504 9.66758 5.51513C9.62726 5.66526 9.48038 5.74994 9.3299 5.7097C9.17949 5.66947 9.09466 5.5229 9.13498 5.37274C9.16522 5.26009 9.25541 5.18437 9.3621 5.17048C9.37098 5.16934 9.38005 5.16859 9.38915 5.16834ZM7.37936 10.2882C7.75352 10.2819 8.09243 10.5006 8.20378 10.9951C8.20353 12.1229 7.90273 13.1583 6.87646 13.4283C6.00631 13.6572 4.68012 13.07 4.22668 11.7415C4.6135 11.079 5.40358 11.0505 6.20608 12.4517C5.80971 11.1442 6.65927 10.3004 7.37936 10.2882Z"\n            fill="#E9C400" />\n        </svg>\n        Міф\n      </a>\n\n      <p class="bestiary-body__text">${t}</p>\n\n      <a class="bestiary-body__link-btn" href="#">\n        Читати далі\n        <svg class="bestiary-body__svg_arr" xmlns="http://www.w3.org/2000/svg" width="19" height="18"\n          viewBox="0 0 19 18" fill="none">\n          <path\n            d="M7.82002 3.63222C7.39784 3.62425 7.06205 3.96004 7.07002 4.38222C7.07799 4.8044 7.42669 5.1531 7.84887 5.16106L12.0543 5.24041L4.26746 13.0273C3.99288 13.3018 3.99288 13.747 4.26746 14.0216C4.54205 14.2962 4.98725 14.2962 5.26183 14.0216L13.0487 6.23478L13.128 10.4402C13.136 10.8624 13.4847 11.2111 13.9069 11.2191C14.329 11.227 14.6648 10.8912 14.6569 10.4691L14.5447 4.52325C14.5367 4.10107 14.188 3.75237 13.7658 3.7444L7.82002 3.63222Z"\n            fill="#3A3000" />\n        </svg>\n      </a>\n    </div>\n\n  </li>`)).join(""),u.classList.remove("myth-btns__active"),b.classList.add("myth-btns__active")}y(),b.addEventListener("click",y),u.addEventListener("click",(function(e){g.innerHTML="",b.classList.remove("myth-btns__active"),u.classList.add("myth-btns__active")}))}();
//# sourceMappingURL=index.e1e666c5.js.map
