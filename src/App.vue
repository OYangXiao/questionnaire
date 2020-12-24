<template>
  <div id="app">
    <login-page v-if="!user" @set-user="setUser"></login-page>
    <content-frame v-else :user="user"></content-frame>
  </div>
</template>

<script>
import LoginPage from './components/LoginPage.vue';
import ContentFrame from './components/ContentFrame.vue';
export default {
  name: 'App',
  components: { LoginPage, ContentFrame },
  data() {
    return {
      user: { name: '123', role: 'juzhang' },
      loading: false,
    };
  },
  methods: {
    setUser(user) {
      this.user = user;
    },
  },
};
</script>

<style lang="less">
* {
  box-sizing: border-box;
}
html,
body,
#app {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Helvetica, Tahoma, Arial, STXihei, 'Microsoft YaHei', '微软雅黑', SimSun, '宋体',
    Heiti, '黑体', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
