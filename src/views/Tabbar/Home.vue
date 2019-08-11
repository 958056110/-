<template>
    <div style = "margin-bottom:50px">
        <!-- 搜索框 -->
        <van-search
         placeholder="搜索/商品/品牌/类别"
          v-model="value"
          background="rgb(255, 255, 255)"
          color="#A5ADBA"
          />
          <!-- 轮播图 -->
         <van-swipe :autoplay="3000">
            <van-swipe-item class = "swiperimg"
            v-for="(image, index) in images" 
            :key="index"
            height="200px"
            width="300px"
            >
            <img v-lazy="image" />
            </van-swipe-item>
        </van-swipe>
        <!-- 宫格 -->
        <van-grid>
        <van-grid-item
            v-for="(k,index) in conlist"
            @click="navTo"
            :key="index"
            :icon="k.icon"
            :text="k.name"
        />
        </van-grid>
        <!-- 商品卡片 -->
        <div class = "conlists">
            <div class = "conlistTop conTop">
                <p class = "hot">火热拼购</p>
                <b class = "more">更多></b>
            </div>
            <van-swipe  indicator-color="#999" class = "swiperheigt" >
                <van-swipe-item class = "swiperheigt" >
                 <!-- 商品列表 -->
                    <van-list
                    style="margin-bottom:50px"
                    >
                    <!-- 商品卡片 -->
                   <van-card class = "goodcart"
                        v-for="(k,index) in huoyeconlist"
                        :key="index"
                        :price="k.price"
                        :title="k.itemname"
                        :thumb="k.image"
                        :origin-price="k.sigoprice"
                        v-if="index<3"
                    />
                    </van-list>
                </van-swipe-item>
                <van-swipe-item class = "swiperheigt">
                 <!-- 商品列表 -->
                    <van-list
                    style="margin-bottom:50px"
                    >
                    <!-- 商品卡片 -->
                   <van-card class = "goodcart"
                        v-for="(k,index) in huoyeconlist"
                        :key="index"
                        :price="k.price"
                        :title="k.itemname"
                        :thumb="k.image"
                        :origin-price="k.sigoprice"
                        v-if="3<=index&&index<6"
                    />
                    </van-list>
                </van-swipe-item>
                <van-swipe-item class = "swiperheigt">
                 <!-- 商品列表 -->
                    <van-list
                    style="margin-bottom:50px"
                    >
                    <!-- 商品卡片 -->
                   <van-card class = "goodcart"
                        v-for="(k,index) in huoyeconlist"
                        :key="index"
                        :price="k.price"
                        :title="k.itemname"
                        :thumb="k.image"
                        :origin-price="k.sigoprice"
                        v-if="6<=index&&index<9"
                    />
                    </van-list>
                </van-swipe-item>
            </van-swipe>
        </div>
            <!-- 限时优惠 -->
                <section class = "limitsale">
                    <div class = "conlistTop limitshop">
                        <span class = "sale">限时优惠</span>
                            <span class="limitTime">
                                <b>1</b>天
                                <b>23</b>小时
                                <b>45</b>分
                                <b>6</b>秒
                            </span>
                    </div>
                    <div class = "limitUl">
                         <ul class = "limitList">
                            <li class = "limitLi"
                                v-for="(item,index) in caiconlist"
                                :key="index" 
                            >
                                <div>
                                    <div>
                                        <img class = "limitImg" :src="item.ItemImage" alt="">
                                    </div>
                                    <p class = "limitPrice">
                                        ￥<span>{{parseInt(item.SecKillPrice)}}</span>
                                        <span class = "limitZhe">
                                           {{item.Discount}}折
                                        </span>
                                    </p>
                                </div>
                            </li>
                             <!-- <li class = "limitLi">
                                <div>
                                    <div>
                                        <img class = "limitImg" src="https://images.vsigo.cn/Products/contacts/210-210/2019524161246699.jpg" alt="">
                                    </div>
                                    <p class = "limitPrice">
                                        ￥<span>52</span>
                                        <span class = "limitZhe">
                                            4.5折
                                        </span>
                                    </p>
                                </div>
                             </li> -->
                           
                            
                          
                        </ul>
                    </div>
                    <div class = "buy">
                        <p>
                            <span>10件商品  正在抢购</span>
                        </p>
                        <span class="moregood">
                            >
                        </span>
                    </div>
                     
                </section>
               <!-- 最长的商品列表 -->
               <ul>
                   <li>
                        <div class = "fl-row-justy ">
                            <span class = "hotcon">热卖单品</span>
                        </div>
                         <ul class = "goodconList">
                            <li class = "goodsItem" 
                            v-for="(item,index) in hotconlist"
                            :key="index"    
                            >
                                <div>
                                    <div class = "goodsItemimg"><img :src="item.image" alt="">
                                        <img :src="item.ItemImagUrl" alt="">
                                    </div>
                                    <div class = "goodsTitle">{{item.ItemTitle}}</div>
                                    <div class = "contentWrap">
                                        <span class = "price">
                                            <i class = "priceBrand">￥</i>
                                            <i class = "priceInt">{{item.ItemPriceStr}}</i>
                                            <i class = "priceDel">{{item.SigoPrice}}</i>
                                            <i class = "disCountIcon">{{(item.VipLevelDiscount*10).toFixed(1)}}折</i>
                                        </span>
                                    </div>
                                </div>
                            </li>
                           
                         </ul>
                   </li>      
                           <!-- 海淘 -->
                    <li>
                        <div class = "fl-row-justy ">
                            <span class = "hotcon">海淘</span>
                            <b class = "morehot">更多 ></b>
                        </div>
                         <ul class = "goodconList">
                            <li class = "goodsItem"
                            v-for="(item,index) in haitaolist"
                            :key="index" 
                            >
                                <div>
                                    <div class = "goodsItemimg">
                                        <img :src="item.ItemImagUrl" alt="">
                                    </div>
                                    <div class = "goodsTitle">{{item.ItemTitle}}</div>
                                    <div class = "contentWrap">
                                        <span class = "price">
                                            <i class = "priceBrand">￥</i>
                                            <i class = "priceInt">{{item.ItemPriceStr}}</i>
                                            <i class = "priceDel">{{item.SigoPrice}}</i>
                                            <i class = "disCountIcon">{{(item.VipLevelDiscount*10).toFixed(1)}}折</i>
                                        </span>
                                    </div>
                                </div>
                            </li>   
                        </ul>
                    </li>
                           <!-- 隐形眼镜 -->
                    <li>
                        <div class = "fl-row-justy ">
                            <span class = "hotcon">隐形眼镜</span>
                            <b class = "morehot">更多 ></b>
                        </div>
                         <ul class = "goodconList">
                            <li class = "goodsItem"
                            v-for="(item,index) in yinxinglist"
                            :key="index" 
                            >
                                <div>
                                    <div class = "goodsItemimg">
                                        <img :src="item.ItemImagUrl" alt="">
                                    </div>
                                    <div class = "goodsTitle">{{item.ItemTitle}}</div>
                                    <div class = "contentWrap">
                                        <span class = "price">
                                            <i class = "priceBrand">￥</i>
                                            <i class = "priceInt">{{item.ItemPriceStr}}</i>
                                            <i class = "priceDel">{{item.SigoPrice}}</i>
                                            <i class = "disCountIcon">{{(item.VipLevelDiscount*10).toFixed(1)}}折</i>
                                        </span>
                                    </div>
                                </div>
                            </li>   
                        </ul>
                    </li>
                          <!-- 彩色隐形眼镜 -->
                    <li>
                        <div class = "fl-row-justy ">
                            <span class = "hotcon">彩色隐形眼镜</span>
                            <b class = "morehot">更多 ></b>
                        </div>
                         <ul class = "goodconList">
                            <li class = "goodsItem"
                             v-for="(item,index) in meitonglist"
                            :key="index" 
                            >
                                <div>
                                    <div class = "goodsItemimg">
                                        <img :src="item.ItemImagUrl" alt="">
                                    </div>
                                    <div class = "goodsTitle">{{item.ItemTitle}}</div>
                                    <div class = "contentWrap">
                                        <span class = "price">
                                            <i class = "priceBrand">￥</i>
                                            <i class = "priceInt">{{item.ItemPriceStr}}</i>
                                            <i class = "priceDel">{{item.SigoPrice}}</i>
                                            <i class = "disCountIcon">{{(item.VipLevelDiscount*10).toFixed(1)}}折</i>
                                        </span>
                                    </div>
                                </div>
                            </li> 
                        </ul>
                    </li>
                         <!-- 护理用品-->
                    <li>
                        <div class = "fl-row-justy ">
                            <span class = "hotcon">护理用品</span>
                            <b class = "morehot">更多 ></b>
                        </div>
                         <ul class = "goodconList">
                            <li class = "goodsItem"
                             v-for="(item,index) in hulilist"
                            :key="index" 
                            >
                                <div>
                                    <div class = "goodsItemimg">
                                        <img :src="item.ItemImagUrl" alt="">
                                    </div>
                                    <div class = "goodsTitle">{{item.ItemTitle}}</div>
                                    <div class = "contentWrap">
                                        <span class = "price">
                                            <i class = "priceBrand">￥</i>
                                            <i class = "priceInt">{{item.ItemPriceStr}}</i>
                                            <i class = "priceDel">{{item.SigoPrice}}</i>
                                            <i class = "disCountIcon">{{(item.VipLevelDiscount*10).toFixed(1)}}折</i>
                                        </span>
                                    </div>
                                </div>
                            </li>  
                        </ul>
                    </li>
            </ul>
   
               

              
                
    </div>

</template>
<script>
export default {
  data() {
    return {
      value: "",
      images: [
        "https://images.vsigo.cn/ADVP/640-260/2019731234325118.jpg",
        "https://images.vsigo.cn/ADVP/640-260/20198110520323.jpg",
        "https://images.vsigo.cn/ADVP/640-260/201982185523975.jpg",
        "https://images.vsigo.cn/ADVP/640-260/201974103417140.jpg"
      ],
      conlist: [
        {
          icon: "https://m.vsigo.cn/static/img/haitaoIcon.png",
          name: "海淘视客"
        },
        {
          icon: "https://m.vsigo.cn/static/img/eyesIcon.png",
          name: "隐形眼镜"
        },
        {
          icon: "https://m.vsigo.cn/static/img/meitongIocn.png",
          name: "美瞳"
        },
        {
          icon: "https://m.vsigo.cn/static/img/waterIocn.png",
          name: "护理用品"
        },
        {
          icon: "https://m.vsigo.cn/static/img/couponIcon.png",
          name: "我要领券"
        },
        {
          icon: "https://m.vsigo.cn/static/img/benefitsIcon.png",
          name: "邀请有奖"
        },
        {
          icon: "https://m.vsigo.cn/static/img/kefuIcon.png",
          name: "在线客服"
        },
        {
          icon: "https://m.vsigo.cn/static/img/bellIocn.png",
          name: "活动提醒"
        }
      ],
      list: [],
      loading: false,
      finished: false,
      homedatalist: [],
      hotconlist: [],
      haitaolist: [],
      yinxinglist: [],
      meitonglist: [],
      hulilist: [],
      huorelist: [],
      huoyeconlist: [],
      meitongconlist:[],
      caiconlist:[],
    };
  },
  methods: {
    navTo() {
      this.$router.push({
        name: "goodlist"
      });
    }
  },
  async created() {
    let homedatalist = await this.$axios("http://localhost:3001/datalist");
    console.log(homedatalist);
    // console.log(homedatalist.data[0].Data.HotSales)
    // this.homedatalist = homedatalist.data[0].Data.HotSales;
    // 热卖单品
    this.hotconlist = homedatalist.data[0].Data.HotSales;
    // console.log(this.hotconlist);
    // 海淘
    this.haitaolist = homedatalist.data[0].Data.HaiTao;
    // 隐形眼镜
    this.yinxinglist = homedatalist.data[0].Data.Yinxing;
    this.meitonglist = homedatalist.data[0].Data.Meitong;
    this.hulilist = homedatalist.data[0].Data.Huliye;
    let huorelist = await this.$axios("http://localhost:3001/huorelist/");
    // console.log(huorelist);
    this.huoyeconlist = huorelist.data[0].Data;
    // console.log(this.huoyeconlist);
    let meitongconlist = await this.$axios("http://localhost:3001/xianshilist/");
    console.log(meitongconlist);
    this.caiconlist = meitongconlist.data[0].Data;
    console.log(meitongconlist.data[0].Data);
    // 跳转详情
    //    console.log(this.$route.params.id);
    // let liebiaodata = await this.$axios({
    //   method:"post",
    //   url:"http://localhost:3001/detail",
    //   data:this.$qs.stringify({
    //     id:this.$route.params.id
    //   })
    // }).then((res) =>{
    //   console.log(res.data[0].hits.list);
    //   let msg = res.data[0].hits.list;
    //   let m = msg.filter((item)=>{
    //     return item.itemid==this.$route.params.id
    //   })
    // //   console.log(m[0])
    //   this.obj=m[0]
    // })
  },
  computed: {}
};
</script>
<style scoped>
/* 商品卡片 */
.goodcart .price {
  margin-top: 20px;
  margin-bottom: -0.5rem;
}
/* .van-swipe {
  height: 350px;
} */
/* .van-swipe[data-v-23c08874]{
    height: 210px;
} */
.van-card__price {
  margin-top: 18px;
  margin-bottom: -0.5rem;
  font-size: 16px;
  color: #f44;
}
.swiperimg{
    height: 210px;
}
.swiperheigt{
    height: 350px;
}
html {
  font-size: 50px;
}
ul li {
  list-style: none;
}
.swiperimg > img {
  width: 100%;
  height: 200px;
}
.conlists {
  margin: 12px 8px;
  overflow: hidden;
  height: auto;
}
.conlistTop {
  background: rgba(255, 185, 204, 0.32);
  padding: 8px;
}
.conTop {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  font-size: 0.24rem;
  font-weight: 900;
  color: rgb(252, 59, 114);
}
.limitsale {
  box-shadow: rgba(121, 152, 215, 0.2) 0px 4px 20px 0px;
  background: rgb(255, 255, 255);
  border-radius: 6px;
  margin: 12px 8px;
  overflow: hidden;
}
.limitshop {
  display: flex;
}
.sale {
  font-size: 0.24rem;
  font-weight: 900;
  color: rgb(252, 59, 114);
  margin-right: 8px;
  padding-left: 0;
}
.limitTime {
  color: #a5adba;
  font-size: 0.2em;
}
.limitTime > b {
  color: rgb(252, 59, 114);
}
.limitList {
  padding: 4px 0.1rem;
  position: relative;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
  width: 1000px;
}
.limitLi {
  float: left;
  margin: 0 0.1rem 0.12rem 0.1rem;
  border: 1px solid RGBA(23, 43, 77, 0.1);
  border-radius: 6px;
  text-align: center;
  padding: 8px 0.16rem;
  font-size: 0.24rem;
  position: relative;
}
.limitImg {
  width: 75px;
  height: 75px;
}
.limitPrice {
  text-align: left;
  font-size: 0.28rem;
  position: relative;
  color: rgb(255, 81, 108);
  margin-top: 8px;
}
.limitZhe {
  color: rgb(255, 255, 255);
  font-size: 0.2rem;
  position: absolute;
  right: -0.18rem;
  top: 50%;
  transform: translateY(-50%);
  background: rgb(255, 81, 108);
  border-radius: 6px 0px 0px 6px;
  padding: 0px 4px;
}
.limitUl {
  overflow: auto;
  padding-top: 4px;
}
.buy {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  font-size: 0.3rem;
}
.moregood {
  font-size: 20px;
}
.hotList {
  padding: 0 12px 12px 12px;
}
.hotList > span {
  font-size: 0.32rem;
}
.goodsItem {
  width: 172px;
  height: 256px;
  /* flex: 0 0 40.5%; */
  background: #fff;
  border-radius: 6px;
  margin: 4px;
  padding: 2px;
  box-shadow: 0px 6px 20px 0px rgba(121, 152, 215, 0.2);
}
.goodsItemimg {
  background: #f5f4f4;
}
.goodsItemimg > img {
  width: 100%;
  height: 100%;
}
.goodconList {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
}
.priceDel {
  color: #a5adba;
  text-decoration: line-through;
  font-size: 0.24rem;
  margin-left: 8px;
}
.contentWrap i {
  font-style: normal;
}
.price {
  color: #ff516c;
  font-size: 0.3rem;
}
.disCountIcon {
  background: rgba(254, 209, 123, 1);
  border-radius: 6px 0px 0px 6px;
  color: #fff;
  font-size: 0.24rem;
  padding: 0 4px;
  position: absolute;
  right: -0.24rem;
  top: 0;
}
.contentWrap {
  position: relative;
}
.goodsTitle {
  font-size: 12px;
  height: 32px;
  line-height: 1.4;
  width: 100%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  margin: 3px 0;
}
.fl-row-justy {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px 12px 12px;
}
.hotcon {
  color: #a5adba !important;
  font-size: 16px;
}
.morehot {
  color: #a5adba !important;
  font-size: 14px;
}
</style>


