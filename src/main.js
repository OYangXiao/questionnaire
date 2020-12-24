import Vue from 'vue';
import App from './App.vue';

require('./index.less');

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
