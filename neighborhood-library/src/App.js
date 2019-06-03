import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import axios from "axios";

//component imports
import Search from "./components/Search/Search";
import Account from "./components/Account/Account";
import AddBook from "./components/AddBook/AddBook";
import MyShelf from "./components/MyShelf/MyShelf";
import LandingPage from "./components/LandingPage/LandingPage";
import Loaned from "./components/MyShelf/Loaned/Loaned";
import Borrowed from "./components/MyShelf/Borrowed/Borrowed";
import Header from "./components/Header/Headers";



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
      <Header />
      <LandingPage />
        <a href="https://github.com/login/oauth/authorize?client_id=66d10ed2a42e30acdfcb
      ">Sign in with Github</a>
        <div className="main">
          <Route path="/add-book/:id" component={AddBook} />
          <Route path="/account/:id/" component={Account} />
          <Route path="/search" component={Search} />
          <Route path="/myShelf" component={MyShelf} />
        </div>
        <div className="myshelf">
    <Route path="/loaned" component={Loaned}/>
    <Route path="/borrowed" component={Borrowed}/>
    </div>
      </div>
    );
  }
}

export default App;
