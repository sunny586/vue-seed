<template>
  <div class="eg-popup">
    <button @click="testPopupTop()">top</button>
    <button @click="testPopupBottom()">bottom</button>
    <button @click="testPopupLeft()">left</button>
    <button @click="testPopupRight()">right</button>
  </div>
</template>
<script>
import Test from './test'

export default {
  data() {
    return {
      popTop: new this.$popup({
        component: Test,
        direction: 'top'
      }),
      popBottom: new this.$popup({
        component: Test,
        direction: 'bottom'
      }),
      popLeft: new this.$popup({
        component: Test,
        direction: 'left'
      }),
      popRight: new this.$popup({
        component: Test,
        direction: 'right'
      })
    }
  },
  methods: {
    testPopupTop() {
      this.popTop.open()
    },
    testPopupBottom() {
      this.popBottom.open()
    },
    testPopupLeft() {
      this.popLeft.open()
    },
    testPopupRight() {
      this.popRight.open()
    }
  },
  destroyed() {
    this.popTop.remove()
    this.popBottom.remove()
    this.popLeft.remove()
    this.popRight.remove()
  }
}
</script>

<style lang="scss" scoped>
.eg-popup {
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
    margin-bottom: 8px;
  }
}
</style>
