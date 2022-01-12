import Vue from 'vue';
import App from './App.vue';
import router from '@/router/index';
import store from '@/store/index';
import '@/assets/js/common';
import ElementUI, { Message } from 'element-ui';
import { Table, Select, Http, Permission } from 'ct-dart';

const showErrorMessage = (msg: string, type: string = 'error') => {
  Message({
    message: msg || 'error',
    type
  });
};

Vue.use(ElementUI, {
  size: 'mini',
  zIndex: 3000
});

Vue.use(Table);
Vue.use(Select);
Vue.use(Permission);

Vue.use(Http, {
  interceptError: function(res: any) {
    showErrorMessage(res.Message);
  },
  interceptorSuccess: function(res: any) {
    // 对响应成功数据做点什么
    let data: any = JSON.stringify(res).toLowerCase();
    data = JSON.parse(data);

    if (data.code !== 0) {
      showErrorMessage(data.Message);
    }
  },
  requestInterceptor: function() {},
  withCredentials: true,
  timeout: 60000
});

//设置BUS
const Bus = new Vue();
Vue.prototype.$bus = Bus;
// Vue.prototype.$dart.permission.setDefaults({
//   //设置权限别名
//   alias: {
//     add: 1,
//     del: 2,
//     edit: 3
//   },
//   router: router
// });
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
