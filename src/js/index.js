// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const area = document.getElementById('scrollArea');
const colores = ['green', 'pink', 'purple'];

let options = {
  root: area,
  rootMargin: '0px',
  threshold: [0.7]
};

let callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      entry.target.dataset.color = 'purple';
      let activos = area.querySelectorAll('.active');
      console.log(activos);
      if (activos.length > 1) {
        activos.forEach((activo, index) => {
          activo.dataset.color = colores[index];
        });
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
  target.classList.remove('active');
  observer.observe(target);
});
