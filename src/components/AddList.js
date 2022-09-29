import { nanoid } from "nanoid";
import React, { useContext, useState } from "react";
import { NotesContext } from "./allNotes";

export const AddList = () => {
  const [addNote, setaddNote] = useState("");
  const { name, color, editMode, edittext, ids } = useContext(NotesContext);
  const [notes, setNotes] = name;
  const [darkMode, setDrakMode] = color;
  const [edit, setEdit] = editMode;
  const [editText, setEditText] = edittext;
  const [ide, setId] = ids;
  let date = new Date();
  let charcterLimit = 200;
  const setDetail = (e) => {
    setaddNote(e.target.value);
  };
  // const updateData = () => {
  //   const newList = [...notes];
  //   const userIndex = newList.findIndex((item) => item.id == ide);

  //   newList[userIndex] = {
  //     text: addNote,
  //     date: date.toLocaleDateString(),
  //   };
  //   console.log(newList);

  //   setNotes(newList);
  //   setEdit(false);
  //   setaddNote("");
  // };

  const handleSubmit = () => {
    setNotes((prev) => [
      ...prev,
      {
        id: nanoid(),
        text: addNote,
        date: date.toLocaleDateString(),
      },
    ]);
    setaddNote("");
  };
  return (
    <>
      <div className="note new">
        <textarea
          rows="8"
          value={addNote}
          onChange={setDetail}
          cols="10"
          placeholder="type to  add Note...."
        ></textarea>
        <div className="note-footer">
          <small>{charcterLimit - addNote.length} remaining</small>
          <button className="save" onClick={handleSubmit}>
            save
          </button>
        </div>
      </div>
    </>
  );
};
