<template>
    <div class="login-box">
      <div class="login-title">硅谷外卖</div>
      <div class="login-sty">
        <a class="login-duanxin on" href="javascript:;">短信登陆</a>
        <a class="login-mima" href="javascript:;">密码登陆</a>
      </div>
      <div class="login-input">
        <input  type="text" placeholder="手机号">
        <a href="javascript:;">获取验证码</a>
        <input type="text" placeholder="验证码">
      </div>
      <p class="login-att">温馨提示</p>
      <input class="login-denglu" type="button" value="登陆">
      <p class="login-about">关于我们</p>
      <a href="javascript:;" @click="$router.back()" class="a-iconfont iconfont icon-left"></a>
    </div>
</template>

<script>
  export default {
    name: 'Login'
  }
</script>
<style scoped>
  .login-box{
    position: relative;
  }
  .a-iconfont{
    position: absolute;
    left: 3%;
    top: -15%;
  }
.login-title{
  font-size: 40px;
  margin-top: 60px;
  font-weight: 700;
}
.login-sty{
  margin-top: 40px;
  display: flex;
  justify-content: space-around;
}
.login-sty::before{
  content: "";
  clear: both;
  display: block;
}
.login-sty::after{
  content: "";
  clear: both;
  display: block;
}
  .login-input{
    margin-top: 20px;
    position: relative;
  }
  .login-input input{
    margin-top: 10px;
    width: 80%;
    height: 40px;
    border: 1px solid #ccc;
    text-indent: 1em;
    border-radius: 10px;
  }
.login-input a{
  position: absolute;
  font-size: 14px;
  left: 65%;
  top: 24%;
}
  .login-att{
    margin-top: 20px;
  }
  .login-denglu{
    width: 70%;
    background-color: lightgreen;
    height: 40px;
    border-radius: 10px;
    margin-top: 10px;
  }
  .login-about{
    margin-top: 10px;
  }
  .on {
    text-decoration-line:underline;
    color: green;
  }
</style>
