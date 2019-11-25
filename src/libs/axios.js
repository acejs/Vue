import axios from 'axios'
import { apiBaseURL } from '@/config'

class HttpRequest {
  constructor(baseUrl = apiBaseURL) {
    this.baseUrl = baseUrl
    // 请求队列
    this.queue = {}
  }

  // 全局的参数配置
  getInsideConfig() {
    return {
      baseURL: this.baseUrl,
      timeout: 3000,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
  }

  // 删除请求队列中的url，并在请求全部完成时，去掉加载动作
  destroy(url) {
    delete this.queue[url]
    // 当请求都完成时
    if (!Object.keys(this.queue).length) {
      //
    }
  }

  // hooks
  interceptors(instance, url) {
    // 请求拦截
    instance.interceptors.request.use(
      config => {
        // 当有请求时 添加加载动作，例如loading
        if (!Object.keys(this.queue).length) {
          //
        }
        this.queue[url] = true
        config.headers['Authorization'] = true
        return config
      },
      error => {
        return Promise.reject(error)
      }
    )
    // 响应拦截
    instance.interceptors.response.use(
      response => {
        this.destroy(url)
        const { data } = response
        return data
      },
      error => {
        this.destroy(url)
        return Promise.reject(error)
      }
    )
  }

  request(options) {
    // 创建一个 axios 实例
    const instance = axios.create()
    // 合并全局参数和传入的参数
    options = Object.assign({}, this.getInsideConfig(), options)
    // 进行拦截操作
    this.interceptors(instance, options.url)
    return instance(options)
  }
}

export default HttpRequest
