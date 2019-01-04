
import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import router from './router.vue'

Vue.use(VueRouter)

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
