//Libraries and dependencies
import React, { Component } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
//Components
import Header from "./components/Header/Header";
import SideDrawer from "./components/Header/SideDrawer";
import Backdrop from "./components/Header/Backdrop";

import Account from "./components/Account/Account";
// import Landing from "./components/Landing/Landing";
import MyShelf from "./components/MyShelf/MyShelf";
import AddBookContainer from "./components/AddBook/AddBookContainer";
import StripeConnectSuccess from "./components/Account/Stripe/StripeConnectSuccess";
import TOS from "./components/Legal/TOS";
import Privacy from "./components/Legal/Privacy";

import AuthContainer from "./components/Auth/AuthContainer";
import Footer from "./components/Footer/Footer";
import Chat from "./components/Chat/Chat";
import MapsContainer from "./components/Maps/MapsContainer";
//Styles
import ResetPassword from "./components/Auth/ForgotPassword";
import ResetPasswordRedirect from "./components/Auth/ResetPassword";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: " ",
      name: " ",
      firstName: " ",
      lastInitial: " ",
      email: " ",
      address: " ",
      city: " ",
      state: " ",
      zipcode: " ",
      img: " ",
      password: " ",
      stripe_user_id: " ",
      isLoggedIn: true,
      isLoading: false,
      Message: " ",
      Error: " ",
      sideDrawerOpen: false,
      libraries: []
    };
  }
  componentDidMount() {
    // if (this.state.isLoggedIn) {
    //   this.getUserData();
    // }
  }

  //toggles isLoggedIn in App state
  loggedInStateHandler = () => {
    this.setState({ isLoggedIn: !this.state.isLoggedIn });
  };

  drawerToggleClickHandler = e => {
    this.setState(prevState => {
      e.persist();
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  getUserData = async () => {
    this.setState({ isLoading: true });
    const authToken = localStorage.getItem("jwt");
    console.log("App.js' getUserData() start", authToken, this.state.userId);

    const endpoint = "http://localhost:4000/api/users/user";
    const response = await axios
      .get(endpoint, { headers: { Authorization: `${authToken}` } })
      .then(res => {
        localStorage.setItem("userId", res.data.userId);
        console.log("response", res);
        const fullNameArray = res.data.name.split(" ");
        const firstName = fullNameArray[0];
        //grabs fullNameArray from above, gets the last word from it, splits that word into an array of letters, and grabs the first letter.
        const lastInitial = fullNameArray[fullNameArray.length - 1].split(
          ""
        )[0];
        //check to see if there is a last name/initial so that it doesn't display "undefined" in huge text if it's not there.

        this.setState(
          {
            userId: res.data.userId,
            name: res.data.name,
            firstName: firstName,
            lastInitial: lastInitial,
            email: res.data.email,
            address: res.data.address,
            city: res.data.city,
            state: res.data.state,
            zipcode: res.data.zipcode,
            img: res.data.img,
            stripe_user_id: res.data.stripe_user_id,
            isLoggedIn: true,
            isLoading: false,
            Message: "",
            Error: ""
          },
          () => {
            console.log("getUserData has updated App.js state");
          }
        );
      })
      .catch(err => this.setState({ Error: err }));
    console.log("App.js' getUserData() end");
  };

  getLibraries = () => {
    const endpoint = "http://localhost:4000/api/users/get-libraries";
    axios
      .get(endpoint)
      .then(res => {
        // we need lat, lng, userId
        // then use userid to put into helper in backend

        this.setState({ libraries: res.data });
      })
      .catch(err => console.log(err));
  };

  render() {
    if (this.state.sideDrawerOpen) {
      return (
        <div>
          <SideDrawer />
          <Backdrop backdropClick={this.backdropClickHandler} />
        </div>
      );
    }
    return (
      <div className="App">
        <Header
          drawerClickHandler={this.drawerToggleClickHandler}
          img={this.state.img}
          isLoggedIn={this.state.isLoggedIn}
          loggedInStateHandler={this.loggedInStateHandler}
        />
        {SideDrawer}
        {Backdrop}

        <Route
          exact
          path="/add-book"
          render={props => <AddBookContainer userId={this.state.userId} />}
        />
        <Route
          path="/account"
          render={props => (
            <Account
              getUserData={this.getUserData}
              userId={this.state.userId}
              name={this.state.name}
              email={this.state.email}
              address={this.state.address}
              city={this.state.city}
              state={this.state.state}
              zipcode={this.state.zipcode}
              img={this.state.img}
              stripe_user_id={this.state.stripe_user_id}
              isLoggedIn={this.state.isLoggedIn}
              firstName={this.state.firstName}
              lastInitial={this.state.lastInitial}
            />
          )}
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
        <Route
          path="/my-shelf"
          render={props => <MyShelf firstName={this.state.firstName} />}
        />
        <Route path="/chat" component={Chat} />

        <Route path="/tos" component={TOS} />
        <Route path="/privacy" component={Privacy} />
        <Route
          path="/stripe-connect-success"
          render={props => <StripeConnectSuccess />}
        />
        <Route
          exact
          path="/"
          render={props => (
            <MapsContainer
              getUserData={this.getUserData}
              userId={this.state.userId}
              getLibraries={this.getLibraries}
              libraries={this.state.libraries}
            />
          )}
        />
        <Route
          exact
          path="/login/reset"
          render={props => <ResetPassword email={this.state.email} />}
        />
        <Route path="/reset" render={props => <ResetPasswordRedirect />} />

        <Footer />
      </div>
    );
  }
}

export default App;
