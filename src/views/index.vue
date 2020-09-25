<template>
  <div class="home">
    <div class="header-title">移动端组件库</div>
    <router-link
      v-for="(item, idx) in list"
      :key="idx"
      :to="item.path"
      class="rl-item"
      tag="div"
    >
      <qzd-button>
        {{ item.name }}
      </qzd-button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  data() {
    return {
      list: [
        {
          path: '/eg/button',
          name: 'button'
        },
        {
          path: '/eg/indicator',
          name: 'indicator'
        },
        {
          path: '/eg/toast',
          name: 'toast'
        },
        {
          path: '/eg/popup',
          name: 'popup'
        },
        {
          path: '/eg/scroll-y',
          name: 'scroll-y'
        },
        {
          path: '/eg/tab',
          name: 'tab'
        },
        {
          path: '/eg/picker',
          name: 'picker'
        },
        {
          path: '/eg/popup-select',
          name: 'popup-select'
        }
      ]
    }
  },
  created() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.home {
  font-size: 12px;
  padding: 12px;
  .header-title {
    font-size: 18px;
    height: 36px;
    line-height: 36px;
    margin-bottom: 12px;
  }
  .rl-item {
    margin-bottom: 12px;
  }
}
</style>
