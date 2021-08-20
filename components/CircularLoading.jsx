import React from 'react'

import { CircularProgress } from '@material-ui/core'
import styles from '../styles/atoms/loading.module.scss'
import cx from 'classnames'

export default function CircularLoading({ absolute = true }) {
	return (
		<div className={cx(styles.loading, { absolute: absolute })}>
			<CircularProgress />
		</div>
	)
}
