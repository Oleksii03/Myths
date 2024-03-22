import kozak from '../../images/characters/ukrainskii-kozak-art-1_PC.jpg';
import witch from '../../images/characters/white-whitch-1.png';

import Geralt from '../../images/characters/Geralt.jpg';
import Yennefer from '../../images/characters/Yennefer.jpg';

export const charactersUkr = [
  {
    name: 'Козак-характерник',
    searchName: "Козак",
    genus: 'Козаки-характерники',
    img: kozak,
    logo: '#icon-ukr-characters',
    description: `Відьма́к та Характе́рник (відьма́н) — персонаж слов'янської міфології, чаклун ...`,
    ref: './page-characters.html',
  },
  {
    name: 'Чародійки',
    searchName: "Чародійка",
    genus: 'Чаклунки/Відьми',
    img: witch,
    logo: '#icon-ukr-characters',
    description: `Ві́дьма, чаклу́нка (чародійка) — жінка, наділена чаклунськими здібностями ...`,
    ref: './page-characters-witch.html',
  },
];

export const charactersWitcher = [
  {
    name: 'Ґеральт з Рівії',
    searchName: "Геральт",
    genus: 'Відьмак',
    img: Geralt,
    logo: '#witcher-icon',
    description: `Ґеральт з Рівії, «Білий Вовк» — головний герой літературного циклу романів ...`,
    ref: './page-characters.html',
  },
  {
    name: 'Йеннефер',
    searchName: "Йеннефер",
    genus: 'Чародійка',
    img: Yennefer,
    logo: '#icon-Magic-center',
    description: `Йеннефер — одна з головних героїнь літературного циклу А.Сапковського ...`,
    ref: './page-characters-witch.html',
  },
];