
// GOOGLE MAP
window.initMap = function () {
	var uluru = {lat: 55.943724, lng: 37.774050};
	var map = new google.maps.Map(document.getElementById('infrastructure-map'), {
		zoom: 15,
		center: uluru,
		styles: []
	});
	//var image = '../assets/img/utils/markers/item-1.png'
	var image = {
		url: '../assets/img/utils/markers/item-1.png',
		size: new google.maps.Size(56, 69),
		origin: new google.maps.Point(0, 0),
		anchor: new google.maps.Point(0, 32),
		scaledSize: new google.maps.Size(56, 69)
	}
	var marker = new google.maps.Marker({
		position: uluru,
		map: map,
		icon: image
	});

}




var App = {

	options: {},

	init: function () {
		// iOS Hover Fix
		(function(l){var i,s={touchend:function(){}};for(i in s)l.addEventListener(i,s)})(document)

	},
	mobileMenu: function () {

		let burgerBtn = document.querySelector('.js-burger-btn')
		let mobileSideBar = document.querySelector('.js-menu')
		let mainBody = document.querySelector('.c-page')
		//let mainBodyWrap = document.querySelector('.c-page')

		if (burgerBtn) {
			burgerBtn.addEventListener('click', function () {

				this.classList.toggle('active')
				mobileSideBar.classList.toggle('is-active')
				//mainBody.classList.toggle('js-modal-open')
				//document.querySelector('body').classList.toggle('js-modal-open')

			});

			document.querySelector('.js-close-menu').addEventListener('click', function () {
				mobileSideBar.classList.remove('is-active')
				burgerBtn.classList.remove('active')
			})
		}

	},
	actionsSlider: function () {
		let slider = document.querySelector('.js-actions-slider')

		if (slider) {
			$slick_slider = $('.js-actions-slider')
			settings_slider = {
				dots: false,
				arrows: false,
				autoplay: true,
				autoplaySpeed: 2000

			}
			slick_on_mobile($slick_slider, settings_slider)
			// slick on mobile
			function slick_on_mobile(slider, settings) {
				$(window).on('load resize', function () {
					if ($(window).width() > 769) {
						if (slider.hasClass('slick-initialized')) {
							slider.slick('unslick')
						}
						return
					}
					if (!slider.hasClass('slick-initialized')) {
						return slider.slick(settings)
					}
				});
			};
		}

	},
	benefitsSliders: function () {
		let sliderMob = document.querySelector('.js-benefits-mobile')
		let sliderDesktop = document.querySelector('.js-benefits-desktop')

		if (sliderMob) {
			$slick_slider = $('.js-benefits-mobile')
			settings_slider = {
				dots: true,
				arrows: false

			}
			slick_on_mobile($slick_slider, settings_slider)
			// slick on mobile
			function slick_on_mobile(slider, settings) {
				$(window).on('load resize', function () {
					if ($(window).width() > 768) {
						if (slider.hasClass('slick-initialized')) {
							slider.slick('unslick')
						}
						return
					}
					if (!slider.hasClass('slick-initialized')) {
						return slider.slick(settings)
					}
				})
			}
		}

		if (sliderDesktop) {
			$slick_slider = $('.js-benefits-desktop')
			settings_slider = {
				dots: false,
				arrows: true,
				prevArrow: $('.benefits-desktop-slider .o-slick__arrow--prev'),
				nextArrow: $('.benefits-desktop-slider .o-slick__arrow--next'),
				responsive: [
					{
						breakpoint: 1441,
						settings: {
							dots: true,
							arrows: false
						}
					}
				],


			}
			slick_on_mobile($slick_slider, settings_slider)
			// slick on mobile
			function slick_on_mobile(slider, settings) {
				$(window).on('load resize', function () {
					if ($(window).width() < 767) {
						if (slider.hasClass('slick-initialized')) {
							slider.slick('unslick')
						}
						return
					}
					if (!slider.hasClass('slick-initialized')) {
						return slider.slick(settings)
					}
				});
			};
		}

	},
	flatsSlider: function () {
		let slider = document.querySelector('.js-flats-carousel')

		if (slider) {
			$slick_slider = $('.js-flats-carousel')
			settings_slider = {
				dots: true,
				arrows: false,
				responsive: [
					{
						breakpoint: 1025,
						settings: {
							slidesToShow: 3
						}
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2
						}
					},
					{
						breakpoint: 576,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					}
				],


			}
			slick_on_mobile($slick_slider, settings_slider)
			// slick on mobile
			function slick_on_mobile(slider, settings) {
				$(window).on('load resize', function () {
					if ($(window).width() > 1024) {
						if (slider.hasClass('slick-initialized')) {
							slider.slick('unslick')
						}
						return
					}
					if (!slider.hasClass('slick-initialized')) {
						return slider.slick(settings)
					}
				})
			}
		}

	},
	corpsDetails: function () {
		let corpsBlock = document.querySelectorAll('.js-crops-details-block')
		if(corpsBlock.length > 0) {
			corpsBlock.forEach(function (item, i, array) {
				item.addEventListener('click', function (event) {
					let target = event.target
					if (target.classList.contains('js-crops-details-button') || target.closest('.js-crops-details-button') ) {

						if (item.classList.contains('is-active')) {
							item.classList.remove('is-active')
						} else {
							array.forEach(function (item) {
								item.classList.remove('is-active')
							})
							this.classList.add('is-active')
						}

					}
					if (target.classList.contains('js-crops-details-close') || target.closest('.js-crops-details-close') ) {
						item.classList.remove('is-active')
					}
				})

			})

			document.addEventListener('click', function (event) {
				let target = event.target
				if (!target.closest('.js-crops-details-block')) {
					corpsBlock.forEach(function (item) {
						item.classList.remove('is-active')
					})
				}
			})
		}

	},
	rangeSlider: function () {
		let mortgageRate = document.querySelector('.js-range-mortgage-rate')

		let stepsSlider = document.querySelector('.js-range-mortgage-price')
		let rangeVal = document.querySelector('.js-range-mortgage-price-val')

		if (stepsSlider) {
			noUiSlider.create(stepsSlider, {
				start: 0,
				connect: [true, false],
				range: {
					'min': 0,
					'max': 10000000000
				}
			});

			stepsSlider.noUiSlider.on('update', function (values, handle) {
				let temp = values[0].split('.')
				rangeVal.value = temp[0] + ' руб.'
			})
		}

		let stepsSliderInitialFee = document.querySelector('.js-range-mortgage-initial-fee')
		let rangeValInitialFee = document.querySelector('.js-range-mortgage-initial-fee-val')
		if (stepsSliderInitialFee) {
			noUiSlider.create(stepsSliderInitialFee, {
				start: 0,
				connect: [true, false],
				range: {
					'min': 0,
					'max': 10000000000
				}
			});

			stepsSliderInitialFee.noUiSlider.on('update', function (values, handle) {
				let temp = values[0].split('.'),
					mortgagePrice = rangeVal.value.split(' '),
					tempRate = temp[0] / mortgagePrice[0] * 100

				if (!isNaN(tempRate) && tempRate !== Infinity) {
					let rate = tempRate
					document.querySelector('.js-range-mortgage-rate').innerHTML = Math.round(rate) + ' %'
				}

				rangeValInitialFee.value = temp[0] + ' руб.'

			})
		}

		let stepsSliderTem = document.querySelector('.js-range-mortgage-term')
		let rangeValTerm = document.querySelector('.js-range-mortgage-term-val')
		if (stepsSliderTem) {
			noUiSlider.create(stepsSliderTem, {
				start: 0,
				connect: [true, false],
				range: {
					'min': 1,
					'max': 30
				}
			});

			stepsSliderTem.noUiSlider.on('update', function (values, handle) {
				let temp = values[0].split('.')
				rangeValTerm.value = temp[0] + ' лет'
			})
		}

	},

	infrastructureChangeSlider: function () {
		let slider = document.querySelector('.js-infrastructure-change-slider')

		if (slider) {
			$slick_slider = $('.js-infrastructure-change-slider')
			settings_slider = {
				dots: false,
				arrows: false,
				centerMode: true,
				centerPadding: '20px',
				slidesToScroll: 1,
				slidesToShow: 7,
				responsive: [
					{
						breakpoint: 700,
						settings: {
							slidesToShow: 5
						}
					},
					{
						breakpoint: 481,
						settings: {
							slidesToShow: 3
						}
					}
				],


			}
			slick_on_mobile($slick_slider, settings_slider)
			// slick on mobile
			function slick_on_mobile(slider, settings) {
				$(window).on('load resize', function () {
					if ($(window).width() > 768) {
						if (slider.hasClass('slick-initialized')) {
							slider.slick('unslick')
						}
						return
					}
					if (!slider.hasClass('slick-initialized')) {
						return slider.slick(settings)
					}
				})
			}
		}

	},
	progressSlider: function () {
		let slider = document.querySelector('.js-progress-slider')

		if (slider) {
			$('.js-progress-slider').slick({
				dots: false,
				arrows: true,
				slidesToShow: 3,
				prevArrow: $('.b-progress__slider .o-slick__arrow--prev'),
				nextArrow: $('.b-progress__slider .o-slick__arrow--next'),
				responsive: [
					{
						breakpoint: 1441,
						settings: {
							dots: true,
							arrows: false
						}
					},
					{
						breakpoint: 768,
						settings: {
							dots: true,
							slidesToShow: 2,
							slidesToScroll: 2
						}
					},
					{
						breakpoint: 576,
						settings: {
							dots: true,
							slidesToShow: 1,
							slidesToScroll: 1
						}
					}
				]

			})
		}
	},
	newsSlider: function () {
		let slider = document.querySelector('.js-news-slider')

		if (slider) {
			$slick_slider = $('.js-news-slider')
			settings_slider = {
				dots: false,
				arrows: true,
				slidesToShow: 2,
				prevArrow: $('.b-news__slider .o-slick__arrow--prev'),
				nextArrow: $('.b-news__slider .o-slick__arrow--next'),
				responsive: [
					{
						breakpoint: 1441,
						settings: {
							dots: true,
							arrows: false
						}
					}
				]


			}
			slick_on_mobile($slick_slider, settings_slider)
			// slick on mobile
			function slick_on_mobile(slider, settings) {
				$(window).on('load resize', function () {
					if ($(window).width() < 576) {
						if (slider.hasClass('slick-initialized')) {
							slider.slick('unslick')
						}
						return
					}
					if (!slider.hasClass('slick-initialized')) {
						return slider.slick(settings)
					}
				})
			}
		}
	},

	togglePanel: function () {
		let panels = document.querySelectorAll('.js-toggle-panel')
		if (panels.length > 0) {

			$(window).on('load resize', function () {
				if ($(window).width() < 768) {

					panels.forEach(function (item) {

						item.addEventListener('click', function (event) {
							let target = event.target
							if (target.classList.contains('js-toggle-panel-button') || target.closest('.js-toggle-panel-button') ) {
								if (target.closest('.js-toggle-panel-item').classList.contains('is-active')) {
									target.closest('.js-toggle-panel-item').classList.remove('is-active')
								} else {
									let panel = document.querySelectorAll('.js-toggle-panel-item')
									panel.forEach(function (item) {
										item.classList.remove('is-active')
									})
									target.closest('.js-toggle-panel-item').classList.add('is-active')
								}

							}

						})
					})
				}
			})
		}
	},
	modal: function () {
		let buttonModal = document.querySelectorAll('.js-modal-button'),
			closeModal = document.querySelectorAll('.js-modal-close'),
			sendModal = document.querySelectorAll('.js-modal-send'),
			allModal = document.querySelectorAll('.o-modal')

		if (allModal.length > 0) {
			buttonModal.forEach(function (item) {
				item.addEventListener('click', function (event) {
					event.preventDefault()

					let activeModal = this.getAttribute('href')
					document.querySelector(activeModal).classList.add('active')
					document.querySelector('body').classList.add('modal-open')


				});
			})

			closeModal.forEach(function (item) {
				item.addEventListener('click', function (event) {
					event.preventDefault()
					closeAllModal()


				});
			})

			function closeAllModal () {
				document.querySelector('body').classList.remove('modal-open')
				allModal.forEach(function (itemModal) {
					itemModal.classList.remove('active')
				})
			}

			document.addEventListener('keyup', (e) => {
				if (e.keyCode === 27) closeAllModal()
			})
		}


	}

}; //App
document.addEventListener('DOMContentLoaded', function () {
	App.init(),
	App.mobileMenu(),
	App.actionsSlider(),
	App.benefitsSliders(),
	App.flatsSlider(),
	App.corpsDetails(),
	App.rangeSlider(),
	App.infrastructureChangeSlider(),
	App.progressSlider(),
	App.newsSlider(),
	App.togglePanel(),
	App.modal()
	// App.onlineCamera()
});
