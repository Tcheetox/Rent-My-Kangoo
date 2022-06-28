import React, { useState, useEffect, createRef } from 'react'

import { useRouter } from 'next/router'
import useObserver from '../../hooks/useObserver'
import styles from './Map.module.scss'
import header from '../../../lib/nonce.json'
import LazyLoader from '../../hoc/LazyLoader'

export default function MapLoader() {
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

        // Prevent GoogleMap to download Roboto
        const head = document.getElementsByTagName('head')[0]
        if (head) {
            const insertBefore = head.insertBefore
            head.insertBefore = function (newElement, referenceElement) {
                if (newElement.href && newElement.href.indexOf('//fonts.googleapis.com/css?family=Roboto') > -1) return
                insertBefore.call(head, newElement, referenceElement)
            }
        }
    }, [locale])

    return (
        // Important! Always set the container height explicitly
        <div id="map" ref={containerRef} className={styles.map} style={{ height: '500px', width: '100%' }}>
            <LazyLoader
                childLoader={() => import('./Map')}
                childLoadCondition={gmapScriptLoaded && isVisible}
                className={styles.mapPlaceholder}
            />
        </div>
    )
}
