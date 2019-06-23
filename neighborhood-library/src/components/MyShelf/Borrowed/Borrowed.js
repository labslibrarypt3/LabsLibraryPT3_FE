import React, { Component } from "react";
import axios from "axios";
import { NavLink, Redirect } from "react-router-dom";
import MyBook from "./MyBook";

class Borrowed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
  
    const data = () => {
      const endpoint = "http://localhost:4000/api/trans/borrow";
      if (localStorage.getItem("jwt")) {
       

        return axios
          .get(endpoint, {
            headers: { authorization: localStorage.getItem("jwt") },
            params: { borrower_id: localStorage.getItem("id") }
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
      <div className="borrowed">
        <h2>Borrowed</h2>
        <p>These are books you are borrowing from someone else:</p>
        <div className="shelf">
          {this.state.data.map(e => {
            return (
              <MyBook
                title={e.title}
                authors={e.authors}
                cover={e.cover}
                bookId={e.bookId}
                key={e.borrower_id}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Borrowed;
