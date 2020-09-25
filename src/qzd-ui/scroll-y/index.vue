<template>
  <div ref="wrapper" class="scroll-wrap">
    <div ref="scorllBox">
      <div v-if="pulldown" class="pulldown mt-50">
        <div class="clear">
          {{ getPulldownTxt(dragTip.status) }}
        </div>
      </div>
      <slot></slot>
      <div v-if="pullup" class="pullup">
        <div class="clear" v-if="isLoading">加载中...</div>
        <div class="list-donetip" v-if="!isLoading && isDone">
          <div v-if="data && data.length === 0">暂无数据</div>
          <div v-else>没有更多数据了</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

const HT = 100

export default {
  props: {
    list: {
      type: Array,
      default: () => []
    },
    probeType: {
      type: Number,
      default: 2
    },
    /**
     * 点击列表是否派发click事件
     */
    click: {
      type: Boolean,
      default: false
    },
    /**
     * 是否开启横向滚动
     */
    scrollX: {
      type: Boolean,
      default: false
    },
    /**
     * 是否派发滚动事件
     */
    listenScroll: {
      type: Boolean,
      default: false
    },
    /**
     * 列表数据
     */
    data: {
      type: [Object, Array, String],
      default: null
    },
    /**
     * 是否派发滚动到底部的事件，用于上拉加载
     */
    pullup: {
      type: Boolean,
      default: false
    },
    /**
     * 是否派发顶部下拉的事件，用于下拉刷新
     */
    pulldown: {
      type: Boolean,
      default: false
    },
    /**
     * 是否派发列表滚动开始的事件
     */
    deforeScroll: {
      type: Boolean,
      default: false
    },
    /**
     * 当数据更新后,刷新scroll延时
     */
    refreshDelay: {
      type: Number,
      default: 20
    }
  },
  data() {
    return {
      dragTip: {
        status: 'down' // down-下拉刷新，open－释放刷新，loading－加载中。
      },
      isLoading: false,
      isDone: false
    }
  },
  mounted() {
    setTimeout(() => {
      this._initScroll()
    }, 20)
    //  禁用微信下拉弹性（兼容）
    this.$refs.wrapper.addEventListener('touchmove', function(e) {
      e.preventDefault()
    })
  },
  methods: {
    changeIsDone(data) {
      this.isDone = data
    },
    _initScroll() {
      // better-scroll的初始化
      if (!this.$refs.wrapper) {
        return
      }
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.wrapper, {
          probeType: this.probeType,
          click: this.click,
          scrollX: this.scrollX,
          preventDefault: false,
          tap: true,
          useTransition: false,
          mouseWheel: true
        })
      } else {
        this.scroll.refresh()
      }
      // 防抖函数
      function debounce(fn, wait) {
        let timer = null
        return function() {
          if (timer !== null) {
            clearTimeout(timer)
          }
          timer = setTimeout(fn, wait)
        }
      }
      // 上拉加载
      if (this.pullup) {
        // 监听scroll 事件，并做防抖处理
        this.scroll.on(
          'scroll',
          debounce(() => {
            // 上拉加载
            if (
              this.scroll.y < 0 &&
              this.scroll.y <= this.scroll.maxScrollY + 50 &&
              !this.isDone
            ) {
              this.$emit('scrollToEnd')
            }
          }, 300)
        )
      }
      // 下拉刷新
      if (this.pulldown) {
        this.scroll.on('scroll', pos => {
          if (this.scroll.y > 0 && this.dragTip.status !== 'loading') {
            this.dragTip.status = 'down'
          }
          if (this.scroll.y > HT) {
            this.dragTip.status = 'open'
          }
        })
        this.scroll.on('touchEnd', pos => {
          if (this.dragTip.status === 'open' || pos.y > HT) {
            this.dragTip.status = 'loading'
            this.$emit('scrollPulldown')
          }
        })
        // scrollEnd
        this.scroll.on('scrollEnd', pos => {
          if (this.dragTip.status === 'down' && pos.y > 0) {
            this.scroll.scrollTo(0, 0)
          }
        })
      }
    },
    reInit() {
      this.isLoading = true
      this.isDone = false
      this.disable()
    },
    loadedDone() {
      this.isLoading = false
      this.isDone = true
      this.enable()
    },
    finishLoad(str) {
      this.isLoading = false
      this.enable()
      if (str === 'pulldown') {
        this.scrollToTop()
      }
    },
    scrollToTop() {
      setTimeout(() => {
        this.scroll.scrollTo(0, 0)
        this.dragTip.status = 'down'
      }, 1000)
    },
    disable() {
      this.scroll && this.scroll.disable()
    },
    enable() {
      this.scroll && this.scroll.enable()
    },
    refresh() {
      this.scroll && this.scroll.refresh()
    },
    scrollTo() {
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
    },
    scrollToElement() {
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
    },
    getPulldownTxt(s) {
      let str = ''
      if (s === 'down') {
        str = '下拉可以刷新'
      } else if (s === 'open') {
        str = '释放刷新'
      } else if (s === 'loading') {
        str = '加载中...'
      }
      return str
    },
    setScrollWrapHeight() {
      const ph = this.$refs.wrapper.parentElement.offsetHeight
      const ch = this.$refs.scorllBox.offsetHeight
      if (ph < ch - 50) {
        this.$refs.wrapper.style.height = '100%'
      } else {
        this.$refs.wrapper.style.height = 'auto'
      }
    }
  },
  watch: {
    data() {
      setTimeout(() => {
        // 设置容器高度
        this.setScrollWrapHeight()
        // 刷新scroll
        this.refresh()
      }, this.refreshDelay)
    }
  }
}
</script>

<style lang="scss" scoped>
.scroll-wrap {
  overflow: hidden;
}
.mt-50 {
  margin-top: -50px;
}
/* 下拉刷新 */
.pulldown,
.pullup {
  width: 100%;
  height: 50px;
  position: relative;
  transition: all 0.3s ease 0s;
  div.clear {
    padding: 10px 0px;
    font-size: 14px;
    position: absolute;
    left: 50%;
    top: 5px;
    transform: translate(-50%, 0);
  }
}
.list-donetip {
  text-align: center;
  line-height: 50px;
  font-size: 14px;
}
</style>
