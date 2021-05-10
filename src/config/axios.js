import axios from "axios"
import { store } from "../store/store"
import { API_URL } from "./serverConf"

export const setupAxios = () => {
  axios.defaults.baseURL = API_URL
  axios.defaults.headers.post["Content-Type"] = "application/json"
  axios.interceptors.request.use(
    function (config) {
      const token = store.getState().UserState.access_token
      if (token != null) {
        config.headers.authorization = `Bearer ${token}`
      }
      return config
    },
    function (err) {
      return Promise.reject(err)
    }
  )
}
