import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/util/rem'
// css
import '@/styles/index.scss'
import QzdUI from '@/qzd-ui'
// import QzdUI from '../dist-qzd-ui/bundle'

// productionTip
Vue.config.productionTip = false

// 全局引入qzd-ui
Vue.use(QzdUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
