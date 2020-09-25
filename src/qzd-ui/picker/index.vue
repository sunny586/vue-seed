<template>
  <div class="picker">
    <single-item
      class="s-item"
      :data="item"
      v-for="(item, index) in list"
      :key="index"
      :options="options"
      :value="val[index] || ''"
      :tab-index="index"
      @change="singleItemChange"
    ></single-item>
  </div>
</template>

<script>
import SingleItem from './single-item.vue'

export default {
  model: {
    prop: 'val',
    event: 'change'
  },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    options: {
      type: Object,
      default: () => {}
    },
    val: {
      type: [String, Array, Object]
    },
    notLoad: {
      type: Boolean,
      default: false
    }
  },
  components: {
    SingleItem
  },
  data() {
    return {
      list: [],
      index: 0
    }
  },
  created() {
    if (this.notLoad) {
      return false
    }
    // 加载picker的数据源
    this.loadData()
    // this.loadPickerItems(this.val)
  },
  methods: {
    loadData() {
      this.loadPickerItems(this.val)
    },
    loadPickerItems(val) {
      // this.list = []
      if (this.data && this.data.length > 0) {
        // 默认将data放到list中
        this.list.push(this.data)
        // 根据v-model的数据，递归将后边的数据全部取出
        this.getPickerList(this.data, val)
      }
    },
    /**
     * 每个picker改变的回调函数
     * data: Object， 回调选中的数据
     * index: Number, picker的下标
     */
    singleItemChange({ data, index }) {
      // 截取滑动的下标，之前的list数据；之后的数据清空掉
      this.list = this.list.slice(0, index + 1)
      // 截取滑动的下标，之前的value数据；之后的数据清空掉
      const value = this.val.slice(0, index + 1)

      // 将选中的数据赋值给value
      value[index] = data
      // 如果选中的数据中存在children
      if (data.children && data.children.length > 0) {
        // 将数据存到list中
        this.list.push(data.children)
        this.index = index + 1
        // 把递归存取到list中
        this.getPickerList(data.children, value)
      }
      // 将选中的数据回调给父组件
      let cbData = []
      if (value && value.length > 0) {
        // 如果选中的数据的长度和list的长度一样，直接取数据
        if (value.length === this.list.length) {
          cbData = value
        } else if (value.length < this.list.length) {
          // 如果选中的数据的长度和list的长度不一样，则不足的部分取list的数据里的第一个数据
          const arr = value
          this.list.forEach((m, i) => {
            if (i > arr.length - 1) {
              arr.push(m[0])
            }
          })
          cbData = arr
        }
      }
      // 深拷贝数据
      const arr = JSON.parse(JSON.stringify(cbData))
      // 将取到的数据回调给子组件
      this.$emit(
        'change',
        arr.map(m => {
          if (m.children) {
            delete m.children
          }
          return m
        })
      )
    },
    getList() {
      return this.list
    },
    // 递归取出list里的数据，根据v-model转化为列表数据
    getPickerList(l, val) {
      let obj = null
      if (val[this.index]) {
        const v = this.options.value || 'value'
        const value = val[this.index][v]
        l.forEach(m => {
          if (m[v] === value) {
            if (m.children && m.children.length > 0) {
              obj = m
            }
          }
        })
      } else {
        if (l[0].children && l[0].children.length > 0) {
          obj = l[0]
        }
      }
      if (obj) {
        this.list.push(obj.children)
        this.index += 1
        this.getPickerList(obj.children, val)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.picker {
  display: flex;
  .s-item {
    flex: 1;
  }
}
</style>
