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
            <el-button size="mini" icon="el-icon-time" round @click="view = 'timeLine'" autofocus></el-button>
            <el-button size="mini" icon="el-icon-menu" round @click="view = 'sortList'"></el-button>
          </el-button-group>
        </div>
      </div>
      <!-- 文章时间线视图 -->
      <div class="articleTimeLine" v-if="view == 'timeLine'">
        <el-timeline>
          <el-timeline-item v-for="item in artList" :key="item.id" :timestamp="item.time" placement="top">
            <el-card>
              <div class="cardBox">
                <img :src="item.img" alt="" />
                <div class="titleBox">
                  <h4>{{ item.title }}</h4>
                  <p>
                    <el-tag v-for="(tag, index) in item.artTag" :key="index">{{ tag }}</el-tag>
                  </p>
                </div>
              </div>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/publicComponents/PageHeader.vue';
import SearchBox from '@/components/publicComponents/searchBox.vue';
export default {
  components: { PageHeader, SearchBox },
  data() {
    return {
      artList: [
        {
          id: 100,
          time: '2018/4/12',
          title: '更新 Github 模板',
          read: 10,
          img: 'http://42.194.187.106/uploads/image/1621095838425.jpg',
          artTag: ['tec', '分享'],
        },
        {
          id: 101,
          time: '2018/4/12',
          title: '更新 Github 模板',
          read: 10,
          img: 'http://42.194.187.106/uploads/image/1621095838425.jpg',
          artTag: ['tec', '分享'],
        },
        {
          id: 102,
          time: '2018/4/12',
          title: '更新 Github 模板',
          read: 10,
          img: 'http://42.194.187.106/uploads/image/1621095838425.jpg',
          artTag: ['tec', '分享'],
        },
      ],
      //视图 timeLine时间线 sortList分类列表
      view: 'timeLine',
      //数据源 all全部文章 search搜索结果
      dataSrc: 'all',
    };
  },
};
</script>

<style lang="less" scoped>
.articlePage {
  display: flex;
  .pageContainer {
    width: 700px;
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
    //时间线样式
    .articleTimeLine {
      width: 100%;
      .cardBox {
        display: flex;
        img {
          width: 50px;
          height: 50px;
          border-radius: 15px;
          margin-right: 10px;
        }
        .titleBox {
          flex: 1;
        }
      }
    }
  }
}
</style>
