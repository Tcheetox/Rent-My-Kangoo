import React from 'react'

import { useTranslation } from 'next-i18next'
import styles from './Footer.module.scss'
import invertedLogo from '../../../media/logo-nobginv-200x144.png'
import Image from 'next/image'
import { Container, Grid } from '@mui/material'
import use2EM from '../../hooks/use2EM'
import MailOutlineIcon from '@mui/icons-material/MailOutline'

export default function Footer() {
    const { t } = useTranslation()
    const currentYear = new Date().getFullYear()

    return (
        <footer className={styles.footer}>
            <Container maxWidth="lgg" className={styles.footerContainer}>
                <Grid container spacing={2} className={styles.linksContainer}>
                    <Grid item md={3} sm={6} xs={12} className={styles.block}>
                        <div className={styles.logoContainer}>
                            <a href="#">
                                <Image alt="Logo" src={invertedLogo} layout="fixed" width={100} height={72} />
                            </a>
                            <span className={styles.title}>{t('site_title')}</span>
                        </div>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12} className={styles.block}>
                        <div>
                            <label>2EM</label>
                            <ul>
                                <li>
                                    <a
                                        href="https://www.2em.ch/location-voiture/geneve/renault-kangoo-4428"
                                        target="_blank"
                                        rel="noreferrer"
                                        onClick={use2EM('Regular link')}
                                    >
                                        Kangoo
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.2em.ch/a-propos-de-la-location-de-vehicules-de-particulier-a-particulier"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {t('about')}
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.2em.ch/politique-de-confidentialite" target="_blank" rel="noreferrer">
                                        {t('privacy')}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12} className={styles.block}>
                        <div>
                            <label>{t('links')}</label>
                            <ul>
                                <li>
                                    <a href="https://www.2em.ch/aide-locataire" target="_blank" rel="noreferrer">
                                        {t('footer.a-tenant-help')}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.2em.ch/assurance-location-vehicule-particulier-baloise"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {t('footer.a-tenant-insurance')}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.2em.ch/assistance-depannage-location-vehicule-particulier-baloise"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {t('footer.a-roadside-assistance')}
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.2em.ch/comment-ca-marche/contrat-de-location" target="_blank" rel="noreferrer">
                                        {t('footer.a-rental-agreement')}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12} className={styles.block}>
                        <div className={styles.contactBlock}>
                            <label>{t('contact')}</label>
                            <ul>
                                <li className={styles.contact}>
                                    <MailOutlineIcon /> <a href="mailto:kangoo@thekecha.com">Kangoo@thekecha.com</a>
                                </li>
                            </ul>
                        </div>
                    </Grid>
                </Grid>
                <hr />
                <p>
                    © {currentYear} Copyright{' '}
                    <a href="https://thekecha.com" target="_blank" rel="noreferrer">
                        TheKecha
                    </a>
                    . {t('footer.p-copyright')}.
                </p>
            </Container>
        </footer>
    )
}
