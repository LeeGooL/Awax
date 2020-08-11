/* ==================== IntroSlider ==================== */
$('#introSlider').slick({
	arrows: false,
	dots: true,
	infinity: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	swipe: true,
});



/* ==================== TeamSlider ==================== */
$('#teamSlider').slick({
	arrows: false,
	dots: true,
	infinity: true,
	slidesToScroll: 3,
	slidesToShow: 3,
	swipe: true,
	responsive: [{

      breakpoint: 901,
      settings: {
		  slidesToShow: 2,
		  slidesToScroll: 2,
		  infinite: true,
		}, 
	}, {

      breakpoint: 701,
      settings: {
        slidesToShow: 1,
		  slidesToScroll: 1,
		  infinite: true,
		}

	}],
});



/* ==================== TeamSlider ==================== */
$('#clientsSlider').slick({
	arrows: false,
	dots: true,
	infinity: true,
	slidesToScroll: 1,
	slidesToShow: 1,
	swipe: true,
});



/* ==================== PremiumSlider ==================== */
$('#premiumSlider').slick({
	arrows: false,
	dots: true,
	infinity: true,
	slidesToScroll: 1,
	slidesToShow: 1,
	swipe: true,
});