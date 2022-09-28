import React, { useContext } from "react";
import { AddList } from "./AddList";
import { AllNotes, NotesContext } from "./allNotes";
import { Notes } from "./Notes";

export const NotesList = () => {
  const { name, color, editMode, edittext, ids } = useContext(NotesContext);
  const [notes, setNotes] = name;
  const [darkMode, setDrakMode] = color;
  const [edit, setEdit] = editMode;
  const [editText, setEditText] = edittext;
  const [ide, setId] = ids;
  return (
    <>
      <div className="note-list">
        {notes.map((list, i) => (
          <Notes key={i} id={list.id} text={list.text} date={list.date} />
        ))}
        <AddList />
      </div>
    </>
  );
};
