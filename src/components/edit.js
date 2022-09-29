// import React, { useContext, useState } from "react";
// import { NotesContext } from "./allNotes";

// const Edit = () => {
//   const { name, color, editMode, edittext, ids } = useContext(NotesContext);
//   const [notes, setNotes] = name;
//   const [darkMode, setDrakMode] = color;
//   const [edit, setEdit] = editMode;
//   const [editText, setEditText] = edittext;
//   const [ide, setId] = ids;
//   const [data, setData] = useState(notes);
//   const [editNote, setEditNot] = useState(editText);
//   let date = new Date();
//   let charcterLimit = 200;
//   const updateData = () => {
//     const newList = [...data];
//     const userIndex = newList.findIndex((item) => item.id == ide);

//     newList[userIndex] = {
//       id: ide,
//       text: editText,
//       date: date.toLocaleDateString(),
//     };
//     console.log(userIndex);
//     console.log("newListt====>", newList);
//     setNotes(newList);
//     setEdit(false);
//   };

//   return (
//     <>
//       <div className="note new">
//         <textarea
//           rows="8"
//           value={editText}
//           onChange={(e) => setEditText(e.target.value)}
//           cols="10"
//           placeholder="type to  add Note...."
//         ></textarea>
//         <div className="note-footer">
//           <small> {charcterLimit - editText.length} remaining</small>
//           <button className="save" onClick={updateData}>
//             edit
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Edit;
