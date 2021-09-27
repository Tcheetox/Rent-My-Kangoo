import React from 'react'

import styles from './styles/Header.module.scss'
import Logo from '../logo/Logo'
import LanguageSelect from './LanguageSelect'
import MobileMenu from './MobileMenu'
import { useTranslation } from 'next-i18next'
import { AppBar, Toolbar, Container } from '@material-ui/core'

export default function Header() {
	const { t } = useTranslation()
	return (
		<AppBar position='relative' className={styles.header} color='transparent'>
			<Container maxWidth='lg' style={{ padding: '0 1rem' }}>
				<Toolbar className={styles.bar}>
					<a className={styles.link} href='#how'>
						{t('how-it-works')}
					</a>
					<a className={styles.link} href='#caracteristics'>
						{t('caracteristics')}
					</a>
					<a className={styles.logo} href='#'>
						<Logo />
					</a>
					<a className={styles.link} href='#availability'>
						{t('availability')}
					</a>
					<div className={styles.right}>
						<a className={styles.link} href='#contact'>
							{t('contact')}
						</a>
						<MobileMenu />
						<LanguageSelect />
					</div>
				</Toolbar>
			</Container>
		</AppBar>
	)
}
