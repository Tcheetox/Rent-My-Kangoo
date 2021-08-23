import React from 'react'

import { Container } from '@material-ui/core'
import styles from '../styles/atoms/layout.module.scss'
import cx from 'classnames'

export default function Layout({ className, children }) {
	return (
		<Container maxWidth='lg' className={cx(className, styles.layout)}>
			{children}
		</Container>
	)
}
