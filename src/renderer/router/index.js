import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'landing-page',
    //   component: require('@/components/LandingPage').default
    // },
    {
      path: '/',
      name: 'FirstPage',
      component: require('@/components/FirstPage').default
    },
    {
      path: '/web',
      name: 'ShowWeb',
      component: require('@/components/ShowWeb').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
