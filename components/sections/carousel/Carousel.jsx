import React, { useState, useEffect } from 'react'

import BulletsNavigation from './BulletsNavigation'
import ArrowsNavigation from './ArrowsNavigation'
import styles from './Carousel.module.scss'
import cx from 'classnames'

export default function Carousel({ className, interval }) {
    const [index, setIndex] = useState(0)
    const [ready, setReady] = useState(false)
    const items = [styles.p1, styles.p2, styles.p3, styles.p4, styles.p5, styles.p6, styles.p7, styles.p8]

    useEffect(() => {
        const rotation = setInterval(() => setIndex(i => (i + 1 > items.length - 1 ? 0 : i + 1)), [interval])
        return () => clearInterval(rotation)
    }, [interval, items])

    // Minimal wait time ~ hope that the browser is mostly done download picture
    useEffect(() => {
        const timeout = setTimeout(() => setReady(true), [200])
        return () => clearTimeout(timeout)
    }, [])

    return (
        <div className={cx(className, !ready ? 'placeholder' : null)}>
            <ArrowsNavigation length={items.length} setIndex={setIndex} visible={ready} />
            <BulletsNavigation length={items.length} index={index} setIndex={setIndex} visible={ready} />
            {items.map((picture, k) => (
                <div key={k} className={cx(styles.parallax, picture, k !== index || !ready ? styles.inactiveParallax : null)} />
            ))}
        </div>
    )
}
