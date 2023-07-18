import React from 'react';
import { useState, useRef } from 'react';
import { GoogleMapsProvider } from '@ubilabs/google-maps-react-hooks';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

/* arbitrary values for now */
/* process has problem, use exact api key atm */

/* default map target (change to my location) */
const mapOptions = {
  zoom: 12,
  center: {
    lat: 8.483313,
    lng: 124.644727,
  },
};

export default function Map({ auth }) {
  const [mapContainer, setMapContainer] = useState(null);

  return (
    <AuthenticatedLayout user={auth.user}>
      {/* Wrapper for GoogleMaps API */}
      <GoogleMapsProvider
        googleMapsAPIKey="AIzaSyCiNeQkH8EhM9oqKusqL3K0R_XjOQ4DTmM"
        mapOptions={mapOptions}
        mapContainer={mapContainer}
        
      >
        <div ref={(node) => setMapContainer(node)} className="relative h-screen w-screen">
          <Location /> </div>
      </GoogleMapsProvider>
      {/* Wrapper end */}

      <div className="bg-black w-full p-4 text-white text-center">Footer check</div>
    </AuthenticatedLayout>
  );
}

function Location(){
  const [lat, setLat] = useState(8.483313);
  const [lng, setLng] = useState(124.644727);

  return ( 
  <div className="absolute top-0 right-1/2 space-x-2">
    <input type="number" value={lat} onChange={(event) => setLat(event.target.value)} />
    <input type="number" value={lat} onChange={(event) => setLat(event.target.value)} />
  </div>

  )
}

/* */
/* transfer to other components */
/*
function Location() {
  const [lat, setLat] = useState(8.483313);
  const [lng, setLng] = useState(124.644727);

  return <div className="absolute top-0 right-1/2">
      <input type="number" value={lat} onChange={(event) => setLat(event.target.value)} />
      <input type="number" value={lng} onChange={(event) => setLng(event.target.value)} />
    </div>
}
*/