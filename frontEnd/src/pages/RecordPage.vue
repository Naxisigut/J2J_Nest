<template>
  <div class="recordPage">
    <div class="pageContainer">
      <page-header :title="'Life'"></page-header>
      <!-- 发布区&搜索区 -->
      <div class="pubArea">
        <div class="publishBox">
          <el-input type="textarea" :autosize="{ minRows: 4, maxRows: 10 }" placeholder="请输入内容" v-model="textarea">
          </el-input>
        </div>
        <div class="btnBox">
          <i class="el-icon-picture-outline"></i>
          <el-button size="small" icon="el-icon-check" round>发布</el-button>
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
      textarea: '',
    };
  },
};
</script>

<style lang="less" scoped>
.recordPage {
  display: flex;
  .pageContainer {
    width: 700px;
    margin: auto;
    //发布区样式
    .pubArea {
      .btnBox {
        margin: 20px 0;
        display: flex;
        justify-content: end;
        button{
          margin-left: 20px;
        }
        .el-button:focus,
        .el-button:hover {
          color: #606266;
          border-color: #dcdfe6;
          background-color: #eee;
        }
        i {
          line-height: 32px;
          font-size: 24px;
          color: #dcdfe6;
        }
      }
    }
  }
}
</style>
