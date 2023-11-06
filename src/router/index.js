import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    children: [
      {
        path: '/',
        name: 'index',
        component: () => import('../views/front/IndexView.vue'),
      },
      {
        path: '/shop',
        name: 'shop',
        component: () => import('../views/front/ShopView.vue'),
      },
      {
        path: '/cart',
        name: 'cart',
        component: () => import('../views/front/CartView.vue'),
      },
      {
        path: '/member',
        name: 'member',
        component: () => import('../views/front/MemberView.vue'),
      },
      {
        path: '/news',
        name: 'news',
        component: () => import('../views/front/NewsView.vue'),
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('../views/LoginView.vue'),
      },
    ],
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/DashView.vue'),
    children: [
      {
        path: 'login',
        name: 'dashLogin',
        component: () => import('../views/dash/LoginView.vue'),
      },
      {
        path: 'orders',
        name: 'orders',
        component: () => import('../views/dash/OrdersView.vue'),
      },
      {
        path: 'products',
        name: 'products',
        component: () => import('../views/dash/ProductsView.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
