import React, { Component } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import icon from "./heart.svg";
import LibraryPopup from "./LibraryPopup";
const API_KEY = process.env.REACT_APP_MAP_KEY;

class MapsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: `100vw`,
        height: `100vh`,
        zoom: 10,
        latitude: 33.4482,
        longitude: -112.072578
      },
      selectedLibrary: null,
      isLibraryShowing: false
    };
  }

  componentDidMount() {
    //get user location and set it to App.js state
    navigator.geolocation.getCurrentPosition(position => {
      this.props.getLibraries();

      this.setState({
        viewport: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          width: "100%",
          height: "calc(100vh-320px)",
          zoom: 10
        }
      });
    });
  }

  componentDidUpdate() {
    this.getNeighborhoodLibraries();
  }

  distance = (lat1, lon1, lat2, lon2, unit) => {
    if (lat1 == lat2 && lon1 == lon2) {
      return 0;
    } else {
      var radlat1 = (Math.PI * lat1) / 180;
      var radlat2 = (Math.PI * lat2) / 180;
      var theta = lon1 - lon2;
      var radtheta = (Math.PI * theta) / 180;
      var dist =
        Math.sin(radlat1) * Math.sin(radlat2) +
        Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = (dist * 180) / Math.PI;
      dist = dist * 60 * 1.1515;
      if (unit == "K") {
        dist = dist * 1.609344;
      }
      if (unit == "N") {
        dist = dist * 0.8684;
      }
      return dist;
    }
  };

  //get neighborhood libraries within 300 mile radius
  neighborhoodLibraries = [];
  getNeighborhoodLibraries = () => {
    console.log("getting neighborhood libraries");

    console.log(this.neighborhoodLibraries, "blank array made");
    console.log(this.props.libraries);
    this.props.libraries.map(library => {
      console.log("mapping");
      const lat1 = library.latitude;
      const lon1 = library.longitude;
      const lat2 = this.state.viewport.latitude;
      const lon2 = this.state.viewport.longitude;
      const unit = "M";
      const distanceInMiles = this.distance(lat1, lon1, lat2, lon2, unit);

      if (distanceInMiles < 3000) {
        this.neighborhoodLibraries.push(library);
        console.log("pushing");
      }
    });
  };

  toggleLibrary = () => {
    this.setState({ isLibraryShowing: !this.state.isLibraryShowing });
  };

  mapRender = () => {
    return (
      <ReactMapGL
        {...this.state.viewport}
        className="map"
        mapboxApiAccessToken={API_KEY}
        mapStyle="mapbox://styles/irasanchez/cjxt8qjbk84pi1cmniuxpvkv0"
        onViewportChange={viewport => {
          this.setState({ viewport: viewport });
        }}
      >
        {/* display nearby library locations on map */}
        {this.neighborhoodLibraries.map(library => {
          const latitude = Number(library.latitude);
          const longitude = Number(library.longitude);
          console.log("lat", latitude, "lon", longitude);

          return (
            <Marker
              key={library.userId}
              latitude={latitude}
              longitude={longitude}
            >
              <button
                className="marker-button"
                onClick={event => {
                  this.setState({
                    selectedLibrary: library,
                    isLibraryShowing: true
                  });
                }}
              >
                <img src={icon} alt="library" />
              </button>
            </Marker>
          );
        })}
      </ReactMapGL>
    );
  };

  render() {
    return (
      <>
        {/* If a library has been selected, show information: */}

        {this.state.isLibraryShowing ? (
          <main className="maps-container">
            <LibraryPopup
              library={this.state.selectedLibrary}
              isLibraryShowing={this.state.isLibraryShowing}
              toggleLibrary={this.toggleLibrary}
            />
            <this.mapRender />
          </main>
        ) : (
          <main className="maps-container">
            <this.mapRender />
          </main>
        )}
      </>
    );
  }
}

export default MapsContainer;
