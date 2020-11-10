import Icon from './Icon/index.vue';

export default {
  install(vue, options) {
    console.log(options, '-----------');
    vue.commponent(Icon.name, Icon);
  },
};
