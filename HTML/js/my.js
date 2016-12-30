$(function(){
	$('.box01').show();
	$('.pro-menu li').hover(function(){
		var liIndex = $(this).index();
		
		$(this).addClass('active').siblings('li').removeClass('active');
		$('.pro-list .pro-box').eq(liIndex).show().siblings().hide();
	});
	
	$('.side-nav .menu-list li').click(function(){
		$(this).children('.thd-menu').slideToggle();
		$(this).siblings('li').children('.thd-menu').slideUp();
	});
});
