import React from "react";
import "./App.css";
import {Route} from react-router-dom;

//component imports
import { Search, Account, AddBook, MyShelf, Nav } from "./components";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Neighborhood Library</h2>
      </header>

      <Nav/>

      <div className="main">
        <Route path="/add-book/:id" component={AddBook} />
        <Route path="/account/:id/" component={Account} />
        <Route path="/search" component={Search} />
        <Route path="/my-shelf/:id" component={MyShelf}/>
      </div>
    </div>
  );
}

export default App;
