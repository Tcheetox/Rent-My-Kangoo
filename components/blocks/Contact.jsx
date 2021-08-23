import React from 'react'

import Layout from '../Layout'
import { Map, ContactForm } from './'
import styles from '../../styles/blocks/contact.module.scss'
import { Grid, Paper } from '@material-ui/core/'

export default function Contact() {
	return (
		<Layout className={styles.jumbo}>
			<Grid container spacing={2}>
				<Grid item sm={6}>
					<Map />
				</Grid>
				<Grid item sm={6}>
					<ContactForm />
				</Grid>
			</Grid>
		</Layout>
	)
}
