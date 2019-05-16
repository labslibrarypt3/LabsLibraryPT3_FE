import React from "react";
import "./App.css";
import { NavLink } from "react-router-dom";

//component imports
import { Search, Account, AddBook, MyShelf } from "./components";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Neighborhood Library</h2>
      </header>
      <nav>
        <NavLink
          to="/addBook"
          activeClassName="selected"
          render={props => <AddBook {...props} books={bookData} />}
        >
          Add a Book
        </NavLink>
        <NavLink
          to="/myShelf"
          activeClassName="selected"
          render={props => <MyShelf {...props} books={bookData} />}
        >
          My Shelf
        </NavLink>
        <NavLink
          to="/search"
          activeClassName="selected"
          render={props => <Search {...props} books={bookData} />}
        >
          Search
        </NavLink>
        <NavLink
          to="/account"
          activeClassName="selected"
          render={props => <Account {...props} books={bookData} />}
        >
          Account
        </NavLink>
      </nav>
    </div>
  );
}

export default App;
