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

//引入md-editor 预览组件
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
//引入md-editor主题
import githubTheme from '@kangc/v-md-editor/lib/theme/github';
import '@kangc/v-md-editor/lib/theme/style/github.css';
//引入代码高亮
import hljs from 'highlight.js';
VMdPreview.use(githubTheme,{
  Hljs: hljs,
});
// VMdPreview.use(vuepressTheme);
Vue.use(VMdPreview);



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  beforeCreate(){
    //事件总线
    Vue.prototype.$bus = this
  }
}).$mount('#app')
