import React from 'react'

import styles from '../styles/partials/footer.module.scss'
import invertedLogo from '../media/logo-nobginv.png'
import Image from 'next/image'
import { Container, Grid } from '@material-ui/core'
import MailOutlineIcon from '@material-ui/icons/MailOutline'

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<Container maxWidth='lg' className={styles.footerContainer}>
				<Grid container spacing={2} className={styles.linksContainer}>
					<Grid item md={3} sm={6} xs={12} className={styles.block}>
						<div className={styles.logoContainer}>
							<a href='#'>
								<Image alt='Logo' src={invertedLogo} />
							</a>
							Rent my Kangoo
						</div>
					</Grid>
					<Grid item md={3} sm={6} xs={12} className={styles.block}>
						<div>
							<label>2EM</label>
							<ul>
								<li>
									<a href='https://www.2em.ch/location-voiture/geneve/renault-kangoo-4428' target='_blank' rel='noreferrer'>
										Kangoo
									</a>
								</li>
								<li>
									<a
										href='https://www.2em.ch/a-propos-de-la-location-de-vehicules-de-particulier-a-particulier'
										target='_blank'
										rel='noreferrer'>
										About
									</a>
								</li>
								<li>
									<a href='https://www.2em.ch/politique-de-confidentialite' target='_blank' rel='noreferrer'>
										Privacy
									</a>
								</li>
							</ul>
						</div>
					</Grid>
					<Grid item md={3} sm={6} xs={12} className={styles.block}>
						<div>
							<label>Links</label>
							<ul>
								<li>
									<a href='https://www.2em.ch/aide-locataire' target='_blank' rel='noreferrer'>
										Tenant help
									</a>
								</li>
								<li>
									<a href='https://www.2em.ch/assurance-location-vehicule-particulier-baloise' target='_blank' rel='noreferrer'>
										Tenant insurance
									</a>
								</li>
								<li>
									<a href='https://www.2em.ch/assistance-depannage-location-vehicule-particulier-baloise' target='_blank' rel='noreferrer'>
										Roadside assistance
									</a>
								</li>
								<li>
									<a href='https://www.2em.ch/comment-ca-marche/contrat-de-location' target='_blank' rel='noreferrer'>
										Rental agreement
									</a>
								</li>
							</ul>
						</div>
					</Grid>
					<Grid item md={3} sm={6} xs={12} className={styles.block}>
						<div className={styles.contactBlock}>
							<label>Contact</label>
							<ul>
								<li className={styles.contact}>
									<MailOutlineIcon /> <a href='mailto:kangoo@thekecha.com'>Kangoo@thekecha.com</a>
								</li>
							</ul>
						</div>
					</Grid>
				</Grid>
				<hr />
				<p>
					© 2021 Copyright{' '}
					<a href='https://thekecha.com/krenier' target='_blank' rel='noreferrer'>
						TheKecha
					</a>
					. All rights reserved.
				</p>
			</Container>
		</footer>
	)
}
