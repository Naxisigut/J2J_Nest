<template>
  <div>
    <div class="articlePage">
      <div class="pageContainer">
        <page-header :title="'Article'"></page-header>
        <!-- 文章标题区 -->
        <h1 class="artTitle">{{ title }}</h1>
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
import PageHeader from "@/components/PageHeader.vue";
import { getArtPathAPI, getArtMdAPI } from "@/api/article";
export default {
  name: "articleView",
  components: { PageHeader },
  data() {
    return {
      markdown: "",
      articleId: this.$route.query.articleId,
      title: "",
    };
  },
  created() {
    this.getArt();
  },
  methods: {
    /* 根据文章ID获得文章 */
    async getArt() {
      try {
        const res = await getArtPathAPI(this.articleId);
        this.title = res.title;
        const path = "assets/" + res.file.split("assets/")[1];
        const md = await getArtMdAPI(path);
        this.markdown = md;
      } catch (error) {
        console.log("error =", error);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.articlePage {
  display: flex;
  flex-wrap: wrap;
  .pageContainer {
    width: 1000px;
    margin: auto;
    .artTitle {
      text-align: center;
      font-size: 30px;
    }
  }
  // .md-Pre{
  //   width: 700px;
  //   margin: auto;
  // }
}
</style>
