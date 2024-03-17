import '../header';
import '../backdrop-search';

import svg from '../../images/sprite.svg';

import domovik from '../../images/beasts-main/item-mob-3.jpg';
import domovik2 from '../../images/page-domovik/item-gall-2.jpg';
import domovik3 from '../../images/page-domovik/item-gall-3.jpg';

import grigg from '../../images/beasts-witcher/grigg.jpg';
import grigg2 from '../../images/page-domovik/Grigg_2.png';
import grigg3 from '../../images/page-domovik/item-gall-witcher-3.jpg';

// -----refs-------------------------------

const mythBtnUkrElDom = document.querySelector('.js-myth-btns_ukr');
const mythBtnWitcherElDom = document.querySelector('.js-myth-btn_witcher');

const mainContent = document.querySelector('.js-main-content');
const galleryDomovikSection = document.querySelector('.js-gallery-domovik-section');

const backdropDomovikGallery = document.querySelector('.js-backdrop-domovik-gallery');
const backdropDomovikGalleryWitcher = document.querySelector('.js-backdrop-domovik-gallery-witcher');

const domovikModalBigImg = document.querySelector('.js-domovik-modal-img');
const domovikModalBigImgWitcher = document.querySelector('.js-domovik-modal-img-witch');

const domovikGalleryBigVideo = document.querySelector('.js-domovik-modal-video');
const domovikGalleryBigVideoWitcher = document.querySelector('.js-domovik-modal-video-witcher');

const domovikGalleryBtnClose = document.querySelector('.js-backdrop-close');
const domovikGalleryBtnCloseWitcher = document.querySelector('.js-backdrop-close-witch');

// --/---refs-------------------------------

mythBtnUkrElDom.addEventListener('click', onCreateMarcupUkrDom);
mythBtnWitcherElDom.addEventListener('click', onCreateMarcupWitcherDom);

onCreateMarcupUkrDom();

function onCreateMarcupUkrDom () {
  mythBtnWitcherElDom.classList.remove('myth-btns__active');
  mythBtnUkrElDom.classList.add('myth-btns__active');

  mainContent.innerHTML = createMarcupUkr();
  galleryDomovikSection.innerHTML = createGalleryDomovikUkr();

  document.querySelector('.js-gallery-btn-wich').addEventListener('click', () => {
    onCreateMarcupWitcherDom();
  });

  // -----------backdrop-logic-------------------

  const galleryDomovikUrk = document.querySelector('.js-gallery-borovik-urk');

  galleryDomovikUrk.addEventListener('click', (e) => {
    const { target } = e;

    if (target.tagName !== 'IMG') return;

    backdropDomovikGallery.classList.remove('backdrop-borovik-gallery--hidden');

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
      domovikModalBigImg.closest('picture').hidden = true;
      domovikGalleryBigVideo.hidden = false;
    }

    domovikModalBigImg.src = target.src;

    // --------small-gallery-----------

    const smallGalleryItem = document.querySelector('.js-small-gallery');

    smallGalleryItem.addEventListener('click', (e) => {
      const { target, currentTarget } = e;

      if (target.tagName !== 'IMG') return;

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
        domovikModalBigImg.closest('picture').hidden = true;
        domovikGalleryBigVideo.hidden = false;
      } else {
        domovikModalBigImg.closest('picture').hidden = false;
        domovikGalleryBigVideo.hidden = true;
      }

      domovikModalBigImg.src = target.src;

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

domovikGalleryBtnClose.addEventListener('click', (e) => {
  domovikModalBigImg.closest('picture').hidden = false;
  domovikGalleryBigVideo.hidden = true;

  backdropDomovikGallery.classList.add('backdrop-borovik-gallery--hidden');
  document.body.classList.remove('is-freeze');
});

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
    <a href="#gallery">
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

      <ul id="gallery" class="gallery-borovik__list js-gallery-borovik-urk">

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

  mainContent.innerHTML = createMarcupWicher();
  galleryDomovikSection.innerHTML = createGalleryDomovikWicher();

  document.querySelector('.js-gallery-btn-ukr').addEventListener('click', () => {
    onCreateMarcupUkrDom();
  });

  // -----------backdrop-logic-------------------

  const galleryDomovikWitcher = document.querySelector('.js-gallery-borovik-wich');

  galleryDomovikWitcher.addEventListener('click', (e) => {
    const { target } = e;

    if (target.tagName !== 'IMG') return;

    document.body.classList.add('is-freeze');

    backdropDomovikGalleryWitcher.classList.remove('backdrop-borovik-gallery--hidden');

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
      domovikModalBigImgWitcher.closest('picture').hidden = true;
      domovikGalleryBigVideoWitcher.hidden = false;
    }

    domovikModalBigImgWitcher.src = target.src;

    // --------small-gallery-----------

    const smallGalleryItem = document.querySelector('.js-small-gallery-witch');

    smallGalleryItem.addEventListener('click', (e) => {
      const { target, currentTarget } = e;

      if (target.tagName !== 'IMG') return;

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
        domovikModalBigImgWitcher.closest('picture').hidden = true;
        domovikGalleryBigVideoWitcher.hidden = false;
      } else {
        domovikModalBigImgWitcher.closest('picture').hidden = false;
        domovikGalleryBigVideoWitcher.hidden = true;
      }

      domovikModalBigImgWitcher.src = target.src;

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

domovikGalleryBtnCloseWitcher.addEventListener('click', () => {
  domovikModalBigImgWitcher.closest('picture').hidden = false;
  domovikGalleryBigVideoWitcher.hidden = true;

  backdropDomovikGalleryWitcher.classList.add('backdrop-borovik-gallery--hidden');
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
            <h3 class="borovik-item__title">Домовик (Гріг)</h3>
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
            <img class="borovik-item__img borovik-item__img-witcher" src="${grigg}" alt="grigg"
              loading="lazy">
          </a>
        </picture>

        <div class="borovik-item__body borovik-body">

          <div class="author-img">
            <h5 class="author-img__title">Знімок з гри відьмак 3</h5>
            <a class="author-img__link" href="#">Автор малюнку</a>
          </div>

          <a class="borovik-body__link-myth" href="#">
            <svg width="18" height="18" class="borovik-body__logo">
              <use href="${svg + '#leading'}"></use>
            </svg>
            Людиноподібні
          </a>

          <p class="borovik-body__text">
          Домовик, гріг, або Імп, — це крихітний гуманоїд, відомий по обидва боки Яруги як пустотлива, але нешкідлива істота, що мешкає в сільській місцевості, лісах, а іноді й у підземних склепах.
          </p>


          <table class="borovik-witcher__table">
            <tr class="borovik-witcher__row">
              <td class="borovik-witcher__data">Клас</td>
              <td class="borovik-witcher__data">Людиноподібні</td>
            </tr>

            <tr class="borovik-witcher__row">
              <td class="borovik-witcher__data">Місце появи/
                <br> Проживання
              </td>
              <td class="borovik-witcher__data">Ліси, луки та склепи</td>
            </tr>

            <tr class="borovik-witcher__row">
              <td class="borovik-witcher__data">Тактика</td>
              <td class="borovik-witcher__data">Сховатись</td>
            </tr>

            <tr class="borovik-witcher__row">
              <td class="borovik-witcher__data">Особливості</td>
              <td class="borovik-witcher__data">Гострі вуха<br>
              Широкі носи та животи
              Пискливий голос</td>
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

        <h4 class="description-content__title">Опис</h4>

        <p class="description-content__text">
          Грігґи, цілком ймовірно, найменша з визнаних рас. Стоячи поруч з людиною, вони в кращому випадку доходять йому до коліна, і через це некеровану дитину іноді називають «дурним грігом». Оскільки зріст не дозволяє їм сидіти на коні , вони сідають на котів.
        </p>
        <br>
        <h4 class="description-content__title">Запис у бестіарії</h4>

        <p class="description-content__text">
          З’являється в доповненні «Кров та Вино»
        </p>
        <p class="description-content__text">
          Село Ґрігг у «Країні тисячі байок» (ілюзія).
          Вони безперервно збирають трави, гриби та копають землю.
        </p>
        <p class="description-content__text">
          Село Грігг — це місце в ілюзії «Країна тисячі байок». Воно розташовано у темному лісі,  на північ від початкової локації персонажу, біля одного з відгалужень дороги з жовтої цегли. Тут живуть грігги. Але якщо підійти ближче, вони кричать від страху і біжать до своїх хатинок.
        </p>
      </div>`;
};

function createGalleryDomovikWicher () {
  return `
<div class="borovik__gallery-header gallery-borovik">
<h2 class="gallery-borovik__title">Галерея</h2>
<p><a class="gallery-borovik__link" href="#">Подивитись всі</a></p>
</div>

<ul id="gallery-w" class="gallery-borovik__list js-gallery-borovik-wich">
  <li class="gallery-borovik__item gallery-borovik__item-col">
    <img data-id="1" class="gallery-borovik__img gallery-borovik__img-col gallery-borovik__img-wicher_col"
      src="${grigg}" alt="domovik-witcher-item">
  </li>
  <li class="gallery-borovik__item">
    <img data-id="2" class="gallery-borovik__img gallery-borovik__img-wicher_row gallery-static__domovik-witcher_second"
      src="${grigg2}" alt="domovik-witcher-item-2">
  </li>
  <li class="gallery-borovik__item gallery-borovik__item-row">
    <img data-id="3" class="gallery-borovik__img gallery-borovik__img-row gallery-static__domovik-witcher_last"
      src="${grigg3}" alt="domovik-witcher-item-3">
  </li>
</ul>

<button class="gallery-borovik__btn js-gallery-btn-ukr" type="button">В укр. міфології</button>`;
};