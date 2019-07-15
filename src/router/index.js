import VueRouter from 'vue-router'
import Vue from 'vue'
import login from '@/view/login'
import home from '@/view/home'
import welcome from '@/view/welcome'
import notfound from '@/view/notfound'
import article from '@/view/article'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/login', name: 'login', component: login },

    { path: '/',
      component: home,
      children: [
        { path: '/', component: welcome },
        { path: '/article', name: 'article', component: article }
      ]
    },
    { path: '*', name: 'notfound', component: notfound }
  ]
})

router.beforeEach((to, from, next) => {
//   // 我需要定义一个钥匙
  const key = window.sessionStorage.getItem('hmtoutiao')
  //   // 如果地址不是login并且没有钥匙,我要给它转到login
  if (to.path !== '/login' && !key) return next('/login')
  next()
})

export default router
