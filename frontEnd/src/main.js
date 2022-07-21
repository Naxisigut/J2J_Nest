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

//引入md-editor
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
VueMarkdownEditor.use(vuepressTheme);
Vue.use(VueMarkdownEditor);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
