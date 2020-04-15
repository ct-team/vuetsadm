import Vue from 'vue';
import App from './App.vue';
import router from '@/router/index';
import ElementUI from 'element-ui';
import { Table, Slide, ListCopy } from 'ct-dart';

Vue.use(ElementUI, {
    size: 'mini',
    zIndex: 3000
});

Vue.use(Table);
Vue.use(Slide);
Vue.use(ListCopy);

Vue.config.productionTip = false;

new Vue({
    // @ts-ignore
    router,
    render: h => h(App)
}).$mount('#app');
