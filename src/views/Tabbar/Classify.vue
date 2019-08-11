<template>
    <div>
        <div class = "fenlei">
             <van-search class = "fl-row-left" placeholder="搜索/商品/品牌/类别" v-model="value"
              background="#fff"
         />
             <van-tabs v-model="activeName"
                title-active-color="red"
                line-height="1px"
              >
                <van-tab title="隐形眼镜" name="a">
                     <div class = "Categoryitem">
                        <section class = "sec">
                           <p>
                               <i class = "t_red">.</i>
                               热销品牌
                           </p>
                           <ul class = "fl-row">
                               <li
                               v-for="(item,index) in rexiaolist "
                               :key="index"
                               >
                                   <a href="">{{item.Name}}</a>
                               </li>
                           </ul>
                        </section>
                     </div>
                     <div class = "Categoryitem">
                        <section class = "sec">
                           <p>
                               <i class = "t_red">.</i>
                               抛弃周期
                           </p>
                           <ul class = "fl-row">
                               <li
                               v-for="(item,index) in renqilist"
                               :key="index"
                               >
                                   <a href="">{{item.Name}}</a>
                               </li>
                           </ul>
                        </section>
                     </div>
                     <div class = "Categoryitem">
                        <section class = "sec">
                           <p>
                               <i class = "t_red">.</i>
                               人气系列
                           </p>
                           <ul class = "fl-row">
                               <li
                               v-for="(item,index) in paoqilist"
                               :key="index"
                               >
                                   <a href="">{{item.Name}}</a>
                               </li>
                           </ul>
                        </section>
                     </div>
                     <div class = "Categoryitem">
                        <section class = "sec">
                           <p>
                               <i class = "t_red">.</i>
                               佩戴场合
                           </p>
                           <ul class = "fl-row">
                               <li
                               v-for="(item,index) in peidailist"
                               :key="index"
                               >
                                   <a href="">{{item.Name}}</a>
                               </li>
                           </ul>
                        </section>
                     </div>
                     <div class = "Categoryitem">
                        <section class = "sec">
                           <p>
                               <i class = "t_red">.</i>
                               镜片特点
                           </p>
                           <ul class = "fl-row">
                               <li
                               v-for="(item,index) in jingpianlist"
                               :key="index"
                               >
                                   <a href="">{{item.Name}}</a>
                               </li>
                           </ul>
                        </section>
                     </div>
                     <div class = "bottomWrap fl-row-center">
                         <span class = "bottomTxt">
                             更多隐形银镜
                         </span>
                     </div>
                 </van-tab>
                <van-tab title="彩色隐形眼镜" name="b">
                     <div class = "Categoryitem">
                        <section class = "sec">
                           <p>
                               <i class = "t_red">.</i>
                               热销品牌
                           </p>
                           <ul class = "fl-row">
                               <li
                               v-for="(item,index) in cairexiaolist "
                               :key="index"
                               >
                                   <a href="">{{item.Name}}</a>
                               </li>
                           </ul>
                        </section>
                     </div>
                     <div class = "Categoryitem">
                        <section class = "sec">
                           <p>
                               <i class = "t_red">.</i>
                               人气系列
                           </p>
                           <ul class = "fl-row">
                               <li
                               v-for="(item,index) in cairenqilist "
                               :key="index"
                               >
                                   <a href="">{{item.Name}}</a>
                               </li>
                           </ul>
                        </section>
                     </div>
                     <div class = "Categoryitem">
                        <section class = "sec">
                           <p>
                               <i class = "t_red">.</i>
                               抛弃周期
                           </p>
                           <ul class = "fl-row">
                               <li
                               v-for="(item,index) in caipaoqilist"
                               :key="index"
                               >
                                   <a href="">{{item.Name}}</a>
                               </li>
                           </ul>
                        </section>
                     </div>
                      <div class = "Categoryitem">
                        <section class = "sec">
                           <p>
                               <i class = "t_red">.</i>
                               花色
                           </p>
                           <ul class = "fl-row">
                               <li
                               v-for="(item,index) in caihuaselist"
                               :key="index"
                               >
                                   <a href="">{{item.Name}}</a>
                               </li>
                           </ul>
                        </section>
                     </div>
                     <div class = "bottomWrap fl-row-center">
                         <span class = "bottomTxt">
                             更多彩色隐形银镜
                         </span>
                     </div>
                </van-tab>
                <van-tab title="护理用品" name="c">
                    <div class = "Categoryitem">
                        <section class = "sec">
                           <p>
                               <i class = "t_red">.</i>
                               护理液
                           </p>
                           <ul class = "fl-row">
                               <li
                               v-for="(item,index) in huliyelist"
                               :key="index"
                               >
                                   <a href="">{{item.Name}}</a>
                               </li>
                           </ul>
                        </section>
                    </div>
                    <div class = "Categoryitem">
                        <section class = "sec">
                           <p>
                               <i class = "t_red">.</i>
                               RGP硬镜护理
                           </p>
                           <ul class = "fl-row">
                               <li
                               v-for="(item,index) in yingjinglist"
                               :key="index"
                               >
                                   <a href="">{{item.Name}}</a>
                               </li>
                           </ul>
                        </section>
                    </div>
                    <div class = "Categoryitem">
                        <section class = "sec">
                           <p>
                               <i class = "t_red">.</i>
                               眼部洗眼液
                           </p>
                           <ul class = "fl-row">
                               <li
                               v-for="(item,index) in xiyanyelist"
                               :key="index"
                               >
                                   <a href="">{{item.Name}}</a>
                               </li>
                           </ul>
                        </section>
                    </div>
                    <div class = "Categoryitem">
                        <section class = "sec">
                           <p>
                               <i class = "t_red">.</i>
                               润眼夜
                           </p>
                           <ul class = "fl-row">
                               <li
                               v-for="(item,index) in runyanyelist"
                               :key="index"
                               >
                                   <a href="">{{item.Name}}</a>
                               </li>
                           </ul>
                        </section>
                    </div>
                    <div class = "Categoryitem">
                        <section class = "sec">
                           <p>
                               <i class = "t_red">.</i>
                               伴侣盒
                           </p>
                           <ul class = "fl-row">
                               <li
                               v-for="(item,index) in banlvhelist"
                               :key="index"
                               >
                                   <a href="">{{item.Name}}</a>
                               </li>
                           </ul>
                        </section>
                    </div>
                    <div class = "Categoryitem">
                        <section class = "sec">
                           <p>
                               <i class = "t_red">.</i>
                               人气搜索
                           </p>
                           <ul class = "fl-row">
                               <li
                               v-for="(item,index) in renqisousuolist"
                               :key="index"
                               >
                                   <a href="">{{item.Name}}</a>
                               </li>
                           </ul>
                        </section>
                    </div>
                    <div class = "bottomWrap fl-row-center">
                         <span class = "bottomTxt">
                             更多护理用品
                         </span>
                     </div>

                </van-tab>
            </van-tabs>
            
        </div>
       
    </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
      activeName: "a",
      hotsalelist: [],
      rexiaolist: null,
      renqilist:null,
      paoqilist:null,
      peidailist:null,
      jingpianlist:null,
      cairexiaolist:null,
      cairenqilist:null,
      caipaoqilist:null,
      caihuaselist:null,
      huliyelist:null,
      yingjinglist:null,
      xiyanyelist:null,
      runyanyelist:null,
      banlvhelist:null,
      renqisousuolist:null,
    };
  },
  async created() {
    let hotsalelist = await this.$axios("http://localhost:3001/classifylist");
    console.log(hotsalelist)
    // console.log(hotsalelist.data[0].Data[0].ChildList[0].ChildList);

    this.rexiaolist = hotsalelist.data[0].Data[0].ChildList[0].ChildList;
    // console.log(this.rexiaolist);
    this.renqilist = hotsalelist.data[0].Data[0].ChildList[1].ChildList;
    // console.log(this.renqilist)
    this.paoqilist = hotsalelist.data[0].Data[0].ChildList[2].ChildList;
    this.peidailist = hotsalelist.data[0].Data[0].ChildList[3].ChildList;
    this.jingpianlist = hotsalelist.data[0].Data[0].ChildList[4].ChildList;
    // 彩色眼镜
    this.cairexiaolist = hotsalelist.data[0].Data[1].ChildList[0].ChildList;
    this.cairenqilist = hotsalelist.data[0].Data[1].ChildList[1].ChildList;
    this.caipaoqilist = hotsalelist.data[0].Data[1].ChildList[2].ChildList;
    this.caihuaselist = hotsalelist.data[0].Data[1].ChildList[3].ChildList;
    // 护理液
    this.huliyelist = hotsalelist.data[0].Data[2].ChildList[0].ChildList;
    this.yingjinglist = hotsalelist.data[0].Data[2].ChildList[1].ChildList;
    this.xiyanyelist =  hotsalelist.data[0].Data[2].ChildList[2].ChildList;
    this.runyanyelist = hotsalelist.data[0].Data[2].ChildList[3].ChildList;
    this.banlvhelist = hotsalelist.data[0].Data[2].ChildList[4].ChildList;
    this.renqisousuolist = hotsalelist.data[0].Data[2].ChildList[5].ChildList;

  }
};
</script>
<style scoped>
.fenlei{
    padding-bottom: 80px;
}
/* .van-search{
    position: fixed;
    top: 4px;
    left: 0;
    right: 0;
    background: #fff;
    padding: 12px;
    height: 40px;
} */
.fl-row-left{
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: flex-start;
}
/* .van-tabs{
    position: fixed;
    top: 40px;
    left: 0;
    right: 0;
    z-index: 1;
    background: #fff;
} */
.sec {
  padding: 0 12px;
  background: #fff;
  margin: 12px 0;
  box-shadow: 0px 4px 20px 0px rgba(121, 152, 215, 0.2);
}
.fl-row {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
}
.sec p {
  color: #a5adba;
  font-size: 0.24rem;
}
.t_red {
  vertical-align: 3px;
  font-size: 24px;
  color: #fc3b72 !important;
}
.sec li {
  background: #f4f5f6;
  border-radius: 0.8rem;
  padding: 0.3rem 0.88rem;
  font-size: 0.3rem;
  margin-right: 0.24rem;
  margin-bottom: 0.24rem;
}
.sec li a{
    text-decoration: none;
    color: #000;
}
.bottomWrap{
    text-align: center;
    position: fixed;
    bottom: 40px;
    left: 0;
    right: 0;
    height: 60px;
}
.fl-row-center{
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
}
.bottomTxt{
    text-align: center;
    border-radius: .4rem;
    padding: 0.16rem .32rem;
    font-size: .24rem;
    color: #A5ADBA;
    background: #fff;
    border: 1px solid rgba(244,245,246,1);
}

</style>

