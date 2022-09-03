<template>
  <div class="sayHello">
    <!-- hello -->
    <div class="hello">Hello!</div>

    <div class="item">Here is J2J.</div>
    <ul>
      <li><i class="el-icon-location-outline"></i>Hangzhou, Zhejiang</li>
      <li><i class="el-icon-school"></i>Hangzhou Normal University</li>
      <li>27 now</li>
    </ul>
    <div class="item">I am:</div>
    <ul>
      <li v-for="(item, index) in aboutMe" :key="index">{{ item }}</li>
    </ul>

    <div class="welcome">Welcome to have a look~</div>
  </div>
</template>

<script>
export default {
  name: "SayHello",
  props: {
    aboutMe: {
      type: Array,
      default: () => ["..."],
    },
  },
};
</script>

<style lang="less" scoped>
.sayHello {
  flex: 1;
  display: flex;
  // align-items: center;
  flex-direction: column;
  justify-content: center;
  div:not(.hello, .welcome),
  ul {
    padding: 5px 0;
    margin-left: 200px;
  }
  li {
    padding-left: 15px;
    margin: 3px 0;
  }
}
.item {
  font-size: 20px;
}
.hello {
  text-align: center;
  font-size: 30px;
  padding-bottom: 30px;
}
.welcome {
  text-align: center;
  font-size: 20px;
  margin: 20px 0;
}
</style>
