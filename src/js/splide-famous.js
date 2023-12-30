import '../../node_modules/@splidejs/splide/dist/css/splide-core.min.css';

import Splide from '@splidejs/splide';
// import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

const splide = new Splide('.splide', {
  type: 'loop',
  drag: 'free',
  focus: 'center',
  perPage: 3,
  autoScroll: {
    speed: 1,
  },
});

splide.mount();