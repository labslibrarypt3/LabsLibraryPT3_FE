import React, { Component } from 'react'
import MapContainer from './MapContainer';

class BookSearch extends Component {
  state = {
    query: '',
    data:{}
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    })
  }
  componentDidMount(){
    const data = () => {
        if (localStorage.getItem("jwt")) {
            const endpoint = "http://localhost:4000/api/books/";
          const authToken = localStorage.getItem("jwt");
          return axios
            .get(endpoint, {headers:{Authorization:`${authToken}`}})
            .then(res => {
              
              this.setState({ data: res.data });
            })
            .catch(err => console.log(err));
        } else {
          return <Redirect to={"/"} />;
        }
      };
      data();
  }
//user searches books in stock
// user finds book to borrow and clicks request
//opens chat box and request from lender
// lenders click lend button to create transaction - start stripe 

  render() {
    return (
      <div>
        <form>
          <input
            placeholder="Search for..."
            ref={input => this.search = input}
            onChange={this.handleInputChange}
          />
          <p>{this.state.query}</p>
        </form>
        <MapContainer />
      </div>
    )
  }
}

export default BookSearch
