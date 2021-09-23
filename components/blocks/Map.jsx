import React, { useState, useEffect } from 'react'

import GoogleMapReact from 'google-map-react'
import { useTranslation } from 'next-i18next'
import styles from '../../styles/blocks/map.module.scss'
import MapMarker from '@material-ui/icons/Room'
import { Tooltip } from '@material-ui/core'
import Script from 'next/script'
import header from '../../lib/nonce.json'

let _gmapScriptLoaded = false

export default function Map() {
	const [gmapScriptLoaded, setGmapScriptLoaded] = useState(_gmapScriptLoaded)

	// Avoid GoogleMap to download Roboto
	useEffect(() => {
		if (gmapScriptLoaded) {
			// Save the original method then replace it
			const head = document.getElementsByTagName('head')[0]
			if (head) {
				const insertBefore = head.insertBefore
				head.insertBefore = function (newElement, referenceElement) {
					if (newElement.href && newElement.href.indexOf('//fonts.googleapis.com/css?family=Roboto') > -1) return
					insertBefore.call(head, newElement, referenceElement)
				}
			}
		}
	}, [gmapScriptLoaded])

	const MapMaker = () => {
		const { t } = useTranslation()
		return (
			<div className={styles.mapMarker}>
				<Tooltip
					title={
						<a href='https://www.google.com/maps/dir//Quai+des+Arénières,+1205+Genève' target='_blank' rel='noreferrer'>
							Quai des Arénières, 1205 {t('geneva')} - {t('switzerland')}
						</a>
					}
					placement='top'
					arrow
					interactive>
					<MapMarker />
				</Tooltip>
			</div>
		)
	}

	const center = {
		lat: 46.2002,
		lng: 6.128,
	}

	return (
		// Important! Always set the container height explicitly
		<div id='map' className={styles.map} style={{ height: '500px', width: '100%' }}>
			<Script
				nonce={header.nonce}
				id='gmapScript'
				src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GMAP_KEY}`}
				onLoad={() => {
					setGmapScriptLoaded(true)
					_gmapScriptLoaded = true
				}}
				async
			/>
			{!gmapScriptLoaded ? null : (
				<GoogleMapReact
					googleMapLoader={async () => window.google.maps}
					defaultCenter={center}
					defaultZoom={15}
					options={{
						fullscreenControl: false,
						zoomControl: false,
					}}>
					<MapMaker lat={center.lat} lng={center.lng} />
				</GoogleMapReact>
			)}
		</div>
	)
}
