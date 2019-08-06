$(document).ready(function(){
$('.section__auto-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  focusOnSelect: true,
  touchMove: false,
  arrows: false,
  dots:false,
	  responsive: [
	  {
	    breakpoint: 768,
	    settings: {
	    dots:true
	}
	}
  	]
   })
});
$(document).ready(function(){
$('.slider-buy').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: false,
  centerMode: false,
  focusOnSelect: true,
  touchMove:false,
  dots:false,
  arrows: false,
  infinite: true,
    responsive: [
  {
    breakpoint: 1500,
    settings: {
    slidesToShow: 1
 	}
	},
	{
	breakpoint: 1118,
    settings: {
    slidesToShow: 2
	}
	},
	{
	breakpoint: 751,
    settings: {
    slidesToShow: 1
    }
	}
  ]
  })
});

$(document).ready(function(){
$('.slider-buy__slider-wrapper').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: false,
  centerMode: false,
  focusOnSelect: true,
  touchMove:false,
  dots:false,
  arrows: false,
  infinite: true,
    responsive: [
  {

     breakpoint: 1500,
    settings: {
    slidesToShow: 1
 	}
	},
	{
	breakpoint: 1118,
    settings: {
    slidesToShow: 2
	}
	},
	{
	breakpoint: 751,
    settings: {
    slidesToShow: 1
    }
	}
	]
  })
});

$(document).ready(function(){
$('.sorting__items').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  centerMode: false,
  focusOnSelect: true,
  touchMove:false,
  dots:false,
  arrows: false,
  infinite: false,
   responsive: [
  {
    breakpoint: 1276,
    settings: {
    slidesToShow: 3
 	}
	},
	{
		breakpoint: 970,
	    settings: {
	    slidesToShow: 2
 	}
	},
	{
		breakpoint: 565,
	    settings: {
	    slidesToShow: 1
 	}
	}
  ]
  })
});
	  $(document).ready(function(){
		$('#but1').on('click',function(){
		$('.but1-span1').addClass('colorforbut');
		$('.but2-span2').removeClass('colorforbut');
			$('.but3-span3').removeClass('colorforbut');
      $('sorting__items').slick('setPosition')
	})
		$('#but2').on('click',function(){
		$('.but2-span2').addClass('colorforbut');
		$('.but1-span1').removeClass('colorforbut');
			$('.but3-span3').removeClass('colorforbut');
      $('sorting__items').slick('setPosition')
	})
		$('#but3').on('click',function(){
		$('.but3-span3').addClass('colorforbut');
		$('.but1-span1').removeClass('colorforbut');
			$('.but2-span2').removeClass('colorforbut');
      $('sorting__items').slick('setPosition')
	})
  });

    $(document).ready(function(){
    $('#but2').on('click', function() {
      if ( $('.but2-span2').hasClass('colorforbut')){
          $('.best').addClass('lel');
          $('.new').removeClass('lel');
          $('.popular').removeClass('lel');
        }
        })
      $('#but1').on('click', function() {
      if ( $('.but1-span1').hasClass('colorforbut')){
          $('.new').addClass('lel');
          $('.best').removeClass('lel');
          $('.popular').removeClass('lel');
        }
      })
       $('#but3').on('click', function() {
      if ( $('.but3-span3').hasClass('colorforbut')){
          $('.popular').addClass('lel');
          $('.new').removeClass('lel');
          $('.best').removeClass('lel');
        }
      })
      });






	$(document).ready(function(){
		$('.burger-button').on('click',function(){
		$('.burger-flex').toggle('slow');
	})
		 });

$(document).ready(function(){
$('a[href*="."]')
.on("click", function(e){
var anchor = $(this);
$('html, body').stop().animate({
scrollTop: $(anchor.attr('href')).offset().top
}, 777);
e.preventDefault();
return false;
});
});

$(window).scroll(function(){
    if ($(window).scrollTop() >= 330) {
        $('.section__list-block').addClass('fixed-header');
    }
    else {
        $('.section__list-block').removeClass('fixed-header');
    }
});

