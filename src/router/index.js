import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/main'),
    children: [
      {
        name: 'Main',
        path: '/',
        component: () => import('@/views/Main')
      },
      {
        name: 'Cart',
        path: '/cart',
        component: () => import('@/views/Cart')
      },
      {
        name: 'Login',
        path: '/login',
        component: () => import('@/views/Login')
      },
      {
        name: 'Register',
        path: '/register',
        component: () => import('@/views/Register')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
