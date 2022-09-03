import Vue from "vue";
import App from "./App.vue";

//按需引入ele
// import {} from 'element-ui'
// Vue.use()

//全部引入ele
import ElementUi from "element-ui";
Vue.use(ElementUi);

//引入路由器
import router from "./router/index";

//引入md-editor 预览组件
import "@/import/mdEditor";

import "@/filters";

Vue.config.productionTip = false;
new Vue({
  render: (h) => h(App),
  router,
  beforeCreate() {
    Vue.prototype.$bus = this; //事件总线
  },
}).$mount("#app");
