$(document).ready(function() {
	var owl = $('.owl-carousel');
	$('.logoSlider').owlCarousel({
		loop:true,
		autoplay:true,
		margin:15,
		nav:false,
		dots:true,
		responsive:{
			0:{
				items:3
			},
			768:{
				items:4
			},
			1024:{
				items:6,
				margin:50
			}
		}
	});
});

$(document).ready(function() {
	var owl = $('.owl-carousel');
	$('.testiSlider').owlCarousel({
		loop:true,
		autoplay:true,
		margin:15,
		nav:true,
		dots:true,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:1
			},
			1024:{
				items:2,
				margin:50
			}
		}
	});
});