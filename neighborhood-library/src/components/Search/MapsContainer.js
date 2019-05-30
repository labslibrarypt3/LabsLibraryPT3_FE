import React, { Component } from 'react';
import config from '../../config';

class MapsContainer extends Component {

  render() {
    console.log(this.props.latitude, this.props.longitude);
    const { reactMapsKey, mapsUrl } = config;

    console.log(`https://www.google.com/maps/embed/v1/view?key=${reactMapsKey}&center=${this.props.latitude, this.props.longitude}`);
    return (
      <div>
        {/* <iframe
          style={iframeStyles}
          src={config}
          allowFullScreen>
        </iframe> */}
        {reactMapsKey ? <iframe
          width="450"
          height="250"
          frameborder="0"
          src={mapsUrl} allowfullscreen>
        </iframe> : null}
        <img src="https://facthacker.com/wp-content/uploads/2015/03/Everything-You-Need-to-Know-About-Your-Poop.jpg" />
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
