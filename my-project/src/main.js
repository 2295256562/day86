// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入axios
import Axios from 'axios'
// 将axios挂载到Vue原型上
Vue.prototype.$http = Axios
Vue.config.productionTip = false
// 设置公共的url
Axios.defaults.baseURL = 'https://www.luffycity.com/api/v1/'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
