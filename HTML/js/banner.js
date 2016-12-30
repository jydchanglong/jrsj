// JavaScript Document
;(function($,window,document,undefined){
	
	$.fn.banner = function(options){
		var defaults = {
			width:'100%',
			height:'277'
		}
		
		var options = $.extend({},defaults,options);
		
		this.each(function(){
			$(this).css({'width':options.width,'height':options.height});
			$(this).addClass('banner');
			var Timer = null;
			var $state = $(this).find(".focus").find("li");
			var $sImg = $(this).find(".img").find("li");
			var index = 0;
			var length = $sImg.length;
			$state.mouseover(function(){
				index = $(this).index();
				//index = $sImg.index();
				showImg(index);
			}).eq(0).mouseover();
			Timer = setInterval(function(){
				showImg(index)
				index++;
				if(index == length){index = 0}
			},6000);
			
			function showImg(index){
				$state.eq(index).addClass("state")
				.siblings().removeClass("state");
				$sImg.eq(index).stop(true,true).fadeIn(600)
				.siblings().fadeOut();	
				
			}			
			
//			$('.btn-next').click(function(){
//				index++;
//				clearInterval(Timer);
//				if(index>length-1){
//					index = 0;
//					showImg(index);
//					Timer = setInterval(function(){
//						showImg(index)
//						index++;
//						if(index == length){index = 0}
//					},6000);
//				}else{
//					showImg(index);
//					Timer = setInterval(function(){
//						showImg(index)
//						index++;
//						if(index == length){index = 0}
//					},6000);
//				}
//								
//			});
//			
//			$('.btn-prev').click(function(){
//				index--;
//				clearInterval(Timer);
//				if(index<0){
//					index = length - 1;
//					showImg(index);
//					Timer = setInterval(function(){
//						showImg(index)
//						index++;
//						if(index == length){index = 0}
//					},6000);
//				}else{
//					showImg(index);
//					Timer = setInterval(function(){
//						showImg(index)
//						index++;
//						if(index == length){index = 0}
//					},6000);
//				}
//			});
			
			function stopImg(eleName){
				eleName.hover(function(){
				if(Timer){clearInterval(Timer)}
				},function(){
					Timer = setInterval(function(){
						showImg(index)
						index++;
						if(index == length){index = 0}
					},6000)
				})
			}
//			stopImg($sImg)
			stopImg($state) 
			  
		});
	}
	
})(jQuery,window,document);
