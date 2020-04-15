import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes: object[] = [
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

export default new Router({
    routes
});
