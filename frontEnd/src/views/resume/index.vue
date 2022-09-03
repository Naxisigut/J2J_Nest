<template>
  <div class="introPage">
    <div class="pageContainer">
      <!-- <page-header :title="'个人简历'"></page-header> -->

      <div class="display">
        <!-- hello -->
        <SayHello :aboutMe="[...aboutMe, '...']"></SayHello>
        <div class="gap"></div>
        <!-- content -->
        <BriefDisplay></BriefDisplay>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
import SayHello from "./components/SayHello.vue";
import BriefDisplay from "./components/BriefDisplay.vue";
export default {
  name: "ResumeIndex",
  components: { PageHeader, SayHello, BriefDisplay },
  data() {
    return {
      aboutMe: ["a Christian", "an ordinary programmer"],
    };
  },
};
</script>

<style lang="less" scoped>
.introPage {
  height: 100vh;
  display: flex;
  .pageContainer {
    // min-width: 700px;
    min-width: 80vw;
    margin: auto;
    // background-color: lightgray;
  }
}
.display {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  min-height: 80vh;
}

@media (min-width: 1024px) {
  .gap {
    width: 2px;
    height: inherit;
    background-color: #ccc;
    // margin: 0 5vw;
  }
}
</style>
