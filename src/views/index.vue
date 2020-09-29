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
          name: 'Button 按钮'
        },
        {
          path: '/eg/indicator',
          name: 'Indicator 加载指示框'
        },
        {
          path: '/eg/toast',
          name: 'Toast 提示框'
        },
        {
          path: '/eg/popup',
          name: 'Popup 弹层'
        },
        {
          path: '/eg/scroll-y',
          name: 'Scroll-Y 列表滑动'
        },
        {
          path: '/eg/tab',
          name: 'Tab 选项卡'
        },
        {
          path: '/eg/picker',
          name: 'Picker 选择器'
        },
        {
          path: '/eg/popup-select',
          name: 'Popup-Select 弹层选择框'
        },
        {
          path: '/eg/cell',
          name: 'Cell 单元格'
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
