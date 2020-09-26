
import Vue from 'vue'
import Vuex from 'vuex'

import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// import { LMap, LTileLayer, LMarker } from 'vue2-leaflet'
// import 'leaflet/dist/leaflet.css'

// ----
import App from './App.vue'
// Vue.component('l-map', LMap)
// Vue.component('l-tile-layer', LTileLayer)
// Vue.component('l-marker', LMarker)

Vue.use(Vuex)

Vue.use(BootstrapVue)

Vue.config.devtools = true

Vue.config.productionTip = true

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
