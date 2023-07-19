import React, { useEffect } from "react";
import { useState, useRef } from "react";
import {
    GoogleMapsProvider,
    useGoogleMap,
} from "@ubilabs/google-maps-react-hooks";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

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
                <div className="relative">
                    <div
                        ref={(node) => setMapContainer(node)}
                        className="h-screen w-screen"
                    >
                        {/* initially renders then goes away when google maps loads in */}
                        {/* first time it renders, no map */}
                        <Location />
                    </div>
                    {/* scam, overlaps the <Location /> above whether it renders or not */}
                </div>
            </GoogleMapsProvider>

            <div className="bg-black w-full">
                <p className="p-4 text-white text-center">Footer check</p>
            </div>

            {/* Wrapper end */}
        </AuthenticatedLayout>
    );
}

function Location() {
    const [lat, setLat] = useState(8.483313);
    const [lng, setLng] = useState(124.644727);

    const { map } = useGoogleMap();
    const markerRef = useRef();

    useEffect(() => {
        /* if theres no map, return since you cant place market when theres no map */
        if (!map || markerRef.current) return;

        /* use .current to change value of Ref  */
        /* run only once */
        markerRef.current = new google.maps.Marker({ map });
    }, [map]);

    /* do stuff/logs the latitutde and longitude when either/both of their value changes */
    useEffect(() => {
        /* CATCH error */
        /* if theres no marker yet, return */
        if (!markerRef.current) return;
        {
            /* if lat/lng is not a number, invalid request */
        }
        if (isNan(lat) || isNan(lng)) return;

        /* if conditions are met, continue */
        markerRef.current.setPosition({ lat, lng });
        console.log({ lat, lng });
    }, [lat, lng, map]);

    return (
        /* IDK WHY IT SOMETIMES DISSAPEARS */
        /* GET...net::ERR_NETWORK_CHANGED makes it disappear */
        /* refresh makes it disappear?? */
        <div className="absolute top-0 right-1/2 space-x-2">
            <input
                type="number"
                value={lat}
                onChange={(event) => setLat(event.target.value)}
                step={0.01}
            />
            <input
                type="number"
                value={lng}
                onChange={(event) => setLng(event.target.value)}
                step={0.01}
            />
        </div>
    );
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
