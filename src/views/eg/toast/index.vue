<template>
  <div class="eg-toast">
    <button @click="toast()">toast</button>
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

<style lang="scss" scoped>
.eg-toast {
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
