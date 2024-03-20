import { bestiaryUkr } from "./data/bestiary-ukr";
import { bestiaryWitcher } from "./data/bestiary-witcher";

const backdropSearch = document.querySelector('.js-backdrop-search');
const btnSearch = document.querySelector('.js-search-icon');

const searchList = document.querySelector('.js-search-list');

console.log(searchList);

btnSearch.addEventListener('click', onOpenBackdropSearch);

function onOpenBackdropSearch (e) {
  backdropSearch.classList.toggle('backdrop-search--hidden');

  document.body.style.overflow = document.body.style.overflow ? '' : 'hidden';
}


const allСharacters = [...bestiaryUkr, ...bestiaryWitcher];

allСharacters.filter(el => el.name.toLocaleLowerCase() === 'боровик').map(el => console.log(el));
