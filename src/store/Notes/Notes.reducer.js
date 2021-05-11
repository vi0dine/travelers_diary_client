import {
  DELETE_NOTE_SUCCESS,
  FETCH_NOTES_SUCCESS,
  SAVE_NOTE_SUCCESS,
} from "./Notes.types"

const INITIAL_STATE = {
  notes: [],
}

export const notesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_NOTES_SUCCESS:
      return {
        ...state,
        notes: action.notes,
      }
    case SAVE_NOTE_SUCCESS:
      return {
        ...state,
        notes: state.notes.concat(action.note),
      }
    case DELETE_NOTE_SUCCESS:
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.id),
      }
    default:
      return state
  }
}
