import '../header';
import '../backdrop-search';

import svg from '../../images/sprite.svg';
import borovik from '../../images/beasts-main/item-mob-1.jpg';

const mythBtnUkrEl = document.querySelector('.js-myth-btns_ukr');
const mythBtnWitcherEl = document.querySelector('.js-myth-btn_witcher');
const mainContent = document.querySelector('.js-main-content');

mythBtnUkrEl.addEventListener('click', onCreateMarcupUkr);

function onCreateMarcupUkr (e) {
  mainContent.innerHTML = createMarcupUkr();
};

function createMarcupUkr () {
  return `
  <div class="bestiary-list__item borovik-item">
  <div class="borovik-item__heder">
    <svg width="40" height="40" class="borovik-item__logo">
      <use href="./images/sprite.svg#icon-logo-hed"></use>
    </svg>

    <div class="borovik-item__content">
      <h3 class="borovik-item__title">Боровик</h3>
      <h4 class="borovik-item__sub-title">Українська міфологія</h4>
    </div>

    <a href="#" class="borovik-item__svg-more">
      <svg width="18" height="18" class="borovik-body__logo">
        <use href="./images/sprite.svg#more-vertical"></use>
      </svg>
    </a>
  </div>

  <picture class="borovik-item__picture">
    <a href="#">
      <img class="borovik-item__img borovik-item__img-ukr" src="${borovik}" alt="#"
        loading="lazy">
    </a>
  </picture>

  <div class="borovik-item__body borovik-body">

    <a class="borovik-body__link-myth" href="#">
      <svg width="18" height="18" class="borovik-body__logo">
        <use href="./images/sprite.svg#icon-logo-hed"></use>
      </svg>
      Міф
    </a>

    <p class="borovik-body__text">За слов'янською міфологією один з лісових духів, господар борів та гаїв.</p>

  </div>
</div>

<ol class="main-content__list">
<li class="main-content__list-item">
  <h3 class="main-content__list-title">Зміст</h3>
</li>
<li class="main-content__list-item">1. Опис</li>
<li class="main-content__list-item">2. Галерея</li>
<li class="main-content__list-item">3. Відео</li>
</ol>

<div class="main-content__description description-content">

<h4 class="description-content__title">Опис</h4>

<p class="description-content__text">
  Боровик — дух особливо густих соснових борів згідно міфології
  слов'ян. Він відрізняється від свого родича кількома деталями;
</p>
<p class="description-content__text">
  Перша це ареал проживання, Боровик дуже сильно леліє свої соснові ліси і ненавидить коли туди хтось
  забрідає, тому випадково подорожнього він може просто з'їсти якщо подумаєш що той загрожує його деревам чи
  тваринам.
</p>
<p class="description-content__text">
  Друга важлива відмінність — це нелюбов до кішок якщо лісовик любить усіх тварин, то Боровик просто
  ненавидить
  кішок від звуку нявкання кота він шалено лякається і тікає в своє найглибше ліго. Частково саме тому люди що
  жили біля лісів повинні були обов'язково мати в господарстві пару котів, кішок.
</p>

</div>`;
}