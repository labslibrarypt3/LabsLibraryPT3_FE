import React, { Component } from 'react';
import ReactMapGL, { Popup } from 'react-map-gl';

class LibCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: true
    }
  }

  render() {
    return (
      <>
        {/* {showPopup && <Popup
          latitude={props.library.latitude}
          longitude={props.library.longitude}
          closeButton={true}
          closeOnClick={false}
          onClose={() => this.setState({ showPopup: false })}
          anchor="top" >
          <div>
            {/* display library content here */}
          </div>
        </Popup>} */}
        <div>
          {/* display library content here */}
        </div>
      </>
    );
  }
}

export default LibCard;
