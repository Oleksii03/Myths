const headerWrapp = document.querySelector('.js-header-wrapper');
const headerContainer = document.querySelector('.js-header-container').clientHeight;

const tabMenu = document.querySelector('.js-tab-menu');
const dropdown = document.querySelector('.js-tab-list');

const mobMenuBtn = document.querySelector('.js-header-btm-menu');
const mobMenuBtnClose = document.querySelector('.js-btn-close-menu');
const mobMenu = document.querySelector('.js-mob-menu');

(() => headerWrapp.style.height = headerContainer + 'px')();

tabMenu.addEventListener('click', (e) => {
  const { target } = e;

  if (target.classList.contains('dropdown')) {
    dropdown.classList.toggle('is-hidden');
    return;
  }

});

// -------mobMenu----------------------------

mobMenuBtn.addEventListener('click', onOpenMobMenu);
mobMenuBtnClose.addEventListener('click', onCloseMobMenu);

function onOpenMobMenu (e) {
  mobMenu.classList.remove('is-hidden-mob-menu');
}

function onCloseMobMenu (e) {
  mobMenu.classList.add('is-hidden-mob-menu');
}