$(document).ready(function () {
      $(function () {
        var imgWidth = $(".box").innerWidth(); //获得每个div的宽度，包括内边距  
        var screenWidth = $(window).width(); //获得浏览器可视区域的宽度  
        var num = Math.floor(screenWidth / imgWidth); //计算一行可以放几个div  
        console.log('num', num);
        $("#container").css({
          "width": 1220 + "px",
          "margin": "0 auto"
        }); //根据每行放的div的总长来给容器一个宽度，然后居中显示  
        function waterFlow() {
          var arr = []; //定义一个数组  
          for (var i = 0; i < $(".box").length; i++) {
            if (i < num) { //一行显示num个div,将第一行的每个div高度写入数组  
              arr[i] = $(".box").eq(i).innerHeight();
            } else {
              var minImgHeight = Math.min.apply(null, arr); //取得数组中最小高度的div  
              var index = getMinIndex(arr, minImgHeight); //取得数组中最小高度的div的索引  
              $(".box").eq(i).css({
                "position": "relative",
                
              }); //瀑布流布局  
              arr[index] += $(".box").eq(i).innerHeight(); //将布局好的该div的高度和该div上面的div高度相加，重新放入数组  
            }
          }
        }
        // "top": minImgHeight + absoluteTop + "px",
        // "left": $(".box").eq(index).offset().left + "px"
        function getMinIndex(arr, min) { //取得数组中最小高度的div的索引  
          for (var i in arr) {
            if (arr[i] == min) {
              return i;
            }
          }
        }

        function checkScrollDirector() { //判断滚动条是否滑到底部  
          var flag = 0;
          if ($(document).scrollTop() + $(window).height() >= $(document).height()) {
            flag = 1;
          }
          return flag;
        }
        console.log($(document).height())
        console.log($(window).height())
        window.onload = function () {
          waterFlow(); //图片加载完毕执行  
          var json = {
            "data": [{
                "src": "images/lunbo1.jpg"
              }, {
                "src": "images/lunbo2.jpg"
              }, {
                "src": "images/lunbo3.jpg"
              }, {
                "src": "images/lunbo4.jpg"
              },
              {
                "src": "images/lunbo5.jpg"
              }, {
                "src": "images/lunbo6.jpg"
              }, {
                "src": "images/lunbo7.jpg"
              }, {
                "src": "images/lunbo8.jpg"
              }, {
                "src": "images/lunbo1.jpg"
              }, {
                "src": "images/lunbo2.jpg"
              }
            ]
          };
          window.onscroll = function () { //滚动条滚动执行  
            if (checkScrollDirector()) {
              for (var i = 0; i < json.data.length; i++) {
                var html = "<div class='box'><div class='boximg'><img src=" + json.data[i].src + "></div></div>";
                $("#container").append(html); //向容器内一次性添加12个图片  
                console.log(1);
              }
              waterFlow(); //瀑布流布局  
            }
          }
        }
      });

      var navList = $('.doChoice').children("li").children('a');
      var navChange = function (clickId) {
        var clickNav = $('.doChoice').children('li').children('a');
        $(clickNav[clickId]).addClass('choiceSelected');

      };
      $.each(navList, function (index, val) {
        $(this).click(function (event) {
          var clickId = index;
          $(navList).removeClass('choiceSelected');
          navChange(clickId);

        })
      })
    })