var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 20,
    autoplay: {
      delay: 5000,
    },
    loopedSlides: 100,
    loop: true,
    speed: 1000,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
  });
  var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 20,
    centeredSlides: true,
    slidesPerView: 'auto',
    slideToClickedSlide: true,
    loopedSlides: 100,
    loop: true,
    speed: 1000,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
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