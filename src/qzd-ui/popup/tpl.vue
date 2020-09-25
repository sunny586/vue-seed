<template>
  <transition name="popup-fade">
    <div class="popup-tpl" v-show="visiable" @click="maskClick($event)">
      <div :class="`bp-content ${directionClass}`">
        <component-slot :vm="vm" :data="data"></component-slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {},
  components: {},
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.popup-tpl {
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  .bp-content {
    position: absolute;
    background-color: #fff;
    width: 100%;
  }
  .bpc-right {
    right: 0;
    top: 0;
    width: 70%;
    height: 100%;
  }
  .bpc-left {
    left: 0;
    top: 0;
    width: 70%;
    height: 100%;
  }
  .bpc-bottom {
    left: 0;
    bottom: 0;
  }
  .bpc-top {
    left: 0;
    top: 0;
  }
}
.popup-fade-enter-active {
  transition: all 0.5s ease;
}
.popup-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.popup-fade-enter,
.popup-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
