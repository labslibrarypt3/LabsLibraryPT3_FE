import React, { Component } from "react";
import axios from "axios";
import Library from "./Library";
const baseUrl = process.env.REACT_APP_BASE_URL;

class LibraryPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: " ",
      library: []
    };
  }

  data = () => {
    const user_id = this.state.user_id;
    // debug this to return books that belong to the individual user change endpoint most likely solution
    axios
      .get(`${baseUrl}/api/books/books`, { user_id })
      .then(res => {
        this.setState({ library: res.data });
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.setState({ user_id: this.props.userId });
    // console.log(user_id);
    this.data();
  }

  render() {
    const userId = localStorage.getItem("userId");

    return (
      <Library
        toggleLibrary={this.props.toggleLibrary}
        getUserData={this.props.getUserData}
        isLibraryShowing={this.props.isLibraryShowing}
      />
    );
  }
}
export default LibraryPopup;
