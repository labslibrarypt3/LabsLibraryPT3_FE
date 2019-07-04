//Libraries and dependencies
import React, { Component } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
//Components
import Headers from "./components/Header/Headers";
import Account from "./components/Account/Account";
<<<<<<< HEAD
// import Landing from "./components/Landing/Landing";
import MyShelf from "./components/MyShelf/MyShelf";
import AddBookContainer from "./components/AddBook/AddBookContainer";
import StripeConnectSuccess from "./components/Account/Stripe/StripeConnectSuccess";
import Chat from "./components/Twilio/Chat";
import TOS from "./components/Legal/TOS";
import Privacy from "./components/Legal/Privacy";
import Search from "./components/Search/Search";
=======
>>>>>>> 3242b0fd02f9559f5f863f861d60c7aa926fcf48
import AuthContainer from "./components/Auth/AuthContainer";
import AddBookContainer from "./components/AddBook/AddBookContainer";
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
      lastInitial: " ",
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
      Message: " ",
      Error: " "
    };
  }

  //toggles isLoggedIn in App state
  loggedInStateHandler = prevState => {
    this.setState({ isLoggedIn: !prevState.isLoggedIn });
  };

  getUserData = async () => {
    this.setState({ isLoading: true });
    const authToken = localStorage.getItem("jwt");
    console.log("App.js' getUserData() start");
    const endpoint = "http://localhost:4000/api/users/user";
    const response = await axios
      .get(endpoint, { headers: { Authorization: `${authToken}` } })
      .then(res => {
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
            isLoggedIn: false,
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

  // componentDidMount() {
  //   if (this.state.isLoggedIn) {
  //     this.getUserData();
  //   }
  // }

  render() {
    return (
      <div className="App">
        <Headers img={this.state.img} />
<<<<<<< HEAD
        <Route
          path="/add-book"
          render={props => <AddBookContainer {...props} />}
        />
=======

        <Route
          exact
          path="/add-book"
          render={props => <AddBookContainer userId={this.state.userId} />}
        />

>>>>>>> 3242b0fd02f9559f5f863f861d60c7aa926fcf48
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
        <Route path="/my-shelf" render={props => <MyShelf {...props} />} />
        <Route path="/search" render={props => <Search {...props} />} />
        <Route path="/chat" component={Chat} />
        <Route
          path="/stripe-connect-success"
          render={props => <StripeConnectSuccess {...props} />}
        />
        <Route path="/tos" component={TOS} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/twilio" component={Chat} /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
