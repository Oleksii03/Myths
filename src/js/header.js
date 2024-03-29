const headerWrapp = document.querySelector('.js-header-wrapper');
const headerContainer = document.querySelector('.js-header-container').clientHeight;

const tabMenu = document.querySelector('.js-tab-menu');
const tabMenuInner = document.querySelector('.nav-header__list-tab-inner');
const dropdown = document.querySelector('.js-tab-list');
const svgRotate = document.querySelector('.js-svg-rotate');

const mobMenuBtn = document.querySelector('.js-header-btm-menu');
const mobMenuBtnClose = document.querySelector('.js-mob-menu-btn-close');
const transformBtn = document.querySelector('.js-transform-btn');
const mobMenu = document.querySelector('.js-mob-menu');

const backdrop = document.querySelector('.js-backdrop');


(() => headerWrapp.style.height = headerContainer + 'px')();

// --------Tab-Menu----------------------------------------

tabMenu.addEventListener('click', (e) => {
  const { target } = e;

  if (!mobMenu.classList.contains('is-hidden-mob-menu')) {
    mobMenu.classList.add('is-hidden-mob-menu');
    backdrop.classList.add('backdrop--hidden');
    onTransformBtnClose();
    document.body.classList.remove('is-freeze');
  }

  if (target.classList.contains('dropdown')) {
    dropdown.classList.toggle('is-hidden');
    svgRotate.classList.toggle('active-rotate');
    return;
  }

});

// -------/-Tab-Menu----------------------------------------

// -------mobMenu----------------------------

mobMenuBtn.addEventListener('click', onOpenMobMenu);

mobMenuBtnClose.addEventListener('click', (e) => {
  onOpenMobMenu();
  onTransformBtnClose();
  document.body.classList.remove('is-freeze');
});

backdrop.addEventListener('click', (e) => {
  onOpenMobMenu();
  onTransformBtnClose();
  document.body.classList.remove('is-freeze');
});


function onOpenMobMenu (e) {
  document.body.classList.toggle('is-freeze');

  mobMenu.classList.toggle('is-hidden-mob-menu');
  backdrop.classList.toggle('backdrop--hidden');

  if (!tabMenuInner.classList.contains('is-hidden')) {
    tabMenuInner.classList.add('is-hidden');
    svgRotate.classList.remove('active-rotate');
    return;
  }

}

// ------/-mobMenu----------------------------

transformBtn.addEventListener('click', onTransformBtnClose);

function onTransformBtnClose (e) {
  transformBtn.classList.toggle('transform-btn');
};
