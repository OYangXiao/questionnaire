<template>
  <div class="content-frame">
    <top-bar :name="user.name"></top-bar>
    <div class="sidebar-and-form">
      <side-nav :role="user.role" :current-page="currentPage" @select-page="selectPage"></side-nav>
      <div class="form-wrapper">
        <form-page v-if="currentPage === '测评入口'" @submit-done="currentPage = null"></form-page>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.content-frame {
  height: 100%;
  background-color: #fbfbfb;
}
.sidebar-and-form {
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding-top: 80px;
  padding-bottom: 20px;
  display: flex;
  align-items: flex-start;
  .form-wrapper {
    overflow-y: auto;
    margin-left: 30px;
    background-color: white;
    flex: 1;
    height: 100%;
    &>div{
      width: max-content;
    }
  }
}
</style>
<script>
import TopBar from './TopBar.vue';
import SideNav from './SideNav.vue';
import FormPage from '@/components/FormPage';

import * as apis from '@/apis';

export default {
  props: ['user'],
  components: { TopBar, SideNav, FormPage },
  data() {
    return {
      currentPage: null,
    };
  },
  mounted() {
    apis.checkDone().then((res) => {
      if (res.data.ok) {
        this.currentPage = '测评入口';
      }
    });
  },
  methods: {
    selectPage(page) {
      this.currentPage = page;
    },
  },
};
</script>
