import React from 'react'
import { useState, useCallback, forwardRef } from 'react'
import { GoogleMapsProvider } from '@ubilabs/google-maps-react-hooks';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

/* arbitrary values for now */
/* process has problem, use exact api key atm */

const mapOptions = {
  zoom: 12,
  center: {
    lat: 8.483313,
    lng: 124.644727,
  },
};

export default function Map({auth}) {

  const [mapContainer, setMapContainer] = useState(null);

  return (
  <AuthenticatedLayout
  user = {auth.user}>

  <GoogleMapsProvider
    googleMapsAPIKey = "AIzaSyCiNeQkH8EhM9oqKusqL3K0R_XjOQ4DTmM"
    mapContainer={mapContainer}
    mapOptions={mapOptions}
  >
    <div ref={(node) => setMapContainer(node)} className="h-screen w-screen"/>
  </GoogleMapsProvider>

  <div className="bg-black w-full p-4 text-white text-center">Footer check</div>
  </AuthenticatedLayout>
  );
}
