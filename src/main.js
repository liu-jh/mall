import Vue from 'vue'
import App from './App.vue'

import router from './router/index.js'
import store from './store/index.js'

//事件总线
Vue.prototype.$bus = new Vue()

//Toast插件
import Toast from './components/common/toast/index.js'
Vue.use(Toast)

//解决移动端点击延迟问题
import fastclick from 'fastclick'
fastclick.attach(document.body)

Vue.config.productionTip = false

new Vue({
  el:'#app',
  router,
  store,
  render: h => h(App)
})
