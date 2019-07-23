import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

const SimpleMap = (props) => {
  const [center, setCenter] = useState({lat: 11.0168, lng: 76.9558 });
  const [zoom, setZoom] = useState(11);
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'Your API Key here' }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <Marker
          lat={11.0168}
          lng={76.9558}
          name="Test Marker"
          color="blue"
        />
      </GoogleMapReact>
  </div>
  )
}

export default SimpleMap;