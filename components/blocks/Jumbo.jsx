import React from 'react'

import Image from 'next/image'
import styles from '../../styles/blocks/jumbo.module.scss'
import Layout from '../Layout'
import bgImage from '../../media/bg00.jpg'

import { Button } from '@material-ui/core'

export default function Jumbo() {
	return (
		<Layout className={styles.jumbo}>
			<Image alt='Car' src={bgImage} layout='fill' objectFit='cover' quality={100} priority />

			<div className={styles.presentation}>
				<h1>Rent my Kangoo</h1>
				<p>
					Planning a move? Or do you simply need a utility vehicle? <br />
					We easily rent you our vehicle via the{' '}
					<a className={styles.link} href='https://www.2em.ch/location-voiture/geneve/renault-kangoo-4428' target='_blank' rel='noreferrer'>
						<strong>2EM</strong>
					</a>{' '}
					platform.
				</p>
				<div className={styles.ctas}>
					<Button variant='contained' color='primary'>
						Rent me
					</Button>
					<Button variant='contained' color='secondary'>
						Learn more
					</Button>
				</div>
			</div>
		</Layout>
	)
}
