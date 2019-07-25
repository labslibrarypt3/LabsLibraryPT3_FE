import React from "react";
import { Link } from "react-router-dom";

const NoBooks = () => {
  return (
    <div>
      You haven't added books to your library to lend out yet. Let's
      <Link to="/add-book">add books</Link> to your Home Library now!
    </div>
  );
};

export default NoBooks;
