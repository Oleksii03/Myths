const e=document.querySelector(".js-header-wrapper"),t=document.querySelector(".js-header-container").clientHeight,s=document.querySelector(".js-tab-menu"),c=document.querySelector(".nav-header__list-tab-inner"),n=document.querySelector(".js-tab-list"),r=document.querySelector(".js-svg-rotate"),d=document.querySelector(".js-header-btm-menu"),o=document.querySelector(".js-mob-menu-btn-close"),i=document.querySelector(".js-transform-btn"),a=document.querySelector(".js-mob-menu"),l=document.querySelector(".js-backdrop");function u(e){if(a.classList.toggle("is-hidden-mob-menu"),l.classList.toggle("backdrop--hidden"),!c.classList.contains("is-hidden"))return c.classList.add("is-hidden"),void r.classList.remove("active-rotate")}function m(e){i.classList.toggle("transform-btn")}e.style.height=t+"px",s.addEventListener("click",(e=>{const{target:t}=e;if(a.classList.contains("is-hidden-mob-menu")||(a.classList.add("is-hidden-mob-menu"),l.classList.add("backdrop--hidden")),t.classList.contains("dropdown"))return n.classList.toggle("is-hidden"),void r.classList.toggle("active-rotate")})),d.addEventListener("click",u),o.addEventListener("click",(e=>{u(),m()})),l.addEventListener("click",(e=>{u(),m()})),i.addEventListener("click",m);const h=document.querySelector(".js-backdrop-search");document.querySelector(".js-search-icon").addEventListener("click",(function(e){h.classList.remove("backdrop-search--hidden")})),h.addEventListener("click",(function(e){const{target:t,currentTarget:s}=e;if(t!==s)return;h.classList.add("backdrop-search--hidden")}));
//# sourceMappingURL=page-borovik.fa6d24d6.js.map
