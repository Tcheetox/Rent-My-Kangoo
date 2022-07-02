import React, { useState, useEffect } from 'react'

import BulletsNavigation from './BulletsNavigation'
import ArrowsNavigation from './ArrowsNavigation'
import styles from './Carousel.module.scss'
import cx from 'classnames'

export default function Carousel({ className, interval, items = [] }) {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        if (!items || items.length === 0) return

        const rotation = setInterval(() => setIndex(i => (i + 1 > items.length - 1 ? 0 : i + 1)), [interval])
        return () => clearInterval(rotation)
    }, [interval, items])

    return (
        <div className={cx(className)}>
            <ArrowsNavigation length={items.length} setIndex={setIndex} />
            <BulletsNavigation length={items.length} index={index} setIndex={setIndex} />
            <div className={cx(styles.parallax, items[index])} />
        </div>
    )
}
