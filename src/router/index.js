import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import Index from '../pages/index/index'
import Create from '../pages/topic/create/index'
import Login from '../pages/login/index'
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/topic/create',
      name: 'Create',
      component: Create
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]   
})
