import React from "react";
import Note from "./Note.js";



const NotesList = (props) => {
  const noteElement = props.notes.map( note => <Note note={note} key={note.id} /> );
  return (
    
      <ul className="notes-list">{noteElement}</ul>
  );
};

export default NotesList;