/*=============== SHOW MENU ===============*/
const navMenu = document.querySelector('#nav-menu'),
  navToggle = document.querySelector('#nav-toggle'),
  navClose = document.querySelector('#nav-close');

//   Menu Show

if (navToggle) {
  navToggle.addEventListener('click', function () {
    navMenu.classList.add('show-menu');
  });
}

// Menu Hidden

if (navClose) {
  navClose.addEventListener('click', function () {
    navMenu.classList.remove('show-menu');
  });
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  const navMenu = document.querySelector('#nav-menu');
  navMenu.classList.remove('show-menu');
}

navLink.forEach(function (e) {
  return e.addEventListener('click', linkAction);
});

/*=============== HOME SWIPER ===============*/

let homeSwiper = new Swiper('.home-swiper', {
  spaceBetween: 30,
  loop: 'true',

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 3000,
  },
});

/*=============== CHANGE BACKGROUND HEADER ===============*/

function scrollHeader() {
  const header = document.getElementById('header');

  if (this.scrollY >= 50) {
    header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header');
  }
}

window.addEventListener('scroll', scrollHeader);

/*=============== NEW ARRIVALS SWIPER ===============*/
let newSwiper = new Swiper('.new-swiper', {
  centeredSlides: true,
  slidesPerView: 'auto',
  spaceBetween: 16,
  loop: 'true',
  autoplay: {
    delay: 2500,
  },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((el) => {
    const sectionHeight = el.offsetHeight;
    const sectionTop = el.offsetTop - 50;
    let sectionId = el.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.add('active-link');
    } else {
      document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.remove('active-link');
    }
  });
}

window.addEventListener('scroll', scrollActive);

/*=============== SHOW SCROLL UP ===============*/

function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');

  if (this.scrollY >= 460) {
    scrollUp.classList.add('scroll__show');
  } else {
    scrollUp.classList.remove('scroll__show');
  }
}

window.addEventListener('scroll', scrollUp);
/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 300,
  reset: true,
});

sr.reveal('.home-swiper, .new-swiper, .nletter__container, .footer__img-one, .footer__img-two');
sr.reveal('.category__data, .trick__content', { interval: 100 });
sr.reveal('.about__data, .discount__img', { origin: 'left' });
sr.reveal('.about__img, .discount__data', { origin: 'right' });

// Rick And Morty

let obj = '';
const url = 'https://rickandmortyapi.com/api/character/';

const homeImage = document.querySelectorAll('.home__img');
const homeTitle = document.querySelectorAll('.home__title');
console.log(homeTitle)
const homeSubtitle = document.querySelectorAll('.home__subtitle');
const wrapperSlider = document.getElementById('wrapperSlider');
console.log(wrapperSlider);

function componentSlider(data){
  return (  `<section class="swiper-slide">
  <div class="home__content grid">
    <div class="home__group">
      <img src="${data.image}" alt="" class="home__img" />

      <div class="home__indicator"></div>

      <div class="home__details-img">
        <h4 class="home__details-title">Lorem, ipsum dolor.</h4>
        <span class="home__details-subtitle">Lorem ipsum dolor sit amet consectetur.</span>
      </div>
    </div>

    <div class="home__data">
      <h3 class="home__subtitle">${data.location.name}</h3>
      <h1 class="home__title">
        ${data.name}
      </h1>
      <p class="home__description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur nulla architecto sapiente similique, qui voluptates!</p>

      <div class="home__buttons">
        <a href="#" class="button">Book Now</a>
        <a href="#" class="button--link button--flex"
          >Track Record
          <i class="bx bx-right-arrow-alt button__icon"></i>
        </a>
      </div>
    </div>
  </div>
</section>`
)
}

fetch(url)
  .then((response) => response.json())
  .then((data) => (obj = data.results))
  .then(() => {
    console.log(obj)
    for (let i = 0; i < 2; i++) {
      // console.log(wrapperSlider);
      wrapperSlider.innerHTML +=componentSlider(obj[i]);
      homeSubtitle.forEach((subtitle) => {
        subtitle.innerHTML = `${obj[i].location.name}`;
        // console.log(obj[i]);
      });

    }
  });

const categoryImage = document.querySelectorAll('.category__image'),
  categoryTitle = document.querySelectorAll('.category__title'),
  categoryDescription = document.querySelectorAll('.category__description');

let newObj = '';
