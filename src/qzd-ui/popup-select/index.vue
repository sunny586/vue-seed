<template>
  <div class="popup-select" @click="popupClick()">
    <template v-if="typeof val === 'string' && val">{{ val }}</template>
    <template v-else-if="typeof val === 'object' && val.length > 0">
      {{ cval }}
    </template>
    <template v-else> {{ placeholder }}</template>
  </div>
</template>

<script>
import popup from '../popup/index.js'
import Tpl from './tpl.vue'

export default {
  model: {
    prop: 'val',
    event: 'changeEvent'
  },
  props: {
    placeholder: {
      type: String,
      default: '请选择'
    },
    val: {
      type: [String, Array]
    },
    data: {
      type: Array,
      default: () => []
    },
    options: {
      type: Object,
      default: () => {}
    }
  },
  created() {},
  computed: {
    cval() {
      let index = 0
      const arr = []
      const v = this.options.value || 'value'
      const ll = this.options.label || 'label'
      const getObjByCode = (code, l) => {
        l.forEach(m => {
          if (code === m[v]) {
            arr.push(m[ll])
            index++
            if (this.val[index]) {
              getObjByCode(this.val[index], m.children)
            }
          }
        })
      }
      getObjByCode(this.val[index], this.data)
      return arr.join(',')
    }
  },
  data() {
    const self = this
    return {
      popBottom: new popup({
        component: Tpl,
        direction: 'bottom',
        data: {
          list: [...self.data],
          options: { ...self.options },
          value: self.getDefaultVal()
        },
        change: data => {
          self.$emit(
            'changeEvent',
            data.map(
              m =>
                m[
                  self.options && self.options.value
                    ? self.options.value
                    : 'value'
                ]
            )
          )
        }
      })
    }
  },
  methods: {
    popupClick() {
      this.popBottom.open()
    },
    getDefaultVal() {
      if (this.val && this.val.length > 0) {
        const k =
          this.options && this.options.value ? this.options.value : 'value'
        return this.val.map(m => {
          if (typeof m === 'object') {
            return m
          } else {
            return {
              [k]: m
            }
          }
        })
      } else {
        return []
      }
    }
  },
  destroyed() {
    this.popBottom.remove()
  },
  watch: {
    data(val) {
      this.popBottom.update({
        list: val
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.popup-select {
  font-size: 16px;
  text-align: right;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 100%;
}
</style>
