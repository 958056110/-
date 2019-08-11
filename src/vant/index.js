import Vue from 'vue'
// 第三方组件
import{
// 标签栏
Tabbar,
TabbarItem,
Search,
Swipe, SwipeItem,
Lazyload,
// 宫格
Grid,
GridItem,
//商品卡片
Card,
// 商品列表
List,
Icon,
// tab标签页
Tab, Tabs,
// 弹出层
Popup ,
Button,
Stepper

}from 'vant';
export default () => {
    Vue.use(Search);
    Vue.use(Tabbar).use(TabbarItem);
    Vue.use(Swipe).use(SwipeItem);
    Vue.use(Lazyload);
    Vue.use(Grid).use(GridItem);
    Vue.use(Card);
    Vue.use(List);
    Vue.use(Icon);
    Vue.use(Tab).use(Tabs);
    Vue.use(Popup);
    Vue.use(Button);
    Vue.use(Stepper);
}