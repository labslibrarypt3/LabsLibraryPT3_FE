import React from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import axios from "axios";

//component imports
import Search from "./components/Search/Search";
import Account from "./components/Account/Account";
import AddBook from "./components/AddBook/AddBook";
import MyShelf from "./components/MyShelf/MyShelf";
import Nav from "./components/Nav/Nav";
import Landing from "./components/Landing/Landing";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios
      .get("https://pt3-neighborhood-library-back.herokuapp.com/account")
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Neighborhood Library</h2>
        </header>
        <Nav />
        <Link
          to="https://github.com/login/oauth/authorize?client_id=66d10ed2a42e30acdfcb
      "
        >
          Sign in with Github
        </Link>

        <div className="main">
          <Route exact path="/" component={Landing} />
          <Route path="/add-book/:id" component={AddBook} />
          <Route path="/account/:id/" component={Account} />
          <Route path="/search" component={Search} />
          <Route path="/my-shelf/:id" component={MyShelf} />
        </div>
      </div>
    );
  }
}

export default App;
