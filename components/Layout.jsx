import React from 'react'

import { Container } from '@material-ui/core'

export default function Layout({ className, children }) {
	return (
		<Container maxWidth='lg' className={className} style={{ padding: '5rem 0' }}>
			{children}
		</Container>
	)
}
