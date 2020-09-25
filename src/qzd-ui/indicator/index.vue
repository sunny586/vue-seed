<template>
  <div class="qzd-indicator" v-if="visible">
    <div class="qzd-indicator-wrap">
      <div class="load-effect">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'qzd-indicator',
  data() {
    return {
      visible: false // visible
    }
  }
}
</script>

<style lang="scss" scoped>
.qzd-indicator {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  // background-color: #fff;
  .qzd-indicator-wrap {
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    width: 60px;
    height: 60px;
    top: 50%;
    left: 50%;
    margin-top: -30px;
    margin-left: -30px;
    z-index: 100;
    border-radius: 10px;
  }
  .load-effect {
    width: 40px;
    height: 40px;
    position: relative;
    margin: 0 auto;
    margin-top: 10px;
    span {
      display: inline-block;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: #fff;
      position: absolute;
      animation: load 1.04s ease infinite;
    }
    span:nth-child(1) {
      left: 0;
      top: 50%;
      margin-top: -4px;
      animation-delay: 0.13s;
    }
    span:nth-child(2) {
      left: 4px;
      top: 4px;
      animation-delay: 0.26s;
    }
    span:nth-child(3) {
      left: 50%;
      top: 0;
      margin-left: -4px;
      animation-delay: 0.39s;
    }
    span:nth-child(4) {
      top: 4px;
      right: 4px;
      animation-delay: 0.52s;
    }
    span:nth-child(5) {
      right: 0;
      top: 50%;
      margin-top: -4px;
      animation-delay: 0.65s;
    }
    span:nth-child(6) {
      right: 4px;
      bottom: 4px;
      animation-delay: 0.78s;
    }
    span:nth-child(7) {
      bottom: 0;
      left: 50%;
      margin-left: -4px;
      animation-delay: 0.91s;
    }
    span:nth-child(8) {
      bottom: 4px;
      left: 4px;
      animation-delay: 1.04s;
    }
  }
}
@keyframes load {
  0% {
    transform: scale(2);
    opacity: 1;
  }
  100% {
    transform: scale(0.5);
    opacity: 0.5;
  }
}
</style>
