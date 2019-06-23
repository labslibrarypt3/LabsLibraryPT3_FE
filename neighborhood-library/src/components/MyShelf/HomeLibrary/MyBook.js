//if this works on Loaned.js, Borrowed.js, and HomeLibrary.js, then use this for all 3 and delete the extras
import React, { Component } from "react";
import axios from "axios";

class MyBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
    buttonClicked= () =>{
      const book = props.bookId;
      const authToken = localStorage.getItem("jwt");
      
      const endpoint = "http://localhost:4000/api/books/";
      return axios.delete(
        endpoint,
        book,
        {headers:{authorization:authToken}}
      )
    }
  
  
  render(){
    <div key={props.bookId} className="book">
      <div className="book-top">
        <img src={props.cover} className="book-cover" />
      </div>
      <div className="book-bottom">
        <p className="book-title">{props.title}</p>
        <p>by {props.authors}</p>
        <button onClick={buttonClicked}>Delete</button>
      </div>
    </div>
};
}
export default MyBook;
