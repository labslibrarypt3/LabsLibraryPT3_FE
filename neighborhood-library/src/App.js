//Libraries and dependencies
import React, { Component } from "react";
import axios from "axios";
import { Route, withRouter, Redirect } from "react-router-dom";
//Components
import Headers from "./components/Header/Headers";
import ManualAuthContainer from "./components/Auth/ManualAuthContainer";
import Account from "./components/Account/Account";
import AddBookContainer from "./components/AddBook/AddBookContainer";
import Search from "./components/Search/Search";
import MyShelf from "./components/MyShelf/MyShelf";
import StripeConnectSuccess from "./components/Account/Stripe/StripeConnectSuccess";
import TwilioApp from "./components/Twilio/TwilioApp";
import TOS from "./components/Legal/TOS";
import Privacy from "./components/Legal/Privacy";
import Footer from "./components/Footer/Footer";
import AuthContainer from "./components/Auth/AuthContainer";

//Styles
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: " ",
      name: " ",
      firstName: " ",
      lastName: " ",
      email: " ",
      address: " ",
      city: " ",
      state: " ",
      zipcode: " ",
      img: " ",
      password: " ",
      stripe_user_id: " ",
      isLoggedIn: false,
      isLoading: false,
      Message: "",
      Error: ""
    };
  }

  //toggles isLoggedIn in App state
  loggedInStateHandler = prevState => {
    this.setState({ isLoggedIn: !prevState.isLoggedIn });
  };

  getUserData = async () => {
    console.log("App.js' getUserData() start");
    const endpoint = "http://localhost:4000/api/users/user";
    const response = await axios
      .get(endpoint)
      .then(res => {
        this.setState({
          userId: res.data.userId,
          name: res.data.name,
          firstName: res.data.firstname,
          lastName: res.data.lastname,
          email: res.data.email,
          address: res.data.address,
          city: res.data.city,
          state: res.data.state,
          zipcode: res.data.zipcode,
          img: res.data.img,
          stripe_user_id: res.data.stripe_user_id
        });
      })
      .catch(err => this.setState({ Error: err }));
    console.log("App.js' getUserData() end");
  };

  render() {
    return (
      <div className="App">
        <Headers img={this.state.img} />

        <Route
          path="/account"
          render={props => (
            <Account
              {...props}
              userId={this.state.userId}
              name={this.state.name}
              firstName={this.state.firstname}
              lastName={this.state.lastname}
              email={this.state.email}
              address={this.state.address}
              city={this.state.city}
              state={this.state.state}
              zipcode={this.state.zipcode}
              img={this.state.img}
              stripe_user_id={this.state.stripe_user_id}
              getUserData={this.getUserData}
            />
          )}
        />

        <Route
          path="/add-book"
          render={props => <AddBookContainer {...props} />}
        />

        <Route
          path="/auth"
          render={props => (
            <AuthContainer
              {...props}
              isLoggedIn={this.state.isLoggedIn}
              loggedInStateHandler={this.loggedInStateHandler}
            />
          )}
        />
        <Route path="/my-shelf" render={props => <MyShelf {...props} />} />

        <Route path="/search" render={props => <Search {...props} />} />

        <Route
          path="/stripe-connect-success"
          render={props => <StripeConnectSuccess {...props} />}
        />
        <Route path="/tos" component={TOS} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/twilio" component={TwilioApp} />

        <Footer />
      </div>
    );
  }
}

export default App;
