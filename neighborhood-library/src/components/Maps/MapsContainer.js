import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import icon from "./heart.svg";
const API_KEY = process.env.REACT_APP_MAP_KEY;

const MapsContainer = () => {
  const [viewport, setViewport] = useState({
    latitude: 33.4482,
    longitude: -112.072578,
    width: `100vw`,
    height: `100vh`,
    zoom: 10
  });
  const [selectedLibrary, setSelectedLibrary] = useState(null);

  const dummyData = [{ latitude: 33.4482, longitude: -112.072578 }];

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
    </ReactMapGL>
  );
};

export default MapsContainer;
