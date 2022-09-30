import { nanoid } from "nanoid";
import React, { useContext, useEffect, useState, useMemo, useRef } from "react";
import { NotesContext } from "./allNotes";
// import { Texteditor } from "./Texteditor";
import JoditEditor from "jodit-react";
export const AddList = () => {
  const [addNote, setaddNote] = useState("");
  const { name, color, editMode, edittext, ids } = useContext(NotesContext);
  const [notes, setNotes] = name;
  const [darkMode, setDrakMode] = color;
  const [edit, setEdit] = editMode;
  const [editText, setEditText] = edittext;
  const [ide, setId] = ids;
  const [value, setvalue] = useState("");

  let date = new Date();
  let charcterLimit = 200;
  const editor = useRef(null);
  const setDetail = (content) => {
    setaddNote(content);
  };

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

  useEffect(() => {
    console.log(addNote);
  }, []);

  const config = useMemo(
    () => ({
      readonly: false,
    }),
    []
  );

  return (
    <>
      <div className="note new">
        <JoditEditor
          value={addNote}
          onBlur={(newContent) => setDetail(newContent)} // preferred to use only this option to update the content for performance reasons
          onChange={(newContent) => {}}
          config={{
            buttons: ["bold", "italic"],
            readonly: false,
            toolbarAdaptive: false,
            config: config,
          }}
        />
        {/* <textarea
          rows="8"
          value={addNote}
          onChange={setDetail}
          cols="10"
          placeholder="type to  add Note...."
        ></textarea> */}

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
