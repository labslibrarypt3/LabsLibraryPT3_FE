import React from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import axios from "axios";

//component imports
import Account from "./components/Account/Account";
import Header from "./components/Header/Headers";
import Landing from "./components/Landing/Landing";
import MyShelf from "./components/MyShelf/MyShelf";
import SearchGoodreads from "./components/AddBook/SearchGoodreads";

import Search from "./components/Search/Search";

import TwilioApp from "./components/Twilio/TwilioApp";

import Footer from "./components/Footer/Footer";
import AuthContainer from "./components/Auth/AuthContainer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios
      .get("https://pt3-neighborhood-library-back.herokuapp.com/")
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div className="main">
          <div className="main-routes">
            <Route exact path="/" component={Landing} />

            <Route path ="/auth-container/:id" component={AuthContainer}/>

            <Route path="/add-book/:id" component={SearchGoodreads} />

            <Route path="/account/:id/" component={Account} />

            <Route path="/my-shelf/:id" component={MyShelf} />

            <Route path="/search" component={Search} />
          </div>

          < TwilioApp />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
