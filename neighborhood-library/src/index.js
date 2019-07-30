import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

require("dotenv").config();

// REACT_APP_BASE_URL="https://pt3-neighborhood-library-back.herokuapp.com"
// REACT_APP_FE_BASE_URL="https://goofy-mayer-45bb20.netlify.com"
