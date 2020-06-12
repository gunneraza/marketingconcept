import '../scss/app.scss';
import Typed from 'typed.js/src/typed';
import SmoothScroll from 'smooth-scroll';
import './tabs';
import './header';
import './slider';
import './reviews';

let options = {
  strings: [`digital &amp; media agency`],
  typeSpeed: 100,
  showCursor: false,
  startDelay: 100
};

let typed = new Typed('.home-info__subtitle', options);


let scroll = new SmoothScroll('a[href*="#"]');
