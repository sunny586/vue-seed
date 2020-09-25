<template>
  <div class="eg">
    <div class="top-header">
      <div class="icon" @click="goIndex()"></div>
      {{ $route.meta.title }}
    </div>
    <router-view class="rv"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {},
  methods: {
    goIndex() {
      this.$router.push({
        path: '/'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.eg {
  padding: 0 12px;
  height: 100%;
  .top-header {
    height: 48px;
    line-height: 48px;
    font-size: 18px;
    margin-bottom: 24px;
    .icon {
      display: inline-block;
      width: 24px;
      height: 24px;
      background-image: url(https://zos.alipayobjects.com/rmsportal/RfxDFanyfhEhOkynbPXizskAQqkPmPkR.png);
      background-size: cover;
      position: relative;
      top: 6px;
      margin-right: 20px;
    }
  }
  .rv {
    height: calc(100% - 48px - 24px);
  }
}
</style>
