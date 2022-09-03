import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter);

const Router = new VueRouter({
  routes: [
    {
      path: "/",
      component: () => import("@/views/index"),
    },
    {
      name: "article",
      path: "/article",
      component: () => import("@/views/article"),
    },
    {
      name: "articleList",
      path: "/articleList",
      component: () => import("@/views/articleList"),
    },
    {
      name: "about",
      path: "/about",
      component: () => import("@/views/about"),
    },
    {
      name: "intro",
      path: "/intro",
      component: () => import("@/views/resume"),
    },
    {
      name: "moment",
      path: "/moment",
      component: () => import("@/views/moment"),
    },
    {
      name: "record",
      path: "/record",
      component: () => import("@/views/record"),
    },
  ],
});

export default Router;
