<template>
  <div class="aboutPage">
    <div class="pageContainer">
      <page-header :title="'关于本站'"></page-header>
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";

export default {
  name: "AboutThis",
  components: { PageHeader },
};
</script>

<style lang="less" scoped>
.aboutPage {
  display: flex;
  .pageContainer {
    width: 700px;
    margin: auto;
  }
}
</style>
