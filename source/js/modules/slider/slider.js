// import Swiper from 'swiper';

function initHeroSwiper() {
  let heroSwiper = new Swiper('.swiper-hero', {
    /* navigation: {
      nextEl: '.button-slider--next',
      prevEl: '.button-slider--prev',
    }, */

    pagination: {
      el: '.swiper-pagination',
    },

    autoplay: {
      delay: 5000,
    },

    direction: 'horizontal',
    loop: true,
    initialSlide: 0,
    slidesPerView: 1,
    speed: 2000,
  });
  return heroSwiper;
}

function initPartnersSwiper() {
  let reviewsSwiper = new Swiper('.swiper-partners', {

    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 1000,
    },
    initialSlide: 0,
    slidesPerView: 4,
    spaceBetween: 70,
    speed: 2000,
  });
  return reviewsSwiper;
}

export {initHeroSwiper, initPartnersSwiper};
