import React, { useContext, useState } from "react";
import { NotesContext } from "./allNotes";

import swal from "sweetalert";
import { AddList } from "./AddList";

export const Notes = ({ id, text, date }) => {
  const [addNote, setaddNote] = useState("");
  const { name, color, editMode, edittext, ids } = useContext(NotesContext);
  const [notes, setNotes] = name;
  const [darkMode, setDrakMode] = color;
  // const [edit, setEdit] = editMode;
  const [value, setValue] = useState(text);
  const [editText, setEditText] = edittext;
  const [ide, setId] = ids;
  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Note file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const newobj = [...notes];
        const filtered = newobj.filter((list) => list.id != id);
        setNotes(filtered);
        swal("Poof! Your Note has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your Note file is safe!");
      }
    });
  };
  // const setDetail = () => {
  //   console.log("hellooo");
  //   // setaddNote(e.target.value);
  // };
  console.log(addNote, "dsfh");

  const handleEdit = (text) => {
    setEditText(text);
    console.log("edit==>", editText);
  };
  // const updateData = (e) => {
  //   const newList = [...notes];
  //   const userIndex = notes.findIndex((item) => item.id == ide);
  //   newList[userIndex] = {
  //     text: addNote,
  //     date: date,
  //   };
  //   setEditText(e.target.value);
  //   setNotes(newList);
  // };
  const handleValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div className="note">
        <input onChange={handleValue} value={value} />
        <div className="note-footer">
          <small>{date}</small>
          <span className="note-delete">
            <i
              className="fa fa-trash delete"
              aria-hidden="true"
              onClick={() => {
                handleDelete(id);
              }}
            ></i>
            <span className="edit">
              <i
                id="icon"
                className="fa fa-pencil-square-o "
                aria-hidden="true"
                onClick={() => {
                  handleEdit(text);
                  setId(id);
                }}
              ></i>
            </span>
          </span>
        </div>
      </div>
    </>
  );
};
