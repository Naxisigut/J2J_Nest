<template>
  <div class="aboutPage">
    <div class="pageContainer">
      <page-header :title="'关于本站'"></page-header>
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/publicComponents/PageHeader.vue';

export default {
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
