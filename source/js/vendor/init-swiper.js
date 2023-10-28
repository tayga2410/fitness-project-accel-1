import swiper from "./swiper";

const initSwiper = () => {
const Swiper = new swiper('.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 4,
    spaceBetween: 40,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });
}

  export default initSwiper();