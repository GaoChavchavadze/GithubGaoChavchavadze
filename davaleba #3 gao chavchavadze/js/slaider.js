// A $( document ).ready() block.
$( document ).ready(function() {
    // console.log( "ready!" );

$(window).on("scroll", function(){console.log("scrolled")})


var elementWidth = $(".slide").width();
var activeIndex = 0;
var speed = 300
var childCount = $(".slide").length;
console.log(childCount)
console.log(elementWidth)
		function init(){
			 var circles = ""
			for (var i = 0; i < childCount; i++) {
				circles += "<div></div>"
			};
			console.log(circles)
	}

	function goToSlide(index){
		console.log(index);
		if((index>childCount-1) 
			// || (index < 0)
			){
			index=0;
		}
		if ( index<0)
		{
			index = childCount-1
		}
		$(".slider_block").animate({left : - (index * elementWidth)}, speed, function(){
		activeIndex = index;
			});


	}
	function goToLeft(){
		goToSlide(activeIndex + 1)
	}
	function goToRight(){
		 goToSlide(activeIndex - 1)
	}
	$(".arrow.right").on("click", function(){
		goToRight();
	})

	$(".arrow.left").on("click", function(){
		goToLeft();
	})

	init();






});
