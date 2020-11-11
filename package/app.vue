<template>
  <div>
    <ul>
      <li ref="btn" @click="handelClick">
        <icon-com icon="qq-close" class="card" />
      </li>
    </ul>
  </div>
</template>

<script>
import Clipboard from 'clipboard'

import IconCom from './components'

export default {
  components: {
    IconCom
  },
  methods: {
    handelClick() {
      const clipboard = new Clipboard(this.$refs.btn)
      clipboard.on('success', () => {
        console.log(11111)
      })
    }
  }
}
</script>

<style scoped lang='scss'>
.card {
  width: 100px;
  height: 100px;
  cursor: pointer;
}
</style>