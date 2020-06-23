import Vue from 'vue';
import App from './App.vue';
import router from '@/router/index';
import store from '@/store/index';
import '@/assets/js/common';
import ElementUI from 'element-ui';
import {
  Table,
  Slide
  //ListCopy
} from 'ct-dart';

Vue.use(ElementUI, {
  size: 'mini',
  zIndex: 3000
});

Vue.use(Table);
Vue.use(Slide);
//Vue.use(ListCopy);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
