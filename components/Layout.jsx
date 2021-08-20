import React from 'react'

import { Container } from '@material-ui/core'
import cx from 'classnames'

export default function Layout({ className, children }) {
	return (
		<Container maxWidth='md' className={cx('block-layout', className)}>
			{children}
		</Container>
	)
}
