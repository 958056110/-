<template>
  <div>
      <div class = "detail">
         <div class = "download">
             <div class = "downloadBar">
                  <div :class = "[isok?'bar fl-row-justy':'bar fl-row-justy barfix']" style="position: fixed; left: 0px; right: 0px; z-index: 2; top: 0px; transition: all 0.3s ease 0s;">
                     <section class = "bar_l fl-row-left">
                         <img src="https://m.vsigo.cn/static/img/logosmall.png" alt="">
                         <div class = "welcom">
                            <p class = " t_white title">
                             欢迎
                            <span class = "t_black dan">
                              使用App下单
                            </span>
                            </p>
                            <p class = "youhui t_white">更优惠更方便</p>
                         </div>
                     </section>
                      <button type = "button" class = "lijidowmload t_red_appbar">
                         立即下载
                      </button>
                  </div>
             </div>
             <span class = "back backWrap" style = "background-color: rgba(0, 0, 0, 0.3); top: 58px;transition: all 0.3s ease 0s;">
                 <i @click="back">
                   <img class = "backimg" src="../assets/images/back.png" alt="">
                 </i>
             </span>
         </div>
         <div class = "topBar fl-row-center" style="display: none; opacity: 1;">
            <ul class = "fl-row-justy">
              <li class = "">
                <a href="" class = "lia">商品</a> 
              </li>
              <li class = "">
                 <a href="" class = "lia">评价</a>
              </li>
              <li class = "">
                 <a href="" class = "lia">详情</a>
              </li>
              <li class = "">
                 <a href="" class = "lia">推荐</a>
              </li>
            </ul>
         </div>
         <div class = "banner">
           <van-swipe :autoplay="3000" indicator-color="white">
              <van-swipe-item>
                 <img class = "swiperimg" :src="obj.image" alt="">
              </van-swipe-item>
              <van-swipe-item>
                 <img class = "swiperimg" :src="obj.image" alt="">
              </van-swipe-item> 
          </van-swipe>
         </div>
         <div class = "conprice priceWrap">
             <div class = "fl-row-justy priceWrap">
                 <section class = "fl-row-left goodprice">
                    <p class = "priceCons">
                       <span class = "price">
                          <i>￥</i>
                           {{obj.price.min}}
                       </span>
                       <b class = "originPrice">
                        {{obj.price.sigo}}
                       </b>
                       <b class = "discount">
                         直降
                       </b>
                    </p>
                 </section>
             </div>
         </div>
         <div class = "pageContents">
            <div class = "pageBar">
               <section class = "haitao">
                  <img class = "shopimg" src="https://m.vsigo.cn/static/img/icon_ht.png" alt="" style="position: relative; top: -3px; display: inline-block;">
                  {{obj.itemname}}
              </section>
              <section class = "subTitle">
                【因仓库系统升级，海淘商品发货时间延长至5-7天，请您谅解】抵御紫外线侵害，LACREON水凝科技，让你的双眼水润舒适一整天
              </section>
              <section class = "bigbao">
                  <a href="" style="color: rgb(48, 137, 246);" class = "biglink">
                    90片海淘量贩装，大包装更划算！
                  </a>
              </section>
              <section class = "problems fl-row-justy strOther">
                 <span>
                    常见问题
                 </span>
                 <span>
                   100%好评
                 </span>
              </section>  
            </div>
            <div class = "pageBar">
               <div data-sort = "haitao" class = "fl-row-justy suifei">
                  <p class = "baosui fl-row-left"> 
                     <span class = "t_gray3">税费</span>
                     <span class = "activityWrap fl-row-left">
                        <span class = "tag">
                           包税
                        </span>
                        <span class = "consui">
                          该商品税费由视客承担
                        </span>
                     </span>
                  </p>
               </div>
               <div data-sort = "haitao" class = "fl-row-justy suifei">
                  <p class = "baosui fl-row-left"> 
                     <span class = "t_gray3">促销</span>
                     <span class = "activityWrap fl-row-left">
                        <span class = "tag">
                           减
                        </span>
                        <span class = "consui">
                         海淘专享 | 购物车满199减30元
                        </span>
                     </span>
                  </p>
               </div>
               <div class = "shopno fl-row-left">
                  <span style = "margin-right:10px">
                      <img src="../assets/images/gou.png" alt="">
                      <b>满299包邮</b>
                  </span>
                  <span style = "margin-right:10px">
                      <img src="../assets/images/gou.png" alt="">
                      <b>正品保障</b>
                  </span>
                  <span style = "margin-right:10px">
                      <img src="../assets/images/gou.png" alt="">
                      <b>官方资质</b>
                  </span>
                  <span style = "margin-right:10px">
                      <img src="../assets/images/gou.png" alt="">
                      <b>海外直来</b>
                  </span>             
               </div>
            </div>
            <div class = "pageBar">
               <div id ="paman" class = "fl-row-justy canshu" >
                  <p data-sort = "param" class = "fl-row-left">
                      <span data-sort = "param" class = "t_black canshu_l">参数</span>
                      <span data-sort = "param" class = "t_black_opacity">
                        品牌、材质、含水量等
                      </span>  
                  </p>
                  <i>
                    <img src="../assets/images/go.png" alt="">
                  </i>
               </div>  
               <div id ="paman" class = "fl-row-justy canshu" >
                  <p data-sort = "param" class = "fl-row-left">
                      <span data-sort = "param" class = "t_black canshu_l">左眼</span>
                      <span data-sort = "param" class = "t_black_opacity">
                        请选择
                      </span>
                     
                  </p>
                  <i @click="showPopup">
                    <img src="../assets/images/go.png" alt="">
                  </i>
                    <!-- 弹出层   -->
                       <van-popup
                            v-model="show"
                            position="bottom"
                            :style="{ height: '533px' }"
                          >
                          <div class = "modalBar">
                             <div class = "cart">
                               <van-card
                             
                                  :price="obj.price.min"
                                  background = "#fff"
                                  :thumb="obj.image"
                                /><div slot="tags">
                                  <span class = "condushu" v-text = "'度数：'+ connum">度数：-1.50</span>
                                </div>
                                <i class = "quxiao" @click = "none">
                                  <img src="../assets/images/quxiao.png" alt="">
                                </i>
                             </div>
                             <div class = "modalContent">
                                <section class = "skuDegree">
                                   <p>度数</p>
                                   <div>
                                      <ul class = "dushulist">
                                        <li class = "dushu fl-row-center"
                                         @click = "choosecon(k.con,index)"
                                          v-for="(k, index) in datalist" 
                                          :key="index"
                                        ><span :class = "{'inf':true,'active':index==conindex}" >{{k.con}}</span> 
                                        </li>
                                        
                                      </ul>
                                   </div>
                                </section>
                             </div>
                             <div class = "modalFooter fl-row-justy">
                                 <p>
                                   <span>数量:</span>
                                   <b class = "noclick" @click = "decnum">
                                      <img src="../assets/images/des.png" alt="">
                                   </b>
                                   <span class = "num" v-text = "num">1</span>
                                   <b class = "noclick" @click = "addnum">
                                      <img src="../assets/images/add.png" alt="">
                                   </b>
                                 </p>
                                 <button type = "button" @click = "addshopcar">
                                    加入购物车
                                 </button>
                             </div>
                          </div>

                       </van-popup>
               </div>
               <div id ="paman" class = "fl-row-justy canshu" >
                  <p data-sort = "param" class = "fl-row-left">
                      <span data-sort = "param" class = "t_black canshu_l">右眼</span>
                      <span data-sort = "param" class = "t_black_opacity">
                        请选择
                      </span>  
                  </p>
                  <i @click="showPopup">
                    <img src="../assets/images/go.png" alt="">
                  </i>
               </div>
               <div class = "fl-row-justy strOther">
                  <span data-sort = "degree" class = "t_gray3 degree">
                     不知道如何选择度数？
                  </span>
                  <span data-sort = "explain" class = "t_gray3 degree">
                     计量单位说明
                  </span>
               </div>
            </div>
            <div class = "pageBar">
              <section>
                 <div class = "fl-row-justy barTop">
                   <p>
                     <i class = "topTips">
                       
                     </i>
                     <span class = "t_black" style = "margin-right: 0.32rem;">
                        评价（14）
                     </span>
                     <span class = "t_gray1">
                       好评度
                        <span class = "t_red">
                        100%
                        </span>
                     </span>
                     
                   </p>
                   <span class = "t_red fl-row-justy">
                       查看全部
                       <img src="../assets/images/go.png" alt="">
                     </span>
                 </div>
                 <section class = "CommentItem">
                    <ul class = "commentList">
                       <li class = "onepx_bottom">
                          <p class = "fl-row-justy">
                            <span>
                              ***5251***
                            </span>
                          </p>
                          <p class = "contents">真好</p>
                       </li>
                       <li class = "onepx_bottom">
                          <p class = "fl-row-justy">
                            <span>
                              ***5251***
                            </span>
                          </p>
                          <p class = "contents">真好</p>
                       </li>
                    </ul>
                 </section>
              </section>
            </div>
            <div class = "pageBar pageDetail">
              <div class = "fl-row-justy barTop">
                    <p>
                      <i class = "topTips">   
                      </i>
                      <span class = " t_black">图文详情</span>
                   </p>
              </div>
              <p class = "tuwen">
                <img src="https://images.vsigo.cn/Contents/201882817512387149.jpg" alt="">
                <img src="https://images.vsigo.cn/Contents/201882817512956546.jpg" alt="">
                <img src="https://images.vsigo.cn/Contents/201882817513435562.jpg" alt="">
                <img src="https://images.vsigo.cn/Contents/201882817513872325.jpg" alt="">
                <img src="https://images.vsigo.cn/Contents/201882817514315360.jpg" alt="">
                <img src="https://images.vsigo.cn//Item/2019531104810788.jpg" alt="">
                <img src="https://images.vsigo.cn/Contents/20188281751521483.jpg" alt="">
                <img src="https://images.vsigo.cn/Contents/201882817515616443.jpg" alt="">
                <img src="https://images.vsigo.cn/Contents/20188281752067238.jpg" alt="">
                <img src="https://images.vsigo.cn//Item/2019724152036347.jpg" alt="">
              </p>            
            </div>
         </div>
         <footer class = "shopfoot">
            <div class = " btnWrap fl-row-justy">
               <p class = "fl-row-justy shopfoot_l">
                   <span class= "fl-column-center">
                      <i>
                        <img src="../assets/images/kefu.png" alt="">
                      </i>
                      <b class = "shopbottom">客服</b>
                   </span>
                    <span class= "fl-column-center">
                      <i>
                        <img src="../assets/images/shoucang.png" alt="">
                      </i>
                      <b class = "shopbottom">收藏</b>
                   </span>
                    <span class= "fl-column-center" @click = "toshopcar">
                      <i>
                        <img src="../assets/images/shopcar.png" alt="">
                      </i>
                      <b class = "shopbottom">购物车</b>
                   </span>
               </p>
               <p class = "shopfoot_r">
                  <button data-sort = "detail" type = "button" class = "toshopcart buy" @click = "showPopup">
                     加入购物车
                  </button>
                  <button data-sort = "detail" type = "button" class = "topay buy" >
                     去结算
                  </button>
               </p>
            </div>
         </footer>
      </div>
  </div>
</template> 
<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      show: false,
      isok: true,
      obj: {},
      dataobj: {},
      num: "1",
      conindex: 0,
      connum: "-1.5",
      datalist: [
        { con: 1.25 },
        { con: 1.5 },
        { con: 1.75 },
        { con: 1.8 },
        { con: 1.85 }
      ]
    };
  },

  methods: {
    showPopup() {
      this.show = true;
    },
    back() {
      this.$router.push({
        name: "goodlist"
      });
    },
    // 进入购物车
     toshopcar(){
        this.$router.push({
        name:'cart'
      })
     },
    // 加入购物车
    // 数量增加
    addnum() {
      this.num++;
    },
    decnum() {
      if (this.num < 0) {
        this.num = 0;
      } else {
        this.num--;
      }
    },
    choosecon(cc, index) {
      this.connum = cc;
      this.conindex = index;
    },
    none() {
      this.show = flase;
    },
    async addshopcar() {
      alert("加入购物车成功 ");
      this.show = false;
     
      console.log(this.$route.params.id);
      let conID = this.$route.params.id;
      let meitongnum = this.num;
      let username = localStorage.getItem("username");
      //  console.log(username)
      if (username) {
        this.dataobj = {
          username,
          id: this.obj.itemid,
          num: ''+this.num,
          url: this.obj.image,
          price: this.obj.price.min,
          name: this.obj.itemname
        };
        // console.log(this.dataobj)
        let cardata = await this.$axios({ 
          method: "post",   
          url: "http://localhost:3001/cart",
            
          data: this.$qs.stringify(this.dataobj)
          
        }).then(res => {
          console.log(res);
        });
      }
    }
  },
  activated() {
    // console.log(111);
    window.onscroll = () => {
      // console.log(111);
      if (window.scrollY >= 54) {
        this.isok = !this.isok;
      }
    };
  },
  async activated() {
    // console.log(this.$route.params.id);
    let liebiaodata = await this.$axios({
      method: "post",
      url: "http://localhost:3001/detail",
      data: this.$qs.stringify({
        id: this.$route.params.id
      })
    }).then(res => {
      // console.log(res.data[0].hits.list);
      let msg = res.data[0].hits.list;
      let m = msg.filter(item => {
        return item.itemid == this.$route.params.id;
      });
      console.log(m[0]);
      this.obj = m[0];
    });
  }
};
</script>

<style scoped>
.downloadBar {
  transition: 0.5s all;
  background: linear-gradient(
    90deg,
    rgba(255, 119, 166, 1) 0%,
    rgba(252, 166, 124, 1) 49%,
    rgba(225, 143, 234, 1) 100%
  );
  display: block;
}

.bar {
  padding: 6px 20px;
  transition: 0.5s all;
  background: linear-gradient(
    90deg,
    rgba(255, 119, 166, 1) 0%,
    rgba(252, 166, 124, 1) 49%,
    rgba(225, 143, 234, 1) 100%
  );
  display: block;
}
.fl-row-center {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
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
.bar_l > img {
  width: 35px;
  height: 35px;
  margin-right: 12px;
}
.title {
  font-size: 15px;
  margin-bottom: 6px;
}
.t_white {
  color: #fff !important;
}
.t_black {
  color: #172b4d !important;
}
body p {
  margin: 0;
  padding: 0px;
}
.dan {
  font-size: 15px;
}
.youhui {
  font-size: 10px;
}
.lijidowmload {
  font-size: 12px;
  background: rgba(255, 220, 113, 1);
  border-radius: 13px;
  padding: 5px 14px;
  border: none;
}
.t_red_appbar {
  color: #ff3771;
}
.backWrap {
  position: fixed;
  z-index: 2;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  top: 58px;
  left: 12px;
  cursor: pointer;
}
.back i {
  text-align: center;
}
.backimg {
  width: 12px;
  height: 12px;
}
.topBar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
  padding: 0 12px;
  /* display: none; */
  /* opacity: 0; */
  -webkit-transition: 1s all;
  transition: 1s all;
  z-index: 2;
}
.fl-row-justy {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
}
.topBar ul {
  width: 60%;
}
.lia {
  font-size: 0.26rem;
  height: 100%;
  display: block;
  padding: 12px 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: #000;
}
.swiperimg {
  width: 375px;
  height: 375px;
}
.conprice {
  height: 60px;
  color: rgb(255, 255, 255);
}
.goodprice {
  background: linear-gradient(
    90deg,
    rgba(140, 42, 223, 0.78) 0%,
    rgba(140, 42, 223, 1) 100%
  );
  flex: 2;
  height: 60px;
}
.priceCons {
  padding-left: 8px;
}
.price {
  font-size: 26px;
  color: #fff;
  margin-right: 12px;
  display: inline-block;
}
.price i {
  color: #fff;
  font-size: 0.32rem;
}
.originPrice {
  font-size: 0.24rem;
  text-decoration: line-through;
  color: #fff;
}
.discount {
  background-color: RGBA(69, 69, 69, 0.1);
  color: #fff;
  padding: 2px 4px;
  border-radius: 4px;
  margin-left: 4px;
  font-size: 10px;
}
.pageBar {
  margin-bottom: 8px;
  font-size: 0.26rem;
  padding: 12px 12px 0px 12px;
  background: rgb(255, 255, 255);
}
.haitao {
  color: rgb(23, 43, 77);
  font-size: 16px;
  padding-bottom: 6px;
}
.haitao > img {
  width: 30px;
  height: 13px;
}
.subTitle {
  color: rgb(94, 108, 132);
  font-size: 0.24rem;
  padding-bottom: 6px;
}
.bigbao {
  padding-bottom: 6px;
}
.biglink {
  font-size: 0.24rem;
}
.problems {
  font-size: 0.2rem;
  color: rgb(165, 173, 186);
}
.suifei {
  padding-bottom: 0.2rem;
  height: 30px;
}
.t_gray3 {
  color: #7e899d !important;
  margin-right: 0.32rem;
}
.tag {
  font-size: 0.2rem;
  color: rgb(252, 59, 114);
  margin-right: 12px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(252, 59, 114);
  border-image: initial;
  border-radius: 12px;
  padding: 0.02rem 0.16rem;
}
.consui {
  color: rgb(126, 137, 157);
  font-size: 0.24rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
  overflow: hidden;
}
.shopno {
  font-size: 0.22rem;
  color: rgb(165, 173, 186);
}
.canshu {
  padding-bottom: 0.2rem;
  height: 30px;
}
.t_black_opacity {
  color: rgba(23, 43, 77, 0.5) !important;
}
.canshu_l {
  margin-right: 10px;
}
.strOther {
  font-size: 0.2rem;
  color: #a5adba;
}
.degree {
  font-size: 0.2rem;
}
.t_red {
  color: #fc3b72 !important;
}
.barTop {
  padding-bottom: 0.2rem;
  height: 30px;
}

.barTop .topTips {
  width: 2px;
  height: 14px;
  background-color: #ff516c;
  display: inline-block;
  vertical-align: -2px;
  margin-right: 4px;
}
.CommentItem {
}
.commentList {
  overflow: hidden;
}
.onepx_bottom {
  padding: 10px 0;
  position: relative;
}
.commentList li p {
  font-size: 0.24rem;
}
.tuwen > img {
  width: 350px;
  height: 133px;
}
.van-card__price {
  font-size: 18px;
}
.cart {
  position: relative;
}
.quxiao {
  position: absolute;
  top: 6px;
  right: 6px;
}
.modalContent {
  /* padding: .48rem; */
  overflow: scroll;
  /* position: absolute; */
  top: 2.1rem;
  left: 0;
  right: 0;
  bottom: 64px;
  /* height: 5rem; */
  /* padding-top: 20px; */
}
.modalContent p {
  margin: 16px 12px;
  font-size: 0.26rem;
}
.dushulist {
}
.dushu {
  float: left;
  margin: 0 0.12rem 0.24rem;
  font-size: 13px;
  color: rgba(23, 43, 77, 1);
  text-align: center;
  padding: 6px 10px;
  border-radius: 16px;
  box-sizing: border-box;
  background: rgba(182, 189, 199, 0.12);
}
.modalFooter {
  padding: 0;
  /* padding-top: 12px; */
  position: absolute;
  bottom: 12px;
  left: 10px;
  right: 10px;
  height: 40px;
}
.modalFooter b {
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  font-size: 14px;
  color: rgba(23, 43, 77, 1);
  display: inline-block;
  background: RGBA(246, 247, 248, 1);
}
.num {
  height: 30px;
  text-align: center;
  line-height: 30px;
  font-size: 14px;
  color: rgba(23, 43, 77, 1);
  display: inline-block;
  background: RGBA(246, 247, 248, 1);
  width: 38px;
  margin: 0 1px;
}
.skumodalWrap .modalFooter {
  flex: 1 1 50%;
}
.modalFooter button {
  border-radius: 30px;
  color: #fff;
  background: linear-gradient(
    90deg,
    rgba(252, 59, 114, 0.78) 0%,
    rgba(252, 59, 114, 1) 100%
  );
  box-shadow: 0px 4px 20px 0px rgba(121, 152, 215, 0.2);
  padding: 10px;
  font-size: 0.28rem;
  border: none;
}
.shopfoot {
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background: rgb(255, 255, 255);
}
.btnWrap {
  padding: 8px 8px;
}
.fl-column-center {
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
}
.shopbottom {
  font-size: 12px;
}
.shopfoot_l {
  flex: 0 1 38%;
}
.shopfoot_r {
  flex: 1 0 50%;
  border-radius: 16px;
}
.buy {
  font-size: 0.28rem;
  width: 50%;
  text-align: center;
  color: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(252, 59, 114, 0.78) 0%,
    rgb(252, 59, 114) 100%
  );
  padding: 0.2rem 0px;
  border: none;
}
.toshopcart {
  border-radius: 2.4rem 0px 0px 2.4rem;
}
.topay {
  border-radius: 0px 2.4rem 2.4rem 0px;
}
.van-card__price {
  margin-top: 80px;
}
.van-card__desc {
  margin-top: 60px;
}
.van-card {
  background: #fff;
}
.condushu {
  margin-left: 100px;
}
.active {
  border-color: rgb(252, 59, 114);
  color: rgb(252, 59, 114);
}
</style>

