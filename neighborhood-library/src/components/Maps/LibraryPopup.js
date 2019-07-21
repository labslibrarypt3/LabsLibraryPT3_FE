import React, { Component } from "react";
import axios from "axios";
import Library from "./Library";

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
    console.log(user_id, "get markers library ");
    axios
      .get("http://localhost:4000/api/books/books", { user_id })
      .then(res => {
        this.setState({ library: res.data });
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.setState({ user_id: this.props.userId });
    this.data();
  }

  render() {
    const userId = localStorage.getItem("userId");
    console.log(this.props, this.state.user_id, "the render of popup");
    return (
      <div>
        <Library
          toggleLibrary={this.props.toggleLibrary}
          isLibraryShowing={this.props.isLibraryShowing}
        />
      </div>
    );
  }
}
export default LibraryPopup;
