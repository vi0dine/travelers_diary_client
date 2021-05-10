import { createBrowserHistory } from "history"

let history = { location: null }

if (typeof window === "object") {
  history = createBrowserHistory()
}

export default history
