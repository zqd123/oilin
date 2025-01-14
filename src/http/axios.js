// src/utils/axios.js
import axios from 'axios'

const instance = axios.create({
  baseURL: '', // 替换为实际的 API URL
  timeout: 10000,
})

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 在请求发送之前做一些处理，比如添加授权头
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
  },
  (error) => {
    // 处理请求错误
    return Promise.reject(error)
  },
)

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 对响应数据做一些处理
    return response
  },
  (error) => {
    // 处理响应错误
    if (error.response && error.response.status === 401) {
      // 例如，处理未授权错误
      console.error('Unauthorized, redirecting to login...')
      // 可以添加重定向到登录页的逻辑
    }
    return Promise.reject(error)
  },
)

export default instance
