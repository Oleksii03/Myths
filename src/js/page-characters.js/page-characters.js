import '../header';
import '../backdrop-search';

import svg from '../../images/sprite.svg';

import kozak from '../../images/characters/ukrainskii-kozak-art-1_PC.jpg';
import Sahaidachnyi from '../../images/characters/Petro-Sahaidachnyi.jpg';
import Bohun from '../../images/characters/Ivan-Bohun.jpg';
import kozakRepin from '../../images/characters/ukrainskii-kozak-Repin.jpg';

import Geralt from '../../images/characters/Geralt.jpg';
import Geralt2 from '../../images/characters/Witcher/Geralt-item-2.png';
import Geralt3 from '../../images/characters/Witcher/Geralt-item-3.png';
import Geralt4 from '../../images/characters/Witcher/Geralt-item-4.jpg';



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
  galleryImg.innerHTML = createGalleryUkr();
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
      </div>
      
      <ul class="gallery-character__list js-gallery-character-urk">

        <li class="gallery-character__item">
          <img data-id="1" class="gallery-character__img" src="${kozak}"
            alt="ukrainskii-kozak">
        </li>

        <li class="gallery-character__item">
          <img data-id="2" class="gallery-character__img" src="${Sahaidachnyi}"
            alt="Petro-Sahaidachnyi">
        </li>

        <li class="gallery-character__item">
          <img data-id="3" class="gallery-character__img" src="${Bohun}" alt="Ivan-Bohun">
        </li>

        <li class="gallery-character__item">
          <img data-id="4" class="gallery-character__img" src="${kozakRepin}"
            alt="ukrainskii-kozak-Repin">
        </li>
      </ul>

      <div class="famous-cossacks">
        <h3 class="famous-cossacks__title">Відомі Козаки-Характерники</h3>

        <ol class="famous-cossacks__list">
          <li class="famous-cossacks__list-item">1. Петро Сагайдачний</li>
          <li class="famous-cossacks__list-item">2. Іван Богун</li>
          <li class="famous-cossacks__list-item">3. Іван Сірко</li>
        </ol>

      </div>

      <button class="gallery-borovik__btn js-gallery-btn-wich" type="button">У грі Відьмак</button>`;
};


function onCreateContentWitcher (e) {
  btnBox.classList.add('characters-btn__active');

  btnUkr.classList.remove('characters-btn__active');
  btnWitcher.classList.add('characters-btn__active');

  charactersTitle.textContent = 'Відьмак, Ґеральт з Рівії';
  mainContent.innerHTML = createMarcupWitcher();
  galleryImg.innerHTML = createGalleryWitcher();

};

function createMarcupWitcher () {
  return `
  <div class="bestiary-list__item borovik-item">
        <div class="borovik-item__heder">
          <svg width="40" height="40" class="borovik-item__logo">
            <use href="${svg + '#witcher-icon'}"></use>
          </svg>

          <div class="borovik-item__content">
            <h3 class="borovik-item__title">Відьмак, Ґеральт з Рівії</h3>
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
            <img class="borovik-item__img borovik-item__img-witcher" src="${Geralt}" alt="Geralt"
              loading="lazy">
          </a>
        </picture>

        <div class="borovik-item__body borovik-body">

          <div class="author-img">
            <h5 class="author-img__title">Марек Мадей</h5>
            <a class="author-img__link" href="#">Автор малюнку</a>
          </div>

          <a class="borovik-body__link-myth" href="#">
            <svg width="18" height="18" class="borovik-body__logo">
              <use href="${svg + '#icon-profile'}"></use>
            </svg>
            Відьмаки
          </a>

          <p class="borovik-body__text">
            Ґеральт з Рівії, також відомий як «Білий Вовк» та «М' ясник з Блавікену» (пол. Geralt z Rivii; англ. Geralt of Rivia) — головний герой літературного циклу, написаного Анджеєм Сапковським та його адаптацій.
          </p>

          <table class="borovik-witcher__table">
            <tr class="borovik-witcher__row">
              <td class="borovik-witcher__data">Раса</td>
              <td class="borovik-witcher__data">Людина (Відьмак)</td>
            </tr>

            <tr class="borovik-witcher__row">
              <td class="borovik-witcher__data">Стать</td>
              <td class="borovik-witcher__data">Чоловіча</td>
            </tr>

            <tr class="borovik-witcher__row">
              <td class="borovik-witcher__data">Нація</td>
              <td class="borovik-witcher__data">Кедвенець</td>
            </tr>

            <tr class="borovik-witcher__row">
              <td></td>
              <td class="characters-witcher__table_title"><b>Особові дані</b></td>
            </tr>

            <tr class="borovik-witcher__row">
              <td class="borovik-witcher__data">Професія</td>
              <td class="borovik-witcher__data">Відьмак</td>
            </tr>

            <tr class="borovik-witcher__row">
              <td class="borovik-witcher__data">Належність</td>
              <td class="borovik-witcher__data">Школа Вовка</td>
            </tr>

            <tr class="borovik-witcher__row">
              <td class="borovik-witcher__data">Здібності</td>
              <td class="borovik-witcher__data">
                Відьмацькі здібності
                Фехтування<br>
                Алхімія<br>
                Знаки
              </td>
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
          Я міг чимало розповісти про це всесвітньо відомому мисливця
          на чудовиськ, якого Старша Мова кличе Ґвинблейдд, а наш
          новий, не менш благородний - мова іменує Білим вовком.
          Ґеральт із Ривії - особистість виняткова. На перший погляд
          він звичайний рубака, мисливець, нехитрий і простецький
          виконавець брудних справ. Але тільки придивись — і перед
          тобою відкриється людина небувалою глибини, незвичайного
          світогляду і величезного досвіду. На поверхні він замислений і
          грубуватий мовчун, але трохи глибше лежить ціле море
          доброти, радості і готовності в будь-який момент прийти на
          допомогу друзям — і слушною порадою, і гострим мечем. Він
          різкий, неотесаний і часом ходить в справжніх лахмітті і все ж
          користується незмінною прихильністю прекрасної статі. 
          Коротко кажучи, Ґеральт - ходяче протиріччя.
        </p>
        <p class="description-content__text">
          Без зайвої скромності можу я вам сказати, що знаю його
          минуле краще, ніж будь-який з нині живих. Я був біля нього і у
          важкі часи і в години веселощів, допомагав то мудрою порадою,
          то гострим словом. 
        </p>
        <p class="description-content__text">
          Тому вважаю своїм обов'язком продовжувати літопис і, заради
          блага і освіти прийдешніх поколінь ...
        </p>
      </div>`;
}

function createGalleryWitcher () {
  return `
  <div class="borovik__gallery-header gallery-borovik">
    <h2 class="gallery-borovik__title">Галерея</h2>
    <p><a class="gallery-borovik__link" href="#">Подивитись всі</a></p>
  </div>
  
  <ul class="gallery-character__list js-gallery-character-urk">

    <li class="gallery-character__item">
      <img data-id="1" class="gallery-character__img" src="${Geralt}"
        alt="Geralt">
    </li>

    <li class="gallery-character__item">
      <img data-id="2" class="gallery-character__img gallery-character__img_w" src="${Geralt2}"
        alt="Geralt-item-2">
    </li>

    <li class="gallery-character__item">
      <img data-id="3" class="gallery-character__img gallery-character__img_w" src="${Geralt3}" alt="Geralt-item-3">
    </li>

    <li class="gallery-character__item">
      <img data-id="4" class="gallery-character__img gallery-character__img_fill" src="${Geralt4}"
        alt="Geralt-item-4">
    </li>
  </ul>

  <button class="gallery-borovik__btn js-gallery-btn-ukr" type="button">В укр. міфології</button>`;
}