import Vue from 'vue'
import App from './App.vue'

// 导入element-ui
import ElementUI from 'element-ui'
// 导入element-ui的css
import 'element-ui/lib/theme-chalk/index.css'
// 注册element-ui
Vue.use(ElementUI);

// 导入base.css样式
import '@/assets/bass.css'

// 导入抽取的路由
// import router form './router/index'
// 导入抽取的路由 如果导入的是index可以直接省略
import router from '@/router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
