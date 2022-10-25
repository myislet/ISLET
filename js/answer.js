$(function(){
	$("#contents> ul> li").click(function(){
		$(this).children(".answer").slideToggle();
		$(this).siblings().children(".answer").slideUp();
	});
});
$(function(){
	$("#contents> ul> li").click(function(){
		$(this).toggleClass("turn");
		
		if($(this).hasClass("turn")===true){
				$(this).siblings().removeClass("turn");
			
		}

	});
});






