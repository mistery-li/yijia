$(document).ready(function () {
  // 注册
  var openRegisterBox = function () {
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
        oLogin.innerHTML = 
        '<div id="loginBox"><header class="title"><div>注册</div><span id="close">X</span></header><div><input class="mobile" placeholder="请输入手机号/邮箱"/><input class="password" placeholder="请输入密码"/></div><button class="loginButton">注册</button></div>';
        document.body.appendChild(oLogin);

    var dHeight = oLogin.offsetHeight;
    var dWidth = oLogin.offsetWidth;
        oLogin.style.left = sWidth/2-dWidth/2+"px";
        oLogin.style.top = wHeight/2-dHeight/2+"px";
    var oClose = document.getElementById("close");
        oClose.onclick = oMask.onclick = function () {
          document.body.removeChild(oLogin);
          document.body.removeChild(oMask);
        };
  };
  $("#btnRegister").click(function() {
    openRegisterBox();
    return false;
  });
})