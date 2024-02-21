
// -----refs ----------------------------
const btnWitcher = document.querySelector('.characters-btn__witcher');
const btnUkr = document.querySelector('.jscharacters-btn-ukr');
// ----/-refs ---------------------------

btnUkr.addEventListener('click', onCreateContentUkr);
btnWitcher.addEventListener('click', onCreateContentWitcher);

onCreateContentUkr();

function onCreateContentUkr (e) {
  btnWitcher.classList.remove('characters-btn__active');
  btnUkr.classList.add('characters-btn__active');
}


function onCreateContentWitcher (e) {
  btnUkr.classList.remove('characters-btn__active');
  btnWitcher.classList.add('characters-btn__active');
}