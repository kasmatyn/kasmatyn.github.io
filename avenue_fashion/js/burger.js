$(document).ready(function(){
		$('.burger-button').on('click',function(){
		$('.burger-flex').toggle();
	})
		 });

$(document).ready(function(){
		$('.thebrand').on('click',function(){
		$('.invisible-second-block').addClass('pop');
	})
		 });

$(document).ready(function(){
		$('.burger-button').on('click',function(){
		 if ($('.invisible-second-block').hasClass('pop')){
		 	$('.invisible-second-block').removeClass('pop')
		 }
	})
		 });