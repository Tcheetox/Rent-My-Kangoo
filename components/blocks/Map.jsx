import React from 'react'

import GoogleMapReact from 'google-map-react'
import styles from '../../styles/blocks/map.module.scss'
import MapMarker from '@material-ui/icons/Room'
import { Tooltip } from '@material-ui/core'

const center = {
	lat: 46.2002,
	lng: 6.128,
}

const MapMaker = () => (
	<div className={styles.mapMarker}>
		<Tooltip
			title={
				<a href='https://www.google.com/maps/dir//Quai+des+Arénières,+1205+Genève' target='_blank' rel='noreferrer'>
					Quai des Arénières, 1205 Geneva - Switzerland
				</a>
			}
			placement='top'
			arrow
			interactive>
			<MapMarker />
		</Tooltip>
	</div>
)

export default function Map() {
	const mapOptions = {
		fullscreenControl: false,
		zoomControl: false,
	}

	return (
		// Important! Always set the container height explicitly
		<div id='map' className={styles.map} style={{ height: '500px' }}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GMAP_KEY }}
				defaultCenter={center}
				defaultZoom={15}
				options={mapOptions}>
				<MapMaker lat={center.lat} lng={center.lng} />
			</GoogleMapReact>
		</div>
	)
}
