import swiper from "./swiper";

const jurySwiper = new swiper('[data-swiper="juri"]', {
  slidesPerView: 4,
  loop: true,
  spaceBetween: 40,
  navigation: {
    nextEl: '[data-swiper="button-next"]',
    prevEl: '[data-swiper="button-prev"]',
  },
});

const reviewsSwiper = new swiper('[data-swiper="review"]', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: false,
  navigation: {
    nextEl: '[data-swiper="button-next"]',
    prevEl: '[data-swiper="button-prev"]',
  },
});

function initSwiper(swiperInstance) {
  swiperInstance.init();
}

export { initSwiper, jurySwiper, reviewsSwiper };