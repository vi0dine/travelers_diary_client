import { AUTHENTICATE_USER_SUCCESS } from "./User.types"

const INITIAL_STATE = {
  id: null,
  role: null,
  accessToken: null,
  client: null,
  expiry: null,
  email: null,
}

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTHENTICATE_USER_SUCCESS:
      return {
        ...state,
        id: action.id,
        email: action.email,
        client: action.client,
        expiry: action.expiry,
        accessToken: action.accessToken,
        role: action.role,
      }
    default:
      return state
  }
}
