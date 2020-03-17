
$('.header__navi-but').on('click', function () {
    $(".header__list").toggle();
})
$('.main__button').on('click',function() {
    $(".main__content-row").first().clone().insertAfter($(".is-active").last());
})

$('.main__popup').magnificPopup({
    type: 'image',
    src: '.main__popup',
    closeOnContentClick: true,
    mainClass: 'mfp-img-mobile',
    image: {
        verticalFit: true
    }
    
});
$('[data-open-block').on('click', function() {
	const activeCls = 'is-active';
  
	$('[data-content]').removeClass(activeCls);
  $(`[data-content="${$(this).data('open-block')}"`).addClass(activeCls);
});

$('.main__but-link').on('click', function () {
    $('.main__but-link').removeClass('active-but');
    $(this).addClass('active-but');
})