import swiper from "./swiper";

function initSwiper(selector, options) {
  return new swiper(selector, {
    loop: false,
    ...options,

    navigation: {
      nextEl: '[data-swiper="button-next"]',
      prevEl: '[data-swiper="button-prev"]',
    },
  });
}

const jurySwiper = initSwiper('[data-swiper="juri-swiper"] [data-swiper="swiper"]', {
  slidesPerView: 4,
  loop: true,
  spaceBetween: 30,
});

const reviewsSwiper = initSwiper('[data-swiper="reviews-swiper"] [data-swiper="swiper"]', {
  slidesPerView: 1,
});

export { jurySwiper, reviewsSwiper };
