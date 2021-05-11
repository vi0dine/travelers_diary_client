import React, { useEffect, useState } from "react"
import "./Dashboard.styles.scss"
import { useDispatch, useSelector } from "react-redux"
import { deleteNote, fetchNotes } from "../../store/Notes/Notes.actions"
import NoteItem from "./components/NoteItem/NoteItem.component"
import NoteForm from "./components/NoteForm/NoteForm.component"

const Dashboard = () => {
  const dispatch = useDispatch()

  const [addingNote, setAddingNote] = useState(false)
  const [editedNote, setEditedNote] = useState(false)

  useEffect(() => {
    dispatch(fetchNotes())
  }, [])

  const notes = useSelector((state) => state.NotesState.notes)

  return (
    <div>
      {!addingNote && (
        <div
          onClick={() => {
            setAddingNote(true)
          }}
          className={"Dashboard__AddNoteButton"}
        >
          Add Note
        </div>
      )}

      {addingNote && (
        <NoteForm editedNote={editedNote} onSubmit={() => setAddingNote(false)} />
      )}
      <div className={"Dashboard__Notes"}>
        {notes &&
          notes.map((note) => {
            return (
              <NoteItem
                onEdit={(id) => {
                  setAddingNote(true)
                  setEditedNote(notes.find((note) => note.id === id))
                }}
                onDelete={(id) => {
                  dispatch(deleteNote(id))
                }}
                note={note}
              />
            )
          })}
      </div>
    </div>
  )
}

export default Dashboard
