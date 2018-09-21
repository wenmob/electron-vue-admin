import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use({
  install( Vue, options) {
    Vue.prototype.$electron = global.electron;
    Vue.prototype.$ipc = global.ipcRenderer || {};
    Vue.prototype.$bowerWin = global.bowerWin;
  }
});
/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
