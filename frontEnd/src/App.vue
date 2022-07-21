<template>
  <div id="app">
    <index-page></index-page>
  </div>
</template>

<script>
import IndexPage from './components/indexComponents/IndexPage.vue';
export default {
  name: 'App',
  components: {IndexPage},
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
li{
  list-style: none;
}
a{
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
</style>
