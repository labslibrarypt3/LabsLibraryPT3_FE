import React from "react";
import "./App.css";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Neighborhood Library</h2>
      </header>
      <nav>
        <NavLink to="/addBook">Add a Book</NavLink>
        <NavLink to="/myShelf">My Shelf</NavLink>
        <NavLink to="/search">Search</NavLink>
        <NavLink to="/account">Account</NavLink>
      </nav>
    </div>
  );
}

export default App;
