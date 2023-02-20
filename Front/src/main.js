import 'animate.css';
import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from "./router"
import '@/assets/css/main.css'
import vuetify from '@/plugins/vuetify'
import VuePageTransition from 'vue-page-transition'

Vue.config.productionTip = false
Vue.use(VuePageTransition)

new Vue({
  render: h => h(App),
  vuetify,
  axios,
  router
}).$mount('#app')
