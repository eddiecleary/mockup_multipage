import Swiper, {Navigation, Pagination} from 'swiper';

Swiper.use([Navigation, Pagination]);

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
    600: {
      slidesPerView: 3,
      spaceBetween: 20
    },
  }
});