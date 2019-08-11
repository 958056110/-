<template>
    <div class = "concart">
        <div class = "back" @click = "backdeil">
            <img class = "jiantou" src="../../assets/images/back.png" alt="">
        </div>
        <van-tabs v-model="active" color="rgba(252,59,114,0.78)">
            <van-tab title="国内购">
                <div class = "nologin">
                    <span>
                        登录后您的购物车在电脑和微信商城都会同步
                    </span>
                    <span class = "loginbtn" @click = "navTo">
                        登陆
                    </span>
                </div>
                <div class = "emptyCart">
                    <img class = "emptyImage" src="https://cart.m.vsigo.cn/static/images/icon_kgwc@2x.png" alt="">
                    <div>购物车还是空的</div>
                    <div>去挑些中意的商品吧，亲</div>
                    <div class = "linkBtn">
                        <a href="" class = "goIndexBtn">前往首页</a>
                        <a href="" class = "goSerchBtn">去搜索</a>
                    </div>
                </div>
            </van-tab>
            <van-tab title="海淘">
                 <div class = "nologin" v-if = "bool">
                    <span>
                        登录后您的购物车在电脑和微信商城都会同步
                    </span>
                    <span class = "loginbtn" @click = "navTo">
                        登陆
                    </span>
                </div>
                <div class = "concar" v-else>
                    <van-card
                        v-for="(k, index) in concarlist" 
                        :key="index"
                        :price="k.price"
                        desc="无色/-1.25"  
                        
                        :thumb="k.url"
                        >
                        <div slot = "title">
                            <div>{{k.name}}</div>
                            <div class = "del" @click = "del(k.id)">X</div>
                        </div>
                        <div slot="footer">
                            <!-- <van-button size="mini"  @click = "decnum">
                                <b class = "noclick">
                                    <img src="../../assets/images/des.png" alt="" >
                                </b>
                            </van-button> -->
                            <!-- <van-button size="mini">
                                <span class = "num">{{k.num}}</span>
                            </van-button>
                            <van-button size="mini"  @click = "addnum">
                                <b class = "noclick" >
                                    <img src="../../assets/images/add.png" alt="">
                                </b>
                            </van-button> -->
                                <van-stepper v-model="k.num"/>             
                        </div>
                    </van-card>  
                </div>          
            </van-tab>
            </van-tabs>
            <!-- 底部 -->
             <div class = "footernav fl-row-justy">
                    <button class = "fl-row-left" type = "button">
                         <img src="https://cart.m.vsigo.cn/static/images/icon_delete.png" alt="">
                         <span class = "t_gray1">清空购物车</span>
                    </button>
                    <span class = "trueOrder">  
                        默认订单
                        <span>￥</span>
                        <span v-text="total"></span>
                </span>
             </div>
         </div>
</template>
<script>
export default {
  data() {
    return {
      active: 2,
      concarlist: [],
      value: "",
      bool: true
    };
  },
  methods: {
    addnum() {
      console.log("adddd");
      this.num++;
    },
    decnum() {
      if (this.num < 0) {
        this.num = 0;
      } else {
        this.num--;
      }
    },
    backdeil() {
      this.$router.go(-1);
    },
    navTo(){
        console.log(111)
        this.$router.push({
        name: "sign"
      });
    },
    // 删除商品
    async del(id) {
      //   console.log(123)
      let username = localStorage.getItem("username");
      await this.$axios(
        `http://localhost:3001/delcar?username=${username}&id=${id}`
      ).then(res => {
        //   console.log(666);
      });

      let carlist = await this.$axios(
        `http://localhost:3001/shopcar?username=${username}`
      );
      this.concarlist = carlist.data;
      console.log(this.concarlist);
    }
  },
//   渲染商品
  async activated() {
    let username = localStorage.getItem("username");
    if (username) {
      this.bool = false;
    }
    let carlist = await this.$axios(
      `http://localhost:3001/shopcar?username=${username}`
    ).then(res => {
      //   console.log(res);
      this.concarlist = res.data;
      console.log(this.concarlist);
    });
  },
//   结算
  computed:{
     total(){
let price=0
this.concarlist.forEach((item)=>{
price+=Number(item.price)*Number(item.num)
})
return price
}
  }
  

};
</script>
<style scoped>
.concart {
  position: relative;
}
.back {
  z-index: 2;
  position: absolute;
  left: 6px;
  top: 10px;
}
.jiantou {
  width: 16px;
  height: 16px;
}
.nologin {
  width: 100%;
  height: 0.72rem;
  line-height: 0.72rem;
  text-align: center;
  font-size: 0.24rem;
  color: #172b4d;
  background-color: #fff;
  margin-top: 0.88rem;
}
.loginbtn {
  display: inline-block;
  width: 60px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  margin-left: 0.1rem;
  background: rgba(255, 255, 255, 1);
  border-radius: 20px;
  border: 1px solid rgba(252, 59, 114, 1);
  color: #fc3b72;
  box-sizing: border-box;
}
.emptyCart {
  text-align: center;
  color: rgba(23, 43, 77, 0.5);
  font-size: 0.26rem;
}
.emptyImage {
  width: 79px;
  height: 79px;
  margin-top: 40px;
  margin-bottom: 20px;
}
.linkBtn {
  margin: 16px 46px;
}
.goIndexBtn {
  display: inline-block;
  width: 132px;
  height: 40px;
  background: linear-gradient(
    90deg,
    rgba(252, 59, 114, 0.78) 0%,
    rgba(252, 59, 114, 1) 100%
  );
  border-radius: 1rem;
  color: white;
  line-height: 40px;
  box-sizing: border-box;
  text-align: center;
}
.goSerchBtn {
  display: inline-block;
  width: 132px;
  height: 40px;
  border-radius: 1rem;
  border: 2px solid #fc3b72;
  color: #fc3b72;
  line-height: 40px;
  margin-left: 10px;
  box-sizing: border-box;
  text-align: center;
}
.footernav {
  left: 0;
  right: 0;
  position: fixed;
  bottom: 30px;
  height: 70px;
  padding: 8px;
  background: rgba(255, 255, 255, 1);
}
button,
textarea {
  outline: none;
  border: none;
  background: transparent;
}
.trueOrder {
  display: inline-block;
  width: 180px;
  height: 40px;
  background: linear-gradient(
    90deg,
    rgba(252, 59, 114, 0.78) 0%,
    rgba(252, 59, 114, 1) 100%
  );
  border-radius: 1rem;
  font-size: 14px;
  line-height: 40px;
  color: white;
  text-align: center;
}
.fl-row-justy {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
}
.van-card__desc {
  max-height: 73px;
  color: #7d7e80;
  background: rgba(165, 173, 186, 0.12);
  display: inline;
  width: 80px;
  margin: 16px 0;
}
.van-card__title {
  font-size: 16px;
  margin-top: 9px;
}
.van-card {
  background: #fff;
}
.van-button {
  background: #fafafa;
}
.del {
  position: absolute;
  right: 2px;
  top: 2px;
  z-index: 100;
}
.title {
  position: relative;
}
</style>

