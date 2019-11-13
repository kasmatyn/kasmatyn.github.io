$(document).ready(function(){
	// first-slider
$('.section-first-slider__slick-slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  focusOnSelect: true,
  touchMove: false,
  arrows: false,
  dots:false,
  variableWidth: true,
  fade: false,
  lazyLoad: 'ondemand',
   responsive: [
    {
      breakpoint: 767,
      settings: {
      slidesToShow: 1,
      centerMode: true
  }
  }
    ]
   })


// second-slider
$('.section-best-work__second-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  focusOnSelect: true,
  touchMove: false,
  arrows: false,
  dots:false,
  infinite: true,
  speed: 1500,
  fade: false,
    responsive: [
    {
      breakpoint: 767,
      settings: {
      slidesToShow: 1,
      autoplay: true,
      speed: 1000,
      fade: false,
      centerMode: true,
      variableWidth: true
  }
  }
    ]
  })
// counter
	$(".section-best-work__second-slider").on('afterChange', function(event, slick, currentSlide){
    $("#count").text(currentSlide + 1);
    $("#count-second").text(currentSlide + 1);
  });
	$(".section-first-slider__slick-slider").on('afterChange', function(event, slick, currentSlide){
    $("#count-first").text(currentSlide + 1);
  });

// buttons for second slider

$('.section-best-work__slider-arrow-left').click(function(){
  $('.section-best-work__second-slider').slick('slickPrev');
})

$('.section-best-work__slider-arrow-right').click(function(){
  $('.section-best-work__second-slider').slick('slickNext');
})

$('.section-sculptures__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  focusOnSelect: true,
  touchMove: false,
  arrows: false,
  dots:false,
  infinite: true,
  speed: 1500,
  variableWidth: true,
    responsive: [
    {
      breakpoint: 767,
      settings: {
      slidesToShow: 1,
      autoplay: true,
      speed: 1000,
      fade: false,
      centerMode: true,
      variableWidth: true
  }
  }
    ]
  })

$('.section-sculptures__slider-left-click').click(function(){
  $('.section-sculptures__slider').slick('slickPrev');
})

$('.section-sculptures__slider-right-click').click(function(){
  $('.section-sculptures__slider').slick('slickNext');
})

// counter
	$(".section-sculptures__slider").on('afterChange', function(event, slick, currentSlide){
    $("#count-sculptures").text(currentSlide + 1);
  });
// second-counter
  $(".section-sculptures__slider").on('afterChange', function(event, slick, currentSlide){
    $("#section-sculptures__second-counter").text(currentSlide + 1);
  });
// section- architecture-slider
$('.section-architecture__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  focusOnSelect: true,
  touchMove: false,
  arrows: false,
  dots:false,
  infinite: true,
  speed: 1500,
  variableWidth: true,
    responsive: [
    {
      breakpoint: 767,
      settings: {
      slidesToShow: 1,
      autoplay: true,
      speed: 1000,
      fade: false,
      centerMode: true,
      variableWidth: true
  }
  }
    ]
  })

$('.section-architecture__slider-left-click').click(function(){
  $('.section-architecture__slider').slick('slickPrev');
})

$('.section-architecture__slider-right-click').click(function(){
  $('.section-architecture__slider').slick('slickNext');
})
//counter
	$(".section-architecture__slider").on('afterChange', function(event, slick, currentSlide){
    $("#count-architecture").text(currentSlide + 1);
  });
// second-counter
    $(".section-architecture__slider").on('afterChange', function(event, slick, currentSlide){
    $("#section-architecture__second-counter").text(currentSlide + 1);
  });

// photo-stone-slider
$('.section-photo-stone__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  focusOnSelect: true,
  touchMove: false,
  arrows: false,
  dots:false,
  infinite: true,
  speed: 1500,
  variableWidth: true,
    responsive: [
    {
      breakpoint: 767,
      settings: {
      slidesToShow: 1,
      autoplay: true,
      speed: 1000,
      fade: false,
      centerMode: true,
      variableWidth: true
  }
  }
    ]
  })

$('.section-photo-stone__slider-left-click').click(function(){
  $('.section-photo-stone__slider').slick('slickPrev');
})

$('.section-photo-stone__slider-right-click').click(function(){
  $('.section-photo-stone__slider').slick('slickNext');
})
//counter
	$(".section-photo-stone__slider").on('afterChange', function(event, slick, currentSlide){
    $("#count-photo-stone").text(currentSlide + 1);
  });
// second-counter
  $(".section-photo-stone__slider").on('afterChange', function(event, slick, currentSlide){
    $("#section-photo-stone__second-counter").text(currentSlide + 1);
  });

//photo-italy
$('.section-photo-italy__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  focusOnSelect: true,
  touchMove: false,
  arrows: false,
  dots:false,
  infinite: true,
  speed: 1500,
  variableWidth: true,
    responsive: [
    {
      breakpoint: 767,
      settings: {
      slidesToShow: 1,
      autoplay: true,
      speed: 1000,
      fade: false,
      centerMode: true,
      variableWidth: true
  }
  }
    ]
  })

$('.section-photo-italy__slider-left-click').click(function(){
  $('.section-photo-italy__slider').slick('slickPrev');
})

$('.section-photo-italy__slider-right-click').click(function(){
  $('.section-photo-italy__slider').slick('slickNext');
})
//counter
	$(".section-photo-italy__slider").on('afterChange', function(event, slick, currentSlide){
    $("#count-photo-italy").text(currentSlide + 1);
  });
// second-counter
  $(".section-photo-italy__slider").on('afterChange', function(event, slick, currentSlide){
    $("#section-photo-italy__second-counter").text(currentSlide + 1);
  });

// section-fountain-classic
$('.section-fountain-classic__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  focusOnSelect: true,
  touchMove: false,
  arrows: false,
  dots:false,
  infinite: true,
  speed: 1500,
  variableWidth: true,
    responsive: [
    {
      breakpoint: 767,
      settings: {
      slidesToShow: 1,
      autoplay: true,
      speed: 1000,
      fade: false,
      centerMode: true,
      variableWidth: true
  }
  }
    ]
  })

$('.section-fountain-classic__slider-left-click').click(function(){
  $('.section-fountain-classic__slider').slick('slickPrev');
})

$('.section-fountain-classic__slider-right-click').click(function(){
  $('.section-fountain-classic__slider').slick('slickNext');
})
//counter
	$(".section-fountain-classic__slider").on('afterChange', function(event, slick, currentSlide){
    $("#count-fountain-classic").text(currentSlide + 1);
  });
// second-counter
  $(".section-fountain-classic__slider").on('afterChange', function(event, slick, currentSlide){
    $("#section-fountain-classic__second-counter").text(currentSlide + 1);
  });

// section-fountain-music
$('.section-fountain-music__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  focusOnSelect: true,
  touchMove: false,
  arrows: false,
  dots:false,
  infinite: true,
  speed: 1500,
  variableWidth: true,
    responsive: [
    {
      breakpoint: 767,
      settings: {
      slidesToShow: 1,
      autoplay: true,
      speed: 1000,
      fade: false,
      centerMode: true,
      variableWidth: true
  }
  }
    ]
  })

$('.section-fountain-music__slider-left-click').click(function(){
  $('.section-fountain-music__slider').slick('slickPrev');
})

$('.section-fountain-music__slider-right-click').click(function(){
  $('.section-fountain-music__slider').slick('slickNext');
})
//counter
	$(".section-fountain-music__slider").on('afterChange', function(event, slick, currentSlide){
    $("#count-fountain-music").text(currentSlide + 1);
  });
// second-counter
  $(".section-fountain-music__slider").on('afterChange', function(event, slick, currentSlide){
    $("#section-fountain-music__second-counter").text(currentSlide + 1);
  });
});