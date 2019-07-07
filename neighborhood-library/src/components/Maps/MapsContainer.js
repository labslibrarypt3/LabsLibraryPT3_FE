import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import icon from "./heart.svg";
const API_KEY = process.env.REACT_APP_MAP_KEY;

const MapsContainer = () => {
  const [viewport, setViewport] = useState(null);
  const [selectedLibrary, setSelectedLibrary] = useState(null);

  const dummyData = [{ latitude: 33.4482, longitude: -112.072578 }];
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position.coords.latitude, position.coords.longitude);
      setViewport({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        width: `100vw`,
        height: `100vh`,
        zoom: 10
      });
    });
  }, []);

  return (
    <ReactMapGL
      {...viewport}
      className="map-container"
      mapboxApiAccessToken={`${API_KEY}`}
      mapStyle="mapbox://styles/irasanchez/cjxt8qjbk84pi1cmniuxpvkv0"
      onViewportChange={viewport => {
        setViewport(viewport);
      }}
    >
      {/* display library locations on map */}
      {dummyData.map(library => {
        return (
          <Marker
            key={Math.random()}
            latitude={library.latitude}
            longitude={library.longitude}
          >
            <button
              className="marker-button"
              onClick={event => {
                event.preventDefault();
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
        <Popup
          latitude={selectedLibrary.latitude}
          longitude={selectedLibrary.longitude}
          onClose={() => {
            setSelectedLibrary(null);
          }}
          closeOnClick={false}
        >
          <div className="library-info">
            <h3>Dynamic Name</h3>
            <p>Dynamic Library Information</p>
            <button>Request Book</button>
          </div>
        </Popup>
      )}
    </ReactMapGL>
  );
};

export default MapsContainer;
