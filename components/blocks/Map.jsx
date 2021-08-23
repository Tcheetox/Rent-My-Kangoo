import React from 'react'

import GoogleMapReact from 'google-map-react'
import styles from '../../styles/blocks/map.module.scss'

const center = {
	lat: 59.95,
	lng: 30.33,
}

const MapMaker = () => <div className={styles.mapMarker}>MyKangoo</div>

export default function Map() {
	const mapOptions = {
		fullscreenControl: false,
		zoomControl: false,
	}

	return (
		// Important! Always set the container height explicitly
		<div className={styles.map} style={{ height: '100vh' }}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GMAP_KEY }}
				defaultCenter={center}
				defaultZoom={12}
				options={mapOptions}>
				<MapMaker lat={center.lat} lng={center.lng} />
			</GoogleMapReact>
		</div>
	)
}
