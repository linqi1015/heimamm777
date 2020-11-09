import Vue from 'vue'
import App from './App.vue'

// 导入element-ui
import ElementUI from 'element-ui'
// 导入element-ui的css
import 'element-ui/lib/theme-chalk/index.css'

// 注册element-ui
Vue.use(ElementUI);

// 1.导入路由
import VueRouter from 'vue-router'
// 2.`use`一下
Vue.use(VueRouter)
// 3.注册路由信息
const routes = []
// 4.实例化路由对象
const router = new VueRouter({
  // es6的简化写法，解构赋值
  routes
  // new VueRouter时 路由的数组属性名必须叫做routes
  //routes:routes
})
Vue.config.productionTip = false

import router from './router' // router=路由实例对象
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
