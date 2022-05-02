// ========== Swiper ============

var swiper = new Swiper('.swiper', {

  speed: 1000,
  loop: true,
  slidesPerView: 1.4,
  centeredSlides : true,
  spaceBetween:20,

  pagination: {
    el: '.strength-slider__pagination',
    clickable: true, 
  },

  autoplay: {
    delay: 2000, 
    disableOnInteraction:false
  },

});
