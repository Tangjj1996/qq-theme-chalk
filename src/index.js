import Icon from '@package/Icon';

export default {
  install(vue, options) {
    console.log(options, '-----------');
    vue.commponent(Icon.name, Icon);
  },
};
