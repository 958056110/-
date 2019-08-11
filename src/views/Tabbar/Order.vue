<template>
   <div>
        <van-search placeholder="商品名称/订单编号" v-model="value" background="#fff"/>
        <van-tabs v-model="active">
            <van-tab title="全部">内容 1</van-tab>
            <van-tab title="待付款">内容 2</van-tab>
            <van-tab title="待发货">内容 3</van-tab>
            <van-tab title="待收获">内容 3</van-tab>
            <van-tab title="待评价">内容 4</van-tab>
        </van-tabs>
   </div>
</template>
<script>
export default {
    data(){
        return{
          value:"",
          active: 2
        }
       
    }
}
</script>


