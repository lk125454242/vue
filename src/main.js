import Vue from 'vue';
import Mint_ui, { Toast } from 'mint-ui';
import VueRouter from 'vue-router'
import VueSource from 'vue-resource'

import 'mint-ui/lib/style.css';
import './css/main.css';

Vue.use(Mint_ui);//組件庫
Vue.use(VueRouter);//前端路由
Vue.use(VueSource);//ajax插件
/* 网络连接配置 开始 */

Vue.http.options.emulateJSON = true;//默认JSON
Vue.http.headers["X-Requested-With"] =  "XMLHttpRequest";
// Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk';

// 添加拦截器
Vue.http.interceptors.push((request, next)  => {
  var url = '//dev.geju.com'
  var url = '//localhost:3000'
  request.url = url + request.url;
  next((response) => {
    if(!response.ok || response.body.code !== 200){
      Toast({
        message: (response.body && response.body.code) || '服务器错误',
        position: 'bottom',
        duration: 1500
      });  
    }
  });
});

/* 网络连接配置 结束 */

/* 路由啓動APP*/
import router from './router';
const app = new Vue({
  router
}).$mount('#app');
