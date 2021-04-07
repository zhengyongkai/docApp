import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes: [
    {
      path: '/',
      redirect: '/Index'
    },
    {
      path: '/Index',
      component: () => import('@/views/Index.vue'),
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/Chat.vue'),
      meta: {
        index: 1
      }
    },
    {
      path: '/find',
      name: 'find',
      component: () => import('@/views/Find.vue'),
      meta: {
        index: 1
      }
    },
    {
      path: '/address',
      name: 'address',
      component: () => import('@/views/Address.vue'),
      meta: {
        index: 1
      }
    },
    {
      path: '/my',
      name: 'my',
      component: () => import('@/views/My.vue'),
      meta: {
        index: 1
      }
    },
  ]
})

export default router