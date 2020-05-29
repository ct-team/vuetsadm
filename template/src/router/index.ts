import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('@/pages/home.vue'),
    children: [
      {
        path: '/view',
        component: () => import('@/pages/view.vue')
      },
      {
        path: '/edit',
        component: () => import('@/pages/edit.vue')
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
