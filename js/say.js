$(document).ready(function (){
  var imagebox=$(".say-carousel").children('.say-imgbox')[0],//获得图片容器
  icobox=$(".say-carousel").children('.idxbox')[0],//获得图标容器
  ico=$(icobox).children('span'),//获得图标数组
  imagenum=$(imagebox).children().size(),//获得图片数量
  imageboxWidth=$(imagebox).width(),//获得图片容器的宽度
  imagewidth=imageboxWidth*imagenum,//获得图片的总宽度
  activeID = parseInt($($(icobox).children(".active")[0] ).attr("rel")),//获得激活的图标ID
  nextID=0,//下一个图标的ID
  intervalID,//setInterval()函数的ID
  delaytime=4000,//延迟的时间
  speed=700;//执行速度
    $(imagebox).css({'width' : imagewidth + "px"});

  var rotate=function(clickID) { //图片滑动函数
    if (clickID+1){
      nextID=clickID;
    }else{
      nextID=(activeID+1)%4;
    };
    $(ico[activeID]).removeClass('active');
    $(ico[nextID]).addClass('active');
    $(imagebox).animate({left:"-"+nextID*imageboxWidth+"px"}, speed);//jQuery中的animate函数
    activeID=nextID;
  }
  
  intervalID=setInterval(rotate,delaytime);//循环函数
  $.each(ico, function(index, val) {
    $(this).click(function(event) {
      clearInterval(intervalID);//清楚之前的定时任务
       var clickID = index;
       rotate(clickID);//运行一次带参数的rotate函数
       intervalID = setInterval(rotate,delaytime);
    });
  });

  var filterList = $('.filter').children("li").children('a');
		var filterChange = function (clickId) {
			var clicked = $('.filter').children('li').children('a');
			$(clicked[clickId]).addClass('clicked');
			
		}
		$.each(filterList, function (index, val) {
			$(this).click(function (event) {
				var clickId = index;
				$(filterList).removeClass('clicked');
				filterChange(clickId);
		
			})
		})
})