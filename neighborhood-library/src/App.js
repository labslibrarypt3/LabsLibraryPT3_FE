import React from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import axios from "axios";
import { StripeProvider, Elements } from "react-stripe-elements";

//component imports
import Account from "./components/Account/Account";
import AddBook from "./components/AddBook/AddBook";
import Borrowed from "./components/MyShelf/Borrowed/Borrowed";
import Header from "./components/Header/Headers";
// import Landing from "./components/MyShelf/Landing/Landing";
import Loaned from "./components/MyShelf/Loaned/Loaned";

// import GRBooks from "./components/AddBook/GRBooks";

import Login from "./components/Auth/Login";
import MyShelf from "./components/MyShelf/MyShelf";
import Nav from "./components/Nav/Nav";
import Search from "./components/Search/Search";
import SearchGoodreads from "./components/AddBook/SearchGoodreads";
import StripePayment from "./components/Stripe/StripePayment";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios
      .get("https://pt3-neighborhood-library-back.herokuapp.com/")
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h2>Neighborhood Library</h2>
        </header>
        {/* <Nav /> */}

        <div className="main">
          <Header />
          <SearchGoodreads />
          <Nav />
          <a
          href="https://github.com/login/oauth/authorize?client_id=66d10ed2a42e30acdfcb">
          Sign in with Github
        </a>
          <div className="main-routes">
            {/* <Route exact path="/" component={Landing} /> */}

            <Route path="/add-book/:id" component={AddBook} />
            <Route path="/account/:id/" component={Account} />
            
            <Route path="/myShelf" component={MyShelf} />
          </div>

          <div className="myshelf">
            <Route path="/loaned" component={Loaned} />
            <Route path="/borrowed" component={Borrowed} />
          </div>

        <>
        <StripeProvider apiKey='key goes here'>
          <Elements>
            <StripePayment />
          </Elements>
        </StripeProvider>

        </>
      </div>
      </div>
    );
  }
}

export default App;
