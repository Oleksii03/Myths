const headerWrapp = document.querySelector('.js-header-wrapper');
const headerContainer = document.querySelector('.js-header-container').clientHeight;

const tabMenu = document.querySelector('.js-tab-menu');
const tabMenuInner = document.querySelector('.nav-header__list-tab-inner');
const dropdown = document.querySelector('.js-tab-list');
const svgRotate = document.querySelector('.js-svg-rotate');

const mobMenuBtn = document.querySelector('.js-header-btm-menu');
const mobMenu = document.querySelector('.js-mob-menu');


(() => headerWrapp.style.height = headerContainer + 'px')();

tabMenu.addEventListener('click', (e) => {
  const { target } = e;

  if (!mobMenu.classList.contains('is-hidden-mob-menu')) {
    mobMenu.classList.add('is-hidden-mob-menu');;
  }

  if (target.classList.contains('dropdown')) {
    dropdown.classList.toggle('is-hidden');
    svgRotate.classList.toggle('active-rotate');
    return;
  }

});

// -------mobMenu----------------------------

mobMenuBtn.addEventListener('click', onOpenMobMenu);

function onOpenMobMenu (e) {

  if (!tabMenuInner.classList.contains('is-hidden')) {
    tabMenuInner.classList.add('is-hidden');
    svgRotate.classList.remove('active-rotate');
  }

  mobMenu.classList.toggle('is-hidden-mob-menu');
}
