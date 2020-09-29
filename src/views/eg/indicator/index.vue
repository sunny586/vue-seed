<template>
  <div class="eg-indicator">
    <qzd-button @click="indicator()">Indicator 加载指示框</qzd-button>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    indicator() {
      this.$indicator.open()
      setTimeout(() => {
        this.$indicator.close()
      }, 2000)
    }
  }
}
</script>

<style lang="scss" scoped></style>
