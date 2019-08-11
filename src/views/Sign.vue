<template>
    <div>
        <div class = "login">
            <div class = "logo">
                <img src="https://login.m.vsigo.cn/static/img/logoNew.png" alt="">
            </div>
            <p :class = "[isok?'title t_gray1':'hide']">
                免密登录
            </p>
            <p :class = "[isok?'hide':'title t_gray1']">
                密码登录
            </p>
            <div :class = "[isok?'InpBox bottoma':'InpBox bottomb']">
               <ul class = "InputBarWrap">
                   <li class = "fl-row-justy contents onepx_bottom">
                      <section class = "fl-row-left contents" style="width:100%">
                          <div class = "inputWrap fl-row-left">
                            <p class = "tips">
                                <img src="../assets/images/tel.png" alt="">
                            </p>
                             <input type="text"
                              data-index="0"
                              placeholder="请输入手机号"
                              v-model="phoneNum"
                              @blur="checkphone"
                               >
                             <i class = "quxiao">X</i>
                          </div>
                      </section> 
                   </li>
                   <li class = "fl-row-justy contents onepx_bottom">
                        <section class = "fl-row-left contents" style="width:60%">
                          <div class = "inputWrap fl-row-left">
                            <p class = "tips">
                                <img src="../assets/images/key.png" alt="">
                            </p>
                             <input type="number"
                              data-index="0"
                              :placeholder="[isok?'请输入验证码':'请输入密码']"
                              v-model="password"
                              @blur="checkpsw"
                               >
                          </div>
                      </section>
                       <button :class = "[isok?'codeBtn':'hide']">
                            获取验证码
                       </button>
                       <a href="" :class = "[isok?'hide':'link']">忘记密码</a>    
                   </li>
               </ul>
            </div>
             <p :class = "[isok?'tiptStr':'hide']">
                  <strong>
                      温馨提示
                  </strong>
                  ：未注册视客账号的手机号，登录后将自动完成注册，且代表您已经同意
                  <a href="https://m.vsigo.cn/h5/LoginProtocol.html" class = "t_red">《用户服务协议》</a>
               </p>
               <div class="btnWrap">
                   <button type="botton" :data-sort = "[isok?'phone':'psw']" @click = "gologin">登录</button>
                   <button class = "defaultBtn" type="botton" @click="toggle">使用密码登录</button>
                   
               </div>
               <div :class = "[isok?'footerWrap':'hide']">
                  <ul class = "fl-row-around">
                      <li style = "text-align: center;">
                          <a href="">
                              <img class = "linkimg" src="https://login.m.vsigo.cn/static/img/qqIcon.png" alt="">
                          </a>
                      </li>
                      <li style = "text-align: center;">
                          <a href="">
                              <img class = "linkimg" src="https://login.m.vsigo.cn/static/img/weiboIcon.png" alt="">
                          </a>
                      </li>
                  </ul> 
               </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      isok: true,
      phoneNum: "",
      password: "",
      phoneright:"",
      ok1:false,
      ok2:false
    };
  },
  methods: {
    toggle() {
      this.isok = !this.isok;
    },
    // 手机号码验证
    checkphone() {
      let reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
      console.log(reg.test(this.phoneNum));
      this.phoneright = reg.test(this.phoneNum);
      if(this.phoneNum == ""){
         console.log('手机号不能为空');
         this.ok1 = false;
      }else if(!this.phoneright){
         alert('账号不存在') 
         this.ok1 = false;
         console.log(this.ok1)
      }else{
          this.ok1 = true,
          console.log(this.ok1)
      }
    },
    // 密码验证
    checkpsw(){
        if(!this.password){
          console.log('密码不能为空')
          this.ok2 = false
        }else{
           this.ok2 = true
        }
    },
    //点击登录
    gologin(){
      // console.log(111)
      console.log(this.ok1)
      console.log(this.ok2)
       if(this.ok1 == true && this.ok2 == true){
            this.$axios.get("http://localhost:3001/sign/login",{
              params:{
               phoneNum:this.phoneNum,
               password: this.password,
              }
              }).then(res =>{
                // console.log(res)
                let { data, header } = res;
                 console.log(res)
                 if(data.code == 1000){
                   console.log(data.data)
                   localStorage.setItem('username',this.phoneNum)
                    localStorage.setItem('Authorization',data.data)
                    // 获取目标路径
                    let targetPath = this.$route.query.redirectTo;
                    this.$router.replace(targetPath?targetPath:'/tabbar/home')
                 }else if(data.code == 250){
                    alert("账号不存在或密码错误！")
                 }
          })
       }   
    }
  }
};
</script>

<style scoped>
.login {
  position: relative;
  padding: 0 32px;
}
.logo {
  text-align: center;
  padding-top: 50px;
  padding-bottom: 50px;
}
.logo img {
  width: 18%;
}
.title {
  padding: 8px 0;
  font-size: 14px;
}
.t_gray1 {
  color: #a5adba;
}
.InputBarWrap .contents {
  position: relative;
}
.InputBarWrap li {
  padding: 0.3rem 8px;
}
.fl-row-justy {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
}
.fl-row-left {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
}
.InputBarWrap {
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 4px 20px 0px rgba(121, 152, 215, 0.2);
  border-radius: 12px;
}
.tips {
  width: 0.48rem;
  height: 0.48rem;
  text-align: center;
  line-height: 0.48rem;
}
.tips > img {
  width: 20px;
  height: 20px;
  position: absolute;
  left: -5px;
  top: 10px;
}
.InputBarWrap .inputWrap {
  width: 100%;
}
.InputBarWrap .inputWrap input {
  font-size: 0.24rem;
  width: 80%;
  margin-left: 8px;
  outline: none;
  border: none;
  background: transparent;
}
.quxiao {
  font-style: normal;
  font-size: 2px;
  position: absolute;
  right: 12px;
}
.InputBarWrap .codeBtn {
  /* width: 76px; */
  text-align: center;
  font-size: 12px;
  color: #fff;
  height: 26px;
  line-height: 26px;
  background: #ccc;
  border-radius: 12px;
  padding: 0 6px;
  pointer-events: none;
  outline: none;
  border: none;
}
.tiptStr {
  margin-bottom: 16px;
  font-size: 12px;
}
.hide {
  display: none;
}
.t_red {
  color: #fc3b72 !important;
}
.tiptStr a {
  font-size: 0.22rem;
}
.btnWrap button {
  margin: 0 0 16px 0;
  width: 100%;
  border-radius: 30px;
  color: #fff;
  background: linear-gradient(
    90deg,
    rgba(252, 59, 114, 0.78) 0%,
    rgba(252, 59, 114, 1) 100%
  );
  box-shadow: 0px 4px 20px 0px rgba(121, 152, 215, 0.2);
  padding: 10px;
  outline: none;
  border: none;
}
.footerWrap {
  width: 90%;
}
.btnWrap .defaultBtn {
  background: #fff;
  color: #ff5474;
  border: 1px solid #ff5474;
}
.footerWrap li {
  padding: 8px;
  flex: 1 1 10%;
  text-align: center;
}
.linkimg {
  width: 50px;
  height: 50px;
}
.fl-row-around {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
}
.link {
  font-size: 0.24rem;
  color: #ff5474;
}
.bottoma {
  margin-bottom: 16px;
}
.bottomb {
  margin-bottom: 60px;
}
</style>

