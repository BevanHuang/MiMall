import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import env from '../env'

import App from './App.vue'

// import 是预编译加载。require是按需加载。
// mock开关
const mock = true;
if(mock) {
  require('./mock/api');
}

// 根据前端的跨域方式做调整 /a/b 自动加上 /api/a/b  转发忽略/api=> 变成 /a/b
// axios.defaults.baseURL = '/api'; 

// 使用easy-mock
axios.defaults.baseURL = 'https://www.studyinghome.com/mock/5e5c88ee83482d5224c00355/mimall'; 
// axios.defaults.baseURL = env.baseURL; 
axios.defaults.timeout = 8000;  // 超时8s
// 接口错误拦截
axios.interceptors.response.use(function(response) {
  let res = response.data;
  if(res.status == 0) {
    // 0代表成功
    return res.data;
  } else if(res.status == 10){
    // 10代表未登录
    window.location.href = '/#/login';
  } else {
    alert(res.msg);
  }
});

Vue.use(VueAxios, axios);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
