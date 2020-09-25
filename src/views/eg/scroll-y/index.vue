<template>
  <div class="eg-scroll-y">
    <qzd-scroll-y
      ref="olScrollRef"
      pullup
      pulldown
      @scrollToEnd="scrollToEndChange()"
      @scrollPulldown="scrollPulldownChange()"
      :data="list"
    >
      <div v-for="(item, i) in list" :key="i" class="test-item">
        {{ item }}
      </div>
    </qzd-scroll-y>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      current: 1,
      pageSize: 20
    }
  },
  created() {
    this.loadData()
  },
  mounted() {},
  methods: {
    loadData(str) {
      const params = {}
      params.current = this.current
      params.pageSize = this.pageSize
      // 模拟调接口取数据
      if (this.$refs.olScrollRef && this.$refs.olScrollRef.reInit) {
        this.$refs.olScrollRef.reInit()
      }
      this.getData({ ...params }, res => {
        if (res.code === 0) {
          if (this.$refs.olScrollRef && this.$refs.olScrollRef.finishLoad) {
            this.$refs.olScrollRef.finishLoad(str)
          }
          if (res.data.length === 0) {
            this.$refs.olScrollRef.loadedDone()
          } else {
            if (this.current === 1) {
              this.list = res.data
            } else {
              this.list = [...this.list, ...res.data]
            }
          }
        }
      })
    },
    scrollToEndChange() {
      this.current += 1
      this.loadData()
    },
    scrollPulldownChange() {
      this.current = 1
      this.loadData('pulldown')
    },
    getData(params, callback) {
      const arr = []
      for (let i = 0; i < this.pageSize; i++) {
        arr.push(i)
      }
      setTimeout(() => {
        callback({
          code: 0,
          data: this.current === 5 ? [] : arr
        })
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
.eg-scroll-y {
  height: 100%;
  .test-item {
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 16px;
    border-bottom: 1px solid #ddd;
  }
}
</style>
