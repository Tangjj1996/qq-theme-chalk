<template>
  <div class="svg_default" v-html="iconHtml" />
</template>

<script>
import Icon from '@asset/apad_close_popup.svg';

export default {
  name: 'Icon',
  computed: {
    iconHtml() {
      return Icon;
    },
  },
};
</script>

<style scoped>
.svg_default {
  width: 16px;
  height: 16px;
  fill: currentColor;
}
</style>
