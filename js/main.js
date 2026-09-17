AOS.init({
	duration: 800,
	easing: 'slide'
});

(function($) {

	"use strict";

	/* =========================================================
	   STELLAR PARALLAX
	========================================================= */

	$(window).stellar({
		responsive: true,
		parallaxBackgrounds: true,
		parallaxElements: true,
		horizontalScrolling: false,
		hideDistantElements: false,
		scrollProperty: 'scroll'
	});


	/* =========================================================
	   FULL HEIGHT
	========================================================= */

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());

		$(window).resize(function() {
			$('.js-fullheight').css('height', $(window).height());
		});

	};

	fullHeight();


	/* =========================================================
	   LOADER
	========================================================= */

	var loader = function() {

		setTimeout(function() {

			if ($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}

		}, 1);

	};

	loader();


	/* =========================================================
	   SCROLLAX
	========================================================= */

	$.Scrollax();


	/* =========================================================
	   BURGER MENU
	========================================================= */

	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event) {

			event.preventDefault();

			if ($('#ftco-nav').is(':visible')) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');
			}

		});

	};

	burgerMenu();


	/* =========================================================
	   ONE PAGE NAVIGATION
	========================================================= */

	var onePageClick = function() {

		$(document).on(
			'click',
			'#ftco-nav a[href^="#"]',
			function(event) {

				event.preventDefault();

				var href = $.attr(this, 'href');

				$('html, body').animate({

					scrollTop: $($.attr(this, 'href')).offset().top - 70

				}, 500, function() {

					// window.location.hash = href;

				});

			}
		);

	};

	onePageClick();


	/* =========================================================
	   HOME HERO CAROUSEL
	========================================================= */

	var carousel = function() {

		$('.home-slider').owlCarousel({

			loop: true,

			autoplay: true,

			margin: 0,

			animateOut: 'fadeOut',

			animateIn: 'fadeIn',

			nav: false,

			autoplayHoverPause: false,

			items: 1,

			navText: [
				"<span class='ion-md-arrow-back'></span>",
				"<span class='ion-chevron-right'></span>"
			],

			responsive: {

				0: {
					items: 1
				},

				600: {
					items: 1
				},

				1000: {
					items: 1
				}

			}

		});

	};

	carousel();


	/* =========================================================
	   PROJECT CAROUSEL
	   
	   Shows:
	   Desktop  : 3 projects
	   Tablet   : 2 projects
	   Mobile   : 1 project
	========================================================= */

	var projectCarousel = function() {

		var $projectCarousel = $('.project-carousel');

		/* Make sure the carousel exists */
		if ($projectCarousel.length === 0) {
			return;
		}

		$projectCarousel.owlCarousel({

			loop: true,

			margin: 30,

			nav: false,

			dots: true,

			autoplay: false,

			autoplayHoverPause: true,

			smartSpeed: 600,

			slideBy: 3,

			responsive: {

				0: {
					items: 1,
					slideBy: 1
				},

				576: {
					items: 1,
					slideBy: 1
				},

				768: {
					items: 2,
					slideBy: 2
				},

				992: {
					items: 3,
					slideBy: 3
				},

				1200: {
					items: 3,
					slideBy: 3
				}

			}

		});


		/* =====================================================
		   CUSTOM PREVIOUS BUTTON
		===================================================== */

		$('.project-prev').on('click', function() {

			$projectCarousel.trigger('prev.owl.carousel');

		});


		/* =====================================================
		   CUSTOM NEXT BUTTON
		===================================================== */

		$('.project-next').on('click', function() {

			$projectCarousel.trigger('next.owl.carousel');

		});

	};

	projectCarousel();


	/* =========================================================
	   NAVBAR DROPDOWN
	========================================================= */

	$('nav .dropdown').hover(function() {

		var $this = $(this);

		$this.addClass('show');

		$this.find('> a').attr('aria-expanded', true);

		$this.find('.dropdown-menu').addClass('show');

	}, function() {

		var $this = $(this);

		$this.removeClass('show');

		$this.find('> a').attr('aria-expanded', false);

		$this.find('.dropdown-menu').removeClass('show');

	});


	/* =========================================================
	   DROPDOWN DEBUG
	========================================================= */

	$('#dropdown04').on('show.bs.dropdown', function() {

		console.log('show');

	});


	/* =========================================================
	   NAVBAR SCROLL
	========================================================= */

	var scrollWindow = function() {

		$(window).scroll(function() {

			var $w = $(this),

				st = $w.scrollTop(),

				navbar = $('.ftco_navbar'),

				sd = $('.js-scroll-wrap');


			/* -----------------------------------------------
			   SCROLLED
			------------------------------------------------ */

			if (st > 150) {

				if (!navbar.hasClass('scrolled')) {

					navbar.addClass('scrolled');

				}

			}


			if (st < 150) {

				if (navbar.hasClass('scrolled')) {

					navbar.removeClass('scrolled sleep');

				}

			}


			/* -----------------------------------------------
			   AWAKE
			------------------------------------------------ */

			if (st > 350) {

				if (!navbar.hasClass('awake')) {

					navbar.addClass('awake');

				}


				if (sd.length > 0) {

					sd.addClass('sleep');

				}

			}


			/* -----------------------------------------------
			   SLEEP
			------------------------------------------------ */

			if (st < 350) {

				if (navbar.hasClass('awake')) {

					navbar.removeClass('awake');

					navbar.addClass('sleep');

				}


				if (sd.length > 0) {

					sd.removeClass('sleep');

				}

			}

		});

	};

	scrollWindow();


	/* =========================================================
	   COUNTER
	========================================================= */

	var counter = function() {

		$('#section-counter, .hero-wrap, .ftco-counter, .ftco-about').waypoint(

			function(direction) {

				if (
					direction === 'down' &&
					!$(this.element).hasClass('ftco-animated')
				) {

					var comma_separator_number_step =
						$.animateNumber.numberStepFactories.separator(',');


					$('.number').each(function() {

						var $this = $(this),

							num = $this.data('number');


						console.log(num);


						$this.animateNumber({

							number: num,

							numberStep: comma_separator_number_step

						}, 7000);

					});

				}

			},

			{
				offset: '95%'
			}

		);

	};

	counter();


	/* =========================================================
	   CONTENT WAYPOINT ANIMATION
	========================================================= */

	var contentWayPoint = function() {

		var i = 0;

		$('.ftco-animate').waypoint(

			function(direction) {

				if (
					direction === 'down' &&
					!$(this.element).hasClass('ftco-animated')
				) {

					i++;

					$(this.element).addClass('item-animate');


					setTimeout(function() {

						$('body .ftco-animate.item-animate').each(function(k) {

							var el = $(this);


							setTimeout(function() {

								var effect =
									el.data('animate-effect');


								if (effect === 'fadeIn') {

									el.addClass(
										'fadeIn ftco-animated'
									);

								}

								else if (effect === 'fadeInLeft') {

									el.addClass(
										'fadeInLeft ftco-animated'
									);

								}

								else if (effect === 'fadeInRight') {

									el.addClass(
										'fadeInRight ftco-animated'
									);

								}

								else {

									el.addClass(
										'fadeInUp ftco-animated'
									);

								}


								el.removeClass('item-animate');

							}, k * 50, 'easeInOutExpo');

						});

					}, 100);

				}

			},

			{
				offset: '95%'
			}

		);

	};

	contentWayPoint();


	/* =========================================================
	   MAGNIFIC POPUP — IMAGES
	========================================================= */

	$('.image-popup').magnificPopup({

		type: 'image',

		closeOnContentClick: true,

		closeBtnInside: false,

		fixedContentPos: true,

		mainClass: 'mfp-no-margins mfp-with-zoom',

		gallery: {

			enabled: true,

			navigateByImgClick: true,

			preload: [0, 1]

		},

		image: {

			verticalFit: true

		},

		zoom: {

			enabled: true,

			duration: 300

		}

	});


	/* =========================================================
	   MAGNIFIC POPUP — YOUTUBE / VIMEO / GOOGLE MAPS
	========================================================= */

	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({

		disableOn: 700,

		type: 'iframe',

		mainClass: 'mfp-fade',

		removalDelay: 160,

		preloader: false,

		fixedContentPos: false

	});


})(jQuery);