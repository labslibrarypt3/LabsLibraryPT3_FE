import React, { Component } from 'react'
import MapContainer from './MapContainer';

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

export default Search
