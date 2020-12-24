<template>
  <div class="top-bar-wrapper">
    <div class="top-bar">
      <span>2020年度考核测评</span>
      <span>{{ name }}</span>
    </div>
  </div>
</template>
<style lang="less" scoped>
.top-bar-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  width: 100%;
  height: 60px;
}
.top-bar {
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
<script>
export default {
  props: ['name'],
};
</script>
