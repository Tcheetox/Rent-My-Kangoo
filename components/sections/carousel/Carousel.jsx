import React, { createRef } from 'react'

import styles from './Carousel.module.scss'
import MuiCarousel from 'react-material-ui-carousel'
import cx from 'classnames'
import useObserver from '../../hooks/useObserver'

export default function Carousel() {
    const containerRef = createRef()
    const { isVisible } = useObserver(containerRef, null, false)

    return (
        <div ref={containerRef}>
            <MuiCarousel
                className={styles.carousel}
                interval={5000}
                navButtonsAlwaysVisible={true}
                stopAutoPlayOnHover={false}
                timeout={300}
                indicatorContainerProps={{
                    style: {
                        zIndex: 1,
                        position: 'absolute',
                        bottom: '10px',
                    },
                }}
                indicatorIconButtonProps={{
                    style: {
                        padding: '1px',
                        color: 'gray',
                    },
                }}
                activeIndicatorIconButtonProps={{
                    style: {
                        color: 'white',
                    },
                }}
                navButtonsWrapperProps={{
                    style: {
                        margin: 'auto 3rem',
                    },
                }}
            >
                {[...Array(8)].map((_, k) => (
                    <div key={k} className={cx(styles.parallax, isVisible ? styles[`p${k + 1}`] : styles.p1)} />
                ))}
            </MuiCarousel>
        </div>
    )
}
