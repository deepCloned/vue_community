import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './utils/validate'

import './assets/styles/iconfont.scss'
import './assets/layui/css/layui.css'
import './assets/layui/layui'

import Alert from '@/plugins/alert'
import Confirm from '@/plugins/confirm'
Vue.use(Alert)
  .use(Confirm)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
