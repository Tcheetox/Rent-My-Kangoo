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
			<Container maxWidth='lg'>
				<Toolbar className={styles.bar}>
					<a href='#how'>{t('how-it-works')}</a>
					<a href='#caracteristics'>{t('caracteristics')}</a>
					<a className={styles.logo} href='#'>
						<Logo />
					</a>
					<a href='#availability'>{t('availability')}</a>
					<div className={styles.right}>
						<a href='#contact'>{t('contact')}</a>
						<MobileMenu />
						<LanguageSelect />
					</div>
				</Toolbar>
			</Container>
		</AppBar>
	)
}
