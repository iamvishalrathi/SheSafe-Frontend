import React from 'react';
import { MapContainer, TileLayer, Circle, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'; // Optional: for custom icons

// Define coordinates for the danger zone (Red Circle for DTU)
const delhiZone = [
  { lat: 28.7510, lon: 77.1135, radius: 50 }, // Coordinates for DTU (radius in meters)
];

// Define red icon for markers (not used for circles, but you can add markers later)
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
        center={[28.6139, 77.2090]} // Centered on Delhi
        zoom={13}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
          attribution="Tiles &copy; Esri, Data &copy; OpenStreetMap contributors"
        />

        {/* Danger Zone - Red Circle */}
        {delhiZone.map((zone, index) => (
          <Circle
            key={index}
            center={[zone.lat, zone.lon]}
            radius={zone.radius} // radius in meters
            pathOptions={{
              color: 'red',
              fillColor: 'red',
              fillOpacity: 0.4,
            }}
          >
            <Popup>
              Danger Zone - High Alert
            </Popup>
          </Circle>
        ))}
      </MapContainer>
    </div>
  );
};

export default HotspotMap;
