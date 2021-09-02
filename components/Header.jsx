import React from 'react'

import styles from '../styles/partials/header.module.scss'
import Logo from '../media/Logo'
import LanguageSelect from './forms/LanguageSelect'
import { AppBar, Toolbar, Container } from '@material-ui/core'

export default function Header() {
	return (
		<AppBar position='relative' className={styles.header} color='transparent'>
			<Container maxWidth='lg'>
				<Toolbar className={styles.bar}>
					<a href='#how'>How it works?</a>
					<a href='#availability'>Availability</a>
					<a className={styles.logo} href='#'>
						<Logo />
					</a>
					<a href='#caracteristics'>Caracteristics</a>
					<div className={styles.right}>
						<a href='#contact'>Contact</a>
						<LanguageSelect />
					</div>
				</Toolbar>
			</Container>
		</AppBar>
	)
}
