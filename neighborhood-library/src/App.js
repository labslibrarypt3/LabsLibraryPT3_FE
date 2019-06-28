import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import axios from "axios";

//component imports
import verify from "./components/Auth/Verify";
import Account from "./components/Account/Account";
import Header from "./components/Header/Headers";
import Landing from "./components/Landing/Landing";
import MyShelf from "./components/MyShelf/MyShelf";
import SearchGoodreads from "./components/AddBook/SearchGoodreads";
import StripeConnectSuccess from "./components/Account/Stripe/StripeConnectSuccess";

import Search from "./components/Search/Search";



import Footer from "./components/Footer/Footer";
import AuthContainer from "./components/Auth/AuthContainer";
import"../node_modules/bootstrap/dist/css/bootstrap.min.css";

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

            <Route path="/auth-container" component={AuthContainer} />

            <Route path="/add-book" component={verify(SearchGoodreads)} />

            <Route path="/account" component={verify(Account)} />

            <Route path="/my-shelf" component={verify(MyShelf)} />

            <Route path="/search" component={Search} />

            <Route
              path="/stripe-success"
              component={verify(StripeConnectSuccess)}
            />
          </div>

          
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
