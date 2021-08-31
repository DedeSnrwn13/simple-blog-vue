import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Toasted from 'vue-toasted'

Vue.use(Toasted)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'

import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8000'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
