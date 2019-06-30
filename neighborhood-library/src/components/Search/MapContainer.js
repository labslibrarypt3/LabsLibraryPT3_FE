import React, { Component } from "react";
import { GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";

import CurrentLocation from "./Map";

const Library = ({ places }) => (
  <ul>{places && places.map(p => <li key={p.id}>{p.name}</li>)}</ul>
);

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false, // hides or shows InfoWindow
    activeMarker: {}, // shows the active marker on click
    selectedPlace: {}, // shows the InfoWindow to the selected place on marker
    places: [{
      name: 'Prospect Park',
      lat: '40.665',
      lng: '-73.969'
    },
    {
      name: 'Brooklyn Public Library',
      lat: '40.672',
      lng: '-73.968'
    },
    {
      name: 'Brooklyn Botanical Garden',
      lat: '40.663',
      lng: '-73.962'
    }]
  };

  // TODO: on mount should pull user data for libraries, need to filter by location. also should update on props changes from google maps
  // componentDidMount() {
  //   axios
  //     .get('https://pt3-neighborhood-library-back.herokuapp.com/users')
  //     .then(res => {
  //       console.log(res);
  //     })
  //     .catch(err => console.log(err));
  // }

  onMapReady = (mapProps, map) => this.searchNearby(map, map.center);

  searchNearby = (map, center) => {
    const { google } = this.props;
    const service = new google.maps.places.PlacesService(map);

    const request = {
      location: center,
      radius: '5000',
      type: ['geocode']
    };

    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlaceServiceStatus.OK)
        this.setState({ places: results });
    });
  };

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  initializeGeocoder() {
    let geocoder = new this.google.maps.Geocoder();
    let latlng = new this.google.maps.LatLng(-34.397, 150.644);
    let mapOptions = {
      zoom: 8,
      center: latlng
    }
    const mapRef = this.maps.ref;
    let map = new this.google.maps.Map(mapRef, mapOptions);
  }

  codeAddress() {
    let address;
    
  }

  // getGeocodeData = () => {
  //   Geocode.setApiKey(process.env.REACT_APP_MAPS_KEY);
  //   Geocode.setLanguage('en');
  //   Geocode.enableDebug();
  //
  //   Geocode.fromLatLng(this.state.lat, this.state.lng).then(
  //     response => {
  //       const address = response.results[0].formatted_address;
  //       console.log(address);
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //   );
  // }

  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>
    };

    return (
      <div>
        <CurrentLocation centerAroundCurrentLocation google={this.props.google}>
          <Marker onClick={this.onMarkerClick} name={"current location"} />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
            >
              <div>
                <h4>{this.state.selectedPlace.name}</h4>
              </div>
            </InfoWindow>
          </CurrentLocation>
        <Library />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAPS_KEY,
  libraries: ['places']
})(MapContainer);


// [{
//   name: 'Prospect Park',
//   lat: 40.665,
//   lng: -73.969
// },
// {
//   name: 'Brooklyn Public Library',
//   lat: 40.672,
//   lng: -73.968
// },
// {
//   name: 'Brooklyn Botanical Garden',
//   lat: 40.663,
//   lng: -73.962
// }]
