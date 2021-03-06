import React from "react";

const Header = (props) => {
  return (
    <div>
      <header className="app-header">
        <h1 className="app-header__title">Super Sticky Notes</h1>
        <aside className="app-header__controls">
          <button className="add-new" onClick={props.addNote}>
            + New Note
          </button>
          <input
            className="search"
            type="text"
            placeholder="Type here to search..."
            value={props.searchText}
            onChange={props.onSearch}
          />
        </aside>
      </header>
    </div>
  );
};

export default Header;
