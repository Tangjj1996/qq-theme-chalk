import Vue from 'vue';

import app from './components';

if (module.hot) {
  module.hot.accept();
}

new Vue({
  render: (h) => h(app),
}).$mount('#qq-theme-framework-app');
