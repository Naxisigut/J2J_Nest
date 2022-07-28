<template>
  <div class="momentPage">
    <div class="pageContainer">
      <page-header :title="'Moments'"></page-header>
      <!-- 发布区&搜索区 -->
      <div class="publishBox">
        <el-input type="textarea" :autosize="{ minRows: 4, maxRows: 10 }" placeholder="请输入内容" v-model="textarea">
        </el-input>
        <div class="btnBox">
          <el-button size="small" icon="el-icon-search" round>搜索</el-button>
          <el-button size="small" icon="el-icon-check" round>发布</el-button>
        </div>
      </div>
      <!-- 查看区 -->
      <div class="momentsBox">
        <div class="leftBox columnBox" ref="left">
          <moment-card v-for="moment in leftMomentList" :key="moment.id" :moment="moment"></moment-card>
        </div>
        <div class="midBox columnBox" ref="mid">
          <moment-card v-for="moment in midMomentList" :key="moment.id" :moment="moment"></moment-card>
        </div>
        <div class="rightBox columnBox" ref="right">
          <moment-card v-for="moment in rightMomentList" :key="moment.id" :moment="moment"></moment-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/publicComponents/PageHeader.vue';
import MomentCard from '@/components/momentComponents/MomentCard.vue';
export default {
  components: { PageHeader, MomentCard },
  data() {
    return {
      textarea: '',
      momentListGetted: [],
      leftMomentList: [],
      midMomentList: [],
      rightMomentList: [],
      limit: 10,
      currPage: 1,
      renderIndex: -1,
      // theThreeList:[this.$refs.left]
    };
  },
  computed: {
    currOffset() {
      return this.limit * (this.currPage - 1);
    },
  },
  watch: {
    momentListGetted() {
      //每当接收到新数据，把渲染序号重置为0
      this.renderIndex = 0;
    },
    renderIndex(val) {
      if (!this.momentListGetted) return;
      //此时渲染完毕
      if (this.renderIndex >= this.momentListGetted.length) return;

      // 获得最短的列的索引
      let index = this.$utils.returnMinIndex([
        this.$refs.left.clientHeight,
        this.$refs.mid.clientHeight,
        this.$refs.right.clientHeight,
      ]);
      // 将data push到最短的列里面
      [this.leftMomentList, this.midMomentList, this.rightMomentList][index].push(
        this.momentListGetted[this.renderIndex]
      );
    },
  },
  mounted() {
    this.$axios({
      url: '/moments',
      params: { limit: this.limit, offset: this.currOffset },
    }).then(({ data }) => {
      // console.log(data);
      this.momentListGetted = data.data;
    });
  },
  updated() {
    // console.log([this.$refs.left.clientHeight, this.$refs.mid.clientHeight, this.$refs.right.clientHeight]);
    //一次渲染一条数据，增加索引，直到最大索引
    if (this.renderIndex < this.momentListGetted.length) this.renderIndex++;
  },
};
</script>

<style lang="less" scoped>
.momentPage {
  display: flex;
  .pageContainer {
    margin: auto;
    width: 1000px;
    // 按钮样式
    .btnBox {
      margin: 20px 0;
      display: flex;
      padding: 0 300px;
      justify-content: space-evenly;
      .el-button:focus,
      .el-button:hover {
        color: #606266;
        border-color: #dcdfe6;
        background-color: #eee;
      }
    }
    //卡片区样式
    .momentsBox {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      align-items: flex-start;
      .columnBox {
        width: 33%;
        min-height: 200px;
      }
    }
  }
}
</style>
