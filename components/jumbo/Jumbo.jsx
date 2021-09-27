import React from 'react'

import { useTranslation } from 'next-i18next'
import styles from './Jumbo.module.scss'
import Layout from '../Layout'
import { Button } from '@material-ui/core'
import PickUpIcon from '@material-ui/icons/Room'

export default function Jumbo() {
	const { t } = useTranslation()
	return (
		<Layout className={styles.jumbo}>
			<div className={styles.bg} />
			<div className={styles.presentation}>
				<h1>{t('site_title')}</h1>
				<h2>
					Renault Kangoo —<PickUpIcon /> <a href='#map'>{t('geneva')}</a>
				</h2>
				<p className={styles.info}>
					{t('jumbo.h2-intro')} <br />
					{t('jumbo.h2-cta')}{' '}
					<a className={styles.link} href='https://www.2em.ch/location-voiture/geneve/renault-kangoo-4428' target='_blank' rel='noreferrer'>
						<strong>2EM</strong>
					</a>
					{t('platform')}. <br />
					{t('jumbo.h2-cta2')}
					<strong> 14</strong> CHF!
				</p>
				<div className={styles.ctas}>
					<Button variant='contained' color='primary' onClick={() => (window.location.href = '#availability')}>
						{t('rent-me')}
					</Button>
					<Button variant='contained' color='secondary' onClick={() => (window.location.href = '#how')}>
						{t('learn-more')}
					</Button>
				</div>
			</div>
		</Layout>
	)
}
