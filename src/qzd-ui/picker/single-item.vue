<template>
  <div class="single-item">
    <div class="mask-top absolute"></div>
    <div class="mask-bottom absolute"></div>
    <div class="wheel-wrapper" ref="wrapper">
      <ul class="wheel-scroller">
        <li
          :class="`wheel-item ${sidx === index ? 'wi-active' : ''}`"
          v-for="(item, index) in data"
          :key="index"
        >
          {{ options.label ? item[options.label] : item.label }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'

export default {
  props: {
    data: {
      type: Array,
      default: () => []
    },
    options: {
      type: Object,
      default: () => {}
    },
    value: {
      type: [String, Array, Object]
    },
    tabIndex: {
      type: Number
    }
  },
  data() {
    return {
      sidx: 0
    }
  },
  mounted() {
    this.$nextTick(() => {
      // 初始化wheel
      this._createWheel().enable()
    })
  },
  methods: {
    // 获取wheel的下标位置
    getDefaultIdx(val) {
      const v = this.options.value || 'value'
      const value = val ? val[v] : ''
      let idx = 0
      if (this.data && this.data.length > 0) {
        this.data.forEach((m, index) => {
          if (value && m[v] === value) {
            idx = index
          }
        })
      }
      return idx
    },
    _createWheel() {
      if (!this.wheels) {
        // 实例化一个wheel
        const wheel = (this.wheels = new BScroll(this.$refs.wrapper, {
          wheel: {
            selectedIndex: this.getDefaultIdx(this.value),
            wheelWrapperClass: 'wheel-scroller',
            wheelItemClass: 'wheel-item',
            rotate: 0
          },
          observeDOM: false
        }))
        this.sidx = this.getDefaultIdx(this.value)
        wheel.on('scrollEnd', pos => {
          //滚动完成之后获取当前选取的索引值
          const idx = wheel.getSelectedIndex()
          // 判断是否滚动，并发生了位移
          if (idx !== this.sidx) {
            this.sidx = idx
            // 将数据回调给子组件
            this.$emit('change', {
              data: this.data[idx],
              index: this.tabIndex
            })
          }
        })
      } else {
        this.wheels.refresh()
      }
      return this.wheels
    }
  },
  watch: {
    data() {
      setTimeout(() => {
        this.wheels.scrollTo(0, 0)
      }, 100)
    }
  }
}
</script>
<style lang="scss" scoped>
.single-item {
  position: relative;
  background-color: #fff;
  .absolute {
    position: absolute;
  }
  .mask-top {
    height: 34px;
    width: 100%;
    top: 0;
    border-bottom: 1px solid #ddd;
  }
  .mask-bottom {
    height: 34px;
    width: 100%;
    top: 34px;
    border-bottom: 1px solid #ddd;
  }
  .wheel-wrapper {
    height: 1.28rem;
    overflow: hidden;
    .wheel-scroller {
      margin-top: 34px;
      .wheel-item {
        line-height: 34px;
        text-align: center;
        font-size: 16px;
        opacity: 0.5;
        color: #000;
      }
      .wi-active {
        font-size: 17px;
        opacity: 1;
        color: #000;
      }
    }
  }
}
</style>
