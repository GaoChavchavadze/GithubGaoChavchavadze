"use strict" 

$(".burger").on("click", function(){
	if ($(".header").hasClass("burger-is-active")) {
		$(".header").removeClass("burger-is-active")
	} else{
		$(".header").addClass("burger-is-active")
	}
	
}) 


// მენიუს სქროლი გვერდით

$(window).on("scroll", function(){
	console.log("scrolled");
if($(window).scrollTop() > 150){
		 document.getElementById("headerparent").style.left = "0";
	} 
else{

var lastScrollTop = 150;

window.addEventListener("scroll", function (){   
   var st = window.pageYOffset || document.documentElement.scrollTop; 

   if (st > lastScrollTop){
       document.getElementById("headerparent").style.left = "-100%";
   } else {
      document.getElementById("headerparent").style.left = "0";
   }
   lastScrollTop = st;
}, false);
}
})


//მეორე ვერსია სქროლის

// var lastScrollTop = 150;
// var st = window.pageYOffset || document.documentElement.scrollTop; 

// $(window).on("scroll", function(){
// 	console.log("scrolled");

// if($(window).scrollTop() < 150){
// 		 document.getElementById("headerparent").style.right = "0";
// 	} 
// else if (st > lastScrollTop){
//        document.getElementById("headerparent").style.left = "-100%";
//    } else {
//       document.getElementById("headerparent").style.left = "0";
//    }
//    lastScrollTop = st;
// });

