$(function() {
$(window).scroll(function() {
if($(this).scrollTop() > 500) {
$('#button__scroll').fadeIn();
} else {
$('#button__scroll').fadeOut();
}
});
$('#button__scroll').click(function() {
$('body,html').animate({scrollTop:0},800);
});
});

