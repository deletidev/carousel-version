import '../scss/styles.scss';

//Comun functions

const deactivateButton = btn => {
  btn.disabled = true;
};

const activateButton = btn => {
  btn.disabled = false;
};

const nextSlide = (array, scroll) => {
  const movScroll = array[0].clientWidth;
  scroll.scrollLeft += movScroll;
};

const prevSlide = (array, scroll) => {
  const movScroll = array[0].clientWidth;
  scroll.scrollLeft -= movScroll;
};

//carousel simple
const areaTwo = document.getElementById('scrollArea2');
let itemsSimple = document.querySelectorAll('.carousel__item');
const simplePrev = document.getElementById('simple-prev');
const simpleNext = document.getElementById('simple-next');

simpleNext.addEventListener('click', () => {
  nextSlide(itemsSimple, areaTwo);
});
simplePrev.addEventListener('click', () => {
  prevSlide(itemsSimple, areaTwo);
});

//carousel version
const area = document.getElementById('scrollArea');
const colores = ['green', 'pink', 'purple'];
const verionPrev = document.getElementById('version-prev');
const versionNext = document.getElementById('version-next');

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
      if (activos.length > 1) {
        activos.forEach((activo, index) => {
          activo.dataset.color = colores[index];
        });
      }
      if (!activos[0].previousElementSibling) {
        deactivateButton(verionPrev);
      } else {
        activateButton(verionPrev);
      }
      if (!entry.target.nextElementSibling) {
        deactivateButton(versionNext);
      } else {
        activateButton(versionNext);
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

versionNext.addEventListener('click', () => {
  nextSlide(target, area);
});
verionPrev.addEventListener('click', () => {
  prevSlide(target, area);
});
