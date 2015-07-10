$('.sample-1').click(function(){
  if (!$(".sample-1").hasClass("active")) {
    console.log("sample-1 doesn't have the active class");
    $(".sample-1").addClass("active");
    $(".sample-2").addClass("unfocused");
    $('.sample-1 .sample-title').css("height", "80px");
    $('.sample-1 p').css("bottom", "10px");
    $('.sample-title-1').css("margin-bottom", "4px")
    $('.expo-container').removeClass("nope");
    $('.arrow-up.left').removeClass("nope");
    $('.expo-text.1').removeClass("hidden");
    $('.expo-text.1').removeClass("nope");
  }
  else {
    console.log("sample-1 DOES have the active class");
    $(".sample-1").removeClass("active");
    $(".sample-2").removeClass("unfocused");
    $('.sample-1 .sample-title').css("height", "50px");
    $('.sample-1 p').css("bottom", "0px");
    $('.sample-title-1').css("margin-bottom", "8px")
    $('.expo-container').addClass("nope");
    $('.arrow-up.left').addClass("nope");
    $('.expo-text.1').addClass("nope");
    $('.expo-text.1').addClass("hidden");
  }
});

$('.sample-2').click(function(){
  if (!$(".sample-2").hasClass("active")) {
    console.log("sample-2 doesn't have the active class");
    $(".sample-2").addClass("active");
    $(".sample-1").addClass("unfocused");
    $('.sample-2 .sample-title').css("height", "80px");
    $('.sample-2 p').css("bottom", "10px");
    $('.sample-title-2').css("margin-bottom", "4px")
    $('.expo-container').removeClass("nope");
    $('.arrow-up.right').removeClass("nope");
    $('.expo-text.2').removeClass("hidden");
    $('.expo-text.2').removeClass("nope");
  }
  else {
    console.log("sample-2 DOES have the active class");
    $(".sample-2").removeClass("active");
    $(".sample-1").removeClass("unfocused");
    $('.sample-2 .sample-title').css("height", "50px");
    $('.sample-2 p').css("bottom", "0px");
    $('.sample-title-2').css("margin-bottom", "8px")
    $('.expo-container').addClass("nope");
    $('.arrow-up.right').addClass("nope");
    $('.expo-text.2').addClass("nope");
    $('.expo-text.2').addClass("hidden");
  }
});

$('.sample-1').mouseover(function(){
  if ($(window).width() >= 1000) {
    $('.sample-1 .sample-title').css("height", "80px");
    $('.sample-1 p').css("bottom", "10px");
    $('.sample-title-1').css("margin-bottom", "4px")
    $('.expo-container').removeClass("nope");
    $('.arrow-up.left').removeClass("nope");
    $('.expo-text.1').removeClass("hidden");
    $('.expo-text.1').removeClass("nope");
  }
});

$('.sample-1').mouseout(function(){
  if (!$(".sample-1").hasClass("active")) {
    $('.sample-1 .sample-title').css("height", "50px");
    $('.sample-1 p').css("bottom", "0px");
    $('.sample-title-1').css("margin-bottom", "8px")
    $('.expo-container').addClass("nope");
    $('.arrow-up.left').addClass("nope");
    $('.expo-text.1').addClass("nope");
    $('.expo-text.1').addClass("hidden");
  }
});

$('.sample-2').mouseover(function(){
  if ($(window).width() >= 1000) {
    $('.sample-2 .sample-title').css("height", "80px");
    $('.sample-2 p').css("bottom", "10px");
    $('.sample-title-2').css("margin-bottom", "4px")
    $('.expo-container').removeClass("nope");
    $('.arrow-up.right').removeClass("nope");
    $('.expo-text.2').removeClass("hidden");
    $('.expo-text.2').removeClass("nope");
  }
});

$('.sample-2').mouseout(function(){
  if (!$(".sample-2").hasClass("active")) {
    $('.sample-2 .sample-title').css("height", "50px");
    $('.sample-2 p').css("bottom", "0px");
    $('.sample-title-2').css("margin-bottom", "8px")
    $('.expo-container').addClass("nope");
    $('.arrow-up.right').addClass("nope");
    $('.expo-text.2').addClass("nope");
    $('.expo-text.2').addClass("hidden");
  }
});