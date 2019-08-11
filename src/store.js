import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      goodlist:[]
  },
  mutations: {
    //  添加商品
    add(state,goods){
      state.goodlist.unshift(goods)
    },
    //  修改商品
    chagegood(state,{id,amount}){
          state.goodlist.forEach(item =>{
            if(item.id == id) {
              item.amount = amount
            }
         })
    }
  },
  actions: {

  }
})
