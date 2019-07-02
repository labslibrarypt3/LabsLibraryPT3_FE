import React from "react";
import "./App.css";
import { Route, withRouter } from "react-router-dom";
import axios from "axios";

//component imports
import verify from "./components/Auth/Verify";
import Account from "./components/Account/Account";
import Header from "./components/Header/Headers";
import Landing from "./components/Landing/Landing";
import MyShelf from "./components/MyShelf/MyShelf";
import SearchGoodreads from "./components/AddBook/SearchGoodreads";
import StripeConnectSuccess from "./components/Account/Stripe/StripeConnectSuccess";
import TwilioApp from "./components/Twilio/TwilioApp";
import TOS from "./components/Legal/TOS";
import Privacy from "./components/Legal/Privacy";
import Search from "./components/Search/Search";

import Footer from "./components/Footer/Footer";
import AuthContainer from "./components/Auth/AuthContainer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    if (localStorage.getItem("jwt")) {
      const authToken = localStorage.getItem("jwt");
      const endpoint = "http://localhost:4000/api/users/user";
      const axiosResponse = await axios
        .get(endpoint, {
          headers: { authorization: authToken }
        })
        .then(res => {
          console.log("img on line 45", res.data.img);
          this.setState({
            userId: res.data.userId,
            name: res.data.name,
            email: res.data.email,
            img: localStorage.getItem("img")
          });
        })
        .catch(err => console.log(err));
    } else {
      return <Redirect to={"/"} />;
    }
  };

  render() {
    //     <Route
    //   path='/dashboard'
    //   render={(props) => <Dashboard {...props} isAuthed={true} />}
    // />
    return (
      <div className="App">
        <Header img={this.state.img} />

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

            <Route path="/twilio" component={verify(TwilioApp)} />

            <Route path="/tos" component={TOS} />
            <Route path="/privacy" component={Privacy} />
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
