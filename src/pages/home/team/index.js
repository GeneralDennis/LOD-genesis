import './team.sass';
import 'swiper/swiper-bundle.css'
import Swiper from 'swiper/swiper-bundle'

class PartnersSlider {
  constructor($root) {
    this.slider = new Swiper('.team-swiper-container', {
      speed: 1000,

      slidesPerView: 1,
      pagination: {
        el: '.team__slider-pagination',
        type: 'bullets'
      },

      breakpoints: {
        768: {
         slidesPerView: 4
        },
      }

    })
  }
}

export default PartnersSlider
