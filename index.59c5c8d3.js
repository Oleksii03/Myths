!function(){var e=document.querySelector(".js-header-wrapper"),t=document.querySelector(".js-header-container").clientHeight,s=document.querySelector(".js-tab-menu"),n=document.querySelector(".nav-header__list-tab-inner"),c=document.querySelector(".js-tab-list"),i=document.querySelector(".js-svg-rotate"),d=document.querySelector(".js-header-btm-menu"),o=document.querySelector(".js-mob-menu"),r=document.querySelector(".js-backdrop");e.style.height=t+"px",s.addEventListener("click",(function(e){var t=e.target;if(o.classList.contains("is-hidden-mob-menu")||(o.classList.add("is-hidden-mob-menu"),r.classList.add("backdrop--hidden")),t.classList.contains("dropdown"))return c.classList.toggle("is-hidden"),void i.classList.toggle("active-rotate")})),d.addEventListener("click",(function(e){o.classList.toggle("is-hidden-mob-menu"),r.classList.toggle("backdrop--hidden"),n.classList.contains("is-hidden")||(n.classList.add("is-hidden"),i.classList.remove("active-rotate"))}))}();
//# sourceMappingURL=index.59c5c8d3.js.map
