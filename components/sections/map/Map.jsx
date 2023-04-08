import React from 'react'

import GoogleMapReact from 'google-map-react'
import Marker from './Marker'

export default function Map() {
    const center = {
        lat: 46.3537,
        lng: 6.1653,
    }

    return (
        <GoogleMapReact
            googleMapLoader={async () => window.google.maps}
            defaultCenter={center}
            defaultZoom={15}
            options={{
                fullscreenControl: false,
                zoomControl: false,
            }}
        >
            <Marker lat={center.lat} lng={center.lng} />
        </GoogleMapReact>
    )
}
