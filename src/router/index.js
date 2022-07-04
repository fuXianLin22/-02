import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/layout/home'
  },
  {
    path: '/layout',
    component: () => import('@/views/Layout'),
    children: [
      {
        path: 'home',
        component: () => import('@/views/Home')
      },
      {
        path: 'find',
        component: () => import('@/views/Find')
      },
      {
        path: 'info',
        component: () => import('@/views/Info')
      },
      {
        path: 'user',
        component: () => import('@/views/User')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/Login')
  },
  {
    path: '/city',
    component: () => import('@/views/City')
  },
  {
    path: '*',
    component: () => import('@/components/NotFind')
  }
]

const router = new VueRouter({
  routes
})

export default router
