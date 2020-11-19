import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component:()=>import('./views/Deng.vue')
    },
    {
      path: '/Zhu',
      component:()=>import('./views/Zhu.vue')
    },
    {
      path: '/Deng',
      component:()=>import('./views/Deng.vue')
    },
    {
      path:'/Shou',
      component:()=>import('./components/Shou.vue'),
      children:[
        {
          path:'/',
          component:()=>import('./views/Zu1.vue'),
        },
        {
          path:'/Zu2',
          component:()=>import('./views/Zu2.vue'),
        },
        {
          path:'/Zu3',
          component:()=>import('./views/Zu3.vue'),
        },
        {
          path:'/Zu5',
          component:()=>import('./views/Zu5.vue'),
        },
        {
          path:'/Zu51',
          component:()=>import('./views/Zu51.vue'),
        },
        {
          path:'/Zu7',
          component:()=>import('./views/Zu7.vue'),
        },
        {
          path:'/Zu71',
          component:()=>import('./views/Zu71.vue'),
        },
        {
          path:'/Zu72',
          component:()=>import('./views/Zu72.vue'),
        },
        {
          path:'/Zu73',
          component:()=>import('./views/Zu73.vue'),
        },
        {
          path:'/Zu74',
          component:()=>import('./views/Zu74.vue'),
        },
        {
          path:'/Zu8',
          component:()=>import('./views/Zu8.vue'),
        }
      ]
    },
   
  ]
})
