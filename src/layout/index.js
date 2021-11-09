import './base';
import './grid';
import './wrapper';
import './content';
import './socials/socials.sass';
import './footer';
import InitHeader from './header';

export default () => {

  let $header = $('.header');
  if($header.length){
    new InitHeader($header)
  }

};
