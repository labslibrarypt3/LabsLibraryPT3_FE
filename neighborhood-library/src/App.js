import React from "react";
import "./App.css";
import {Route} from react-router-dom;

import { Search, Account, AddBook, MyShelf, Nav } from "./components";



class App extends React.Component {
  constructor(){
    super();
    this.state= {
      data: []
    }
  }

  componentDidMount(){
    const response = await fetch( /*URL GOES HERE*/);
    const data = await response.json();
    this.setState({data: data});

  }

  render(){
    <div className="App">

      <header className="App-header">
        <h2>Neighborhood Library</h2>
        
      </header>

      <Nav/>

      <div className="main">
        <Route path="/add-book/:id" component={AddBook} />
        <Route path="/account/:id/" component={Account} />
        <Route path="/search" component={Search} />
        <Route path="/my-shelf/:id" component={MyShelf} />
      </div>
    </div>
  }
}

export default App;
