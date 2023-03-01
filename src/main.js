import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import VueAxios from 'vue-axios';
import VueMask from 'v-mask'

Vue.config.productionTip = false

Vue.prototype.$resetForm = function(refName) {
  if (this.$refs[refName]) {
    this.$refs[refName].resetFields()
  }
}


Vue.use(VueMask);
Vue.use(ElementUI);
Vue.use(VueAxios , axios)
new Vue({
  axios,
  router,
  render: h => h(App)
}).$mount('#app')
