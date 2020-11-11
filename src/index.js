import qqComponent from '@package/components';

const install = function (Vue) {
  Vue.component(qqComponent.name, qqComponent);
};

export default {
  install,
};
