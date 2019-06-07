import React from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import axios from "axios";
import { StripeProvider, Elements } from "react-stripe-elements";

//component imports
import Account from "./components/Account/Account";
import Borrowed from "./components/MyShelf/Borrowed/Borrowed";
import Header from "./components/Header/Headers";
import Landing from "./components/Landing/Landing";
import Loaned from "./components/MyShelf/Loaned/Loaned";
import Login from "./components/Auth/Login";
import MyShelf from "./components/MyShelf/MyShelf";
import Nav from "./components/Nav/Nav";
import Register from "./components/Auth/Register";
import Search from "./components/Search/Search";
import SearchGoodreads from "./components/AddBook/SearchGoodreads";
import StripePayment from "./components/Stripe/StripePayment";
import HomeLibrary from "./components/MyShelf/HomeLibrary/HomeLibrary";

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

        <div className="main">
          <Header />

          <Nav />
          <h2>
            <Link to="/">Neighborhood Library</Link>
          </h2>
          <div className="main-routes">
            <Route exact path="/" component={Landing} />

            <Route path="/add-book/:id" component={SearchGoodreads} />
            <Route path="/account/:id/" component={Account} />
            <Route path="/search" component={Search} />
            <Route path="/myShelf" component={MyShelf} />
          </div>

          <div className="myshelf">
            <Route path="/library"component={HomeLibrary}/>
            <Route path="/loaned" component={Loaned} />
            <Route path="/borrowed" component={Borrowed} />
          </div>

          <div className="auth-routes">
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </div>


          <>
            <StripeProvider apiKey="key goes here">
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
