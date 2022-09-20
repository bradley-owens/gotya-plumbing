import React from "react";

import { GoogleMap, useJsApiLoader, Circle } from "@react-google-maps/api";

const mapStyle = {
  width: "700px",
  height: "400px",
  borderRadius: "20px",
  border: "4px solid white",
  marginTop: "-2rem",
};

const center = {
  lng: 153.066666,
  lat: -26.95,
};

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAxrrvwuspgkZ7eFGiZJ_AuKDnIRaZkAmI",
  });

  const [map, setMap] = React.useState(null);

  const circleOptions = {
    strokeOpacity: 1,
    strokeWeight: 0.1,
    fillOpacity: 0.1,
  };

  const zoom = 8;

  return (
    isLoaded && (
      <GoogleMap mapContainerStyle={mapStyle} center={center} zoom={zoom}>
        <Circle center={center} radius={80000} options={circleOptions} />
      </GoogleMap>
    )
  );
};

export default React.memo(Map);
