import "./App.scss"
import { Switch, Route } from "react-router-dom"
import LoginPage from "./pages/Login/Login.page"
import { setupAxios } from "./config/axios"
import Dashboard from "./pages/Dashboard/Dashboard.page"

function App() {
  setupAxios()

  return (
    <div className="App">
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/">
          <Dashboard />
        </Route>
      </Switch>
    </div>
  )
}

export default App
