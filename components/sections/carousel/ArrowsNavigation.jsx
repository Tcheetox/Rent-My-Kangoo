import React from 'react'

import ArrowLeftIcon from '@mui/icons-material/ArrowLeft'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import styles from './Carousel.module.scss'
import cx from 'classnames'

export default function ArrowsNavigation({ length, setIndex, visible }) {
    if (!visible) return null

    return (
        <>
            <div className={cx(styles.arrow, styles.leftArrow)} onClick={() => setIndex(i => (i == 0 ? length - 1 : i - 1))}>
                <ArrowLeftIcon className={styles.iconArrow} />
            </div>
            <div className={cx(styles.arrow, styles.rightArrow)} onClick={() => setIndex(i => (i == length - 1 ? 0 : i + 1))}>
                <ArrowRightIcon className={styles.iconArrow} />
            </div>
        </>
    )
}
