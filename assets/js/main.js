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

// Rick And Morty

let obj = '';
const url = 'https://rickandmortyapi.com/api/character/';

const swiperSlider = (image, title, subtitle) => {
  const slider = `<section class="swiper-slide">
              <div class="home__content grid">
                <div class="home__group">
                  <img src="${image}" alt="" class="home__img" />

                  <div class="home__indicator"></div>

                  <div class="home__details-img">
                    <h4 class="home__details-title">Lorem, ipsum dolor.</h4>
                  </div>
                </div>

                <div class="home__data">
                  <h3 class="home__subtitle">${subtitle}.</h3>
                  <h1 class="home__title">
                    ${title}
                  </h1>
                  <p class="home__description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur nulla architecto sapiente similique, qui voluptates!</p>

                  <div class="home__buttons">
                    <a href="#" class="button">Read More</a>
                    <a href="#" class="button--link button--flex"
                      >Track Record
                      <i class="bx bx-right-arrow-alt button__icon"></i>
                    </a>
                  </div>
                </div>
              </div>
            </section>`;

  return slider;
};

const categoryData = (image, name, location) => {
  const category = `<section class="category__data">
            <img src="${image}" alt="" class="category__img" />
            <h3 class="category__title">${name}</h3>
            <p class="category__description">Location : ${location}</p>
          </section>`;

  return category;
};

const trickContent = (image, name, status, location) => {
  const trick = `<section class="trick__content">
            <img src="${image}" alt="" class="trick__img" />
            <h3 class="trick__title">${name}</h3>
            <span class="trick__subtitle">Status : ${status}</span>
            <span class="trick__price">location : ${location}</span>

            <button class="button trick__button trick__cart">
              <i class="bx bx-cart-alt trick__icon"></i>
            </button>

            <button class="button trick__button trick__love">
              <i class="bx bx-heart trick__icon"></i>
            </button>
          </section>`;

  return trick;
};

function imageSize(element, height, borderRadius) {
  return element.forEach((img) => {
    img.style.height = height;
    img.style.borderRadius = borderRadius;
  });
}

fetch(url)
  .then((response) => response.json())
  .then((data) => (obj = data.results))
  .then(() => {
    const swiperWrapper = document.getElementById('swiper-wrapper');
    const categoryContainer = document.getElementById('category-container');
    const trickContainer = document.querySelector('.trick__container');

    for (let i = 0; i <= 1; i++) {
      swiperWrapper.innerHTML += swiperSlider(obj[i].image, obj[i].name, obj[i].location.name);

      const homeImage = document.querySelectorAll('.home__img');
      imageSize(homeImage, '250px', '1rem');
    }

    for (let j = 2; j <= 10; j++) {
      categoryContainer.innerHTML += categoryData(obj[j].image, obj[j].name, obj[j].location.name);

      const categoryImage = document.querySelectorAll('.category__img');
      imageSize(categoryImage, '200px', '.5rem');
    }

    for (let k = 11; k <= 17; k++) {
      trickContainer.innerHTML += trickContent(obj[k].image, obj[k].name, obj[k].status, obj[k].location.name);

      const trickImage = document.querySelectorAll('.trick__img');
      imageSize(trickImage, '120px', '.5rem');
    }
  });

/*=============== SCROLL REVEAL ANIMATION ===============*/
// const sr = ScrollReveal({
//   origin: 'top',
//   distance: '60px',
//   duration: 2000,
//   delay: 100,
//   reset: false,
// });

// sr.reveal('.new-swiper, .nletter__container, .footer__img-one, .footer__img-two');
// sr.reveal('.category__data, .trick__content', { interval: 100 });
// sr.reveal('.about__data, .discount__img', { origin: 'left' });
// sr.reveal('.about__img, .discount__data', { origin: 'right' });
