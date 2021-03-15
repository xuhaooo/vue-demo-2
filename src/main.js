import Vue from 'vue'
import App from './App.vue'
const log= console.log.bind(console)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#div1')
