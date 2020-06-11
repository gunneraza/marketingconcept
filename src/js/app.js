import '../scss/app.scss';
import Typed from 'typed.js/src/typed';
import './tabs';
import './header';
import './slider';
import './reviews';

var options = {
  strings: [`digital &amp; media agency`],
  typeSpeed: 100,
  showCursor: false,
  startDelay: 100
};

var typed = new Typed('.home-info__subtitle', options);


