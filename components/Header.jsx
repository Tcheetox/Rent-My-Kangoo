import React from 'react'

import styles from '../styles/partials/header.module.scss'
import Logo from '../media/Logo'
import { AppBar, Toolbar, Container } from '@material-ui/core'

export default function Header() {
	return (
		<AppBar position='relative' className={styles.header} color='transparent'>
			<Container maxWidth='lg'>
				<Toolbar className={styles.bar}>
					<a href='#How'>How it works?</a>
					<a href='#Rent'>Rent me</a>
					<a href='#'>
						<Logo />
					</a>
					<a href='#Caracteristics'>Caracteristics</a>
					<a href='#Contact'>Contact</a>
				</Toolbar>
			</Container>
		</AppBar>
	)
}
