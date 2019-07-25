import React from "react";
import { Route, Link } from "react-router-dom";
import HomeLibrary from "./HomeLibrary/HomeLibrary";
import Borrowed from "./Borrowed/Borrowed";
import Loaned from "./Loaned/Loaned";

const MyShelf = props => {
  return (
    <main className="my-shelf">
      <nav className="my-shelf-nav">
        <Link to="/my-shelf/home-library">Home Library</Link>
        <Link to="/my-shelf/borrowed">Borrowed</Link>
        <Link to="/my-shelf/loaned">Loaned</Link>
        <Link to="/add-book">Add Books</Link>
      </nav>

      <Route
        path="/my-shelf/home-library"
        render={props => <HomeLibrary firstName={props.firstName} />}
      />
      <Route path="/my-shelf/borrowed" component={Borrowed} />
      <Route path="/my-shelf/loaned" component={Loaned} />
    </main>
  );
};

export default MyShelf;
