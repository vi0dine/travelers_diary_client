import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchNotes } from "../../store/Notes/Notes.actions"

const Dashboard = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchNotes())
  }, [])

  const notes = useSelector((state) => state.NotesState.notes)

  return (
    <div>
      {notes &&
        notes.map((note) => {
          return <div>{note.title}</div>
        })}
    </div>
  )
}

export default Dashboard
