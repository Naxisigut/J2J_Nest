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

//引入axios
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8088/'
Vue.prototype.$axios = axios

//引入dayjs
import dayjs from 'dayjs';
//全局注册过滤器
Vue.filter('timeFormat', function(val){
  return dayjs(val).format('MM/DD/YYYY');
})
//不要挂载在原型上，挂到原型上之后在过滤器中无法通过this去访问
// Vue.prototype.$dayjs = dayjs

//引入baseURL
Vue.prototype.$baseURL = 'http://localhost:8088'
//引入utils
import utils from '@/utils';
Vue.prototype.$utils = utils


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  beforeCreate(){
    //事件总线
    Vue.prototype.$bus = this
  },
  mounted(){
    // console.log(this);
  }
}).$mount('#app')
