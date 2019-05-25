import React, { Component } from 'react';

class MapsContainer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <iframe
          style={iframeStyles}
          src="https://www.google.com/maps/embed/v1/undefined?origin=...&q=...&destination=...&center=...&zoom=...&key={process.env.REACT_APP_MAPS_KEY}"
          allowfullscreen>
        </iframe>
      </div>
    )
  }
}

export default MapsContainer;

const iframeStyles = {
  width: 600,
  height: 450,
  frameborder: 0,
  border: 0
}
