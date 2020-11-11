import qqComponent from '@package/components';

export default {
  install(vue) {
    vue.component(qqComponent.name, qqComponent);
  },
};
