import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default,
      redirect: '/test'
    },
    {
      path: '/test',
      name: '测试',
      component: require('@/view/Test').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
