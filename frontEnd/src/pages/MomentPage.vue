<template>
  <div class="momentPage">
    <div class="pageContainer">
      <page-header :title="'Moments'"></page-header>
      <!-- 发布区&搜索区 -->
      <div class="publishBox">
        <el-input type="textarea" :autosize="{ minRows: 4, maxRows: 10 }" placeholder="请输入内容" v-model="textarea">
        </el-input>
      </div>
      <div class="btnBox">
        <el-button size="small" icon="el-icon-search" round>搜索</el-button>
        <el-button size="small" icon="el-icon-check" round>发布</el-button>
      </div>
      <!-- 查看区 -->
      <div class="momentsBox">
        <div class="cardBox">
          <el-card :body-style="{ width: '300px', padding: '0px' }">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            />
            <div style="padding: 14px">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </div>
        <div class="cardBox">
          <el-card :body-style="{ width: '300px', padding: '0px' }">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            />
            <div style="padding: 14px">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </div>
        <div class="cardBox">
          <el-card :body-style="{ width: '300px', padding: '0px' }">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            />
            <div style="padding: 14px">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
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
.momentPage {
  display: flex;
  .pageContainer {
    margin: auto;
    width: 930px;
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
      .cardBox {
        // margin: 0 5px;
        //卡片样式
        .el-card {
          .time {
            font-size: 13px;
            color: #999;
          }
          .bottom {
            margin-top: 13px;
            line-height: 12px;
          }
          .button {
            padding: 0;
            float: right;
          }
          .image {
            width: 100%;
            display: block;
          }
          .clearfix:before,
          .clearfix:after {
            display: table;
            content: '';
          }
          .clearfix:after {
            clear: both;
          }
        }
      }
    }
  }
}
</style>
