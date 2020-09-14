import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,//将路由对象绑定到vue实例上
  render: h => h(App)
}).$mount('#app')//相当于el:"#app"
