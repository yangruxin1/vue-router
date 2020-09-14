// router/index.js:配置整个项目中所需的所有路由
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// 安装 Vue.js 插件。
Vue.use(VueRouter);
// http://localhost:8080/about
// /:根路径
  // 路由配置
  // 每一个路由都是一个对象
  const routes = [
  {
    // 路径
    path: '/',
    // 路由名称
    name: 'Home',
    // 路由所对应的组件
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 路由懒加载的方式导入About.vue组件:只有路由被激活的时候才开始加载路由所对应的组件
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
	  path:'/news',
	  name:'News',
	  component:()=>import('../views/New.vue')
  }
]

// 实例化VueRouter
const router = new VueRouter({
  mode: 'history',//项目采用的路由模式"hash"(默认) | "history" | "abstract"
  base: process.env.BASE_URL,//应用的基路径。
  routes//配置路由
})

export default router
