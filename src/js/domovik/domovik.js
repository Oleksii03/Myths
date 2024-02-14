import '../header';
import '../backdrop-search';

import svg from '../../images/sprite.svg';

import domovik from '../../images/beasts-main/item-mob-3.jpg';
import domovik2 from '../../images/page-domovik/item-gall-2.jpg';
import domovik3 from '../../images/page-domovik/item-gall-3.jpg';

// -----refs-------------------------------

const mythBtnUkrElDom = document.querySelector('.js-myth-btns_ukr');
const mythBtnWitcherElDom = document.querySelector('.js-myth-btn_witcher');

const mainContent = document.querySelector('.js-main-content');
const galleryDomovikSection = document.querySelector('.js-gallery-domovik-section');


// --/---refs-------------------------------

mythBtnUkrElDom.addEventListener('click', onCreateMarcupUkrDom);
mythBtnWitcherElDom.addEventListener('click', onCreateMarcupWitcherDom);

onCreateMarcupUkrDom();

function onCreateMarcupUkrDom () {
  mythBtnWitcherElDom.classList.remove('myth-btns__active');
  mythBtnUkrElDom.classList.add('myth-btns__active');

  mainContent.innerHTML = createMarcupUkr();
  galleryDomovikSection.innerHTML = createGalleryDomovikUkr();
}

function createMarcupUkr () {
  return `
  <div class="bestiary-list__item borovik-item">
  <div class="borovik-item__heder">
    <svg width="40" height="40" class="borovik-item__logo">
      <use href="${svg + '#icon-logo-ua'}"></use>
    </svg>

    <div class="borovik-item__content">
      <h3 class="borovik-item__title">Домовик</h3>
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
      <img class="borovik-item__img borovik-item__img-ukr" src="${domovik}" alt="domovik"
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

    <p class="borovik-body__text">
      Домовик (кутний бог) — у слов'янських народів домашній дух, міфологічний господар і покровитель будинку, що забезпечує нормальне життя сім'ї, родючість, здоров'я людей, тварин.
    </p>

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
  Домовик, дух вважається спільним для дуже багатьох слов'янських народів одним з яких звісно є український проте навіть у цьому випадку домовик з українських казок трохи відрізняється від інших домовиків легенд Польщі чи балканських держав.
</p>
<p class="description-content__text">
  Домовики — це також тіж нащадки чорта що постали з тих крапель які він струсунув коли за порадою Бога намочив руку у воді. Ці духи населяють майже кожну оселю і з ними треба вміти вправлятися. Домовик може постати з недоношеної дитини котру дівчина виносила таємне від усіх або зі старого чоловіка що все життя прожив у домі або навіть зі зноска найменшого курячого яйця яке треба носити під пахвою 9 днів щоб з нього вилупився домовик. Такий домовик найкращий, бо ґаздиня може виховати його під себе. Треба годувати його недосоленими стравами і посадити жити на горище, тоді домовик буде допомагати хазяйці сприяти урожаю проганяти мишей і охороняти дім.
</p>
<p class="description-content__text">
  До речі Ви точно чули про устелений вираз “насолити комусь” себто “заподіяти комусь якусь капость” даний фразеологізм пішов саме від історії про домовика, бо домовику ніколи не можна солити їжу. Якщо посолити їжу один раз він образиться, а якщо домовику посолити їжу двічі, - то він зірве дах з дому і втече геть забравши з собою все щастя газдівства.
</p>
</div>`;
};

function createGalleryDomovikUkr () {
  return `
      <div class="borovik__gallery-header gallery-borovik">
        <h2 class="gallery-borovik__title">Галерея</h2>
        <p><a class="gallery-borovik__link" href="#">Подивитись всі</a></p>
      </div>

      <ul class="gallery-borovik__list js-gallery-borovik-urk">

        <li class="gallery-borovik__item gallery-borovik__item-col">
          <img data-id="1" class="gallery-borovik__img" src="${domovik}" alt="domovik"
        </li>

        <li class="gallery-borovik__item">
          <img data-id="2" class="gallery-borovik__img" src="${domovik2}" alt="domovik-item-2">
        </li>
        <li class="gallery-borovik__item gallery-borovik__item-row">
          <img data-id="3" class="gallery-borovik__img gallery-borovik__img-row" src="${domovik3}"
            alt="domovik-item-2">
        </li>
      </ul>

      <button class="gallery-borovik__btn js-gallery-btn-wich" type="button">У грі Відьмак</button>`;
};

// onCreateMarcupWitcherDomovik-----

function onCreateMarcupWitcherDom (e) {
  mythBtnUkrElDom.classList.remove('myth-btns__active');
  mythBtnWitcherElDom.classList.add('myth-btns__active');
}