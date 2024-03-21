import { bestiaryUkr } from "./data/bestiary-ukr";
import { bestiaryWitcher } from "./data/bestiary-witcher";

const backdropSearch = document.querySelector('.js-backdrop-search');
const btnSearch = document.querySelector('.js-search-icon');

const searchList = document.querySelector('.js-search-list');
const inputEl = document.querySelector('.js-search-input');
const btnGlass = document.querySelector('.js-btn-search');

btnSearch.addEventListener('click', onOpenBackdropSearch);

function onOpenBackdropSearch (e) {
  backdropSearch.classList.toggle('backdrop-search--hidden');

  document.body.style.overflow = document.body.style.overflow ? '' : 'hidden';
}

// -------------------------
let searchValue = '';

inputEl.addEventListener('change', (e) => {
  searchValue = e.target.value.toLocaleLowerCase().trim();
});


btnGlass.addEventListener('click', createMarkup);
backdropSearch.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    createMarkup();
  }
});

function searchСharacters () {
  return [...bestiaryUkr, ...bestiaryWitcher].filter(el => el.name.toLocaleLowerCase() === searchValue);
}

function createMarkup () {
  const result = searchСharacters();

  console.log(result);
  // .map(el => {
  //   console.log(el);
  // });
}

