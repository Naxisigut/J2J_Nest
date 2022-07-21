<template>
  <div class="index">
    <!-- 背景图片区 在非首页不显示-->
    <div
      class="indexHeader"
      @mousemove="handleMove"
      :style="{ backgroundPosition: `${percentX}% ${percentY}%` }"
      v-if="!$route.name"
    >
    <!-- 卡片导航区 -->
      <div class="welcome">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <div class="welText">welcome to</div>
            <span class="cardTitle">J2J Blog</span>
          </div>
          <div
            v-for="o in links"
            :key="o.title"
            class="text item"
            @click="$router.push({ name: o.routerName })"
            v-show="o.path != '/'"
          >
            {{ o.title }}
          </div>
        </el-card>
      </div>
    </div>
    
    <!-- 回到顶部按钮 -->
    <el-backtop :bottom="100">
      <div
        style="
           {
            height: 100%;
            width: 100%;
            background-color: #f2f5f6;
            box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
            text-align: center;
            line-height: 40px;
            color: #1989fa;
            font-size: 16px;
          }
        "
      >
        TOP
      </div>
    </el-backtop>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headerWidth: 0,
      percentX: 50,
      percentY: 50,
      links: [
        {
          title: '首页',
          routerName: 'index',
          path: '/',
        },
        {
          title: '文章归档',
          routerName: 'articleList',
          path: '/articleList',
        },
        {
          title: '灵光小记',
          routerName: 'moment',
          path: '/moment',
        },
        {
          title: '我的生活',
          routerName: 'record',
          path: '/record',
        },
        {
          title: '个人简历',
          routerName: 'intro',
          path: '/intro',
        },
        {
          title: '关于本站',
          routerName: 'about',
          path: '/about',
        },
      ],
    };
  },
  computed: {},
  methods: {
    handleMove(e) {
      this.percentX = 45 + (10 * e.pageX) / document.body.clientWidth;
      this.percentY = 45 + (10 * e.pageY) / document.body.clientHeight;
    },
    test(){
      console.log('test');
      this.$router.push({name:'test'})
    }
  },
  mounted() {
    // document.body.addEventListener('click', ()=>console.log(this.$route))
    // this.$router.push({name: 'about'})
    this.$bus.$on('test', this.test)
  },
};
</script>

<style lang="less" scoped>
.index {
  min-height: 2000px;
}
.indexHeader {
  display: flex;
  width: 100vw;
  height: 100vh;
  background: url(../assets/indexImg.jpg) no-repeat 50% 50%/1920px 1080px;
  .welcome {
    margin: auto;
    text-align: center;
    .welText {
      padding-bottom: 20px;
      font-family: 'Helvetica';
    }
    .cardTitle {
      font-size: 40px;
      font-weight: 600;
      font-family: 'Helvetica';
    }
    .text {
      font-size: 14px;
    }

    .item {
      margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
      display: table;
      content: '';
    }
    .clearfix:after {
      clear: both;
    }

    .box-card {
      width: 400px;
      min-height: 400px;
    }
  }
}
</style>
