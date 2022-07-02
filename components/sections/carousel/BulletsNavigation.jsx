import React from 'react'

import styles from './Carousel.module.scss'
import cx from 'classnames'

export default function BulletsNavigation({ length, index, setIndex }) {
    return (
        <div className={styles.bulletsHolder}>
            {[...Array(length).keys()].map((i, k) => (
                <div
                    key={k}
                    className={cx(styles.bullet, index === i ? styles.activeBullet : styles.inactiveBullet)}
                    onClick={() => setIndex(i)}
                />
            ))}
        </div>
    )
}
