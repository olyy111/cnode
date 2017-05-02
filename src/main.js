import './assets/iconfont/iconfont.css'

import Vue from 'vue'
import App from './App'
import router from './router'
import commonComs from './components/index'
import {formatDate} from './filters/index.js'
Vue.config.productionTip = false

//注册全局组件
let Comkeys = Object.keys(commonComs)
Comkeys.forEach((key) => {
  Vue.component(`v${key}`, commonComs[key])
})

//注册全局过滤器
Vue.filter('formatDate', formatDate)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
