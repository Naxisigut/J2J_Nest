<template>
  <div class="articlePage">
    <div class="pageContainer">
      <page-header :title="'Article'"></page-header>
      <!-- 功能区 -->
      <div class="funcBox">
        <!-- 数据源切换 -->
        <div class="srcChange">
          <span @click="dataSrc = 'all'"><a href="javascript:;" :class="{ active: dataSrc == 'all' }">全部</a></span>
          <el-divider direction="vertical"></el-divider>
          <span @click="dataSrc = 'search'"
            ><a href="javascript:;" :class="{ active: dataSrc == 'search' }">搜索结果</a></span
          >
        </div>
        <!-- 搜索框 -->
        <search-box></search-box>
        <!-- 视图切换 -->
        <div class="viewChange">
          <el-button-group>
            <el-button size="mini" icon="el-icon-time" round @click="view = 'TimeLineView'" autofocus></el-button>
            <el-button size="mini" icon="el-icon-menu" round @click="view = 'CateListView'"></el-button>
          </el-button-group>
        </div>
      </div>
      <!-- 内容视图区 -->
      <component :is="view" :artList="artList"></component>
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/publicComponents/PageHeader.vue';
import SearchBox from '@/components/publicComponents/searchBox.vue';
import TimeLineView from '@/components/articleListComponents/TimeLineView.vue';
import CateListView from '@/components/articleListComponents/CateListView.vue';

export default {
  components: { PageHeader, SearchBox, TimeLineView, CateListView },
  data() {
    return {
      artList: [],
      //视图切换 TimeLineView时间线组件 sortList分类列表
      view: 'TimeLineView',
      //数据源切换 all全部文章 search搜索结果
      dataSrc: 'all',
      dotColor: [],
    };
  },
  methods: {
    intoArticle(articleId) {
      this.$router.push({
        name: 'article',
        query: {
          articleId,
        },
      });
    },
  },

  created() {
    this.$axios({
      url: '/article/list',
    }).then(({ data }) => {
      this.artList = data.data;
    });
  },
  mounted() {
    this.$bus.$on('intoArticle', this.intoArticle)
  },
};
</script>

<style lang="less" scoped>
.articlePage {
  display: flex;
  .pageContainer {
    width: 800px;
    margin: auto;
    .funcBox {
      display: flex;
      // align-self: center;
      height: 35px;
      line-height: 35px;
      margin-bottom: 20px;
      //展示数据源切换按钮样式
      .srcChange {
        font-size: 14px;
        a {
          color: #dcdfe6;
        }
        a.active {
          color: #606266;
        }
      }
      //视图切换按钮样式
      .viewChange {
        font-size: 24px;
        .el-button:focus,
        .el-button:hover {
          color: #606266;
          border-color: #dcdfe6;
          background-color: #eee;
        }
      }
    }
  }
}
</style>
