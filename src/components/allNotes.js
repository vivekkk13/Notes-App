import { nanoid } from "nanoid";
import React, { useState } from "react";
import { createContext } from "react";
export const NotesContext = createContext();
export const AllNotes = (props) => {
  let date = new Date();
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "vivek singhhh",
      date: date.toLocaleDateString(),
    },
    {
      id: nanoid(),
      text: "softradixxxxxx",
      date: date.toLocaleDateString(),
    },
    {
      id: nanoid(),
      text: "building notes app",
      date: date.toLocaleDateString(),
    },
  ]);
  const [darkMode, setDrakMode] = useState(false);
  const [edit, setEdit] = useState(false);
  const [editText, setEditText] = useState("");
  const [ide, setId] = useState("");
  return (
    <>
      <div className={`${darkMode && "dark-mode"}`}>
        <NotesContext.Provider
          value={{
            name: [notes, setNotes],
            color: [darkMode, setDrakMode],
            editMode: [edit, setEdit],
            edittext: [editText, setEditText],
            ids: [ide, setId],
          }}
        >
          {props.children}
        </NotesContext.Provider>
      </div>
    </>
  );
};
