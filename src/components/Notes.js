import React, { useContext, useEffect, useState } from "react";
import { NotesContext } from "./allNotes";
import { ToastContainer, toast } from "react-toastify";
import swal from "sweetalert";
import { AddList } from "./AddList";
import "react-toastify/dist/ReactToastify.css";

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
        toast("deleted successfully.");
      } else {
        swal("Your Note file is safe!");
      }
    });
  };

  useEffect(() => {
    setValue(text);
  }, [text]);
  let charcterLimit = 200;

  return (
    <>
      <div className="note">
        {showEditData.showEditor && showEditData.showEditor == id ? (
          <div className="note new">
            <textarea
              rows="8"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              cols="10"
              placeholder="type to  add Note...."
            ></textarea>
          </div>
        ) : (
          <span>{value}</span>
        )}
        <ToastContainer />
        <div className="note-footer">
          <div>
            {showEditData.showEditor && showEditData.showEditor == id ? (
              <>
                <button
                  className="save editt"
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
                  Update
                </button>
                <div className="note-footer before">
                  <small>{charcterLimit - editText.length} remaining</small>
                </div>
              </>
            ) : (
              <>
                <small>{date}</small>
                <span className="note-delete                                                                                      ">
                  <i
                    className="fa fa-trash delete"
                    aria-hidden="true"
                    onClick={() => {
                      handleDelete(id);
                    }}
                  ></i>
                </span>
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
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
