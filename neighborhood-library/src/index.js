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


//REACT_APP_BASE_URL="http://localhost:4000"
// REACT_APP_FE_BASE_URL="http://localhost:3000"