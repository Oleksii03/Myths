import borovik from '../../images/beasts-witcher/spriggan.jpg';
import griffin from '../../images/beasts-witcher/grifon.jpg';
import goblin from '../../images/beasts-witcher/grigg.jpg';

export const bestiaryWitcher = [
  {
    name: "Боровик",
    description: `Боровик (пол. Borowy, англ. Spriggan) — бестія у всесвіті Відьмака ...`,
    image: borovik,
    genus: "Релікти",
    ref: "./page-borovik.html",
  },
  {
    name: "Грифон",
    description: `Грифон — це істота з тілом, задніми ногами та хвостом лева і головою ...`,
    image: griffin,
    genus: "Гібриди",
    ref: "./page-griffin.html",
  },
  {
    name: "Домовик",
    description: `Домовик, гріг — це крихітний гуманоїд, пустотлива, але нешкідлива істота ...`,
    image: goblin,
    genus: "Людиноподібні",
    ref: "./page-domovik.html",
  },
];
