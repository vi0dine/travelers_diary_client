import { FETCH_NOTES, FETCH_NOTES_SUCCESS, FETCH_NOTES_FAIL } from "./Notes.types"

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
