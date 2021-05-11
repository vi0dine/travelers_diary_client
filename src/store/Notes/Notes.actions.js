import {
  FETCH_NOTES,
  FETCH_NOTES_SUCCESS,
  FETCH_NOTES_FAIL,
  SAVE_NOTE,
  SAVE_NOTE_SUCCESS,
  SAVE_NOTE_FAIL,
  DELETE_NOTE,
  DELETE_NOTE_SUCCESS,
  DELETE_NOTE_FAIL,
} from "./Notes.types"

export const fetchNotes = () => {
  return {
    type: FETCH_NOTES,
  }
}

export const fetchNotesSuccess = (notes) => {
  return {
    type: FETCH_NOTES_SUCCESS,
    notes,
  }
}

export const fetchNotesFail = (error) => {
  return {
    type: FETCH_NOTES_FAIL,
    error: error,
  }
}

export const saveNote = (id, title, city, content) => {
  return {
    type: SAVE_NOTE,
    id,
    title,
    city,
    content,
  }
}

export const saveNoteSuccess = (note) => {
  return {
    type: SAVE_NOTE_SUCCESS,
    note,
  }
}

export const saveNoteFail = (error) => {
  return {
    type: SAVE_NOTE_FAIL,
    error: error,
  }
}

export const deleteNote = (id) => {
  return {
    type: DELETE_NOTE,
    id,
  }
}

export const deleteNoteSuccess = (id) => {
  return {
    type: DELETE_NOTE_SUCCESS,
    id,
  }
}

export const deleteNoteFail = (error) => {
  return {
    type: DELETE_NOTE_FAIL,
    error: error,
  }
}
