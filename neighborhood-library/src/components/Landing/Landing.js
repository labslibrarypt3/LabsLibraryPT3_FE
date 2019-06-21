import React from "react";
import { Route } from "react-router-dom";
import {AuthContainer} from "../Auth/AuthContainer"
import Register from "../Auth/Register";

function Landing() {
  return (
    <div>
      <div className="delete-me-filler">
        <h2>Welcome</h2>
        <p>
          Welcome to the Neighborhood Library. Here you can add books to your
          lending library so that your neighbors and friends can check them out
          from you. We've taken the pesky problem of forgetful friends out of
          the equation by empowering every person to charge late fees through
          the app.
        </p>
        <h3>JOIN TODAY!</h3>
      </div>
    </div>
  );
}

export default Landing;
