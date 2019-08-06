	$(document).ready(function(){
			$('.top-nav__list li').click(function() {
			  $('.invisible-block').removeClass('active');
			  var tab = $(this).data('li');
			  $('.invisible-block[data-li=' + tab + ']').addClass('active');
			})
			});


	$(document).ready(function(){
	$('.list-blocks').hover(function(){
		$(this).addClass('blue')
	})
	});

	  $(document).click(function(event) {
	    if ($(event.target).closest('.main-top__nav-search').length) return;
	    $('.invisible-block').removeClass('active');
	    event.stopPropagation();
	  });
	  $(document).click(function(event) {
	    if ($(event.target).closest('.burger-menu').length) return;
	    $('.burger-flex').hide();
	    event.stopPropagation();
	  });
	  $(document).click(function(event) {
	    if ($(event.target).closest('.burger-menu').length) return;
	    $('.invisible-nextblock').hide();
	    event.stopPropagation();
	  });

$(document).ready(function(){
		$('.women-orange-right ').hover(function(){
		$('.photos-inside-wor').toggle();
	})
		$('.women-orange-right ').hover(function(){
		$('.info-inside-wor').toggle();
	})
		$('.women-black-right ').hover(function(){
		$('.photos-inside-wbr').toggle();
	})
		$('.women-black-right ').hover(function(){
		$('.info-inside-wbr').toggle();
	})
		$('.men-black-left ').hover(function(){
		$('.photos-inside-mbl').toggle();
	})
		$('.men-black-left').hover(function(){
		$('.info-inside-mbl').toggle();
	})
		$('.women-white-left').hover(function(){
		$('.photos-inside-wwl').toggle();
	})
		$('.women-white-left').hover(function(){
		$('.info-inside-wwl').toggle();
	})
		$('.men-green-left').hover(function(){
		$('.photos-inside-mgl').toggle();
	})
		$('.men-green-left').hover(function(){
		$('.info-inside-mgl').toggle();
	})
		$('.men-black-right').hover(function(){
		$('.photos-inside-mbr').toggle();
	})
		$('.men-black-right').hover(function(){
		$('.info-inside-mbr').toggle();
	})
	});			

$(window).scroll(function(){
      if ($(window).scrollTop() > 110) {
        $('.main-top').addClass('fixed-main-top');
        // $('.burger-menu__nav').css('top', '52%');
    }
    else {
        $('.main-top').removeClass('fixed-main-top');
        // $('.burger-menu__nav').css('top', '7%');
    }
});


$(document).ready(function(){
		$('.product-top-twoItems__men-black-left').hover(function(){
		$('.info-mbl').toggle();
		$('.heart-mbl').toggle();
	})
		$('.product-top-twoItems__women-white-left').hover(function(){
		$('.info-wwl').toggle();
		$('.heart-wwl').toggle();
	})
		$('.product-middle__men-middle-black').hover(function(){
		$('.info-mmb').toggle();
		$('.heart-mmb').toggle();
	})
		$('.product-middle__men-middle-orange').hover(function(){
		$('.info-mmo').toggle();
		$('.heart-mmo').toggle();
	})
		$('.product-middle__girl-middle-orange').hover(function(){
		$('.info-gmo').toggle();
		$('.heart-gmo').toggle();
	})
		$('.product-middle__girl-middle-black').hover(function(){
		$('.info-gmb').toggle();
		$('.heart-gmb').toggle();
	})
		$('.product-bottom__women-bottom-black').hover(function(){
		$('.info-wbb').toggle();
		$('.heart-wbb').toggle();
	})
	});		

	
		$(document).ready(function(){
			$('.info-button__button').click(function() {
			  $('.info-button__button').removeClass('active');
			  $(this).addClass('active');
			  $('.infobox-text').hide();
			  var tab = $(this).data('tab');
			  $('.infobox-text[data-tabcontent=' + tab + ']').show();
			});
		});

(function () {
        let tabNav = [...document.querySelectorAll('.nav-buttons > li > button')],
            tabContent = [...document.querySelectorAll('.tab-content__item')],
            tabName;
            
        tabNav[0].classList.add('buttonsHover');
        tabContent[0].classList.add('active');
        
        tabNav.forEach(function (item) {
            item.addEventListener('click', selectTabNav)
        });

        function selectTabNav() {
            tabNav.forEach(function (item) {
                item.classList.remove('buttonsHover');
            });
            this.classList.add('buttonsHover'); 
            tabName = this.getAttribute('data-tab');
            selectTabContent(tabName);
        }

        function selectTabContent(tab) {
            tabContent.forEach(function (item) {
                if (item.classList.contains(tab)) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
        }
    })();