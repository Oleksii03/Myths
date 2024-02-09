const backdropSearch = document.querySelector('.js-backdrop-search');
const btnSearch = document.querySelector('.js-search-icon');

btnSearch.addEventListener('click', onOpenBackdropSearch);
backdropSearch.addEventListener('click', onCloseBackdropSearch);

function onOpenBackdropSearch (e) {
  backdropSearch.classList.remove('backdrop-search--hidden');

  document.body.style.overflow = document.body.style.overflow ? '' : 'hidden';
}

function onCloseBackdropSearch (e) {
  const { target, currentTarget } = e;

  if (target !== currentTarget) return;

  backdropSearch.classList.add('backdrop-search--hidden');

  document.body.style.overflow = document.body.style.overflow ? '' : 'hidden';
}