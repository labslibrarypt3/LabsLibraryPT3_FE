import React from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import axios from "axios";
import { StripeProvider, Elements } from "react-stripe-elements";

//component imports
import Account from "./components/Account/Account";

import Header from "./components/Header/Headers";
import Landing from "./components/Landing/Landing";

import Login from "./components/Auth/Login";
import MyShelf from "./components/MyShelf/MyShelf";
import Loaned from "./components/MyShelf/Loaned/Loaned";
import Borrowed from "./components/MyShelf/Borrowed/Borrowed";
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
        <Header />
        <div className="main">
          <div className="main-routes">
            <Route exact path="/" component={Landing} />

            <Route path="/add-book/:id" component={SearchGoodreads} />

            <Route path="/account/:id/" component={Account} />

            <Route path="/my-shelf/:id" component={MyShelf} />
          </div>

          <div className="my-shelf">
            <Route path="/loaned/:id" component={Loaned} />
            <Route path="/borrowed/:id" component={Borrowed} />
          </div>

          <>
            <StripeProvider apiKey="pk_test_j6wi0FWmtWCqFPwU3oCHJA2800c8YshuOy">
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
