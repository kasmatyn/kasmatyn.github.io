// scroll-button

$(document).ready(function () {
  $('a[href*="."]')
    .on("click", function (e) {
      var anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top
      }, 777);
      e.preventDefault();
      return false;
    });


  // main-menu

  $(window).on('load', function () {
    if ($(window).width() < 1200) {
      $('.section-main__box').addClass('active-main');
    } else {
      $(".section-main__box").hover(function () {
        $(".section-main__box").siblings().removeClass('active-main');
        $(this).addClass('active-main');
      });
      $(".section-main__first").hover(function () {
        $('.section-main').css('background-image', 'url(img/fountain.jpg)');
      });

      $(".section-main__second").hover(function () {
        $('.section-main').css('background-image', 'url(img/mainBg.jpg)');
      });

      $(".section-main__third").hover(function () {
        $('.section-main').css('background-image', 'url(img/bgboy.jpg)');
      });
    }
  });

  $(window).on('resize', function () {
    if ($(window).width() < 1200) {
      $('.section-main__box').addClass('active-main');
    } else {
      $(".section-main__box").hover(function () {
        $(".section-main__box").siblings().removeClass('active-main');
        $(this).addClass('active-main');
      });

      $(".section-main__first").hover(function () {
        $('.section-main').css('background-image', 'url(img/fountain.jpg)');
      });

      $(".section-main__second").hover(function () {
        $('.section-main').css('background-image', 'url(img/mainBg.jpg)');
      });

      $(".section-main__third").hover(function () {
        $('.section-main').css('background-image', 'url(img/bgboy.jpg)');
      });
    }
  });


  // mobile-button
  $('.header-box__burger-button').on('click', function () {
    $('.header-box__navigation').toggle();
  });
  $('.header-box__burger-button').on('click', function () {
    $('.header-box__burger-button').toggleClass('burger-active');
  });

// section-video
videoDesk();
function videoDesk() {
    var video = $('#video');
    video.currentTime = 0;

    $('.section-video__but').on('click', function () {
      $('.section-video__video-btn').hide();
      video[0].play();
      video.addClass('video-played');
    });

    video.on('click', function () {
      if (video.hasClass('video-played')) {
        video[0].pause();
        video.removeClass('video-played');
        $(".section-video__video-btn").show();
      }
    });

    video.on('ended', function () {
      video.currentTime = 0;
      video.removeClass('video-played');
      $(".section-video__video-btn").show();
    });
  }

  // map

  var map;
  initMap();
  function initMap() {
   map = new google.maps.Map(document.getElementById('map'), {
    center: {
     lat: 50.4809337,
     lng: 30.4923483
   },
   zoom: 15
 });
 }

});