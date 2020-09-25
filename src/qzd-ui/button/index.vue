<template>
  <div
    :class="`jiao-btn jiao-btn-${type} ${disabled ? 'disabled' : ''}`"
    @click="btnClick()"
    :style="`${inline ? 'display: inline-block;padding: 0 12px;' : ''}`"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'default'
    },
    inline: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
  methods: {
    btnClick() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
.jiao-btn {
  display: block;
  position: relative;
  color: #427aff;
  border: 1px solid #427aff;
  border-radius: 4px;
  text-align: center;
  background-color: #fff;
  outline: none;
  font-size: 18px;
  height: 47px;
  line-height: 47px;
  -webkit-touch-callout: none;
  user-select: none;
}
.jiao-btn-primary {
  color: #fff;
  background-color: #427aff;
}
.jiao-btn::before {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background-color: #000;
  border: inherit;
  border-color: #000;
  border-radius: inherit;
  transform: translate(-50%, -50%);
  opacity: 0;
  content: ' ';
}
.jiao-btn:active::before {
  opacity: 0.1;
}
.jiao-btn.disabled {
  color: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.2);
  pointer-events: none;
}
.jiao-btn-primary.disabled {
  color: hsla(0, 0%, 100%, 0.6);
  opacity: 0.6;
  pointer-events: none;
}
</style>
