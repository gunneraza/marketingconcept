import '../scss/app.scss';
import Typed from 'typed.js/src/typed';
import SmoothScroll from 'smooth-scroll';
import './tabs';
import './header';
import './slider';
import './reviews';
import './isotope';


window.addEventListener('load', event => {
  document.body.classList.remove('preloader-active');
  document.getElementById('video-bg').play();
})


//
// let options = {
//   strings: [`digital &amp; media agency`],
//   typeSpeed: 100,
//   showCursor: false,
//   startDelay: 100
// };

// let typed = new Typed('.home-info__subtitle', options);


let scroll = new SmoothScroll('a[href*="#"]');


