import { AUTHENTICATE_USER_SUCCESS } from "./User.types"

const INITIAL_STATE = {
  id: null,
  role: null,
  accessToken: null,
  refreshToken: null,
  email: null,
}

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTHENTICATE_USER_SUCCESS:
      return {
        ...state,
        id: action.id,
        email: action.email,
        accessToken: action.accessToken,
        refreshToken: action.refreshToken,
        role: action.role,
      }
    default:
      return state
  }
}
