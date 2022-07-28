<template>
  <div id="app">
    <keep-alive>
    <router-view></router-view>
    </keep-alive>
    <!-- 路由组件区 -->
    <div class="display">
      <!-- 左侧导航栏 首页不显示 -->
      <div class="navCompo" v-if="$route.name">
        <global-nav :links="links"></global-nav>
      </div>
    </div>
  </div>
</template>

<script>
import GlobalNav from './components/publicComponents/GlobalNav.vue';

export default {
  name: 'App',
  components: { GlobalNav },
  data() {
    return {
      links: [
        {
          title: '首页',
          routerName: 'index',
          path: '/',
        },
        {
          title: '文章归档',
          routerName: 'articleList',
          path: '/articleList',
        },
        {
          title: '灵光小记',
          routerName: 'moment',
          path: '/moment',
        },
        {
          title: '我的生活',
          routerName: 'record',
          path: '/record',
        },
        {
          title: '个人简历',
          routerName: 'intro',
          path: '/intro',
        },
        {
          title: '关于本站',
          routerName: 'about',
          path: '/about',
        },
      ],
    };
  },
};
</script>

<style lang="less">
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: black;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.display {
  .navCompo {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(0%, -50%);
  }
}
</style>
