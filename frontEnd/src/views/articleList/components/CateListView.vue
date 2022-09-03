<template>
  <div class="cateListView">
    <cate-display :cateList="cateList"></cate-display>
    <ul class="articleDisplay">
      <li
        class="artCard"
        v-for="art in artList"
        :key="art.id"
        @click="$bus.$emit('intoArticle', art.id)"
      >
        <div class="imgBox">
          <div class="innerImg">{{ art.title[0] }}</div>
        </div>
        <div class="titleBox">{{ art.title }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import CateDisplay from "./CateDisplay.vue";
import { baseURL } from "@/constant";
export default {
  data() {
    return {
      cateList: [
        {
          name: "JS",
          discription: "前端语言JavaScript",
          imgPath: baseURL + "/assets/image/cateList/js.png",
        },
        {
          name: "Vue",
          discription: "渐进式JavaScript框架",
          imgPath: baseURL + "/assets/image/cateList/vue.png",
        },
        {
          name: "CSS",
          discription: "布局，动画和美",
          imgPath: baseURL + "/assets/image/cateList/css.png",
        },
        {
          name: "LeetCode",
          discription: "刷刷刷",
          imgPath: baseURL + "/assets/image/cateList/leetcode.png",
        },
        {
          name: "Notes",
          discription: "自学笔记",
          imgPath: baseURL + "/assets/image/cateList/note.jpeg",
        },
        {
          name: "Tools",
          discription: "软件使用Tricks&Tips",
          imgPath: baseURL + "/assets/image/cateList/tools.webp",
        },
        {
          name: "Other",
          discription: "其它",
          imgPath: baseURL + "/assets/image/cateList/other.jpeg",
        },
      ],
    };
  },
  props: ["artList"],
  components: { CateDisplay },
};
</script>

<style lang="less" scoped>
.cateListView {
  width: 100%;
  .articleDisplay {
    margin-top: 20px;
    li {
      display: flex;
      height: 100px;
      background-color: #eee;
      margin-bottom: 20px;
      border-radius: 20px;
      transition: 0.2s all ease-in-out;
      box-shadow: 7px 7px 12px rgba(0, 0, 0, 0.4),
        -7px -7px 12px rgba(255, 255, 255, 0.9);
      .imgBox {
        width: 100px;
        // margin-right: 20px;
        padding: 15px;
        .innerImg {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 40px;
          background-color: #fff;
          border-radius: 20px;
        }
      }
      .titleBox {
        flex: 1;
        height: 73%;
        display: flex;
        align-items: end;
        font-size: 26px;
        transition: all 2s linear;
      }
    }
    li:hover {
      transform: scale(104%);
      .titleBox {
        text-decoration: underline;
      }
    }
  }
}
</style>
