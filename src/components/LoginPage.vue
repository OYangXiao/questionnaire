<template>
  <div class="login-page-wrapper">
    <div class="login-page">
      <h1>2020年度考核测评</h1>
      <div class="login-form">
        用户登录
        <input type="text" placeholder="请输入您的姓名" v-model.trim="name" />
        <button class="common-btn dark-btn" @click="login">登录</button>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.login-page-wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-page {
  text-align: center;
  width: max-content;
}
.login-form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  input,
  button {
    width: 100%;
  }
  input {
    margin: 10px 0 30px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
}
</style>
<script>
import * as apis from '@/apis';
export default {
  data() {
    return {
      name: '',
    };
  },
  methods: {
    login() {
      apis.login(this.name).then((res) => {
        if (res.data.ok) {
          return this.$emit('set-user', res.data.data);
        }
        alert('登陆失败，' + res.data.message);
      });
    },
  },
};
</script>
