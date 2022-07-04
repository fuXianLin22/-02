import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入flexible
import 'amfe-flexible'
// import { request } from '@/utils/request'
// 引入vant
import Vant from '@/plugins/vant'
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
