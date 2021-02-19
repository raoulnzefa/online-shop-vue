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
      // {
      //   name: 'Basket',
      //   path: '/basket',
      //   component: () => import('@/views/basket'),
      // },
      // {
      //   name: 'ChooseAppModul',
      //   path: '/product/:id(\\d+)',
      //   component: () => import('@/views/product'),
      // }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;