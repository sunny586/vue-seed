import Axios from 'axios'
import QzdUI from '@/qzd-ui'
// import QzdUI from '../../dist-qzd-ui/bundle'

Axios.defaults.timeout = 100000
Axios.defaults.withCredentials = true
let noloading = false

// 请求拦截器
Axios.interceptors.request.use(
  config => {
    if (!config.noloading) {
      noloading = false
      QzdUI.prototype.Indicator.open()
    } else {
      noloading = true
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
Axios.interceptors.response.use(
  response => {
    if (!response.config.noloading) {
      QzdUI.prototype.Indicator.close()
    }
    if (!response.config.nomsg && response.data.status !== 0) {
      QzdUI.prototype.Toast(response.data.msg)
    }
    return response
  },
  error => {
    if (!noloading) {
      QzdUI.prototype.Toast('网络连接失败，请稍后再试！')
    }
    QzdUI.prototype.Indicator.close()
    return Promise.reject(error)
  }
)

// 封装请求
// nomsg: true 没有默认错误吐司提示
export const fetch = (url, options) => {
  let opt = options || {}
  return new Promise((resolve, reject) => {
    let config = {
      method: opt.type || 'post',
      url: `${process.env.VUE_APP_BASE_API}${url}`,
      [opt.type === 'get' ? 'params' : 'data']: opt.params || '',
      responseType: opt.dataType || 'json',
      // 设置默认请求头
      headers: opt.headers || {
        'Content-Type':
          opt.type === 'get'
            ? 'application/x-www-form-urlencoded;charset=UTF-8'
            : 'application/json;charset=UTF-8'
      },
      nomsg: opt.nomsg || false,
      noloading: opt.noloading || false
    }
    Axios(config)
      .then(res => {
        if (res && res.data) resolve(res.data)
        else resolve({})
      })
      .catch(err => {
        reject(err)
      })
  })
}
