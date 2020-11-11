<template>
  <div class="toast">
    <span>{{ message }}</span>
    <span>{{ status | statusFilter }}</span>
  </div>
</template>

<script>
export default {
  filters: {
    statusFilter(val) {
      return val === 'success' ? '复制成功' : '复制失败'
    }
  },
  data() {
    return {
      message: '',
      status: ''
    }
  },
}
</script>

<style scoped lang='scss'>
.toast {
  position: absolute;
  left: 50%;
  top: 20px;
  transform: translateX(-50%);
  min-width: 100px;
  height: 50px;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 4px;
  box-shadow: 0 0 6px rgba($color: #000000, $alpha: 0.3);
  padding: 0 5px;

  & > span:last-child {
    margin-top: 4px;
  }
}
</style>