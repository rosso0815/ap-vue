
import Vue from 'vue'
import VueRouter from 'vue-router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App.vue'
import router from './router.vue'

Vue.use(VueRouter)
Vue.use(ElementUI)


new Vue({
  el: '#app',
  render: h => h(App),
  router
})
