// 路由的详细配置文件
import App from '../App'

// 引入首页
import home from '../page/home/index'
// 引入item
import item from '../page/item/index'
// 引入score
import score from '../page/score/index'

// 这里是嵌套路由
export default [{
    path     : '/',
    component: App,
    children : [{
        path     : '',
        component: home,
    }, {
        path     : '/item',
        component: item,
    }, {
        //itemcontainer.vue 里面的this.$router.push('score'); 这里面的score是受path:'/score',这个score控制的
        path     : '/score',
        component: score,
    }],
}];