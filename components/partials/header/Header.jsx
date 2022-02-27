import React from 'react'

import styles from './styles/Header.module.scss'
import Logo from '../../atoms/logo/Logo'
import LanguageSelect from './LanguageSelect'
import MobileMenu from './MobileMenu'
import { useTranslation } from 'next-i18next'
import { AppBar, Toolbar, Container } from '@mui/material'

export default function Header() {
    const { t } = useTranslation()
    return (
        <AppBar position="relative" className={styles.header} color="transparent">
            <Container maxWidth={'lgg'} style={{ padding: '0 1rem' }}>
                <Toolbar className={styles.bar}>
                    <a className={styles.link} href="#how" aria-label={t('how-it-works')}>
                        {t('how-it-works')}
                    </a>
                    <a className={styles.link} href="#caracteristics" aria-label={t('caracteristics')}>
                        {t('caracteristics')}
                    </a>
                    <a className={styles.logo} href="#" aria-label={t('home')}>
                        <Logo />
                    </a>
                    <a className={styles.link} href="#availability" aria-label={t('availability')}>
                        {t('availability')}
                    </a>
                    <div className={styles.right}>
                        <a className={styles.link} href="#contact" aria-label={t('contact')}>
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
