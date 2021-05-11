import React, { useEffect } from "react"
import "./NoteForm.styles.scss"
import { useFormik } from "formik"
import { useDispatch } from "react-redux"
import { saveNote } from "../../../../store/Notes/Notes.actions"

const NoteForm = ({ editedNote, onSubmit }) => {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      id: null,
      city: "",
      title: "",
      content: "",
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      dispatch(saveNote(values.id, values.title, values.city, values.content))
      onSubmit()
    },
  })

  useEffect(() => {
    if (editedNote) {
      formik.setValues({ ...editedNote })
    }
  }, [editedNote])

  return (
    <form className={"NoteForm"} onSubmit={formik.handleSubmit}>
      <div className={"NoteForm__Item"}>
        <label className={"NoteForm__Label"} htmlFor="title">
          Title
        </label>
        <input
          className={"NoteForm__Input"}
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
      </div>
      <div className={"NoteForm__Item"}>
        <label className={"NoteForm__Label"} htmlFor="city">
          City
        </label>
        <input
          className={"NoteForm__Input"}
          id="city"
          name="city"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.city}
        />
      </div>
      <div className={"NoteForm__Item"}>
        <label className={"NoteForm__Label"} htmlFor="content">
          Content
        </label>
        <textarea
          className={"NoteForm__Input"}
          style={{ width: "100%" }}
          rows={8}
          id="content"
          name="content"
          onChange={formik.handleChange}
          value={formik.values.content}
        />
      </div>
      <div onClick={() => formik.submitForm()} className={"NoteForm__SubmitButton"}>
        Submit
      </div>
    </form>
  )
}

export default NoteForm
