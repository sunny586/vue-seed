<template>
  <div class="doc">
    <div class="top-header" v-if="isWx">
      <svg viewBox="0 0 1000 1000" class="demo-nav__back" @click="goBack()">
        <path
          fill="#969799"
          fill-rule="evenodd"
          d="M296.114 508.035c-3.22-13.597.473-28.499 11.079-39.105l333.912-333.912c16.271-16.272 42.653-16.272 58.925 0s16.272 42.654 0 58.926L395.504 498.47l304.574 304.574c16.272 16.272 16.272 42.654 0 58.926s-42.654 16.272-58.926 0L307.241 528.058a41.472 41.472 0 0 1-11.127-20.023z"
        ></path>
      </svg>
      <div class="th-title">
        {{ getTitle($route.params.id) }}
      </div>
    </div>
    <div
      class="markdown-body"
      :style="`${isWx ? 'height:calc(100% - 44px);overflow: auto;' : ''}`"
    >
      <button-markdown v-if="$route.params.id === 'button'"></button-markdown>
      <indicator-markdown v-if="$route.params.id === 'indicator'">
      </indicator-markdown>
      <toast-markdown v-if="$route.params.id === 'toast'"></toast-markdown>
      <popup-markdown v-if="$route.params.id === 'popup'"></popup-markdown>
      <scroll-markdown v-if="$route.params.id === 'scroll-y'"></scroll-markdown>
      <tab-markdown v-if="$route.params.id === 'tab'"></tab-markdown>
      <picker-markdown v-if="$route.params.id === 'picker'"></picker-markdown>
      <popup-select-markdown v-if="$route.params.id === 'popup-select'">
      </popup-select-markdown>
      <cell-markdown v-if="$route.params.id === 'cell'"></cell-markdown>
    </div>
  </div>
</template>

<script>
import ButtonMarkdown from './button/index.md'
import IndicatorMarkdown from './indicator/index.md'
import ToastMarkdown from './toast/index.md'
import PopupMarkdown from './popup/index.md'
import ScrollMarkdown from './scroll-y/index.md'
import TabMarkdown from './tab/index.md'
import PickerMarkdown from './picker/index.md'
import PopupSelectMarkdown from './popup-select/index.md'
import CellMarkdown from './cell/index.md'
import { isWxEv } from '@/util/index.js'

export default {
  components: {
    ButtonMarkdown,
    IndicatorMarkdown,
    ToastMarkdown,
    PopupMarkdown,
    ScrollMarkdown,
    TabMarkdown,
    PickerMarkdown,
    PopupSelectMarkdown,
    CellMarkdown
  },
  data() {
    return {
      isWx: isWxEv()
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    getTitle(id) {
      const obj = {
        button: 'Button 按钮',
        indicator: 'Indicator 加载指示框',
        toast: 'Toast 提示框',
        popup: 'popup 弹层',
        'scroll-y': 'Scroll-Y 列表滑动',
        tab: 'Tab 选项卡',
        picker: 'Picker 选择器',
        'popup-select': 'Popup-Select 弹层选择框',
        cell: 'Cell 单元格'
      }
      return obj[id]
    }
  }
}
</script>

<style lang="scss" scoped>
.doc {
  height: 100%;
  .top-header {
    height: 44px;
    line-height: 44px;
    display: flex;
    .demo-nav__back {
      width: 28px;
      display: block;
      position: relative;
      top: 50%;
      transform: translateY(-50%);
    }
    .th-title {
      flex: 1;
      text-align: center;
      padding-right: 44px;
      font-size: 18px;
    }
  }
}
</style>
<style lang="scss">
.markdown-body {
  padding: 12px;
}
</style>
