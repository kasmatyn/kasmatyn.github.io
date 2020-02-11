$(document).ready(function(){
	$('.first-slider__slider').slick({
		autoplay: true,
		speed: 300,
		dots: true,
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: false,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1
			}
		}
		]
	});
});

$(document).ready(function(){
	$('.second-slider__slider').slick({
		autoplay: true,
		speed: 500,
		dots: true,
		infinite: true,
		arrows: false,
		infinite: true,
		fade: true,
		cssEase: 'linear',
		slidesToShow: 1,
		slidesToScroll: 1,
		centerMode: true,
		centerPadding: '50px'
	});
});

$(document).ready(function(){
	$('.third-slider__slider').slick({
		autoplay: true,
		speed: 500,
		dots: false,
		arrows: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
	});
});

$('.first-slider__next-arrow').on('click', function() {
  $('.first-slider__slider').slick('slickNext');
});
$('.first-slider__prev-arrow').on('click', function() {
  $('.first-slider__slider').slick('slickPrev');
});