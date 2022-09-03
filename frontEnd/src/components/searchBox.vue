<template>
  <div class="searchBox" @keyup.enter="$emit('enter', searchStr)">
    <span class="el-icon-search"></span>
    <input type="text" v-model="searchStr" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchStr: '',
    };
  },
};
</script>

<style lang="less" scoped>
.searchBox {
  flex: 1;
  padding-left: 35px;
  margin: 0 70px;
  border-bottom: 1px solid #000;
  position: relative;
  font-size: 20px;
  color: #606266;
  span {
    position: absolute;
    top: 5px;
    left: 5px;
  }
  input {
    color: #606266;
    font-size: 20px;
    display: block;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
  }
}
</style>
