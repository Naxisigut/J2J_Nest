import Vue from "vue";

//引入md-editor 预览组件
import VMdPreview from "@kangc/v-md-editor/lib/preview";
import "@kangc/v-md-editor/lib/style/preview.css";
import githubTheme from "@kangc/v-md-editor/lib/theme/github"; //引入md-editor主题
import "@kangc/v-md-editor/lib/theme/style/github.css";
import hljs from "highlight.js"; //引入代码高亮

VMdPreview.use(githubTheme, {
  Hljs: hljs,
});

// VMdPreview.use(vuepressTheme);
Vue.use(VMdPreview);
