import './partners.sass';
import 'swiper/swiper-bundle.css'
import Swiper from 'swiper/swiper-bundle'

class TeamSlider {
  constructor($root) {
    this.slider = new Swiper('.partners-swiper-container', {
      speed: 1000,
      spaceBetween: 20,
      slidesPerView: 1,
      pagination: {
        el: '.partners__pagination',
        type: 'bullets'
      },

    })
  }
}

export default TeamSlider
