<template>
  <div class="Brief">
    <div class="item">
      <span class="title">My Blog:</span><a href="javascript:;">J2J_Blog</a>
    </div>
    <div class="item">
      <span class="title">My Github:</span
      ><a href="https://github.com/Naxisigut">Naxisigut_Profile</a>
    </div>
    <div class="item">
      <span class="title">My Gitee:</span
      ><a href="https://gitee.com/wjoke">https://gitee.com/wjoke</a>
    </div>
    <div class="item">
      <span class="title">How to reach me:</span><span>834525217@qq.com</span>
    </div>
    <div class="item">
      <div class="title">My stack:</div>
      <ul>
        <li>JS + CSS</li>
        <li>Vue2 + VueCLI + JS</li>
        <li>Vue3 + Vite + TS + pnpm</li>
        <li>a little NodeJS on Server</li>
        <li></li>
      </ul>
    </div>
    <div class="item">
      <div><span class="title">My own projects:</span></div>
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
export default {
  name: "BriefDisplay",
  components: { PageHeader },
};
</script>

<style lang="less" scoped>
.Brief {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.item {
  padding: 10px 0 10px 150px;
}
.title {
  font-size: 20px;
  margin-right: 10px;
}
li {
  padding-left: 75px;
  margin: 10px 0;
}
</style>
