import borovik from '../../images/beasts-witcher/spriggan.jpg';
import griffin from '../../images/beasts-witcher/grifon.jpg';
import goblin from '../../images/beasts-witcher/grigg.jpg';

export const bestiaryWitcher = [
  {
    name: "Боровик",
    searchName: "Боровик",
    description: `Боровик (пол. Borowy, англ. Spriggan) — бестія у всесвіті Відьмака ...`,
    img: borovik,
    logo: '#witcher-icon',
    genus: "Релікти",
    ref: "./page-borovik.html",
  },
  {
    name: "Грифон",
    searchName: "Грифон",
    description: `Грифон — це істота з тілом, задніми ногами та хвостом лева і головою ...`,
    img: griffin,
    logo: '#witcher-icon',
    genus: "Гібриди",
    ref: "./page-griffin.html",
  },
  {
    name: "Домовик",
    searchName: "Домовик",
    description: `Домовик, гріг — це крихітний гуманоїд, пустотлива, але нешкідлива істота ...`,
    img: goblin,
    logo: '#witcher-icon',
    genus: "Людиноподібні",
    ref: "./page-domovik.html",
  },
];
