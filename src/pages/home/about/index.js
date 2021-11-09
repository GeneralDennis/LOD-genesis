import './about.sass';
import 'swiper/swiper-bundle.css'
import Swiper from 'swiper/swiper-bundle'
class AboutSlider {
  constructor($root) {
    this.slider = new Swiper('.about-swiper-container', {
      speed: 1000,
      centeredSlides: true,
      effect: 'coverflow',
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 3, // 2,3
        slideShadows : false,
      },
      slidesPerView: 'auto',
      slideToClickedSlide: true,
      pagination: {
        el: '.about__slider-pagination',
        type: 'bullets'
      },
      breakpoints: {
        768: {
          coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 0,
            modifier: 3, // 2,3
            slideShadows : false,
          },
        },
        1024: {
          effect: 'coverflow',
          coverflowEffect: {
            rotate: 0,
            stretch: 250,
            depth: 190,
            modifier: 1, // 2,3
            slideShadows : false,
          },
        },
      },
      // autoplay: {
      //   delay: 3000
      // },
      loop: true,
      loopedSlides: $root.find('.about__slide').length,
    })
  }
}

export default AboutSlider
