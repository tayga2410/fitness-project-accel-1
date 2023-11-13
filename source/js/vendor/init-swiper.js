import swiper from "./swiper";

const loopEnabled = true; // loop: true для жюри
const loopDisabled = false; // loop: false для отзывов

const jurySwiperLoop = loopEnabled;
const reviewsSwiperLoop = loopDisabled;

const jurySwiperOptions = {
  loop: jurySwiperLoop,
  navigation: {
    nextEl: '[data-swiper="jury-container"] [data-swiper="button-next"]',
    prevEl: '[data-swiper="jury-container"] [data-swiper="button-prev"]',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 32,
      initialSlide: 2,
    },
    1366: {
      slidesPerView: 4,
      spaceBetween: 40,
    }
  },
};

const reviewsSwiperOptions = {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: reviewsSwiperLoop,
  navigation: {
    nextEl: '[data-swiper="review-container"] [data-swiper="button-next"]',
    prevEl: '[data-swiper="review-container"] [data-swiper="button-prev"]',
  },
};

const jurySwiper = new swiper('[data-swiper="jury"]', jurySwiperOptions);
const reviewsSwiper = new swiper('[data-swiper="review"]', reviewsSwiperOptions);

function initSwiper(swiperInstance) {
  swiperInstance.init();
}

export { initSwiper, jurySwiper, reviewsSwiper };
