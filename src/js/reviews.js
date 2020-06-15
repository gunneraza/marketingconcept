import 'swiper/css/swiper.min.css';
import Swiper from 'swiper';


let reviews = new Swiper('.reviews-slider', {
  spaceBetween: 100,
  speed: 3000,
  slidesPerView: 1,
  loop: true,
  autoplay: {
    speed: 200,
    delay: 2000
  },

  breakpoints: {
    320: {
      spaceBetween: 20
    }
  }
});

let clients = new Swiper('.clients-slider', {
  slidesPerView: 6,
  speed: 3000,
  clickable: false,
  loop: true,
  autoplay: {
    delay: 30
  },

  breakpoints: {
    320: {
      slidesPerView: 3,
    },

    768: {
      slidesPerView: 4
    },

    1200: {
      slidesPerView: 6
    }
  }

});

let services = new Swiper('.services-slider', {
  loop: true,
});
