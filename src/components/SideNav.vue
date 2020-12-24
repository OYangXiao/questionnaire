<template>
  <nav class="side-nav">
    <button
      v-for="option in ['测评入口', '统计入口', '查看入口']"
      :key="option"
      :class="{ 'current-option': currentPage === option }"
      @click="$emit('select-page', option)"
    >
      {{ option }}
    </button>
  </nav>
</template>
<style lang="less" scoped>
.side-nav {
  flex: 0 0 200px;
  background-color: white;
  padding: 10px 0;
  button {
    width: 100%;
    display: block;
    padding: 10px 0;
    border: none;
    background-color: transparent;
    margin-bottom: 2px;
    &:last-of-type {
      margin-bottom: 0;
    }
    &:hover {
      background-color: #f4f4f4;
    }
  }
  .current-option {
    background-color: #f4f4f4;
  }
}
</style>
<script>
export default {
  props: ['role', 'currentPage'],
};
</script>
