<template>
  <div class="articleTimeLine">
    <el-timeline>
      <el-timeline-item
        v-for="(art, index) in artList"
        :key="art.id"
        :timestamp="art.pubTime | timeFormat"
        placement="top"
        :color="dotColor[index]"
      >
        <el-card :body-style="{ padding: '20px' }">
          <div class="cardBox" @click="$bus.$emit('intoArticle', art.id)" @mouseenter="intoBox(index)" @mouseleave="outBox(index)">
            <img :src="art.imgPath" alt="" />
            <div class="titleBox">
              <h4>{{ art.title }}</h4>
              <p>
                <el-tag size="mini" type="info" :key="'cate'"> 分类：{{art.artCate}}</el-tag>
                <el-tag size="mini" type="info" v-for="(tag, index) in JSON.parse(art.artTag)" :key="index">#{{
                  tag
                }}</el-tag>
              </p>
            </div>
          </div>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dotColor: [],
    };
  },
  props: ['artList'],
  methods: {

    intoBox(index) {
      this.$set(this.dotColor, index, '#b6cfff');
    },
    outBox(index) {
      this.$set(this.dotColor, index, '');
    },
  },
  // filters: {
  //   timeFormat(val) {
  //     console.log(this);
  //     return this.$dayjs(val).format('MM/DD/YYYY');
  //   },
  // },
  mounted() {
  },
};
</script>

<style lang="less" scoped>
.articleTimeLine {
  width: 100%;
  :deep(.el-timeline-item__timestamp) {
    font-size: 20px;
    font-family: 'eafont';
    font-weight: lighter;
  }
  :deep(.el-timeline-item__node) {
    top: 5px;
  }
  :deep(.el-timeline-item__tail) {
    top: 5px;
  }
  .cardBox {
    display: flex;
    align-items: center;
    img {
      width: 50px;
      height: 50px;
      border-radius: 5px;
      margin-right: 20px;
    }
    .titleBox {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 50px;
      h4 {
        font-size: 16px;
        font-weight: lighter;
        font-family: 'monospace';
      }
      p {
        span {
          margin-right: 10px;
        }
      }
    }
  }
  .cardBox:hover {
    cursor: pointer;
  }
}
</style>
