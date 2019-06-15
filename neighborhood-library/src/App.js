import React from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import axios from "axios";
import { StripeProvider, Elements } from "react-stripe-elements";

//component imports
import Account from "./components/Account/Account";
// import AddBook from "./components/AddBook/AddBook";
import Borrowed from "./components/MyShelf/Borrowed/Borrowed";
import Header from "./components/Header/Headers";
// import Landing from "./components/MyShelf/Landing/Landing";
import Loaned from "./components/MyShelf/Loaned/Loaned";
import Login from "./components/Auth/Login";
import MyShelf from "./components/MyShelf/MyShelf";
// import Borrowed from "./components/MyShelf/Borrowed/Borrowed";
import Nav from "./components/Nav/Nav";
import Search from "./components/Search/Search";
import SearchGoodreads from "./components/AddBook/SearchGoodreads";
import StripePayment from "./components/Stripe/StripePayment";
import TwilioApp from "./components/Twilio/TwilioApp";
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
      .then(res => res.status(200).json({ message: "connected to backend" }))
      .catch(err => err.status(500).json({ error: err }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Neighborhood Library</h2>
        </header>
        {/* <Nav /> */}

        <Header />
        <div className="main">
          <div className="main-routes">
            {/* <Route exact path="/" component={Landing} /> */}

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
          <TwilioApp />
        </div>
      </div>
    );
  }
}

export default App;
