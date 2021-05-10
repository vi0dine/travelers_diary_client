import React from "react"
import "./GoogleSignIn.styles.scss"
import { useGoogleLogin } from "react-google-login"
import { useDispatch } from "react-redux"
import { authenticateUser } from "../../../store/User/User.actions"

const GoogleSignIn = () => {
  const dispatch = useDispatch()
  const { signIn } = useGoogleLogin({
    onSuccess: (res) => {
      dispatch(authenticateUser(res.accessToken))
    },
    clientId:
      "748789547202-8la3h3vrnmqr4dfau566enc8qtosn85u.apps.googleusercontent.com",
    cookiePolicy: "single_host_origin",
    redirectUri: "http://localhost:3000",
    onFailure: (res) => {
      console.log(res)
    },
  })

  return (
    <div>
      <div className={"GoogleSignIn__Button"} onClick={signIn}>
        Sign In with Google
      </div>
    </div>
  )
}

export default GoogleSignIn
