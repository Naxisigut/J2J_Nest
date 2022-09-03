<template>
  <div class="pageHeader">
    <div class="title">{{title}}</div>
    <el-divider></el-divider>
  </div>
</template>

<script>
export default {
  props:['title']
}
</script>

<style lang="less" scoped>
.pageHeader{
  width: 100%;
  .title{
    font-size: 40px;
    text-align: center;
    padding-top: 25px;
  }

}
</style>
