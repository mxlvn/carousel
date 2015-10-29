$(function(){

  var slideWidth = $('.slide').width(),
      slideCount = $('.slide').size(),
      clicks     = 0;

  $('.frame').css({
    'height':'600px',
    'overflow': 'hidden'
  });

  $('.slide').css({
    'float':'left'
  });

  $('.tray').width(slideWidth*slideCount);

  $('.next').click(function(){
    if (clicks < slideCount - 1) {
      clicks += 1;
    } else{
      clicks = 0;
    }
    
    var slideDistance = slideWidth * clicks;
    $('.tray').animate({'right':slideDistance}, 600);

  });

  $('.prev').click(function(){
    if (clicks > 0) {
      clicks -= 1;
    } else {
      clicks = slideCount - 1
    }
    var slideDistance = slideWidth * clicks;
    $('.tray').animate({'right':slideDistance}, 600);

  });

  $('.prev', '.next').hide();
  $('.frame').hover(function(){
    $('.prev', '.next').show();
  }, function(){
    $('.prev', '.next').hide();
  });
});