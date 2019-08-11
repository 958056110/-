import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// // 全局引入
// import axios from 'axios'
// // Vue继承axios
// Vue.prototype.$axios = axios
// 全局引入axios
// axios的post方法默认使用application/json格式编码数据，所以前端要将将Content-Type格式为application/x-www-form-urlencoded
import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; //全局更改
import qs from 'qs'
Vue.prototype.$qs = qs;
// Vue继承axios
Vue.prototype.$axios = axios
Vue.prototype.$axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.config.productionTip = false
// 引入vant的组件
import Vant from './vant/index'
Vant()
import { Icon} from 'element-ui';
Vue.use(Icon)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
//响应拦截
axios.interceptors.response.use(res=>{
  // 判断token是否校验成功
  // 校验不成功：过期或被伪造
  if(router.currentRoute.matched.some(item=>item.meta.requiresAuth) && res.data.code == 401){
    router.replace({
      path:'/login',
      query:{
        redirectTo:router.currentRoute.fullPath
      }
    })
  } 
  return res;
}, error=>{
    // Do something with response error
    return Promise.reject(error);
});