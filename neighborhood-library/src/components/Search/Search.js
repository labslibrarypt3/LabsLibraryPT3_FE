import React, { Component } from "react";
import Nav from "../Nav/Nav";
// import MapsContainer from "./MapsContainer";
import MapContainer from "./MapContainer";


class Search extends Component {
  state = {
    searchInput: ''
  }

  // componentDidMount() {
  //   navigator.geolocation.getCurrentPosition(this.posSuccess, this.posFailure)
  // }
  //
  // posSuccess = (pos) => {
  //   if (pos) {
  //     console.log(pos.coords);
  //     this.setState({
  //       latitude: pos.coords.latitude,
  //       longitude: pos.coords.longitude
  //     }, () => {
  //       console.log(this.state);
  //     });
  //   }
  // }
  //
  // PosFailure() {
  //   console.log("nope");
  // }

  handleInput = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();

  }
  render() {
    return (
      <div>
        <Nav />
        <h2>this will be the search page</h2>
        <form>
          <input
            type='text'
            name='search'
            placeholder='search'
            value={this.state.searchInput}
            onChange={this.state.handleInput}
          />
        </form>
        <MapContainer />
      </div>
    );
  }
}

export default Search;
