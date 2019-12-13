$(function(){
$(".header__phone-button").on('click',(function(){
$(".header__hidden-numb").toggleClass("active");
})
);
});

// mobile-button
$('.header__mob-button').on('click', function () {
$('.header__navigation').toggle();
});
$('.header__mob-button').on('click', function () {
$('.header__mob-button').toggleClass('burger-active');
});

function getWindowWidth() {
	return window.innerWidth || document.body.clientWidth;
}
$(window) .scroll(function() {
var scroll = $(window).scrollTop();
if (scroll >= 270 && getWindowWidth()<= 767){
$(".header__nav").addClass("fixed");
} else {
$(".header__nav").removeClass("fixed");
}
});