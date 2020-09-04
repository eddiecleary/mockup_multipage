import Swiper, {Navigation, Pagination, Autoplay} from 'swiper';

Swiper.use([Navigation, Pagination, Autoplay]);

const swiper = new Swiper('.swiper-container', {
  loop: true,
  pagination: {
    el: '.swiper-pagination'
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 40
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 50
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20
    },
  },
  autoplay: true
});