<template>
    <div>
        <div class = "eyecongood">
            <header class = "PageTop fl-row-center">
                <span @click="toshouye">
                    <i class = "back" >
                       <img src="../assets/images/back.png" alt="">
                    </i>
                    <h2>
                        商品列表
                    </h2>
                </span>
            </header>
            <main class = "lbmain">
                <div class = "title">
                    <ul class = "fl-row-justy">
                        <li>综合</li>
                        <li>
                            <span>价格</span> 
                            <span class = "updown">
                                <i class = "up">
                                    <img src="../assets/images/up.png" alt="">
                                </i>
                                <i class = "down">
                                    <img src="../assets/images/down.png" alt="">
                                </i>
                            </span>     
                        </li>
                        <li>销量</li>
                        <li>筛选</li>
                    </ul>
                </div>
                <div class = "lblist">
                     <ul>
                        <ul class = "goodconList">
                            <li class = "goodsItem"
                             v-for="(item,index) in dataconlist"
                            :key="index"    
                            >
                                <div>
                                    <div class = "goodsItemimg">
                                       <router-link :to="{name: 'detail', params: {id: item.itemid}}"><img :src="item.image" alt="" class = "shopimg"></router-link>
                                        <!-- <router-link to="/detail/1"><img :src="item.image" alt=""></router-link>                                          -->
                                    </div>
                                    <div class = "goodsTitle">{{item.itemname}}</div>
                                    <div class = "contentWrap">
                                        <span class = "price">
                                            <i class = "priceBrand">￥</i>
                                            <i class = "priceInt">{{item.price.min}}</i>
                                            <i class = "priceDel">￥{{item.price.market}}</i>
                                            <i class = "disCountIcon">{{((item.price.max/item.price.sigo)*10).toFixed(1)}}折</i>
                                        </span>
                                    </div>
                                </div>
                            </li>
                           
                         </ul>
                     </ul>
                </div>
            </main>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            liebiaodata:[],
            dataconlist:null,
        }
    },
    async created(){
        let liebiaodata = await this.$axios("http://localhost:3001/liebiaoyelist/");
        console.log(liebiaodata)
        // console.log(liebiaodata.data[0].hits.list);
        this.dataconlist = liebiaodata.data[0].hits.list;
    },
    methods:{
        toshouye(){
            console.log(111)
          this.$router.push({
              name:'home'
          })
        },
        


    }

}
</script>
<style scoped>
.PageTop{
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    z-index: 1;
    height: 20px;
    padding: 12px 10px;
    background: rgb(255, 255, 255);
}
.lbmain{
    padding-top:90px;
    box-shadow: 0px 6px 20px 0px rgba(121, 152, 215, 0.2);
}
.title{
    position: fixed;
    top: 42px;
    left: 0;
    right: 0;
    background: #fff;
    font-size: .26rem;
    z-index: 1;
}
.fl-row-center{
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
.title li {
    flex: 2;
    text-align: center;
    padding: 10px 0;
}
.PageTop h2{
    font-size: 14px;
    font-weight: normal;
}
.back{
    position: absolute;
    cursor: pointer;
    left: 0.6rem;
    top: 50%;
    transform: translateY(-50%);
}
.updown{
    position: relative;
}
.up{
    position:absolute;
    top:-3px;
}
.down{
    position:absolute;
    top:6px;
}
.updown img{
    width: 12px;
    height: 8px;
}

.back>img{
    width: 14px;
    height: 14px;
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
.shopimg{
    width: 180px;
    height: 165px;
}
 
</style>


