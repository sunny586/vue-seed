<template>
  <div class="eg-indicator">
    <button @click="indicator()">indicator</button>
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

<style lang="scss" scoped>
.eg-indicator {
  button {
    display: block;
    width: 100%;
    color: #427aff;
    border: 1px solid #427aff;
    border-radius: 4px;
    padding: 10px;
    text-align: center;
    background-color: #fff;
    font-size: 16px;
    outline: none;
  }
}
</style>
