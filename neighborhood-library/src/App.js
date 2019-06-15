import React from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import axios from "axios";
import { StripeProvider, Elements } from "react-stripe-elements";

//component imports
import Account from "./components/Account/Account";
import Header from "./components/Header/Headers";
import Landing from "./components/Landing/Landing";
import MyShelf from "./components/MyShelf/MyShelf";
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
        <header className="App-header">
          <h2>Neighborhood Library</h2>
        </header>

        <Header />
        <div className="main">
          <div className="main-routes">
            <Route exact path="/" component={Landing} />

            <Route path="/add-book/:id" component={SearchGoodreads} />

            <Route path="/account/:id/" component={Account} />

            <Route path="/my-shelf/:id" component={MyShelf} />
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
