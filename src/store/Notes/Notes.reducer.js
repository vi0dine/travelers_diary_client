import { FETCH_NOTES_SUCCESS } from "./Notes.types"

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
    default:
      return state
  }
}
