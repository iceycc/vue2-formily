import Vue from 'vue'
import App from './App.vue'
import './pebble-ui'
// import CAPI from '@vue/composition-api'
Vue.config.productionTip = false
import EleUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false;
// Vue.use(CAPI)
Vue.use(EleUI)
new Vue({
  render: h => h(App),
}).$mount('#app')
