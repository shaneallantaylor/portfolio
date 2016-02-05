// $('.menu-container').click(function() {
//   $('body').removeClass('homepage');
// });

$('#montage').click(function(){
  $('.playback-view').removeClass('hidden');
});

$('#selected-work').click(function(){
  $('.selected-work').removeClass('hidden');
  $('.press-content').addClass('hidden');
  $('#selected-work').addClass('current-page');
  $('#press').removeClass('current-page');
  $('body').removeClass('homepage');
});

$('#press').click(function(){
  $('.selected-work').addClass('hidden');
  $('.press-content').removeClass('hidden');
  $('#press').addClass('current-page');
  $('#selected-work').removeClass('current-page');
  $('body').removeClass('homepage');
});

$('#contact').click(function(){
  $('.contact-view').removeClass('hidden');
});

$('.contact-close-button').click(function(){
  $('.contact-view').addClass('hidden');
});

$('.video-close-button').click(function(){
  $('.playback-view').addClass('hidden');
});

$('.selected-work a').click(function(){
  $('.playback-view').removeClass('hidden');
});
