import swiper from "./swiper";

const loopEnabled = true; // loop: true для жюри
const loopDisabled = false; // loop: false для отзывов

const jurySwiperLoop = loopEnabled;
const reviewsSwiperLoop = loopDisabled;

const jurySwiperOptions = {
  slidesPerView: 4,
  loop: jurySwiperLoop,
  spaceBetween: 40,
  navigation: {
    nextEl: '[data-swiper="jury-container"] [data-swiper="button-next"]',
    prevEl: '[data-swiper="jury-container"] [data-swiper="button-prev"]',
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
