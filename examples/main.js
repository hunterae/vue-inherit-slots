import Vue from 'vue'
import InheritSlots from '../src/plugin'
import App from './App.vue'

Vue.use(InheritSlots)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
