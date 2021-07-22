import React, { Component } from "react";

class Note extends Component {
  updateTitle = (e) => {
    const text = e.target.value;
    this.props.onType(text, this.props.note.id, "title");
  };
  updateDescription = (e) => {
    const text = e.target.value;
    this.props.onType(text, this.props.note.id, "description");
  };
  deleteTheNote = () => this.props.deleteNote(this.props.note.id);
  render() {
    return (
      <div>
        <li className="note">
          <input
            className="note__title"
            type="text"
            placeholder="Title"
            value={this.props.note.title}
            onChange={this.updateTitle}
          />
          <textarea
            className="note__description"
            placeholder="Description..."
            value={this.props.note.description}
            onChange={this.updateDescription}
          />
          <span className="note__delete" onClick={this.deleteTheNote}>
            X
          </span>
        </li>
      </div>
    );
  }
}

export default Note;
