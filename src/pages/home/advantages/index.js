import './advantages.sass';
import 'swiper/swiper-bundle.css'
import Swiper from 'swiper/swiper-bundle'

class AdvantagesSlider {
  constructor($root) {
    this.slider = new Swiper('.advantages-swiper-container', {
      speed: 1000,
      initialSlide: 1,
      centeredSlides: true,
      effect: 'coverflow',
      coverflowEffect: {
        rotate: 0,
        stretch: 100,
        depth: 120,
        modifier: 2, // 2,3
        slideShadows : false,
      },
      slidesPerView: 'auto',
      slideToClickedSlide: true,
      pagination: {
        el: '.advantages__slider-pagination',
        type: 'bullets'
      },
      navigation: {
        nextEl: '.advantages__slider-next',
        prevEl: '.advantages__slider-prev',
      },
      breakpoints: {
        550: {
          coverflowEffect: {
            rotate: 0,
            stretch: 100,
            depth: 120,
            modifier: 3, // 2,3
            slideShadows : false,
          },
        },
        960: {
          coverflowEffect: {
            stretch: 100,
            depth: 650,
            modifier: 1, // 2,3
            slideShadows : false,
          },
        },
        1280: {
          coverflowEffect: {
            stretch: 120,
            depth: 700,
            modifier: 1,
          },
        },
        1440: {
          coverflowEffect: {
            rotate: 0,
            stretch: 140,
            depth: 750,
          },
        }
      },
      // autoplay: {
      //   delay: 3000
      // },
      // loop: true,
      // loopedSlides: $root.find('.advantages__slide').length,
    })
  }
}

export default AdvantagesSlider
