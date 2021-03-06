$(function() {

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
	AOS.init({
	   disable: 'mobile',
	});


    var header = $("#header");
    var headerH = header.innerHeight();
    var scrollTop = $(window).scrollTop();

	/* Burger
    ======================================*/

	var burger = $('#burger');
	var menu = $('#menu');

	burger.on('click', function (event) {
		event.preventDefault();
		$(this).toggleClass('active');
		menu.toggleClass('show');
	});

	$(window).on("resize", function () {
		burger.removeClass('active');
		menu.removeClass('show');
	});



	/* Smooth Scroll
    ======================================*/

	$("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var scrollEl = $(this).data("scroll");
        var scrollElPos = $(scrollEl).offset().top;

        $("html, body").animate({
            scrollTop: scrollElPos - headerH
        }, 1000);
    })



  /* ScrollSpy
    =====================================*/
    
    var windowH = $(window).height();
    scrollSpy(scrollTop);

    $(window).on("scroll", function() {
        scrollTop = $(this).scrollTop();
        scrollSpy(scrollTop);
    });

    function scrollSpy(scrollTop) {
        $("[data-scrollspy]").each(function() {
            var $this = $(this);
            var sectionId = $this.data('scrollspy');
            var sectionOffset = $this.offset().top;
            sectionOffset = sectionOffset - (windowH * 0.33333);

            if(scrollTop >= sectionOffset) {
                $('#menu [data-scroll]').removeClass('active');
                $('#menu [data-scroll="' + sectionId + '"]').addClass('active');
            }
        });
    }



    /* Popup
    ===================================== */
    
    

    $('[data-popup]').on('click', function(event) {
        event.preventDefault();
        
        var popup = $(this).data('popup');

        $('body').addClass('no-scroll');
        $(popup).addClass('show');

        setTimeout(function() {
            $(popup).find('.popup__form').css({
                transform: 'scale(1)',
                opacity: '1'
            });
        }, 50);
    });

    $('[data-close]').on('click', function(event) {
        event.preventDefault();
        
        var popup = $(this).parents('.popup');

        popupClose(popup);
    });

    $('.popup').on('click', function() {
        var popup = $(this);

        popupClose(popup);
    });


    $('.popup__form').on('click', function(event) {
        event.stopPropagation();
    });

    function popupClose(popup) {
        popup.find('.popup__form').css({
            transform: 'scale(0.5)',
            opacity: '0'
        });

        setTimeout(function() {
            $('body').removeClass('no-scroll');
            popup.removeClass('show');
        }, 200);
    }

});