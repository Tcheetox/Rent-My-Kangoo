import React from 'react'

import styles from '../styles/partials/header.module.scss'
import Logo from '../media/Logo'
import { AppBar, Toolbar, Container } from '@material-ui/core'

export default function Header() {
	return (
		<div className={styles.header}>
			<AppBar position='static'>
				<Container maxWidth='md'>
					<Toolbar className={styles.bar}>
						<a href='#how'>How it works?</a>
						<a href='#rent'>Rent me</a>
						<Logo />
						<a href='#caracteristics'>Caracteristics</a>
						<a href='#contact'>Contact</a> EN
					</Toolbar>
				</Container>
			</AppBar>
		</div>
	)
}
