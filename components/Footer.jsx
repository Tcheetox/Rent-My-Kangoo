import React from 'react'

import styles from '../styles/partials/footer.module.scss'
import Logo from '../media/Logo'
import { Container, Grid } from '@material-ui/core'

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<Container maxWidth='lg' className={styles.footerContainer}>
				<Grid container spacing={2}>
					<Grid item sm={3}>
						<Logo />
					</Grid>
					<Grid item sm={3}>
						<h2>2EM</h2>
						<ul>
							<li>
								<a href='https://www.2em.ch/location-voiture/geneve/renault-kangoo-4428' target='_blank' rel='noreferrer'>
									Kangoo
								</a>
							</li>
						</ul>
					</Grid>
					<Grid item sm={3}>
						<h2>Links</h2>
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
						<h2>Contact</h2>
						<ul>
							<li></li>
						</ul>
					</Grid>
				</Grid>
				<hr />
				<h5>
					© 2021 Copyright{' '}
					<a href='https://thekecha.com/krenier' target='_blank' rel='noreferrer'>
						TheKecha
					</a>
					. All rights reserved.
				</h5>
			</Container>
		</footer>
	)
}
