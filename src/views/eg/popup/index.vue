<template>
  <div class="eg-popup">
    <qzd-button @click="testPopupTop()">top</qzd-button>
    <br />
    <qzd-button @click="testPopupBottom()">bottom</qzd-button>
    <br />
    <qzd-button @click="testPopupLeft()">left</qzd-button>
    <br />
    <qzd-button @click="testPopupRight()">right</qzd-button>
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

<style lang="scss" scoped></style>
