<template>
  <div>
    <div class="articlePage">
      <div class="pageContainer">
        <page-header :title="'Article'"></page-header>
        <!-- 文章标题区 -->
        <h1 class="artTitle">{{title}}</h1>
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

export default {
  components: { PageHeader },
  data() {
    return {
      markdown: '',
      articleId:this.$route.query.articleId,
      title:''
    };
  },
  created() {
    //根据文章id发送请求，返回一个静态资源的路径
    this.$axios({
      url: '/article',
      params:{
        articleId:this.articleId
      }
    })
      .then(({ data }) => {
        //请求资源地址
        this.title = data.data.title
        return 'assets/' + data.data.file.split('assets/')[1];
      })
      .then((path) => {
        //根据上次请求返回的路径请求资源
        return this.$axios({
          url: path,
        });
      })
      .then(({data})=>{
        this.markdown = data
      });
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
