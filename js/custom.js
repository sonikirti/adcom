$(document).ready(function () {
	

		
		
	$('.product-slider').owlCarousel({
    loop:true,
    margin:0,
	rtl:true,
    responsiveClass:true,
    items:9,
    nav:true,	
	autoplay:true,
	responsive:{
        0:{
            items:3,
			loop:true,
            nav:true
        },
        600:{
            items:5,
			loop:true,
            nav:false
        },
        1000:{
            items:9,
            nav:true,
            loop:true
        }
	}
	
	});
		
	
	
		
	 });
	 
	
	
	
	
	
