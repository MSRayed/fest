"use client";
import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "50%",
  height: "400px",
  borderRadius: "15px",
};

// 1. Define the center of the map (can be the same as the marker position)
const CENTER_COORDS = {
  lat: 23.907475994873604,
  lng: 90.26752725570961,
};

// 2. Define the fixed marker position
const MARKER_POSITION = {
  lat: 23.907475994873604,
  lng: 90.26752725570961,
};
const libraries: ("drawing" | "geometry" | "places" | "visualization")[] = [
  "places",
];

function MapComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY || "",
    libraries: libraries,
  });

  if (!isLoaded) return <div>Loading Map...</div>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={CENTER_COORDS} // Centers the map on the fixed location
      zoom={12}
    >
      {/* 3. Add the Marker component with the fixed position */}
      <Marker
        position={MARKER_POSITION}
        // Optional: Make the marker non-draggable if you want a true "fixed" point
        draggable={false}
      />
    </GoogleMap>
  );
}

export default MapComponent;
