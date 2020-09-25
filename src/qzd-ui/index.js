import Toast from './toast'
import Indicator from './indicator'
import ScrollY from './scroll-y/index.vue'
import QzdTab from './tab/index.js'
import Popup from './popup/index.js'
import Picker from './picker/index.vue'

function QzdUI(Vue, config = {}) {
  // 如果加载过了，就直接return
  if (QzdUI.installed) return

  // 挂载组件
  Vue.$toast = Vue.prototype.$toast = QzdUI.prototype.Toast = Toast
  Vue.$indicator = Vue.prototype.$indicator = QzdUI.prototype.Indicator = Indicator
  Vue.$popup = Vue.prototype.$popup = QzdUI.prototype.popup = Popup

  Vue.component('QzdScrollY', ScrollY)
  Vue.component('QzdTab', QzdTab.LyTab)
  Vue.component('QzdPicker', Picker)

  // 挂载完成
  QzdUI.installed = true
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  QzdUI(window.Vue)
}

// 版本
QzdUI.version = '1.0.0'

export default QzdUI
