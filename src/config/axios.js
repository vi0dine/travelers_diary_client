import axios from "axios"
import { store } from "../store/store"
import { API_URL } from "./serverConf"

export const setupAxios = () => {
  axios.defaults.baseURL = API_URL
  axios.defaults.headers.post["Content-Type"] = "application/json"
  axios.interceptors.request.use(
    function (config) {
      const user = store.getState().UserState
      if (user.accessToken != null) {
        config.headers["client"] = user.client
        config.headers["expiry"] = user.expiry
        config.headers["token-type"] = "Bearer"
        config.headers["access-token"] = user.accessToken
        config.headers["uid"] = user.email
      }
      return config
    },
    function (err) {
      return Promise.reject(err)
    }
  )
}
