import axios from 'axios'

const setAuthorizationHeader = (token: string): void => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

const setBaseUrl = (): void => {
  axios.defaults.baseURL = process.env.VUE_APP_SERVER_API
}

export { setAuthorizationHeader, setBaseUrl }
