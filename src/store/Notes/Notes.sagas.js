import { takeLatest, put, call } from "redux-saga/effects"
import axios from "axios"
import history from "../../history"
import { FETCH_NOTES } from "./Notes.types"
import {
  authenticateUserSuccess,
  authenticateUserFail,
  fetchNotesSuccess,
  fetchNotesFail,
} from "./Notes.actions"

export function* watchNotesSaga() {
  yield takeLatest(FETCH_NOTES, fetchNotes)
}

function* fetchNotes(action) {
  try {
    const { data } = yield call(() =>
      axios.request({
        url: "/notes",
        method: "GET",
      })
    )

    yield put(fetchNotesSuccess(data.notes))
  } catch (error) {
    yield put(fetchNotesFail(error))
  }
}
