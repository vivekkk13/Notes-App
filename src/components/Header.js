import React, { useContext } from "react";
import { NotesContext } from "./allNotes";

export const Header = () => {
  const { name, color, editMode, edittext, ids } = useContext(NotesContext);
  const [notes, setNotes] = name;
  const [darkMode, setDrakMode] = color;
  const [edit, setEdit] = editMode;
  const [editText, setEditText] = edittext;
  const [ide, setId] = ids;
  // const handleChnage = () => {
  //   setDrakMode(true);
  //   console.log("sdfhbjhvh");
  // };
  return (
    <>
      <div className="header">
        <h1>Notes</h1>
        <button
          className="save"
          onClick={() => setDrakMode((previousDarkMode) => !previousDarkMode)}
        >
          {darkMode ? "Normal mode" : "dark mode"}
        </button>
      </div>
    </>
  );
};
