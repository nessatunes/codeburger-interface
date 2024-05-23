import axios from 'axios'

const apiCodeBurger = axios.create({
  baseURL: 'https://codeburger-api-production-da71.up.railway.app',
  withCredentials: true,
})

apiCodeBurger.interceptors.request.use(async (config) => {
  const userData = await localStorage.getItem('codeburger:userData')
  const token = userData && JSON.parse(userData).token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default apiCodeBurger
