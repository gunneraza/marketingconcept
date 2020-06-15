let tabs = document.querySelectorAll('.tab-item');
let contents = document.querySelectorAll('.content-item');
let contentInfo = document.querySelectorAll('.content-info__text');

let portfolioTab = document.querySelectorAll('.portfolio-item');
let portfolioContent = document.querySelectorAll('.portfolio-content');
let portfolioSlider = document.querySelectorAll('.portfolio-slider');

function hideContent(content, subcontent, tab) {
  content.forEach(element => {
    if (element.classList.contains('active')) {
      element.classList.remove('active');
    }
  })

  subcontent.forEach(text => {
    if (text.classList.contains('active')) {
      text.classList.remove('active');
    }
  })

  tab.forEach(tab => {
    if (tab.classList.contains('active')) {
      tab.classList.remove('active');
    }
  })
}

function showContent(type, content, subContent) {
  content.forEach(content => {
    if(content.getAttribute('data-type') === type) {
      content.classList.add('active');
    }
  })

  subContent.forEach(text => {
    if(text.getAttribute('data-type') === type) {
      text.classList.add('active');
    }
  })
}

tabs.forEach(tab => {
  tab.addEventListener('click', event => {
    hideContent(contents, contentInfo, tabs);
    tab.classList.add('active');
    let type = tab.getAttribute('data-type');
    showContent(type, contents, contentInfo);
  })
})

import 'swiper/css/swiper.min.css';
import Swiper from 'swiper';

var naming = new Swiper('.naming-slider', {
  speed: 400,
  spaceBetween: 100,
  observer: true,
  loop: true,
  autoplay: {
    delay: 2000
  }
});

var branding = new Swiper('.web-slider', {
  speed: 400,
  spaceBetween: 100,
  observer: true,
  autoplayDisableOnInteraction: false,
  loop: true,
  autoplay: {
    delay: 2000
  }
});

var packaging = new Swiper('.packaging-slider', {
  speed: 400,
  spaceBetween: 100,
  observer: true,
  loop: true,
  autoplay: {
    delay: 2000
  }
});

//
// portfolioTab.forEach(element => {
//   element.addEventListener('click', event => {
//     hideContent(portfolioContent, portfolioSlider, portfolioTab);
//     element.classList.add('active');
//     let type = element.getAttribute('data-type');
//     showContent(type, portfolioContent, portfolioSlider);
//     packaging.update();
//     naming.update();
//     branding.autoplay.start();
//     branding.update();
//   });
// })
