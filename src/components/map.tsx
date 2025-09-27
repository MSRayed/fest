"use client";
import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

interface MapProps {
  title?: string;
}

export default function MapComponent({ title = "Our location" }: MapProps) {
  return (
    <main>
      <h1 className="text-3xl font-bold text-brown text-center mb-8">
        {title}
      </h1>

      <MapContainer
        center={[23.907417089970746, 90.26793493439301]}
        zoom={13}
        scrollWheelZoom={false}
        className="h-96 w-full rounded-lg shadow"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[23.907417089970746, 90.26793493439301]}>
          <Popup>Savar Cantonment Public School and College</Popup>
        </Marker>
      </MapContainer>
    </main>
  );
}
