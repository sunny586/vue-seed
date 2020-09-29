<template>
  <div class="eg-toast">
    <qzd-button @click="toast()">Toast 提示框</qzd-button>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    toast() {
      this.$toast('测试toast')
    }
  }
}
</script>

<style lang="scss" scoped></style>
