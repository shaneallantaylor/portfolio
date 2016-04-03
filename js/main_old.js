
$('.sample-1').mouseover(function() {
  var self = this
  $('.sample-1 .sample-title').css("height", "80px");
});

$('.sample-1').mouseout(function() {
  $('.sample-1 .sample-title').css("height", "50px");
});

$('.sample-2').mouseover(function() {
  $('.sample-2 .sample-title').css("height", "80px");
});

$('.sample-2').mouseout(function() {
  $('.sample-2 .sample-title').css("height", "50px");
});

$('.sample-3').mouseover(function() {
  $('.sample-3 .sample-title').css("height", "80px");
});

$('.sample-3').mouseout(function() {
  $('.sample-3 .sample-title').css("height", "50px");
});

$('.sample-4').mouseover(function() {
  $('.sample-4 .sample-title').css("height", "80px");
});

$('.sample-4').mouseout(function() {
  $('.sample-4 .sample-title').css("height", "50px");
});


$('.parallax-window').mouseover(function() {
  if ( $('body').hasClass('small-view') ) {}
  else {
    $(this).find('.project-info').addClass('on');
  }
});

$('.parallax-window').mouseout(function() {
  if ( $('body').hasClass('small-view') ) {}
  else {
    $(this).find('.project-info').removeClass('on');
  }
});

$('.mobile-info').click(function() {
  var item = $(this).next().find('.project-info');
  $(item).toggleClass('on');
  // $(this).find('.project-info').toggleClass('on');
});

// $('.sample-1').mouseover(function(){
//   if ($(window).width() >= 1000) {
//     $('.sample-1 .sample-title').css("height", "80px");
//     $('.sample-1 p').css("bottom", "10px");
//     $('.sample-title-1').css("margin-bottom", "4px")
//     $('.expo-container').removeClass("nope");
//     $('.arrow-up.left').removeClass("nope");
//     $('.expo-text.1').removeClass("hidden");
//     $('.expo-text.1').removeClass("nope");
//   }
// });

// $('.sample-1').mouseout(function(){
//   if (!$(".sample-1").hasClass("active")) {
//     $('.sample-1 .sample-title').css("height", "50px");
//     $('.sample-1 p').css("bottom", "0px");
//     $('.sample-title-1').css("margin-bottom", "8px")
//     $('.expo-container').addClass("nope");
//     $('.arrow-up.left').addClass("nope");
//     $('.expo-text.1').addClass("nope");
//     $('.expo-text.1').addClass("hidden");
//   }
// });

// $('.sample-2').mouseover(function(){
//   if ($(window).width() >= 1000) {
//     $('.sample-2 .sample-title').css("height", "80px");
//     $('.sample-2 p').css("bottom", "10px");
//     $('.sample-title-2').css("margin-bottom", "4px")
//     $('.expo-container').removeClass("nope");
//     $('.arrow-up.right').removeClass("nope");
//     $('.expo-text.2').removeClass("hidden");
//     $('.expo-text.2').removeClass("nope");
//   }
// });

// $('.sample-2').mouseout(function(){
//   if (!$(".sample-2").hasClass("active")) {
//     $('.sample-2 .sample-title').css("height", "50px");
//     $('.sample-2 p').css("bottom", "0px");
//     $('.sample-title-2').css("margin-bottom", "8px")
//     $('.expo-container').addClass("nope");
//     $('.arrow-up.right').addClass("nope");
//     $('.expo-text.2').addClass("nope");
//     $('.expo-text.2').addClass("hidden");
//   }
// });