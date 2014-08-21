$(document).ready(function(){
	var height = $(window).height();
	var width = $(window).width();
	
	$("#main").height(height);

	$("#content").height("75%");
	$("#content").width("75%");

	moveMug1();

	function moveMug1(){
		var top = Math.floor((Math.random() * 100 - 50) + 1);
		var left = Math.floor((Math.random() * 100 - 50) + 1);
		$("#mug1").animate({
			top: "+="+top,
			left: "+="+left
		},1000);
		$("#mug2").animate({
			top:"-="+top,
			left:"-="+left},
			1000);
		moveMug1();
	}



});