<template>
  <div class="svg_default" v-html="iconHtml" />
</template>

<script>
import qqClose from '@asset/apad_close_popup.svg';

export default {
  name: 'QqThemeFramework',
  props: {
    icon: {
      type: String,
      default: 'qq-close',
    },
  },
  computed: {
    iconHtml() {
      let res = '';
      switch (this.icon) {
        case 'qq-close':
          res = qqClose;
          break;
        default:
      }

      return res;
    },
  },
};
</script>

<style scoped>
.svg_default {
  width: 16px;
  height: 16px;
  fill: currentColor;
  vertical-align: middle;
}
</style>
