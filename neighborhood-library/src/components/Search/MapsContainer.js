import React, { Component } from 'react';
import { REACT_APP_MAPS_KEY } from '../../config';

class MapsContainer extends Component {
  constructor() {
    super();
    this.state = {
      latitude: null,
      longitude: null
    }
  }

  render() {
    return (
      <div>
        <iframe
          style={iframeStyles}
          src=`https:www.google.com/maps/embed/v1/view?&center=40.680105499999996,-73.97711439999999&zoom=18&key=REACT_APP_MAPS_KEY`
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
