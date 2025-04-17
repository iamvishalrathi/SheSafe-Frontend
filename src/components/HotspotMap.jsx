import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Marker, Popup } from "react-leaflet";
import L from "leaflet"; // Optional: for custom icons
import { Polygon } from "react-leaflet";

const delhiZone = [
  [28.7510, 77.1135],
  // [28.7515, 77.1200],
  // [28.7475, 77.1205],
  // [28.7465, 77.1145],
];







// Define red icon for markers
const redIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});



const HotspotMap = () => {
  return (
    <div style={{ height: '400px', width: '100%' }}>
      <MapContainer
        
        center={[20.5937, 78.9629]}
        zoom={5}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
  url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
  attribution='Tiles &copy; Esri, Data &copy; OpenStreetMap contributors'
/>

<Polygon
  positions={delhiZone}
  pathOptions={{ color: "red", fillColor: "red", fillOpacity: 0.4 }}
/>



      </MapContainer>
    </div>
  );
};

export default HotspotMap;
