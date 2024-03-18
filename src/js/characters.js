import { charactersUkr } from "./data/characters-ukr";
import { charactersWitcher } from "./data/characters-ukr";

import svg from '../images/sprite.svg';

// -----refs ----------------------------
const btnWitcher = document.querySelector('.characters-btn__witcher');
const btnUkr = document.querySelector('.jscharacters-btn-ukr');
const btnBox = document.querySelector('.js-characters-btn-box');

const cardList = document.querySelector('.js-characters-section-list');

const sortBtnFlphabet = document.querySelector('.js-sort-btns-alphabet');
const sortDropMenu = document.querySelector('.js-sort-btns-menu');

sortBtnFlphabet.addEventListener('click', (e) => {
  sortDropMenu.classList.toggle('is-hidden');
});
// ----/-refs ---------------------------

btnUkr.addEventListener('click', onCreateContentUkr);
btnWitcher.addEventListener('click', onCreateContentWitcher);

onCreateContentUkr();

function onCreateContentUkr (e) {
  btnBox.classList.remove('characters-btn__active');

  btnUkr.classList.add('characters-btn__active');
  btnWitcher.classList.remove('characters-btn__active');

  cardList.innerHTML = createCardMarkupUkr(charactersUkr);
}


function createCardMarkupUkr (dataCard) {
  return dataCard.map(({ name, genus, img, description, ref }) => {
    return `<li class="bestiary-list__item bestiary-item">
    <div class="bestiary-item__heder">
        <svg width="40" height="40" class="bestiary-item__logo">
          <use href="${svg + '#icon-ukr-characters'}"></use>
        </svg> 

      <div class="bestiary-item__content">
        <h3 class="bestiary-item__title">${name}</h3>
        <h4 class="bestiary-item__sub-title">Українська міфологія</h4>
      </div>

      <a href="#" class="bestiary-item__svg-more">
        <svg width="18" height="18" class="bestiary-body__logo">
          <use href="${svg + '#more-vertical'}"></use>
        </svg> 
      </a>
    </div>

    <picture class="bestiary-item__picture">
      <a href="${ref}">
        <img class="bestiary-item__img bestiary-item__img-ukr" src="${img}" alt="${name}" loading="lazy">
      </a>
    </picture>

    <div class="bestiary-item__body bestiary-body">

      <a class="bestiary-body__link-myth" href="#">
        <svg width="18" height="18" class="bestiary-body__logo">
          <use href="${svg + '#icon-profile'}"></use>
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

function onCreateContentWitcher (e) {
  btnBox.classList.add('characters-btn__active');

  btnUkr.classList.remove('characters-btn__active');
  btnWitcher.classList.add('characters-btn__active');

  cardList.innerHTML = createCardMarkupWitcher(charactersWitcher);
}


function createCardMarkupWitcher (dataCard) {
  return dataCard.map(({ name, genus, img, description, ref, logo }) => {
    return `<li class="bestiary-list__item bestiary-item">
    <div class="bestiary-item__heder">
        <svg width="40" height="40" class="characters-item__logo">
          <use class="characters-item__logo_inner" href="${svg + logo}"></use>
        </svg> 
      <div class="bestiary-item__content">
        <h3 class="bestiary-item__title">${name}</h3>
        <h4 class="bestiary-item__sub-title">Гра «Відьмак 3: Дикий Гін»</h4>
      </div>

      <a href="#" class="bestiary-item__svg-more">
        <svg width="18" height="18" class="bestiary-body__logo">
          <use href="${svg + '#more-vertical'}"></use>
        </svg> 
      </a>
    </div>

    <picture class="bestiary-item__picture">
      <a href="${ref}">
        <img class="bestiary-item__img bestiary-item__img-witcher js-bestiary-item-img-witcher" src="${img}" alt="${name}" loading="lazy">
      </a>
    </picture>

    <div class="bestiary-item__body bestiary-body">
      <a class="bestiary-body__link-myth" href="#">
        <svg width="18" height="18" class="bestiary-item__logo">
          <use href="${svg + '#icon-profile'}"></use>
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