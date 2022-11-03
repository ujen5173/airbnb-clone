import React, { useState, useEffect, useRef } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import axios from "axios";
// import { v4 as uuidv4 } from "uuid";

let center = {
  lat: -3.745,
  lng: -38.523,
};

const containerStyle = {
  width: "100%",
  height: "100%",
};

function Map({
  destination,
  markers,
  setData,
  location,
  userLocation,
  hoveredPlace,
  setHoveredPlace,
  places,
  setPlaces,
}) {
  center = location ? { lat: location[0], lng: location[1] } : center;

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY,
  });

  const [map, setMap] = useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const onIdle = async () => {
    if (map) {
      const bounds = map.getBounds();
      var NECorner = bounds.getNorthEast();
      var SWCorner = bounds.getSouthWest();
      var NWCorner = new google.maps.LatLng(NECorner.lat(), SWCorner.lng());
      var SECorner = new google.maps.LatLng(SWCorner.lat(), NECorner.lng());
      const markers = [
        {
          lat: NWCorner?.lat(),
          lng: NWCorner?.lng(),
        },
        {
          lat: NECorner?.lat(),
          lng: NECorner?.lng(),
        },
        {
          lat: SWCorner?.lat(),
          lng: SWCorner?.lng(),
        },
        {
          lat: SECorner?.lat(),
          lng: SECorner?.lng(),
        },
      ];
      const { data } = await axios("/api/search", {
        params: {
          data: markers,
        },
      });
      // setPlaces(
      //   data.data.map((e) => ({
      //     ...e.geolocation,
      //     price: e.price,
      //     _id: e._id,
      //     hovered: false,
      //   }))
      // );
      setData({ loading: false, results: data.data });
    }
  };

  return (
    isLoaded && (
      <GoogleMap
        mapContainerStyle={containerStyle}
        mapContainerClassName="map"
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{ scrollwheel: true }}
        onIdle={onIdle}
      >
        {/* <Marker position={{ lat: 45.745, lng: 5.65 }} /> */}
      </GoogleMap>
    )
  );
}

export default React.memo(Map);
