import React from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import axios from "axios";

//component imports
import Search from "./components/Search/Search";
import Account from "./components/Account/Account";
import AddBook from "./components/AddBook/AddBook";
import MyShelf from "./components/MyShelf/MyShelf";
import Nav from "./components/Nav/Nav";
import Landing from "./components/Landing/Landing";
import GRBooks from "./components/AddBook/GRBooks";

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
        <Nav />
        
        <div className="main">
          <h2>
            <Link to="/">Neighborhood Library</Link>
          </h2>
        <div className="main-routes">
          <Route exact path="/" component={Landing} />
          <Route path="/add-book/:id" component={AddBook} />
          <Route path="/account/:id/" component={Account} />
          <Route path="/search" component={Search} />
          <Route path="/my-shelf/:id" component={MyShelf} />
        </div>


        <GRBooks />
      </div>
      </div>
    );
  }
}


export default App;
