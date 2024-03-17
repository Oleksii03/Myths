import '../header';
import '../backdrop-search';

import svg from '../../images/sprite.svg';

import griffin1 from '../../images/beasts-main/item-mob-2.jpg';
import griffin2 from '../../images/page-griffin/item-img-2.jpg';
import griffin3 from '../../images/page-griffin/item-img-3.jpg';

import griffinWihc1 from '../../images/beasts-witcher/grifon.jpg';
import griffinWihc2 from '../../images/page-griffin/item-img-witc.2.jpg';
import griffinWihc3 from '../../images/page-griffin/item-img-witc.3.jpg';

// ---------refs-------------------------------
const zoomBtnPlus = document.querySelector('.js-btn-plus');
const zoomBtnMinus = document.querySelector('.js-btn-minus');

const zoomBtnPlusW = document.querySelector('.js-btn-plus-w');
const zoomBtnMinusW = document.querySelector('.js-btn-minus-w');

const container = document.querySelector('.backdrop-borovik__container');

console.log(container);

const mythBtnUkrEl = document.querySelector('.js-myth-btns_ukr-griff');
const mythBtnWitcherEl = document.querySelector('.js-myth-btn_witcher-griff');

const mainContentGriffin = document.querySelector('.js-main-content-griffin');
const galleryGriffin = document.querySelector('.js-gallery-griffin');

const backdropGriffinGallery = document.querySelector('.js-backdrop-griffin-gallery');
const backdropGriffinGalleryWitcher = document.querySelector('.js-backdrop-griffin-gallery-witcher');

const griffinModalBigImg = document.querySelector('.js-griffin-modal-img');
const griffinModalBigImgWitcher = document.querySelector('.js-griffin-modal-img-witch');

const griffinkGalleryBigVideo = document.querySelector('.js-griffin-modal-video');
const griffinkGalleryBigVideoWitcher = document.querySelector('.js-griffin-modal-video-witcher');


const griffinGalleryBtnClose = document.querySelector('.js-backdrop-close');
const griffinGalleryBtnCloseWitcher = document.querySelector('.js-backdrop-close-witch');


// -------/-refs-------------------------------

mythBtnUkrEl.addEventListener('click', onCreateMarcupUkrGriff);
mythBtnWitcherEl.addEventListener('click', onCreateMarcupWitcherGriff);

onCreateMarcupUkrGriff();

function onCreateMarcupUkrGriff () {
  mythBtnWitcherEl.classList.remove('myth-btns__active');
  mythBtnUkrEl.classList.add('myth-btns__active');

  mainContentGriffin.innerHTML = createMarcupGriffUkr();
  galleryGriffin.innerHTML = createGalleryGriffinUkr();

  document.querySelector('.js-gallery-btn-witch').addEventListener('click', () => {
    onCreateMarcupWitcherGriff();
  });

  // -----------backdrop-logic-------------------

  const galleryGriffinUrk = document.querySelector('.js-gallery-griffin-urk');

  galleryGriffinUrk.addEventListener('click', (e) => {
    const { target } = e;

    if (target.tagName !== 'IMG') return;

    backdropGriffinGallery.classList.remove('backdrop-borovik-gallery--hidden');

    document.body.classList.add('is-freeze');

    const wolfHeadImgBoxUrk = document.querySelector('.js-wolf-head-img-box-urk');

    const bigImgId = Number(target.dataset.id);
    const wolfHeadImg = [...wolfHeadImgBoxUrk.children];

    switch (bigImgId) {
      case 1:
        wolfHeadImg[0].hidden = false;
        wolfHeadImg[1].hidden = true;
        wolfHeadImg[2].hidden = true;
        break;

      case 2:
        wolfHeadImg[0].hidden = true;
        wolfHeadImg[1].hidden = false;
        wolfHeadImg[2].hidden = true;
        break;

      case 3:
        wolfHeadImg[0].hidden = true;
        wolfHeadImg[1].hidden = true;
        wolfHeadImg[2].hidden = false;
        break;
    };

    if (bigImgId === 1) {
      griffinModalBigImg.closest('picture').hidden = true;
      griffinkGalleryBigVideo.hidden = false;

      zoomBtnPlus.classList.add('is-hidden');
      zoomBtnMinus.classList.add('is-hidden');
    }

    griffinModalBigImg.src = target.src;

    // --------small-gallery-----------

    const smallGalleryItem = document.querySelector('.js-small-gallery');

    smallGalleryItem.addEventListener('click', (e) => {
      const { target, currentTarget } = e;

      if (target.tagName !== 'IMG') return;

      griffinModalBigImg.style.cssText = "width:100%; height:100%;";

      const liItemId = Number(target.closest('LI').dataset.id);

      switch (liItemId) {
        case 1:
          wolfHeadImg[0].hidden = false;
          wolfHeadImg[1].hidden = true;
          wolfHeadImg[2].hidden = true;
          break;

        case 2:
          wolfHeadImg[0].hidden = true;
          wolfHeadImg[1].hidden = false;
          wolfHeadImg[2].hidden = true;
          break;

        case 3:
          wolfHeadImg[0].hidden = true;
          wolfHeadImg[1].hidden = true;
          wolfHeadImg[2].hidden = false;
          break;
      };

      if (liItemId === 1) {
        griffinModalBigImg.closest('picture').hidden = true;
        griffinkGalleryBigVideo.hidden = false;
        zoomBtnPlus.classList.add('is-hidden');
        zoomBtnMinus.classList.add('is-hidden');
      } else {
        griffinModalBigImg.closest('picture').hidden = false;
        griffinkGalleryBigVideo.hidden = true;
        zoomBtnPlus.classList.remove('is-hidden');
        zoomBtnMinus.classList.remove('is-hidden');
      }

      griffinModalBigImg.src = target.src;

      [...currentTarget.children].forEach((li) => {
        if (li.classList.contains('small-img-active')) {
          li.classList.remove('small-img-active');
        }
      });

      target.closest('.small-gallery__item').classList.add('small-img-active');
    });

    [...smallGalleryItem.children].forEach((li) => {
      const liId = Number(li.dataset.id);

      if (li.classList.contains('small-img-active')) {
        li.classList.remove('small-img-active');
      }

      if (liId === bigImgId) {
        li.classList.add('small-img-active');
      }
    });

  });
}

griffinGalleryBtnClose.addEventListener('click', (e) => {
  griffinModalBigImg.closest('picture').hidden = false;
  griffinkGalleryBigVideo.hidden = true;
  backdropGriffinGallery.classList.add('backdrop-borovik-gallery--hidden');
  document.body.classList.remove('is-freeze');
});


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
    <a href="#gallery">
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

      <ul id="gallery" class="gallery-borovik__list js-gallery-griffin-urk">

        <li class="gallery-borovik__item gallery-borovik__item-col">
          <img data-id="1" class="gallery-borovik__img" src="${griffin1}" alt="griffin-1"
        </li>

        <li class="gallery-borovik__item">
          <img data-id="2" class="gallery-borovik__img" src="${griffin2}" alt="griffin-2">
        </li>
        <li class="gallery-borovik__item gallery-borovik__item-row">
          <img data-id="3" class="gallery-borovik__img gallery-borovik__img-row gallery--griffin" src="${griffin3}"
            alt="griffin-3">
        </li>
      </ul>

      <button class="gallery-borovik__btn js-gallery-btn-witch" type="button">У грі Відьмак</button>`;
};

// -----/--onCreateMarcupUkrGriff----------------------------------

function onCreateMarcupWitcherGriff (e) {
  mythBtnUkrEl.classList.remove('myth-btns__active');
  mythBtnWitcherEl.classList.add('myth-btns__active');

  mainContentGriffin.innerHTML = createMarcupGriffWitcher();
  galleryGriffin.innerHTML = createGalleryGriffWitcher();

  document.querySelector('.js-gallery-btn-ukr').addEventListener('click', () => {
    onCreateMarcupUkrGriff();
  });

  // -----------backdrop-logic-------------------

  const galleryGriffinWitcher = document.querySelector('.js-gallery-griffin-witch');


  galleryGriffinWitcher.addEventListener('click', (e) => {
    const { target } = e;

    if (target.tagName !== 'IMG') return;

    document.body.classList.add('is-freeze');

    backdropGriffinGalleryWitcher.classList.remove('backdrop-borovik-gallery--hidden');

    const wolfHeadImgBoxWitcher = document.querySelector('.js-wolf-head-img-box-witcher');

    const bigImgId = Number(target.dataset.id);
    const wolfHeadImg = [...wolfHeadImgBoxWitcher.children];

    switch (bigImgId) {
      case 1:
        wolfHeadImg[0].hidden = false;
        wolfHeadImg[1].hidden = true;
        wolfHeadImg[2].hidden = true;
        break;

      case 2:
        wolfHeadImg[0].hidden = true;
        wolfHeadImg[1].hidden = false;
        wolfHeadImg[2].hidden = true;
        break;

      case 3:
        wolfHeadImg[0].hidden = true;
        wolfHeadImg[1].hidden = true;
        wolfHeadImg[2].hidden = false;
        break;
    };

    if (bigImgId === 1) {
      griffinModalBigImgWitcher.closest('picture').hidden = true;
      griffinkGalleryBigVideoWitcher.hidden = false;
      zoomBtnPlusW.classList.add('is-hidden');
      zoomBtnMinusW.classList.add('is-hidden');
    }

    griffinModalBigImgWitcher.src = target.src;


    // --------small-gallery-----------

    const smallGalleryItem = document.querySelector('.js-small-gallery-witch');

    smallGalleryItem.addEventListener('click', (e) => {
      const { target, currentTarget } = e;

      if (target.tagName !== 'IMG') return;

      griffinModalBigImgWitcher.style.cssText = "width:100%; height:100%;";

      const liItemId = Number(target.closest('LI').dataset.id);

      switch (liItemId) {
        case 1:
          wolfHeadImg[0].hidden = false;
          wolfHeadImg[1].hidden = true;
          wolfHeadImg[2].hidden = true;
          break;

        case 2:
          wolfHeadImg[0].hidden = true;
          wolfHeadImg[1].hidden = false;
          wolfHeadImg[2].hidden = true;
          break;

        case 3:
          wolfHeadImg[0].hidden = true;
          wolfHeadImg[1].hidden = true;
          wolfHeadImg[2].hidden = false;
          break;
      };

      if (liItemId === 1) {
        griffinModalBigImgWitcher.closest('picture').hidden = true;
        griffinkGalleryBigVideoWitcher.hidden = false;
        zoomBtnPlusW.classList.add('is-hidden');
        zoomBtnMinusW.classList.add('is-hidden');
      } else {
        griffinModalBigImgWitcher.closest('picture').hidden = false;
        griffinkGalleryBigVideoWitcher.hidden = true;
        zoomBtnPlusW.classList.remove('is-hidden');
        zoomBtnMinusW.classList.remove('is-hidden');
      }

      griffinModalBigImgWitcher.src = target.src;

      [...currentTarget.children].forEach((li) => {
        if (li.classList.contains('small-img-active')) {
          li.classList.remove('small-img-active');
        }
      });

      target.closest('.small-gallery__item').classList.add('small-img-active');
    });

    [...smallGalleryItem.children].forEach((li) => {
      const liId = Number(li.dataset.id);

      if (li.classList.contains('small-img-active')) {
        li.classList.remove('small-img-active');
      }

      if (liId === bigImgId) {
        li.classList.add('small-img-active');
      }
    });
  });
}

griffinGalleryBtnCloseWitcher.addEventListener('click', () => {
  griffinModalBigImgWitcher.closest('picture').hidden = false;
  griffinkGalleryBigVideoWitcher.hidden = true;

  backdropGriffinGalleryWitcher.classList.add('backdrop-borovik-gallery--hidden');
  document.body.classList.remove('is-freeze');
});

function createMarcupGriffWitcher () {
  return `
  <div class="bestiary-list__item borovik-item">
        <div class="borovik-item__heder">
          <svg width="40" height="40" class="borovik-item__logo">
            <use href="${svg + '#witcher-icon'}"></use>
          </svg>

          <div class="borovik-item__content">
            <h3 class="borovik-item__title">Грифон (Гриф)</h3>
            <h4 class="borovik-item__sub-title">Гра «Відьмак 3: Дикий Гін»</h4>
          </div>

          <a href="#" class="borovik-item__svg-more">
            <svg width="18" height="18" class="borovik-body__logo">
              <use href="${svg + '#more-vertical'}"></use>
            </svg>
          </a>
        </div>

        <picture class="borovik-item__picture">
          <a href="#gallery-w">
            <img class="borovik-item__img borovik-item__img-witcher" src="${griffinWihc1}" alt="spriggan"
              loading="lazy">
          </a>
        </picture>

        <div class="borovik-item__body borovik-body">

          <div class="author-img">
            <h5 class="author-img__title">Анна Подедворна</h5>
            <a class="author-img__link" href="#">Авторка малюнку</a>
          </div>

          <a class="borovik-body__link-myth" href="#">
            <svg width="18" height="18" class="borovik-body__logo">
              <use href="${svg + '#leading'}"></use>
            </svg>
            Гібриди
          </a>

          <p class="borovik-body__text">Грифон - це істота з тілом, задніми ногами та хвостом лева і головою, крилами та пазурами орла.</p>


          <table class="borovik-witcher__table">
            <tr class="borovik-witcher__row">
              <td class="borovik-witcher__data">Клас</td>
              <td class="borovik-witcher__data">Гібриди</td>
            </tr>

            <tr class="borovik-witcher__row">
              <td class="borovik-witcher__data">Місце появи/
                <br> Проживання
              </td>
              <td class="borovik-witcher__data">Білий Сад<br>
              Велен<br>
              Скелліґе<br>
              Оксенфурт</td>
            </tr>

            <tr class="borovik-witcher__row">
              <td class="borovik-witcher__data">Стійкість</td>
              <td class="borovik-witcher__data">До оглушення</td>
            </tr>

            <tr class="borovik-witcher__row">
              <td class="borovik-witcher__data">Вразливість</td>
              <td class="borovik-witcher__data">
                  «Картеч» (бомба)<br>
                  Мастило проти гібридів<br>
                  знак Аард<br>
                  знак Квен
              </td>
            </tr>

            <tr class="borovik-witcher__row">
              <td class="borovik-witcher__data">Тактика</td>
              <td class="borovik-witcher__data">
              Налетіти на жертву у стрімкому піке і вдарити кігтями
              </td>
            </tr>

            <tr class="borovik-witcher__row">
              <td class="borovik-witcher__data">Трофей</td>
              <td class="borovik-witcher__data">Так</td>
            </tr>
          </table>

        </div>
      </div>
      
      <ol class="main-content__list">
        <li class="main-content__list-item">
          <h3 class="main-content__list-title">Зміст</h3>
        </li>
        <li class="main-content__list-item">1. Опис, Запис у бестіарії</li>
        <li class="main-content__list-item">2. Галерея</li>
        <li class="main-content__list-item">3. Відео</li>
      </ol>

      <div class="main-content__description description-content">

        <h4 class="description-content__title">Гра «Відьмак 3: Дикий Гін»,
          <br> Запис у бестіарії
        </h4>

        <p class="description-content__text">
          А так, напіворел, напівкіт, точно як у шляхтича на
          гербі. Тільки в пазурах не берло ніс, а коров’ячу тушу.
          — Невідомий свідок нападу грифона
        </p>
        <p class="description-content__text">
          Колись грифони водилися лише високо в горах, де
          ловили кіз та іншу гірську живність. Та згодом вони
          збагнули, що на залюднених рівнинах легше знайти
          щось їстівне: корову, вівцю, пастуха. Вони й досі
          уникають битих шляхів і міст, але давно вже
          перестали бути дивиною в королівствах Півночі.
          Особливо небезпечні такі їхні різновиди, як
          королівський грифон і архігрифон.
        </p>
        <p class="description-content__text">
          Грифони паруються на все життя й до загину
          боронять свого партнера. Тому їх часто вважають
          утіленням хоробрості, відданості та войовничості.
          Бойового духу їм аж ніяк не бракує: якщо
          спровокувати грифона, він не заспокоїться, доки
          не розірве ворога на шмаття.
        </p>
      </div>`;
};

function createGalleryGriffWitcher () {
  return `
<div class="borovik__gallery-header gallery-borovik">
<h2 class="gallery-borovik__title">Галерея</h2>
<p><a class="gallery-borovik__link" href="#">Подивитись всі</a></p>
</div>

<ul id="gallery-w" class="gallery-borovik__list js-gallery-griffin-witch">
  <li class="gallery-borovik__item gallery-borovik__item-col">
    <img data-id="1" class="gallery-borovik__img gallery-borovik__img-col gallery-borovik__img-wicher_col"
      src="${griffinWihc1}" alt="spriggan">
  </li>
  <li class="gallery-borovik__item">
    <img data-id="2" class="gallery-borovik__img gallery-borovik__img-wicher_row gallery-griffin__witcher_top"
      src="${griffinWihc2}" alt="borovik-witcher-item-2">
  </li>
  <li class="gallery-borovik__item gallery-borovik__item-row">
    <img data-id="3" class="gallery-borovik__img gallery-borovik__img-row gallery-borovik__img-wicher_row gallery-griffin__witcher"
      src="${griffinWihc3}" alt="borovik-witcher-item-3">
  </li>
</ul>

<button class="gallery-borovik__btn js-gallery-btn-ukr" type="button">В укр. міфології</button>`;
};

// ----ZOOM------------

zoomBtnPlus.addEventListener('click', zoomInc);
zoomBtnMinus.addEventListener('click', zoomDec);

function zoomInc () {
  if (container.offsetWidth <= 360) {
    griffinModalBigImg.style.objectFit = 'cover';
    griffinModalBigImg.style.objectPosition = 'top';
    console.log('hello');
  }

  let heightImg = griffinModalBigImg.offsetHeight;
  let widthImg = griffinModalBigImg.offsetWidth;

  widthImg += 25;
  heightImg += 50;

  griffinModalBigImg.style.width = widthImg + 'px';
  griffinModalBigImg.style.height = heightImg + 'px';
}

function zoomDec () {
  griffinModalBigImg.style.objectPosition = 'center';

  let heightImg = griffinModalBigImg.offsetHeight;
  let widthImg = griffinModalBigImg.offsetWidth;

  widthImg -= 25;
  heightImg -= 50;

  griffinModalBigImg.style.width = widthImg + 'px';
  griffinModalBigImg.style.height = heightImg + 'px';
}

// -------Witcher--------------------

zoomBtnPlusW.addEventListener('click', zoomIncW);
zoomBtnMinusW.addEventListener('click', zoomDncW);

function zoomIncW () {
  if (container.offsetWidth <= 360) {
    griffinModalBigImgWitcher.style.objectFit = 'cover';
    griffinModalBigImgWitcher.style.objectPosition = 'top';
    console.log('hello');
  }

  let heightImg = griffinModalBigImgWitcher.offsetHeight;
  let widthImg = griffinModalBigImgWitcher.offsetWidth;

  widthImg += 25;
  heightImg += 50;

  griffinModalBigImgWitcher.style.width = widthImg + 'px';
  griffinModalBigImgWitcher.style.height = heightImg + 'px';
}

function zoomDncW () {
  griffinModalBigImgWitcher.style.objectPosition = 'center';

  let heightImg = griffinModalBigImgWitcher.offsetHeight;
  let widthImg = griffinModalBigImgWitcher.offsetWidth;

  widthImg -= 25;
  heightImg -= 50;

  griffinModalBigImgWitcher.style.width = widthImg + 'px';
  griffinModalBigImgWitcher.style.height = heightImg + 'px';
}