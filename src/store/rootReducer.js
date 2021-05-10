import { combineReducers } from "redux"
import { connectRouter } from "connected-react-router"
import { userReducer } from "./User/User.reducer"
import { notesReducer } from "./Notes/Notes.reducer"

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    UserState: userReducer,
    NotesState: notesReducer,
  })

export default rootReducer
