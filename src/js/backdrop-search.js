import { bestiaryUkr } from "./data/bestiary-ukr";
import { bestiaryWitcher } from "./data/bestiary-witcher";

import svg from '../images/sprite.svg';

import witcherMob404 from '../images/base/Content-404-mob.jpg';
import witcherTab404 from '../images/base/Content-404-tab.jpg';
import witcherPC404 from '../images/base/PC-404.jpg';

console.log(witcherMob404);

// -----refs ----------------------------

const backdropSearch = document.querySelector('.js-backdrop-search');
const btnSearch = document.querySelector('.js-search-icon');

const searchList = document.querySelector('.js-search-list');
const searchContainer = document.querySelector('.js-search-container');
const inputEl = document.querySelector('.js-search-input');
const btnGlass = document.querySelector('.js-btn-search');

btnSearch.addEventListener('click', onOpenBackdropSearch);

function onOpenBackdropSearch (e) {
  backdropSearch.classList.toggle('backdrop-search--hidden');

  document.body.style.overflow = document.body.style.overflow ? '' : 'hidden';
}


//----search-logic---------

const allCharacters = [...bestiaryUkr, ...bestiaryWitcher];

inputEl.addEventListener('change', getValue);
btnGlass.addEventListener('click', createMarkup);

let searchValue = '';

function getValue () {
  searchValue = inputEl.value.toLowerCase().trim();
  inputEl.value = '';
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    getValue();
    createMarkup();
  }
});

function searchСharacters () {
  return allCharacters.filter(el => el.searchName.toLowerCase() === searchValue);
}

function createMarkup () {
  const result = searchСharacters();

  if (!result.length) {
    searchContainer.innerHTML = markupError();
    return;
  }

  searchList.innerHTML = markupContent();

}

function markupContent () {

}
function markupError () {
  return `<picture>
      <source srcset="${witcherPC404}" media="(min-width: 1200px)">
      <source srcset="${witcherTab404}" media="(min-width: 768px)">
      <img src="${witcherMob404}" alt="">
  </picture>`;
}