import VueRouter from 'vue-router'
import Vue from 'vue'
import login from '@/view/login'
import home from '@/view/home'
import welcome from '@/view/welcome'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/login', name: 'login', component: login },
    { path: '/',
      component: home,
      children: [
        { path: '/', component: welcome }
      ]
    }

  ]
})
export default router
