import React from "react";
import Note from "./Note.js";

const NotesList = () => {
  return (
    <div>
      <ul className="notes-list">
      <Note />
      <Note />
      <Note />
    </ul>
    </div>
  );
};

export default NotesList;