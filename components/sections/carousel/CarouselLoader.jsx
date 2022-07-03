import React, { createRef } from 'react'

import styles from './Carousel.module.scss'
import LazyLoader from '../../hoc/LazyLoader'
import useObserver from '../../hooks/useObserver'
import cx from 'classnames'

export default function CarouselLoader() {
    const containerRef = createRef()
    const { isVisible } = useObserver(containerRef, null, true)

    return (
        <div ref={containerRef}>
            <LazyLoader
                childLoader={() => import('./Carousel')}
                childLoadCondition={isVisible}
                childProps={{
                    interval: 5000,
                }}
                className={cx(styles.carousel, styles.placeholder)}
            />
        </div>
    )
}
