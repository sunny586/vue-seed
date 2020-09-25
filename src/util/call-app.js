import { isIOS, isAndroid } from '@/util'

export function callApp(funcName, data) {
  if (isIOS()) {
    if (
      window.webkit &&
      window.webkit.messageHandlers &&
      window.webkit.messageHandlers[funcName]
    ) {
      window.webkit.messageHandlers[funcName].postMessage(data)
      return true
    } else {
      return false
    }
  } else if (isAndroid()) {
    if (window.qzdApp && window.qzdApp[funcName]) {
      data !== undefined
        ? window.qzdApp[funcName](data)
        : window.qzdApp[funcName]()
      return true
    } else {
      return false
    }
  }
}
