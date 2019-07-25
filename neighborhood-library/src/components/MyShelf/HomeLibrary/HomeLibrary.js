import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import MyBook from "../MyBook";
import NoBooks from "./NoBooks";
const baseUrl = process.env.REACT_APP_BASE_URL;

const feBaseUrl = process.env.REACT_APP_FE_BASE_URL;


class HomeLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      lentData: []
    };
  }
  getLentTransactions = async () => {
    const endpoint = `${baseUrl}/api/trans/tranlent`;

    await axios
      .get(endpoint, {
        headers: { authorization: localStorage.getItem("jwt") },
        params: { lender_id: localStorage.getItem("userId") }
      })
      .then(res => {
        console.log(res.data, "in lens tran");
        this.setState({ lentData: res.data });
      })
      .catch(err => {
        console.log(" Error", err);
      });
  };

  componentDidMount() {
    const endpoint = `${baseUrl}/api/books/mybooks`;
    const data = () => {
      if (localStorage.getItem("jwt")) {
        const authToken = localStorage.getItem("jwt");
        return axios
          .get(endpoint, { headers: { Authorization: `${authToken}` } })
          .then(res => {

            if (
              res.status !== 200 ||
              authToken === null ||
              res.data === "Hello World, from Neighborhood Library Backend"
            ) {
              window.location.replace(`${feBaseUrl}/auth`);

              console.log("log in please ....");
            }

            this.setState({ data: res.data });
          })
          .catch(err => console.log(err));
      } else {
        window.location.replace(`${feBaseUrl}/auth`);
      }
    };
    data();
    this.getLentTransactions();
  }

  renderHomeLibrary = () => {
    return (
      <section className="home-library shelves">
        <h3>Home Library</h3>
        <p>{this.props.firstName}</p>
        <div className="shelf grid-container">
          {this.state.data.map(e => {
            return (
              <MyBook
                lentData={this.state.lentData}
                title={e.title}
                authors={e.authors}
                cover={e.cover}
                bookId={e.bookId}
                key={e.bookId}
              />
            );
          })}
        </div>
      </section>
    );
  };


  render() {
    const { data } = this.state;

    // if there are no books in this.state.data, show the No Books component

    return <>{data ? <this.renderHomeLibrary /> : <NoBooks />}</>;
  }
}

export default HomeLibrary;
