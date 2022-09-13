import React from "react";

import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

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

  // const onLoad = React.useCallback(function callback(map) {
  //   const bounds = new window.google.maps.LatLngBounds(center);
  //   map.fitBounds(bounds);
  //   setMap(map);
  // }, []);

  // const onUnmount = React.useCallback(function callback(map) {
  //   setMap(null);
  // }, []);

  const zoom = 8;

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={mapStyle}
      center={center}
      zoom={zoom}
      // onLoad={onLoad}
      // onUnmount={onUnmount}
    >
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default React.memo(Map);
