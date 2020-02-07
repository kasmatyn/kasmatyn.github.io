$('.header__button').click(function() {
	$('.header__main-ul').toggleClass('active-button');
	but();
});

function but(){
	if($('.header__main-ul').hasClass('active-button')){
		$('.header__but-mid-line').css('display','none');
		$('.header__but-top-line').css('transform','translate(-50%, 0) rotate(45deg)');
		$('.header__but-bot-line').css('transform','translate(-50%, 0) rotate(-45deg)');
	}else{
		if($(!'.header__main-ul').hasClass('active-button')){
		}$('.header__but-mid-line').css('display','block');
			$('.header__but-top-line').css('transform','translate(-50%, -200%)');
			$('.header__but-bot-line').css('transform','translate(-50%, 200%)');
	}
};