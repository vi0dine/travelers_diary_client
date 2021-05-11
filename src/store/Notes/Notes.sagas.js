import { takeLatest, put, call } from "redux-saga/effects"
import axios from "axios"
import { DELETE_NOTE, FETCH_NOTES, SAVE_NOTE } from "./Notes.types"
import {
  fetchNotesSuccess,
  fetchNotesFail,
  saveNoteSuccess,
  saveNoteFail,
  deleteNoteSuccess,
  deleteNoteFail,
} from "./Notes.actions"

export function* watchNotesSaga() {
  yield takeLatest(FETCH_NOTES, fetchNotes)
  yield takeLatest(SAVE_NOTE, saveNote)
  yield takeLatest(DELETE_NOTE, deleteNote)
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

function* saveNote(action) {
  try {
    const { data } = yield call(() =>
      axios.request({
        url: action.id ? `/notes/${action.id}` : "/notes",
        data: {
          title: action.title,
          city: action.city,
          content: action.content,
        },
        method: action.id ? "PATCH" : "POST",
      })
    )

    yield put(saveNoteSuccess(data.note))
  } catch (error) {
    yield put(saveNoteFail(error))
  }
}

function* deleteNote(action) {
  try {
    const { data } = yield call(() =>
      axios.request({
        url: `/notes/${action.id}`,
        method: "DELETE",
      })
    )

    yield put(deleteNoteSuccess(data.note.id))
  } catch (error) {
    yield put(deleteNoteFail(error))
  }
}
