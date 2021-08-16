$(function(){
	$(".banner dt").hover(function(){
		$(this).parent("dl").addClass("act");
		$(this).next("dd").fadeIn("fast");
		$(this).find("em").addClass("active")
	}, function(){
		$(this).parent("dl").removeClass("act");
		$(this).next("dd").hide();
		$(this).find("em").removeClass("active")
	})
});


