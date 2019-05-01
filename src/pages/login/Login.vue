<template>
  <div>
    <div class="login-box">
      <div class="login-title">阿辉</div>
      <div class="login-sty">
        <a  :class="{on:flag}"  href="javascript:;" @click= " flag =true">短信登录</a>
        <a  :class="{on:!flag}" href="javascript:;" @click=" flag =false">密码登录</a>
      </div>
      <div v-show="flag">
        <div class="login-input">
          <input type="text" placeholder="手机号" v-model="phone" maxlength="11">
          <button class="first-button" :class="{right_phone:right}" :disabled="!right" @click.prevent="getNum()">
            {{ showTime>0 ? `已发送(${showTime}s)`: '获取验证码'}}
          </button>
          <input type="text" placeholder="验证码" v-model="yanzhengcode" maxlength="6">
        </div>
        <input class="login-denglu" type="button" value="登录" @click="denglu">
      </div>
      <div v-show="!flag">
        <div class="login-input">
          <input type="text" placeholder="账号" v-model="loginShow">
          <button class="last-button" :class=""  @click="showButtton=!showButtton">
            <span class="button-first" v-show="showButtton">on</span>
            <span class="button-last" v-show="!showButtton">off</span>
          </button>
          <input :type="showButtton?'password':'text'" placeholder="密码" maxlength="8" v-model="pswshow">
        </div>
        <input class="login-denglu" type="button" value="登录" @click="denglu2">
      </div>

      <p class="login-att">温馨提示</p>
      <p class="login-about">关于我们</p>
      <a href="javascript:;" @click="$router.back()" class="a-iconfont iconfont icon-left"></a>
    </div>
    <Fogtemplate @getchange="getchange" v-show="showFog" :attention="attention"></Fogtemplate>
  </div>
</template>

<script>
  import Fogtemplate from  "../../components/Fogtemplate/Fogtemplate.vue"
  export default {
    components:{
      Fogtemplate
    },
    data () {
      return {
        flag: true,
        phone:"",
        yanzhengcode:"",
        showTime:0,
        showButtton:false,
        pswshow:"",
        loginShow:"",
        attention:"父组件",
        showFog:false
      }
    },
    methods: {
      getNum(){
        if (!this.showTime) {
          this.showTime = 30
          let timer = setInterval( ()=> {
            this.showTime --
            if (this.showTime <= 0){
              clearInterval(timer)
            }
          },1000)
        }
      },
      denglu(){
        if (this.phone && this.yanzhengcode) {
          //信息填完，需要验证，通过反馈的信息来判断正确
          alert("登录成功")
        }
        else {  //因为少填信息导致登录失败，提示原因
          this.showFog = true
          if (this.flag===true){
            if (!this.phone){
              this.attention ="请输入11位电话号码"
            }else if (!this.yanzhengcode){
              this.attention ="请输入6位验证码"
            }
          }
        }
      },
      denglu2(){
        if (this.pswshow&&this.loginShow) {
          alert("登录成功")
        }
        else {
          this.showFog = true
        if (!this.flag) {
            if (!this.loginShow) {
              this.attention ="请输入账号"
            }else {
              this.attention ="请输入密码"
            }
          }
        }
      },
      getchange(){
        this.showFog = false
      }
    },
    computed:{
      right(){
        return /^1\d{10}$/.test(this.phone)
      }
    }
  }
</script>
<style scoped>
  .login-box {
    position: relative;
  }

  .a-iconfont {
    position: absolute;
    left: 3%;
    top: -15%;
  }

  .login-title {
    font-size: 40px;
    margin-top: 60px;
    font-weight: 700;
  }

  .login-sty {
    margin-top: 40px;
    display: flex;
    justify-content: space-around;
  }

  .login-sty::before {
    content: "";
    clear: both;
    display: block;
  }

  .login-sty::after {
    content: "";
    clear: both;
    display: block;
  }

  .login-input {
    margin-top: 20px;
    position: relative;
  }
  .last-button span {
    font-size: 14px;
    line-height: 20px;
  }
  .login-input input {
    outline: none;
    margin-top: 10px;
    width: 80%;
    height: 40px;
    border: 1px solid #ccc;
    text-indent: 1em;
    border-radius: 10px;
  }
  .login-input .first-button{
    position: absolute;
    padding: 0;
    background-color: #fff;
    left: 65%;
    top: 21%;
    border: 0;
    outline: none;
  }
  .login-input .last-button{
    position: absolute;
    padding: 0;
    background-color: #fff;
    left: 75%;
    top: 70%;
    width: 40px;
    height: 20px;
    box-shadow: 0 0 3px #7e8c8d;
    border-radius: 10px;
    outline: none;
  }
  .right_phone{
    color: black;
  }
  .button-first{
    position: absolute;
    left: 0;
    top: -16%;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: white;
    outline: none;
  }
  .button-last{
    outline: none;
    position: absolute;
    right: -1%;
    top: -6%;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: greenyellow;
  }
  .login-att {
    margin-top: 20px;
  }

  .login-denglu {
    width: 70%;
    background-color: lightgreen;
    height: 40px;
    border-radius: 10px;
    margin-top: 10px;
    outline: none;
  }

  .login-about {
    margin-top: 10px;
  }

  .on {
    text-decoration-line: underline;
    color: green;
  }
</style>
