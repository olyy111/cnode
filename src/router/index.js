import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import Index from '../pages/index/index'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]   
})
