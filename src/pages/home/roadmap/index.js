import './roadmap.sass';

export default () => {
  const $button = $('.roadmap__thumbs-item');
  const $card = $('.roadmap__card');
  const $pagination = $('.roadmap__pagination-item');
  let id = 1;
  const $next = $('.roadmap__nav-next');
  const $prev = $('.roadmap__nav-prev');
  $prev.addClass('roadmap__nav-prev--disable');

  $button.each(function() {
    $(this).data('id') === id ? $(this).addClass('roadmap__thumbs-item--active') : null;
  })
  $pagination.each(function() {
    $(this).data('id') === id ? $(this).addClass('roadmap__pagination-item--active') : null;
  })

  $next.on('click', function(){
    if(id<$button.length){
      id++;
      $card.slideUp();
      $card.each(function(){
        $(this).data('id') === id ? $(this).slideDown() : null;
      })
      $pagination.removeClass('roadmap__pagination-item--active');
      $pagination.each(function() {
        $(this).data('id') === id ? $(this).addClass('roadmap__pagination-item--active') : null;
      })
      $prev.removeClass('roadmap__nav-prev--disable')
      console.log('id', id, 'length', $button.length)
      if(id === $button.length){
        $next.addClass('roadmap__nav-next--disable')
      }
    }
  })

  $prev.on('click', function(){
    if(id>1){
      id--;
      $card.slideUp();
      $card.each(function(){
        $(this).data('id') === id ? $(this).slideDown() : null;
      })
      $pagination.removeClass('roadmap__pagination-item--active');
      $pagination.each(function() {
        $(this).data('id') === id ? $(this).addClass('roadmap__pagination-item--active') : null;
      })
      $next.removeClass('roadmap__nav-next--disable')
      if(id === 1){
        $prev.addClass('roadmap__nav-prev--disable')
      }
    }

  })


  $button.on('click', function(){
    let id = $(this).data('id');
    if($(this).hasClass('roadmap__thumbs-item--active')) {
      return
    } else {
      $button.removeClass('roadmap__thumbs-item--active');
      $(this).addClass('roadmap__thumbs-item--active');
      $card.slideUp();
      $card.each(function(){
        $(this).data('id') === id ? $(this).slideDown() : null;
      })
    }
  })
}
