import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('@/pages/Home.vue'),
    children: [
      {
        path: '/drawer',
        component: () => import('@/pages/Drawer.vue'),
        children: [
          {
            path: 'view',
            component: () => import('@/pages/View.vue')
          },
          {
            path: 'edit',
            component: () => import('@/pages/Edit.vue')
          }
        ]
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
