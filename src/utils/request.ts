import axios from 'axios'

const request = axios.create({
  baseURL: '/api',
  timeout: 5000,
})

request.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    return config
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error)
  },
)

request.interceptors.response.use(
  (response) => {
    const { data } = response

    return data
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default request
