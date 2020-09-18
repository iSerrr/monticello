$('.slider').slick({
	arrows: false,
	dots: true,
	infinite: true,
	autoplay: true,
	autoplaySpeed: 4000,
	speed: 2000,
	slidesToShow: 1,
	adaptiveHeight: true,
	vertical: true,
	verticalSwiping: true,
	dotsClass: 'slider__dots-position dots',
	pauseOnHover: false,
	responsive: [
		{
			breakpoint: 481,
			settings: {
				dots: false,
				verticalSwiping: false,
			},
		},
		{
			breakpoint: 769,
			settings: {
				dots: false,
			},
		},
	],
})

$('.news-slider').slick({
	dots: true,
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 4000,
	speed: 1500,
	pauseOnHover: false,
	focusOnSelect: true,
	variableWidth: true,
	centerMode: true,
	responsive: [
		{
			breakpoint: 480,
			settings: {
				dots: false,
				arrows: false,
				slidesToShow: 1,
				variableWidth: true,
				draggable: false,
			},
			breakpoint: 768,
			settings: {
				dots: false,
				arrows: false,
				slidesToShow: 1,
				variableWidth: true,
				draggable: false,
				adaptiveHeight: true,
			},
			breakpoint: 1200,
			settings: {
				dots: false,
				arrows: false,
			},
		},
	],
	dotsClass: 'news-slider__dots-position dots dots--horizontal',
	prevArrow:
		'<div class="news-slider__prevArrow"><div class="arrow-in-circle arrow-in-circle--left arrow-in-circle--hoverEfects"></div></div>',
	nextArrow:
		'<div class="news-slider__nextArrow"><div class="arrow-in-circle arrow-in-circle--right arrow-in-circle--hoverEfects"></div></div>',
})
