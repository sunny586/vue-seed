<template>
  <div>
    <div class="eg-block-title">普通按钮</div>
    <qzd-button>default</qzd-button>
    <div class="eg-block-title">主要按钮</div>
    <qzd-button type="primary">primary</qzd-button>
    <div class="eg-block-title">普通按钮（禁用）</div>
    <qzd-button disabled>inline</qzd-button>
    <div class="eg-block-title">主要按钮（禁用）</div>
    <qzd-button type="primary" disabled>inline</qzd-button>
    <div class="eg-block-title">inline按钮</div>
    <qzd-button inline>inline</qzd-button>&nbsp;
    <qzd-button type="primary" inline>inline</qzd-button>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {}
}
</script>
