<template>
  <div class="form-page" v-if="currentForm">
    <h1>{{ currentForm.formName }}</h1>
    <person-form v-if="currentForm.kind === 'person'" :persons="currentForm.persons"></person-form>
    <div class="form-actions">
      <button class="common-btn white-btn" v-if="currentFormIndex > 0" @click="currentFormIndex--">
        上一页
      </button>
      <button
        class="common-btn dark-btn"
        v-if="currentFormIndex < formData.length - 1"
        @click="gotoNextForm"
      >
        下一页
      </button>
      <button
        class="common-btn dark-btn"
        v-if="currentFormIndex === formData.length - 1"
        @click="submit"
      >
        提交
      </button>
    </div>
  </div>
</template>
<style lang="less" scoped>
.form-page {
  margin: 0 auto;
  text-align: center;
}
.form-actions {
  margin-top: 20px;
  button {
    width: 120px;
    margin-right: 30px;
    &:last-of-type {
      margin-right: 0;
    }
  }
}
</style>
<script>
import * as apis from '@/apis';
import PersonForm from '@/components/PersonForm.vue';
export default {
  components: { PersonForm },
  data() {
    return {
      formData: null,
      currentFormIndex: 0,
    };
  },
  computed: {
    currentForm() {
      return this.formData && this.formData[this.currentFormIndex];
    },
  },
  mounted() {
    apis.getFormConfigs().then((res) => {
      if (res.data.ok) {
        this.processFormConfigs(res.data.data);
      }
    });
    // TODO: test code
    this.processFormConfigs([
      {
        formName: '处室主要负责人2020年度考核测评表',
        kind: 'person',
        names: ['001', '002', '003', '004', '005'],
      },
      {
        formName: '处室考核测评表',
        kind: 'dept',
        names: ['处01', '处02', '处03', '处04', '处05'],
      },
    ]);
  },
  methods: {
    processFormConfigs(configs) {
      this.formData = configs.map(({ names, ...others }) => ({
        ...others,
        persons: names.map((name) => ({
          name,
          score: { a: null, b: null, c: null, d: null, e: null, all: null, remark: '' },
        })),
      }));
    },
    gotoNextForm() {
      this.currentFormIndex++;
    },
    submit() {
      apis.submit().then((res) => {
        if (res.data.ok) {
          alert('提交成功，本页面将关闭');
          return this.$emit('submit-done');
        }
        alert('提交失败');
      });
    },
  },
};
</script>
