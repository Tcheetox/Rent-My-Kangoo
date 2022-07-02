import React, { createRef } from 'react'

import styles from './Carousel.module.scss'
import LazyLoader from '../../hoc/LazyLoader'
import useObserver from '../../hooks/useObserver'
import cx from 'classnames'

export default function CarouselLoader() {
    const containerRef = createRef()
    const { isVisible } = useObserver(containerRef, null, false)

    return (
        <div ref={containerRef}>
            <LazyLoader
                childLoader={() => import('./Carousel')}
                childLoadCondition={isVisible}
                childProps={{
                    items: [styles.p1, styles.p2, styles.p3, styles.p4, styles.p5, styles.p6, styles.p7, styles.p8],
                    interval: 5000,
                }}
                className={cx(styles.carousel, styles.placeholder)}
            />
        </div>
    )
}
