import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/main'),
    children: [
      {
        name: 'Main',
        path: '/',
        component: () => import('@/views/Main'),
      },
      {
        name: 'Cart',
        path: '/cart',
        component: () => import('@/views/Cart'),
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;