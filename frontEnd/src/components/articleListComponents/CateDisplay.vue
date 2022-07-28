<template>
  <div class="cateDisplay">
    <ul class="cateList">
      <!-- 所有文章li -->
      <li
        :key="'all'"
        :class="{ cate: true, active: 'all' == activeCate }"
        :style="{ backgroundImage: `url(http://localhost:8088/assets/image/cateList/all.jpeg)` }"
        @click="clickFn('all')"
      >
        <div class="shadow"></div>
        <div class="content">
          <div class="icon">A</div>
          <div class="text">
            <div class="tit">All</div>
            <div class="sub">所有文章</div>
          </div>
        </div>
      </li>
      <li
        v-for="cate in cateList"
        :key="cate.name"
        :class="{ cate: true, active: cate.name == activeCate }"
        :style="{ backgroundImage: `url(${cate.imgPath})` }"
        @click="clickFn(cate.name)"
      >
        <div class="shadow"></div>
        <div class="content">
          <div class="icon">{{cate.name[0]}}</div>
          <div class="text">
            <div class="tit">{{ cate.name }}</div>
            <div class="sub">{{ cate.discription }}</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeCate: 'all',
    };
  },
  props: ['cateList'],
  methods: {
    clickFn(active) {
      this.activeCate = active;
    },
  },
};
</script>

<style lang="less" scoped>
.cateDisplay {
  width: 100%;
  ul {
    width: 100%;
    height: 400px;
    display: flex;
    li {
      position: relative;
      width: 60px;
      margin: 5px;
      // background-image: url(http://localhost:8088/assets/image/cateList/css.png);
      background-position: center;
      background-size: cover;
      overflow: hidden;
      border-radius: 30px;
      border: 1px dotted #ccc;
      box-shadow: 7px 7px 12px rgba(0, 0, 0, 0.4), -7px -7px 12px rgba(255, 255, 255, 0.9);
      transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
      .shadow {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 100px;
        transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
      }
      .content {
        display: flex;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 10px;
        height: 40px;
        .icon {
          min-width: 40px;
          width: 40px;
          height: 40px;
          // background: radial-gradient(circle at top center,#56ecc7,#6067f3);
          background-color: #fff;
          border-radius: 50%;
          border: 1px solid #ccc;
          overflow: hidden;
          margin: 0 10px;
          transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
        }
        .text {
          color: white;
          flex: 1;
          overflow: hidden;
          opacity: 0;
          transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
          div {
            // width: calc(100% - 70px);
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            transition: opacity 0.5s ease-out;
          }
        }
      }
    }
    li:hover{
      transform: scale(103%);
    }
    li.active {
      flex: 1;
      .shadow {
        background: linear-gradient(to top, rgba(0, 0, 0, 0.35) 65%, transparent);
      }
      .content {
        .text {
          opacity: 1;
        }
      }
    }
  }
}
</style>
