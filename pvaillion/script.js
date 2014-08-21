$(document).ready(function(){
	var height = $(window).height();
	var width = $(window).width();
	
	$("#main").height(height);

	$("#content").height(height - 200);
	$("#content").width(width - 200);
});