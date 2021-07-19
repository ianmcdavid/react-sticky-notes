import React from "react";
import Note from "./Note.js";

const NotesList = (props) => {
  const filterSearch = props.notes.filter((note) => note.doesMatchSearch);
  const noteElement = filterSearch.map((note) => (
    <Note onType={props.onType} note={note} key={note.id} />
  ));
  return <ul className="notes-list">{noteElement}</ul>;
};

export default NotesList;
