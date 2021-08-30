import React from 'react'

import styles from '../styles/partials/footer.module.scss'
import invertedLogo from '../media/logo3-nobginv.png'
import Image from 'next/image'
import { Container, Grid } from '@material-ui/core'
import MailOutlineIcon from '@material-ui/icons/MailOutline'

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<Container maxWidth='lg' className={styles.footerContainer}>
				<Grid container spacing={2}>
					<Grid item sm={3}>
						<div className={styles.logoContainer}>
							<a href='#'>
								<Image alt='Logo' src={invertedLogo} />
							</a>
							Rent my Kangoo
						</div>
					</Grid>
					<Grid item sm={3}>
						<h3>2EM</h3>
						<ul>
							<li>
								<a
									href='https://www.2em.ch/a-propos-de-la-location-de-vehicules-de-particulier-a-particulier'
									target='_blank'
									rel='noreferrer'>
									About
								</a>
							</li>
							<li>
								<a href='https://www.2em.ch/location-voiture/geneve/renault-kangoo-4428' target='_blank' rel='noreferrer'>
									Kangoo
								</a>
							</li>
						</ul>
					</Grid>
					<Grid item sm={3}>
						<h3>Links</h3>
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
					</Grid>
					<Grid item sm={3}>
						<h3>Contact</h3>
						<ul>
							<li className={styles.contact}>
								<MailOutlineIcon /> <a href='mailto:kangoo@thekecha.com'>Kangoo@thekecha.com</a>
							</li>
						</ul>
					</Grid>
				</Grid>
				<hr />
				<h4>
					© 2021 Copyright{' '}
					<a href='https://thekecha.com/krenier' target='_blank' rel='noreferrer'>
						TheKecha
					</a>
					. All rights reserved.
				</h4>
			</Container>
		</footer>
	)
}
