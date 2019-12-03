var App = {

	options: {},

	init: function () {
		// iOS Hover Fix
		(function(l){var i,s={touchend:function(){}};for(i in s)l.addEventListener(i,s)})(document)

		// $('.js-scroll-bar').mCustomScrollbar({
		// 	axis:"yx",
		// 	scrollButtons:{enable:false},
		// 	theme:"3d",
		// 	scrollbarPosition:"outside"
		// })
	},
	mobileMenu: function () {

		let burgerBtn = document.querySelector('.js-burger-btn');
		let mobileSideBar = document.querySelector('.js-mobile-menu');
		let mainBody = document.querySelector('body');
		//let mainBodyWrap = document.querySelector('.c-page')

		if (burgerBtn) {
			burgerBtn.addEventListener('click', function () {

				this.classList.toggle('active');
				mobileSideBar.classList.toggle('active');
				mainBody.classList.toggle('js-modal-open');
				//mainBodyWrap.classList.toggle('js-modal-open')

			});
		}



	},
	mainDropdown: function () {
		let dropdownBlock = document.querySelectorAll('.js-dropdown-block')
		if (dropdownBlock.length !== 0) {
			dropdownBlock.forEach(function (item, i, array) {
				item.addEventListener('click', function (event) {
					let target = event.target
					if (target.classList.contains('js-dropdown-button') || target.closest('.js-dropdown-button') ) {

						if (item.classList.contains('active')) {
							item.classList.remove('active')
						} else {
							array.forEach(function (item) {
								item.classList.remove('active')
							})
							this.classList.add('active')
						}



					}
				})

			})

			document.addEventListener('click', function (event) {
				let target = event.target
				if (!target.closest('.js-dropdown-block')) {
					dropdownBlock.forEach(function (item) {
						item.classList.remove('active')
					})
				}
			})
		}



	},
	stickyHeader: function () {
		let header = document.querySelector('.js-sticky-header')




		if (header) {
			let stuck = false,
				stickPoint = getDistance()

			function getDistance() {
				let topDist = header.offsetTop
				return topDist;
			}
			window.addEventListener('scroll', function () {
				let distance = getDistance() - window.pageYOffset,
					offset = window.pageYOffset
				if ( (distance <= 80) && !stuck) {
					stuck = true
					header.classList.add('in-scroll')



				} else if (stuck && (offset <= stickPoint)){
					stuck = false
					header.classList.remove('in-scroll')


				}
			})
		}
	},
	scrollTo: function () {
		let mainNavLinks = document.querySelectorAll(".b-navigation__item")
		let mainSections = document.querySelectorAll(".js-in-scroll")

		let lastId
		let cur = []


		window.addEventListener("scroll", event => {
			let fromTop = window.scrollY + 63

			mainNavLinks.forEach(link => {
				let section = document.querySelector(link.hash)

				if (
					section.offsetTop <= fromTop &&
					section.offsetTop + section.offsetHeight > fromTop
				) {
					link.classList.add("is-active")
				} else {
					link.classList.remove("is-active")
				}
			})
		})

	},
	formValid: function () {

		let sendModal = document.querySelectorAll('.js-send')
		if (sendModal.length !== 0) {
			sendModal.forEach(function (item) {
				item.addEventListener('click', function (event) {
					event.preventDefault()
					validate(this.form)
				})
			})
			function validate(form) {
				let formElem = form.querySelectorAll('.js-required'),
					errorArr = [],
					pass1 = form.querySelector('.js-input-pass-1'),
					pass2 = form.querySelector('.js-input-pass-2')



				formElem.forEach(function (item) {
					item.closest('.b-input__text-field-wrap').classList.remove('error')
					item.closest('.b-input__text-field-wrap').classList.remove('error-pass')
					item.closest('.b-input__text-field-wrap').classList.remove('successful')
					if (item.value == '') {
						errorArr.push('error')
						item.closest('.b-input__text-field-wrap').classList.add('error')

					}
					else if (item.classList.contains('js-input-pass-2') && pass1.value !== pass2.value) {
						errorArr.push('error')
						item.closest('.b-input__text-field-wrap').classList.add('error')
						item.closest('.b-input__text-field-wrap').classList.add('error-pass')
					}
					else {
						item.closest('.b-input__text-field-wrap').classList.add('successful')
					}

				})

				if (errorArr.length === 0) {
					if (document.querySelector('.b-auth-block__notification')) {
						document.querySelector('.b-auth-block__inside').style.display= "none"
						document.querySelector('.b-auth-block__notification').style.display= "block"

					}
				}
			}
		}

	},
	focusInput: function () {
		let input = document.querySelectorAll('.b-input__text-field')

		if (input.length !== 0) {
			input.forEach(function (item) {
				item.addEventListener('blur', function (evt) {
					if (this.value) {
						this.closest('.b-input__text-field-wrap').classList.add('is-full')
						this.closest('.b-input__text-field-wrap').classList.add('successful')
						this.closest('.b-input__text-field-wrap').classList.remove('error')
					} else {
						this.closest('.b-input__text-field-wrap').classList.remove('is-full')
						this.closest('.b-input__text-field-wrap').classList.remove('successful')
					}
				})
			})
		}
	},
	reCaptcha: function () {

		if (document.querySelector('#reCaptcha')) {

			window.reCaptcha = function () {
				grecaptcha.render('reCaptcha', {
					'sitekey': '6LejRZ8UAAAAACXtYHC4SlpNC6-TYsLnXC2rpjG6'
				})
			}

		}

	},

	mainSelect: function () {
		let selectBlock = document.querySelectorAll('.js-select-block');
		if (selectBlock) {
			selectBlock.forEach(function (item, i, array) {

				item.addEventListener('click', function (event) {
					let target = event.target;

					if (target.classList.contains('js-select-button') || target.parentElement.classList.contains('js-select-button')) {
						array.forEach(function (item) {
							item.classList.remove('active')
						})
						this.classList.toggle('active')
					}
				});

				let selectItem = item.querySelectorAll('.b-select__item')

				selectItem.forEach(function (item) {
					item.addEventListener('click', function () {
						let activeVal = this.innerText,
							parentBlock = this.closest('.js-select-block')
						parentBlock.querySelector('.js-select-label').innerText = activeVal
						parentBlock.querySelector('.js-select-label').classList.add('is-selected')
						parentBlock.querySelector('.js-select-set-val').setAttribute('value', activeVal)


					});

				});

			});

			document.addEventListener('click', function (event) {
				let target = event.target

				if (target.classList.contains('js-select-block') || target.parentElement.classList.contains('js-select-block') || target.classList.contains('js-select-button') || target.parentElement.classList.contains('js-select-button')) {

					return true

				} else {
					let selectBlock = document.querySelectorAll('.js-select-block');

					selectBlock.forEach(function (item) {
						if (item.classList.contains('active')) {
							item.classList.remove('active')
						}

					})
				}

			})
		}

	},
	toggleUsrType: function () {
		let blockForm = document.querySelector('.js-type-user-block')

		if (blockForm) {
			blockForm.addEventListener('click', function (event) {
				let target = event.target

				if (target.classList.contains('js-type-user-button') || target.parentElement.classList.contains('js-type-user-button')) {
					let allBtn = document.querySelectorAll('.js-type-user-button')
					allBtn.forEach(function (item) {
						item.classList.remove('is-active')
					})

					target.classList.add('is-active')
					document.querySelector('.js-type-user-input').value = target.getAttribute('data-user-type')
				}

				})
		}
	},


}; //App
document.addEventListener('DOMContentLoaded', function () {
	App.init(),
	App.mobileMenu(),
	App.mainDropdown(),
	App.stickyHeader(),
	App.scrollTo(),
	App.formValid(),
	App.focusInput(),
	App.reCaptcha(),
	App.mainSelect(),
	App.toggleUsrType()




});
