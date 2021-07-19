import React, { Component } from "react";
import { render } from "react-dom";
import Header from "./Header.js";
import NotesList from "./NotesList.js";

class App extends Component {
  state = {
    notes: [
      {
        id: Date.now(),
        title: "",
        description: "",
        doesMatchSearch: true
      }
    ],
    searchText: ""
  };
  addNote = () => {
    const newNote = {
      id: Date.now(),
      title: "",
      description: "",
      doesMatchSearch: true
    };
    const newNoteArray = [newNote, ...this.state.notes];
    this.setState({ notes: newNoteArray });
  };
  onType = (text, noteId, field) => {
    const updatedNotes = this.state.notes.map((note) => {
      if (note.id === noteId) {
        if (field === "title") {
          note.title = text;
          return note;
        } else if (field === "description") {
          note.description = text;
          return note;
        }
      } else {
        return note;
      }
    });
    this.setState({ notes: updatedNotes });
  };
  render() {
    return (
      <div>
        <Header searchText={this.state.searchText} addNote={this.addNote} />
        <NotesList onType={this.onType} notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
