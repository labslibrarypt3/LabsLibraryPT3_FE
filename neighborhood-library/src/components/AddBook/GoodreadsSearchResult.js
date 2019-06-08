//Note for Thomas: We need a cell in the db for the image cover that takes a string. This will allow us to display the images in the library/borrowed/loaned components;

import React, { Component } from "react";
import axios from "axios";

class GoodreadsSearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      authors: this.props.authors,
      ISBN: "0"
      // user_id: " ",
      // cover: this.props.cover
      // need to add cover cell to db
      // need sample user to test with
    };
  }

  //adds a book to individual user library, making it available for others to borrow
  // postMessage = () => {
  //   axios.post(`https://lambda-school-test-apis.herokuapp.com/quotes`, quote);
  // };

  addBookToLibrary = async () => {
    const book = this.state;
    const axiosResponse = await axios
      .post("localhost:4000/api/books", book)
      .then(res => console.log("res: ", res))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="goodreads-search-result">
        <img className="book-cover" src={this.props.cover} alt="cover image" />
        <p>
          {this.props.title} by {this.props.authors}
        </p>
        <button onClick={this.addBookToLibrary}>Add to Library</button>
      </div>
    );
  }
}

export default GoodreadsSearchResult;

// server.use("/api/users", users);

// server.use("/api/books", books)

// router.post('/', async (req,res) => {
//   console.log(req.body)
//   const enter = req.body
//     try {
//       const user = await db.insert(enter);
//       res.status(201).json(user);
//     } catch (error) {
//       // log error to database
//       res.status(500).json({
//         message: 'Error adding the book',
//       });
//     }
//   });
