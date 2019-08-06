$(document).ready(function(){
$('.slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  focusOnSelect: true,
  touchMove: false,
  arrows: false,
  dots:false,
  infinite: true,
  speed: 1000,
  fade: true,
  cssEase: 'linear',
   responsive: [
    {
      breakpoint: 1036,
      settings: {
      dots:true
  }
  }
    ]
   })
});

$('.fal').click(function(){
  $('.slider').slick('slickPrev');
})

$('.fak').click(function(){
  $('.slider').slick('slickNext');
})