import React, { Component } from "react";
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
      return note;
    });
    this.setState({ notes: updatedNotes });
  };
  onSearch = (e) => {
    const searchText = e.target.value.toLowerCase();

    const noteSearch = this.state.notes.map((note) => {
      if (!searchText) {
        return {
          ...note,
          doesMatchSearch: true
        };
      } else {
        const lowerTitle = note.title.toLowerCase();
        const foundTitle = lowerTitle.includes(searchText);
        const lowerDescription = note.description.toLowerCase();
        const foundDescription = lowerDescription.includes(searchText);
        const searchHit = foundTitle || foundDescription;
        return {
          ...note,
          doesMatchSearch: searchHit
        };
      }
    });
    this.setState({ notes: noteSearch, searchText: searchText });
  };
  deleteNote = (noteId) => {
    const notId = (note) => note.id !== noteId;
    const notesArray = this.state.notes.filter(notId);
    this.setState({ notes: notesArray });
  };
  componentDidMount() {
    const stateString = localStorage.getItem("stateString");
    if (stateString) {
      const savedState = JSON.parse(stateString);
      this.setState(savedState);
    }
  }
  componentDidUpdate() {
    const stateString = JSON.stringify(this.state);
    localStorage.setItem("stateString", stateString);
  }

  render() {
    return (
      <div>
        <Header
          searchText={this.state.searchText}
          addNote={this.addNote}
          onSearch={this.onSearch}
        />
        <NotesList
          onType={this.onType}
          notes={this.state.notes}
          deleteNote={this.deleteNote}
        />
      </div>
    );
  }
}

export default App;
