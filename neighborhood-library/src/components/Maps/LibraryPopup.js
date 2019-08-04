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

  data = async () => {
    const user_id = this.props.library.userId;
    console.log(user_id, "inside data call in libraries pop up");
    // debug this to return books that belong to the individual user change endpoint most likely solution
    axios
      .get(`${baseUrl}/api/books/books`, { params: { user_id } })
      .then(res => {
        console.log(res.data);
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
    console.log(this.props.library, "Im library in props");
    return (
      <Library
        books={this.state.library}
        libraryId={this.props.library.userId}
        toggleLibrary={this.props.toggleLibrary}
        getUserData={this.props.getUserData}
        isLibraryShowing={this.props.isLibraryShowing}
      />
    );
  }
}
export default LibraryPopup;
