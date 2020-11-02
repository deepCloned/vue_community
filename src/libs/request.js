import axios from 'axios';

axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/v1/' : '/'
axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'application/json'

axios.interceptors.request.use(config => {
  const token = localStorage.getItem('token') || '';
  return config;
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  return new Promise((resolve, reject) => {
    if (response.status === 200) {
      resolve(response)
    } else {
      reject(response)
    }
  })
}, error => {
  if (error.response.status) {
    switch (error.response.status) {
      // 401 未登录
      case 401:
        console.log('未登录')
        break;
      // 403 禁止访问
      case 403:
        console.log('禁止访问')
        break;
    }
    return Promise.reject(error.response)
  }
})

/**
 * 封装get post put 方法
 */
export const get = (url, params) => {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params,
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err.data)
    })
  })
}

export const post = (url, data) => {
  return new Promise((resolve, reject) => {
    axios.post(url, {
      ...data
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err.data)
    })
  })
}

// put 用户更改数据
export const put = (url, data) => {
  return new Promise((resolve, reject) => {
    axios.put(url, {
      ...data
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err.data)
    })
  })
}

export {
  get,
  post,
  put,
}
