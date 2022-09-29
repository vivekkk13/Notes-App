import React, { useContext, useEffect, useState } from "react";
import { NotesContext } from "./allNotes";

import swal from "sweetalert";
import { AddList } from "./AddList";

export const Notes = ({ id, text, date }) => {
  const [addNote, setaddNote] = useState("");
  const { name, color, editMode, edittext, ids, editData } =
    useContext(NotesContext);
  const [showEditData, setShowEditData] = editData;
  const [notes, setNotes] = name;
  const [darkMode, setDrakMode] = color;
  const [edit, setEdit] = editMode;
  const [value, setValue] = useState(text);
  const [editText, setEditText] = useState(showEditData.editText);
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

  useEffect(() => {
    setValue(text);
  }, [text]);

  return (
    <>
      <div className="note">
        {showEditData.showEditor && showEditData.showEditor == id ? (
          <textarea
            rows="8"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            cols="10"
            placeholder="type to  add Note...."
          />
        ) : (
          <span>{value}</span>
        )}

        <div className="note-footer">
          <small>{date}</small>
          <div>
            <span className="note-delete">
              <i
                className="fa fa-trash delete"
                aria-hidden="true"
                onClick={() => {
                  handleDelete(id);
                }}
              ></i>
            </span>
            {showEditData.showEditor && showEditData.showEditor == id ? (
              <button
                className="save"
                onClick={() => {
                  setNotes(
                    notes.map((item, index) => {
                      if (item.id == showEditData.showEditor) {
                        return {
                          ...notes[index],
                          text: editText,
                        };
                      } else {
                        return item;
                      }
                    })
                  );
                  setShowEditData({
                    showEditor: null,
                    editText: "",
                  });
                }}
              >
                edit
              </button>
            ) : (
              <span className="edit">
                <i
                  id="icon"
                  className="fa fa-pencil-square-o "
                  aria-hidden="true"
                  onClick={() => {
                    setShowEditData({
                      showEditor: id,
                      editText: value,
                    });
                    setEditText(value);
                  }}
                ></i>
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
