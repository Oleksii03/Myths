const headerWrapp = document.querySelector('.js-header-wrapper');
const headerContainer = document.querySelector('.js-header-container').clientHeight;
const tabMenu = document.querySelector('.js-tab-menu');
const dropdown = document.querySelector('.js-tab-list');

(() => headerWrapp.style.height = headerContainer + 'px')();

tabMenu.addEventListener('click', (e) => {
  const { target } = e;

  if (target.classList.contains('dropdown')) {
    dropdown.classList.toggle('is-hidden');
    return;
  }

});