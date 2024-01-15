import svg from '../images/sprite.svg';
import { bestiaryUkr } from "./data/bestiary-ukr";
import { bestiaryWitcher } from "./data/bestiary-witcher";

const bestiaryList = document.querySelector('.js-bestiary-section-list');
const mythBtnUkr = document.querySelector('.js-myth-btn-ukr');
const mythBtnWitcher = document.querySelector('.js-myth-btn-witcher');

// ------onCreateMarkupUkr-----------------------

onCreateMarkupUkr();

mythBtnUkr.addEventListener('click', onCreateMarkupUkr);

function onCreateMarkupUkr (e) {
  bestiaryList.innerHTML = createMarkupBestiaryListUkr(bestiaryUkr);

  mythBtnWitcher.classList.remove('myth-btns__active');
  mythBtnUkr.classList.add('myth-btns__active');
}

function createMarkupBestiaryListUkr (data) {
  return data.map(({ name, description, image }) => {
    return `<li class="bestiary-list__item bestiary-item">
    <div class="bestiary-item__heder">
        <svg width="40" height="40" class="bestiary-item__logo">
          <use href="${svg + '#icon-logo-ua'}"></use>
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
      <a href="#">
        <img class="bestiary-item__img bestiary-item__img-ukr" src="${image}" alt="${name}" loading="lazy">
      </a>
    </picture>

    <div class="bestiary-item__body bestiary-body">

      <a class="bestiary-body__link-myth" href="#">
        <svg width="18" height="18" class="bestiary-body__logo">
          <use href="${svg + '#icon-logo-ua'}"></use>
        </svg> 
        Міф
      </a>

      <p class="bestiary-body__text">${description}</p>

      <a class="bestiary-body__link-btn" href="#">
        Читати далі
        <svg width="19" height="18" class="bestiary-item__logo">
          <use href="${svg + '#arrow-up-right'}"></use>
        </svg> 
      </a>
    </div>
  </li>`;
  }).join('');
};

// -----/-onCreateMarkupUkr-----------------------

// ------onCreateMarkupWitcher---------------------

mythBtnWitcher.addEventListener('click', onCreateMarkupWitcher);

function onCreateMarkupWitcher (e) {
  bestiaryList.innerHTML = createMarkupBestiaryListWitcher(bestiaryWitcher);

  mythBtnUkr.classList.remove('myth-btns__active');
  mythBtnWitcher.classList.add('myth-btns__active');
}


function createMarkupBestiaryListWitcher (data) {
  return data.map(({ name, description, image, genus }) => {
    return `<li class="bestiary-list__item bestiary-item">
    <div class="bestiary-item__heder">
        <svg width="40" height="40" class="bestiary-item__logo">
          <use href="${svg + '#witcher-icon'}"></use>
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
      <a href="#">
        <img class="bestiary-item__img bestiary-item__img-witcher" src="${image}" alt="${name}" loading="lazy">
      </a>
    </picture>

    <div class="bestiary-item__body bestiary-body">
      <a class="bestiary-body__link-myth" href="#">
        <svg width="18" height="18" class="bestiary-item__logo">
          <use href="${svg + '#leading'}"></use>
        </svg> 
        ${genus}
      </a>

      <p class="bestiary-body__text">${description}</p>

      <a class="bestiary-body__link-btn" href="#">
        Читати далі
        <svg width="19" height="18" class="bestiary-item__logo">
          <use href="${svg + '#arrow-up-right'}"></use>
        </svg> 
      </a>
    </div>
  </li>`;
  }).join('');
};
// -----/-onCreateMarkupWitcher-----------------------
