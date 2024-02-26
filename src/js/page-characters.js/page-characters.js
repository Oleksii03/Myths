import '../header';
import '../backdrop-search';

import svg from '../../images/sprite.svg';

import kozak from '../../images/characters/ukrainskii-kozak-art-1_PC.jpg';

// -----refs ----------------------------
const btnWitcher = document.querySelector('.characters-btn__witcher');
const btnUkr = document.querySelector('.jscharacters-btn-ukr');
const btnBox = document.querySelector('.js-characters-btn-box');

const charactersTitle = document.querySelector('.js-characters-title');

const mainContent = document.querySelector('.js-main-content');
const galleryImg = document.querySelector('.js-gallery-character');

console.log(galleryImg);

// ----/-refs ---------------------------

btnUkr.addEventListener('click', onCreateContentUkr);
btnWitcher.addEventListener('click', onCreateContentWitcher);

onCreateContentUkr();

function onCreateContentUkr (e) {
  btnBox.classList.remove('characters-btn__active');

  btnUkr.classList.add('characters-btn__active');
  btnWitcher.classList.remove('characters-btn__active');

  charactersTitle.textContent = 'Козак-характерник';
  mainContent.innerHTML = createMarcupUkr();
  // galleryImg.innerHTML = createGalleryUkr();

}


function createMarcupUkr () {
  return `
  <div class="bestiary-list__item borovik-item">
  <div class="borovik-item__heder">
    <svg width="40" height="40" class="borovik-item__logo">
      <use href="${svg + '#icon-ukr-characters'}"></use>
    </svg>

    <div class="borovik-item__content">
      <h3 class="borovik-item__title">Козак-характерник</h3>
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
      <img class="borovik-item__img borovik-item__img-ukr" src="${kozak}" alt="${kozak}"
        loading="lazy">
    </a>
  </picture>

  <div class="borovik-item__body borovik-body">

    <a class="borovik-body__link-myth" href="#">
      <svg width="18" height="18" class="borovik-body__logo">
        <use href="${svg + '#icon-profile'}"></use>
      </svg>
      Козаки-характерники
    </a>

    <p class="borovik-body__text">
      Характерник — своєрідний духовний наставник, якого козаки шанували і дещо побоювались, хранитель традицій і таємниць бойового мистецтва запорозького козацтва.
    </p>

  </div>
</div>

<ol class="main-content__list">
<li class="main-content__list-item">
  <h3 class="main-content__list-title">Зміст</h3>
</li>
<li class="main-content__list-item">1. Опис, міфи та легенди</li>
<li class="main-content__list-item">2. Галерея</li>
<li class="main-content__list-item">3. Відомі козаки-характерники</li>
</ol>

<div class="main-content__description description-content">

<h4 class="description-content__title">Опис</h4>

<p class="description-content__text">
  У циклі фентезійних романів та оповідань «Відьмак»
  польського письменника Анджея Сапковського відьмаки — це
  найманці-мутанти з надприродними здібностями, які 
  володіють магією та захищають людей від чудовиськ та інших 
  темних сил.  
</p>
<p class="description-content__text">
  Існує також версія, що образ був узятий з
  козака-характерника.
</p>
<p class="description-content__text">
  Характе́рник, химоро́дник, галдо́вник («галдувати» —
  чаклувати) або заморо́чник (вмів напускати «морок» — туман,
  сон) — назва віщуна, чаклуна на Запорозькій Січі, який займався
  не лише ворожінням, але й лікуванням поранених козаків, їх
  психотерапією та фізичною підготовкою, про що існує ряд
  історичних свідчень очевидців, народних легенд та переказів.
</p>
<p class="description-content__text">
  Найвідомішим козаком-характерником є козак Мамай — ідеалізований образ козака-мандрівника, воїна, мудреця, казкаря і характерника в одній особі.
</p>
<p class="description-content__text">
  Також, за переказами, майже всі козацькі гетьмани, кошові отамани і відомі полковники були характерниками.
  Серед них — Дмитро Байда-Вишневецький, Іван Підкова, Самійло Кішка, Северин Наливайко, Петро Сагайдачний, Максим Кривоніс, Іван Богун, Данило Нечай і найбільший характерник з них — Іван Сірко. 
</p>
<p class="description-content__text">
  Характерниками ставали, як правило, люди з екстрасенсорними здібностями, зі схильністю до навіювання, гіпнозу, яснобачення, телекінезу чи телепатії.
</p>
</div>`;
};


function createGalleryUkr () {
  return `
      <div class="borovik__gallery-header gallery-borovik">
        <h2 class="gallery-borovik__title">Галерея</h2>
        <p><a class="gallery-borovik__link" href="#">Подивитись всі</a></p>
      </div>`;


};


function onCreateContentWitcher (e) {
  btnBox.classList.add('characters-btn__active');

  btnUkr.classList.remove('characters-btn__active');
  btnWitcher.classList.add('characters-btn__active');

  charactersTitle.textContent = 'Відьмак, Ґеральт з Рівії';

};