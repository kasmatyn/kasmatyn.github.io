$(".header__slider").slick({
  dots: true,
  infinite: true,
  speed: 500,
  arrows: true,
  fade: true,
  cssEase: "linear",
  prevArrow: $(".header__left-image"),
  nextArrow: $(".header__right-image")
});
