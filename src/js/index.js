// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

let options = {
  root: document.querySelector('#scrollArea'),
  rootMargin: '0px',
  threshold: [0.5]
  //   delay: 0
};

let callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      entry.target.dataset.color = 'purple';
      let activos = document.querySelectorAll('.active');

      if (activos.length === 3 || activos.length === 4) {
        activos[0].dataset.color = 'green';
        activos[1].dataset.color = 'pink';
        activos[2].dataset.color = 'purple';
        activos[2].nextElementSibling.dataset.color = 'pink';
        activos[2].nextElementSibling.nextElementSibling.dataset.color =
          'green';
      }
    } else {
      entry.target.classList.remove('active');
      entry.target.dataset.color = 'green';
    }
  });
};

let observer = new IntersectionObserver(callback, options);
let target = document.querySelectorAll('.carousel__item--grid');
target.forEach(target => {
  observer.observe(target);
});