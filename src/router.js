import Vue from 'vue'
import Router from 'vue-router'
import Tabbar from './views/Tabbar.vue'
// 安装路由
Vue.use(Router)
// 嵌套组件
// import Home from './views/Tabbar/Home'
const Home = () => import('./views/Tabbar/Home')
const Detail = () => import('./views/Detail')
// 订单页 懒加载
const Order = () => import('./views/Tabbar/Order')
//我的
const Mine = () => import('./views/Tabbar/Mine')
//购物车
const Cart = () => import('./views/Tabbar/Cart')
//分类
const Classify = () => import('./views/Tabbar/Classify')
//列表页
const Goodlist = () => import('./views/Goodlist')
// 登录页
const Sign = () => import('./views/Sign')
export default new Router({
  routes: [{
      path: '/tabbar',
      name: 'tabbar',
      component: Tabbar,
      children: [{
          name: 'home',
          // 第二层路由的path是没有/
          path: 'home',
          component: Home,
        }, {
          name: 'order',
          path: 'order',
          component: Order,
        }, {
          name: 'mine',
          path: 'mine',
          component: Mine,
        },
        {
          name: 'classify',
          path: 'classify',
          component: Classify,
        },
        {
          name: 'cart',
          path: 'cart',
          component: Cart,
        },
      ],
    },
    {
      path: '/detail/:id',
      name: 'detail',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Detail,
    },
    // 列表页
    {
      name: 'goodlist',
      component: Goodlist,
      path: '/goodlist',
    },
    // 登录页
    {
      name: 'sign',
      component: Sign,
      path: '/sign',
    },
    // 重定向
    {
      path: '/',
      // 别名
      alias: '/index.html',
      redirect: () => {
        // 我要跳进/123获取路由的一些详情信息
        // console.log(to)
        // 方法接收 目标路由 作为参数
        // return 重定向的 字符串路径/路径对象
        return '/tabbar/home'
      }
    }
  ]
})