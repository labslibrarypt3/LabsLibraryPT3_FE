import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import MyBook from "../MyBook";
import TransBook from "../TransBook";

const baseUrl = process.env.REACT_APP_BASE_URL;


class Loaned extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    const data = () => {
      const endpoint = `${baseUrl}/api/trans/lend`;
      if (localStorage.getItem("jwt")) {
        return axios
          .get(endpoint, {
            headers: { authorization: localStorage.getItem("jwt") },
            params: { lender_id: localStorage.getItem("id") }
          })
          .then(res => {
            this.setState({ data: res.data });
          })
          .catch(err => {
            console.log(" Error", err);
          });
      } else {
        return <Redirect to={"/"} />;
      }
    };
    data();
  }

  render() {
    return (
      <div className="loaned shelves">
        <h3>Loaned</h3>
        <p>
          These are the books you've loaned to a neighbor that will need to be
          returned eventually.
        </p>
        <div className="shelf grid-container">
          {this.state.data.map(e => {
            return (
              <TransBook
                key={e.lender_id}
                title={e.title}
                authors={e.authors}
                cover={e.cover}
                bookId={e.bookId}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Loaned;
