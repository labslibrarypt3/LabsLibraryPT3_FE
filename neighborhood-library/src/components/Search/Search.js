// import React from "react";
// import Nav from "../Nav/Nav";


// function Search() {
//   return (
//     <div>
//       <h2>this will be the search page</h2>
//       <Nav />
//     </div>
//   );
// }

// export default Search;
import React, { Component } from 'react'

class Search extends Component {
state = {
  query: '',
}

handleInputChange = () => {
  this.setState({
    query: this.search.value
  })
}

render() {
  return (

    
    <form>
      <input
        placeholder="Search for..."
        ref={input => this.search = input}
        onChange={this.handleInputChange}
      />
      <p>{this.state.query}</p>
    </form>
  )
}
}

export default Search

