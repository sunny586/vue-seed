import Toast from './toast/index.js'
import Indicator from './indicator/index.js'
import ScrollY from './scroll-y/index.vue'
import Tab from './tab/index.js'
import Popup from './popup/index.js'
import Picker from './picker/index.vue'
import PopupSelect from './popup-select/index.vue'
import Button from './button/index.vue'

const prefix = 'Qzd'

function UI(Vue, config = {}) {
  // 如果加载过了，就直接return
  if (UI.installed) return
  // 挂载组件
  Vue.$toast = Vue.prototype.$toast = UI.prototype.Toast = Toast
  Vue.$indicator = Vue.prototype.$indicator = UI.prototype.Indicator = Indicator
  Vue.$popup = Vue.prototype.$popup = UI.prototype.popup = Popup
  Vue.component(`${prefix}ScrollY`, ScrollY)
  Vue.component(`${prefix}Tab`, Tab.LyTab)
  Vue.component(`${prefix}Picker`, Picker)
  Vue.component(`${prefix}PopupSelect`, PopupSelect)
  Vue.component(`${prefix}Button`, Button)
  // 挂载完成
  UI.installed = true
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  UI(window.Vue)
}

// 版本
UI.version = '1.0.0'

export default UI
