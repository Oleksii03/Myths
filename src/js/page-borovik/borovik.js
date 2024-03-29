import '../header';
import '../backdrop-search';

import svg from '../../images/sprite.svg';

import borovik from '../../images/beasts-main/item-mob-1.jpg';
import borovik2 from '../../images/page-borovik/borovik-item-2.jpg';
import borovik3 from '../../images/page-borovik/borovik-item-3.jpg';

import spriggan from '../../images/beasts-witcher/spriggan.jpg';
import spriggan2 from '../../images/page-borovik/borovik-witcher-item-2.png';
import spriggan3 from '../../images/page-borovik/borovik-witcher-item-3.jpg';

// ----refs---------------------------------

const zoomBtnPlus = document.querySelector('.js-btn-plus');
const zoomBtnMinus = document.querySelector('.js-btn-minus');

const zoomBtnPlusW = document.querySelector('.js-btn-plus-w');
const zoomBtnMinusW = document.querySelector('.js-btn-minus-w');

const container = document.querySelector('.backdrop-borovik__container');

const mythBtnUkrEl = document.querySelector('.js-myth-btns_ukr');
const mythBtnWitcherEl = document.querySelector('.js-myth-btn_witcher');

const mainContent = document.querySelector('.js-main-content');
const galleryBorovikSection = document.querySelector('.js-gallery-borovik-section');

// ------backdrop-borovik-gallery------------------
const borovikGallery = document.querySelector('.js-backdrop-borovik-gallery');
const borovikGalleryWicher = document.querySelector('.js-backdrop-borovik-gallery-wicher');

const borovikGalleryBigImg = document.querySelector('.js-borovik-modal-img');
const borovikGalleryBigImgWich = document.querySelector('.js-borovik-modal-img-wich');

const borovikGalleryBigVideo = document.querySelector('.js-borovik-modal-video');
const borovikGalleryBigVideoWitcher = document.querySelector('.js-borovik-modal-video-witcher');

const borovikGalleryBtnclose = document.querySelector('.js-backdrop-close');
const borovikGalleryBtncloseWich = document.querySelector('.js-backdrop-close-wich');

// ----/--backdrop-borovik-gallery------------------

// --------/-refs -------------

onCreateMarcupUkr();

mythBtnUkrEl.addEventListener('click', onCreateMarcupUkr);
mythBtnWitcherEl.addEventListener('click', onCreateMarcupWitcher);

function onCreateMarcupUkr () {
  mythBtnWitcherEl.classList.remove('myth-btns__active');
  mythBtnUkrEl.classList.add('myth-btns__active');

  mainContent.innerHTML = createMarcupUkr();
  galleryBorovikSection.innerHTML = createGalleryBorovikUkr();

  document.querySelector('.js-gallery-btn-wich').addEventListener('click', () => {
    onCreateMarcupWitcher();
  });

  // -----------backdrop-logic-------------------

  const galleryBorovikUrk = document.querySelector('.js-gallery-borovik-urk');

  galleryBorovikUrk.addEventListener('click', (e) => {
    const { target } = e;

    if (target.tagName !== 'IMG') return;

    borovikGallery.classList.remove('backdrop-borovik-gallery--hidden');

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
      borovikGalleryBigImg.closest('picture').hidden = true;
      borovikGalleryBigVideo.hidden = false;
      zoomBtnPlus.classList.add('is-hidden');
      zoomBtnMinus.classList.add('is-hidden');
    }

    borovikGalleryBigImg.src = target.src;

    // --------small-gallery-----------

    const smallGalleryItem = document.querySelector('.js-small-gallery');

    smallGalleryItem.addEventListener('click', (e) => {
      const { target, currentTarget } = e;

      if (target.tagName !== 'IMG') return;

      borovikGalleryBigImg.style.cssText = "width:100%; height:100%;";

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
        borovikGalleryBigImg.closest('picture').hidden = true;
        borovikGalleryBigVideo.hidden = false;
        zoomBtnPlus.classList.add('is-hidden');
        zoomBtnMinus.classList.add('is-hidden');
      } else {
        borovikGalleryBigImg.closest('picture').hidden = false;
        borovikGalleryBigVideo.hidden = true;
        zoomBtnPlus.classList.remove('is-hidden');
        zoomBtnMinus.classList.remove('is-hidden');
      }

      borovikGalleryBigImg.src = target.src;

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
};

borovikGalleryBtnclose.addEventListener('click', () => {
  borovikGalleryBigImg.closest('picture').hidden = false;
  borovikGalleryBigVideo.hidden = true;

  borovikGallery.classList.add('backdrop-borovik-gallery--hidden');
  document.body.classList.remove('is-freeze');
});

// --------MarcupUkr----------------------

function createMarcupUkr () {
  return `
  <div class="bestiary-list__item borovik-item">
  <div class="borovik-item__heder">
    <svg width="40" height="40" class="borovik-item__logo">
      <use href="${svg + '#icon-logo-ua'}"></use>
    </svg>

    <div class="borovik-item__content">
      <h3 class="borovik-item__title">Боровик</h3>
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
      <img class="borovik-item__img borovik-item__img-ukr" src="${borovik}" alt="#"
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
};

function createGalleryBorovikUkr () {
  return `
      <div class="borovik__gallery-header gallery-borovik">
        <h2 class="gallery-borovik__title">Галерея</h2>
        <p class="gallery-borovik__link">Подивитись всі</p>
      </div>

      <ul id="gallery" class="gallery-borovik__list js-gallery-borovik-urk">

        <li class="gallery-borovik__item gallery-borovik__item-col">
          <img data-id="1" class="gallery-borovik__img" src="${borovik}" alt="borovik"
        </li>

        <li class="gallery-borovik__item">
          <img data-id="2" class="gallery-borovik__img" src="${borovik2}" alt="borovik2">
        </li>
        <li class="gallery-borovik__item gallery-borovik__item-row">
          <img data-id="3" class="gallery-borovik__img gallery-borovik__img-row" src="${borovik3}"
            alt="borovik3">
        </li>
      </ul>

      <button class="gallery-borovik__btn js-gallery-btn-wich" type="button">У грі Відьмак</button>`;
};


// onCreateMarcupWitcher-----

function onCreateMarcupWitcher (e) {
  mythBtnUkrEl.classList.remove('myth-btns__active');
  mythBtnWitcherEl.classList.add('myth-btns__active');

  mainContent.innerHTML = createMarcupWicher();
  galleryBorovikSection.innerHTML = createGalleryBorovikWicher();

  document.querySelector('.js-gallery-btn-ukr').addEventListener('click', () => {
    onCreateMarcupUkr();
  });

  // -----------backdrop-logic-------------------

  const galleryBorovikWich = document.querySelector('.js-gallery-borovik-wich');

  galleryBorovikWich.addEventListener('click', (e) => {
    const { target } = e;

    if (target.tagName !== 'IMG') return;

    borovikGalleryWicher.classList.remove('backdrop-borovik-gallery--hidden');

    document.body.classList.add('is-freeze');

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
      borovikGalleryBigImgWich.closest('picture').hidden = true;
      borovikGalleryBigVideoWitcher.hidden = false;
      zoomBtnPlusW.classList.add('is-hidden');
      zoomBtnMinusW.classList.add('is-hidden');
    }

    borovikGalleryBigImgWich.src = target.src;

    // --------small-gallery-----------

    const smallGalleryItem = document.querySelector('.js-small-gallery-wich');

    smallGalleryItem.addEventListener('click', (e) => {
      const { target, currentTarget } = e;

      if (target.tagName !== 'IMG') return;

      borovikGalleryBigImgWich.style.cssText = "width:100%; height:100%;";

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
        borovikGalleryBigImgWich.closest('picture').hidden = true;
        borovikGalleryBigVideoWitcher.hidden = false;
        zoomBtnPlusW.classList.add('is-hidden');
        zoomBtnMinusW.classList.add('is-hidden');
      } else {
        borovikGalleryBigImgWich.closest('picture').hidden = false;
        borovikGalleryBigVideoWitcher.hidden = true;
        zoomBtnPlusW.classList.remove('is-hidden');
        zoomBtnMinusW.classList.remove('is-hidden');
      }

      borovikGalleryBigImgWich.src = target.src;

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
};

borovikGalleryBtncloseWich.addEventListener('click', () => {
  borovikGalleryBigImgWich.closest('picture').hidden = false;
  borovikGalleryBigVideoWitcher.hidden = true;

  borovikGalleryWicher.classList.add('backdrop-borovik-gallery--hidden');
  document.body.classList.remove('is-freeze');
});

function createMarcupWicher () {
  return `
  <div class="bestiary-list__item borovik-item">
        <div class="borovik-item__heder">
          <svg width="40" height="40" class="borovik-item__logo">
            <use href="${svg + '#witcher-icon'}"></use>
          </svg>

          <div class="borovik-item__content">
            <h3 class="borovik-item__title">Боровик</h3>
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
            <img class="borovik-item__img borovik-item__img-witcher" src="${spriggan}" alt="spriggan"
              loading="lazy">
          </a>
        </picture>

        <div class="borovik-item__body borovik-body">

          <div class="author-img">
            <h5 class="author-img__title">Доменіко Кава</h5>
            <a class="author-img__link" href="#">Автор малюнку</a>
          </div>

          <a class="borovik-body__link-myth" href="#">
            <svg width="18" height="18" class="borovik-body__logo">
              <use href="${svg + '#leading'}"></use>
            </svg>
            Релікти
          </a>

          <p class="borovik-body__text">Боровик (пол. Borowy, англ. Spriggan) — бестія, яка фігурує в книжках
            Сапковського
            та у всесвіті Відьмака.</p>


          <table class="borovik-witcher__table">
            <tr class="borovik-witcher__row">
              <td class="borovik-witcher__data">Клас</td>
              <td class="borovik-witcher__data">Релікти</td>
            </tr>

            <tr class="borovik-witcher__row">
              <td class="borovik-witcher__data">Місце появи/
                <br> Проживання
              </td>
              <td class="borovik-witcher__data">Морвудд</td>
            </tr>

            <tr class="borovik-witcher__row">
              <td class="borovik-witcher__data">Вразливість</td>
              <td class="borovik-witcher__data">знак Ігні
                Двімеритова бомба
                Мастило проти реліктів</td>
            </tr>

            <tr class="borovik-witcher__row">
              <td class="borovik-witcher__data">Тактика</td>
              <td class="borovik-witcher__data">Фізичні атаки</td>
            </tr>

            <tr class="borovik-witcher__row">
              <td class="borovik-witcher__data">Трофей</td>
              <td class="borovik-witcher__data">Так
                З Гротника після виконання завдання «Ноги холодні як лід»</td>
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
          Боровики — підвид лісовиків. Натрапити на них можна в недоступних безлюдних хащах. Якщо їх не злити, вони
          можуть і не напасти, але в гніві ці істоти страшні. Боровик дуже кремезний, завдає величезної шкоди, а м’яса
          зжерти може більше, ніж на доброму весіллі подають.
        </p>
        <p class="description-content__text">
          Кожний боровик панує над рослинами й нерозривно пов’язаний із ними. Якщо хтось нищить зелень у володіннях
          боровика, потвора обов’язково прийде й покарає порушника спокою.
        </p>
        <p class="description-content__text">
          У бою боровик управно користується своїми дужими кінцівками. Атакує він стрімко, що, беручи до уваги його
          масивність, може спричинити клопіт. Подібна до кори тверда шкіра боровика витримує навіть сильні вдари мечем,
          а сам він б’є так потужно, що ставити блок не варто й пробувати. Слід пильнувати коріння, яке боровик примушує
          вилазити з-під землі й хапати ворога. Ця потвора вміє також телепортуватися, раптово з’являючись просто перед
          супротивником. Бити його Знаком Аард марно, бо жодна сила цього монстра не повалить.
        </p>
      </div>`;
};

function createGalleryBorovikWicher () {
  return `
  <div class="borovik__gallery-header gallery-borovik">
  <h2 class="gallery-borovik__title">Галерея</h2>
  <p class="gallery-borovik__link">Подивитись всі</p>
  </div>

<ul id="gallery-w" class="gallery-borovik__list js-gallery-borovik-wich">
  <li class="gallery-borovik__item gallery-borovik__item-col">
    <img data-id="1" class="gallery-borovik__img gallery-borovik__img-col gallery-borovik__img-wicher_col"
      src="${spriggan}" alt="spriggan">
  </li>
  <li class="gallery-borovik__item">
    <img data-id="2" class="gallery-borovik__img gallery-borovik__img-wicher_row"
      src="${spriggan2}" alt="borovik-witcher-item-2">
  </li>
  <li class="gallery-borovik__item gallery-borovik__item-row">
    <img data-id="3" class="gallery-borovik__img gallery-borovik__img-row gallery-borovik__img-wicher_row"
      src="${spriggan3}" alt="borovik-witcher-item-3">
  </li>
</ul>

<button class="gallery-borovik__btn js-gallery-btn-ukr" type="button">В укр. міфології</button>`;
};

// ----ZOOM------------

zoomBtnPlus.addEventListener('click', zoomInc);
zoomBtnMinus.addEventListener('click', zoomDec);

function zoomInc () {

  if (container.offsetWidth <= 360) {
    borovikGalleryBigImg.style.objectFit = 'cover';
    borovikGalleryBigImg.style.objectPosition = 'top';
    console.log('hello');
  }

  let heightImg = borovikGalleryBigImg.offsetHeight;
  let widthImg = borovikGalleryBigImg.offsetWidth;

  widthImg += 25;
  heightImg += 50;

  borovikGalleryBigImg.style.width = widthImg + 'px';
  borovikGalleryBigImg.style.height = heightImg + 'px';
}

function zoomDec () {
  borovikGalleryBigImg.style.objectPosition = 'center';

  let heightImg = borovikGalleryBigImg.offsetHeight;
  let widthImg = borovikGalleryBigImg.offsetWidth;

  widthImg -= 25;
  heightImg -= 50;

  borovikGalleryBigImg.style.width = widthImg + 'px';
  borovikGalleryBigImg.style.height = heightImg + 'px';
}

// ----------W------------------------

zoomBtnPlusW.addEventListener('click', zoomIncW);
zoomBtnMinusW.addEventListener('click', zoomDncW);

function zoomIncW () {
  if (container.offsetWidth <= 360) {
    borovikGalleryBigImgWich.style.objectFit = 'cover';
    borovikGalleryBigImgWich.style.objectPosition = 'top';
    console.log('hello');
  }

  let heightImg = borovikGalleryBigImgWich.offsetHeight;
  let widthImg = borovikGalleryBigImgWich.offsetWidth;

  widthImg += 25;
  heightImg += 50;

  borovikGalleryBigImgWich.style.width = widthImg + 'px';
  borovikGalleryBigImgWich.style.height = heightImg + 'px';
}

function zoomDncW () {
  borovikGalleryBigImgWich.style.objectPosition = 'center';

  let heightImg = borovikGalleryBigImgWich.offsetHeight;
  let widthImg = borovikGalleryBigImgWich.offsetWidth;

  widthImg -= 25;
  heightImg -= 50;

  borovikGalleryBigImgWich.style.width = widthImg + 'px';
  borovikGalleryBigImgWich.style.height = heightImg + 'px';
}