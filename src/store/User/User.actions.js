import {
  AUTHENTICATE_USER,
  AUTHENTICATE_USER_SUCCESS,
  AUTHENTICATE_USER_FAIL,
} from "./User.types"

export const authenticateUser = (accessToken) => {
  return {
    type: AUTHENTICATE_USER,
    accessToken,
  }
}

export const authenticateUserSuccess = (id, email, accessToken, role) => {
  return {
    type: AUTHENTICATE_USER_SUCCESS,
    id,
    email,
    accessToken,
    role,
  }
}

export const authenticateUserFail = (error) => {
  return {
    type: AUTHENTICATE_USER_FAIL,
    error: error,
  }
}
