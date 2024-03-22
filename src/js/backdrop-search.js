import { bestiaryUkr } from "./data/bestiary-ukr";
import { bestiaryWitcher } from "./data/bestiary-witcher";
import { charactersUkr, charactersWitcher } from "./data/characters-ukr";

import svg from '../images/sprite.svg';

import witcherMob404 from '../images/error-404/Mobile-404.png';
import witcherTab404 from '../images/error-404/Tab-404.png';
import witcherPC404 from '../images/error-404/PC-404.png';

// -----refs ----------------------------

const backdropSearch = document.querySelector('.js-backdrop-search');
const btnSearch = document.querySelector('.js-search-icon');

const searchList = document.querySelector('.js-search-list');
// const searchContainer = document.querySelector('.js-search-container');
const inputEl = document.querySelector('.js-search-input');
const btnGlass = document.querySelector('.js-btn-search');
const historyBtnClose = document.querySelector('.js-history-close');

// ----/-refs ----------------------------

btnSearch.addEventListener('click', onOpenBackdropSearch);

function onOpenBackdropSearch (e) {
  backdropSearch.classList.toggle('backdrop-search--hidden');
  // searchContainer.innerHTML = '';

  document.body.style.overflow = document.body.style.overflow ? '' : 'hidden';
}

//----search-logic---------

const allCharacters = [...bestiaryUkr, ...bestiaryWitcher, ...charactersUkr, ...charactersWitcher];

console.log(allCharacters);

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
    searchList.innerHTML = markupError();
    return;
  }

  searchList.innerHTML = markupContent(result);
}

function markupContent (result) {
  return result.map(({ name, description, img, logo, genus, ref }) => {
    return `<li class="bestiary-list__item bestiary-item">
    <div class="bestiary-item__heder">
        <svg width="40" height="40" class="bestiary-item__logo">
          <use href="${svg + logo}"></use>
        </svg> 

      <div class="bestiary-item__content">
        <h3 class="bestiary-item__title">${name}</h3>
        <h4 class="bestiary-item__sub-title">${genus}</h4>
      </div>

      <a href="#" class="bestiary-item__svg-more">
        <svg width="18" height="18" class="bestiary-body__logo">
          <use href="${svg + '#more-vertical'}"></use>
        </svg> 
      </a>
    </div>
  </div>

<picture class="bestiary-item__picture">
  <a href="${ref}">
    <img class="bestiary-item__img bestiary-item__img-ukr" src="${img}" alt="${name}" loading="lazy">
  </a>
</picture>

<div class="bestiary-item__body bestiary-body">

  <a class="bestiary-body__link-myth" href="#">
    <svg width="18" height="18" class="bestiary-body__logo">
      <use href="${svg + logo}"></use>
    </svg> 
    ${genus}
  </a>

  <p class="bestiary-body__text">${description}</p>

  <a class="bestiary-body__link-btn" href="${ref}">
    Читати далі
    <svg width="19" height="18" class="bestiary-item__logo">
      <use href="${svg + '#arrow-up-right'}"></use>
    </svg> 
  </a>
</div>
</li>`;
  }).join('');
}

function markupError () {
  return `<li><picture class="erroe-photo">
      <source srcset="${witcherPC404}" media="(min-width: 1200px)">
      <source srcset="${witcherTab404}" media="(min-width: 768px)">
      <img class="erroe-img" src="${witcherMob404}" alt="witcher-error">
  </picture></li>`;
}

historyBtnClose.addEventListener('click', () => {
  searchValue = '';
  searchList.innerHTML = '';
});