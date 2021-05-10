import React from "react"
import GoogleSignIn from "./components/GoogleSignIn.component"

const LoginPage = () => {
  return (
    <div>
      <div>
        <h1>Welcome to Traveler's Diary</h1>
      </div>
      <div>
        <GoogleSignIn />
      </div>
    </div>
  )
}

export default LoginPage
