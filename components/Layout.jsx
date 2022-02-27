import React from 'react'

import { Container } from '@mui/material'

export default function Layout({ className, children, forwardRef = null }) {
    return (
        <Container ref={forwardRef} maxWidth="lgg" className={className} style={{ padding: '5rem 1rem' }}>
            {children}
        </Container>
    )
}
