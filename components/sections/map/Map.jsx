import React, { useState, useEffect, createRef } from 'react'

import GoogleMapReact from 'google-map-react'
import useObserver from '../../hooks/useObserver'
import Marker from './Marker'
import styles from './Map.module.scss'
import Script from 'next/script'
import header from '../../../lib/nonce.json'

let _gmapScriptLoaded = false

export default function Map() {
    const containerRef = createRef()
    const [gmapScriptLoaded, setGmapScriptLoaded] = useState(_gmapScriptLoaded)
    const { isVisible } = useObserver(containerRef, styles.bg)

    // Avoid GoogleMap to download Roboto
    useEffect(() => {
        if (gmapScriptLoaded) {
            // Save the original method then replace it
            const head = document.getElementsByTagName('head')[0]
            if (head) {
                const insertBefore = head.insertBefore
                head.insertBefore = function (newElement, referenceElement) {
                    if (newElement.href && newElement.href.indexOf('//fonts.googleapis.com/css?family=Roboto') > -1)
                        return
                    insertBefore.call(head, newElement, referenceElement)
                }
            }
        }
    }, [gmapScriptLoaded])

    const center = {
        lat: 46.2002,
        lng: 6.128,
    }

    return (
        // Important! Always set the container height explicitly
        <div id="map" ref={containerRef} className={styles.map} style={{ height: '500px', width: '100%' }}>
            <Script
                nonce={header.nonce}
                id="gmapScript"
                src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GMAP_KEY}`}
                onLoad={() => {
                    setGmapScriptLoaded(true)
                    _gmapScriptLoaded = true
                }}
                async
            />
            {!gmapScriptLoaded || !isVisible ? null : (
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
            )}
        </div>
    )
}
