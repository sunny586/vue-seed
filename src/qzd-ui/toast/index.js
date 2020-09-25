import toastComponent from './index.vue'
import Vue from 'vue'

// 返回一个 扩展实例构造器
const ToastConstructor = Vue.extend(toastComponent)
const doms = {}
function pushDomsByKey(k, value) {
  doms[k] = value
}
function removeDomsByKey(k) {
  for (let key in doms) {
    if (doms.hasOwnProperty(key)) {
      if (key === k) {
        delete doms[k]
      }
    }
  }
}
// 定义弹出组件的函数 接收2个参数, 要显示的文本 和 显示时间
function showToast(text, duration = 1500) {
  // 实例化一个 toast.vue
  const toastDom = new ToastConstructor({
    el: document.createElement('div'),
    data() {
      return {
        text: text,
        showWrap: true
      }
    }
  })
  // 把实例化的 toast.vue 添加到 body 里
  document.body.appendChild(toastDom.$el)
  // 删除多余的toastDom
  const keys = Object.keys(doms)
  if (keys && keys.length > 0) {
    keys.forEach(m => {
      doms[m] && doms[m].$el && document.body.removeChild(doms[m].$el)
      removeDomsByKey(m)
    })
  }
  // 将toast的dom对象存起来
  const k = `${new Date().getTime()}`
  pushDomsByKey(k, toastDom)
  // 过了 duration 时间后隐藏整个组件
  setTimeout(() => {
    // removeDomsByKey(k)
    toastDom.showWrap = false
  }, duration)
}

export default showToast
