<template>
  <div class="icon_svg_wrap">
    <ul>
      <li ref="btn" data-clipboard-text="<qq-theme-framework icon='qq-close'/>" @click="handelClick">
        <icon-com icon="qq-close" class="card" />
      </li>
    </ul>
  </div>
</template>

<script>
import Clipboard from 'clipboard'

import IconCom from './components'

import toast from './toast'

export default {
  components: {
    IconCom
  },
  methods: {
    handelClick() {
      const clipboard = new Clipboard(this.$refs.btn)
      clipboard.on('success', e => {
        toast({
          message: e.text,
          status: 'success'
        })
      })
      clipboard.on('error', () => {
        toast({
          message: '',
          status: 'error'
        })
      })
    }
  }
}
</script>

<style scoped lang='scss'>
.icon_svg_wrap {
  .card {
    width: 100px;
    height: 100px;
    cursor: pointer;
  }

  ul {
    display: flex;
  }
}
</style>