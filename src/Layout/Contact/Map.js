import React from "react";
import useDeviceSize from "../../Hooks/useDeviceSize";
import { GoogleMap, useJsApiLoader, Circle } from "@react-google-maps/api";

const Map = () => {
  const [width] = useDeviceSize();
  const mapWidth = () => {
    if (width < 1000 && width > 750) {
      return "40vw";
    } else if (width < 750) {
      return "80vw";
    } else {
      return "50vw";
    }
  };
  const mapStyle = {
    width: mapWidth(),
    height: "50vh",
    borderRadius: "20px",
    border: "4px solid white",
    marginTop: "-2rem",
  };

  const center = {
    lng: 153.066666,
    lat: -26.95,
  };
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
        <Circle center={center} radius={90000} options={circleOptions} />
      </GoogleMap>
    )
  );
};

export default React.memo(Map);
