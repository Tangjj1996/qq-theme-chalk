import Vue from 'vue';

import app from './app';

require('normalize.css');
require('./app.scss');

if (module.hot) {
  module.hot.accept();
}

new Vue({
  render: (h) => h(app),
}).$mount('#qq-theme-framework-app');
