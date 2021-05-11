import React from "react"
import moment from "moment"
import "./NoteItem.styles.scss"

const NoteItem = ({ note, onEdit, onDelete }) => {
  return (
    <div className={"NoteItem__Container"}>
      <div className={"NoteItem__Data"}>
        <div className={"NoteItem__Header"}>
          <div className={"NoteItem__Header__Date"}>
            {moment(note.created_at).format("LL")}
          </div>
          <div className={"NoteItem__Header__Title"}>{note.title}</div>
          <div className={"NoteItem__Header__City"}>
            {note.city} - {`${(note.weather && note.weather.temp) || "---"} \u00B0C`}
          </div>
        </div>
        <div className={"NoteItem__Content"}>{note.content}</div>
      </div>
      <div className={"NoteItem__Actions"}>
        <div
          className={"NoteItem__Actions__Button"}
          onClick={() => {
            onEdit(note.id)
          }}
        >
          Edit
        </div>
        <div
          className={"NoteItem__Actions__Button"}
          onClick={() => {
            onDelete(note.id)
          }}
        >
          Delete
        </div>
      </div>
    </div>
  )
}

export default NoteItem
