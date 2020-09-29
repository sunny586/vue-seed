<template>
  <div class="eg">
    <div class="top-header">
      <div class="icon" @click="goIndex()"></div>
      {{ $route.meta.title }}
      <div class="look-api" tag="div" @click="lookApi()">
        查看文档
      </div>
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
    },
    lookApi() {
      const { href } = this.$router.resolve({
        path: '/doc/' + this.$route.meta.path
      })
      window.open(href, '_blank')
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
    position: relative;
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
    .look-api {
      position: absolute;
      top: 0;
      right: 0;
      color: #427aff;
    }
  }
  .rv {
    height: calc(100% - 48px - 24px);
  }
}
</style>
<style lang="scss">
.eg-block-title {
  font-size: 14px;
  height: 32px;
  line-height: 32px;
  color: #333;
}
</style>
