var annual = {
	init:function(){
		console.log("HELLO!");
	},	
	features_in:function(){
		setTimeout(function(){
			$(".feature_1").addClass('on');
			$(".feature_1").removeClass('off');
		},200);
		setTimeout(function(){
			$(".feature_2").addClass('on');
			$(".feature_2").removeClass('off');
		},500);
		setTimeout(function(){
			$(".feature_3").addClass('on');
			$(".feature_3").removeClass('off');
		},800);
		setTimeout(function(){
			$(".award").css('opacity', '1');
		},800);
		setTimeout(function(){
			$(".de").addClass('language_drop');
			$(".de").removeClass('language_lifted');
		},300);
		setTimeout(function(){
			$(".sw").addClass('language_drop');
			$(".sw").removeClass('language_lifted');
		},350);
		setTimeout(function(){
			$(".da").addClass('language_drop');
			$(".da").removeClass('language_lifted');
		},400);
		setTimeout(function(){
			$(".ocho").addClass('language_drop');
			$(".ocho").removeClass('language_lifted');
		},450);
		setTimeout(function(){
			$(".nueve").addClass('language_drop');
			$(".nueve").removeClass('language_lifted');
		},500);
		setTimeout(function(){
			$(".diez").addClass('language_drop');
			$(".diez").removeClass('language_lifted');
		},550);
		setTimeout(function(){
			$(".instruct").addClass('instruct_drop');
			$(".instruct").removeClass('instruct_lifted');
		},650);
	},
	slide_panel:function(){
		$(".language_txt").hover(function(){
		    $(".slide_panel").toggleClass('slide_up');
		});
	}
};

/* show go-to-top button on scroll */
    
		 $(function() {
		$('.top').bind('click',function(event){
			var $anchor = $(this);
	
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href').toString()).offset().top
			}, 3000,'easeInOutExpo');
			
			event.preventDefault();
		});
	});	
 

	function fixTop() {
		 var windowTop = $(window).scrollTop();
		 var $topLink = $(".top");
		 var topLinkPos = $topLink.position();
		 var headerHeight = $("#top_section").height() + 20;
		 
		 if (windowTop >= headerHeight){
			 $topLink.addClass("top-fixed");		  
		 };
		 
		if (windowTop <= (headerHeight - 1)) {
			 $topLink.removeClass("top-fixed");
		 };	
	 
	 };
	 
	 $(window).scroll(function() {fixTop();
	 });					
			
