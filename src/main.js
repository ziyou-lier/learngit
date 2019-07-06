import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

//引入接口
Vue.config.productionTip = false
Vue.use(iView);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
