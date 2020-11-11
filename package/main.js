import Vue from 'vue';

import app from './app';

if (module.hot) {
  module.hot.accept();
}

new Vue({
  render: (h) => h(app),
}).$mount('#qq-theme-framework-app');
