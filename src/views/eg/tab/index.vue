<template>
  <div>
    <qzd-tab
      class="ol-ly-tab"
      v-model="selectedIdx"
      :items="items"
      :options="options"
      @change="handleTabChange"
    >
    </qzd-tab>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedIdx: 0,
      items: [
        { label: '全部', code: 0 },
        { label: '待付款', code: 1 },
        { label: '已付款', code: 2 },
        { label: '服务中', code: 3 },
        { label: '已完结', code: 4 }
      ],
      options: {
        activeColor: '#427aff'
      }
    }
  },
  methods: {
    handleTabChange(data) {
      console.log(data)
    }
  }
}
</script>

<style lang="scss" scoped></style>
