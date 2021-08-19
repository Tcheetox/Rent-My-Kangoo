import React from 'react'

import cx from 'classNames'

export default function Layout({ className, children }) {
	return (
		<div className={cx('block-layout', className)}>
			<h1>TRUC</h1>
		</div>
	)
}
