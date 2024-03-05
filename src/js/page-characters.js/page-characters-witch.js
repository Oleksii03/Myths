import '../header';
import '../backdrop-search';

import svg from '../../images/sprite.svg';

import whitch from '../../images/characters/white-whitch-1.png';
import whitch2 from '../../images/characters/Witche/witch-img-2.jpg';
import whitch3 from '../../images/characters/Witche/witch-img-3.jpg';
import whitch4 from '../../images/characters/Witche/witch-img-4.jpg';


import Yennefer from '../../images/characters/Yennefer.jpg';
import Yennefer2 from '../../images/characters/Yennefer/Yennefer-img-2.jpg';
import Yennefer3 from '../../images/characters/Yennefer/Yennefer-img-3.jpg';
import Yennefer4 from '../../images/characters/Yennefer/Yennefer-img-4.png';

// -----refs ----------------------------
const btnWitcher = document.querySelector('.characters-btn__witcher');
const btnUkr = document.querySelector('.jscharacters-btn-ukr');
const btnBox = document.querySelector('.js-characters-btn-box');

const charactersTitle = document.querySelector('.js-characters-title');
const mainContent = document.querySelector('.js-main-content');
const galleryImg = document.querySelector('.js-gallery-character');

const backdropGalleryWitche = document.querySelector('.js-backdrop-witche-gallery');
const backdropGalleryYennefer = document.querySelector('.js-backdrop-yennefer-gallery');

const galleryBigImgWitche = document.querySelector('.js-witche-modal-img');
const galleryBigImgYennefer = document.querySelector('.js-yennefer-modal-img');

const witcheGalleryBigVideo = document.querySelector('.js-witche-modal-video');
const yenneferGalleryBigVideo = document.querySelector('.js-yennefer-modal-video');

const witcheGalleryBtnClose = document.querySelector('.js-backdrop-close');
const yenneferGalleryBtnClose = document.querySelector('.js-backdrop-close-yennefer');
// ----/-refs ----------------------------

btnUkr.addEventListener('click', onCreateContentUkr);
btnWitcher.addEventListener('click', onCreateContentWitcher);

onCreateContentUkr();

function onCreateContentUkr (e) {
  btnBox.classList.remove('characters-btn__active');

  btnUkr.classList.add('characters-btn__active');
  btnWitcher.classList.remove('characters-btn__active');

  charactersTitle.textContent = 'Чародійки (Відьми)';
  mainContent.innerHTML = createMarcupUkr();
  galleryImg.innerHTML = createGalleryUkr();

  document.querySelector('.js-gallery-btn-wich').addEventListener('click', () => {
    onCreateContentWitcher();
  });

  // -----------backdrop-logic-------------------

  const galleryWhitch = document.querySelector('.js-gallery-whitch');

  galleryWhitch.addEventListener('click', (e) => {
    const { target } = e;

    if (target.tagName !== 'IMG') return;

    backdropGalleryWitche.classList.remove('backdrop-borovik-gallery--hidden');

    document.body.classList.add('is-freeze');

    const bigImgId = Number(target.dataset.id);

    if (bigImgId === 1) {
      galleryBigImgWitche.closest('picture').hidden = true;
      witcheGalleryBigVideo.hidden = false;
      zoomBtnPlus.classList.add('is-hidden');
      zoomBtnMinus.classList.add('is-hidden');
    } else {
      zoomBtnPlus.classList.remove('is-hidden');
      zoomBtnMinus.classList.remove('is-hidden');
    }

    galleryBigImgWitche.src = target.src;

    // --------small-gallery-----------

    const smallGalleryItem = document.querySelector('.js-small-gallery');

    smallGalleryItem.addEventListener('click', (e) => {
      const { target, currentTarget } = e;

      if (target.tagName !== 'IMG') return;

      const liItemId = Number(target.closest('LI').dataset.id);

      if (liItemId === 1) {
        galleryBigImgWitche.closest('picture').hidden = true;
        witcheGalleryBigVideo.hidden = false;
        zoomBtnPlus.classList.add('is-hidden');
        zoomBtnMinus.classList.add('is-hidden');
      } else {
        galleryBigImgWitche.closest('picture').hidden = false;
        witcheGalleryBigVideo.hidden = true;
        zoomBtnPlus.classList.remove('is-hidden');
        zoomBtnMinus.classList.remove('is-hidden');
      }

      galleryBigImgWitche.style.height = 100 + '%';
      galleryBigImgWitche.style.width = 100 + '%';

      galleryBigImgWitche.src = target.src;

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

witcheGalleryBtnClose.addEventListener('click', (e) => {
  galleryBigImgWitche.closest('picture').hidden = false;
  witcheGalleryBigVideo.hidden = true;
  backdropGalleryWitche.classList.add('backdrop-borovik-gallery--hidden');
  document.body.classList.remove('is-freeze');
});

function createMarcupUkr () {
  return `
  <div class="bestiary-list__item borovik-item">
  <div class="borovik-item__heder">
    <svg width="40" height="40" class="borovik-item__logo">
      <use href="${svg + '#icon-ukr-characters'}"></use>
    </svg>

    <div class="borovik-item__content">
      <h3 class="borovik-item__title">Чародійка</h3>
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
      <img class="borovik-item__img whitch-item__img" src="${whitch}" alt="whitch"
        loading="lazy">
    </a>
  </picture>

  <div class="borovik-item__body borovik-body">

    <div class="author-img">
      <h5 class="author-img__title">playgroundai.com (network)</h5>
      <a class="author-img__link" href="#">Автор малюнку</a>
    </div>

    <a class="borovik-body__link-myth" href="#">
      <svg width="18" height="18" class="borovik-body__logo">
        <use href="${svg + '#icon-profile'}"></use>
      </svg>
      Чаклунки/Відьми
    </a>

    <p class="borovik-body__text">
      Ві́дьма, чаклу́нка (чародійка) — жінка, наділена чаклунськими здібностями, котрі отримала від природи, або навчилася чаклувати.
    </p>

  </div>
</div>

<ol class="main-content__list">
  <li class="main-content__list-item">
    <h3 class="main-content__list-title">Зміст</h3>
  </li>
  <li class="main-content__list-item">1. Опис, міфи та легенди</li>
  <li class="main-content__list-item">2. Галерея</li>
</ol>

<div class="main-content__description description-content">

<h4 class="description-content__title">Опис</h4>

<p class="description-content__text">
  Часто постаті відьом і чарівниць (чарівників) зливаються в
  один образ, та насправді ці образи, хоч і стоять в одному
  семантичному ряду, не є тотожними. 
</p>
<p class="description-content__text">
  Чарівниці також поділялися на дві категорії: вроджені та
  навчені. Вроджена чарівниця робила добро і зло людям,
  дивлячись, під якою планетою вона народилася, а навчена —
  та, що уклала угоду з чортом, — мала робити тільки зло.
  Чарівниця за допомогою зілля та заклинань могла заважати
  людині в усіх справах: могла роз’єднати сім’ю, займатися
  любовною магією, погіршувати здоров’я, спричинити смерть
  чи, навпаки, привертати вдачу.
</p>
<p class="description-content__text">
  Чарівниця діяла із власної вигоди та бажання, а діяльність
  відьом мала більш визначений характер: вони мусили робити
  те, що передбачала їм їхня природа. 
</p>
<p class="description-content__text">
  Спільним фактором, який об’єднує знахарок, відьом, чарівниць,
  є те, що вони не могли померти без передачі своїх знань. 
</p>
<p class="description-content__text">
  Грані між образами знахарки, ворожки, чарівниці, чаклунки, відьми і їх чол. відповідниками є тонкими. Відмінний за характером, функціями, а певною мірою і за походженням образ чаклуна.
  В укр. нар. віруваннях постать чаклуна була пов’язана з колом уявлень про вовкулак та упирів.
</p>
</div>`;
};

function createGalleryUkr () {
  return `
      <div class="borovik__gallery-header gallery-borovik">
        <h2 class="gallery-borovik__title">Галерея</h2>
        <p><a class="gallery-borovik__link" href="#">Подивитись всі</a></p>
      </div>
      
      <ul class="gallery-character__list js-gallery-whitch">

        <li class="gallery-character__item">
          <img data-id="1" class="gallery-character__img" src="${whitch}"
            alt="whitch-img">
        </li>

        <li class="gallery-character__item">
          <img data-id="2" class="gallery-character__img gallery-whitch__img" src="${whitch2}"
            alt="whitch-img-2">
        </li>

        <li class="gallery-character__item">
          <img data-id="3" class="gallery-character__img gallery-whitch__img" src="${whitch3}" alt="whitch-img-3">
        </li>

        <li class="gallery-character__item">
          <img data-id="4" class="gallery-character__img" src="${whitch4}"
            alt="whitch-img-4">
        </li>
      </ul>

      <button class="gallery-borovik__btn js-gallery-btn-wich" type="button">У грі Відьмак</button>`;
};

// --------Yennefer-----------------------------

function onCreateContentWitcher (e) {
  btnBox.classList.add('characters-btn__active');

  btnUkr.classList.remove('characters-btn__active');
  btnWitcher.classList.add('characters-btn__active');

  charactersTitle.textContent = 'Чародійка, Йеннефер';
  mainContent.innerHTML = createMarcupYennefer();
  galleryImg.innerHTML = createGalleryYennefer();

  document.querySelector('.js-gallery-btn-ukr').addEventListener('click', () => {
    onCreateContentUkr();
  });

  // -----------backdrop-logic-------------------

  const galleryYennefer = document.querySelector('.js-gallery-yennefer');

  galleryYennefer.addEventListener('click', (e) => {
    const { target } = e;

    if (target.tagName !== 'IMG') return;

    document.body.classList.add('is-freeze');

    backdropGalleryYennefer.classList.remove('backdrop-borovik-gallery--hidden');

    const bigImgId = Number(target.dataset.id);

    if (bigImgId === 1) {
      galleryBigImgYennefer.closest('picture').hidden = true;
      yenneferGalleryBigVideo.hidden = false;
    }

    galleryBigImgYennefer.src = target.src;

    // --------small-gallery-----------

    const smallGalleryItem = document.querySelector('.js-small-gallery-yennefer');

    smallGalleryItem.addEventListener('click', (e) => {
      const { target, currentTarget } = e;

      if (target.tagName !== 'IMG') return;

      const liItemId = Number(target.closest('LI').dataset.id);

      if (liItemId === 1) {
        galleryBigImgYennefer.closest('picture').hidden = true;
        yenneferGalleryBigVideo.hidden = false;
      } else {
        galleryBigImgYennefer.closest('picture').hidden = false;
        yenneferGalleryBigVideo.hidden = true;
      }

      galleryBigImgYennefer.src = target.src;

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

yenneferGalleryBtnClose.addEventListener('click', () => {
  galleryBigImgYennefer.closest('picture').hidden = false;
  yenneferGalleryBigVideo.hidden = true;

  backdropGalleryYennefer.classList.add('backdrop-borovik-gallery--hidden');
  document.body.classList.remove('is-freeze');
});

function createMarcupYennefer () {
  return `
  <div class="bestiary-list__item borovik-item">
        <div class="borovik-item__heder">
          <svg width="40" height="40" class="yennefer-item__logo">
            <use href="${svg + '#icon-Magic-center'}"></use>
          </svg>

          <div class="borovik-item__content">
            <h3 class="borovik-item__title">Йеннефер</h3>
            <h4 class="borovik-item__sub-title">Гра «Відьмак 3: Дикий Гін»</h4>
          </div>

          <a href="#" class="borovik-item__svg-more">
            <svg width="18" height="18" class="borovik-body__logo">
              <use href="${svg + '#more-vertical'}"></use>
            </svg>
          </a>
        </div>

        <picture class="borovik-item__picture">
          <a href="#">
            <img class="borovik-item__img yennefer-item__img" src="${Yennefer}" alt="Geralt"
              loading="lazy">
          </a>
        </picture>

        <div class="borovik-item__body borovik-body">

          <div class="author-img">
            <h5 class="author-img__title">Гжегож Рутковський</h5>
            <a class="author-img__link" href="#">Автор малюнку</a>
          </div>

          <a class="borovik-body__link-myth" href="#">
            <svg width="18" height="18" class="borovik-body__logo">
              <use href="${svg + '#icon-profile'}"></use>
            </svg>
            Чародійки
          </a>

          <p class="borovik-body__text">
            Йеннефер із Венґерберґу (пол. Yennefer z Vengerbergu) — одна з головних героїнь літературного циклу, написаного Анджеєм Сапковським, і його адаптацій.
          </p>

          <table class="borovik-witcher__table">
            <tr class="borovik-witcher__row">
              <td class="borovik-witcher__data">Раса</td>
              <td class="borovik-witcher__data">Людина (квартерон)</td>
            </tr>

            <tr class="borovik-witcher__row">
              <td class="borovik-witcher__data">Стать</td>
              <td class="borovik-witcher__data">Жіноча</td>
            </tr>

            <tr class="borovik-witcher__row">
              <td class="borovik-witcher__data">Нація</td>
              <td class="borovik-witcher__data">Едірнка</td>
            </tr>

            <tr class="borovik-witcher__row">
              <td></td>
              <td class="characters-witcher__table_title"><b>Особові дані</b></td>
            </tr>

            <tr class="borovik-witcher__row">
              <td class="borovik-witcher__data">Професія</td>
              <td class="borovik-witcher__data">Чародійка</td>
            </tr>

            <tr class="borovik-witcher__row">
              <td class="borovik-witcher__data">Належність</td>
              <td class="borovik-witcher__data">Рада Чародіїв Ложа, Чародійок</td>
            </tr>

            <tr class="borovik-witcher__row">
              <td class="borovik-witcher__data">Здібності</td>
              <td class="borovik-witcher__data">Магія</td>
            </tr>

          </table>

        </div>
      </div>
      
      <ol class="main-content__list">
        <li class="main-content__list-item">
          <h3 class="main-content__list-title">Зміст</h3>
        </li>
        <li class="main-content__list-item">1. Опис, Запис у журналі</li>
        <li class="main-content__list-item">2. Галерея</li>
      </ol>

      <div class="main-content__description description-content">

        <h4 class="description-content__title">Гра «Відьмак 3: Дикий Гін»</h4>

        <p class="description-content__text">Запис у журналі</p>
        <p class="description-content__text">
          Вперше відьмака спіткав круковолосу чарівницею добрих років
          двадцять тому. Їхнє знайомство розпочалося пригодою з
          джином, а почуття — бажання промовлене тоді Ґеральтом,
          нерозривно сплело їхні долі разом.        
        </p>
        <p class="description-content__text">
          Втім їхні стосунки виявилися непростими — сповненими
          злетів, падінь, криз та розставань. Кохання Ґеральта та Йен
          було безсумнівним підтвердженням того, що «протилежності
          притягуються».
        </p>
        <p class="description-content__text">
          Обставини першої зустрічі після років розлуки з Йеннефер
          були безперечно дивними. Чарівниця не лише виявилися цілою
          та здоровою, але й користувалося підтримкою несподіваного
          союзника — Нільфгардської імперії.
        </p>
        <p class="description-content__text">
          Йеннефер завжди вважала, що мета виправдовує засоби. Коли
          стало зрозуміло, що порятунок Цірі потребує допомоги
          Філіппи Ейльгарт та інших чарівниць горезвісної Ложі,
          Йеннефер забула давні образи та переконала Емгира
          амністувати їх.        
        </p>
      </div>`;
}

function createGalleryYennefer () {
  return `
  <div class="borovik__gallery-header gallery-borovik">
    <h2 class="gallery-borovik__title">Галерея</h2>
    <p><a class="gallery-borovik__link" href="#">Подивитись всі</a></p>
  </div>
  
  <ul class="gallery-character__list js-gallery-yennefer">

    <li class="gallery-character__item">
      <img data-id="1" class="gallery-character__img" src="${Yennefer}"
        alt="Yennefer">
    </li>

    <li class="gallery-character__item">
      <img data-id="2" class="gallery-character__img gallery-character__img_w" src="${Yennefer2}"
        alt="Yennefer-item-2">
    </li>

    <li class="gallery-character__item">
      <img data-id="3" class="gallery-character__img gallery-character__img_w" src="${Yennefer3}" alt="Yennefer-item-3">
    </li>

    <li class="gallery-character__item">
      <img data-id="4" class="gallery-character__img gallery-character__img_fill" src="${Yennefer4}"
        alt="Yennefer-item-4">
    </li>
  </ul>

  <button class="gallery-borovik__btn js-gallery-btn-ukr" type="button">В укр. міфології</button>`;
};


// --------------------------------------

const zoomBtnPlus = document.querySelector('.js-btn-plus');
const zoomBtnMinus = document.querySelector('.js-btn-minus');

zoomBtnPlus.addEventListener('click', zoomInc);
zoomBtnMinus.addEventListener('click', zoomDec);

function zoomInc () {
  galleryBigImgWitche.style.objectFit = 'cover';
  galleryBigImgWitche.style.objectPosition = 'top';

  let heightImg = galleryBigImgWitche.offsetHeight;
  let widthImg = galleryBigImgWitche.offsetWidth;

  widthImg += 50;
  heightImg += 50;

  galleryBigImgWitche.style.width = widthImg + 'px';
  galleryBigImgWitche.style.height = heightImg + 'px';
}

function zoomDec () {
  galleryBigImgWitche.style.objectPosition = 'center';

  let heightImg = galleryBigImgWitche.offsetHeight;
  let widthImg = galleryBigImgWitche.offsetWidth;

  widthImg -= 50;
  heightImg -= 50;

  galleryBigImgWitche.style.width = widthImg + 'px';
  galleryBigImgWitche.style.height = heightImg + 'px';
}


// class Zoom {

//   height = 100;
//   width = 100;

//   increment () {

//     // console.log(widthImg);

//     this.width += 5;
//     this.height += 10;

//     galleryBigImgWitche.style.width = this.width + '%';
//     galleryBigImgWitche.style.height = this.height + '%';

//     galleryBigImgWitche.style.objectFit = 'cover';
//   }

//   decrement () {

//     widthImg -= 50;
//     heightImg -= 50;

//     galleryBigImgWitche.style.height = heightImg + 'px';
//     galleryBigImgWitche.style.width = widthImg + 'px';
//   }

// }

// let zoom = new Zoom();
