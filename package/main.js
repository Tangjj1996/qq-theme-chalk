import Vue from 'vue';

import Icon from './Icon';

if (module.hot) {
  module.hot.accept();
}

new Vue({
  render: (h) => h(Icon),
}).$mount('#qq-theme-framework-app');
