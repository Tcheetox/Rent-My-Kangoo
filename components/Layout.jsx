import React from 'react'

import { Container } from '@mui/material'

export default function Layout({ className, children }) {
	return (
		<Container maxWidth='lgg' className={className} style={{ padding: '5rem 1rem' }}>
			{children}
		</Container>
	)
}
