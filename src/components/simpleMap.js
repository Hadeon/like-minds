import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

const SimpleMap = (props) => {
  const getMapOptions = (maps) => {
    return {
      disableDefaultUI: true,
      mapTypeControl: true,
      streetViewControl: true,
      styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }]
    };
  };

  const [center, setCenter] = useState({lat: 47.6062, lng: -122.3321 });
  const [zoom, setZoom] = useState(11);
  return (
    <div style={{ height: '50vh', width: '50%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'Google Map API key here' }}
        defaultCenter={center}
        defaultZoom={zoom}
        options={getMapOptions}
      >
        <Marker
          lat={47.6062}
          lng={-122.3321}
          name="Test Marker"
          color="blue"
        />
      </GoogleMapReact>
  </div>
  )
}

export default SimpleMap;