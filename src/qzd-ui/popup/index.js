import Temp from './tpl.vue'
import Vue from 'vue'

function getObjType(data) {
  return Object.prototype.toString.call(data)
}

function Popup(options = {}) {
  const T = Vue.extend(Temp)
  const self = this
  // 实例化一个弹窗
  this.instance = new T({
    el: document.createElement('div'),
    components: {
      ComponentSlot: options.component
    },
    data() {
      return {
        visiable: false,
        vm: null,
        data: options.data || '',
        directionClass: ''
      }
    },
    methods: {
      // 点击蒙层，关闭弹窗
      maskClick({ target }) {
        if (target.className === 'popup-tpl') {
          this.close()
        }
      },
      // 关闭弹窗
      close() {
        document.body.style.overflow = ''
        self.instance.visiable = false
      },
      // 打开弹窗
      open() {
        document.body.style.overflow = 'hidden'
        self.instance.visiable = true
      },
      // 更新弹窗数据
      update(data) {
        self.instance.data = data
        self.instance.data = { ...self.instance.data }
      },
      change(data) {
        if (typeof options.change === 'function') {
          options.change(data)
          self.instance.data.value = data
          self.instance.data = { ...self.instance.data }
          this.close()
        }
      }
    }
  })
  // 将instance赋值给vm，然后传递给子组件
  this.instance.vm = this.instance
  // 设置popup的位置
  this.instance.directionClass = 'bpc-' + options.direction || 'bottom'
  // 将弹窗append到页面中
  document.body.appendChild(this.instance.$el)
}
// 打开
Popup.prototype.open = function(data) {
  // if (data !== undefined) {
  //   this.instance.update(data || '')
  // }
  this.instance.open()
}
// 关闭
Popup.prototype.close = function(data) {
  // if (data !== undefined) {
  //   this.instance.update(data || '')
  // }
  this.instance.close()
}
// 更新数据
Popup.prototype.update = function(data) {
  this.instance.update(data)
}
// 移除弹窗
Popup.prototype.remove = function(data) {
  document.body.removeChild(this.instance.$el)
}

export default Popup
