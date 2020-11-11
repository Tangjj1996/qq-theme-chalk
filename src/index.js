import qqComponent from '@package/components';

const install = function (Vue) {
  Vue.use(qqComponent);
};

export default {
  install,
  test: 'this is a test',
};
