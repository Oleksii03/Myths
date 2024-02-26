import '../header';
import '../backdrop-search';

// -----refs ----------------------------
const btnWitcher = document.querySelector('.characters-btn__witcher');
const btnUkr = document.querySelector('.jscharacters-btn-ukr');
const btnBox = document.querySelector('.js-characters-btn-box');

// ----/-refs ---------------------------

btnUkr.addEventListener('click', onCreateContentUkr);
btnWitcher.addEventListener('click', onCreateContentWitcher);

function onCreateContentUkr (e) {
  btnBox.classList.remove('characters-btn__active');

  btnUkr.classList.add('characters-btn__active');
  btnWitcher.classList.remove('characters-btn__active');


}


function onCreateContentWitcher (e) {
  btnBox.classList.add('characters-btn__active');

  btnUkr.classList.remove('characters-btn__active');
  btnWitcher.classList.add('characters-btn__active');

}