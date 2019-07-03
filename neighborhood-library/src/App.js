//Libraries and dependencies
import React, { Component } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
//Components
import Headers from "./components/Header/Headers";
import Account from "./components/Account/Account";
import AuthContainer from "./components/Auth/AuthContainer";
import Footer from "./components/Footer/Footer";
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
        console.log("getUserData res.data", res.data);
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
            <Account {...props} getUserData={this.getUserData} />
          )}
        />

        {/* <Route
          path="/add-book"
          render={props => <AddBookContainer {...props} />}
        /> */}

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

        {/*
        <Route path="/my-shelf" render={props => <MyShelf {...props} />} />

        <Route path="/search" render={props => <Search {...props} />} />

        <Route
          path="/stripe-connect-success"
          render={props => <StripeConnectSuccess {...props} />}
        />
        <Route path="/tos" component={TOS} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/twilio" component={TwilioApp} /> */}

        <Footer />
      </div>
    );
  }
}

export default App;
