// 判断ios设备
export function isIOS() {
  // let reg = /\(i[^;]+;( U;)? CPU.+Mac OS X/
  let reg = /iphone|ipad|ipod/i
  let u = window.navigator.userAgent
  if (reg.test(u)) {
    return true
  } else {
    return false
  }
}

// 判断android设备
export function isAndroid() {
  let reg = /android/i
  let u = window.navigator.userAgent
  if (reg.test(u)) {
    return true
  } else {
    return false
  }
}

export function isWxEv() {
  let userAgent = window.navigator.userAgent.toLowerCase()
  let reg = /MicroMessenger/gi
  if (reg.test(userAgent)) {
    return true
  } else {
    return false
  }
}

// 判断支付宝
export function isAliEv() {
  let userAgent = window.navigator.userAgent.toLowerCase()
  let reg = /alipay/gi
  if (reg.test(userAgent)) {
    return true
  } else {
    return false
  }
}
// 判断qq内置浏览器
export function isQQ() {
  let userAgent = window.navigator.userAgent.toLowerCase()
  let reg = /QQ/gi
  if (reg.test(userAgent)) {
    return true
  } else {
    return false
  }
}

// 判断是否是移动设备
export function isMobile() {
  let flag = navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  )
  return !!flag
}

// 获取各个运行的环境
export function getRunEnv() {
  let u = navigator.userAgent
  return {
    // 移动终端浏览器版本信息
    trident: u.indexOf('Trident') > -1, // IE内核
    presto: u.indexOf('Presto') > -1, // opera内核
    webKit: u.indexOf('AppleWebKit') > -1, // 苹果、谷歌内核
    gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1, // 火狐内核
    mobile:
      !!u.match(/AppleWebKit.*Mobile/i) ||
      !!u.match(
        /MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/
      ), // 是否为移动终端
    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
    android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, // android终端或者uc浏览器
    iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, // 是否为iPhone或者QQHD浏览器
    iPad: u.indexOf('iPad') > -1, // 是否iPad
    webApp: u.indexOf('Safari') === -1 // 是否web应该程序，没有头部与底部
  }
}
