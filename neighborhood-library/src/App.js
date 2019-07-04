//Libraries and dependencies
import React, { Component } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
//Components
import Headers from "./components/Header/Headers";
import Account from "./components/Account/Account";
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
        console.log("getUserData res.data", res);
        this.setState(
          {
            userId: res.data.userId,
            name: res.data.name,
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

        <Route
          exact
          path="/add-book"
          render={props => <AddBookContainer userId={this.state.userId} />}
        />

        <Route
          path="/account"
          render={props => (
            <Account
              {...props}
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

        {/*
        <Route path="/my-shelf" render={props => <MyShelf {...props} />} />


        <Route path="/search" render={props => <Search {...props} />} />

            <Route path="/chat" component={Chat} />


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
