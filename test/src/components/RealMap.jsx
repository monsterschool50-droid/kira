import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; 
import L from 'leaflet';


import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;


const RecenterMap = ({ lat, lng }) => {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lng], 13);
  }, [lat, lng, map]);
  return null;
};

const RealMap = () => {
  const [position, setPosition] = useState(null); // [lat, lng]
  const [error, setError] = useState(null);

  useEffect(() => {
   
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition([pos.coords.latitude, pos.coords.longitude]);
      },
      (err) => {
        setError("Unable to retrieve your location");
      }
    );
  }, []);

  if (error) {
    return <div style={{padding: '20px', textAlign: 'center', color: 'red'}}>{error}</div>;
  }

  if (!position) {
    return <div style={{padding: '50px', textAlign: 'center', color: '#777'}}>Loading Map...<br/>Please allow location access.</div>;
  }

  return (
 
    <MapContainer center={position} zoom={13} style={{ height: "100%", width: "100%", borderRadius: "10px" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          You are here! <br /> Find pets nearby.
        </Popup>
      </Marker>
      <RecenterMap lat={position[0]} lng={position[1]} />
    </MapContainer>
  );
};

export default RealMap;