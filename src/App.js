import "./App.scss"
import { Switch, Route, Redirect } from "react-router-dom"
import LoginPage from "./pages/Login/Login.page"
import { setupAxios } from "./config/axios"
import Dashboard from "./pages/Dashboard/Dashboard.page"
import { useSelector } from "react-redux"

function App() {
  const token = useSelector((state) => state.UserState.accessToken)
  setupAxios()

  return (
    <div className="App">
      <h2>Traveler's Diary</h2>
      <Switch>
        <Route exact path="/">
          {!token ? <Redirect to="/login" /> : <Dashboard />}
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
      </Switch>
    </div>
  )
}

export default App
