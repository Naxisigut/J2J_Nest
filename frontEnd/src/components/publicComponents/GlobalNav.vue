<template>
  <div class="nav">
    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group> -->
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" :collapse="isCollapse" router>
      <el-menu-item v-for="(item, index) in links" :key="index" :index="item.path">
      <!-- index设置为path，可以自动导航至相应路由 -->
        <i :class="navIcons[index]"></i>
        <span slot="title">{{ item.title }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: true,
      navIcons: [
        'el-icon-s-home',
        'el-icon-document',
        'el-icon-magic-stick',
        'el-icon-discover',
        'el-icon-user',
        'el-icon-warning-outline',
      ],
    };
  },
  props: ['links'],
  methods: {},
};
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
