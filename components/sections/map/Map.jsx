import React, { useState, useEffect, createRef } from 'react'

import GoogleMapReact from 'google-map-react'
import useObserver from '../../hooks/useObserver'
import Marker from './Marker'
import styles from './Map.module.scss'
import header from '../../../lib/nonce.json'
import { useRouter } from 'next/router'

export default function Map() {
    const { locale } = useRouter()
    const containerRef = createRef()
    const [gmapScriptLoaded, setGmapScriptLoaded] = useState(false)
    const { isVisible } = useObserver(containerRef, styles.bg)

    useEffect(() => {
        const scriptTag = document.createElement('script')
        scriptTag.id = 'gmapScript'
        scriptTag.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GMAP_KEY}&language=${locale}`
        scriptTag.nonce = header.nonce
        scriptTag.addEventListener('load', () => setGmapScriptLoaded(true))
        document.body.appendChild(scriptTag)

        // Avoid GoogleMap to download Roboto
        const head = document.getElementsByTagName('head')[0]
        if (head) {
            const insertBefore = head.insertBefore
            head.insertBefore = function (newElement, referenceElement) {
                if (newElement.href && newElement.href.indexOf('//fonts.googleapis.com/css?family=Roboto') > -1) return
                insertBefore.call(head, newElement, referenceElement)
            }
        }
    }, [locale])

    const center = {
        lat: 46.2002,
        lng: 6.128,
    }

    return (
        // Important! Always set the container height explicitly
        <div id="map" ref={containerRef} className={styles.map} style={{ height: '500px', width: '100%' }}>
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
