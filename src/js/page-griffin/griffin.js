import '../header';
import '../backdrop-search';

import svg from '../../images/sprite.svg';
import griffin1 from '../../images/beasts-main/item-mob-2.jpg';
import griffin2 from '../../images/page-griffin/item-img-2.jpg';
import griffin3 from '../../images/page-griffin/item-img-3.jpg';

// ---------refs-------------------------------

const mythBtnUkrEl = document.querySelector('.js-myth-btns_ukr-griff');
const mythBtnWitcherEl = document.querySelector('.js-myth-btn_witcher-griff');

const mainContentGriffin = document.querySelector('.js-main-content-griffin');
const galleryGriffin = document.querySelector('.js-gallery-griffin');

// -------/-refs-------------------------------

mythBtnUkrEl.addEventListener('click', onCreateMarcupUkrGriff);
mythBtnWitcherEl.addEventListener('click', onCreateMarcupWitcherGriff);

onCreateMarcupUkrGriff();

function onCreateMarcupUkrGriff () {
  mythBtnWitcherEl.classList.remove('myth-btns__active');
  mythBtnUkrEl.classList.add('myth-btns__active');

  mainContentGriffin.innerHTML = createMarcupGriffUkr();
  galleryGriffin.innerHTML = createGalleryGriffinUkr();
}


function createMarcupGriffUkr () {
  return `
  <div class="bestiary-list__item borovik-item">
  <div class="borovik-item__heder">
    <svg width="40" height="40" class="borovik-item__logo">
      <use href="${svg + '#icon-logo-ua'}"></use>
    </svg>

    <div class="borovik-item__content">
      <h3 class="borovik-item__title">Грифон (Гриф)</h3>
      <h4 class="borovik-item__sub-title">Українська міфологія</h4>
    </div>

    <a href="#" class="borovik-item__svg-more">
      <svg width="18" height="18" class="borovik-body__logo">
        <use href="${svg + '#more-vertical'}"></use>
      </svg>
    </a>
  </div>

  <picture class="borovik-item__picture">
    <a href="#">
      <img class="borovik-item__img borovik-item__img-ukr" src="${griffin1}" alt="#"
        loading="lazy">
    </a>
  </picture>

  <div class="borovik-item__body borovik-body">

    <a class="borovik-body__link-myth" href="#">
      <svg width="18" height="18" class="borovik-body__logo">
        <use href="${svg + '#icon-logo-ua'}"></use>
      </svg>
      Міф
    </a>

    <p class="borovik-body__text">Грифони — суперечливі істоти, які одночасно об'єднують Небо і Землю, Добро і Зло. Їх роль і в різних міфах, і в літературі – неоднозначна; вони можуть і як захисники, покровителями, як і злісними звірами, не стриманими звірами.</p>

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
  Монстр якого ви точно не могли б запідозрити у
  зв'язках з Україною це гриф. Ви запитаєте який Гриф ?
  У відьмаку ж є тільки Грифон.
</p>
<p class="description-content__text">
  Бо в оригіналі цього велетенського пернатого звіра
  звати саме Гриф і ніяк інакше. Якщо Грифон — це
  чудовисько саме народів заходу Європи, то Гриф — це
  український і польський Монстр. 
</p>
<p class="description-content__text">
  В українських легендах розповідається що гриф — це
  здоровезний птах який своїми крилами може
  заслоняти світло сонця. Так що на землю навіть падає
  морок. Літати Гриф здатен протягом цілих семи діб
  без перепочинку. Зауважимо що хоча в оригіналі
  монстра звуть Грифом візуально він списаний скоріше з Грифона.
</p>
</div>`;
};

function createGalleryGriffinUkr () {
  return `
      <div class="borovik__gallery-header gallery-borovik">
        <h2 class="gallery-borovik__title">Галерея</h2>
        <p><a class="gallery-borovik__link" href="#">Подивитись всі</a></p>
      </div>

      <ul class="gallery-borovik__list js-gallery-borovik-urk">

        <li class="gallery-borovik__item gallery-borovik__item-col">
          <img data-id="1" class="gallery-borovik__img" src="${griffin1}" alt="griffin-1"
        </li>

        <li class="gallery-borovik__item">
          <img data-id="2" class="gallery-borovik__img" src="${griffin2}" alt="griffin-2">
        </li>
        <li class="gallery-borovik__item gallery-borovik__item-row">
          <img data-id="3" class="gallery-borovik__img gallery-borovik__img-row" src="${griffin3}"
            alt="griffin-3">
        </li>
      </ul>

      <button class="gallery-borovik__btn js-gallery-btn-wich" type="button">У грі Відьмак</button>`;
};


function onCreateMarcupWitcherGriff (e) {
  mythBtnUkrEl.classList.remove('myth-btns__active');
  mythBtnWitcherEl.classList.add('myth-btns__active');
}