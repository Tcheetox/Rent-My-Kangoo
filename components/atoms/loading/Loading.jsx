import React from 'react'

import { CircularProgress } from '@mui/material'
import styles from './Loading.module.scss'
import cx from 'classnames'

export default function Loading({ className = '', absolute = true }) {
    return (
        <div className={cx(absolute ? styles.absoluteLoading : styles.relativeLoading, className)}>
            <CircularProgress />
        </div>
    )
}
