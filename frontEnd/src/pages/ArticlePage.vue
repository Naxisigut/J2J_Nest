<template>
  <div>
    <div class="articlePage">
      <div class="pageContainer">
        <page-header :title="'Article'"></page-header>
        <!-- 文章标题区 -->
        <h1 class="artTitle">标题</h1>
        <!-- md预览区 -->
        <div class="md-Pre">
          <template>
            <v-md-preview :text="markdown" :height="'400px'"></v-md-preview>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/publicComponents/PageHeader.vue';
import md from '../../Day01_webpack.md';

export default {
  components: { PageHeader },
  data() {
    return {
      markdown: md,
    };
  },
  // created(){
  //   console.log(this.markdown);
  // }
};
</script>

<style lang="less" scoped>
.articlePage {
  display: flex;
  flex-wrap: wrap;
  .pageContainer {
    width: 1000px;
    margin: auto;
    .artTitle{
      text-align: center;
      font-size: 26px;
    }
  }
  // .md-Pre{
  //   width: 700px;
  //   margin: auto;
  // }
}
</style>
