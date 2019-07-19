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
    console.log(user_id);
    axios
      .get("http://localhost:4000/api/books/mybooks", { user_id })
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
    console.log(this.props.library.userId);
    return (
      <div>
        <Library />
      </div>
    );
  }
}
export default LibraryPopup;
