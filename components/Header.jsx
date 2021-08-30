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
					<a href='#rent'>Rent me</a>
					<a href='#'>
						<Logo />
					</a>
					<a href='#caracteristics'>Caracteristics</a>
					<a href='#contact'>Contact</a>
					<LanguageSelect />
				</Toolbar>
			</Container>
		</AppBar>
	)
}
