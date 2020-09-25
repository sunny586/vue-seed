<template>
  <div class="qzd-toast" v-if="showWrap">
    {{ text }}
  </div>
</template>

<style scoped lang="scss">
.qzd-toast {
  position: fixed;
  left: 50%;
  top: 50%;
  background: rgba(0, 0, 0, 0.7);
  padding: 12px;
  border-radius: 2px;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 14px;
  border-radius: 4px;
}
</style>
