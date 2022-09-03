<template>
  <div class="introPage">
    <div class="pageContainer">
      <page-header :title="'个人简历'"></page-header>
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
export default {
  name: "ResumeIndex",
  components: { PageHeader },
};
</script>

<style lang="less" scoped>
.introPage {
  display: flex;
  .pageContainer {
    width: 700px;
    margin: auto;
  }
}
</style>
