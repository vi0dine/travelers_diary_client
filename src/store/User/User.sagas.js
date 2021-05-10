import { takeLatest, put, call } from "redux-saga/effects"
import axios from "axios"
import history from "../../history"
import { AUTHENTICATE_USER } from "./User.types"
import { authenticateUserSuccess, authenticateUserFail } from "./User.actions"

export function* watchUserSaga() {
  yield takeLatest(AUTHENTICATE_USER, authenticateUser)
}

function* authenticateUser(action) {
  try {
    const response = yield call(() =>
      axios.request({
        url: "/auth/request",
        data: {
          access_token: action.accessToken,
        },
        method: "POST",
      })
    )

    yield put(
      authenticateUserSuccess(
        response.headers["id"],
        response.headers["email"],
        response.headers["access-token"],
        response.headers["client"],
        response.headers["expiry"],
        response.headers["role"]
      )
    )
    yield call(() => history.push("/"))
  } catch (error) {
    yield put(authenticateUserFail(error))
  }
}
