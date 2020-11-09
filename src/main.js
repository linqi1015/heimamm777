import Vue from 'vue'
import App from './App.vue'

// 导入element-ui
import ElementUI from 'element-ui'
// 导入element-ui的css
import 'element-ui/lib/theme-chalk/index.css'

// 注册element-ui
Vue.use(ElementUI);
Vue.config.productionTip = false

import router from './router' // router=路由实例对象
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
