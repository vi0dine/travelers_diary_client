import "./App.scss"
import { Switch, Route } from "react-router-dom"
import LoginPage from "./pages/Login/Login.page"
import { setupAxios } from "./config/axios"

function App() {
  setupAxios()

  return (
    <div className="App">
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/app"></Route>
      </Switch>
    </div>
  )
}

export default App
