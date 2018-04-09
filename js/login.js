$(document).ready(function () {
  // 登陆
  var openLoginBox = function () {
    var sWidth = document.body.scrollWidth;
    var sHeight = document.body.scrollHeight;
    var wHeight = document.documentElement.clientHeight;
    var oMask = document.createElement("div");
    oMask.id = "mask";
    oMask.style.height = "100%";
    oMask.style.width = "100%";
    document.body.appendChild(oMask);
    var oLogin = document.createElement("div");
    oLogin.id = "login";
    oLogin.innerHTML = '<form><div id="loginBox"><header class="title"><div>登陆</div><span id="close">X</span></header><div><input class="mobile" type="text" placeholder="请输入手机号/邮箱"/><input class="password" type="password" placeholder="请输入密码"/><div class="forget"><span>忘记密码？</span></div></div><button class="loginButton">登录</button></div></form>';
    document.body.appendChild(oLogin);

    var dHeight = oLogin.offsetHeight;
    var dWidth = oLogin.offsetWidth;
    oLogin.style.left = sWidth/2 - dWidth/2 + "px";
    oLogin.style.top = wHeight / 2 - dHeight / 2 + "px";
    var oClose = document.getElementById("close");
    oClose.onclick = oMask.onclick = function () {
      document.body.removeChild(oLogin);
      document.body.removeChild(oMask);
    };
  };
  $("#btnLogin").click(function () {
    openLoginBox();
    return false;
  });

  $('.loginButton').click(function () {
    var params = {};
    params['mobile'] = $('.mobile').val();
    params['password'] = $('.password').val();
    console.log(params);
    console.log($('.mobile').val());
    return false;
  });


})