import 'swiper/css/swiper.min.css';
import Swiper from 'swiper';


let reviews = new Swiper('.reviews-slider', {
  spaceBetween: 100,
  slidesPerView: 1,
  loop: true,
  autoplay: {
    speed: 2000
  }
});
