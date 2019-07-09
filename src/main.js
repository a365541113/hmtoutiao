import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
// 引入样式------这段没看懂
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  routes: []
})
export default router
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
