import Isotope from 'isotope-layout';


let elem = document.querySelector('.portfolio-wrapper');
let buttons = document.querySelectorAll('.portfolio-nav__item');

let iso = new Isotope(elem, {
  itemSelector: '.portfolio',
});


buttons.forEach(element => {

  element.addEventListener('click', event => {
    buttons.forEach(btn => {
      btn.classList.remove('active');
    })


    let target = event.target;
    target.classList.add('active');
    let type = target.getAttribute('data-filter');

    iso.arrange({ filter: type });
  });
});




