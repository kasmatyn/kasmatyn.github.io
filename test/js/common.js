$( document ).ready(function() {
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

	(function($) {
		$.fn.countTo = function(options) {
			return this.each(function() {
      //-- Arrange
      var FRAME_RATE = 60; // Predefine default frame rate to be 60fps
      var $el = $(this);
      var countFrom = parseInt($el.attr('data-count-from'));
      var countTo = parseInt($el.attr('data-count-to'));
      var countSpeed = $el.attr('data-count-speed'); // Number increment per second

      //-- Action
      var rafId;
      var increment;
      var currentCount = countFrom;
      var countAction = function() {              // Self looping local function via requestAnimationFrame
        if(currentCount < countTo) {              // Perform number incremeant
          $el.text(Math.floor(currentCount));     // Update HTML display
          increment = countSpeed / FRAME_RATE;    // Calculate increment step
          currentCount += increment;              // Increment counter
          rafId = requestAnimationFrame(countAction);
        } else {                                  // Terminate animation once it reaches the target count number
          $el.text(countTo);                      // Set to the final value before everything stops
          //cancelAnimationFrame(rafId);
      }
  };
      rafId = requestAnimationFrame(countAction); // Initiates the looping function
  });
		};
	}(jQuery));

//-- Executing
$('.work__number').countTo();


$('.choose__title').click(function(){
	$('.choose__text').css('display','none');
	$(this).siblings('.choose__text').toggle('ease');

});

var wid = window.matchMedia('all and (min-width: 767px)');
if(wid.matches){
	$('.header__services-main').hover (function(){
		$('.header__services-add').toggle();
	});
}else{
}

var wid = window.matchMedia('all and (max-width: 767px)');
if(wid.matches){
	$('.header__services-main').click (function(){
		$('.header__services-add').toggle();
	})
}else{
}

$('.asked__title').click(function(){
	$(this).siblings('.asked__text').toggle('ease');
	$('.asked__item').siblings('.m-var-title-font').css('color','#000000');
});

});