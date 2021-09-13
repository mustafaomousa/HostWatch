import mapboxgl from "mapbox-gl";
import { useEffect, useState } from "react";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

const { REACT_APP_MAPBOX_API } = process.env;

const LocateVehicleMap = () => {
  const [userLocation, setUserLocation] = useState({ lon: 0, lat: 0 });

  const Map = ReactMapboxGl({
    accessToken: REACT_APP_MAPBOX_API,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setUserLocation({
        lon: position.coords.longitude,
        lat: position.coords.latitude,
      });
    });
  }, []);

  return (
    <Map
      style="mapbox://styles/mapbox/dark-v10"
      center={userLocation}
      containerStyle={{ height: "580px", width: "100%" }}
      off={true}
    ></Map>
  );
};

export default LocateVehicleMap;
