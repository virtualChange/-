import Vue from 'vue'
import App from './App.vue'
import './mock' //mock模拟数据
import '@/styles/global.less'
import router from '@/router'
import showMessage from '@/utils/showMessage'
Vue.prototype.$showMessage = showMessage
import VLoading from '@/directives/loading'
import VLayz from '@/directives/layz'
import './eventBus'

import store from '@/store'
Vue.directive('loading', VLoading)
Vue.directive('layz', VLayz)
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')


