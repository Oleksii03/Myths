import '../header';
import '../backdrop-search';

import svg from '../../images/sprite.svg';

import whitch from '../../images/characters/white-whitch-1.png';
import Yennefer from '../../images/characters/Yennefer.jpg';

// -----refs ----------------------------
const btnWitcher = document.querySelector('.characters-btn__witcher');
const btnUkr = document.querySelector('.jscharacters-btn-ukr');
const btnBox = document.querySelector('.js-characters-btn-box');

const charactersTitle = document.querySelector('.js-characters-title');

const mainContent = document.querySelector('.js-main-content');
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
}

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

function onCreateContentWitcher (e) {
  btnBox.classList.add('characters-btn__active');

  btnUkr.classList.remove('characters-btn__active');
  btnWitcher.classList.add('characters-btn__active');

  charactersTitle.textContent = 'Чародійка, Йеннефер';
  mainContent.innerHTML = createMarcupYennefer();
}

function createMarcupYennefer () {
  return `
  <div class="bestiary-list__item borovik-item">
        <div class="borovik-item__heder">
          <svg width="40" height="40" class="yennefer-item__logo">
            <use href="${svg + '#icon-Magic-center'}"></use>
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
              <td class="borovik-witcher__data">Рада Чародіїв, Ложа Чародійок </td>
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