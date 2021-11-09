import './header.sass';

export default ($root) => {
  const $lang = $('.header__lang');
  const $items = $lang.find('.header__lang-items');
  const $langItem = $lang.find('.header__lang-item');
  const $langActive = $('.header__lang-active');
  const $burger = $('.header__burger');
  const $nav = $('.header__nav');

  $lang.on('click', function(){
    $(this).toggleClass('header__lang--active');
    $items.slideToggle();
  })

  $langItem.on('click', function(){
    $langActive.text($(this).data('lang'));
  })

  $burger && $burger.on('click', function(){
    $(this).toggleClass('header__burger--open');
    $nav.toggleClass('header__nav--open');
    $('body').toggleClass('no-scroll');
    }
  )
  $(window).on('resize', function(){
    if($(window).outerWidth() > 768) {
      if($burger.hasClass('header__burger--open')){
        $burger.removeClass('header__burger--open')
        $nav.removeClass('header__nav--open')
        $('body').removeClass('no-scroll');
      }
    }
  })

  const setColor = () => {
    $root.css('background', `rgba(255, 255, 255, ${$(window).scrollTop() / 300})`)
  }
  $(window).on('scroll', function(){
    setColor();
  })
  setColor();
}
