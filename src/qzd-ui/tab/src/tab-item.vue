<template>
  <a
    class="ly-tab-item"
    :style="$parent.value === id ? activeStyle : {}"
    @click="onItemClicked"
  >
    <div class="ly-tab-item-icon" v-if="$parent.fixBottom">
      <slot name="icon"></slot>
    </div>
    <div
      class="ly-tab-item-label"
      :style="$parent.value === id ? activeLabelStyle : {}"
    >
      <slot></slot>
    </div>
  </a>
</template>

<script>
export default {
  name: 'LyTabItem',
  computed: {
    activeStyle() {
      return {
        color: this.$parent.activeColor
      }
    },
    activeLabelStyle() {
      return {
        fontWeight: 500
      }
    }
  },
  data() {
    return {
      id: (this.$parent.$children.length || 1) - 1
    }
  },
  methods: {
    onItemClicked() {
      this.$parent.$emit('input', this.id)
    }
  }
}
</script>

<style lang="scss">
.ly-tab-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  text-align: center;
  line-height: 20px;
}

.ly-tab-item-icon {
  margin: 0 auto 5px;
}
</style>
