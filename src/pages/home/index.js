import './index.sass';
import './index.pug';
import './welcome/welcome.sass';
import './gallery/gallery.sass';
import './join/join.sass';
import './tokenomics/tokenomics.sass';
import AboutSlider from './about';
import AdvantagesSlider from './advantages';
import InitRoadmap from './roadmap';
import TeamSlider from './team';
import PartnersSlider from './partners';

export default () => {
  let $aboutSlider = $('.about__slider');
  $aboutSlider && new AboutSlider($aboutSlider);

  let $advantagesSlider = $('.advantages__slider');
  $advantagesSlider && new AdvantagesSlider($advantagesSlider);

  let $roadmap = $('.roadmap');
  $roadmap && new InitRoadmap($roadmap);

  let $teamSlider = $('.team__slider');
  $teamSlider && new TeamSlider($teamSlider);

  let partnersSlider = $('.partners__slider');
  partnersSlider && new PartnersSlider(partnersSlider);
};
