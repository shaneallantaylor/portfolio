$('.parallax-window').mouseover(function() {
  $(this).find('.project-info').addClass('on');
});

$('.parallax-window').mouseout(function() {
  $(this).find('.project-info').removeClass('on');
});

$('.mobile-info').click(function() {
  var item = $(this).next().find('.project-info');
  $(item).toggleClass('on');
});