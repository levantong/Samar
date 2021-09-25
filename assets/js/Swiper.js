var galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  loop: true,
  loopedSlides: 100,

  spaceBetween: 10,
  centeredSlides: true,
  slidesPerView: 'auto',
  slideToClickedSlide: true,
});
var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 20,
  centeredSlides: true,
  slidesPerView: 'auto',
  slideToClickedSlide: true,
  loop: true,
  loopedSlides: 100
});
  
  galleryTop.on('slideChangeTransitionEnd', function() {
    let index_currentSlide = galleryTop.realIndex;
    let currentSlide = galleryTop.slides[index_currentSlide]
    galleryThumbs.slideTo(index_currentSlide, 1000, false);
  });
  
  galleryThumbs.on('slideChangeTransitionEnd', function() {
    let index_currentSlide = galleryThumbs.realIndex;
    let currentSlide = galleryThumbs.slides[index_currentSlide]
    galleryTop.slideTo(index_currentSlide, 1000, false);
  });