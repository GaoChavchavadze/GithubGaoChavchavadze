
// var element = document.getElementById('burger');
// var menu = document.getElementById('menu');
// var active = document.getElementsByClassName ("active");

// element.addEventListener('click', function(){
// 	// console.log("clicked");
// menu.classList.add('active') 
// });

// active.addEventListener("click", function() {
// 	menu.classList.remove("active")
// })

 
$(".burger").on("click", function(){
	if ($(".header").hasClass("burger-is-active")) {
		$(".header").removeClass("burger-is-active")
	} else{
		$(".header").addClass("burger-is-active")
	}
	
}) 

// $(".burger").on("click", function(){
// 	if ($(".header").hasClass("burger-is-active")) {
// 		$(".header").removeClass("burger-is-active")
// 		$('.filldiv').text($('.burger').text() + 
// 		$('.menu').text())} 
// 		else {
// 			$(".header").addClass("burger-is-active")
// 			$('.filldiv').everything($('.burger').all() - 
// 		$('.menu').all())

// 		}})

// document.getElementById('#burger').appendChild(
// document.getElementById('#menu')
//  );
	


// $(".burger").on("click", function(){
// 	if ($(".header").hasClass("burger-is-active")) {
// 		$(".header").removeClass("burger-is-active")

// 		// "#burger".appendChild("#menu")
// 		$("#menu").append(".burger")  
// 		} 

// 		else {$(".header").addClass("burger-is-active") }})
