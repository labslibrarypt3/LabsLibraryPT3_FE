import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import icon from "./heart.svg";
import MapsSearchResults from "./MapsSearchResults";
import LibraryPopup from "./LibraryPopup";
// import { REPL_MODE_STRICT } from "repl";
const API_KEY = process.env.REACT_APP_MAP_KEY;

const MapsContainer = props => {
  const [viewport, setViewport] = useState({
    width: `100vw`,
    height: `100vh`,
    zoom: 10,
    latitude: 33.4482,
    longitude: -112.072578
  });
  const [selectedLibrary, setSelectedLibrary] = useState(null);

  //get user location and set it to state
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      props.getLibraries();

      setViewport({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        width: `70.5vw`,
        height: `100vh`,
        zoom: 10
      });
    });
  }, []);

  //calculate distance
  const distance = (lat1, lon1, lat2, lon2, unit) => {
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

  //libraries props.libraries
  //if within 50 miles, add to neighborhoodLibraries
  const neighborhoodLibraries = [];
  props.libraries.map(library => {
    const lat1 = library.latitude;
    const lon1 = library.longitude;
    const lat2 = viewport.latitude;
    const lon2 = viewport.longitude;
    const unit = "M";
    const distanceInMiles = distance(lat1, lon1, lat2, lon2, unit);

    if (distanceInMiles < 3000) {
      neighborhoodLibraries.push(library);
    }
  });

  return (
    <main className="maps-container">
      <ReactMapGL
        {...viewport}
        className="map-container"
        mapboxApiAccessToken={`${API_KEY}`}
        mapStyle="mapbox://styles/irasanchez/cjxt8qjbk84pi1cmniuxpvkv0"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
        {/* display nearby library locations on map */}
        {neighborhoodLibraries.map(library => {
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
                  console.log("marker clicked");
                  //  <LibraryPopup data={library} />;
                  setSelectedLibrary(library);
                }}
              >
                <img src={icon} alt="library" />
              </button>
            </Marker>
          );
        })}

        {/* If a library has been selected, show information: */}
        {selectedLibrary && (
          <LibraryPopup library={selectedLibrary} />
          // <Popup
          // // latitude={selectedLibrary.latitude}
          // // longitude={selectedLibrary.longitude}
          // // onClose={() => {
          // //   setSelectedLibrary(null);
          // // }}
          // // closeOnClick={false}
          // >
          //   <div className="library-info">
          //     <h3>Dynamic Name</h3>
          //     <p>Dynamic Library Information</p>
          //     <button>Request Book</button>
          //   </div>
          // </Popup>
        )}
      </ReactMapGL>
      <MapsSearchResults />
    </main>
  );
};

export default MapsContainer;
