import Vue from 'vue'
import App from './App.vue'

//按需引入ele
// import {} from 'element-ui'
// Vue.use()

//全部引入ele
import ElementUi from 'element-ui'
Vue.use(ElementUi)

//引入路由插件
import VueRouter from 'vue-router';
Vue.use(VueRouter)
//引入路由器
import router from './router/index';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
