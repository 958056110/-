<template>
    <div>
        <div class = "mine">
            <div class = "head">
               <img src="https://my.m.vsigo.cn/static/images/btn_SZ.png" alt="" class = "set" @click = "logout">
            </div>
            <div class = "headerFirst">
                <div>
                    <img src="https://my.m.vsigo.cn/static/images/iocn_tx.png" alt="" class = "pic">
                    <div class = "loginbox" @click = "navTo">
                        <div class = "jsx-174791156 sigo1" v-if="bool">
                           登陆账号 >
                        </div>
                        <div class = "jsx-174791156 sigo1" v-else>
                           {{username}}
                        </div>
                    </div>
                </div>
            </div>
           
            <div class = "orderList">
                <div class = "order">
                   <span class = "my">我的订单</span>
                    <span class = "all">全部订单></span>
                </div>
                <div class = "wait">
                  <div class = "one">
                        <div class = "waitt">
                            <img src="https://my.m.vsigo.cn/static/images/icon_dfk.png" alt="" class = "picture">
                        </div>
                        <span class = "harvest">待付款</span>
                    </div>
                     <div class = "one">
                        <div class = "waitt">
                            <img src="https://my.m.vsigo.cn/static/images/icon_dfh1@2x.png" alt="" class = "picture">
                        </div>
                        <span class = "harvest">待发货</span>
                    </div>
                     <div class = "one">
                        <div class = "waitt">
                            <img src="https://my.m.vsigo.cn/static/images/icon_dsh.png" style = "width:34px;" alt="" class = "picture">
                        </div>
                        <span class = "harvest">待收货</span>
                    </div>
                    <div class = "one">
                        <div class = "waitt">
                            <img src="https://my.m.vsigo.cn/static/images/icon_dpj.png" alt="" class = "picture">
                        </div>
                        <span class = "harvest">待评价</span>
                    </div>
                    <div class = "one">
                        <div class = "waitt">
                            <img src="https://my.m.vsigo.cn/static/images/icon_sh.png" alt="" class = "picture">
                        </div>
                        <span class = "harvest">售后</span>
                    </div>
                      

                   
                </div>
            </div>
            <div class = "orderList" style = "background: rgba(255,255,255,1);
                  box-shadow: 0px 4px 20px 0px rgba(121,152,215,0.2);border-radius: 12px;margin:20px auto;">
                <div class = "order">
                   <span class = "my">我的拼购</span>
                    <span class = "all">全部></span>
                </div>
                <div class = "wait">
                  <div class = "one">
                        <div class = "waitt">
                            <img src="https://my.m.vsigo.cn/static/images/icon_ktz@2x.png" alt="" class = "picture" style = "width:24px;height:24px">
                        </div>
                        <span class = "harvest">开团中</span>
                    </div>
                     <div class = "one">
                        <div class = "waitt">
                            <img src="https://my.m.vsigo.cn/static/images/icon_ctz@2x.png" alt="" class = "picture"  style = "width:24px;height:24px">
                        </div>
                        <span class = "harvest">参团中</span>
                    </div>
                    
                    <div class = "one">
                        <div class = "waitt">
                            <img src="https://my.m.vsigo.cn/static/images/icon_wcpg@2x.png" alt="" class = "picture"  style = "width:24px;height:24px">
                        </div>
                        <span class = "harvest">完成拼购</span>
                    </div>
                     
                </div>
                <!-- 宫格 -->
                <div class = "three">
                    <van-grid :column-num="3">
                        <van-grid-item
                            v-for="(k,index) in conlist"
                            :key="index"
                            :icon="k.icon"
                            :text="k.name"
                        />
                    </van-grid>
                </div>
                
                      
            </div>
        </div>
    </div>
</template>

<style scoped>
.head {
  background: linear-gradient(
    90deg,
    rgba(252, 59, 114, 0.78) 0%,
    rgba(252, 59, 114, 1) 100%
  );
  width: 100%;
  height: 98px;
}
.set {
  width: 22px;
  height: 22px;
  float: right;
  margin-right: 20px;
  margin-top: 20px;
  cursor: pointer;
}
.headerFirst {
  width: 351px;
  height: 92px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 0.06rem 0.2rem 0 rgba(121, 152, 215, 0.2);
  border-radius: 10px;
  z-index: 10;
  margin: 0 auto;
  margin-top: -0.88rem;
  padding-top: 0.32rem;
  box-sizing: border-box;
  margin-bottom: 0.25rem;
  /* display: none; */
}
.pic {
  width: 60px;
  height: 60px;
  margin-left: 0.38rem;
}
.sigo1 {
  width: 48%;
  position: absolute;
  left: 100px;
  top: 100px;
  font-size: 16px;
  color: rgba(24, 44, 78, 1);
}
.orderList {
  width: 351px;
  height: 137px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 0.06rem 0.2rem 0rem rgba(121, 152, 215, 0.2);
  border-radius: 0.12rem;
  margin-top: 0.53rem;
  margin: 0 auto;
}
.order {
  height: 51px;
  border-bottom: 0.01rem solid rgba(24, 44, 78, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.2rem;
}
.my {
  font-size: 0.26rem;
  font-weight: 400;
  color: rgba(24, 44, 78, 1);
}
.all {
  font-size: 0.24rem;
  font-weight: 400;
  color: rgba(165, 173, 186, 1);
}
.wait {
  display: flex;
  justify-content: space-around;
  text-align: center;
}
.one {
  width: 33.3%;
}
.waitt {
  margin-top: 0.2rem;
}
.picture {
  width: 38px;
  height: 38px;
}
.harvest {
  display: inline-block;
  margin-top: 0.09rem;
  font-size: 0.24rem;
  color: rgba(126, 137, 157, 1);
}
.three {
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 0.06rem 0.2rem 0 rgba(121, 152, 215, 0.2);
  border-radius: 0.12rem;
  margin-bottom: 80px;
}
</style>
<script>
export default {
  data() {
    return {
      value: "",
      bool: true,
      conlist: [
        {
          icon: "https://my.m.vsigo.cn/static/images/icon_wlxx@2x.png",
          name: "物流信息"
        },
        {
          icon: "https://my.m.vsigo.cn/static/images/iocn_shdz@2x.png",
          name: "收货地址"
        },
        {
          icon: "https://my.m.vsigo.cn/static/images/icon_yqyj@2x.png",
          name: "邀请有奖"
        },
        {
          icon: "https://my.m.vsigo.cn/static/images/iocn_hycz@2x.png",
          name: "会员成长"
        },
        {
          icon: "https://my.m.vsigo.cn/static/images/iocn_wdzc@2x.png",
          name: "我的资产"
        },
        {
          icon: "https://my.m.vsigo.cn/static/images/iocn_wdsc@2x.png",
          name: "我的收藏"
        },
        {
          icon: "https://my.m.vsigo.cn/static/images/iocn_xxhz@2x.png",
          name: "消息盒子"
        },
        {
          icon: "https://my.m.vsigo.cn/static/images/icon_DFH@2x.png",
          name: "我的客服"
        },
        {
          icon: "https://my.m.vsigo.cn/static/images/iocn_jgbh@2x.png",
          name: "价格保护"
        }
      ]
    };
  },
  created() {
    let username = localStorage.getItem("username");
    if (username) {
      this.username = username;
      this.bool = false;
    } else {
      this.bool = true;
    }
  },
  methods: {
    logout() {
      localStorage.removeItem("username");
        this.bool = true;
    },
    navTo(){
        this.$router.push({
        name: "sign"
      });
    }
  }
};
</script>

