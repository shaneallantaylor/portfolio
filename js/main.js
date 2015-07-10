$('.sample-1').mouseover(function(){
  $('.sample-1 .sample-title').css("height", "80px");
  $('.sample-1 p').css("bottom", "10px");
  $('.sample-title-1').css("margin-bottom", "4px")
  $('.expo-container').removeClass("nope");
  $('.arrow-up.left').removeClass("nope");
  $('.expo-text.1').removeClass("hidden");
  $('.expo-text.1').removeClass("nope");
});

$('.sample-1').mouseout(function(){
  $('.sample-1 .sample-title').css("height", "50px");
  $('.sample-1 p').css("bottom", "0px");
  $('.sample-title-1').css("margin-bottom", "8px")
  $('.expo-container').addClass("nope");
  $('.arrow-up.left').addClass("nope");
  $('.expo-text.1').addClass("nope");
  $('.expo-text.1').addClass("hidden");
});

$('.sample-2').mouseover(function(){
  $('.sample-2 .sample-title').css("height", "80px");
  $('.sample-2 p').css("bottom", "10px");
  $('.sample-title-2').css("margin-bottom", "4px")
  $('.expo-container').removeClass("nope");
  $('.arrow-up.right').removeClass("nope");
  $('.expo-text.2').removeClass("hidden");
  $('.expo-text.2').removeClass("nope");
});

$('.sample-2').mouseout(function(){
  $('.sample-2 .sample-title').css("height", "50px");
  $('.sample-2 p').css("bottom", "0px");
  $('.sample-title-2').css("margin-bottom", "8px")
  $('.expo-container').addClass("nope");
  $('.arrow-up.right').addClass("nope");
  $('.expo-text.2').addClass("nope");
  $('.expo-text.2').addClass("hidden");
});