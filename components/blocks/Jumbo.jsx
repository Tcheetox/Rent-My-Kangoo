import React from 'react'

import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import styles from '../../styles/blocks/jumbo.module.scss'
import Layout from '../Layout'
import { Button } from '@material-ui/core'
import bgImage from '../../media/bg00.jpg'

export default function Jumbo() {
	const { t } = useTranslation()
	return (
		<Layout className={styles.jumbo}>
			<Image alt='Car' src={bgImage} layout='fill' objectFit='cover' quality={100} priority />

			<div className={styles.presentation}>
				<h1>{t('site_title')}</h1>
				<p>
					Planning a move? Or do you simply need a utility vehicle? <br />
					We easily rent you our vehicle via{' '}
					<a className={styles.link} href='https://www.2em.ch/location-voiture/geneve/renault-kangoo-4428' target='_blank' rel='noreferrer'>
						<strong>2EM</strong>
					</a>{' '}
					platform.
				</p>
				<div className={styles.ctas}>
					<Button variant='contained' color='primary' onClick={() => (window.location.href = '#Rent')}>
						Rent me
					</Button>
					<Button variant='contained' color='secondary' onClick={() => (window.location.href = '#How')}>
						Learn more
					</Button>
				</div>
			</div>
		</Layout>
	)
}
