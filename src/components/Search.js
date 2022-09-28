import React, { useContext, useEffect, useState } from "react";
import { NotesContext } from "./allNotes";

export const Search = () => {
  const { name, color, editMode, edittext, ids } = useContext(NotesContext);
  const [notes, setNotes] = name;
  const [darkMode, setDrakMode] = color;
  const [edit, setEdit] = editMode;
  const [editText, setEditText] = edittext;
  const [id, setId] = ids;
  const [search, setsearch] = useState("");
  const handleSearch = (e) => {
    setsearch(e.target.value);
  };

  useEffect(() => {
    setNotes(notes.filter((note) => note.text.includes(search)));
  }, [search]);
  return (
    <>
      <div>
        <div className="input-group rounded">
          <input
            type="search"
            className="form-control rounded search"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
            value={search}
            onChange={handleSearch}
          />
        </div>
      </div>
    </>
  );
};
