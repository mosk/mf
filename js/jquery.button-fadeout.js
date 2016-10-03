$(document).ready(function(){
  $(window).scroll(function(){
  if($(this).scrollTop() > 500){
  $('.button__top').fadeIn();
    } else {
    $('.button__top').fadeOut();
    }
  });
});