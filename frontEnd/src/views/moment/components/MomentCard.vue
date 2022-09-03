<template>
  <div class="card">
    <div class="box">
      <div class="content">{{ moment.content }}</div>
      <div class="info">
        <div class="title">《{{ moment.title }}》</div>
        <div class="pubTime">@{{ moment.pubTime | timeFormat }}</div>
        <div class="tags">
          <el-tag size="mini" type="info" v-for="(tag, index) in JSON.parse(moment.tags)" :key="index"
            >#{{ tag }}</el-tag
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['moment'],
};
</script>

<style lang="less" scoped>
.card {
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
  margin-bottom: 10px;
  .box {
    overflow: hidden;
    border-radius: 10px;
    border: 1px solid #ccc;
    padding: 20px;
    background-color: #eee;
    box-shadow: 7px 7px 12px rgba(0, 0, 0, 0.4), -7px -7px 12px rgba(255, 255, 255, 0.9);
    transition: all 0.5s;
    .content {
      width: 100%;
      font-size: 16px;
      // font-weight: lighter;
      font-family: monospace;
      line-height: 22px;
    }
    .info {
      margin-top: 20px;
      width: 100%;
      font-size: 20px;
      text-align: center;
      .title {
        font-weight: lighter;
        padding-bottom: 5px;
      }
      .pubTime {
        font-size: 18px;
        padding-top: 5px;
        border-top: 1px solid #000;
        // font-family: monospace;
        font-style: italic;
        font-weight: lighter;
      }
      .tags {
        .el-tag {
          margin-right: 5px;
          border: 1px #ccc solid;
        }
      }
    }
  }
  .box:hover {
    transform: scale(103%);
  }
}
</style>
