!function(){const e=document.querySelector(".js-header-wrapper"),t=document.querySelector(".js-header-container").clientHeight,s=document.querySelector(".js-tab-menu"),o=document.querySelector(".nav-header__list-tab-inner"),c=document.querySelector(".js-tab-list"),n=document.querySelector(".js-svg-rotate"),d=document.querySelector(".js-header-btm-menu"),r=document.querySelector(".js-mob-menu-btn-close"),i=document.querySelector(".js-transform-btn"),a=document.querySelector(".js-mob-menu"),l=document.querySelector(".js-backdrop");function u(e){if(document.body.classList.toggle("is-freeze"),a.classList.toggle("is-hidden-mob-menu"),l.classList.toggle("backdrop--hidden"),!o.classList.contains("is-hidden"))return o.classList.add("is-hidden"),void n.classList.remove("active-rotate")}function m(e){i.classList.toggle("transform-btn")}e.style.height=t+"px",s.addEventListener("click",(e=>{const{target:t}=e;if(a.classList.contains("is-hidden-mob-menu")||(a.classList.add("is-hidden-mob-menu"),l.classList.add("backdrop--hidden"),m(),document.body.classList.remove("is-freeze")),t.classList.contains("dropdown"))return c.classList.toggle("is-hidden"),void n.classList.toggle("active-rotate")})),d.addEventListener("click",u),r.addEventListener("click",(e=>{u(),m(),document.body.classList.remove("is-freeze")})),l.addEventListener("click",(e=>{u(),m(),document.body.classList.remove("is-freeze")})),i.addEventListener("click",m);const b=document.querySelector(".js-backdrop-search");document.querySelector(".js-search-icon").addEventListener("click",(function(e){b.classList.remove("backdrop-search--hidden"),document.body.style.overflow=document.body.style.overflow?"":"hidden"})),b.addEventListener("click",(function(e){const{target:t,currentTarget:s}=e;if(t!==s)return;b.classList.add("backdrop-search--hidden"),document.body.style.overflow=document.body.style.overflow?"":"hidden"}))}();
//# sourceMappingURL=characters.1f47894f.js.map
