import React from "react";
import { Route, Link } from "react-router-dom";
import HomeLibrary from "./HomeLibrary/HomeLibrary";
import Borrowed from "./Borrowed/Borrowed";
import Loaned from "./Loaned/Loaned";

const MyShelf = props => {
  return (
    <main className="my-shelf container">
      <Link to="/my-shelf/home-library">Home Library</Link>
      <Link to="/my-shelf/borrowed">Borrowed</Link>
      <Link to="/my-shelf/loaned">Loaned</Link>

      <Route path="/my-shelf/home-library" component={HomeLibrary} />
      <Route path="/my-shelf/borrowed" component={Borrowed} />
      <Route path="/my-shelf/loaned" component={Loaned} />
    </main>
  );
};

export default MyShelf;
